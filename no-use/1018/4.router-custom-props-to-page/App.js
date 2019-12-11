import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"

// 不同頁面
import Home from './pages/Home'
import News from './pages/News'
import Contact from './pages/Contact'

// 導覽列
import MyNavBar from './components/MyNavBar'

const App = () => {
  const userStatus = "登出"

  return (
    <Router>
       <>
       {/* 導覽列: 選單 語法是固定的(contact的方法效能比news的好) component對空的()=>,render對(props) =>,這兩種方法是資料放App裡面 */}
        <MyNavBar/>

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" 
             component={() => <News userStatus={userStatus}/>} //把這變函式 函式<=>元件
             />
            <Route path="/contact" 
             render={(props) =><Contact {...props} userStatus={userStatus}/>} //userStatus分別是方法和狀態 render效能較好
            />
        </Switch>
       </>
    </Router>
  )
}

export default App