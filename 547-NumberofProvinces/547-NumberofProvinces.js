/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    let n = isConnected.length;
    let visited = new Set();
    let provinces = 0;

    function dfs(city) {
        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (isConnected[city][neighbor] === 1 && !visited.has(neighbor)) {
                visited.add(neighbor);
                dfs(neighbor);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            provinces++;
            visited.add(i);
            dfs(i);
        }
    }

    return provinces;
};
