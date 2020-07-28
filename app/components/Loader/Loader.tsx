import React, { FC } from 'react';
import { ActivityIndicator, StyleProp, ViewStyle } from 'react-native';

import { COLORS } from '#/constants/theme';
import { Logo } from '#/components/icons/Logo';
import styled from 'styled-components/native';

export type Props = {
	style?: StyleProp<ViewStyle>;
};

export const Loader: FC<Props> = ({ style }) => {
	return (
		<LoaderContainer style={style}>
			<ActivityIndicator color={COLORS.accent} size={120} />
			<LoaderLogo color={COLORS.accent} size={80} />
		</LoaderContainer>
	);
};

const LoaderContainer = styled.View`
	align-items: center;
	justify-content: center;
`;

const LoaderLogo = styled(Logo)`
	position: absolute;
`;
