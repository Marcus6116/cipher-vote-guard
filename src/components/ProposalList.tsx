import ProposalCard from "./ProposalCard";

const mockProposals = [
  {
    id: 1,
    title: "Increase Treasury Allocation for Development",
    description: "Proposal to allocate an additional 15% of treasury funds to core protocol development and security audits.",
    status: "active" as const,
    endDate: "2025-11-15",
    totalVotes: 247,
    encrypted: true,
  },
  {
    id: 2,
    title: "Implement New Governance Quorum Requirements",
    description: "Adjust the minimum quorum from 10% to 15% for all major protocol changes.",
    status: "active" as const,
    endDate: "2025-11-18",
    totalVotes: 189,
    encrypted: true,
  },
  {
    id: 3,
    title: "Partnership with CrossChain Bridge Protocol",
    description: "Approve strategic partnership to expand cross-chain capabilities and interoperability.",
    status: "closed" as const,
    endDate: "2025-11-01",
    totalVotes: 412,
    result: "passed" as const,
    encrypted: false,
  },
  {
    id: 4,
    title: "Token Emission Rate Adjustment",
    description: "Reduce token emission rate by 20% to ensure long-term sustainability.",
    status: "closed" as const,
    endDate: "2025-10-28",
    totalVotes: 356,
    result: "rejected" as const,
    encrypted: false,
  },
  {
    id: 5,
    title: "Community Grant Program Expansion",
    description: "Create a new grant category for educational content creators and community ambassadors.",
    status: "pending" as const,
    endDate: "2025-11-20",
    totalVotes: 0,
    encrypted: false,
  },
];

const ProposalList = () => {
  const activeProposals = mockProposals.filter(p => p.status === "active");
  const closedProposals = mockProposals.filter(p => p.status === "closed");
  const pendingProposals = mockProposals.filter(p => p.status === "pending");

  return (
    <div className="space-y-12" id="proposals-section">
      {/* Active Proposals */}
      <section className="animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Active Proposals</h2>
          <span className="text-sm text-muted-foreground">
            {activeProposals.length} active
          </span>
        </div>
        <div className="grid gap-6">
          {activeProposals.map((proposal) => (
            <ProposalCard key={proposal.id} {...proposal} />
          ))}
        </div>
      </section>

      {/* Closed Proposals */}
      <section className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Closed Proposals</h2>
          <span className="text-sm text-muted-foreground">
            {closedProposals.length} closed
          </span>
        </div>
        <div className="grid gap-6">
          {closedProposals.map((proposal) => (
            <ProposalCard key={proposal.id} {...proposal} />
          ))}
        </div>
      </section>

      {/* Pending Proposals */}
      {pendingProposals.length > 0 && (
        <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Pending Proposals</h2>
            <span className="text-sm text-muted-foreground">
              {pendingProposals.length} pending
            </span>
          </div>
          <div className="grid gap-6">
            {pendingProposals.map((proposal) => (
              <ProposalCard key={proposal.id} {...proposal} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProposalList;
