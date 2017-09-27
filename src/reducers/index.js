
import { combineReducers } from 'redux';
import { ADD_COUNT, ADD_PERSON, DELETE_PERSON, FETCH_START, FETCH_SUCCESS, FETCH_FAUILE, CHANGE_URL, SHOW_DEVICE, CHANGE_DIRECTION, CHANGE_ZOOM, CHANGE_ALL_DIRECTION, CHANGE_SHOW_INDEX} from '../actions/index';
import { DEVICES_LIST } from '../config/config.js';

// store中可以定义页面中的初始状态
const initialState = {
    count:0,   // count = 0
    show:'all',  // all, ios, andriod
    href:'http://m.7m.com.cn/login/login.html', // 链接
    zoom:100, // 缩放
    showIndex:true, // 是否显示主页搜索
    deviceList:DEVICES_LIST // 设备信息
};


// count的初始状态以及处理之后返回的state值
function count(state = initialState.count, action) {
    switch (action.type) {
        case ADD_COUNT :
            return state + 1;
        default :
            return state;
    }
}


// 改变某个设备的方向，或者改变全部设备的方向
function deviceList(state = initialState.deviceList, action) {
    switch (action.type) {
        case CHANGE_DIRECTION :
            var _obj = state;
            _obj[action.num]["direction"] = !_obj[action.num]["direction"];
            return _obj;
        case CHANGE_ALL_DIRECTION :
            var _obj = state;
            for(var i=0; i<_obj.length; i++){
                _obj[i]["direction"] = action.direction;
            }
            return Object.assign([], state, _obj);
        default :
            return state;
    }
}


// 缩放的初始状态以及处理之后返回的缩放的值
function zoom(state = initialState.zoom, action) {
    switch (action.type) {
        case CHANGE_ZOOM :
            return action.zoom;
        default :
            return state;
    }
}

// 跳转链接
function href(state = initialState.href, action) {
    switch (action.type) {
        case CHANGE_URL :
            return action.href;
        default :
            return state;
    }
}

// 是否显示首页
function showIndex(state = initialState.showIndex, action) {
    switch (action.type) {
        case CHANGE_SHOW_INDEX :
            return action.showIndex;
        default :
            return state;
    }
}

// 改变显示什么设备
function show(state = initialState.show, action) {
    switch (action.type) {
        case SHOW_DEVICE :
            return action.show;
        default :
            return state;
    }
}

const Reducers = combineReducers({
    count,
    show,
    showIndex,
    href,
    zoom,
    deviceList
});

export default Reducers;
