var col = {
  name:'col',
  html5: true,
  define:[
    '<col> 标签为表格中一个或多个列定义属性值。',
    '如需对全部列应用样式，<col> 标签很有用，这样就不需要对各个单元和各行重复应用样式了。',
    '您只能在 table 或 colgroup 元素中使用 <col> 标签。'
  ],
  use:[],
  attention:[
    '请为 <col> 标签添加 class 属性。这样就可以使用 CSS 来负责对齐方式、宽度和颜色等等。',
    '如果您希望在 colgroup 内部为每个列规定不同的属性值时，请使用此元素。如果没有 col 元素，列会从 colgroup 那里继承所有的属性值。',
    'col 元素是仅包含属性的空元素。如需创建列，您就必须在 tr 元素内部规定 td 元素。'
  ],
  attribure:[
    { name:'align', value:['right','left','center','justify','char'], desc:'规定与 col 元素相关的内容的水平对齐方式。' },
    { name:'char', value:['character'], desc:'规定根据哪个字符来对齐与 col 元素相关的内容。' },
    { name:'charoff', value:['number'], desc:'规定第一个对齐字符的偏移量。' },
    { name:'span', value:['number'], desc:'规定 col 元素应该横跨的列数。' },
    { name:'valign', value:['top','middle','bottom','baseline'], desc:'定义与 col 元素相关的内容的垂直对齐方式。' },
    { name:'width', value:['pixels','%','relative_length'], desc:'规定 col 元素的宽度。' }
  ]
};
