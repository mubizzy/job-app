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
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";
const Popularjobs = () => {
  const router = useRouter();
  // const isLoading = false;
  // const error = false;
  const { data, isLoading, error } = useFetch("search", {
    query: "Python developer ",
    num_pages: "1",
  });

  console.log(data);
  const [selectedJob, setSelectedJob] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={{ data }}
            renderItem={({ item }) => (
              <PopularJobCard item={item} selectedJob={selectedJob} />
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
