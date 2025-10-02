import Header from '../components/Header/Header'
import Categories from '../components/categories/Categories'
import Products from '../components/products/Products'
import CartTotal from '../components/cart/CartTotal'

function HomePage() {
  return (
    <>
      <Header/>
     <div className="home px-6 flex flex-col md:flex-row justify-between gap-10 pb-24 md:pb-0 ">
      <div className="categories overflow-auto max-h-[calc(100vh-112px)] md:pb-24">
        <Categories/>
      </div>
      <div className="products flex-[8]">
        <Products/>
      </div>
      <div className=''>
        <div className='cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border'>
          <CartTotal/>
        </div>
      </div>
     </div>
    </>
  )
}

export default HomePage
