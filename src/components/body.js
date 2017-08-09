import React from 'react';

export default class Body extends React.Component {
    constructor() {
        super();
        this.state = {
            year:(new Date()).getFullYear()
        };
    }
    render() {
        return (
            <section class="body">
                <div class="big_logo">
                    <div class="_logo">J</div>
                    <div class="big_logo_bg">
                        <img src="https://sizzy.co/static/media/shapes.9a3ef504.svg" />
                    </div>
                </div>
                <div class="body_box">
                    <h5>欢迎使用，输入 Url 启动</h5>
                    <div class="input_box">
                        <input type="text" placeholder="Enter an URL" class="body_input_url" id="body_input_url" />
                        <span></span>
                    </div>
                </div>
                <a class="footer_a" target="_blank" href="https://www.chenzejiang.com" >{this.state.year} by @webJ</a>
            </section>
        );
    };
}