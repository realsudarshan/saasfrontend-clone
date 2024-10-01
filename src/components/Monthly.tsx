interface baseplansdt{
    plan:string;
    description:string;
    features:string[];
    price:undefined|number;
}

class PlanBase {
    basePlans:baseplansdt[];
    
    

    constructor() {
        this.basePlans = [
            {
                plan: "Basic",
                description: "Lorem ipsum dolor sit amet.",
                features: [
                    "Up to 10 team members",
                    "50GB of cloud storage",
                    "Streamlined operations",
                    "Workflow optimization",
                    "Basic analytics",
                    "Email support",
                ],
                price:undefined
            },
            {
                plan: "Pro",
                description: "Lorem ipsum dolor sit amet.",
                features: [
                    "Up to 50 team members",
                    "250GB of cloud storage",
                    "Advanced workflow tools",
                    "In-depth analytics",
                    "Priority email and phone support",
                    "Integration with third-party tools",
                ],
               price:undefined
            },
            {
                plan: "Premium",
                description: "Lorem ipsum dolor sit amet.",
                features: [
                    "Unlimited team members",
                    "1TB of cloud storage",
                    "Customizable options",
                    "Dedicated account manager",
                    "24/7 priority support",
                    "Advanced security features",
                ],
                price:undefined
            },
        ];
        
    
     

    }
    generatePlan(pricerange:number[]){
        this.basePlans.forEach((plan,index)=>{
            plan.price=pricerange[index]
            

        })

        
    }
    
    
}


const Monthlyplan=new PlanBase()
const Yearlyplan=new PlanBase()
Monthlyplan.generatePlan([2,3,4]);
Yearlyplan.generatePlan([20,30,40]);
export {Monthlyplan,Yearlyplan};






