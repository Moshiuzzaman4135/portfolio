export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  publishDate: string;
  readTime: number;
  tags: string[];
  thumbnail?: string;
}

export const articles: Article[] = [
  {
    id: 'enhancing-splunk-acm-icdis',
    title: 'Enhancing Splunk for Machine Data Analytics',
    description:
      'Conference paper recap covering data governance, pipeline optimisation, and observability practices adopted at Tiger IT for national-scale telemetry.',
    content: `
# Enhancing Splunk for Machine Data Analytics

This article summarises my ACM ICDIS 2023 conference paper on optimising Splunk for petabyte-scale machine data analytics. The full paper is available via the ACM Digital Library.

## Why We Revisited Splunk Architecture

Operating national identity and security platforms requires ingesting billions of log lines every day. We faced three core challenges:

1. **Ingestion bottlenecks** when onboarding new data sources.
2. **Fragmented governance** around knowledge objects, leading to duplicated alerts and dashboards.
3. **Difficult hand-offs** between SOC, NOC, and platform engineering teams.

## Architectural Enhancements

### Smart Data Onboarding

We introduced a Kafka-based landing zone with schema validation and dynamic sourcetypes before pushing to Splunk indexers. This reduced onboarding time from weeks to days.

### Managed Knowledge Objects

A Git-backed configuration service now stores searches, macros, and dashboards. Engineers submit pull requests that trigger automated validation and Splunk API tests before promotion.

### Insight Workflows

Dashboards are bundled with recommended runbooks. Operators can jump directly to Jupyter notebooks or Grafana panels for deep dives, keeping context between teams.

## Outcomes

- 38% faster mean-time-to-detect for production anomalies.
- 22% reduction in infrastructure spend by tuning hot/warm bucket policies.
- Clear ownership of alerts and dashboards across three operations teams.

## Looking Ahead

We are extending the framework with anomaly detection (via Prophet) and real-time quality scoring for new data sources. The reference implementation is being adapted for other telemetry stacks beyond Splunk.

> 📄 **Reference**: ACM ICDIS 2023, DOI: [10.1145/3723178.3723272](https://dl.acm.org/doi/10.1145/3723178.3723272)
    `,
    publishDate: '2023-12-12',
    readTime: 10,
    tags: ['Observability', 'Splunk', 'Conference', 'Data Engineering'],
  },
  {
    id: 'scalable-ml-pipelines',
    title: 'Building Scalable ML Pipelines with FastAPI and Kubernetes',
    description:
      'A comprehensive guide to designing and deploying production-grade machine learning pipelines using modern cloud-native technologies.',
    content: `
# Building Scalable ML Pipelines with FastAPI and Kubernetes

In this article, we'll explore the architecture and implementation details of building scalable machine learning pipelines that can handle production workloads.

## Introduction

Machine learning models in production require robust infrastructure that can handle:
- High-throughput inference requests
- Model versioning and rollback capabilities
- Monitoring and observability
- Auto-scaling based on load

## Architecture Overview

Our architecture consists of several key components:

1. **FastAPI Services**: Lightweight, high-performance API servers
2. **Redis Queue**: Message broker for asynchronous processing
3. **Celery Workers**: Distributed task execution
4. **PostgreSQL**: Persistent data storage
5. **Kubernetes**: Container orchestration

## Implementation Details

### FastAPI Service Layer

\`\`\`python
from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel

app = FastAPI()

class InferenceRequest(BaseModel):
    image_url: str
    model_version: str

@app.post("/predict")
async def predict(request: InferenceRequest, background_tasks: BackgroundTasks):
    # Queue inference task
    task = queue_inference.delay(request.image_url, request.model_version)
    return {"task_id": task.id}
\`\`\`

### Kubernetes Deployment

We use Kubernetes for orchestration with horizontal pod autoscaling:

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ml-inference
spec:
  replicas: 3
  selector:
    matchLabels:
      app: ml-inference
  template:
    metadata:
      labels:
        app: ml-inference
    spec:
      containers:
      - name: api
        image: ml-inference:latest
        resources:
          requests:
            memory: "512Mi"
            cpu: "500m"
          limits:
            memory: "2Gi"
            cpu: "2000m"
\`\`\`

## Monitoring and Observability

Implementing comprehensive monitoring is crucial for production ML systems. We use Prometheus for metrics collection and Grafana for visualization.

## Conclusion

Building scalable ML pipelines requires careful consideration of infrastructure, architecture, and operational concerns. The combination of FastAPI, Redis, and Kubernetes provides a robust foundation for production ML systems.
    `,
    publishDate: '2024-10-15',
    readTime: 12,
    tags: ['Machine Learning', 'FastAPI', 'Kubernetes', 'MLOps', 'Python'],
  },
  {
    id: 'distributed-face-recognition',
    title: 'Distributed Face Recognition at Scale',
    description:
      'Lessons learned from building a national-scale face recognition system processing 1.2M+ embeddings with high accuracy and low latency.',
    content: `
# Distributed Face Recognition at Scale

This article shares insights from building and deploying a large-scale face recognition system for national identity verification.

## The Challenge

Our system needed to:
- Process 1.2M+ facial embeddings
- Achieve sub-second query times
- Maintain high accuracy (>95%)
- Scale horizontally

## Solution Architecture

### Embedding Storage

We used a combination of PostgreSQL with pgvector extension and Redis for caching:

\`\`\`python
import numpy as np
from pgvector.psycopg2 import register_vector

# Store embeddings with pgvector
conn = psycopg2.connect(database="frs")
register_vector(conn)

cur = conn.cursor()
embedding = np.random.rand(512)
cur.execute("INSERT INTO embeddings (vector) VALUES (%s)", (embedding,))
\`\`\`

### Clustering Strategy

We implemented hierarchical clustering to reduce search space:

1. **Coarse clustering**: 1000 clusters using K-means
2. **Fine-grained search**: Within-cluster ANN search
3. **Re-ranking**: Top-K candidates verification

## Performance Optimization

Key optimizations that improved our system:

- **Batch processing**: Process multiple queries simultaneously
- **GPU acceleration**: Use FAISS for vector similarity search
- **Caching layer**: Redis cache for frequently accessed embeddings
- **Load balancing**: Distribute queries across worker nodes

## Results

After optimization:
- Query latency: <200ms (p95)
- Throughput: 10,000 queries/second
- Accuracy: 97.3% @ FAR 0.01%

## Lessons Learned

1. Start with simple solutions and iterate
2. Profile before optimizing
3. Monitor everything in production
4. Plan for failure and implement graceful degradation
    `,
    publishDate: '2024-09-28',
    readTime: 15,
    tags: ['Computer Vision', 'Face Recognition', 'Distributed Systems', 'Python'],
  },
  {
    id: 'llm-production-tips',
    title: 'Production-Ready LLM Applications: Best Practices',
    description:
      'Practical tips and strategies for deploying Large Language Models in production environments with reliability and cost-efficiency.',
    content: `
# Production-Ready LLM Applications: Best Practices

Deploying LLM-based applications in production comes with unique challenges. This article covers best practices learned from building Kindermate.

## Key Considerations

### 1. Prompt Engineering

Effective prompts are crucial:

\`\`\`python
def create_prompt(context: str, query: str) -> str:
    return f"""You are an educational assistant.

Context: {context}

User Question: {query}

Provide a clear, accurate answer suitable for students.
Answer:"""
\`\`\`

### 2. Response Validation

Always validate LLM outputs:

\`\`\`python
def validate_response(response: str) -> bool:
    # Check length
    if len(response) < 10 or len(response) > 2000:
        return False

    # Check for harmful content
    if contains_harmful_content(response):
        return False

    return True
\`\`\`

### 3. Cost Management

Strategies to control costs:
- Implement caching for common queries
- Use smaller models for simple tasks
- Batch similar requests
- Set rate limits per user

### 4. Monitoring and Logging

Track important metrics:
- Response time
- Token usage
- Error rates
- User satisfaction scores

## Architecture Pattern

\`\`\`
User Request → Rate Limiter → Cache Check → LLM Service → Validation → Response
\`\`\`

## Conclusion

Building production LLM applications requires careful attention to reliability, cost, and user experience. These best practices provide a solid foundation.
    `,
    publishDate: '2024-10-01',
    readTime: 10,
    tags: ['LLM', 'AI', 'Production', 'Best Practices', 'Python'],
  },
];
