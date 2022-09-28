export default function ShowLists({html, state = {}}) {
	const {store = {}} = state
	const {message = ''} = store
	console.log('store', store)

	const list = store.message[0]
	console.log('list', list)

	return html`<p>
		<h1>${list.title}</h1>
		<ol>
			<li>${list.item1}</li>
			<li>${list.item2}</li>
			<li>${list.item3}</li>
			<li>${list.item4}</li>
			<li>${list.item5}</li>
			<li>${list.item6}</li>
			<li>${list.item7}</li>
			<li>${list.item8}</li>
			<li>${list.item9}</li>
			<li>${list.item10}</li>
		</ol>
		</p>`
}
