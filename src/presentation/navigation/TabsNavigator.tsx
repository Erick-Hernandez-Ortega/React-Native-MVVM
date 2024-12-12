import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PostListScreen} from '../views/post/list/PostList';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {MyPostListScreen} from '../views/post/myList/MyPostList';
import {ProfileInfoScreen} from '../views/profile/info/ProfileInfo';
import { MyColors } from '../theme/AppTheme';

export type TabParamList = {
  PostListScreen: undefined;
  MyPostListScreen: undefined;
  ProfileInfoScreen: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});

const MyListIcon = () => (
  <Image
    source={require('../../../assets/img/my_list.png')}
    style={styles.icon}
  />
);

const ChecklistIcon = () => (
  <Image
    source={require('../../../assets/img/checklist.png')}
    style={styles.icon}
  />
);

const UserIcon = () => (
  <Image source={require('../../../assets/img/user.png')} style={styles.icon} />
);

export const TabsNavigator = () => (
  <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle: {backgroundColor: MyColors.background}, tabBarActiveTintColor: 'white'}}>
    <Tab.Screen
      name="PostListScreen"
      component={PostListScreen}
      options={{
        title: 'Posts',
        tabBarLabel: 'Posts',
        tabBarIcon: MyListIcon,
      }}
    />
    <Tab.Screen
      name="MyPostListScreen"
      component={MyPostListScreen}
      options={{
        title: 'Mis post',
        tabBarLabel: 'Mis post',
        tabBarIcon: ChecklistIcon,
      }}
    />
    <Tab.Screen
      name="ProfileInfoScreen"
      component={ProfileInfoScreen}
      options={{
        title: 'Perfil',
        tabBarLabel: 'Perfil',
        tabBarIcon: UserIcon,
      }}
    />
  </Tab.Navigator>
);
