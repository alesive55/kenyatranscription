(() => {
    "use strict";
    var e = {
            895: () => {
                try {
                    self["workbox:cacheable-response:6.4.1"] && _()
                } catch (e) {}
            },
            259: (e, t, s) => {
                s.d(t, {
                    B: () => a
                }), s(913);
                class a {
                    constructor() {
                        this.promise = new Promise(((e, t) => {
                            this.resolve = e, this.reject = t
                        }))
                    }
                }
            },
            125: (e, t, s) => {
                s.d(t, {
                    V: () => a
                }), s(913);
                class a extends Error {
                    constructor(e, t) {
                        super(((e, ...t) => {
                            let s = e;
                            return t.length > 0 && (s += ` :: ${JSON.stringify(t)}`), s
                        })(e, t)), this.name = e, this.details = t
                    }
                }
            },
            524: (e, t, s) => {
                s.d(t, {
                    h: () => a
                }), s(125), s(913);
                const a = null
            },
            594: (e, t, s) => {
                function a(e, t) {
                    const s = new URL(e);
                    for (const e of t) s.searchParams.delete(e);
                    return s.href
                }
                async function n(e, t, s, n) {
                    const r = a(t.url, s);
                    if (t.url === r) return e.match(t, n);
                    const i = Object.assign(Object.assign({}, n), {
                            ignoreSearch: !0
                        }),
                        c = await e.keys(t, i);
                    for (const t of c)
                        if (r === a(t.url, s)) return e.match(t, n)
                }
                s.d(t, {
                    F: () => n
                }), s(913)
            },
            536: (e, t, s) => {
                s.d(t, {
                    x: () => r
                }), s(913);
                const a = {
                        googleAnalytics: "googleAnalytics",
                        precache: "precache-v2",
                        prefix: "workbox",
                        runtime: "runtime",
                        suffix: "undefined" != typeof registration ? registration.scope : ""
                    },
                    n = e => [a.prefix, e, a.suffix].filter((e => e && e.length > 0)).join("-"),
                    r = {
                        updateDetails: e => {
                            (e => {
                                for (const t of Object.keys(a)) e(t)
                            })((t => {
                                "string" == typeof e[t] && (a[t] = e[t])
                            }))
                        },
                        getGoogleAnalyticsName: e => e || n(a.googleAnalytics),
                        getPrecacheName: e => e || n(a.precache),
                        getPrefix: () => a.prefix,
                        getRuntimeName: e => e || n(a.runtime),
                        getSuffix: () => a.suffix
                    }
            },
            123: (e, t, s) => {
                let a;

                function n() {
                    if (void 0 === a) {
                        const e = new Response("");
                        if ("body" in e) try {
                            new Response(e.body), a = !0
                        } catch (e) {
                            a = !1
                        }
                        a = !1
                    }
                    return a
                }
                s.d(t, {
                    x: () => n
                }), s(913)
            },
            327: (e, t, s) => {
                function a(e) {
                    e.then((() => {}))
                }
                s.d(t, {
                    f: () => a
                }), s(913)
            },
            632: (e, t, s) => {
                s.d(t, {
                    Y: () => n
                }), s(120);
                var a = s(565);
                async function n() {
                    for (const e of a.f) await e()
                }
                s(913)
            },
            119: (e, t, s) => {
                s.d(t, {
                    C: () => a
                }), s(913);
                const a = e => new URL(String(e), location.href).href.replace(new RegExp(`^${location.origin}`), "")
            },
            120: (e, t, s) => {
                s.d(t, {
                    k: () => a
                }), s(913);
                const a = null
            },
            902: (e, t, s) => {
                function a(e) {
                    return new Promise((t => setTimeout(t, e)))
                }
                s.d(t, {
                    V: () => a
                }), s(913)
            },
            392: (e, t, s) => {
                function a(e, t) {
                    const s = t();
                    return e.waitUntil(s), s
                }
                s.d(t, {
                    A: () => a
                }), s(913)
            },
            913: () => {
                try {
                    self["workbox:core:6.4.1"] && _()
                } catch (e) {}
            },
            194: (e, t, s) => {
                s.d(t, {
                    S: () => r
                });
                var a = s(123),
                    n = s(125);
                async function r(e, t) {
                    let s = null;
                    if (e.url && (s = new URL(e.url).origin), s !== self.location.origin) throw new n.V("cross-origin-copy-response", {
                        origin: s
                    });
                    const r = e.clone(),
                        i = {
                            headers: new Headers(r.headers),
                            status: r.status,
                            statusText: r.statusText
                        },
                        c = t ? t(i) : i,
                        o = (0, a.x)() ? r.body : await r.blob();
                    return new Response(o, c)
                }
                s(913)
            },
            565: (e, t, s) => {
                s.d(t, {
                    f: () => a
                }), s(913);
                const a = new Set
            },
            303: (e, t, s) => {
                s.d(t, {
                    t: () => n
                }), s(120), s(524);
                var a = s(565);

                function n(e) {
                    a.f.add(e)
                }
                s(913)
            },
            550: () => {
                try {
                    self["workbox:expiration:6.4.1"] && _()
                } catch (e) {}
            },
            977: () => {
                try {
                    self["workbox:precaching:6.4.1"] && _()
                } catch (e) {}
            },
            989: (e, t, s) => {
                s.d(t, {
                    t: () => n
                }), s(524), s(120);
                var a = s(188);
                s(80);
                class n extends a.A {
                    constructor(e, t, s) {
                        super((({
                            url: t
                        }) => {
                            const s = e.exec(t.href);
                            if (s && (t.origin === location.origin || 0 === s.index)) return s.slice(1)
                        }), t, s)
                    }
                }
            },
            188: (e, t, s) => {
                s.d(t, {
                    A: () => r
                }), s(524);
                var a = s(505),
                    n = s(179);
                s(80);
                class r {
                    constructor(e, t, s = a.g) {
                        this.handler = (0, n.M)(t), this.match = e, this.method = s
                    }
                    setCatchHandler(e) {
                        this.catchHandler = (0, n.M)(e)
                    }
                }
            },
            491: (e, t, s) => {
                s.d(t, {
                    F: () => i
                }), s(524), s(119);
                var a = s(505),
                    n = (s(120), s(179)),
                    r = s(125);
                s(80);
                class i {
                    constructor() {
                        this._routes = new Map, this._defaultHandlerMap = new Map
                    }
                    get routes() {
                        return this._routes
                    }
                    addFetchListener() {
                        self.addEventListener("fetch", (e => {
                            const {
                                request: t
                            } = e, s = this.handleRequest({
                                request: t,
                                event: e
                            });
                            s && e.respondWith(s)
                        }))
                    }
                    addCacheListener() {
                        self.addEventListener("message", (e => {
                            if (e.data && "CACHE_URLS" === e.data.type) {
                                const {
                                    payload: t
                                } = e.data, s = Promise.all(t.urlsToCache.map((t => {
                                    "string" == typeof t && (t = [t]);
                                    const s = new Request(...t);
                                    return this.handleRequest({
                                        request: s,
                                        event: e
                                    })
                                })));
                                e.waitUntil(s), e.ports && e.ports[0] && s.then((() => e.ports[0].postMessage(!0)))
                            }
                        }))
                    }
                    handleRequest({
                        request: e,
                        event: t
                    }) {
                        const s = new URL(e.url, location.href);
                        if (!s.protocol.startsWith("http")) return;
                        const a = s.origin === location.origin,
                            {
                                params: n,
                                route: r
                            } = this.findMatchingRoute({
                                event: t,
                                request: e,
                                sameOrigin: a,
                                url: s
                            });
                        let i = r && r.handler;
                        const c = e.method;
                        if (!i && this._defaultHandlerMap.has(c) && (i = this._defaultHandlerMap.get(c)), !i) return;
                        let o;
                        try {
                            o = i.handle({
                                url: s,
                                request: e,
                                event: t,
                                params: n
                            })
                        } catch (e) {
                            o = Promise.reject(e)
                        }
                        const h = r && r.catchHandler;
                        return o instanceof Promise && (this._catchHandler || h) && (o = o.catch((async a => {
                            if (h) try {
                                return await h.handle({
                                    url: s,
                                    request: e,
                                    event: t,
                                    params: n
                                })
                            } catch (e) {
                                e instanceof Error && (a = e)
                            }
                            if (this._catchHandler) return this._catchHandler.handle({
                                url: s,
                                request: e,
                                event: t
                            });
                            throw a
                        }))), o
                    }
                    findMatchingRoute({
                        url: e,
                        sameOrigin: t,
                        request: s,
                        event: a
                    }) {
                        const n = this._routes.get(s.method) || [];
                        for (const r of n) {
                            let n;
                            const i = r.match({
                                url: e,
                                sameOrigin: t,
                                request: s,
                                event: a
                            });
                            if (i) return n = i, (Array.isArray(n) && 0 === n.length || i.constructor === Object && 0 === Object.keys(i).length || "boolean" == typeof i) && (n = void 0), {
                                route: r,
                                params: n
                            }
                        }
                        return {}
                    }
                    setDefaultHandler(e, t = a.g) {
                        this._defaultHandlerMap.set(t, (0, n.M)(e))
                    }
                    setCatchHandler(e) {
                        this._catchHandler = (0, n.M)(e)
                    }
                    registerRoute(e) {
                        this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e)
                    }
                    unregisterRoute(e) {
                        if (!this._routes.has(e.method)) throw new r.V("unregister-route-but-not-found-with-method", {
                            method: e.method
                        });
                        const t = this._routes.get(e.method).indexOf(e);
                        if (!(t > -1)) throw new r.V("unregister-route-route-not-registered");
                        this._routes.get(e.method).splice(t, 1)
                    }
                }
            },
            80: () => {
                try {
                    self["workbox:routing:6.4.1"] && _()
                } catch (e) {}
            },
            917: (e, t, s) => {
                s.d(t, {
                    X: () => c
                }), s(120);
                var a = s(125),
                    n = s(188),
                    r = s(989),
                    i = s(486);

                function c(e, t, s) {
                    let c;
                    if ("string" == typeof e) {
                        const a = new URL(e, location.href),
                            r = ({
                                url: e
                            }) => e.href === a.href;
                        c = new n.A(r, t, s)
                    } else if (e instanceof RegExp) c = new r.t(e, t, s);
                    else if ("function" == typeof e) c = new n.A(e, t, s);
                    else {
                        if (!(e instanceof n.A)) throw new a.V("unsupported-route-type", {
                            moduleName: "workbox-routing",
                            funcName: "registerRoute",
                            paramName: "capture"
                        });
                        c = e
                    }
                    return (0, i.u)().registerRoute(c), c
                }
                s(80)
            },
            505: (e, t, s) => {
                s.d(t, {
                    g: () => a
                }), s(80);
                const a = "GET"
            },
            486: (e, t, s) => {
                s.d(t, {
                    u: () => r
                });
                var a = s(491);
                let n;
                s(80);
                const r = () => (n || (n = new a.F, n.addFetchListener(), n.addCacheListener()), n)
            },
            179: (e, t, s) => {
                s.d(t, {
                    M: () => a
                }), s(524), s(80);
                const a = e => e && "object" == typeof e ? e : {
                    handle: e
                }
            },
            951: (e, t, s) => {
                s.d(t, {
                    _: () => i
                });
                var a = s(536),
                    n = s(125),
                    r = (s(120), s(119), s(333));
                s(873);
                class i {
                    constructor(e = {}) {
                        this.cacheName = a.x.getRuntimeName(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions
                    }
                    handle(e) {
                        const [t] = this.handleAll(e);
                        return t
                    }
                    handleAll(e) {
                        e instanceof FetchEvent && (e = {
                            event: e,
                            request: e.request
                        });
                        const t = e.event,
                            s = "string" == typeof e.request ? new Request(e.request) : e.request,
                            a = "params" in e ? e.params : void 0,
                            n = new r.G(this, {
                                event: t,
                                request: s,
                                params: a
                            }),
                            i = this._getResponse(n, s, t);
                        return [i, this._awaitComplete(i, n, s, t)]
                    }
                    async _getResponse(e, t, s) {
                        let a;
                        await e.runCallbacks("handlerWillStart", {
                            event: s,
                            request: t
                        });
                        try {
                            if (a = await this._handle(t, e), !a || "error" === a.type) throw new n.V("no-response", {
                                url: t.url
                            })
                        } catch (n) {
                            if (n instanceof Error)
                                for (const r of e.iterateCallbacks("handlerDidError"))
                                    if (a = await r({
                                            error: n,
                                            event: s,
                                            request: t
                                        }), a) break;
                            if (!a) throw n
                        }
                        for (const n of e.iterateCallbacks("handlerWillRespond")) a = await n({
                            event: s,
                            request: t,
                            response: a
                        });
                        return a
                    }
                    async _awaitComplete(e, t, s, a) {
                        let n, r;
                        try {
                            n = await e
                        } catch (r) {}
                        try {
                            await t.runCallbacks("handlerDidRespond", {
                                event: a,
                                request: s,
                                response: n
                            }), await t.doneWaiting()
                        } catch (e) {
                            e instanceof Error && (r = e)
                        }
                        if (await t.runCallbacks("handlerDidComplete", {
                                event: a,
                                request: s,
                                response: n,
                                error: r
                            }), t.destroy(), r) throw r
                    }
                }
            },
            333: (e, t, s) => {
                s.d(t, {
                    G: () => l
                }), s(524);
                var a = s(594),
                    n = s(259),
                    r = s(632),
                    i = s(119),
                    c = (s(120), s(902)),
                    o = s(125);

                function h(e) {
                    return "string" == typeof e ? new Request(e) : e
                }
                s(873);
                class l {
                    constructor(e, t) {
                        this._cacheKeys = {}, Object.assign(this, t), this.event = t.event, this._strategy = e, this._handlerDeferred = new n.B, this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = new Map;
                        for (const e of this._plugins) this._pluginStateMap.set(e, {});
                        this.event.waitUntil(this._handlerDeferred.promise)
                    }
                    async fetch(e) {
                        const {
                            event: t
                        } = this;
                        let s = h(e);
                        if ("navigate" === s.mode && t instanceof FetchEvent && t.preloadResponse) {
                            const e = await t.preloadResponse;
                            if (e) return e
                        }
                        const a = this.hasCallback("fetchDidFail") ? s.clone() : null;
                        try {
                            for (const e of this.iterateCallbacks("requestWillFetch")) s = await e({
                                request: s.clone(),
                                event: t
                            })
                        } catch (e) {
                            if (e instanceof Error) throw new o.V("plugin-error-request-will-fetch", {
                                thrownErrorMessage: e.message
                            })
                        }
                        const n = s.clone();
                        try {
                            let e;
                            e = await fetch(s, "navigate" === s.mode ? void 0 : this._strategy.fetchOptions);
                            for (const s of this.iterateCallbacks("fetchDidSucceed")) e = await s({
                                event: t,
                                request: n,
                                response: e
                            });
                            return e
                        } catch (e) {
                            throw a && await this.runCallbacks("fetchDidFail", {
                                error: e,
                                event: t,
                                originalRequest: a.clone(),
                                request: n.clone()
                            }), e
                        }
                    }
                    async fetchAndCachePut(e) {
                        const t = await this.fetch(e),
                            s = t.clone();
                        return this.waitUntil(this.cachePut(e, s)), t
                    }
                    async cacheMatch(e) {
                        const t = h(e);
                        let s;
                        const {
                            cacheName: a,
                            matchOptions: n
                        } = this._strategy, r = await this.getCacheKey(t, "read"), i = Object.assign(Object.assign({}, n), {
                            cacheName: a
                        });
                        s = await caches.match(r, i);
                        for (const e of this.iterateCallbacks("cachedResponseWillBeUsed")) s = await e({
                            cacheName: a,
                            matchOptions: n,
                            cachedResponse: s,
                            request: r,
                            event: this.event
                        }) || void 0;
                        return s
                    }
                    async cachePut(e, t) {
                        const s = h(e);
                        await (0, c.V)(0);
                        const n = await this.getCacheKey(s, "write");
                        if (!t) throw new o.V("cache-put-with-no-response", {
                            url: (0, i.C)(n.url)
                        });
                        const l = await this._ensureResponseSafeToCache(t);
                        if (!l) return !1;
                        const {
                            cacheName: u,
                            matchOptions: d
                        } = this._strategy, f = await self.caches.open(u), p = this.hasCallback("cacheDidUpdate"), g = p ? await (0, a.F)(f, n.clone(), ["__WB_REVISION__"], d) : null;
                        try {
                            await f.put(n, p ? l.clone() : l)
                        } catch (e) {
                            if (e instanceof Error) throw "QuotaExceededError" === e.name && await (0, r.Y)(), e
                        }
                        for (const e of this.iterateCallbacks("cacheDidUpdate")) await e({
                            cacheName: u,
                            oldResponse: g,
                            newResponse: l.clone(),
                            request: n,
                            event: this.event
                        });
                        return !0
                    }
                    async getCacheKey(e, t) {
                        const s = `${e.url} | ${t}`;
                        if (!this._cacheKeys[s]) {
                            let a = e;
                            for (const e of this.iterateCallbacks("cacheKeyWillBeUsed")) a = h(await e({
                                mode: t,
                                request: a,
                                event: this.event,
                                params: this.params
                            }));
                            this._cacheKeys[s] = a
                        }
                        return this._cacheKeys[s]
                    }
                    hasCallback(e) {
                        for (const t of this._strategy.plugins)
                            if (e in t) return !0;
                        return !1
                    }
                    async runCallbacks(e, t) {
                        for (const s of this.iterateCallbacks(e)) await s(t)
                    }* iterateCallbacks(e) {
                        for (const t of this._strategy.plugins)
                            if ("function" == typeof t[e]) {
                                const s = this._pluginStateMap.get(t),
                                    a = a => {
                                        const n = Object.assign(Object.assign({}, a), {
                                            state: s
                                        });
                                        return t[e](n)
                                    };
                                yield a
                            }
                    }
                    waitUntil(e) {
                        return this._extendLifetimePromises.push(e), e
                    }
                    async doneWaiting() {
                        let e;
                        for (; e = this._extendLifetimePromises.shift();) await e
                    }
                    destroy() {
                        this._handlerDeferred.resolve(null)
                    }
                    async _ensureResponseSafeToCache(e) {
                        let t = e,
                            s = !1;
                        for (const e of this.iterateCallbacks("cacheWillUpdate"))
                            if (t = await e({
                                    request: this.request,
                                    response: t,
                                    event: this.event
                                }) || void 0, s = !0, !t) break;
                        return s || t && 200 !== t.status && (t = void 0), t
                    }
                }
            },
            873: () => {
                try {
                    self["workbox:strategies:6.4.1"] && _()
                } catch (e) {}
            },
            308: (e, t, s) => {
                s.r(t), s.d(t, {
                    CacheableResponse: () => a,
                    CacheableResponsePlugin: () => n
                }), s(524), s(125), s(119), s(120), s(895);
                class a {
                    constructor(e = {}) {
                        this._statuses = e.statuses, this._headers = e.headers
                    }
                    isResponseCacheable(e) {
                        let t = !0;
                        return this._statuses && (t = this._statuses.includes(e.status)), this._headers && t && (t = Object.keys(this._headers).some((t => e.headers.get(t) === this._headers[t]))), t
                    }
                }
                class n {
                    constructor(e) {
                        this.cacheWillUpdate = async ({
                            response: e
                        }) => this._cacheableResponse.isResponseCacheable(e) ? e : null, this._cacheableResponse = new a(e)
                    }
                }
            },
            634: (e, t, s) => {
                s.r(t), s.d(t, {
                    _private: () => a,
                    cacheNames: () => R,
                    clientsClaim: () => b,
                    copyResponse: () => v.S,
                    registerQuotaErrorCallback: () => n.t,
                    setCacheNameDetails: () => x,
                    skipWaiting: () => C
                });
                var a = {};
                s.r(a), s.d(a, {
                    Deferred: () => d.B,
                    WorkboxError: () => _.V,
                    assert: () => r.h,
                    cacheMatchIgnoreParams: () => c.F,
                    cacheNames: () => i.x,
                    canConstructReadableStream: () => h,
                    canConstructResponseFromBodyStream: () => l.x,
                    dontWaitFor: () => u.f,
                    executeQuotaErrorCallbacks: () => f.Y,
                    getFriendlyURL: () => p.C,
                    logger: () => g.k,
                    resultingClientExists: () => w,
                    timeout: () => m.V,
                    waitUntil: () => y.A
                });
                var n = s(303),
                    r = s(524),
                    i = s(536),
                    c = s(594);
                let o;

                function h() {
                    if (void 0 === o) try {
                        new ReadableStream({
                            start() {}
                        }), o = !0
                    } catch (e) {
                        o = !1
                    }
                    return o
                }
                s(913);
                var l = s(123),
                    u = s(327),
                    d = s(259),
                    f = s(632),
                    p = s(119),
                    g = s(120),
                    m = s(902);
                async function w(e) {
                    if (!e) return;
                    let t = await self.clients.matchAll({
                        type: "window"
                    });
                    const s = new Set(t.map((e => e.id)));
                    let a;
                    const n = performance.now();
                    for (; performance.now() - n < 2e3 && (t = await self.clients.matchAll({
                            type: "window"
                        }), a = t.find((t => e ? t.id === e : !s.has(t.id))), !a);) await (0, m.V)(100);
                    return a
                }
                var y = s(392),
                    _ = s(125);
                const R = {
                    get googleAnalytics() {
                        return i.x.getGoogleAnalyticsName()
                    },
                    get precache() {
                        return i.x.getPrecacheName()
                    },
                    get prefix() {
                        return i.x.getPrefix()
                    },
                    get runtime() {
                        return i.x.getRuntimeName()
                    },
                    get suffix() {
                        return i.x.getSuffix()
                    }
                };
                var v = s(194);

                function b() {
                    self.addEventListener("activate", (() => self.clients.claim()))
                }

                function x(e) {
                    i.x.updateDetails(e)
                }

                function C() {
                    self.skipWaiting()
                }
            },
            370: (e, t, s) => {
                s.r(t), s.d(t, {
                    CacheExpiration: () => C,
                    ExpirationPlugin: () => N
                }), s(524);
                var a = s(327),
                    n = (s(120), s(125));
                let r, i;
                const c = new WeakMap,
                    o = new WeakMap,
                    h = new WeakMap,
                    l = new WeakMap,
                    u = new WeakMap;
                let d = {
                    get(e, t, s) {
                        if (e instanceof IDBTransaction) {
                            if ("done" === t) return o.get(e);
                            if ("objectStoreNames" === t) return e.objectStoreNames || h.get(e);
                            if ("store" === t) return s.objectStoreNames[1] ? void 0 : s.objectStore(s.objectStoreNames[0])
                        }
                        return p(e[t])
                    },
                    set: (e, t, s) => (e[t] = s, !0),
                    has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
                };

                function f(e) {
                    return "function" == typeof e ? (t = e) !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (i || (i = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(t) ? function(...e) {
                        return t.apply(g(this), e), p(c.get(this))
                    } : function(...e) {
                        return p(t.apply(g(this), e))
                    } : function(e, ...s) {
                        const a = t.call(g(this), e, ...s);
                        return h.set(a, e.sort ? e.sort() : [e]), p(a)
                    } : (e instanceof IDBTransaction && function(e) {
                        if (o.has(e)) return;
                        const t = new Promise(((t, s) => {
                            const a = () => {
                                    e.removeEventListener("complete", n), e.removeEventListener("error", r), e.removeEventListener("abort", r)
                                },
                                n = () => {
                                    t(), a()
                                },
                                r = () => {
                                    s(e.error || new DOMException("AbortError", "AbortError")), a()
                                };
                            e.addEventListener("complete", n), e.addEventListener("error", r), e.addEventListener("abort", r)
                        }));
                        o.set(e, t)
                    }(e), s = e, (r || (r = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((e => s instanceof e)) ? new Proxy(e, d) : e);
                    var t, s
                }

                function p(e) {
                    if (e instanceof IDBRequest) return function(e) {
                        const t = new Promise(((t, s) => {
                            const a = () => {
                                    e.removeEventListener("success", n), e.removeEventListener("error", r)
                                },
                                n = () => {
                                    t(p(e.result)), a()
                                },
                                r = () => {
                                    s(e.error), a()
                                };
                            e.addEventListener("success", n), e.addEventListener("error", r)
                        }));
                        return t.then((t => {
                            t instanceof IDBCursor && c.set(t, e)
                        })).catch((() => {})), u.set(t, e), t
                    }(e);
                    if (l.has(e)) return l.get(e);
                    const t = f(e);
                    return t !== e && (l.set(e, t), u.set(t, e)), t
                }
                const g = e => u.get(e),
                    m = ["get", "getKey", "getAll", "getAllKeys", "count"],
                    w = ["put", "add", "delete", "clear"],
                    y = new Map;

                function _(e, t) {
                    if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
                    if (y.get(t)) return y.get(t);
                    const s = t.replace(/FromIndex$/, ""),
                        a = t !== s,
                        n = w.includes(s);
                    if (!(s in (a ? IDBIndex : IDBObjectStore).prototype) || !n && !m.includes(s)) return;
                    const r = async function(e, ...t) {
                        const r = this.transaction(e, n ? "readwrite" : "readonly");
                        let i = r.store;
                        return a && (i = i.index(t.shift())), (await Promise.all([i[s](...t), n && r.done]))[0]
                    };
                    return y.set(t, r), r
                }
                var R;
                R = d, d = { ...R,
                    get: (e, t, s) => _(e, t) || R.get(e, t, s),
                    has: (e, t) => !!_(e, t) || R.has(e, t)
                }, s(550);
                const v = "cache-entries",
                    b = e => {
                        const t = new URL(e, location.href);
                        return t.hash = "", t.href
                    };
                class x {
                    constructor(e) {
                        this._db = null, this._cacheName = e
                    }
                    _upgradeDb(e) {
                        const t = e.createObjectStore(v, {
                            keyPath: "id"
                        });
                        t.createIndex("cacheName", "cacheName", {
                            unique: !1
                        }), t.createIndex("timestamp", "timestamp", {
                            unique: !1
                        })
                    }
                    _upgradeDbAndDeleteOldDbs(e) {
                        this._upgradeDb(e), this._cacheName && function(e, {
                            blocked: t
                        } = {}) {
                            const s = indexedDB.deleteDatabase(e);
                            t && s.addEventListener("blocked", (() => t())), p(s).then((() => {}))
                        }(this._cacheName)
                    }
                    async setTimestamp(e, t) {
                        const s = {
                                url: e = b(e),
                                timestamp: t,
                                cacheName: this._cacheName,
                                id: this._getId(e)
                            },
                            a = (await this.getDb()).transaction(v, "readwrite", {
                                durability: "relaxed"
                            });
                        await a.store.put(s), await a.done
                    }
                    async getTimestamp(e) {
                        const t = await this.getDb(),
                            s = await t.get(v, this._getId(e));
                        return null == s ? void 0 : s.timestamp
                    }
                    async expireEntries(e, t) {
                        const s = await this.getDb();
                        let a = await s.transaction(v).store.index("timestamp").openCursor(null, "prev");
                        const n = [];
                        let r = 0;
                        for (; a;) {
                            const s = a.value;
                            s.cacheName === this._cacheName && (e && s.timestamp < e || t && r >= t ? n.push(a.value) : r++), a = await a.continue()
                        }
                        const i = [];
                        for (const e of n) await s.delete(v, e.id), i.push(e.url);
                        return i
                    }
                    _getId(e) {
                        return this._cacheName + "|" + b(e)
                    }
                    async getDb() {
                        return this._db || (this._db = await
                            function(e, t, {
                                blocked: s,
                                upgrade: a,
                                blocking: n,
                                terminated: r
                            } = {}) {
                                const i = indexedDB.open(e, t),
                                    c = p(i);
                                return a && i.addEventListener("upgradeneeded", (e => {
                                    a(p(i.result), e.oldVersion, e.newVersion, p(i.transaction))
                                })), s && i.addEventListener("blocked", (() => s())), c.then((e => {
                                    r && e.addEventListener("close", (() => r())), n && e.addEventListener("versionchange", (() => n()))
                                })).catch((() => {})), c
                            }("workbox-expiration", 1, {
                                upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
                            })), this._db
                    }
                }
                class C {
                    constructor(e, t = {}) {
                        this._isRunning = !1, this._rerunRequested = !1, this._maxEntries = t.maxEntries, this._maxAgeSeconds = t.maxAgeSeconds, this._matchOptions = t.matchOptions, this._cacheName = e, this._timestampModel = new x(e)
                    }
                    async expireEntries() {
                        if (this._isRunning) return void(this._rerunRequested = !0);
                        this._isRunning = !0;
                        const e = this._maxAgeSeconds ? Date.now() - 1e3 * this._maxAgeSeconds : 0,
                            t = await this._timestampModel.expireEntries(e, this._maxEntries),
                            s = await self.caches.open(this._cacheName);
                        for (const e of t) await s.delete(e, this._matchOptions);
                        this._isRunning = !1, this._rerunRequested && (this._rerunRequested = !1, (0, a.f)(this.expireEntries()))
                    }
                    async updateTimestamp(e) {
                        await this._timestampModel.setTimestamp(e, Date.now())
                    }
                    async isURLExpired(e) {
                        if (this._maxAgeSeconds) {
                            const t = await this._timestampModel.getTimestamp(e),
                                s = Date.now() - 1e3 * this._maxAgeSeconds;
                            return void 0 === t || t < s
                        }
                        return !1
                    }
                    async delete() {
                        this._rerunRequested = !1, await this._timestampModel.expireEntries(1 / 0)
                    }
                }
                var E = s(536),
                    k = (s(119), s(303));
                class N {
                    constructor(e = {}) {
                        this.cachedResponseWillBeUsed = async ({
                            event: e,
                            request: t,
                            cacheName: s,
                            cachedResponse: n
                        }) => {
                            if (!n) return null;
                            const r = this._isResponseDateFresh(n),
                                i = this._getCacheExpiration(s);
                            (0, a.f)(i.expireEntries());
                            const c = i.updateTimestamp(t.url);
                            if (e) try {
                                e.waitUntil(c)
                            } catch (e) {}
                            return r ? n : null
                        }, this.cacheDidUpdate = async ({
                            cacheName: e,
                            request: t
                        }) => {
                            const s = this._getCacheExpiration(e);
                            await s.updateTimestamp(t.url), await s.expireEntries()
                        }, this._config = e, this._maxAgeSeconds = e.maxAgeSeconds, this._cacheExpirations = new Map, e.purgeOnQuotaError && (0, k.t)((() => this.deleteCacheAndMetadata()))
                    }
                    _getCacheExpiration(e) {
                        if (e === E.x.getRuntimeName()) throw new n.V("expire-custom-caches-only");
                        let t = this._cacheExpirations.get(e);
                        return t || (t = new C(e, this._config), this._cacheExpirations.set(e, t)), t
                    }
                    _isResponseDateFresh(e) {
                        if (!this._maxAgeSeconds) return !0;
                        const t = this._getDateHeaderTimestamp(e);
                        return null === t || t >= Date.now() - 1e3 * this._maxAgeSeconds
                    }
                    _getDateHeaderTimestamp(e) {
                        if (!e.headers.has("date")) return null;
                        const t = e.headers.get("date"),
                            s = new Date(t).getTime();
                        return isNaN(s) ? null : s
                    }
                    async deleteCacheAndMetadata() {
                        for (const [e, t] of this._cacheExpirations) await self.caches.delete(e), await t.delete();
                        this._cacheExpirations = new Map
                    }
                }
            },
            522: (e, t, s) => {
                s.r(t), s.d(t, {
                    PrecacheController: () => d,
                    PrecacheFallbackPlugin: () => k,
                    PrecacheRoute: () => y,
                    PrecacheStrategy: () => u,
                    addPlugins: () => g,
                    addRoute: () => _,
                    cleanupOutdatedCaches: () => R,
                    createHandlerBoundToURL: () => v,
                    getCacheKeyForURL: () => b,
                    matchPrecache: () => x,
                    precache: () => C,
                    precacheAndRoute: () => E
                }), s(524);
                var a = s(536),
                    n = (s(120), s(125)),
                    r = s(392);

                function i(e) {
                    if (!e) throw new n.V("add-to-cache-list-unexpected-type", {
                        entry: e
                    });
                    if ("string" == typeof e) {
                        const t = new URL(e, location.href);
                        return {
                            cacheKey: t.href,
                            url: t.href
                        }
                    }
                    const {
                        revision: t,
                        url: s
                    } = e;
                    if (!s) throw new n.V("add-to-cache-list-unexpected-type", {
                        entry: e
                    });
                    if (!t) {
                        const e = new URL(s, location.href);
                        return {
                            cacheKey: e.href,
                            url: e.href
                        }
                    }
                    const a = new URL(s, location.href),
                        r = new URL(s, location.href);
                    return a.searchParams.set("__WB_REVISION__", t), {
                        cacheKey: a.href,
                        url: r.href
                    }
                }
                s(977);
                class c {
                    constructor() {
                        this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = async ({
                            request: e,
                            state: t
                        }) => {
                            t && (t.originalRequest = e)
                        }, this.cachedResponseWillBeUsed = async ({
                            event: e,
                            state: t,
                            cachedResponse: s
                        }) => {
                            if ("install" === e.type && t && t.originalRequest && t.originalRequest instanceof Request) {
                                const e = t.originalRequest.url;
                                s ? this.notUpdatedURLs.push(e) : this.updatedURLs.push(e)
                            }
                            return s
                        }
                    }
                }
                class o {
                    constructor({
                        precacheController: e
                    }) {
                        this.cacheKeyWillBeUsed = async ({
                            request: e,
                            params: t
                        }) => {
                            const s = (null == t ? void 0 : t.cacheKey) || this._precacheController.getCacheKeyForURL(e.url);
                            return s ? new Request(s, {
                                headers: e.headers
                            }) : e
                        }, this._precacheController = e
                    }
                }
                var h = s(194),
                    l = (s(119), s(951));
                class u extends l._ {
                    constructor(e = {}) {
                        e.cacheName = a.x.getPrecacheName(e.cacheName), super(e), this._fallbackToNetwork = !1 !== e.fallbackToNetwork, this.plugins.push(u.copyRedirectedCacheableResponsesPlugin)
                    }
                    async _handle(e, t) {
                        return await t.cacheMatch(e) || (t.event && "install" === t.event.type ? await this._handleInstall(e, t) : await this._handleFetch(e, t))
                    }
                    async _handleFetch(e, t) {
                        let s;
                        const a = t.params || {};
                        if (!this._fallbackToNetwork) throw new n.V("missing-precache-entry", {
                            cacheName: this.cacheName,
                            url: e.url
                        }); {
                            const n = a.integrity,
                                r = e.integrity,
                                i = !r || r === n;
                            s = await t.fetch(new Request(e, {
                                integrity: r || n
                            })), n && i && (this._useDefaultCacheabilityPluginIfNeeded(), await t.cachePut(e, s.clone()))
                        }
                        return s
                    }
                    async _handleInstall(e, t) {
                        this._useDefaultCacheabilityPluginIfNeeded();
                        const s = await t.fetch(e);
                        if (!await t.cachePut(e, s.clone())) throw new n.V("bad-precaching-response", {
                            url: e.url,
                            status: s.status
                        });
                        return s
                    }
                    _useDefaultCacheabilityPluginIfNeeded() {
                        let e = null,
                            t = 0;
                        for (const [s, a] of this.plugins.entries()) a !== u.copyRedirectedCacheableResponsesPlugin && (a === u.defaultPrecacheCacheabilityPlugin && (e = s), a.cacheWillUpdate && t++);
                        0 === t ? this.plugins.push(u.defaultPrecacheCacheabilityPlugin) : t > 1 && null !== e && this.plugins.splice(e, 1)
                    }
                }
                u.defaultPrecacheCacheabilityPlugin = {
                    cacheWillUpdate: async ({
                        response: e
                    }) => !e || e.status >= 400 ? null : e
                }, u.copyRedirectedCacheableResponsesPlugin = {
                    cacheWillUpdate: async ({
                        response: e
                    }) => e.redirected ? await (0, h.S)(e) : e
                };
                class d {
                    constructor({
                        cacheName: e,
                        plugins: t = [],
                        fallbackToNetwork: s = !0
                    } = {}) {
                        this._urlsToCacheKeys = new Map, this._urlsToCacheModes = new Map, this._cacheKeysToIntegrities = new Map, this._strategy = new u({
                            cacheName: a.x.getPrecacheName(e),
                            plugins: [...t, new o({
                                precacheController: this
                            })],
                            fallbackToNetwork: s
                        }), this.install = this.install.bind(this), this.activate = this.activate.bind(this)
                    }
                    get strategy() {
                        return this._strategy
                    }
                    precache(e) {
                        this.addToCacheList(e), this._installAndActiveListenersAdded || (self.addEventListener("install", this.install), self.addEventListener("activate", this.activate), this._installAndActiveListenersAdded = !0)
                    }
                    addToCacheList(e) {
                        const t = [];
                        for (const s of e) {
                            "string" == typeof s ? t.push(s) : s && void 0 === s.revision && t.push(s.url);
                            const {
                                cacheKey: e,
                                url: a
                            } = i(s), r = "string" != typeof s && s.revision ? "reload" : "default";
                            if (this._urlsToCacheKeys.has(a) && this._urlsToCacheKeys.get(a) !== e) throw new n.V("add-to-cache-list-conflicting-entries", {
                                firstEntry: this._urlsToCacheKeys.get(a),
                                secondEntry: e
                            });
                            if ("string" != typeof s && s.integrity) {
                                if (this._cacheKeysToIntegrities.has(e) && this._cacheKeysToIntegrities.get(e) !== s.integrity) throw new n.V("add-to-cache-list-conflicting-integrities", {
                                    url: a
                                });
                                this._cacheKeysToIntegrities.set(e, s.integrity)
                            }
                            if (this._urlsToCacheKeys.set(a, e), this._urlsToCacheModes.set(a, r), t.length > 0) {
                                const e = `Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
                                console.warn(e)
                            }
                        }
                    }
                    install(e) {
                        return (0, r.A)(e, (async () => {
                            const t = new c;
                            this.strategy.plugins.push(t);
                            for (const [t, s] of this._urlsToCacheKeys) {
                                const a = this._cacheKeysToIntegrities.get(s),
                                    n = this._urlsToCacheModes.get(t),
                                    r = new Request(t, {
                                        integrity: a,
                                        cache: n,
                                        credentials: "same-origin"
                                    });
                                await Promise.all(this.strategy.handleAll({
                                    params: {
                                        cacheKey: s
                                    },
                                    request: r,
                                    event: e
                                }))
                            }
                            const {
                                updatedURLs: s,
                                notUpdatedURLs: a
                            } = t;
                            return {
                                updatedURLs: s,
                                notUpdatedURLs: a
                            }
                        }))
                    }
                    activate(e) {
                        return (0, r.A)(e, (async () => {
                            const e = await self.caches.open(this.strategy.cacheName),
                                t = await e.keys(),
                                s = new Set(this._urlsToCacheKeys.values()),
                                a = [];
                            for (const n of t) s.has(n.url) || (await e.delete(n), a.push(n.url));
                            return {
                                deletedURLs: a
                            }
                        }))
                    }
                    getURLsToCacheKeys() {
                        return this._urlsToCacheKeys
                    }
                    getCachedURLs() {
                        return [...this._urlsToCacheKeys.keys()]
                    }
                    getCacheKeyForURL(e) {
                        const t = new URL(e, location.href);
                        return this._urlsToCacheKeys.get(t.href)
                    }
                    getIntegrityForCacheKey(e) {
                        return this._cacheKeysToIntegrities.get(e)
                    }
                    async matchPrecache(e) {
                        const t = e instanceof Request ? e.url : e,
                            s = this.getCacheKeyForURL(t);
                        if (s) return (await self.caches.open(this.strategy.cacheName)).match(s)
                    }
                    createHandlerBoundToURL(e) {
                        const t = this.getCacheKeyForURL(e);
                        if (!t) throw new n.V("non-precached-url", {
                            url: e
                        });
                        return s => (s.request = new Request(e), s.params = Object.assign({
                            cacheKey: t
                        }, s.params), this.strategy.handle(s))
                    }
                }
                let f;
                const p = () => (f || (f = new d), f);

                function g(e) {
                    p().strategy.plugins.push(...e)
                }
                var m = s(917),
                    w = s(188);
                class y extends w.A {
                    constructor(e, t) {
                        super((({
                            request: s
                        }) => {
                            const a = e.getURLsToCacheKeys();
                            for (const n of function*(e, {
                                    ignoreURLParametersMatching: t = [/^utm_/, /^fbclid$/],
                                    directoryIndex: s = "index.html",
                                    cleanURLs: a = !0,
                                    urlManipulation: n
                                } = {}) {
                                    const r = new URL(e, location.href);
                                    r.hash = "", yield r.href;
                                    const i = function(e, t = []) {
                                        for (const s of [...e.searchParams.keys()]) t.some((e => e.test(s))) && e.searchParams.delete(s);
                                        return e
                                    }(r, t);
                                    if (yield i.href, s && i.pathname.endsWith("/")) {
                                        const e = new URL(i.href);
                                        e.pathname += s, yield e.href
                                    }
                                    if (a) {
                                        const e = new URL(i.href);
                                        e.pathname += ".html", yield e.href
                                    }
                                    if (n) {
                                        const e = n({
                                            url: r
                                        });
                                        for (const t of e) yield t.href
                                    }
                                }(s.url, t)) {
                                const t = a.get(n);
                                if (t) return {
                                    cacheKey: t,
                                    integrity: e.getIntegrityForCacheKey(t)
                                }
                            }
                        }), e.strategy)
                    }
                }

                function _(e) {
                    const t = p(),
                        s = new y(t, e);
                    (0, m.X)(s)
                }

                function R() {
                    self.addEventListener("activate", (e => {
                        const t = a.x.getPrecacheName();
                        e.waitUntil((async (e, t = "-precache-") => {
                            const s = (await self.caches.keys()).filter((s => s.includes(t) && s.includes(self.registration.scope) && s !== e));
                            return await Promise.all(s.map((e => self.caches.delete(e)))), s
                        })(t).then((e => {})))
                    }))
                }

                function v(e) {
                    return p().createHandlerBoundToURL(e)
                }

                function b(e) {
                    return p().getCacheKeyForURL(e)
                }

                function x(e) {
                    return p().matchPrecache(e)
                }

                function C(e) {
                    p().precache(e)
                }

                function E(e, t) {
                    C(e), _(t)
                }
                class k {
                    constructor({
                        fallbackURL: e,
                        precacheController: t
                    }) {
                        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL), this._fallbackURL = e, this._precacheController = t || p()
                    }
                }
            },
            89: (e, t, s) => {
                s.r(t), s.d(t, {
                    NavigationRoute: () => n,
                    RegExpRoute: () => r.t,
                    Route: () => a.A,
                    Router: () => c.F,
                    registerRoute: () => i.X,
                    setCatchHandler: () => h,
                    setDefaultHandler: () => l
                }), s(524), s(120);
                var a = s(188);
                s(80);
                class n extends a.A {
                    constructor(e, {
                        allowlist: t = [/./],
                        denylist: s = []
                    } = {}) {
                        super((e => this._match(e)), e), this._allowlist = t, this._denylist = s
                    }
                    _match({
                        url: e,
                        request: t
                    }) {
                        if (t && "navigate" !== t.mode) return !1;
                        const s = e.pathname + e.search;
                        for (const e of this._denylist)
                            if (e.test(s)) return !1;
                        return !!this._allowlist.some((e => e.test(s)))
                    }
                }
                var r = s(989),
                    i = s(917),
                    c = s(491),
                    o = s(486);

                function h(e) {
                    (0, o.u)().setCatchHandler(e)
                }

                function l(e) {
                    (0, o.u)().setDefaultHandler(e)
                }
            },
            362: (e, t, s) => {
                s.r(t), s.d(t, {
                    CacheFirst: () => r,
                    CacheOnly: () => i,
                    NetworkFirst: () => o,
                    NetworkOnly: () => l,
                    StaleWhileRevalidate: () => u,
                    Strategy: () => n._,
                    StrategyHandler: () => d.G
                }), s(524), s(120);
                var a = s(125),
                    n = s(951);
                s(119), s(873);
                class r extends n._ {
                    async _handle(e, t) {
                        let s, n = await t.cacheMatch(e);
                        if (n);
                        else try {
                            n = await t.fetchAndCachePut(e)
                        } catch (e) {
                            e instanceof Error && (s = e)
                        }
                        if (!n) throw new a.V("no-response", {
                            url: e.url,
                            error: s
                        });
                        return n
                    }
                }
                class i extends n._ {
                    async _handle(e, t) {
                        const s = await t.cacheMatch(e);
                        if (!s) throw new a.V("no-response", {
                            url: e.url
                        });
                        return s
                    }
                }
                const c = {
                    cacheWillUpdate: async ({
                        response: e
                    }) => 200 === e.status || 0 === e.status ? e : null
                };
                class o extends n._ {
                    constructor(e = {}) {
                        super(e), this.plugins.some((e => "cacheWillUpdate" in e)) || this.plugins.unshift(c), this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0
                    }
                    async _handle(e, t) {
                        const s = [],
                            n = [];
                        let r;
                        if (this._networkTimeoutSeconds) {
                            const {
                                id: a,
                                promise: i
                            } = this._getTimeoutPromise({
                                request: e,
                                logs: s,
                                handler: t
                            });
                            r = a, n.push(i)
                        }
                        const i = this._getNetworkPromise({
                            timeoutId: r,
                            request: e,
                            logs: s,
                            handler: t
                        });
                        n.push(i);
                        const c = await t.waitUntil((async () => await t.waitUntil(Promise.race(n)) || await i)());
                        if (!c) throw new a.V("no-response", {
                            url: e.url
                        });
                        return c
                    }
                    _getTimeoutPromise({
                        request: e,
                        logs: t,
                        handler: s
                    }) {
                        let a;
                        return {
                            promise: new Promise((t => {
                                a = setTimeout((async () => {
                                    t(await s.cacheMatch(e))
                                }), 1e3 * this._networkTimeoutSeconds)
                            })),
                            id: a
                        }
                    }
                    async _getNetworkPromise({
                        timeoutId: e,
                        request: t,
                        logs: s,
                        handler: a
                    }) {
                        let n, r;
                        try {
                            r = await a.fetchAndCachePut(t)
                        } catch (e) {
                            e instanceof Error && (n = e)
                        }
                        return e && clearTimeout(e), !n && r || (r = await a.cacheMatch(t)), r
                    }
                }
                var h = s(902);
                class l extends n._ {
                    constructor(e = {}) {
                        super(e), this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0
                    }
                    async _handle(e, t) {
                        let s, n;
                        try {
                            const s = [t.fetch(e)];
                            if (this._networkTimeoutSeconds) {
                                const e = (0, h.V)(1e3 * this._networkTimeoutSeconds);
                                s.push(e)
                            }
                            if (n = await Promise.race(s), !n) throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)
                        } catch (e) {
                            e instanceof Error && (s = e)
                        }
                        if (!n) throw new a.V("no-response", {
                            url: e.url,
                            error: s
                        });
                        return n
                    }
                }
                class u extends n._ {
                    constructor(e = {}) {
                        super(e), this.plugins.some((e => "cacheWillUpdate" in e)) || this.plugins.unshift(c)
                    }
                    async _handle(e, t) {
                        const s = t.fetchAndCachePut(e).catch((() => {}));
                        let n, r = await t.cacheMatch(e);
                        if (r);
                        else try {
                            r = await s
                        } catch (e) {
                            e instanceof Error && (n = e)
                        }
                        if (!r) throw new a.V("no-response", {
                            url: e.url,
                            error: n
                        });
                        return r
                    }
                }
                var d = s(333)
            }
        },
        t = {};

    function s(a) {
        var n = t[a];
        if (void 0 !== n) return n.exports;
        var r = t[a] = {
            exports: {}
        };
        return e[a](r, r.exports, s), r.exports
    }
    s.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return s.d(t, {
            a: t
        }), t
    }, s.d = (e, t) => {
        for (var a in t) s.o(t, a) && !s.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
        })
    }, s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), s.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e = s(89),
            t = s(362),
            a = s(308),
            n = s(370),
            r = s(522),
            i = s(634);
        const c = JSON.parse('["kenyatranscription\\\\.com(?:/.*)?/ola/services/.*","kenyatranscription\\\\.com/ola/meetings/.*","/api/","https://api\\\\.ola\\\\.godaddy\\\\.com","https://fd72161e-2fb3-47cf-b59b-7f079153f2d4\\\\.onlinestore\\\\.godaddy\\\\.com","/t/1/tl/event","google-analytics\\\\.com/collect","calendar\\\\.apps\\\\.(dev-|test-)?secureserver\\\\.net"]').map((e => new RegExp(e))),
            o = JSON.parse('["kenyatranscription\\\\.com(?:/.*)?/f/.*","https://blog\\\\.apps\\\\.secureserver\\\\.net/v1/website/fd72161e-2fb3-47cf-b59b-7f079153f2d4/feed/post/","https://blog\\\\.apps\\\\.secureserver\\\\.net/v1/website/fd72161e-2fb3-47cf-b59b-7f079153f2d4/feed"]').map((e => new RegExp(e))),
            h = JSON.parse('["/activate-package-1","/login","/submit-work","/create-account","/my-task"]').map((e => ({
                url: e,
                revision: "1675052745479"
            })));
        self.addEventListener("activate", (function(e) {
            e.waitUntil(caches.keys().then((function(e) {
                return Promise.all(e.filter((e => e.startsWith("kenyatranscription.com-"))).map((e => caches.delete(e))))
            })))
        })), self.addEventListener("install", (() => {
            self.skipWaiting()
        })), (0, e.registerRoute)((({
            url: e
        }) => c.some((t => t.test(e.href)))), new t.NetworkOnly), (0, r.precache)(h, {
            directoryIndex: null,
            cleanUrls: !1
        }), (0, e.registerRoute)((({
            url: e
        }) => o.some((t => t.test(e.href)))), new t.NetworkFirst({
            cacheName: "network-first",
            plugins: [new a.CacheableResponsePlugin({
                statuses: [200]
            })]
        })), (0, e.registerRoute)((({
            request: e
        }) => "style" === e.destination || "script" === e.destination), new t.StaleWhileRevalidate({
            cacheName: "static-resources",
            plugins: [new a.CacheableResponsePlugin({
                statuses: [200]
            })]
        })), (0, e.registerRoute)((({
            url: e
        }) => "https://fonts.googleapis.com" === e.origin), new t.StaleWhileRevalidate({
            cacheName: "google-fonts-stylesheets"
        })), (0, e.registerRoute)((({
            url: e
        }) => "https://fonts.gstatic.com" === e.origin), new t.CacheFirst({
            cacheName: "google-fonts-webfonts",
            plugins: [new a.CacheableResponsePlugin({
                statuses: [0, 200]
            }), new n.ExpirationPlugin({
                maxAgeSeconds: 31536e3,
                maxEntries: 30
            })]
        })), (0, e.registerRoute)((({
            request: e
        }) => "image" === e.destination || "font" === e.destination), new t.CacheFirst({
            cacheName: "images-fonts",
            plugins: [new a.CacheableResponsePlugin({
                statuses: [200]
            }), new n.ExpirationPlugin({
                maxEntries: 100,
                maxAgeSeconds: 2592e3
            })]
        })), (0, i.clientsClaim)()
    })()
})();