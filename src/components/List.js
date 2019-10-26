import React from 'react';
import { Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import withLoading from './withLoading';
const { width } = Dimensions.get('screen');

function List({ elements }) {
  renderElements = (value, index) => {
    const { title, thumbnails } = value.snippet;
    const item = {
      title: `${title.charAt(0).toUpperCase()}${title.substr(1, title.length).toLowerCase()}`,
      image: thumbnails.default.url,
      cta: 'Ver Video',
      horizontal: true
    };

    return (
      <Card key={index} item={item} horizontal />
    )
  }

  return (
    <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}>
        <Block flex>
          {elements.map(renderElements)}
        </Block>
      </ScrollView>
  );
}

List.defaultProps = {
  elements: [],
};

const styles = StyleSheet.create({
  list: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default withLoading(List);