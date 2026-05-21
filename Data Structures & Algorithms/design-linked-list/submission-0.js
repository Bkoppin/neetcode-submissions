class ListNode {
    /**
     * @constructor
     * @param {number}
     * @param {ListNode|null}
     */
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MyLinkedList {
    constructor() {
        this.head = new ListNode(0);
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        let cur = this.head;
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }
        return cur;
    }
    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if(index >= this.size) {
            return -1
        }

        return this.getPrev(index).next.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        this.addAtIndex(0, val);
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        this.addAtIndex(this.size, val);
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if(index > this.size) {
            return;
        }
        let prev = this.getPrev(index);
        let node = new ListNode(val, prev.next)
        prev.next = node
        this.size++
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if(index >= this.size) {
            return;
        }
        let prev = this.getPrev(index)
        prev.next = prev.next.next;
        this.size--;
    }
}
