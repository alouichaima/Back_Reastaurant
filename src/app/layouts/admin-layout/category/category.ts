import { Menu } from "src/app/models/menu";
import { MenuItem } from "src/app/models/menu-item";

export class Category {
    id?:any;
    name:any;
    description:any;
    menus!: MenuItem[];

}
