export class utilisateur {
  username?:string
  email?: string;
  password?:string;
  photo?:string




  constructor(usernam:string,email: string, password: string,photo:string ){
         this.username=usernam;
         this.email=email;
         this.password=password;
         this.photo=photo;

       }

}
