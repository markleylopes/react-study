import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import { Login } from "../pages/Login";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
const Div = styled.div`
  display: inline-block;
`;
const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  padding-right: 40px;
  padding-left: 40px;
  border-bottom: solid 1px black;
`;
const Li = styled.li`
  cursor: pointer;
  user-select: none;
  padding: 10px;
  display: inline-block;
`;
export const LoginMenu = ({ match, history }) => {
  return (
    <Div>
      <Ul>
        <Li>
          <Link to={`${match.url}/home`}>Home</Link>
        </Li>
        <Li>
          <Link to={`${match.url}/sobre`}> Sobre </Link>
        </Li>
        <Li>
          <Link to={`${match.url}`}>Login Page</Link>
        </Li>
        <Li>
          <Link to="/">Sair</Link>
        </Li>
      </Ul>
      <Switch>
        <Route exact path={`${match.url}/`} component={Login} />
        <Route exact path={`${match.url}/home`} component={Home} />
        <Route exact path={`${match.url}/sobre`} component={About} />
        <Redirect from="/" to="/notfound" />
      </Switch>
    </Div>
  );
};
