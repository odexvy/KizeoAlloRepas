import React, { FC } from 'react';
import { Dimensions, StyleProp, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS } from '#/constants/theme';
import { Loader } from '#/components/Loader';
import { Button } from '#/components/Button';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

type Restaurant = {
	description: string;
	id: string;
	name: string;
	lat: number;
	logo: string;
	long: number;
	note: number;
};

type Props = {
	closeModal: () => void;
	isVisible: boolean;
	restaurant: Restaurant;
	style?: StyleProp<ViewStyle>;
};

export const DetailsModal: FC<Props> = ({
	closeModal,
	isVisible,
	restaurant,
	style,
}) => {
	const handleCloseModal = () => {
		closeModal();
	};

	return (
		<ModalContainer
			isVisible={isVisible}
			onBackdropPress={handleCloseModal}
			onBackButtonPress={handleCloseModal}
			style={style}
		>
			<ModalScrollView
				contentContainerStyle={{
					alignItems: 'center',
					justifyContent: 'center',
					flexGrow: 1,
					padding: 20,
				}}
				showsVerticalScrollIndicator={false}
			>
				{restaurant ? (
					<>
						<CloseButton onClick={handleCloseModal}>
							<CrossIcon name={'close'} size={15} />
						</CloseButton>
						<ModalTitle>{restaurant.name}</ModalTitle>
						{restaurant.logo ? (
							<ModalImage
								resizeMode={'contain'}
								source={{ uri: restaurant.logo }}
							/>
						) : undefined}
						<ModalText>
							{restaurant.description
								? restaurant.description
								: 'Description manquante.'}
						</ModalText>

						{restaurant.note ? (
							<RateContainer>
								<ModalText
									style={{ marginBottom: 0, marginRight: 10 }}
								>{`Note : ${restaurant.note}`}</ModalText>
								<Stars
									value={restaurant.note}
									count={5}
									spacing={5}
									backingColor="white"
									fullStar={
										<StarsIcon name={'star'} size={30} />
									}
									emptyStar={
										<StarsIcon
											name={'star-outline'}
											size={30}
										/>
									}
									halfStar={
										<StarsIcon
											name={'star-half'}
											size={30}
										/>
									}
								/>
							</RateContainer>
						) : (
							<ModalText>Note manquante.</ModalText>
						)}
					</>
				) : (
					<Loader />
				)}
			</ModalScrollView>
		</ModalContainer>
	);
};

const ModalContainer = styled(Modal)`
	margin: 0;
	justify-content: flex-end;
`;

const ModalScrollView = styled.ScrollView`
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	background-color: white;
	flex-grow: 0;
	max-height: ${SCREEN_HEIGHT / 2};
`;

const ModalTitle = styled.Text`
	color: ${COLORS.accent};
	text-align: center;
	font-size: 24px;
	margin-bottom: 30px;
`;

const ModalImage = styled.Image`
	height: 50px;
	width: 50px;
	margin-bottom: 30px;
`;

const ModalText = styled.Text`
	color: ${COLORS.mainText};
	text-align: center;
	font-size: 14px;
	margin-bottom: 20px;
`;

const RateContainer = styled.View`
	align-items: center;
	flex-direction: row;
`;

const StarsIcon = styled(Icon)`
	color: ${COLORS.accent};
	background-color: transparent;
`;

const CloseButton = styled(Button)`
	align-self: flex-end;
	background-color: ${COLORS.accent};
	border-radius: 15px;
	margin-bottom: 10px;
	height: 25px;
	width: 25px;
`;

const CrossIcon = styled(Icon)`
	color: white;
	background-color: transparent;
`;
