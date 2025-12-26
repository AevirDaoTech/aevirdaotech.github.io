---
sidebar_position: 3
---

# PoIC: Proof of Intelligent Contribution

The Block Production Layer uses Aevir's original **PoIC (Proof of Intelligent Contribution)**. The core idea:

> Instead of only competing on raw compute (PoW) or capital (PoS), nodes compete on **real AI-related contribution**.

## IntelliPoints

Each node's contribution is quantified into **IntelliPoints**, composed of two parts:

### Training Points

- Derived from GPU contribution, uptime, task completion rate, etc.

### Library Points

- Derived from stored data volume, reference count, community ratings and votes

The higher a node's IntelliPoints, the greater its contribution in compute/data/knowledge, and the higher its weight and probability of being selected as a witness in the Block Production Layer.

## Witness Node Election

- Each consensus cycle is roughly **6 hours** (~1280 blocks; parameterizable)
- At the start of each cycle, the protocol:
  1. Selects a candidate set from the top 50% of nodes by IntelliPoints;
  2. Uses a VRF (Verifiable Random Function), with the last block's signature from the previous cycle as the random seed;
  3. Randomly selects **51 Witness Nodes** on-chain in a transparent, verifiable way.

This process runs entirely on-chain and is fully auditable, **eliminating any room for off-chain manipulation**.
