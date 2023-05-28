<template>
  <el-container class="honmeIndex">
    <el-header>
      <home-header></home-header>
    </el-header>
    <el-container class="main-wrapper">
      <el-main style="padding-top: 60px;padding: 0;">
        <div class="bgd"
             style='width:100%'>
          <backdrop>
            <div class="bgdcontent">
              <div class="text">
                <div class="en">
                  <!-- WEIYA NETWORK INVESTMENT HOLDINGS LIMITED -->
                  CÔNG TY TNHH ĐẦU TƯ MẠNG WEIYA
                </div>
                <div class="company">{{siteInfo.siteName}}</div>
                <div class="brief">{{siteInfo.siteIntro}}</div>
              </div>
              <div class="cot"
                   style="position: relative;">
                <div class="notice"
                     style="display:flex;width:100%;box-sizing:border-box;">
                  <i class="iconfont icon-gonggao"
                     style="margin-right:50px;width:8%;margin-right: 5px;overflow: hidden;">
                     <!-- 公告 -->
                     Thông báo
                    </i>
                  <div class="bpx"
                       style="width:80%;overflow:hidden">
                    <div ref="marqueeBox"
                         class="marquee-box"
                         style='display:flex;white-space: nowrap;'>
                      <div ref="marquee"
                           class="marquee-list"
                           style="margin-right:60px;"
                           v-for="(item,index) in noticeList"
                           :key="index">
                        <router-link style="color:#fff"
                                     :to="{path:'/enterprise-details/',query:{id:item.id}}">
                          {{item.title}}
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="numtop">
                  <div class="numtoplis"
                       v-for="(item,index) in numtoplis"
                       :key="index"
                       v-if="index<4">
                    <div class="tit">{{item.name}}</div>
                    <div class="num">{{item.nowPrice}}<span class="iconfont"
                            :class="item.increaseRate>0?'icon-direction-top icon-direction-top_red':'icon-direction-bottom icon-direction-bottom_green'"></span></div>
                    <div class="percentum"><span style="">{{item.increase}}</span><span>{{item.increaseRate}}%</span></div>
                  </div>
                </div>
                <div class="lobby"
                     @click="toJiaoyi">
                  <div class="lobbtn"><i class="iconfont icon-gupiao"></i><i>
                    <!-- 进入交易大厅 -->
                    Vào sàn giao dịch
                    </i></div>
                </div>
              </div>
            </div>
          </backdrop>
        </div>
      </el-main>
    </el-container>
    <div class="contentIndex">
      <!-- <div class="lobby">
        <div class="lobbtn" @click="toJiaoyi"><i class="iconfont icon-gupiao"></i><i>进入交易大厅</i></div>
      </div> -->
      <div class="aboutus">
        <layout>
          <div slot='left'>
            <div class="hongtiao"></div>
            <div class="tit">
              <!-- 关于我们  -->
              về chúng tôi
              <span>
                ABOUT US
              </span>
            </div>
            <div class="text">
              {{siteInfo.siteIntro}}
            </div>
            <div class="more1"
                 @click="toLj">
                 <!-- 了解更多  -->
                 Tìm hiểu thêm
                 <span class="iconfont icon-direction-right"></span> </div>
          </div>
          <div slot='right'>
            <div class="img"><img src="../../../static/newimg/gongsi.png"
                   alt=""></div>
          </div>
        </layout>
      </div>
      <div class="banner">
        <div class="cot">
          <div class="empt"></div>
          <div class="detail">
            <div class="hongtiao"></div>
            <!-- <div class="tit">易得其所、能动天下</div>
            <div class="text">薇雅网络国际有限公司（WEIYA NETWORK INVESTMENT HOLDINGS LIMITED）
              秉承“易得其所、能动天下”的核心发展理念，以“公平、公正、稳定、安全”为宗旨，以“诚信、专业、创值、创新”的服务精神，服务至上、勇于革新，为全球跨
              境投资者提供专业性、综合性服务。开启全球化投资的崭新时代！</div> -->
            <div class="tit">Dễ dàng đến nơi bạn đang ở, di chuyển thế giới</div>
             <div class="text">WEIYA NETWORK INVESTMENT HOLDINGS LIMITED
               Tuân thủ khái niệm phát triển cốt lõi là "Dễ đến đâu và vận động thế giới", với mục đích "công bằng, công bằng, ổn định và an toàn" và tinh thần phục vụ "chính trực, chuyên nghiệp, tạo giá trị, đổi mới" , định hướng dịch vụ, dũng cảm đổi mới, vì toàn cầu
               Cung cấp các dịch vụ chuyên nghiệp và toàn diện cho các nhà đầu tư nước ngoài. Mở ra một kỷ nguyên mới của đầu tư toàn cầu! </div>
          </div>
        </div>
      </div>
      <div class="productcot">
        <div class="product">
          <div class="tit">
            <!-- 产品说明 -->
            Mô tả Sản phẩm
          </div>
          <div class="entit">PRODUCT MANUAL</div>
          <div class="text">
            <!-- 我们最大的资产是我们的员工，薇雅网络国际有限公司只聘用那些富有经验的专业人员，他们已经在金融服务业展示了他们一流的客户服务技巧和领带能力。提供专业的客户服务。我们的销售和营运代表将以专业的中文对客户的任何询问进行解答。 -->
            Tài sản lớn nhất của chúng tôi là con người và chúng tôi chỉ tuyển dụng những chuyên gia giàu kinh nghiệm, những người đã thể hiện kỹ năng phục vụ khách hàng hàng đầu và khả năng liên kết trong ngành dịch vụ tài chính. Cung cấp dịch vụ khách hàng chuyên nghiệp. Đại diện bán hàng và vận hành của chúng tôi sẽ trả lời bất kỳ câu hỏi nào từ khách hàng bằng tiếng Trung chuyên nghiệp.
            </div>
        </div>
        <div class="notice">
          <layout>
            <div slot="left">
              <div class="s_left">
                <div class="not_l"
                     style="width:35px;overflow: hidden;"><span class="iconfont icon-kaihuhedui"></span>
                     <!-- 开户须知 -->
                     Để ý
                     </div>
                <div class="not_r">
                  <ul>
                    <!-- <li>开设真实账户（注册会员）之前一定要认真阅读和查看本公司的《交易规则》和《风险揭示与告知》。</li>
                    <li>客户具备的开户条件：年满十八周岁、具有完全民事行为能力的公民。客户须以真实的、合法的身份开户并保证资金来源的合法性。</li>
                    <li>客户自备用于相互转账的银行卡（开通网上银行），客户应妥善保管好银行密码及交易密码，并定期更换密码，不得向任何人泄露密码。</li>
                    <li>自行注册，并遵循《一人一个账号规则》。</li>
                    <li>正式账户充值成功后即可开始交易。</li> -->
                    <li>Trước khi mở một tài khoản thực (thành viên đã đăng ký), bạn phải đọc và xem xét kỹ "Quy tắc giao dịch" và "Thông báo và tiết lộ rủi ro" của công ty.</li>
                    <li>Điều kiện mở tài khoản đối với khách hàng: Công dân từ đủ 18 tuổi trở lên và có năng lực hành vi dân sự đầy đủ. Khách hàng phải mở một tài khoản có danh tính thực, hợp pháp và đảm bảo tính hợp pháp của nguồn tiền.</li>
                    <li>Khách hàng tự chuẩn bị thẻ ngân hàng để chuyển khoản (ngân hàng mở trực tuyến), khách hàng lưu ý bảo mật mật khẩu ngân hàng và mật khẩu giao dịch, thay đổi mật khẩu thường xuyên và không được tiết lộ mật khẩu cho bất kỳ ai.</li>
                    <li>Tự đăng ký và tuân theo "Quy tắc cho một tài khoản cho mỗi người".</li>
                    <li>Sau khi tài khoản chính thức được nạp tiền thành công, bạn có thể bắt đầu giao dịch.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div slot="right">
              <div class="s_right">
                <div class="not_l"
                     style="width:35px;overflow: hidden;"><span class="iconfont icon-kaihuhedui"></span>
                     <!-- 操盘须知 -->
                     <!-- Ghi chú giao dịch -->
                     Để ý
                     </div>
                <div class="not_r">
                  <ul>
                    <!-- <li>您投资的 本金 最低 1 元;</li>
                    <li>申请资金后，随时买进卖出;</li>
                    <li>账户匹配后，当天即可交易;</li>
                    <li>当资金接近亏损强平预警线时，需尽快补足保证金；如未及时补仓，可能会被风控系统强平;</li>
                    <li>当操盘资金低于平仓线下时，我们有权将您的账户实行止损操作;</li>
                    <li>单只股票持仓不得超过账户总资金的 90.00% ;</li> -->
                   <li>Số tiền gốc đầu tư tối thiểu của bạn là 1 nhân dân tệ;</li>
                     <li>Sau khi xin tiền, mua và bán bất cứ lúc nào;</li>
                     <li>Sau khi khớp tài khoản, bạn có thể giao dịch ngay trong ngày;</li>
                     <li>Khi tiền gần đến mức cảnh báo thua lỗ và buộc phải thanh lý, ký quỹ cần được bổ sung càng sớm càng tốt; nếu vị thế không được bổ sung kịp thời, nó có thể bị hệ thống kiểm soát rủi ro buộc phải thanh lý;</li>
                     <li>Khi vốn giao dịch thấp hơn mức thanh lý, chúng tôi có quyền thực hiện thao tác dừng lỗ trên tài khoản của bạn;</li>
                     <li>Một vị thế cổ phiếu không được vượt quá 90,00% tổng số tiền trong tài khoản;</li>
                  </ul>
                </div>
              </div>
            </div>
          </layout>
        </div>
        <div class="knowmore"
             @click="toCp">
          <div class="text">
            <!-- 了解更多  -->
            Tìm hiểu thêm
            <span class="iconfont icon-direction-right"></span> </div>
        </div>
      </div>
      <div class="news">
        <div class="tit">
          <!-- 新闻资讯 -->
          Tin tức
        </div>
        <div class="en">NEWS CENTER</div>
        <div class="text">
          <div class="block">
            <el-carousel :autoplay='true'
                         height="350px">
              <el-carousel-item v-for="(item,index) in ArtList"
                                :key="index"
                                v-if="index<4">
                <layout>
                  <div slot="left">
                    <div class="top">{{item.artTitle}}</div>
                    <div class="txt"
                         style="height:170px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 6;overflow: hidden;"
                         v-html="item.artCnt"></div>
                    <div class="baitiao"></div>
                    <div class="date">{{item.addTime}}</div>
                  </div>
                  <div slot="right">
                    <div class="top">{{ArtList[index+1].artTitle}}</div>
                    <div class="txt"
                         style="height:170px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 6;overflow: hidden;"
                         v-html="item.artCnt"></div>
                    <div class="baitiao"></div>
                    <div class="date">{{ArtList[index+1].addTime}}</div>
                  </div>
                </layout>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="more1"
             style="margin:0 auto"
             @click="toNews">
             <!-- 了解更多 -->
             Tìm hiểu thêm
             <span class="iconfont icon-direction-right"></span></div>
      </div>
    </div>
    <newFooter />
  </el-container>
