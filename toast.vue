<template>
    <transition :name="fadeIn">
        <div class="alertBox" v-show="show">
            <div class="alert-mask" v-show="isShowMask"></div>
            <transition :name="translate">
                <div :class="'box toda '+position+ ' ' + eventType " v-show="show">
                    <div class="close" v-on:click="toggleIt({show:false})">X</div>
                    <H2 class="title">{{title}}</H2>
                    <p class="text">{{text}}</p>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    show: {
      // 是否显示此toast
      default: false
    },
    text: {
      // 提醒文字
      default: "loading"
    },
    title: {
      default: "提示"
    },
    position: {
      // 提醒容器位置
      default: "center"
    },
    isShowMask: {
      // 是否显示遮罩层
      default: true
    },
    autoHide: {
      default: true
    },
    time: {
      // 显示时间
      default: 1500
    },
    transition: {
      // 是否开启动画
      default: true
    },
    eventType: {
      default: "success"
    }
  },
  updated() {},
  computed: {
    translate() {
      // 根据props，生成相对应的动画
      if (!this.transition) {
        return "";
      } else {
        if (this.position === "top") {
          return "translate-top";
        } else if (this.position === "middle") {
          return "translate-middle";
        } else if (this.position === "bottom") {
          return "translate-bottom";
        }
      }
    },
    fadeIn() {
      // 同上
      if (!this.transition) {
        return "";
      } else {
        return "fadeIn";
      }
    }
  },
  methods: {
    toggleIt(opts, cb) {
      this.show = opts.show;
      let timer;
      if (this.autoHide && opts.show) {
        timer = setTimeout(() => {
          cb(opts.show);
          this.show = false;
          clearTimeout(timer);
        }, this.time);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin px2px($name, $px,$important:null){

    #{$name}: round($px * 1 / 2) * 1px $important;/*no*/

    [data-dpr="2"] & {
        #{$name}: round($px * 2 / 2) * 1px $important; /*no*/
    }

    [data-dpr="3"] & {
        #{$name}: round($px * 3 / 2) * 1px $important;/*no*/
    }

}
.box {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 540px;
  background: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  padding: 14px 35px 14px 35px;
  border-radius: 5px;
  text-align: left;
  line-height: 100px;
  z-index: 5000;
  color: #000;
  &.toda {
    animation: tada 1s forwards;
  }

  &::after {
    content: "";
    width: 14px;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
  }
  &.success::after {
    background-color: #19be6b;
  }
  &.info::after {
    background-color: #2d8cf0;
  }
  &.error::after {
    background-color: #f90;
  }
  &.warn::after {
    background-color: #ed3f14;
  }
  .title {
    @include px2px("font-size",34);
    height: 30px;
    line-height: 30px;
    margin-bottom: 26px;
  }
  .text {
    @include px2px("font-size",24);
    line-height: 1;
  }
  .close {
    height: 40px;
    width: 40px;
    position: absolute;
    top: 4px;
    line-height: 40px;
    text-align: center;
    right: 4px;
    @include px2px("font-szie",10);
  }
  &.top {
    top: 50px;
    margin-top: 0;
  }
  &.center {
    top: 50%;
    margin-top: -100px;
  }
  &.bottom {
    top: auto;
    bottom: 50px;
    margin-top: 0;
  }

}
  .alert-mask {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 4999;
  }
.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 0.3s;
}
.fadeIn-enter,
.fadeIn-leave-active {
  opacity: 0;
}
.translate-top-enter-active,
.translate-top-leave-active {
  transition: all 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);
}
.translate-top-enter,
.translate-top-leave-active {
  transform: translateY(-50%);
  opacity: 0;
}
.translate-middle-enter-active,
.translate-middle-leave-active {
  transition: all 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);
}
.translate-middle-enter,
.translate-middle-leave-active {
  transform: translateY(80%);
  opacity: 0;
}
.translate-bottom-enter-active,
.translate-bottom-leave-active {
  transition: all 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);
}
.translate-bottom-enter,
.translate-bottom-leave-active {
  transform: translateY(100%);
  opacity: 0;
}
@keyframes tada {
  0% {
    transform: scaleX(1) translate(-50%, -50%);
  }
  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate(-3deg) translate(-50%, -50%);
  }
  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate(3deg) translate(-50%, -50%);
  }
  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg) translate(-50%, -50%);
  }
  to {
    transform: scaleX(1) translate(-50%, -50%);
  }
}
</style>
