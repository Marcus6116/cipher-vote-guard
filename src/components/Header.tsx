import { Button } from "@/components/ui/button";
import { Shield, Wallet } from "lucide-react";
import { useState } from "react";
import governanceLogo from "@/assets/governance-logo.png";

const Header = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");

  const connectWallet = () => {
    // Simulated wallet connection - in production, this would use Rainbow Kit
    setIsConnected(true);
    setAddress("0x742d...5e8a");
  };

  return (
    <header className="border-b border-border bg-card sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={governanceLogo} alt="Governance Logo" className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold text-foreground">EncryptGov</h1>
              <p className="text-xs text-muted-foreground">Govern Transparently, Vote Privately</p>
            </div>
          </div>
          
          {isConnected ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-success/10 border border-success/20">
                <Shield className="h-4 w-4 text-success" />
                <span className="text-sm font-medium text-success">Member Verified</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-muted border border-border">
                <span className="text-sm font-mono text-foreground">{address}</span>
              </div>
            </div>
          ) : (
            <Button onClick={connectWallet} className="gap-2">
              <Wallet className="h-4 w-4" />
              Connect Rainbow Wallet
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
