
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactItem = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) => {
  return (
    <div className="flex items-start space-x-4 animate-fadeIn opacity-0" style={{ animationDelay: '0.2s' }}>
      <div className="p-3 rounded-full bg-neon-blue/20 text-neon-blue">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <p className="text-gray-300">{content}</p>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background/40">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-neon-pink text-shadow-neon-pink">Contact</span> Me
          </h2>
          <div className="h-1 w-20 bg-neon-pink rounded-full mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactItem 
              icon={<Mail className="w-6 h-6" />} 
              title="Email" 
              content="contact@example.com" 
            />
            <ContactItem 
              icon={<Phone className="w-6 h-6" />} 
              title="Phone" 
              content="+1 (123) 456-7890" 
            />
            <ContactItem 
              icon={<MapPin className="w-6 h-6" />} 
              title="Location" 
              content="New York City, USA" 
            />

            <div className="pt-8 animate-fadeIn opacity-0" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold mb-4 text-white">Connect With Me</h3>
              <p className="text-gray-300 mb-4">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="h-1 w-20 bg-neon-blue/50 rounded-full"></div>
            </div>
          </div>

          <div className="rounded-xl p-1 neon-border animate-fadeIn opacity-0" style={{ animationDelay: '0.6s' }}>
            <div className="bg-muted/40 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-white">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/60 text-white border-neon-blue/30 focus:border-neon-blue focus:ring-neon-blue/20 placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/60 text-white border-neon-blue/30 focus:border-neon-blue focus:ring-neon-blue/20 placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background/60 text-white border-neon-blue/30 focus:border-neon-blue focus:ring-neon-blue/20 placeholder-gray-500"
                    placeholder="Project inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background/60 text-white border-neon-blue/30 focus:border-neon-blue focus:ring-neon-blue/20 placeholder-gray-500 resize-none"
                    placeholder="I'd like to discuss a project..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-neon-blue hover:bg-neon-blue/90 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
