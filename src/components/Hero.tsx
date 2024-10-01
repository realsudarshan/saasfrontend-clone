import { ProfileForm } from "./Form";
import Software from "./Software";


const Hero=()=>{
return(
    <>
  
   <div className="mb-5">
    <span className="text-4xl sm:text-6xl md:text-7xl block break-words mx-auto ">Discover the Power of SaaS</span>
    <span className="text-4xl sm:text-6xl md:text-8xl block break-words mxa-auto">Simplicity.</span>
    </div>
<p className="px-28 mb-9 ">Welcome to SaaSStellar, your gateway to streamlined operations, innovation, enhanced productivity, and limitless growth opportunities.
Discover a brighter future with us.</p>
<div className="flex justify-center items-center">
<ProfileForm />

</div>
<p className="mt-3 mb-40">Join a waitlist of 200+ members!</p>



    </>
)
}
export default Hero;