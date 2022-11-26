/* eslint-disable no-plusplus */
export interface TNode<T> {
  left: TNode<T> | null;
  right: TNode<T> | null;
  value: T;
  height: number;
}

export class BinaryTree<T> {
  private _root: TNode<T> | null = null;

  public insert(value: T, root: TNode<T> | null = null): void {
    if (this._root === null) {
      const newNode: TNode<T> = {
        left: null,
        right: null,
        value,
        height: 0,
      };

      this._root = newNode;
      return;
    }

    if (root === null) {
      this.insert(value, this._root);
      return;
    }

    const newNode: TNode<T> = {
      left: null,
      right: null,
      value,
      height: 0,
    };

    if (value > root.value) {
      if (root.right !== null) {
        this.insert(value, root.right);
      } else {
        root.right = newNode;
      }
    } else if (value < root.value) {
      if (root.left !== null) {
        this.insert(value, root.left);
      } else {
        root.left = newNode;
      }
    }

    root.height++;
  }

  public isTreeOfBinarySearch(root: TNode<T> | null = null): boolean {
    // debugger;
    if (root === null) {
      if (!this._root?.left || !this._root?.right) {
        return false;
      }

      return this.isTreeOfBinarySearch(this._root);
    }

    const { value, left, right } = root;

    if (left) {
      if (left.value < value) {
        return this.isTreeOfBinarySearch(left);
      }
      return false;
    }

    if (right) {
      if (right.value > value) {
        return this.isTreeOfBinarySearch(right);
      }
      return false;
    }

    return true;
  }
}
