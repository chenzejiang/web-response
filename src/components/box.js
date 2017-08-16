import React from 'react';

import BoxLeft from './box_left';   // 按钮 left
import BoxRight from './box_right'; // 页面 right

//import { randomRange } from '../utils/util';

export default class Box extends React.Component {
    constructor() {
        super();
        this.state = {
            year:(new Date()).getFullYear()
        };
    }
    // 组件加载完成
    componentDidMount(){
        //console.log(DEVICES_LIST);
    }
    render() {
        return (
            <section id="box" class="box">
                <BoxLeft></BoxLeft>
                <BoxRight></BoxRight>
            </section>
        );
    };
}