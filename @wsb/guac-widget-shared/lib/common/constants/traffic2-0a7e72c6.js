define("@wsb/guac-widget-shared/lib/common/constants/traffic2-0a7e72c6.js", ["exports"], (function(a) {
    "use strict";
    const e = "click",
        o = "pandc.vnext";
    var n, i, s = (n = o, i = {
        editor_preview: {
            submit_contact_form: e,
            messaging_fab_open: e,
            messaging_fab_close: e,
            messaging_webApp_appstore: e,
            conversations_learn_more: e
        },
        shop_widget: {
            click_pagination_back_arrow: e,
            click_pagination_forward_arrow: e,
            click_pagination_number: e
        }
    }, (global._ || guac.lodash).mapValues(i, ((a, e) => (global._ || guac.lodash).mapValues(a, ((a, o) => [n, e, o, a].join("."))))));
    a.TRAFFIC_PREFIX = o, a.default = s, Object.defineProperty(a, "__esModule", {
        value: !0
    })
})), "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=traffic2-0a7e72c6.js.map