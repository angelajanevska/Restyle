export class Product{
  image:string;
  name:string;
  category:string[];
  price:number;
  description:string;
  email:string;
  code:string;
  date:Date;
  size:string;

  constructor(image: string, name: string, category: string[], price: number, description: string, email: string,size:string,date:Date) {
    this.image = image;
    this.name = name;
    this.category = category;
    this.price = price;
    this.description = description;
    this.email = email;
    this.code = this.makeid();
    this.date=date;
    this.size=size;
  }

  makeid() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 7; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }
}
