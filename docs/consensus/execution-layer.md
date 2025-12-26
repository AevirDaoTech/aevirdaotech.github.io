---
sidebar_position: 1
---

# Execution Layer Consensus: PoS + BFT

The Execution Layer is Aevir's high-speed engine, designed to handle all logic that requires fast response with sub-second confirmation times.

## Execution Committee

- Composed of **21 high-performance execution nodes**
- Nodes enter the committee by staking $AEV and ranking by stake amount
- Uses **PoS + BFT** consensus mechanism

## How BFT Consensus Works

The consensus process is similar to classic BFT:

1. One leader proposes a block
2. Other nodes vote on the proposal
3. When more than 2/3 of nodes sign, an **Execution QC (Quorum Certificate)** is formed

## Transaction Flow

1. Users submit transactions or AI task requests via wallet / DApp
2. The Execution Layer leader collects transactions and builds a block proposal
3. 21 execution nodes vote using BFT:
   - If ≥ 2/3 sign, the block is confirmed at the execution layer
4. Users receive a "pre-confirmation" response within hundreds of milliseconds

## Why This Design?

- Having a small set of economically bonded, high-performance nodes greatly reduces communication overhead
- Enables almost Web2-level latency
- Provides excellent real-time UX for AI applications, especially inference tasks
