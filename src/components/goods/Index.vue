<!--
 * @Descriptin: 
 * @Version: 0.1
 * @Autor: boide gui
 * @Date: 2020-12-04 16:14:52
 * @LastEditors: boide gui
 * @LastEditTime: 2020-12-04 16:26:24
-->
<template>
  <div id="content" @scroll="scroll" ref="content">
    <Banner />
    <Info />
    <Content :scrollTop="scrollTop" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Banner from './Banner.vue';
import Info from './Info.vue';
import Content from './Content.vue';

@Component({
  components: {
    Banner,
    Info,
    Content,
  },
})
export default class GoodsIndex extends Vue {
  private scrollTop: number  = 0;
  private scroll() {
    this.scrollTop = (this.$refs.content as Element).scrollTop;
  }
}
</script>

<style lang="less" scoped>
#content{
  top: 0;
  bottom: 42px;
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 1;
  overflow: auto;
}
</style>
