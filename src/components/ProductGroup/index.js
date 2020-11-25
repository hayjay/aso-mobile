import React from 'react';
import { ScrollView, View } from 'react-native';

import styles from './styles';
import CustomText from '../CustomText';
import ProductCard from '../ProductCard';

const ProductGroup = ({ title, horizontal, itemWidth, data = [] }) => {
  const horizontalProps = {
    horizontal: true,
    snapToInterval: itemWidth,
  };

  const extraScrollViewProps = horizontal ? horizontalProps : {};
  return (
    <View style={[styles.container, !horizontal && { flex: 1 }]}>
      <CustomText style={styles.title}>{title}</CustomText>
      <ScrollView
        {...extraScrollViewProps}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}>
        {data.map(
          ({
            metaItems,
            label,
            imageUrl,
            price,
            title: productTitle,
            subTitle,
            lowerTitle,
          }) => (
            <ProductCard
              containerStyle={[styles.featured, { width: itemWidth }]}
              label={label}
              price={price}
              metaItems={metaItems}
              title={productTitle}
              subTitle={subTitle}
              lowerTitle={lowerTitle}
              imageUrl={imageUrl}
            />
          ),
        )}
      </ScrollView>
    </View>
  );
};

export default ProductGroup;
