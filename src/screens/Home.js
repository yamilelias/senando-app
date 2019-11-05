import React, { Fragment, useState, useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';
import { Search, List, Icon } from '../components';
import Youtube from '../services/Youtube';
import argonTheme from '../constants/Theme';
 
const { width } = Dimensions.get('screen');

function Home() {
  const [ isFetching, setIsFetching ] = useState(false);
  const [ elements, setElements ] = useState([]);
  const [ error, setError ] = useState(false);
  const [ value, setValue ] = useState('');
  const [ pages, setPages ] = useState({ nextPageToken: '', prevPageToken: '' });

  const query = {
    part: 'id,snippet',
    channelId: 'UCovgvn883vmBMeAOo2OyXOQ',
    maxResults: 5,
    q: encodeURIComponent(value)
  };

  const search = () => {
    setIsFetching(true);
    Youtube.search(query, function then({ data }) {
      setPages({ nextPageToken: data.nextPageToken, prevPageToken: data.prevPageToken })
      setElements(data.items);
      setIsFetching(false);
    }, function error(error) {
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
        <Block flex row style={pages.nextPageToken || pages.prevPageToken ? styles.options : ''}>
          { pages.prevPageToken ? (
            <Button shadowless style={[styles.tab, styles.divider]} onPress={() => console.log('Previous Page', pages.prevPageToken)}>
              <Block row left>
                <Icon name="left" family="AntDesign" style={{ paddingRight: 8 }} color={argonTheme.COLORS.ICON} />
                <Text size={16} style={styles.tabTitle}>Página Previa</Text>
              </Block>
            </Button>
          ) : null }
          { pages.nextPageToken ? (
            <Button shadowless style={[styles.tab, styles.next]} onPress={() => console.log('Next Page', pages.nextPageToken)}>
              <Block row right>
                <Text size={16} style={styles.tabTitle}>Página Siguiente</Text>
                <Icon size={16} name="right" family="AntDesign" style={{ paddingLeft: 8 }} color={argonTheme.COLORS.ICON}/>
              </Block>
            </Button>
          ): null }
        </Block>
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
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  next: {
    textAlign: 'right'
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '400',
    color: argonTheme.COLORS.HEADER
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
