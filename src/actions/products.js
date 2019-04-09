import axios from 'axios'

// Action types for the redux store management.
const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_PRODUCT = 'GET_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const CREATE_PRODUCT = 'CREATE_PRODUCT'

// Endpoints related to the Products management.
const productEndpoint = 'http://localhost:8000/api/products/'

/**
 * sends a request to the backend to fetch
 * data and dispatch to the store.
 * @function getProducts
 * @param {None}
 * @returns {None}
 */
const getProducts = () => async dispatch => {
    const res = await axios.get(productEndpoint)
    dispatch({ type: GET_PRODUCTS, payload: res })
}

/**
 * sends a request to the backend to fetch
 * on product and dispatch to the store.
 * @function getOneProduct
 * @param {None}
 * @returns {None}
 */
const getOneProduct = requestData => async dispatch => {
    let res = await axios.get(productEndpoint + requestData.id + '/')
    dispatch({ type: GET_PRODUCT, payload: res })
}

/**
 * sends a request to the backend to create
 * a product and dispatch to the store.
 * @function createProduct
 * @param {None}
 * @returns {None}
 */
const createProduct = requestData => async dispatch => {
    let res = await axios.post(productEndpoint)
    dispatch({ type: CREATE_PRODUCT, payload: res })
}

/**
 * sends a request to the backend to update
 * a product and dispatch to the store.
 * @function updateProduct
 * @param {None}
 * @returns {None}
 */
const updateProduct = requestData => async dispatch => {
    let res = await axios.put(productEndpoint)
    dispatch({ type: UPDATE_PRODUCT, payload: res })
}

/**
 * sends a request to the backend to delete
 * a product and dispatch to the store.
 * @function deleteProduct
 * @param {None}
 * @returns {None}
 */
const deleteProduct = requestData => async dispatch => {
    let res = await axios.delete(productEndpoint + requestData.id + '/')
    dispatch({ type: DELETE_PRODUCT, payload: res })
}

// Exporting the specialized functions and some action types.
export {
    GET_PRODUCT,
    GET_PRODUCTS,
    CREATE_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    updateProduct,
    createProduct,
    getProducts,
    deleteProduct,
    getOneProduct
}
