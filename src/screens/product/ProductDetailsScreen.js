import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ProductCard from '../../components/ProductCard';

const ProductDetailsScreen = () => {
    return (
        <View>
            <Text>Product Details Screen</Text>
            <ProductCard />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default ProductDetailsScreen;