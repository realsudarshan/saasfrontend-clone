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
export function ProfileForm() {
    // form defining
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
      },
    }
)
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
      return (<>
        <Form  {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-80  ">
          <FormLabel className="font-bold">Suscribe for Newsletter</FormLabel>
            <FormField 
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                
                  <FormControl>
                    <Input placeholder="Enter email" {...field} />
                  </FormControl>
                
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
            
          </form>
          
        </Form>
       
        </>
      )
    }