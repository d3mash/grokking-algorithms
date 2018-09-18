const bfs = (value, tree)  => {
  queue = [];
  queue.unshift(tree);
  while (queue.length > 0) {
    curNode = queue.pop();
    if (curNode.value === value) {
      return curNode;
    }
    let len = curNode.children.length;

    for (let i = 0; i < len; i += 1) {
      queue.unshift(curNode.children[i]);
    }
  }

  return null;
}