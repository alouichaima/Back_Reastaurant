import { Category } from "../layouts/admin-layout/category/category";
import { MenuItem } from "./menu-item";

export class Menu {
    idMenu?:any;
    name!: string;
    //menuItems!: MenuItem[]; 
    category!: Category; 
    menus!: MenuItem[];

}
