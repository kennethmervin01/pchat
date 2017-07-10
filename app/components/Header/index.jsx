import React from 'react'
import { Menu } from 'semantic-ui-react'

const items = [
	{ key: 'home', active: true, name: 'Home' },
]

const Header = () => (
	<Menu pointing secondary items={items} />
)

export default Header
