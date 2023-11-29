import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: false,
  categoryId: null,
  isLogin: false,
  productId: null,
  checkAdd: null,
  checkDelete: null,
  checkUpdate: null,
  manager: "product",
  managerDelete: null,
  openModalAdd: false,
};

const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setOpenModal: (states, action) => {
      states.openModal = action.payload;
    },
    setCategoryId: (states, action) => {
      states.categoryId = action.payload;
    },
    setIsLogin: (states, action) => {
      states.isLogin = action.payload;
    },
    setProductId: (states, action) => {
      states.productId = action.payload;
    },
    setCheckAdd: (states, action) => {
      states.checkAdd = action.payload;
    },
    setCheckDelete: (states, action) => {
      states.checkDelete = action.payload;
    },
    setCheckUpdate: (states, action) => {
      states.checkUpdate = action.payload;
    },
    setManager: (states, action) => {
      states.manager = action.payload;
    },
    setManagerDelete: (states, action) => {
      states.manager = action.payload;
    },
    setOpenModalAdd: (states, action) => {
      states.openModalAdd = action.payload;
    },
  },
});

export const {
  setOpenModal,
  setCategoryId,
  setIsLogin,
  setProductId,
  setCheckAdd,
  setCheckDelete,
  setCheckUpdate,
  setManager,
  setManagerDelete,
  setOpenModalAdd,
} = appReducer.actions;
export default appReducer.reducer;
