/*
 * Author: Chenzhi <chenzhibupt@qq.com>
 * Date: Sep 23, 2022
 *
 * Shortest Path
 * - Find shortest path from start vertex v0 to other vertexes
 *
 * Floyd
 * - Use a matrix cost[i][j] recording cost from i to j (exactly same with arc[i][j])
 * - Use a loop outside trying to find a shortcut vertex: cost[i][shortcut] + cost[shortcut][j] < cost[i][j]
 * - Use a matrix path[i][j] recording shortcut vertex
 * - For example, path[i][j] = k means shortest path is i -> k -> j, then next step check path[k][j]
 *
 * [Strength] Simple and graceful
 * [shortage] It always calculates every vertex to every vertex, time complexity is always n^3
 */

import AdjacencyMatrix from './common/1.adjacency-matrix';


