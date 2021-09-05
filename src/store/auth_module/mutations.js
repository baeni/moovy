import {getAuth} from 'firebase/auth';

export function setUser(state) {
  state.user = getAuth().currentUser;
}
