<template>
  <div id="start">
    <div class="container">
      <div class="row">
        <div class="col">
          <menus @activateItem="menumessage" />
          <!-- <socials></socials> -->
          <presentation></presentation>
          <resume></resume>
          <skills></skills>
          <contact></contact>
          <!--  
        https://vegibit.com/vuejs-parent-child-communication/
        https://alligator.io/vuejs/dynamic-components/
        https://stackoverflow.com/questions/50295985/how-to-tell-if-a-vue-component-is-active-or-not
          -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import menus from "../menus";
import presentation from "../slides/presentation";
import resume from "../slides/resume";
import skills from "../slides/skills";
import contact from "../slides/contact";
import socials from "../socials";
export default {
  name: "start",

  data: function() {
    return { selectedComponent: "presentation" };
  },
  props: ["chosencomponent"],
  components: {
    menus,
    socials,
    presentation,
    resume,
    skills,
    contact
  },

  methods: {
    menumessage(menuItem) {
      this.adjustCards(menuItem);
      return { selectedComponent: menuItem };
    },
    adjustCards(menuItem) {
      let section = "section-" + menuItem;
      let el = document.getElementById(section);
      let pre = document.getElementById("section-presentation");
      let x = document.getElementsByClassName("active-card");
      let i = 0;
      if (el.id === "section-presentation") {
        if (el.classList.contains("active-card"))
          el.classList.remove("active-card");
        el.classList.remove("sub-card-active");
      } else {
        if (el.classList.contains("active-card")) {
          el.classList.remove("active-card");
          pre.classList.add("sub-card-active");
        } else {
          el.classList.add("active-card");
          pre.classList.add("sub-card-active");
        }
      }
      //Removes "active-card" on other divs
      for (i = 0; i < x.length; i++) {
        if (
          x[i].classList.contains("active-card") &&
          x[i].id !== section &&
          x[i].id !== "section-presentation"
        )
          x[i].classList.remove("active-card");
      }
    }
  }
};
</script>
<style src="./start.scss" lang="scss">
</style>
 