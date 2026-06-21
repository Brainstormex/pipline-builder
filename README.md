# Pipeline Builder

A visual pipeline builder where you drag nodes onto a canvas, connect them with edges, and submit the graph to a FastAPI backend for validation.

## Project structure

```
├── backend/
│   └── main.py                  # FastAPI app, /pipelines/parse, DAG check
├── frontend/
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── nodes/
│   │   │   ├── BaseNode.js      # Shared node abstraction
│   │   │   ├── inputNode.js
│   │   │   ├── outputNode.js
│   │   │   ├── llmNode.js
│   │   │   ├── textNode.js      # Auto-resize + {{variable}} handles
│   │   │   ├── filterNode.js    # Demo nodes
│   │   │   ├── transformNode.js
│   │   │   ├── apiNode.js
│   │   │   ├── mergeNode.js
│   │   │   └── conditionalNode.js
│   │   ├── App.js               # Root layout
│   │   ├── toolbar.js           # Draggable node palette
│   │   ├── ui.js                # React Flow canvas
│   │   ├── store.js             # Zustand state (nodes, edges)
│   │   ├── submit.js            # Submit pipeline to backend
│   │   ├── draggableNode.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── .gitignore
└── README.md
```

## Features

- **Node abstraction** — reusable `BaseNode` component for all node types
- **Demo nodes** — Filter, Transform, API, Merge, Conditional (plus Input, Output, LLM, Text)
- **Styled UI** — unified toolbar, canvas, and node design
- **Text node** — auto-resizing input with `{{variable}}` handle detection
- **Backend integration** — submit pipeline, get node/edge count and DAG validation

## Prerequisites

- Node.js (LTS)
- Python 3.10+

## Run locally

### Backend

```bash
cd backend
pip install fastapi uvicorn
uvicorn main:app --reload
```

Runs at `http://127.0.0.1:8000`

### Frontend

```bash
cd frontend
npm install
npm start
```

Runs at `http://localhost:3000`

## Usage

1. Drag nodes from the toolbar onto the canvas
2. Connect nodes by dragging from output handles to input handles
3. In a Text node, type `{{variableName}}` to create input handles on the left
4. Click **Submit** to send the pipeline to the backend
5. An alert shows `num_nodes`, `num_edges`, and whether the graph is a DAG

## API

### `GET /`

Health check — returns `{ "Ping": "Pong" }`

### `POST /pipelines/parse`

**Request:**
```json
{
  "nodes": [...],
  "edges": [...]
}
```

**Response:**
```json
{
  "num_nodes": 3,
  "num_edges": 2,
  "is_dag": true
}
```

The backend uses Kahn's algorithm to check if the graph is a directed acyclic graph (no cycles).

## Tech stack

| Layer    | Stack                      |
|----------|----------------------------|
| Frontend | React, React Flow, Zustand |
| Backend  | Python, FastAPI, Uvicorn   |
