<template>
  <div id="app">
    <h1>购物车</h1>
    <p>账号： {{ email }}</p>
    <hr>
    <h2>产品</h2>
    <ProductList/>
    <hr>
    <ShoppingCart/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

export default {
  computed: mapState({
    email: state => state.userInfo.email
  }),
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>


<style lang="scss">

</style>
