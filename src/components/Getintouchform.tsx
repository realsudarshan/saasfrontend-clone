import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"
const formSchema = z.object({
  username: z.string().min(2).max(50),
})
interface formproptype{
    formtitle:string,
    placeholder:string
    height:string
}
export function ProfileForm({formtitle,placeholder,height}:formproptype) {
    // form defining
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
      },
    }
)
    
      return (<>
        <Form  {...form}  >
          <form  className="text-start w-80 ">
          <FormLabel className="font-bold">{formtitle}</FormLabel>
            <FormField 
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                
                  <FormControl >
                    <Input placeholder={placeholder} {...field} className={height} />
                  </FormControl>
                
                  <FormMessage />
                </FormItem>
              )}
            />
           
            
          </form>
          
        </Form>
       
        </>
      )
    }
 