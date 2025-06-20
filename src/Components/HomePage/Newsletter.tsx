import { useState } from "react";
import { Mail, Gift } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../../hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmail("");
      toast({
        title: "Welcome to Bloom! 🌸",
        description: "You've successfully subscribed! Check your email for your 10% discount code.",
      });
    }, 1000);
  };

  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-gradient-to-br from-pink-500 to-rose-400 -mt-4 sm:-mt-7">
      <div className="container mx-auto px-2 sm:px-4 -mt-8 sm:-mt-17 -mb-8 sm:-mb-15">
        <div className="max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto text-center text-white">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="bg-pink-400 bg-opacity-20 rounded-full p-3 sm:p-4">
              <Gift className="h-8 w-8 sm:h-12 sm:w-12" />
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Get 10% Off Your First Order
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-pink-100">
            Subscribe to our newsletter and be the first to know about new products, exclusive deals, and beauty tips!
          </p>

          <form onSubmit={handleSubmit} className="max-w-xs sm:max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 pr-4 py-2 sm:py-3 bg-white border-0 rounded-full text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-opacity-50 text-sm sm:text-base"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading || !email}
                className="bg-white text-pink-500 hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-all duration-200 disabled:opacity-50 text-sm sm:text-base"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
          </form>

          <p className="text-xs sm:text-sm text-pink-100 mt-3 sm:mt-4">
            * No spam, unsubscribe at any time. By subscribing, you agree to our Terms & Privacy Policy.
          </p>

          {/* Social Proof */}
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center items-center gap-5 sm:gap-8 text-pink-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-xs sm:text-sm">10K+ Subscribers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-xs sm:text-sm">Weekly Beauty Tips</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-xs sm:text-sm">Exclusive Offers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
