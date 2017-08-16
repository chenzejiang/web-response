import React from 'react';
import { connect } from 'react-redux';
import { changeShow } from '../actions';

const BoxLeft = React.createClass({
    render() {
            let { show } = this.props;
        return (
            <div class="box_l">
                <a class="btn" href="javascript:void(0)" onClick={this.changeShow.bind(this,'all')} >ALL</a>
                <a class="btn" href="javascript:void(0)" onClick={this.changeShow.bind(this,'andriod')} >Andriod</a>
                <a class="btn" href="javascript:void(0)" onClick={this.changeShow.bind(this,'ios')} >IOS</a>
            </div>
        )
    },
    // 改变显示的设备
    changeShow(_device) {
        let { dispatch } = this.props;
        dispatch(changeShow(_device));
    }
});

function select(state) {
    return {
        show : state.show
    }
}
export default connect(select)(BoxLeft);












