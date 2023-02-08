
import { legacy_createStore as createStore } from "redux";
import MainReducer from "./mainreducer";

const MyStore = createStore(MainReducer);

export default MyStore;