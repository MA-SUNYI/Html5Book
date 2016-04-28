var base = {
    name:'base',
    html5: true,
    define:[
        '<base> 标签为页面上的所有链接规定默认地址或默认目标。',
        '通常情况下，浏览器会从当前文档的 URL 中提取相应的元素来填写相对 URL 中的空白。',
        '使用 <base> 标签可以改变这一点。浏览器随后将不再使用当前文档的 URL，而使用指定的基本 URL 来解析所有的相对 URL。这其中包括 <a>、<img>、<link>、<form> 标签中的 URL。'
    ],
    use:[],
    attention:[
        '<base> 标签必须位于 head 元素内部。'
    ],
    attribure:[
        { name:'href', value:['URL'], desc:'规定页面中所有相对链接的基准 URL。' },
        { name:'target', value:['_blank','_parent','_self','_top','framename'], desc:'在何处打开页面中所有的链接。' }
    ]
};
