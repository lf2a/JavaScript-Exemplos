import React, { useState, useMemo } from 'react';
import api from '../../services/api';
import './style.css';
import camera from '../../assets/camera.svg';

export default function New({ history }) {
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail])

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();
    data.append('company', company);
    data.append('techs', techs);
    data.append('price', price);
    data.append('thumbnail', thumbnail);

    const user_id = localStorage.getItem('user');

    await api.post('/spots', data, {
      headers: { user_id },
    });

    history.push('/dashboard');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label id="thumbnail" style={{ backgroundImage: `url('${preview}')` }} className={thumbnail ? 'has-thumbnail' : ''}>
        <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
        <img src={camera} alt="camera" />
      </label>

      <label htmlFor="company">Empresa *</label>
      <input id="company" value={company} onChange={event => setCompany(event.target.value)} placeholder="Sua empresa" />

      <label htmlFor="techs">Tecnologias * <span>(separadas por virgula)</span></label>
      <input id="techs" value={techs} onChange={event => setTechs(event.target.value)} placeholder="Quais tecnologias usam" />

      <label htmlFor="price">Preco</label>
      <input id="price" value={price} onChange={event => setPrice(event.target.value)} placeholder="Qual o valor da diaria" />
      <button type="submit" className="btn">Cadastrar</button>
    </form>
  )
};