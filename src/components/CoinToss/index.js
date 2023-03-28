import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    head: true,
    count:0,
    headcount:0,
    tailcount:0
  }

  tosstheCoin = () => {
      const decision = Math.floor(Math.random()*2)
      console.log(decision)
    const tossedwith= decision===0
    const addhead =(tossedwith)?1:0
    const addtail =(tossedwith)?0:1
    this.setState(prevState=>({head:tossedwith,count:prevState.count+1,headcount:prevState.headcount+addhead,tailcount:prevState.tailcount+addtail}))
  }

  render() {
    const {head,count,headcount,tailcount} = this.state
    const imageUrl = head
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="background-div">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="choice">Heads (or) Tails</p>
          <img className="img-size" src={imageUrl} alt="toss result" />
          <br />
          <button className="but" type="button" onClick={this.tosstheCoin}>
            Toss Coin
          </button>
          <div className="score">
            <p>Total:{count}</p>
            <p>Heads:{headcount}</p>
            <p>Tails:{tailcount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
