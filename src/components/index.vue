<template>
	<div id="index">
		<!--<header>
			<div class="searchBox">
				首页
			</div>
		</header>-->
		<div class="headerBox">
			<div class="top"></div>
			<div class="bottom">
				<div class="left"><p class="title">当前时间</p><p class="text" v-text="nowTime"></p></div>
				<div class="right"></div>
			</div>
		</div>
		<div class="contentBox">
			<ul>
				<li v-for="data in listData" :class="data.myClass">
					<div class="imgbox"></div>
					<div class="text" v-text="data.title"></div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'index',
		data(){
			return{
				nowTime:'',//当前时间
				listData:[{myClass:'talk',title:'我要聊天！'},{myClass:'sendFlower',title:'我要送花！'},{myClass:'sign',title:'每日签到！'}]
			}
		},
		created(){
			setInterval(()=>{
				this.nowTime = this.myfun.format('','yyyy-MM-dd hh:mm:ss');				
			},1000);
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped="scoped">
#index{
	.headerBox{width: 100%;height: 400px;overflow: hidden;background: url(../assets/image/bg.jpg) no-repeat center;background-size:100% 100%;position: relative;
		img{width: 100%;}
		.bottom{position: absolute;height: 100px;width: 100%;display: flex;left: 0;top: auto;bottom: 0;
			div{color: #fff;height: 100%;flex: 1;padding: 10px;}
			.left .title{font-size: 35px;letter-spacing: 20px;text-align: center;}
			.left .text{font-size: 25px;text-align: center;margin-top: 10px;}
		}
	}
	.contentBox{padding: 30px;
		li{height: 160px;width: 100%;border-bottom: 5px solid #e1e1e1;transition:.2s all;padding: 20px 0;
			&:active{background: #e7e7e7;}
			.imgbox{width: 120px;float: left;height: 100%;margin-right: 50px;background: center no-repeat;border-radius:100%;background-size:70% 70%;border:3px solid #fff;}
			.text{width: auto;height: 120px;line-height: 120px;text-align: left;font-weight: 40px;font-weight: bold;float: left;}
		}
		li.talk{color: skyblue;
			.imgbox{background-image:url(../assets/image/talk.png);border-color:skyblue;}
			.text{color: skyblue;}
		}
		li.sendFlower{color: #c74d47;
			.imgbox{background-image:url(../assets/image/flower.png);border-color:#c74d47;}
			.text{color: #c74d47;}
		}
		li.sign{color: #707070;
			.imgbox{background-image:url(../assets/image/sign.png);border-color:#707070;}
			.text{color: #707070;}
		}
	}	
}
</style>