<!--
 * @Descriptin: 1
 * @Version: 0.1
 * @Autor: boide gui
 * @Date: 2020-12-04 16:14:52
 * @LastEditors: boide gui
 * @LastEditTime: 2020-12-04 16:57:52
-->
<template>
  <div class="home-page">
    <Content />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Content from '@/components/goods/Index.vue'; // @ is an alias to /src
import Footer from '@/components/goods/Footer.vue'; // @ is an alias to /src

@Component({
  components: {
    Content,
    Footer,
  },
})
export default class Goods extends Vue {
  [x: string]: any;
  public beforeMount() {
    console.log(this.$route);
    console.log(this.$route.params.id || this.$route.query.gid);
    // if (!this.$route.query.gid) {
    //   this.$router.back();
    // }
  }
  public created() {
    const gid = this.$route.params.id || this.$route.query.gid;
    this.$store.dispatch('initGoodsDetail', gid);
  }
  get goodsDetail() {
    return this.$store.state.goodsDetail;
  }
}
</script>
