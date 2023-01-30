import React from "react";
import styled, { useTheme } from "styled-components/native";

//This is a spacer component for view elements that we don't have to
//use inline styling

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

//Android is unable to load getVariant on load. Solution is to seperate the styled.View
//returned by the Spacer component we pass the variant in SpacerView component immediatly
const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

//get the position and size of the spacer component and run the getVariant function
//that takes position and size and selects positionVariant&sizeVariant based of what was given
export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
