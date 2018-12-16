import React, { Component } from 'react'
import './menuList.less'
import {Menu} from 'antd';
import {Link}from 'react-router-dom'
import { withRouter } from 'react-router'
import {makeMap} from '../../../libs/util'
const SubMenu = Menu.SubMenu;
const arr = ['home', 'orders', 'customers', 'workers', 'device', 'worker', 'setting']
const getKey = makeMap(arr, true)
class MenuList extends Component {
    rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];
    state = {
        openKeys: ['sub1'],
    };
    list = [
        {name: '首页', key: '0', childs: {}, url: '/index/home', crumbs: ['首页']},
        {name: '数据管理', key: 'sub1', childs: [
            {name: '订单列表', key: '1', url: '/index/datas/orders', crumbs: ['首页', '数据管理', '订单列表']},
            {name: '客户列表', key: '2', url: '/index/datas/customers', crumbs: ['首页', '数据管理', '客户列表']},
            {name: '维修工列表', key: '3', url: '/index/datas/workers', crumbs: ['首页', '数据管理', '维修工列表']}
        ]},
        {name: '添加数据', key: 'sub2', childs: [
            {name: '添加设备', key: '4', url: '/index/add/device', crumbs: ['首页', '添加数据', '添加设备']},
            {name: '添加维修工', key: '5', url: '/index/add/worker', crumbs: ['首页', '添加数据', '添加维修工']}
        ]},
        {name: '设置', key: '6', childs: {}, url: '/index/setting', crumbs: ['首页', '设置']}
    ]

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    componentDidMount () {
    }
    render() {
        const {event} = this.props
        let pathname = this.props.location.pathname
        let arr = pathname.split('/')
        let key = getKey(arr[arr.length-1]) ? `${getKey(arr[arr.length-1])}` : '0'
        return (
            <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                defaultSelectedKeys={[key]}
                style={{ width: 270 }}
            >
                {
                    this.list.map((item, index) => {
                        if (item.childs.length > 0) {
                            return (<SubMenu key={item.key} title={<span>{item.name}</span>}>
                                {
                                    item.childs.map((el, ind) => {
                                        return (
                                            <Menu.Item
                                                key={el.key}
                                                onClick={() => event(el)}
                                            >
                                                <Link to={el.url}>{el.name}</Link>
                                            </Menu.Item>
                                        )
                                    })
                                }
                            </SubMenu>)
                        } else {
                            return (
                                <Menu.Item
                                    key={item.key}
                                    onClick={() => event(item)}
                                >
                                    <Link to={item.url}>{item.name}</Link>
                                </Menu.Item>
                            )
                        }
                    })
                }
            </Menu>
        );
    }
}

export default withRouter(MenuList)