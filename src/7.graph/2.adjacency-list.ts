/*
 * Author: Chenzhi <chenzhibupt@qq.com>
 * Date: Sep 20, 2022
 *
 * Adjacency List
 *
 * - An array stores vertexes
 * - And every cell contains a link list which stores related arcs
 *
 * - [ADVANTAGE] Save space when graph is spare
 * - [SHORTAGE] Link list is not as convenient as array
 *
 */

class VertexNode {
  public constructor(public data: string = '') {}
  public firstArc: ArcNode | null = null;
}

class ArcNode {
  public adjacency: number = 0;
  public weight: number = 0;
  public next: ArcNode | null = null;
}

class AdjacencyList {
  private vertex: VertexNode[] = [];
  private vertexNum = 0;
  private arcNum = 0;
}
