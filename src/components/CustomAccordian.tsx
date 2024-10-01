import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const CustomAccordian =()=>{
    return(<div className="px-1 md:px-60"><Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I integrate SaaSStellar with my existing business tools?</AccordionTrigger>
          <AccordionContent>
          Yes, SaaSStellar supports integration with over 10 content management systems and other third-party tools.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
  <AccordionItem value="item-2">
    <AccordionTrigger>Are there any additional costs beyond the subscription fees?</AccordionTrigger>
    <AccordionContent>
    No, SaaSStellar's pricing plans include all core features and support. Additional costs may apply only if businesses opt for optional training, custom development, or premium support packages.
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion type="single" collapsible>
  <AccordionItem value="item-3">
    <AccordionTrigger>Can I switch between pricing plans as my business needs change?</AccordionTrigger>
    <AccordionContent>
    Yes, businesses can upgrade or downgrade between SaaSStellar's pricing plans at any time to better suit evolving operational requirements and budget constraints.
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion type="single" collapsible>
  <AccordionItem value="item-4">
    <AccordionTrigger>Does SaaSStellar offer a trial period for testing its features?</AccordionTrigger>
    <AccordionContent>
    Yes, SaaSStellar offers a trial period for potential users to explore its features and functionalities before committing to a subscription plan.
    </AccordionContent>
  </AccordionItem>
</Accordion>
</div>)
}
export default CustomAccordian;