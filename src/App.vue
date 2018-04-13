<template>
	<div id="app">
		<div class="loadingBox" :class="isShow?'show':'hide'">
			<div class="ajaxloader2">
				<div class="outer"></div>
				<div class="inner"></div>
			</div>
		</div>
		<div class="blackBox"></div>
		<lg-preview></lg-preview>
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data(){
			return{
				isShow:true,
				footData:[]
			}
		},
		created() {
			this.myfun.getThis(this);
			//定位
			this.myfun.getLocation();

			$(document).scroll(function(){
				var wh = $(document).scrollTop();
				if(wh>3){
					$('header').addClass('myFixed');
				}else{
					$('header').removeClass('myFixed');
				}
			});
			localStorage.token = localStorage.token || '123';
			this.isShow = false;
			this.myfun.addBackClick();
		}
	}
</script>
<style lang="less" scoped="scoped">

</style>