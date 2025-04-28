class hash{
    constructor(size){
        this.table = new Array(size)
    }

    _hash(key){
        let hash = 0;
        for(let char of key){
            hash += char.charCodeAt(0)
        }
        return hash % this.table.length
    }

    set(key,value){
        const index  = this._hash(key);
        const bucket = this.table[index];

        if(!bucket){
            this.table[index] = [];
        }

        this.table[index].push([key,value])

    }
    get(key) {
        const index = this._hash(key);
        const bucket = this.table[index];

        if (bucket) {
            for (let [k, v] of bucket) {
                if (k === key) {
                    return v;
                }
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this._hash(key);
        const bucket = this.table[index];

        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

const h = new hash(20);
h.set("name", "benson");
h.set("benson", "b");
h.display();