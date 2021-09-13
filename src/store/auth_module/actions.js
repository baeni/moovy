import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export function signUpUser(context, credentials) {
  const email = credentials.email;
  const password = credentials.password;

  createUserWithEmailAndPassword(getAuth(), email, password)
    .then(() => {
      context.commit('setUser');
      this.dispatch('DbModule/subscribeUsersWatchlist');
      this.dispatch('DbModule/subscribeUsersFavorites');
      this.$router.back();
    }).catch(err => Promise.reject(err));
}

export function signInUser(context, credentials) {
  const email = credentials.email;
  const password = credentials.password;

  signInWithEmailAndPassword(getAuth(), email, password)
    .then(() => {
      context.commit('setUser');
      this.dispatch('DbModule/subscribeUsersWatchlist');
      this.dispatch('DbModule/subscribeUsersFavorites');
      this.$router.back();
    }).catch(err => Promise.reject(err));
}

export function googleSignInUser(context) {
  const provider = new GoogleAuthProvider();

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
      this.$router.push('/');
    }).catch(err => Promise.reject(err));
}
