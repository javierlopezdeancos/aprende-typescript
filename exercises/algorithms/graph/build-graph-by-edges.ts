import { EdgeType } from './edge-type';
import { GraphType } from './graph-type';

export const buildGraphByEdges = (edges: EdgeType[]): GraphType => {
  const graph: GraphType = {};

  for (const edge of edges) {
    const [a, b] = edge;
    const aInGraph = a in graph;
    const bInGraph = b in graph;

    if (!aInGraph) {
      graph[a] = [];
    }

    if (!bInGraph) {
      graph[b] = [];
    }

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};
