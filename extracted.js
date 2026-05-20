function qA() {
    return x.jsxs("div", {
        className: "fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-bg-dark",
        children: [x.jsx("div", {
            className: "absolute inset-0 bg-noise opacity-20 mix-blend-overlay"
        }), x.jsx(Wt.div, {
            animate: {
                x: ["0%", "-100%"]
            },
            transition: {
                repeat: 1 / 0,
                duration: 60,
                ease: "linear"
            },
            className: "absolute inset-y-0 w-[200vw] left-0 pointer-events-none opacity-30 mix-blend-screen",
            style: {
                background: "radial-gradient(ellipse at center, rgba(122, 139, 139, 0.4) 0%, transparent 70%)",
                backgroundSize: "50% 100%",
                backgroundRepeat: "repeat-x"
            }
        }), x.jsx(Wt.div, {
            animate: {
                x: ["-100%", "0%"]
            },
            transition: {
                repeat: 1 / 0,
                duration: 80,
                ease: "linear"
            },
            className: "absolute inset-y-0 w-[200vw] left-0 pointer-events-none opacity-20 mix-blend-screen",
            style: {
                background: "radial-gradient(circle calc(50vw + 200px) at 50% 50%, rgba(10, 37, 43, 0.5) 0%, transparent 100%)",
                backgroundSize: "50% 100%",
                backgroundRepeat: "repeat-x"
            }
        }), x.jsx("div", {
            className: "absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-mist opacity-10 blur-[100px]"
        })]
    })
}

function P0(i) {
    var l, s, o = "";
    if (typeof i == "string" || typeof i == "number") o += i;
    else if (typeof i == "object")
        if (Array.isArray(i)) {
            var c = i.length;
            for (l = 0; l < c; l++) i[l] && (s = P0(i[l])) && (o && (o += " "), o += s)
        } else
            for (s in i) i[s] && (o && (o += " "), o += s);
    return o
}

