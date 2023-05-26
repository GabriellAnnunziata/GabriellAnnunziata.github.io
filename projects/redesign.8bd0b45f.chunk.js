(this["webpackJsonpsupah-cv"] = this["webpackJsonpsupah-cv"] || []).push([[0], {
    53: function (e, s) { }, 73: function (e, s, a) { }, 74: function (e, s, a) {
        "use strict"; a.r(s); var t = a(1), i = a(23), n = a.n(i), c = a(2),
            o = a(24), h = a.n(o), m = a(0), d = function (e) { var s = e.link, a = e.name, i = e.image, n = Object(t.useRef)(), r = Object(t.useRef)(), l = Object(t.useRef)(); return Object(m.jsxs)("a", { ref: n, onMouseEnter: function (e) { var s = n.current.getBoundingClientRect(), a = e.clientY < s.y + s.height / 2; c.a.to(l.current, { x: "2rem", duration: .5, ease: "power3.out" }), c.a.fromTo(r.current, { scaleY: 0, transformOrigin: a ? "0 0" : "0 100%" }, { scale: 1, duration: .5, ease: "power3.out" }) }, onMouseLeave: function (e) { var s = n.current.getBoundingClientRect(), a = e.clientY < s.y + s.height / 2; c.a.killTweensOf([r.current, l.current]), c.a.to(l.current, { x: 0, duration: .3, ease: "power3.out" }), c.a.to(r.current, { scaleY: 0, transformOrigin: a ? "0 0" : "0 100%", duration: .7, ease: "power3.out" }) }, href: s, target: "", children: [i && Object(m.jsx)("img", { src: i, alt: a }), Object(m.jsx)("span", { className: "link", ref: l, children: h()(a) }), Object(m.jsx)("span", { className: "overlay", ref: r })] }) }, w = a(76), g = function () {
                var e = Object(t.useRef)(), s = Object(t.useRef)(), a = Object(t.useRef)(), i = Object(t.useRef)(), n = function () { var a = e.current.clientWidth, t = 121 * a / 874.13; s.current.style.width = "".concat(a, "px"), s.current.style.height = "".concat(t, "px") };
                return Object(t.useEffect)((
                    function () {
                        n();
                        for (var e = c.a.timeline({ delay: .5 }), t = 0; t < i.current.children.length; t++) { var r = i.current.children[t], l = r.getTotalLength(); r.style.strokeDasharray = l, r.style.strokeDashoffset = l, e.to(r, { strokeDashoffset: 0, ease: "power3.out", duration: 1.3 }, "<=0.1") } c.a.set(s.current, { opacity: 1 }), c.a.to(a.current, { opacity: 1, delay: 2, ease: "power3.out", duration: 2 })
                    }), []),
                    Object(w.a)("resize", n), Object(m.jsxs)("div", {
                        ref: e, children: [
                            Object(m.jsxs)("svg", {
                                ref: s, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 874.13 121", style: { opacity: 0 }, children: [Object(m.jsx)("title", { children: Object(m.jsx)("h1", { children: "Unori - Gabriella Annunziata" }) }), Object(m.jsxs)("g", {
                                    id: "animate", ref: i, children: [
                                        Object(m.jsx)("line", { className: "cls-1", x1: "9.37", x2: "9.37", y2: "121" }),
                                        Object(m.jsx)("line", { className: "cls-1", y1: "58.56", x2: "95.13", y2: "58.56" }),
                                        Object(m.jsx)("line", { className: "cls-1", x1: "85.48", x2: "85.48", y2: "120.56" }),
                                        Object(m.jsx)("path", { className: "cls-1", d: "M110.81,74.94h76.45s0-35.2-31.63-35.2c0,0-34.26-1.88-34.26,33.88,0,0-.18,39.91,34.26,39.91,27.59,0,31.63-24.47,31.63-24.47" }),
                                        Object(m.jsx)("line", { className: "cls-1", x1: "222.34", x2: "222.34", y2: "121.21" }),
                                        Object(m.jsx)("line", { className: "cls-1", x1: "262.34", x2: "262.34", y2: "121.21" }),
                                        Object(m.jsx)("path", { className: "cls-1", d: "M325.09,41H334c19.44.69,33.08,15.37,33.08,35.75,0,20.88-14.31,35.78-34.52,35.78-20.37,0-34.52-14.9-34.52-35.78,0-20.1,13.12-34.67,32.28-35.72" }), false]
                                }),
                                Object(m.jsxs)("g", {
                                    children: [
                                        Object(m.jsx)("path", { className: "cls-3", d: "M.17-69.87H-69.46v276.7h1021V-69.87ZM860.08,1.35l13.85,13.9-48,48L811.51,48.78,858.94,1.35ZM95.31,119.21H75.44V66.34H19.87v52.87H.17V1.35h19.7V49H75.44V1.35H95.31ZM196,81.21H131.17C132.85,95.86,142.28,105,155.75,105c11.12,0,19-5.22,21.22-14.48l17.34,4.38c-4.54,16.33-19,25.76-38.89,25.76-26.94,0-42.27-20.88-42.27-43.78S127.63,33,154.58,33c27.27,0,41.75,19.87,41.75,40.58,0,2.53-.16,6.06-.33,7.58Zm35.69,38.05H213.34V1.35h18.35Zm40.08,0H253.41V1.35h18.36Zm61,1.35c-25.59,0-43.78-18.35-43.78-43.78S307.17,33,332.72,33,376.5,51.36,376.5,76.78s-18.33,43.78-43.78,43.78ZM504.17,74.52a45.72,45.72,0,0" })]
                                })
                                ]
                            }),
                        ]
                    })
            }, p = (a(73), function () {
                Object(t.useEffect)((function () { c.a.to("section", { opacity: 1, delay: 3, ease: "power3.out", duration: 2 }) }), []); return Object(m.jsxs)("div", {
                    children: [Object(m.jsx)(g, {}),

                    Object(m.jsxs)("section", {
                        children: [
                            Object(m.jsx)("h2", { children: "Redesign" }),
                            Object(m.jsxs)("row", {
                                children: [
                                    Object(m.jsxs)("column", {
                                        children: [
                                            Object(m.jsx)("img", { className: "projectImg", src: "/images/Redesign.webp", alt: "Redesign Project Poster Descriptor" }),
                                        ]
                                    }),
                                    Object(m.jsxs)("column", {
                                        children: [
                                            Object(m.jsxs)("ul", {
                                                class: "intro", children: [
                                                    Object(m.jsx)("strong", { children: "Role: Project Manager, Developer" }),
                                                    Object(m.jsx)("br", {}), "In this project, I had the opportunity to undertake the redesign of the Trenitalia mobile app, taking into consideration the Human Interface Guidelines.",
                                                    Object(m.jsx)("br", {}), "Drawing from my personal experience as a user of this app, I identified areas for improvement in the user experience (UX) and aimed to align it more closely with Apple's native design principles.",
                                                    Object(m.jsx)("br", {}), "I focused on creating intuitive navigation flows, optimizing the layout and information architecture, and refining the interaction patterns. By incorporating Apple's design language, I aimed to provide a familiar and seamless experience to users, ensuring that the app felt native to the iOS ecosystem.",
                                                    Object(m.jsx)("br", {}), "In addition to the design aspects, I also took an active role in coding and development. This hands-on experience allowed me to deepen my understanding of SwiftUI and become proficient in utilizing its various components."
                                                ]
                                            })
                                        ]
                                    }),
                                ]
                            }),
                        ]
                    }),
                    Object(m.jsx)("br", {}),
                    Object(m.jsx)("br", {}),
                    Object(m.jsx)("br", {}),
                    Object(m.jsxs)("ul", {
                        class: "no-border", children: [
                            Object(m.jsx)("li", {
                                children:
                                    Object(m.jsx)(d, { link: "/", name: "Back to Home" })
                            })]
                    })
                    ]
                })
            }), b = document.getElementById("root"); n.a.render(Object(m.jsx)(t.StrictMode, { children: Object(m.jsx)(p, {}) }), b)
    }
}, [[74, 1, 2]]]);
//# sourceMappingURL=main.8bd0b45f.chunk.js.map