import './styles.css'
import Image from './React.png'
import Logo from './logo.svg'
import { Counter } from './counter'

export const App = () => {
  return (
    <>
      <h1>
        Edited React Template for webpack starter - {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <img src={Image} alt="React Logo" width="300" height="200" />
      <img src={Logo} alt="React Logo" width="300" />
      <Counter />
    </>
  )
}
