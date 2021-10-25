<template>
  <div>
    <button
      type="button"
      class="
        flex
        items-center
        justify-center
        gap-[4px]
        w-[52px]
        h-[28px]
        bg-warmGray-400
        rounded-[14px]
      "
      @click="toggleDarkMode"
    >
      <div class="flex w-[20px] h-[20px] bg-warmGray-50 rounded-full"></div>
      <div class="flex w-[20px] h-[20px] bg-warmGray-800 rounded-full"></div>
    </button>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const toggleDarkMode = () => {
      if (localStorage.theme === 'dark') {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      }
    };

    return {
      toggleDarkMode,
    };
  },
});
</script>
