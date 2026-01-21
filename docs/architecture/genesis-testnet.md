---
sidebar_position: 2
---

# Aevir Genesis: Testnet Execution Plan

## Overview

**Aevir Genesis** is the final rehearsal stage before the official launch of the Aevir mainnet. The core objectives of this testnet are to validate the effectiveness of **Proof of Intelligent Contribution (PoIC)** in a real-world physical network environment, test the distributed training capabilities of the **D-MoE** (Decentralized Mixture of Experts) architecture on consumer-grade hardware, and complete pressure testing for **ASH** standardized hardware.

- **Testnet Token:** tAEV
- **Incentive Credit:** AGC (Aevir Genesis Credit)
- **Core Asset:** AGC generated during the testnet will be mapped proportionally to official **AEV** tokens at the mainnet TGE (Token Generation Event).
- **Duration:** Estimated 3-6 months, divided into three phases.

### Core Objectives

- **Consensus Algorithm Validation:** Empirically verify the attack resistance and fairness of reward distribution for PoIC in a real, high-latency global network.
- **Compute Efficiency Benchmarking:** Validate the load balancing capabilities of the D-MoE architecture across physical nodes and determine the compute output curves for ASH standard hosts.
- **Economic Model Stress Test:** Through the production rate of AGC, backtest and calibrate the inflation/emission rate of the mainnet AEV token to ensure scarcity and sell-pressure balance at TGE.
- **Hardware Anchoring Verification:** Validate the uniqueness of Motus NEURON hardware physical identity binding at the L1 level to completely eliminate simulator cheating.

## Technical Architecture & MVP Form

The testnet MVP will fully execute the workflow of: **"Data Ingestion -> NPU Sentinel Cleansing -> GPU Federated Training -> On-chain Verification."**

### Tech Stack

The Aevir testnet utilizes a layered tech stack to ensure heterogeneous hardware compatibility and privacy-preserving computation security:

- **L1 Physical Layer (ASH-P0):** Deep adaptation for AMD ROCm instruction sets, achieving low-level scheduling for Ryzen AI Max 395 heterogeneous triple-cores (CPU+GPU+NPU).
- **L2 Federated Orchestration Layer:** Utilizes the **Flower** framework for node orchestration, training round scheduling, and disconnection management.
- **L3 Edge Computing & Sentinel Mechanism:**
  - **Sentinel:** Runs independently on the **XDNA 2 NPU**, achieving real-time data cleansing and quality authentication with zero power/performance overhead to the main compute task.
  - **Training Engine:** Utilizes a proprietary distributed fine-tuning framework with **ZeRO-2** memory optimization technology to enable local parallelization of models with billions of parameters.
- **L4 Privacy & Security Layer:** Integrates the **Opacus** library to apply Differential Privacy (DP) noise to uploaded gradients.
- **L5 Data Layer:** Local deployment of **LanceDB** vector database to support local RAG (Retrieval-Augmented Generation) enhancements.

### MVP Core Functions

Testnet nodes must run the following core modules:

1. **Sentinel Module:** Uses NPU to "detoxify" and score incoming raw data, generating a data quality proof.
2. **D-MoE Training Module:** Receives Expert model slices distributed by the network and performs local LoRA fine-tuning using the GPU.
3. **PoIC Verification Module:** Generates Zero-Knowledge Proofs (ZKP) containing hardware fingerprints, training Loss curves, and gradient hashes to be submitted for on-chain verification.

## ASH & ASC Hardware Standardization System

The testnet introduces a two-tier standard system to ensure synchronization and stability in federated learning.

### ASH (Aevir Standard Host): Defining the Trusted Baseline

ASH defines "what kind of node host/cluster can be accepted by the network":

- **Hardware Thresholds:** Hard metrics for memory, storage, and network bandwidth.
- **TEE Security Augmentation:** Must activate **TPM 2.0** and a hardware-isolated environment to ensure the PoIC generation process is tamper-proof.
- **Software Baseline:** Unified environment (e.g., Ubuntu 24.04 LTS, specific driver versions, and Docker/containerd runtime).
- **Observability:** Open specified network ports, providing Metrics interfaces and audit logs.
- **ASH Profile:** These requirements are solidified into executable, certifiable configuration files.

### ASC (Aevir Standard Compute): Compute Efficiency Rating

ASC defines the node's "compute acceleration capability category":

