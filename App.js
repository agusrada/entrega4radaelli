import Navigator from './src/navigation/Navigator';
import { useState } from 'react';


export default function App() {

  const [categorySelected, setCategorySelected] = useState('')
  const [productIdSelected, setProductIdSelected] = useState(null)

  const onSelectCategory = (category) =>{
    setCategorySelected(category)
  }

  const onSelectProductId = (productId) => {
    setProductIdSelected(productId)
  }

  return (
   <Navigator/>

  );
}

