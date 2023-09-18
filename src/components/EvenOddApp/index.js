// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  countInc = () => {
    let countText
    const count = Math.ceil(Math.random() * 100)
    if (count % 2 === 0) {
      countText = 'Even'
    } else {
      countText = 'Odd'
    }
  }

  render() {
    const {count} = this.count
    const {countText} = this.countText
    return (
      <div className="bg-con">
        <div className="cg-con">
          <h1 className="head">Count {count}</h1>
          <p className="para">Count is {countText}</p>
          <button onClick={this.countInc} type="button">
            Increment
          </button>
          <p className="para">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
