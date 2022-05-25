import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import {
  StyleSheet,
  Text,
  Image,
  RefreshControl,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import { SIZES } from "../constants/theme";
//navigation
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);
  const [Food, setFood] = useState([]);
  const [menu, setMenu] = useState([]);
  const navigation = useNavigation();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const getAllFood = () => {
    axios
      .get("http://localhost:5000/api/recette/getAll")
      .then((res) => setFood(res.data))
      .catch((error) => console.log("error", error));
  };

  const getAllMenu = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var graphql = JSON.stringify({
      query:
        "query GetAllMenu {\r\n  getAllMenu {\r\n    id\r\n    name\r\n    productIds {\r\n      id\r\n      name\r\n      image\r\n    price\r\n    image\r\n    description}\r\n  }\r\n}",
      variables: {},
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: graphql,
      redirect: "follow",
    };

    fetch("https://328d-197-230-250-154.ngrok.io/gql", requestOptions)
      .then((response) => response.json())
      .then((result) => setMenu(result.data.getAllMenu))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getAllFood();
    getAllMenu();
  }, [refreshing]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={{ flex: 1 }}
    >
      <View style={tw`p-3  pt-4 `}>
        <Text style={tw`text-3xl font-bold`}>Our Food</Text>
      </View>
      <View style={tw`p-3 flex-wrap flex-row w-full justify-evenly pt-0`}>
        {/* {Food?.map((item, index) => (
          <CardFood key={index} {...{ ...item, Food }} />
        ))} */}
        {Food.map((item, index) => (
          <TouchableOpacity
            // onPress={() => {
            //   navigation.navigate("FoodInfo", {
            //     nom: nom,
            //     images: images,
            //     isFav: isFav,
            //     prix: prix,
            //     rating: rating,
            //     description: description,
            //     food: Food,
            //   });
            // }}
            style={[
              tw`p-3 bg-red-600 max-w-[50vw] items-center  m-1 w-[45%] rounded bg-white border-2 border-gray-300`,
            ]}
          >
            <View style={tw`w-[110px] h-[110px]`}>
              <Image
                source={{
                  uri: item.images[0],
                }}
                style={tw`w-full h-full rounded-full`}
              />
            </View>
            <Text style={tw`text-xl font-bold`}>{item.nom}</Text>
            <Text style={tw`text-xl `}> {item.prix}Dh</Text>
            <View
              style={tw`absolute top-2 right-2 flex-row items-center justify-center`}
            >
              {/* <Ionicons
                name="md-heart"
                size={24}
                color={isFav ? "red" : "black"}
              /> */}
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={tw`p-3  pt-4 `}>
        <Text style={tw`text-3xl font-bold mb-6 mt-10`}>Our Menu</Text>

        {menu.map((_, idx) => {
          return (
            <View style={tw`border-gray-200 border-t-2 my-4 `} key={idx}>
              <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`text-3xl font-bold mt-6  `}>{_.name}</Text>
                <TouchableOpacity
                  style={tw` text-sm rounded-full p-1 bg-red-600`}
                >
                  <Text style={tw`text-sm  text-white`}>View More</Text>
                </TouchableOpacity>
              </View>
              <ScrollView horizontal style={tw`w-full `}>
                {_.productIds.map((item, index) => (
                  <View key={index} style={tw`items-center m-3`}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("FoodInfo", {
                          name: item.nom,
                          image: item.images,
                          isFav: true,
                          price: item.prix,
                          rating: 4,
                          description: item.description,
                          food: Food,
                        });
                      }}
                      style={tw`w-[110px] h-[110px]`}
                    >
                      <Image
                        style={tw`w-full h-full  rounded-full`}
                        source={{
                          uri: item.image[0],
                        }}
                      />
                    </TouchableOpacity>
                    <Text style={tw`text-xl font-bold`}>{item.name}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          );
        })}
      </View>
      <StatusBar style="dark" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: SIZES.width,
    height: SIZES.height,
  },
});
