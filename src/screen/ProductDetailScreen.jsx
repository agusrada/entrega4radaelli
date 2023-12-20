import { StyleSheet, Text, View, ActivityIndicator, Image, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import products_data from '../data/products_data.json';
import Header from '../components/header';

const ProductDetailScreen = ({ route }) => {
    const [productSelected, setProductSelected] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { height, width } = useWindowDimensions();
    const isPortrait = height > width;
    
    // Accede a la propiedad 'productId' de route.params
    const productId = route.params?.productId;

    useEffect(() => {
        const productFound = products_data.find(product => product.id === productId);
        setProductSelected(productFound);
        setIsLoading(false);
    }, [productId]);

    return (
        <>
            {
                isLoading
                    ? <ActivityIndicator />
                    : <>
                        {/* <Header title={productSelected.title} /> */}
                        <ScrollView>
                            <Image
                                source={{ uri: productSelected.thumbnail }}
                                resizeMode='cover'
                                style={isPortrait ? styles.imageProduct : styles.imageProductLandscape}
                            />
                            <View style={styles.detailContainer}>
                                <Text style={styles.description}>{productSelected.description}</Text>
                                <Text style={styles.price}>$ {productSelected.price}</Text>
                                <TouchableOpacity style={isPortrait ? styles.buyButton : styles.buyAlt} onPress={() => null}>
                                    <Text style={styles.buyText}>Pedir</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </>
            }
        </>
    );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  imageProduct: {
    minWidth: 300,
    width: '100%',
    height: 400,
  },
  imageProductLandscape: {
    width: 200,
    height: 200,
  },
  detailContainer: {
    alignItems: 'center',
  },
  description: {
    fontSize: 32,
  },
  price: {
    fontSize: 32,

  },
  buyButton: {
    marginTop: 70,
    width: 200,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
  },
  buyText: {
    color: 'white',
    fontSize: 20
  },
  buyAlt: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  }
});