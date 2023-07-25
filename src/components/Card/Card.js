import {
  View,
  Text,
  Pressable,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRotatingCard } from "../../hooks/useRotatingCard";
import styles from "./Card.styles";

export const Card = () => {
  const {
    frontOpacity,
    backOpacity,
    frontAnimatedStyle,
    backAnimatedStyle,
    flipCard,
  } = useRotatingCard();

  return (
    <View style={styles.container}>
      <View>
        <Animated.View
          onPress={flipCard}
          style={[
            styles.flipCard,
            frontAnimatedStyle,
            { opacity: frontOpacity },
          ]}
        >
          <Pressable
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={flipCard}
          >
            <Text style={styles.flipText}>front.</Text>
          </Pressable>
        </Animated.View>
        <Animated.View
          style={[
            styles.flipCard,
            styles.flipCardBack,
            backAnimatedStyle,
            { opacity: backOpacity },
          ]}
        >
          <Pressable
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={flipCard}
          >
            <Text style={styles.flipText}>back.</Text>
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
};
