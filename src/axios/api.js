import { post, get } from './index'
// import APIUrl from './api.url'

// var img_url = APIUrl.util.image // 这个就是图片上传的api url

// 登录
export function login (options) {
  return post('/apis/api/user/login.do', options)
}
// 申购
export function xingusg (options) {
  return get('/apis/new/public/index.php/api/Newlist/index', options)
}
// 申购提交
export function xingusgs (options) {
  return post('/apis/new/public/index.php/api/Lists/add', options)
}

// 新股冻结资金
export function getprice (options) {
  return get('/apis/new/public/index.php/api/Lists/getprice', options)
}

// 申购提交列表
export function xingusgsList (options) {
  return get('/apis/new/public/index.php/api/Lists/index', options)
}

// 注册
export function register (options) {
  return post('/apis/api/user/reg.do', options)
}

// 注销登录
export function logout (options) {
  return post('/apis/api/user/logout.do', options)
}

// 验证是否注册
export function checkPhone (options) {
  return post('/apis/api/user/checkPhone.do', options)
}

// 更改密码 -- 忘记密码
export function forgetPas (options) {
  return get('/apis/api/user/updatePwd.do', options)
}

// 修改密码
export function changePassword (options) {
  return get('/apis/user/updatePwd.do', options)
}

// 获取验证码  -- 注册
export function getCode (options) {
  return get('/apis/api/sms/sendRegSms.do', options)
}

// 获取验证码  -- 忘记密码
export function sendForgetSms (options) {
  return get('/apis/api/sms/sendRegSms.do', options)
}

// 获取图片验证码   -- 查看验证码
export function getCode2 (options) {
  return get('/apis/code/getCode.do', options)
}

// 验证图片验证码 -- 验证
export function checkCode (options) {
  return get('/apis/code/checkCode.do', options)
}

// ***首页****
// 获取大盘指数
export function getMarket (options) {
  return get('/apis/api/stock/getMarket.do', options)
}

// 股票列表数据
export function getStock (options) {
  return get('/apis/api/stock/getStock.do', options)
}

// 获取期货列表
export function getFutures (options) {
  return get('/apis/api/futures/queryList.do', options)
}

// 获取首页显示的期货列表
export function getHomeFutures (options) {
  return get('/apis/api/futures/queryHome.do', options)
}

// 查询期货产品的交易状态
export function queryTrans (options) {
  return get('/apis/api/futures/queryTrans.do', options)
}

// 查询基币的汇率，对外暴露
export function queryExchange (options) {
  return get('/apis/api/futures/queryExchange.do', options)
}

// 查询单个期货产品的行情（行情源的数据）
export function querySingleMarket (options) {
  return get('/apis/api/futures/querySingleMarket.do', options)
}

// 期货下单
export function buyFutures (options) {
  return post('/apis/user/buyFutures.do', options)
}

// 期货平仓
export function sellFutures (options) {
  return post('/apis/user/sellFutures.do', options)
}

// 获取我的持仓单 - 期货
export function getFuturesOrderList (options) {
  return post('/apis/user/futures/position/list.do', options)
}

// 获取期货网站设置信息
export function getFuturesSetting (options) {
  return post('/apis/api/admin/getFuturesSetting.do', options)
}

// 查询列表页显示的指数
export function getListMarket (options) {
  return get('/apis/api/index/queryListIndex.do', options)
}

// 单只股票行情数据
export function getSingleStock (options) {
  return post('/apis/api/stock/getSingleStock.do', options)
}

// 添加自选
export function addOption (options) {
  return post('/apis/user/addOption.do', options)
}

// 删除自选
export function delOption (options) {
  return post('/apis/user/delOption.do', options)
}

// 下单
export function buy (options) {
  return post('/apis/user/buy.do', options)
}

// 用户平仓
export function sell (options) {
  return post('/apis/user/sell.do', options)
}

// ***用户中心***/
// 用户详情
export function getUserInfo (options) {
  return post('/apis/user/getUserInfo.do', options)
}

// 添加银行卡
export function addBankCard (options) {
  return post('/apis/user/bank/add.do', options)
}

// 修改银行卡
export function updateBankCard (options) {
  return post('/apis/user/bank/update.do', options)
}

// 获取银行卡信息
export function getBankCard (options) {
  return post('/apis/user/bank/getBankInfo.do', options)
}

