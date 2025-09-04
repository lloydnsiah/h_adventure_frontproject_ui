<script setup>
import { Icon } from "@iconify/vue";
import Home_Hero_Section from "../components/AdventureComponents/Home_Hero_Section.vue";
import Home_Adventures from "../components/AdventureComponents/Home_Adventures.vue";
</script>

<template>
  <section id="hero_section mt-6 ">
    <div class="h-[100vh] box flex items-center justify-end pr-22">
      <img src="../images/logo_1.png" alt="Logo" />
    </div>
  </section>

  <section class="flex flex-col items-center">
    <img class="w-auto" src="../images/home_img_2.png" alt="image" />
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-16 section_container my-12">
      <div class="flex flex-row gap-4 shadow-sm px-4 py-8 rounded-md">
        <Icon
          icon="material-symbols:hourglass-empty"
          width="100"
          height="100"
          style="color: #717171"
        />
        <div class="flex flex-col gap-3">
          <span class="text-2xl font-bold">Always on Time</span>
          <p class="text-xl font-light tracking-widest">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div class="flex flex-row gap-4 shadow-sm px-4 py-8 rounded-md">
        <Icon
          icon="material-symbols:directions-bus-outline"
          width="100"
          height="100"
          style="color: #717171"
        />
        <div class="flex flex-col gap-3">
          <span class="text-2xl font-bold">Safe Transport</span>
          <p class="text-xl font-light tracking-widest">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div class="flex flex-row gap-4 shadow-sm px-4 py-8 rounded-md">
        <Icon
          icon="material-symbols:globe-asia-sharp"
          width="100"
          height="100"
          style="color: #717171"
        />
        <div class="flex flex-col gap-3">
          <span class="text-2xl font-bold">Different Currencies</span>
          <p class="text-xl font-light tracking-widest">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div class="flex flex-row gap-4 shadow-sm px-4 py-8 rounded-md">
        <Icon
          icon="material-symbols:person-raised-hand-outline"
          width="100"
          height="100"
          style="color: #717171"
        />
        <div class="flex flex-col gap-3">
          <span class="text-2xl font-bold">Always on Time</span>
          <p class="text-xl font-light tracking-widest">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="flex items-center justify-center section_container">
    <img src="../images/home_img_3.png" alt="image" />
  </section>

  <section class="flex flex-row max-h-[90vh] section_container mt-3">
    <div class="w-1/2 flex flex-col items-center justify-center space-y-4 px-6">
      <img src="../images/logo_img_2.png" class="scale-60" alt="logo" />

      <span class="text-4xl font-bold tracking-wide"
        >Make your holidays unforgettable!</span
      >
      <p class="text-2xl font-light tracking-wider text-center">
        Discover vibrant coral reefs, diverse marine life and fascinating
        underwater attractions or jump over sand dunes and enjoy a beautiful
        ride through the desert on a quad bike.
      </p>
      <span class="text-primary-orange text-2xl text-center font-bold italic"
        >“Don't fear; remember, life is an adventure.“ And so ..... the
        adventure begins!</span
      >

      <div class="flex flex-row w-full items-center justify-center mt-4">
        <hr class="grow-1 border-4 rounded-l-full border-primary-orange" />
        <button
          class="py-5 px-10 bg-primary-orange text-white text-2xl tracking-widest rounded-full"
        >
          Learn More
        </button>
        <hr class="grow-1 border-4 rounded-r-full border-primary-orange" />
      </div>
    </div>
    <div class="w-1/2 flex justify-end">
      <img src="../images/home_img_4.png" alt="img" class="h-full" />
    </div>
  </section>

  <section class="flex flex-row section_container">
    <div class="box_2 flex items-center w-full justify-center">
      <span class="text-6xl text-white font-bold italic"
        >MAKE YOUR MEMORIES</span
      >
    </div>
  </section>
  <section class="flex flex-row section_container">
    <div
      class="box_3 flex bg-red-300 w-full flex-col items-center justify-center space-y-5"
    >
      <img src="../images/logo_img_3.png" class="scale-90" alt="logo" />

      <span class="text-3xl font-bold"
        >A stay with us will enrich your life for sure!</span
      >
      <p class="w-1/3 text-center text-xl font-light tracking-widest">
        No matter what you choose, you will keep coming back after your first
        stay. We know that you belong in this atmosphere. So we built this for
        you.
      </p>
      <span class="text-2xl font-semibold text-primary-yellow italic"
        >“We make no apologies for setting high standards.”</span
      >

      <div class="flex w-1/2 items-center justify-center p-2">
        <hr class="grow-1 border-5 rounded-l-full border-primary-yellow" />
        <button
          class="py-5 bg-primary-yellow px-6 text-2xl rounded-full text-white mt-4"
        >
          LEARN MORE
        </button>
        <hr class="grow-1 border-5 rounded-r-full border-primary-yellow" />
      </div>
    </div>
  </section>

  <section class="flex flex-row section_container">
    <div class="box_4 flex items-center w-full justify-center"></div>
  </section>

  <section class="flex flex-row max-h-[90vh] section_container mt-3">
    <div class="w-1/2 flex justify-end">
      <img src="../images/home_img_8.png" alt="img" class="h-full" />
    </div>
    <div class="w-1/2 flex flex-col items-center justify-center space-y-6 px-6">
      <img src="../images/logo_img_3.png" class="scale-60" alt="logo" />

      <span class="text-4xl font-bold tracking-wide"
        >You Can See the Real World!</span
      >
      <p class="text-2xl font-light tracking-wider text-center">
        Taking a road trip allows you to see actual communities and natural
        wonders, not just a view from 36,000 feet. Find out what it's really
        like to live in Egypt.
      </p>
      <span class="text-primary-green text-2xl text-center font-bold italic"
        >"The only impossible journey is the one you never begin"</span
      >

      <div class="flex flex-row w-full items-center justify-center mt-4">
        <hr class="grow-1 border-4 rounded-l-full border-primary-green" />
        <button
          class="py-5 px-10 bg-primary-green text-white text-2xl tracking-widest rounded-full"
        >
          Learn More
        </button>
        <hr class="grow-1 border-4 rounded-r-full border-primary-green" />
      </div>
    </div>
  </section>

  <section class="flex flex-row section_container mb-3">
    <div class="box_5 flex items-center w-full justify-center flex-col gap-24">
      <span class="text-5xl text-white font-bold">ENJOY OUR TRIP TO EGYPT!</span>
      <img src="../images/logo_img_2.png" alt="logo">
    </div>
  </section>

</template>

<style scoped>
.box {
  background-image: url(../images/home_img_1.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.box_2 {
  background-image: url(../images/home_img_5.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 70vh;
}
.box_3 {
  background-image: url(../images/home_img_6.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 70vh;
}
.box_4 {
  background-image: url(../images/home_img_7.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 70vh;
}
.box_5 {
  background-image: 
  linear-gradient(to bottom right, rgba(0,0,0,0.2), rgba(0,0,0,0.4)),
  url("../images/home_img_9.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 70vh;
}
</style>
