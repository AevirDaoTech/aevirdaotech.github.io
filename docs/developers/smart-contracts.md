---
sidebar_position: 2
---

# Smart Contracts & Virtual Machine

## Virtual Machine

Aevir uses an EVM-compatible virtual machine with AI-specific extensions.

### Compatibility

- Standard Solidity contracts work out of the box
- Existing Ethereum tooling (Hardhat, Foundry, etc.) is supported
- Web3.js and ethers.js libraries are compatible

### AI Extensions

- **AI Precompiles**: Optimized operations for AI tasks
- **Extended Opcodes**: Additional instructions for AI-specific operations
- **Native AI Calls**: Direct integration with AI task scheduling

## Smart Contract Development

### Getting Started

1. Set up your development environment (Hardhat/Foundry)
2. Configure network settings for Aevir
3. Write and test your contracts locally
4. Deploy to Aevir testnet

### Best Practices

- Use established patterns (OpenZeppelin, etc.)
- Thoroughly test before mainnet deployment
- Consider upgrade patterns for long-lived contracts
- Audit critical contracts before deployment

## AI-Integrated Contracts

Contracts can interact with Aevir's AI layer:

- Submit inference requests
- Register as AI service providers
- Handle AI task callbacks
- Manage AI-related payments
