/* eslint-disable no-unused-expressions */


const preorderTraversal = function(root){
   if(root === null) return [];
   
   const stack = [root];
   const result = [];
   
   while(stack.length >= 1){
       let node = stack.pop();
       if(node.right) stack.push(node.right);
       result.push(node.val);
       if(node.left) stack.push(node.right);

   }

   return result;
   
}