- **Compute Form:** Identifies devices as SoC, dGPU, or multi-card/multi-machine topologies.
- **Benchmarking:** Runs a category-specific **Benchmark Suite**.
- **TrainingPoint (Pt) Mapping:** Different hardware power-to-compute ratios are automatically mapped to standard incentive coefficients via benchmarking software.

### ASH-P0 Genesis Specification

To ensure deterministic performance in the early network, only one standard tier, **ASH-P0**, is enabled for mainnet launch. The first certified hardware is the **Motus Neuron NEU-X**.

- **Core Processor:** AMD Ryzen AI Max+ 395 (Heterogeneous architecture, integrated XDNA 2 NPU).
- **Memory:** 128GB LPDDR5X (Unified memory architecture to solve VRAM bottlenecks).
- **Interconnect:** Thunderbolt 4/5 (Supports S-Cluster).
- **Storage:** 2TB NVMe SSD PCIe 4.0.
- **Network:** 10GbE (10-Gigabit Ethernet).
- **OS Baseline:** Ubuntu 24.04 LTS.

### Network Topology: One Machine, One Node

The testnet strictly enforces a **"One Machine, One Node"** topology.

- **Independent Nodes:** Each physical device meeting ASC-P0 standards exists as a single logical node.
- **No Cluster Mode:** Physical cluster aggregation is disabled during the testnet; all gradient aggregation and communication happen at the network layer to verify the independent contribution capability of individual edge devices.

## Admission Process & Whitelist Mechanism

The testnet employs a strict **Permissioned Admission** system, opening only **50 whitelist Operator slots**.

### Five-Step Node Admission

1. **Declaration:** Submit target ASH Profile and ASC Class; bind node identity public key.
2. **Preflight Check:** Run official tools to generate an "Environment Fingerprint," verifying OS, Kernel, drivers, and TPM status.
3. **Compute Calibration:** Complete the ASC Benchmark in the official container to confirm compute category and verify long-term stability via ASH Stability tests.
4. **Compliance Certification:** Upon network verification, an ASH Compliance Certificate is issued, binding node identity, ASH Profile version, ASC Class, and validity period.
5. **Task Activation:** The certificate becomes effective, and the node formally enters the task pool to receive routing.

### Whitelist Audit Standards

Applicants must pass a comprehensive background review by the **DAO Verification Committee**.

1. **Basic Hardware Requirements:**
   - **Hardware Entry:** Must possess Motus Labs officially certified ASC-P0 standard compute units (Ryzen AI Max 395 + 128GB RAM). This is the only physical credential ensuring computation environment homogeneity and PoIC algorithm validity.
   - **Network Environment:** IDC-grade or enterprise-grade dedicated lines with static public IPs, promising 99.9% uptime.
   - **Staking Deposit:** Must complete a specified amount of **tAEV staking** before access as a financial collateral for Service Level Agreements (SLA).

### Recruitment Personas (Choose one of four)

- **Category A: Top Research & Academic Institutions**
  - Target: Global university labs, AI research institutes, or blockchain distributed computing groups.
  - Preference: Academic reputation; ability to provide theoretical optimization for D-MoE or participate in joint academic publications.
- **Category B: Massive Knowledge Base & Data Holders**
  - Target: Entities or individuals with private datasets in vertical industries (Law, Finance, Med, Literature).
  - Preference: Ability to declare "Seed Dataset" categories and scale. These partners receive the highest priority for **LibraryPoint** weight incentives.
- **Category C: Professional Mining Pools & Compute Operators**
  - Target: Traditional crypto mining pools, top cloud compute providers, or asset investors with large-scale IDC deployment capabilities.
  - Preference: Strong capital and maintenance capabilities; commitment to deploying 100+ nodes to ensure a stable compute foundation.
- **Category D: Model Trainers & AI Developers**
  - Target: Teams or individuals with experience in model fine-tuning, prompt engineering, or Agent development.
  - Preference: Rich Linux O&M and AI framework experience; ability to produce actual AI task results via the testnet.

### Global Routing Bonus

To simulate a real-world global AI compute grid, quotas are managed by geography:

- **Quota Allocation:** Asia-Pacific (15), North America (15), Europe (10), Others (10).
- **Priority Weight:** Applicants who fill geographic topology gaps and improve global routing efficiency will receive priority access.

### Node Capacity

1 Whitelist Slot = 1 Operator Entity.

- Minimum Startup Scale: 5 ASH standard machines.
- Maximum Cap: 50 ASH standard machines.
- Estimated Network Scale: 250 - 2,500 physical nodes globally.

