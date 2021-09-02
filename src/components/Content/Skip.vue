<template>
  <div id="skip">
    <div class="skip-box">
      <div class="skip-head">
        <div class="skip-head-left scale-img">
          <img :src="detailsInfo.icon_file_path" alt="" class="icon-img" />
        </div>
        <div class="skip-head-right">
          <div class="head-right-one">
            {{ detailsInfo.title }}
          </div>
          <div class="head-right-two">数量: {{ detailsInfo.count }}</div>
          <div class="head-right-three">大小: {{ detailsInfo.size }}</div>
          <div class="head-right-btn">
            <el-button @click="getDownLoad(detailsInfo.id)">下载示例</el-button>
          </div>
          <!--                    <div class="head-right-three">-->
          <!--                        <div class="head-right-three-1">-->
          <!--                            <button @click="sub">-</button>-->
          <!--                            <span>{{num}}</span>-->
          <!--                            <button @click="add">+</button>-->
          <!--                        </div>-->

          <!--                        <div class="head-right-three-2" @click="dialogVisible = true">-->
          <!--                            添加到购物车-->
          <!--                        </div>-->

          <!--                    </div>-->
          <!--                    <div class="head-right-four" >-->
          <!--                        类别:<span v-for="item in 4"><a :href="item">{{123}}，</a></span>-->
          <!--                    </div>-->
        </div>
      </div>
      <div class="skip-foot">
        <h2>相关产品</h2>
        <div class="skip-foot-text">
          <Content></Content>
        </div>
      </div>
    </div>
    <!--购物车弹框-->
    <el-dialog
      class="dialog"
      :visible.sync="dialogVisible"
      width="54%"
      :append-to-body="true"
      :modal-append-to-body="false"
    >
      <template slot="title">
        <div
          style="
            font-size: 20px;
            font-weight: 700;
            text-align: center;
            color: #606266;
          "
        >
          购物车
        </div>
      </template>
      <div style="height: 350px; position: relative">
        <div class="box-tan-1">
          <svg style="width: 30px; height: 30px; color: #606266">
            <use xlink:href="#icon-duihao"></use>
          </svg>
        </div>
        <div class="box-tan-2">产品已成功添加到您的购物车</div>
        <div class="box-tan-shan" v-if="list.length">
          <table class="box-tan-shan">
            <thead>
              <tr>
                <th style="width: 30px">序号</th>
                <th>商品图标</th>
                <th>商品名称</th>
                <th>商品价格</th>
                <th>商品数量</th>
                <th style="margin-left: 500px">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in list" :key="index">
                <td style="text-align: center">{{ item.id }}</td>
                <td style="text-align: center">{{ item.picture }}</td>
                <td style="text-align: center">{{ item.name }}</td>
                <td style="text-align: center">{{ item.price }}</td>
                <td style="text-align: center">
                  <button
                    @click="decrement(index)"
                    :disabled="item.count === 1"
                  >
                    -
                  </button>
                  {{ item.count }}
                  <button @click="increment(index)">+</button>
                </td>
                <td style="text-align: center">
                  <button @click="btnRemoveClick(index)">移除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>购物车为空</div>
        <div class="fenggexian">
          <el-divider></el-divider>
        </div>
        <div class="box-tan-price">
          <div class="box-tan-price-1">
            总价:￥<span>{{ totalPrice }}</span>
          </div>
        </div>
        <div class="box-tan-btn">
          <div class="box-tan-btn-1">查看购物车</div>
          <div class="box-tan-btn-2">查看</div>
          <div class="box-tan-btn-3">继续购物</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Content from "@/components/Content/Content";
import { exportMethod } from '../../main'

