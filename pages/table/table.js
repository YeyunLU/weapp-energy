// pages/index/index.js
var that;
Page({
  data: {
    article: ''
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    that = this;
  },
  onReady: function () {
    // 页面渲染完成

  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onShareAppMessage: function () {
    return {
      title: 'bring energy to you',
      path: '/pages/index/index',
      success: function (res) {
        // 分享成功
      },
      fail: function (res) {
        // 分享失败
      }
    }
  }
})
