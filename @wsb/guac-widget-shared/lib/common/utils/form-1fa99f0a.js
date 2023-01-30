define("@wsb/guac-widget-shared/lib/common/utils/form-1fa99f0a.js", ["exports"], (function(e) {
    "use strict";
    const t = {
            EMAIL: 1,
            SINGLE_LINE: 1,
            PHONE: 1,
            MULTI_LINE: 3,
            SUBMIT: 0
        },
        n = e => {
            let n = 0;
            return e.forEach((e => {
                n += t[e.type] || 0
            })), n
        },
        o = (e, n) => {
            let o = 0,
                i = 0;
            return e.forEach((e => {
                i < n / 2 && (i += t[e.type], o += 1)
            })), o
        };
    e.calculateTippingPoint = o, e.calculateTotalFieldsWeight = n, e.getFieldsBalancingInfo = e => {
        const t = n(e),
            i = t > 6 && e.length > 4;
        return {
            totalWeight: t,
            useSecondColumn: i,
            numberOfFieldsOnLeftSide: i ? o(e, t) : e.length - 1
        }
    }, Object.defineProperty(e, "__esModule", {
        value: !0
    })
})), "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=form-1fa99f0a.js.map