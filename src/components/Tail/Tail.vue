<template>
    <div id="tail">
        <div>
            <div class="icon-foot">
              <span>联系我们</span>
              <el-divider direction="vertical"></el-divider>
              <span>交付方式</span>
              <el-divider direction="vertical"></el-divider>
              <span>付款方式</span>
              <el-divider direction="vertical"></el-divider>
              <span>购物车页面</span>
              <el-divider direction="vertical"></el-divider>
              <span>订单</span>
            </div>
            <div class="demo-input-suffix">
            <el-input
                placeholder="搜索产品..."
                v-model="input"
                style="width: 500px">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Tail",
  data(){
    return{
      input:""
    }
  }
}
</script>

<style scoped>
.icon-foot{
  width: 100%;
  height: 100px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.demo-input-suffix{
  width:100% ;
  height: 100px;
  float: left;
  line-height: 100px;
}
.icon-foot > span {
  cursor: pointer;
}
</style>