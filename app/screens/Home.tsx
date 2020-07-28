import { registerRootComponent } from 'expo';
import React, { StrictMode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';
import { requestPermissionsAsync, watchPositionAsync } from 'expo-location';
import MapView from 'react-native-maps';

import {
	LATITUDE_DELTA,
	LONGITUDE_DELTA,
	SCREEN_WIDTH,
} from '#/constants/theme';
import { GetRestaurantsFromLoc } from '#/services/GetRestaurantsFromLoc';
import { HeaderBlob } from '#/components/icons/HeaderBlob';
import { DetailsModal } from '#/screens/Modal';
import { Logo } from '#/components/icons/Logo';
import { Map } from '#/screens/Map';
import { Loader } from '#/components/Loader';
import { Error } from '#/components/Error';

type Location = {
	latitude: number;
	longitude: number;
};

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

type MapType = 'standard' | 'hybrid';

export default function Home() {
	const [error, setError] = useState<string>();
	const [initialLoc, setInitialLoc] = useState<Location>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [mapType, setMapType] = useState<MapType>('standard');
	const [reload, setReload] = useState(0);
	const [restaurants, setRestaurants] = useState<Restaurants>([]);
	const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant>(
		null,
	);

	const mapRef = useRef<MapView>();

	useEffect(() => {
		let clean;

		setError(undefined);

		const fn = async () => {
			let { granted } = await requestPermissionsAsync();
			if (!granted) {
				return setError('Permission denied');
			}
			clean = await watchPositionAsync(
				{ timeInterval: 1000, distanceInterval: 50 },
				async (data) => {
					try {
						const { latitude, longitude } = data.coords;
						setInitialLoc({ latitude, longitude });

						setRestaurants(
							await GetRestaurantsFromLoc(latitude, longitude),
						);
					} catch (e) {
						typeof e === 'string'
							? setError(e)
							: setError(e.message);
					}
				},
			);
		};

		fn().catch((e) => {
			setError(e.message);
		});

		return () => {
			if (clean != null) {
				clean.remove();
				clean = null;
			}
		};
	}, [reload]);

	const reFetchData = () => {
		setReload((prevState) => prevState + 1);
	};

	if (error) {
		return (
			<LoaderContainer>
				<Error error={error} onClick={reFetchData} />
			</LoaderContainer>
		);
	}

	if (initialLoc == null) {
		return (
			<LoaderContainer>
				<Loader />
			</LoaderContainer>
		);
	}

	const changeMapType = () => {
		setMapType((prevState) =>
			prevState === 'standard' ? 'hybrid' : 'standard',
		);
	};

	const centerMap = () => {
		mapRef.current?.animateToRegion({
			latitude: initialLoc.latitude,
			latitudeDelta: LATITUDE_DELTA,
			longitude: initialLoc.longitude,
			longitudeDelta: LONGITUDE_DELTA,
		});
	};

	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};

	const setRestaurant = (restaurant) => {
		setSelectedRestaurant(restaurant);
	};

	return (
		<Page>
			<Header>
				<HeaderBlob size={SCREEN_WIDTH + 30} />
				<HeaderTitle>
					<HeaderLogo size={SCREEN_WIDTH / 8} />
					<HeaderText>AlloRepas</HeaderText>
				</HeaderTitle>
			</Header>
			<Main>
				{error ? (
					<Error error={error} onClick={reFetchData} />
				) : (
					<Map
						centerMap={centerMap}
						changeMapType={changeMapType}
						initialCoords={{
							latitude: initialLoc.latitude,
							latitudeDelta: LATITUDE_DELTA,
							longitude: initialLoc.longitude,
							longitudeDelta: LONGITUDE_DELTA,
						}}
						mapType={mapType}
						mapRef={mapRef}
						restaurants={restaurants}
						setIsModalOpen={openModal}
						setSelectedRestaurant={setRestaurant}
					/>
				)}
			</Main>
			<DetailsModal
				closeModal={closeModal}
				isVisible={isModalOpen}
				restaurant={selectedRestaurant}
			/>
		</Page>
	);
}

const Page = styled.SafeAreaView`
	align-items: center;
	background-color: white;
	flex: 1;
`;

const Header = styled.View`
	align-items: center;
	justify-content: center;
	z-index: 1;
	position: absolute;
`;

const HeaderTitle = styled.View`
	flex-direction: row;
	align-items: center;
	position: absolute;
`;

const HeaderLogo = styled(Logo)`
	margin-right: 10px;
`;

const HeaderText = styled.Text`
	color: white;
	text-align: center;
	font-size: 28px;
`;

const LoaderContainer = styled.SafeAreaView`
	align-items: center;
	justify-content: center;
	flex: 1;
`;

const Main = styled.View`
	align-items: center;
	justify-content: center;
	flex: 1;
`;

registerRootComponent(Home);
