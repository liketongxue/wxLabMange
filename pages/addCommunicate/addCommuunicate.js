// pages/addCommunicate/addCommuunicate.js

var that

Page({

  /**
   * 页面的初始数据
   */
  data: {
    download: '',
    'photoWidth': 0,
    'photos': [],
    'screenHeight':wx.getSystemInfoSync().windowHeight,
    'loading':false,
    'switchOpen':false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that=this;
    var photoWidth=(wx.getSystemInfoSync().windowWidth*0.9-8*3)/3;
    that.setData({photoWidth:photoWidth})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //选择图片
  selectPic:function(e){

    var photos=that.data.photos;

    var selectphotos=[]
    wx.chooseImage({
      success: function(res) {
        selectphotos=res.tempFilePaths;
        for(var i=0;i<selectphotos.length;i++){
          photos.push(selectphotos[i])
        }
        console.log(photos)
        that.setData({ photos: photos })
      },
      fail:function(){

      }
    })

   
   
  },

  //发表说说
  sendCommunicate:function(e){
    that.setData({ loading: true })
    setTimeout(
      function(){
      that.setData({loading:false})
      wx.showToast({
        title: '上传成功',
      })
      setTimeout(function(){
        wx.navigateBack({
            
        })
      },500)
    
    },1000)
  },


  //开启或关闭switch
  switchChange:function(e){
    var status=e.detail.value;
    that.setData({switchOpen:status})
  }
})