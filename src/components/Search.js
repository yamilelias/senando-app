import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { theme } from 'galio-framework';
import Icon from './Icon';
import Input from './Input';
import argonTheme from '../constants/Theme';

const { width } = Dimensions.get('window');

function Search(props) {
  return (
    <Input
      right rounded
      color="black"
      style={styles.search}
      placeholder="Busca la Palabra..."
      placeholderTextColor={'#8898AA'}
      onSubmitEditing={() => console.log('search')}
      iconContent={<Icon size={16} color={theme.COLORS.MUTED} onPress={() => console.log('search')} name="search1" family="AntDesign" />}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: argonTheme.COLORS.BORDER,
  },
});

export default Search;