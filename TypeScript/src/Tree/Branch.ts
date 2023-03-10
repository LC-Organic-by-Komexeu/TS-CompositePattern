import { Component } from "./Component";

export class Branch extends Component {
    protected children: Component[] = [];

    public add (component: Component): void {
        this.children.push(component);
    }

    public delete (component: Component): void {
        const index = this.children.indexOf(component);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    public show (depth: number): void {
        // 輸出樹形結構層次
        for (let i = 0; i < depth; i++) {
            this.Output += `-`
        }
        this.Output += this.Name + '\r';
        console.log(this.Output);

        // 向下遍歷
        for (const component of this.children) {
            component.show(depth + 1);
        }
    }
}
