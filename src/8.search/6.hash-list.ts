/*
 * Author: Chenzhi <chenzhibupt@qq.com>
 * Date: Oct 10, 2022
 *
 * Hash List
 *
 * There are many methods to generate hash, modulus was used here
 * 
 * We use an array to store data
 * Array index is key (modulus)
 * Link-list on every cell to to solve collision problem
 * Keep first node of every link-list empty to keep operation consistency
 *
 */

const EMPTY = -1;

class Cell {
  public constructor(public data = EMPTY) {}
  public next: Cell | null = null;
}

class HashList {
  public constructor(private MAXSIZE = 12) {
    this.init();
  }

  private list: Cell[] = [];

  private init(): void {
    for (let i = 0; i < this.MAXSIZE; i++) {
      this.list[i] = new Cell();
    }
    
  }

  private hash(): number {
    return 0;
  }

  private insert(data: number): void {}

  private remove(data: number): void {}

  private isExist(data: number): boolean {
    return false;
  }
}

export default HashList;
