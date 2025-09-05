<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const activeIndex = ref("1");
const activeIndex2 = ref("1");
</script>

<template>
  <section class="flex flex-col absolute top-0 left-0 right-0 z-50">
    <div class="flex justify-between py-4 px-4 shadow-sm items-center bg-white">
      <div class="flex space-x-5">
        <Icon
          icon="simple-icons:facebook"
          width="18"
          height="18"
          style="color: #999999"
        />
        <Icon
          icon="simple-icons:twitter"
          width="18"
          height="18"
          style="color: #999999"
        />
        <Icon
          icon="simple-icons:instagram"
          width="18"
          height="18"
          style="color: #999999"
        />
      </div>
      <div class="flex space-x-5">
        <div class="flex items-center space-x-1">
          <Icon
            icon="material-symbols:info"
            width="18"
            height="18"
            style="color: #999999"
          />
          <span class="text-sm text-[#555555] font-semibold"
            >LET US KNOW WHAT YOU NEED</span
          >
        </div>
        <div class="flex items-center space-x-1">
          <Icon
            icon="material-symbols:mail-outline-rounded"
            width="18"
            height="18"
            style="color: #999999"
          />
          <span class="text-sm text-[#555555] font-semibold"
            >RCORPCAPITAL@GMAIL.COM</span
          >
        </div>
        <div class="flex items-center space-x-1">
          <Icon
            icon="material-symbols:call-outline"
            width="18"
            height="18"
            style="color: #999999"
          />
          <span class="text-sm text-[#555555] font-semibold"
            >+421910807809</span
          >
        </div>
      </div>
    </div>
    <div
      class="py-4 px-4 flex flex-row justify-between items-center text-white"
      :class="route.name === 'HomePage' || route.name ===  'AdventureHome' || route.name === 'HawksApartments' ? 'bg-transparent' : 'bg-black'"
    >
      <span class="text-5xl font-light tracking-widest"
        >HURGHADA HAWKS HOLIDAY</span
      >
      <div class="flex flex-row space-x-6 text-sm tracking-widest font-medium items-center">
        <router-link :to="{ name: 'HomePage' }">HOME</router-link>

        <el-dropdown
          placement="bottom-end"
          class="no-hover-border cursor-pointer"
        >
          <span class="text-white">HURGHADA ADVENTURES</span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <router-link :to="{ name: 'AdventureHome' }"
                  >ADVENTURE HOME</router-link
                >
              </el-dropdown-item>
              <el-dropdown-item
                > 
                <router-link :to="{ name: 'DolphinPage' }"
                  >DOLPHIN</router-link
                >
              </el-dropdown-item>
              <el-dropdown-item><router-link :to="{ name: 'SuperSafariPage' }"
                  >SUPER SAFARI</router-link
                ></el-dropdown-item>
              <el-dropdown-item><router-link :to="{ name: 'PrivateTourPage' }"
                  >PRIVATE TOUR</router-link
                ></el-dropdown-item>
              <el-dropdown-item><router-link :to="{ name: 'RedSeaDivingPage' }"
                  >RED SEA DIVING</router-link
                ></el-dropdown-item>
              <el-dropdown-item><router-link :to="{ name: 'OrangeBayPage' }"
                  >ORANGE</router-link
                ></el-dropdown-item>
              <el-dropdown-item><router-link :to="{ name: 'ParadisePage' }"
                  >PARADISE</router-link
                ></el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-dropdown
          placement="bottom-end"
          class="no-hover-border cursor-pointer"
        >
          <span class="text-white">APARTMENTS</span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item><router-link :to="{ name: 'HawksApartments' }"
                  >HAWKS APARTMENTS</router-link
                ></el-dropdown-item>
              <el-dropdown-item><router-link :to="{ name: 'AldauHeights' }"
                  >ALDAU HEIGHTS</router-link
                ></el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <span>HOLIDAY ON WHEELS</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.no-hover-border:hover {
  border: none !important; /* removes border */
  outline: none !important; /* removes outline if any */
  box-shadow: none !important; /* removes focus shadow */
  border: red solid 1px;
}
</style>
