import React from 'react'

class CounterApp extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
      loading: false,
    }
  }

  // 元件 "已經 Did" 呈現在網頁上 async await把異步地方改成同步語句
  async componentDidMount() {
    try {
      await this.setState({ loading: true }) // 異步了 所以就等, setState後執行render 第2次進render

      const response = await fetch('http://localhost:5555/counter/1', {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      // console.log(response)
      if (!response.ok) throw new Error(response.statusText) // 不OK丟錯誤出來

      const jsonObject = await response.json() //沒錯誤就解掉 fetch提供的方法 結果拿到物件
      // console.log(jsonObject)
      await this.setState({ total: jsonObject.total }) // 第3次進render
    } catch (e) {
      console.log(e)
    } finally {
      await setTimeout(() => this.setState({ loading: false }), 3 * 1000) // 第4次進render
    }
  }

  // 元件 "即將 Will" 卸載出網頁
  componentWillUnmount() {}

  handleClick = value => async () => {
    try {
      const data = { total: this.state.total + value }

      const response = await fetch('http://localhost:5555/counter/1', {
        method: 'PUT',
        body: JSON.stringify(data), // 有身體(資料)才能用put修改
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      const jsonObject = await response.json()

      console.log(jsonObject)

      await this.setState(data)
    } catch (e) {
      console.log(e)
    } finally {
    }
  }

  render() {
    console.log(1)
    return (
      <>
        {this.state.loading ? (
          <div className="fa-2x">
            <i className="fas fa-spinner fa-spin" /> {/*fontawesome載入動畫*/}
            資料載入中
          </div>
        ) : (
          <>
            <h1>{this.state.total}</h1>
            <button onClick={this.handleClick(1)}>+1</button>
            <button onClick={this.handleClick(-1)}>-1</button>
          </>
        )}
      </>
    )
  }
}

export default CounterApp
