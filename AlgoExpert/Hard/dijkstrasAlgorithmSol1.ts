// O(v^2 + e) time | O(v) space
// v = number of vertices
// e = number of edges in the input array
export function dijkstrasAlgorithm(start: number, edges: number[][][]) {
  const numberOfVertices = edges.length;

  const minDistances: number[] = [];
  for (let i = 0; i < numberOfVertices; i++) {
    minDistances.push(Infinity);
  }
  minDistances[start] = 0;

  const visited = new Set<number>();

  while (visited.size != numberOfVertices) {
    const [vertex, currentMinDistance] = getVertexWithMinDistance(minDistances, visited);

    if (currentMinDistance === Infinity) break;

    visited.add(vertex);

    for (const edge of edges[vertex]) {
      const [destination, distanceToDestination] = edge;

      if (visited.has(destination)) continue;

      const newPathDistance = currentMinDistance + distanceToDestination;
      const currentDestinationDistance = minDistances[destination];
      if (newPathDistance < currentDestinationDistance) {
        minDistances[destination] = newPathDistance;
      }
    }
  }
  return minDistances.map(x => (x === Infinity ? -1 : x));
}

function getVertexWithMinDistance(distances: number[], visited: Set<number>) {
  let currentMinDistance = Infinity;
  let vertex = -1;

  for (const [vertexIdx, distance] of distances.entries()) {
    if (visited.has(vertexIdx)) continue;

    if (distance <= currentMinDistance) {
      vertex = vertexIdx;
      currentMinDistance = distance;
    }
  }
  return [vertex, currentMinDistance];
}
