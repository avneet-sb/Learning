import { applyMiddleware, createStore, combineReducers } from 'redux'; //redux is basically used to write clean code and provide easy state management 
import logger from 'redux-logger'
import axios from 'axios'
import thunk from 'redux-thunk'


/**
 * three principles of redux
 * 1. single source of truth meaning single global storage
 * 2. state is read only. dont directly change in state
 * 3. changes are made with pure functions
 */
const inc = "account/increment";
const dec = "account/decrement";
const incByAmt = "account/increaseByAmount";
const init = "account/init";


const store = createStore(
        combineReducers({account : AccReducer, bonus : BonusReducer}), //combineReducers used to combine the states from different reducers
        applyMiddleware(logger.default,thunk.default)
    )    ///store acts as a global store for the application providing various functions

//const store = createStore( AccReducer,applyMiddleware(logger.default,thunk.default))

// dispatch is the event and reducer is the listener
function AccReducer(state = {amount: 1 },actions){ //in redux reducer we pass two params state and actions similar to react reducer
    if(actions.type==init){
        return {amount:actions.payload};
    }
    
    if(actions.type==inc){
        return {amount:state.amount+1}; //we are returning new object every time coz its a good practice nd if we return state.amount = state.amount+
    }                                    // it will pass state.amount as reference so it will print incremented amount but if we store in array at every increment  
                                        // then for suppose 6th increment val in arr should be 123456 but it will be 666666 bcoz pass by reference so return a new copy evry time
    if(actions.type==dec){
        return {amount:state.amount-1};
    }
    if(actions.type==incByAmt){
        return {amount:state.amount+actions.payload};
    }
    return state;
}

//made a second reducer showing that 2 reducers can be made for 2 states and it is recommended to keep the reducer simple
//two diff reducers can use same action creator like here we used incbyAmount whihc is a action creator of accpunt
function BonusReducer(state={bonus:0},actions){ 
    if(actions.type==incByAmt){
        if(actions.payload>=100){
            return {bonus:state.bonus+1}
        }
    }
    return state;
}

function increment(){
    return {type:inc};
}

function decrement(){
    return {type:dec};
}

function increaseByAmount(value){
    return {type:incByAmt,payload:value};
}

/**
 * yaha pr we have made use of middle ware - middleware waha kamm ataa hai jab dispatch call krne ke baad before dispatch reaching reducer 
 * we have to do something in between like isss case me we have wanted to fill state initial amount with amount from db using api. now we can first 
 * call data from api and then call dispatch and thus only one dispatch call but that is wrong acc to principles of redux since calling from api 
 * is also state change so we have to perfomr it in action creator so thats why here first we called getUser in which we fetched the data
 * then we called dispatch with the data 
 * -----------------------------------------
 * Generally store.dispatch(getUser); iss call me getUser ke baad () aate hai but yaha nhi lagege cos we are telling ide that we are using thunk
 * that is we want to pause dispatch call in between do something than again dispatch to without parenthesis sent here 
 * now without() pass krne pr thunk smjh jaega automatically ki dospatch rokna beech me or getUser ko do params dedega that is ek or dispatch and
 * a getState(). |
 *               v
 */
// async function getUser(dispatch,getState){
//     const {data} = await axios.get('http://localhost:3000/accounts/1') 
    
//     dispatch(initUser(data.amount));    
// }

function getUser(id){
    //here dynamically passinf the id so yaha hymne neeche wale dispatch call me () use krliye kuki params pass krne the but thunk is smart
    // it knows ki usse middle ware ki trah use krenhe to rokna hai kuch beech me to jaha fetch krke dispatcg call krna hoga uss func me dedege hum apne 2 params
    return async (dispatch,getState)=>{
        const {data} = await axios.get(`http://localhost:3000/accounts/${id}`) 
    
        dispatch(initUser(data.amount));  
    }  
}

function initUser(value){
    return {type:init,payload:value}
}

// store.subscribe(()=>{              //subscribe function runs everytime action is dispatched
//     console.log(store.getState())  //getState() give access to global state
// })

setTimeout(()=>{
    store.dispatch(increaseByAmount(100));     //kafi similar to usereducer in react
},2000)

