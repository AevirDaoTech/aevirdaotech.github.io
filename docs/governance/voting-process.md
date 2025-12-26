---
sidebar_position: 2
---

# veAEV Governance Process

## Voting Mechanism

Aevir employs a hybrid voting mechanism to prevent plutocracy. Voting power is calculated via:

```
Stake (AEV) + Time (Lock) = Power (veAEV)
```

- **Logarithmic Weighting**: The influence of capital is subject to diminishing returns, protecting the voice of smaller contributors.
- **Scope**: Votes cover parameter adjustment, election of committee members, and ratification of protocol upgrades (AIPs).

## Proposal Lifecycle

The governance process follows a strict, verifiable lifecycle:

### 1. Proposal

Any veAEV holder meeting the threshold can submit a proposal regarding economic models or technical upgrades.

### 2. Review

Proposals undergo pre-review by the relevant committee (e.g., Technology Committee for code changes).

### 3. Voting

The community casts veAEV votes within a specific window.

### 4. Timelock

Passed proposals enter a mandatory timelock period for security verification.

### 5. Execution

Approved parameters are automatically updated via smart contracts, or executed by the Governance Committee for off-chain actions.
