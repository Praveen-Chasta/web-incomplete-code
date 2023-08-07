import {BrowserRouter, Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
    </Switch>
  </BrowserRouter>
)

export default App
