const appSelector = query('[data-js=select-app]')

const normalizeUrl = event => {
	const value = event.target.value
	const valueInLowercase = value.toLowerCase()
	const normalizedValue = valueInLowercase.normalize("NFD").replace(/[\u0300-\u036f ]/g, "-")

	callAppPage(normalizedValue)
}

function callAppPage(normalizedValue) {
	window.location.assign(`./${normalizedValue}.html`)
}

appSelector.addEventListener('change', normalizeUrl)