var app = getApp();

Page({
  
  data: {
    name: '',
    phone: ''
  },

   AddName : function (e) {
     this.data.name = e.detail.value;
   },
   AddPhone : function (e) {
     this.data.phone = e.detail.value;
   },
   
  baocun : function () {
    app.globalData.calls.push(this.data);
    app.globalData.phonesum++;
     wx:wx.navigateTo({
       url:'../call/call'
     })

  }

})
