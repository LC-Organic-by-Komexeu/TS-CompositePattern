import { Leaf } from "./Tree/Leaf";
import { Branch } from "./Tree/Branch";

const root = new Branch("root");
root.add(new Leaf("Leaf A"));
root.add(new Leaf("Leaf B"));

// 建立第二層節點
const branch = new Branch("branch");
branch.add(new Leaf("branch BX"));
branch.add(new Leaf("branch BY"));
root.add(branch);

// 建立第三層節點
const branch2 = new Branch("branch2");
branch2.add(new Leaf("branch2 BBX"));
branch2.add(new Leaf("branch2 BBY"));
root.add(branch2);

// 葉子節點操作
const branch3 = new Branch("branch3");
const leaf = new Leaf("Leaf L");
const leaf1 = new Leaf("Leaf L1");
// leaf.add(leaf1);
// leaf.delete(leaf1);
branch3.add(leaf);
branch3.add(leaf1);
// branch3.delete(leaf);
root.add(branch3);

// 顯示
root.show(1);
