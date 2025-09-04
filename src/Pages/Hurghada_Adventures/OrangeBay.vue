<script lang="ts" setup></script>

<template>
  <body
    class="py-40 flex flex-col section_body gap-5 items-center justify-center"
  >
    <section class="flex gap-3 flex-col items-center">
      <span class="text-6xl font-semibold text-primary-yellow my-8"
        >ORANGE BAY</span
      >
      <img src="../../images/orange_img_1.png" alt="" />
    </section>

    <section class="flex flex-col items-center">
      <div class="grid grid-cols-3 gap-3">
        <img src="../../images/orange_img_2.png" alt="image" />
        <img src="../../images/orange_img_3.png" alt="image" />
        <img src="../../images/orange_img_4.png" alt="image" />
      </div>

      <div class="flex items-center justify-center">
        <span
          class="text-2xl inline-flex w-3/4 text-center font-light tracking-widest my-12"
        >
          Journey to the mystical Orange Bay, a secluded haven where adventures
          unfurl. Traverse the azure waters on a day-long voyage, indulging in
          the art of snorkeling and savoring a feast beneath the sun's gentle
          caress.
        </span>
      </div>

      <div class="grid grid-cols-2 w-2/3 mt-5 gap-7">
        <div
          class="bg-gray-100 py-8 px-12 tracking-widest rounded-lg shadow-md text-center"
        >
          <span>
            Small Giftun island is a very popular excursion because of its
            proximity to Hurghada and its pristine beaches. Small Giftun is
            perfectly suitable for snorkeling and lazy sunbathing.itis decorated
            with attractively shaped hard and soft coral. It feels as if you are
            visiting an underwater jungle. Here you can expect to see a delicate
            variety of smaller and bigger fish such as the Napoleon wrasse. When
            you're lucky you might even spot a turtle taking a detour.</span
          >
        </div>
        <div class="py-8 px-12 rounded-lg shadow-md bg-gray-100">
          <h1 class="text-primary-orange text-xl font-medium">HIGHLIGHTS</h1>
          <ul
            class="space-y-3 mt-4 text-md tracking-wider font-light list-disc"
          >
            <li>
              Stop to snorkel at 2 tabulous coral reers around the Red Sea
              islands
            </li>
            <li>Explore the fantastic underwater world of Paradise Island</li>
            <li>Relax on the beach or enjoy swimming and snorkeling</li>
            <li>Have some lunch and soft drinks on board</li>
            <li>Enjoy 2 hours at the islands</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mt-12 flex items-center flex-col">
      <span
        class="text-4xl font-medium text-center tracking-wider items-center justify-center w-4/5 text-primary-yellow flex"
        >Take advantage of the marvelous warm weather in Hurghada with a
        full-day out on the Red Sea.</span
      >

      <img src="../../images/orange_img_5.png" alt="image" class="mt-12" />

      <div class="flex flex-col justify-center w-3/4 mt-22 gap-30 md:flex-row">
        <div
          class="py-8 px-12 rounded-lg shadow-md w-md shadow-green-300 bg-gray-100"
        >
          <h1 class="text-primary-orange text-xl font-medium">INCLUDED</h1>
          <ul class="space-y-10 mt-4 text-xl tracking-wider list-disc">
            <li>Hotel Pick up & Drop off by an Air Conditioned Vehicle</li>
            <li>2 guided snorketing stops with equipment at Coral Reets</li>
            <li>2 hours on Paradise Island National Park entrance fees</li>
            <li>
              Lunch Open buffet lunch on boat & Bottled water & Soda/Pop &
              Coffee and/or Tea
            </li>
            <li>Water Activities</li>
            <li>
              Use of Snorkeling equipment & Snorkeling guide & Life Jacket
            </li>
          </ul>
        </div>
        <div
          class="py-8 px-12 rounded-lg shadow-md w-md shadow-red-300 bg-gray-100"
        >
          <h1 class="text-primary-orange text-xl font-medium">NOT INCLIDED</h1>

          <ul class="space-y-10 mt-4 text-xl tracking-wider list-disc">
            <li>National Park Admission Fees 5€ per person</li>
            <li>
              Transportation from Makadi, Ahyaa Sahl Hasheesh, extra charges 5€
              per person
            </li>
            <li>
              Transportation from Sorna Bay, El Gouna & Safaga, extra charges
              10€ per person
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- <section class="section_body mt-5 flex flex-col space-y-6 justify-center items-center">
      <span class="text-2xl text-primary-orange">Select Your Preferencies</span>

      <div class="bg-gray-200 p-5 w-[750px]">
        <el-form
          ref="ruleFormRef"
          style="max-width: 700px"
          :model="ruleForm"
          label-width="auto"
        >
          <el-form-item label="Activity name" prop="name">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="Activity name" prop="name">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="Activity name" prop="name">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="Activity name" prop="name">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="Activity name" prop="name">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="Activity zone" prop="region">
            <el-select v-model="ruleForm.region" placeholder="Activity zone">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </section> -->

    <section class="mt-24 p-8 bg-gray-100 w-full rounded-2xl flex flex-col">
      <span class="text-3xl font-semibold text-primary-orange"
        >KNOW BEFORE YOU GO</span
      >
      <ul class="mt-4 list-disc space-y-5 text-xl font-light tracking-wider">
        <li>
          If the child is a good swimmer they can go snorkeling but must be
          accompanied by an adult at all times.
        </li>
        <li>
          Please share your correct contact information, hotel name and room
          number. The pick up point will be at the main entrance of the hotel
          (the one by the road), not at the reception gate or area.
        </li>
        <li>
          The transfer fee from Makadi Bay, Safaga, Soma Bay, El Gouna, or Sahl
          Hasheesh should be selected from the checkout cart for each
          participant.
        </li>
        <li>Photo Shooting session available on request at extra charge.</li>
        <li>
          Due to weather conditions during the winter season, the tour can be 1
          to 2 hours shorter.
        </li>
      </ul>
    </section>
  </body>
</template>
