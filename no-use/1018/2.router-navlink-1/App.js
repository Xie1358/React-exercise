import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"
import Home from './pages/Home'
import News from './pages/News'
import Contact from './pages/Contact'

const App = () => {
  return (
    <Router>
       <>
       {/* https://reacttraining.com/react-router/web/api/NavLink */}
       {/* exact 精確匹配路由路徑 */}
        <NavLink
            to="/"
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
            exact 
          >
          首頁
        </NavLink>
        <NavLink
          to="/news"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
          exact
        >
        新聞
        </NavLink>
        <NavLink
          to="/contact"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
          exact 
        >
        聯絡
        </NavLink>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/contact" component={Contact} />
        </Switch>
       </>
    </Router>
  )
}

export default App