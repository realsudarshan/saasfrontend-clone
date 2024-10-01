import { Check, DollarSign } from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "./ui/button";

  interface baseplansdt{
    plan:string;
    description:string;
    features:string[];
    price:undefined|number;
}

  
const PriceCards=({plan,description,features,price}:baseplansdt)=>{
  
    return(
        <Card className="m-6 w-50">
  <CardHeader>
    <CardTitle className="inline">{plan}</CardTitle>
    <CardTitle className="self-center"><DollarSign className="inline"/>{price}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardHeader>
  <CardContent>
    <p>{features.map((item)=>(<p><Check className="m-0 inline"/>{item}</p>))}</p>
  </CardContent>
{plan=="Pro" && <Button variant={"destructive"}>Buy Now</Button> }
{(plan=="Basic"||plan=="Premium") && <Button variant={"default"}>Buy now</Button>}
</Card>


    )

}
export default PriceCards;
