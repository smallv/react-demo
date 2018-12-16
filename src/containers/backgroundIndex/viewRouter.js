import React, { Component } from 'react'
import './backgroundIndex.less'
import {Switch, Route} from'react-router-dom'
import Home from '../backgroundLists/home'
import Setting from '../backgroundLists/setting'
import Customers from '../backgroundLists/datas/customers'
import Orders from '../backgroundLists/datas/orders'
import Workers from '../backgroundLists/datas/workers'
import Worker from '../backgroundLists/add/worker'
import Device from '../backgroundLists/add/device'

class ViewRouter extends Component {
    constructor (porps) {
        super (porps)
        this.state = {
        }
    }
    render () {
        return (
            <Switch>
                <Route exact path="/index/home" component={Home} />
                <Route exact path="/index" component={Home} />
                <Route exact path="/index/datas/customers" component={Customers} />
                <Route exact path="/index/datas/orders" component={Orders} />
                <Route exact path="/index/datas/workers" component={Workers} />
                <Route exact path="/index/add/worker" component={Worker} />
                <Route exact path="/index/add/device" component={Device} />
                <Route exact path="/index/setting" component={Setting} />
            </Switch>
        )
    }
}

export default ViewRouter