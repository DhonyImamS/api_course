const postmanSaya = require('supertest');
const serverAPI = postmanSaya('http://localhost:1234/v1');

// return Promise DRY 
function getUserByName(name) {
    return serverAPI.get(`/users?name=${name}`)
    .set('Authorization', 'Hahahahaha')
    .set('Content-Type', 'application/json');
}

function postUserCreate(payload) {
    return serverAPI.post('/users')
    .set('Authorization', 'Hahahahaha')
    .set('Content-Type', 'application/json').send(
        payload
    );
}

module.exports = {
    getUserByName,
    postUserCreate
}