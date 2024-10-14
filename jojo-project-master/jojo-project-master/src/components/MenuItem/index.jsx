import React from 'react'

import { ItemContainer } from "./styled"
import { Subtitle } from "../Text/styled"

const MenuItem = (props) => {
	return (
		<ItemContainer to={props.to}>{props.icon}<Subtitle>{props.text}</Subtitle></ItemContainer>
	)
}

export default MenuItem