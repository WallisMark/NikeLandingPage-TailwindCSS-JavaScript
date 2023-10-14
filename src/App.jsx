 import{Hero,PopularProducts,SuperQuality,Services,SpecialOffer,CustomerReviews,Subscribe,Footer} from './sections'
import  NavBar  from './components/NavBar'
const App = () =>(
  <main className="relative ">
    <NavBar/>
    <section className="xl:padding-1 wide:padding-r padding-b">
    <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffer/>
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black py-16 w-screen">
      <Footer/>
    </section>
  </main>

)
export default App