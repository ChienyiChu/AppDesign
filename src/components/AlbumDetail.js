import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AlbumDetail = (props) => {
  const { thumbnail_image, title, artist, image } = props.album;
  return (
    <View style={styles.cardContainerStyle}>

      <View style={styles.cardSectionStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
      </View>
      <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
        <Image
          style={styles.thumbnailStyle}
          source={{
            uri: thumbnail_image
          }}
        />
        <View style={styles.headerContentStyle}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.artistStyle}>{artist}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10
    
  },
  cardContainerStyle: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#1C55C7",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20
  },
  cardSectionStyle: {
    padding: 15,
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderRadius: 20,
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 320,
    width: null,
    borderRadius:15
  },
  titleStyle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1C55C7"
  },
  artistStyle:{
    color: "#1C55C7"
  }
});

export default AlbumDetail;