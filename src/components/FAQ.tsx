import CustomAccordian from "./CustomAccordian"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

export  const FAQ=()=>{
    return(<>
        
            <Badge variant={"destructive"} className="mb-5">FAQ</Badge>
           <h1 className="text-3xl md:text-5xl">Frequently asked questions</h1>
           <p>Haven’t found what you’re looking for? <Button variant={"link"}>Contact us.</Button></p>
<CustomAccordian/>
            
            </>
    )

}