---
sidebar_position: 4
---

# VRF Randomness & Rotation Mechanism

## Deterministic Block Scheduling

On many traditional blockchains, "who produces the next block" requires complex negotiation, competition, or multiple message rounds, which can cause:

- Block production delays
- Frequent forks
- Resource waste

Aevir's Block Production Layer uses a **Deterministic Shuffling Schedule**.

## How It Works

1. At the start of each 6-hour cycle, the system randomly selects 51 witnesses via VRF
2. Using the same random seed, it shuffles the 51 witnesses to get an ordered list
3. The entire cycle is divided into fixed-length time slots (e.g., 20 seconds each)
4. The shuffled order is mapped directly to these slots:
   - 1st witness → 1st time slot
   - 2nd witness → 2nd slot
   - and so on

**Who produces a block and when is predetermined in the schedule.**

## Block Production Process

When it's a witness's turn:

- It packages a block according to the protocol and broadcasts it
- Other witnesses verify and sign, forming the Witness QC

## Handling Failures

If a witness goes offline or times out during its slot:

- There is no competing for the same slot
- The system simply moves to the next slot and the next witness takes over
- This greatly reduces consensus complexity and fork probability
