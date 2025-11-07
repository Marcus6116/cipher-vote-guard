import governanceSeal from "@/assets/governance-seal.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <img 
              src={governanceSeal} 
              alt="Governance Seal" 
              className="h-24 w-24 animate-spin-slow opacity-80"
            />
            <div className="absolute inset-0 bg-accent/20 blur-2xl rounded-full animate-pulse-glow" />
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Encrypted Governance Forum
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              A decentralized voting platform where DAO members cast encrypted votes 
              to prevent influence bias. Results are decrypted only after voting closes.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Documentation</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="hover:text-primary transition-colors">Community</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          </div>

          <div className="text-xs text-muted-foreground">
            © 2025 EncryptGov. All votes encrypted end-to-end.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
