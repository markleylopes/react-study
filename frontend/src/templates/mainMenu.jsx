import React from 'react'
import styled from 'styled-components';
import { About } from '../pages/About'
import { Home } from '../pages/Home'
import { Link } from 'react-router-dom'
import { Redirect } from "react-router";

import { Todo } from '../components/todo'
import { Route, Switch } from "react-router-dom";
const Div = styled.div`
display: inline-block;
`
const Ul = styled.ul`
list-style-type: none;
padding: 0;
padding-right: 40px;
padding-left: 40px;
border-bottom: solid 1px black;
`
const Li = styled.li`
cursor: pointer;
user-select: none;
padding: 10px;
display: inline-block;
`

export const MainMenu = ({match}) => (
<Div>
<Ul>
<Li>
<Link to="/">Home</Link>
</Li>
<Li>
<Link to={`${match.url}/tasks`} >Tasks</Link>
</Li>
<Li>
<Link to={`${match.url}/sobre`}>Sobre</Link>
</Li>
<Li>
<Link to="/login">Login</Link>
</Li>
</Ul>

<Switch>
<Route exact path={`${match.url}/`} component={Home} />
 <Route exact path={`${match.url}/sobre`} component={About} />
 <Route exact path={`${match.url}/tasks`} component={()=>(<Todo cuidado= 'TETETWFSSDFSDFSDF'/>)} />
 <Redirect from='/' to='/notfound'/>
</Switch>

</Div>
)