import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { OrderSummary } from './components/OrderSummary'
import { NewProducts } from './components/NewProducts'
import { FeaturedProducts } from './components/FeaturedProducts'
import { Products } from './components/Products'
import { NoMatch } from './components/NoMatch'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
