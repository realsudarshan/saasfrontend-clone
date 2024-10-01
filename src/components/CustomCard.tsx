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
    return(<Card className="w-60 p-4 m-14 border-red-500">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{discription}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{cardcontent}</p>
        </CardContent>
        
      </Card>)
  }
  export default CustomCards;