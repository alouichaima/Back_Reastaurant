export interface Category {
    id: number;
    name: string;
    description: string;
    menuItems: MenuItem[];
  }
  
  export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
  }
  
  export interface MenuData {
    categories: Category[];
  }
  