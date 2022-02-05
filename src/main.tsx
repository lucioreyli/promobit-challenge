import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles } from './Styles/GlobalStyles'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { Prevent } from './Components/Prevent'
import { FilmDetails } from './Pages/FilmDetails'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/pages/:id' element={<Prevent refer='/'/>} />
        <Route path='/movie/:id' element={<FilmDetails/>} />
        <Route path='/*' element={<Navigate to="/pages/1"/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
