import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../data/index'

const Home = () => {
    console.log(data)
    return (
        <>
        <h1>首頁 - 列表頁面</h1>
        <div className="list-group">
        {
            data.map((value)=> {
                return (
                    <Link 
                        key={value.id}
                        to={'/student/'+value.id} className="list-group-item list-group-item-action"
                    >
                    {value.name}
                    </Link>
                    )
            })
        }
        </div>
        </>
    )
}

export default Home