var a = {
    name:'a',
    html5: true,
    define:[
        '<audio> 标签定义声音，比如音乐或其他音频流。'
    ],
    use:[],
    attention:[
        '可以在开始标签和结束标签之间放置文本内容，这样老的浏览器就可以显示出不支持该标签的信息。'
    ],
    attribure:[
        { name:'autoplay', value:['autoplay'], desc:'如果出现该属性，则音频在就绪后马上播放。' },
        { name:'controls', value:['controls'], desc:'如果出现该属性，则向用户显示控件，比如播放按钮。' },
        { name:'loop', value:['loop'], desc:'如果出现该属性，则每当音频结束时重新开始播放。' },
        { name:'muted', value:['muted'], desc:'规定视频输出应该被静音。' },
        { name:'preload', value:['preload'], desc:'如果出现该属性，则音频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。' },
        { name:'src', value:['url'], desc:'要播放的音频的 URL。' }
    ]
};
