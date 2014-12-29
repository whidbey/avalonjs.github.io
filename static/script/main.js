
(function() {

    function browserLanguage() {
        var nav = navigator;
        return (nav.browserLanguage || nav.language || nav.userLanguage || "").substr(0, 2);
    }
    ;
    var vm = avalon.define({
        $id: "main",
        userLanguage: browserLanguage() === "zh" ? "zh" : "en",
        currentPath: "zh/introduction.html",
        concepts: [
            {
                name: "视图模型",
                id: "vmodel"
            },
            {
                name: "数据模型",
                id: "$model"
            },
            {
                name: "监控属性",
                id: "observable"
            },
            {
                name: "监控数组",
                id: "collection"
            },
            {
                name: "计算属性",
                id: "computed"
            },
            {
                name: "$watch方法",
                id: "$watch"
            },
            {
                name: "$fire方法",
                id: "$fire"
            },
            {
                name: "非监控属性",
                id: "unobservable"
            }
        ],
        bindings: [
            {
                name: "ms-controller",
                id: "controller"
            },
            {
                name: "ms-important",
                id: "controller"
            },
            {
                name: "ms-skip",
                id: "controller"
            },
            {
                name: "ms-text",
                id: "text"
            },
            {
                name: "ms-html",
                id: "text"
            },
            {
                name: "ms-visible",
                id: "visible"
            },
            {
                name: "ms-if",
                id: "if"
            },
            {
                name: "ms-data-*",
                id: "data"
            },
            {
                name: "ms-attr-*",
                id: "attr"
            },
            {
                name: "ms-class-*",
                id: "class"
            },
            {
                name: "ms-active-*",
                id: "css"
            },
            {
                name: "ms-hover-*",
                id: "css"
            },
            {
                name: "ms-css-*",
                id: "css"
            },
            {
                name: "ms-on-*",
                id: "on"
            },
            {
                name: "ms-include",
                id: "include"
            },
            {
                name: "ms-duplex",
                id: "duplex"
            },
            {
                name: "ms-repeat",
                id: "repeat"
            },
            {
                name: "ms-each",
                id: "repeat"
            },
            {
                name: "ms-with",
                id: "repeat"
            }
        ].sort(),
        engineering: [
             {
                name: "跨模块通信",
                id: "communication"
            },
              {
                name: "与富文本编辑器的整合",
                id: "integratewithrichtext"
            }
        ],
        mobiles: [
            {
                name: "触屏事件",
                id: "touch"
            }
        ],
        supportSVG: !!window.dispatchEvent,
        changePath: function() {
            setTimeout(function() {
                vm.currentPath = location.href.split("#")[1]
                try {
                    window.scrollTo({left: 0, top: 0, behavior: 'smooth'})
                } catch (e) {
                    window.scrollTo(0, 0)
                }
            })
        },
        highlight: function() {
            SyntaxHighlighter.highlight()
        }
    })
    var href = location.href
    if (href.indexOf("#zh") !== -1 || href.indexOf("#en") !== -1) {
        vm.currentPath = href.split("#")[1]
    }
})()
