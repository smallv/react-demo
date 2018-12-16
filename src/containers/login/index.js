import React, { Component } from 'react'
import './login.less'
import {Input, Button} from 'antd'
class Login extends Component {
    render () {
        return (
            <div className='login-box'>
                <h3>后台管理系统</h3>
                <Input 
                    style={{ width: '150px' }}
                    placeholder="输入管理员账号"
                />
                <Input 
                    style={{ width: '150px', margin: '15px 0' }}
                    placeholder="输入密码"
                />
                <Button
                    type="primary"
                    style={{ width: '150px' }}
                >
                    登录
                </Button>
            </div>
        )
    }
}

export default Login