<template>
	<div id="gameIndex">
		<div class="gameContainer">
			<div class="myPositon" :style="{transform:moveStyle}"></div>
			<ul v-for="(dataX,index) in Xcount">
				<li v-for="(dataY,item) in Ycount" @click="move(index,item)"></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'gameIndex',
		data(){
			return{
				saveR:20,
				Xcount:18,
				Ycount:23,
				moveStyle:'translate(0px,0px)',
				isXmove:false,//默认先从X方向移动
				RecordY:0,//记录上一个的Y方向
				RecordX:0,//记录上一个的X方向
			}
		},
		methods:{
			move(valX,valY){
				 
				if(!this.isXmove){
					if(this.RecordX==valX){
						this.RecordY = valY;
						this.isXmove = true;
						this.move(valX,valY);
						return;
					}
					this.moveStyle = 'translate('+valX*0.5333333333+'rem,'+this.RecordY*0.5333333333+'rem)';
					setTimeout(()=>{
						this.RecordY = valY;
						this.isXmove = true;
						this.move(valX,valY);
					},160);				
				}else{
					this.isXmove = false;
					this.RecordX = valX;
					this.moveStyle = 'translate('+valX*0.5333333333+'rem,'+valY*0.5333333333+'rem)';
				}
				console.log(this.moveStyle);
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
#gameIndex{width: 100%;height: 100%;}
.gameContainer{
	width: 100%;height: 950px;background: #fff;margin: 0 auto;overflow:hidden;border:15px solid #E1E1E1;position: relative;
	.myPositon{width: 40px;height: 40px;left: 0px;top: 0px;position: absolute;background: #4CAF50;transition:transform 0.15s linear;}
	ul{float: left;
		li{width: 40px;height: 40px;}
	}
}
</style>