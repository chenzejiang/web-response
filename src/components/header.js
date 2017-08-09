import React from 'react';
export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            year:(new Date()).getFullYear()
        };
    }
    render() {
        return (
            <header class="header">
                <div class="header_l">
                    <div class="logo">Response</div>
                    <div class="input_box">
                        <input type="text" defaultValue="https://www.chenzejiang.com" class="header_input_url" id="header_input_url" />
                        <span></span>
                    </div>
                </div>
                <div class="header_r">
                    <a href="javascript:void(0);"><i></i>Github</a>
                    <a href="javascript:void(0);"><i></i>Blog</a>
                </div>
            </header>
        );
    };
}
