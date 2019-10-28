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
  const data = {
    title: navigation.state.params.title && "Music Album",
    description:
      "Rock music is a genre of popular music. It developed during and after the 1960s in the United Kingdom.",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?fit=crop&w=840&q=80",
    price: "$125"
  };

  return (
    <Block flex center>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Block flex style={styles.group}>
          <Block flex>
            <Block flex style={{ marginTop: theme.SIZES.BASE / 2 }}>
              <Block center style={styles.productItem}>
                <Image
                  resizeMode="cover"
                  style={styles.productImage}
                  source={{ uri: data.image }}
                />
                <Block center style={{ paddingHorizontal: theme.SIZES.BASE }}>
                  <Text
                    center
                    size={16}
                    color={theme.COLORS.MUTED}
                    style={styles.productPrice}
                  >
                    {data.price}
                  </Text>
                  <Text center size={34}>
                    {data.title}
                  </Text>
                  <Text
                    center
                    size={16}
                    color={theme.COLORS.MUTED}
                    style={styles.productDescription}
                  >
                    {data.description}
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
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 4
  },
  productItem: {
    width: cardWidth - theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2
  },
  productImage: {
    width: cardWidth - theme.SIZES.BASE,
    height: cardWidth - theme.SIZES.BASE,
    borderRadius: 3
  },
  productPrice: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2
  },
  productDescription: {
    paddingTop: theme.SIZES.BASE
    // paddingBottom: theme.SIZES.BASE * 2,
  },
  back: {
    paddingBottom: theme.SIZES.BASE,
    // paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    color: argonTheme.COLORS.HEADER
  }
});

export default withNavigation(Details);
