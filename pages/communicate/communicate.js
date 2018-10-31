// pages/communicate/communicate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    communicateList: [{ 'personImage':"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3175633703,3855171020&fm=27&gp=0.jpg",
    'name':'李可',
      'content':'我大学毕业到一家集团公司的办公室当文员。办公室主任有一特长，即文章写得好，很有思想，公司董事长很器重他，董事长的讲话稿和企业的年终总结等一系列重大文章都是出自他的手笔。',
      'photos': ['http://img2.imgtn.bdimg.com/it/u=2118739199,3378602431&fm=27&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=2277942808,1417432970&fm=27&gp=0.jpg',
        'http://img5.imgtn.bdimg.com/it/u=1504812505,3480403568&fm=27&gp=0.jpg',
        'http://img4.imgtn.bdimg.com/it/u=3456219059,4251129897&fm=27&gp=0.jpg',
        'http://img3.imgtn.bdimg.com/it/u=3912316188,1981132393&fm=27&gp=0.jpg'],
        'address':'山东省济南市',
        'time':'2018/10/31 14:46',
      'zans': ['张三', '李四', '王五', '找钱', '孙俪', '王宝'],
      'discusses': [{
        'user': '张三',
        'content': '你好漂亮呀！！'
      },
        {
          'user': '李四',
          'content': '纳尼！！'
        },
        {
          'user': '王五',
          'content': '鬼扯咧'
        },
        {
          'user': '王宝',
          'content': '昨晚11点左右，一则郑爽胡彦斌疑似复合的消息刷爆各大论坛，微博在深夜11点热度高达200万直接爆掉，中国意难忘又开始了！！！'
        }]}],
        'photoWidth':wx.getSystemInfoSync().windowWidth/5,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})