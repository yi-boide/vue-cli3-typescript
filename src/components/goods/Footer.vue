<!--
 * @Descriptin: 
 * @Version: 0.1
 * @Autor: boide gui
 * @Date: 2020-12-04 16:14:52
 * @LastEditors: boide gui
 * @LastEditTime: 2020-12-04 16:52:02
-->
<template>
  <div id="footer">
    <ul class="flex-box">
      <li>
        <ul class="flex-box left">
          <li>
            <span @click="fav" class="icon-shoucang"></span>
          </li>
          <li>
            <span @click="cart" class="icon-gouwuche"></span>
          </li>
        </ul>
      </li>
      <li class="flex-item-2">
        <span class="buy tc" @click="buy">购买</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GoodsFooter extends Vue {
  private gid: string | string[] = '';
  public created() {
    this.gid = this.$route.params.id || this.$route.params.gid as string | string[];
  }
  private buy() {
    console.log('buy: ', this.gid);
  }
  private fav() {
    console.log('fav: ', this.gid);
  }
  private cart() {
    console.log('cart: ', this.gid);
  }
}
</script>

<style lang="less" scoped>
#footer{
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  height: 42px;
  span{
    height: 22px;
    line-height: 24px;
    font-size: 16px;
    padding: 10px 0;
    cursor: pointer;
    display: block;
    &.icon-gouwuche{
      border-left: 1px solid #f3f3f3;
    }
  }
  .buy{
    background-color: #ff5a0c;
    color: #fff;
  }
  .left{
    span{
      height: 21px;
      border-top: 1px solid #f3f3f3;
    }
  }
}
</style>
