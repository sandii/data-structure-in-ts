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
  public inDegree: number = 0;
}

class ArcNode {
  public adjacency: number = 0;
  public weight: number = 0;
  public next: ArcNode | null = null;
}

class AdjacencyList {
  protected vertex: VertexNode[] = [];
  protected vertexNum = 0;
  protected arcNum = 0;

  public constructor(vStr: string, aStr: string) {
    this.initVertex(vStr);
    this.initArc(aStr);
  }

  private initVertex(vStr: string): void {
    this.vertex = vStr
      .split(',')
      .map(s => new VertexNode(s));
    this.vertexNum = this.vertex.length;
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

      this.vertex[Number(j)].inDegree++;
    });
  }

  public printVertex(): void {
    console.log(this.vertex.map(item => item.data));
  }

  public printArc(): void {
    for (let i = 0; i < this.vertexNum; i++) {
      let next = this.vertex[i].firstArc;
      while (next) {
        const j = next.adjacency;
        console.log(
          `${this.vertex[i].data} -> ${this.vertex[j].data}: ${next.weight}`,
        );
        next = next.next;
      }
    }
  }
}

export default AdjacencyList;
