var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // change code below this line
    this.levelOrder = function(node = this.root) {
        if(!node) return null;
        let nodeQueue = [node];
        let valueQueue = [node.value];
        let counter = 0;
        let currentNode = nodeQueue[counter];
        while(valueQueue[counter]!=undefined){
            if(currentNode.left) nodeQueue.push(currentNode.left);
            if(currentNode.right) nodeQueue.push(currentNode.right);
            counter++;         
            if(nodeQueue[counter]) valueQueue.push(nodeQueue[counter].value);            
            currentNode = nodeQueue[counter];
        }
        return valueQueue;
    }
    this.reverseLevelOrder = function(node = this.root) {
        if(!node) return null;
        let nodeQueue = [node];
        let valueQueue = [node.value];
        let counter = 0;
        let currentNode = nodeQueue[counter];
        while(valueQueue[counter]!=undefined){
            if(currentNode.right) nodeQueue.push(currentNode.right);
            if(currentNode.left) nodeQueue.push(currentNode.left);
            counter++;         
            if(nodeQueue[counter]) valueQueue.push(nodeQueue[counter].value);            
            currentNode = nodeQueue[counter];
        }
        return valueQueue;
    }
    // change code above this line



    this.add = function(value){
        let node = new Node(value);
        let currentNode = this.root;
        if(!this.root) {
            this.root = node;
            return undefined;
        }
        addNode(node, currentNode);
    }
    // change code above this line
}

let addNode = function(node, currentNode){
    if(node.value>currentNode.value) {
        if(currentNode.right==null){
            currentNode.right = node;
            return undefined;
        } else{
            currentNode = currentNode.right;
            addNode(node, currentNode);
        } 
    } else if(node.value<currentNode.value) {
        if(currentNode.left==null){
            currentNode.left = node;
            return undefined;
        } else{
            currentNode = currentNode.left;
            addNode(node, currentNode);
        }
    } else return null;
}

let tree = new BinarySearchTree();
tree.add(15);
tree.add(25);
tree.add(7);
tree.add(19);
tree.add(30);
tree.add(3);
tree.add(9);

// console.log(tree);
let bachata = tree.levelOrder();
console.log(tree.levelOrder()); 
