export async function get(req) {
	console.log('testing get')
	return {
		json: {
			message: [{
				listID: '123',
				userID: 'x123',
				title: 'Favorite Devs',
				item1: 'Tim Pope(vim Dark Vader)',
				item2: 'Brian Leroux(creator of Enhance)',
				item3: 'Linus Torvalds(linux)',
				item4: '@ceejbot (Inspiration in Human form)',
				item5: 'Sarah Drasner(Education Pro)',
				item6: 'Ryan Dahl(Node/Deno)',
				item7: 'Louis Montes(Some Rando)',
				item8: 'Larry Page(Google)',
				item9: 'Suz Hinton(Noopkat/Live Code Assassin)',
				item10: 'Kevin Mitnick(hack the planet buddy)'
			}]
		}
	}
}
