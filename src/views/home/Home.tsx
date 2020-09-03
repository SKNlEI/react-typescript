/** @format */
import React, {useEffect, useState} from 'react'
import {Button} from 'antd'
import {testPromise} from '@utils/tools'
import './Home.less'

function Home(): JSX.Element {
  const [count, setCount] = useState(0)

  useEffect(() => {
    testPromise().then(res => {
      console.log(res)
    })
  }, [])

  const changeCount = () => {
    setCount(v => v + 1)
  }

  return (
    <div className="home">
      <h1>这个是home组件</h1>
      <h3>{count}</h3>
      <Button type="primary" onClick={changeCount}>
        添加
      </Button>
    </div>
  )
}

export default Home
