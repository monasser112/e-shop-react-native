import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import CollectionDetails from "../Components/CollectionDetails";

import image1 from "../../images/2.jpg";
import image2 from "../../images/4.jpg";

//import {withNavigation} from 'react-navigation'

const CollectionImages = [
  {
    src: "https://source.unsplash.com/Gf8xG0a0XDY/600x900",
    title: "Urban Collection",
  },
  {
    src: "https://source.unsplash.com/PSOvH4dfrmg/600x900",
    title: "Shop Jackets",
  },
];

const CollectionList = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.sections}>
        <FlatList
          showsVerticalScrollIndicator={true}
          ListHeaderComponent={<></>}
          data={CollectionImages}
          keyExtractor={(image) => image.title}
          renderItem={({ item }) => (
            <CollectionDetails
              src={item.src}
              title={item.title}
            ></CollectionDetails>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sections: {
    marginVertical: 40,
    display: "flex",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CollectionList;
