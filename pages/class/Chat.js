import React, { useState, useEffect,useRef,useContext } from 'react';

function Chat() {

	const chess = useContext(gameData);

	useEffect(() => {
		//pos.current.style={marginLeft:'0px',marginTop:'0px'}
		console.log('init...')
	},chess.maps);  // 訂閱刷新棋圖


	function sendlogin() {
	var packet = {cmd:"login"};
	packet.usr=$("#usr").val();
	ws.send(JSON.stringify(packet));  
	}

	function sendmsg() {
	var packet = {cmd:"chat"};
	packet.msg=$("#msg").val();
	$("#msg").val('');
	ws.send(JSON.stringify(packet));  
	}

	function wsclose(){
	ws.close();
	}

	return (
	<div>
	<input id='pos' type="text" />
	<input id='pos' type="password" />
	<input id='pos' type="button" value='登入' />
	<input id='pos' type="button" value='離線' />
	<hr />	
	<textarea id='pos' cols="50" rows="5">
	</textarea>
	<input id='pos' type="text" />
	<input id='pos' type="button" value='送出' />
	</div>
	)
}
export default Chat
