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
        <span className='first'>{item.workerId}</span>
        <span className='second'>{item.name}</span>
        <span className='third'>{item.tel}</span>
    </p>)
    return (
        <Collapse onChange={callback} defaultActiveKey={['0']}>
            <Panel header={header} key={index}>
                <p className='panelDetail'>
                    <span>用户名：{item.name}</span>
                    <span>ID：{item.userId}</span>
                    <span>联系方式：{item.tel}</span>
                </p>
                <p className='panelDetail'>
                    <span>区域：{item.area}</span>
                    <span>地址：{item.address}</span>
                </p>
            </Panel>
        </Collapse>
    )
}
  
const columns = [{
    title: '维修工ID',
    dataIndex: 'workerId',
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
    title: '姓名',
    dataIndex: 'name',
    render: renderContent
}, {
    title: '电话',
    dataIndex: 'tel',
    render: renderContent
}];

const data = [{
    workerId: '1',
    name: '维修工1',
    userId: '123',
    tel: '12345678901',
    area: '华东区',
    address: 'Sidney No. 1 Lake Park'
}, {
    workerId: '2',
    name: '维修工2',
    userId: '123',
    tel: '12345678901',
    area: '华东区',
    address: 'Sidney No. 1 Lake Park'
}, {
    workerId: '3',
    name: '维修工3',
    userId: '123',
    tel: '12345678901',
    area: '华东区',
    address: 'Sidney No. 1 Lake Park'
}, {
    workerId: '4',
    name: 'Jim Red',
    userId: '123',
    tel: '12345678901',
    area: '华东区',
    address: 'Sidney No. 1 Lake Park'
}, {
    workerId: '5',
    name: 'Jake White',
    userId: '123',
    tel: '12345678901',
    area: '华东区',
    address: 'Sidney No. 1 Lake Park'
}];

class Workers extends Component {
    render () {
        return (
            <div className='table'>
                <Table rowKey="workerId" columns={columns} dataSource={data} bordered />
            </div>
        )
    }
}

export default Workers