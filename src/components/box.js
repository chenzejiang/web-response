import React from 'react';
export default class Box extends React.Component {
    constructor() {
        super();
        this.state = {
            year:(new Date()).getFullYear()
        };
    }
    render() {
        return (
            <section id="box" class="box">
                <div class="box_l"></div>
                <div class="box_r"></div>
            </section>
        );
    };
}