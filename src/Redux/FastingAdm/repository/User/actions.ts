import { Container} from 'typedi';
import { Mutate } from '@Redux/Fasting/data/graphql'

export default {
  login: params => {
    return {
      type: 'LOGIN',
      payload: () => Container.get(Mutate).login(params)
    };
  },

  logout: _ => {
    return {
      type: 'LOGOUT',
    };
  },
};
