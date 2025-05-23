import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqsAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" data-aos="fade-up">
        <AccordionTrigger className="text-sm md:text-xl text-[#377389] dark:text-white/70">
          What is brand storytelling?
        </AccordionTrigger>
        <AccordionContent className="text-gray-700 dark:text-white/50 text-[11.7px]">
          It’s how you express your brand’s purpose and values through a story
          that connects emotionally with your audience.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" data-aos="fade-up">
        <AccordionTrigger className="text-sm md:text-xl text-[#377389] dark:text-white/70">
          Why does my brand/business need it?
        </AccordionTrigger>
        <AccordionContent className="text-gray-700 dark:text-white/50 text-[11.7px]">
          Because facts tell, but stories sell. Storytelling helps people trust,
          remember, and choose your brand.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" data-aos="fade-up">
        <AccordionTrigger className="text-sm md:text-xl text-[#377389] dark:text-white/70">
          I don’t know my story—can you help?
        </AccordionTrigger>
        <AccordionContent className="text-gray-700 dark:text-white/70 text-[11.7px]">
          Absolutely. We guide you through our HEART Framework to uncover and
          craft your unique story.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" data-aos="fade-up">
        <AccordionTrigger className="text-sm md:text-xl text-[#377389] dark:text-white/70">
          Is Brand storytelling the same as marketing?
        </AccordionTrigger>
        <AccordionContent className="text-gray-700 dark:text-white/50 text-[11.7px]">
          Not quite. Marketing promotes—storytelling builds connection. Your
          story powers your marketing.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" data-aos="fade-up">
        <AccordionTrigger className="text-sm md:text-xl text-[#377389] dark:text-white/70">
          Is Brand storytelling the same as commercials?
        </AccordionTrigger>
        <AccordionContent className="text-gray-700 dark:text-white/50 text-[11.7px]">
          Brand storytelling builds emotional connection by sharing your brand’s
          journey and values, while commercials focus on promoting a specific
          product or offer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
