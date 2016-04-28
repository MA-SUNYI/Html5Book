var basefont = {
    name:'basefont',
    html5: true,
    define:[
        '<basefont> 标签定义基准字体。该标签可以为文档中的所有文本定义默认字体颜色、字体大小和字体系列。'
    ],
    use:[],
    attention:[
        '如果不使用 href 属性，则不可以使用如下属性：download, hreflang, media, rel, target 以及 type 属性。',
        '被链接页面通常显示在当前浏览器窗口中，除非您规定了另一个目标（target 属性）。',
        '<a> 标签始终是超链接，但是如果未设置 href 属性，则只是超链接的占位符。'
    ],
    attribure:[
        { name:'color', value:['rgb(x,x,x)','#xxxxxx','colorname'], desc:'不赞成使用。请使用样式取代它。规定文档中的默认文本颜色。' },
        { name:'face', value:['font_family'], desc:'不赞成使用。请使用样式取代它。规定文档中的默认字体。' },
        { name:'size', value:['number'], desc:'不赞成使用。请使用样式取代它。规定文档中的默认字体大小。' }
    ]
};
