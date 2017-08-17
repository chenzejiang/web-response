import React from 'react';
import { connect } from 'react-redux';
import { changeDircetion } from '../actions';
const Page = React.createClass({
    render() {
            let {href, show, deviceList} = this.props;
            console.log("!!!!!!!!!!!!!!");
            console.log(deviceList);
            console.log(this.props.deviceList);
            console.log("???????????????");
            let list = (arr) => {
            let resArr = [];
            for(let i = 0; i < this.props.deviceList.length; i++) {
                // 判断横屏or竖屏
                let iframe_width = this.props.deviceList[i]["direction"] === true ? this.props.deviceList[i]["width"] : this.props.deviceList[i]["height"];
                let iframe_height = this.props.deviceList[i]["direction"] === false ? this.props.deviceList[i]["width"] : this.props.deviceList[i]["height"];
                resArr.push(
                    <div class={"page "+this.props.deviceList[i]["type"]}>
                        <div class="page_top">
                            <div class="page_title">
                                <span class="page_title_name">{this.props.deviceList[i]["name"] + iframe_width}</span>
                                <span class="page_title_size">({this.props.deviceList[i]["width"]} x {this.props.deviceList[i]["height"]})</span>
                            </div>
                            {/* 页面按钮控制 */}
                            <div class="page_btn">
                                <span class="btn_1" onClick={this.changeDircetion.bind(this,i)}></span>
                                <span class="btn_2"></span>
                                <span class="btn_3"></span>
                            </div>
                        </div>
                        <div class="iframe_box">
                            <iframe title={this.props.deviceList[i]["name"]} src={this.props.href} data-attr={iframe_width} width={iframe_width} height={iframe_height} >
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
                {list()}
            </div>
        );
    },
    // 改变方向
    changeDircetion(_num){
        console.log(_num,"_num");
        let { dispatch } = this.props;
        dispatch(changeDircetion(_num));
    }
})
function select(state) {
    console.log("======1");
    console.log(state);
    return {
        href : state.href,
        show : state.show,
        deviceList : state.deviceList
    }
}
export default connect(select)(Page);