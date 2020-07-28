import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { G, Path, Svg } from 'react-native-svg';
import { COLORS } from '#/constants/theme';

type Props = {
	size?: number;
	style?: StyleProp<ViewStyle>;
};

export const MapMarker: FC<Props> = ({ size = 560, style }) => {
	return (
		<Svg
			fill="none"
			height={size}
			style={style}
			viewBox=" 0 0 365 560"
			width={size / (365 / 560)}
		>
			<G>
				<Path
					fill={COLORS.accent}
					d="M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9C96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z M122.2,187.2c0-33.6,27.2-60.8,60.8-60.8c33.6,0,60.8,27.2,60.8,60.8S216.5,248,182.9,248C149.4,248,122.2,220.8,122.2,187.2z"
				/>
			</G>
		</Svg>
	);
};
