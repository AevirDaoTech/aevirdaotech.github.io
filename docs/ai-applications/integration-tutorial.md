---
sidebar_position: 3
---

# Application Examples & Integration Tutorial

With Aevir's primitives, developers can design multiple application-layer patterns.

## Pattern 1: DeAI Protocol ("Training-as-Mining")

- At protocol layer: Define standard training job types and reward rules
- Users can: Stake $AEV to create "training job pools"
- ICNs: Pick suitable jobs, submit trained models, share rewards

**Advantage**: Turn "training" into a sustainable, mining-like economic activity.

## Pattern 2: AI-as-a-Service DApp

- Frontend DApp provides simple UI (chat window, image generator, etc.)
- Backend only needs to:
  - Construct inference requests on Aevir
  - Display results and billing
- All lower-level complexity handled by Aevir

**Advantage**: Web2 apps can integrate with almost no changes.

## Pattern 3: Data Market & Knowledge Graph

- Content nodes and data providers: Register datasets, knowledge graphs on Aevir
- During inference or training: Specify data resources, auto-settle payments
- Users: Browse, filter, and subscribe to data sources via DApps

**Advantage**: Native market for data and knowledge with sustainable income.

## Pattern 4: Agent Economy & Autonomous Apps

- Each Agent / Bot has an on-chain identity and wallet
- Can initiate jobs, call models, consume data, receive payments
- Define cooperation agreements or competitive relationships

**Advantage**: Truly "self-sustaining" agent economy.

## Design Suggestions for Developers

- **Push complexity down into the protocol**: Delegate task queues / scheduling to protocol
- **Prefer event-driven designs**: Use on-chain events to trigger backend logic
- **Explicitly design incentive flows**: Be clear who contributes what and design reward paths
