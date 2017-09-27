//import React from 'react';
//
//import BoxLeft from './box_left';   // 按钮 left
//import BoxRight from './box_right'; // 页面 right
////import { randomRange } from '../utils/util';
//
//export default class Box extends React.Component {
//    constructor() {
//        super();
//        this.state = {
//            year:(new Date()).getFullYear()
//        };
//    }
//    // 组件加载完成
//    componentDidMount(){
//        //console.log(DEVICES_LIST);
//    }
//    render() {
//        let boxStyle = {
//            dispaly: "none"
//        };
//        //let isShow =  == true ? 'show' : 'hide';
//        return (
//            <section id="box" class="box" class={{}}>
//                <BoxLeft></BoxLeft>
//                <BoxRight></BoxRight>
//            </section>
//        );
//    };
//}

import React from 'react';
import BoxLeft from './box_left';   // 按钮 left
import BoxRight from './box_right'; // 页面 right
//import { randomRange } from '../utils/util';

const Box = React.createClass({
    getInitialState: function(){
        return {year:(new Date()).getFullYear()}
    },
    render() {
        let { showIndex } = this.props;
        alert(showIndex);
        let boxStyle = {
            dispaly: "none"
        };
        return (
            <section id="box" class="box" class={{boxStyle}}>
                <BoxLeft></BoxLeft>
                <BoxRight></BoxRight>
            </section>
        );
    },
    // 组件加载完成
    componentDidMount(){
        console.log("组件加载完成");
    },
    // 组件要加载前
    componentWillMount(){
        
    }
});

function select(state) {
    return {
        showIndex : state.showIndex
    }
}
export default connect(select)(Box);


