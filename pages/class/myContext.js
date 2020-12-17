import  React,{useReducer } from 'react'

export const initState = {
  cmd: '',  //指令
  msg: '',  //訊息
}

export const myContext= React.createContext();
export const reducer =(state, action) =>{
    switch (action.type) {
      case 'chat':
        console.log("reducer前:"+JSON.stringify(state))
        //注意! 不能直接改值在原來state上, useEffect的更新是認變數位址的!!
        var newState = JSON.parse(JSON.stringify(state));
        //所以要先copy一份 newState
        newState.cmd=JSON.stringify(action)
        console.log("reducer後:"+JSON.stringify(newState))
        return newState;
        
      case 'msg':
        //注意! 不能直接改值在原來state上, useEffect的更新是認變數位址的!!
        var newState2 = JSON.parse(JSON.stringify(state));
        //所以要先copy一份 newState
        newState2.msg=JSON.stringify(action.msg)
        return newState2

      case 'sys':
        console.log(action.prompt)
        return state  
      default:
        console.log('error reducer')
        //throw new Error();
    }
}

function Provider(props) {
  const [state, dispatch] = useReducer(reducer,initState);
    return (
     <div>
   <myContext.Provider value={{data:state, call:dispatch}}>
   {props.children}
  </myContext.Provider>
     </div>
   )
}
export default Provider

