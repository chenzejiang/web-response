
import React from 'react';
import { connect } from 'react-redux';
import BoxLeft from './box_left';   // 按钮 left
import BoxRight from './box_right'; // 页面 right
import { showIndex } from '../actions';

//import { randomRange } from '../utils/util';

const Box = React.createClass({
    getInitialState: function(){
        return {year:(new Date()).getFullYear()}
    },
    render() {
        let { showIndex } = this.props;
        let isShow = showIndex == true ? 'hide' : '';
        return (
            <section id="box" class={"box " + isShow }>
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


