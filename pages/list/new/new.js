var app = getApp();

Page({
  
  data: {
    date: '',
    content: ''
  },

   AddDate : function (e) {
     this.data.date = e.detail.value;
   },
   AddContent : function (e) {
     this.data.content = e.detail.value;
   },
   
  baocun : function () {
    app.globalData.diarys.push(this.data);
     wx:wx.navigateTo({
       url:'../diary/diary'
     })

  }

})