export default {
  name: "Skip",
  components: {Content},
  data() {
    return {
      num: 0,
      dialogVisible: false,
      downlist: "",
      list: [
        {
          id: 1,
          picture: require('../../assets/测试图片.jpg'),
          name: '5G数据',
          price: 500,
          count: 1
        },
        {
          id: 2,
          picture: require('../../assets/测试图片.jpg'),
          name: '3G数据',
          price: 300,
          count: 1
        }
      ]
    }
  },
  methods: {
    add: function () {
      if (this.num < 100000000) {
        this.num++
      }
    },
    sub: function () {
      if (this.num > 0) {
        this.num--
      }
    },
    increment(index) {
      this.list[index].count++;
    },
    decrement(index) {
      this.list[index].count--;
    },
    btnRemoveClick(index) {
      this.list.splice(index, 1);
    },
    getDownLoad(id){
      this.axios({
        method: 'get',
        url: '/datamall/download/',
        params: {id:id},
        // 这个响应类型必须设置
        responseType: 'arraybuffer' 
      }).then(res=>{
        // 创建blob对象, 设置文件类型
        let blob = new Blob([res.data], {
          type: 'application/octet-stream'
        })
        let reg = /.*?"(.*)"$/g
        let file_name = decodeURI(reg.exec(res.headers['content-disposition'])[1])
        // 创建a标签
        const link = document.createElement('a')
        // 设置a样式为none
        link.style.display = 'none';
        // 定义a标签url
        link.href = URL.createObjectURL(blob)
        // 自定义文件名
        link.download = file_name
        // 挂载a标签
        document.body.appendChild(link)
        // 模拟点击
        link.click()
        // 释放内存
        URL.revokeObjectURL(link.href)
        // 取消挂载a标签
        document.body.removeChild(link)
      })
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      for (let item of this.list) {
        totalPrice += item.price * item.count;
      }
      return totalPrice;
    },
    detailsInfo() {
      return this.$store.state.detailsInfo
    }
  },
  // created() {
  //   this.axios({
  //     method:'get',
  //     url:'/datamall/info/',
  //     params:{'id':this.id}
  //   }).then(res=>{
  //     if(res.data.status === 200 ){
  //       this.list_num = res.data.data
  //       console.log(this.list_num)
  //     }
  //   })
  // },
  watch: {
    detailsInfo: {
      handler(newData){

      },
     immediate:true
    }
  }
}
</script>

<style scoped>
.skip-box {
  width: 1200px;
  display: inline-block;
  z-index: 2000;
  margin-left: 10px;
}

.skip-head {
  width: 1200px;
  height: 400px;
}

.skip-head-left > img {
  width: 300px;
  height: 300px;
  float: left;
  margin-left: 70px;
  margin-top: 50px;
  transition: 0.5s all linear;
}

.scale-img:hover img {
  transform: scale3d(1.2, 1.2, 1.2);
  -ms-transform: scale3d(1.2, 1.2, 1.2);
  -moz-transform: scale3d(1.2, 1.2, 1.2);
  -webkit-transform: scale3d(1.2, 1.2, 1.2);
  -o-transform: scale3d(1.2, 1.2, 1.2);
}

.skip-head-right {
  width: 600px;
  height: 400px;
  float: right;
  margin-right: 115px;
}

.head-right-one {
  font-size: 30px;
  font-weight: 700;
  margin: 10px 0;
  text-align: left;
}

.head-right-two {
  font-size: 25px;
  font-weight: 700;
  margin: 30px 0;
  text-align: left;
}

.head-right-btn {
  margin: 50px 0;
  text-align: left;
}

.head-right-three {
  text-align: left;
}

.head-right-three-1 {
  width: 70px;
  height: 30px;
  border: #e1e1e1 1px solid;
  text-align: center;
  line-height: 30px;
  border-right: 5px;
  float: left;
}

.head-right-three-2 {
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-weight: 700;
  border-radius: 5px;
  font-size: 15px;
  border: #e1e1e1 1px solid;
  float: left;
  margin: 0 100px;
  cursor: pointer;
}

.head-right-three-2:hover {
  background: gray;
}

.head-right-four {
  width: 600px;
  margin: 50px 0;
  text-align: left;
  float: left;
}

a {
  text-decoration: none;
}

h2 {
  float: left;
  margin-left: 70px;
}

.skip-foot-text {
  width: 1200px;
  float: left;
}

.box-tan-1 {
  width: 30px;
  height: 30px;
}

.box-tan-2 {
  width: 300px;
  float: left;
  margin-left: 30px;
  margin-top: -26px;
  font-size: 20px;
  font-weight: 700;
}

.box-tan-shan {
  margin: 10px 0;
  width: 650px;
  height: 150px;
  background: #e1e1e1;
  border-radius: 10px;
}

.fenggexian {
  width: 150px;
  float: right;
  margin-right: 45px;
}

.box-tan-price {
  width: 650px;
  height: 50px;
  float: left;
  margin-top: -25px;
}

.box-tan-price-1 {
  width: 150px;
  float: right;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
}

.box-tan-btn {
  width: 600px;
  height: 80px;
  float: left;
}

.box-tan-btn-1,
.box-tan-btn-2,
.box-tan-btn-3 {
  width: 150px;
  height: 30px;
  float: left;
  margin-left: 40px;
  margin-top: 15px;
  border-radius: 10px;
  border: 1px solid #e1e1e1;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
}

.box-tan-btn-1:hover {
  background: silver;
}

.box-tan-btn-2:hover {
  background: silver;
}

.box-tan-btn-3:hover {
  background: silver;
}
</style>