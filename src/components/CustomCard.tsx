import {
    Card,
    CardContent,
    CardDescription,
   
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  interface Cardpropstype{
    title:String,
    discription:String,
    cardcontent:String
  }
  const CustomCards=({title,discription,cardcontent}:Cardpropstype)=>{
    return(<Card className=" border-red-400 bg-gradient-to-b from-gray-200 to-transparent rounded-3xl">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="text-black dark:text-white">{discription}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{cardcontent}</p>
        </CardContent>
        
      </Card>)
  }
  export default CustomCards;