//const initialState = {
//    "number":0
//}
//
//export default (state = initialState, action) => {
//    switch (action.type) {
//        case 'INCREMENT':
//            var buf = {};
//            buf['number'] = initialState["number"]++;
//            return Object.assign({}, state, buf);
//        case 'DECREMENT':
//            var buf = {};
//            buf['number'] = initialState["number"]--;
//            return Object.assign({}, state, buf);
//        default:
//            return state
//    }
//}

//import { combineReducers } from 'redux'
//import todos from './todos'
//import visibilityFilter from './visibilityFilter'
//
//const todoApp = combineReducers({
//    todos,
//    visibilityFilter
//})
//
//export default todoApp

import { combineReducers } from 'redux';
import { ADD_COUNT, ADD_PERSON, DELETE_PERSON, FETCH_START, FETCH_SUCCESS, FETCH_FAUILE, CHANGE_URL, SHOW_DEVICE, CHANGE_DIRECTION, CHANGE_ZOOM} from '../actions/index';
import { DEVICES_LIST } from '../config/config.js';

// store中可以定义页面中的初始状态
const initialState = {
    count:0,   // count = 0
    count2:2,
    show:'all',  // all, ios, andriod
    href:'http://m.7m.com.cn/login/login.html', // 链接
    zoom:100, // 缩放
    deviceList:[
        {
            "id":1,
            "name": 'iphone 4',
            "width":320,
            "height":480,
            "direction":true,
            "type":"ios"
        }
        //,
        //{
        //    id:2,
        //    name: 'iphone 5',
        //    width:320,
        //    height:568,
        //    direction:true,
        //    type:"ios"
        //}
        //{
        //    id:3,
        //    name: 'iphone 6',
        //    width:375,
        //    height:667,
        //    direction:true,
        //    type:"ios"
        //},
        //{
        //    id:4,
        //    name: 'iPhone 7 Plus',
        //    width:414,
        //    height:736,
        //    direction:true,
        //    type:"ios"
        //},
        //{
        //    id:4,
        //    name: 'Galaxy S5',
        //    width:360,
        //    height:640,
        //    direction:true,
        //    type:"andriod"
        //},
        //{
        //    id:5,
        //    name: 'Nexus 4',
        //    width:384,
        //    height:640,
        //    direction:true,
        //    type:"andriod"
        //},
        //{
        //    id:6,
        //    name: 'iPad',
        //    width:768,
        //    height:1024,
        //    direction:true,
        //    type:"ios"
        //}
    ] // 设备信息列表
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

// count的初始状态以及处理之后返回的state值
function count2(state = initialState.count2, action) {
    switch (action.type) {
        case ADD_COUNT :
            return state + 1;
        default :
            return state;
    }
}

function deviceList(state = initialState.deviceList, action) {
    switch (action.type) {
        case CHANGE_DIRECTION :
            //console.log(action.deviceList);
            //var buf = {};
            //buf['deviceList'] = action.deviceList;
            //console.log(Object.assign({}, state, buf));
            //console.log(state);
            console.log(action.deviceList);
            console.log("11111111111111111111111111111111111111111");
            //return Object.assign({}, state, buf);
            return action.deviceList;
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


function href(state = initialState.href, action) {
    switch (action.type) {
        case CHANGE_URL :
            return action.href;
        default :
            return state;
    }
}

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
    count2,
    show,
    href,
    zoom,
    deviceList
});

export default Reducers;
