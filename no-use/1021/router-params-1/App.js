import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"

// 不同頁面
import Home from './pages/Home'
import Student from './pages/Student'

const App = () => {
  return (
    <Router>
       <>
       {/* 導覽列: 選單 */}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/student">Student</Link></li>
        </ul>

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/student/:id?" component={Student} />
        </Switch>
       </>
    </Router>
  )
}

export default App