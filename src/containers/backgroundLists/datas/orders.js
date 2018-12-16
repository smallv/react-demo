import React, { Component } from 'react'
import '../lists.less'
import {Table, Collapse} from 'antd';
const Panel = Collapse.Panel;
function callback(key) {
    console.log(key);
}
const renderContent = (value, row, index) => {
    const obj = {
        props: {
            colSpan: 0,
        },
    };
    return obj
};
  
const getContent = (item, index) => {
    let header = (<p className='detail'>
        <span className='first'>{item.orderId}</span>
        <span className='second'>{item.name}</span>
        <span className='third'>{item.statesDesc}</span>
    </p>)
    return (
        <Collapse onChange={callback} defaultActiveKey={['0']}>
            <Panel header={header} key={index}>
                <p className='panelDetail'>
                    <span>用户名：{item.name}</span>
                    <span>用户ID：{item.userId}</span>
                    <span>联系方式：{item.tel}</span>
                </p>
                <p className='panelDetail'>
                    <span>地址：{item.address}</span>
                </p>
                <p className='panelDetail'>
                    <span>设备ID：{item.deviceId}</span>
                </p>
                <p className='panelDetail'>
                    <span>故障描述：{item.desc}</span>
                </p>
            </Panel>
        </Collapse>
    )
}
  
const columns = [{
    title: '订单ID',
    dataIndex: 'orderId',
    render: (text, row, index) => {
        const obj = {
            children: getContent(row, index),
            props: {
                colSpan: 3,
            },
        };
        return obj
    }
}, {
    title: '客户姓名',
    dataIndex: 'name',
    render: renderContent
}, {
    title: '订单状态',
    dataIndex: 'states',
    render: renderContent
}];

const data = [{
    orderId: '122726',
    name: 'John Brown',
    userId: '123',
    tel: '12345678901',
    deviceId: '53534',
    desc: '不工作还有响声',
    states: '10',
    statesDesc: '已完成',
    address: 'New York No. 1 Lake Park',
}, {
    orderId: '122725',
    name: 'Jim Green',
    userId: '123',
    tel: '12345678901',
    deviceId: '53534',
    desc: '不工作还有响声',
    states: '10',
    statesDesc: '已完成',
    address: 'London No. 1 Lake Park',
}, {
    orderId: '122724',
    name: 'Joe Black',
    userId: '123',
    tel: '12345678901',
    deviceId: '53534',
    desc: '不工作还有响声',
    states: '10',
    statesDesc: '已完成',
    address: 'Sidney No. 1 Lake Park',
}, {
    orderId: '122723',
    name: 'Jim Red',
    userId: '123',
    tel: '12345678901',
    deviceId: '53534',
    desc: '不工作还有响声',
    states: '10',
    statesDesc: '已完成',
    address: 'London No. 2 Lake Park',
}, {
    orderId: '122722',
    name: 'Jake White',
    userId: '123',
    tel: '12345678901',
    deviceId: '53534',
    desc: '不工作还有响声',
    states: '10',
    statesDesc: '已完成',
    address: 'Dublin No. 2 Lake Park',
}];
class Orders extends Component {
    render() {
        return (
            <div className='table'>
                <Table rowKey="orderId" columns={columns} dataSource={data} bordered />
            </div>
        )
    }
}

export default Orders