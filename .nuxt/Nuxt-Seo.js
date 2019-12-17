const Vue = require('vue')
const debug = require('debug')
const deb = debug('nuxt:seo:debug')

const nuxtSeo = {"createMeta":(options = {}, inputMeta = [], template = {}) => {
	const outputMeta = []

	const getMetaKey = input => {
		const keys = Object.keys(input)
		if (input.hid) {
			return input.hid
		} else if (input.key) {
			return input.key
		} else if (input.property) {
			return input.property
		} else if (input.name) {
			return input.name
		}

		return keys[0] || ''
	}

	const findAndRemove = id => {
		inputMeta = inputMeta.filter(meta => {
			return getMetaKey(meta) !== id
		})
	}

	const parserValue = value => {
		if (Array.isArray(value)) {
			value = value.join(',')
		}

		value = value.toString()
		if (!value || value.length <= 0) {
			return false
		}

		return value
	}

	const generate = (metas, opts, id = '', index = false) => {
		metas = {...metas}
		Object.keys(metas).map(k => {
			const meta = {...metas[k]}
			if (meta.fullId) {
				meta.id = meta.fullId
			} else if (!meta.id) { // eslint-disable-line no-negated-condition
				meta.id = id + k
			} else {
				meta.id = id + meta.id
			}

			if (meta.value) {
				if (!opts[k]) {
					return
				}
			} else if (typeof opts === 'string' && k === 'id') {
				meta.value = opts
				meta.id = id
				meta.content = id
			} else if (opts[k]) {
				meta.value = opts[k]
			} else if (meta.default && options[meta.default]) {
				meta.value = options[meta.default]
			} else {
				return
			}

			if (meta.value && meta.multi && Array.isArray(meta.value)) {
				meta.value.forEach((value, index) => {
					let id = ''
					if (meta.fullId) {
						id = meta.fullId
					} else if (typeof value === 'string') {
						id = meta.id
					} else {
						id = `${meta.id}:`
					}

					meta.multi = false
					return generate(meta, value, id, index)
				})
			} else if (typeof meta.value === 'object' && !Array.isArray(meta.value)) {
				return generate(meta, meta.value, meta.id + ':')
			} else if (meta.content) {
				findAndRemove(meta.id)

				meta.value = parserValue(meta.value)
				if (!meta.value) {
					return
				}

				if (meta.ids) {
					meta.ids.map(id => {
						meta.id = id
						outputMeta.push({
							hid: meta.id,
							key: typeof index === 'number' ? `${meta.id}:0${index}` : meta.id,
							property: meta.id,
							name: meta.id,
							content: meta.value
						})
					})
				} else {
					outputMeta.push({
						hid: meta.id,
						key: typeof index === 'number' ? `${meta.id}:0${index}` : meta.id,
						property: meta.id,
						name: meta.id,
						content: meta.value
					})
				}
			} else if (meta.id) {
				if (meta.ids) {
					meta.ids.map(id => {
						findAndRemove(id)

						meta.value = parserValue(meta.value)
						if (!meta.value) {
							return
						}

						outputMeta.push({
							[id]: meta.value
						})
					})
				} else {
					findAndRemove(meta.id)

					meta.value = parserValue(meta.value)
					if (!meta.value) {
						return
					}

					outputMeta.push({
						[meta.id]: meta.value
					})
				}
			}
		})
	}

	generate(template, options)
	return [...inputMeta, ...outputMeta]
},"createTitle":(options = {}) => {
	return options.templateTitle.replace(/%title%/g, options.title).replace(/%name%/g, options.name)
}}
const moduleOptions = {"charset":"utf-8","lang":"en","language":"English","templateTitle":"%title%","title":"Nate Kelley Portfolio","name":"Nate Kelley Portfolio 2020","description":"This is the portfolio of Nate Kelley. This showcases his work up until the year 2020.","image":{"url":"https:\u002F\u002Fnatemkelley.github.io\u002Fportfolio.png","alt":"Portfolio Intro Image"},"og":{"image":{"url":"https:\u002F\u002Fnatemkelley.github.io\u002Fportfolio.png"}}}
const template =  {"charset":{"content":false},"lang":{"content":false},"language":{"content":false},"copyright":{"content":true},"name":{"content":true},"title":{"content":true},"subtitle":{"content":true},"author":{"content":true},"replyTo":{"id":"reply-to","content":true},"description":{"content":true},"keywords":{"content":true},"url":{"content":true},"noindex":{"ids":["robots","googlebot"],"content":true,"value":["index","follow"]},"robots":{"ids":["robots","googlebot"],"content":true},"openGraph":{"id":"og","name":{"id":"site_name","default":"name","content":true},"title":{"default":"title","content":true},"description":{"default":"description","content":true},"locale":{"default":"lang","content":true},"url":{"default":"url","content":true},"type":{"content":true},"profile":{"id":"profile","firstName":{"fullId":"profile:first_name","content":true},"lastName":{"fullId":"profile:last_name","content":true},"username":{"fullId":"profile:username","content":true},"gender":{"fullId":"profile:gender","content":true}},"article":{"publishedTime":{"fullId":"article:published_time","content":true},"modifiedTime":{"fullId":"article:modified_time","content":true},"expirationTime":{"fullId":"article:expiration_time","content":true},"author":{"fullId":"article:author","content":true,"multi":true},"section":{"fullId":"article:section","content":true},"tag":{"fullId":"article:tag","content":true,"multi":true},"authors":{"fullId":"article:author","content":true,"multi":true},"tags":{"fullId":"article:tag","content":true,"multi":true}},"image":{"id":"image","content":true,"multi":true,"url":{"fullId":"og:image","content":true},"width":{"content":true},"height":{"content":true},"alt":{"content":true}},"book":{"id":"book","author":{"fullId":"book:author","content":true,"multi":true},"isbn":{"fullId":"book:isbn","content":true},"releaseDate":{"fullId":"book:release_date","content":true},"tag":{"fullId":"book:author","content":true,"multi":true},"authors":{"fullId":"book:author","content":true,"multi":true},"tags":{"fullId":"book:author","content":true,"multi":true}},"price":{"id":"price","currency":{"content":true},"amount":{"content":true}},"images":{"id":"image","content":true,"multi":true,"url":{"fullId":"og:image","content":true},"width":{"content":true},"height":{"content":true},"alt":{"content":true}}},"facebook":{"id":"fb","appId":{"id":"app_id","content":true},"pageId":{"id":"page_id","content":true}},"twitter":{"id":"twitter","title":{"default":"title","content":true},"description":{"default":"description","content":true},"card":{"content":true},"type":{"id":"card","content":true},"site":{"content":true},"creator":{"content":true}},"article":{"publishedTime":{"fullId":"article:published_time","content":true},"modifiedTime":{"fullId":"article:modified_time","content":true},"expirationTime":{"fullId":"article:expiration_time","content":true},"author":{"fullId":"article:author","content":true,"multi":true},"section":{"fullId":"article:section","content":true},"tag":{"fullId":"article:tag","content":true,"multi":true},"authors":{"fullId":"article:author","content":true,"multi":true},"tags":{"fullId":"article:tag","content":true,"multi":true}},"book":{"id":"book","author":{"fullId":"book:author","content":true,"multi":true},"isbn":{"fullId":"book:isbn","content":true},"releaseDate":{"fullId":"book:release_date","content":true},"tag":{"fullId":"book:author","content":true,"multi":true},"authors":{"fullId":"book:author","content":true,"multi":true},"tags":{"fullId":"book:author","content":true,"multi":true}},"image":{"id":"image","content":true,"multi":true,"url":{"fullId":"og:image","content":true},"width":{"content":true},"height":{"content":true},"alt":{"content":true}},"images":{"id":"image","content":true,"multi":true,"url":{"fullId":"og:image","content":true},"width":{"content":true},"height":{"content":true},"alt":{"content":true}},"og":{"id":"og","name":{"id":"site_name","default":"name","content":true},"title":{"default":"title","content":true},"description":{"default":"description","content":true},"locale":{"default":"lang","content":true},"url":{"default":"url","content":true},"type":{"content":true},"profile":{"id":"profile","firstName":{"fullId":"profile:first_name","content":true},"lastName":{"fullId":"profile:last_name","content":true},"username":{"fullId":"profile:username","content":true},"gender":{"fullId":"profile:gender","content":true}},"article":{"publishedTime":{"fullId":"article:published_time","content":true},"modifiedTime":{"fullId":"article:modified_time","content":true},"expirationTime":{"fullId":"article:expiration_time","content":true},"author":{"fullId":"article:author","content":true,"multi":true},"section":{"fullId":"article:section","content":true},"tag":{"fullId":"article:tag","content":true,"multi":true},"authors":{"fullId":"article:author","content":true,"multi":true},"tags":{"fullId":"article:tag","content":true,"multi":true}},"image":{"id":"image","content":true,"multi":true,"url":{"fullId":"og:image","content":true},"width":{"content":true},"height":{"content":true},"alt":{"content":true}},"book":{"id":"book","author":{"fullId":"book:author","content":true,"multi":true},"isbn":{"fullId":"book:isbn","content":true},"releaseDate":{"fullId":"book:release_date","content":true},"tag":{"fullId":"book:author","content":true,"multi":true},"authors":{"fullId":"book:author","content":true,"multi":true},"tags":{"fullId":"book:author","content":true,"multi":true}},"price":{"id":"price","currency":{"content":true},"amount":{"content":true}},"images":{"id":"image","content":true,"multi":true,"url":{"fullId":"og:image","content":true},"width":{"content":true},"height":{"content":true},"alt":{"content":true}}},"fb":{"id":"fb","appId":{"id":"app_id","content":true},"pageId":{"id":"page_id","content":true}}}

export default function (ctx, inject) {
	function create (options = {}) {
		options = {
			...moduleOptions,
			...options
		}
		ctx.app.head.title = nuxtSeo.createTitle(options)
		ctx.app.head.meta = nuxtSeo.createMeta(options, ctx.app.head.meta, template)
		if (Vue.prototype && Vue.prototype.$meta) {
			if (Vue.prototype.$nuxt && Vue.prototype.$nuxt.$options && Vue.prototype.$nuxt.$options.head) {
				Vue.prototype.$nuxt.$options.head = ctx.app.head
			}
		}
		deb('HEAD:', ctx.app.head)
	}
	ctx.seo = create
	inject('seo', create)
}