// 获取我的持仓单
export function getOrderList (options) {
  return post('/apis/user/position/list.do', options)
}

// 获取我的自选列表
export function getMyList (options) {
  return post('/apis/user/option/list.do', options)
}

// 实名认证
export function userAuth (options) {
  return post('/apis/user/auth.do', options)
}

// 资金明细
export function cashDetail (options) {
  return post('/apis/user/cash/list.do', options)
}

// 提现记录
export function rechargeList (options) {
  return post('/apis/user/recharge/list.do', options)
}

// 充值记录
export function withdrawList (options) {
  return post('/apis/user/withdraw/list.do', options)
}

// 充值
export function inMoney (options) {
  return post('/apis/user/recharge/inMoney.do', options)
}

// 提现
export function outMoney (options) {
  return post('/apis/user/withdraw/outMoney.do', options)
}

// 取消提现
export function canceloutMoney (options) {
  return post('/apis/user/withdraw/cancel.do', options)
}

// k线图
export function getMinK (options) {
  return post('/apis/api/stock/getMinK.do', options)
}

// k线图
export function getMinKEcharts (options) {
  return post('/apis/api/stock/getMinK_Echarts.do', options)
}

// 是否已添加自选
export function isOption (options) {
  return post('/apis/user/isOption.do', options)
}

// 获取网站设置信息
export function getSetting (options) {
  return post('/apis/api/admin/getSetting.do', options)
}

// 获取首页banner
export function getBannerByPlat (options) {
  return post('/apis/api/site/getBannerByPlat.do', options)
}

// 获取支付渠道
export function getPayInfo (options) {
  return post('/apis/api/site/getPayInfo.do', options)
}

// 获取单个渠道信息
export function getPayInfoDetail (options) {
  return post('/apis/api/site/getPayInfoById.do', options)
}

// 获取网站设置信息
export function getInfoSite (options) {
  return post('/apis/api/site/getInfo.do', options)
}

// 查询点差费率
export function findSpreadRateOne (options) {
  return post('/apis/api/user/findSpreadRateOne.do', options)
}

// k线图 分时
export function getMinuteLine (options) {
  return post('/apis/api/realTime/findStock.do', options, true)
}

// 公告列表
export function getArtList (options) {
  return post('/apis/api/art/list.do', options)
}

// 公告详情
export function getArtDetail (options) {
  return post('/apis/api/art/detail.do', options)
}

export function payLInk (url, options) {
  return post(url, options)
}

export function getjuhe1 (options) {
  return post('/apis/user/pay/juhe1.do', options)
}

// H5支付
export function getjuheH5 (options) {
  return post('/apis/user/pay/juheh5.do', options)
}

// 指数
// 获取指数网站设置信息
export function getIndexSetting (options) {
  return post('/apis/api/admin/getIndexSetting.do', options)
}

// 获取我的持仓单 - 指数
export function getIndexOrderList (options) {
  return post('/apis/user/index/position/list.do', options)
}

// 指数下单
export function indexBuy (options) {
  return post('/apis/user/buyIndex.do', options)
}

// 指数平仓
export function sellIndex (options) {
  return post('/apis/user/sellIndex.do', options)
}

// 用户资金户转
export function AmtChange (options) {
  return post('/apis/user/transAmt.do', options)
}

// 单只指数行情数据
export function getSingleIndex (options) {
  return post('/apis/api/index/querySingleIndex.do', options)
}

// 获取产品配置信息
export function getProductSetting (options) {
  return post('/apis/api/admin/getProductSetting.do', options)
}

// ==================最新，2020年7月9日23:12:11=========================
// 股票日线图
export function getDayK (options) {
  return post('/apis/api/stock/getDayK.do', options)
}

// 期货日线图
export function getFuturesDayK (options) {
  return post('/apis/api/stock/getFuturesDayK.do', options)
}

// 指数日线图
export function getIndexDayK (options) {
  return post('/apis/api/stock/getIndexDayK.do', options)
}

// 期货分钟-k线图
export function getFuturesMinKEcharts (options) {
  return post('/apis/api/stock/getFuturesMinK_Echarts.do', options)
}

// 指数分时-k线图
export function getIndexMinKEcharts (options) {
  return post('/apis/api/stock/getIndexMinK_Echarts.do', options)
}

// 站内消息
export function getMessagelist (options) {
  return post('/apis/user/cash/getMessagelist.do', options)
}

