
<script>
	// import '@/static/js/riddler-sdk-0.2.2.js';
	export default {
		onLaunch: function() {
			console.log('App Launch')
			plus.navigator.setFullscreen(true);
			if (uni.getStorageSync('token')) {
				uni.switchTab({
					url: '/pages/home/home'
				})
			}
		},
		onShow: function() {
			console.log('App Show')
			
			uni.getNetworkType({
				success: function (res) {
					console.log(res.networkType);
				}
			});
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "@/static/uview-ui/index.scss";
	@import "@/static/css/style.css";
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
</style>
