<template>
  <div class="row justify-content-end mt-3 mr-2">
    <div class="col-11">
      <h5 class="float-right">
        <span class="badge social-text">SOCIAL PROFILES</span>
      </h5>
    </div>
    <div class="col-1">
      <h5>
        <span class="badge social-in">
          <a
            href="javascript:void(0)"
            onclick="window.open('https://www.linkedin.com/in/it-consultant-sweden/')"
          >
            <img src="../images/social_in.png" />
          </a>
        </span>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "socials",
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.social-icons {
  font-size: 28px;
  text-align: right;
  display: none;
}
@media (min-width: 768px) {
  .social-icons {
    display: block;
  }
}
.social-icons a {
  color: #ffffff;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  opacity: 1;
}
.social-icons a:hover {
  opacity: 0.7;
}
.footer-social-icons {
  text-align: center;
}
.footer-social-icons a {
  color: #ffffff;
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  background: #333333;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  font-size: 14px;
  line-height: 30px;
  border-radius: 0px;
  -moz-border-radius: 0px;
  -webkit-border-radius: 0px;
}
.footer-social-icons a:hover {
  color: #ffffff;
  background: #08aeac;
}
</style>