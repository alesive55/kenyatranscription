define("@wsb/guac-widget-shared/lib/components/Form-6710b59f.js", ["exports", "~/c/_rollupPluginBabelHelpers", "~/lib/common/constants/traffic2", "~/lib/common/constants/form/formIdentifiers", "~/lib/common/constants/form/recaptchaTypes", "~/lib/common/utils/form", "~/lib/components/Recaptcha/recaptcha-loader", "~/lib/components/Recaptcha/badge"], (function(e, t, r, a, s, o, i, n) {
    "use strict";
    const l = {
            "Amazon Silk": "amazon_silk",
            "Android Browser": "android",
            Bada: "bada",
            BlackBerry: "blackberry",
            Chrome: "chrome",
            Chromium: "chromium",
            Electron: "electron",
            Epiphany: "epiphany",
            Firefox: "firefox",
            Focus: "focus",
            Generic: "generic",
            "Google Search": "google_search",
            Googlebot: "googlebot",
            "Internet Explorer": "ie",
            "K-Meleon": "k_meleon",
            Maxthon: "maxthon",
            "Microsoft Edge": "edge",
            "MZ Browser": "mz",
            "NAVER Whale Browser": "naver",
            Opera: "opera",
            "Opera Coast": "opera_coast",
            PhantomJS: "phantomjs",
            Puffin: "puffin",
            QupZilla: "qupzilla",
            QQ: "qq",
            QQLite: "qqlite",
            Safari: "safari",
            Sailfish: "sailfish",
            "Samsung Internet for Android": "samsung_internet",
            SeaMonkey: "seamonkey",
            Sleipnir: "sleipnir",
            Swing: "swing",
            Tizen: "tizen",
            "UC Browser": "uc",
            Vivaldi: "vivaldi",
            "WebOS Browser": "webos",
            WeChat: "wechat",
            "Yandex Browser": "yandex",
            Roku: "roku"
        },
        c = {
            amazon_silk: "Amazon Silk",
            android: "Android Browser",
            bada: "Bada",
            blackberry: "BlackBerry",
            chrome: "Chrome",
            chromium: "Chromium",
            electron: "Electron",
            epiphany: "Epiphany",
            firefox: "Firefox",
            focus: "Focus",
            generic: "Generic",
            googlebot: "Googlebot",
            google_search: "Google Search",
            ie: "Internet Explorer",
            k_meleon: "K-Meleon",
            maxthon: "Maxthon",
            edge: "Microsoft Edge",
            mz: "MZ Browser",
            naver: "NAVER Whale Browser",
            opera: "Opera",
            opera_coast: "Opera Coast",
            phantomjs: "PhantomJS",
            puffin: "Puffin",
            qupzilla: "QupZilla",
            qq: "QQ Browser",
            qqlite: "QQ Browser Lite",
            safari: "Safari",
            sailfish: "Sailfish",
            samsung_internet: "Samsung Internet for Android",
            seamonkey: "SeaMonkey",
            sleipnir: "Sleipnir",
            swing: "Swing",
            tizen: "Tizen",
            uc: "UC Browser",
            vivaldi: "Vivaldi",
            webos: "WebOS Browser",
            wechat: "WeChat",
            yandex: "Yandex Browser"
        },
        p = {
            tablet: "tablet",
            mobile: "mobile",
            desktop: "desktop",
            tv: "tv"
        },
        g = {
            WindowsPhone: "Windows Phone",
            Windows: "Windows",
            MacOS: "macOS",
            iOS: "iOS",
            Android: "Android",
            WebOS: "WebOS",
            BlackBerry: "BlackBerry",
            Bada: "Bada",
            Tizen: "Tizen",
            Linux: "Linux",
            ChromeOS: "Chrome OS",
            PlayStation4: "PlayStation 4",
            Roku: "Roku"
        },
        u = {
            EdgeHTML: "EdgeHTML",
            Blink: "Blink",
            Trident: "Trident",
            Presto: "Presto",
            Gecko: "Gecko",
            WebKit: "WebKit"
        };
    class d {
        static getFirstMatch(e, t) {
            const r = t.match(e);
            return r && r.length > 0 && r[1] || ""
        }
        static getSecondMatch(e, t) {
            const r = t.match(e);
            return r && r.length > 1 && r[2] || ""
        }
        static matchAndReturnConst(e, t, r) {
            if (e.test(t)) return r
        }
        static getWindowsVersionName(e) {
            switch (e) {
                case "NT":
                    return "NT";
                case "XP":
                case "NT 5.1":
                    return "XP";
                case "NT 5.0":
                    return "2000";
                case "NT 5.2":
                    return "2003";
                case "NT 6.0":
                    return "Vista";
                case "NT 6.1":
                    return "7";
                case "NT 6.2":
                    return "8";
                case "NT 6.3":
                    return "8.1";
                case "NT 10.0":
                    return "10";
                default:
                    return
            }
        }
        static getMacOSVersionName(e) {
            const t = e.split(".").splice(0, 2).map((e => parseInt(e, 10) || 0));
            if (t.push(0), 10 === t[0]) switch (t[1]) {
                case 5:
                    return "Leopard";
                case 6:
                    return "Snow Leopard";
                case 7:
                    return "Lion";
                case 8:
                    return "Mountain Lion";
                case 9:
                    return "Mavericks";
                case 10:
                    return "Yosemite";
                case 11:
                    return "El Capitan";
                case 12:
                    return "Sierra";
                case 13:
                    return "High Sierra";
                case 14:
                    return "Mojave";
                case 15:
                    return "Catalina";
                default:
                    return
            }
        }
        static getAndroidVersionName(e) {
            const t = e.split(".").splice(0, 2).map((e => parseInt(e, 10) || 0));
            if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0
        }
        static getVersionPrecision(e) {
            return e.split(".").length
        }
        static compareVersions(e, t, r = !1) {
            const a = d.getVersionPrecision(e),
                s = d.getVersionPrecision(t);
            let o = Math.max(a, s),
                i = 0;
            const n = d.map([e, t], (e => {
                const t = o - d.getVersionPrecision(e),
                    r = e + new Array(t + 1).join(".0");
                return d.map(r.split("."), (e => new Array(20 - e.length).join("0") + e)).reverse()
            }));
            for (r && (i = o - Math.min(a, s)), o -= 1; o >= i;) {
                if (n[0][o] > n[1][o]) return 1;
                if (n[0][o] === n[1][o]) {
                    if (o === i) return 0;
                    o -= 1
                } else if (n[0][o] < n[1][o]) return -1
            }
        }
        static map(e, t) {
            const r = [];
            let a;
            if (Array.prototype.map) return Array.prototype.map.call(e, t);
            for (a = 0; a < e.length; a += 1) r.push(t(e[a]));
            return r
        }
        static find(e, t) {
            let r, a;
            if (Array.prototype.find) return Array.prototype.find.call(e, t);
            for (r = 0, a = e.length; r < a; r += 1) {
                const a = e[r];
                if (t(a, r)) return a
            }
        }
        static assign(e, ...t) {
            const r = e;
            let a, s;
            if (Object.assign) return Object.assign(e, ...t);
            for (a = 0, s = t.length; a < s; a += 1) {
                const e = t[a];
                if ("object" == typeof e && null !== e) {
                    Object.keys(e).forEach((t => {
                        r[t] = e[t]
                    }))
                }
            }
            return e
        }
        static getBrowserAlias(e) {
            return l[e]
        }
        static getBrowserTypeByAlias(e) {
            return c[e] || ""
        }
    }
    const m = /version\/(\d+(\.?_?\d+)+)/i,
        b = [{
            test: [/googlebot/i],
            describe(e) {
                const t = {
                        name: "Googlebot"
                    },
                    r = d.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || d.getFirstMatch(m, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/opera/i],
            describe(e) {
                const t = {
                        name: "Opera"
                    },
                    r = d.getFirstMatch(m, e) || d.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/opr\/|opios/i],
            describe(e) {
                const t = {
                        name: "Opera"
                    },
                    r = d.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || d.getFirstMatch(m, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/SamsungBrowser/i],
            describe(e) {
                const t = {
                        name: "Samsung Internet for Android"
                    },
                    r = d.getFirstMatch(m, e) || d.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/Whale/i],
            describe(e) {
                const t = {
                        name: "NAVER Whale Browser"
                    },
                    r = d.getFirstMatch(m, e) || d.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/MZBrowser/i],
            describe(e) {
                const t = {
                        name: "MZ Browser"
                    },
                    r = d.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || d.getFirstMatch(m, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/focus/i],
            describe(e) {
                const t = {
                        name: "Focus"
                    },
                    r = d.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || d.getFirstMatch(m, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/swing/i],
            describe(e) {
                const t = {
                        name: "Swing"
                    },
                    r = d.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || d.getFirstMatch(m, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/coast/i],
            describe(e) {
                const t = {
                        name: "Opera Coast"
                    },
                    r = d.getFirstMatch(m, e) || d.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/opt\/\d+(?:.?_?\d+)+/i],
            describe(e) {
                const t = {
                        name: "Opera Touch"
                    },
                    r = d.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || d.getFirstMatch(m, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/yabrowser/i],
            describe(e) {
                const t = {
                        name: "Yandex Browser"
                    },
                    r = d.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || d.getFirstMatch(m, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/ucbrowser/i],
            describe(e) {
                const t = {
                        name: "UC Browser"
                    },
                    r = d.getFirstMatch(m, e) || d.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/Maxthon|mxios/i],
            describe(e) {
                const t = {
                        name: "Maxthon"
                    },
                    r = d.getFirstMatch(m, e) || d.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/epiphany/i],
            describe(e) {
                const t = {
                        name: "Epiphany"
                    },
                    r = d.getFirstMatch(m, e) || d.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/puffin/i],
            describe(e) {
                const t = {
                        name: "Puffin"
                    },
                    r = d.getFirstMatch(m, e) || d.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/sleipnir/i],
            describe(e) {
                const t = {
                        name: "Sleipnir"
                    },
                    r = d.getFirstMatch(m, e) || d.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/k-meleon/i],
            describe(e) {
                const t = {
                        name: "K-Meleon"
                    },
                    r = d.getFirstMatch(m, e) || d.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/micromessenger/i],
            describe(e) {
                const t = {
                        name: "WeChat"
                    },
                    r = d.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || d.getFirstMatch(m, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/qqbrowser/i],
            describe(e) {
                const t = {
                        name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
                    },
                    r = d.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || d.getFirstMatch(m, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/msie|trident/i],
            describe(e) {
                const t = {
                        name: "Internet Explorer"
                    },
                    r = d.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/\sedg\//i],
            describe(e) {
                const t = {
                        name: "Microsoft Edge"
                    },
                    r = d.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/edg([ea]|ios)/i],
            describe(e) {
                const t = {
                        name: "Microsoft Edge"
                    },
                    r = d.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/vivaldi/i],
            describe(e) {
                const t = {
                        name: "Vivaldi"
                    },
                    r = d.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/seamonkey/i],
            describe(e) {
                const t = {
                        name: "SeaMonkey"
                    },
                    r = d.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/sailfish/i],
            describe(e) {
                const t = {
                        name: "Sailfish"
                    },
                    r = d.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/silk/i],
            describe(e) {
                const t = {
                        name: "Amazon Silk"
                    },
                    r = d.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/phantom/i],
            describe(e) {
                const t = {
                        name: "PhantomJS"
                    },
                    r = d.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/slimerjs/i],
            describe(e) {
                const t = {
                        name: "SlimerJS"
                    },
                    r = d.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
            describe(e) {
                const t = {
                        name: "BlackBerry"
                    },
                    r = d.getFirstMatch(m, e) || d.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/(web|hpw)[o0]s/i],
            describe(e) {
                const t = {
                        name: "WebOS Browser"
                    },
                    r = d.getFirstMatch(m, e) || d.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/bada/i],
            describe(e) {
                const t = {
                        name: "Bada"
                    },
                    r = d.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/tizen/i],
            describe(e) {
                const t = {
                        name: "Tizen"
                    },
                    r = d.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || d.getFirstMatch(m, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/qupzilla/i],
            describe(e) {
                const t = {
                        name: "QupZilla"
                    },
                    r = d.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || d.getFirstMatch(m, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/firefox|iceweasel|fxios/i],
            describe(e) {
                const t = {
                        name: "Firefox"
                    },
                    r = d.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/electron/i],
            describe(e) {
                const t = {
                        name: "Electron"
                    },
                    r = d.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/MiuiBrowser/i],
            describe(e) {
                const t = {
                        name: "Miui"
                    },
                    r = d.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/chromium/i],
            describe(e) {
                const t = {
                        name: "Chromium"
                    },
                    r = d.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || d.getFirstMatch(m, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/chrome|crios|crmo/i],
            describe(e) {
                const t = {
                        name: "Chrome"
                    },
                    r = d.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/GSA/i],
            describe(e) {
                const t = {
                        name: "Google Search"
                    },
                    r = d.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test(e) {
                const t = !e.test(/like android/i),
                    r = e.test(/android/i);
                return t && r
            },
            describe(e) {
                const t = {
                        name: "Android Browser"
                    },
                    r = d.getFirstMatch(m, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/playstation 4/i],
            describe(e) {
                const t = {
                        name: "PlayStation 4"
                    },
                    r = d.getFirstMatch(m, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/safari|applewebkit/i],
            describe(e) {
                const t = {
                        name: "Safari"
                    },
                    r = d.getFirstMatch(m, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/.*/i],
            describe(e) {
                const t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                return {
                    name: d.getFirstMatch(t, e),
                    version: d.getSecondMatch(t, e)
                }
            }
        }];
    var h = [{
            test: [/Roku\/DVP/],
            describe(e) {
                const t = d.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                return {
                    name: g.Roku,
                    version: t
                }
            }
        }, {
            test: [/windows phone/i],
            describe(e) {
                const t = d.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                return {
                    name: g.WindowsPhone,
                    version: t
                }
            }
        }, {
            test: [/windows /i],
            describe(e) {
                const t = d.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                    r = d.getWindowsVersionName(t);
                return {
                    name: g.Windows,
                    version: t,
                    versionName: r
                }
            }
        }, {
            test: [/Macintosh(.*?) FxiOS(.*?)\//],
            describe(e) {
                const t = {
                        name: g.iOS
                    },
                    r = d.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/macintosh/i],
            describe(e) {
                const t = d.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
                    r = d.getMacOSVersionName(t),
                    a = {
                        name: g.MacOS,
                        version: t
                    };
                return r && (a.versionName = r), a
            }
        }, {
            test: [/(ipod|iphone|ipad)/i],
            describe(e) {
                const t = d.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                return {
                    name: g.iOS,
                    version: t
                }
            }
        }, {
            test(e) {
                const t = !e.test(/like android/i),
                    r = e.test(/android/i);
                return t && r
            },
            describe(e) {
                const t = d.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                    r = d.getAndroidVersionName(t),
                    a = {
                        name: g.Android,
                        version: t
                    };
                return r && (a.versionName = r), a
            }
        }, {
            test: [/(web|hpw)[o0]s/i],
            describe(e) {
                const t = d.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                    r = {
                        name: g.WebOS
                    };
                return t && t.length && (r.version = t), r
            }
        }, {
            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
            describe(e) {
                const t = d.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || d.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || d.getFirstMatch(/\bbb(\d+)/i, e);
                return {
                    name: g.BlackBerry,
                    version: t
                }
            }
        }, {
            test: [/bada/i],
            describe(e) {
                const t = d.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                return {
                    name: g.Bada,
                    version: t
                }
            }
        }, {
            test: [/tizen/i],
            describe(e) {
                const t = d.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                return {
                    name: g.Tizen,
                    version: t
                }
            }
        }, {
            test: [/linux/i],
            describe: () => ({
                name: g.Linux
            })
        }, {
            test: [/CrOS/],
            describe: () => ({
                name: g.ChromeOS
            })
        }, {
            test: [/PlayStation 4/],
            describe(e) {
                const t = d.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                return {
                    name: g.PlayStation4,
                    version: t
                }
            }
        }],
        y = [{
            test: [/googlebot/i],
            describe: () => ({
                type: "bot",
                vendor: "Google"
            })
        }, {
            test: [/huawei/i],
            describe(e) {
                const t = d.getFirstMatch(/(can-l01)/i, e) && "Nova",
                    r = {
                        type: p.mobile,
                        vendor: "Huawei"
                    };
                return t && (r.model = t), r
            }
        }, {
            test: [/nexus\s*(?:7|8|9|10).*/i],
            describe: () => ({
                type: p.tablet,
                vendor: "Nexus"
            })
        }, {
            test: [/ipad/i],
            describe: () => ({
                type: p.tablet,
                vendor: "Apple",
                model: "iPad"
            })
        }, {
            test: [/Macintosh(.*?) FxiOS(.*?)\//],
            describe: () => ({
                type: p.tablet,
                vendor: "Apple",
                model: "iPad"
            })
        }, {
            test: [/kftt build/i],
            describe: () => ({
                type: p.tablet,
                vendor: "Amazon",
                model: "Kindle Fire HD 7"
            })
        }, {
            test: [/silk/i],
            describe: () => ({
                type: p.tablet,
                vendor: "Amazon"
            })
        }, {
            test: [/tablet(?! pc)/i],
            describe: () => ({
                type: p.tablet
            })
        }, {
            test(e) {
                const t = e.test(/ipod|iphone/i),
                    r = e.test(/like (ipod|iphone)/i);
                return t && !r
            },
            describe(e) {
                const t = d.getFirstMatch(/(ipod|iphone)/i, e);
                return {
                    type: p.mobile,
                    vendor: "Apple",
                    model: t
                }
            }
        }, {
            test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
            describe: () => ({
                type: p.mobile,
                vendor: "Nexus"
            })
        }, {
            test: [/[^-]mobi/i],
            describe: () => ({
                type: p.mobile
            })
        }, {
            test: e => "blackberry" === e.getBrowserName(!0),
            describe: () => ({
                type: p.mobile,
                vendor: "BlackBerry"
            })
        }, {
            test: e => "bada" === e.getBrowserName(!0),
            describe: () => ({
                type: p.mobile
            })
        }, {
            test: e => "windows phone" === e.getBrowserName(),
            describe: () => ({
                type: p.mobile,
                vendor: "Microsoft"
            })
        }, {
            test(e) {
                const t = Number(String(e.getOSVersion()).split(".")[0]);
                return "android" === e.getOSName(!0) && t >= 3
            },
            describe: () => ({
                type: p.tablet
            })
        }, {
            test: e => "android" === e.getOSName(!0),
            describe: () => ({
                type: p.mobile
            })
        }, {
            test: e => "macos" === e.getOSName(!0),
            describe: () => ({
                type: p.desktop,
                vendor: "Apple"
            })
        }, {
            test: e => "windows" === e.getOSName(!0),
            describe: () => ({
                type: p.desktop
            })
        }, {
            test: e => "linux" === e.getOSName(!0),
            describe: () => ({
                type: p.desktop
            })
        }, {
            test: e => "playstation 4" === e.getOSName(!0),
            describe: () => ({
                type: p.tv
            })
        }, {
            test: e => "roku" === e.getOSName(!0),
            describe: () => ({
                type: p.tv
            })
        }],
        f = [{
            test: e => "microsoft edge" === e.getBrowserName(!0),
            describe(e) {
                if (/\sedg\//i.test(e)) return {
                    name: u.Blink
                };
                const t = d.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                return {
                    name: u.EdgeHTML,
                    version: t
                }
            }
        }, {
            test: [/trident/i],
            describe(e) {
                const t = {
                        name: u.Trident
                    },
                    r = d.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: e => e.test(/presto/i),
            describe(e) {
                const t = {
                        name: u.Presto
                    },
                    r = d.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test(e) {
                const t = e.test(/gecko/i),
                    r = e.test(/like gecko/i);
                return t && !r
            },
            describe(e) {
                const t = {
                        name: u.Gecko
                    },
                    r = d.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }, {
            test: [/(apple)?webkit\/537\.36/i],
            describe: () => ({
                name: u.Blink
            })
        }, {
            test: [/(apple)?webkit/i],
            describe(e) {
                const t = {
                        name: u.WebKit
                    },
                    r = d.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                return r && (t.version = r), t
            }
        }];
    class E {
        constructor(e, t = !1) {
            if (null == e || "" === e) throw new Error("UserAgent parameter can't be empty");
            this._ua = e, this.parsedResult = {}, !0 !== t && this.parse()
        }
        getUA() {
            return this._ua
        }
        test(e) {
            return e.test(this._ua)
        }
        parseBrowser() {
            this.parsedResult.browser = {};
            const e = d.find(b, (e => {
                if ("function" == typeof e.test) return e.test(this);
                if (e.test instanceof Array) return e.test.some((e => this.test(e)));
                throw new Error("Browser's test function is not valid")
            }));
            return e && (this.parsedResult.browser = e.describe(this.getUA())), this.parsedResult.browser
        }
        getBrowser() {
            return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
        }
        getBrowserName(e) {
            return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
        }
        getBrowserVersion() {
            return this.getBrowser().version
        }
        getOS() {
            return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
        }
        parseOS() {
            this.parsedResult.os = {};
            const e = d.find(h, (e => {
                if ("function" == typeof e.test) return e.test(this);
                if (e.test instanceof Array) return e.test.some((e => this.test(e)));
                throw new Error("Browser's test function is not valid")
            }));
            return e && (this.parsedResult.os = e.describe(this.getUA())), this.parsedResult.os
        }
        getOSName(e) {
            const {
                name: t
            } = this.getOS();
            return e ? String(t).toLowerCase() || "" : t || ""
        }
        getOSVersion() {
            return this.getOS().version
        }
        getPlatform() {
            return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
        }
        getPlatformType(e = !1) {
            const {
                type: t
            } = this.getPlatform();
            return e ? String(t).toLowerCase() || "" : t || ""
        }
        parsePlatform() {
            this.parsedResult.platform = {};
            const e = d.find(y, (e => {
                if ("function" == typeof e.test) return e.test(this);
                if (e.test instanceof Array) return e.test.some((e => this.test(e)));
                throw new Error("Browser's test function is not valid")
            }));
            return e && (this.parsedResult.platform = e.describe(this.getUA())), this.parsedResult.platform
        }
        getEngine() {
            return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
        }
        getEngineName(e) {
            return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
        }
        parseEngine() {
            this.parsedResult.engine = {};
            const e = d.find(f, (e => {
                if ("function" == typeof e.test) return e.test(this);
                if (e.test instanceof Array) return e.test.some((e => this.test(e)));
                throw new Error("Browser's test function is not valid")
            }));
            return e && (this.parsedResult.engine = e.describe(this.getUA())), this.parsedResult.engine
        }
        parse() {
            return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
        }
        getResult() {
            return d.assign({}, this.parsedResult)
        }
        satisfies(e) {
            const t = {};
            let r = 0;
            const a = {};
            let s = 0;
            if (Object.keys(e).forEach((o => {
                    const i = e[o];
                    "string" == typeof i ? (a[o] = i, s += 1) : "object" == typeof i && (t[o] = i, r += 1)
                })), r > 0) {
                const e = Object.keys(t),
                    r = d.find(e, (e => this.isOS(e)));
                if (r) {
                    const e = this.satisfies(t[r]);
                    if (void 0 !== e) return e
                }
                const a = d.find(e, (e => this.isPlatform(e)));
                if (a) {
                    const e = this.satisfies(t[a]);
                    if (void 0 !== e) return e
                }
            }
            if (s > 0) {
                const e = Object.keys(a),
                    t = d.find(e, (e => this.isBrowser(e, !0)));
                if (void 0 !== t) return this.compareVersion(a[t])
            }
        }
        isBrowser(e, t = !1) {
            const r = this.getBrowserName().toLowerCase();
            let a = e.toLowerCase();
            const s = d.getBrowserTypeByAlias(a);
            return t && s && (a = s.toLowerCase()), a === r
        }
        compareVersion(e) {
            let t = [0],
                r = e,
                a = !1;
            const s = this.getBrowserVersion();
            if ("string" == typeof s) return ">" === e[0] || "<" === e[0] ? (r = e.substr(1), "=" === e[1] ? (a = !0, r = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? r = e.substr(1) : "~" === e[0] && (a = !0, r = e.substr(1)), t.indexOf(d.compareVersions(s, r, a)) > -1
        }
        isOS(e) {
            return this.getOSName(!0) === String(e).toLowerCase()
        }
        isPlatform(e) {
            return this.getPlatformType(!0) === String(e).toLowerCase()
        }
        isEngine(e) {
            return this.getEngineName(!0) === String(e).toLowerCase()
        }
        is(e, t = !1) {
            return this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e)
        }
        some(e = []) {
            return e.some((e => this.is(e)))
        }
    }
    /*!
     * Bowser - a browser detector
     * https://github.com/lancedikson/bowser
     * MIT License | (c) Dustin Diaz 2012-2015
     * MIT License | (c) Denis Demchenko 2015-2019
     */
    const w = (global.React || guac.react).createContext();

    function R(e) {
        let {
            children: t,
            dataAids: r = {}
        } = e;
        return (global.React || guac.react).createElement(w.Provider, {
            value: r
        }, t)
    }
    R.propTypes = {
        children: (global.PropTypes || guac["prop-types"]).any,
        dataAids: (global.PropTypes || guac["prop-types"]).object
    };
    class C extends(global.React || guac.react).Component {
        constructor(e) {
            super(e), this.input = (global.React || guac.react).createRef()
        }
        componentDidUpdate() {
            this.props.isFocused && this.input.focus && this.input.focus()
        }
        render() {
            const {
                handleChange: e,
                handleBlur: t,
                name: r,
                placeholder: a,
                label: s,
                value: o
            } = this.props;
            return (global.React || guac.react).createElement(w.Consumer, null, (i => (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Input.FloatLabel, {
                type: "text",
                onChange: e,
                onBlur: t,
                name: r,
                placeholder: a,
                "data-aid": i && i[`FORM_${s.toUpperCase()}`] || s,
                value: o,
                refCallback: e => this.input = e
            })))
        }
    }
    C.propTypes = {
        handleChange: (global.PropTypes || guac["prop-types"]).func.isRequired,
        handleBlur: (global.PropTypes || guac["prop-types"]).func.isRequired,
        name: (global.PropTypes || guac["prop-types"]).string,
        placeholder: (global.PropTypes || guac["prop-types"]).string,
        label: (global.PropTypes || guac["prop-types"]).string,
        value: (global.PropTypes || guac["prop-types"]).string,
        isFocused: (global.PropTypes || guac["prop-types"]).bool
    };
    class T extends(global.React || guac.react).Component {
        constructor(e) {
            super(e), this.input = (global.React || guac.react).createRef()
        }
        componentDidUpdate() {
            this.props.isFocused && this.input.focus && this.input.focus()
        }
        render() {
            const {
                handleChange: e,
                handleBlur: t,
                name: r,
                placeholder: a,
                label: s,
                value: o
            } = this.props;
            return (global.React || guac.react).createElement(w.Consumer, null, (i => (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Input.TextArea, {
                tag: "textarea",
                onChange: e,
                onBlur: t,
                name: r,
                placeholder: a,
                "data-aid": i[`FORM_${s.toUpperCase()}`] || s,
                value: o,
                style: {
                    resize: "vertical"
                },
                refCallback: e => this.input = e
            })))
        }
    }
    T.propTypes = {
        handleChange: (global.PropTypes || guac["prop-types"]).func.isRequired,
        handleBlur: (global.PropTypes || guac["prop-types"]).func.isRequired,
        name: (global.PropTypes || guac["prop-types"]).string,
        placeholder: (global.PropTypes || guac["prop-types"]).string,
        label: (global.PropTypes || guac["prop-types"]).string,
        value: (global.PropTypes || guac["prop-types"]).string,
        isFocused: (global.PropTypes || guac["prop-types"]).bool
    };
    const {
        renderModes: S
    } = (global.Core || guac["@wsb/guac-widget-core"]).constants, {
        JOB_POSTING: M
    } = a.default;
    class _ extends(global.React || guac.react).Component {
        render() {
            const {
                renderMode: e,
                label: t,
                style: a,
                size: s,
                staticContent: o,
                isSending: i,
                fullWidth: n,
                formIdentifier: l
            } = this.props, c = e !== S.PUBLISH ? r.default.editor_preview.submit_contact_form : null, p = (0, (global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.TCCLUtils.getTCCLString)({
                eid: l === M ? "ux2.job_posting.submit_form.click" : "ux2.contact.submit_form.click",
                type: "click"
            }), g = i ? "disabled" : "default", {
                submitButtonLoadingLabel: u,
                defaultSubmitButtonLabel: d
            } = o, m = i ? u : t || d, b = (global.React || guac.react).createElement(w.Consumer, null, (e => (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Button.Primary, {
                tag: "button",
                type: "submit",
                style: a,
                size: s,
                "data-aid": e.SUBMIT_BUTTON_REND,
                "data-traffic2": c,
                "data-tccl": p,
                children: m,
                state: g,
                fullWidth: n
            })));
            return this.props.inline ? b : (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: {
                    textAlign: "center"
                }
            }, b)
        }
    }
    _.propTypes = {
        label: (global.PropTypes || guac["prop-types"]).string.isRequired,
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        width: (global.PropTypes || guac["prop-types"]).string,
        display: (global.PropTypes || guac["prop-types"]).string,
        paddingVertical: (global.PropTypes || guac["prop-types"]).string,
        paddingHorizontal: (global.PropTypes || guac["prop-types"]).string,
        style: (global.PropTypes || guac["prop-types"]).object,
        size: (global.PropTypes || guac["prop-types"]).string,
        staticContent: (global.PropTypes || guac["prop-types"]).object.isRequired,
        inline: (global.PropTypes || guac["prop-types"]).bool,
        isSending: (global.PropTypes || guac["prop-types"]).bool,
        fullWidth: (global.PropTypes || guac["prop-types"]).bool,
        formIdentifier: (global.PropTypes || guac["prop-types"]).string
    };
    var F = {
        supportedMimetypes: ["image/gif", "image/jpeg", "image/pjpeg", "image/png", "image/tiff", "image/x-tiff", "application/x-font-otf", "application/font-woff", "application/font-woff2", "audio/mpeg3", "audio/x-mpeg-3", "audio/mpeg", "audio/x-wav", "audio/wav", "audio/x-flac", "audio/mp4", "audio/x-m4a", "audio/mp3", "text/csv", "video/x-msvideo", "video/quicktime", "video/mpeg", "video/mp4", "video/x-matroska", "video/ogg", "video/x-ms-vob", "video/x-m4v", "video/3gpp", "video/webm", "image/webp", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.wordprocessingml.template", "application/vnd.ms-word.template.macroEnabled.12", "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.spreadsheetml.template", "application/vnd.ms-powerpoint", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.oasis.opendocument.presentation", "application/vnd.oasis.opendocument.text", "application/vnd.openxmlformats-officedocument.presentationml.template", "application/vnd.openxmlformats-officedocument.presentationml.slideshow", "application/pdf", "text/plain", "application/zip", "application/x-zip", "application/x-zip-compressed", "application/x-compress", "application/x-compressed", "multipart/x-zip", "application/rtf", "text/rtf"],
        supportedFileTypes: [".jpg", ".jpeg", ".jpe", ".png", ".gif", ".mp4", ".m4a", ".vid", ".qt", ".mov", ".mpeg", ".mpga", ".mp2", ".mp2a", ".mp3", ".m2a", ".m3a", ".msvideo", ".ogg", ".3gpp", ".webm", ".webp", ".flac", ".wav", ".tiff", ".mkv", ".mk3d", ".mks", ".doc", ".docx", ".dot", ".xls", ".xlsx", ".ppt", ".pptx", ".odp", ".odt", ".potx", ".ppsx", ".pdf", ".txt", ".text", ".conf", ".def", ".list", ".log", ".in", ".ini", ".zip", ".otf", ".woff", ".woff2", ".csv", ".rtf"]
    };
    const {
        JOB_POSTING: v
    } = a.default, O = 1e6, P = "KB", B = "MB", x = 10, N = {
        attachmentsWrapper: {
            display: "flex",
            flexDirection: "column"
        },
        fileInputWrapper: {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "small"
        },
        fileInputContainer: {
            display: "flex",
            alignItems: "center"
        },
        fileContainer: {
            marginBottom: "xsmall",
            display: "flex",
            flexDirection: "column",
            paddingVertical: "small",
            paddingHorizontal: "medium",
            backgroundColor: "rgba(0,0,0,.03)"
        },
        errorFileContainer: {
            display: "flex",
            paddingVertical: "small",
            paddingRight: "medium"
        },
        filenameWrapper: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%"
        },
        displayName: {
            maxWidth: "85%"
        }
    };
    class I extends(global.React || guac.react).Component {
        constructor(e) {
            super(e), t.a(this, "onFilesSelected", (e => {
                const {
                    onFilesSelected: t,
                    staticContent: r
                } = this.props, a = [], s = [], o = e.target.files;
                if (!o || !o.length) return;
                const i = this.state.files.map((e => e.file)).concat((global._ || guac.lodash).toArray(o));
                let n = 0;
                i.forEach((e => {
                    n += e.size, e.size > 1e7 ? s.push({
                        hasError: !0,
                        error: r.fileSizeLimit.replace("{0}", "10MB"),
                        file: e
                    }) : F.supportedMimetypes.includes(e.type) ? a.length >= x ? this.setState({
                        globalError: r.maxFileCountLimit.replace("{0}", x)
                    }) : n > 15e6 ? s.push({
                        hasError: !0,
                        error: r.totalFileSizeLimit.replace("{0}", "15MB"),
                        file: e
                    }) : a.push({
                        file: e
                    }) : s.push({
                        hasError: !0,
                        error: r.unsupportedFileType,
                        file: e
                    })
                })), this.setState({
                    files: a,
                    errorFiles: s
                }), t && t(a)
            })), t.a(this, "renderFileInput", (e => {
                const {
                    staticContent: t,
                    attachmentsLabel: r,
                    formIdentifier: a
                } = this.props, {
                    files: s
                } = this.state, o = (0, (global.Core || guac["@wsb/guac-widget-core"]).UX2.utils.TCCLUtils.getTCCLString)({
                    eid: a === v ? "ux2.job_posting.upload_file.click" : "ux2.contact.upload_file.click",
                    type: "click"
                });
                return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                    style: N.fileInputWrapper
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                    style: N.fileInputContainer,
                    "data-aid": e.FILE_INPUT_REND
                }, s.length < x && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                    onClick: this.uploadFiles,
                    "data-tccl": o
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Link.Icon, {
                    tag: "span",
                    icon: "paperclip",
                    size: "small",
                    rotate: "0"
                }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Link, {
                    tag: "span"
                }, r || t.attachFiles)), s.length >= x && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, {
                    style: {
                        color: "grey"
                    },
                    icon: "paperclip",
                    size: "small",
                    rotate: "0"
                }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, {
                    disabled: !0,
                    tag: "span"
                }, r || t.attachFiles))), (global.React || guac.react).createElement("input", {
                    multiple: !0,
                    onChange: this.onFilesSelected,
                    ref: e => {
                        this.fileInput = e
                    },
                    type: "file",
                    accept: F.supportedFileTypes.join(","),
                    style: {
                        display: "none"
                    }
                }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Details.Minor, {
                    tag: "span",
                    "data-aid": e.ATTACHMENT_COUNT_REND
                }, `${t.attachments} (${s.length})`))
            })), t.a(this, "removeFile", ((e, t) => {
                const {
                    staticContent: r
                } = this.props, {
                    files: a,
                    errorFiles: s
                } = this.state;
                return () => {
                    const o = t ? s : a;
                    o.splice(e, 1), this.fileInput.value = null;
                    const i = o.length > x ? r.maxFileCountLimit.replace("{0}", x) : "";
                    t ? this.setState({
                        errorFiles: o,
                        globalError: i
                    }) : this.setState({
                        files: o,
                        globalError: i
                    })
                }
            })), t.a(this, "getUploadProgress", (() => {
                const {
                    progressEvent: e
                } = this.props;
                if (e) {
                    const t = e.loaded,
                        r = e.total;
                    return Math.round(t / r * 100)
                }
                return 0
            })), t.a(this, "renderFile", ((e, t, r) => {
                const {
                    section: a,
                    progressEvent: s
                } = this.props;
                return this.getUploadProgress(e.file), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                    section: "default" !== a ? "default" : "alt",
                    style: N.fileContainer
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                    style: N.filenameWrapper
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, {
                    tag: "span",
                    style: N.displayName,
                    "data-aid": r.FILE_NAME_REND,
                    featured: !0
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element, {
                    tag: "span"
                }, `${e.file.name} ${this.getSizeString(e.file.size)}`)), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                    onClick: this.removeFile(t)
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Link.Icon, {
                    icon: "close",
                    size: "small"
                }))), e.hasError && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, {
                    alert: !0,
                    style: {
                        width: "100%"
                    }
                }, e.error), !e.hasError && s && (global.React || guac.react).createElement("progress", {
                    style: {
                        marginTop: "8px",
                        width: "100%"
                    },
                    max: 100,
                    value: this.getUploadProgress()
                }))
            })), t.a(this, "renderErrorFile", ((e, t, r) => {
                const {
                    section: a
                } = this.props;
                return this.getUploadProgress(e.file), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                    section: "default" !== a ? "default" : "alt",
                    style: N.errorFileContainer
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                    style: N.filenameWrapper
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, {
                    style: {
                        color: "red",
                        marginRight: "xxsmall"
                    },
                    icon: "alert",
                    size: "medium",
                    rotate: "0"
                }), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, {
                    tag: "span",
                    style: N.displayName,
                    "data-aid": r.FILE_NAME_REND,
                    alert: !0
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element, {
                    tag: "span"
                }, `${e.error}: ${e.file.name} ${this.getSizeString(e.file.size)}`))), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                    onClick: this.removeFile(t, !0)
                }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Link.Icon, {
                    icon: "close",
                    size: "small"
                }))))
            })), t.a(this, "renderFiles", ((e, t) => {
                const {
                    currentFiles: r
                } = this.props, {
                    files: a,
                    errorFiles: s
                } = this.state, o = t ? s : a;
                if (!(o.length || r.length)) return null;
                const i = t ? this.renderErrorFile : this.renderFile;
                return o.map(((t, r) => i(t, r, e)))
            })), this.uploadFiles = this.uploadFiles.bind(this), this.state = {
                files: [],
                globalError: "",
                errorFiles: []
            }
        }
        uploadFiles() {
            this.fileInput.click()
        }
        getSizeString(e) {
            return (e < O ? P : B) === P ? `(${Math.round(e/1e3*100)/100} KB)` : `(${Math.round(e/O*100)/100} MB)`
        }
        render() {
            const {
                attachmentsEnabled: e,
                staticContent: t
            } = this.props, {
                errorFiles: r
            } = this.state;
            if (!e) return null;
            const {
                globalError: a
            } = this.state;
            return (global.React || guac.react).createElement(w.Consumer, null, (e => (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: N.attachmentsWrapper
            }, this.renderFileInput(e), this.renderFiles(e), r && r.length > 0 && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: {
                    marginTop: "medium"
                }
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, {
                featured: !0,
                style: {
                    width: "100%"
                }
            }, `${t.couldNotAttach}:`), this.renderFiles(e, !0)), a && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, {
                alert: !0
            }, a))))
        }
    }
    I.propTypes = {
        handleChange: (global.PropTypes || guac["prop-types"]).func.isRequired,
        handleBlur: (global.PropTypes || guac["prop-types"]).func.isRequired,
        staticContent: (global.PropTypes || guac["prop-types"]).object.isRequired,
        currentFiles: (global.PropTypes || guac["prop-types"]).array,
        onFilesSelected: (global.PropTypes || guac["prop-types"]).func,
        section: (global.PropTypes || guac["prop-types"]).string,
        attachmentsEnabled: (global.PropTypes || guac["prop-types"]).bool,
        attachmentsLabel: (global.PropTypes || guac["prop-types"]).string,
        progressEvent: (global.PropTypes || guac["prop-types"]).any,
        formIdentifier: (global.PropTypes || guac["prop-types"]).string
    };
    var k = {
        SINGLE_LINE: C,
        MULTI_LINE: T,
        EMAIL: C,
        SUBMIT: _,
        PHONE: C,
        ATTACHMENT: I,
        propTypes: { ...C.propTypes,
            ...T.propTypes,
            ..._.propTypes,
            ...I.propTypes
        }
    };
    class A extends(global.React || guac.react).Component {
        constructor(e) {
            super(e), t.a(this, "handleChange", (e => {
                this.setState({
                    value: e.target.value
                }, this.props.reset)
            })), t.a(this, "handleBlur", (() => {
                this.props.resetFocus(), this.props.validationInputFunc()
            })), this.state = {
                value: ""
            }
        }
        render() {
            const {
                value: e
            } = this.state, r = k[this.props.type];
            return (global.React || guac.react).createElement(r, t._({
                handleChange: this.handleChange,
                handleBlur: this.handleBlur,
                value: e
            }, this.props))
        }
    }
    A.propTypes = {
        type: (global.PropTypes || guac["prop-types"]).string.isRequired,
        validationInputFunc: (global.PropTypes || guac["prop-types"]).func,
        reset: (global.PropTypes || guac["prop-types"]).func.isRequired,
        resetFocus: (global.PropTypes || guac["prop-types"]).func,
        ...k.propTypes
    }, A.defaultProps = {
        validationInputFunc: () => {},
        resetFocus: () => {}
    };
    class U extends(global.React || guac.react).Component {
        constructor() {
            super(...arguments), t.a(this, "styles", {
                successBlock: {
                    backgroundColor: "section",
                    "@sm": {
                        padding: "xlarge"
                    }
                },
                messagesBlock: {
                    textAlign: "center",
                    "@md": {
                        maxHeight: "400px",
                        overflowY: "auto"
                    }
                },
                messagesIcon: {
                    fill: "highlight"
                },
                messagesText: {
                    marginTop: "small",
                    marginBottom: "large",
                    color: "highlight"
                },
                subscribeBlock: {
                    textAlign: "center",
                    paddingVertical: "medium",
                    paddingHorizontal: "large",
                    marginTop: "xxlarge",
                    backgroundColor: "section",
                    "@md": {
                        maxHeight: "400px",
                        overflowY: "auto"
                    }
                }
            })
        }
        renderMessageSuccess() {
            return (global.React || guac.react).createElement(w.Consumer, null, (e => (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: this.styles.messagesBlock,
                group: "Group"
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                "data-aid": e.FORM_SUBMIT_SUCCESS
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, {
                tag: "svg",
                icon: "ok",
                size: "xxlarge",
                style: this.styles.messagesIcon
            })), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, {
                "data-aid": e.FORM_SUBMIT_SUCCESS_MESSAGE,
                style: this.styles.messagesText,
                richtext: !0
            }, this.props.formSuccessMessage))))
        }
        renderSubscribeSuccess() {
            return (global.React || guac.react).createElement(w.Consumer, null, (e => (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                category: this.props.category,
                section: "alt",
                style: this.styles.subscribeBlock
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, {
                "data-aid": e.FORM_SUBSCRIBE_SUCCESS_MESSAGE,
                featured: !0,
                richtext: !0
            }, this.props.emailConfirmationMessage))))
        }
        render() {
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                category: this.props.category,
                section: "default",
                style: this.styles.successBlock
            }, this.renderMessageSuccess(), this.props.optedToSubscribe && this.renderSubscribeSuccess())
        }
    }
    U.propTypes = {
        formSuccessMessage: (global.PropTypes || guac["prop-types"]).string,
        emailConfirmationMessage: (global.PropTypes || guac["prop-types"]).string,
        category: (global.PropTypes || guac["prop-types"]).string,
        optedToSubscribe: (global.PropTypes || guac["prop-types"]).bool
    };
    const L = /^[A-Z0-9+_.-]+@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
        X = /^1?[0-9]{3}[0-9]{3}?[0-9]{4}$/i;
    var D = {
        email: {
            test: function(e) {
                return L.test(e.trim())
            }
        },
        emailAllowEmpty: {
            test: function(e) {
                return !e || L.test(e.trim())
            }
        },
        emailMaxCount: {
            test: function(e) {
                return (global._ || guac.lodash).get(e, "length", 0) <= 80
            }
        },
        phone: {
            test: function(e) {
                return /^\d{7,}$/.test(e.replace(/[\s()+\-.]|ext/gi, ""))
            }
        },
        phoneUsOnly: {
            test: function(e) {
                return X.test(e.replace(/[\s()+\-.]|ext/gi, ""))
            }
        },
        required: {
            test: function(e) {
                return !!e && e.length > 0
            }
        },
        maxCount: {
            test: function(e, t) {
                let {
                    maxCount: r
                } = t;
                return e && e.length <= r
            }
        }
    };
    const q = "/form/$",
        {
            utils: {
                getRoute: z
            }
        } = (global.Core || guac["@wsb/guac-widget-core"]).Maniless;
    class j extends(global.React || guac.react).Component {
        constructor(e) {
            super(e), t.a(this, "resetField", (() => {
                this.setState({
                    isValid: !0
                })
            })), this.displayName = "FieldWithValidation";
            const {
                validation: r,
                required: a
            } = this.props;
            this.state = {
                isValid: !0,
                validation: r || a && "required",
                firstError: ""
            }, this.validate = this.validate.bind(this), this.getDataForSubmission = this.getDataForSubmission.bind(this)
        }
        componentWillReceiveProps(e) {
            const {
                validation: t,
                required: r
            } = e;
            this.setState({
                validation: t || r && "required"
            })
        }
        validate() {
            const {
                maxCount: e
            } = this.props, {
                validation: t
            } = this.state;
            let r, a;
            return t && (this.props.required || this._field.state.value) ? Array.isArray(t) && t.length ? (a = t.find((t => !D[t].test(this._field.state.value, {
                maxCount: e
            }))), r = !a) : r = D[t].test(this._field.state.value, {
                maxCount: e
            }) : r = !0, this.setState({
                isValid: r,
                firstError: a
            }), r
        }
        getDataForSubmission() {
            const {
                label: e,
                replyTo: t,
                type: r,
                keyName: a
            } = this.props;
            if ("SUBMIT" === r) return null;
            let s = this._field.state.value;
            "EMAIL" === r ? s = s.trim() : "PHONE" === r && (s = s.replace(/\+| |-|\(|\)/g, ""));
            const o = {
                label: e,
                value: s
            };
            return t && (o.replyTo = t), a && (o.keyName = a), o
        }
        renderErrorMessage() {
            const {
                type: e,
                renderMode: t,
                staticContent: r
            } = this.props;
            if (this.state.isValid || "EDIT" === t) return null;
            const a = this.state.firstError || this.state.validation;
            return (global.React || guac.react).createElement(w.Consumer, null, (t => (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Error, {
                "data-aid": "EMAIL" === e ? t.EMAIL_ERR_REND : t.ERR_REND,
                style: {
                    textAlign: "left"
                },
                children: r[`${a}ValidationErrorMessage`]
            })))
        }
        render() {
            const {
                isValid: e
            } = this.state;
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: {
                    paddingBottom: "medium"
                }
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                "data-field-id": "formFields.label",
                "data-field-route": z(q, [this.props.index])
            }, (global.React || guac.react).createElement(A, t._({
                validationInputFunc: this.props.validation && this.validate,
                reset: this.resetField,
                ref: e => this._field = e
            }, this.props, {
                placeholder: this.props.label + (this.props.required ? "*" : ""),
                "aria-required": this.props.required,
                "aria-invalid": e
            })), this.renderErrorMessage()))
        }
    }
    j.propTypes = {
        label: (global.PropTypes || guac["prop-types"]).string.isRequired,
        required: (global.PropTypes || guac["prop-types"]).bool,
        validation: (global.PropTypes || guac["prop-types"]).string,
        replyTo: (global.PropTypes || guac["prop-types"]).bool,
        type: (global.PropTypes || guac["prop-types"]).string,
        staticContent: (global.PropTypes || guac["prop-types"]).object.isRequired,
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        index: (global.PropTypes || guac["prop-types"]).number,
        keyName: (global.PropTypes || guac["prop-types"]).string,
        maxCount: (global.PropTypes || guac["prop-types"]).number
    }, j.defaultProps = {
        label: ""
    };
    const {
        utils: {
            getRoute: V
        }
    } = (global.Core || guac["@wsb/guac-widget-core"]).Maniless;
    class $ extends(global.React || guac.react).Component {
        constructor(e) {
            super(e)
        }
        render() {
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: {
                    paddingBottom: "medium"
                }
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                "data-field-id": "formFields.attachmentsEnabled",
                "data-field-route": V(q, [this.props.index])
            }, (global.React || guac.react).createElement(A, this.props)))
        }
    }
    $.propTypes = {
        label: (global.PropTypes || guac["prop-types"]).string.isRequired,
        required: (global.PropTypes || guac["prop-types"]).bool,
        validation: (global.PropTypes || guac["prop-types"]).string,
        replyTo: (global.PropTypes || guac["prop-types"]).bool,
        type: (global.PropTypes || guac["prop-types"]).string,
        staticContent: (global.PropTypes || guac["prop-types"]).object.isRequired,
        attachmentsEnabled: (global.PropTypes || guac["prop-types"]).bool,
        attachmentsLabel: (global.PropTypes || guac["prop-types"]).string,
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        index: (global.PropTypes || guac["prop-types"]).number,
        keyName: (global.PropTypes || guac["prop-types"]).string,
        maxCount: (global.PropTypes || guac["prop-types"]).number,
        section: (global.PropTypes || guac["prop-types"]).string.isRequired
    };
    class W extends(global.React || guac.react).Component {
        render() {
            const {
                style: e,
                staticContent: t,
                onClick: r,
                tag: a
            } = this.props;
            return (global.React || guac.react).createElement(w.Consumer, null, (s => (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, {
                "data-aid": s.CANCEL_BUTTON_REND,
                style: {
                    width: "fit-content",
                    margin: "0 auto",
                    textDecoration: "underline",
                    color: "highlight",
                    textAlign: "center",
                    ":hover": {
                        cursor: "pointer"
                    },
                    ...e
                },
                tag: a,
                onClick: r
            }, t.defaultCancelButtonLabel)))
        }
    }
    W.defaultProps = {
        staticContent: {},
        tag: "p"
    }, W.propTypes = {
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        style: (global.PropTypes || guac["prop-types"]).object,
        staticContent: (global.PropTypes || guac["prop-types"]).object.isRequired,
        onClick: (global.PropTypes || guac["prop-types"]).object.isRequired,
        tag: (global.PropTypes || guac["prop-types"]).string
    };
    class G extends(global.React || guac.react).Component {
        render() {
            const {
                onChange: e,
                value: t
            } = this.props;
            return (global.React || guac.react).createElement("input", {
                type: "text",
                name: "_app_id",
                autoComplete: "off",
                tabIndex: "-1",
                style: {
                    display: "none"
                },
                onChange: e,
                value: t
            })
        }
    }
    G.propTypes = {
        onChange: (global.PropTypes || guac["prop-types"]).func.isRequired,
        value: (global.PropTypes || guac["prop-types"]).string
    };
    var H = [200, 204];
    class K extends(global.React || guac.react).Component {
        render() {
            const {
                staticContent: e = {}
            } = this.props, t = {
                "{privacyPolicy}": [e.privacyPolicy, e.privacyPolicyURL],
                "{termsOfSerivce}": [e.termsOfSerivce, e.termsOfSerivceURL]
            }, {
                recaptchaDisclosure: r = ""
            } = e, a = Object.keys(t).reduce(((e, t) => {
                const r = new RegExp(`(${t})`);
                return (global._ || guac.lodash).flatten(e.map((e => e.split(r))))
            }), [r]);
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Details.Minor, null, a.map((e => {
                if (t[e]) {
                    const [r, a] = t[e];
                    return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Link, {
                        key: a,
                        href: a,
                        target: "_blank"
                    }, r)
                }
                return e
            })))
        }
    }
    K.propTypes = {
        staticContent: (global.PropTypes || guac["prop-types"]).object.isRequired
    };
    const {
        utils: {
            getRoute: Q
        }
    } = (global.Core || guac["@wsb/guac-widget-core"]).Maniless, {
        MESSAGING_CONVERSATIONS: J,
        CONTACT_US: Z
    } = a.default;
    class Y extends(global.React || guac.react).Component {
        constructor(e) {
            var r;
            super(e), r = this, t.a(this, "onHoneypotChange", (e => {
                this.setState({
                    honeypotValue: e.target.value
                })
            })), t.a(this, "createFilesRequest", ((e, t) => {
                const r = new FormData;
                return r.append("payload", JSON.stringify(e)), t.forEach((e => {
                    e.hasError || r.append("file", e.file)
                })), r
            })), t.a(this, "updateUploadProgress", (e => {
                this.setState({
                    progressEvent: e
                })
            })), t.a(this, "sendForm", (function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                const {
                    formSubmitHost: t,
                    formSubmitEndpoint: a
                } = r.props;
                if (!t) return;
                const {
                    files: s
                } = r.state, o = r.buildRequestBody(e);
                let i = JSON.stringify(o);
                const n = new XMLHttpRequest;
                n.open("POST", `${t}${a}`), s && s.length ? (n.upload.addEventListener("progress", r.updateUploadProgress, !1), i = r.createFilesRequest(o, s)) : n.setRequestHeader("Content-Type", "application/json; charset=UTF-8"), n.onreadystatechange = r.handleSubmitResponse(n), n.send(i)
            })), t.a(this, "onFilesSelected", (e => {
                this.setState({
                    files: e
                })
            })), t.a(this, "onSubmit", (e => {
                e.preventDefault(), this.validateAndSend(), this.props.onFormSubmit && this.props.onFormSubmit()
            })), t.a(this, "closeForm", (e => {
                e.preventDefault(), this.props.onFormClose && this.props.onFormClose()
            })), this._fields = {}, this.responseStatus = 0, this.state = {
                formSubmitted: !1,
                responseReceived: !1,
                optedToSubscribe: !1,
                honeypotValue: "",
                focusedFormInputIndex: -1,
                files: [],
                progressEvent: null
            }, this.resetFocus = this.resetFocus.bind(this)
        }
        componentDidMount() {
            this.timestamp = Date.now()
        }
        resetFocus() {
            this.setState({
                focusedFormInputIndex: -1
            })
        }
        validateForm() {
            const e = this._fields,
                t = (global._ || guac.lodash).findIndex(Object.keys(e), (t => !e[t].validate()));
            return this.setState({
                focusedFormInputIndex: t
            }), Object.keys(e).map((t => e[t].validate())).every((e => e))
        }
        buildMetadata() {
            const {
                formIdentifier: e
            } = this.props, {
                parsedResult: {
                    browser: t,
                    os: r,
                    platform: a
                } = {}
            } = class {
                static getParser(e, t = !1) {
                    if ("string" != typeof e) throw new Error("UserAgent should be a string");
                    return new E(e, t)
                }
                static parse(e) {
                    return new E(e).getResult()
                }
                static get BROWSER_MAP() {
                    return c
                }
                static get ENGINE_MAP() {
                    return u
                }
                static get OS_MAP() {
                    return g
                }
                static get PLATFORMS_MAP() {
                    return p
                }
            }.getParser(window.navigator.userAgent), {
                pathname: s
            } = window.location;
            return {
                formIdentifier: e,
                pathName: s,
                ...a.type ? {
                    deviceType: a.type
                } : {},
                ...r.name ? {
                    deviceOs: r.name
                } : {},
                ...t.name ? {
                    browserName: t.name
                } : {}
            }
        }
        buildRequestBody() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            const {
                websiteId: t,
                widgetId: r,
                pageId: a,
                accountId: s,
                domainName: o,
                locale: i,
                isReseller: n
            } = this.props, {
                optedToSubscribe: l,
                honeypotValue: c
            } = this.state, p = this.buildMetadata(), g = [];
            return Object.keys(this._fields).forEach((e => {
                const t = this._fields[e].getDataForSubmission();
                t && g.push(t)
            })), g.push({
                label: "_app_id",
                value: c
            }), {
                websiteId: t,
                widgetId: r,
                pageId: a,
                accountId: s,
                domainName: o,
                optedToSubscribe: l,
                locale: i,
                metadata: p,
                formData: g,
                recaptchaToken: e,
                isReseller: n
            }
        }
        handleSubmitResponse(e) {
            return () => {
                const {
                    status: t,
                    readyState: r
                } = e;
                4 === r && (this.responseStatus = t, this.setState({
                    responseReceived: !0,
                    formSubmitted: H.includes(t)
                }))
            }
        }
        validateTimestamp() {
            return Date.now() - this.timestamp > 3e3
        }
        validateAndSend() {
            this.validateTimestamp() && this.validateForm() && (this.props.recaptchaEnabled ? this.recaptcha.execute() : this.sendForm(), this.setState({
                formSubmitted: !0,
                responseReceived: !1
            }))
        }
        renderResponseErrorMessage(e) {
            const t = this.props.staticContent.contactFormResponseErrorMessage;
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Error, {
                "data-aid": this.dataAids.FORM_RESPONSE_ERR_REND,
                style: {
                    paddingBottom: e ? "medium" : 0,
                    textAlign: "left"
                },
                children: t
            })
        }
        renderButtons(e, r) {
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            const {
                formSubmitted: s
            } = this.state, o = a.SUBMIT || {}, i = {
                wrapper: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                    paddingTop: "medium"
                },
                cancel: {
                    display: "inline",
                    margin: 0,
                    "@xs-only": {
                        marginTop: "medium"
                    },
                    "@sm": {
                        marginLeft: "small"
                    }
                }
            };
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                className: "controls",
                style: i.wrapper,
                "data-aid": this.dataAids.FORM_CONTROLS
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                "data-field-id": "formFields.label",
                "data-field-route": Q(q, [this.props.formFields.length - 1])
            }, (global.React || guac.react).createElement(A, t._({
                type: "SUBMIT",
                label: e.label,
                inline: !0,
                isSending: s
            }, (global._ || guac.lodash).omit(this.props, "style"), o))), r && (global.React || guac.react).createElement(W, t._({
                onClick: this.closeForm
            }, this.props, {
                style: i.cancel,
                tag: "span"
            })))
        }
        renderEmailOptIn() {
            const {
                emailOptInEnabled: e,
                emailOptInMessage: t,
                formFieldVariationOptions: r = {},
                category: a
            } = this.props, s = {
                marginBottom: "medium",
                display: "flex",
                justifyContent: "center",
                ...r.EMAIL_OPT_IN && r.EMAIL_OPT_IN.styleOverrides || {}
            };
            return e && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: s
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Input.Checkbox, {
                "data-aid": this.dataAids.FORM_EMAIL_OPT_IN,
                checked: this.state.optedToSubscribe,
                onChange: () => {
                    this.setState({
                        optedToSubscribe: !this.state.optedToSubscribe
                    })
                },
                category: a,
                textProps: {
                    children: t,
                    "data-field-route": "/form",
                    "data-route": "emailOptInMessage"
                }
            }))
        }
        renderSmartColumns(e) {
            const {
                formFields: t,
                useCloseButton: r,
                formFieldVariationOptions: a
            } = e, s = this.renderEmailOptIn(), i = this.renderButtons(t[t.length - 1], r, a);
            let n = 12,
                l = null;
            const {
                useSecondColumn: c,
                numberOfFieldsOnLeftSide: p
            } = o.getFieldsBalancingInfo(t);
            c && (n = 6, l = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid.Cell, {
                "data-aid": this.dataAids.FORM_COL2,
                xs: 12,
                md: 6
            }, this.renderFieldsBlock(t.slice(p, t.length - 1), p, !0)));
            const g = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid.Cell, {
                "data-aid": this.dataAids.FORM_COL1,
                xs: 12,
                md: n
            }, this.renderFieldsBlock(t.slice(0, p), 0, !0));
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Component.Grid, {
                bottom: !1
            }, g, l), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, null, s, this.renderRecaptcha(), i))
        }
        renderFieldsBlock(e) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const {
                formFieldVariationOptions: s,
                staticContent: o,
                renderMode: i,
                emailOptInEnabled: n,
                fullWidth: l,
                formIdentifier: c
            } = this.props, {
                formSubmitted: p,
                responseReceived: g,
                focusedFormInputIndex: u,
                optedToSubscribe: d
            } = this.state, m = n && !a, b = c === J, h = b && m && !d;
            let y = !1,
                f = e.length,
                E = m ? e.length + 1 : e.length;
            const w = e.map(((e, a) => {
                const n = a + r,
                    g = n === u,
                    d = s && s[e.type] || {},
                    m = Object.assign(d, e, {
                        staticContent: o,
                        renderMode: i,
                        fullWidth: l,
                        formIdentifier: c
                    });
                let f = "email" === e.validation ? ["email", "emailMaxCount"] : e.validation;
                if ("SUBMIT" === e.type && (Object.assign(m, {
                        isSending: p
                    }), y = !0), "EMAIL" === e.type && h && (f = ["emailAllowEmpty", "emailMaxCount"], Object.assign(m, {
                        required: !1
                    })), ("PHONE" === e.type || "SINGLE_LINE" === e.type && "phone" === f) && (Object.assign(m, {
                        keyName: "phone"
                    }), f = b ? ["required", "phone", "phoneUsOnly"] : "phone"), "ATTACHMENT" === e.type) {
                    if (!e.attachmentsEnabled) return null;
                    const {
                        files: r,
                        progressEvent: a
                    } = this.state;
                    return Object.assign(m, {
                        currentFiles: r,
                        onFilesSelected: this.onFilesSelected,
                        progressEvent: a
                    }), (global.React || guac.react).createElement($, t._({
                        key: n,
                        index: n
                    }, m))
                }
                return (global.React || guac.react).createElement(j, t._({
                    ref: e => this._fields[n] = e,
                    key: n,
                    index: n,
                    isFocused: g,
                    resetFocus: this.resetFocus
                }, m, {
                    validation: f
                }))
            }));
            return m && (f = y ? f - 1 : f, w.splice(f, 0, this.renderEmailOptIn())), g && !H.includes(this.responseStatus) && 0 === r && (E = y ? E - 1 : E, w.splice(E, 0, this.renderResponseErrorMessage(y))), y && w.splice(w.length, 0, this.renderRecaptcha(), this.renderLegalDisclosure()), w
        }
        renderLegalDisclosure() {
            const {
                staticContent: e,
                formIdentifier: t
            } = this.props, {
                messagesRatesLegalDisclosure: r
            } = e;
            return t === J && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: {
                    paddingBottom: "medium",
                    textAlign: "center"
                }
            }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Details.Minor, {
                fontSize: "xsmall"
            }, r))
        }
        renderRecaptcha() {
            const {
                recaptchaEnabled: e,
                recaptchaType: t,
                staticContent: r,
                formSubmitHost: a
            } = this.props;
            return e ? (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                style: {
                    paddingTop: "xsmall",
                    paddingBottom: "small",
                    textAlign: "center"
                }
            }, (global.React || guac.react).createElement(i.default, {
                ref: e => {
                    this.recaptcha = e
                },
                type: t,
                formSubmitHost: a,
                onComplete: this.sendForm
            }), (global.React || guac.react).createElement(K, {
                staticContent: r
            }), (global.React || guac.react).createElement(n.default, null)) : null
        }
        renderCloseIcon() {
            const {
                useCloseIcon: e,
                onFormClose: r,
                formFieldVariationOptions: a = {}
            } = this.props;
            if (!e || !r) return null;
            const s = a.CLOSE_ICON || {},
                o = a.CLOSE_ICON_WRAPPER || {},
                i = {
                    container: {
                        position: "absolute",
                        paddingTop: "small",
                        paddingRight: "medium",
                        right: 0,
                        top: 0
                    },
                    icon: {
                        cursor: "pointer"
                    }
                };
            return (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, t._({
                style: i.container
            }, o), (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, t._({
                icon: "close",
                size: "medium",
                style: i.icon,
                onClick: r
            }, s)))
        }
        render() {
            const {
                category: e,
                formSuccessMessage: r,
                emailConfirmationMessage: a,
                useColumnLayout: s,
                style: o,
                formFields: i,
                onFormClose: n,
                dataAidPrefix: l,
                title: c,
                useCloseButton: p
            } = this.props, {
                formSubmitted: g,
                responseReceived: u,
                optedToSubscribe: d,
                honeypotValue: m
            } = this.state, b = i.filter(Boolean);
            return (global.React || guac.react).createElement(w.Consumer, null, (i => {
                const h = Boolean((!i || (global._ || guac.lodash).isEmpty(i)) && l);
                var y;
                let f;
                this.dataAids = h ? {
                    prefix: y = l,
                    CANCEL_BUTTON_REND: `${y}_CANCEL_BUTTON_REND`,
                    EMAIL_ERR_REND: `${y}_EMAIL_ERR_REND`,
                    ERR_REND: `${y}_ERR_REND`,
                    FORM_CONTAINER_REND: `${y}_FORM_CONTAINER_REND`,
                    FORM_TITLE_REND: `${y}_FORM_TITLE_REND`,
                    FORM_NAME: `${y}_FORM_NAME`,
                    FORM_EMAIL: `${y}_FORM_EMAIL`,
                    FORM_PHONE: `${y}_FORM_PHONE`,
                    FORM_MESSAGE: `${y}_FORM_MESSAGE`,
                    FORM_SUBMIT_SUCCESS: `${y}_FORM_SUBMIT_SUCCESS`,
                    FORM_SUBMIT_SUCCESS_MESSAGE: `${y}_FORM_SUBMIT_SUCCESS_MESSAGE`,
                    FORM_SUBSCRIBE_SUCCESS_MESSAGE: `${y}_FORM_SUBSCRIBE_SUCCESS_MESSAGE`,
                    FORM_REVEAL_BUTTON_REND: `${y}_FORM_REVEAL_BUTTON_REND`,
                    FORM_COL1: `${y}_FORM_COL1`,
                    FORM_COL2: `${y}_FORM_COL2`,
                    FORM_CONTROLS: `${y}_FORM_CONTROLS`,
                    FORM_CONTAINER_MOBILE: `${y}_FORM_CONTAINER_MOBILE`,
                    FORM_CONTAINER_DESKTOP: `${y}_FORM_CONTAINER_DESKTOP`,
                    FORM_CONTAINER_MOBILE_REND: `${y}_FORM_CONTAINER_MOBILE_REND`,
                    FORM_CONTAINER_DESKTOP_REND: `${y}_FORM_CONTAINER_DESKTOP_REND`,
                    FORM_RESPONSE_ERR_REND: `${y}_FORM_RESPONSE_ERR_REND`,
                    FORM_EMAIL_OPT_IN: `${y}_FORM_EMAIL_OPT_IN`,
                    SUBMIT_BUTTON_REND: `${y}_SUBMIT_BUTTON_REND`,
                    ATTACHMENT_COUNT_REND: `${y}_ATTACHMENT_COUNT_REND`,
                    FILE_INPUT_REND: `${y}_FILE_INPUT_REND`,
                    FILE_NAME_REND: `${y}_FILE_NAME_REND`
                } : i || {}, g && u && H.includes(this.responseStatus) && (f = (global.React || guac.react).createElement(U, {
                    formSuccessMessage: r,
                    emailConfirmationMessage: a,
                    category: e,
                    optedToSubscribe: d
                }));
                const E = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Group.Form, {
                        tag: "form",
                        onSubmit: this.onSubmit,
                        style: o,
                        "aria-live": "polite"
                    }, (global.React || guac.react).createElement(G, {
                        value: m,
                        onChange: this.onHoneypotChange
                    }), this.renderCloseIcon(), c, s ? this.renderSmartColumns(this.props) : this.renderFieldsBlock(b), n && !s && p && (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Block, {
                        className: "controls"
                    }, (global.React || guac.react).createElement(W, t._({
                        onClick: this.closeForm
                    }, this.props, {
                        tag: "p"
                    })))),
                    w = f || E;
                return h ? (global.React || guac.react).createElement(R, {
                    dataAids: this.dataAids
                }, w) : w
            }))
        }
    }
    Y.propTypes = {
        domainName: (global.PropTypes || guac["prop-types"]).string,
        formSubmitHost: (global.PropTypes || guac["prop-types"]).string,
        formSubmitEndpoint: (global.PropTypes || guac["prop-types"]).string,
        category: (global.PropTypes || guac["prop-types"]).string,
        formSuccessMessage: (global.PropTypes || guac["prop-types"]).string,
        formFields: (global.PropTypes || guac["prop-types"]).array,
        formFieldVariationOptions: (global.PropTypes || guac["prop-types"]).object,
        accountId: (global.PropTypes || guac["prop-types"]).string.isRequired,
        isReseller: (global.PropTypes || guac["prop-types"]).bool,
        websiteId: (global.PropTypes || guac["prop-types"]).string.isRequired,
        widgetId: (global.PropTypes || guac["prop-types"]).string,
        pageId: (global.PropTypes || guac["prop-types"]).string,
        staticContent: (global.PropTypes || guac["prop-types"]).object.isRequired,
        onFormClose: (global.PropTypes || guac["prop-types"]).func,
        onFormSubmit: (global.PropTypes || guac["prop-types"]).func,
        onHoneypotChange: (global.PropTypes || guac["prop-types"]).func,
        style: (global.PropTypes || guac["prop-types"]).object,
        fullWidth: (global.PropTypes || guac["prop-types"]).bool,
        useColumnLayout: (global.PropTypes || guac["prop-types"]).bool,
        showMap: (global.PropTypes || guac["prop-types"]).bool,
        renderMode: (global.PropTypes || guac["prop-types"]).string,
        locale: (global.PropTypes || guac["prop-types"]).string,
        emailConfirmationMessage: (global.PropTypes || guac["prop-types"]).string,
        emailOptInEnabled: (global.PropTypes || guac["prop-types"]).bool,
        emailOptInMessage: (global.PropTypes || guac["prop-types"]).string,
        recaptchaEnabled: (global.PropTypes || guac["prop-types"]).bool,
        recaptchaType: (global.PropTypes || guac["prop-types"]).oneOf(Object.values(s.default)).isRequired,
        dataAidPrefix: (global.PropTypes || guac["prop-types"]).string,
        title: (global.PropTypes || guac["prop-types"]).node,
        formIdentifier: (global.PropTypes || guac["prop-types"]).oneOf(Object.values(a.default)),
        useCloseIcon: (global.PropTypes || guac["prop-types"]).bool,
        useCloseButton: (global.PropTypes || guac["prop-types"]).bool,
        optedToSubscribe: (global.PropTypes || guac["prop-types"]).bool,
        ...A.propTypes
    }, Y.defaultProps = {
        formSubmitEndpoint: "/v3/messages",
        dataAidPrefix: "CONTACT",
        formIdentifier: Z,
        useCloseIcon: !1,
        useCloseButton: !0
    }, e.default = Y, Object.defineProperty(e, "__esModule", {
        value: !0
    })
})), "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=Form-6710b59f.js.map