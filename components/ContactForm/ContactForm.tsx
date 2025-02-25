"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import { countryCodes, services ,hearaboutus} from "@/constants";

const formSchema = z.object({
  name: z.string().min(10).max(20),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  code: z.string().min(2).max(10),
  location: z.string().min(3).max(100),
  eventDate: z.string(),
  services: z.string().min(5).max(200),
  event: z.string().min(3).max(100),
  referral: z.string().min(3).max(100),
  message: z.string().min(10).max(1000),
});

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      code: "",
      location: "",
      eventDate: "",
      services: "",
      event: "",
      referral: "",
      message: "",
    },
  });

  const onSubmit =async(values: z.infer<typeof formSchema>) => {
      try {
        // Send main email
        // const mainEmailResponse = await fetch('/api/sent', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     email: values.email,
        //     subject: 'New Photography Inquiry',
        //     name: values.name,
        //     phone: values.phone,
        //     code: values.code,
        //     location: values.location,
        //     eventDate: values.eventDate,
        //     services: values.services,
        //     event: values.event,
        //     referral: values.referral,
        //     message: values.message,
        //     isAutoReply: false,
        //   }),
        // });
    
        // if (!mainEmailResponse.ok) {
        //   throw new Error('Failed to send main email');
        // }
    
        // Send auto-reply email
        const autoReplyResponse = await fetch('/api/sent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: values.email,
            subject: 'Thank you for your inquiry',
            name: values.name,
            isAutoReply: true,
          }),
        });
    
        if (!autoReplyResponse.ok) {
          throw new Error('Failed to send auto-reply email');
        }
    
        // Handle success
        console.log('Emails sent successfully');
      } catch (error) {
        // Handle error
        console.error('Error sending emails:', error);
      }
  }

  return (
    <div className="bg-secondary-100  p-4 md:p-6 rounded-lg">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 md:space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-secondary-900 text-lg md:text-xl font-header">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      {...field}
                      className="border-secondary-200 font-body text-base md:text-lg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-secondary-900 text-lg md:text-xl font-header">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      type="email"
                      {...field}
                      className="border-secondary-200 font-body text-base md:text-lg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem className="w-24">
                    <FormLabel className="text-secondary-900 text-lg md:text-xl font-header">
                      Code
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="border-secondary-200 font-body text-base md:text-lg">
                          <SelectValue placeholder="Code" />
                        </SelectTrigger>
                        <SelectContent>
                          {countryCodes.map((code,i) => (
                            <SelectItem key={i} value={code.code}>
                              {code.country} {code.code}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-secondary-900 text-lg md:text-xl font-header">
                      Phone
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Phone"
                        type="number"
                        {...field}
                        className="border-secondary-200 font-body text-base md:text-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-secondary-900 text-lg md:text-xl font-header">
                    Where are you from?
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your location"
                      {...field}
                      className="border-secondary-200 font-body text-base md:text-lg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="eventDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-secondary-900 text-lg md:text-xl font-header min-w-full">
                    Event Date
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      className="border-secondary-200 font-body text-base md:text-lg min-w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="event"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-secondary-900 text-lg md:text-xl font-header">
                    Event Location
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Event Location"
                      {...field}
                      className="border-secondary-200 font-body text-base md:text-lg"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
              <FormField
                control={form.control}
                name="services"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-secondary-900 text-lg md:text-xl font-header">
                      Which service(s) are you looking for?
                    </FormLabel>
                    <FormControl>
                    <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="border-secondary-200 font-body text-base md:text-lg">
                          <SelectValue placeholder="Select services" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
          <FormField
            control={form.control}
            name="referral"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary-900 text-lg md:text-xl font-header">
                  How did you hear about us?
                </FormLabel>
                <FormControl>
                <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="border-secondary-200 font-body text-base md:text-lg">
                          <SelectValue placeholder="Select where you heard about us" />
                        </SelectTrigger>
                        <SelectContent>
                          {hearaboutus.map((media) => (
                            <SelectItem key={media} value={media}>
                              {media}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary-900 text-lg md:text-xl font-header">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message"
                    {...field}
                    className="border-secondary-200 font-body text-base md:text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant={"primary"} size={"lg"} className="w-full">
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  );
};
