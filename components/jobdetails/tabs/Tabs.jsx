import React from "react";
import { View, Text } from "react-native";

import styles from "./tabs.style";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList data={tabs} horizontal showsHorizontalScrollIndicator={false} />
    </View>
  );
};

export default Tabs;
