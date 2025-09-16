class HashMapNode {
    key = undefined;
    value = undefined;
    next = undefined;
    
    constructor(key,value) {
        this.key = key;
        this.value = value
    }
}

class HashMap {
    static LOAD_FACTOR = 0.75;
    static START_CAPACITY = 16;
    capacity = HashMap.START_CAPACITY;
    _grow_at = this.capacity * HashMap.LOAD_FACTOR;
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
        const old_capacity = this.capacity;
        const old_buckets = this.buckets;

        this.capacity = this.capacity * 2;        
        this.buckets = new Array(this.capacity);
        this._grow_at = this.capacity * HashMap.LOAD_FACTOR;

        for (const node of old_buckets) {            
            if(node === undefined) continue;

            let currentNode = node;
            let nextNode = undefined;
            do {
                nextNode = currentNode.next;
                const newHashValue = this.hash(node.key);

                // No node present at new location
                if(this.buckets[newHashValue] === undefined) {
                    this.buckets[newHashValue] = currentNode;
                    this.buckets[newHashValue].next = undefined;
                } 
                // There is a collision, push at beginning.
                else {
                    currentNode.next = this.buckets[newHashValue];
                    this.buckets[newHashValue] = currentNode;
                }

                currentNode = nextNode;
            }while(nextNode !== undefined);
        }
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
                if(lastNode.key === key) {
                    lastNode.value = value;
                    updated = true;                    
                }
            } while(lastNode.next != undefined && !updated);

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

    get(key) {
        const bucket = this.hash(key);
        if(this.buckets[bucket] === undefined) return null;
        
        let node = this.buckets[bucket];
        do {
            if(node.key === key)
                return node.value;
            node = node.next;
        }while(node !== undefined);
        
        return null;
    }

    has(key) {
        const bucket = this.hash(key);
        if(this.buckets[bucket] === undefined) return false;
        
        let node = this.buckets[bucket];
        do {
            if(node.key === key)
                return true;
            node = node.next;
        }while(node !== undefined);
        
        return false;
    }

    remove(key) {
        const bucket = this.hash(key);
        if(this.buckets[bucket] === undefined) return false;
        
        // We might be removing, the first node in a list is a special case.
        if(this.buckets[bucket].key === key) {
            this.buckets[bucket] = this.buckets[bucket].next;
            this._size--;
            return true;
        } 

        let node = this.buckets[bucket].next;
        let prevNode = this.buckets[bucket];
        while(node !== undefined) {
            if(node.key === key) {
                // We are removing.
                prevNode.next = node.next;
                this._size--;
                return true;
            }
            node = node.next;
        }
        
        return false;
    }

    length() {
        return this._size;
    }

    clear() {
        this.buckets = new Array(HashMap.START_CAPACITY);
        this._size = 0;
    }

    keys() {
        const allKeys = new Array(this.length());
        let index = 0;

        for(const node of this.buckets) {
            if(node === undefined) continue;

            let curNode = node;
            while (curNode !== undefined) {
                allKeys[index] = curNode.key;
                curNode = curNode.next;
                index++;
            }
        }
        return allKeys;
    }

    values() {
        const allValues = new Array(this.length());
        let index = 0;

        for(const node of this.buckets) {
            if(node === undefined) continue;

            let curNode = node;
            while (curNode !== undefined) {
                allValues[index] = curNode.value;
                curNode = curNode.next;
                index++;
            }
        }
        return allValues;
    }

    entries() {
        const allEntries = new Array(this.length());
        let index = 0;

        for(const node of this.buckets) {
            if(node === undefined) continue;

            let curNode = node;
            while (curNode !== undefined) {
                allEntries[index] = [curNode.key, curNode.value];
                curNode = curNode.next;
                index++;
            }
        }
        return allEntries;
    }
}

export default HashMap;
