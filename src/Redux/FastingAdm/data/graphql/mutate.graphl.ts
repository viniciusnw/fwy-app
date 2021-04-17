import { Service } from 'typedi';
import { Store } from '@Redux/Store';
import { APP_NAME_TYPE } from '@Config/types';
import { GraphqlApi } from '@Config/graphql'

// import customerLogin from './docs/customerLogin.mutate.graphql'

@Service()
export class Mutate extends GraphqlApi {

  public login = (params) => {
    const { store } = Store[APP_NAME_TYPE.FASTING];

    console.log(params)
    // console.log(customerLogin)
    console.log(store.getState())
    console.log(this.ApolloClient)

    // this.ApolloClient.mutate({
    //   mutation: customerLogin,
    //   variables: params,
    // }).then(response => console.log(response)).catch(err => console.log(err))

    // return new Promise((res) => setTimeout(() => res({ name: 'teste' }), 1500))
  }
}