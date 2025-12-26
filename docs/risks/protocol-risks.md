---
sidebar_position: 2
---

# Protocol & Implementation Risks

## 1. Software Bugs / Vulnerabilities

Aevir spans multiple layers: Consensus, Client implementations, Smart contracts and AI task logic.

Bugs anywhere can cause:

- Fund loss
- State errors
- Outages or reorgs

**Practices:**

- Use officially recommended client versions and SDKs
- Audit and test important contracts before deployment
- Prefer well-audited, widely used open-source components

## 2. Upgrade / Compatibility Risk

Aevir may ship: Performance optimizations, VM upgrades, Security fixes.

If nodes/apps don't update:

- Incompatibility
- Failed transactions or bad state
- Being treated as "outdated" by consensus

**Practices:**

- Subscribe to official tech announcements (GitHub/site/community)
- For production nodes, use safe rollout (staging, backups, rollback)
- Design contracts with upgrade/migration paths (proxies, circuit breakers)

## 3. Legal & Compliance Risks

- Regulations on crypto, mining, data storage, and AI vary by region
- Aevir, as a decentralized network, offers no jurisdictional compliance guarantee

**Practices:**

- Know local laws before running nodes or hosting data
- For personal/sensitive data, comply with privacy rules (e.g., GDPR)
- In sensitive contexts, seek professional legal advice
