import React, { FC, MutableRefObject } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

import { COLORS, SCREEN_WIDTH } from '#/constants/theme';
import MapView, { Callout, Marker, Region } from 'react-native-maps';
import { MapMarker } from '#/components/icons/MapMarker';
import { Button } from '#/components/Button/Button';

type MapType = 'standard' | 'hybrid';

type Restaurant = {
	description: string;
	id: string;
	name: string;
	lat: number;
	logo: string;
	long: number;
	note: number;
};
type Restaurants = Restaurant[];

type Props = {
	centerMap: () => void;
	changeMapType: () => void;
	initialCoords: Region;
	mapType: MapType;
	mapRef: MutableRefObject<MapView>;
	restaurants: Restaurants;
	setIsModalOpen: () => void;
	setSelectedRestaurant: (Restaurant) => void;
	style?: StyleProp<ViewStyle>;
};

export const Map: FC<Props> = ({
	centerMap,
	changeMapType,
	initialCoords,
	mapType,
	mapRef,
	restaurants,
	setIsModalOpen,
	setSelectedRestaurant,
}) => {
	const handleCenterMap = () => {
		centerMap();
	};
	const handleChangeMapType = () => {
		changeMapType();
	};
	const handleSetIsModalOpen = () => {
		setIsModalOpen();
	};
	const handleSetSelectedRestaurant = (restaurant: Restaurant) => {
		setSelectedRestaurant(restaurant);
	};

	return (
		<Container>
			<MapView
				ref={mapRef}
				mapPadding={{
					top: 70,
					right: 0,
					bottom: 0,
					left: 0,
				}}
				mapType={mapType}
				initialRegion={initialCoords}
				showsUserLocation={true}
				showsCompass={false}
				showsScale={false}
				showsMyLocationButton={false}
				style={{
					flex: 1,
					width: SCREEN_WIDTH,
				}}
			>
				{restaurants.map((restaurant, index) => (
					<Marker
						onPress={() => {
							handleSetIsModalOpen();
							handleSetSelectedRestaurant(restaurant);
						}}
						key={index}
						coordinate={{
							latitude: restaurant.lat,
							longitude: restaurant.long,
						}}
						tracksViewChanges={false}
					>
						<CustomMarker>
							<CustomMarkerText>
								{restaurant.name}
							</CustomMarkerText>
							<MapMarker size={30} />
						</CustomMarker>
						<Callout />
					</Marker>
				))}
			</MapView>
			<ButtonsCase>
				<MapButton onClick={handleChangeMapType}>
					<MapButtonText>
						{mapType === 'standard' ? ' Vue satellite' : 'Vue plan'}
					</MapButtonText>
				</MapButton>
				<MapButton onClick={handleCenterMap}>
					<MapButtonText>Recentrer</MapButtonText>
				</MapButton>
			</ButtonsCase>
		</Container>
	);
};

const Container = styled.View``;

const CustomMarker = styled.View`
	align-items: center;
	justify-content: center;
`;

const CustomMarkerText = styled.Text`
	background-color: white;
	border-radius: 50px;
	border-color: ${COLORS.accent};
	border-width: 1px;
	margin-bottom: 5px;
	padding: 5px 15px;
`;

const ButtonsCase = styled.View`
	position: absolute;
	bottom: 10px;
	right: 10px;
`;

const MapButton = styled(Button)`
	background-color: ${COLORS.accent};
	border-radius: 50px;
	margin-top: 10px;
	padding: 10px 24px;
`;

const MapButtonText = styled.Text`
	color: ${COLORS.mainText};
	text-align: center;
	font-size: 14px;
`;
