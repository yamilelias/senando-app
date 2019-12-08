import React from 'react';
import { Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import withLoading from './withLoading';
const { width } = Dimensions.get('screen');

function List({ elements, error }) {
  renderElements = (value, index) => {
    const { name, id } = value;
    const item = {
      id,
      title: `${name.charAt(0).toUpperCase()}${name.substr(1, name.length).toLowerCase()}`,
      // image: thumbnails.default.url,
      cta: 'Ver Video',
    };

    return (
      <Card key={index} item={item} horizontal />
    )
  }

  const renderContent = () => {
    if(error) {
      return <Text>Ha ocurrido un error... Lo siento :(</Text>
    }

    if(!elements.length) {
      return <Text>No se encontraron videos</Text>
    }

    return elements.map(renderElements);
  }

  return (
    <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}>
        <Block flex center>
          {renderContent()}
        </Block>
      </ScrollView>
  );
}

List.defaultProps = {
  elements: [],
};

const styles = StyleSheet.create({
  message: {
    textAlign: "center"
  },
  list: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE / 2
    ,
  },
});

export default withLoading(List);