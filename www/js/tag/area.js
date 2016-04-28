var area = {
  name:'area',
  html5: true,
  define:[
    '<area> 标签定义图像映射中的区域（注：图像映射指得是带有可点击区域的图像）。',
    'area 元素总是嵌套在 <map> 标签中。'
  ],
  use:[],
  attention:[
    '<img> 中的 usemap 属性可引用 <map> 中的 id 或 name 属性（由浏览器决定），所以我们需要同时向 <map> 添加 id 和 name 两个属性。'
  ],
  attribure:[
    { name:'alt', value:['text'], desc:'定义此区域的替换文本。' },
    { name:'coords', value:['坐标值'], desc:'定义可点击区域（对鼠标敏感的区域）的坐标。' },
    { name:'href', value:['URL'], desc:'定义此区域的目标 URL。' },
    { name:'nohref', value:['nohref'], desc:'从图像映射排除某个区域。' },
    { name:'shape', value:['default','rect','circle','poly'], desc:'定义区域的形状。' },
    { name:'target', value:['_blank','_parent','_self','_top'], desc:'规定在何处打开 href 属性指定的目标 URL。' }
  ]
};
