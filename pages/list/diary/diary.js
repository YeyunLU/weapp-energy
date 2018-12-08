
var app = getApp()

Page({

  data: {
    calls:app.globalData.diarys
  },

  editting: function (e) {
    
  },
 
  adding: function () {
    wx:wx.navigateTo({
      url: '../new/new'
    })
  }
  
})