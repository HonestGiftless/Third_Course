import styled from "styled-components";

export const PlayerContainer = styled.div`
	position: fixed;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100vw;
	height: 100px;
	padding: 12px 40px;
	background-color: #141414;
`

export const LeftContainer = styled.div`
	display: flex;
	align-items: center;
	width: 33%;
`

export const TrackImg = styled.img`
	width: 52px;
	height: 52px;
	border-radius: 4px;
`

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 16px;
`

export const CenterContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 8px;
	align-items: center;
	width: 33%;
`

export const ControlsTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 12px;
`

export const ControlsBottom = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 8px;
	width: 100%;
`

export const TimeWrapper = styled.div`
	position: relative;
    width: 90%;
	height: 4px;
	background-color: rgba(255, 255, 255, 0.5);
	border-radius: 25px;
	cursor: pointer;
`

export const Time = styled.div`
	height: 4px;
	background-color: white;
	border-radius: 25px;
`

export const TimePoint = styled.div`
	position: absolute;
	top: -6.5px;
	width: 16px;
	height: 16px;
	border-radius: 25px;
	box-shadow: 1px 2px 9px rgba(62, 62, 62, 0.25);
	background-color: #fff;
`

export const RightContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	column-gap: 16px;
	width: 33%;
`

export const VolumeWrapper = styled.div`
	position: relative;
    width: 25%;
	height: 4px;
	background-color: rgba(255, 255, 255, 0.5);
	border-radius: 25px;
	cursor: pointer;
`

export const VolumeLine = styled.div`
	height: 4px;
	background-color: white;
	border-radius: 25px;
`

export const VolumePoint = styled.div`
	position: absolute;
	top: -6.5px;
	width: 16px;
	height: 16px;
	border-radius: 25px;
	box-shadow: 1px 2px 9px rgba(62, 62, 62, 0.25);
	background-color: #fff;
`