import { Commande } from "./Commande";

export class MenuItem {
    id?:any;
    name!: any;
    description!: any;
    price!: any;
    categoryId?: any; 
    commande?:Commande;
}