import axios from "axios";
import swal from "sweetalert";

// action to get all products
export function getProducts() {
  return async function (dispatch) {
    try {
      const response = await axios.get("/products");
      return dispatch({ type: "GET_PRODUCTS", payload: response.data });
    } catch (error) {
      return { error: error.message };
    }
  };
}

// action to get a specific product by ID
export function getDetail(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/products/${id}`);
      return dispatch({ type: "GET_DETAIL", payload: response.data });
    } catch (error) {
      return { error: error.message };
    }
  };
}

// action to create a new product
export function postProduct(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/products", payload);
      return dispatch({ type: "POST_PRODUCT", payload: response.data });
    } catch (error) {
      return { error: error.message };
    }
  };
}

// action to update a existing product by its ID
export const putProduct = (id, data) => {
  return async function (dispatch) {
    try {
      const res = await axios.put(`/products/${id}`, data);
       dispatch({ type: "PUT_PRODUCT", payload: res.data});
       const response = await axios.get("/products");
      return dispatch({ type: "GET_PRODUCTS", payload: response.data });

    } catch (error) {
      return { error: error.message };
    }
  }
  
};

// action to delete a existing product by its ID
export const deleteProduct = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.delete(`/products/${id}`);
      return dispatch({ type: "DELETE_PRODUCT", payload: res.data });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export function filterProducts(payload) {
  return {
    type: "FILTER_PRODUCTS",
    payload,
  };
}

export function orderProducts(payload) {
  return {
    type: "ORDER_PRODUCTS",
    payload,
  };
}

export function addProduct(payload) {
  return {
    type: "ADD_PRODUCT",
    payload,
  };
}

export function removeProduct(payload) {
  return {
    type: "REMOVE_PRODUCT",
    payload,
  };
}

// action to get all users
export function getUsers() {
  return async function (dispatch) {
    try {
      const response = await axios.get("/users");
      return dispatch({ type: "GET_USERS", payload: response.data });
    } catch (error) {
      return { error: error.message };
    }
  };
}

export const putUser = (id, data) => {
  return async function (dispatch) {
    try {
      const res = await axios.put(`/users/${id}`, data);
      return dispatch({ type: "PUT_USER", payload: res.data });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export function postUser(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/users", payload);
      return dispatch({ type: "POST_USER", payload: response.data });
    } catch (error) {
      return { error: error.message };
    }
  };
}

export const deleteUser = (id) => {
  return async function (dispatch) {
    try {
      const res = await axios.delete(`/users/${id}`);
      return dispatch({ type: "USER_PRODUCT", payload: res.data });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export function filterProductsCategory(payload) {
  return {
    type: "FILTER_CATEGORY",
    payload,
  };
}

export function filterProductsBrand(payload) {
  return {
    type: "FILTER_BRAND",
    payload,
  };
}

export function postCategory(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/category", payload);
      return dispatch({ type: "POST_CATEGORY", payload: response.data });
    } catch (error) {
      return { error: error.message };
    }
  };
}

// export function getNameProduct(payload) {
//   return async function (dispatch) {
//     const response = await axios.get(
//       `http://localhost:3001/products/name/${payload}`
//     );
//     return dispatch({ type: "GET_NAME_PRODUCT", payload: response.data });
//   };
// }

export default function searchBarName(payload) {
  return {
    type: "SEARCH_BAR",
    payload,
  };
}

export function cleanFilter(payload) {
  return {
    type: "CLEAN_FILTER",
    payload,
  };
}

// action to register a user
export const signUp = (payload) => {
  return async function () {
    try {
      const res = await axios.post("/signup", payload);
      res.data.message !== undefined
        ? swal(res.data.message)
        : swal("Usuario creado correctamente");
    } catch (error) {
      return { error: error.message };
    }
  };
};

// action to login a user
export const signIn = (payload) => {
  return async function (dispatch) {
    const id = localStorage.getItem("id");
    try {
      if (id) {
        return dispatch({ type: "SIGN_IN", payload });
      } else {
        const res = await axios.post("/signin", payload);
        res.data.message !== undefined
          ? swal(res.data.message)
          : swal("Inicio de sesión correcto");
          const result = res.data.filter((item) => item.email === payload.email);
          console.log( result[0])
        localStorage.setItem("id", JSON.stringify(result[0]._id));
        localStorage.setItem("user", JSON.stringify(result[0]));
        localStorage.setItem("cart", JSON.stringify(result[0].cart));
        localStorage.setItem("admin", JSON.stringify(result[0].admin))
        return dispatch({ type: "SIGN_IN", payload });
      }
    } catch (error) {
      swal(error.request.response);
    }
  };
};

// action to log out a user
export const logOut = () => {
  return async function (dispatch) {
    try {
      localStorage.clear();
      const res = await axios.get("/logout");
      return dispatch({ type: "LOG_OUT", payload: res.data });
    } catch (error) {
      return { error: error.message };
    }
  };
};

// filter by maximum and minimun price on the front
export function filterProductsPrice(payload) {
  return {
    type: "FILTER_PRICE",
    payload,
  };
}

export function getCategories() {
  return async function (dispatch) {
    try {
      const response = await axios.get("/categories");
      return dispatch({ type: "GET_CATEGORIES", payload: response.data });
    } catch (error) {
      return { error: error.message };
    }
  };
}

export function getRating(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/products/rating/${id}`);
      return dispatch({ type: "GET_RATING", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getReviews(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/products/reviews/${id}`);
      return dispatch({ type: "GET_REVIEWS", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function postReview(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/products/reviews", payload);
      return dispatch({ type: "POST_REVIEW", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

//enviar rating de productor por id de producto

export function putRating(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.put(
        `/products/rating/${payload._id}`,
        payload
      );
      return dispatch({ type: "PUT_RATING", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function postComment(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/products/coment", payload);
      return dispatch({ type: "POST_COMENT", payload: response.data });
    } catch (error) {
      return { error: error.message };
    }
  };
}

export function putComent(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.put(
        `/products/coment/${payload._id}`,
        payload
      );
      return dispatch({ type: "PUT_COMENT", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function postRating(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/products/rating", payload);
      return dispatch({ type: "POST_RATING", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getCalificationRating(_id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/products/rating/${_id}`);
      return dispatch({ type: "GET_RATING", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function putCalificationRating(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.put(
        `/products/rating/${payload._id}`,
        payload
      );
      return dispatch({ type: "PUT_RATING", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

//get coments por id de producto

export function getComents(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/products/coments/${id}`);
      return dispatch({ type: "GET_COMENTS", payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}
// export function addToCart(product,cart){
//   return async function(dispatch){  
//     let itemInCart = cart.find((ele) => ele._id === product._id);   
//     if (itemInCart) {
//       cart?.map((item) =>
//         item._id === product._id ? { ...item, qty: (item.qty += 1) } : item
//       );
//       // localStorage.setItem("cart", JSON.stringify(pepe));
//     } else {
//       product.qty = 1;
//       cart.push(product)
//     }
//     localStorage.setItem("cart", JSON.stringify(cart));
//     return dispatch({
//       type:"ADD_TO_CART",
//       payload:cart
//     })
//   }
// }
export function add(num){
  return async function (dispatch) {
  return await dispatch({type:"ADD", payload:num+1})
}
}
export function remove(num){
  return async function (dispatch) {
  return await dispatch({type:"REMOVE", payload:num-1})
}
}