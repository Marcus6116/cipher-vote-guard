import { Button } from "@/components/ui/button";
import { Shield, Lock, Vote } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Govern Transparently,
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Vote Privately
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            A decentralized governance platform where DAO members cast encrypted votes 
            to prevent influence bias. All results are revealed only after voting closes.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="gap-2 shadow-governance">
              <Vote className="h-5 w-5" />
              View Active Proposals
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card/50 border border-border backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Verified Members</h3>
              <p className="text-sm text-muted-foreground text-center">
                Only verified DAO members can participate in governance decisions
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card/50 border border-border backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Lock className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">Encrypted Votes</h3>
              <p className="text-sm text-muted-foreground text-center">
                All votes are encrypted during the voting period to prevent bias
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card/50 border border-border backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center">
                <Vote className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-semibold text-foreground">Fair Results</h3>
              <p className="text-sm text-muted-foreground text-center">
                Results are decrypted and revealed only after voting closes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
