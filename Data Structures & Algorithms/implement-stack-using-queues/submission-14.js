class MyStack {
    constructor() {
        this.que = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.que.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
        return this.que.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.que[this.que.length - 1]
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.que.length <= 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
