---
sidebar_position: 6
---

# Witness Node & Committer

Witness Nodes and Committers form the Block Production Layer, providing decentralized security and final block production.

## Witness Node

### How Selection Works

- Randomly elected via VRF from high-contribution nodes
- Selection pool: Top 50% of nodes by IntelliPoints
- 51 witnesses selected each consensus cycle (~6 hours)

### Responsibilities

- Participate in Block Production Layer BFT
- Verify Execution Layer blocks independently
- Sign valid blocks to form Witness QC

### Rewards

- Witness rewards based on signature participation
- Tied to active participation in consensus

## Committer

### Role

Among the 51 witnesses, nodes take turns as Committer according to a deterministic shuffled order.

### Responsibilities

- Package final blocks in assigned time slots
- Broadcast finalized blocks to the network
- Ensure continuous block production

### Rewards

- Extra Committer rewards (dedicated portion of block rewards)
- Additional to standard witness rewards

## Eligibility

You cannot directly "apply" to be a Witness or Committer. Instead:

1. Operate as a Training Node or Content Node
2. Accumulate high IntelliPoints through quality contributions
3. Be automatically eligible for VRF-based selection
