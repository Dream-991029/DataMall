<template>
    <div id="login">
        <div class="icon-box">
            <div class="icon-zuo">
                <img src="../../assets/login.png" alt="">
            </div>
            <div class="icon-you">
                <div class="icon-tu">
                    <svg class="icon"
                         aria-hidden="true"
                         style="width: 30px; height: 40px;">
                      <use xlink:href="#icon-14"></use></svg>
                </div>
              <el-badge :value="8" class="item">
                  <div class="icon-biao">
                  <svg class="icon"
                       aria-hidden="true"
                       style="width: 30px; height: 40px;">
                    <use xlink:href="#icon-tianchongxing-"></use></svg>
                </div>
              </el-badge>

            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>
.icon-box{
  max-width: 1200px;
  height: 50px;
  left: 50%;
  margin-top: 50px;
}
.icon-zuo{
  width: 200px;
  float: left;
}

.icon-you{
  width: 70px;
  float: right;
  margin-right: 200px;
  margin-top: 3px;
}
.icon-tu{
  width: 30px;
  height: 40px;
  float: left;
  background-color:#c0c0c0;
  cursor: pointer;
}
.icon-biao{
  width: 30px;
  height: 40px;
  float: right;
  background-color: #c0c0c0;
  cursor: pointer;
}
</style>