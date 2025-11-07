import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, CheckCircle2, XCircle, Clock } from "lucide-react";
import VoteDialog from "./VoteDialog";
import ResultsDialog from "./ResultsDialog";

interface ProposalCardProps {
  id: number;
  title: string;
  description: string;
  status: "active" | "closed" | "pending";
  endDate: string;
  totalVotes?: number;
  result?: "passed" | "rejected";
  encrypted: boolean;
}

const ProposalCard = ({ 
  title, 
  description, 
  status, 
  endDate, 
  totalVotes = 0,
  result,
  encrypted 
}: ProposalCardProps) => {
  const [voteDialogOpen, setVoteDialogOpen] = useState(false);
  const [resultsDialogOpen, setResultsDialogOpen] = useState(false);

  const getStatusBadge = () => {
    switch (status) {
      case "active":
        return (
          <Badge className="gap-1 bg-primary/10 text-primary border-primary/20">
            <Clock className="h-3 w-3" />
            Active
          </Badge>
        );
      case "closed":
        if (result === "passed") {
          return (
            <Badge className="gap-1 bg-success/10 text-success border-success/20">
              <CheckCircle2 className="h-3 w-3" />
              Passed
            </Badge>
          );
        } else {
          return (
            <Badge className="gap-1 bg-destructive/10 text-destructive border-destructive/20">
              <XCircle className="h-3 w-3" />
              Rejected
            </Badge>
          );
        }
      default:
        return (
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            Pending
          </Badge>
        );
    }
  };

  return (
    <Card className="hover:shadow-governance transition-all duration-300 border-border hover:border-primary/20 group">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <CardDescription className="mt-2">{description}</CardDescription>
          </div>
          <div className="flex flex-col items-end gap-2">
            {getStatusBadge()}
            {encrypted && status === "active" && (
              <Badge variant="outline" className="gap-1 text-accent border-accent/30">
                <Lock className="h-3 w-3" />
                Encrypted
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">
              {status === "active" ? "Ends" : "Ended"}: {endDate}
            </span>
            {status !== "pending" && (
              <span className="ml-4">
                {totalVotes} vote{totalVotes !== 1 ? "s" : ""} cast
              </span>
            )}
          </div>
          {status === "active" && (
            <Button size="sm" className="gap-2" onClick={() => setVoteDialogOpen(true)}>
              Vote Now
            </Button>
          )}
          {status === "closed" && (
            <Button size="sm" variant="outline" onClick={() => setResultsDialogOpen(true)}>
              View Results
            </Button>
          )}
        </div>
      </CardContent>

      <VoteDialog 
        open={voteDialogOpen}
        onOpenChange={setVoteDialogOpen}
        proposalTitle={title}
        encrypted={encrypted}
      />
      
      <ResultsDialog
        open={resultsDialogOpen}
        onOpenChange={setResultsDialogOpen}
        proposalTitle={title}
        totalVotes={totalVotes}
        result={result}
      />
    </Card>
  );
};

export default ProposalCard;
