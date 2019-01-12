/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */

/*
 * Link that connect with the blog microservice
 */
const host = 'https://blog-microservice-tag.herokuapp.com'; // const host = 'http://localhost:5003';

/*
 * EndPoints
 */
export default {
    findAll: host + '/tag/all',
    byIds: host + '/tag/byIds?ids='
}
