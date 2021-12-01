<template>
  <div class="dashboard">
    <div class="dashboard__user-profile">
      <!--      // avatar-->
      <img :src="user.avatar_url" class="avatar" alt="avatar" width="150" />
      <div class="dashboard__user-profile__userName">
        <h1>{{ user.login }}</h1>
        <span>{{ creationDate }}</span>
      </div>
    </div>
    <div class="dashboard__userRepos">
      <h1>Repos</h1>
      <ul></ul>
    </div>

    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import format from "date-fns/format";

export default defineComponent({
  name: "GithubUserDashboard",
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  setup(props) {
    const creationDate = computed(() => {
      return format(new Date(props.user?.created_at), "MMM dd, yyyy");
    });

    return {
      format,
      creationDate,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.dashboard
  .avatar
    display block
    margin auto
  .dashboard__user-profile
    display flex
    align-items center
    .dashboard__user-profile__userName
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
