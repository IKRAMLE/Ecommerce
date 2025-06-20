import Navbar from "../Components/HomePage/Navbar"
import HeroSection from "../Components/HomePage/HeroSection"
import Categories from "../Components/HomePage/Categories"
import Products from "../Components/HomePage/Products"
import Promotions from "../Components/HomePage/Promotions"
import WhyUs from "../Components/HomePage/WhyUs"
import Testimonials from "../Components/HomePage/Testimonials"

function HomePage() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Categories />
    <Products />
    <Promotions />
    <WhyUs />
    <Testimonials />
    </>
  )
}

export default HomePage