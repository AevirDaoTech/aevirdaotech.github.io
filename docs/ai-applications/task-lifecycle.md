---
sidebar_position: 2
---

# AI Task Lifecycle

Whether training or inference, an AI task on Aevir generally goes through five stages:

## 1. Create

A user or contract defines an AI task, typically including:

- **Task type**: training / inference / evaluation / data processing
- **Model info**:
  - Training: base model ID, target model ID, training config
  - Inference: model ID and version
- **Data info**: Dataset identifier or small inline input (prompt / text)
- **QoS requirements**: Max latency, minimum compute / VRAM requirements
- **Economic parameters**: Budget cap (maxBudgetAEV), pricing mode

Once created, the task is recorded on-chain with a unique **task ID**.

## 2. Schedule / Assign

Scheduling considers:

- **Node capability match**: GPU/storage meets job requirements
- **Current load & queue state**: Load balancing across nodes
- **Contribution & reputation**: Prefer nodes with higher IntelliPoints

Output: Task assigned to one or more ICNs / inference nodes, recorded on-chain.

## 3. Execute & Monitor

During execution:

- Nodes consume compute off-chain, read data, complete training / inference
- **Heartbeat / progress reporting**: Periodically log node liveness and job progress
- **SLA monitoring**: Failing to finish within agreed window harms node reputation

## 4. Submit & Verify

After completion, nodes submit results and trigger verification:

- **Training results**: Storage URI of model weights, evaluation metrics (loss, accuracy)
- **Inference results**: Outputs (potentially partially on-chain for privacy)
- **Verification methods**: Contract checks, multi-node sampling, or third-party verifiers

## 5. Settle & Reward

Once verification passes:

- Job fees are deducted from the requester's account
- Rewards distributed to:
  - Nodes that executed the job (compute contributors)
  - Nodes that provided data/knowledge (content contributors)
  - Upper-layer protocol / app (platform share)
- IntelliPoints updated for future elections and rewards
