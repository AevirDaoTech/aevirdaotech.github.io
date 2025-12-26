---
sidebar_position: 2
---

# Witness Layer Consensus: PoIC + BFT

If the Execution Layer is about "running fast", the **Block Production Layer (Witness Layer)** is about "standing firm".

## Core Responsibilities

- Perform a second verification of data coming from the Execution Layer
- Reach consensus within a larger, more decentralized node set
- Produce final blocks and "seal" them on-chain

## PoIC: Proof of Intelligent Contribution

The Witness Layer uses Aevir's original **PoIC** consensus. The core idea:

> Instead of only competing on raw compute (PoW) or capital (PoS), nodes compete on **real AI-related contribution**.

Each node's contribution is quantified into **IntelliPoints**:

- **Training Points**: GPU contribution, uptime, task completion rate
- **Library Points**: stored data volume, reference count, community ratings

## Witness Selection Process

Each consensus cycle (~6 hours):

1. Select candidate set from top 50% of nodes by IntelliPoints
2. Use VRF with previous cycle's last block signature as random seed
3. Randomly select **51 Witness Nodes** on-chain

## Witness BFT Process

For each time slot:

1. Witnesses receive a candidate block from Execution Layer (with Execution QC)
2. All 51 witnesses independently verify the candidate
3. When **≥ 34 witnesses** sign, a **Witness QC** is formed
4. The current **Committer** packages and broadcasts the final block
