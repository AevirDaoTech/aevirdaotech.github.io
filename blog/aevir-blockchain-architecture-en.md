# Aevir Blockchain Architecture: Dual-Layer Consensus Built for the AI Era

> Discover how Aevir achieves the perfect balance between performance and decentralization through innovative dual-layer architecture

---

## Introduction

Aevir emerges at the intersection of AI and blockchain. As a public chain designed specifically for distributed AI computing, Aevir faces unique challenges: handling massive AI training tasks and data interactions while ensuring network decentralization and security.

Traditional blockchains often struggle between **performance** and **decentralization**—pursuing high throughput means sacrificing node count, while maintaining full decentralization leads to slow transaction confirmations. Aevir's answer: **we want it all**.

Through innovative **dual-layer consensus architecture**, Aevir achieves sub-second transaction confirmation unified with large-scale decentralization.

<!-- truncate -->

---

## Architecture Overview

![Aevir Dual-Layer Consensus Architecture](./assets/aevir-architecture-blog-en.svg)

The diagram above illustrates Aevir's core architecture: the Execution Layer handles rapid transaction processing, the Block Production Layer ensures decentralized security, and both layers collaborate to complete the entire flow from transaction initiation to final on-chain confirmation.

---

## Dual-Layer Architecture: Clear Division of Labor

Aevir's core design philosophy is **separation of computation and attestation**. The network is divided into two collaborative tiers:

### Execution Layer: Lightning-Fast Transaction Engine

The Execution Layer is the high-performance core of the Aevir network, dedicated to processing all user transactions and complex computational tasks.

**Core Responsibilities:**

- Receive and process all user-initiated transaction requests
- Execute smart contracts, including DeFi protocols, AI task scheduling, etc.
- Calculate contribution scores for all network nodes
- Achieve **sub-second** transaction confirmation

**How It Works:**
The Execution Layer consists of **21 high-performance execution nodes** forming the **Execution Committee**, using **PoS (Proof of Stake) + BFT (Byzantine Fault Tolerance)** consensus. These nodes earn execution rights through token staking, selected by stake ranking.

When users initiate transactions, the Execution Layer Leader collects and packages data, and all 21 nodes quickly complete internal voting. With more than 2/3 of nodes signing in agreement, the transaction receives preliminary confirmation—typically completed **within seconds**.

### Block Production Layer: Guardian of Decentralization

If the Execution Layer is about "running fast," the Block Production Layer is about "standing firm."

**Core Responsibilities:**

- Verify data integrity submitted by the Execution Layer
- Provide large-scale decentralized witnessing
- Generate final blocks and complete on-chain attestation
- Prevent minority node collusion or misbehavior

**How It Works:**
The Block Production Layer uses Aevir's original **PoIC (Proof of Intelligent Contribution)** consensus mechanism. Every cycle (approximately 6 hours), the system uses VRF random selection to choose **51 Witness Nodes** from nodes ranking in the top 50% by contribution score.

These Witness Nodes perform secondary verification and voting on data submitted by the Execution Layer. Only when **34 or more nodes (over 2/3)** reach consensus does the rotating **Committer** package the final block and broadcast it network-wide.

---

## Dual BFT: Double Insurance for Security

One of Aevir's most innovative designs is **dual BFT consensus protection**.

Every transaction must pass through two checkpoints to truly be "on-chain":

1. **Execution Layer Consensus (Execution QC)**: Internal BFT voting by 21 execution nodes
2. **Witness Layer Consensus (Witness QC)**: Secondary BFT verification by 51 witness nodes

Only with both "collective signature certificates" will a block be recognized network-wide.

**What does this mean?**

- Even if some Execution Layer nodes attempt misbehavior, they'll be detected and rejected by the 51 independent Witness Nodes
- Even if a Committer goes offline, the other 50 Witness Nodes have already reached consensus and can immediately switch to the next candidate
- Attackers would need to simultaneously control the majority of nodes in both layers—attack costs increase exponentially

**The network never stops. Data is never tampered.**

---

## Proof of Intelligent Contribution: Rewarding Real Contributors

Traditional PoW competes on computing power, PoS competes on capital. Aevir's PoIC competes on **real contribution**.

### Contribution Scoring System

Aevir has built a complete contribution quantification system:

- **Training Points**: Calculated based on GPU performance, uptime stability, and task completion rate
- **Library Points**: Based on data storage volume, citation count, and community voting

