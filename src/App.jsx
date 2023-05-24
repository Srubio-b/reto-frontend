import { products as initialProducts } from './mocks/products.json'
import { Products } from "./components/Products.jsx"
import { useState } from 'react'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { CartProvider } from './context/cart';


function useFilters () {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
    title: ''
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        ) 
        &&
        (
          filters.title === '' ||
          product.title.toLowerCase().includes(filters.title.toLowerCase())
        )
      )
    })
  }
  return { filters ,filterProducts, setFilters }
}


function App () {

  const [products] = useState(initialProducts)
  const { filters, filterProducts, setFilters } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
    <Header changeFilters={setFilters}/>
    <Cart />
    <Products products={filteredProducts} />
    <Footer filters={filters}/>
    </CartProvider>
  )
}

export default App
