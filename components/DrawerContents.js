// Holds the render of the drawer navigator

import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import UserInfo from '../data/UserInfo';
export function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={
          styles.drawerContent
        }
      >
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri:
                UserInfo.avatarImage,
            }}
            size={50}
          />
          <Title style={styles.title}>{UserInfo.name}</Title>
          <Caption style={styles.caption}>{UserInfo.slang}</Caption>
          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                {UserInfo.task}
              </Paragraph>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                {UserInfo.teams}
              </Paragraph>
              <Caption style={styles.caption}>Active Teams</Caption>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem 
              icon={({color, size}) => (
                  <MaterialCommunityIcons 
                  name="home-outline" 
                  color={color}
                  size={size}
                  />
              )}
              label="Home"
              onPress={() => {props.navigation.navigate('Home')}}
          />
          <DrawerItem 
              icon={({color, size}) => (
                  <MaterialCommunityIcons 
                  name="account-outline" 
                  color={color}
                  size={size}
                  />
              )}
              label="Profile"
              onPress={() => {props.navigation.navigate('Profile')}}
          />
          <DrawerItem 
              icon={({color, size}) => (
                  <AntDesign name="codesquare" size={size} color={color} />
              )}
              label="Admin Tools"
              onPress={() => {props.navigation.navigate('AdminTools')}}
          />
          <DrawerItem 
              icon={({color, size}) => (
                  <AntDesign name="setting" size={size} color={color} />

              )}
              label="Settings"
              onPress={() => {props.navigation.navigate('Settings')}}
          />
          <DrawerItem 
              icon={({color, size}) => (
                  <MaterialCommunityIcons 
                  name="account-check-outline" 
                  color={color}
                  size={size}
                  />
              )}
              label="About"
              onPress={() => {props.navigation.navigate('About')}}
          />
                    </Drawer.Section>
        <Drawer.Section title="Leave">
          
          <DrawerItem 
              icon={({color, size}) => (
                  <MaterialCommunityIcons 
                  name="account-minus" 
                  color={color}
                  size={size}
                  />
              )}
              label="Sign Out"
              onPress={() => {props.navigation.navigate('LogOut')}}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});