import React from "react";
import useGlobalHook from "./useGlobalHook";
import * as actions from "./actions.js";

const initialState = {
  defaultNamesData: [],
  slectedLocation: [],
  slectedItems: [],
  itemData: [],
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
