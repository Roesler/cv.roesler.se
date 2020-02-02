<template>
  <div id="bg">
    <particles />
    <start></start>
  </div>
</template>

<script>
import particles from "./assets/components/particles";
import start from "./assets/components/start/start";

export default {
  name: "App",
  components: {
    particles,
    start
  }
};
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  background-color: #080031;
}
canvas {
  display: block;
}
#bg {
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #080031; /*#9b9b9b;*/
  /* background: linear-gradient(to top, #5c5a5a, #ffffff); */
  background: url("./assets/images/dark-grunge-texture.png") repeat right top,
    linear-gradient(to top, #000334 60%, #a79e01);
  /*  background-repeat: no-repeat;
  background-size: cover; */
  /*  background-position: 50% 50%; */
}
</style>

