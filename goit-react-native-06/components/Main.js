import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { authStateCahngeUser } from "../redux/auth/authOperations";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../Screens/auth/LoginScreen";
import RegistrationScreen from "../Screens/auth/RegistrationScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { PostsScreen } from "../Screens/mainScreen/PostsScreen";
import { CreatePostsScreen } from "../Screens/mainScreen/CreatePostsScreen";
import { ProfileScreen } from "../Screens/mainScreen/ProfileScreen";
import { selectStateChange } from "../redux/selectors";

const MainStack = createStackNavigator();

const MainTab = createBottomTabNavigator();

const Main = () => {
  const stateChange = useSelector(selectStateChange);
  console.log("🚀 ~ file: Main.js:16 ~ Main ~ stateChange", stateChange);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateCahngeUser());
  }, []);

  return (
    <NavigationContainer>
      {!stateChange ? (
        <MainStack.Navigator initialRouteName="Login">
          <MainStack.Screen
            options={{ headerShown: false }}
            name="Registration"
            component={RegistrationScreen}
          />
          <MainStack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
        </MainStack.Navigator>
      ) : (
        <MainTab.Navigator
          initialRouteName="PostsScreen"
          screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#ffffff",
            tabBarActiveBackgroundColor: "#FF6C00",
            tabBarInactiveTintColor: "#212121CC",
            tabBarStyle: {
              paddingTop: 10,
              paddingHorizontal: 50,
              paddingBottom: 50,
            },
          }}
        >
          <MainTab.Screen
            name="PostsScreen"
            component={PostsScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ size, color }) => (
                <TouchableOpacity>
                  <Feather name="grid" size={size} color={color} />
                </TouchableOpacity>
              ),

              tabBarItemStyle: {
                marginLeft: 15,
                marginRight: 15,
                width: 70,
                height: 40,
                borderRadius: 50,
              },
            }}
          />
          <MainTab.Screen
            name="Create"
            component={CreatePostsScreen}
            options={{
              headerLeft: () => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate("HomeScreen")}
                >
                  <Feather name="arrow-left" size={24} color="#212121CC" />
                </TouchableOpacity>
              ),
              title: "Create post",
              tabBarIcon: ({ size, color }) => (
                <TouchableOpacity>
                  <Feather name="plus" size={size} color={color} />
                </TouchableOpacity>
              ),
              tabBarItemStyle: {
                marginRight: 15,
                width: 70,
                height: 40,
                borderRadius: 50,
              },
            }}
          />
          <MainTab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <TouchableOpacity>
                  <Feather name="user" size={size} color={color} />
                </TouchableOpacity>
              ),

              tabBarItemStyle: {
                marginRight: 15,
                width: 70,
                height: 40,
                borderRadius: 50,
              },
            }}
          />
        </MainTab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
