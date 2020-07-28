import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

export type Props = {
	disabled?: boolean;
	onClick: () => void;
	style?: StyleProp<ViewStyle>;
};

export const Button: FC<Props> = ({
	children,
	disabled,
	onClick,
	style,
	...propsRest
}) => {
	return (
		<CustomButton
			activeOpacity={0.75}
			disabled={disabled}
			onPress={onClick}
			style={style}
			{...propsRest}
		>
			{children}
		</CustomButton>
	);
};

const CustomButton = styled.TouchableOpacity`
	align-items: center;
	border-radius: 4px;
	flex-direction: row;
	height: 40px;
	justify-content: center;
`;
