import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { G, Path, Rect, Svg } from 'react-native-svg';
import { COLORS } from '#/constants/theme';

type Props = {
	size?: number;
	style?: StyleProp<ViewStyle>;
};

export const HeaderBlob: FC<Props> = ({ size = 142.313, style }) => {
	return (
		<Svg
			fill="none"
			height={size / (142.313 / 38.727)}
			style={style}
			viewBox="0 -0.141 142.313 38.727"
			width={size}
		>
			<G>
				<Path
					d=" M 90.376 2.884 C 99.73 2.926 107.051 2.846 114.262 2.873 C 131.104 2.936 142.439 3.881 142.309 4.367 C 138.365 18.677 123.939 30.039 111.705 35.271 C 99.47 40.504 89.966 38.796 76.215 35.271 C 62.566 31.641 41.838 33.098 27.784 29.04 C 13.73 24.982 6.681 15.149 0.008 4.363 C -0.481 3.562 49.302 3.558 90.376 2.884 Z "
					fill={COLORS.accent}
				/>
				<Rect
					x="0"
					y="-0.141"
					width="142.313"
					height="4.5"
					transform="matrix(1,0,0,1,0,0)"
					fill={COLORS.accent}
				/>
			</G>
		</Svg>
	);
};
