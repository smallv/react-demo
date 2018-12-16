import React, { Component } from 'react'
import './backgroundIndex.less'
import { Breadcrumb } from 'antd'
import MenuList from '../components/menuList/index'
import Time from '../components/time/index'
import ViewRouter from './viewRouter'
class BackgroundIndex extends Component {
    constructor (props) {
        super(props)
        this.state = {
            crumbs: ['首页']
        }
        this.changeMenuHandle = this.changeMenuHandle.bind(this)
    }
    changeMenuHandle (item) {
        let {crumbs} = item
        this.setState({crumbs})
        sessionStorage.setItem("crumbs", crumbs)
    }
    componentDidMount () {
        if (!sessionStorage.getItem("crumbs")) return
        let crumbs = sessionStorage.getItem("crumbs").split(',')
        this.setState({crumbs})
    }
    render () {
        const {crumbs} = this.state
        return (
            <div>
                <div className='backgroundBox'>
                    <div className='left'>
                        <MenuList event={this.changeMenuHandle}/>
                    </div>
                    <div className="right">
                        <div className='navBox'>
                            <Breadcrumb>
                                {
                                    crumbs.map((item, index) => {
                                        return (index === 0 ? 
                                            <Breadcrumb.Item
                                                key={index}
                                                href=''
                                            >
                                                {item}
                                            </Breadcrumb.Item>
                                        :
                                            <Breadcrumb.Item
                                                key={index}
                                            >
                                                {item}
                                            </Breadcrumb.Item>
                                        )
                                    })
                                }
                            </Breadcrumb>
                            <Time/>
                        </div>
                        <div className="content">
                            <ViewRouter/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BackgroundIndex