import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionReveal } from "@/components/ui/section-reveal";

interface ContactProps {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact = ({
  title = "Get in Touch",
  description = "Ready to transform your digital presence? Let's discuss your project and how Safenexo can help you achieve your goals.",
  phone = "+1 (555) 123-4567",
  email = "hello@safenexo.com",
  web = { label: "safenexo.com", url: "https://safenexo.com" },
}: ContactProps) => {
  return (
    <SectionReveal>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground text-balance text-4xl md:text-5xl font-semibold mb-4">
              {title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </div>
          
          <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
            <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
              <div className="text-center lg:text-left">
                <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                  Contact Details
                </h3>
                <ul className="ml-4 list-disc space-y-2">
                  <li>
                    <span className="font-bold">Phone: </span>
                    <a href={`tel:${phone}`} className="text-primary hover:underline">
                      {phone}
                    </a>
                  </li>
                  <li>
                    <span className="font-bold">Email: </span>
                    <a href={`mailto:${email}`} className="text-primary hover:underline">
                      {email}
                    </a>
                  </li>
                  <li>
                    <span className="font-bold">Web: </span>
                    <a href={web.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {web.label}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-sm">
              <div className="flex gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="firstname">First Name</Label>
                  <Input type="text" id="firstname" placeholder="First Name" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input type="text" id="lastname" placeholder="Last Name" />
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="your.email@example.com" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="company">Company</Label>
                <Input type="text" id="company" placeholder="Your Company" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input type="text" id="subject" placeholder="Project inquiry" />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  placeholder="Tell us about your project, goals, and how we can help..." 
                  id="message" 
                  rows={5}
                />
              </div>
              <Button className="w-full" size="lg">
                Send Message
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
};

export default Contact;
