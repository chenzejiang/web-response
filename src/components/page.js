import React from 'react';
import { connect } from 'react-redux';
import { changeDircetion } from '../actions';
const aaa = React.createClass({
    render() {
        let {href, show, deviceList} = this.props;
        let that = this;
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
        var commentNodes = deviceList.map(function(item,i) {
            let iframe_width = item["direction"] === true ? item["width"] : item["height"];
            let iframe_height = item["direction"] === false ? item["width"] : item["height"];
            return (
                <div class={"page "+item["type"]} key={i}>
                    <div class="page_top">
                        <div class="page_title">
                            <span class="page_title_name">{item["name"]}</span>
                            <span class="page_title_size">({item["width"]} x {item["height"]})</span>
                        </div>
                        {/* 页面按钮控制 */}
                        <div class="page_btn">
                            <span class="btn_1" onClick={that.changeDircetion(i)}></span>
                            <span class="btn_2"></span>
                            <span class="btn_3"></span>
                        </div>
                    </div>
                    <div class="iframe_box">
                        <iframe title={item["name"]} src={href} data-attr={iframe_width} width={iframe_width} height={iframe_height} >
                        </iframe>
                    </div>
                </div>
            );
        });

        return (
            <div id="page_box" class={showDevice(show)}>
                {commentNodes}
                {/*list()*/}
            </div>
        );
    },
    // 改变方向
    changeDircetion(_num){
        //return '2';
        //console.log(_num,"99999");
        //let { dispatch } = this.props;
        //dispatch(changeDircetion(_num));
    }
});

function select(state) {
    console.log(state);
    return {
        href : state.href,
        show : state.show,
        deviceList : state.deviceList
    }
}
export default connect(select)(aaa);