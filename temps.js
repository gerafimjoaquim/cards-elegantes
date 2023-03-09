const query = element => document.querySelector(element)
const newElement = element => document.createElement(element)
const addClass = (element, value) => element.classList.add(value)
const setAttribute = (element, name, value) => element.setAttribute(name, value)
const textNode = (text) => document.createTextNode(text)

const body = query('body')

const narmalizeUrl = url => {
	const urlInLowerCase = url.toLowerCase()
	const normalizedUrl = urlInLowerCase
	.normalize("NFD").replace(/[\u0300-\u036f ]/g, "-")

	return normalizedUrl
}

function createHeader (body) {
	const header = newElement ('header')

	addClass(header, 'header')
	body.prepend(header)
	createContainer(header)
}

function createFooter (body) {
	const footer = newElement ('footer')

	addClass(footer, 'footer')
	body.append(footer)
	setCopyright(footer)
}

function setCopyright(footer) {
	const currentYear = new Date().getFullYear()
	const paragraph = `<p>&copy;${currentYear} - gerafim</p>`

	footer.innerHTML = paragraph
}

function createContainer(header) {
	const container = newElement ('div')

	addClass(container, 'container')
	addClass(container, 'menu-container')
	header.append(container)

	createAppSelector(container)
}

function createAppSelector(container) {
	
	const applications = [
		'Cards elegantes'
	]

	const select = newElement ('select')	
	const selectorPlaceholder = 'Selecione App'

	setAttribute(select, 'data-js', 'select-app')
	applications.push(selectorPlaceholder)

	applications.forEach(application => {
		const option = newElement ('option')
		const optionLabels = textNode(application)

		option.append(optionLabels) 
		setAttribute(option, 'value', `${application}`)
		
		if (application === selectorPlaceholder) {
		 	setAttribute(option, 'selected', 'on')
		 	setAttribute(option, 'disabled', 'true')
		}

		select.append(option)
	})
	
	container.append(select)
}

createHeader(body)
createFooter(body)