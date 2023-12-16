<template>
  <a :href="customerServiceUrl" target="_blank" @mousedown="dragStart" @touchstart="dragStart" 
	:style="{ right: right + 'px', bottom: bottom + 'px' }"
	style="width: 60px;height: 60px;display: inline-block;">
    <div 
      class="floating-button" 
      @mousedown="dragStart" 
      @touchstart="dragStart"
      @mouseup="dragEnd" 
      @touchend="dragEnd"
      @mousemove="dragging" 
      @touchmove="dragging"
      :style="{ right: right + 'px', bottom: bottom + 'px' }"
    >
      {{ $t('customerService') }}
    </div>
  </a>
  
</template>
<script>
import { getUserInfo } from '@/api/api.js'
export default {
  data() {
    return {
      right: 30,
      bottom: 60,
      startX: 0,
      startY: 0,
      isDragging: false,
      customerServiceUrl: JSON.parse(uni.getStorageSync('support_link')) // 您的客服链接
    };
  },
  methods: {
    dragStart(event) {
      // 兼容触摸和鼠标事件
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const clientY = event.touches ? event.touches[0].clientY : event.clientY;

      this.startX = clientX;
      this.startY = clientY;
      this.isDragging = true;
    },
    dragging(event) {
      if (!this.isDragging) return;

      // 阻止默认行为（如页面滚动）
      event.preventDefault();

      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const clientY = event.touches ? event.touches[0].clientY : event.clientY;

      const deltaX = clientX - this.startX;
      const deltaY = clientY - this.startY;

      // 更新位置
      this.right -= deltaX;
      this.bottom -= deltaY;

      // 重置起始坐标
      this.startX = clientX;
      this.startY = clientY;
    },
    dragEnd() {
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
