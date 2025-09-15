class HashMapNode {
    key = undefined;
    value = undefined;
    next = null;
    
    constructor(key,value) {
        this.key = key;
        this.value = value
    }
}

class HashMap {
    static LOAD_FACTOR = 0.75;
    capacity = 16;    
    _grow_at = Math.round(this.capacity * HashMap.LOAD_FACTOR);
    _size = 0;

    constructor() {
        this.buckets = new Array(this.capacity);
    }

    hash(key) {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i))%this.capacity;
        }

        return hashCode;
    }

    _grow() {

    }

    set(key,value) {
        const hashValue = this.hash(key);

        if(this.buckets[hashValue] === undefined) {
            // We need a new node
            this.buckets[hashValue] = new HashMapNode(key,value);
            this._size++;
        } else {
            // We have a collition
            let lastNode = this.buckets[hashValue];
            let updated = false;
            do {
                // We are updating, not adding
                if(lastNode.key = key) {
                    lastNode.value = value;
                    updated = true;                    
                }
            } while(lastNode.next != null && !updated);

            // Key not found, adding (key,value)
            if(!updated) {
                lastNode.next = new HashMapNode(key,value);
                this._size++;
            }
        }
       
        // Do we need to grow?
        if(this._size >= this._grow_at) {
            this._grow();
        }
    }
}


const test = new HashMap();
 test.set('apple', 'red');
 test.set('banana', 'yellow');
 test.set('carrot', 'orange');
 test.set('dog', 'brown');
 test.set('elephant', 'gray');
 test.set('frog', 'green');
 test.set('grape', 'purple');
 test.set('hat', 'black');
 test.set('ice cream', 'white');
 test.set('jacket', 'blue');
 test.set('kite', 'pink');
 test.set('lion', 'golden');

console.log(test.buckets);
console.log(test._size);
console.log(test._grow_at);