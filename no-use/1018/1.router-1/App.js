import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Home from './pages/Home'
import News from './pages/News'
import Contact from './pages/Contact'

const App = () => {
  return (
    <Router>
       <>
        <Link to="/">首頁</Link>
        <Link to="/news">新聞</Link>
        <Link to="/contact">聯絡</Link>

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