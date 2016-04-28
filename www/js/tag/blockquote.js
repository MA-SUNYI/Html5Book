var blockquote = {
    name:'blockquote',
    html5: true,
    define:[
        '<blockquote> 标签定义块引用。',
        '<blockquote> 与 </blockquote> 之间的所有文本都会从常规文本中分离出来，经常会在左、右两边进行缩进（增加外边距），而且有时会使用斜体。也就是说，块引用拥有它们自己的空间。'
    ],
    use:[],
    attention:[
        '请使用 q 元素来标记短的引用。'
    ],
    attribure:[
        { name:'cite', value:['URL'], desc:'规定引用的来源。' }
    ]
};
