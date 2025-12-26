---
sidebar_position: 3
---

# Submit Your First AI Task

Let's do a full "request → execute → settle" flow with a simple **AI inference task**.

## Step 1: Open the Official Front End / Demo DApp

1. Visit the Aevir DApp
2. Click "Connect Wallet"
3. Select your Aevir wallet in the browser and authorize

## Step 2: Pick a Simple AI Service

Typical categories in the DApp:

- Text generation / chat models
- Image generation
- Code completion
- Other AI services from ecosystem projects

Choose a simple service, e.g.:

- "Text Summarization": condense a passage into a few sentences
- "Q&A Assistant": answer questions for a given passage

## Step 3: Submit the Inference Task

1. Fill in the task form:
   - Input text / question
   - Select a model version (default base model is fine)
2. The page shows an estimated fee (e.g., `0.01 AEV`)
3. Click "Submit / Run"
4. Your wallet pops up for confirmation

**On-chain flow**:

- Your transaction goes to the Aevir Execution Layer
- Execution nodes run the contract and record the task request
- The Block Production Layer witnesses and finalizes the block

## Step 4: Check Task Status and Results

1. After submission, you'll see a **task ID** or **tx hash**
2. View status in the DApp "Tasks / History": Pending → Running → Completed
3. When done: Results show in the DApp (e.g., generated text / image)

## What You've Achieved

You've completed the basic three steps on Aevir:

1. Have an Aevir wallet address and are connected to the network
2. Got testnet $AEV to pay gas and send transactions
3. Finished your first AI task, experiencing the full request-to-settlement flow
