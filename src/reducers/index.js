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
import { ADD_COUNT, ADD_PERSON, DELETE_PERSON, FETCH_START, FETCH_SUCCESS, FETCH_FAUILE, CHANGE_URL, SHOW_DEVICE} from '../actions/index';

// store中可以定义页面中的初始状态
const initialState = {
    count:0,   // count = 0
    count2:2,
    show:'all',  // all, ios, andriod
    href:'http://m.7m.com.cn/login/login.html'
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
    href
});

export default Reducers;