These two scores combine into **IntelliPoints**, directly determining the probability of receiving block rewards.

### Fair Rotation Mechanism

Every 6 hours (approximately 1,280 blocks), the system automatically conducts Witness Node elections:

1. The signature of the last block from the previous cycle serves as the random seed
2. VRF selection from the qualified contribution score node pool
3. 51 newly elected Witness Nodes seamlessly take over

The entire election process executes entirely on-chain, transparent and verifiable by anyone, eliminating the possibility of manipulation.

---

## Deterministic Block Production: No Negotiation, Right on Schedule

Within the Block Production Layer, Aevir employs a clever **deterministic shuffling schedule** mechanism to select block producers for each time slot.

In traditional blockchains, determining who produces the next block often requires repeated negotiation or competition between nodes—wasting time and prone to forks. Aevir's approach:

1. At the start of each cycle, the same VRF seed randomly shuffles the 51 Witness Nodes
2. The entire cycle is divided into 20-second time slots
3. The shuffled order directly maps to time slots—who produces which block is predetermined

When your time slot arrives, you automatically assume duty; blocks produced outside your slot are rejected network-wide.

**No handshakes, no competition. Everything proceeds as planned.**

What if the scheduled block producer goes offline? No problem—the system automatically switches to the next candidate after a brief timeout, and the network continues running smoothly.

---

## Diverse Node Ecosystem: Contributing What You Can, Taking What You Need

The Aevir network has three core node roles:

| Node Type               | Primary Responsibility                                                 | Entry Requirements                                   |
| ----------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| **Execution Node**      | Execution Committee member, processing transactions, running contracts | Stake tokens, top 21 by stake ranking                |
| **Training Node (ICN)** | Provide GPU computing power, participate in AI model training          | Staking + hardware certification, unlimited quantity |
| **Content Node**        | Provide storage space, store knowledge data                            | Staking + storage certification, unlimited quantity  |

This design allows participants with different resource endowments to find their place:

- Have capital advantage? Become an Execution Node for stable consensus rewards
- Have GPU computing power? Become a Training Node and earn mining rewards through contribution
- Have storage resources? Become a Content Node and support the AI ecosystem with data

---

## Economic Incentives: Every Contribution Gets Rewarded

Aevir has designed an elegant reward distribution mechanism to ensure all participants receive fair compensation:

**Block Reward Distribution:**

- **5%** → Shared equally among the 21 Execution Committee nodes
- **15%** → Exclusively to the on-duty Committer
- **50%** → Training Node reward pool, distributed by computing contribution
- **30%** → Knowledge contribution pool, distributed by data contribution

The ingenuity of this design:

- Core infrastructure maintainers (Execution Nodes, Committers) receive stable income
- Contributors of computing power and data accumulate rewards through sustained contribution
- Want block production rewards? Improve your contribution score to increase your chances of being selected as a Witness Node

**The more you do, the more you earn.**

---

## Technical Advantages Summary

Looking back at Aevir's architecture, several core advantages are clear:

### 🚀 Ultimate Performance with Decentralization

21 Execution Layer nodes ensure sub-second response; 51 Block Production Layer nodes guarantee decentralized security. Two layers working together, best of both worlds.

### 🔐 Dual BFT Security

Two consensus checkpoints, dual signature verification. Attack costs increase exponentially, the network stands impregnable.

### ⚖️ Fair and Transparent Contribution Proof

Moving beyond pure capital competition, real contribution becomes the core basis for rewards.

### 🔄 Efficient Rotation and Fault Tolerance

Deterministic scheduling eliminates negotiation overhead; automatic failover ensures the network never stops.

### 🎯 Precise Incentive Design

Multi-layer distribution mechanism ensures each participant gets their due, forming a positive ecosystem cycle.

---

## Conclusion

Aevir's dual-layer architecture is not a simple patch on traditional blockchain, but a systematic redesign for the AI era's demands.

By decoupling "fast execution" and "secure attestation" into two specialized layers, Aevir breaks the binary opposition between performance and decentralization. The Execution Layer acts like a precision high-speed engine, the Block Production Layer like a reliable security vault—both working in concert to support an efficient, secure, and fair distributed AI infrastructure.

This is Aevir—next-generation blockchain infrastructure built for the AI era.

---

_Want to learn more technical details? Join the Aevir community and explore the infinite possibilities of AI × Blockchain with us._
