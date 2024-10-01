import { Badge } from "./ui/badge";
  import CustomCards from "./CustomCard";
import carddetail from "./carddetail.tsx";
const CardsSection = () => {

    return (<> 
    <div>
      <div>
        <Badge variant="destructive" className="mb-20">Join with us</Badge>
        <h1 className="text-4xl text-center"><p>Advanced Solutions </p><p>for Business Excellence</p>
        </h1>
      <p className="text-center p-10 md:p-6">Explore a diverse range of cutting-edge tools meticulously crafted to drive your business towards unparalleled success.</p> 
      </div>
      <div className=" mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 ">
       {carddetail.map(({title,description,cardContent})=>(
          <CustomCards title={title} discription={description} cardcontent={cardContent}/> 
        )
        

      )}

      </div>
      </div>
     
    </>
    )
}
export default CardsSection;