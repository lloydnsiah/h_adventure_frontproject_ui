<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <section id="hero_section mt-6 ">
    <div class="h-[80vh] box flex items-center justify-end pr-22"></div>
  </section>

  <section class="flex flex-row max-h-[90vh] my-12 section_container">
    <div class="w-1/2">
      <img
        src="../../images/hawks_apartments_img_2.png"
        alt="img"
        class="h-full"
      />
    </div>
    <div
      class="w-1/2 flex flex-col items-center justify-center space-y-12 px-6"
    >
      <span class="text-4xl text-primary-yellow font-bold text-center">
        ALDAU HEIGHTS <br />HURGHADA, EGYPT <br />SELF-CATERING APARTMENTS &
        STUDIOS
      </span>

      <span class="text-3xl font-light">
        Hurghada is the destination where stunning coral reefs and turquoise
        waters are all around providing an atmosphere of freshness and life.
      </span>

      <span class="text-3xl font-semibold"> from 40 EUR per NIGHT </span>
      <button
        class="bg-primary-yellow text-white py-6 text-2xl rounded-4xl px-12 hover:-translate-y-2 transition-transform duration-300"
      >
        BOOK NOW
      </button>
    </div>
  </section>
  <section class="flex flex-row max-h-[90vh] my-12 section_container">
    <div
      class="w-1/2 flex flex-col items-center justify-center space-y-12 px-6"
    >
      <span class="text-4xl text-primary-yellow font-bold text-center">
        REGENCY TOWERS <br>HURGHADA EGYPT <br>SELF-CATERING APARTMENTS & STUDIOS
      </span>

      <span class="text-3xl font-light">
        Hurghada is the destination where stunning coral reefs and turquoise waters are all around providing an atmosphere of freshness and life.
      </span>

      <span class="text-3xl font-semibold">
        from 40 EUR per NIGHT
      </span>

      <button
        class="bg-primary-yellow text-white py-6 text-2xl rounded-4xl px-12 hover:-translate-y-2 transition-transform duration-300"
      >
        BOOK NOW
      </button>
    </div>
    <div class="w-1/2 flex justify-end">
      <img
        src="../../images/hawks_apartments_img_3.png"
        alt="img"
        class="h-full"
      />
    </div>
  </section>
</template>

<style scoped>
.box {
  background-image: url(../../images/hawks_apartments_img_1.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
