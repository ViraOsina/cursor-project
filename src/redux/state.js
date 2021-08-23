import Icons from '../components/Icons'

export const initialState = {
	categories: [
		{
			id: Math.trunc(Math.random() * Date.now()),
			name: 'Food',
			icon: Icons.Food,
			description: 'For all my food',
			date: '21 Jul',
			standard: true,
		},
		{
			id: Math.trunc(Math.random() * Date.now()),
			name: 'Clothes',
			icon: Icons.Clothes,
			description: 'Clothing costs',
			date: '9 Jun',
			standard: true,
		},
		{
			id: Math.trunc(Math.random() * Date.now()),
			name: 'Restaurants',
			icon: Icons.Restaurants,
			description: 'The cost of going to the restaurant',
			date: '17 Dec',
			standard: true,
		},
		{
			id: Math.trunc(Math.random() * Date.now()),
			name: 'Utility bills',
			icon: Icons.UtilityBills,
			description: 'Who invented the water bills?',
			date: '14 Nov',
			standard: true,
		},
		{
			id: Math.trunc(Math.random() * Date.now()),
			name: 'Pets',
			icon: Icons.Pets,
			description: 'Shopping for a tailed friend',
			date: '21 Oct',
			standard: true,
		},
	],
}
