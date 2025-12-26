---
sidebar_position: 5
---

# Security Assumptions & Attack Models

## Security Through Dual Consensus

Aevir's dual-layer architecture provides multiple layers of security:

### Economic Security

- Execution nodes must stake significant $AEV to participate
- Malicious behavior results in slashing of staked tokens
- Economic incentives align with honest behavior

### Cryptographic Security

- VRF (Verifiable Random Function) ensures unpredictable witness selection
- BFT consensus requires 2/3+ honest participants in each layer
- All consensus decisions are cryptographically verifiable

### Decentralization Security

- 51 witness nodes from diverse contributors
- Selection based on real contribution (IntelliPoints), not just capital
- Regular rotation prevents long-term collusion

## Attack Resistance

### Double-Spend Attack

Requires controlling:

- Majority of Execution Committee (>14 of 21 nodes)
- AND supermajority of Witnesses (>34 of 51 nodes)

The combined cost makes this attack economically infeasible.

### Long-Range Attack

- Deterministic scheduling with VRF randomness
- Historical blocks are sealed by both Execution QC and Witness QC
- Rewriting history requires breaking both consensus layers

### Sybil Attack

- IntelliPoints based on real contribution, not just identity
- Hardware attestation for training nodes
- Storage attestation for content nodes
