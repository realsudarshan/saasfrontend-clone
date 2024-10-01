import {
    Card,
    CardContent,
  } from "@/components/ui/card"
  import { Textarea } from "@/components/ui/textarea"

import { ProfileForm } from "./Getintouchform";
import { Button } from "./ui/button";
  

const Formincard=()=>{
    return(
        <Card>
 
  <CardContent>
  <ProfileForm formtitle={"Fullname"} placeholder={"Sudarshan"} height="h-10"/>
  <ProfileForm formtitle={"Email"} placeholder={"example@gmail.com" } height="h-10"/>
  <p className="font-bold text-start m-1">Message</p>
 <Textarea placeholder="Write something"/>
  </CardContent>
  <Button variant={"secondary"} className="bg-red-400">Submit</Button>
</Card>
    )
}
export default Formincard;