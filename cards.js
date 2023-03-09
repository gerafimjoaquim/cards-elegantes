const btnGoToRepository = query('.btn-go-to-repository')

const cards = [
	{
		image: 'logo_javascript.jpg',
		caption: 'JSP',
		content: 'É uma Linguagem de Programação interpretada, multiparadigma e baseada em objectos, com funções de primeira classe.'
	},

	{
		image: 'logo_css.jpg',
		caption: 'CSS3',
		content: 'É uma linguagem de Estilização que permite criar páginas da web de excelente aparência. Com ela podemos definir o layout e adicionar outros recursos decorativos.'
	},

	{
		image: 'logo_html.jpg',
		caption: `HTML5`,
		content: 'É uma Linguagem de Marcação de Hipertexto. Ela informa ao navegador o papel semântico de cada bloco de conteúdo que está dentro de uma página Web.'
	}
]

function createCard (cards) {
	const figure = newElement('figure')

	createImg(figure, cards)
	createCaption(figure, cards)
	createBody(figure, cards)

	query('.cards-container').append(figure)
}

function createImg(figure, { image, caption}) {
	const imgLink = newElement('a')
	const img = newElement('img')
	const url = narmalizeUrl(caption)

	setAttribute(img, 'src', `./images/${image}`)
	setAttribute(img, 'width', 300)

	setAttribute(imgLink, 'href', `./${url}.html`)

	imgLink.append(img)

	figure.prepend(imgLink)
}

function createCaption(figure, { caption}) {
	const captionLink = newElement('a')
	const figCaption = newElement('figcaption')
	const url = narmalizeUrl(caption)

	setAttribute(captionLink, 'href', `./${url}.html`)

	figCaption.textContent = caption
	captionLink.append(figCaption)

	figure.append(captionLink)
}

function createBody(figure, cards) {
	const body = newElement('div')

	figure.append(body)
	createParagraph(body, cards)
	createLink(body, cards)
}

function createParagraph (body, { content }) {
	const paragraph = newElement('p')
	paragraph.textContent = content

	body.append(paragraph)
}

function createLink (body, { caption }) {
	const link = newElement('a')
	const url = narmalizeUrl(caption)

	setAttribute(link, 'href', `./${url}.html`)
	setAttribute(link, 'class', 'btn')
	addClass(link, 'btn-blue')

	link.textContent = 'Ler artigo'

	body.append(link)
}

cards.forEach(createCard)

function goToRepository () {
	const repositoryName = 'https://github.com/gerafimjoaquim/todo-list'

	setAttribute(btnGoToRepository, 'target', '_blank')
	setAttribute(btnGoToRepository, 'href', repositoryName)

}

btnGoToRepository.addEventListener('click', goToRepository)