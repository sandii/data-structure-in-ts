/*
 * Author: Chenzhi <chenzhibupt@qq.com>
 * Date: Sep 19, 2022
 *
 * Adjacency Matrix
 *
 * - Using an array to store vertexes
 * - Using an matrix to store arcs
 *
 */

class AdjacencyMatrix {
  protected vertex: string[] = [];
  protected arc: number[][] = [];
  protected vertexNum = 0;
  protected arcNum = 0;

  public constructor(vStr: string, aStr: string) {
    this.initVertext(vStr);
    this.initArc(aStr);
  }

  private initVertext(vStr: string): void {
    this.vertex = vStr.split('');
    this.vertexNum = vStr.length;
  }

  private initArc(aStr: string): void {
    // init matrix
    for (let i = 0; i < this.vertexNum; i++) {
      this.arc[i] = [];
      for (let j = 0; j < this.vertexNum; j++) {
        this.arc[i][j] = i === j ? 0 : Infinity;
      }
    }

    const arcs = aStr.split(',');
    this.arcNum = arcs.length;

    arcs.forEach(subStr => {
      const [i, j, weight] = subStr.split('-');
      this.arc[Number(i)][Number(j)] = Number(weight);
    });
  }

  public printVertex(): void {
    console.log(this.vertex);
  }

  public printArc(): void {
    for (let i = 0; i < this.vertexNum; i++) {
      for (let j = 0; j < this.vertexNum; j++) {
        const weight = this.arc[i][j];
        if (weight === 0 || weight === Infinity) continue;
        console.log(
          `${this.vertex[i]} -> ${this.vertex[j]}: ${weight}`,
        );
      }
    }
  }
}

export default AdjacencyMatrix;
