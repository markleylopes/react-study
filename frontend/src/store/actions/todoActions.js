const updateDescription = e => ({
  type: "UPDATE_DESCRIPTION",
  payload: e.target.value
});

const search = description => {
  return {
    type: "TODO_SEARCH",
    payload: description
  };
};

const clear = () => {
  return {
    type: "TODO_CLEAR"
  };
};

const add = description => {
  return {
    type: "TODO_CREATE",
    payload: description
  };
};

const del = (id, description) => {
  return {
    type: "TODO_DELETE",
    payload: { id, description }
  };
};

export { updateDescription, search, clear, add, del };
