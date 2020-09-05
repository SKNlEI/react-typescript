import React, { useEffect, useState, useRef } from 'react'
import BetterScroll from '@better-scroll/core'
import PullUp from '@better-scroll/pull-up'
// import {testPromise} from '@utils/tools'
import './Home.less'

BetterScroll.use(PullUp)

function Home(): JSX.Element {
  const [count, setCount] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  const [isPullUpLoad, setIsPullUpLoad] = useState(false)
  const bf = useRef<BetterScroll<PullUp>>()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      console.log('0000000000')
      bf.current = new BetterScroll(contentRef.current, { pullUpLoad: true })
      bf.current.on('pullingUp', handleUpHandler)
    }
  })

  const handleUpHandler = async () => {
    console.log('333333333')
    setIsPullUpLoad(true)
    const { arandom } = await getData()
    setCount([...count, ...arandom])
    bf.current?.finishPullUp()
    bf.current?.refresh()
    setIsPullUpLoad(false)
  }

  const getData = (): Promise<{ arandom: number[] }> => {
    return new Promise(reslove => {
      setTimeout(() => {
        const arandom = Array.from({ length: 13 }, () => parseInt(String(Math.random() * 100)))
        reslove({ arandom })
      }, 1000)
    })
  }
  return (
    <div className="pullup">
      <div ref={contentRef} className="pullup-wrapper">
        <div className="pullup-content">
          <ul className="pullup-list">
            {count.map((v, i) => (
              <li key={i} className="pullup-list-item">
                {v}
              </li>
            ))}
          </ul>
          <div className="pullup-tips">
            {isPullUpLoad ? (
              <div className="after-trigger">
                <span className="pullup-txt">Loading...</span>
              </div>
            ) : (
              <div className="before-trigger">
                <span className="pullup-txt">Pull up and load more</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
