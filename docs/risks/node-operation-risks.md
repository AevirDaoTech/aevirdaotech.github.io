---
sidebar_position: 3
---

# Node Operation Risks

## 1. Slashing Risk

Execution/Witness nodes can be slashed for:

- Double-signing
- Prolonged downtime
- Clear consensus violations

**Consequences:**

- Partial/full stake loss
- Reputation hit, possible exclusion

**Practices:**

- High-availability setup (primary/backup, failover, monitoring/alerts)
- Don't reuse the same key on multiple nodes (avoid accidental double-sign)
- Know consensus rules to avoid accidental slashable actions

## 2. Ops & Hardware Risk

For ICN / content nodes:

- Hardware failures (GPU / disk)
- Power/network outages

These can cause job failures, score drops, reputation loss.

**Practices:**

- Redundancy/backup for critical nodes
- Multi-site backups for important data (weights, indexes)
- Be conservative on yield assumptions; don't assume 100% uptime

## 3. User & Key Security

### Private Key / Seed Exposure

- Phishing sites stealing keys
- Seeds leaked from cloud/chat storage
- Malware/keyloggers

Once leaked, loss is typically irreversible.

**Practices:**

- Never enter seeds into web forms
- Use hardware wallets or secure environments for large holdings
- Use multisig / safes for important addresses

### Phishing & Impersonation

- Fake "official" sites/wallets/DApps
- Fake team accounts asking for keys or transfers

**Practices:**

- Use only official channels for links
- Bookmark trusted DApp entries
- Be skeptical of "high return, zero risk" offers
