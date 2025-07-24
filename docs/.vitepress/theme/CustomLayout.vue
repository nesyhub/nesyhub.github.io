<template>
  <component :is="layoutComponent">
    <div v-if="isHome" class="VPHome">
      <div class="VPHomeHero">
        <slot />
        <VPFooter />
      </div>
    </div>
    <template v-else>
      <slot />
    </template>
  </component>
</template>

<script setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
const { page } = useData()
const isHome = page.value.relativePath === 'index.md'
const layoutComponent = DefaultTheme.Layout
const VPFooter = DefaultTheme.Footer
</script> 