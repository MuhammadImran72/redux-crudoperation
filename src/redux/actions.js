import axios from "axios";
import * as types from "./actionTpyes";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const UserDelected = () => ({
  type: types.DELECT_USER,
});
const userAdded = () => ({
  type: types.ADD_USER,
});

const userUpdate = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});

const doneuserUpdated = () => ({
  type: types.UPDATED_USER,
});

export const loadusers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        console.log("response", res);
        dispatch(getUsers(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const delectUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        console.log("response", res);
        dispatch(UserDelected());
        dispatch(loadusers());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((res) => {
        console.log("response", res);
        dispatch(userAdded());
        dispatch(loadusers());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateSingleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        console.log("response", res);
        dispatch(userUpdate(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updatedSucceUser = (user, id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, user)
      .then((res) => {
        console.log("response", res);
        dispatch(doneuserUpdated());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
