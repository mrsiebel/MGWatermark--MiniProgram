//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:'1500rpx',
  },
  //添加水印
  watermarkClick:function(){
    
    console.log('添加水印')

    this.addWatermark('中国')
  },
  //添加水印方法
  addWatermark:function(text){
    var that = this;
    var ctx = wx.createCanvasContext("watermarkCanvas");
    //设置文字的旋转角度，角度为45°； 
    ctx.rotate(45 * Math.PI / 180);
    //对斜对角线以左部分进行文字的填充
    for (let j = 1; j < 20; j++) { //用for循环达到重复输出文字的效果，这个for循环代表纵向循环
      ctx.beginPath();
      ctx.setFontSize(18);
      ctx.setFillStyle("rgba(169,169,169,.2)");

      ctx.fillText(text, 0, 50 * j);//文本 x坐标位置  y坐标位置 需要绘制的最大宽度

      for (let i = 1; i < 10; i++) {//这个for循环代表横向循环，
        ctx.beginPath();
        ctx.setFontSize(18);
        ctx.setFillStyle("rgba(169,169,169,.2)");
        ctx.fillText(text, 80 * i, 50 * j);
      }
    }//两个for循环的配合，使得文字充满斜对角线的左下部分

    // 对斜对角线以右部分进行文字的填充逻辑同上
    for (let j = 0; j < 20; j++) {
      ctx.beginPath();
      ctx.setFontSize(18);
      ctx.setFillStyle("rgba(169,169,169,.2)");

      ctx.fillText(text, 0, -50 * j);
      for (let i = 1; i < 20; i++) {
        ctx.beginPath();
        ctx.setFontSize(18);
        ctx.setFillStyle("rgba(169,169,169,.2)");
        ctx.fillText(text, 80 * i, -50 * j);
      }
    }
    ctx.draw();

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