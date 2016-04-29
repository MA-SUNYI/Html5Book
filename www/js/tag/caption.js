var caption = {
  name:'caption',
  html5: true,
  define:[
    'caption 元素定义表格标题。',
    'caption 标签必须紧随 table 标签之后。您只能对每个表格定义一个标题。通常这个标题会被居中于表格之上。'
  ],
  use:[],
  attention:[
    '如果不使用 href 属性，则不可以使用如下属性：download, hreflang, media, rel, target 以及 type 属性。',
    '被链接页面通常显示在当前浏览器窗口中，除非您规定了另一个目标（target 属性）。',
    '<a> 标签始终是超链接，但是如果未设置 href 属性，则只是超链接的占位符。'
  ],
  attribure:[
    { name:'align', value:['left','right','top','bottom'], desc:'不赞成使用。请使用样式取而代之。规定标题的对齐方式。' }
  ]
};
