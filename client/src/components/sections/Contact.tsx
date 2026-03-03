import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';
import { api, type ContactInput } from '@shared/routes';
import { useCreateContact } from '@/hooks/use-contacts';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function Contact() {
  const { mutate: submitContact, isPending } = useCreateContact();
  
  const form = useForm<ContactInput>({
    resolver: zodResolver(api.contacts.create.input),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactInput) => {
    submitContact(data, {
      onSuccess: () => form.reset(),
    });
  };

  const contactInfo = [
    { icon: <Mail className="text-primary" size={24} />, label: "Email", value: "patelfujel5@gmail.com", href: "mailto:patelfujel5@gmail.com" },
    { icon: <Phone className="text-accent" size={24} />, label: "Phone", value: "+91 9054142262", href: "tel:+919054142262" },
    { icon: <MapPin className="text-blue-400" size={24} />, label: "Location", value: "Bharuch, Gujarat, India", href: "" },
  ];

  return (
    <motion.section 
      id="contact" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="min-h-screen py-16 sm:py-24 relative flex items-center overflow-visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">Let's <span className="text-gradient-cyan">Connect</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'm always open to new challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="prose prose-invert max-w-none mb-10">
              <h3 className="text-2xl font-display font-bold">Get In Touch</h3>
              <p className="text-muted-foreground">
                Whether you have a question, a project proposition, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 glass-panel rounded-2xl group hover:border-primary/30 transition-colors">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform cursor-pointer"
                    onClick={() => {
                      if (info.label === "Email") {
                        window.location.href = info.href;
                      }
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-1">{info.label}</h4>
                    {info.href ? (
                      <a href={info.href} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl relative overflow-hidden">
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field} 
                            className="bg-background/50 border-white/10 focus-visible:ring-primary focus-visible:border-primary h-12 rounded-xl"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="john@example.com" 
                            {...field} 
                            className="bg-background/50 border-white/10 focus-visible:ring-primary focus-visible:border-primary h-12 rounded-xl"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project..." 
                            {...field}
                            className="bg-background/50 border-white/10 focus-visible:ring-primary focus-visible:border-primary min-h-[150px] rounded-xl resize-none"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={isPending}
                    className="w-full h-14 rounded-xl bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold text-lg shadow-lg hover:shadow-primary/25 transition-all group"
                  >
                    {isPending ? (
                      <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="mr-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Send Message</>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
