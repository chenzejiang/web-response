import React from 'react';
import { DEVICES_LIST } from '../config/config';  // 设备数据
import { connect } from 'react-redux';

const Page = React.createClass({
    render() {
            let {href, show} = this.props;
            let list = (arr) => {
            let resArr = [];
            for(let i = 0; i < arr.length; i++) {
                // 判断横屏or竖屏
                let iframe_width = arr[i]["direction"] === 0 ? arr[i]["width"] : arr[i]["height"];
                let iframe_height = arr[i]["direction"] === 1 ? arr[i]["width"] : arr[i]["height"];
                resArr.push(
                    <div class={"page "+arr[i]["type"]}>
                        <div class="page_top">
                            <div class="page_title">
                                <span class="page_title_name">{arr[i]["name"]}</span>
                                <span class="page_title_size">({arr[i]["width"]} x {arr[i]["height"]})</span>
                            </div>
                            {/* 页面按钮控制 */}
                            <div class="page_btn">
                                <span class="btn_1"></span>
                                <span class="btn_2"></span>
                                <span class="btn_3"></span>
                            </div>
                        </div>
                        <div class="iframe_box">
                            <iframe title={arr[i]["name"]} src={this.props.href} width={iframe_width} height={iframe_height} >
                            </iframe>
                        </div>
                    </div>
                )
            }
            return resArr
        }
        // 显示设备
        function showDevice(show = ''){
            switch (show){
                case 'all' :
                    return 'show_all';
                case 'ios' :
                    return 'hide_andriod';
                case 'andriod' :
                    return 'hide_ios';
                default :
                    return 'show_all';
            }
        }
        return (
            <div id="page_box" class={showDevice(this.props.show)}>
                {list(DEVICES_LIST)}
            </div>
        );
    }
})
function select(state) {
    console.log(state);
    return {
        href : state.href,
        show : state.show
    }
}
export default connect(select)(Page);