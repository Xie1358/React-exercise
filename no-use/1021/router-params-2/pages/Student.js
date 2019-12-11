import React from 'react'

const Student = (props) => {
    return (
        <>
            <h1>學生詳細資料</h1>
            {/* 用props.match.params物件得到網址參數 */}
            {props.match.params.id}
        </>
    )
}

export default Student