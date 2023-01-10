import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { authStateCahngeUser } from "../redux/auth/authOperations";
import { onRoute } from "../router.js";
import { selectStateChange } from "../redux/selectors";

const Main = () => {
  const stateChange = useSelector(selectStateChange);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateCahngeUser());
  }, []);

  const routing = onRoute(stateChange);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;

//  {
//    !stateChange ? (
//      <MainStack.Navigator initialRouteName="Login">
//        <MainStack.Screen
//          options={{ headerShown: false }}
//          name="Login"
//          component={LoginScreen}
//        />
//        <MainStack.Screen
//          options={{ headerShown: false }}
//          name="Registration"
//          component={RegistrationScreen}
//        />
//      </MainStack.Navigator>
//    ) : (
//      <MainTab.Navigator
//        initialRouteName="PostsScreen"
//        screenOptions={{
//          tabBarShowLabel: false,
//          tabBarActiveTintColor: "#ffffff",
//          tabBarActiveBackgroundColor: "#FF6C00",
//          tabBarInactiveTintColor: "#212121CC",
//          tabBarStyle: {
//            paddingTop: 10,
//            paddingHorizontal: 50,
//            paddingBottom: 50,
//          },
//        }}
//      >
//        <MainTab.Screen
//          name="PostsScreen"
//          component={PostsScreen}
//          options={{
//            headerShown: false,
//            tabBarIcon: ({ size, color }) => (
//              <TouchableOpacity>
//                <Feather name="grid" size={size} color={color} />
//              </TouchableOpacity>
//            ),

//            tabBarItemStyle: {
//              marginLeft: 15,
//              marginRight: 15,
//              width: 70,
//              height: 40,
//              borderRadius: 50,
//            },
//          }}
//        />
//        <MainTab.Screen
//          name="Create"
//          component={CreatePostsScreen}
//          options={{
//            headerLeft: () => (
//              <TouchableOpacity
//                activeOpacity={0.7}
//                onPress={() => navigation.navigate("HomeScreen")}
//              >
//                <Feather name="arrow-left" size={24} color="#212121CC" />
//              </TouchableOpacity>
//            ),
//            title: "Create post",
//            tabBarIcon: ({ size, color }) => (
//              <TouchableOpacity>
//                <Feather name="plus" size={size} color={color} />
//              </TouchableOpacity>
//            ),
//            tabBarItemStyle: {
//              marginRight: 15,
//              width: 70,
//              height: 40,
//              borderRadius: 50,
//            },
//          }}
//        />
//        <MainTab.Screen
//          name="Profile"
//          component={ProfileScreen}
//          options={{
//            tabBarIcon: ({ size, color }) => (
//              <TouchableOpacity>
//                <Feather name="user" size={size} color={color} />
//              </TouchableOpacity>
//            ),

//            tabBarItemStyle: {
//              marginRight: 15,
//              width: 70,
//              height: 40,
//              borderRadius: 50,
//            },
//          }}
//        />
//      </MainTab.Navigator>
//    );
//  }
