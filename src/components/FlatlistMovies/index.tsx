import { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  ListRenderItem,
  FlatList,
} from "react-native";

export function FlatlistMovies() {
  const [images, setImages] = useState<ImageSourcePropType[]>([
    require("@assets/infinite_war.png"),
    require("@assets/captain_america.png"),
    require("@assets/thor.png"),
  ]);
  const render_Item: ListRenderItem<ImageSourcePropType> = ({
    item,
    index,
  }) => (
    <Image
      source={item}
      key={index}
      style={{
        height: 200,
        width: 200,
        borderRadius: 18,
        borderWidth: 1,
        overflow: "hidden",
        borderColor: "#ff0000",
        marginLeft: 10,
        marginTop: 30,
      }}
    />
  );
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={images}
      renderItem={render_Item}
      style={{
        width: 300,
        borderColor: "#ff0000",
        borderRadius: 30,
      }}
    />
  );
}
