<template>
  <div class="newFooter">
      <div class="footer">
         <div class="cot">
             <div class="left">
                 <div><span class="iconfont icon-dianhua"></span>
                 <!-- 联系方式: -->
                 Thông tin liên lạc:
                 {{siteInfo.sitePhone}}</div>
                 <div><span class="iconfont icon-qq"></span>
                 <!-- 客服 QQ: -->
                 Dịch vụ khách hàng QQ:
                 {{siteInfo.siteQq}}</div>
                 <div><span class="iconfont icon-ziyuan"></span>
                 <!-- 蝙蝠 ID:  -->
                 ID dơi:
                 {{siteInfo.siteEmailTo}}</div>
				<!-- <div><span class="iconfont icon-ziyuan"></span>邮箱: {{siteInfo.siteEmailTo}}</div> -->
             </div>
             <div class="mid">
                 <div class="text">
                  <!-- 风险提示：所有投资都存在风险。任何一支证券或金融产品的历史数据都不能保证其未来的表现及回报。虽然投资多样化可以帮助分散风险，但是并不能在市场低迷时确保您获益或防止您损失。投资证券或金融产品总会存在潜在的亏损可能。投资者在进行投资前需考虑自身的投资目标及风险承受能力。 -->
Cảnh báo rủi ro: Tất cả các khoản đầu tư đều có rủi ro. Dữ liệu lịch sử của bất kỳ sản phẩm bảo mật hoặc tài chính nào không thể đảm bảo hiệu suất và lợi nhuận trong tương lai của nó. Mặc dù đa dạng hóa có thể giúp phân tán rủi ro, nhưng nó sẽ không đảm bảo lợi nhuận của bạn hoặc bảo vệ bạn khỏi thua lỗ trong thời kỳ thị trường suy thoái. Luôn có khả năng thua lỗ khi đầu tư vào chứng khoán hoặc các sản phẩm tài chính. Các nhà đầu tư cần xem xét các mục tiêu đầu tư và khả năng chấp nhận rủi ro của mình trước khi đầu tư.
                  </div>
                 <div class="copyright">
                  <!-- © 2021 薇雅网络投资国际有限公司 All rights reserved  薇雅网络投资（国际）投资管理公司 -->
                  © 2021 Via Network Investment International Co., Ltd. Bảo lưu mọi quyền Công ty quản lý đầu tư Via Network Investment (Quốc tế)
                  </div>
             </div>
             <div class="right">
                 <div class="app">
                  <!-- 官方App下载 -->
                  Tải xuống ứng dụng chính thức
                  </div>
                 <div class="pic">
                     <div class="pic_l">
                         <div class="adrpic"><img :src="siteInfo.siteAndroidImg" alt=""></div>
                         <div class="adrtext">
                          <!-- 官方App下载（安卓） -->
                          Tải xuống ứng dụng chính thức (Android)
                          </div>
                     </div>
                     <div class="pic_r">
                         <div class="iospic"><img :src="siteInfo.siteIosImg" alt=""></div>
                         <div class="iostext">
                          <!-- 官方App下载（苹果） -->
                          Tải xuống ứng dụng chính thức (Apple)
                          </div>
                     </div>
                 </div>
                 <div class="pc"><span class="iconfont icon-pc"></span>
                 <!-- 官方PC下载 -->
                 Tải xuống PC chính thức
                 </div>
             </div>
         </div>
         <!-- <div class="fot">
             <div class="fotcot">
                 <div class="btm">
                     <div class="img"></div>
                 </div>
             </div>
         </div> -->
      </div>
  </div>
</template>

<script>
import * as api from '../axios/api'

export default {
  name: 'newFooter',
  components: {
  },
  props: {
  },
  data () {
    return {
        siteInfo: {} // 站点信息
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
      this.getInfoSite()
  },
  mounted () {
  },
  methods: {
      async getInfoSite () {
        // 获取站点信息
        let result = await api.getInfoSite()
        if (result.status === 0) {
          this.siteInfo = result.data
          console.log(this.siteInfo)
        } else {
          this.$message.error(result.msg)
        }
      }
  }
}
</script>

<style scoped lang="less">
.black-bg .newFooter .footer .cot .right .app{
  width: auto;
}
</style>
