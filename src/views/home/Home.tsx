import React, {useEffect, useState, useRef} from 'react'
import BetterScroll from '@better-scroll/core'
import PullUp from '@better-scroll/pull-up'
// import {testPromise} from '@utils/tools'
import './Home.less'

BetterScroll.use(PullUp)

function Home(): JSX.Element {
  const [count, setCount] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  const bf = useRef<BetterScroll<PullUp>>()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if(contentRef.current) {
      bf.current = new BetterScroll(contentRef.current, {pullUpLoad: true})
      bf.current.on('pullingUp', handleUpHandler)
    }
  })

  const handleUpHandler = async () => {
    console.log('333333333')
    await getData()
    bf.current?.finishPullUp()
    bf.current?.refresh()
  }

  const getData = () => {
    setTimeout(() => {
      const arandom = Array.from({length: 13}, () => parseInt(String(Math.random() * 100)))
      setCount([...count, ...arandom])
    }, 100)
  }
  return (
    <div className="home">
      <div className="pullup">
        <div ref={contentRef} className="pullup-wrapper">
          <div className="pullup-content">
            <ul className="pullup-list">
              {count.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
            <div className="pullup-tips">
              {/* <div className="before-trigger">
                <span className="pullup-txt">Pull up and load more</span>
              </div> */}
              <div className="after-trigger">
                <span className="pullup-txt">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home
