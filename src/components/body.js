
import React from 'react';
import { connect } from 'react-redux';
import { changeShowIndex, addCount, changeUrl } from '../actions';
//import { checkUrl } from '';
import { checkUrl } from '../utils/util';

const Body = React.createClass({
    getInitialState: function(){
        return {year:(new Date()).getFullYear()}
    },
    render() {
        let { showIndex } = this.props;
        let isShow = showIndex == true ? '' : 'hide';
        return (
            <section data-v={isShow} class={"body " + isShow }>
                <div class="big_logo">
                    <div class="_logo">J</div>
                    <div class="big_logo_bg">
                        <img src="https://sizzy.co/static/media/shapes.9a3ef504.svg" />
                    </div>
                </div>
                <div class="body_box">
                    <h5>欢迎使用，输入 Url 启动</h5>
                    <div class="input_box">
                        <input ref="body_input_url" defaultValue={this.props.href}  type="text" placeholder="Enter an URL" class="body_input_url" id="body_input_url" />
                        <span onClick={this.changeShowIndex.bind(this,false)}></span>
                    </div>
                </div>
                <a class="footer_a" target="_blank" href="https://www.chenzejiang.com" >{this.state.year} by @webJ</a>
            </section>
        );
    },
    // 组件加载完成
    componentDidMount(){
        console.log("组件加载完成");
    },
    // 是否显示首页
    changeShowIndex(isShow, event){
        var _url = $.trim(this.refs.body_input_url.value);
        if(checkUrl(_url) == true){
            localStorage.setItem("url", _url);
        }else{
            return;
        }
        // 改变redux
        let { dispatch } = this.props;
        dispatch(changeShowIndex(isShow));
        dispatch(changeUrl(_url));

    },
    // 组件要加载前
    componentWillMount(){

    }
});

function select(state) {
    return {
        showIndex : state.showIndex,
        count : state.count,
        href : state.href
    }
}
export default connect(select)(Body);


