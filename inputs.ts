export const getLocationLists = fetch('https://adventofcode.com/2024/day/1/input', {
		headers: {
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:132.0) Gecko/20100101 Firefox/132.0',
		'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
			'Accept-Language': 'en-US,en;q=0.5',
			'Accept-Encoding': 'gzip, deflate, br, zstd',
		'Referer': 'https://adventofcode.com/2024/day/1',
			'Sec-GPC': '1',
		'Connection': 'keep-alive',
		'Cookie': 'ru=53616c7465645f5f453ac6571c0ca2182042c79afe244e5a17382978f9f024e0ba36cf0f8b7961d25ee0044a2821b12b; session=53616c7465645f5f613e5adc9e4aad3eaf4d1aba725d8495285f3a97aaff65129b54a7ba2e41bd4b03edbd3678b6468c82de4e1f9406db0dafefaeb7bd17fa91',
			'Upgrade-Insecure-Requests': '1',
		'Sec-Fetch-Dest': 'document',
		'Sec-Fetch-Mode': 'navigate',
		'Sec-Fetch-Site': 'same-origin',
		'Sec-Fetch-User': '?1',
		'Priority': 'u=0, i',
			'Pragma': 'no-cache',
		'Cache-Control': 'no-cache'
	}
	}).then(res => res.text())
