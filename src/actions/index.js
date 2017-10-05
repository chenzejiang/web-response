///*
// * action 类型
// */
//
//export const ADD_TODO = 'ADD_TODO';
//export const COMPLETE_TODO = 'COMPLETE_TODO';
//export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
//
///*
// * 其它的常量
// */
//
//export const VisibilityFilters = {
//    SHOW_ALL: 'SHOW_ALL',
//    SHOW_COMPLETED: 'SHOW_COMPLETED',
//    SHOW_ACTIVE: 'SHOW_ACTIVE'
//};
//
///*
// * action 创建函数
// */
//
//export function addTodo(text) {
//    return { type: ADD_TODO, text }
//}
//
//export function completeTodo(index) {
//    return { type: COMPLETE_TODO, index }
//}
//
//export function setVisibilityFilter(filter) {
//    return { type: SET_VISIBILITY_FILTER, filter }
//}

//let nextTodoId = 0;
//// 添加事件
//export const addTodo = (text) => ({
//    type: 'ADD_TODO',
//    id: nextTodoId++,
//    text
//})
//
//// 筛选
//export const setVisibilityFilter = (filter) => ({
//    type: 'SET_VISIBILITY_FILTER',
//    filter
//})
//
//// 开启关闭
//export const toggleTodo = (id) => ({
//    type: 'TOGGLE_TODO',
//    id
//})


//import fetch from 'isomorphic-fetch';

// 纯事件定义
export const ADD_COUNT = 'ADD_COUNT';
export const ADD_PERSON = 'ADD_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';

export const CHANGE_URL = 'CHANGE_URL';  // 改变链接地址
export const SHOW_DEVICE = 'SHOW_DEVICE'; // 显示 ios android all
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';  // 改变某个设备的方向
export const CHANGE_ZOOM = 'CHANGE_ZOOM';  // 改变缩放
export const CHANGE_ALL_DIRECTION = 'CHANGE_ALL_DIRECTION'; // 把所有设备方向改变
export const CHANGE_SHOW_INDEX = 'CHANGE_SHOW_INDEX'; // 是否显示首页

// async
// 异步的请求定义
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAUILE = 'FETCH_FAUILE';

// pure functions
export function addCount() {
    return {
        type : ADD_COUNT
    }
}

// 改变地址
export function changeUrl(href) {
    return {
        type : CHANGE_URL,
        href
    }
}

// 显示设备
export function changeShow(show) {
    return {
        type : SHOW_DEVICE,
        show
    }
}

// 改变某个设备的方向
export function changeDircetion(num) {
    return {
        type : CHANGE_DIRECTION,
        num:num
    }
}

// 是否显示首页
export function changeShowIndex(showIndex) {
    return {
        type : CHANGE_SHOW_INDEX,
        showIndex
    }
}



// 改全部设备的方向
export function changeAllDirection(direction) {
    return {
        type : CHANGE_ALL_DIRECTION,
        direction
    }
}

//export function changeDircetion(deviceList) {
//    return {
//        type : CHANGE_DIRECTION,
//        deviceList:deviceList
//    }
//}


// 改变缩放
export function changeZoom(zoom) {
    return {
        type : CHANGE_ZOOM,
        zoom
    }
}

//export function addPerson(person) {
//    return {
//        type : ADD_PERSON,
//        person
//    }
//}
//
//export function deletePerson(idx) {
//    return {
//        type : DELETE_PERSON,
//        idx
//    }
//}
//
//export function refreshStart() {
//    return {
//        type : FETCH_START
//    }
//}
//
//export function refreshSuccess(list) {
//    return {
//        type : FETCH_SUCCESS,
//        list
//    }
//}
//
//export function refreshFauile() {
//    return {
//        type : FETCH_FAUILE
//    }
//}

// 定义的非纯函数，提供异步请求支持
// 需要在sotre中使用thunkMiddleware
//export function refresh() {
//    return dispatch => {
//        dispatch(refreshStart());
//        return fetch(`src/mock/fetch-data-mock.json`)
//            .then(response => response.json())
//            .then(json => {
//                setTimeout(() => {
//                    dispatch(refreshSuccess(json && json.data.list));
//                }, 3000);
//            });
//    }
//}

