<template>
          <br>

  <div class="container grid">
    <div class="row justify-content-around">
      <div v-if="fetching == true">
        <moon-loader
          :loading="loading"
          color="#1a1a1a"
          :size="size"
        ></moon-loader>
      </div>
      <div v-else>
        <div class="row col-6 flex-row-reverse">
          <div class="view-button">
            <div class="dropdown">
              <button
                class="btn btn-light dropdown-toggle d-block d-lg-none d-xl-none"
                role="button"
                id="MenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                CATAGORIES
              </button>
              <div class="dropdown-menu" aria-labelledby="MenuLink">
                <a class="dropdown-item">Cat 1</a>
                <a class="dropdown-item">Cat 2</a>
                <a class="dropdown-item">Cat 3</a>
                <a class="dropdown-item">Cat 4</a>
                <div class="dropdown-divider"></div>
                <div class="pl-3">
                  <span class="circle" style="background-color: yellow" />
                  <span class="circle" style="background-color: blue" />
                  <span class="circle" style="background-color: white" />
                  <span class="circle" style="background-color: red" />
                </div>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item">Reset</a>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col col-xl-3 col-lg-3 d-none d-lg-block d-xl-block">
            <div class="card-selector">
              <div class="card-body p-5">
                <div class="search-title">
                  <h4>Catagories +</h4>
                  <br />
                  <h6 @click="sortI('table')">Cat 1</h6>
                  <h6 @click="sortI('lamp')">Cat 2</h6>
                  <h6 @click="sortI('chair')">Cat 3</h6>
                  <h6 @click="sortI('sofa')">Cat 4</h6>
                  <br /><br /><br />
                  <h4 class="search-title">Filter by +</h4>
                  <br />
                  <div class="co">
                    <h5>Color</h5>
                    <!-- <span class="circle" style="background-color:yellow" @click="sortI('yellow')"></span>
                  <span class="circle" style="background-color:blue" @click="sortI('blue')" ></span>
                  <span class="circle" style="background-color:white" @click="sortI('white')"></span>
                  <span class="circle" style="background-color:red" @click="sortI('red')"></span> -->
                  </div>
                  <br /><br />
                  <h5>Price Range</h5>
                  <slider @clicked="valueSlider" />
                </div>
              </div>
            </div>
          </div>
          <div
            class="row col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 text-center"
          >
            <!-- Card -->
            <div>
              <transition-group name="fade" class="row" tag="div">
                <div
                  class="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3"
                  v-for="prod in prod_data.data"
                  :key="prod.id"
                >
                  <div class="card">
                    <img
                      class="card-img-top"
                      :src="prod.images[0].src"
                      alt="Card image cap"
                      height="260"
                      width="260"
                    />
                    <div class="overlay">
                      <button
                        type="button"
                        class="btn btn-outline-secondary btn-lg"
                      >
                        Add +
                      </button>
                      <router-link to="/Info"
                        ><button
                          type="button"
                          class="btn btn-outline-secondary btn-lg"
                        >
                          Info
                        </button></router-link
                      >
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{{ prod.name }}</h5>
                      <p class="card-text">${{ prod.price }}</p>
                    </div>
                  </div>
                </div>
              </transition-group>
            </div>
          </div>
          <!-- Card  end-->
          <div
            class="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 py-5"
          >
            <button
              type="button"
              class="btn btn-outline-secondary btn-lg btn-block"
            >
              More +
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MoonLoader from "vue-spinner/src/MoonLoader.vue";
export default {
  name: "Products",
  components: {
    MoonLoader: MoonLoader,
  },

  data() {
    return {
      prod_data: null,
      fetching: false,
      ls: null,
    };
  },

  created() {
    this.test();
  },
  methods: {
    test() {
      this.ls = localStorage.getItem("Products");

      if (this.ls !== null) {
        console.log(this.ls);
      }
    //   } else {
        this.fetching = true;
        this.api
          .get("products", { per_page: 20 })
          .then((response) => {
            console.log(response);
            this.fetching = false;
            this.prod_data = response;
            localStorage.setItem("Products", response.data);
          })
          .catch((error) => {
            this.fetching = false;
            console.log(error);
          });
      }
    },
//   },
};
</script>

<style lang="scss">
body {
  background: #f8f8f8;
  font-family: sans-serif;
  padding: 25px;
}

/* transition Group style */
.fade-move {
  transition: transform 1s;
}
/* Card Style */
.card {
  transition: 500ms;
  position: relative;
  overflow: hidden;
}

.card img {
  z-index: 1;
}

.card button {
  width: 140px;
  margin-bottom: 10px;
}

.card:hover img {
  filter: blur(4px);
}

.card:hover .overlay {
  opacity: 0.8;
}

.card .overlay {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  background-color: #232b34;
  opacity: 0;
  z-index: 100;
  transition: all 0.3s ease-in;
}

.card:hover,
.card:active {
  transform: scaleY(1.1) scaleX(1.06);
  box-shadow: 0 14px 98px rgba(0, 0, 0, 0.25), 0 0px 60px rgba(0, 0, 0, 0.22);
}

.container.grid {
  min-height: 60rem;
}

.container.grid a {
  cursor: pointer !important;
}

.btn-light {
  color: black !important;
  background: white;
  border-radius: 0 !important;
  border: 1px solid grey !important;
}
.dropdown-menu {
  background-color: #eee;
  color: #2c3539;
}

.dropdown-menu > a:hover {
  background-color: #dae0e5;
}

.btn-outline-secondary {
  border-radius: 0 !important;
}

/*search options*/

.card-selector {
  color: #dcdcdc;
  height: 40rem;
  background: #2c3539 !important;
  box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.1), 0 26px 70px 0 rgba(0, 0, 0, 0.69);
}

.search-title h6 {
  cursor: pointer;
}

.circle {
  height: 17px;
  width: 17px;
  border-radius: 50%;
  border: 0.7px solid #2c3539;
  display: inline-block;
  margin-left: 6px;
  cursor: pointer;
}
</style>
