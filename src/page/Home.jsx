import Category from "../components/home/Category"
import FaQ from "../components/home/FaQ"
import Hero from "../components/home/Hero"
import PopularSection from "../components/home/PopularSection"
import WhyChooseUs from "../components/home/WhyChooseUs"


const Home = () => {
  return (
    <div className="py-20">
    <Hero/>
    <Category/>
    <PopularSection/>
    <WhyChooseUs/>
    <FaQ/>
    </div>
  )
}

export default Home