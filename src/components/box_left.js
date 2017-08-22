import React from 'react';
import { connect } from 'react-redux';
import { changeShow, changeZoom } from '../actions';
import $ from 'jquery';

const BoxLeft = React.createClass({
    getInitialState: function(){
        return {currentIndex: 0}
    },

    render() {
        let { show } = this.props;
        return (
            <div class="box_l">
                <div class="btn_list">
                    <a class="btn on" href="javascript:void(0)" onClick={this.changeShow.bind(this,'all')} >ALL</a>
                    <a class="btn" href="javascript:void(0)" onClick={this.changeShow.bind(this,'andriod')} >Andriod</a>
                    <a class="btn" href="javascript:void(0)" onClick={this.changeShow.bind(this,'ios')} >IOS</a>
                </div>

                <div class="btn_list">
                    <a class="btn on" href="javascript:void(0)" onClick={this.changeZoom.bind(this,25)} >25</a>
                    <a class="btn" href="javascript:void(0)" onClick={this.changeZoom.bind(this,50)} >50</a>
                    <a class="btn" href="javascript:void(0)" onClick={this.changeZoom.bind(this,75)} >75</a>
                    <a class="btn" href="javascript:void(0)" onClick={this.changeZoom.bind(this,100)} >100</a>
                </div>
            </div>
        )
    },
    // 改变显示的设备
    changeShow(device, event) {
        // 改变高亮
        this.changeBtn(event.target);
        // 改变redux
        let { dispatch } = this.props;
        dispatch(changeShow(device));
    },
    // 改变显示的缩放
    changeZoom(zoom, event){
        // 改变高亮
        this.changeBtn(event.target);
        // 改变redux
        let { dispatch } = this.props;
        dispatch(changeZoom(zoom));
    },
    // 通用按钮高亮
    changeBtn(ele){
        var $ele = $(ele);
        $ele.addClass("on");
        $ele.siblings("a").removeClass("on");
    },
    // 组件加载完成
    componentDidMount(){
         console.log("组件加载完成");
    },
    // 组件要加载前
    componentWillMount(){
        console.log("组件要加载前");
        $.fn.superTabControl_c = function (options) {
                var settings = {
                    className: 'on',
                    trigger: 'click',//触发类型: click  mouseover  mouseout
                    tabListName: 'ul',
                    tabBoxName: '.tabBox',
                    tabList: function (obj) {
                        return obj.children(this.tabListName).find('li');
                    },
                    tabIndex: function (obj) {
                        return obj.index(this.indexName);
                    },
                    tabBox: function (obj) {
                        return obj.find(this.tabBoxName);
                    },
                    onclick: null,
                };
                $.extend(true, settings, options);
                return this.each(function () {
                    var liIndex,
                        $this = $(this);
                    settings.tabList($this).bind(settings.trigger, function () {
                        liIndex = settings.tabIndex($(this));
                        settings.tabList($this).removeClass(settings.className).eq(liIndex).addClass(settings.className);
                        settings.tabBox($this).hide().eq(liIndex).show();
                        if (settings.onclick) {
                            settings.onclick(this, {
                                objIndex: liIndex,//返回当前点击的序号
                                objThis: $(this)//返回自己
                            });
                        }
                    });
                });
         };
    }
});

function select(state) {
    return {
        show : state.show
    }
}
export default connect(select)(BoxLeft);












