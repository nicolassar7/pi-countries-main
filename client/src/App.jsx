import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Landing from './view/Landing/landing'
import Home from './view/Home/home'
import Detail from './view/Detail/detail'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path= '/home' element={<Home />} />
        <Route path='detail/:cca3' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
