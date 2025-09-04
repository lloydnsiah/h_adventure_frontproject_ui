<script lang="ts" setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <body
    class="py-40 flex flex-col section_body gap-5 items-center justify-center"
  >
    <section class="flex gap-3 flex-col items-center">
      <span class="text-6xl font-semibold text-primary-yellow my-8"
        >ALDAU HEIGHTS</span
      >
      <img src="../../images/heights_img_1.png" alt="" />
    </section>

    <section class="flex flex-col items-center">
      <div class="grid grid-cols-3 gap-3">
        <img src="../../images/heights_img_2.png" alt="image" />
        <img src="../../images/heights_img_3.png" alt="image" />
        <img src="../../images/heights_img_4.png" alt="image" />
      </div>

      <div class="flex items-center justify-center">
        <span
          class="text-2xl inline-flex w-3/4 text-center font-light tracking-widest my-12"
        >
          Enjoy a stylish experience at this centrally located place close to
          all coffee shops and restaurants and within walking distance of the
          dream beach, in the most luxurious complex AlDau Heights!
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

    <section class="flex gap-3 flex-col items-center space-y-5">
      <img src="../../images/heights_img_5.png" alt="" />

      <div class="grid grid-cols-3 mt-5 gap-7 w-full">
        <div
          class="bg-gray-100 py-8 tracking-widest rounded-lg shadow-md text-center"
        >
          <div class="flex items-center">
            <hr class="grow-1 border-primary-yellow border-3" />
            <span class="text-2xl px-2 font-bold text-primary-yellow"
              >WHAT THE PLACE OFFERS</span
            >
            <hr class="grow-1 border-primary-yellow border-3" />
          </div>

          <div class="flex px-12 mt-6">
            <ul class="flex flex-col gap-4">
              <li class="flex gap-3 items-center">
                <Icon
                  icon="tabler:wifi"
                  width="24"
                  height="24"
                  style="color: #717171"
                />
                <span class="text-xl font-medium">Wi -Fi</span>
              </li>
              <li class="flex gap-3 items-center">
                <Icon
                  icon="fluent:vehicle-car-parking-20-regular"
                  width="20"
                  height="20"
                  style="color: #717171"
                />
                <span class="text-xl font-medium"
                  >Free parking on premises</span
                >
              </li>
              <li class="flex gap-3 items-center">
                <Icon
                  icon="tabler:device-tv-old"
                  width="24"
                  height="24"
                  style="color: #717171"
                />
                <span class="text-xl font-medium">TV</span>
              </li>
              <li class="flex gap-3 items-center">
                <Icon
                  icon="fluent:washer-24-regular"
                  width="24"
                  height="24"
                  style="color: #717171"
                />
                <span class="text-xl font-medium">Washer</span>
              </li>
              <li class="flex gap-3 items-center">
                <Icon
                  icon="fa7-solid:kitchen-set"
                  width="24"
                  height="24"
                  style="color: #717171"
                />
                <span class="text-xl font-medium">Kitchen</span>
              </li>
              <li class="flex gap-3 items-center">
                <Icon
                  icon="fluent:swimming-pool-48-regular"
                  width="24"
                  height="24"
                  style="color: #717171"
                />
                <span class="text-xl font-medium">Pool view</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="py-8 px-12 rounded-lg shadow-md bg-gray-100 col-span-2">
          <div class="flex items-center">
            <hr class="w-16 border-primary-yellow border-3" />
            <span class="text-2xl px-2 font-bold text-primary-yellow"
              >ABOUT THIS SPACE</span
            >
            <hr class="grow-1 border-primary-yellow border-3" />
          </div>
          <ul class="space-y-16 mt-4 text-xl tracking-wider">
            <li>
              Amazing privacy with a sunny terrace with beautiful pergola
              including nice wind so you can enjoy your stay with sunset view.
              All the apartments are fully furnished with all appliances.
            </li>
            <li>
              2 large swimming pools/infinity pool and a childern's swimming
              pool, surrounded by landscape gardens with sunbeds, parasols and
              shawers. Multiple elevators to all floors and 24hr Secutity
              (gated).
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="flex gap-3 flex-col items-center space-y-5">
      <img src="../../images/heights_img_6.png" alt="" />

      <div class="grid grid-cols-3 mt-5 gap-7 w-full">
        <div
          class="bg-gray-100 py-8 tracking-widest rounded-lg shadow-md text-center"
        >
          <div class="flex items-center">
            <hr class="grow-1 border-primary-yellow border-3" />
            <span class="text-2xl px-2 font-bold text-primary-yellow"
              >WHAT THE PLACE OFFERS</span
            >
            <hr class="grow-1 border-primary-yellow border-3" />
          </div>

          <div class="flex px-12 mt-6">
            <ul class="flex flex-col gap-4">
              <li class="flex gap-3 items-center">
                <Icon
                  icon="tabler:wifi"
                  width="24"
                  height="24"
                  style="color: #717171"
                />
                <span class="text-xl font-medium">Wi -Fi</span>
              </li>
              <li class="flex gap-3 items-center">
                <Icon
                  icon="fluent:vehicle-car-parking-20-regular"
                  width="20"
                  height="20"
                  style="color: #717171"
                />
                <span class="text-xl font-medium"
                  >Free parking on premises</span
                >
              </li>
              <li class="flex gap-3 items-center">
                <Icon
                  icon="tabler:device-tv-old"
                  width="24"
                  height="24"
                  style="color: #717171"
                />
                <span class="text-xl font-medium">TV</span>
              </li>
              <li class="flex gap-3 items-center">
                <Icon
                  icon="fluent:washer-24-regular"
                  width="24"
                  height="24"
                  style="color: #717171"
                />
                <span class="text-xl font-medium">Washer</span>
              </li>
              <li class="flex gap-3 items-center">
                <Icon
                  icon="fa7-solid:kitchen-set"
                  width="24"
                  height="24"
                  style="color: #717171"
                />
                <span class="text-xl font-medium">Kitchen</span>
              </li>
              <li class="flex gap-3 items-center">
                <Icon
                  icon="fluent:swimming-pool-48-regular"
                  width="24"
                  height="24"
                  style="color: #717171"
                />
                <span class="text-xl font-medium">Pool view</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="py-8 px-12 rounded-lg shadow-md bg-gray-100 col-span-2">
          <div class="flex items-center">
            <hr class="w-16 border-primary-yellow border-3" />
            <span class="text-2xl px-2 font-bold text-primary-yellow"
              >ABOUT THIS SPACE</span
            >
            <hr class="grow-1 border-primary-yellow border-3" />
          </div>
          <ul class="space-y-16 mt-4 text-xl tracking-wider">
            <li>
              Amazing privacy with a sunny terrace with beautiful pergola
              including nice wind so you can enjoy your stay with sunset view.
              All the apartments are fully furnished with all appliances.
            </li>
            <li>
              2 large swimming pools/infinity pool and a childern's swimming
              pool, surrounded by landscape gardens with sunbeds, parasols and
              shawers. Multiple elevators to all floors and 24hr Secutity
              (gated).
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="w-full mt-6">
      <div class="w-full flex flex-col items-center space-y-10 text-2xl font-light text-center tracking-widest py-4">
        <span class="text-4xl font-semibold">*1 READ more</span>
        <p>
          Aldau Heights is a new residential project that combines luxury,
          comfort, and convenience in the heart of Hurghada, Egypt. It is
          located at the beginning of the touristic promenade, just ten minutes
          from Hurghada Airport and near the Marina, offering stunning views of
          the sea and the city.
        </p>
        <p>
          All units are finished with high-quality German standards and
          attention to detail and have exceptional views of the sea, the pool,
          or the promenade.The project is connected to Aldau Village Mall, a
          shopping and entertainment center with boutique shops, cafes,
          restaurants, a pharmacy, a supermarket, and children’s areas.
          Residents can also enjoy access to the nearby Steigenberger Aldau
          Beach Hotel and its facilities.
        </p>

        <div class="flex gap-8 w-2/3 mt-4">
          <span class="w-1/4 font-semibold">*3 highlights</span>
          <ul class="flex flex-col text-left space-y-8">
            <li>
              <span class="font-semibold">Amenities for everyday living:</span> <br> This place is equipped for long
              stays, washer, free parking, wifi and A/C included.
            </li>
            <li><span class="font-semibold">Self check-in:</span> <br>Check yourself in with the key safe</li>
            <li><span class="font-semibold">Dive right in:</span> <br>This is one of the few places in the area with a pool</li>
          </ul>
        </div>
        
      </div>
    </section>
  </body>
</template>
