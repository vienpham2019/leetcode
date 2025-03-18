/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
 /**
    Bidirectional Graph Representation:
      Convert the given directed roads into an undirected graph (adjacency list).
      Mark original directed edges so we know which edges need reordering.
    Depth-First Search (DFS) or Breadth-First Search (BFS) Traversal:
      Start from city 0 and explore all its neighbors.
      Count how many edges need to be reversed to reach 0.
    
    Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
    neightbor = {0:[1,4],1:[0,3],3:[1,2],2:[3],4:[0,5],5:[4]}
    direction = ['0-1','1-3','2-3','4-0','4-5']
  */
var minReorder = function(n, connections) {
    let neightbors = new Map()
    let direction = new Set()

    for(let [start , end] of connections){
        if(!neightbors.has(start)) neightbors.set(start, [])
        if(!neightbors.has(end)) neightbors.set(end, [])
        neightbors.get(end).push(start)
        neightbors.get(start).push(end)
        direction.add(`${start}-${end}`)
    }

    let changes = 0 
    let visited = new Set()
    let queue = [0]

    while(queue.length){
        let node = queue.shift()
        visited.add(node)

        for(let neightbor of neightbors.get(node)){
            if(!visited.has(neightbor)){
                if(direction.has(`${node}-${neightbor}`)){
                    changes++
                }
                queue.push(neightbor)
            }
        }
    }
    return changes
};