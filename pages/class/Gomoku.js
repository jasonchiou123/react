import React, { useState, useEffect,useRef,useContext } from 'react';

function Gomoku() {
	let zoneSite=[]
	const pos = useRef(null);
	const cls = useRef(null);
	const chess = useContext(gameData);
	const [chess,dispatch] = useReducer(reducer,'');
	
	for(var i=0,m=0;i<=29*18;i=i+29,m++){
		for(var j=0,n=0;j<=29*18;j=j+29,n++){
			let tmp='go_'+n+'_'+m
			let xy={position:'absolute',top:i+"px",left:j+"px",zIndex:1};
			//let myfunc='goclick('+tmp+')';
			let comp = <img src='/the5/empty.png' id={tmp} onclick={'goclick('+tmp+')'} style={xy} />
			zoneSite.push(comp)
		}              
	}		

	//棋步座標 更新:reducer()
	function goclick(ch){
		var pos=ch.id.split('_');
		var packet = {cmd:"play", x:pos[2], y:pos[1], timeout:timeout, draw:draw, ans:ans };
		dispatch(packet)  //更新:reducer()
	  //ws.send(JSON.stringify(packet));  
	}
	

	useEffect(() => {
		//pos.current.style={marginLeft:'0px',marginTop:'0px'}
		console.log('init...')
	},chess.maps);  // 訂閱刷新棋圖

	useEffect(() => {
		//pos.current.style={marginLeft:'0px',marginTop:'0px'}
		console.log('init...')
	},[]);  // []: 只作初始化一次,以後不再render

 	return ( 
	<div ref={cls} style={{position:'relative'}}>
	<img src="/the5/board.png" style={{position:'absolute',top:'0px',left:'0px',zIndex:0}} />
	<img src="/the5/cover.png" id='mask' style={{position:'absolute',top:'0px',left:'0px',zIndex:2}} />
	<img ref={pos} src="/the5/pos.png" id='pos' style={{position:'absolute',top:'0px',left:'0px',zIndex:3}} />
	{zoneSite}
	</div>
	)
}
export default Gomoku
/*

function goclick(ch){
    var pos=ch.id.split('_');
	play(pos[2],pos[1],'','');
}

function play(x,y,draw,ans){
	var packet = {cmd:"play", x:x, y:y, timeout:timeout, draw:draw, ans:ans };
  ws.send(JSON.stringify(packet));  
}

function showgo(obj){
	if (obj.code<0){
	myAlert('error play');
	return;
	}
	
	if (obj.code>=0){  
	var gotmp='';
		for(var i=0;i<=18;i++){
			for(var j=0;j<=18;j++){
				if(obj.state[i][j]==undefined)
					gotmp=2;
				else
					gotmp=obj.state[i][j];
				
				$("#go_"+j+"_"+i).attr("src","/public/the5/"+gotmp+".png");
			}              
		}
		if(obj.y!=undefined){
			$("#pos").css("margin-left",29*obj.y+"px");
			$("#pos").css("margin-top",29*obj.x+"px");
		}
	}
	
	if (obj.code==1){
	myStop();
	var showstr='winner:'+obj.seat+':'+obj.id;
	myChat(showstr);
	resetSure(showstr);
	}
}
*/