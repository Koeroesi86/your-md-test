import { routerMiddleware } from 'react-router-redux'
import history from './history'
import app from '../components/app/middleware'
import conditions from '../components/conditions/middleware'

const router = routerMiddleware(history);

export default [
  app,
  router,
  conditions
]
