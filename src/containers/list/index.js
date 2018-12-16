import React, { Component } from 'react'
import {
    Route,
    Switch
}from 'react-router-dom'
import Index from '../backgroundIndex/index'
import Login from '../login/index'
import Nav from '../nav/index'
class List extends Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component={Nav} />
                <Route path="/index" component={Index} />
                <Route path="/login" component={Login} />
            </Switch>
        )
    }
}

export default List