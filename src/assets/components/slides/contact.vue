<template>
  <div class="section-card card-shadow bg-texture card-trans" id="section-contact">
    <!-- Profile pic-->
    <!--  <img src="../../images/linkedin.jpg" class="rounded mx-auto d-block profileActive" /> -->
    <div class="section-card-content">
      <!-- Profile title -->
      <h1 class="section-card-title">
        Hi, i'm
        <br />
        <span class="color1">{{p.name}}!</span>
      </h1>
      <h2 class="profile-subtitle">
        {{p.title}}
        <br />&amp; consultant
      </h2>
      <hr class="hr1" />
      <div class="vcard-profile-description-text">
        <p>{{p.presentation}}</p>
      </div>
    </div>

    <tr></tr>
  </div>
</template>
<script>
import VueResource from "vue-resource";
import data from "../../../../static/profile.json";
export default {
  name: "presentation",
  data() {
    return {
      p: data.profile
    };
  }
};
</script>