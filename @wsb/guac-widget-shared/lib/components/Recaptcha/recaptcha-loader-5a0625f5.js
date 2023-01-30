define("@wsb/guac-widget-shared/lib/components/Recaptcha/recaptcha-loader-5a0625f5.js", ["exports", "~/c/_rollupPluginBabelHelpers"], (function(e, t) {
    "use strict";
    const s = "recaptcha-script";

    function o() {
        window.grecaptcha.ready((() => {
            const e = window.wsb.recaptcha.scriptCallbacks;
            for (; e.length;) {
                e.pop()()
            }
        }))
    }

    function c() {
        window.wsb && window.wsb.recaptcha || (window.wsb = window.wsb || {}, window.wsb.recaptcha = {
            siteKey: null,
            siteKeyRequested: !1,
            siteKeyCallbacks: [],
            scriptCallbacks: []
        })
    }

    function a(e, t) {
        c();
        const {
            recaptcha: s
        } = window.wsb;
        if (s.siteKey) return void t(s.siteKey);
        if (function(e) {
                window.wsb.recaptcha.siteKeyCallbacks.push(e)
            }(t), s.siteKeyRequested) return;
        s.siteKeyRequested = !0;
        const o = new XMLHttpRequest;
        o.open("GET", e), o.send(), o.onreadystatechange = () => function(e) {
            if (4 !== e.readyState || !(global._ || guac.lodash).includes([200, 304], e.status)) return;
            const t = JSON.parse(e.responseText),
                {
                    recaptcha: s
                } = window.wsb,
                o = s.siteKeyCallbacks;
            if (t.siteKey)
                for (s.siteKey = t.siteKey; o.length;) o.pop()(s.siteKey)
        }(o)
    }

    function i(e, t) {
        let {
            siteKey: a
        } = e;
        var i;
        (c(), void 0 !== window.grecaptcha && window.grecaptcha.execute) ? t(): (i = t, window.wsb.recaptcha.scriptCallbacks.push(i), document.querySelector("#recaptcha-script") || function(e) {
            const t = document.createElement("script");
            t.setAttribute("src", `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(e)}`), t.setAttribute("id", s), t.setAttribute("async", !0), t.setAttribute("defer", !0), t.onload = o, document.body.appendChild(t)
        }(a))
    }
    class n extends(global.React || guac.react).Component {
        constructor() {
            super(...arguments), t.a(this, "hideRecaptchaBadge", (() => {
                const e = document.querySelector(".grecaptcha-badge");
                e && e.setAttribute("hidden", !0)
            })), t.a(this, "loadRecaptcha", (e => {
                i({
                    siteKey: e
                }, (() => {
                    this.execute = () => {
                        window.grecaptcha.execute(e, {
                            action: "formSubmit"
                        }).then(this.props.onComplete)
                    }, this.hideRecaptchaBadge()
                }))
            }))
        }
        componentDidMount() {
            this.execute = this.props.onComplete, a(this.siteKeyUrl, this.loadRecaptcha)
        }
        get siteKeyUrl() {
            return `${this.props.formSubmitHost}${this.props.formSubmitEndpoint}`
        }
        render() {
            return null
        }
    }
    n.propTypes = {
        onComplete: (global.PropTypes || guac["prop-types"]).func.isRequired,
        formSubmitHost: (global.PropTypes || guac["prop-types"]).string.isRequired,
        formSubmitEndpoint: (global.PropTypes || guac["prop-types"]).string
    }, n.defaultProps = {
        formSubmitEndpoint: "/v3/recaptcha"
    }, e.default = n, Object.defineProperty(e, "__esModule", {
        value: !0
    })
})), "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=recaptcha-loader-5a0625f5.js.map