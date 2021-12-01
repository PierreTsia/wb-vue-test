<template>
  <div class="repository">
    <div class="repository__infos">
      <!--      // avatar-->
      <img src="" alt="" />
      <div class="repository__infos__name">
        <a :href="repository.html_url" target="_blank">
          <h1>{{ repository.name }}</h1>
          <span>{{ repository.created_at }} </span>
        </a>
      </div>
    </div>
    <div class="repository__branches">
      <h1>Branches</h1>
      <ul></ul>
    </div>

    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GithubRepoCard",
  props: {
    repository: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.repository
  .repository__user-profile
    display flex
    .repository__user-profile__userName
      display flex
      flex-direction column
      min-width 100vw
      justify-items center
      align-items center
      h1
        font-size 2em
        font-weight bold
        width full
</style>
