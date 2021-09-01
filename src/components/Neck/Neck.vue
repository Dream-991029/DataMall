<template>
    <div id="neck">
          <nav class="icon-text">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            </el-breadcrumb>
          </nav>
          <div class="icon-title"><h1>123</h1></div>
        </div>
</template>

<script>
export default {
  name: "Neck"
}
</script>

<style scoped>
#neck{
  margin-top: 20px;
}
.icon-text{
  max-width: 1200px;
  height: 15px;
  margin-left: 75px;
  margin-bottom: 20px;
  margin-top: 5px;
}
.icon-title{
  margin-left: 75px;
  text-align: left;
}
</style>