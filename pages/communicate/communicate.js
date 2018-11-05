// pages/communicate/communicate.js

var that
var app
Page({

  /**
   * 页面的初始数据
   */
  data: {
    communicateList: [{ 'personImage':"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3175633703,3855171020&fm=27&gp=0.jpg",
    'name':'王伟',
      'content':'文章一',
      'photos': ['http://img2.imgtn.bdimg.com/it/u=2118739199,3378602431&fm=27&gp=0.jpg',],
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
        }]},{ 'personImage':"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3175633703,3855171020&fm=27&gp=0.jpg",
    'name':'李可',
      'content':'文章2',
      'photos': ['http://img2.imgtn.bdimg.com/it/u=2118739199,3378602431&fm=27&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=2277942808,1417432970&fm=27&gp=0.jpg',
        ],
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
        }]},{ 'personImage':"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3175633703,3855171020&fm=27&gp=0.jpg",
    'name':'王位',
      'content':'文章3',
      'photos': [
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
        'photoWidth':wx.getSystemInfoSync().windowWidth/4,
        'popTop':0,
        'popWidth':0,
        'isShow':false,
        'popupItem':0,
        'popupItemWidth':0,
        'radio':0,
        'showLink':false,
        'searchValue':'',
        'commentShow':false,
        'floatButtonShow':true,
        'commentValue':'',//评论内容
        'commentindex':0,//被评论的内容id
        'link':'http://www.baidu.com/'
          },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      that=this;
      wx.getSystemInfo({
        success: function(res) {
          that.setData({radio:res.pixelRatio})
        },
      })
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
  checkPhoto:function(e){
    console.log(e);
    wx.previewImage({
      current:e.currentTarget.dataset.photourl,
      urls:this.data.communicateList[0]['photos']
    })
  },

  makeComment:function(e){
    var index=e.currentTarget.dataset.commentindex;
    that.setData({commentShow:true,floatButtonShow:false,commentindex:index})
    
  },

  commentInput:function(e){
      var content=e.detail.value;
      that.setData({commentValue:content})
  },

  TouchPopup:function(e){
  
    var anim=wx.createAnimation({
      duration:200,
      timingFunction:'linear',
      delay:0,
    })

    var animItem=wx.createAnimation({
      duration:200,
      timingFunction:'linear',
      delay:0,
    })

    if(that.data.isShow==true){
      console.log("动画已经显示完毕")
      setTimeout(function () {
        anim.width(0).opacity(1).step()
        animItem.width(0).opacity(1).step()
        that.setData({ anim: anim.export() ,animItem: animItem.export()})

        
      }, 100)

      that.setData({
        popTop:e.target.offsetTop-(e.detail.y-e.target.offsetTop)/2+12,popWidth:0,isShow:false})

       
    }else{
      console.log("执行false")
      setTimeout(function(){
        anim.width(200).opacity(1).step()
        animItem.width(80).opacity(1).step()
        that.setData({anim:anim.export(),animItem:animItem.export()})
             },100)

      that.setData({popTop:e.target.offsetTop-(e.detail.y-e.target.offsetTop)/2+12,
      popWidth:0,popupItemWidth:0,
      isShow:true})
             
    }
  },
    // 删除操作
    deleteItem:function(e){
        wx.showToast({
          title: '判断是否有足够权限',
        })
    },

    //点击赞操作
    clickZanItem:function(e){
      wx.showToast({
        title: '点了赞',
      })
    },

    //点击评论按钮
    clickCommentItem:function(e){
      wx.showToast({
        title: '点了评论',
      })
    },

    //跳转外部链接
    clickLink:function(e){
      
      wx.navigateTo({
        url: '../checkLink/checkLink?checkedLink='+that.data.link,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    },

    //单击搜索事件
    search:function(e){
      var list=[]
      for(var i=0;i<that.data.communicateList.length;i++){
        if (that.data.communicateList[i].name.indexOf(that.data.searchValue)>-1){
          list.push(that.data.communicateList[i])
        }
      }
      that.setData({communicateList:list})
    },

    //监听搜索框
    sousuoInput:function(e){
      that.setData({searchValue:e.detail.value})
    },

    addCommunicate:function(e){
      wx.navigateTo({
        url: '../addCommunicate/addCommuunicate',
      })
    },

    //发送评论按钮
    sendComment:function(e){
        
        var index=that.data.commentindex;
        var unit=that.data.communicateList[index].discusses;
        // 用户名称待确定
        unit.push({user:'韩志辉',content:that.data.commentValue})
        that.setData({communicateList:that.data.communicateList})

        //收起评论栏
        that.setData({commentShow:false,floatButtonShow:true})
    }

  
  
})