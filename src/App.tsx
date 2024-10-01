import { SiteHeader } from "@/components/site-header"
import Software from "./components/Software"
import { TailwindIndicator } from "./components/tailwind-indicator"
import GetinTouch from "./GetinTouch"
import Hero from "./components/Hero"
import CardsSection from "./components/CardsSection"
import Pricing from "./components/Pricing"
import { FAQ } from "./components/FAQ"
function App() {
 

  return (
    <>
     
        <SiteHeader />
  
        <main className="w-full  text-center mt-14 px-15 font-bold  ">
        <Hero />
        <p className="mb-5">INTEGRATED WITH 10+ CONTENT MANAGEMENT SYSTEMS</p>
        <div className="flex justify-center items-center mb-40">
        
        <Software/>
        
        </div>
        
      <div className="flex gap-30 flex-col items-center ">
        <CardsSection />
      
      
      
      <Pricing/>
    
      <FAQ/>
      
        <GetinTouch/>
      

      
        <p>Looking for a frontend developer with React and TailwindCSS skills? Reach out to me at<span className="text-bold text-red-500"> sudarshandhakal102@gmail.com</span> 🚀</p>
      
        </div>
       </main>
     
       
    
     
    </>
  )
}

export default App
