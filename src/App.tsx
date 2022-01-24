import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home/home'
import { NewRoom } from './pages/NewRoom/NewRoom'

import { AuthContextProvider } from './contexts/AuthContext'
import { Room } from './pages/Room/Room'
import { AdminRoom } from './pages/Admin/AdminRoom'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