## Economic Model Calibration & PoIC Output Mechanism

Testnet incentives total **50,000,000 AGC** (5% of mainnet total). As the sole credential for future AEV rights, all output is based on the PoIC algorithm.

### Incentive Distribution Structure

- **Daily Output:** Fixed release, split based on total network PoIC score weight.
- **Phase Coefficients:** Designed to incentivize nodes to stay online during Turbulence pressure tests:
  - Phase 1 (Ignition): Coefficient 1.0
  - Phase 2 (Consensus): Coefficient 1.5
  - Phase 3 (Turbulence): Coefficient 2.0

### PoIC Score Calculation Logic

A single node's PoIC score ($P$) is a weighted calculation of **TrainingPoint** ($P_t$) and **LibraryPoint** ($P_l$):

**Formula:**

$$P = (w_t P_t^\alpha + w_l P_l^\alpha)^{1/\alpha}$$

**Calculation Example:**

_Assume Node A runs a NEU-X, online 24/7._

1. **TrainingPoint $P_t$ (Weight 60%):**
   - **NPU Contribution:** Sentinel module cleansed 10GB of data, score 98/100. Score: $10 \times 98 = 980$.
   - **GPU Contribution:** Completed 5 Epochs of LoRA fine-tuning. Loss curve is 5% better than network average. Score: $500 \text{ (base)} + 50 \text{ (bonus)} = 550$.
   - **Total $P_t$:** 1,530.
2. **LibraryPoint $P_l$ (Weight 40%):**
   - **Data Hosting:** Node stores the "Law - Civil Code" vertical Expert module.
   - **Service Response:** Responded to 200 retrieval requests from the Knowledge Market.
   - **Total $P_l$:** $300 \text{ (storage)} + 200 \text{ (response)} = 500$.
3. **Final PoIC Weight:**
   - Assuming $\alpha = 1$ (linear), $w_t = 0.6, w_l = 0.4$:
   - $P = 0.6 \times 1,530 + 0.4 \times 500 = 918 + 200 = 1,118$.

Node A will use its weight of 1,118 against the total network score to share the daily AGC pool.

### Slashing & Anti-Cheat Monitoring

The testnet will implement a Slashing mechanism. The following will result in the forfeiture of staked tAEV and the destruction of earned AGC:

- **Downtime:** Failing to submit a heartbeat for 12 consecutive blocks.
- **Data Poisoning:** Sentinel module detects abnormal Loss in submitted gradients.
- **Sybil Attack:** If ASH ID verification does not match the physical serial number on-chain, whitelist status is revoked and the deposit is confiscated.

## Testnet Phase Roadmap

| Phase       | Code Name      | Core Tasks                                                                                                                          | Incentive Weight    | Scale                                      |
| ----------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------------------------------ |
| **Phase 1** | **Ignition**   | Official cold start; fix MotusOS Kernel bugs; validate Ryzen AI Max 395 driver compatibility and Sentinel effectiveness.            | None                | Official nodes & core tech partners (5-10) |
| **Phase 2** | **Consensus**  | Validate PoIC fairness; test S-Cluster gradient aggregation efficiency; enable AGC incentives; launch "Data Cleansing Competition." | 1.0x - 1.5x         | All 50 Whitelist Operators                 |
| **Phase 3** | **Turbulence** | Stress testing. Simulate large-scale network splits, malicious data injection, and high-concurrency inference requests.             | 2.0x + Bug Bounties | All Nodes                                  |

## Onboarding Guide

All whitelist applicants must prepare the following:

1. **ASH ID:** Hardware unique fingerprint generated via Motus tools (bound to CPU/Motherboard SN).
2. **Operator Wallet:** EVM-compatible wallet address supporting the Aevir testnet.
3. **Topology Map:** Connection method for the reporting node's network and cluster.

_The testnet is more than a technical sandbox; it is the solidification of the Aevir community consensus. Through standardized hardware and rigorous PoIC, we ensure a robust, efficient, and decentralized AI compute network at mainnet launch._

## Aevir Genesis Validator Program (AGVP)

_Application Process:_

1. **Submit LOI:** Provide institution/team info, background, and deployment plan ($\ge$ 50 nodes).
2. **KYB/Background Check:** Verification of academic or commercial credentials.
3. **Tech & Fund Verification:** NDA signing; hardware and fund reserve verification.
4. **Agreement & Delivery:** Signing SAFT and Node Operation Agreement; issuance of Whitelist License.
