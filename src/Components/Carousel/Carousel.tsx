import React, { useState, useRef } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled(View)`
  justify-content: center;
  align-items: center;
`;

const MyCarousel = ({ data }) => {
  const initialActive = 0;
  const [active, setActive] = useState(0);
  const refCarousel = useRef(null);

  const handleIndexChange = (index: number) => setActive(index);

  return (
    <Wrapper>
      <Carousel
        data={data}
        layout="default"
        ref={refCarousel}
        sliderWidth={400}
        itemWidth={300}
        firstItem={initialActive}
        onBeforeSnapToItem={handleIndexChange}
        keyboardShouldPersistTaps="always"
        renderItem={({ item, index }) => item}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={active}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
        }}
        inactiveDotStyle={{
          width: 10,
          height: 10,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </Wrapper>
  );
};

export default MyCarousel;
