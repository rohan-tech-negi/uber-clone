import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import UserLogin from "./pages/UserLogin"
import UserSignup from "./pages/UserSignUp"
import Captainlogin from "./pages/CaptainLogin"
import CaptainSignup from "./pages/CaptainSignup"
import Start from './pages/Start'

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start></Start>}></Route>
        <Route path='/login' element={<UserLogin></UserLogin>}></Route>
        <Route path='/signup' element={<UserSignup></UserSignup>}></Route>
        <Route path='/captain-login' element={<Captainlogin></Captainlogin>}></Route>
        <Route path='/captain-signup' element={<CaptainSignup></CaptainSignup>}></Route>
         <Route path='/home' element={<Home></Home>}></Route>

      </Routes>
    </div>
  )
}

export default App