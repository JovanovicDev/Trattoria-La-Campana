import { Category } from "./category.model";

export class MenuItem implements MenuItemInterface{

    public id: number;
    public name: string;
    public category: Category | null;
    public price: number;

    constructor(menuItemCfg: MenuItemInterface)
    {
        this.id = menuItemCfg.id;
        this.name = menuItemCfg.name;
        this.category = menuItemCfg.category;
        this.price = menuItemCfg.price;
    }
}

interface MenuItemInterface{
    id: number;
    name: string;
    category: Category | null;
    price: number;
}
