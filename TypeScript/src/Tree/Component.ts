export abstract class Component {
    public Name: string;
    public Output: string;
    constructor (name: string) {
        this.Name = name;
        this.Output = ``;
    }

    public abstract add(component: Component): void;
    public abstract delete(component: Component): void;
    public abstract show(depth: number): void;
}
