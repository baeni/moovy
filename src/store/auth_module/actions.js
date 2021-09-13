import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

export function signInGoogle(context) {
  const provider = new GoogleAuthProvider();

  signInWithPopup(getAuth(), provider)
    .then(() => {
      context.commit('setUser');
      this.dispatch('DbModule/subscribeUsersWatchlist');
      this.dispatch('DbModule/subscribeUsersFavorites');
      this.$router.back();
    }).catch(err => Promise.reject(err));
}

export function signInGithub(context) {
  const provider = new GithubAuthProvider();

  signInWithPopup(getAuth(), provider)
    .then(() => {
      context.commit('setUser');
      this.dispatch('DbModule/subscribeUsersWatchlist');
      this.dispatch('DbModule/subscribeUsersFavorites');
      this.$router.back();
    }).catch(err => Promise.reject(err));
}

export function signOutUser(context) {
  signOut(getAuth())
    .then(() => {
      context.commit('setUser');
      this.commit('DbModule/setUsersWatchlist', []);
      this.commit('DbModule/setUsersFavorites', []);
      this.$router.push('/');
    }).catch(err => Promise.reject(err));
}
