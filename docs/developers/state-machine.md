---
sidebar_position: 1
---

# Aevir State Machine & Transaction Model

## State Machine Overview

Aevir's state machine is the core component that processes transactions and maintains the global state of the network.

### Key Characteristics

- **Deterministic Execution**: Same inputs always produce same outputs
- **EVM-Compatible**: Supports standard Ethereum smart contracts
- **AI-Extended**: Additional opcodes and precompiles for AI operations

## Transaction Model

### Transaction Types

1. **Standard Transactions**: Token transfers, contract calls
2. **AI Task Transactions**: Inference requests, training submissions
3. **Governance Transactions**: Proposals, votes, parameter changes
4. **Node Operations**: Registration, staking, attestation

### Transaction Lifecycle

1. **Submission**: User signs and broadcasts transaction
2. **Mempool**: Transaction enters pending pool
3. **Execution**: Execution nodes process the transaction
4. **Confirmation**: Block Production Layer finalizes the block
5. **Finality**: Transaction becomes irreversible

## State Components

- **Account State**: Balances, nonces, contract code
- **AI State**: Task queues, model registries, contribution scores
- **Governance State**: Proposals, votes, parameters
