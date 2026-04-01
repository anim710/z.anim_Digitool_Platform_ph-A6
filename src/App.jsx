import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NavBar from './Components/NavBar.jsx'
import Banner from './Components/Banner.jsx'
import Footer from './Components/Footer.jsx'
import Pricing from './Components/Pricing.jsx'
import Process from './Components/Process.jsx'
import Rating from './Components/Rating.jsx'
import Explore from './Components/Explore.jsx'
import Products from './Components/Products.jsx'
import Cart from "./Components/Cart.jsx"

const productPromise = fetch("/products.json").then((res) => res.json())

function App() {
  const [carts, setCarts] = useState([]);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
        <ToastContainer />
      <NavBar carts={carts}/>
      <Banner />
      <Rating />

      <Suspense fallback={<p className="text-center py-20">Loading...</p>}>
        {!showCart ? (
          <Products
            productPromise={productPromise}
            carts={carts}
            setCarts={setCarts}
            setShowCart={setShowCart}
          />
        ) : (
          <Cart carts={carts} setCarts={setCarts} setShowCart={setShowCart} />
        )}
      </Suspense>

      <Process />
      <Pricing />
      <Explore />
      <Footer />
    </>
  )
}

export default App