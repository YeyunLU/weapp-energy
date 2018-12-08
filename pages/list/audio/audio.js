// pages/list/audio/audio.js
var app=getApp();
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    player()
    function player() {
      backgroundAudioManager.src = app.globalData.musics[app.globalData.musicindex].src;
      backgroundAudioManager.onEnded(() => {
        player()
      })
    }
  }
  
})
