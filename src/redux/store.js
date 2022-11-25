// // 


// const schedules = [
//     { id: "a", dependencies: ["b", "f"] },
//     { id: "b", dependencies: [] },
//     { id: "c", dependencies: ["a"] },
//     { id: "d", dependencies: [] },
//     { id: "e", dependencies: ["c"] },
//     { id: "f", dependencies: [] },
// ];


// const executedJob = (schedules) => {
//     let arr = [];
//     let x = 0;
//     while(arr.length !== schedules.length) {
//         const {id, dependencies} = schedules[x];
// a            arr.push(id) 
//         }
//         else {
//             let check = dependencies.every((item)=> arr.includes(item))
//             if(check)
//                 arr.push(id);
//         }
//         if(x === (schedules.length-1)) {
//             x = 0;
//         }
//         else {
//             x++;
//         }
//     }
//     return arr
// }


// const res = executedJob(schedules)
// console.log(res)


// function func1(
//     function (
//         function () {

//     }) {
//     console.log("func2")
// }) {
//     console.log("fun1")
// }



import {createStore, applyMiddleware, compose} from 'redux'
import { rootReducer } from './reducers'
import thunk from 'redux-thunk'

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
