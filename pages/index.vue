<template>
  <div id="index">
    <img id="logo" src="@/assets/logo.svg" />
    <div class="links">
      <span class="link-wrapper">
        <NuxtLink to="/profile" class="link profile"> profile </NuxtLink>
      </span>
      <span class="link-wrapper">
        <NuxtLink to="/works" class="link works"> works </NuxtLink>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
#index {
  text-align: center;
}
#logo {
  width: 70%;
  max-width: 380px;
  margin-top: 12rem;
}
.links {
  margin-top: 2.5rem;
  .link-wrapper {
    display: inline-grid;
    margin: 0 2rem;
    cursor: pointer;
    &:after {
      content: '';
      height: 4px;
      background: $sky-gradient;
      width: 0;
      margin-left: auto;
    }
    &:hover:after {
      margin-left: 0;
    }
  }
  .link {
    color: $base-darkgray;
    font-size: 1.5rem;
    font-weight: normal;
    margin: 0 0.8rem 0.5rem 0.8rem;
  }
}

// animation
.link-wrapper:hover:after {
  animation: link_hover 0.2s ease-out 0s forwards;
}
.link-wrapper:after {
  animation: link_hover_off 0.2s ease-in 0s forwards;
}

@keyframes link_hover {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
@keyframes link_hover_off {
  0% {
    width: 100%;
  }
  100% {
    width: 0;
  }
}
</style>
