!function (t) {
    function e(e) {
        for (var n, i, o = e[0], c = e[1], l = e[2], u = 0, m = []; u < o.length; u++) i = o[u], Object.prototype.hasOwnProperty.call(r, i) && r[i] && m.push(r[i][0]), r[i] = 0;
        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
        for (p && p(e); m.length;) m.shift()();
        return s.push.apply(s, l || []), a()
    }

    function a() {
        for (var t, e = 0; e < s.length; e++) {
            for (var a = s[e], n = !0, i = 1; i < a.length; i++) {
                var c = a[i];
                0 !== r[c] && (n = !1)
            }
            n && (s.splice(e--, 1), t = o(o.s = a[0]))
        }
        return t
    }

    var n = {}, i = {app: 0}, r = {app: 0}, s = [];

    function o(e) {
        if (n[e]) return n[e].exports;
        var a = n[e] = {i: e, l: !1, exports: {}};
        return t[e].call(a.exports, a, a.exports, o), a.l = !0, a.exports
    }

    o.e = function (t) {
        var e = [];
        i[t] ? e.push(i[t]) : 0 !== i[t] && {
            "chunk-0232c884": 1,
            "chunk-08c946bc": 1,
            "chunk-0b3c4a4f": 1,
            "chunk-1872cf7e": 1,
            "chunk-253f9042": 1,
            "chunk-44aeaca3": 1,
            "chunk-5494f770": 1,
            "chunk-72539176": 1
        }[t] && e.push(i[t] = new Promise((function (e, a) {
            for (var n = "assets/css/" + ({}[t] || t) + "." + {
                "chunk-0232c884": "3cb8328b",
                "chunk-08c946bc": "4bb44f5a",
                "chunk-0b3c4a4f": "305926e7",
                "chunk-1872cf7e": "c6f8576a",
                "chunk-253f9042": "cce14bb6",
                "chunk-44aeaca3": "5cfa642d",
                "chunk-5494f770": "13a71734",
                "chunk-72539176": "09e89b64"
            }[t] + ".css", r = o.p + n, s = document.getElementsByTagName("link"), c = 0; c < s.length; c++) {
                var l = (u = s[c]).getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (l === n || l === r)) return e()
            }
            var u, p = document.getElementsByTagName("style");
            for (c = 0; c < p.length; c++) if ((l = (u = p[c]).getAttribute("data-href")) === n || l === r) return e();
            var m = document.createElement("link");
            m.rel = "stylesheet", m.type = "text/css", m.onload = e, m.onerror = function (e) {
                var n = e && e.target && e.target.src || r;
                e = new Error("Loading CSS chunk " + t + " failed.\n(" + n + ")");
                e.code = "CSS_CHUNK_LOAD_FAILED", e.request = n, delete i[t], m.parentNode.removeChild(m), a(e)
            }, m.href = r, document.getElementsByTagName("head")[0].appendChild(m)
        })).then((function () {
            i[t] = 0
        })));
        var a, n, s, c, l, u = r[t];
        return 0 !== u && (u ? e.push(u[2]) : (l = new Promise((function (e, a) {
            u = r[t] = [e, a]
        })), e.push(u[2] = l), (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, o.nc && a.setAttribute("nonce", o.nc), a.src = o.p + "assets/js/" + ({}[l = t] || l) + "." + {
            "chunk-0232c884": "37723bb2",
            "chunk-08c946bc": "97d5f02c",
            "chunk-0b3c4a4f": "14e0eec4",
            "chunk-1872cf7e": "629b02da",
            "chunk-253f9042": "150baa73",
            "chunk-44aeaca3": "76fd8c59",
            "chunk-5494f770": "e58bc89d",
            "chunk-72539176": "e4341cb1"
        }[l] + ".js", n = new Error, s = function (e) {
            a.onerror = a.onload = null, clearTimeout(c);
            var i, s = r[t];
            0 !== s && (s && (i = e && ("load" === e.type ? "missing" : e.type), e = e && e.target && e.target.src, n.message = "Loading chunk " + t + " failed.\n(" + i + ": " + e + ")", n.name = "ChunkLoadError", n.type = i, n.request = e, s[1](n)), r[t] = void 0)
        }, c = setTimeout((function () {
            s({type: "timeout", target: a})
        }), 12e4), a.onerror = a.onload = s, document.head.appendChild(a))), Promise.all(e)
    }, o.m = t, o.c = n, o.d = function (t, e, a) {
        o.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: a})
    }, o.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, o.t = function (t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (o.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var n in t) o.d(a, n, function (e) {
            return t[e]
        }.bind(null, n));
        return a
    }, o.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "", o.oe = function (t) {
        throw t
    };
    var c = (l = window.webpackJsonp = window.webpackJsonp || []).push.bind(l);
    l.push = e;
    for (var l = l.slice(), u = 0; u < l.length; u++) e(l[u]);
    var p = c;
    s.push([0, "chunk-vendors"]), a()
}({
    0: function (t, e, a) {
        t.exports = a("56d7")
    }, "132a": function (t, e, a) {
        t.exports = "/images/part3_bg.77d52109.png"
    }, 1872: function (t, e, a) {
        "use strict";
        a("d7a9")
    }, "4ea4": function (t, e, a) {
    }, "56d7": function (t, e, a) {
        "use strict";
        a.r(e), a("cadf"), a("551c"), a("f751"), a("097d");
        var n = a("2b0e"), i = (a("7f7f"), a("4917"), {
            name: "Header", props: {pathName: String, urlParams: {}}, data: function () {
                return {}
            }, created: function () {
            }, mounted: function () {
            }, methods: {}
        }), r = (a("db96"), a("2877")), s = Object(r.a)(i, (function () {
            var t = this, e = t.$createElement;
            e = t._self._c || e;
            return e("div", {
                staticClass: "header",
                attrs: {id: "header"}
            }, [e("div", {
                staticClass: "header-container container-width"
            }, [e("router-link", {staticClass: "logo", attrs: {to: "/"}}), e("ul", {
                staticClass: "header-nav",
                attrs: {id: "header-nav"}
            }, [e("li", [e("router-link", {
                class: {active: "about" === t.pathName},
                attrs: {to: {path: "/about", query: t.urlParams}}
            }, [t._v("比配服务协议")]), e("span", {staticClass: "nav-separator"})], 1), e("li", [e("router-link", {
                class: {active: "mien" === t.pathName},
                attrs: {to: {path: "/mien", query: t.urlParams}}
            }, [t._v("")]), e("span", {staticClass: "nav-separator"})], 1), e("li", [e("router-link", {
                class: {active: "news" === t.pathName},
                attrs: {to: {path: "/news", query: t.urlParams}}
            }, [t._v("")]), e("span", {staticClass: "nav-separator"})], 1), e("li", [e("router-link", {
                class: {active: "contact" === t.pathName},
                attrs: {to: {path: "/contact", query: t.urlParams}}
            }, [t._v("")]), e("span", {staticClass: "nav-separator"})], 1), e("li", [e("a", {
                class: {active: "join" === t.pathName},
                attrs: {href: "https://o15vj1m4ie.jobs.feishu.cn/index/", target: "_blank"}
            }, [t._v("")]),
                e("span", {staticClass: "nav-separator"})]),
                e("li",
                    [e("router-link", {
                        class: {
                            active: "recharge" === t.pathName || "payment" === t.pathName
                        },
                        attrs: {
                            to: {path: "/recharge", query: t.urlParams}
                        }
                    })], 1)
            ]),
                e("a", {
                staticClass: "",
                attrs: {href: "https://weibo.com/xingjiabiapp", target: "_blank"}
            })], 1)])
        }), [], !1, null, null, null).exports, o = (e = {
            name: "Footer", props: {urlParams: {}}, data: function () {
                return {curYear: 2022}
            }, methods: {
                currentYear: function () {
                    var t = (new Date).getFullYear();
                    this.curYear = t = t < 2022 ? 2022 : t
                }
            }, created: function () {
                this.currentYear()
            }
        }, i = (a("e625"), {
            components: {
                Header: s, Footer: Object(r.a)(e, (function () {
                    var t = this, e = t.$createElement;
                    e = t._self._c || e;
                    return e("div", {staticClass: "footer"}, [e("div", {staticClass: "footer-container container-width"},
                        [t._m(0), e("ul", {staticClass: "footer-nav"}, [t._m(1), e("li", [e("router-link")], 1),
                        t._m(3)]), e("p", {staticClass: "footer-copyright"},
                            [t._v("Copyright © 2023-" + t._s(t.curYear) + " 成都聚米何翔科技有限公司 "), e("a", {
                        attrs: {
                            href: "https://beian.miit.gov.cn/",
                            target: "_blank"
                        }
                    }, [t._v("备案号")])]), e("p", [e("router-link", {
                        attrs: {
                            to: {
                                path: "/contact",
                                query: t.urlParams
                            }
                        }
                    }, [t._v("违法不良信息投诉举报 ")]), e("router-link", {
                        staticClass: "license-btn",
                        attrs: {to: {path: "/license", query: t.urlParams}}
                    }, [t._v("营业执照")])], 1)])])
                }), [function () {
                    var t = this, e = t.$createElement;
                    e = t._self._c || e;
                    return e("p", {staticClass: "download-multi"}, [e("a", {
                        staticClass: "download-ios",
                        attrs: {href: "https://itunes.apple.com/cn/app/id539988420?mt=8", target: "_blank"}
                    }, [t._v("ios")]), e("a", {
                        staticClass: "download-android",
                        attrs: {href: "https://sj.qq.com/appdetail/com.xingjiabi.shengsheng", target: "_blank"}
                    }, [t._v("android")]), e("a", {
                        staticClass: "download-qr",
                        attrs: {href: "javascript:;"}
                    }, [t._v("二维码")])])
                }, function () {
                    var t = this.$createElement;
                    t = this._self._c || t;
                    return t()
                }, function () {
                    var t = this.$createElement;
                    t = this._self._c || t;
                    return t("li", [t("a", {
                        attrs: {
                            href: "https://o15vj1m4ie.jobs.feishu.cn/index/",
                            target: "_blank"
                        }
                    }, [this._v("加入我们")])])
                }, function () {
                    var t = this.$createElement;
                    t = this._self._c || t;
                    return t("li", [t("a", {
                        attrs: {
                            href: "/termsOfService.html.html",
                            target: "_blank"
                        }
                    }, [this._v("服务条款")])])
                }], !1, null, null, null).exports
            }, data: function () {
                return {
                    mRechargeUrl: "https://ppim-h5.jiuselife.cn/live/src/project/recharge/index.html#/recharge",
                    pathName: "home",
                    fixedHeader: !1,
                    urlParams: {},
                    isMobile: Boolean(navigator.userAgent.match(/(phone|pad|pod|iphone|ipod|ios|ipad|android|adr|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))
                }
            }, activated: function () {
            }, mounted: function () {
                var t = this;
                t.$utils.checkNullObj(t.$route.query) || (t.urlParams = t.$route.query), t.pathName = t.$route.name, t.fixedHeader = t.$route.meta.fixedHeader;
                var e = t.pathName;
                t.isMobile && "recharge" === e && (window.location.href = t.mRechargeUrl)
            }, created: function () {
            }, methods: {}, watch: {
                $route: function () {
                    var t = this;
                    t.fixedHeader = t.$route.meta.fixedHeader, t.urlParams = t.$route.query, t.pathName = t.$route.name;
                    var e = t.pathName;
                    t.isMobile && "recharge" === e && (window.location.href = t.mRechargeUrl)
                }
            }
        }), Object(r.a)(i, (function () {
            var t = this, e = t.$createElement;
            e = t._self._c || e;
            return e("div", {attrs: {id: "app"}}, [e("Header", {
                class: {"header-fixed": t.fixedHeader},
                attrs: {pathName: t.pathName, urlParams: t.urlParams}
            }), e("keep-alive", [t.$route.meta.keepAlive ? e("router-view") : t._e()], 1), t.$route.meta.keepAlive ? t._e() : e("router-view"), e("Footer")], 1)
        }), [], !1, null, null, null).exports);
        s = a("8c4f"), e = a("7212"), i = {
            name: "HomeVideo",
            components: {swiper: e.swiper, swiperSlide: e.swiperSlide},
            data: function () {
                return {
                    swiperOption: {
                        autoplay: {delay: 3e3, disableOnInteraction: !1},
                        loop: !0,
                        wrapperClass: "banner-wrapper",
                        effect: "fade"
                    }, banner1: a("7619"), banner2: a("9ad3"), banner3: a("ec8f"), banner4: a("6042")
                }
            },
            created: function () {
            },
            activated: function () {
            },
            mounted: function () {
            },
            methods: {}
        }, a("1872"), e = {
            name: "Home", components: {
                HomeBanner: Object(r.a)(i, (function () {
                    var t = this, e = t.$createElement;
                    e = t._self._c || e;
                    return e("div", {staticClass: "banner"}, [e("swiper", {
                        staticClass: "banner-swiper",
                        attrs: {options: t.swiperOption}
                    }, [e("swiper-slide", [e("img", {
                        staticClass: "banner-img",
                        attrs: {src: t.banner1}
                    })]), e("swiper-slide", [e("img", {
                        staticClass: "banner-img",
                        attrs: {src: t.banner2}
                    })]), e("swiper-slide", [e("img", {
                        staticClass: "banner-img",
                        attrs: {src: t.banner3}
                    })]), e("swiper-slide", [e("img", {staticClass: "banner-img", attrs: {src: t.banner4}})])], 1)], 1)
                }), [], !1, null, null, null).exports
            }, data: function () {
                return {
                    part1_phone: a("d469"),
                    part2_phone: a("d9f6"),
                    part3_phone: a("e00f"),
                    part4_phone: a("993e"),
                    part1_info: a("69fa"),
                    part2_info: a("e47e"),
                    part3_info: a("b606"),
                    part4_info: a("f921"),
                    part1_bg: a("d56a"),
                    part2_bg: a("73bc"),
                    part3_bg: a("132a"),
                    part4_bg: a("a778")
                }
            }, created: function () {
            }, activated: function () {
                window.addEventListener("scroll", this.handleScroll)
            }, mounted: function () {
            }, methods: {
                handleScroll: function () {
                    var t = document.querySelector("#header");
                    300 <= (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) ? t.classList.add("header-fixed") : t.classList.remove("header-fixed")
                }
            }, deactivated: function () {
                window.removeEventListener("scroll", this.handleScroll)
            }
        }, a("d440"), i = Object(r.a)(e, (function () {
            var t = this, e = t.$createElement;
            e = t._self._c || e;
            return e("div", {staticClass: "home"}, [e("div", {staticClass: "banner-box"}, [e("HomeBanner"), t._m(0)], 1), e("div", {staticClass: "section-2"}, [e("router-link", {
                staticClass: "section-more arrow-more",
                attrs: {to: "/about"}
            }, [t._v("了解更多")])], 1), e("div", {staticClass: "story-box"}, [e("img", {attrs: {src: t.part1_bg}}), e("img", {attrs: {src: t.part2_bg}}), e("img", {attrs: {src: t.part3_bg}}), e("img", {attrs: {src: t.part4_bg}})])])
        }), [function () {
            var t = this, e = t.$createElement;
            e = t._self._c || e;
            return e("div", {staticClass: "download-container"}, [e("div", {staticClass: "download-box container-width"}, [e("p", {staticClass: "download-multi"}, [e("a", {
                staticClass: "download-ios",
                attrs: {href: "https://itunes.apple.com/cn/app/id539988420?mt=8", target: "_blank"}
            }, [t._v("ios")]), e("a", {
                staticClass: "download-android",
                attrs: {href: "https://sj.qq.com/appdetail/com.xingjiabi.shengsheng", target: "_blank"}
            }, [t._v("android")]), e("a", {
                staticClass: "download-qr",
                attrs: {href: "javascript:;"}
            }, [t._v("二维码")])])])])
        }], !1, null, "58d02d43", null).exports, a("c5f6"), e = {
            name: "recharge", components: {}, data: function () {
                return {
                    avatar_host: "https://avatar01.jiaoliuqu.com/",
                    forumimg_host: "https://forum01.jiaoliuqu.com/",
                    TQInfo: {},
                    avatarUrl: "",
                    nickname: "",
                    defaultCardId: "",
                    account_info: null,
                    inpour_list: [],
                    isMember: !1,
                    wxAppId: "",
                    isLoading: !1,
                    activeAmount: -1,
                    activeManual: !1,
                    amountManual: "",
                    loginPop: !1,
                    confirmPop: !1,
                    errorMsg: "",
                    loginErrorMsg: "",
                    loginError: !1,
                    phoneNum: "",
                    captchaCode: "",
                    codeDisabled: !1,
                    countdown: 60,
                    codeMsg: "发送验证码",
                    timer: null,
                    loginDisabled: !0,
                    amount: 0,
                    notReach: !1,
                    activeChannel: void 0,
                    payment_id: "",
                    paymentName: "",
                    alipay: void 0,
                    wxpay: void 0,
                    limit: 1e3,
                    showToast: !1,
                    toastMsg: ""
                }
            }, mounted: function () {
            }, computed: {
                payDisabled: function () {
                    return !("" !== this.payment_id && 0 < this.amount && this.isMember)
                }
            }, watch: {
                amountManual: function (t) {
                    var e = this;
                    if (!e.isMember) return e.amount = 0, e.amountManual = "", !1;
                    e.activeManual && (t = Number(t), e.isNumber(t) ? ((t = t >= e.limit ? e.limit : t) < 1e3 ? (e.amount = 0, e.notReach = !0) : (e.amount = 100 * t, e.notReach = !1), e.amountManual = t) : (e.amount = 0, e.amountManual = ""))
                }
            }, activated: function () {
                var t;
                localStorage.getItem("TQInfo") && ((t = this).TQInfo = JSON.parse(localStorage.getItem("TQInfo")), t.isMember = !0, t.avatarUrl = "".concat(t.avatar_host).concat(t.TQInfo.avatar, "?imageView/1/w/160/interlace/1"), t.defaultCardId = t.TQInfo.default_card_id, t.nickname = t.TQInfo.nickname), this.getPackageItemListForWeb()
            }, methods: {
                msgToast: function (t) {
                    var e = this;
                    t && (this.showToast = !0, this.toastMsg = t, setTimeout((function () {
                        e.showToast = !1, e.toastMsg = ""
                    }), 1e3))
                }, confirmation: function () {
                    var t;
                    this.isLoading || ((t = this).isLoading = !0, t.$api.get("inpourForWeb", {
                        web_ticket: t.TQInfo.web_ticket,
                        salt: t.TQInfo.salt,
                        amount: t.amount,
                        payment_id: t.payment_id
                    }, (function (e, a) {
                        var n;
                        e ? (t.isLoading = !1, t.errorMsg = e.message) : (t.isLoading = !1, a && "success" === a.response_status ? (e = n = "", n = 1 === t.activeChannel ? (a.info && a.info.data && a.info.data.submit_data && (e = a.info.data.submit_data), {
                            payment_id: t.payment_id,
                            submit_data: e
                        }) : (a.info && a.info.data && a.info.data.submit_data && (e = a.info.data.submit_data), {
                            payment_id: t.payment_id,
                            paymentName: t.paymentName,
                            amount: t.amount,
                            image: e.image,
                            trade_no: e.trade_no
                        }), sessionStorage.setItem("TQorderInfo", JSON.stringify(n)), t.$router.push({path: "/payment"}), t.hideConfirm()) : a.msg && (t.msgToast(a.msg), t.errorMsg = a.msg))
                    })))
                }, confirmSubmit: function () {
                    this.payDisabled || this.showConfirm()
                }, isNumber: function (t) {
                    return !!/^[0-9]+.?[0-9]*$/.test(t)
                }, manualAmount: function () {
                    if (this.activeAmount = -1, !this.isMember) return this.showLogin(), !1;
                    this.activeManual || (this.activeManual = !0, this.amount = 0)
                }, manualBlur: function () {
                    var t = this;
                    t.notReach && (t.amount = 0, t.notReach = !1, t.amountManual = "", t.activeManual = !1)
                }, showConfirm: function () {
                    this.confirmPop = !0
                }, hideConfirm: function () {
                    this.confirmPop = !1
                }, showLogin: function () {
                    this.loginPop = !0
                }, hideLogin: function () {
                    this.loginPop = !1
                }, checkSMSCode: function () {
                    if ("" !== this.captchaCode) return this.loginError = !1, !(this.loginErrorMsg = "");
                    this.loginError = !0, this.loginErrorMsg = "验证码不能为空！", this.loginDisabled = !0
                }, checkTel: function () {
                    return 11 === this.phoneNum.length ? (this.loginError = !1, !(this.loginErrorMsg = "")) : (this.loginError = !0, this.loginErrorMsg = "请输入有效的手机号码！", !(this.loginDisabled = !0))
                }, checkIntact: function () {
                    return !!this.checkTel() && !!this.checkSMSCode() && !(this.loginDisabled = !1)
                }, getSMS: function () {
                    var t = this;
                    t.checkTel() && (t.timer || t.$api.get("sendMobileVerifyCode", {mobile: t.phoneNum}, (function (e, a) {
                        e ? t.loginErrorMsg = e.message : "success" === a.response_status ? (t.codeDisabled = !0, t.timer = setInterval((function () {
                            0 < t.countdown && t.countdown <= 60 && (t.countdown--, 0 !== t.countdown ? t.codeMsg = "重新发送(" + t.countdown + ")" : (clearInterval(t.timer), t.codeMsg = "获取验证码", t.countdown = 60, t.timer = null, t.codeDisabled = !1))
                        }), 1e3)) : (t.loginError = !0, t.loginErrorMsg = a.msg)
                    })))
                }, webLogin: function () {
                    var t = this;
                    t.checkIntact() && t.$api.get("webLogin", {
                        mobile: t.phoneNum,
                        code: t.captchaCode
                    }, (function (e, a) {
                        e ? t.errorMsg = e.message : a && "success" === a.response_status ? (e = a.info.data, t.TQInfo = e, localStorage.setItem("TQInfo", JSON.stringify(e)), t.hideLogin(), t.isMember = !0, t.account_info = e, t.avatarUrl = "".concat(t.avatar_host).concat(e.avatar, "?imageView/1/w/160/interlace/1"), t.defaultCardId = e.default_card_id, t.nickname = e.nickname) : (t.loginError = !0, t.loginErrorMsg = a.msg)
                    }))
                }, getPackageItemListForWeb: function () {
                    var t = this;
                    t.$api.get("getPackageItemListForWeb", {
                        web_ticket: t.TQInfo.web_ticket,
                        salt: t.TQInfo.salt
                    }, (function (e, a) {
                        var n, i, r;
                        e ? t.errorMsg = e.message : a && "success" === a.response_status ? (i = (n = a.info.data).account_info, r = n.inpour_list.list, e = n.inpour_web_config, t.alipay = e.alipay, t.wxpay = e.wxpay, t.alipay.status ? (t.limit = t.alipay.limit, t.activeChannel = 1, t.payment_id = "33", t.paymentName = "支付宝") : t.limit = t.wxpay.limit, t.wxpay.status && !t.alipay.status && (t.activeChannel = 0, t.payment_id = "19", t.paymentName = "微信"), i ? (t.isMember = !0, t.account_info = i, t.avatarUrl = "".concat(t.avatar_host).concat(i.avatar, "?imageView/1/w/160/interlace/1"), t.defaultCardId = i.default_card_id, t.nickname = i.nickname, localStorage.setItem("TQresInfo", JSON.stringify(i))) : (window.localStorage.removeItem("TQInfo"), window.localStorage.removeItem("TQresInfo"), t.isMember = !1), r && 0 < r.length && (t.inpour_list = r), t.wxAppId = n.wx_official_appid, localStorage.setItem("wxAppId", n.wx_official_appid)) : (t.isMember = !1, t.errorMsg = a.msg)
                    }))
                }, choiceAmount: function (t) {
                    var e = this;
                    e.isMember ? (e.activeAmount = t.currentTarget.dataset.index, e.amount = t.currentTarget.dataset.amount, e.activeManual = !1, e.amountManual = "", e.notReach = !1) : e.showLogin()
                }, choiceChannel: function (t) {
                    this.activeChannel = t.currentTarget.dataset.index, this.payment_id = t.currentTarget.dataset.channel, this.limit = Number(t.currentTarget.dataset.limit), this.activeManual && this.amountManual >= this.limit && (this.amountManual = this.limit), "33" === this.payment_id && (this.paymentName = "支付宝"), "19" === this.payment_id && (this.paymentName = "微信")
                }
            }
        }, a("6531"), e = Object(r.a)(e, (function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "recharge"}, [a("div", {staticClass: "recharge-container"}, [t.isMember ? [a("div", {staticClass: "member"}, [a("div", {staticClass: "member-info"}, [a("div", {staticClass: "member-avatar"}, [a("img", {attrs: {src: t.avatarUrl}})]), a("div", {staticClass: "member-data"}, [a("p", {staticClass: "member-nickname"}, [t._v(t._s(t.nickname))]), a("p", {staticClass: "member-cid"}, [t._v("他趣ID：" + t._s(t.defaultCardId))])])]), a("a", {
                staticClass: "member-change",
                attrs: {href: "javascript:;"},
                on: {
                    click: function (e) {
                        return t.showLogin()
                    }
                }
            }, [t._v("更换账号")])])] : [a("div", {staticClass: "recharge-unlogin"}, [a("p", [t._v("登录才能充值哦")]), a("a", {
                staticClass: "login-btn",
                attrs: {href: "javascript:;"},
                on: {
                    click: function (e) {
                        return t.showLogin()
                    }
                }
            }, [t._v("立即登录")])])], a("div", {staticClass: "recharge-box"}, [a("div", {staticClass: "recharge-select"}, [a("p", {staticClass: "recharge-column-title"}, [t._v("选择充值金额")]), a("ul", {staticClass: "recharge-list clf"}, [t._l(t.inpour_list, (function (e, n) {
                return [a("li", {
                    key: e.amount,
                    staticClass: "recharge-item",
                    class: {active: t.activeAmount == n},
                    attrs: {"data-index": n, "data-amount": e.amount},
                    on: {
                        click: function (e) {
                            return t.choiceAmount(e)
                        }
                    }
                }, [a("p", {staticClass: "recharge-bean"}, [a("i", {staticClass: "i-bean"}), t._v("\n                " + t._s(e.tqbean) + "\n              ")]), a("p", {staticClass: "recharge-money"}, [t._v(t._s(e.amount / 100) + "元")]), e.first_icon ? a("img", {
                    staticClass: "recharge-item-first",
                    attrs: {src: "" + t.forumimg_host + e.first_icon}
                }) : t._e(), e.title ? a("span", {staticClass: "recharge-item-present ellipsis"}, [t._v(t._s(e.title))]) : t._e()])]
            }))], 2)]), a("div", {
                staticClass: "recharge-free",
                class: {"not-reach": t.notReach}
            }, [a("p", {staticClass: "recharge-column-title"}, [t._v("\n          自定义金额\n          "), a("span", [t._v("（请输入1000-" + t._s(t.limit) + "之间的整数金额）")]), a("a", {
                staticClass: "recharge-kf",
                attrs: {
                    target: "_blank",
                    href: "https://touch.sobot.com/chat/h5/v2/index.html?sysnum=e2a8e374e6bb41869d6ee058003be77c&source=1&groupid=f559885234f946339d326a5d44d4913f&agent_mode_flag=1"
                }
            }, [t._v("客服入口")])]), a("div", {staticClass: "recharge-input"}, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.amountManual,
                    expression: "amountManual"
                }],
                attrs: {type: "num", placeholder: "输入金额数", maxlength: "5"},
                domProps: {value: t.amountManual},
                on: {
                    blur: function (e) {
                        return t.manualBlur()
                    }, focus: function (e) {
                        return t.manualAmount()
                    }, input: function (e) {
                        e.target.composing || (t.amountManual = e.target.value)
                    }
                }
            }), t._v("\n          元\n        ")]), t._m(0)]), a("div", {staticClass: "payment-way"}, [a("p", {staticClass: "recharge-column-title"}, [t._v("选择支付方式")]), t.alipay || t.wxpay ? a("ul", {staticClass: "payment-list"}, [t.alipay.status ? a("li", {
                staticClass: "payment-item way-alipay",
                class: 1 == t.activeChannel ? " selected" : "",
                attrs: {"data-index": "1", "data-channel": "33", "data-limit": t.alipay.limit},
                on: {
                    click: function (e) {
                        return t.choiceChannel(e)
                    }
                }
            }, [a("i", {staticClass: "i-alipay"}), t._v("\n            支付宝\n          ")]) : t._e(), t.wxpay.status ? a("li", {
                staticClass: "payment-item way-wechat",
                class: 0 == t.activeChannel ? " selected" : "",
                attrs: {"data-index": "0", "data-channel": "19", "data-limit": t.wxpay.limit},
                on: {
                    click: function (e) {
                        return t.choiceChannel(e)
                    }
                }
            }, [a("i", {staticClass: "i-wechat"}), t._v("\n            微信\n          ")]) : t._e()]) : t._e()])])], 2), a("div", {staticClass: "recharge-final"}, [a("div", {staticClass: "final-container"}, [a("p", {staticClass: "final-total"}, [t._v("\n        应付金额：\n        "), a("span", [t._v(t._s(t.amount / 100))]), t._v("\n        元\n      ")]), a("a", {
                staticClass: "final-btn",
                class: {disabled: t.payDisabled},
                attrs: {href: "javascript:;"},
                on: {
                    click: function (e) {
                        return t.confirmSubmit()
                    }
                }
            }, [t._v("确认支付")])])]), t.loginPop ? [a("div", {staticClass: "popup"}, [a("div", {staticClass: "login-box"}, [a("a", {
                staticClass: "popup-close",
                attrs: {href: "javascript:;"},
                on: {
                    click: function (e) {
                        return t.hideLogin()
                    }
                }
            }), a("p", {staticClass: "popup-title"}, [t._v("登录")]), a("div", {staticClass: "login-form"}, [a("div", {staticClass: "login-tel"}, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.phoneNum,
                    expression: "phoneNum"
                }],
                attrs: {type: "tel", maxlength: "11", placeholder: "请输入手机号"},
                domProps: {value: t.phoneNum},
                on: {
                    blur: function (e) {
                        return t.checkTel()
                    }, input: function (e) {
                        e.target.composing || (t.phoneNum = e.target.value)
                    }
                }
            })]), a("div", {staticClass: "login-sms"}, [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.captchaCode,
                    expression: "captchaCode"
                }],
                attrs: {type: "text", maxlength: "8", placeholder: "请输入验证码"},
                domProps: {value: t.captchaCode},
                on: {
                    keyup: function (e) {
                        return t.checkIntact()
                    }, input: function (e) {
                        e.target.composing || (t.captchaCode = e.target.value)
                    }
                }
            }), a("a", {
                staticClass: "get-sms",
                class: {disabled: t.codeDisabled},
                attrs: {href: "javascript:;"},
                on: {
                    click: function (e) {
                        return t.getSMS()
                    }
                }
            }, [t._v(t._s(t.codeMsg))])]), a("p", {staticClass: "login-error"}, [t.loginError ? a("span", [t._v(t._s(t.loginErrorMsg))]) : t._e()]), a("a", {
                staticClass: "login-submit",
                class: {disabled: t.loginDisabled},
                attrs: {href: "javascript:;"},
                on: {
                    click: function (e) {
                        return t.webLogin()
                    }
                }
            }, [t._v("登录")])])]), a("div", {
                staticClass: "popup-bg", on: {
                    click: function (e) {
                        return t.hideLogin()
                    }
                }
            })])] : t._e(), t.confirmPop ? [a("div", {staticClass: "popup"}, [a("div", {staticClass: "popup-confirm"}, [a("a", {
                staticClass: "popup-close",
                attrs: {href: "javascript:;"},
                on: {
                    click: function (e) {
                        return t.hideConfirm()
                    }
                }
            }), a("p", {staticClass: "popup-title"}, [t._v("确认支付信息")]), a("ul", {staticClass: "confirm-box"}, [a("li", [t._v("充值他趣ID：" + t._s(t.defaultCardId))]), a("li", [t._v("\n            对应昵称：\n            "), a("p", {staticClass: "confirm-nickname ellipsis"}, [t._v(t._s(t.nickname))])]), a("li", [t._v("支付方式：" + t._s(t.paymentName))]), a("li", [t._v("\n            支付金额：\n            "), a("span", {staticClass: "confirm-money"}, [t._v(t._s(t.amount / 100))]), t._v("\n            元\n          ")])]), a("a", {
                staticClass: "confirm-submit",
                attrs: {href: "javascript:;"},
                on: {
                    click: function (e) {
                        return t.confirmation()
                    }
                }
            }, [t._v("确认支付")])]), a("div", {
                staticClass: "popup-bg", on: {
                    click: function (e) {
                        return t.hideConfirm()
                    }
                }
            })])] : t._e(), t.showToast ? [a("div", {staticClass: "msg-toast vc"}, [t._v(t._s(t.toastMsg))])] : t._e()], 2)
        }), [function () {
            var t = this, e = t.$createElement;
            e = t._self._c || e;
            return e("div", {staticClass: "recharge-free-tips"}, [e("div", {staticClass: "recharge-tips"}, [e("p", [t._v("1. 充值1元=100趣币；")]), e("p", [t._v("2. 充值问题点击【客服入口】-左下角“小人”按钮或致电服务热线4000975976 咨询人工客服（服务时段9:30-21:00）；")]), e("p", [t._v("3. 累积充值6万可成为黑金会员，即可联系vip享福利领取及大额充值优惠；")]), e("p", [t._v("4. 如需充值大额领取福利，详情可咨询人工在线客服；")]), e("p", [t._v("\n              5. 趣币仅能用于兑换我司服务体系下直播运营的产品和服务，\n              "), e("span", [t._v("不能兑换现金")]), t._v("\n              ，不能进行转账交易，不能兑换我公司服务体系外的产品和服务；\n            ")]), e("p", [t._v("\n              6.\n              "), e("span", [t._v("使用本服务前请务必保证您已满18周岁，属于完全民事行为能力人。")])])])])
        }], !1, null, "ab47c71a", null).exports;
        n.a.use(s.a);
        s = new s.a({
            routes: [{path: "/", name: "home", component: i, meta: {fixedHeader: !1, keepAlive: !0}}, {
                path: "/mien", name: "mien", component: function () {
                    return a.e("chunk-5494f770").then(a.bind(null, "d998"))
                }, meta: {fixedHeader: !0, keepAlive: !0}
            }, {
                path: "/news", name: "news", component: function () {
                    return a.e("chunk-08c946bc").then(a.bind(null, "a2f9"))
                }, meta: {fixedHeader: !0, keepAlive: !0}
            }, {
                path: "/contact", name: "contact", component: function () {
                    return a.e("chunk-0232c884").then(a.bind(null, "b8fa"))
                }, meta: {fixedHeader: !0, keepAlive: !0}
            }, {
                path: "/join", name: "join", component: function () {
                    return a.e("chunk-0b3c4a4f").then(a.bind(null, "c283"))
                }, meta: {fixedHeader: !0, keepAlive: !0}
            }, {
                path: "/recharge",
                name: "recharge",
                component: e,
                meta: {fixedHeader: !0, keepAlive: !0}
            }, {
                path: "/payment", name: "payment", component: function () {
                    return a.e("chunk-1872cf7e").then(a.bind(null, "1175"))
                }, meta: {fixedHeader: !0, keepAlive: !1}
            }, {
                path: "/guild", name: "guild", component: function () {
                    return a.e("chunk-253f9042").then(a.bind(null, "8629"))
                }, meta: {fixedHeader: !0, keepAlive: !0}
            }, {
                path: "/license", name: "license", component: function () {
                    return a.e("chunk-44aeaca3").then(a.bind(null, "e70f"))
                }, meta: {fixedHeader: !0, keepAlive: !0}
            }]
        });
        var c = (a("6d67"), a("456d"), a("ac6a"), a("f3e2"), a("28a5"), a("6b54"), a("87b3"), {
            getUrlParam: function (t) {
                var e = document.location.toString().split("?");
                if (1 < e.length) {
                    for (var a, n = e[1].split("&"), i = 0; i < n.length; i++) if (null != (a = n[i].split("=")) && a[0] == t) return a[1];
                    return null
                }
                return null
            }, checkNullObj: function (t) {
                return 0 === Object.keys(t).length
            }
        }), l = a("f2e8");
        i = "";
        0 < Number(c.getUrlParam("test")) && (i = c.getUrlParam("test"));
        var u = {host: window.location.host, apiHost: "https://gw-w.test".concat(i, ".hbmonitor.com/live_trade")}, p = {
            webLogin: "/v1/AccountThird/webLogin",
            sendMobileVerifyCode: "/v1/AccountThird/sendMobileVerifyCode",
            orderQuery: "/v1/Inpour/orderQuery",
            inpourForWeb: "/v1/Inpour/inpourForWeb",
            getPackageItemListForWeb: "/v1/PromotionConfig/getPackageItemListForWeb"
        };

        function m(t) {
            return Object.keys(t).map((function (e) {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
            })).join("&")
        }

        function d() {
            var t = document.createElement("script");
            t.defer = !0, t.src = "https://market.h5-pages.cn/public/js/dimensity.js", document.getElementsByTagName("head")[0].appendChild(t)
        }

        "web.taqu.cn" !== u.host && "app.taqu.cn" !== u.host || (u.apiHost = "https://gw-w.jiaoliuqu.com/live_trade"), Object.keys(p).forEach((function (t) {
            p[t] = u.apiHost + p[t]
        })), e = {
            get: function (t, e, a) {
                var n = p[t] + "?rise_in=f2e&" + m(e);
                return "1" === c.getUrlParam("env") && (n = p[t] + "?rise_in=f2e&env=1&" + m(e)), l(n, {
                    param: "jsonp_callback",
                    prefix: "doCallback"
                }, a)
            }
        }, i = function () {
            var t, e;
            t = d, e = window.onload, "function" != typeof window.onload ? window.onload = t : window.onload = function () {
                setTimeout((function () {
                    e(), t && t()
                }), 100)
            }
        }, n.a.config.productionTip = !1, i(), n.a.prototype.$utils = c, n.a.prototype.$api = e, s.beforeEach((function (t, e, a) {
            window.scrollTo(0, 0), a()
        })), new n.a({
            router: s, render: function (t) {
                return t(o)
            }
        }).$mount("#app")
    }, 6042: function (t, e, a) {
        t.exports = "/images/banner_4.2847c206.png"
    }, 6531: function (t, e, a) {
        "use strict";
        a("81f7")
    }, "69fa": function (t, e, a) {
        t.exports = "/images/part1_info@2x.e81bf533.png"
    }, "73bc": function (t, e, a) {
        t.exports = "/images/part2_bg.087afa72.png"
    }, 7619: function (t, e, a) {
        t.exports = "/images/banner_1.16c076ba.png"
    }, "81f7": function (t, e, a) {
    }, "993e": function (t, e, a) {
        t.exports = "/images/part4_phone@2x.8e206784.png"
    }, "9ad3": function (t, e, a) {
        t.exports = "/images/banner_2.029938d0.png"
    }, a778: function (t, e, a) {
        t.exports = "/images/part4_bg.92c1a91b.png"
    }, b606: function (t, e, a) {
        t.exports = "/images/part3_info@2x.3a5dd457.png"
    }, d105: function (t, e, a) {
    }, d440: function (t, e, a) {
        "use strict";
        a("d105")
    }, d469: function (t, e, a) {
        t.exports = "/images/part1_phone@2x.ada0d3d3.png"
    }, d56a: function (t, e, a) {
        t.exports = "/images/part1_bg.e84009d7.png"
    }, d7a9: function (t, e, a) {
    }, d9f6: function (t, e, a) {
        t.exports = "/images/part2_phone@2x.3b6ae9cd.png"
    }, db96: function (t, e, a) {
        "use strict";
        a("4ea4")
    }, e00f: function (t, e, a) {
        t.exports = "/images/part3_phone@2x.2cba2804.png"
    }, e47e: function (t, e, a) {
        t.exports = "/images/part2_info@2x.e13d2a73.png"
    }, e625: function (t, e, a) {
        "use strict";
        a("ef67")
    }, ec8f: function (t, e, a) {
        t.exports = "/images/banner_3.ec183024.png"
    }, ef67: function (t, e, a) {
    }, f921: function (t, e, a) {
        t.exports = "/images/part4_info@2x.f18009f4.png"
    }
});