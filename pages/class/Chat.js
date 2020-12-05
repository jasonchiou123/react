import React, { useState, useEffect,useRef,useContext } from 'react';
import { TextInput,Button, Text,View } from 'react-native';
import {myContext} from './myContext'
import { FormattedMessage  } from 'react-intl';
export default function Chat() {
	
	const usr= useRef()
	const pwd= useRef()
	const msg= useRef()
	const board= useRef()
	const [state, dispatch] = useContext(myContext);

	useEffect(() => {  //自刷對話區
		board.current.value+=state.msg
	},[state.msg]);  // 訂閱更新

	function sendlogin() {
	var packet = {type:"login",
	usr:usr.current.value,
	pwd:pwd.current.value,
	};
	dispatch(packet)
	}

	function sendmsg() {
		var packet = {type:"chat",
		msg:msg.current.value,
		};
		msg.current.value=''
		dispatch(packet)		
	}

	function wsclose(){
		var packet = {type:"quit" };
		dispatch(packet)
	}

	return (
	<View>
	<FormattedMessage  id="app.learn" />
	<Text>帳號</Text>
	<TextInput id='usr' ref={usr} />
	<Text>密碼</Text>
	<TextInput id='pwd' ref={pwd} />
	<Button id='login' title='登入' onPress={sendlogin} />
	<Button id='logout'  title='離線' onPress={wsclose} />

	
	<TextInput id='board' ref={board} cols="50" rows="5" multiline='true' />
	<Text>===對話區===</Text>
	<TextInput id='msg' ref={msg} />
	<Button id='pos' title='送訊' onPress={sendmsg}  />
	</View>
	)
}

