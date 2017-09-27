import React from 'react';
import { connect } from 'react-redux';
import { changeDircetion, addCount, changeZoom } from '../actions';
const Page = React.createClass({
    render() {
        let {href, show, deviceList, zoom} = this.props;
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
        var commentNodes = this.props.deviceList.map(function(item,i) {
            let iframe_width = item["direction"] == true ? item["width"] : item["height"];  // iframe宽度
            let iframe_height = item["direction"] == false ? item["width"] : item["height"]; // iframe高度
            let _scaleNum = (zoom / 100);
            // 缩放样式
            let pageStyle = {
                transform: "scale("+_scaleNum+")",
                WebkitTransform: "scale("+_scaleNum+")",
                transformOrigin: "left top 0px"
            };
            return (
                <div style={pageStyle} class={"page "+item["type"]} key={i}>
                    <div class="page_top">
                        <div class="page_title">
                            <span class="page_title_name">{item["name"]}</span>
                            <span class="page_title_size">({item["width"]} x {item["height"]})</span>
                        </div>
                        {/* 页面按钮控制 */}
                        <div class="page_btn">
                            <span class="btn_1" onClick={that.changeDircetion.bind(this,i)}>1</span>
                            <span class="btn_2" onClick={that.addCount.bind(this)}>2</span>
                            <span class="btn_3" onClick={that.refresh.bind(this,i)}>3</span>
                        </div>
                    </div>
                    <div class="iframe_box">
                        <iframe id={"phone_iframe_"+i} title={item["name"]} src={href} data-attr={iframe_width} width={iframe_width} height={iframe_height} >
                        </iframe>
                    </div>
                </div>
            );
        });
        return (
            <div id="page_box" class={showDevice(show)}>
                {commentNodes}
            </div>
        );
    },
    // 改变方向
    changeDircetion(num){
        let { dispatch,deviceList } = this.props;
        console.log(deviceList);
        console.log("changeDircetionchangeDircetionchangeDircetionchangeDircetionchangeDircetionchangeDircetion");
        let _obj = deviceList;
        dispatch(changeDircetion(num));
        dispatch(addCount());
    },
    // 刷新iframe
    refresh(num){
        document.getElementById('phone_iframe_'+num).src = document.getElementById('phone_iframe_'+num).src
    },
    addCount() {
        let { dispatch } = this.props;
        dispatch(addCount());
    }
});
function select(state) {
    return {
        count : state.count,
        href : state.href,
        show : state.show,
        deviceList : state.deviceList,
        zoom : state.zoom
    }
}
export default connect(select)(Page);