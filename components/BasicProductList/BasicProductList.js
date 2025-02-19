import { StyleSheet, Text, View, Image } from "react-native"; // Import Image
import React from "react";
import { colors } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

const BasicProductList = ({ title, price, quantity, image_url }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.IconContainer}>
          {image_url ? (
            <Image
              source={{ uri: image_url }} // Display the product image
              style={styles.productImage}
            />
          ) : (
            <Ionicons name="square" size={30} color={colors.muted} />
          )}
        </View>
        <View style={styles.productInfoContainer}>
          <Text style={styles.secondaryText}>{title}</Text>
          <Text>x{quantity}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.primaryText}>{quantity * price}$</Text>
      </View>
    </View>
  );
};

export default BasicProductList;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: colors.white,
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    padding: 5,
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  productInfoContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  IconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
    height: 40,
    width: 40,
    borderRadius: 5,
    overflow: "hidden", // Ensure the image fits within the container
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Ensure the image covers the container
  },
  primaryText: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.primary,
  },
  secondaryText: {
    fontSize: 15,
    fontWeight: "600",
  },
});