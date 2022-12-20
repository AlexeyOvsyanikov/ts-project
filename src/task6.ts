/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-namespace */

export namespace List {
  export interface Node<T> {
    value: T;
    next: Node<T> | null;
  }

  export class LinkedList<T> {
    private _head: Node<T> | null = null;
    private _tail: Node<T> | null = null;
    private _length = 0;

    [Symbol.iterator]() {
      const done = {
        done: true,
        value: 0,
      };

      let temp = this._head;

      return {
        next: () => {
          if (this._length === 0 || !temp) {
            return done;
          }

          const v = temp.value;
          temp = temp.next;

          return {
            done: false,
            value: v,
          };
        },
        return: () => {
          return { done: true, value: 0 };
        },
      };
    }

    public get length(): number {
      return this._length;
    }

    public add(value: T): void {
      const node: Node<T> = {
        value,
        next: null,
      };

      if (this.length === 0) {
        this._head = node;
        this._tail = node;
      } else if (this._tail) {
        this._tail.next = node;
        this._tail = node;
      }

      this._length += 1;
    }

    public plus(b: LinkedList<T>): LinkedList<number> | null {
      if (!this._head || !b._head) {
        return null;
      }

      // 6,7,8   =>  876
      // 4,5,6,7 => 7654
      // ===============
      // 0358    => 8530

      const result: LinkedList<number> = new LinkedList<number>();

      let increaseNextOn = 0;
      let currentNode: Node<T> | null = null;
      let currentBNode: Node<T> | null = null;

      if (this.length > b.length) {
        currentNode = this._head;
        currentBNode = b._head;
      } else {
        currentNode = b._head;
        currentBNode = this._head;
      }

      while (currentNode) {
        const leftValue = Number(currentNode.value);
        const rightValue = Number(currentBNode?.value);
        const plus = leftValue + rightValue;

        if (Number.isNaN(plus)) {
          if (!leftValue) {
            result.add(rightValue + increaseNextOn);
          } else {
            result.add(leftValue + increaseNextOn);
          }

          currentNode = currentNode.next;
          currentBNode = currentBNode?.next ?? null;
          increaseNextOn = 0;
          continue;
        }

        const mod = (plus + increaseNextOn) % 10;

        if ((mod === 0 && plus > 9) || (mod !== 0 && plus > 9)) {
          result.add(mod);
          increaseNextOn = 1;
        } else {
          result.add(plus);
          increaseNextOn = 0;
        }

        currentNode = currentNode.next;
        currentBNode = currentBNode?.next ?? null;
      }

      if (increaseNextOn) {
        result.add(increaseNextOn);
      }

      return result;
    }
  }
}
