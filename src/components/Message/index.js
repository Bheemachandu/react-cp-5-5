import './index.css'

const message = props => {
  const {isLogin} = props
  const text = isLogin ? 'Welcome User' : 'Please Login'
  return <h1>{text}</h1>
}

export default message
