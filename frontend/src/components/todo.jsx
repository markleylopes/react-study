import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  updateDescription,
  search,
  clear,
  add,
  del
} from "../actions/todoActions";
const TodoForm = styled.input``;
const TodoButton = styled.input`
  box-sizing: border-box;
  background-color: white;
  border: solid gray 1px;
  border-radius: 5px;
  box-shadow: -3px 0px 0px gray;
  padding: 6px;
  margin: 5px;
  &:active {
    box-shadow: -2px 0px 0px gray;
  }
  &:hover {
    box-sizing: border-box;

    background-color: whitesmoke;
  }
`;
const TodoList = styled("div")`
text-align: start;
ul  {
    padding:0;
    list-style-type: none;
}
li::before  {
    content: "→";
    margin-right: 20px;
}
li{
margin: 5px;
padding: 5px;
border: solid gray 1px;
border-left: solid black 3px;
border-right: solid black 2px;
border-radius: 5px;
position: relative;
background-color: ${props =>
  ({
    friendly: "#FFFE78",
    important: "red",
    reliable: "blue"
  }[props.theme] || "white")}
input {
    text-align: right;  
    padding:3px;
    margin: 2px;
    right: 0;
    top:0;
    position: absolute;
    color:red;
}
`;

const todo = props => {
  const list = props.list || [];
  const { updateDescription, search, clear, description, add, del } = props;
  console.log();

  const renderList = list.map((item, i) => (
    <li key={i}>
      {" "}
      {item.description}
      <TodoButton
        type="button"
        value="✖"
        onClick={() => del(item._id, description)}
      />{" "}
    </li>
  ));

  const willMount = () => {
    search();
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    willMount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      <TodoForm
        type="text"
        value={description}
        onChange={e => updateDescription(e)}
      />
      <TodoButton
        type="button"
        value="🔎"
        onClick={() => search(description)}
      />
      <TodoButton type="button" value="➕" onClick={() => add(description)} />
      <TodoButton type="button" value="🧹" onClick={clear} />
      <TodoList className="teste" theme="friendly">
        <ul>{renderList}</ul>
      </TodoList>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  list: state.todo.list,
  description: state.todo.description
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateDescription, search, clear, add, del }, dispatch);

export const Todo = connect(
  mapStateToProps,
  mapDispatchToProps
)(todo);
