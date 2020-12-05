import React, { useState, useEffect,useRef,useContext } from 'react';

import {myContext} from './myContext'
export default function WSclient(props) {
	
	const [state, dispatch] = useContext(myContext);
	let ws=null
	
	useEffect(() => {
		WebSocketTest()
	},[]);  // 只作第一次

	useEffect(() => {
		if (state.cmd !='')
		  ws.send(state.cmd)
	},[state.cmd]);  // 訂閱刷新

	function WebSocketTest()
	{
		ws = new WebSocket(props.server);
		console.log(props.server)
			  //ws = new WebSocket("ws://localhost:88");
		  ws.onopen = function() {
			let packet = {type:"sys",prompt:"已連線,請輸入名字..." };
			dispatch(packet);
		  };
		  
		  ws.onmessage = function (evt){
			  let recv = JSON.parse(evt.data);
			  if (recv.cmd=='chat'){
				  recv.type='msg'
				dispatch(recv)
			  }
		  };
  
		  ws.onerror = function(){
			let packet = {type:"sys",prompt:"網路出錯了" };
			dispatch(packet);
		  };
  
		  ws.onclose = function(){
			let packet = {type:"sys",prompt:"連線已關閉" };
			dispatch(packet);
		  };
	}

	return ( <div></div> )
}



