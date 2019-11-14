import React from 'react';
import s from './style.scss';
import { Calendar } from 'antd';


export default class Index extends React.Component {
    onPanelChange=(value, mode)=>{
        console.log(value, mode);
    }
    render() {
        return (
            <React.Fragment>
                <Calendar onPanelChange={this.onPanelChange} />
            </React.Fragment>
        );
    }
}
