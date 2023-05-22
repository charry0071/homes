<template>
  <el-container class="user-center usercot futuresholdposition">
    <el-header class="user-header">
      <home-header></home-header>
    </el-header>
    <el-container class="main-wrapper ">
      <el-aside width="178px">
        <menu-box></menu-box>
      </el-aside>
      <el-main class="futuresholdposition">
        <div class="wrapper user-center-table">
          <div class="user-center-title"
               style="text-align:left;">
            <span class="iconfont icon-you"
                  style="color:#C11815;font-size:18px;margin-right:10px"></span>
            Esop
          </div>

          <div class="test">
            <div class="new-btn"
                 @click="clickIndexTitle(1)"
                 :class="currIndexTitle == 1?'currIndexTitle':''">
              <span>ESOP</span>
            </div>
            <div class="notice-btn"
                 @click="clickIndexTitle(2)"
                 :class="currIndexTitle == 2?'currIndexTitle':''">
              <span>Danh mục</span>
            </div>

          </div>

          <el-table v-show="currIndexTitle == 1" :data="list.list"
                    stripe
                    v-loading="loading"
                    style="width: 100%">

            <el-table-column prop="names"
                             label="Mã">
            </el-table-column>
            <el-table-column prop="margin"
                             label="Giá thị trường">
            </el-table-column>
            <el-table-column prop="price"
                             label="Giá phát hành">
            </el-table-column>
            <el-table-column fixed="right"
                             label="Đặt lệnh">
              <template slot-scope="scope">
                <el-button type="success"
                           plain
                           size="small"
                           @click="withFunding(scope.row)">Đề xuất</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-table v-show="currIndexTitle == 2" :data="list.list"
                    stripe
                    v-loading="loading"
                    style="width: 100%">

            <el-table-column prop="xgname"
                             label="Mã">
            </el-table-column>
            <el-table-column prop="finalPrice"
                             label="Giá KL">
            </el-table-column>
            <el-table-column prop="issuePrice"
                             label="Giá PH">
            </el-table-column>
            <el-table-column prop="nums"
                             label="SL">
            </el-table-column>
             <el-table-column prop="gg"
                             label="Đòn bẩy">
            </el-table-column>
            <el-table-column prop="gg"
                             label="sz">
            </el-table-column>
            <el-table-column prop="zts"
                             label="Xét duyệt">
              <template slot-scope="scope">
                <p class="bounceIn">
                  <span v-if="scope.row.zts==2"
                        class="red">Chưa thông qua</span>
                  <span v-if="scope.row.zts==4"
                        class="red">Hoàn thành</span>
                  <el-button type="success" v-if="scope.row.zts==1"
                           plain
                           size="small"
                           @click="withFunding(scope.row)">Mua</el-button>
                </p>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination class="pull-right"
                         @size-change="handleSizeChange"
                         @current-change="handleCurrentChange"
                         :current-page="list.pageNum"
                         :page-sizes="[10, 20, 30, 40,50]"
                         :page-size="list.pageSize"
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="list.total">
          </el-pagination>

        </div>
        <!-- <home-footer :siteInfo="siteInfo"></home-footer> -->
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import HomeHeader from '../../../../components/HeaderOrder'
import HomeFooter from '../../../../components/Footer'
import MenuBox from '@/pages/user/components/menu'
import * as api from '../../../../axios/api'

export default {
  components: {
    HomeHeader,
    HomeFooter,
    MenuBox
  },
  props: {},
  data () {
    return {
      currIndexTitle: 1,
      loading: false,
      pageNum: 1,
      pageSize: 15,
      stockCode: '', // 代码
      stockSpell: '', // 简拼
      list: {
        list: []
      }
    }
  },
  watch: {},
  computed: {},
  created () {
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  mounted () {
    this.getlist()
    this.$store.state.userMenu = '2-23'
  },
  methods: {
    handleSizeChange (size) {
      this.pageSize = size
      this.getlist()
    },
    handleCurrentChange (page) {
      this.pageNum = page
      this.getlist()
    },
    async getlist () {
      let opt = {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }
      let data = await api.Newlist(opt)
      if (data.status === 0) {
        this.list = data.data
      } else {
        this.$message.error(data.msg)
      }
    },

    withFunding (val) {
      this.$router.push({
        path: '/funding?id=' + val.id
      })
    },
    async clickIndexTitle (type) {
      this.currIndexTitle = type
      console.log(this.currIndexTitle, 'this.currIndexTitle')
      if (this.currIndexTitle == 1) {
        // 新闻资讯
        var query = {
          pageNum: 1,
          pageSize: 10
        }
        let res = await api.Newlist(query)
        if (res.status == 0) {
          const data = res.data
          this.list.list = data.list.map((item, index) => {
            if (item.lever) {
              let numberList = item.lever.split('/')
              this.$set(item, 'numberList', numberList)
            }
            // this.getactualPrice(item)// 获取每条数据的详情
          })
          this.paegs[0].total = data.total
        }
      } else if (this.currIndexTitle == 2) {
        // 通知公告
        let opts = {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
        let res = await api.endorseList(opts)
        if (res.status == 0) {
          const data = res.data
          if (data.list.length != 0) {
            this.tendorseListDate = data.list
          }
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.code {
  font-size: 12px;
  color: #999;
}

.main-wrapper {
  .wrapper {
    padding: 20px;

    .table-search {
      margin-bottom: 15px;
    }
  }
}
.test {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
  .new-btn {
    width: 189px;
    height: 46px;
    border-radius: 23px;
    text-align: center;
    line-height: 46px;
    background: #000000;

    position: relative;
    right: 20px;
    cursor: pointer;

    span {
      width: 64px;
      height: 16px;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      line-height: 36px;
      text-align: center;
    }
  }
  .notice-btn {
    width: 189px;
    height: 46px;
    background: #000000;
    border-radius: 23px;
    text-align: center;
    line-height: 46px;
    margin-left: 50px;
    position: relative;
    left: 20px;
    cursor: pointer;
    span {
      display: block;
      width: 100%;
      height: 100%;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
    }
  }
  .currIndexTitle {
    background: #c11815;
  }
}
</style>
