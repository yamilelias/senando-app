import React, { Fragment, useState, useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Block, theme } from 'galio-framework';
import { Search, List } from '../components';
import Youtube from '../services/Youtube';
import argonTheme from '../constants/Theme';
 
const { width } = Dimensions.get('screen');

function Home() {
  const [ isFetching, setIsFetching ] = useState(false);
  const [ elements, setElements ] = useState([]);
  const [ error, setError ] = useState(false);
  const [ value, setValue ] = useState('');

  const search = () => {
    setIsFetching(true);
    Youtube.search({
      part: 'id,snippet',
      channelId: 'UCovgvn883vmBMeAOo2OyXOQ',
      maxResults: 50,
      q: encodeURIComponent(value)
    }, function then(response) {
      setElements(response.data.items);
      setIsFetching(false);
    }, function error(response) {
      setError(true);
    });
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <Fragment>
      <Block style={styles.search}>
        <Search value={value} onChangeText={(text) => setValue(text)} onSubmitEditing={search} />
      </Block>
      <Block flex center style={styles.home}>
        <List isFetching={isFetching} error={error} elements={elements}/>
      </Block>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: argonTheme.COLORS.WHITE
  },
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
