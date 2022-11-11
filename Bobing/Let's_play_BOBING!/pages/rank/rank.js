const app = getApp()
Page({
    toFirstPage(){ //跳转到首页
      wx.switchTab({  
        url: '/pages/index/index'  
      });  
    },
    toGift(){   //跳转到礼物页面
      wx.switchTab({  
        url: '/pages/gift/gift'  
      });  
    },
})