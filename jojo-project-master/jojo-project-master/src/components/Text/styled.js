import styled from "styled-components";

export const H1 = styled.h1`
	font-family: 'Unbounded';
	font-style: normal;
	font-weight: 400;
	font-size: 96px;
	line-height: 95%;
	letter-spacing: -0.02em;
	color: ${props => props.color || "#FFFFFF"};
`

export const H2 = styled.h2`
	font-family: 'Unbounded';
	font-style: normal;
	font-weight: 400;
	font-size: 60px;
	line-height: 100%;
	letter-spacing: -0.01em;
	color: ${props => props.color || "#FFFFFF"};
`

export const H3 = styled.h3`
	font-family: 'Unbounded';
	font-style: normal;
	font-weight: 400;
	font-size: 48px;
	line-height: 110%;
	color: ${props => props.color || "#FFFFFF"};
`

export const H4 = styled.h4`
	font-family: 'Unbounded';
	font-style: normal;
	font-weight: 400;
	font-size: 34px;
	line-height: 110%;
	color: ${props => props.color || "#FFFFFF"};
`

export const H5 = styled.h5`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 120%;
	letter-spacing: -0.02em;
	color: ${props => props.color || "#FFFFFF"};
`

export const H6 = styled.h5`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 130%;
	letter-spacing: 0.0125em;
	text-transform: uppercase;
	color: ${props => props.color || "#FFFFFF"};
`

export const P = styled.p`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 130%;
	letter-spacing: -0.02em;
	color: ${props => props.color || "#FFFFFF"};
`

export const Subtitle = styled.p`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 130%;
	letter-spacing: -0.01em;
	color: ${props => props.color || "#FFFFFF"};
`