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

  private visited: boolean[] = [];
  private queue: number[] = [];

  public constructor(vStr: string, aStr: string) {
    this.initVertext(vStr);
    this.initArc(aStr);
  }

  private initVertext(vStr: string): void {
    this.vertexNum = vStr.length;
    this.vertex = vStr
      .split('')
      .map(s => new VertexNode(s));
  }

  private initArc(aStr: string): void {
    const arr = aStr.split(',');
    this.arcNum = arr.length;

    arr.forEach(str => {
      const [i, j, weight] = str.split('-');
      const vertexItem = this.vertex[Number(i)];
      if (!vertexItem) return;

      const arc = new ArcNode();
      arc.adjacency = Number(j);
      arc.weight = Number(weight);
      arc.next = vertexItem.firstArc;

      vertexItem.firstArc = arc;
    });
  }

  public traverseDFS(): void {}
  
  private visitDFS(): void {}

  public traverseBFS(): void {}
  
  private visitBFS(): void {}
}
