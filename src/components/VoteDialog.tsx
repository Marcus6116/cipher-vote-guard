import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import { toast } from "sonner";

interface VoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  proposalTitle: string;
  encrypted: boolean;
}

const VoteDialog = ({ open, onOpenChange, proposalTitle, encrypted }: VoteDialogProps) => {
  const [vote, setVote] = useState<string>("");

  const handleSubmitVote = () => {
    if (!vote) {
      toast.error("Please select a vote option");
      return;
    }
    
    toast.success(encrypted ? "Your encrypted vote has been submitted!" : "Your vote has been submitted!");
    onOpenChange(false);
    setVote("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Cast Your Vote
            {encrypted && <Lock className="h-4 w-4 text-accent" />}
          </DialogTitle>
          <DialogDescription>
            {proposalTitle}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {encrypted && (
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 text-sm">
              <p className="text-muted-foreground">
                Your vote will be encrypted and only revealed after the voting period ends.
              </p>
            </div>
          )}
          
          <RadioGroup value={vote} onValueChange={setVote}>
            <div className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <RadioGroupItem value="for" id="for" />
              <Label htmlFor="for" className="flex-1 cursor-pointer">
                Vote For
              </Label>
            </div>
            <div className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <RadioGroupItem value="against" id="against" />
              <Label htmlFor="against" className="flex-1 cursor-pointer">
                Vote Against
              </Label>
            </div>
            <div className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <RadioGroupItem value="abstain" id="abstain" />
              <Label htmlFor="abstain" className="flex-1 cursor-pointer">
                Abstain
              </Label>
            </div>
          </RadioGroup>

          <Button onClick={handleSubmitVote} className="w-full">
            Submit Vote
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VoteDialog;
