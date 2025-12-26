---
sidebar_position: 4
---

# Node Roles & Network Topology

Aevir's network includes multiple node roles, each suited to different resource profiles and participation styles.

## Execution Node

- **Responsibilities:**
  - Participate in Execution Layer BFT consensus
  - Process transactions and smart contracts
  - Maintain high performance for the network
- **Requirements:**
  - Stake sufficient $AEV and rank within the top 21
  - Strong hardware and network bandwidth
- **Rewards:**
  - Share of Execution Layer block rewards
  - Portion of transaction fees (as defined by tokenomics)

## Training Node / ICN

- **Responsibilities:**
  - Provide GPU and other compute resources
  - Participate in AI model training or retraining
- **Requirements:**
  - Qualified hardware (GPUs, stable bandwidth, etc.)
  - Node registration and hardware attestation
- **Rewards:**
  - Training Points via PoIC
  - Share of the ICN reward pool in $AEV based on contribution

## Content / Knowledge Node

- **Responsibilities:**
  - Provide storage capacity
  - Store corpora, model weights, index data, etc.
- **Requirements:**
  - Sufficient storage and high availability
  - Node registration and storage attestation
- **Rewards:**
  - Library Points via PoIC
  - Rewards based on data contribution and usage

## Witness Node & Committer

### Witness Node

- Randomly elected via VRF from high-contribution training/content nodes
- Participate in Block Production Layer BFT to verify Execution Layer blocks
- Earn witness rewards based on signature participation and duties

### Committer

- Among the 51 witnesses, nodes take turns as Committer according to the shuffled order
- Responsible for packaging final blocks in their assigned time slots and broadcasting them
- Receive extra Committer rewards (a dedicated portion of total block rewards)
