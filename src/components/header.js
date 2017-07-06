import React from 'react';

export default class PCFooter extends React.Component {
    constructor() {
        super();
        this.state = {
            year:(new Date()).getFullYear()
        };
    }

    render() {
        return (
            <header class="header">
                
            </header>
        );
    };
}
