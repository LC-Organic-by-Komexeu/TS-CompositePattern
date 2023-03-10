abstract class Component {
    public name: string;
    public output: string;
    constructor(name: string) {
        this.name = name;
        this.output = '';
    }

    // 新增一個葉子構件或樹枝構件
    public abstract add(component: Component): void;
    // 刪除一個葉子構件或樹枝構件
    public abstract delete(component: Component): void;
    // 獲取分支下的所有葉子構件和樹枝構件
    public abstract show(depth: number): void;
}

class Leaf extends Component {
    constructor(name: string) {
        super(name);
    }

    // 如果是葉子節點，則不允許進行新增節點，因為葉子節點下再沒有節點了
    public add(component: Component): void {
        console.log("葉子節點不能新增其他內容");
    }

    // 如果是葉子節點，則不允許進行刪除節點，因為葉子節點下再沒有節點了
    public delete(component: Component): void {
        console.log("葉子節點不能刪除內容");
    }

    public show(depth: number): void {
        // 輸出葉子節點
        for (let i = 0; i < depth; i++) {
            //console.log("-");
            this.output += `-`
        }
        //console.log(this.name);
        this.output += this.name + '\r';
        console.log(this.output);
    }
}

class Composite extends Component {
    protected children: Component[] = [];

    constructor(name: string) {
        super(name);
    }

    public add(component: Component): void {
        this.children.push(component);
    }

    public delete(component: Component): void {
        const index = this.children.indexOf(component);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    public show(depth: number): void {
        // 輸出樹形結構層次
        for (let i = 0; i < depth; i++) {
            this.output += `-`
        }        
        this.output += this.name + '\r';
        console.log(this.output);

        // 向下遍歷
        for (const component of this.children) {
            component.show(depth + 1);
        }
    }
}

let root = new Composite("root");
root.add(new Leaf("Leaf A"));
root.add(new Leaf("Leaf B"));

// 建立第二層節點
let branch = new Composite("branch");
branch.add(new Leaf("branch BX"));
branch.add(new Leaf("branch BY"));
root.add(branch);

// 建立第三層節點
let branch2 = new Composite("branch2");
branch2.add(new Leaf("branch2 BBX"));
branch2.add(new Leaf("branch2 BBY"));
root.add(branch2);

// 葉子節點操作
let branch3 = new Composite("branch3");
let leaf = new Leaf("Leaf L");
let leaf1 = new Leaf("Leaf L1");
//leaf.add(leaf1);
//leaf.delete(leaf1);
branch3.add(leaf);
branch3.add(leaf1);
//branch3.delete(leaf);
root.add(branch3);

// 顯示
root.show(1);