// Поиск в глубину
// https://www.codewars.com/kata/5800580f8f7ddaea13000025/train/javascript
function sumTheTreeValues(root){
    if (!root) return 0;
    return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
}