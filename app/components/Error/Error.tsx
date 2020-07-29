import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from '#/constants/theme';
import { Button } from '#/components/Button';

export type Props = {
	error: string;
	onClick: () => void;
	style?: StyleProp<ViewStyle>;
};

export const Error: FC<Props> = ({ error, onClick, style }) => {
	const handleClick = () => {
		onClick();
	};
	return (
		<ErrorContainer>
			<ErrorText>Une erreur est survenue :</ErrorText>
			<ErrorText>{error}</ErrorText>

			<ErrorButton onClick={handleClick}>
				<LogButtonText>Recharger</LogButtonText>
			</ErrorButton>
		</ErrorContainer>
	);
};

const ErrorContainer = styled.View``;

const ErrorText = styled.Text`
	color: ${COLORS.mainText};
	text-align: center;
	font-size: 14px;
	margin-bottom: 10px;
`;

const ErrorButton = styled(Button)`
	background-color: ${COLORS.accent};
	border-radius: 50px;
	margin-top: 20px;
	padding: 10px 24px;
`;

const LogButtonText = styled.Text`
	color: ${COLORS.mainText};
	text-align: center;
	font-size: 14px;
`;
