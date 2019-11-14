import React from 'react';
import s from './style.scss';
import {  Icon, Input, Button } from 'antd';

export default class Index extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Usersname" />
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password" />
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                <div className={s.test}>sadas</div>
            </React.Fragment>
        );
    }
}
