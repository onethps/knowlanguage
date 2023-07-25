import React from "react";
import { View, Text } from "react-native";
import { string } from "prop-types";
import styles from "./OverlayLabel.styles";

export const OverlayLabel = ({ label, color }) => (
  <View style={[styles.overlayLabel, { borderColor: color }]}>
    <Text style={[styles.overlayLabelText, { color }]}>{label}</Text>
  </View>
);
