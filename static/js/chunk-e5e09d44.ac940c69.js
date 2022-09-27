(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-e5e09d44"], {
    "2adb": function (t, e, a) {
    }, 5033: function (t, e, a) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", [a("div", {
                staticClass: "navbar",
                staticStyle: {"z-index": "100"}
            }, [a("van-nav-bar", {attrs: {title: t.title, "left-arrow": ""}, on: {"click-left": t.onClickLeft}})], 1)])
        }, i = [], s = {
            props: {title: {type: String, default: ""}}, data: function () {
                return {}
            }, created: function () {
            }, methods: {
                onClickLeft: function () {
                    history.back()
                }
            }
        }, l = s, r = (a("7bd1"), a("cba8")), c = Object(r["a"])(l, n, i, !1, null, "0421930a", null);
        e["a"] = c.exports
    }, "7bd1": function (t, e, a) {
        "use strict";
        a("2adb")
    }, 8153: function (t, e, a) {
        "use strict";
        a("d4ea")
    }, c0af: function (t, e, a) {
        "use strict";
        a.r(e);
        var n = function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {
                staticClass: "bg-theme wp100",
                attrs: {id: "lineCodeHeight"}
            }, [a("van-nav-bar", {attrs: {title: t.title}}), t.dataList.length > 0 ? a("div", {staticClass: "pt44"}, [a("ul", {staticClass: "pd20 box-siz wp100"}, t._l(t.dataList, (function (e, n) {
                return a("li", {
                    key: e.id,
                    staticClass: "bg-white bdr-p5 h120 relative mb10 pos-rel hidden numberClass",
                    class: "watermark" + n
                }, [a("div", {staticClass: "radio1"}), a("div", {staticClass: "radio2"}), a("div", {
                    class: {
                        title: !0,
                        h60: !0,
                        flex: !0,
                        "justify-center": !0,
                        "align-center": !0,
                        fz23: !0,
                        green: 1 == e.barStatus,
                        red: 1 != e.barStatus
                    }
                }, [1 == e.barStatus ? a("span", [t._v("可通行")]) : a("span", [t._v("已过期")])]), a("div", {staticClass: "h60 br"}, [a("div", {staticClass: "flex justify-center align-center mt5"}, [t._v("有效期")]), a("div", {staticClass: "flex justify-center align-center mt5"}, [t._v("\n            " + t._s(e.validStart) + " 至 " + t._s(e.validEnd) + "\n          ")])])])
            })), 0)]) : a("div", {staticClass: "pt44 zw fz23"}, [t._v("无通行条码")])], 1)
        }, i = [], s = (a("8dee"), a("5033")), l = a("bde3"), r = a("365c"), c = {
            components: {"van-nav-bar": s["a"]}, data: function () {
                return {title: "通行条码", dataList: [], outWalk: null}
            }, created: function () {
                this.getData()
            }, mounted: function () {
                var t = this, e = window.innerHeight, a = document.getElementById("lineCodeHeight");
                a.style.minHeight = e + "px", setTimeout((function () {
                    for (var e = document.getElementsByClassName("numberClass"), a = 0; a < e.length; a++) t.watermark(a, t.dataList[a].barStatus)
                }), 300), this.setwalk()
            }, methods: {
                getData: function () {
                    var t = this;
                    Object(r["d"])().then((function (e) {
                        200 == e.code && (t.dataList = e.data)
                    }))
                }, setwalk: function () {
                    var t = document.getElementsByClassName("numberClass");
                    this.outWalk = setInterval((function () {
                        for (var e = 0; e < t.length; e++) {
                            var a = document.getElementById(e);
                            if (a) {
                                var n = a.style.left.replace(/\px/, "");
                                a.style.left = n > -1e7 ? 1 * n - 1 + "px" : "5px"
                            }
                        }
                    }), 100)
                }, watermark: function (t, e) {
                    var a = {}, n = function (a) {
                        var n = "1.223545515151";
                        null !== document.getElementById(n) && document.body.removeChild(document.getElementById(n));
                        var i = document.createElement("canvas");
                        i.width = 120, i.height = 55;
                        var s = i.getContext("2d");
                        s.rotate(-15 * Math.PI / -180), s.font = "18px Vedana", s.fillStyle = 1 == e ? "rgba(1, 187, 44, 0.40)" : "rgba(245, 56, 42, 0.40)", s.textAlign = "left", s.textBaseline = "Middle", s.fillText(a, i.width / 8, i.height / 2);
                        var l = document.createElement("div"), r = document.getElementsByClassName("watermark" + t);
                        return l.id = t, l.style.pointerEvents = "none", l.style.top = "5px", l.style.left = "5px", l.style.position = "absolute", l.style.zIndex = "100000", l.style.width = "10000000px", l.style.height = document.documentElement.clientHeight - 100 + "px", l.style.background = "url(" + i.toDataURL("image/png") + ") left top repeat", r[0].appendChild(l), n
                    };
                    a.set = function (t) {
                        n(t);
                        window.onresize = function () {
                            n(t)
                        }
                    };
                    var i = new Date, s = Object(l["f"])(i);
                    a.set(s)
                }
            }, beforeDestroy: function () {
                clearInterval(this.outWalk)
            }
        }, d = c, o = (a("8153"), a("cba8")), u = Object(o["a"])(d, n, i, !1, null, "69238719", null);
        e["default"] = u.exports
    }, d4ea: function (t, e, a) {
    }
}]);