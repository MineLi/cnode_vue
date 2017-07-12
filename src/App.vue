<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <header>
      <div class="header-content">
        <router-link to="/">
          <div class="logo-content">
            <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="">
          </div>
        </router-link>
        <ul>
          <router-link to="/">
            <li>首页</li>
          </router-link>
          <router-link to="/about">
            <li>关于</li>
          </router-link>
        </ul>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  background-color: #eee;
}

body {
  margin: 0 !important;
  padding: 0 !important;
}

body,
div,
span,
a,
p,
ul,
li,
dl,
dd,
dt {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  width: 100%;
  height: 50px;
  background-color: #444;
  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 70%;
    margin: auto;
    .logo-content {
      width: 120px;
      padding: 3px 20px;
      height: 28px;
      font-size: 20px;
      font-weight: 200;
      color: #777;
      text-shadow: 0 1px 0 #fff;
      margin-bottom: 5px;
    }
    ul {
      li {
        display: inline-block;
        color: #ccc;
        padding: 5px 10px;
        &:hover {
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