function XA() {
    for (var i, l, s = 0, o = "", c = arguments.length; s < c; s++)(i = arguments[s]) && (l = P0(i)) && (o && (o += " "), o += l);
    return o
}
const ZA = (i, l) => {
        const s = new Array(i.length + l.length);
        for (let o = 0; o < i.length; o++) s[o] = i[o];
        for (let o = 0; o < l.length; o++) s[i.length + o] = l[o];
        return s
    },
    QA = (i, l) => ({
        classGroupId: i,
        validator: l
    }),
    W0 = (i = new Map, l = null, s) => ({
        nextPart: i,
        validators: l,
        classGroupId: s
    }),
    Do = "-",
    ty = [],
    KA = "arbitrary..",
    JA = i => {
        const l = PA(i),
            {
                conflictingClassGroups: s,
                conflictingClassGroupModifiers: o
            } = i;
        return {
            getClassGroupId: f => {
                if (f.startsWith("[") && f.endsWith("]")) return FA(f);
                const m = f.split(Do),
                    g = m[0] === "" && m.length > 1 ? 1 : 0;
                return $0(m, g, l)
            },
            getConflictingClassGroupIds: (f, m) => {
                if (m) {
                    const g = o[f],
                        p = s[f];
                    return g ? p ? ZA(p, g) : g : p || ty
                }
                return s[f] || ty
            }
        }
    },
    $0 = (i, l, s) => {
        if (i.length - l === 0) return s.classGroupId;
        const c = i[l],
            d = s.nextPart.get(c);
        if (d) {
            const p = $0(i, l + 1, d);
            if (p) return p
        }
        const f = s.validators;
        if (f === null) return;
        const m = l === 0 ? i.join(Do) : i.slice(l).join(Do),
            g = f.length;
        for (let p = 0; p < g; p++) {
            const v = f[p];
            if (v.validator(m)) return v.classGroupId
        }
    },
    FA = i => i.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
        const l = i.slice(1, -1),
            s = l.indexOf(":"),
            o = l.slice(0, s);
        return o ? KA + o : void 0
    })(),
    PA = i => {
        const {
            theme: l,
            classGroups: s
        } = i;
        return WA(s, l)
    },
    WA = (i, l) => {
        const s = W0();
        for (const o in i) {
            const c = i[o];
            wf(c, s, o, l)
        }
        return s
    },
    wf = (i, l, s, o) => {
        const c = i.length;
        for (let d = 0; d < c; d++) {
            const f = i[d];
            $A(f, l, s, o)
        }
    },
    $A = (i, l, s, o) => {
        if (typeof i == "string") {
            IA(i, l, s);
            return
        }
        if (typeof i == "function") {
            tE(i, l, s, o);
            return
        }
        eE(i, l, s, o)
    },
    IA = (i, l, s) => {
        const o = i === "" ? l : I0(l, i);
        o.classGroupId = s
    },
    tE = (i, l, s, o) => {
        if (nE(i)) {
            wf(i(o), l, s, o);
            return
        }
        l.validators === null && (l.validators = []), l.validators.push(QA(s, i))
    },
    eE = (i, l, s, o) => {
        const c = Object.entries(i),
            d = c.length;
        for (let f = 0; f < d; f++) {
            const [m, g] = c[f];
            wf(g, I0(l, m), s, o)
        }
    },
    I0 = (i, l) => {
        let s = i;
        const o = l.split(Do),
            c = o.length;
        for (let d = 0; d < c; d++) {
            const f = o[d];
            let m = s.nextPart.get(f);
            m || (m = W0(), s.nextPart.set(f, m)), s = m
        }
        return s
    },
    nE = i => "isThemeGetter" in i && i.isThemeGetter === !0,
    iE = i => {
        if (i < 1) return {
            get: () => {},
            set: () => {}
        };
        let l = 0,
            s = Object.create(null),
            o = Object.create(null);
        const c = (d, f) => {
            s[d] = f, l++, l > i && (l = 0, o = s, s = Object.create(null))
        };
        return {
            get(d) {
                let f = s[d];
                if (f !== void 0) return f;
                if ((f = o[d]) !== void 0) return c(d, f), f
            },
            set(d, f) {
                d in s ? s[d] = f : c(d, f)
            }
        }
    },
    Jc = "!",
    ey = ":",
    aE = [],
    ny = (i, l, s, o, c) => ({
        modifiers: i,
        hasImportantModifier: l,
        baseClassName: s,
        maybePostfixModifierPosition: o,
        isExternal: c
    }),
    lE = i => {
        const {
            prefix: l,
            experimentalParseClassName: s
        } = i;
        let o = c => {
            const d = [];
            let f = 0,
                m = 0,
                g = 0,
                p;
            const v = c.length;
            for (let _ = 0; _ < v; _++) {
                const B = c[_];
                if (f === 0 && m === 0) {
                    if (B === ey) {
                        d.push(c.slice(g, _)), g = _ + 1;
                        continue
                    }
                    if (B === "/") {
                        p = _;
                        continue
                    }
                }
                B === "[" ? f++ : B === "]" ? f-- : B === "(" ? m++ : B === ")" && m--
            }
            const b = d.length === 0 ? c : c.slice(g);
            let T = b,
                M = !1;
            b.endsWith(Jc) ? (T = b.slice(0, -1), M = !0) : b.startsWith(Jc) && (T = b.slice(1), M = !0);
            const N = p && p > g ? p - g : void 0;
            return ny(d, M, T, N)
        };
        if (l) {
            const c = l + ey,
                d = o;
            o = f => f.startsWith(c) ? d(f.slice(c.length)) : ny(aE, !1, f, void 0, !0)
        }
        if (s) {
            const c = o;
            o = d => s({
                className: d,
                parseClassName: c
            })
        }
        return o
    },
    sE = i => {
        const l = new Map;
        return i.orderSensitiveModifiers.forEach((s, o) => {
            l.set(s, 1e6 + o)
        }), s => {
            const o = [];
            let c = [];
            for (let d = 0; d < s.length; d++) {
                const f = s[d],
                    m = f[0] === "[",
                    g = l.has(f);
                m || g ? (c.length > 0 && (c.sort(), o.push(...c), c = []), o.push(f)) : c.push(f)
            }
            return c.length > 0 && (c.sort(), o.push(...c)), o
        }
    },
    oE = i => ({
        cache: iE(i.cacheSize),
        parseClassName: lE(i),
        sortModifiers: sE(i),
        postfixLookupClassGroupIds: rE(i),
        ...JA(i)
    }),
    rE = i => {
        const l = Object.create(null),
            s = i.postfixLookupClassGroups;
        if (s)
            for (let o = 0; o < s.length; o++) l[s[o]] = !0;
        return l
    },
    uE = /\s+/,
    cE = (i, l) => {
        const {
            parseClassName: s,
            getClassGroupId: o,
            getConflictingClassGroupIds: c,
            sortModifiers: d,
            postfixLookupClassGroupIds: f
        } = l, m = [], g = i.trim().split(uE);
        let p = "";
        for (let v = g.length - 1; v >= 0; v -= 1) {
            const b = g[v],
                {
                    isExternal: T,
                    modifiers: M,
                    hasImportantModifier: N,
                    baseClassName: _,
                    maybePostfixModifierPosition: B
                } = s(b);
            if (T) {
                p = b + (p.length > 0 ? " " + p : p);
                continue
            }
            let H = !!B,
                Y;
            if (H) {
                const J = _.substring(0, B);
                Y = o(J);
                const V = Y && f[Y] ? o(_) : void 0;
                V && V !== Y && (Y = V, H = !1)
            } else Y = o(_);
            if (!Y) {
                if (!H) {
                    p = b + (p.length > 0 ? " " + p : p);
                    continue
                }
                if (Y = o(_), !Y) {
                    p = b + (p.length > 0 ? " " + p : p);
                    continue
                }
                H = !1
            }
            const G = M.length === 0 ? "" : M.length === 1 ? M[0] : d(M).join(":"),
                X = N ? G + Jc : G,
                P = X + Y;
            if (m.indexOf(P) > -1) continue;
            m.push(P);
            const ut = c(Y, H);
            for (let J = 0; J < ut.length; ++J) {
                const V = ut[J];
                m.push(X + V)
            }
            p = b + (p.length > 0 ? " " + p : p)
        }
        return p
    },
    fE = (...i) => {
        let l = 0,
            s, o, c = "";
        for (; l < i.length;)(s = i[l++]) && (o = tv(s)) && (c && (c += " "), c += o);
        return c
    },
    tv = i => {
        if (typeof i == "string") return i;
        let l, s = "";
        for (let o = 0; o < i.length; o++) i[o] && (l = tv(i[o])) && (s && (s += " "), s += l);
        return s
    },
    dE = (i, ...l) => {
        let s, o, c, d;
        const f = g => {
                const p = l.reduce((v, b) => b(v), i());
                return s = oE(p), o = s.cache.get, c = s.cache.set, d = m, m(g)
            },
            m = g => {
                const p = o(g);
                if (p) return p;
                const v = cE(g, s);
                return c(g, v), v
            };
        return d = f, (...g) => d(fE(...g))
    },
    hE = [],
    It = i => {
        const l = s => s[i] || hE;
        return l.isThemeGetter = !0, l
    },
    ev = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    nv = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    mE = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
    pE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    gE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    yE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    vE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    bE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    ni = i => mE.test(i),
    pt = i => !!i && !Number.isNaN(Number(i)),
    an = i => !!i && Number.isInteger(Number(i)),
    Sc = i => i.endsWith("%") && pt(i.slice(0, -1)),
    zn = i => pE.test(i),
    iv = () => !0,
    xE = i => gE.test(i) && !yE.test(i),
    Cf = () => !1,
    SE = i => vE.test(i),
    TE = i => bE.test(i),
    AE = i => !W(i) && !I(i),
    EE = i => i.startsWith("@container") && (i[10] === "/" && i[11] !== void 0 || i[11] === "s" && i[16] !== void 0 && i.startsWith("-size/", 10) || i[11] === "n" && i[18] !== void 0 && i.startsWith("-normal/", 10)),
    ME = i => ui(i, sv, Cf),
    W = i => ev.test(i),
    ji = i => ui(i, ov, xE),
    iy = i => ui(i, OE, pt),
    wE = i => ui(i, uv, iv),
    CE = i => ui(i, rv, Cf),
    ay = i => ui(i, av, Cf),
    zE = i => ui(i, lv, TE),
    uo = i => ui(i, cv, SE),
    I = i => nv.test(i),
    wl = i => Ui(i, ov),
    DE = i => Ui(i, rv),
    ly = i => Ui(i, av),
    jE = i => Ui(i, sv),
    NE = i => Ui(i, lv),
    co = i => Ui(i, cv, !0),
    RE = i => Ui(i, uv, !0),
    ui = (i, l, s) => {
        const o = ev.exec(i);
        return o ? o[1] ? l(o[1]) : s(o[2]) : !1
    },
    Ui = (i, l, s = !1) => {
        const o = nv.exec(i);
        return o ? o[1] ? l(o[1]) : s : !1
    },
    av = i => i === "position" || i === "percentage",
    lv = i => i === "image" || i === "url",
    sv = i => i === "length" || i === "size" || i === "bg-size",
    ov = i => i === "length",
    OE = i => i === "number",
    rv = i => i === "family-name",
    uv = i => i === "number" || i === "weight",
    cv = i => i === "shadow",
    VE = () => {
        const i = It("color"),
            l = It("font"),
            s = It("text"),
            o = It("font-weight"),
            c = It("tracking"),
            d = It("leading"),
            f = It("breakpoint"),
            m = It("container"),
            g = It("spacing"),
            p = It("radius"),
            v = It("shadow"),
            b = It("inset-shadow"),
            T = It("text-shadow"),
            M = It("drop-shadow"),
            N = It("blur"),
            _ = It("perspective"),
            B = It("aspect"),
            H = It("ease"),
            Y = It("animate"),
            G = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            X = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
            P = () => [...X(), I, W],
            ut = () => ["auto", "hidden", "clip", "visible", "scroll"],
            J = () => ["auto", "contain", "none"],
            V = () => [I, W, g],
            nt = () => [ni, "full", "auto", ...V()],
            at = () => [an, "none", "subgrid", I, W],
            gt = () => ["auto", {
                span: ["full", an, I, W]
            }, an, I, W],
            yt = () => [an, "auto", I, W],
            Zt = () => ["auto", "min", "max", "fr", I, W],
            Lt = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
            Dt = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
            j = () => ["auto", ...V()],
            Z = () => [ni, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...V()],
            F = () => [ni, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...V()],
            ct = () => [ni, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...V()],
            q = () => [i, I, W],
            A = () => [...X(), ly, ay, {
                position: [I, W]
            }],
            L = () => ["no-repeat", {
                repeat: ["", "x", "y", "space", "round"]
            }],
            K = () => ["auto", "cover", "contain", jE, ME, {
                size: [I, W]
            }],
            $ = () => [Sc, wl, ji],
            lt = () => ["", "none", "full", p, I, W],
            ot = () => ["", pt, wl, ji],
            Tt = () => ["solid", "dashed", "dotted", "double"],
            ee = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            mt = () => [pt, Sc, ly, ay],
            Dn = () => ["", "none", N, I, W],
            un = () => ["none", pt, I, W],
            jn = () => ["none", pt, I, W],
            Bi = () => [pt, I, W],
            Oe = () => [ni, "full", ...V()];
        return {
            cacheSize: 500,
            theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [zn],
                breakpoint: [zn],
                color: [iv],
                container: [zn],
                "drop-shadow": [zn],
                ease: ["in", "out", "in-out"],
                font: [AE],
                "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                "inset-shadow": [zn],
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                radius: [zn],
                shadow: [zn],
                spacing: ["px", pt],
                text: [zn],
                "text-shadow": [zn],
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", ni, W, I, B]
                }],
                container: ["container"],
                "container-type": [{
                    "@container": ["", "normal", "size", I, W]
                }],
                "container-named": [EE],
                columns: [{
                    columns: [pt, W, I, m]
                }],
                "break-after": [{
                    "break-after": G()
                }],
                "break-before": [{
                    "break-before": G()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                sr: ["sr-only", "not-sr-only"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: P()
                }],
                overflow: [{
                    overflow: ut()
                }],
                "overflow-x": [{
                    "overflow-x": ut()
                }],
                "overflow-y": [{
                    "overflow-y": ut()
                }],
                overscroll: [{
                    overscroll: J()
                }],
                "overscroll-x": [{
                    "overscroll-x": J()
                }],
                "overscroll-y": [{
                    "overscroll-y": J()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: nt()
                }],
                "inset-x": [{
                    "inset-x": nt()
                }],
                "inset-y": [{
                    "inset-y": nt()
                }],
                start: [{
                    "inset-s": nt(),
                    start: nt()
                }],
                end: [{
                    "inset-e": nt(),
                    end: nt()
                }],
                "inset-bs": [{
                    "inset-bs": nt()
                }],
                "inset-be": [{
                    "inset-be": nt()
                }],
                top: [{
                    top: nt()
                }],
                right: [{
                    right: nt()
                }],
                bottom: [{
                    bottom: nt()
                }],
                left: [{
                    left: nt()
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: [an, "auto", I, W]
                }],
                basis: [{
                    basis: [ni, "full", "auto", m, ...V()]
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["nowrap", "wrap", "wrap-reverse"]
                }],
                flex: [{
                    flex: [pt, ni, "auto", "initial", "none", W]
                }],
                grow: [{
                    grow: ["", pt, I, W]
                }],
                shrink: [{
                    shrink: ["", pt, I, W]
                }],
                order: [{
                    order: [an, "first", "last", "none", I, W]
                }],
                "grid-cols": [{
                    "grid-cols": at()
                }],
                "col-start-end": [{
                    col: gt()
                }],
                "col-start": [{
                    "col-start": yt()
                }],
                "col-end": [{
                    "col-end": yt()
                }],
                "grid-rows": [{
                    "grid-rows": at()
                }],
                "row-start-end": [{
                    row: gt()
                }],
                "row-start": [{
                    "row-start": yt()
                }],
                "row-end": [{
                    "row-end": yt()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": Zt()
                }],
                "auto-rows": [{
                    "auto-rows": Zt()
                }],
                gap: [{
                    gap: V()
                }],
                "gap-x": [{
                    "gap-x": V()
                }],
                "gap-y": [{
                    "gap-y": V()
                }],
                "justify-content": [{
                    justify: [...Lt(), "normal"]
                }],
                "justify-items": [{
                    "justify-items": [...Dt(), "normal"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", ...Dt()]
                }],
                "align-content": [{
                    content: ["normal", ...Lt()]
                }],
                "align-items": [{
                    items: [...Dt(), {
                        baseline: ["", "last"]
                    }]
                }],
                "align-self": [{
                    self: ["auto", ...Dt(), {
                        baseline: ["", "last"]
                    }]
                }],
                "place-content": [{
                    "place-content": Lt()
                }],
                "place-items": [{
                    "place-items": [...Dt(), "baseline"]
                }],
                "place-self": [{
                    "place-self": ["auto", ...Dt()]
                }],
                p: [{
                    p: V()
                }],
                px: [{
                    px: V()
                }],
                py: [{
                    py: V()
                }],
                ps: [{
                    ps: V()
                }],
                pe: [{
                    pe: V()
                }],
                pbs: [{
                    pbs: V()
                }],
                pbe: [{
                    pbe: V()
                }],
                pt: [{
                    pt: V()
                }],
                pr: [{
                    pr: V()
                }],
                pb: [{
                    pb: V()
                }],
                pl: [{
                    pl: V()
                }],
                m: [{
                    m: j()
                }],
                mx: [{
                    mx: j()
                }],
                my: [{
                    my: j()
                }],
                ms: [{
                    ms: j()
                }],
                me: [{
                    me: j()
                }],
                mbs: [{
                    mbs: j()
                }],
                mbe: [{
                    mbe: j()
                }],
                mt: [{
                    mt: j()
                }],
                mr: [{
                    mr: j()
                }],
                mb: [{
                    mb: j()
                }],
                ml: [{
                    ml: j()
                }],
                "space-x": [{
                    "space-x": V()
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": V()
                }],
                "space-y-reverse": ["space-y-reverse"],
                size: [{
                    size: Z()
                }],
                "inline-size": [{
                    inline: ["auto", ...F()]
                }],
                "min-inline-size": [{
                    "min-inline": ["auto", ...F()]
                }],
                "max-inline-size": [{
                    "max-inline": ["none", ...F()]
                }],
                "block-size": [{
                    block: ["auto", ...ct()]
                }],
                "min-block-size": [{
                    "min-block": ["auto", ...ct()]
                }],
                "max-block-size": [{
                    "max-block": ["none", ...ct()]
                }],
                w: [{
                    w: [m, "screen", ...Z()]
                }],
                "min-w": [{
                    "min-w": [m, "screen", "none", ...Z()]
                }],
                "max-w": [{
                    "max-w": [m, "screen", "none", "prose", {
                        screen: [f]
                    }, ...Z()]
                }],
                h: [{
                    h: ["screen", "lh", ...Z()]
                }],
                "min-h": [{
                    "min-h": ["screen", "lh", "none", ...Z()]
                }],
                "max-h": [{
                    "max-h": ["screen", "lh", ...Z()]
                }],
                "font-size": [{
                    text: ["base", s, wl, ji]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: [o, RE, wE]
                }],
                "font-stretch": [{
                    "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Sc, W]
                }],
                "font-family": [{
                    font: [DE, CE, l]
                }],
                "font-features": [{
                    "font-features": [W]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: [c, I, W]
                }],
                "line-clamp": [{
                    "line-clamp": [pt, "none", I, iy]
                }],
                leading: [{
                    leading: [d, ...V()]
                }],
                "list-image": [{
                    "list-image": ["none", I, W]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "list-style-type": [{
                    list: ["disc", "decimal", "none", I, W]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "placeholder-color": [{
                    placeholder: q()
                }],
                "text-color": [{
                    text: q()
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...Tt(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: [pt, "from-font", "auto", I, ji]
                }],
                "text-decoration-color": [{
                    decoration: q()
                }],
                "underline-offset": [{
                    "underline-offset": [pt, "auto", I, W]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: V()
                }],
                "tab-size": [{
                    tab: [an, I, W]
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", I, W]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                wrap: [{
                    wrap: ["break-word", "anywhere", "normal"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", I, W]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: A()
                }],
                "bg-repeat": [{
                    bg: L()
                }],
                "bg-size": [{
                    bg: K()
                }],
                "bg-image": [{
                    bg: ["none", {
                        linear: [{
                            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, an, I, W],
                        radial: ["", I, W],
                        conic: [an, I, W]
                    }, NE, zE]
                }],
                "bg-color": [{
                    bg: q()
                }],
                "gradient-from-pos": [{
                    from: $()
                }],
                "gradient-via-pos": [{
                    via: $()
                }],
                "gradient-to-pos": [{
                    to: $()
                }],
                "gradient-from": [{
                    from: q()
                }],
                "gradient-via": [{
                    via: q()
                }],
                "gradient-to": [{
                    to: q()
                }],
                rounded: [{
                    rounded: lt()
                }],
                "rounded-s": [{
                    "rounded-s": lt()
                }],
                "rounded-e": [{
                    "rounded-e": lt()
                }],
                "rounded-t": [{
                    "rounded-t": lt()
                }],
                "rounded-r": [{
                    "rounded-r": lt()
                }],
                "rounded-b": [{
                    "rounded-b": lt()
                }],
                "rounded-l": [{
                    "rounded-l": lt()
                }],
                "rounded-ss": [{
                    "rounded-ss": lt()
                }],
                "rounded-se": [{
                    "rounded-se": lt()
                }],
                "rounded-ee": [{
                    "rounded-ee": lt()
                }],
                "rounded-es": [{
                    "rounded-es": lt()
                }],
                "rounded-tl": [{
                    "rounded-tl": lt()
                }],
                "rounded-tr": [{
                    "rounded-tr": lt()
                }],
                "rounded-br": [{
                    "rounded-br": lt()
                }],
                "rounded-bl": [{
                    "rounded-bl": lt()
                }],
                "border-w": [{
                    border: ot()
                }],
                "border-w-x": [{
                    "border-x": ot()
                }],
                "border-w-y": [{
                    "border-y": ot()
                }],
                "border-w-s": [{
                    "border-s": ot()
                }],
                "border-w-e": [{
                    "border-e": ot()
                }],
                "border-w-bs": [{
                    "border-bs": ot()
                }],
                "border-w-be": [{
                    "border-be": ot()
                }],
                "border-w-t": [{
                    "border-t": ot()
                }],
                "border-w-r": [{
                    "border-r": ot()
                }],
                "border-w-b": [{
                    "border-b": ot()
                }],
                "border-w-l": [{
                    "border-l": ot()
                }],
                "divide-x": [{
                    "divide-x": ot()
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": ot()
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [{
                    border: [...Tt(), "hidden", "none"]
                }],
                "divide-style": [{
                    divide: [...Tt(), "hidden", "none"]
                }],
                "border-color": [{
                    border: q()
                }],
                "border-color-x": [{
                    "border-x": q()
                }],
                "border-color-y": [{
                    "border-y": q()
                }],
                "border-color-s": [{
                    "border-s": q()
                }],
                "border-color-e": [{
                    "border-e": q()
                }],
                "border-color-bs": [{
                    "border-bs": q()
                }],
                "border-color-be": [{
                    "border-be": q()
                }],
                "border-color-t": [{
                    "border-t": q()
                }],
                "border-color-r": [{
                    "border-r": q()
                }],
                "border-color-b": [{
                    "border-b": q()
                }],
                "border-color-l": [{
                    "border-l": q()
                }],
                "divide-color": [{
                    divide: q()
                }],
                "outline-style": [{
                    outline: [...Tt(), "none", "hidden"]
                }],
                "outline-offset": [{
                    "outline-offset": [pt, I, W]
                }],
                "outline-w": [{
                    outline: ["", pt, wl, ji]
                }],
                "outline-color": [{
                    outline: q()
                }],
                shadow: [{
                    shadow: ["", "none", v, co, uo]
                }],
                "shadow-color": [{
                    shadow: q()
                }],
                "inset-shadow": [{
                    "inset-shadow": ["none", b, co, uo]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": q()
                }],
                "ring-w": [{
                    ring: ot()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: q()
                }],
                "ring-offset-w": [{
                    "ring-offset": [pt, ji]
                }],
                "ring-offset-color": [{
                    "ring-offset": q()
                }],
                "inset-ring-w": [{
                    "inset-ring": ot()
                }],
                "inset-ring-color": [{
                    "inset-ring": q()
                }],
                "text-shadow": [{
                    "text-shadow": ["none", T, co, uo]
                }],
                "text-shadow-color": [{
                    "text-shadow": q()
                }],
                opacity: [{
                    opacity: [pt, I, W]
                }],
                "mix-blend": [{
                    "mix-blend": [...ee(), "plus-darker", "plus-lighter"]
                }],
                "bg-blend": [{
                    "bg-blend": ee()
                }],
                "mask-clip": [{
                    "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                }, "mask-no-clip"],
                "mask-composite": [{
                    mask: ["add", "subtract", "intersect", "exclude"]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [pt]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": mt()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": mt()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": q()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": q()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": mt()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": mt()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": q()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": q()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": mt()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": mt()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": q()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": q()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": mt()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": mt()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": q()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": q()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": mt()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": mt()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": q()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": q()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": mt()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": mt()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": q()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": q()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": mt()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": mt()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": q()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": q()
                }],
                "mask-image-radial": [{
                    "mask-radial": [I, W]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": mt()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": mt()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": q()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": q()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": ["circle", "ellipse"]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: ["side", "corner"],
                        farthest: ["side", "corner"]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": X()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [pt]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": mt()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": mt()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": q()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": q()
                }],
                "mask-mode": [{
                    mask: ["alpha", "luminance", "match"]
                }],
                "mask-origin": [{
                    "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                }],
                "mask-position": [{
                    mask: A()
                }],
                "mask-repeat": [{
                    mask: L()
                }],
                "mask-size": [{
                    mask: K()
                }],
                "mask-type": [{
                    "mask-type": ["alpha", "luminance"]
                }],
                "mask-image": [{
                    mask: ["none", I, W]
                }],
                filter: [{
                    filter: ["", "none", I, W]
                }],
                blur: [{
                    blur: Dn()
                }],
                brightness: [{
                    brightness: [pt, I, W]
                }],
                contrast: [{
                    contrast: [pt, I, W]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", M, co, uo]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": q()
                }],
                grayscale: [{
                    grayscale: ["", pt, I, W]
                }],
                "hue-rotate": [{
                    "hue-rotate": [pt, I, W]
                }],
                invert: [{
                    invert: ["", pt, I, W]
                }],
                saturate: [{
                    saturate: [pt, I, W]
                }],
                sepia: [{
                    sepia: ["", pt, I, W]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none", I, W]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": Dn()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [pt, I, W]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [pt, I, W]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": ["", pt, I, W]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [pt, I, W]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": ["", pt, I, W]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [pt, I, W]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [pt, I, W]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": ["", pt, I, W]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": V()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": V()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": V()
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", I, W]
                }],
                "transition-behavior": [{
                    transition: ["normal", "discrete"]
                }],
                duration: [{
                    duration: [pt, "initial", I, W]
                }],
                ease: [{
                    ease: ["linear", "initial", H, I, W]
                }],
                delay: [{
                    delay: [pt, I, W]
                }],
                animate: [{
                    animate: ["none", Y, I, W]
                }],
                backface: [{
                    backface: ["hidden", "visible"]
                }],
                perspective: [{
                    perspective: [_, I, W]
                }],
                "perspective-origin": [{
                    "perspective-origin": P()
                }],
                rotate: [{
                    rotate: un()
                }],
                "rotate-x": [{
                    "rotate-x": un()
                }],
                "rotate-y": [{
                    "rotate-y": un()
                }],
                "rotate-z": [{
                    "rotate-z": un()
                }],
                scale: [{
                    scale: jn()
                }],
                "scale-x": [{
                    "scale-x": jn()
                }],
                "scale-y": [{
                    "scale-y": jn()
                }],
                "scale-z": [{
                    "scale-z": jn()
                }],
                "scale-3d": ["scale-3d"],
                skew: [{
                    skew: Bi()
                }],
                "skew-x": [{
                    "skew-x": Bi()
                }],
                "skew-y": [{
                    "skew-y": Bi()
                }],
                transform: [{
                    transform: [I, W, "", "none", "gpu", "cpu"]
                }],
                "transform-origin": [{
                    origin: P()
                }],
                "transform-style": [{
                    transform: ["3d", "flat"]
                }],
                translate: [{
                    translate: Oe()
                }],
                "translate-x": [{
                    "translate-x": Oe()
                }],
                "translate-y": [{
                    "translate-y": Oe()
                }],
                "translate-z": [{
                    "translate-z": Oe()
                }],
                "translate-none": ["translate-none"],
                zoom: [{
                    zoom: [an, I, W]
                }],
                accent: [{
                    accent: q()
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                "caret-color": [{
                    caret: q()
                }],
                "color-scheme": [{
                    scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", I, W]
                }],
                "field-sizing": [{
                    "field-sizing": ["fixed", "content"]
                }],
                "pointer-events": [{
                    "pointer-events": ["auto", "none"]
                }],
                resize: [{
                    resize: ["none", "", "y", "x"]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scrollbar-thumb-color": [{
                    "scrollbar-thumb": q()
                }],
                "scrollbar-track-color": [{
                    "scrollbar-track": q()
                }],
                "scrollbar-gutter": [{
                    "scrollbar-gutter": ["auto", "stable", "both"]
                }],
                "scrollbar-w": [{
                    scrollbar: ["auto", "thin", "none"]
                }],
                "scroll-m": [{
                    "scroll-m": V()
                }],
                "scroll-mx": [{
                    "scroll-mx": V()
                }],
                "scroll-my": [{
                    "scroll-my": V()
                }],
                "scroll-ms": [{
                    "scroll-ms": V()
                }],
                "scroll-me": [{
                    "scroll-me": V()
                }],
                "scroll-mbs": [{
                    "scroll-mbs": V()
                }],
                "scroll-mbe": [{
                    "scroll-mbe": V()
                }],
                "scroll-mt": [{
                    "scroll-mt": V()
                }],
                "scroll-mr": [{
                    "scroll-mr": V()
                }],
                "scroll-mb": [{
                    "scroll-mb": V()
                }],
                "scroll-ml": [{
                    "scroll-ml": V()
                }],
                "scroll-p": [{
                    "scroll-p": V()
                }],
                "scroll-px": [{
                    "scroll-px": V()
                }],
                "scroll-py": [{
                    "scroll-py": V()
                }],
                "scroll-ps": [{
                    "scroll-ps": V()
                }],
                "scroll-pe": [{
                    "scroll-pe": V()
                }],
                "scroll-pbs": [{
                    "scroll-pbs": V()
                }],
                "scroll-pbe": [{
                    "scroll-pbe": V()
                }],
                "scroll-pt": [{
                    "scroll-pt": V()
                }],
                "scroll-pr": [{
                    "scroll-pr": V()
                }],
                "scroll-pb": [{
                    "scroll-pb": V()
                }],
                "scroll-pl": [{
                    "scroll-pl": V()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", I, W]
                }],
                fill: [{
                    fill: ["none", ...q()]
                }],
                "stroke-w": [{
                    stroke: [pt, wl, ji, iy]
                }],
                stroke: [{
                    stroke: ["none", ...q()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                "container-named": ["container-type"],
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                translate: ["translate-x", "translate-y", "translate-none"],
                "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            },
            postfixLookupClassGroups: ["container-type"],
            orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
        }
    },
    _E = dE(VE);

function Qe(...i) {
    return _E(XA(i))
}

function UE() {
    const i = l => {
        var s;
        (s = document.getElementById(l)) == null || s.scrollIntoView({
            behavior: "smooth"
        })
    };
    return x.jsxs("section", {
        id: "hero",
        className: "relative min-h-[100svh] flex flex-col justify-center items-center py-20 px-6 sm:px-12 object-contain overflow-hidden",
        children: [x.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-b from-bg-dark/40 via-bg-dark/80 to-bg-dark z-0"
        }), x.jsxs("div", {
            className: "relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8",
            children: [x.jsxs(Wt.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 1
                },
                children: [x.jsx("span", {
                    className: "text-talisman tracking-[0.3em] text-sm md:text-base font-medium",
                    children: "낯병의 저주에 걸린 숨겨진 마을"
                }), x.jsx("h1", {
                    className: "mt-4 text-5xl md:text-7xl lg:text-8xl font-title text-lantern leading-tight drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]",
                    children: "은면리"
                })]
            }), x.jsxs(Wt.p, {
                className: "text-lg md:text-2xl font-body text-ghost/90 font-light tracking-wide max-w-2xl",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 1,
                    delay: .5
                },
                children: ["흑사포를 벗기는 것이 고백이고,", x.jsx("br", {}), " 이름을 기억하는 것이 구원인 마을"]
            }), x.jsx(Wt.div, {
                className: "w-px h-16 bg-gradient-to-b from-lantern/50 to-transparent",
                initial: {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: 64
                },
                transition: {
                    duration: 1,
                    delay: 1
                }
            }), x.jsx(Wt.p, {
                className: "text-base md:text-lg text-ghost/70 max-w-3xl leading-relaxed",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 1,
                    delay: 1.2
                },
                children: "은면리에 흘러든 가짜 무당. 이름도, 얼굴도, 진실도 숨긴 마을에서 당신은 낯병의 저주를 파헤치거나, 사랑하거나, 도망치거나, 타락하거나, 구원해야 한다."
            }), x.jsx(Wt.div, {
                className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 md:mt-12 w-full max-w-3xl",
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .8,
                    delay: 1.5
                },
                children: [{
                    label: "세계관 보기",
                    target: "story"
                }, {
                    label: "명령어 확인",
                    target: "commands"
                }, {
                    label: "인물 도감 열기",
                    target: "characters"
                }, {
                    label: "은면리 지도 보기",
                    target: "map"
                }].map((l, s) => x.jsx("button", {
                    onClick: () => i(l.target),
                    className: Qe("px-4 py-3 border border-lantern/30 bg-bg-dark text-lantern font-body text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-lantern/10 hover:border-lantern transition-all duration-300", "backdrop-blur-sm"),
                    children: l.label
                }, s))
            })]
        })]
    })
}

function ci({
    title: i,
    subtitle: l,
    className: s,
    align: o = "center",
    icon: c
}) {
    return x.jsxs("div", {
        className: Qe("mb-12 md:mb-16", o === "center" && "text-center", o === "right" && "text-right", s),
        children: [x.jsxs("h2", {
            className: "text-3xl md:text-5xl font-title text-lantern drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)] flex items-center justify-center gap-4",
            children: [c && x.jsx("span", {
                className: "opacity-80",
                children: c
            }), i, c && x.jsx("span", {
                className: "opacity-80 scale-x-[-1]",
                children: c
            })]
        }), l && x.jsx("p", {
            className: "mt-4 text-ghost/70 font-body text-lg md:text-xl tracking-wider",
            children: l
        }), x.jsx("div", {
            className: Qe("mt-6 h-px bg-gradient-to-r from-transparent via-lantern/30 to-transparent", o === "center" ? "mx-auto w-1/2" : "w-1/2")
        })]
    })
}
const BE = [{
    title: "가짜 무당",
    desc: "사용자는 은면리에 흘러든 가짜 무당. 처음에는 살아남기 위해 무당 행세를 하지만, 점점 진짜 저주의 중심으로 들어간다.",
    icon: "🎴",
    color: "border-lantern/30"
}, {
    title: "은면리 (銀面里)",
    desc: "외부와 단절된 저주마을. 과거 전국 낯병 환자들이 격리��� 곳. 함부로 접근하는 자는 사형에 처한다.",
    icon: "🌫️",
    color: "border-mist/50"
}, {
    title: "낯병",
    desc: "얼굴, 이름, 기억을 잃어가는 병. 말기에는 죽은 자의 이름을 자칭하거나 죽음에 끌리는 행동을 보인다. 마을 사람들은 민낯과 이름을 들키면 영혼을 빼앗긴다고 믿는다.",
    icon: "🎭",
    color: "border-talisman/50"
}, {
    title: "월정 (月井)",
    desc: "보름달이 비치는 신성한 우물. 은면리 사람들은 월정의 물로 생활한다. 무당이 3년째 오지 않아 마을은 낯병을 두려워한다.",
    icon: "🌕",
    color: "border-lantern/50"
}];

function LE() {
    return x.jsxs("section", {
        id: "story",
        className: "py-24 px-6 sm:px-12 max-w-7xl mx-auto relative z-10",
        children: [x.jsx(ci, {
            title: "스토리 개요",
            subtitle: "가면 속에 가려진 진실의 조각들"
        }), x.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-12",
            children: BE.map((i, l) => x.jsxs(Wt.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0,
                    margin: "-100px"
                },
                transition: {
                    duration: .6,
                    delay: l * .1
                },
                className: "p-8 border border-ghost/10 bg-ink rounded-sm flex flex-col gap-4 group hover:border-ghost/30 transition-colors relative overflow-hidden",
                children: [x.jsx("div", {
                    className: `absolute top-0 right-0 w-24 h-24 blur-3xl opacity-10 bg-current transition-opacity group-hover:opacity-20 ${i.color.replace("border","text")}`
                }), x.jsxs("div", {
                    className: "flex items-center gap-4 relative z-10",
                    children: [x.jsx("span", {
                        className: "text-xl md:text-3xl opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-md",
                        children: i.icon
                    }), x.jsx("h3", {
                        className: "text-xl font-title text-ghost uppercase tracking-widest",
                        children: i.title
                    })]
                }), x.jsx("p", {
                    className: "text-ghost/80 text-sm md:text-base leading-relaxed font-body font-light relative z-10 mt-2",
                    children: i.desc
                }), x.jsx("div", {
                    className: "absolute top-0 right-0 p-4 opacity-5 font-title text-5xl select-none pointer-events-none",
                    children: ["巫", "里", "病", "井"][l]
                })]
            }, l))
        })]
    })
}
const kE = ["흑사포는 태어날 때부터 죽을 때까지 착용한다.", "실제 이름은 혼례자 외에는 공개하지 않는다.", "집 방문은 금기다.", "그믐밤에는 함부로 마을 밖을 돌아다녀서는 안된다", "은면리에는 무당을 제외하고 흑사포를 쓰지 않은 사람은 출입할 수 없다."];

function HE() {
    return x.jsxs("section", {
        id: "rules",
        className: "py-24 px-6 sm:px-12 max-w-5xl mx-auto relative z-10",
        children: [x.jsx(ci, {
            title: "은면리의 금기",
            subtitle: "살아남기 위해 새겨야 할 다섯 가지 규칙"
        }), x.jsxs("div", {
            className: "mt-16 mx-auto relative max-w-3xl",
            children: [x.jsx("div", {
                className: "absolute inset-0 bg-bg-paper-dark opacity-10 blur-xl rounded-full"
            }), x.jsxs("div", {
                className: "relative bg-ink/80 backdrop-blur-md border border-talisman/20 p-8 md:p-12 rounded-sm shadow-[0_0_30px_rgba(10,17,18,0.5)]",
                children: [x.jsx("div", {
                    className: "absolute top-0 left-[-20px] right-[-20px] h-3 bg-wood border border-ghost/10 shadow-md z-10"
                }), x.jsx("div", {
                    className: "absolute bottom-0 left-[-20px] right-[-20px] h-3 bg-wood border border-ghost/10 shadow-md z-10"
                }), x.jsx("ul", {
                    className: "space-y-6 font-body",
                    children: kE.map((i, l) => x.jsxs(Wt.li, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: !0,
                            margin: "-50px"
                        },
                        transition: {
                            duration: .5,
                            delay: l * .1
                        },
                        className: "flex items-start gap-4",
                        children: [x.jsx("span", {
                            className: "text-talisman text-xl font-title shrink-0",
                            children: "禁"
                        }), x.jsx("span", {
                            className: "text-ghost/90 text-lg leading-relaxed",
                            children: i
                        })]
                    }, l))
                }), x.jsx("div", {
                    className: "absolute bottom-4 right-8 opacity-20",
                    children: x.jsx("span", {
                        className: "font-title text-5xl text-talisman",
                        children: "印"
                    })
                })]
            })]
        })]
    })
}
const GE = [{
    cmd: "!신탁",
    func: "사용자가 신탁을 내린다. 마을의 반응, 소문, 신뢰도, 신의분노가 변화한다.",
    risk: "높음",
    ex: "!신탁",
    tag: "Oracle"
}, {
    cmd: "!조사",
    func: "장소, 인물, 물건, 소문을 조사한다. 의미 있는 단서를 얻는다.",
    risk: "중간",
    ex: "!조사(월정)",
    tag: "Investigate"
}, {
    cmd: "!흰재",
    func: "낯병, 저주, 흔적, 얼굴, 이름과 관련된 이상 징후를 확인한다.",
    risk: "높음",
    ex: "!흰재",
    tag: "Signs"
}, {
    cmd: "!거래",
    func: "정보, 물건, 이름, 기억, 약속, 거짓말, 신뢰 중 하나를 대가로 거래한다.",
    risk: "위험",
    ex: "!거래(묵사)",
    tag: "Trade"
}, {
    cmd: "!사전",
    func: "사용자가 현재까지 알게 된 정보만 정리한다. 미공개 진실은 보여주지 않는다.",
    risk: "낮음",
    ex: "!사전",
    tag: "Archive"
}, {
    cmd: "!이벤트",
    func: "현재 절기, 시간, 장소, 위험도에 맞는 사건이 발생한다.",
    risk: "랜덤",
    ex: "!이벤트",
    tag: "Event"
}];

function YE() {
    return x.jsxs("section", {
        id: "commands",
        className: "py-24 px-6 sm:px-12 max-w-7xl mx-auto relative z-10",
        children: [x.jsx(ci, {
            title: "명령어 안내",
            subtitle: "신을 가장하기 위해 뱉어야 할 말들"
        }), x.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12",
            children: GE.map((i, l) => x.jsxs(Wt.div, {
                initial: {
                    opacity: 0,
                    scale: .95
                },
                whileInView: {
                    opacity: 1,
                    scale: 1
                },
                whileHover: {
                    y: -5
                },
                viewport: {
                    once: !0,
                    margin: "-50px"
                },
                transition: {
                    duration: .4
                },
                className: "bg-talisman/10 border border-talisman/30 p-6 rounded-sm relative group",
                children: [x.jsx("div", {
                    className: "absolute -top-1 -right-1 w-8 h-8 bg-talisman opacity-20 blur-xl transition-opacity group-hover:opacity-40"
                }), x.jsxs("div", {
                    className: "relative z-10",
                    children: [x.jsx("h3", {
                        className: "text-talisman text-xs mb-4 uppercase tracking-widest",
                        children: "Command Talismans"
                    }), x.jsx("div", {
                        className: "space-y-3",
                        children: x.jsxs("div", {
                            className: "flex items-center justify-between border-b border-talisman/20 pb-2",
                            children: [x.jsxs("span", {
                                className: "text-sm font-bold",
                                children: [i.cmd, " ", x.jsxs("span", {
                                    className: "text-[10px] font-normal opacity-60",
                                    children: ["[", i.risk, "]"]
                                })]
                            }), x.jsx("span", {
                                className: "text-[10px] bg-talisman/20 px-2 py-0.5 rounded text-talisman uppercase tracking-widest",
                                children: i.tag
                            })]
                        })
                    }), x.jsx("p", {
                        className: "text-ghost/80 text-sm mt-4 min-h-[3rem] font-body font-light",
                        children: i.func
                    }), x.jsxs("div", {
                        className: "mt-6 bg-ghost text-ink p-2 text-[10px] font-mono tracking-widest",
                        children: ["EXAMPLE: ", i.ex]
                    })]
                })]
            }, l))
        })]
    })
}
const qE = [{
    name: "신뢰도",
    desc: "마을이 사용자를 무당으로 믿는 정도. 높으면 정보와 의뢰가 증가하지만, 너무 높으면 위험한 의식에 끌려갈 수 있다.",
    color: "bg-lantern",
    value: 65,
    icon: "🙏"
}, {
    name: "신의분노",
    desc: "금기, 거짓 신탁, 흰재, 산군 모독으로 상승한다. 높으면 밤 사건이 늘어난다.",
    color: "bg-talisman",
    value: 40,
    icon: "⚡"
}, {
    name: "낯병도",
    desc: "사용자가 낯병에 물드는 정도. 높으면 이름, 얼굴, 기억 이상이 증가한다.",
    color: "bg-mist",
    value: 25,
    icon: "🎭"
}, {
    name: "의심도",
    desc: "사용자가 가짜 무당임을 의심받는 정도. 높으면 감시, 추궁, 함정이 증가한다.",
    color: "bg-purple-900",
    value: 80,
    icon: "👁️"
}];

function XE() {
    return x.jsxs("section", {
        id: "status",
        className: "py-24 px-6 sm:px-12 max-w-5xl mx-auto relative z-10",
        children: [x.jsx(ci, {
            title: "진행 수치",
            subtitle: "당신의 생존을 결정짓는 보이지 않는 저울"
        }), x.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-16",
            children: qE.map((i, l) => x.jsxs(Wt.div, {
                initial: {
                    opacity: 0,
                    x: l % 2 === 0 ? -20 : 20
                },
                whileInView: {
                    opacity: 1,
                    x: 0
                },
                viewport: {
                    once: !0
                },
                className: "relative",
                children: [x.jsxs("div", {
                    className: "flex justify-between text-xs mb-2",
                    children: [x.jsx("span", {
                        className: "font-title tracking-widest text-ghost",
                        children: i.name
                    }), x.jsxs("span", {
                        className: "font-mono text-ghost/50",
                        children: [i.value, "%"]
                    })]
                }), x.jsx("div", {
                    className: "w-full bg-ghost/10 h-1 relative",
                    children: x.jsx(Wt.div, {
                        initial: {
                            width: 0
                        },
                        whileInView: {
                            width: `${i.value}%`
                        },
                        transition: {
                            duration: 1,
                            delay: .2 + l * .1
                        },
                        className: Qe("h-full", i.color)
                    })
                }), x.jsx("p", {
                    className: "text-ghost/60 text-[11px] mt-4 leading-relaxed font-body",
                    children: i.desc
                })]
            }, l))
        })]
    })
}
const Cl = [{
    name: "초승 7일",
    desc: `흑사포 끈을 교체한다. 끈 색은 관계를 의미한다.
빨강=사랑, 초록=우정, 파랑=신뢰/스승, 흰색=그리움`,
    icon: "🌙",
    theme: "text-blue-200"
}, {
    name: "상현 7일",
    desc: "송문장, 청등사 방문. 소문, 약재, 관아 정보, 전국 낯병 단서를 얻는다.",
    icon: "🌓",
    theme: "text-blue-300"
}, {
    name: "보름 1일",
    desc: "저주가 약해진다. 혼례, 민낯, 우물조사, 고백이 가능하다.",
    icon: "🌕",
    theme: "text-lantern"
}, {
    name: "하현 7일",
    desc: "낯병이 심해진다. 환자 발생, 부적 교체, 신탁 요구, 위기 선택이 늘어난다.",
    icon: "🌗",
    theme: "text-talisman"
}, {
    name: "그믐 7일",
    desc: "밤외출 금지. 산군 조우, 소지제, 죽은 자의 목소리, 우물 아래 진실에 접근한다.",
    icon: "🌑",
    theme: "text-mist"
}];

function ZE() {
    const [i, l] = Q.useState(2);
    return x.jsxs("section", {
        id: "calendar",
        className: "py-24 px-6 sm:px-12 max-w-5xl mx-auto relative z-10 transition-colors duration-1000",
        children: [x.jsx("div", {
            className: Qe("absolute inset-0 -z-10 blur-3xl opacity-10 transition-colors duration-1000", i === 2 ? "bg-lantern" : i === 4 ? "bg-black" : i === 3 ? "bg-talisman" : "bg-blue-900")
        }), x.jsx(ci, {
            title: "은면리 절기",
            subtitle: "한 달 29일, 달의 위상에 따라 변하는 저주"
        }), x.jsx("p", {
            className: "text-center text-ghost/50 text-sm -mt-10 mb-8 font-title tracking-wider",
            children: "달을 클릭해서 확인하세요"
        }), x.jsxs("div", {
            className: "flex flex-col md:flex-row gap-12 items-center mt-16",
            children: [x.jsxs("div", {
                className: "relative w-64 h-64 shrink-0 flex items-center justify-center border-2 border-lantern/20 rounded-full",
                children: [Cl.map((s, o) => {
                    const c = o * (360 / Cl.length) - 90,
                        d = Math.cos(c * Math.PI / 180) * 128,
                        f = Math.sin(c * Math.PI / 180) * 128;
                    return x.jsx("button", {
                        onClick: () => l(o),
                        className: Qe("absolute text-4xl transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-125 focus:outline-none", i === o ? "scale-125 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] filter" : "opacity-50 grayscale"),
                        style: {
                            left: `calc(50% + ${d}px)`,
                            top: `calc(50% + ${f}px)`
                        },
                        "aria-label": s.name,
                        children: s.icon
                    }, o)
                }), x.jsx("div", {
                    className: "text-center",
                    children: x.jsx(Wt.div, {
                        initial: {
                            opacity: 0,
                            scale: .8
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        className: Qe("text-2xl font-title font-bold", Cl[i].theme),
                        children: Cl[i].name
                    }, i)
                })]
            }), x.jsx("div", {
                className: "flex-1 bg-ink/60 border border-mist/30 p-8 rounded-sm backdrop-blur-sm min-h-[200px] flex items-center",
                children: x.jsx(Wt.p, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "text-ghost/80 text-lg leading-relaxed font-body",
                    children: Cl[i].desc
                }, i)
            })]
        })]
    })
}
const sy = [{
    id: "center",
    name: "월정(우물)",
    desc: "보름달이 비치는 우물. 낯병의 핵심 진상과 연결된다.",
    risk: "극상",
    npc: "모두",
    cmds: ["!조사", "!흰재"],
    x: 50,
    y: 56
}, {
    id: "home",
    name: "월사채(거처)",
    desc: "사용자의 무당 거처. 무정할멈이 관리한다.",
    risk: "낮음",
    npc: "무정할멈",
    cmds: ["!휴식", "!사전"],
    x: 38,
    y: 76
}, {
    id: "school",
    name: "서당",
    desc: "묵사의 공간. 제문, 기록, 족보, 은폐 역사 단서를 찾을 수 있다.",
    risk: "중간",
    npc: "묵사",
    cmds: ["!거래", "!조사"],
    x: 28,
    y: 45
}, {
    id: "masks",
    name: "면포장",
    desc: "포현의 공간. 가면, 면포, 끈, 흑사포 글귀, 얼굴 측정 이벤트가 있다.",
    risk: "높음",
    npc: "포현",
    cmds: ["!흰재", "!거래"],
    x: 74,
    y: 46
}, {
    id: "gate",
    name: "마을문",
    desc: "문위의 공간. 탈출, 감시, 보호 이벤트가 발생한다.",
    risk: "중간",
    npc: "문위",
    cmds: ["!조사", "!이벤트"],
    x: 80,
    y: 88
}, {
    id: "market",
    name: "송문장",
    desc: "외부 장터. 거래, 전국 낯병 소문, 약재 정보를 얻을 수 있다.",
    risk: "낮음",
    npc: "시장상인",
    cmds: ["!거래", "!조사"],
    x: 85,
    y: 20
}, {
    id: "temple",
    name: "청등사",
    desc: "장님 스님이 있는 절. ���름, 장례, 저주 단서와 연결된다.",
    risk: "중간",
    npc: "장님 스님",
    cmds: ["!조사", "!신탁"],
    x: 20,
    y: 19
}, {
    id: "river",
    name: "무진나루",
    desc: "은면리 사람은 탑승 금지. 관아 감시와 진실 유출 차단의 장소다.",
    risk: "높음",
    npc: "관아 병사",
    cmds: ["!조사"],
    x: 15,
    y: 88
}, {
    id: "mountain",
    name: "산길",
    desc: "그믐밤 산군을 만날 수 있는 위험한 길.",
    risk: "최고조",
    npc: "산군",
    cmds: ["!이벤트", "!흰재"],
    x: 51,
    y: 12,
    isFoggy: !0
}];

function QE() {
    const [i, l] = Q.useState(sy[0]);
    return x.jsxs("section", {
        id: "map",
        className: "py-24 px-6 sm:px-12 max-w-7xl mx-auto relative z-10",
        children: [x.jsx(ci, {
            title: "은면리 지도",
            subtitle: "안개 속에 숨겨진 금기의 구역들"
        }), x.jsx("p", {
            className: "text-center text-ghost/50 text-sm -mt-10 mb-8 font-title tracking-wider",
            children: "지명을 클릭하여 상세설명을 확인하세요"
        }), x.jsxs("div", {
            className: "flex flex-col lg:flex-row gap-8 mt-12 bg-ink-light/20 p-4 md:p-8 border border-mist/20 rounded-sm",
            children: [x.jsxs("div", {
                className: "relative w-full lg:w-2/3 aspect-[4/3] max-w-[800px] mx-auto border border-mist/30 overflow-hidden mix-blend-overlay-safe bg-cover bg-center",
                style: {
                    backgroundImage: "url('https://i.postimg.cc/xd95NTsr/hwamyeon-kaebcheo-2026-05-20-002603.png')",
                    backgroundColor: "#1a2322"
                },
                children: [x.jsx("div", {
                    className: "absolute inset-x-0 bottom-0 top-[60%] bg-gradient-to-t from-bg-dark/80 to-transparent pointer-events-none"
                }), sy.map((s, o) => x.jsxs("button", {
                    onClick: () => l(s),
                    className: "absolute transform -translate-x-1/2 -translate-y-1/2 group z-10 flex flex-col items-center focus:outline-none",
                    style: {
                        left: `${s.x}%`,
                        top: `${s.y}%`
                    },
                    children: [x.jsx("div", {
                        className: Qe("w-4 h-4 md:w-6 md:h-6 rounded-full border-2 bg-bg-dark transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]", i.id === s.id ? "scale-150 border-lantern bg-lantern/20 shadow-[0_0_15px_rgba(212,175,55,0.6)]" : "border-mist/60 group-hover:border-ghost group-hover:scale-125")
                    }), x.jsx("span", {
                        className: Qe("mt-2 font-title text-xs md:text-sm whitespace-nowrap bg-ink/80 px-2 py-0.5 rounded border border-mist/20", i.id === s.id ? "text-lantern border-lantern/50" : "text-ghost/80"),
                        children: s.name
                    }), s.isFoggy && x.jsx("div", {
                        className: "absolute inset-[-40px] pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(122,139,139,0.3)_0%,_transparent_70%)] animate-pulse"
                    })]
                }, o))]
            }), x.jsxs("div", {
                className: "w-full lg:w-1/3 bg-ink/80 border border-talisman/20 p-6 relative min-h-[400px]",
                children: [x.jsx(B0, {
                    mode: "wait",
                    children: x.jsxs(Wt.div, {
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        exit: {
                            opacity: 0,
                            x: -20
                        },
                        className: "flex flex-col h-full space-y-4",
                        children: [x.jsx("h3", {
                            className: "text-3xl font-title text-lantern border-b-2 border-lantern/30 pb-2",
                            children: i.name
                        }), x.jsx("p", {
                            className: "text-ghost/90 font-body leading-relaxed flex-grow",
                            children: i.desc
                        }), x.jsxs("div", {
                            className: "space-y-2 text-sm mt-8 border-t border-mist/20 pt-4",
                            children: [x.jsxs("div", {
                                className: "flex justify-between items-center bg-bg-dark/50 p-2",
                                children: [x.jsx("span", {
                                    className: "text-mist",
                                    children: "위험도"
                                }), x.jsx("span", {
                                    className: Qe("font-bold text-right", i.risk.includes("상") || i.risk.includes("최") ? "text-talisman" : "text-lantern"),
                                    children: i.risk
                                })]
                            }), x.jsxs("div", {
                                className: "flex justify-between items-center bg-bg-dark/50 p-2",
                                children: [x.jsx("span", {
                                    className: "text-mist",
                                    children: "관련 인물"
                                }), x.jsx("span", {
                                    className: "text-right",
                                    children: i.npc
                                })]
                            }), x.jsxs("div", {
                                className: "flex justify-between items-center bg-bg-dark/50 p-2",
                                children: [x.jsx("span", {
                                    className: "text-mist",
                                    children: "추천 명령어"
                                }), x.jsx("div", {
                                    className: "flex gap-2",
                                    children: i.cmds.map(s => x.jsx("span", {
                                        className: "bg-ink px-1 rounded text-ghost/70 font-mono text-xs",
                                        children: s
                                    }, s))
                                })]
                            })]
                        })]
                    }, i.id)
                }), x.jsx("div", {
                    className: "absolute bottom-2 right-2 opacity-10",
                    children: x.jsx("span", {
                        className: "font-title text-6xl text-mist",
                        children: "地"
                    })
                })]
            })]
        })]
    })
}
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const KE = i => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    JE = i => i.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, s, o) => o ? o.toUpperCase() : s.toLowerCase()),
    oy = i => {
        const l = JE(i);
        return l.charAt(0).toUpperCase() + l.slice(1)
    },
    fv = (...i) => i.filter((l, s, o) => !!l && l.trim() !== "" && o.indexOf(l) === s).join(" ").trim(),
    FE = i => {
        for (const l in i)
            if (l.startsWith("aria-") || l === "role" || l === "title") return !0
    };
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var PE = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WE = Q.forwardRef(({
    color: i = "currentColor",
    size: l = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: o,
    className: c = "",
    children: d,
    iconNode: f,
    ...m
}, g) => Q.createElement("svg", {
    ref: g,
    ...PE,
    width: l,
    height: l,
    stroke: i,
    strokeWidth: o ? Number(s) * 24 / Number(l) : s,
    className: fv("lucide", c),
    ...!d && !FE(m) && {
        "aria-hidden": "true"
    },
    ...m
}, [...f.map(([p, v]) => Q.createElement(p, v)), ...Array.isArray(d) ? d : [d]]));
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = (i, l) => {
    const s = Q.forwardRef(({
        className: o,
        ...c
    }, d) => Q.createElement(WE, {
        ref: d,
        iconNode: l,
        className: fv(`lucide-${KE(oy(i))}`, `lucide-${i}`, o),
        ...c
    }));
    return s.displayName = oy(i), s
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $E = [
        ["path", {
            d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
            key: "ct8e1f"
        }],
        ["path", {
            d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
            key: "151rxh"
        }],
        ["path", {
            d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
            key: "13bj9a"
        }],
        ["path", {
            d: "m2 2 20 20",
            key: "1ooewy"
        }]
    ],
    IE = _o("eye-off", $E);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tM = [
        ["path", {
            d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
            key: "1nclc0"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }]
    ],
    eM = _o("eye", tM);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nM = [
        ["rect", {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1"
        }],
        ["path", {
            d: "M7 11V7a5 5 0 0 1 9.9-1",
            key: "1mm8w8"
        }]
    ],
    dv = _o("lock-open", nM);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iM = [
        ["rect", {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1"
        }],
        ["path", {
            d: "M7 11V7a5 5 0 0 1 10 0v4",
            key: "fwvmzm"
        }]
    ],
    ry = _o("lock", iM),
    Tc = [{
        id: "muk",
        namePublic: "묵사 (墨師)",
        nameReal: "서문결",
        role: "기록관, 서책과 족보 관리자",
        keywords: "차분함, 정중함, 기록 집착, 예리함, 의심 많음",
        speech: "정중하고 건조하며 짧다",
        comicPoint: "진지한 얼굴로 붓을 떨어뜨리거나 먹물을 묻히는 자연스러운 실수",
        relation: "기록자 / 관찰자",
        risk: "중간 (진실에 접근 시 높음)",
        trust: "서서히 오르나 한번 떨어지면 회복 불가",
        desc: "서당을 관리하며 마을의 모든 것을 기록하는 자. 가짜 무당인 당신을 처음부터 의심하면서도 가만히 지켜본다.",
        quote: "방금, 이름을 피하셨군요.",
        imgUrlVeiled: "https://i.postimg.cc/8CbyZr7H/mupyojeong2.png",
        imgUrlUnveiled: "https://i.postimg.cc/gj14xV7r/mugsa(seomungyeol)seulpeum.png"
    }, {
        id: "po",
        namePublic: "포현 (捕玄)",
        nameReal: "류가온",
        role: "포졸, 길목과 밤순찰 담당",
        keywords: "능글맞음, 여유, 장난기, 감각 예민",
        speech: "부드럽고 장난스럽고 이중적 의미가 있다",
        comicPoint: "위험한 농담과 경계선상의 플러팅",
        relation: "시비 / 위험한 장난",
        risk: "높음",
        trust: "유동적 (흥미 위주)",
        desc: "밤길을 순찰하며 규칙을 위반하는 자를 색출하는 포졸. 느슨한 미소 뒤에 예민한 눈을 감추고 있다.",
        quote: "밤길은 위험합니다. 특히 거짓말엔.",
        imgUrlVeiled: "https://i.postimg.cc/D0QmGFjp/us-eum2.png",
        imgUrlUnveiled: "https://i.postimg.cc/N0W0PLZn/pohyeon(lyugaon)bukkeu.png"
    }, {
        id: "mun",
        namePublic: "문위 (門衛)",
        nameReal: "문사윤",
        role: "마을 문지기",
        keywords: "밝음, 천진함, 규칙 중시, 사이코패스",
        speech: "밝고 빠르며 설명이 많다",
        comicPoint: "순수한 실수와 해맑게 무서운 말",
        relation: "감시자 / 우연한 조력자",
        risk: "낮음 (규칙 위반 시 즉시 최고조)",
        trust: "시작부터 높음 (원리원칙)",
        desc: "마을 입구를 지키는 밝은 청년. 아무 악의 없이 가장 섬뜩한 마을의 규칙을 들려준다.",
        quote: "아, 아직 안 죽으셨죠?",
        imgUrlVeiled: "https://i.postimg.cc/X7VYPR1P/mun-wi(munsayun)chyeodabom.png",
        imgUrlUnveiled: "https://i.postimg.cc/2yTrm592/mun-wi(munsayun)sujub.png"
    }, {
        id: "san",
        namePublic: "산군 (山君)",
        nameReal: "월아(月兒)",
        role: "은면리 뒷산과 그믐밤의 존재",
        keywords: "오만함, 고리타분, 비인간적",
        speech: "느리고 낮으며, 대답보다 시험을 던진다",
        comicPoint: "인간의 사소한 고민을 전혀 이해하지 못하는 엉뚱함",
        relation: "시험자 / 매혹",
        risk: "최상급 (생존 직결)",
        trust: "알 수 없음",
        desc: "그믐밤 산길에서만 만날 수 있는 오래된 존재. 낯병과 첫 저주의 기원과 가장 맞닿아 있다.",
        quote: "네 낯은 누구의 것이냐.",
        moonOnly: !0,
        noVeil: !0,
        imgUrlUnveiled: "https://i.postimg.cc/NFnC1qK6/sangunseulpeum.png"
    }];

function aM() {
    const [i, l] = Q.useState(Tc.reduce((d, f) => ({
        ...d,
        [f.id]: !0
    }), {})), [s, o] = Q.useState(!1);
    Q.useEffect(() => {
        Tc.forEach(d => {
            if (d.imgUrlVeiled) {
                const f = new Image;
                f.src = d.imgUrlVeiled
            }
            if (d.imgUrlUnveiled) {
                const f = new Image;
                f.src = d.imgUrlUnveiled
            }
        })
    }, []);
    const c = d => {
        l(f => ({
            ...f,
            [d]: !f[d]
        }))
    };
    return x.jsxs("section", {
        id: "characters",
        className: "py-24 px-6 sm:px-12 max-w-7xl mx-auto relative z-10",
        children: [x.jsx(ci, {
            title: "인물 도감",
            subtitle: "흑사포 뒤에 숨겨진 진실들"
        }), x.jsx("p", {
            className: "text-center text-talisman text-sm -mt-10 mb-12 font-title tracking-wider",
            children: "'VEIL ON'을 클릭하면 실제 얼굴과 실명이 스포되니 주의해주세요"
        }), x.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12",
            children: Tc.map(d => {
                if (d.moonOnly && !s) return x.jsxs(Wt.div, {
                    className: "p-3 bg-black/60 border border-dashed border-ghost/20 rounded-sm relative min-h-[400px] flex flex-col items-center justify-center group hover:border-ghost/40 transition-colors",
                    children: [x.jsx("div", {
                        className: "absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm text-xs tracking-widest text-talisman uppercase",
                        children: "LOCKED: 그믐밤 한정"
                    }), x.jsx("span", {
                        className: "text-4xl opacity-20 filter blur-sm",
                        children: "🐺"
                    }), x.jsx("h4", {
                        className: "text-sm font-bold opacity-20 mt-4",
                        children: d.namePublic
                    }), x.jsxs("button", {
                        onClick: () => o(!0),
                        className: "absolute bottom-6 px-4 py-2 border border-talisman/40 text-talisman text-[10px] hover:bg-talisman/10 flex items-center gap-2 uppercase tracking-widest z-10",
                        children: [x.jsx(dv, {
                            size: 12
                        }), " 강제 해금"]
                    })]
                }, d.id);
                const f = d.noVeil ? !1 : i[d.id];
                return x.jsxs(Wt.div, {
                    className: "bg-bg-dark border border-ghost/20 rounded-sm group hover:border-lantern transition-colors flex flex-col relative",
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    viewport: {
                        once: !0
                    },
                    children: [x.jsxs("div", {
                        className: "p-4 border-b border-ghost/10 flex justify-between items-start bg-bg-dark/40",
                        children: [x.jsxs("div", {
                            children: [x.jsxs("h3", {
                                className: "text-lg font-bold text-lantern flex items-center gap-2",
                                children: [d.namePublic, x.jsxs("span", {
                                    className: "text-[10px] text-ghost/60 uppercase tracking-wider font-normal",
                                    children: ["[", d.risk, "]"]
                                })]
                            }), x.jsx("p", {
                                className: "text-[10px] opacity-60 text-ghost mt-1",
                                children: d.role
                            })]
                        }), !d.noVeil && x.jsxs("button", {
                            onClick: () => c(d.id),
                            className: Qe("px-2 py-1 text-[10px] uppercase border transition-colors flex items-center gap-1", f ? "border-ghost/40 text-ghost/40 hover:text-ghost hover:border-ghost" : "border-talisman text-talisman hover:bg-talisman/10"),
                            children: [f ? x.jsx(IE, {
                                size: 10
                            }) : x.jsx(eM, {
                                size: 10
                            }), f ? "Veil On" : "Veil Off"]
                        })]
                    }), x.jsxs("div", {
                        className: "flex flex-col md:flex-row flex-grow",
                        children: [x.jsxs("div", {
                            className: "w-full md:w-1/3 min-h-[300px] relative border-b md:border-b-0 md:border-r border-ghost/10 bg-black flex items-center justify-center overflow-hidden",
                            children: [x.jsxs(Wt.div, {
                                initial: {
                                    opacity: f ? 1 : 0
                                },
                                animate: {
                                    opacity: f ? 1 : 0
                                },
                                transition: {
                                    duration: .3
                                },
                                className: "absolute inset-0 text-center text-ghost w-full h-full flex flex-col items-center justify-center pointer-events-none",
                                style: {
                                    zIndex: f ? 2 : 1
                                },
                                children: [x.jsx("div", {
                                    className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.05)_0%,_transparent_50%)] z-10 pointer-events-none"
                                }), d.imgUrlVeiled ? x.jsx("img", {
                                    src: d.imgUrlVeiled,
                                    alt: "veiled",
                                    decoding: "async",
                                    fetchpriority: "high",
                                    className: "absolute inset-0 w-full h-full object-cover object-top opacity-100"
                                }) : x.jsxs(x.Fragment, {
                                    children: [x.jsx("div", {
                                        className: "w-16 h-24 bg-bg-dark border border-mist/30 rounded-t-full relative shadow-[0_10px_20px_rgba(0,0,0,0.8)] z-10",
                                        children: x.jsx("div", {
                                            className: "absolute top-4 left-0 right-0 h-1 bg-black/80 shadow-md"
                                        })
                                    }), x.jsx("p", {
                                        className: "mt-4 font-title text-[10px] opacity-50 tracking-widest uppercase relative z-10",
                                        children: "Veiled"
                                    })]
                                })]
                            }), x.jsxs(Wt.div, {
                                initial: {
                                    opacity: f ? 0 : 1
                                },
                                animate: {
                                    opacity: f ? 0 : 1
                                },
                                transition: {
                                    duration: .3
                                },
                                className: "absolute inset-0 text-center text-ghost w-full h-full flex flex-col items-center justify-center pointer-events-none",
                                style: {
                                    zIndex: f ? 1 : 2
                                },
                                children: [x.jsx("div", {
                                    className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(226,175,46,0.1)_0%,_transparent_70%)] z-10 pointer-events-none"
                                }), d.imgUrlUnveiled ? x.jsx("img", {
                                    src: d.imgUrlUnveiled,
                                    alt: "unveiled",
                                    decoding: "async",
                                    loading: "lazy",
                                    className: "absolute inset-0 w-full h-full object-cover object-top opacity-100 drop-shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                                }) : x.jsxs(x.Fragment, {
                                    children: [x.jsx("div", {
                                        className: "w-16 h-16 rounded-full bg-gradient-to-tr from-bg-paper-dark to-wood shadow-[0_0_20px_rgba(226,175,46,0.2)] z-10"
                                    }), x.jsx("p", {
                                        className: "mt-4 font-title text-lantern text-[10px] tracking-widest relative z-10 shadow-black drop-shadow-md bg-black/60 px-2 py-1 rounded",
                                        children: d.nameReal
                                    })]
                                })]
                            })]
                        }), x.jsxs("div", {
                            className: "p-5 space-y-4 w-full md:w-2/3 bg-transparent",
                            children: [x.jsxs("p", {
                                className: "text-[11px] leading-tight text-ghost/80 italic border-l border-talisman pl-3 mb-4",
                                children: ["“", d.quote, "”"]
                            }), x.jsxs("div", {
                                className: "grid grid-cols-2 gap-x-4 gap-y-3 text-[10px] md:text-sm",
                                children: [x.jsxs("div", {
                                    className: "col-span-2",
                                    children: [x.jsx("span", {
                                        className: "text-mist block mb-1 uppercase tracking-wider text-[10px]",
                                        children: "Real Name"
                                    }), f ? x.jsx("span", {
                                        className: "bg-black/50 text-transparent select-none blur-[4px] inline-block px-1",
                                        children: "LOCKED_DATA"
                                    }) : x.jsx("span", {
                                        className: "text-talisman font-bold inline-block px-1 text-xs",
                                        children: d.nameReal
                                    })]
                                }), x.jsxs("div", {
                                    className: "col-span-2",
                                    children: [x.jsx("span", {
                                        className: "text-mist block mb-1 uppercase tracking-wider text-[10px]",
                                        children: "Keywords"
                                    }), x.jsx("span", {
                                        className: "text-ghost/90 text-[11px]",
                                        children: d.keywords
                                    })]
                                }), x.jsxs("div", {
                                    className: "col-span-2 border-t border-ghost/10 pt-2 mt-2",
                                    children: [x.jsx("span", {
                                        className: "text-mist block mb-1 uppercase tracking-wider text-[10px]",
                                        children: "Traits"
                                    }), x.jsx("span", {
                                        className: "text-ghost/70 italic bg-ink p-1 inline-block rounded text-[11px]",
                                        children: d.comicPoint
                                    })]
                                })]
                            })]
                        })]
                    })]
                }, d.id)
            })
        })]
    })
}
const Ac = [{
    name: "은면리",
    public: "외부와 단절된 숲 속 마을. 주민 전체��� 검은 흑사포를 쓰고 다닌다.",
    clue: "언제부터 단절되었는가? 왜 포졸이 마을 내부로 들어오지 않는가?",
    secret: "과거 전국 낯병 환자들이 강제 수용된 격리 구역. 산 아래 무진나루 밖으로는 나갈 수 없다.",
    places: "마을 전체, 무진나루",
    chars: "모두",
    isUnlocked: !0
}, {
    name: "낯병",
    public: "시간이 지날수록 얼굴과 이름, 기억을 잃어가는 저주받은 병.",
    clue: "잃어버린 기억 자리를 무언가 다른 것이 채우려 한다.",
    secret: "LOCKED_DATA",
    places: "환자 격리소, 청등사",
    chars: "봄이 모친, 환자들",
    isUnlocked: !1
}, {
    name: "흑사포",
    public: "태어날 때부터 죽을 때까지 얼굴을 가리기 위해 쓰는 검은 천.",
    clue: "천 안쪽에 알 수 없는 문자가 적혀있다.",
    secret: "사실 낯병의 전염을 막는 것이 아니라, 얼굴이 지워지는 과정을 감추기 위한 시각적 기만과 통제 수단.",
    places: "면포장",
    chars: "포현 류가온",
    isUnlocked: !1
}, {
    name: "월정",
    public: "마을 한가운데 있는 보름달이 비치는 깊은 우물. 생명수이자 신앙의 대상.",
    clue: "월정의 우물에서는 썩은 냄새와 탁한 물이 고여있다.",
    secret: "최초의 낯병 환자 혹은 거대한 원념이 가라앉은 곳. 마실수록 병을 늦추지만 동시에 저주에 속박된다.",
    places: "월정, 은면리 중심",
    chars: "산군, 진짜 무당",
    isUnlocked: !1
}, {
    name: "실제 이름",
    public: "혼례 전까지 절대 타인에게 말해서는 안 되는 금기의 요소.",
    clue: "혼례자에게만 평생의 이름을 기억할 것을 약속하며 알려준다.",
    secret: "이름이 혼의 닻 역할을 함. 서로의 이름을 제대로 알고 불러주는 것만이 영혼이 대체되는 낯병을 막을 유일한 구원.",
    places: "서당, 청등사",
    chars: "묵사 서문결",
    isUnlocked: !1
}];

