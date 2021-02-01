<template>
<div class="sidebar">
<transition name="slide">
    <div v-if="isPanelOpen"
          class="sidebar-panel">
        <slot></slot>
    </div>
</transition>
</div>
</template>
<script>
  import { store, mutations } from '@/store.js';
    export default {
       name: 'Sidebar',
        methods: {
            closeSidebarPanel: mutations.toggleNav
        },
        computed: {
            isPanelOpen() {
                return store.isNavOpen
            }
        }
    }
</script>
<style>
.slide-enter-active,
.slide-leave-active
{
transition: transform 0.2s ease;
}
.slide-enter,
.slide-leave-to {
    transform: translateX(-100%);
    transition: all 150ms ease-in 0s
}
.sidebar-panel {
    overflow-y: auto;
    background-color: #3B181E;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 500;
    padding: 3rem 20px 2rem 20px;
}
</style>
