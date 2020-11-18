import { createStore } from 'redux'
import rootReducer from './RootReducer'

const Store = createStore(rootReducer)

Store.subscribe(() => {
  console.log('Store updated: ', Store.getState());
})

export default Store