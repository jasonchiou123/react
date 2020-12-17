import React, { useState, useEffect,useRef,useContext } from 'react';

import {myContext} from './myContext'

let ws=null  //放外面,防止ws連線被 useEffect 更新時刷掉

export default function WSclient(props) {
	
	const cnt = useContext(myContext);
	
	useEffect(() => {
		WebSocketTest()
		console.log("first:"+JSON.stringify(cnt.data))
	},[]);  // 只作第一次

	useEffect(() => {
		console.log("data:"+JSON.stringify(cnt.data))

		if (cnt.data.cmd !='')
		   ws.send(cnt.data.cmd)
	},[cnt.data.cmd]);  // 訂閱刷新

	function WebSocketTest()
	{
		ws = new WebSocket(props.server);
		console.log(props.server)
			  //ws = new WebSocket("ws://localhost:88");
		  ws.onopen = function() {
			//let packet = {type:"sys",prompt:"已連線,請輸入名字..." };
			//dispatch(packet);
		  };
		  
		  ws.onmessage = function (evt){
			  let recv = JSON.parse(evt.data);
			  if (recv.type=='chat'){
				  recv.type='msg'
				  console.log("recv:"+evt.data)
				cnt.call(recv)
			  }
		  };
  
		  ws.onerror = function(){
			let packet = {type:"sys",prompt:"網路出錯了" };
			cnt.call(packet);
		  };
  
		  ws.onclose = function(){
			let packet = {type:"sys",prompt:"連線已關閉" };
			cnt.call(packet);
		  };
	}

	return ( <div></div> )
}



