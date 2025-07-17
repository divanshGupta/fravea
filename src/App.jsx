import Hero from "./components/Hero";
import Listing from "./components/Listing";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import Reviews from "./components/Reviews";
import Specs from "./components/Specs";
import Faqs from "./components/Faqs";
import Futer from "./components/Futer";

function App() {

  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Specs />
      <Listing />
      <Reviews />
      <Blog />
      <Faqs />
      <Futer />
    </div>
  )
}

export default App
