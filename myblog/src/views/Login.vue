<template>
  <div class="login">
    <form method="POST" action="">
      <div class="user-wrapper">
        <input type="text" class="username" name="username" />
      </div>

      <div class="password-wrapper">
        <input type="password" class="password" name="password" />
      </div>

      <div class="btn-wrapper">
        <button>登录</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    count(){
      return this.$store.state.count
    }
  },
  methods: {
    countInc(){
      // commit方法的第二个参数可以传入 自定义参数
      this.$store.commit('countInc')
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/global.scss";
form {
  width:300px;
  height:200px;
  background-color:azure;
  margin: 0 auto;
  text-align: center;

  .user-wrapper{
    .username{
       height:px2rem(20);
       width:px2rem(180);
    }
  }

  .password-wrapper{
    .password{
       height:px2rem(20);
       width:px2rem(180);
    }
  }
}
</style>


