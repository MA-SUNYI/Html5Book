var button = {
    name:'button',
    html5: true,
    define:[
        '<button> 标签定义一个按钮。',
        '在 button 元素内部，您可以放置内容，比如文本或图像。这是该元素与使用 input 元素创建的按钮之间的不同之处。',
        '<button> 控件 与 <input type="button"> 相比，提供了更为强大的功能和更丰富的内容。<button> 与 </button> 标签之间的所有内容都是按钮的内容，其中包括任何可接受的正文内容，比如文本或多媒体内容。例如，我们可以在按钮中包括一个图像和相关的文本，用它们在按钮中创建一个吸引人的标记图像。',
        '唯一禁止使用的元素是图像映射，因为它对鼠标和键盘敏感的动作会干扰表单按钮的行为。',
        '请始终为按钮规定 type 属性。Internet Explorer 的默认类型是 "button"，而其他浏览器中（包括 W3C 规范）的默认值是 "submit"。',
    ],
    use:[],
    attention:[
        '如果在 HTML 表单中使用 button 元素，不同的浏览器会提交不同的值。Internet Explorer 将提交 <button> 与 <button/> 之间的文本，而其他浏览器将提交 value 属性的内容。请在 HTML 表单中使用 input 元素来创建按钮。'
    ],
    attribure:[
        { name:'autofocus', value:['autofocus'], desc:'规定当页面加载时按钮应当自动地获得焦点。' },
        { name:'disabled', value:['disabled'], desc:'规定应该禁用该按钮。' },
        { name:'form', value:['form_name'], desc:'规定按钮属于一个或多个表单。' },
        { name:'formaction', value:['url'], desc:'覆盖 form 元素的 action 属性。注释：该属性与 type="submit" 配合使用。' },
        { name:'formenctype', value:['见注释'], desc:'覆盖 form 元素的 enctype 属性。注释：该属性与 type="submit" 配合使用。' },
        { name:'formmethod', value:['get','post'], desc:'覆盖 form 元素的 method 属性。注释：该属性与 type="submit" 配合使用。' },
        { name:'formnovalidate', value:['formnovalidate'], desc:'覆盖 form 元素的 novalidate 属性。注释：该属性与 type="submit" 配合使用。' },
        { name:'formtarget', value:['_blank','_parent','_self','_top','framename'], desc:'覆盖 form 元素的 target 属性。注释：该属性与 type="submit" 配合使用。' },
        { name:'name', value:['button_name'], desc:'规定按钮的名称。' },
        { name:'type', value:['button','reset','submit'], desc:'规定按钮的类型。' },
        { name:'value', value:['text'], desc:'规定按钮的初始值。可由脚本进行修改。' }
    ]
};
