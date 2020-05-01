import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, {Circle, Path, Rect} from 'react-native-svg';

export default class ProfileSVG extends React.Component {
  render() {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          { alignItems: 'center', justifyContent: 'center' },
        ]}>
        <Svg
          fill="#FFFFFF"
          viewBox="0 0 24 32"
          height="100%"
          width="100%">
          <Path
            d="M 12 0 C 8.0064 5.9211895e-16 4.7421875 3.1827106 4.7421875 7.1191406 C 4.7421875 9.8690006 6.3369563 12.260666 8.6601562 13.447266 C 6.2601563 13.842766 4.263225 14.671694 2.765625 15.933594 C 0.999225 17.421494 0.001953125 19.457006 0.001953125 21.566406 L 0.001953125 29.119141 C 0.001953125 29.439341 0.1932125 30.248272 1.8828125 30.888672 C 3.7836125 31.623172 7.1048902 32 11.712891 32 C 16.570491 32 20.046169 31.623172 22.042969 30.888672 C 23.751769 30.267072 24.001953 29.495109 24.001953 29.099609 L 24.001953 21.679688 C 24.001953 20.022288 23.520797 17.647803 21.216797 15.783203 C 19.757597 14.577802 17.800059 13.805166 15.380859 13.447266 C 17.68405 12.241623 19.257812 9.8691043 19.257812 7.1386719 C 19.257812 3.2022319 15.9936 1.1842379e-15 12 0 z M 12 1.5449219 C 15.1296 1.5449219 17.683594 4.0491006 17.683594 7.1191406 C 17.683594 10.189161 15.1296 12.695314 12 12.695312 C 8.8704 12.695312 6.3164064 10.189161 6.3164062 7.1191406 C 6.3164062 4.0491006 8.8704 1.5449219 12 1.5449219 z M 12.019531 14.748047 C 15.667531 14.748047 18.433481 15.500972 20.238281 16.951172 C 22.062281 18.457972 22.445312 20.359966 22.445312 21.697266 L 22.425781 28.949219 C 22.156981 29.212919 20.410491 30.474609 11.712891 30.474609 C 3.4568902 30.474609 1.82415 29.21365 1.59375 28.96875 L 1.59375 21.546875 C 1.59375 18.156675 4.8195324 14.748047 12.019531 14.748047 z " />
        </Svg>
      </View>
    );
  }
}