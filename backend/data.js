import bcrypt from 'bcryptjs';

const data = {
  user: [
    {
      name: 'Thinh',
      email: 'thinh@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Thinh',
      email: 'thinh1@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'SP1',
      slug: 'sp1',
      category: 'category1',
      image: '/image/sp1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Asus',
      description: 'nice product',
    },
    {
      name: 'SP2',
      slug: 'sp2',
      category: 'category1',
      image: '/image/sp2.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Asus',
      description: 'nice product',
    },
    {
      name: 'SP3',
      slug: 'sp3',
      category: 'category1',
      image: '/image/sp3.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Asus',
      description: 'nice product',
    },
    {
      name: 'SP4',
      slug: 'sp4',
      category: 'category1',
      image: '/image/sp4.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Asus',
      description: 'nice product',
    },
  ],
};
export default data;
