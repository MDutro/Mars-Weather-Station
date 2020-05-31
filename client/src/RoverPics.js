import React from 'react'
import randomPic from './randomPic'
import './RoverPics.css'

export class RoverPics extends React.Component {
  state =  {pic: null}

  //generate new pic and store in state on component render
  componentDidMount() {
    let pic = randomPic();
    this.setState({pic: pic})
  }

  render() {
    console.log(this.state)
    if (this.state.pic) {
      return (
        <div className="imgContainer">
          <img className="image" src={process.env.PUBLIC_URL + this.state.pic} alt="" />
        </div>
      )
    }
    return (
      <div>
        <p>Loading....</p>
      </div>
    )
  }
}
