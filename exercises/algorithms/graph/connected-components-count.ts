import type { GraphType } from './graph-type';
import { getProperty } from './get-property';

const exploreNodeInGraph = (node: string, graph: GraphType) => {
  const neighbors = getProperty(node, graph);

  for (const neighbor of neighbors) {
  }
};

export const connectedComponentsCount = (graph: GraphType) => {
  for (const node in graph) {
    if (Object.prototype.hasOwnProperty.call(graph, node)) {
      exploreNodeInGraph(node, graph);
    }
  }
};
