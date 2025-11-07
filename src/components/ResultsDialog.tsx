import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react";

interface ResultsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  proposalTitle: string;
  totalVotes: number;
  result?: "passed" | "rejected";
}

const ResultsDialog = ({ open, onOpenChange, proposalTitle, totalVotes, result }: ResultsDialogProps) => {
  // Mock data for results
  const forVotes = result === "passed" ? Math.floor(totalVotes * 0.65) : Math.floor(totalVotes * 0.35);
  const againstVotes = result === "passed" ? Math.floor(totalVotes * 0.25) : Math.floor(totalVotes * 0.55);
  const abstainVotes = totalVotes - forVotes - againstVotes;

  const forPercentage = (forVotes / totalVotes) * 100;
  const againstPercentage = (againstVotes / totalVotes) * 100;
  const abstainPercentage = (abstainVotes / totalVotes) * 100;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Voting Results</DialogTitle>
          <DialogDescription>{proposalTitle}</DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-center p-4 rounded-lg bg-card border border-border">
            <p className="text-sm text-muted-foreground mb-1">Total Votes</p>
            <p className="text-3xl font-bold">{totalVotes}</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span className="font-medium">For</span>
                </div>
                <span className="text-muted-foreground">
                  {forVotes} votes ({forPercentage.toFixed(1)}%)
                </span>
              </div>
              <Progress value={forPercentage} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-destructive" />
                  <span className="font-medium">Against</span>
                </div>
                <span className="text-muted-foreground">
                  {againstVotes} votes ({againstPercentage.toFixed(1)}%)
                </span>
              </div>
              <Progress value={againstPercentage} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <MinusCircle className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Abstain</span>
                </div>
                <span className="text-muted-foreground">
                  {abstainVotes} votes ({abstainPercentage.toFixed(1)}%)
                </span>
              </div>
              <Progress value={abstainPercentage} className="h-2" />
            </div>
          </div>

          {result && (
            <div className={`text-center p-3 rounded-lg ${
              result === "passed" 
                ? "bg-success/10 text-success border border-success/20" 
                : "bg-destructive/10 text-destructive border border-destructive/20"
            }`}>
              <p className="font-semibold">
                Proposal {result === "passed" ? "Passed" : "Rejected"}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResultsDialog;
