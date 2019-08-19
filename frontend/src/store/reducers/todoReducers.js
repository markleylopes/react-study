import * as definitions from "../definitions/todo";

const INITIAL_STATE = { description: "", list: [] };

export const todoReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case definitions.UPDATE_DESCRIPTION:
      return { ...state, description: action.payload };

    case definitions.TODO_SEARCH_OK:
      return { ...state, list: action.payload.data };

    case definitions.TODO_CLEANED:
      return { ...state, description: "" };

    case definitions.TODO_CREATED:
      return { ...state, description: "" };

    default:
      return state;
  }
};
