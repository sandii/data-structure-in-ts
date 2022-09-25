/*
 * Author: Chenzhi <chenzhibupt@qq.com>
 * Date: Sep 25, 2022
 *
 * Critical Path
 * - In workflows, there can be some Critical Pathes
 * - Which can decide total time cost of whole process
 * - Reducing Critical Pathes' time cost can shorten whole process
 * 
 * How to represent workflow with Critical Path?
 * - Use arcs to present tasks in workflow
 * - Weight of arc is time of this task will consume
 * - Two vertexes of one arc present start & end moment of this task
 * - Every vertex has its Earliest & Latest time, which is crucial!
 * 
 * What kind of tasks can be call Critical?
 * - 
 * 
 */

import AdjacencyList from './common/2.adjacency-list';

class MyAdjacencyList extends AdjacencyList {
  private queue: number[] = [];
  public removed: number[] = [];
}
