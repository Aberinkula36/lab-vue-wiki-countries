<template>
  <div class="menu">
    <h1>LAB - WikiCountries</h1>
    <router-link to="/ejemplo">Router Link</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
    .menu{
        display: flex;
        justify-content: space-around;
        margin-left: -40px;
    }

    li{
        list-style: none;
    }
</style>