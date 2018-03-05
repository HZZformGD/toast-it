# toast-it
用于移动端（前提是采用了flexible适配，如果不是得自行改scss）

# 用法
  在main.js 
  import Toast from 'toast-it'
  Vue.use(Toast)
  

# 属性
    
    用于控制是否显示
    show: {
      default: false
    },
    提示的文本
    text: {
      default: "loading"
    },
    标题
    title: {
      default: "提示"
    },
    位置
    position: {
      default: "center"
    },
    是否显示蒙层
    isShowMask: {
      default: true
    },
    是否自动消失
    autoHide: {
      default: true
    },
    自动消失的延时时间
    time: {
      default: 1500
    },
    是否有过渡
    transition: {
      default: true
    },
    提示的类型
    eventType: {
      default: "success" //  'info' 'error' 'warn
    }
    
  # 用法
      //显示
      this.$toast.show(
        {
          text: "加载成功",
          eventType: 'success',
          autoHide: false,
          success: (e) => {
            //this.$toast.show 的回调
           console.info("success", e);
          }
        }
      );
      //隐藏
      this.$toast.hide()
