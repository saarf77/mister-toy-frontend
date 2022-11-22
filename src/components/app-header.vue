<!-- <template>
  <header class="main-header flex items-center justify-between">
    <div class="logo uppercase">
      <h2 v-rainbow>Toys</h2>
    </div>
    <nav class="flex gap-1">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/toy">Toy</router-link>
      <router-link class="link" to="/about">About</router-link>
    </nav>
  </header>
</template> -->

<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#71717a"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
  <router-link class="link" to="/"> <el-menu-item index="1">Home</el-menu-item></router-link>
  <router-link class="link" to="/toy"> <el-menu-item index="2">Toy</el-menu-item></router-link>
  <router-link class="link" to="/about"> <el-menu-item index="3">About</el-menu-item></router-link>
  <router-link class="link" to="/dashboard"> <el-menu-item index="4">Dashboard</el-menu-item></router-link>

    <!-- <el-menu-item index="1"><router-link class="link" to="/">Home</router-link></el-menu-item>
    <el-menu-item index="2" ><router-link class="link" to="/toy">Toy</router-link></el-menu-item>
    <el-menu-item index="3"><router-link class="link" to="/about">About</router-link></el-menu-item>
    <el-menu-item index="4"><router-link class="link" to="/dashboard">Dashboard</router-link></el-menu-item> -->
  </el-menu>
</template>

<!-- <el-sub-menu index="4">
  <template #title>Workspace</template>
  <el-menu-item index="2-1">item one</el-menu-item>
  <el-menu-item index="2-2">item two</el-menu-item>
  <el-menu-item index="2-3">item three</el-menu-item>
  <el-sub-menu index="2-4">
    <template #title>item four</template>
    <el-menu-item index="2-4-1">item one</el-menu-item>
    <el-menu-item index="2-4-2">item two</el-menu-item>
    <el-menu-item index="2-4-3">item three</el-menu-item>
  </el-sub-menu>
</el-sub-menu> -->

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
