import { useState, useEffect, useReducer } from "react";
import useAxiosPrivate from "./useAxiosPrivate";

const initialState = {
  data: [],
  loading: true,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REQUEST":
      return {
        data: state.data,
        loading: true,
        error: "",
      };
    case "FETCH_SUCCESS":
      return {
        data: action.payload,
        loading: false,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        data: [],
        loading: false,
        error: action.payload,
      };
    case "ADD_SUCCESS":
      return {
        data: [...state.data, action.payload],
        loading: false,
        error: "",
      };
    case "ADD_ERROR":
      return {
        error: "Failed to add new item",
        loading: false,
        data: state.data,
      };

    case "UPDATE_SUCCESS":
      const updatedData = state.data.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return {
        data: updatedData,
        loading: false,
        error: "",
      };
    case "UPDATE_ERROR":
      return {
        data: state.data,
        loading: false,
        error: "Failed to update item",
      };
    case "DELETE_SUCCESS":
      const filteredData = state.data.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        data: filteredData,
        loading: false,
        error: "",
      };
    case "DELETE_ERROR":
      return {
        data: state.data,
        loading: false,
        error: "Failed to delete item",
      };
    default:
      return state;
  }
};

function useApi(url) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "REQUEST" });
      try {
        const response = await axiosPrivate.get(url);
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error });
      }
    };
    fetchData();
  }, []);

  const createItem = async (newItem) => {
    dispatch({ type: "REQUEST" });
    try {
      const response = await axiosPrivate.post(url, newItem);
      dispatch({
        type: "ADD_SUCCESS",
        payload: { ...newItem, id: response.data.item_id },
      });
    } catch (error) {
      dispatch({ type: "ADD_ERROR" });
    }
  };

  const updateItem = async (id, updatedItem) => {
    dispatch({ type: "REQUEST" });
    try {
      const response = await axiosPrivate.put(`${url}/${id}`, updatedItem);
      dispatch({
        type: "UPDATE_SUCCESS",
        payload: { ...updatedItem, id },
      });
    } catch (error) {
      dispatch({ type: "UPDATE_ERROR" });
    }
  };

  const removeItem = async (id) => {
    dispatch({ type: "REQUEST" });
    try {
      await axiosPrivate.delete(`${url}/${id}`);
      dispatch({
        type: "DELETE_SUCCESS",
        payload: { id },
      });
    } catch (error) {
      dispatch({ type: "DELETE_ERROR" });
    }
  };

  return { state, createItem, updateItem, removeItem };
}

export default useApi;
