
var app = getApp()

Page({

  data: {
    calls:app.globalData.calls
  },

  calling: function (e) {
    var index=parseInt((e.detail.y-20)/50);
    console.log(e.detail.y);
    wx.makePhoneCall({
      phoneNumber: this.data.calls[index].phone,
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
 
  adding: function () {
    wx:wx.navigateTo({
      url: '../add/add'
    })
  }
  
})