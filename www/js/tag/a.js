var a = {
  name:'a',
  html5: true,
  define:[
    '<a> 标签定义超链接，用于从一张页面链接到另一张页面。',
    '<a> 元素最重要的属性是 href 属性，它指示链接的目标。'
  ],
  use:[],
  attention:[
    '如果不使用 href 属性，则不可以使用如下属性：download, hreflang, media, rel, target 以及 type 属性。',
    '被链接页面通常显示在当前浏览器窗口中，除非您规定了另一个目标（target 属性）。',
    '<a> 标签始终是超链接，但是如果未设置 href 属性，则只是超链接的占位符。'
  ],
  attribure:[
      { name:'charset', value:['char_encoding'], desc:'HTML5 中不支持。规定被链接文档的字符集。' },
      { name:'coords', value:['coordinates'], desc:'HTML5 中不支持。规定链接的坐标。' },
      { name:'download', value:['filename'], desc:'规定被下载的超链接目标。' },
      { name:'href', value:['URL'], desc:'规定链接指向的页面的 URL。' },
      { name:'hreflang', value:['language_code'], desc:'规定被链接文档的语言。' },
      { name:'media', value:['media_query'], desc:'规定被链接文档是为何种媒介/设备优化的。' },
      { name:'name', value:['section_name'], desc:'HTML5 中不支持。规定锚的名称。' },
      { name:'rel', value:['text'], desc:'规定当前文档与被链接文档之间的关系。' },
      { name:'rev', value:['text'], desc:'HTML5 中不支持。规定被链接文档与当前文档之间的关系。' },
      { name:'shape', value:['default','rect','circle','poly'], desc:'HTML5 中不支持。规定链接的形状。' },
      { name:'target', value:['_blank','_parent','_self','_top','framename'], desc:'规定在何处打开链接文档。' },
      { name:'type', value:['MIME type'], desc:'规定被链接文档的的 MIME 类型。' },
  ]
};
