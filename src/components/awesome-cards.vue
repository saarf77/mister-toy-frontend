<template>
  <el-row>
    <el-col v-for="(o, index) in 5" :key="o" :span="10" :offset="2">
      <el-card :body-style="{ padding: '0px' }">
        <img
          src="https://toriavey.com/images/2011/01/TOA109_18.jpeg"
          class="image"
        />
        <div style="padding: 14px">
          <span>Yummy Falefel</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button text class="primary">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentDate = ref(new Date())
</script>

<style>
.el-card.is-always-shadow {
  box-shadow: none;
}
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
