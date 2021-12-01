<template>
  <div class="home">
    <div>Search: <input v-model="githubUserName" type="text" /></div>
    <button type="button" @click="fetchUserData">Search</button>
    <GithubUserDashboard v-if="user" :user="user">
      <div v-if="userRepos.length">
        <GithubRepoCard
          v-for="(repo, i) in userRepos"
          :key="i"
          :repository="repo"
        />
      </div>
    </GithubUserDashboard>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import GithubUserDashboard from "@/components/GithubUserDashboard.vue";
import GithubRepoCard from "@/components/GithubRepoCard.vue";
import { useGithubApi } from "@/composables/githubApi";

export default defineComponent({
  name: "Home",
  components: {
    GithubUserDashboard,
    GithubRepoCard,
  },
  setup() {
    const { getRepos, getUser, user, userRepos } = useGithubApi();
    const githubUserName = ref("");
    const fetchUserData = async () => {
      try {
        const data = await fetchGithubUserData(githubUserName.value);
        if (data) {
          const [ghUser, ghRepos] = data;
          user.value = ghUser;
          userRepos.value = ghRepos;
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchGithubUserData = async (userName: string) => {
      if (!userName.length) return;

      return Promise.all([getUser(userName), getRepos(userName)]);
    };

    return {
      githubUserName,
      fetchUserData,
      user,
      userRepos,
    };
  },
});
</script>
