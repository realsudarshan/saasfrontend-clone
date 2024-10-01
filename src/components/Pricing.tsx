import { useState } from "react";
import { Badge } from "./ui/badge";
import { Switch } from "@/components/ui/switch"
import { Monthlyplan,Yearlyplan } from "./Monthly";
import PriceCards from "./PriceCards";


const Pricing=()=>{
    interface baseplansdt{
        plan:string;
        description:string;
        features:string[];
        price:undefined|number;
    }
 const [switchstate,changeswitchstate]=useState(true)
 function switchhandler(){
    if(switchstate==true){
        changeswitchstate(false)
        console.log(Monthlyplan.basePlans)
        
    }
    if(switchstate==false){
        changeswitchstate(true)
        
    }
console.log(Monthlyplan);
 }
 
    return (
        <>
        <Badge variant={"destructive"} className="my-10">Adaptable Pricing
        </Badge>
        <h1 className="text-4xl">Choose your plan</h1>
        <p>Select the ideal plan for your business requirements</p>
        <div>Yearly<Switch checked={switchstate} onCheckedChange={switchhandler} className="m-4"></Switch>Monthly</div>
{switchstate?<div className="flex justify-center flex-wrap ">
    {Monthlyplan.basePlans.map(({plan,description,features,price})=>(
        <PriceCards plan={plan} description={description} features={features} price={price}/>
    )
    )}
</div>:<div className="flex justify-center flex-wrap">
     {Yearlyplan.basePlans.map(({plan,description,features,price})=>(
        <PriceCards plan={plan} description={description} features={features} price={price}/>
    )
    )}</div>}

        </>
    )
}
export default Pricing;