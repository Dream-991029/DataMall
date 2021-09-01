<template>
    <div id="upside">
        <div class="icon-zong">
          <div class="icon-zuo">
            <p>显示所有{{11}}结果</p>
          </div>
          <div class="icon-you">
            <el-select v-model="value" placeholder="默认排序">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Upside",
  data(){
      return {
        options: [{
          value: '选项1',
          label: '默认排序'
        }, {
          value: '选项2',
          label: '按人气排序'
        }, {
          value: '选项3',
          label: '按最新排序'
        }, {
          value: '选项4',
          label: '按价格排序：从低到高'
        }, {
          value: '选项5',
          label: '按价格排序：从高到低'
        }],
        value: '',
        input:'',
      }
  }
}
</script>

<style scoped>
.icon-zuo{
  width: 200px;
  height: 50px;
  margin-left: 40px;
  text-align: center;
  line-height: 50px;
}
.icon-zuo > p{
  font-size: 18px;
}
.icon-zong {
  width: 100%;
  height: 50px;
}
.icon-you{
  width: 200px;
  height: 50px;
  float: right;
  margin-top: -53px;
  margin-right: 115px;
  padding: 8px;
}
</style>