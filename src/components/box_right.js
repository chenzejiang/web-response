import React from 'react';
import Page from './page';  // 页面模块
export default class Box_r extends React.Component {
    constructor() {
        super();
        this.state = {
            //year:(new Date()).getFullYear()
        };
    }
    render() {
        return (
            <div class="box_r">
                <Page></Page>
            </div>
        );
    };
}