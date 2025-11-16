import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Component as MagicCursor } from "@/components/ui/magic-cursor";
import { supabase, isSupabaseAvailable } from "@/lib/supabase";
const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to join the waitlist.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Check if Supabase is available
    if (!isSupabaseAvailable() || !supabase) {
      console.error('Supabase not configured:', {
        available: isSupabaseAvailable(),
        client: !!supabase
      });
      toast({
        title: "Service temporarily unavailable",
        description: "We're having trouble connecting to our servers. Please try again later.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Save email to Supabase
      const { error } = await supabase!
        .from('waitlist')
        .insert([{ email }] as any);

      if (error) {
        console.error('Supabase error:', error);
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        });
        return;
      }
      
      toast({
        title: "You're on the Waitlist",
        description: "You will be notified when we launch",
      });
      
      setEmail("");
    } catch (error) {
      console.error('Error saving email:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section className="min-h-screen flex items-center justify-center bg-background">
      <MagicCursor colors={["186 164 118", "252 254 255"]} />
      <div className="text-center px-6 max-w-2xl mx-auto">
        <div className="animate-fade-in-up space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src="/lazrani-logo.png" alt="Lazrani Logo" className="w-24 h-24 object-contain" />
          </div>
          
          {/* Brand Name */}
          <h1 className="font-display text-5xl md:text-7xl font-light text-foreground tracking-wide">
            LAZRANI
          </h1>
          
          {/* Tagline */}
          <p className="font-body text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed font-extralight md:text-sm">
            Indo-Western fashion designed in the U.S. and inspired by South Asia
          </p>

          {/* Direct Email Entry */}
          <div className="pt-8">
            <div className="flex items-center justify-center">
              <div className="flex items-center bg-background/80 backdrop-blur-md rounded-full border border-primary/30 shadow-subtle hover:shadow-gold transition-all duration-500 hover:border-primary/60 pl-2 pr-1 py-1">
                <Input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-6 px-2 mr-1 text-xs border-0 bg-transparent text-foreground placeholder:text-muted-foreground font-body focus:ring-0 focus:outline-none rounded-full w-48"
                  disabled={isSubmitting}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                />
                <Button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-primary/20 hover:bg-primary/30 text-foreground font-body font-light rounded-full border-0 shadow-none transition-all duration-300 hover:scale-105 h-6 px-2 text-xs"
                >
                  {isSubmitting ? "..." : "Join Waitlist"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;