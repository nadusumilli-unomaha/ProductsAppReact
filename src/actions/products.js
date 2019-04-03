import axios from "axios";

// Action types for the redux store management.
const GET_PRODUCTS = "GET_PRODUCTS";
const GET_PRODUCT = "GET_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const CREATE_PRODUCT = "CREATE_PRODUCT";

// Endpoints related to the Products management.
const product_endpoint = "http://localhost:8000/api/products/";

/** Function: getProducts
 *  Arguments:
 *      - request_data: The data required to fetch all products.
 *  Defenition:
 *      Calls the productRequests function above with the get method
 *      and the session url preset.
 *  Returns: None
 **/
const getProducts = () => async dispatch => {
    const res = await axios.get(product_endpoint);
    dispatch({ type: GET_PRODUCTS, payload: res });
};

/** Function: getProducts
 *  Arguments:
 *      - request_data: The data required to fetch all products.
 *  Defenition:
 *      Calls the productRequests function above with the get method
 *      and the session url preset.
 *  Returns: None
 **/
const getOneProduct = request_data => async dispatch => {
    let res = await axios.get(product_endpoint + request_data.id + "/");
    dispatch({ type: GET_PRODUCT, payload: res });
};

/** Function: createProduct
 *  Arguments:
 *      - request_data: The data to create a product.
 *  Defenition:
 *      Calls the productRequests function above with the post method
 *      and the register url preset.
 *  Returns: None
 **/
const createProduct = request_data => async dispatch => {
    let res = await axios.post(product_endpoint);
    dispatch({ type: CREATE_PRODUCT, payload: res });
};

/** Specialized Function: updateProduct
 *  Arguments:
 *      - request_data: The data to update a product.
 *  Defenition:
 *      Calls the productRequests function above with the put method
 *      and the profile url preset to update the profile.
 *  Returns: None
 **/
const updateProduct = request_data => async dispatch => {
    let res = await axios.put(product_endpoint);
    dispatch({ type: UPDATE_PRODUCT, payload: res });
};

/** Function: deleteProduct
 *  Arguments:
 *      - request_data: The data to delete a product.
 *  Defenition:
 *      Calls the productRequests function above with the delete
 *      method and the session url preset.
 *  Returns: None
 **/
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
