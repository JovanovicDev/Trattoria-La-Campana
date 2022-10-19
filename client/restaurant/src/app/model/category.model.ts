export class Category implements CategoryInterface{

    public id: number;
    public name: string;

    constructor(categoryCfg: CategoryInterface)
    {
        this.id = categoryCfg.id;
        this.name = categoryCfg.name;
    }
}

interface CategoryInterface{
    id: number;
    name: string;
}
