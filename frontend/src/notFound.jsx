import React from 'react'

import { Link } from 'react-router-dom'

export const NotFound = () => (
    <React.Fragment>
    <h1>Page Not Found</h1>, <Link to='/'>
        Clique aqui para voltar à página inicial
    </Link>
    </React.Fragment>
)