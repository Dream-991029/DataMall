<template>
    <div id="details">
        <DaoHang></DaoHang>
        <Logo></Logo>
        <Neck></Neck>
        <Skip></Skip>
        <Tail></Tail>
    </div>
</template>

<script>
import DaoHang from "@/components/DaoHang/DaoHang";
import Logo from "@/components/Logo/Logo"
import Neck from "@/components/Neck/Neck";
import Skip from "@/components/Content/Skip";
import Tail from "@/components/Tail/Tail";
export default {
  name: "Details",
  components: {Tail, Skip, Neck, DaoHang,Logo},
  data(){
    return{

    }
  },
  methods:{

  },

}
</script>

<style scoped>
#details{
  width: 1200px;
  position: relative;
  left: 50%;
  margin-left: -600px;
}
</style>