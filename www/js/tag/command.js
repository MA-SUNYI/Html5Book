var command = {
  name:'command',
  html5: true,
  define:[
    'command 元素表示用户能够调用的命令。',
    '<command> 标签可以定义命令按钮，比如单选按钮、复选框或按钮。',
    '只有当 command 元素位于 menu 元素内时，该元素才是可见的。否则不会显示这个元素，但是可以用它规定键盘快捷键。'
  ],
  use:[],
  attention:[
    '目前只有 Internet Explorer 支持 <command> 标签。'
  ],
  attribure:[
    { name:'checked', value:['checked'], desc:'定义是否被选中。仅用于 radio 或 checkbox 类型。' },
    { name:'disabled', value:['disabled'], desc:'定义 command 是否可用。' },
    { name:'icon', value:['url'], desc:'定义作为 command 来显示的图像的 url。' },
    { name:'label', value:['text'], desc:'为 command 定义可见的 label。' },
    { name:'radiogroup', value:['groupname'], desc:'定义 command 所属的组名。仅在类型为 radio 时使用。' },
    { name:'type', value:['checkbox','command','radio'], desc:'定义该 command 的类型。默认是 "command"。' }
  ]
};
