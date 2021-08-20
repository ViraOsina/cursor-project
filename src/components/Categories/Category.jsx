import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Flex from '../StyledComponents/Flex'
import TableRow from '../StyledComponents/TableRow'
import TableRowItem from '../StyledComponents/TableRowItem'
import TextContent from '../StyledComponents/TextContent'

export default function Category(props) {
	return (
		<TableRow>
			<TableRowItem>
				<FontAwesomeIcon icon={props.icon} />
				<TextContent margin="10px">{props.name}</TextContent>
			</TableRowItem>
			<TableRowItem>{props.description}</TableRowItem>
			<TableRowItem>{props.date}</TableRowItem>
			<TableRowItem>
				<FontAwesomeIcon icon={faTrashAlt} />
			</TableRowItem>
		</TableRow>
	)
}
