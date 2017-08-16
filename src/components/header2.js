import React from 'react';
import { connect } from 'react-redux';
import { changeUrl, addCount } from '../actions';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props

        };
    }
    // 组件加载完成
    componentDidMount(){
        //console.log(DEVICES_LIST);
    }
    changeUrl() {
        console.log("changUrl");
        //console.log(this.getState("href"));
        //let _val = document.getElementById("header_input_url").value;
        //let { dispatch } = this.props;
        //dispatch(changeUrl(_val));
        this.props.addCount();
    }
    render() {
        const { href } = this.props;
        console.log(this.props);
        console.log("==========");

        return (
            <header class="header">
                <div class="header_l">
                    <div class="logo">Response</div>
                    <div class="input_box">
                        <input ref='urlInput' type="text" defaultValue="https://www.chenzejiang.com" class="header_input_url" id="header_input_url" />
                        <span onClick={this.changeUrl} class="change_href"></span>
                    </div>
                </div>
                <div class="header_r">
                    <a href="javascript:void(0);"><i></i>Href:{this.props.href}</a>
                    <a href="javascript:void(0);"><i></i>Github</a>
                    <a href="javascript:void(0);"><i></i>Blog</a>
                </div>
            </header>
        );
    };
}


Header.propTypes = {

}

function select(state) {
    console.log(state);
    return {
        count: state.count,
        href : state.href
    }
}

export default connect(select)(Header);