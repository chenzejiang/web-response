import React from 'react';
import { connect } from 'react-redux';
import { changeUrl } from '../actions';
const Header = React.createClass({
    render() {
        let {href} = this.props;
        console.log(this.props);
        //console
        return (
            <header class="header">
                <div class="header_l">
                    <div class="logo">Response</div>
                    <div class="input_box">
                        <input ref='urlInput' type="text" defaultValue={this.props.href} class="header_input_url" id="header_input_url" />
                        <span onClick={this.changeUrl} class="change_href"></span>
                    </div>
                </div>
                <div class="header_r">
                    <a href="javascript:void(0);"><i></i>Github</a>
                    <a href="javascript:void(0);"><i></i>Blog</a>
                </div>
            </header>
        )
    },
    changeUrl() {
        let _val = document.getElementById("header_input_url").value;
        let { dispatch } = this.props;
        dispatch(changeUrl(_val));
    }
});

function select(state) {
    return {
        href : state.href
    }
}

export default connect(select)(Header);