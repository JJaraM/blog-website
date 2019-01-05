const host = 'https://blog-microservice-tag.herokuapp.com';
// const host = 'http://localhost:5003';

export default {
    findAll: host + '/tag/all',
    byIds: host + '/tag/byIds?ids='
}
