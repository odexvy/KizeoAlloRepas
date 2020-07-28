import { Dimensions } from 'react-native';

const BLACK = '#294738';

const GREEN = '#4fd693';

export const COLORS = {
	accent: GREEN,
	background: BLACK,
	border: GREEN,
	mainText: BLACK,
};

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
	'window',
);
const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;
export const LATITUDE_DELTA = 0.23;
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
