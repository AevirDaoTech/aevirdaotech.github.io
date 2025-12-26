---
sidebar_position: 3
---

# AI Tasks & Data API

## AI Task Types

Aevir supports various AI task categories:

### Inference Tasks

- Text generation and chat
- Image generation
- Code completion
- Custom model inference

### Training Tasks

- Model fine-tuning
- Distributed training
- Reinforcement learning

### Data Tasks

- Data preprocessing
- Embedding generation
- Knowledge base indexing

## API Overview

### Submitting Tasks

```javascript
// Pseudocode example
const task = {
  type: "inference",
  model: "model-id",
  input: { prompt: "Hello, world!" },
  payment: { amount: "0.01", token: "AUV" },
};
const result = await aevir.submitTask(task);
```

### Querying Results

```javascript
// Pseudocode example
const status = await aevir.getTaskStatus(taskId);
const result = await aevir.getTaskResult(taskId);
```

## Data Access

- Query available datasets and models
- Access knowledge bases for RAG
- Retrieve embeddings and indexes
