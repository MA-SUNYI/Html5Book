var doctype = {
    name:'!DOCTYPE',
    html5: true,
    define:[
      '<!DOCTYPE> 声明必须是 HTML 文档的第一行，位于 <html> 标签之前。',
      '<!DOCTYPE> 声明不是 HTML 标签；它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令。',
      '在 HTML 4.01 中，<!DOCTYPE> 声明引用 DTD，因为 HTML 4.01 基于 SGML。DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容。HTML5 不基于 SGML，所以不需要引用 DTD。'
    ],
    use:[],
    attention:[
      '请始终向 HTML 文档添加 <!DOCTYPE> 声明，这样浏览器才能获知文档类型。',
      '<!DOCTYPE> 声明对大小写不敏感。'
    ]
};
