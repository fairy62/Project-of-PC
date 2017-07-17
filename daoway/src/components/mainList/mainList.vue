<template>
  <div class="mainlist-wrapper">
    <div class="box1" v-for="serviceItem in serviceItems">
      <div class="fff">
        <div class="servicebody">
          <div class="navigation">
            <span class="serviceIndex">{{serviceItem.name}}</span>
            <span class="serviceType"><i v-for="(every, index) in serviceItem.has">{{every}}<i v-show="index<serviceItem.has.length-1">/</i></i></span>
          </div>
          <div class="servicetags">
            <div class="tagsListHeader">
              <span class="lookMore">
                <router-link :to="`item/${serviceItem.id}`"
                              style="color: #898989; font-size: 18px">更多服务&gt;</router-link>
              </span>
            </div>
            <div class="row">
              <!-- 遍历生成每个小服务列表，数量为五个 -->
              <router-link class="form-group shopList" :to="`detail/${serviceItem.id}/${serve.id}`" v-if='index<5' v-for="(serve, index) in serviceItem.server" :key="index">
                <div class="ServiceBorder1">
                  <img :src="serve.img" class="serviceImg" width="210px" height="210px">
                  <div class="serviceName">{{serve.name}}</div>
                  <div class="description">服务内容：{{serve.content}}</div>
                  <div class="price">
                    <span style="font-size: 20px">{{serve.price}}</span>元/小时
                    <span class="btn">查看详情</span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    props: ['serviceItems'],

    methods: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  *
    box-sizing border-box
    .box1:nth-child(2n+0)
      background-color #FBF8F8
    .box1
      height:560px
      width:100%
      overflow hidden
      .fff
        width:1200px
        clear both
        padding: 60px 0
        margin: 0 auto
        .servicebody
          .navigation
            text-align center
            span
              display block
            .serviceIndex
              color: #3d3838
              font-size 28px
              font-weight 800
              font-family "Microsoft YaHei"
            .serviceType
              font-size: 22px
              color: #3d3838
              margin-top: 15px
          .servicetags
            .tagsListHeader
              text-align right
              .lookMore
                position relative
                bottom: 10px
            .row
              margin-top: 10px;
              margin-left: 0;
              margin-right: 0;
              .form-group
                position: relative
                margin-bottom 0
                .ServiceBorder1
                  float: left;
                  padding: 10px;
                  width: 230px;
                  border: 1px solid #eaeaea;
                  margin: 0 5px;
                  background: #fff;
                  cursor: pointer;
                  height: 345px;
                  .serviceName
                    font-size: 16px;
                    padding: 10px 0;
                    font-weight: 800;
                    color: #000;
                    height: 28px;
                    overflow: hidden;
                    width: 100%;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                  .description
                    color: #929292;
                    padding: 6px 0;
                    word-break: break-all;
                    font-size: 13px;
                    line-height: 20px;
                    height: 50px;
                    overflow : hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                  .price
                    font-size: 14px;
                    padding: 5px 5px;
                    font-weight: 600;
                    height: 20px;
                    line-height: 20px;
                    color: #fb474f;
                    .btn
                      float: right;
                      padding: 0;
                      width: 76px;
                      height: 24px;
                      line-height: 22px;
                      text-align: center;
                      background: #fb474f;
                      border-radius: 5px;
                      color: #fff;
                      font-size: 14px;
                .ServiceBorder1:hover
                  box-shadow: 6px 6px 14px 0 #eaeaea;
</style>
