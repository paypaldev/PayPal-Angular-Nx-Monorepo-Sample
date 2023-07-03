export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

export const exampleProducts: Product[] = [
  {
    id: '1',
    name: 'Bad Bunny',
    price: 1000,
    quantity: 2,
    img: "https://www.billboard.com/wp-content/uploads/2023/02/Bad-Bunny-2022-billboard-espanol-1548.jpg?w=942&h=623&crop=1"
  },
  {
    id: '2',
    name: 'Daddy Yankee',
    price: 200,
    quantity: 1,
    img: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/03/31/16487502178773.jpg'
  },
  {
    id: '3',
    name: 'Ozuna',
    price: 600,
    quantity: 3,
    img: 'https://www.billboard.com/wp-content/uploads/2022/10/ozuna-2022-cr-Aura-Music-billboard-1548.jpg?w=942&h=623&crop=1'
  },
  {
    id: '4',
    name: 'JBalvin',
    price: 500,
    quantity: 2,
    img: 'https://static.abc.es/media/summum/2020/05/18/1_jbalvin-k4DF--1024x512@abc.jpg'
  },
];