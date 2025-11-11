import { handleResponse, handleError } from './helpers.js';

/**
 * Creates a new resource by sending a POST request to the specified API route.
 * @param {*} apiRoute The route to the API. 
 * @param {*} obj An object with the fields needed to create the resource.
 * @returns A JSON object representing the created resource. 
 * @throws An error if the request fails or the response cannot be parsed as JSON.
 */
const create = async (apiRoute, obj) => {
    try {
        const res = await fetch(apiRoute, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(obj)
        })

        return await handleResponse(res)
    }
    catch (err) {
        return handleError(err)
    } 
}

/**
 * Retrieves a list of resources from the specified API route by sending a GET request.
 * @param {*} apiRoute The route to the API. 
 * @param {*} signal An AbortSignal to cancel the request if needed.
 * @returns A list of resources in JSON format.
 * @throws An error if the request fails.
 */
const list = async (apiRoute, signal) => {
    try {
        const res = await fetch(apiRoute, {
            method: 'GET',
            signal: signal
        }); 

        return await handleResponse(res);
    }
    catch (err) {
        return handleError(err);
    }
}

/**
 * Retrieves a specific resource by its ID from the specified API route by sending a GET request.
 * @param {*} apiRoute The route to the API. 
 * @param {*} credentials An object with authentication credential fields.
 * @param {*} id The ID of the resource to retrieve.
 * @param {*} signal An AbortSignal to cancel the request if needed.
 * @returns A JSON object representing the requested resource.
 * @throws An error if the request fails.
 */
const read = async (apiRoute, credentials, id, signal) => {
    try {
        const res = await fetch(`${apiRoute}${id}`, {
            method: 'GET',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${credentials.t}`
            } 
        })

        return await handleResponse(res);
    }
    catch (err) {
        return handleError(err);
    }
}

/**
 * Deletes a specific resource by its ID from the specified API route by sending a DELETE request.
 * @param {*} apiRoute The route to the API. 
 * @param {*} credentials An object with authentication credential fields.
 * @param {*} id The ID of the resource to delete.
 * @returns A JSON object representing the deleted resource.
 * @throws An error if the request fails.
 */
const remove = async (apiRoute, credentials, id) => {
    try {
        const res = await fetch(`${apiRoute}${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${credentials.t}`
            }
        }) 

        return await handleResponse(res)
    }
    catch (err) {
        return handleError(err)
    }
}

/**
 * Updates a specified resource by its ID at the specified API route by sending a PUT request.
 * @param {*} credentials An object with authentication credential fields.
 * @param {*} id The ID of the resource to update.
 * @param {*} obj An object with the updated fields for the resource.
 * @returns The updated resource in JSON format.
 * @throws An error if the request fails.
 */
const update = async (apiRoute, credentials, id, obj) => {
    try {
        const res = await fetch(`${apiRoute}${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${credentials.t}`
            }, 
            body: JSON.stringify(obj)
        })

        return await handleResponse(res)
    }
    catch (err) {
        return handleError(err)
    }
}

export { create, list, read, remove, update }  