function lM() {
    const [i, l] = Q.useState(Ac[0].name);
    return x.jsxs("section", {
        id: "dictionary",
        className: "py-24 px-6 sm:px-12 max-w-6xl mx-auto relative z-10",
        children: [x.jsx(ci, {
            title: "사전 (辭典)",
            subtitle: "당신이 도달한 진실과 아직 감춰진 비밀"
        }), x.jsxs("div", {
            className: "flex flex-col md:flex-row gap-8 mt-12",
            children: [x.jsx("div", {
                className: "w-full md:w-1/3 space-y-2",
                children: Ac.map(s => x.jsxs("button", {
                    onClick: () => l(s.name),
                    className: Qe("w-full text-left px-5 py-4 border transition-all flex justify-between items-center", i === s.name ? "bg-bg-paper-dark text-wood border-wood font-bold" : "bg-ink/40 text-ghost border-transparent hover:bg-ink/60 hover:border-ghost/20"),
                    children: [x.jsx("span", {
                        className: "font-title text-lg tracking-wide",
                        children: s.name
                    }), !s.isUnlocked && x.jsx(ry, {
                        size: 14,
                        className: "opacity-50"
                    })]
                }, s.name))
            }), x.jsx("div", {
                className: "w-full md:w-2/3",
                children: x.jsx(B0, {
                    mode: "wait",
                    children: Ac.map(s => s.name === i && x.jsxs(Wt.div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            scale: .98
                        },
                        className: "bg-ink border border-ghost/20 p-8 md:p-12 min-h-[400px] relative",
                        children: [x.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-bg-dark/80 to-transparent pointer-events-none"
                        }), x.jsxs("div", {
                            className: "relative z-10 flex flex-col h-full",
                            children: [x.jsx("h3", {
                                className: "text-3xl md:text-5xl font-title text-lantern mb-8 pb-4 border-b border-ghost/20",
                                children: s.name
                            }), x.jsxs("div", {
                                className: "space-y-8 font-body text-ghost/90 flex-grow",
                                children: [x.jsxs("div", {
                                    children: [x.jsx("h4", {
                                        className: "text-[10px] text-ghost/60 tracking-widest mb-3 uppercase",
                                        children: "Public Record"
                                    }), x.jsx("p", {
                                        className: "bg-bg-dark p-4 border border-ghost/10 text-sm leading-relaxed",
                                        children: s.public
                                    })]
                                }), x.jsxs("div", {
                                    children: [x.jsx("h4", {
                                        className: "text-[10px] text-lantern/70 tracking-widest mb-3 uppercase",
                                        children: "Suspected Clues"
                                    }), x.jsx("p", {
                                        className: "px-4 text-sm italic opacity-80 border-l-2 border-lantern/30",
                                        children: s.clue
                                    })]
                                }), x.jsxs("div", {
                                    children: [x.jsxs("h4", {
                                        className: "text-[10px] text-talisman tracking-widest mb-3 uppercase flex items-center gap-2",
                                        children: [s.isUnlocked ? x.jsx(dv, {
                                            size: 12
                                        }) : x.jsx(ry, {
                                            size: 12
                                        }), "Locked Truth"]
                                    }), s.isUnlocked ? x.jsx("p", {
                                        className: "bg-talisman/10 text-talisman p-4 border border-talisman/30 text-sm leading-relaxed",
                                        children: s.secret
                                    }) : x.jsxs("div", {
                                        className: "bg-black/80 border border-dashed border-ghost/20 relative overflow-hidden flex items-center justify-center p-6 min-h-[80px]",
                                        children: [x.jsx("div", {
                                            className: "absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm text-[10px] tracking-widest text-talisman uppercase",
                                            children: "LOCKED_DATA"
                                        }), x.jsx("p", {
                                            className: "opacity-10 blur-sm text-sm select-none",
                                            children: "이 내용은 그믐밤 또는 단서 조사를 통해서만 밝혀집니다. 알면 다침."
                                        })]
                                    })]
                                })]
                            }), x.jsxs("div", {
                                className: "pt-6 mt-8 border-t border-ghost/10 text-[10px] uppercase tracking-widest flex gap-8 opacity-60",
                                children: [x.jsxs("span", {
                                    children: [x.jsx("strong", {
                                        className: "text-ghost",
                                        children: "Location /"
                                    }), " ", s.places]
                                }), x.jsxs("span", {
                                    children: [x.jsx("strong", {
                                        className: "text-ghost",
                                        children: "Entity /"
                                    }), " ", s.chars]
                                })]
                            })]
                        })]
                    }, s.name))
                })
            })]
        })]
    })
}

