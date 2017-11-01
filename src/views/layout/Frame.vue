<template lang="html">
  <div class="frameContainer">
    <transition name="routerView" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'frame'
  }
</script>
