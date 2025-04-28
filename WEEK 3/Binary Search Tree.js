class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    
    insert(value){
        const node = new Node(value)
        if(!this.root){
            this.root = node;
        }else{
            this.insertNode(this.root,node)
        }
    }
    
    insertNode(root,value){
        if(root.value> value.value){
            if(root.left === null){
                root.left = value;
            }else{
                this.insertNode(root.left,value)
            }
        }else{
            if(root.right === null){
                root.right = value;
            }else{
                this.insertNode(root.right,value)
            }
        }
    }
    
    search(root,value){
        if(!root) return false;
        else{
            if(root.value == value){
                return true;
            }else if(value<root.value){
                  return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
    
    preOrder(root){
        if(root){
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right)
            
        }
    }
    
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
}


const bst = new BinarySearchTree();
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(45)
bst.insert(3)
bst.insert(7)
bst.postOrder(bst.root)