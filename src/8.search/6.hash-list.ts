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

  private hash(data: number): number {
    return Math.abs(data % this.MAXSIZE);
  }

  public insert(data: number): void {
    const hash = this.hash(data);
    let prev = this.list[hash];
    while (prev.next) {
      if (prev.data === data) return; // already exists
      prev = prev.next;
    }
    prev.next = new Cell(data);
  }

  public remove(data: number): void {
    const hash = this.hash(data);
    let prev = this.list[hash];
    let curr = prev.next;
    while (curr) {
      if (curr.data === data) break;
      prev = curr;
      curr = curr.next;
    }
    if (!curr) return; // not exist
    prev.next = curr.next;
  }

  public isExist(data: number): boolean {
    const hash = this.hash(data);
    let curr = this.list[hash].next;
    while (curr) {
      if (curr.data === data) return true;
      curr = curr.next;
    }
    return false;
  }
}

export default HashList;

const MAXSIZE = 12;
const list = new HashList(MAXSIZE);

for (let i = 0; i < MAXSIZE; i++) {
  list.insert(i * 5);
}

console.log(`Is 5 exists? ${list.isExist(5)}`);
console.log(`Is 20 exists? ${list.isExist(20)}`);
console.log(`Is 14 exists? ${list.isExist(14)}`);
console.log(`Is -14 exists? ${list.isExist(-14)}`);
console.log(`Is 55 exists? ${list.isExist(55)}`);

console.log('Remove 55.');
list.remove(55);
console.log(`Is 55 exists? ${list.isExist(55)}`);
