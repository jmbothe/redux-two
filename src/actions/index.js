import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=vn953ubnpeube'

export const FETCH_POSTS = 'FETCH_POSTS';
export const ADD_POST = 'ADD_POST';
export const GET_POST = 'GET_POST';
export const DELETE_POST = 'DELETE POST';

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export const addPost = (body, callback) => {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, body)

  request.then(() => callback())

  return {
    type: ADD_POST,
    payload: request
  }
}

export const getPost = id => {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)

  return {
    type: GET_POST,
    payload: request
  }
}

export const deletePost = (id, callback) => {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)

  request.then(() => callback())

  return {
    type: DELETE_POST,
    payload: request
  }
}