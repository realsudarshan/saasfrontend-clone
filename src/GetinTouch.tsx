import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Instagram, Twitter } from "lucide-react";
import Formincard from "./components/Formincard";

const GetinTouch=()=>{
    return(
        <>
<section className="grid md:grid-cols-2 place-items-center ">
    <div className="text-center p-10 mt-10 ">
<h1 className="text-5xl">Get in touch</h1>
<p>If you have any questions, suggestions, or would like to discuss potential collaborations, please don't hesitate to reach out. I'd love to hear from you!</p>

<div className="flex flex-col gap-10 mt-10 text-start ">
    <div><Twitter className="inline " color="red"/>Sudarshan</div>
    <div><Instagram className="inline" color="red"/>Sudarshan</div>
    <div><LinkedInLogoIcon className="inline" color="red"/>Sudarshan</div>

</div>
</div>
<div>
    <Formincard/>

</div>
</section>
        </>
        
    )

}
export default GetinTouch;