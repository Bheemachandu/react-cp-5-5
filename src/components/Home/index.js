import './index.css'
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import message from '../Message'

class Home extends Component {
  state = {isLogin: true}

  onClickButton = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state

    return (
      <div className="container1">
        <div>
          <message isLogin={isLogin} />
          {isLogin ? (
            <Login login={this.onClickButton} />
          ) : (
            <Logout logout={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
