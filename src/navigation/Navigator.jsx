import { createNativeStackNavigator } from "@react-navigation/native-stack";   
import { NavigationContainer } from "@react-navigation/native";

/*vistas*/
import CategoriesScreen from "../screen/CategoriesScreen";
import ProductsByCategorieScreen from "../screen/ProductsByCategorieScreen";
import ProductDetailScreen from "../screen/ProductDetailScreen";


const Stack = createNativeStackNavigator();

const Navigator = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Categorias"
                    component={CategoriesScreen}
                    options={{
                        title:'Carniceria LA VACA LOLA',
                        headerStyle:{
                            
                            backgroundColor: 'blue'
                        }
                    }}                
                />
                <Stack.Screen
                    name="Productos"
                    component={ProductsByCategorieScreen}                
                />
                <Stack.Screen
                    name="Detalle"
                    component={ProductDetailScreen}                
                />
            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default Navigator