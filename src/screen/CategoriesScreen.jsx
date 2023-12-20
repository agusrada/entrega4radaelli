import { StyleSheet, Text, View, FlatList } from 'react-native'

import Header from '../components/header'
import categories_data from '../data/categories_data.json'
import CategoryItem from '../components/categoryItem'



const CategoriesScreen = ({navigation}) => {
    
   const renderCategoryItem =({item}) =>(
    <CategoryItem category={item} navigation={navigation} />
   )


  return (
    <>
    {/* <Header title="CARNICERIA: LA VACA LOLA" /> */}
    <FlatList
      data={categories_data}
      renderItem={renderCategoryItem}
      keyExtractor={item=>item}
    />
    </>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  
    
})