import React from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";
import { withNavigation } from 'react-navigation';
import { Block, Text, theme } from "galio-framework";
import { argonTheme } from "../constants/";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

function Details({ navigation }) {
  console.log(navigation);
  const { title } = navigation.state.params;
  const image = 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?fit=crop&w=840&q=80';

  return (
    <Block flex center>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Block flex style={styles.group}>
          <Block flex>
            <Block flex style={{ marginTop: theme.SIZES.BASE / 2 }}>
              <Block center style={styles.description}>
                <Image
                  resizeMode="cover"
                  style={styles.video}
                  source={{ uri: image }}
                />
                <Block center style={styles.title}>
                  <Text center size={34}>
                    {title}
                  </Text>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <Text bold size={16} style={styles.back}>
          Volver a Inicio
            </Text>
      </TouchableWithoutFeedback>
    </Block>
  );
}

const styles = StyleSheet.create({
  group: {
    paddingTop: theme.SIZES.BASE
  },
  description: {
    width: cardWidth - theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2
  },
  video: {
    width: cardWidth - theme.SIZES.BASE,
    height: cardWidth - theme.SIZES.BASE,
    borderRadius: 3
  },
  title: {
    paddingTop: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE
  },
  back: {
    paddingBottom: theme.SIZES.BASE,
    // paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    color: argonTheme.COLORS.HEADER
  }
});

export default withNavigation(Details);
