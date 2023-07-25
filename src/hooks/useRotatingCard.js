import React from "react";
import { Animated } from "react-native";

export const useRotatingCard = () => {
  const animatedValue = new Animated.Value(0);
  let tempValue = 0;

  React.useEffect(() => {
    animatedValue.addListener(({ value }) => {
      tempValue = value;
    });
  }, []);

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });
  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });
  const frontOpacity = animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [1, 0],
  });
  const backOpacity = animatedValue.interpolate({
    inputRange: [89, 90],
    outputRange: [0, 1],
  });

  const flipCard = () => {
    if (tempValue >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }
  };

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };
  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return {
    animatedValue,
    frontInterpolate,
    backInterpolate,
    frontAnimatedStyle,
    backAnimatedStyle,
    frontOpacity,
    backOpacity,
    flipCard,
  };
};
