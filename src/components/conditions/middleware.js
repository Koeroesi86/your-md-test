import axios from 'axios'
import { INIT_APP } from '../app/actions'
import { receiveConditions } from "./actions";

export default store => next => action => {
  if (action.type === INIT_APP) {
    Promise.resolve()
      .then(() => new Promise(r => setTimeout(r, 500)))
      .then(() => axios.get('/api/conditions'))
      .then(res => Promise.resolve(res.data))
      .then(data => {
        if (data && data.conditions) {
          console.log(data.conditions);
          store.dispatch(receiveConditions(data.conditions));
        } else {
          return Promise.reject(new Error('Invalid data'));
        }
      })
      .catch(e => {
        console.warn('AJAX call failed or invalid.', e);
      });
  }

  next(action);
}
