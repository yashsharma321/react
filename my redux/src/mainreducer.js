// userreducer will maintain the data of user component
// productreducer will maintain the data of product component
// apireducer will maintain the data of api component
// main reducer will hold all 3 components - parent file, above child file
// React and Redux are separate libraries, and to communicate we use react-redux
// React <= react-redux => Redux
// input / output, react will handle whereas storage will be managed by their respective reducers.

import { combineReducers } from "redux"; 
import UserList from "./userreducer";
import ProductList from "./productreducer";
import ApiList from "./apireducer";

const MainReducer = combineReducers ({
        UserList, ProductList, ApiList
});

export default MainReducer;