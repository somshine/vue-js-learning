<script>
export default {
  data() {
    return {
      title: "Mr",
      firstName: "Somnath",
      lastName: "Shinde",
      username: "@somshine",
      village: "Ranzani",
      gender: "male",
      mobile: "9665781284",
      email: "soma.shinde@gmail.com",
      country: "India",
      address: "Ranzani, Tal: Madha Dist: Solaput",
      picture: "https://i.imgur.com/wvxPV9S.png",
      counter: 0,
    };
  },
  methods: {
    async getUser() {
      const response = await fetch("https://randomuser.me/api")
      const {results} = await response.json()
      const user = await results[0];
      console.log(user);

      this.firstName = user.name.first;
      this.lastName = user.name.last;
      this.title = user.name.title;
      this.email = user.email;
      this.username = user.login.username;
      this.gender = user.gender;
      this.mobile = user.cell;
      this.picture = user.picture.medium;
      this.address = user.location.street.name + " - " + user.location.street.number + ", " + user.location.city + " " + user.location.state + ", " + user.location.country + " ZipCode: (" + user.location.postcode + ")";
    },
  },
};
</script>

<template>
  <main>
    <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
      <div class="card p-4">
        <div
          class="image d-flex flex-column justify-content-center align-items-center"
        >
          <button class="btn btn-secondary">
            <img :class="gender"
              :src="picture" :alt="`${firstName} ${lastName}`"
              height="100"
              width="100"
            />
          </button>
          <span class="name mt-3">{{firstName}} {{lastName}}</span>
          <span class="idd">{{username}}</span>
          <div
            class="d-flex flex-row justify-content-center align-items-center gap-2"
          >
            <span class="idd1"><i class="fa fa-2x fa-mobile"></i>{{mobile}} </span>
            <span><i class="fa fa-copy"></i></span>
          </div>
          <div
            class="d-flex flex-row justify-content-center align-items-center mt-3"
          >
            <span class="number">{{gender}} <span class="follow">Gender</span></span
            >
          </div>
          <div class="d-flex mt-2">
            <button class="btn1 btn-dark" v-on:click="getUser()" v-bind:class="gender">Edit Profile</button>
          </div>
          <div class="text mt-3">
            <span>{{address}}</span>
          </div>
          <div
            class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"
          >
            <span><i class="fa fa-twitter"></i></span>
            <span><i class="fa fa-facebook-f"></i></span>
            <span><i class="fa fa-instagram"></i></span>
            <span><i class="fa fa-linkedin"></i></span>
          </div>
          <div class="px-2 rounded mt-4 date">
            <span class="join">Joined May,2021</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  * {
    margin: 0;
    padding: 0
}

body {
    background-color: #000
}

.male {
  color: black !important;
  border-color: aqua !important;
  background-color: aqua !important;
}

.female {
  border-radius: 16px;
  border-color: pink !important;
  background-color: pink !important;
}

.card {
    width: 350px;
    background-color: #efefef;
    border: none;
    cursor: pointer;
    transition: all 0.5s;
}

.image img {
    transition: all 0.5s
}

.card:hover .image img {
    transform: scale(1.5)
}

.btn {
    height: 140px;
    width: 140px;
    border-radius: 50%
}

.name {
    font-size: 22px;
    font-weight: bold
}

.idd {
    font-size: 14px;
    font-weight: 600
}

.idd1 {
    font-size: 12px
}

.number {
    font-size: 22px;
    font-weight: bold
}

.follow {
    font-size: 12px;
    font-weight: 500;
    color: #444444
}

.btn1 {
    height: 40px;
    width: 150px;
    border: none;
    background-color: #000;
    color: #aeaeae;
    font-size: 15px
}

.text span {
    font-size: 13px;
    color: #545454;
    font-weight: 500
}

.icons i {
    font-size: 19px
}

hr .new1 {
    border: 1px solid
}

.join {
    font-size: 14px;
    color: #a0a0a0;
    font-weight: bold
}

.date {
    background-color: #ccc
}

.justify-content-center {
  width: 50%;
  margin: auto;
}
</style>
