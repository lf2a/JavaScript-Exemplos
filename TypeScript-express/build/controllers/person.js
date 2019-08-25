"use strict";
const person = {
    Get(req, res) {
        const headers = req.headers;
        const body = req.body;
        const query = req.query;
        res.json({
            headers,
            body,
            query
        });
    },
    Post(req, res) {
        const headers = req.headers;
        const body = req.body;
        const query = req.query;
        res.json({
            headers,
            body,
            query
        });
    },
    Put(req, res) {
        const headers = req.headers;
        const body = req.body;
        const query = req.query;
        res.json({
            headers,
            body,
            query
        });
    },
    Delete(req, res) {
        const headers = req.headers;
        const body = req.body;
        const query = req.query;
        res.json({
            headers,
            body,
            query
        });
    }
};
module.exports = person;
