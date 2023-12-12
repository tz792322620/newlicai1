<template>
  <a :href="userInfo.support_link" target="_blank" @mousedown="dragStart" @touchstart="dragStart">
    <div 
      class="floating-button" 
      @mousedown="dragStart" 
      @touchstart="dragStart"
      @mouseup="dragEnd" 
      @touchend="dragEnd"
      :style="{ right: right + 'px', bottom: bottom + 'px' }"
    >
      客服
    </div>
  </a>
</template>
<script>
import { getUserInfo } from '@/api/api.js'
export default {
  data() {
    return {
      userInfo: '',
      right: 30,
      bottom: 60,
      startX: 0,
      startY: 0,
      isDragging: false,
      customerServiceUrl: 'https://example.com', // 替换为您的客服链接
    };
  },
  onLoad() {
  	this.getUser()
  },
methods: {
	async getUser() {
		const res = await getUserInfo()
		if (res.code === 1) {
			this.userInfo = res.data
			console.log(this.userInfo)
		}
	},
    dragStart(event) {
      this.isDragging = false;
      event = event.type === 'touchstart' ? event.touches[0] : event;
      this.startX = event.clientX;
      this.startY = event.clientY;

      document.addEventListener('mousemove', this.dragging);
      document.addEventListener('touchmove', this.dragging, { passive: false });
    },
    dragging(event) {
		this.isDragging = true;
        event.preventDefault(); // 阻止默认行为，如页面滚动

        const clientX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
        const clientY = event.type === 'touchmove' ? event.touches[0].clientY : event.clientY;

        let deltaX = clientX - this.startX;
        let deltaY = clientY - this.startY;

        let newRight = this.right - deltaX;
        let newBottom = this.bottom - deltaY;

        // 获取屏幕宽高
        const screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
        const screenHeight = document.documentElement.clientHeight || document.body.clientHeight;

        // 计算按钮宽高的一半（假设按钮是正方形）
        const halfButtonSize = 30; // 根据实际按钮大小调整

        // 限制按钮移动范围，防止拖出屏幕
        newRight = Math.min(screenWidth - halfButtonSize, Math.max(halfButtonSize, newRight));
        newBottom = Math.min(screenHeight - halfButtonSize, Math.max(halfButtonSize, newBottom));

        this.right = newRight;
        this.bottom = newBottom;

        this.startX = clientX;
        this.startY = clientY;
    },
    dragEnd(event) {
      if (this.isDragging) {
        event.preventDefault(); // 如果发生了拖动，阻止链接的默认行为
      }
      document.removeEventListener('mousemove', this.dragging);
      document.removeEventListener('touchmove', this.dragging);
      this.isDragging = false;
    }
  
}
};
</script>

<style scoped>
.floating-button {
  position: fixed;
  width: 60px;
  height: 60px;
  background-color: #007AFF;
  color: white;
  border-radius: 30px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  user-select: none;
}
</style>