</template>

<script>
import HomeHeader from '../../components/HeaderOrder'
import HomeFooter from '../../components/Footer'
import TableBox from './components/table'
import * as api from '../../axios/api'
import backdrop from '../../components/backdrop'
import layout from '../../components/layout'
import newFooter from '../../components/newFooter'

export default {
  components: {
    HomeHeader,
    TableBox,
    HomeFooter,
    backdrop,
    layout,
    newFooter
  },
  props: {},
  data () {
    return {
      ArtList: [],
      noticeList: [],
      pageNum: 1,
      transactionNoticeList: [],
      bannerList: [],
      market: {}, // 大盘详情
      siteInfo: {}, // 站点信息
      timer: null,
      currentIndex: 0,
      // 数字指数
      numtoplis: [{
        num: 1
      }, {
        num: 1
      }, {
        num: 1
      }, {
        num: 1
      }],
      newlist: [{
        num: 1
      }, {
        num: 1
      }, {
        num: 1
      }, {
        num: 1
      }]
    }
  },
  watch: {},
  computed: {},
  created () {
    this.timer = setInterval(this.refreshList, 5000)
    this.$store.state.activeIndex = 'home'
    // this.$router.push({
    //     path: '/transaction?code=300750'
    // })
    // this.toTransform()
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  mounted () {
    setTimeout(() => {
      this.runMarquee()
    }, 1000)
    this.getArtList()
    this.getMarket()
    this.getInfoSite()
    this.getNoticeList()
    this.getNewsList()
  },
  methods: {
    // 获取公告
    scrollx () {
      console.log('mounted')
      // 延时滚动
    },
    async getNewsList () {
      let opts = {
        pageNum: this.pageNum,
        pageSize: 10,
        type: 1
      }
      let data = await api.getNewsList(opts)
      if (data.status == 0) {
        this.noticeList = data.data.list
        console.log(this.noticeList, 122)
      }
    },
    // 获取新闻
    async getArtList () {
      let opts = {
        pageNum: this.pageNum,
        pageSize: 10,
        type: 1
      }
      let data = await api.getArtList(opts)
      if (data.status == 0) {
        this.switchData(data.data.list, 'addTime')
        this.ArtList = data.data.list

        //   this.ArtList.forEach((item,index) => {
        // 	  this.switchData(this.ArtList,item.addTime)
        //   })

        console.log(this.ArtList, 123)
      }
    },
    // 通告滚动
    runMarquee () {
      // 获取文字 计算后宽度
      var width = this.$refs.marquee[0].getBoundingClientRect().width
      var marquee = this.$refs.marqueeBox
      console.log(marquee)
      var disx = 0 // 位移距离
      // console.log(width)
      var allwidth = 0
      for (var i = 0; i < this.noticeList.length; i++) {
        allwidth += this.$refs.marquee[i].getBoundingClientRect().width
      }
      this.temi = setInterval(() => {
        disx-- // disx-=1; 滚动步长
        if (-disx >= allwidth) {
          disx = 0 // 如果位移超过文字宽度，则回到起点  marquee-list的margin值
        }
        // console.log(disx,'disx')
        // marquee.style.transform =
        marquee.style.transform = 'translateX(' + disx + 'px)'
      }, 30) // 滚动速度
    },
    // 时间转换
    switchData (list, time) {
      list.forEach((item) => {
        var tempStr = item[time] + ''
        var timestamp = tempStr.slice(0, tempStr.length - 3)
        var newDate = new Date()
        newDate.setTime(timestamp * 1000)
        item[time] = newDate.toLocaleDateString()
      })
    },
    async getNoticeList () {
      // 获取交易大厅-中间部分-通知公告
      let data = await api.getTransactionNoticeList({
        pageSize: 10
      })
      if (data.status == 0) {
        this.switchData(data.data.list, 'addTime')
        this.transactionNoticeList = data.data.list
        console.log(this.transactionNoticeList, 32)
      }
    },
    toNews () {
      this.$router.push({
        path: '/enterprise'
      })
    },
    toCp () {
      this.$router.push({
        path: '/product'
      })
    },
    toLj () {
      this.$router.push({
        path: '/introduce'
      })
    },
    toJiaoyi () {
      this.$router.push({
        path: '/transaction?code=603551'
      })
    },
    refreshList () {
      // 刷新 大盘指数
      this.getMarket()
    },
    async getMsg () {
      // 获取显示的资讯
      // let result = await api.getMessageList({ pageNum:1,pageSize:15,type: 1 })
      // console.log(result)
      // if (result.status === 0) {
      //   // this.newlist = result.data
      // } else {
      //   this.$message.error(result.msg)
      // }
    },
    async getMarket () {
      // 获取大盘指数
      let result = await api.getMarket()
      if (result.status === 0) {
        this.numtoplis = result.data.market
      } else {
        this.$message.error(result.msg)
      }
    },
    async getInfoSite () {
      // 获取大盘指数
      let result = await api.getInfoSite()
      if (result.status === 0) {
        this.siteInfo = result.data
      } else {
        this.$message.error(result.msg)
      }
    },
    async cardChange (index) {
      this.currentIndex = index
    },
    async toTransform () {
      let opt = {
        pageNum: 1,
        pageSize: 1
      }
      let data = await api.getStock(opt)
      if (data.status === 0) {
        this.$router.push({
          path: '/transaction',
          query: {
            code: data.data.list[0].code
            //, type: 'index'
          }
        })
      } else {
        this.$message.error(data.msg)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.main-wrapper {
  padding-top: 0;
}

/deep/ .el-main {
  padding: 60px 0px 0px 0px;
}

.carousel-box {
  height: 500px;
  text-align: center;

  /deep/ .el-carousel__container {
    height: 100%;
  }

  .img-box {
    height: 500px;
    // background: url(https://exproductdiag891.blob.core.windows.net/banner/0bb1ef6….jpg) ;
    background-position: center center;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .top-box {
    position: absolute;
    top: 34%;
    width: 100%;

    .prompt {
      color: #b6b6b6;
      font-size: 18px;
    }
  }

  p {
    color: #efbb53;
    font-size: 34px;
    margin-bottom: 40px;
  }
}

.table-box {
  width: 1200px;
  margin: 0 auto;
}

.down-box {
  padding-top: 65px;
  text-align: center;
  padding-bottom: 15px;

  .box {
    margin-bottom: 10px;

    .title {
      font-size: 30px;
      height: 34px;
      line-height: 34px;
    }

    .sub-title {
      font-size: 14px;
      color: #5a657e;
      height: 20px;
      line-height: 20px;
      padding: 10px 0;
    }
  }

  .img-box {
    width: 500px;
    margin: 0 auto;

    p {
      text-align: center;
      padding: 0px 0 10px 0px;
      color: #5a657e;
    }

    img {
      width: 150px;
      height: 150px;
      margin: 0 20px;
    }
  }
}
.black-bg .honmeIndex .contentIndex .banner{
  height: 480px;
}
.black-bg .honmeIndex .contentIndex .productcot .notice .s_right,.black-bg .honmeIndex .contentIndex .productcot .notice .s_left{
  height: 360px;
}
.black-bg .honmeIndex .contentIndex .productcot .notice .s_left .not_l,.black-bg .honmeIndex .contentIndex .productcot .notice .s_right .not_l{
  width: 47px !important;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
}

</style>
