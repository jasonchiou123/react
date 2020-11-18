import React,{ useReducer } from 'react';

function GlobalHook() {
  function stepReducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      default:
        throw new Error();
    }
  }
  function mapReducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      default:
        throw new Error();
    }
  }
  const stepInit = { cmd:"", x:-1, y:-1, timeout:0, draw:'', ans:''}
  const mapInit = { code:0,x:-1,y:-1,state:[],seat:'',id:''  }
  const gameData = React.createContext();
  const [stepSt,stepDisp] = useReducer(stepReducer,stepInit);
  const [mapSt,mapDisp] = useReducer(mapReducer,mapInit);
  
  return (
    <gameData.Provider value={stepSt,stepDisp,mapSt,mapDisp}>
    {this.props.children}
    </gameData.Provider>
  ) 
}
export default GlobalHook