function sM() {
    return x.jsxs("footer", {
        className: "h-auto md:h-20 border-t border-ghost/10 bg-bg-dark px-6 md:px-8 py-6 md:py-0 flex flex-col md:flex-row items-center justify-between z-50 relative mt-20",
        children: [x.jsxs("div", {
            className: "flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start text-center md:text-left mb-6 md:mb-0",
            children: [x.jsxs("div", {
                className: "text-[10px]",
                children: [x.jsx("span", {
                    className: "text-talisman font-bold uppercase tracking-widest mr-2",
                    children: "금기 01."
                }), x.jsx("span", {
                    className: "text-ghost/80",
                    children: "흑사포는 태어날 때부터 죽을 때까지 착용한다."
                })]
            }), x.jsxs("div", {
                className: "text-[10px]",
                children: [x.jsx("span", {
                    className: "text-talisman font-bold uppercase tracking-widest mr-2",
                    children: "금기 02."
                }), x.jsx("span", {
                    className: "text-ghost/80",
                    children: "실제 이름은 ���례자 외에 공개하지 않는다."
                })]
            }), x.jsxs("div", {
                className: "text-[10px]",
                children: [x.jsx("span", {
                    className: "text-talisman font-bold uppercase tracking-widest mr-2",
                    children: "금기 03."
                }), x.jsx("span", {
                    className: "text-ghost/80",
                    children: "그믐밤에는 함부로 마을 밖을 돌아다녀서는 안된다."
                })]
            })]
        }), x.jsxs("div", {
            className: "text-center md:text-right",
            children: [x.jsx("p", {
                className: "text-[10px] opacity-40 mb-1",
                children: "이름을 잊은 자들이 우물 아래에서 부른다."
            }), x.jsx("p", {
                className: "text-[10px] text-ghost italic tracking-widest",
                children: "가면을 벗기는 것은 고백이고, 이름을 기억하는 것은 구원이다."
            })]
        })]
    })
}

