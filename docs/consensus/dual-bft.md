---
sidebar_position: 3
---

# Dual Finality (Dual BFT)

A key innovation of Aevir is **Dual BFT** protection:

> For any transaction to be truly "on-chain", it must pass two BFT checkpoints: Execution Layer + Witness Layer.

## Security Properties

### Execution-layer Misbehavior Cannot Directly Alter Final State

Even if an Execution Layer leader tries to include invalid or malicious operations, the 51 witnesses will still independently verify and vote on the data. If something is wrong, the block will not receive a Witness QC and will not enter the final chain state.

### The Block Production Layer is Fault-tolerant

If a Committer suddenly goes offline, the other witnesses have already reached BFT consensus, so the protocol can automatically move to the next Committer candidate, ensuring continuous block production.

### Attack Costs Grow Exponentially

An attacker wishing to rewrite history or double-spend must control a majority of the Execution Committee _and_ a supermajority of Witness nodes in the BFT process at the same time—far more expensive than attacking a traditional single-layer consensus chain.

## Summary

- **Execution QC**: guarantees that "this transaction's execution is agreed upon by a small, high-performance committee"
- **Witness QC**: guarantees that "a much larger, more decentralized set of nodes also attests to this transaction"

Together, they form Aevir's dual defense line.
