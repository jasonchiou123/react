import React from 'react';

export const initState = {
  cmd: '',  //指令
  msg: '',  //訊息
}

export const myContext= React.createContext();
export const reducer =(state, action) =>{
    switch (action.type) {
      case 'login':
        state.cmd=JSON.stringify(action)
        return state;

      case 'chat':
        state.cmd=JSON.stringify(action)
        return state;
      case 'quit':
        state.cmd=JSON.stringify(action)
        return state;
        
      case 'msg':
        state.cmd=JSON.stringify(action)
        return state
      case 'sys':
        console.log(action.prompt)
        return state  
      default:
        console.log('error reducer')
        //throw new Error();
    }
}
