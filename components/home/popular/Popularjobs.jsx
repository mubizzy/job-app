import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { useRouter } from "expo-router";
import { COLORS, icons, SIZES } from "../../../constants";
import styles from "./popularjobs.style";
import { isLoading } from "expo-font";

const Popularjobs = () => {
  const router = useRouter();
  const isLoading=false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View> 

      <View style={styles.cardsContainer}>
        {isLoading?(<ActivityIndicator size="large" color={COLORS.primary}/>):(</>)}
      </View>
    </View>
  );
};

export default Popularjobs;
