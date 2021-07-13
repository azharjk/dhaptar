class DhaptarNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Intantiate like this
 * `new Dhaptar()`
 */
class Dhaptar {
  constructor() {
    this.head = null;
    this._size = 0;
  }

  /**
   * Set the tail of linked list
   *
   * @param {any} node
   */
  set tail(node) {
    this.pop();
    this.push(node);
  }

  /**
   * Get the tail of linked list
   *
   * @returns tail
   */
  get tail() {
    if (this.head == null) {
      return this.head;
    }

    let p = this.head;
    while (p.next != null) {
      p = p.next;
    }
    return p;
  }

  /**
   * Get the size or length of linked list
   *
   * @returns size
   */
  get size() {
    if (this.head == null) {
      return 0;
    }

    let p = this.head;
    while (p != null) {
      p = p.next;
      this._size++;
    }
    return this._size;
  }

  // This is necessary?
  /**
   * Clear the entire linked list
   *
   * @returns
   */
  clear() {
    this.head = null;
    this._size = 0;
  }

  /**
   * Removed the tail of linked list
   *
   * @returns
   */
  pop() {
    if (this.head != null) {
      if (this.head.next == null) {
        this.head = null;
      }
      else {
        let p = this.head;
        while (p.next.next != null) {
          p = p.next;
        }
        p.next = null;
      }
    }
  }

  /**
   * Insert data to the linked list
   *
   * @param {any} data
   */
  push(data) {
    const temp =
      data instanceof DhaptarNode
      ? data
      : new DhaptarNode(data);
    if (this.head == null) {
      this.head = temp;
    }
    else {
      let p = this.head;
      while (p.next != null) {
        p = p.next;
      }
      p.next = temp;
    }
  }

  /**
   * Get a specified data
   *
   * @param {any} index
   * @returns
   */
  at(index) {
    if (this.head == null) {
      throw new Error('Dhaptar head is empty');
    }

    let p = this.head;
    for (let i = 0; i < index; i++) {
      if (p.next == null) {
        throw new Error('Dhaptar accessor index out of bounds');
      }
      p = p.next;
    }
    return p;
  }
}
