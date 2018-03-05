# toast-it
用于移动端（前提是采用了flexible适配，如果不是得自行改scss）

# 用法  

    
    
  在main.js   
  
  `import Toast from 'toast-it'`   
  
  `Vue.use(Toast)`  
  
  
  

# 属性
    
    
    `show: {  
      default: false  
      
    },
    text: {
      default: "loading"
    },
    title: {
      default: "提示"
    },
    position: {
      default: "center"
    },
    isShowMask: {
      default: true
    },
    autoHide: {
      default: true
    },
    time: {
      default: 1500
    },
    transition: {
      default: true
    },
    eventType: {
      default: "success" //  'info' 'error' 'warn
    }`
    
  # 用法
      //显示
      `this.$toast.show(
        {
          text: "加载成功",
          eventType: 'success',
          autoHide: false,
          success: (e) => {
            //this.$toast.show 的回调
           console.info("success", e);
          }
        }
      );`
      //隐藏
      `this.$toast.hide()`
