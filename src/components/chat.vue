<template>
	<div id="chat">
		<input type="input" name="" id="" v-model="msg" placeholder="请输入信息"/>
		<input type="button" name="" id="" value="发送" @click="sendMsg"/>
		<div class="testBox" @click="change" :style="{transform:red}"></div>
	</div>
</template>

<script>
	import {MessageBox,Toast} from 'mint-ui';
	export default {
		name: 'chat',
		data() {
			return {
				msg:'',
				ws:null,
				red:'translate3d(0px,0px, 0px)'
			}
		},
		created() {
			this.$nextTick(() => {
				this.getWs();
			})
		},
		methods: {
			change(){
				this.red = 'translate3d(50px,50px, 0px)';
			},
			getWs() {
				this.ws = new WebSocket("ws://localhost:8181"); //本地访问  
				this.ws.onopen = function() {
					console.log("ws open");
				}
				this.ws.onmessage = function(event) {
					console.log(event);
				}
				this.ws.onclose = function() {
					console.log("ws close");
				}
				this.ws.onerror = function() {
					console.error("ws error");
				}
			},
			sendMsg(){
				if(!this.msg){
					return MessageBox('提示','信息不为空！');
				}
				this.ws.send(this.msg);
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
.testBox{width: 400px;height: 400px;background: #0000FF;left: 0px;top: 0px;position: absolute;}
</style>