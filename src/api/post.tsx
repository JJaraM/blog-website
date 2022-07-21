/*
 * Copyright (c) Jonathan Jara Morales
 * @since 1.0
 */

/*
 * Link that connect with the post microservice
 */
const host = 'https://blog-microservice-api-gateway.herokuapp.com';
// const host = 'http://localhost:5001';

/*
 * EndPoints
 */
export default {

    /*
     * Find the last posts
     */
    findLast: host + '/post/find/all/',

    /*
     * Find a post by id
     */
    findById: host + '/post/',

    /*
     * Saves a post information
     */
    put: host + '/post/',

    /*
     * Find a post
     */
    find: host + '/post/find/all/'
}
