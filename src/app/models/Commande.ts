export class Commande {
    id?: number;
    datedecommande?: Date;
    user?: {
      username: string;
    };
    menuItem?: {
      name: string;
    };
    description?: string;
    commandeStatus?: string;
  }
  