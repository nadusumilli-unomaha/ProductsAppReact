import axios from "axios";

// Action types for the redux store management.
const GET_PRODUCTS = "GET_PRODUCTS";
const GET_PRODUCT = "GET_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const CREATE_PRODUCT = "CREATE_PRODUCT";

// Endpoints related to the Products management.
const product_endpoint = "http://localhost:8000/api/products/";

/**
 * sends a request to the backend to fetch
 * data and dispatch to the store.
 * @function getProducts
 * @param {None}
 * @returns {None}
 */
const getProducts = () => async dispatch => {
    const res = await axios.get(product_endpoint);
    dispatch({ type: GET_PRODUCTS, payload: res });
};

/**
 * sends a request to the backend to fetch
 * on product and dispatch to the store.
 * @function getOneProduct
 * @param {None}
 * @returns {None}
 */
const getOneProduct = request_data => async dispatch => {
    let res = await axios.get(product_endpoint + request_data.id + "/");
    dispatch({ type: GET_PRODUCT, payload: res });
};

/**
 * sends a request to the backend to create
 * a product and dispatch to the store.
 * @function createProduct
 * @param {None}
 * @returns {None}
 */
const createProduct = request_data => async dispatch => {
    let res = await axios.post(product_endpoint);
    dispatch({ type: CREATE_PRODUCT, payload: res });
};

/**
 * sends a request to the backend to update
 * a product and dispatch to the store.
 * @function updateProduct
 * @param {None}
 * @returns {None}
 */
const updateProduct = request_data => async dispatch => {
    let res = await axios.put(product_endpoint);
    dispatch({ type: UPDATE_PRODUCT, payload: res });
};

/**
 * sends a request to the backend to delete
 * a product and dispatch to the store.
 * @function deleteProduct
 * @param {None}
 * @returns {None}
 */
const deleteProduct = request_data => async dispatch => {
    let res = await axios.delete(product_endpoint + request_data.id + "/");
    dispatch({ type: DELETE_PRODUCT, payload: res });
};

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
};
