import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { G, Path, Svg } from 'react-native-svg';

type Props = {
	color?: string;
	size?: number;
	style?: StyleProp<ViewStyle>;
};

export const Logo: FC<Props> = ({ color = 'white', size = 512, style }) => {
	return (
		<Svg
			fill="none"
			height={size}
			style={style}
			viewBox=" 0 0 512 512"
			width={size}
		>
			<G
				transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
				fill={color}
				stroke="none"
			>
				<Path
					d="M2240 5105 c-444 -55 -852 -220 -1220 -493 -150 -112 -400 -362 -512
-512 -276 -372 -439 -779 -494 -1230 -17 -148 -17 -472 0 -620 55 -451 218
-858 494 -1230 112 -150 362 -400 512 -512 372 -276 779 -439 1230 -494 148
-17 472 -17 620 0 451 55 858 218 1230 494 150 112 400 362 512 512 276 372
439 779 494 1230 17 148 17 472 0 620 -55 451 -218 858 -494 1230 -112 150
-362 400 -512 512 -372 276 -779 439 -1230 494 -143 17 -488 16 -630 -1z m660
-180 c698 -105 1308 -504 1687 -1102 72 -115 182 -342 226 -469 45 -129 91
-317 114 -464 24 -159 24 -501 0 -660 -78 -508 -295 -954 -639 -1316 -374
-391 -852 -637 -1398 -721 -159 -24 -501 -24 -660 0 -546 84 -1024 330 -1398
721 -177 186 -307 374 -422 611 -109 224 -177 446 -217 705 -24 159 -24 501 0
660 78 508 295 954 639 1316 318 332 720 566 1159 673 117 28 284 56 394 65
98 8 412 -4 515 -19z"
				/>
				<Path
					d="M3634 4182 c-11 -1 -160 -143 -331 -315 -282 -283 -313 -318 -343
-382 -30 -62 -34 -82 -39 -186 l-6 -118 -82 -83 c-45 -46 -85 -96 -88 -110
-14 -57 26 -108 85 -108 32 0 46 11 145 110 l110 110 6 133 c5 110 9 140 28
177 15 30 123 146 322 345 293 295 299 302 299 341 0 59 -46 96 -106 86z"
				/>
				<Path
					d="M1258 4033 c-36 -39 -82 -136 -102 -215 -73 -292 20 -598 277 -918
33 -41 227 -242 431 -447 416 -417 424 -423 546 -422 86 0 124 14 206 74 10 7
27 -3 65 -41 l52 -52 -13 -52 c-17 -69 -8 -165 20 -220 15 -31 127 -150 348
-371 348 -348 378 -372 486 -389 108 -17 232 25 301 101 95 106 116 249 55
387 -17 38 -262 288 -1293 1320 -1272 1271 -1272 1272 -1313 1272 -31 0 -46
-6 -66 -27z m2498 -2625 c86 -123 -17 -280 -164 -253 -32 6 -83 53 -364 333
-212 211 -332 337 -338 357 -8 23 -6 44 5 81 19 63 19 105 0 152 -21 48 -139
169 -190 193 -70 33 -143 21 -217 -34 -48 -36 -77 -39 -124 -17 -44 22 -645
620 -768 765 -139 164 -229 324 -268 478 -17 67 -20 101 -15 192 3 60 11 125
17 144 l13 33 1194 -1193 c656 -657 1205 -1211 1219 -1231z"
				/>
				<Path
					d="M3564 3618 c-151 -149 -281 -287 -289 -305 -29 -61 11 -123 78 -123
40 0 47 7 318 277 153 152 283 289 290 304 24 60 -17 119 -85 119 -38 0 -47
-7 -312 -272z"
				/>
				<Path
					d="M3846 3352 c-186 -184 -316 -306 -341 -318 -32 -15 -70 -20 -187 -24
l-148 -5 -104 -104 c-63 -63 -106 -114 -109 -130 -8 -41 16 -87 53 -99 46 -17
82 3 170 92 l74 76 116 -1 c206 -1 218 7 593 380 303 302 307 307 307 347 0
53 -31 84 -85 84 -37 0 -49 -11 -339 -298z"
				/>
				<Path
					d="M1825 2216 c-16 -8 -183 -168 -371 -357 -394 -398 -389 -390 -389
-539 0 -78 4 -103 23 -141 36 -74 87 -125 160 -161 59 -29 76 -33 147 -33 146
1 148 2 564 419 347 347 363 365 363 400 0 53 -33 86 -86 86 -40 0 -46 -6
-396 -354 -195 -195 -368 -360 -383 -365 -124 -47 -250 65 -216 192 9 36 57
88 354 387 188 190 345 355 348 368 9 39 -12 83 -49 98 -39 16 -32 16 -69 0z"
				/>
			</G>
		</Svg>
	);
};