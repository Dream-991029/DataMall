<template>
    <div class="home">
        <DaoHang></DaoHang>
        <Login></Login>
        <Neck></Neck>
        <Motif></Motif>
  </div>
</template>

<script>

import DaoHang from "../components/DaoHang/DaoHang";
import Login from "../components/Logo/Logo";
import Motif from "@/components/Motif/Motif";
import Neck from "@/components/Neck/Neck";
export default {
  name: 'Home',
  components: {
    Neck,
    Motif,
    Login,
    DaoHang
  },
  data() {
    return {
    };
  },


}
</script>
<style >
.home{
  z-index: 999;
  width: 1200px;
  position: relative;
  left: 50%;
  margin-left: -600px;
}
</style>