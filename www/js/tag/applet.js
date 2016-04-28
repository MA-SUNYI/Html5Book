var applet = {
  name:'applet',
  html5: false,
  define:[
    'HTML5 中不支持 <applet> 标签。请使用 object 元素 标签代替。',
    '<applet> 标签定义嵌入的 applet。'
  ],
  use:[],
  attention:[
    '如果不使用 href 属性，则不可以使用如下属性：download, hreflang, media, rel, target 以及 type 属性。',
    '被链接页面通常显示在当前浏览器窗口中，除非您规定了另一个目标（target 属性）。',
    '<a> 标签始终是超链接，但是如果未设置 href 属性，则只是超链接的占位符。'
  ]
};
