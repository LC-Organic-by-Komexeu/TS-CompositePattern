import { Component } from "./Component";

export class Leaf extends Component {
    // 如果是葉子節點，則不允許進行新增節點，因為葉子節點下再沒有節點了
    public add (component: Component): void {
        console.log(`葉子節點不能新增其他內容，${component.Name}新增失敗`);
    }

    // 如果是葉子節點，則不允許進行刪除節點，因為葉子節點下再沒有節點了
    public delete (component: Component): void {
        console.log(`葉子節點不能刪除內容，${component.Name}刪除失敗`);
    }

    public show (depth: number): void {
        // 輸出葉子節點
        for (let i = 0; i < depth; i++) {
            // console.log("-");
            this.Output += `-`
        }
        // console.log(this.name);
        this.Output += this.Name + '\r';
        console.log(this.Output);
    }
}
