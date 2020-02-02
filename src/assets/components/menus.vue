<template>
  <div class="main-menu" id="menu">
    <ul class="main-menu-list">
      <li>
        <a
          @click="setActive('presentation')"
          :class="{ active: isActive('presentation') }"
        >Presentation</a>
      </li>
      <li>
        <a @click="setActive('resume')" :class="{ active: isActive('resume') }">Work resume</a>
      </li>
      <!--   <li>
        <a
          v-on:click="setActive('skills')"
          :class="{ active: isActive('skills') }"
        >Skills & education</a>
      </li>
      <li>
        <a v-on:click="setActive('contact')" :class="{ active: isActive('contact') }">Contact</a>
      </li>-->
    </ul>
  </div>
</template>

<script>
export default {
  name: "menus",
  data() {
    return { activeItem: "presentation" };
  },
  methods: {
    isActive: function(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive: function(menuItem) {
      this.activeItem = menuItem;
      this.adjustmenu(menuItem);
      this.sendmessagetoparent(this.activeItem);
    },
    sendmessagetoparent(ai) {
      this.$emit("activateItem", ai);
    },
    adjustmenu(menuItem) {
      let el = document.getElementById("menu");
      if (menuItem !== "presentation") {
        if (!el.classList.contains("sidecard-active"))
          el.classList.add("sidecard-active");
      } else {
        el.classList.remove("sidecard-active");
      }
    }
  }
};
</script>

<style lang="scss">
.main-menu {
  width: 15%;
  position: absolute;
  top: 0;
  left: 15%;
  padding-right: 10px;
  margin-top: 36px;
  -webkit-transition: all 0.6s ease-in-out;
  -moz-transition: all 0.6s ease-in-out;
  transition: all 0.6s ease-in-out;
  display: none;
}
@media (min-width: 992px) {
  .main-menu {
    display: block;
  }
}
@media (min-width: 1200px) {
  .main-menu {
    margin-top: 186px;
  }
}
.sidecard-active {
  left: 0%;
}
.main-menu-list {
  margin: 0;
  padding: 0;
}
.main-menu-list li {
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
  list-style: none;
  color: #ffffff;
}
.main-menu-list a {
  text-decoration: none;
  display: block;
  background: #283e4a;
  padding: 10px;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 12px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  z-index: 1;
  /*  background-color: #283e4a;
    border-color: #283e4a; */

  /*   &:active,
    &:hover,
    &:focus {
        background-color: #021533;
        border-color: #021533;

    } */
  &.active {
    background-color: #021533;
    /*  &:hover {

    } */
  }
  &:hover {
    border: 0px solid transparent !important;
    padding-left: 15px;
    background-color: #021533;
  }
  &:visited {
    text-decoration: none;
  }
  &:before {
    color: #ffffff;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background: #021533;
    z-index: -1;
  }
}
</style>