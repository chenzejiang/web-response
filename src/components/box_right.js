import React from 'react';
import { connect } from 'react-redux';
import { changeDircetion } from '../actions';
import Page from './page';  // 页面模块
const BoxRight = React.createClass({
    render() {
        let { deviceList, show, href } = this.props;
        return (
            <div class="box_r">
                <Page></Page>
            </div>
        );
    }
})
function select(state) {
    return {
        href : state.href,
        show : state.show,
        deviceList : state.deviceList
    }
}
export default connect(select)(BoxRight);
