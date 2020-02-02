<template>
  <div class="section-card card-shadow bg-texture card-trans" id="section-resume">
    <div class="row">
      <div class="col">
        <b-row>
          <b-col>
            <h2 class="section-card-title">Assignments</h2>
          </b-col>
          <b-col class="d-sm-block d-md-block d-lg-none d-xl-none">
            <b-button @click="show = !show" class="mb-2 float-right">Toggle display</b-button>
          </b-col>
        </b-row>
        <hr class="hr1" />
        <div role="tablist" v-show="show">
          <b-card no-body class="mb-1" v-for="item in a" :key="item.id">
            <b-card-header
              header-tag="header"
              class="p-1 btn-adjustment"
              role="tab"
              style="background-color: #283e4a;"
              href="#"
              v-b-toggle="'accordion-' + item.id"
            >
              <b-row>
                <b-col lg="6" offset-lg="0" vertical-align style="padding: 2px;" class="mx-auto">
                  <b-img center :src="item.logourl" fluid :alt="item.company" class="company-logo"></b-img>
                </b-col>
                <b-col lg="5" sm="6" offset-lg="0" offset-sm="3" class="mx-auto">
                  <b-badge
                    variant="light"
                    style="font-size:14px;"
                    class="mx-auto d-block mt-2 mb-1 mt-sm-1 mb-sm-1 mt-md-3 mb-md-3"
                  >{{item.from}} - {{item.to}}</b-badge>
                </b-col>
              </b-row>
            </b-card-header>
            <b-collapse :id="'accordion-' + item.id" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <b>Company / Department:</b>
                  {{item.company}}
                </b-card-text>
                <b-card-text>
                  <b>Where:</b>
                  {{item.location[0].city}}
                </b-card-text>
                <b-card-text>
                  <b>Title:</b>
                  {{item.title}}
                </b-card-text>
                <b-card-text>
                  <b>Description:</b>
                </b-card-text>
                <b-card-text>{{item.description}}</b-card-text>
                <b-card-text>
                  <b>Technologies used:</b>
                </b-card-text>
                <b-card-text>
                  <h5>
                    <b-badge v-for="t in item.tools" :key="t.id">{{t}}</b-badge>
                  </h5>
                  <pre>{{a.tools}}</pre>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import VueResource from "vue-resource";
import data from "../../../../static/assignments.json";
export default {
  name: "resume",
  data() {
    return {
      a: [],
      show: true,
      isVisible: false
    };
  },
  methods: {
    getAssignments() {
      const re = data.assignments;
      const resultArray = [];
      for (let key in re) {
        resultArray.push(re[key]);
      }
      this.a = resultArray;
    },
    handleVisibility(isVisible) {
      this.isVisible = isVisible;
    }
  },
  mounted: function() {
    this.getAssignments();
  }
};
</script>

<style lang="scss" scoped>
.company-logo {
  max-width: 50px;
  max-height: 50px;
}
/* .btn-adjustment {
  min-height: 55px;
  padding-top: 5px;
} */
</style>