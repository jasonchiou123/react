import React, { useState, useEffect,useRef,useContext } from 'react';

function WebSocket() {

	const chess = useContext(gameData);
	WebSocketTest()
	
	useEffect(() => {
		//pos.current.style={marginLeft:'0px',marginTop:'0px'}
		console.log('init...')
	},chess.maps);  // 訂閱刷新棋圖

	function WebSocketTest()
	{
	   if ("WebSocket" in window)
	   {
		  //alert("您的浏览器支持 WebSocket!");
		  ws = new WebSocket("wss://localhost:88");
	  //ws = new WebSocket("ws://pytech.online:88");
		  ws.onopen = function()        {
		  alert("已連線,請輸入名字...");
		  };
		  
		  ws.onmessage = function (evt){
			  var recv = JSON.parse(evt.data);
  
			  if (recv.cmd=='login'){
				  if (recv.err != undefined){
					  alert('登入錯誤,帳號重複');
				  } else {
					  $('.SignGroup').hide();
					  var myuser ='<a href="javascript:showUser(\''+recv.data+'\')">'+recv.data+'</a>:<span>已上線</span><br>';
					  $('#chat').append(myuser);
					  var chatID = recv.data;
					  $('.private').attr('id',chatID);
				  }
			  }
			  
			  if (recv.cmd=='chat'){
			  var myuser ='<a href="javascript:showUser(\''+recv.usr+'\')">'+recv.usr+'</a>:<span>'+recv.data+'</span><br>';
			  $('#chat').append(myuser);
			  }
			  
			  if (recv.cmd=='rec'){
			  var tmpstr='';
				  for(var id in recv.data){
					  tmpstr+=recv.data[id].usr+' : '+recv.data[id].msg+"\n";
				  }  
			  var tmp =$("#rec").val()+tmpstr;
			  $("#rec").val(tmp);	
			  }
			  
			  if (recv.cmd=='notify')			{
				  if (recv.err != undefined)
					  alert(recv.err+'不在線上');
				  else{
					  $("#private-chat").text(recv.sender+':'+recv.data);
				  }
			  }
			  if (recv.cmd=='quit')			{
			  var myuser ='<a href="#">'+recv.usr+'</a>:<span>已離開</span><br>';
			  $('#chat').append(myuser);				
			  }
			  
		  };
  
		  ws.onerror = function(){
			 alert("網路出錯了..."); 
		  };
  
		  ws.onclose = function(){
			 alert("連接已關閉..."); 
		  };
	   }
	   else     {
		  alert("您的browser不支持WebSocket!");
	   }
	}

	return (
	<div>
	</div>
	)
}
export default WebSocket


