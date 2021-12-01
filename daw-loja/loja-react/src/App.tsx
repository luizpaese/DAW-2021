import { Collection } from './components/Collection'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Products } from './components/Product'
import { Brands } from './components/Brand'
import { Newsletter } from './components/Newsletter'
import { useEffect, useState } from 'react'
import { Product } from './@types'
import axios from 'axios'


function App() {
  const brands = [
    {alt: 'imagem1', source: './assets/images/brand1.png'},
    {alt: 'imagem2', source: './assets/images/brand2.png'},
    {alt: 'imagem3', source: './assets/images/brand3.png'},
    {alt: 'imagem4', source: './assets/images/brand4.png'},
    {alt: 'imagem5', source: './assets/images/brand5.png'}
  ]

  // const products = [
  //   {id: 1, name: 'Produto1', description: 'Produto 1',price: 12,likes: 3, photo: 'product1.jpg'}
  // ]

  const [products, setProducts] = useState<Product[]>([] as Product[]);

  useEffect(() => {
    //TODO: Carregue do server os dados de produto
    axios.get('http://localhost:3333/products')
      .then(result => {
        setProducts(result.data);
      })
      .catch(error => {
        console.log('Puts', error);
      })
  }, [

  ])

  return (
    <div>
      <Header/>
      <main>
        <div className="container">
          
          <Collection/>
          <Products items={products}/>
          
        </div>

        <Newsletter/>

        <div className="container">
          <Brands items={brands}/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
