<template>
  <div>
    <NavBar />
    <div class="container">
      <router-view></router-view>
    </div>
    <NotificationList />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import NotificationList from "./components/NotificationList.vue";

export default {
  name: "App",
  components: {
    NavBar,
    NotificationList,
  },
};
</script>

<style></style>
