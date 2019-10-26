import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Block, theme } from 'galio-framework';
import List from '../components/List';
import Youtube from '../services/Youtube';
const { width } = Dimensions.get('screen');

function Home() {
  const [ isFetching, setIsFetching ] = useState(false);
  const [ elements, setElements ] = useState([]);

  useEffect(() => {
    setIsFetching(true);
    Youtube.search({
      part: 'id,snippet',
      channelId: 'UCovgvn883vmBMeAOo2OyXOQ',
      maxResults: 50,
      // q: 'c'
    }, function then(response) {
      console.log('response', response);
      setElements(response.data.items);
      setIsFetching(false);
    });
  }, []);

  return (
    <Block flex center style={styles.home}>
      <List isFetching={isFetching} elements={elements}/>
    </Block>
  );
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