// 用户站内消息状态变已读
export function updateMessageStatus (options) {
  return post('/apis/user/cash/updateMessageStatus.do', options)
}

// 查询用户未读消息数
export function getUnreadCount (options) {
  return post('/apis/user/cash/getUnreadCount.do', options)
}

// ============================分仓配资-相关，2020年7月23日19:14:55=========================================
// 分仓配资设置信息查询
export function getFundsSetting (options) {
  return post('/apis/user/funds/getFundsSetting.do', options)
}

// 查询配资类型杠杆
export function getFundsTypeList (options) {
  return post('/apis/user/funds/getFundsTypeList.do', options)
}

// 配资申请-添加
export function addFundsApply (options) {
  return post('/apis/user/funds/addFundsApply.do', options)
}

// 配资申请-用户配资列表
export function getUserApplyList (options) {
  return post('/apis/user/funds/getUserApplyList.do', options)
}

// 配资申请-用户操盘中子账户
export function getUserSubaccount (options) {
  return post('/apis/user/funds/getUserSubaccount.do', options)
}

// 分仓交易-入仓
export function buyFunds (options) {
  return post('/apis/user/funds/buyFunds.do', options)
}

// 分仓交易-获取我的配资持仓单
export function getFundsOrderList (options) {
  return post('/apis/user/funds/fundsList.do', options)
}

// 分仓交易-配资平仓
export function sellFunds (options) {
  return post('/apis/user/funds/sellFunds.do', options)
}

// 分仓交易-查询子账户详情
export function getSubaccountInfo (options) {
  return post('/apis/user/funds/getSubaccountInfo.do', options)
}

// 配资杠杆-查询杠杆费率
export function getLeverRateInfo (options) {
  return post('/apis/user/funds/getLeverRateInfo.do', options)
}

// 配资追加申请-保存
export function appendApply (options) {
  return post('/apis/user/funds/appendApply.do', options)
}

// 配资追加申请-查询用户追加列表
export function getAppendList (options) {
  return post('/apis/user/funds/getAppendList.do', options)
}

// 交易大厅-中间部分-新闻资讯
export function getTransactionNewList (options) {
  return get('/apis/api/news/getTopNews.do', options)
}

// 交易大厅-中间部分-通知公告
export function getTransactionNoticeList (options) {
  return get('/apis/api/art/getTopArt.do', options)
}
// 交易大厅右侧-交易历史记录接口
export function getDealHistory(options) {
  return get('/apis/api/news/getPositionTop.do', options)
}

// 资讯列表（交易大厅左侧小列表）
export function getNewsList(options) {
  return get('/apis/api/news/getNewsList.do', options)
}

// 资讯详情（交易大厅左侧小列表，点击后右侧详情）
export function getNewsDetailList(options) {
  return get('/apis/api/news/getDetail.do', options)
}

// 资讯详情-修改浏览量（交易大厅左侧小列表，点击后呈现详情时加载）
export function updateNewsViews(options) {
  return post('/apis/api/news/updateViews.do', options)
}

// 交易大厅-中间下半部分-两融交易出仓查询选中股票最早入仓数据接口
export function findUserPositionByCode(options) {
  return get('/apis/user/position/findUserPositionByCode.do', options)
}
// 指数-查询最早入仓的一条数据
export function findUserIndexPositionByCode(options) {
  return get('/apis/user/index/position/findUserIndexPositionByCode.do', options)
}

// 期货-查询最早入仓的一条数据
export function findUserFuturesPositionByCode(options) {
  return get('/apisuser/futures/position/findUserFuturesPositionByCode.do', options)
}

// 股票-分仓交易-查询最早入仓的一条数据
export function findUserFundsPositionByCode(options) {
  return get('/apisuser/funds/findUserFundsPositionByCode.do', options)
}

// 新股-提出列表
export function Newlist (options) {
  return get('/apis/api/admin/getEsopList.do', options)
}
// 新股-提出列表 提出
export function ListsAdd (options) {
  return post('/apis/api/admin/addESOP_sq.do', options)
}
// 新股-赞同
export function endorseList (options) {
  return get('/apis/api/admin/getEsopList_sq.do', options)
}
// 首页-新闻
export function allNewList (options) {
  return get('/wifeed/api/tin-tuc/thi-truong', options)
}
// 股票列表
export function bestandslisteList (options) {
  return get('/wifeed/api/tin-tuc/co-phieu', options)
}
