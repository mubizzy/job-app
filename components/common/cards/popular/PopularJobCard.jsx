import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from "../../../../utils";
import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, selectedJob, handleCardPress, job }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: item.employer_logo,
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job?.job_title}
        </Text>
        <Text style={styles.jobType}>{job?.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
