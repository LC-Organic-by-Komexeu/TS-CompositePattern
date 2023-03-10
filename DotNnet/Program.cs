namespace Composite
{
    class Program
    {
        static void Main(string[] args)
        {
            // 建立根節點
            Composite root = new Composite("root");
            root.add(new Leaf("Leaf A"));
            root.add(new Leaf("Leaf B"));

            // 建立第二層節點
            Composite branch = new Composite("branch");
            branch.add(new Leaf("branch BX"));
            branch.add(new Leaf("branch BY"));
            root.add(branch);

            // 建立第三層節點
            Composite branch2 = new Composite("branch2");
            branch2.add(new Leaf("branch2 BBX"));
            branch2.add(new Leaf("branch2 BBY"));
            root.add(branch2);

            // 葉子節點操作
            Composite branch3 = new Composite("branch3");
            Leaf leaf = new Leaf("Leaf L");
            Leaf leaf1 = new Leaf("Leaf L1");
            leaf.add(leaf1);
            leaf.delete(leaf1);
            branch3.add(leaf);
            branch3.add(leaf1);
            branch3.delete(leaf);
            root.add(branch3);

            // 顯示
            root.show(1);

            Console.Read();
        }
    }

    /// <summary>
    /// 抽象構件
    /// </summary>
    public abstract class Component
    {
        public string Name { get; set; }
        public Component(string name)
        {
            this.Name = name;
        }

        // 新增一個葉子構件或樹枝構件
        public abstract void add(Component component);
        // 刪除一個葉子構件或樹枝構件
        public abstract void delete(Component component);
        // 獲取分支下的所有葉子構件和樹枝構件
        public abstract void show(int depth);
    }

    /// <summary>
    /// 葉子構件
    /// </summary>
    public class Leaf : Component
    {
        public Leaf(string name) : base(name)
        { }

        // 如果是葉子節點，則不允許進行新增節點，因為葉子節點下再沒有節點了
        public override void add(Component component)
        {
            Console.WriteLine("葉子節點不能新增其他內容");
        }

        // 如果是葉子節點，則不允許進行刪除節點，因為葉子節點下再沒有節點了
        public override void delete(Component component)
        {
            Console.WriteLine("葉子節點不能刪除內容");
        }

        public override void show(int depth)
        {
            // 輸出葉子節點
            for (int i = 0; i < depth; i++)
            {
                Console.Write("-");
            }
            Console.WriteLine(this.Name);
        }
    }

    /// <summary>
    /// 樹構件
    /// </summary>
    public class Composite : Component
    {
        protected List<Component> _children = new List<Component>();
        public Composite(string name) : base(name)
        { }

        public override void add(Component component)
        {
            _children.Add(component);
        }

        public override void delete(Component component)
        {
            _children.Remove(component);
        }

        public override void show(int depth)
        {
            // 輸出樹形結構層次
            for (int i = 0; i < depth; i++)
            {
                Console.Write("-");
            }
            Console.WriteLine(this.Name);

            // 向下遍歷
            foreach (Component compontent in _children)
            {
                compontent.show(depth + 1);
            }
        }
    }
}