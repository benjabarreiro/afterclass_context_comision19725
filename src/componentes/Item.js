import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({product}) {
	return (
		<div>
			<p>{product.name}</p>
			<Link to={`/${product.id}`}>Ir al detalle</Link>
		</div>
	)
}
