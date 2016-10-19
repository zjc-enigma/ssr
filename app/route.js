import Test from './test_component'
import React from 'react'
import { Route } from 'react-router'

const routes = (
    <Route>
    <Route path='/render'  component={Test} />
    </Route>
)

export default routes
