import React, { Component } from 'react'
import './list.less'
import {
    Link
}from 'react-router-dom'
class Nav extends Component {
    render () {
        return (
            <div className='list'>
                <p>
                    <Link exact to="/login/">登录</Link>
                </p>
                <p>
                <Link exact to="/index/">后台首页</Link>
                </p>
            </div>
        )
    }
}

export default Nav