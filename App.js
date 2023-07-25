import { View } from "react-native";
import Swiper from "react-native-deck-swiper";
import { Card } from "./src/components/Card/Card";
import { useRef } from "react";
import styles from "./App.styles";
import { cards } from "./src/constants/cards";
import { OverlayLabel } from "./src/components/OverlayLabel/OverlayLabel";

export default function App() {
  const useSwiper = useRef(null).current;

  const handleOnSwipedLeft = () => useSwiper.swipeLeft();
  const handleOnSwipedTop = () => useSwiper.swipeTop();
  const handleOnSwipedRight = () => useSwiper.swipeRight();

  return (
    <View style={styles.swiperContainer}>
      <Swiper
        ref={useSwiper}
        animateCardOpacity
        containerStyle={styles.container}
        cards={cards}
        renderCard={(card) => <Card card={card} />}
        cardIndex={0}
        onTapCard={() => console.log("dd")}
        backgroundColor="white"
        stackSize={1}
        infinite
        showSecondCard
        overlayLabels={{
          left: {
            style: {
              wrapper: styles.overlayWrapper,
            },
          },
          right: {
            style: {
              wrapper: {
                ...styles.overlayWrapper,
                borderColor: "green",
              },
            },
          },
        }}
      />
    </View>
  );
}
