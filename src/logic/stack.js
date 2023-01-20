export default class MyStack {
  constructor(data) {
    this.items = data
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    if (this.items.length == 0) {
      return null;
    }

    return this.items[this.items.length - 1]
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.size() == 0;
  }
}