function oM() {
    return x.jsxs("div", {
        className: "relative min-h-screen pt-16",
        children: [x.jsx(qA, {}), x.jsxs("header", {
            className: "fixed top-0 left-0 right-0 h-16 border-b border-ghost/20 flex items-center justify-between px-4 md:px-8 bg-bg-dark/80 backdrop-blur-sm z-50",
            children: [x.jsxs("div", {
                className: "flex items-center gap-4",
                children: [x.jsx("div", {
                    className: "w-8 h-8 md:w-10 md:h-10 border border-talisman rotate-45 flex items-center justify-center bg-ink",
                    children: x.jsx("span", {
                        className: "-rotate-45 text-talisman font-bold text-lg md:text-xl font-title",
                        children: "銀"
                    })
                }), x.jsxs("div", {
                    className: "hidden sm:block",
                    children: [x.jsxs("h1", {
                        className: "text-lg md:text-xl tracking-widest font-bold text-ghost font-title",
                        children: ["은면리 ", x.jsx("span", {
                            className: "text-xs font-normal opacity-60 ml-2 font-body",
                            children: "| 銀面里"
                        })]
                    }), x.jsx("p", {
                        className: "text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-talisman font-body",
                        children: "낯병의 저주에 걸린 숨겨진 마을"
                    })]
                })]
            }), x.jsxs("div", {
                className: "flex items-center gap-3 md:gap-6",
                children: [x.jsxs("div", {
                    className: "hidden md:flex items-center gap-2 px-3 py-1 bg-ghost/5 border border-ghost/10 rounded-full text-[10px] md:text-xs",
                    children: [x.jsx("span", {
                        className: "w-2 h-2 rounded-full bg-lantern shadow-[0_0_8px_#E6AF2E]"
                    }), x.jsx("span", {
                        className: "font-title",
                        children: "보름 (Full Moon) : 저주가 약해짐"
                    })]
                }), x.jsx("a", {
                    href: "https://crack.wrtn.ai/detail/6a04153e4a59cb34a2664f6a",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "px-3 py-1.5 md:px-4 md:py-1.5 border border-talisman text-talisman text-[10px] md:text-xs hover:bg-talisman hover:text-white transition-all uppercase tracking-widest",
                    children: "구원하러 가기"
                })]
            })]
        }), x.jsxs("main", {
            className: "relative z-10 font-body",
            children: [x.jsx(UE, {}), x.jsx(LE, {}), x.jsx(HE, {}), x.jsx(YE, {}), x.jsx(XE, {}), x.jsx(ZE, {}), x.jsx(QE, {}), x.jsx(aM, {}), x.jsx(lM, {}), x.jsx("div", {
                className: "py-24 flex justify-center",
                children: x.jsxs("a", {
                    href: "https://crack.wrtn.ai/detail/6a04153e4a59cb34a2664f6a",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "group relative inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-6 bg-transparent border border-talisman/50 text-talisman font-title text-xl md:text-2xl tracking-widest overflow-hidden transition-all hover:border-talisman hover:shadow-[0_0_20px_rgba(139,37,30,0.4)]",
                    children: [x.jsx("span", {
                        className: "absolute inset-0 bg-talisman/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"
                    }), x.jsx("span", {
                        className: "relative z-10 group-hover:text-talisman-light",
                        children: "구원하러 가기"
                    })]
                })
            }), x.jsx(sM, {})]
        })]
    })
}
