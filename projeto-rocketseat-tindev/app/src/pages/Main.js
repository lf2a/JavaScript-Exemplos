import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import api from '../services/api';
import logo from '../assets/logo.png';
import like from '../assets/like.png';
import dislike from '../assets/dislike.png';
import itsamatch from '../assets/itsamatch.png';

export default function Main({ navigation }) {

    const id = navigation.getParam('user');
    const [users, setUsers] = useState([]);
    const [matchDev, setMatchDev] = useState(null);

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/dev', {
                headers: {
                    user: id,
                }
            })
            setUsers(response.data);
        }
        loadUsers();
    }, [id]);

    useEffect(() => {
        const socket = io('http://localhost:3333', {
            query: { user: id }
        });

        socket.on('match', dev => {
            setMatchDev(dev);
        });
    }, [id]);

    async function handleLike() {
        const [user, ...rest] = users;
        await api.post(`/dev/${user._id}/likes`, null, {
            headers: { user: id },
        })
        setUsers(rest)
    }

    async function handleDislike() {
        const [user, ...rest] = users;
        await api.post(`/dev/${user._id}/dislikes`, null, {
            headers: { user: id },
        })
        setUsers(rest)
    }

    async function handleLogout() {
        await AsyncStorage.clear();
        navigation.navigate('Login');
    }

    return (
        <SafeAreaView style={style.container}>
            <TouchableOpacity onPress={handleLogout}>
                <Image style={style.logo} source={logo} />
            </TouchableOpacity>
            <View style={style.cardsContainer}>
                {users.length === 0 ? <Text style={style.empty}>Acabou :(</Text> : (
                    users.map((user, index) => (
                        <View key={user._id} style={[style.card, { zIndex: users.length - index }]}>
                            <Image style={style.avatar} source={{ uri: user.avatar }} />
                            <View style={style.footer}>
                                <Text style={style.name}>{user.name}</Text>
                                <Text style={style.bio} numberOfLines={3}>{user.bio}</Text>
                            </View>
                        </View>
                    ))
                )}
            </View>

            {users.length > 0 && (
                <View style={style.buttonsContainer}>
                    <TouchableOpacity style={style.button} onPress={handleDislike}>
                        <Image source={dislike} />
                    </TouchableOpacity>

                    <TouchableOpacity style={style.button} onPress={handleLike}>
                        <Image source={like} />
                    </TouchableOpacity>
                </View>
            )}
            {matchDev && (
                <View style={style.matchContainer}>
                    <Image style={style.matchImage} source={itsamatch} />
                    <Image style={style.matchAvatar} source={{ uri: matchDev.avatar }} />
                    <Text style={style.matchName}>{matchDev.name}</Text>
                    <Text style={style.matchBio}>{matchDev.bio}</Text>
                    <TouchableOpacity onPress={() => { setMatchDev(null) }}>
                        <Text style={style.closeMatch}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            )}

        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        marginTop: 30,
    },
    empty: {
        alignSelf: 'center',
        color: '#999',
        fontSize: 24,
        fontWeight: 'bold',
    },
    cardsContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        maxHeight: 500,
    },
    card: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        margin: 30,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    avatar: {
        flex: 1,
        height: 300,
    },
    footer: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    bio: {
        fontSize: 14,
        color: '#999',
        marginTop: 5,
        lineHeight: 18,
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        },
    },
    matchContainer: {
        // ...StyleSheet.absoluteFillObject,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    matchimage: {
        height: 60,
        resizeMode: 'contain',
    },
    matchAvatar: {
        width: 160,
        height: 160,
        borderRadius: 80,
        borderWidth: 5,
        borderColor: '#fff',
        marginVertical: 30,
    },
    matchName: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
    },
    matchBio: {
        marginTop: 10,
        fontSize: 16,
        color: 'rgba(255,255,255,0.8)',
        lineHeight: 24,
        textAlign: 'center',
        paddingHorizontal: 30,
    },
    closeMatch: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.8)',
        textAlign: 'center',
        marginTop: 30,
        fontWeight: 'bold',
    },
});