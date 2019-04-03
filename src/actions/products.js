import axios from "axios";

// Action types for the redux store management.
const REQUEST_SUCCESS = "REQUEST_SUCCESS";
const REQUEST_ERROR = "REQUEST_ERROR";
const REQUEST_LOADING = "REQUEST_LOADING";

// Endpoints related to the Products management.
const product_endpoint = "http://localhost:8000/api/products/";

// Request methods to create server requests.
const HTTP_POST = "post";
const HTTP_GET = "get";
const HTTP_DELETE = "delete";
const HTTP_PUT = "put";

/** Function: productRequests
 *  Arguments:
 *      - request_data: the data to be sent with the request.
 *      - request_url: The url to send the request to.
 *      - request_method: The method to use to send the request.
 *  Defenition:
 *      Sends a request to the backend to perform actions on
 *      products data.
 *  Returns: None
 **/
const productRequests = (
    request_data,
    request_url,
    request_method
) => dispatch => {
    let settings = {};

    // Settings the axios request settings.
    settings.data = request_data;
    settings.url = request_url;
    settings.method = request_method;

    // Request to the backend.
    axios(settings).then(
        res => dispatch({ type: REQUEST_SUCCESS, payload: res.data }),
        err => dispatch({ type: REQUEST_ERROR, payload: err.response.data })
    );
};

/** Specialized Function: deleteProduct
 *  Arguments:
 *      - request_data: The data to delete a product.
 *  Defenition:
 *      Calls the productRequests function above with the delete
 *      method and the session url preset.
 *  Returns: None
 **/
const deleteProduct = request_data => dispatch =>
    dispatch(
        productRequests(
            request_data,
            `${product_endpoint}${request_data.id}/`,
            HTTP_DELETE
        )
    );

/** Specialized Function: getProducts
 *  Arguments:
 *      - request_data: The data required to fetch all products.
 *  Defenition:
 *      Calls the productRequests function above with the get method
 *      and the session url preset.
 *  Returns: None
 **/
const getProducts = request_data => dispatch =>
    dispatch(productRequests(request_data, product_endpoint, HTTP_GET));

/** Specialized Function: getProducts
 *  Arguments:
 *      - request_data: The data required to fetch all products.
 *  Defenition:
 *      Calls the productRequests function above with the get method
 *      and the session url preset.
 *  Returns: None
 **/
const getOneProduct = request_data => dispatch =>
    dispatch(
        productRequests(
            request_data,
            `${product_endpoint}${request_data.id}/`,
            HTTP_GET
        )
    );
/** Specialized Function: createProduct
 *  Arguments:
 *      - request_data: The data to create a product.
 *  Defenition:
 *      Calls the productRequests function above with the post method
 *      and the register url preset.
 *  Returns: None
 **/
const createProduct = request_data => dispatch =>
    dispatch(productRequests(request_data, product_endpoint, HTTP_POST));

/** Specialized Function: updateProduct
 *  Arguments:
 *      - request_data: The data to update a product.
 *  Defenition:
 *      Calls the productRequests function above with the put method
 *      and the profile url preset to update the profile.
 *  Returns: None
 **/
const updateProduct = request_data => dispatch =>
    dispatch(
        productRequests(
            request_data,
            `${product_endpoint}${request_data.id}/`,
            HTTP_PUT
        )
    );

// Exporting the specialized functions and some action types.
export {
    REQUEST_ERROR,
    REQUEST_SUCCESS,
    REQUEST_LOADING,
    updateProduct,
    createProduct,
    getProducts,
    deleteProduct,
    getOneProduct
};
