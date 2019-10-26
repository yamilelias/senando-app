import React from 'react';
import { Text } from 'react-native';
import Icon from './Icon';

export default withLoading = Component => props => {
  return props.isFetching ? <Text>Loading...</Text> : (<Component { ...props } />);
};