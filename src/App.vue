<template>
  <!--  <div class="container">-->
  <!--  <div>-->
  <!--    <div :class="['container-content', isMobile ? '' : 'vm-mobile']">-->
  <div id="app" style="height: 100%">
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
  <!--  </div>-->
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // windowHeight: window.innerHeight,
      // windowWidth: window.innerWidth,
      transitionName: ""
    };
  },
  computed: {
    // isMobile() {
    //   return this.windowWidth < 441;
    // }
  },
  watch: {
    $route(to, from) {
      if (to) {
        // JSON.stringify(to);
      }
      if (from) {
        // JSON.stringify(from);
      }
      /* 左右滑动效果*/
      if (this.$router.slid === "left") {
        this.transitionName = "slide-right";
      } else if (this.$router.slid === "right") {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "";
      }
      this.$router.slid = "";
    }
  }
};
</script>

<!--全局效果-->
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  /*background-color:#EBECF0;*/
  /*min-height: 100%;*/
  height: 100%;
}
#app {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  /*font-size: 16px;*/
  /*background-color: #f8f8f8;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*不能放在body里，否则两个函数都不能渲染*/
  padding-top: constant(safe-area-inset-top); /* 兼容 iOS < 11.2 */
  padding-top: env(safe-area-inset-top); /* 兼容 iOS >= 11.2 */
  padding-bottom: constant(safe-area-inset-bottom); /* 兼容 iOS < 11.2 */
  padding-bottom: env(safe-area-inset-bottom); /* 兼容 iOS >= 11.2 */

  background-color: $GrainFullBackgroundColor;
}

.slide-left-enter {
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter-active {
  height: 100%;
  width: 100%;
  position: fixed;
  transition: all 0.5s ease 0s;
  z-index: 99999;
}

.slide-left-leave-active {
  height: 100%;
  width: 100%;
  position: fixed;
  transition: all 0.5s ease 0s;
  z-index: -1;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-enter {
  transform: translate3d(-100%, 0, 0);
}

.slide-right-enter-active {
  height: 100%;
  width: 100%;
  position: fixed;
  transition: all 0.5s ease 0s;
  z-index: 99999;
}

.slide-right-leave-active {
  height: 100%;
  width: 100%;
  position: fixed;
  transition: all 0.5s ease 0s;
  z-index: -1;
  transform: translate3d(100%, 0, 0);
}
</style>

<style scoped lang="scss">
.container {
  background-color: $GrainFullBackgroundColor;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &-content {
    height: 100%;
    width: 100%;
    // 配合过渡动画的定位
    transform: translate3d(0, 0, 0);
    &.vm-mobile {
      @include neumorphism("flat", 350px, 42px, 6px, 0.08, 7px);
      max-width: 440px;
      max-height: 805px;
    }
  }
}
</style>
