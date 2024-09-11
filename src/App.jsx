import React from "react"
import Nav from "./Nav"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./Home"
import News from "./News"
import Contact from "./Contact"
import Blog from "./Blog"
import Shop from "./Shop"
import Bill from "./Bill"
import OrderDone from "./OrderDone"

function App() {
 
  return (
    <>
      <BrowserRouter>
           
          <Nav></Nav>
           
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/news" element={<News/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/billing" element={<Bill></Bill>}></Route>
          <Route path="/order" element={<OrderDone></OrderDone>}></Route>
        </Routes>

       
      </BrowserRouter>

    </>
  )
}

export default App
