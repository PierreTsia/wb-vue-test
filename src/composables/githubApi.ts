import { ref, Ref } from "vue";

type GithubApiComposition = {
  user: Ref<any>;
  userRepos: Ref<any[]>;
  getUser: (username: string) => Promise<any>;
  getRepos: (username: string) => Promise<any[]>;
};

export function useGithubApi(): GithubApiComposition {
  const user = ref<any | null>(null);
  const userRepos = ref<any[]>([]);

  return {
    user,
    userRepos,
    getUser: async (username: string) => {
      const response = await fetch(`https://api.github.com/users/${username}`);
      return await response.json();
    },
    getRepos: async (username: string) => {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      return await response.json();
    },
  };
}
