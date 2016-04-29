var colgroup = {
  name:'colgroup',
  html5: true,
  define:[
    '<colgroup> 标签用于对表格中的列进行组合，以便对其进行格式化。',
    '如需对全部列应用样式，<colgroup> 标签很有用，这样就不需要对各个单元和各行重复应用样式了。',
    '<colgroup> 标签只能在 table 元素中使用。'
  ],
  use:[],
  attention:[
    '请为 <colgroup> 标签添加 class 属性。这样就可以使用 CSS 来负责对齐方式、宽度和颜色等等。'
  ],
  attribure:[
    { name:'align', value:['right','left','center','justify','char'], desc:'定义在列组合中内容的水平对齐方式。' },
    { name:'char', value:['character'], desc:'规定根据哪个字符来对齐列组中的内容。' },
    { name:'charoff', value:['number'], desc:'规定第一个对齐字符的偏移量。' },
    { name:'span', value:['number'], desc:'规定列组应该横跨的列数。' },
    { name:'valign', value:['top','middle','bottom','baseline'], desc:'定义在列组合中内容的垂直对齐方式。' },
    { name:'width', value:['pixels','%','relative_length'], desc:'规定列组合的宽度。' }
  ]
};
