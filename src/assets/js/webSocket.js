import {MessageBox,Toast} from 'mint-ui';
function webSocket(){
	this.ws = new WebSocket("ws://localhost:8181");
}
webSocket.prototype = {
	sendMessage:function(msg){
		this.ws.onopen = function (e) {
			if(!msg){
				MessageBox('提示','输入信息不为空')
			}
			console.log(msg);
	        console.log('Connection to server opened');
	        this.ws.send(msg);
	    }
	},
	getMessage:function(){
		this.ws.onmessage  = function (msg) {
			var received_msg = msg;
			console.log('Connection to server onmessage');
			console.log(msg);
	    }
	},
	onClose:function(){
		this.ws.onclose  = function (msg) {
			var received_msg = msg;
			console.log('Connection to server onmessage');
			console.log(msg);
	    }
	}
}

export default webSocket;