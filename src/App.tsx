import { SiteHeader } from "@/components/site-header"
import Software from "./components/Software"
import { TailwindIndicator } from "./components/tailwind-indicator"
import Hero from "./components/Hero"
import CardsSection from "./components/CardsSection"
import Pricing from "./components/Pricing"

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
        <div className="mb-20">
      
        <CardsSection />
      </div>
      <Pricing/>
      
        
       </main>
     
       
    
     
    </>
  )
}

export default App
