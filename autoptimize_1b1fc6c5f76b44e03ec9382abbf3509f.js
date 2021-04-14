window._wpemojiSettings = {
    baseUrl: "https://s.w.org/images/core/emoji/13.0.1/72x72/",
    ext: ".png",
    svgUrl: "https://s.w.org/images/core/emoji/13.0.1/svg/",
    svgExt: ".svg"
};
!(function(e, a, t) {
    var n, r, o, i = a.createElement("canvas"), p = i.getContext && i.getContext("2d");
    function s(e, t) {
        var a = String.fromCharCode;
        p.clearRect(0, 0, i.width, i.height),
        p.fillText(a.apply(this, e), 0, 0);
        e = i.toDataURL();
        return p.clearRect(0, 0, i.width, i.height),
        p.fillText(a.apply(this, t), 0, 0),
        e === i.toDataURL();
    }
    function c(e) {
        var t = a.createElement("script");
        (t.src = e),
        (t.defer = t.type = "text/javascript"),
        a.getElementsByTagName("head")[0].appendChild(t);
    }
    for (o = Array("flag", "emoji"),
    t.supports = {
        everything: !0,
        everythingExceptFlag: !0
    },
    r = 0; r < o.length; r++)
        (t.supports[o[r]] = (function(e) {
            if (!p || !p.fillText)
                return !1;
            switch (((p.textBaseline = "top"),
            (p.font = "600 32px Arial"),
            e)) {
            case "flag":
                return s([127987, 65039, 8205, 9895, 65039], [127987, 65039, 8203, 9895, 65039]) ? !1 : !s([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819]) && !s([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]);
            case "emoji":
                return !s([55357, 56424, 8205, 55356, 57212], [55357, 56424, 8203, 55356, 57212]);
            }
            return !1;
        }
        )(o[r])),
        (t.supports.everything = t.supports.everything && t.supports[o[r]]),
        "flag" !== o[r] && (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && t.supports[o[r]]);
    (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag),
    (t.DOMReady = !1),
    (t.readyCallback = function() {
        t.DOMReady = !0;
    }
    ),
    t.supports.everything || ((n = function() {
        t.readyCallback();
    }
    ),
    a.addEventListener ? (a.addEventListener("DOMContentLoaded", n, !1),
    e.addEventListener("load", n, !1)) : (e.attachEvent("onload", n),
    a.attachEvent("onreadystatechange", function() {
        "complete" === a.readyState && t.readyCallback();
    })),
    (n = t.source || {}).concatemoji ? c(n.concatemoji) : n.wpemoji && n.twemoji && (c(n.twemoji),
    c(n.wpemoji)));
}
)(window, document, window._wpemojiSettings);
/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
(function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e, window);
    }) : "object" == typeof module && module.exports ? (module.exports = t(require("jquery"), window)) : t(jQuery, window);
}
)(function(s, n) {
    "use strict";
    function e(e) {
        return (0 <= (function(e, t) {
            for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], i = 1; i <= 3; i++) {
                if (+o[i] < +n[i])
                    return 1;
                if (+n[i] < +o[i])
                    return -1;
            }
            return 0;
        }
        )(s.fn.jquery, e));
    }
    (s.migrateVersion = "3.3.2"),
    n.console && n.console.log && ((s && e("3.0.0")) || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
    s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
    n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
    var r = {};
    function u(e) {
        var t = n.console;
        (s.migrateDeduplicateWarnings && r[e]) || ((r[e] = !0),
        s.migrateWarnings.push(e),
        t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e),
        s.migrateTrace && t.trace && t.trace()));
    }
    function t(e, t, r, n) {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return u(n),
                r;
            },
            set: function(e) {
                u(n),
                (r = e);
            },
        });
    }
    function o(e, t, r, n) {
        e[t] = function() {
            return u(n),
            r.apply(this, arguments);
        }
        ;
    }
    (s.migrateDeduplicateWarnings = !0),
    (s.migrateWarnings = []),
    void 0 === s.migrateTrace && (s.migrateTrace = !0),
    (s.migrateReset = function() {
        (r = {}),
        (s.migrateWarnings.length = 0);
    }
    ),
    "BackCompat" === n.document.compatMode && u("jQuery is not compatible with Quirks Mode");
    var i, a, c, d = {}, l = s.fn.init, p = s.find, f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (i in ((s.fn.init = function(e) {
        var t = Array.prototype.slice.call(arguments);
        return "string" == typeof e && "#" === e && (u("jQuery( '#' ) is not a valid selector"),
        (t[0] = [])),
        l.apply(this, t);
    }
    ),
    (s.fn.init.prototype = s.fn),
    (s.find = function(t) {
        var r = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && f.test(t))
            try {
                n.document.querySelector(t);
            } catch (e) {
                t = t.replace(y, function(e, t, r, n) {
                    return "[" + t + r + '"' + n + '"]';
                });
                try {
                    n.document.querySelector(t),
                    u("Attribute selector with '#' must be quoted: " + r[0]),
                    (r[0] = t);
                } catch (e) {
                    u("Attribute selector with '#' was not fixed: " + r[0]);
                }
            }
        return p.apply(this, r);
    }
    ),
    p))
        Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
    o(s.fn, "size", function() {
        return this.length;
    }, "jQuery.fn.size() is deprecated and removed; use the .length property"),
    o(s, "parseJSON", function() {
        return JSON.parse.apply(null, arguments);
    }, "jQuery.parseJSON is deprecated; use JSON.parse"),
    o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"),
    o(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"),
    t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),
    t(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),
    e("3.1.1") && o(s, "trim", function(e) {
        return null == e ? "" : (e + "").replace(m, "");
    }, "jQuery.trim is deprecated; use String.prototype.trim"),
    e("3.2.0") && (o(s, "nodeName", function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }, "jQuery.nodeName is deprecated"),
    o(s, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")),
    e("3.3.0") && (o(s, "isNumeric", function(e) {
        var t = typeof e;
        return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e));
    }, "jQuery.isNumeric() is deprecated"),
    s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        d["[object " + t + "]"] = t.toLowerCase();
    }),
    o(s, "type", function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[Object.prototype.toString.call(e)] || "object" : typeof e;
    }, "jQuery.type is deprecated"),
    o(s, "isFunction", function(e) {
        return "function" == typeof e;
    }, "jQuery.isFunction() is deprecated"),
    o(s, "isWindow", function(e) {
        return null != e && e === e.window;
    }, "jQuery.isWindow() is deprecated")),
    s.ajax && ((a = s.ajax),
    (c = /(=)\?(?=&|$)|\?\?/),
    (s.ajax = function() {
        var e = a.apply(this, arguments);
        return (e.promise && (o(e, "success", e.done, "jQXHR.success is deprecated and removed"),
        o(e, "error", e.fail, "jQXHR.error is deprecated and removed"),
        o(e, "complete", e.always, "jQXHR.complete is deprecated and removed")),
        e);
    }
    ),
    e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
        !1 !== e.jsonp && (c.test(e.url) || ("string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && c.test(e.data))) && u("JSON-to-JSONP auto-promotion is deprecated");
    }));
    var g = s.fn.removeAttr
      , h = s.fn.toggleClass
      , v = /\S+/g;
    function j(e) {
        return e.replace(/-([a-z])/g, function(e, t) {
            return t.toUpperCase();
        });
    }
    s.fn.removeAttr = function(e) {
        var r = this;
        return (s.each(e.match(v), function(e, t) {
            s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t),
            r.prop(t, !1));
        }),
        g.apply(this, arguments));
    }
    ;
    var Q, b = !(s.fn.toggleClass = function(t) {
        return void 0 !== t && "boolean" != typeof t ? h.apply(this, arguments) : (u("jQuery.fn.toggleClass( boolean ) is deprecated"),
        this.each(function() {
            var e = (this.getAttribute && this.getAttribute("class")) || "";
            e && s.data(this, "__className__", e),
            this.setAttribute && this.setAttribute("class", (!e && !1 !== t && s.data(this, "__className__")) || "");
        }));
    }
    ), w = /^[a-z]/, x = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r && (s.cssHooks[t].get = function() {
            var e;
            return (b = !0),
            (e = r.apply(this, arguments)),
            (b = !1),
            e;
        }
        );
    }),
    (s.swap = function(e, t, r, n) {
        var o, i, a = {};
        for (i in (b || u("jQuery.swap() is undocumented and deprecated"),
        t))
            (a[i] = e.style[i]),
            (e.style[i] = t[i]);
        for (i in ((o = r.apply(e, n || [])),
        t))
            e.style[i] = a[i];
        return o;
    }
    ),
    e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {},{
        set: function() {
            return u("JQMIGRATE: jQuery.cssProps is deprecated"),
            Reflect.set.apply(this, arguments);
        },
    })),
    s.cssNumber || (s.cssNumber = {}),
    (Q = s.fn.css),
    (s.fn.css = function(e, t) {
        var r, n, o = this;
        return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
            s.fn.css.call(o, e, t);
        }),
        this) : ("number" == typeof t && ((r = j(e)),
        (n = r),
        (w.test(n) && x.test(n[0].toUpperCase() + n.slice(1))) || s.cssNumber[r] || u('Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')),
        Q.apply(this, arguments));
    }
    );
    var A, k, S, M, N = s.data;
    (s.data = function(e, t, r) {
        var n, o, i;
        if (t && "object" == typeof t && 2 === arguments.length) {
            for (i in ((n = s.hasData(e) && N.call(this, e)),
            (o = {}),
            t))
                i !== j(i) ? (u("jQuery.data() always sets/gets camelCased names: " + i),
                (n[i] = t[i])) : (o[i] = t[i]);
            return N.call(this, e, o),
            t;
        }
        return t && "string" == typeof t && t !== j(t) && (n = s.hasData(e) && N.call(this, e)) && t in n ? (u("jQuery.data() always sets/gets camelCased names: " + t),
        2 < arguments.length && (n[t] = r),
        n[t]) : N.apply(this, arguments);
    }
    ),
    s.fx && ((S = s.Tween.prototype.run),
    (M = function(e) {
        return e;
    }
    ),
    (s.Tween.prototype.run = function() {
        1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"),
        (s.easing[this.easing] = M)),
        S.apply(this, arguments);
    }
    ),
    (A = s.fx.interval || 13),
    (k = "jQuery.fx.interval is deprecated"),
    n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return n.document.hidden || u(k),
            A;
        },
        set: function(e) {
            u(k),
            (A = e);
        },
    }));
    var R = s.fn.load
      , H = s.event.add
      , C = s.event.fix;
    (s.event.props = []),
    (s.event.fixHooks = {}),
    t(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"),
    (s.event.fix = function(e) {
        var t, r = e.type, n = this.fixHooks[r], o = s.event.props;
        if (o.length) {
            u("jQuery.event.props are deprecated and removed: " + o.join());
            while (o.length)
                s.event.addProp(o.pop());
        }
        if (n && !n._migrated_ && ((n._migrated_ = !0),
        u("jQuery.event.fixHooks are deprecated and removed: " + r),
        (o = n.props) && o.length))
            while (o.length)
                s.event.addProp(o.pop());
        return (t = C.call(this, e)),
        n && n.filter ? n.filter(t, e) : t;
    }
    ),
    (s.event.add = function(e, t) {
        return e === n && "load" === t && "complete" === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"),
        H.apply(this, arguments);
    }
    ),
    s.each(["load", "unload", "error"], function(e, t) {
        s.fn[t] = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === t && "string" == typeof e[0] ? R.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"),
            e.splice(0, 0, t),
            arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e),
            this));
        }
        ;
    }),
    s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
        s.fn[r] = function(e, t) {
            return u("jQuery.fn." + r + "() event shorthand is deprecated"),
            0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r);
        }
        ;
    }),
    s(function() {
        s(n.document).triggerHandler("ready");
    }),
    (s.event.special.ready = {
        setup: function() {
            this === n.document && u("'ready' event is deprecated");
        },
    }),
    s.fn.extend({
        bind: function(e, t, r) {
            return u("jQuery.fn.bind() is deprecated"),
            this.on(e, null, t, r);
        },
        unbind: function(e, t) {
            return u("jQuery.fn.unbind() is deprecated"),
            this.off(e, null, t);
        },
        delegate: function(e, t, r, n) {
            return u("jQuery.fn.delegate() is deprecated"),
            this.on(t, e, r, n);
        },
        undelegate: function(e, t, r) {
            return u("jQuery.fn.undelegate() is deprecated"),
            1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r);
        },
        hover: function(e, t) {
            return u("jQuery.fn.hover() is deprecated"),
            this.on("mouseenter", e).on("mouseleave", t || e);
        },
    });
    function T(e) {
        var t = n.document.implementation.createHTMLDocument("");
        return (t.body.innerHTML = e),
        t.body && t.body.innerHTML;
    }
    function P(e) {
        var t = e.replace(O, "<$1></$2>");
        t !== e && T(e) !== T(t) && u("HTML tags must be properly nested and closed: " + e);
    }
    var O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , q = s.htmlPrefilter;
    (s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
        s.htmlPrefilter = function(e) {
            return P(e),
            e.replace(O, "<$1></$2>");
        }
        ;
    }
    ),
    (s.htmlPrefilter = function(e) {
        return P(e),
        q(e);
    }
    );
    var D, _ = s.fn.offset;
    (s.fn.offset = function() {
        var e = this[0];
        return !e || (e.nodeType && e.getBoundingClientRect) ? _.apply(this, arguments) : (u("jQuery.fn.offset() requires a valid DOM element"),
        arguments.length ? this : void 0);
    }
    ),
    s.ajax && ((D = s.param),
    (s.param = function(e, t) {
        var r = s.ajaxSettings && s.ajaxSettings.traditional;
        return void 0 === t && r && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),
        (t = r)),
        D.call(this, e, t);
    }
    ));
    var E, F, J = s.fn.andSelf || s.fn.addBack;
    return ((s.fn.andSelf = function() {
        return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),
        J.apply(this, arguments);
    }
    ),
    s.Deferred && ((E = s.Deferred),
    (F = [["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"], ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"], ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")], ]),
    (s.Deferred = function(e) {
        var i = E()
          , a = i.promise();
        return ((i.pipe = a.pipe = function() {
            var o = arguments;
            return (u("deferred.pipe() is deprecated"),
            s.Deferred(function(n) {
                s.each(F, function(e, t) {
                    var r = "function" == typeof o[e] && o[e];
                    i[t[1]](function() {
                        var e = r && r.apply(this, arguments);
                        e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === a ? n.promise() : this, r ? [e] : arguments);
                    });
                }),
                (o = null);
            }).promise());
        }
        ),
        e && e.call(i, i),
        i);
    }
    ),
    (s.Deferred.exceptionHook = E.exceptionHook)),
    s);
});

(function() {
    if (typeof window.CustomEvent === "function")
        return false;
    function CustomEvent(event, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        var evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
}
)();
(function($) {
    "use strict";
    var container, button, menu, links, i, len;
    container = document.getElementById("site-navigation");
    if (!container) {
        return;
    }
    button = container.getElementsByTagName("button")[0];
    if ("undefined" === typeof button) {
        return;
    }
    menu = container.getElementsByTagName("ul")[0];
    if ("undefined" === typeof menu) {
        button.style.display = "none";
        return;
    }
    menu.setAttribute("aria-expanded", "false");
    if (-1 === menu.className.indexOf("nav-menu")) {
        menu.className += " nav-menu";
    }
    button.onclick = function() {
        if (-1 !== container.className.indexOf("toggled")) {
            container.className = container.className.replace(" toggled", "");
            button.setAttribute("aria-expanded", "false");
            menu.setAttribute("aria-expanded", "false");
        } else {
            container.className += " toggled";
            button.setAttribute("aria-expanded", "true");
            menu.setAttribute("aria-expanded", "true");
        }
    }
    ;
    links = menu.getElementsByTagName("a");
    for (i = 0,
    len = links.length; i < len; i++) {
        links[i].addEventListener("focus", toggleFocus, true);
        links[i].addEventListener("blur", toggleFocus, true);
    }
    function toggleFocus() {
        var self = this;
        while (-1 === self.className.indexOf("nav-menu")) {
            if ("li" === self.tagName.toLowerCase()) {
                if (-1 !== self.className.indexOf("focus")) {
                    self.className = self.className.replace(" focus", "");
                } else {
                    self.className += " focus";
                }
            }
            self = self.parentElement;
        }
    }
    (function(container) {
        var touchStartFn, i, parentLink = container.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");
        if ("ontouchstart"in window) {
            touchStartFn = function(e) {
                var menuItem = this.parentNode, i;
                if (!menuItem.classList.contains("focus")) {
                    e.preventDefault();
                    for (i = 0; i < menuItem.parentNode.children.length; ++i) {
                        if (menuItem === menuItem.parentNode.children[i]) {
                            continue;
                        }
                        menuItem.parentNode.children[i].classList.remove("focus");
                    }
                    menuItem.classList.add("focus");
                } else {
                    menuItem.classList.remove("focus");
                }
            }
            ;
            for (i = 0; i < parentLink.length; ++i) {
                parentLink[i].addEventListener("touchstart", touchStartFn, false);
            }
        }
    }
    )(container);
}
)();
(function($) {
    "use strict";
    var isIe = /(trident|msie)/i.test(navigator.userAgent);
    if (isIe && document.getElementById && window.addEventListener) {
        window.addEventListener("hashchange", function() {
            var id = location.hash.substring(1), element;
            if (!/^[A-z0-9_-]+$/.test(id)) {
                return;
            }
            element = document.getElementById(id);
            if (element) {
                if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
                    element.tabIndex = -1;
                }
                element.focus();
            }
        }, false);
    }
}
)();
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(global, factory) {
    if (typeof define == "function" && define.amd) {
        define("ev-emitter/ev-emitter", factory);
    } else if (typeof module == "object" && module.exports) {
        module.exports = factory();
    } else {
        global.EvEmitter = factory();
    }
}
)(typeof window != "undefined" ? window : this, function() {
    function EvEmitter() {}
    var proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
        if (!eventName || !listener) {
            return;
        }
        var events = (this._events = this._events || {});
        var listeners = (events[eventName] = events[eventName] || []);
        if (listeners.indexOf(listener) == -1) {
            listeners.push(listener);
        }
        return this;
    }
    ;
    proto.once = function(eventName, listener) {
        if (!eventName || !listener) {
            return;
        }
        this.on(eventName, listener);
        var onceEvents = (this._onceEvents = this._onceEvents || {});
        var onceListeners = (onceEvents[eventName] = onceEvents[eventName] || {});
        onceListeners[listener] = true;
        return this;
    }
    ;
    proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
            return;
        }
        var index = listeners.indexOf(listener);
        if (index != -1) {
            listeners.splice(index, 1);
        }
        return this;
    }
    ;
    proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
            return;
        }
        listeners = listeners.slice(0);
        args = args || [];
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i];
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                this.off(eventName, listener);
                delete onceListeners[listener];
            }
            listener.apply(this, args);
        }
        return this;
    }
    ;
    proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
    }
    ;
    return EvEmitter;
});
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
(function(window, factory) {
    if (typeof define == "function" && define.amd) {
        define("get-size/get-size", factory);
    } else if (typeof module == "object" && module.exports) {
        module.exports = factory();
    } else {
        window.getSize = factory();
    }
}
)(window, function factory() {
    "use strict";
    function getStyleSize(value) {
        var num = parseFloat(value);
        var isValid = value.indexOf("%") == -1 && !isNaN(num);
        return isValid && num;
    }
    function noop() {}
    var logError = typeof console == "undefined" ? noop : function(message) {
        console.error(message);
    }
    ;
    var measurements = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    var measurementsLength = measurements.length;
    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            size[measurement] = 0;
        }
        return size;
    }
    function getStyle(elem) {
        var style = getComputedStyle(elem);
        if (!style) {
            logError("Style returned " + style + ". Are you running this code in a hidden iframe on Firefox? " + "See https://bit.ly/getsizebug1");
        }
        return style;
    }
    var isSetup = false;
    var isBoxSizeOuter;
    function setup() {
        if (isSetup) {
            return;
        }
        isSetup = true;
        var div = document.createElement("div");
        div.style.width = "200px";
        div.style.padding = "1px 2px 3px 4px";
        div.style.borderStyle = "solid";
        div.style.borderWidth = "1px 2px 3px 4px";
        div.style.boxSizing = "border-box";
        var body = document.body || document.documentElement;
        body.appendChild(div);
        var style = getStyle(div);
        isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
        getSize.isBoxSizeOuter = isBoxSizeOuter;
        body.removeChild(div);
    }
    function getSize(elem) {
        setup();
        if (typeof elem == "string") {
            elem = document.querySelector(elem);
        }
        if (!elem || typeof elem != "object" || !elem.nodeType) {
            return;
        }
        var style = getStyle(elem);
        if (style.display == "none") {
            return getZeroSize();
        }
        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;
        var isBorderBox = (size.isBorderBox = style.boxSizing == "border-box");
        for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            var value = style[measurement];
            var num = parseFloat(value);
            size[measurement] = !isNaN(num) ? num : 0;
        }
        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;
        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
        var styleWidth = getStyleSize(style.width);
        if (styleWidth !== false) {
            size.width = styleWidth + (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
        }
        var styleHeight = getStyleSize(style.height);
        if (styleHeight !== false) {
            size.height = styleHeight + (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
        }
        size.innerWidth = size.width - (paddingWidth + borderWidth);
        size.innerHeight = size.height - (paddingHeight + borderHeight);
        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;
        return size;
    }
    return getSize;
});
(function(window, factory) {
    "use strict";
    if (typeof define == "function" && define.amd) {
        define("desandro-matches-selector/matches-selector", factory);
    } else if (typeof module == "object" && module.exports) {
        module.exports = factory();
    } else {
        window.matchesSelector = factory();
    }
}
)(window, function factory() {
    "use strict";
    var matchesMethod = (function() {
        var ElemProto = window.Element.prototype;
        if (ElemProto.matches) {
            return "matches";
        }
        if (ElemProto.matchesSelector) {
            return "matchesSelector";
        }
        var prefixes = ["webkit", "moz", "ms", "o"];
        for (var i = 0; i < prefixes.length; i++) {
            var prefix = prefixes[i];
            var method = prefix + "MatchesSelector";
            if (ElemProto[method]) {
                return method;
            }
        }
    }
    )();
    return function matchesSelector(elem, selector) {
        return elem[matchesMethod](selector);
    }
    ;
});
(function(window, factory) {
    if (typeof define == "function" && define.amd) {
        define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(matchesSelector) {
            return factory(window, matchesSelector);
        });
    } else if (typeof module == "object" && module.exports) {
        module.exports = factory(window, require("desandro-matches-selector"));
    } else {
        window.fizzyUIUtils = factory(window, window.matchesSelector);
    }
}
)(window, function factory(window, matchesSelector) {
    var utils = {};
    utils.extend = function(a, b) {
        for (var prop in b) {
            a[prop] = b[prop];
        }
        return a;
    }
    ;
    utils.modulo = function(num, div) {
        return ((num % div) + div) % div;
    }
    ;
    var arraySlice = Array.prototype.slice;
    utils.makeArray = function(obj) {
        if (Array.isArray(obj)) {
            return obj;
        }
        if (obj === null || obj === undefined) {
            return [];
        }
        var isArrayLike = typeof obj == "object" && typeof obj.length == "number";
        if (isArrayLike) {
            return arraySlice.call(obj);
        }
        return [obj];
    }
    ;
    utils.removeFrom = function(ary, obj) {
        var index = ary.indexOf(obj);
        if (index != -1) {
            ary.splice(index, 1);
        }
    }
    ;
    utils.getParent = function(elem, selector) {
        while (elem.parentNode && elem != document.body) {
            elem = elem.parentNode;
            if (matchesSelector(elem, selector)) {
                return elem;
            }
        }
    }
    ;
    utils.getQueryElement = function(elem) {
        if (typeof elem == "string") {
            return document.querySelector(elem);
        }
        return elem;
    }
    ;
    utils.handleEvent = function(event) {
        var method = "on" + event.type;
        if (this[method]) {
            this[method](event);
        }
    }
    ;
    utils.filterFindElements = function(elems, selector) {
        elems = utils.makeArray(elems);
        var ffElems = [];
        elems.forEach(function(elem) {
            if (!(elem instanceof HTMLElement)) {
                return;
            }
            if (!selector) {
                ffElems.push(elem);
                return;
            }
            if (matchesSelector(elem, selector)) {
                ffElems.push(elem);
            }
            var childElems = elem.querySelectorAll(selector);
            for (var i = 0; i < childElems.length; i++) {
                ffElems.push(childElems[i]);
            }
        });
        return ffElems;
    }
    ;
    utils.debounceMethod = function(_class, methodName, threshold) {
        threshold = threshold || 100;
        var method = _class.prototype[methodName];
        var timeoutName = methodName + "Timeout";
        _class.prototype[methodName] = function() {
            var timeout = this[timeoutName];
            clearTimeout(timeout);
            var args = arguments;
            var _this = this;
            this[timeoutName] = setTimeout(function() {
                method.apply(_this, args);
                delete _this[timeoutName];
            }, threshold);
        }
        ;
    }
    ;
    utils.docReady = function(callback) {
        var readyState = document.readyState;
        if (readyState == "complete" || readyState == "interactive") {
            setTimeout(callback);
        } else {
            document.addEventListener("DOMContentLoaded", callback);
        }
    }
    ;
    utils.toDashed = function(str) {
        return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
            return $1 + "-" + $2;
        }).toLowerCase();
    }
    ;
    var console = window.console;
    utils.htmlInit = function(WidgetClass, namespace) {
        utils.docReady(function() {
            var dashedNamespace = utils.toDashed(namespace);
            var dataAttr = "data-" + dashedNamespace;
            var dataAttrElems = document.querySelectorAll("[" + dataAttr + "]");
            var jsDashElems = document.querySelectorAll(".js-" + dashedNamespace);
            var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
            var dataOptionsAttr = dataAttr + "-options";
            var jQuery = window.jQuery;
            elems.forEach(function(elem) {
                var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
                var options;
                try {
                    options = attr && JSON.parse(attr);
                } catch (error) {
                    if (console) {
                        console.error("Error parsing " + dataAttr + " on " + elem.className + ": " + error);
                    }
                    return;
                }
                var instance = new WidgetClass(elem,options);
                if (jQuery) {
                    jQuery.data(elem, namespace, instance);
                }
            });
        });
    }
    ;
    return utils;
});
(function(window, factory) {
    if (typeof define == "function" && define.amd) {
        define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], factory);
    } else if (typeof module == "object" && module.exports) {
        module.exports = factory(require("ev-emitter"), require("get-size"));
    } else {
        window.Outlayer = {};
        window.Outlayer.Item = factory(window.EvEmitter, window.getSize);
    }
}
)(window, function factory(EvEmitter, getSize) {
    "use strict";
    function isEmptyObj(obj) {
        for (var prop in obj) {
            return false;
        }
        prop = null;
        return true;
    }
    var docElemStyle = document.documentElement.style;
    var transitionProperty = typeof docElemStyle.transition == "string" ? "transition" : "WebkitTransition";
    var transformProperty = typeof docElemStyle.transform == "string" ? "transform" : "WebkitTransform";
    var transitionEndEvent = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[transitionProperty];
    var vendorProperties = {
        transform: transformProperty,
        transition: transitionProperty,
        transitionDuration: transitionProperty + "Duration",
        transitionProperty: transitionProperty + "Property",
        transitionDelay: transitionProperty + "Delay",
    };
    function Item(element, layout) {
        if (!element) {
            return;
        }
        this.element = element;
        this.layout = layout;
        this.position = {
            x: 0,
            y: 0
        };
        this._create();
    }
    var proto = (Item.prototype = Object.create(EvEmitter.prototype));
    proto.constructor = Item;
    proto._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        };
        this.css({
            position: "absolute"
        });
    }
    ;
    proto.handleEvent = function(event) {
        var method = "on" + event.type;
        if (this[method]) {
            this[method](event);
        }
    }
    ;
    proto.getSize = function() {
        this.size = getSize(this.element);
    }
    ;
    proto.css = function(style) {
        var elemStyle = this.element.style;
        for (var prop in style) {
            var supportedProp = vendorProperties[prop] || prop;
            elemStyle[supportedProp] = style[prop];
        }
    }
    ;
    proto.getPosition = function() {
        var style = getComputedStyle(this.element);
        var isOriginLeft = this.layout._getOption("originLeft");
        var isOriginTop = this.layout._getOption("originTop");
        var xValue = style[isOriginLeft ? "left" : "right"];
        var yValue = style[isOriginTop ? "top" : "bottom"];
        var x = parseFloat(xValue);
        var y = parseFloat(yValue);
        var layoutSize = this.layout.size;
        if (xValue.indexOf("%") != -1) {
            x = (x / 100) * layoutSize.width;
        }
        if (yValue.indexOf("%") != -1) {
            y = (y / 100) * layoutSize.height;
        }
        x = isNaN(x) ? 0 : x;
        y = isNaN(y) ? 0 : y;
        x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
        y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
        this.position.x = x;
        this.position.y = y;
    }
    ;
    proto.layoutPosition = function() {
        var layoutSize = this.layout.size;
        var style = {};
        var isOriginLeft = this.layout._getOption("originLeft");
        var isOriginTop = this.layout._getOption("originTop");
        var xPadding = isOriginLeft ? "paddingLeft" : "paddingRight";
        var xProperty = isOriginLeft ? "left" : "right";
        var xResetProperty = isOriginLeft ? "right" : "left";
        var x = this.position.x + layoutSize[xPadding];
        style[xProperty] = this.getXValue(x);
        style[xResetProperty] = "";
        var yPadding = isOriginTop ? "paddingTop" : "paddingBottom";
        var yProperty = isOriginTop ? "top" : "bottom";
        var yResetProperty = isOriginTop ? "bottom" : "top";
        var y = this.position.y + layoutSize[yPadding];
        style[yProperty] = this.getYValue(y);
        style[yResetProperty] = "";
        this.css(style);
        this.emitEvent("layout", [this]);
    }
    ;
    proto.getXValue = function(x) {
        var isHorizontal = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !isHorizontal ? (x / this.layout.size.width) * 100 + "%" : x + "px";
    }
    ;
    proto.getYValue = function(y) {
        var isHorizontal = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && isHorizontal ? (y / this.layout.size.height) * 100 + "%" : y + "px";
    }
    ;
    proto._transitionTo = function(x, y) {
        this.getPosition();
        var curX = this.position.x;
        var curY = this.position.y;
        var didNotMove = x == this.position.x && y == this.position.y;
        this.setPosition(x, y);
        if (didNotMove && !this.isTransitioning) {
            this.layoutPosition();
            return;
        }
        var transX = x - curX;
        var transY = y - curY;
        var transitionStyle = {};
        transitionStyle.transform = this.getTranslate(transX, transY);
        this.transition({
            to: transitionStyle,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: true
        });
    }
    ;
    proto.getTranslate = function(x, y) {
        var isOriginLeft = this.layout._getOption("originLeft");
        var isOriginTop = this.layout._getOption("originTop");
        x = isOriginLeft ? x : -x;
        y = isOriginTop ? y : -y;
        return "translate3d(" + x + "px, " + y + "px, 0)";
    }
    ;
    proto.goTo = function(x, y) {
        this.setPosition(x, y);
        this.layoutPosition();
    }
    ;
    proto.moveTo = proto._transitionTo;
    proto.setPosition = function(x, y) {
        this.position.x = parseFloat(x);
        this.position.y = parseFloat(y);
    }
    ;
    proto._nonTransition = function(args) {
        this.css(args.to);
        if (args.isCleaning) {
            this._removeStyles(args.to);
        }
        for (var prop in args.onTransitionEnd) {
            args.onTransitionEnd[prop].call(this);
        }
    }
    ;
    proto.transition = function(args) {
        if (!parseFloat(this.layout.options.transitionDuration)) {
            this._nonTransition(args);
            return;
        }
        var _transition = this._transn;
        for (var prop in args.onTransitionEnd) {
            _transition.onEnd[prop] = args.onTransitionEnd[prop];
        }
        for (prop in args.to) {
            _transition.ingProperties[prop] = true;
            if (args.isCleaning) {
                _transition.clean[prop] = true;
            }
        }
        if (args.from) {
            this.css(args.from);
            var h = this.element.offsetHeight;
            h = null;
        }
        this.enableTransition(args.to);
        this.css(args.to);
        this.isTransitioning = true;
    }
    ;
    function toDashedAll(str) {
        return str.replace(/([A-Z])/g, function($1) {
            return "-" + $1.toLowerCase();
        });
    }
    var transitionProps = "opacity," + toDashedAll(transformProperty);
    proto.enableTransition = function() {
        if (this.isTransitioning) {
            return;
        }
        var duration = this.layout.options.transitionDuration;
        duration = typeof duration == "number" ? duration + "ms" : duration;
        this.css({
            transitionProperty: transitionProps,
            transitionDuration: duration,
            transitionDelay: this.staggerDelay || 0
        });
        this.element.addEventListener(transitionEndEvent, this, false);
    }
    ;
    proto.onwebkitTransitionEnd = function(event) {
        this.ontransitionend(event);
    }
    ;
    proto.onotransitionend = function(event) {
        this.ontransitionend(event);
    }
    ;
    var dashedVendorProperties = {
        "-webkit-transform": "transform"
    };
    proto.ontransitionend = function(event) {
        if (event.target !== this.element) {
            return;
        }
        var _transition = this._transn;
        var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
        delete _transition.ingProperties[propertyName];
        if (isEmptyObj(_transition.ingProperties)) {
            this.disableTransition();
        }
        if (propertyName in _transition.clean) {
            this.element.style[event.propertyName] = "";
            delete _transition.clean[propertyName];
        }
        if (propertyName in _transition.onEnd) {
            var onTransitionEnd = _transition.onEnd[propertyName];
            onTransitionEnd.call(this);
            delete _transition.onEnd[propertyName];
        }
        this.emitEvent("transitionEnd", [this]);
    }
    ;
    proto.disableTransition = function() {
        this.removeTransitionStyles();
        this.element.removeEventListener(transitionEndEvent, this, false);
        this.isTransitioning = false;
    }
    ;
    proto._removeStyles = function(style) {
        var cleanStyle = {};
        for (var prop in style) {
            cleanStyle[prop] = "";
        }
        this.css(cleanStyle);
    }
    ;
    var cleanTransitionStyle = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    proto.removeTransitionStyles = function() {
        this.css(cleanTransitionStyle);
    }
    ;
    proto.stagger = function(delay) {
        delay = isNaN(delay) ? 0 : delay;
        this.staggerDelay = delay + "ms";
    }
    ;
    proto.removeElem = function() {
        this.element.parentNode.removeChild(this.element);
        this.css({
            display: ""
        });
        this.emitEvent("remove", [this]);
    }
    ;
    proto.remove = function() {
        if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
            this.removeElem();
            return;
        }
        this.once("transitionEnd", function() {
            this.removeElem();
        });
        this.hide();
    }
    ;
    proto.reveal = function() {
        delete this.isHidden;
        this.css({
            display: ""
        });
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty("visibleStyle");
        onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
        this.transition({
            from: options.hiddenStyle,
            to: options.visibleStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    }
    ;
    proto.onRevealTransitionEnd = function() {
        if (!this.isHidden) {
            this.emitEvent("reveal");
        }
    }
    ;
    proto.getHideRevealTransitionEndProperty = function(styleProperty) {
        var optionStyle = this.layout.options[styleProperty];
        if (optionStyle.opacity) {
            return "opacity";
        }
        for (var prop in optionStyle) {
            return prop;
        }
    }
    ;
    proto.hide = function() {
        this.isHidden = true;
        this.css({
            display: ""
        });
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty("hiddenStyle");
        onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
        this.transition({
            from: options.visibleStyle,
            to: options.hiddenStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    }
    ;
    proto.onHideTransitionEnd = function() {
        if (this.isHidden) {
            this.css({
                display: "none"
            });
            this.emitEvent("hide");
        }
    }
    ;
    proto.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        });
    }
    ;
    return Item;
});
/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */
(function(window, factory) {
    "use strict";
    if (typeof define == "function" && define.amd) {
        define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(EvEmitter, getSize, utils, Item) {
            return factory(window, EvEmitter, getSize, utils, Item);
        });
    } else if (typeof module == "object" && module.exports) {
        module.exports = factory(window, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item"));
    } else {
        window.Outlayer = factory(window, window.EvEmitter, window.getSize, window.fizzyUIUtils, window.Outlayer.Item);
    }
}
)(window, function factory(window, EvEmitter, getSize, utils, Item) {
    "use strict";
    var console = window.console;
    var jQuery = window.jQuery;
    var noop = function() {};
    var GUID = 0;
    var instances = {};
    function Outlayer(element, options) {
        var queryElement = utils.getQueryElement(element);
        if (!queryElement) {
            if (console) {
                console.error("Bad element for " + this.constructor.namespace + ": " + (queryElement || element));
            }
            return;
        }
        this.element = queryElement;
        if (jQuery) {
            this.$element = jQuery(this.element);
        }
        this.options = utils.extend({}, this.constructor.defaults);
        this.option(options);
        var id = ++GUID;
        this.element.outlayerGUID = id;
        instances[id] = this;
        this._create();
        var isInitLayout = this._getOption("initLayout");
        if (isInitLayout) {
            this.layout();
        }
    }
    Outlayer.namespace = "outlayer";
    Outlayer.Item = Item;
    Outlayer.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: true,
        originLeft: true,
        originTop: true,
        resize: true,
        resizeContainer: true,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        },
    };
    var proto = Outlayer.prototype;
    utils.extend(proto, EvEmitter.prototype);
    proto.option = function(opts) {
        utils.extend(this.options, opts);
    }
    ;
    proto._getOption = function(option) {
        var oldOption = this.constructor.compatOptions[option];
        return oldOption && this.options[oldOption] !== undefined ? this.options[oldOption] : this.options[option];
    }
    ;
    Outlayer.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
    };
    proto._create = function() {
        this.reloadItems();
        this.stamps = [];
        this.stamp(this.options.stamp);
        utils.extend(this.element.style, this.options.containerStyle);
        var canBindResize = this._getOption("resize");
        if (canBindResize) {
            this.bindResize();
        }
    }
    ;
    proto.reloadItems = function() {
        this.items = this._itemize(this.element.children);
    }
    ;
    proto._itemize = function(elems) {
        var itemElems = this._filterFindItemElements(elems);
        var Item = this.constructor.Item;
        var items = [];
        for (var i = 0; i < itemElems.length; i++) {
            var elem = itemElems[i];
            var item = new Item(elem,this);
            items.push(item);
        }
        return items;
    }
    ;
    proto._filterFindItemElements = function(elems) {
        return utils.filterFindElements(elems, this.options.itemSelector);
    }
    ;
    proto.getItemElements = function() {
        return this.items.map(function(item) {
            return item.element;
        });
    }
    ;
    proto.layout = function() {
        this._resetLayout();
        this._manageStamps();
        var layoutInstant = this._getOption("layoutInstant");
        var isInstant = layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, isInstant);
        this._isLayoutInited = true;
    }
    ;
    proto._init = proto.layout;
    proto._resetLayout = function() {
        this.getSize();
    }
    ;
    proto.getSize = function() {
        this.size = getSize(this.element);
    }
    ;
    proto._getMeasurement = function(measurement, size) {
        var option = this.options[measurement];
        var elem;
        if (!option) {
            this[measurement] = 0;
        } else {
            if (typeof option == "string") {
                elem = this.element.querySelector(option);
            } else if (option instanceof HTMLElement) {
                elem = option;
            }
            this[measurement] = elem ? getSize(elem)[size] : option;
        }
    }
    ;
    proto.layoutItems = function(items, isInstant) {
        items = this._getItemsForLayout(items);
        this._layoutItems(items, isInstant);
        this._postLayout();
    }
    ;
    proto._getItemsForLayout = function(items) {
        return items.filter(function(item) {
            return !item.isIgnored;
        });
    }
    ;
    proto._layoutItems = function(items, isInstant) {
        this._emitCompleteOnItems("layout", items);
        if (!items || !items.length) {
            return;
        }
        var queue = [];
        items.forEach(function(item) {
            var position = this._getItemLayoutPosition(item);
            position.item = item;
            position.isInstant = isInstant || item.isLayoutInstant;
            queue.push(position);
        }, this);
        this._processLayoutQueue(queue);
    }
    ;
    proto._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        };
    }
    ;
    proto._processLayoutQueue = function(queue) {
        this.updateStagger();
        queue.forEach(function(obj, i) {
            this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
        }, this);
    }
    ;
    proto.updateStagger = function() {
        var stagger = this.options.stagger;
        if (stagger === null || stagger === undefined) {
            this.stagger = 0;
            return;
        }
        this.stagger = getMilliseconds(stagger);
        return this.stagger;
    }
    ;
    proto._positionItem = function(item, x, y, isInstant, i) {
        if (isInstant) {
            item.goTo(x, y);
        } else {
            item.stagger(i * this.stagger);
            item.moveTo(x, y);
        }
    }
    ;
    proto._postLayout = function() {
        this.resizeContainer();
    }
    ;
    proto.resizeContainer = function() {
        var isResizingContainer = this._getOption("resizeContainer");
        if (!isResizingContainer) {
            return;
        }
        var size = this._getContainerSize();
        if (size) {
            this._setContainerMeasure(size.width, true);
            this._setContainerMeasure(size.height, false);
        }
    }
    ;
    proto._getContainerSize = noop;
    proto._setContainerMeasure = function(measure, isWidth) {
        if (measure === undefined) {
            return;
        }
        var elemSize = this.size;
        if (elemSize.isBorderBox) {
            measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight + elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop + elemSize.borderTopWidth + elemSize.borderBottomWidth;
        }
        measure = Math.max(measure, 0);
        this.element.style[isWidth ? "width" : "height"] = measure + "px";
    }
    ;
    proto._emitCompleteOnItems = function(eventName, items) {
        var _this = this;
        function onComplete() {
            _this.dispatchEvent(eventName + "Complete", null, [items]);
        }
        var count = items.length;
        if (!items || !count) {
            onComplete();
            return;
        }
        var doneCount = 0;
        function tick() {
            doneCount++;
            if (doneCount == count) {
                onComplete();
            }
        }
        items.forEach(function(item) {
            item.once(eventName, tick);
        });
    }
    ;
    proto.dispatchEvent = function(type, event, args) {
        var emitArgs = event ? [event].concat(args) : args;
        this.emitEvent(type, emitArgs);
        if (jQuery) {
            this.$element = this.$element || jQuery(this.element);
            if (event) {
                var $event = jQuery.Event(event);
                $event.type = type;
                this.$element.trigger($event, args);
            } else {
                this.$element.trigger(type, args);
            }
        }
    }
    ;
    proto.ignore = function(elem) {
        var item = this.getItem(elem);
        if (item) {
            item.isIgnored = true;
        }
    }
    ;
    proto.unignore = function(elem) {
        var item = this.getItem(elem);
        if (item) {
            delete item.isIgnored;
        }
    }
    ;
    proto.stamp = function(elems) {
        elems = this._find(elems);
        if (!elems) {
            return;
        }
        this.stamps = this.stamps.concat(elems);
        elems.forEach(this.ignore, this);
    }
    ;
    proto.unstamp = function(elems) {
        elems = this._find(elems);
        if (!elems) {
            return;
        }
        elems.forEach(function(elem) {
            utils.removeFrom(this.stamps, elem);
            this.unignore(elem);
        }, this);
    }
    ;
    proto._find = function(elems) {
        if (!elems) {
            return;
        }
        if (typeof elems == "string") {
            elems = this.element.querySelectorAll(elems);
        }
        elems = utils.makeArray(elems);
        return elems;
    }
    ;
    proto._manageStamps = function() {
        if (!this.stamps || !this.stamps.length) {
            return;
        }
        this._getBoundingRect();
        this.stamps.forEach(this._manageStamp, this);
    }
    ;
    proto._getBoundingRect = function() {
        var boundingRect = this.element.getBoundingClientRect();
        var size = this.size;
        this._boundingRect = {
            left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
            top: boundingRect.top + size.paddingTop + size.borderTopWidth,
            right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
            bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth),
        };
    }
    ;
    proto._manageStamp = noop;
    proto._getElementOffset = function(elem) {
        var boundingRect = elem.getBoundingClientRect();
        var thisRect = this._boundingRect;
        var size = getSize(elem);
        var offset = {
            left: boundingRect.left - thisRect.left - size.marginLeft,
            top: boundingRect.top - thisRect.top - size.marginTop,
            right: thisRect.right - boundingRect.right - size.marginRight,
            bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom,
        };
        return offset;
    }
    ;
    proto.handleEvent = utils.handleEvent;
    proto.bindResize = function() {
        window.addEventListener("resize", this);
        this.isResizeBound = true;
    }
    ;
    proto.unbindResize = function() {
        window.removeEventListener("resize", this);
        this.isResizeBound = false;
    }
    ;
    proto.onresize = function() {
        this.resize();
    }
    ;
    utils.debounceMethod(Outlayer, "onresize", 100);
    proto.resize = function() {
        if (!this.isResizeBound || !this.needsResizeLayout()) {
            return;
        }
        this.layout();
    }
    ;
    proto.needsResizeLayout = function() {
        var size = getSize(this.element);
        var hasSizes = this.size && size;
        return hasSizes && size.innerWidth !== this.size.innerWidth;
    }
    ;
    proto.addItems = function(elems) {
        var items = this._itemize(elems);
        if (items.length) {
            this.items = this.items.concat(items);
        }
        return items;
    }
    ;
    proto.appended = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
            return;
        }
        this.layoutItems(items, true);
        this.reveal(items);
    }
    ;
    proto.prepended = function(elems) {
        var items = this._itemize(elems);
        if (!items.length) {
            return;
        }
        var previousItems = this.items.slice(0);
        this.items = items.concat(previousItems);
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(items, true);
        this.reveal(items);
        this.layoutItems(previousItems);
    }
    ;
    proto.reveal = function(items) {
        this._emitCompleteOnItems("reveal", items);
        if (!items || !items.length) {
            return;
        }
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
            item.stagger(i * stagger);
            item.reveal();
        });
    }
    ;
    proto.hide = function(items) {
        this._emitCompleteOnItems("hide", items);
        if (!items || !items.length) {
            return;
        }
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
            item.stagger(i * stagger);
            item.hide();
        });
    }
    ;
    proto.revealItemElements = function(elems) {
        var items = this.getItems(elems);
        this.reveal(items);
    }
    ;
    proto.hideItemElements = function(elems) {
        var items = this.getItems(elems);
        this.hide(items);
    }
    ;
    proto.getItem = function(elem) {
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item.element == elem) {
                return item;
            }
        }
    }
    ;
    proto.getItems = function(elems) {
        elems = utils.makeArray(elems);
        var items = [];
        elems.forEach(function(elem) {
            var item = this.getItem(elem);
            if (item) {
                items.push(item);
            }
        }, this);
        return items;
    }
    ;
    proto.remove = function(elems) {
        var removeItems = this.getItems(elems);
        this._emitCompleteOnItems("remove", removeItems);
        if (!removeItems || !removeItems.length) {
            return;
        }
        removeItems.forEach(function(item) {
            item.remove();
            utils.removeFrom(this.items, item);
        }, this);
    }
    ;
    proto.destroy = function() {
        var style = this.element.style;
        style.height = "";
        style.position = "";
        style.width = "";
        this.items.forEach(function(item) {
            item.destroy();
        });
        this.unbindResize();
        var id = this.element.outlayerGUID;
        delete instances[id];
        delete this.element.outlayerGUID;
        if (jQuery) {
            jQuery.removeData(this.element, this.constructor.namespace);
        }
    }
    ;
    Outlayer.data = function(elem) {
        elem = utils.getQueryElement(elem);
        var id = elem && elem.outlayerGUID;
        return id && instances[id];
    }
    ;
    Outlayer.create = function(namespace, options) {
        var Layout = subclass(Outlayer);
        Layout.defaults = utils.extend({}, Outlayer.defaults);
        utils.extend(Layout.defaults, options);
        Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
        Layout.namespace = namespace;
        Layout.data = Outlayer.data;
        Layout.Item = subclass(Item);
        utils.htmlInit(Layout, namespace);
        if (jQuery && jQuery.bridget) {
            jQuery.bridget(namespace, Layout);
        }
        return Layout;
    }
    ;
    function subclass(Parent) {
        function SubClass() {
            Parent.apply(this, arguments);
        }
        SubClass.prototype = Object.create(Parent.prototype);
        SubClass.prototype.constructor = SubClass;
        return SubClass;
    }
    var msUnits = {
        ms: 1,
        s: 1000
    };
    function getMilliseconds(time) {
        if (typeof time == "number") {
            return time;
        }
        var matches = time.match(/(^\d*\.?\d*)(\w*)/);
        var num = matches && matches[1];
        var unit = matches && matches[2];
        if (!num.length) {
            return 0;
        }
        num = parseFloat(num);
        var mult = msUnits[unit] || 1;
        return num * mult;
    }
    Outlayer.Item = Item;
    return Outlayer;
});
(function(window, factory) {
    if (typeof define == "function" && define.amd) {
        define("isotope-layout/js/item", ["outlayer/outlayer"], factory);
    } else if (typeof module == "object" && module.exports) {
        module.exports = factory(require("outlayer"));
    } else {
        window.Isotope = window.Isotope || {};
        window.Isotope.Item = factory(window.Outlayer);
    }
}
)(window, function factory(Outlayer) {
    "use strict";
    function Item() {
        Outlayer.Item.apply(this, arguments);
    }
    var proto = (Item.prototype = Object.create(Outlayer.Item.prototype));
    var _create = proto._create;
    proto._create = function() {
        this.id = this.layout.itemGUID++;
        _create.call(this);
        this.sortData = {};
    }
    ;
    proto.updateSortData = function() {
        if (this.isIgnored) {
            return;
        }
        this.sortData.id = this.id;
        this.sortData["original-order"] = this.id;
        this.sortData.random = Math.random();
        var getSortData = this.layout.options.getSortData;
        var sorters = this.layout._sorters;
        for (var key in getSortData) {
            var sorter = sorters[key];
            this.sortData[key] = sorter(this.element, this);
        }
    }
    ;
    var _destroy = proto.destroy;
    proto.destroy = function() {
        _destroy.apply(this, arguments);
        this.css({
            display: ""
        });
    }
    ;
    return Item;
});
(function(window, factory) {
    if (typeof define == "function" && define.amd) {
        define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], factory);
    } else if (typeof module == "object" && module.exports) {
        module.exports = factory(require("get-size"), require("outlayer"));
    } else {
        window.Isotope = window.Isotope || {};
        window.Isotope.LayoutMode = factory(window.getSize, window.Outlayer);
    }
}
)(window, function factory(getSize, Outlayer) {
    "use strict";
    function LayoutMode(isotope) {
        this.isotope = isotope;
        if (isotope) {
            this.options = isotope.options[this.namespace];
            this.element = isotope.element;
            this.items = isotope.filteredItems;
            this.size = isotope.size;
        }
    }
    var proto = LayoutMode.prototype;
    var facadeMethods = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    facadeMethods.forEach(function(methodName) {
        proto[methodName] = function() {
            return Outlayer.prototype[methodName].apply(this.isotope, arguments);
        }
        ;
    });
    proto.needsVerticalResizeLayout = function() {
        var size = getSize(this.isotope.element);
        var hasSizes = this.isotope.size && size;
        return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
    }
    ;
    proto._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments);
    }
    ;
    proto.getColumnWidth = function() {
        this.getSegmentSize("column", "Width");
    }
    ;
    proto.getRowHeight = function() {
        this.getSegmentSize("row", "Height");
    }
    ;
    proto.getSegmentSize = function(segment, size) {
        var segmentName = segment + size;
        var outerSize = "outer" + size;
        this._getMeasurement(segmentName, outerSize);
        if (this[segmentName]) {
            return;
        }
        var firstItemSize = this.getFirstItemSize();
        this[segmentName] = (firstItemSize && firstItemSize[outerSize]) || this.isotope.size["inner" + size];
    }
    ;
    proto.getFirstItemSize = function() {
        var firstItem = this.isotope.filteredItems[0];
        return firstItem && firstItem.element && getSize(firstItem.element);
    }
    ;
    proto.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments);
    }
    ;
    proto.getSize = function() {
        this.isotope.getSize();
        this.size = this.isotope.size;
    }
    ;
    LayoutMode.modes = {};
    LayoutMode.create = function(namespace, options) {
        function Mode() {
            LayoutMode.apply(this, arguments);
        }
        Mode.prototype = Object.create(proto);
        Mode.prototype.constructor = Mode;
        if (options) {
            Mode.options = options;
        }
        Mode.prototype.namespace = namespace;
        LayoutMode.modes[namespace] = Mode;
        return Mode;
    }
    ;
    return LayoutMode;
});
/*!
 * simpleParallax - simpleParallax is a simple JavaScript library that gives your website parallax animations on any images,
 * @date: 13-06-2019 16:24:29,
 * @version: 5.1.0,
 * @link: https://simpleparallax.com/
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
    else if (typeof define === "function" && define.amd)
        define("simpleParallax", [], factory);
    else if (typeof exports === "object")
        exports["simpleParallax"] = factory();
    else
        root["simpleParallax"] = factory();
}
)(window, function() {
    return (function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
            }
            var module = (installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            });
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter
                });
            }
        }
        ;
        __webpack_require__.r = function(exports) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module"
                });
            }
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
        }
        ;
        __webpack_require__.t = function(value, mode) {
            if (mode & 1)
                value = __webpack_require__(value);
            if (mode & 8)
                return value;
            if (mode & 4 && typeof value === "object" && value && value.__esModule)
                return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", {
                enumerable: true,
                value: value
            });
            if (mode & 2 && typeof value != "string")
                for (var key in value)
                    __webpack_require__.d(ns, key, function(key) {
                        return value[key];
                    }
                    .bind(null, key));
            return ns;
        }
        ;
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module["default"];
            }
            : function getModuleExports() {
                return module;
            }
            ;
            __webpack_require__.d(getter, "a", getter);
            return getter;
        }
        ;
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }
        ;
        __webpack_require__.p = "";
        return __webpack_require__((__webpack_require__.s = 0));
    }
    )([function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value"in descriptor)
                    descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
                _defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                _defineProperties(Constructor, staticProps);
            return Constructor;
        }
        var Viewport = (function() {
            function Viewport() {
                _classCallCheck(this, Viewport);
                this.positions = {
                    top: 0,
                    bottom: 0,
                    height: 0
                };
            }
            _createClass(Viewport, [{
                key: "setViewportTop",
                value: function setViewportTop() {
                    this.positions.top = window.pageYOffset;
                    return this.positions;
                },
            }, {
                key: "setViewportBottom",
                value: function setViewportBottom() {
                    this.positions.bottom = this.positions.top + this.positions.height;
                    return this.positions;
                },
            }, {
                key: "setViewportHeight",
                value: function setViewportHeight() {
                    this.positions.height = document.documentElement.clientHeight;
                    return this.positions;
                },
            }, {
                key: "setViewportAll",
                value: function setViewportAll() {
                    this.positions.top = window.pageYOffset;
                    this.positions.bottom = this.positions.top + this.positions.height;
                    this.positions.height = document.documentElement.clientHeight;
                    return this.positions;
                },
            }, ]);
            return Viewport;
        }
        )();
        var viewport = Viewport;
        var convertToArray = function convertToArray(elements) {
            if (NodeList.prototype.isPrototypeOf(elements) || HTMLCollection.prototype.isPrototypeOf(elements))
                return Array.from(elements);
            if (typeof elements === "string" || elements instanceof String)
                return document.querySelectorAll(elements);
            return [elements];
        };
        var helpers_convertToArray = convertToArray;
        var cssTransform = function cssTransform() {
            var prefixes = "transform webkitTransform mozTransform oTransform msTransform".split(" ");
            var transform;
            var i = 0;
            while (transform === undefined) {
                transform = document.createElement("div").style[prefixes[i]] !== undefined ? prefixes[i] : undefined;
                i += 1;
            }
            return transform;
        };
        var helpers_cssTransform = cssTransform();
        var isImageLoaded = function isImageLoaded(image) {
            if (!image) {
                return false;
            }
            if (!image.complete) {
                return false;
            }
            if (typeof image.naturalWidth !== "undefined" && image.naturalWidth === 0) {
                return false;
            }
            return true;
        };
        var helpers_isImageLoaded = isImageLoaded;
        function _toConsumableArray(arr) {
            return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
        }
        function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        }
        function _iterableToArray(iter) {
            if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
                return Array.from(iter);
        }
        function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) {
                for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
                    arr2[i] = arr[i];
                }
                return arr2;
            }
        }
        function parallax_classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function parallax_defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value"in descriptor)
                    descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function parallax_createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
                parallax_defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                parallax_defineProperties(Constructor, staticProps);
            return Constructor;
        }
        var parallax_ParallaxInstance = (function() {
            function ParallaxInstance(element, options) {
                parallax_classCallCheck(this, ParallaxInstance);
                this.element = element;
                this.elementContainer = element;
                this.settings = options;
                this.isVisible = true;
                this.isInit = false;
                this.oldTranslateValue = -1;
                this.init = this.init.bind(this);
                if (helpers_isImageLoaded(element)) {
                    this.init();
                } else {
                    this.element.addEventListener("load", this.init);
                }
            }
            parallax_createClass(ParallaxInstance, [{
                key: "init",
                value: function init() {
                    if (this.isInit)
                        return;
                    if (this.element.closest(".simpleParallax"))
                        return;
                    if (this.settings.overflow === false) {
                        this.wrapElement(this.element);
                    }
                    this.setStyle();
                    this.getElementOffset();
                    this.intersectionObserver();
                    this.getTranslateValue();
                    this.animate();
                    this.isInit = true;
                },
            }, {
                key: "wrapElement",
                value: function wrapElement() {
                    var elementToWrap = this.element.closest("picture") || this.element;
                    var wrapper = document.createElement("div");
                    wrapper.classList.add("simpleParallax");
                    wrapper.style.overflow = "hidden";
                    elementToWrap.parentNode.insertBefore(wrapper, elementToWrap);
                    wrapper.appendChild(elementToWrap);
                    this.elementContainer = wrapper;
                },
            }, {
                key: "unWrapElement",
                value: function unWrapElement() {
                    var wrapper = this.elementContainer;
                    wrapper.replaceWith.apply(wrapper, _toConsumableArray(wrapper.childNodes));
                },
            }, {
                key: "setStyle",
                value: function setStyle() {
                    if (this.settings.overflow === false) {
                        this.element.style[helpers_cssTransform] = "scale(".concat(this.settings.scale, ")");
                    }
                    if (this.settings.delay > 0) {
                        this.element.style.transition = "transform ".concat(this.settings.delay, "s ").concat(this.settings.transition);
                    }
                    this.element.style.willChange = "transform";
                },
            }, {
                key: "unSetStyle",
                value: function unSetStyle() {
                    this.element.style.willChange = "";
                    this.element.style[helpers_cssTransform] = "";
                    this.element.style.transition = "";
                },
            }, {
                key: "getElementOffset",
                value: function getElementOffset() {
                    var positions = this.elementContainer.getBoundingClientRect();
                    this.elementHeight = positions.height;
                    this.elementTop = positions.top + simpleParallax_viewport.positions.top;
                    this.elementBottom = this.elementHeight + this.elementTop;
                },
            }, {
                key: "buildThresholdList",
                value: function buildThresholdList() {
                    var thresholds = [];
                    for (var i = 1.0; i <= this.elementHeight; i++) {
                        var ratio = i / this.elementHeight;
                        thresholds.push(ratio);
                    }
                    return thresholds;
                },
            }, {
                key: "intersectionObserver",
                value: function intersectionObserver() {
                    var options = {
                        root: null,
                        threshold: this.buildThresholdList()
                    };
                    this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this),options);
                    this.observer.observe(this.element);
                },
            }, {
                key: "intersectionObserverCallback",
                value: function intersectionObserverCallback(entries) {
                    for (var i = entries.length - 1; i >= 0; i--) {
                        if (entries[i].isIntersecting) {
                            this.isVisible = true;
                        } else {
                            this.isVisible = false;
                        }
                    }
                },
            }, {
                key: "checkIfVisible",
                value: function checkIfVisible() {
                    return this.elementBottom > simpleParallax_viewport.positions.top && this.elementTop < simpleParallax_viewport.positions.bottom;
                },
            }, {
                key: "getRangeMax",
                value: function getRangeMax() {
                    var elementImageHeight = this.element.clientHeight;
                    this.rangeMax = elementImageHeight * this.settings.scale - elementImageHeight;
                },
            }, {
                key: "getTranslateValue",
                value: function getTranslateValue() {
                    var percentage = ((simpleParallax_viewport.positions.bottom - this.elementTop) / ((simpleParallax_viewport.positions.height + this.elementHeight) / 100)).toFixed(1);
                    percentage = Math.min(100, Math.max(0, percentage));
                    if (this.oldPercentage === percentage) {
                        return false;
                    }
                    if (!this.rangeMax) {
                        this.getRangeMax();
                    }
                    this.translateValue = ((percentage / 100) * this.rangeMax - this.rangeMax / 2).toFixed(0);
                    if (this.oldTranslateValue === this.translateValue) {
                        return false;
                    }
                    this.oldPercentage = percentage;
                    this.oldTranslateValue = this.translateValue;
                    return true;
                },
            }, {
                key: "animate",
                value: function animate() {
                    var translateValueY = 0;
                    var translateValueX = 0;
                    var inlineCss;
                    if (this.settings.orientation.includes("left") || this.settings.orientation.includes("right")) {
                        translateValueX = "".concat(this.settings.orientation.includes("left") ? this.translateValue * -1 : this.translateValue, "px");
                    }
                    if (this.settings.orientation.includes("up") || this.settings.orientation.includes("down")) {
                        translateValueY = "".concat(this.settings.orientation.includes("up") ? this.translateValue * -1 : this.translateValue, "px");
                    }
                    if (this.settings.overflow === false) {
                        inlineCss = "translate3d(".concat(translateValueX, ", ").concat(translateValueY, ", 0) scale(").concat(this.settings.scale, ")");
                    } else {
                        inlineCss = "translate3d(".concat(translateValueX, ", ").concat(translateValueY, ", 0)");
                    }
                    this.element.style[helpers_cssTransform] = inlineCss;
                },
            }, ]);
            return ParallaxInstance;
        }
        )();
        var parallax = parallax_ParallaxInstance;
        __webpack_require__.d(__webpack_exports__, "viewport", function() {
            return simpleParallax_viewport;
        });
        __webpack_require__.d(__webpack_exports__, "default", function() {
            return simpleParallax_SimpleParallax;
        });
        function simpleParallax_classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function simpleParallax_defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value"in descriptor)
                    descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function simpleParallax_createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
                simpleParallax_defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                simpleParallax_defineProperties(Constructor, staticProps);
            return Constructor;
        }
        var simpleParallax_viewport = new viewport();
        var intersectionObserverAvailable = true;
        var isInit = false;
        var instances = [];
        var instancesLength;
        var frameID;
        var resizeID;
        var simpleParallax_SimpleParallax = (function() {
            function SimpleParallax(elements, options) {
                simpleParallax_classCallCheck(this, SimpleParallax);
                if (!elements)
                    return;
                this.elements = helpers_convertToArray(elements);
                this.defaults = {
                    delay: 0.4,
                    orientation: "up",
                    scale: 1.3,
                    overflow: false,
                    transition: "cubic-bezier(0,0,0,1)",
                    breakpoint: false
                };
                this.settings = Object.assign(this.defaults, options);
                if (this.settings.breakpoint && document.documentElement.clientWidth <= this.settings.breakpoint) {
                    return;
                }
                if (!("IntersectionObserver"in window))
                    intersectionObserverAvailable = false;
                this.lastPosition = -1;
                this.resizeIsDone = this.resizeIsDone.bind(this);
                this.handleResize = this.handleResize.bind(this);
                this.proceedRequestAnimationFrame = this.proceedRequestAnimationFrame.bind(this);
                this.init();
            }
            simpleParallax_createClass(SimpleParallax, [{
                key: "init",
                value: function init() {
                    simpleParallax_viewport.setViewportAll();
                    for (var i = this.elements.length - 1; i >= 0; i--) {
                        var instance = new parallax(this.elements[i],this.settings);
                        instances.push(instance);
                    }
                    instancesLength = instances.length;
                    if (!isInit) {
                        this.proceedRequestAnimationFrame();
                        window.addEventListener("resize", this.resizeIsDone);
                        isInit = true;
                    }
                },
            }, {
                key: "resizeIsDone",
                value: function resizeIsDone() {
                    clearTimeout(resizeID);
                    resizeID = setTimeout(this.handleResize, 500);
                },
            }, {
                key: "handleResize",
                value: function handleResize() {
                    simpleParallax_viewport.setViewportAll();
                    if (this.settings.breakpoint && document.documentElement.clientWidth <= this.settings.breakpoint) {
                        this.destroy();
                    }
                    for (var i = instancesLength - 1; i >= 0; i--) {
                        instances[i].getElementOffset();
                        instances[i].getRangeMax();
                    }
                    this.lastPosition = -1;
                },
            }, {
                key: "proceedRequestAnimationFrame",
                value: function proceedRequestAnimationFrame() {
                    simpleParallax_viewport.setViewportTop();
                    if (this.lastPosition === simpleParallax_viewport.positions.top) {
                        frameID = window.requestAnimationFrame(this.proceedRequestAnimationFrame);
                        return;
                    }
                    simpleParallax_viewport.setViewportBottom();
                    for (var i = instancesLength - 1; i >= 0; i--) {
                        this.proceedElement(instances[i]);
                    }
                    frameID = window.requestAnimationFrame(this.proceedRequestAnimationFrame);
                    this.lastPosition = simpleParallax_viewport.positions.top;
                },
            }, {
                key: "proceedElement",
                value: function proceedElement(instance) {
                    var isVisible = false;
                    if (!intersectionObserverAvailable) {
                        isVisible = instance.checkIfVisible();
                    } else {
                        isVisible = instance.isVisible;
                    }
                    if (!isVisible)
                        return;
                    if (!instance.getTranslateValue()) {
                        return;
                    }
                    instance.animate();
                },
            }, {
                key: "destroy",
                value: function destroy() {
                    var _this = this;
                    var instancesToDestroy = [];
                    instances = instances.filter(function(instance) {
                        if (_this.elements.includes(instance.element)) {
                            instancesToDestroy.push(instance);
                        } else {
                            return instance;
                        }
                    });
                    for (var i = instancesToDestroy.length - 1; i >= 0; i--) {
                        instancesToDestroy[i].unSetStyle();
                        if (this.settings.overflow === false) {
                            instancesToDestroy[i].unWrapElement();
                        }
                    }
                    instancesLength = instances.length;
                    if (!instancesLength) {
                        window.cancelAnimationFrame(frameID);
                        window.removeEventListener("resize", this.handleResize);
                    }
                },
            }, ]);
            return SimpleParallax;
        }
        )();
    }
    , ])["default"];
});
!(function($) {
    "use strict";
    var Typed = function(el, options) {
        this.el = $(el);
        this.options = $.extend({}, $.fn.typed.defaults, options);
        this.isInput = this.el.is("input");
        this.attr = this.options.attr;
        this.showCursor = this.isInput ? false : this.options.showCursor;
        this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text();
        this.contentType = this.options.contentType;
        this.typeSpeed = this.options.typeSpeed;
        this.startDelay = this.options.startDelay;
        this.backSpeed = this.options.backSpeed;
        this.backDelay = this.options.backDelay;
        this.stringsElement = this.options.stringsElement;
        this.strings = this.options.strings;
        this.strPos = 0;
        this.arrayPos = 0;
        this.stopNum = 0;
        this.loop = this.options.loop;
        this.loopCount = this.options.loopCount;
        this.curLoop = 0;
        this.stop = false;
        this.cursorChar = this.options.cursorChar;
        this.shuffle = this.options.shuffle;
        this.sequence = [];
        this.build();
    };
    Typed.prototype = {
        constructor: Typed,
        init: function() {
            var self = this;
            self.timeout = setTimeout(function() {
                for (var i = 0; i < self.strings.length; ++i)
                    self.sequence[i] = i;
                if (self.shuffle)
                    self.sequence = self.shuffleArray(self.sequence);
                self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
            }, self.startDelay);
        },
        build: function() {
            var self = this;
            if (this.showCursor === true) {
                this.cursor = $('<span class="typed-cursor">' + this.cursorChar + "</span>");
                this.el.after(this.cursor);
            }
            if (this.stringsElement) {
                self.strings = [];
                this.stringsElement.hide();
                var strings = this.stringsElement.find("p");
                $.each(strings, function(key, value) {
                    self.strings.push($(value).html());
                });
            }
            this.init();
        },
        typewrite: function(curString, curStrPos) {
            if (this.stop === true) {
                return;
            }
            var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
            var self = this;
            self.timeout = setTimeout(function() {
                var charPause = 0;
                var substr = curString.substr(curStrPos);
                if (substr.charAt(0) === "^") {
                    var skip = 1;
                    if (/^\^\d+/.test(substr)) {
                        substr = /\d+/.exec(substr)[0];
                        skip += substr.length;
                        charPause = parseInt(substr);
                    }
                    curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                }
                if (self.contentType === "html") {
                    var curChar = curString.substr(curStrPos).charAt(0);
                    if (curChar === "<" || curChar === "&") {
                        var tag = "";
                        var endTag = "";
                        if (curChar === "<") {
                            endTag = ">";
                        } else {
                            endTag = ";";
                        }
                        while (curString.substr(curStrPos).charAt(0) !== endTag) {
                            tag += curString.substr(curStrPos).charAt(0);
                            curStrPos++;
                        }
                        curStrPos++;
                        tag += endTag;
                    }
                }
                self.timeout = setTimeout(function() {
                    if (curStrPos === curString.length) {
                        self.options.onStringTyped(self.arrayPos);
                        if (self.arrayPos === self.strings.length - 1) {
                            self.options.callback();
                            self.curLoop++;
                            if (self.loop === false || self.curLoop === self.loopCount)
                                return;
                        }
                        self.timeout = setTimeout(function() {
                            self.backspace(curString, curStrPos);
                        }, self.backDelay);
                    } else {
                        if (curStrPos === 0)
                            self.options.preStringTyped(self.arrayPos);
                        var nextString = curString.substr(0, curStrPos + 1);
                        if (self.attr) {
                            self.el.attr(self.attr, nextString);
                        } else {
                            if (self.isInput) {
                                self.el.val(nextString);
                            } else if (self.contentType === "html") {
                                self.el.html(nextString);
                            } else {
                                self.el.text(nextString);
                            }
                        }
                        curStrPos++;
                        self.typewrite(curString, curStrPos);
                    }
                }, charPause);
            }, humanize);
        },
        backspace: function(curString, curStrPos) {
            if (this.stop === true) {
                return;
            }
            var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
            var self = this;
            self.timeout = setTimeout(function() {
                if (self.contentType === "html") {
                    if (curString.substr(curStrPos).charAt(0) === ">") {
                        var tag = "";
                        while (curString.substr(curStrPos).charAt(0) !== "<") {
                            tag -= curString.substr(curStrPos).charAt(0);
                            curStrPos--;
                        }
                        curStrPos--;
                        tag += "<";
                    }
                }
                var nextString = curString.substr(0, curStrPos);
                if (self.attr) {
                    self.el.attr(self.attr, nextString);
                } else {
                    if (self.isInput) {
                        self.el.val(nextString);
                    } else if (self.contentType === "html") {
                        self.el.html(nextString);
                    } else {
                        self.el.text(nextString);
                    }
                }
                if (curStrPos > self.stopNum) {
                    curStrPos--;
                    self.backspace(curString, curStrPos);
                } else if (curStrPos <= self.stopNum) {
                    self.arrayPos++;
                    if (self.arrayPos === self.strings.length) {
                        self.arrayPos = 0;
                        if (self.shuffle)
                            self.sequence = self.shuffleArray(self.sequence);
                        self.init();
                    } else
                        self.typewrite(self.strings[self.sequence[self.arrayPos]], curStrPos);
                }
            }, humanize);
        },
        shuffleArray: function(array) {
            var tmp, current, top = array.length;
            if (top)
                while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp;
                }
            return array;
        },
        reset: function() {
            var self = this;
            clearInterval(self.timeout);
            var id = this.el.attr("id");
            this.el.after('<span id="' + id + '"/>');
            this.el.remove();
            if (typeof this.cursor !== "undefined") {
                this.cursor.remove();
            }
            self.options.resetCallback();
        },
    };
    $.fn.typed = function(option) {
        return this.each(function() {
            var $this = $(this)
              , data = $this.data("typed")
              , options = typeof option == "object" && option;
            if (!data)
                $this.data("typed", (data = new Typed(this,options)));
            if (typeof option == "string")
                data[option]();
        });
    }
    ;
    $.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: false,
        backDelay: 500,
        loop: false,
        loopCount: false,
        showCursor: true,
        cursorChar: "|",
        attr: null,
        contentType: "html",
        callback: function() {},
        preStringTyped: function() {},
        onStringTyped: function() {},
        resetCallback: function() {},
    };
}
)(window.jQuery);
/*!
 * Name    : Elements Extension for Jarallax
 * Version : 1.0.0
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = (installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        });
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        }
    }
    ;
    __webpack_require__.r = function(exports) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
        }
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    }
    ;
    __webpack_require__.t = function(value, mode) {
        if (mode & 1)
            value = __webpack_require__(value);
        if (mode & 8)
            return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule)
            return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (mode & 2 && typeof value != "string")
            for (var key in value)
                __webpack_require__.d(ns, key, function(key) {
                    return value[key];
                }
                .bind(null, key));
        return ns;
    }
    ;
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module["default"];
        }
        : function getModuleExports() {
            return module;
        }
        ;
        __webpack_require__.d(getter, "a", getter);
        return getter;
    }
    ;
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }
    ;
    __webpack_require__.p = "";
    return __webpack_require__((__webpack_require__.s = 0));
}
)([function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(1);
}
, function(module, exports, __webpack_require__) {
    "use strict";
    var _liteReady = __webpack_require__(2);
    var _liteReady2 = _interopRequireDefault(_liteReady);
    var _jarallaxElement = __webpack_require__(3);
    var _jarallaxElement2 = _interopRequireDefault(_jarallaxElement);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    (0,
    _jarallaxElement2.default)();
    (0,
    _liteReady2.default)(function() {
        if (typeof jarallax !== "undefined") {
            jarallax(document.querySelectorAll("[data-jarallax-element]"));
        }
    });
}
, function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = function(callback) {
        if (document.readyState === "complete" || document.readyState === "interactive") {
            callback.call();
        } else if (document.attachEvent) {
            document.attachEvent("onreadystatechange", function() {
                if (document.readyState === "interactive")
                    callback.call();
            });
        } else if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", callback);
        }
    }
    ;
}
, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = jarallaxElement;
    var _global = __webpack_require__(4);
    var _global2 = _interopRequireDefault(_global);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function jarallaxElement() {
        var jarallax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _global2.default.jarallax;
        if (typeof jarallax === "undefined") {
            return;
        }
        var Jarallax = jarallax.constructor;
        ["initImg", "canInitParallax", "init", "destroy", "clipContainer", "coverImage", "isVisible", "onScroll", "onResize"].forEach(function(key) {
            var def = Jarallax.prototype[key];
            Jarallax.prototype[key] = function() {
                var self = this;
                var args = arguments || [];
                if (key === "initImg" && self.$item.getAttribute("data-jarallax-element") !== null) {
                    self.options.type = "element";
                    self.pureOptions.speed = self.$item.getAttribute("data-jarallax-element") || self.pureOptions.speed;
                }
                if (self.options.type !== "element") {
                    return def.apply(self, args);
                }
                self.pureOptions.threshold = self.$item.getAttribute("data-threshold") || "";
                switch (key) {
                case "init":
                    var speedArr = self.pureOptions.speed.split(" ");
                    self.options.speed = self.pureOptions.speed || 0;
                    self.options.speedY = speedArr[0] ? parseFloat(speedArr[0]) : 0;
                    self.options.speedX = speedArr[1] ? parseFloat(speedArr[1]) : 0;
                    var thresholdArr = self.pureOptions.threshold.split(" ");
                    self.options.thresholdY = thresholdArr[0] ? parseFloat(thresholdArr[0]) : null;
                    self.options.thresholdX = thresholdArr[1] ? parseFloat(thresholdArr[1]) : null;
                    break;
                case "onResize":
                    var defTransform = self.css(self.$item, "transform");
                    self.css(self.$item, {
                        transform: ""
                    });
                    var rect = self.$item.getBoundingClientRect();
                    self.itemData = {
                        width: rect.width,
                        height: rect.height,
                        y: rect.top + self.getWindowData().y,
                        x: rect.left
                    };
                    self.css(self.$item, {
                        transform: defTransform
                    });
                    break;
                case "onScroll":
                    var wnd = self.getWindowData();
                    var centerPercent = (wnd.y + wnd.height / 2 - self.itemData.y - self.itemData.height / 2) / (wnd.height / 2);
                    var moveY = centerPercent * self.options.speedY;
                    var moveX = centerPercent * self.options.speedX;
                    var my = moveY;
                    var mx = moveX;
                    if (self.options.thresholdY !== null && moveY > self.options.thresholdY)
                        my = 0;
                    if (self.options.thresholdX !== null && moveX > self.options.thresholdX)
                        mx = 0;
                    self.css(self.$item, {
                        transform: "translate3d(" + mx + "px," + my + "px,0)"
                    });
                    break;
                case "initImg":
                case "isVisible":
                case "clipContainer":
                case "coverImage":
                    return true;
                }
                return def.apply(self, args);
            }
            ;
        });
    }
}
, function(module, exports, __webpack_require__) {
    "use strict";
    (function(global) {
        var win;
        if (typeof window !== "undefined") {
            win = window;
        } else if (typeof global !== "undefined") {
            win = global;
        } else if (typeof self !== "undefined") {
            win = self;
        } else {
            win = {};
        }
        module.exports = win;
    }
    .call(this, __webpack_require__(5)));
}
, function(module, exports, __webpack_require__) {
    "use strict";
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    }
    : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }
    ;
    var g;
    g = (function() {
        return this;
    }
    )();
    try {
        g = g || Function("return this")() || (1,
        eval)("this");
    } catch (e) {
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object")
            g = window;
    }
    module.exports = g;
}
, ]);
(function($) {
    "use strict";
    window.onpageshow = function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    }
    ;
    $(window).on("load", function() {
        var preload = $(".preloader");
        preload.find(".spinner").fadeOut(function() {
            preload.fadeOut();
        });
        $(".lines").addClass("finish");
        setTimeout(function() {
            $(".lines").addClass("ready");
        }, 1200);
        if ($(".typed-subtitle").length && $(".h-subtitle p").length > 1) {
            $(".typed-subtitle").each(function() {
                $(this).typed({
                    stringsElement: $(this).prev(".typing-subtitle"),
                    loop: true
                });
            });
        }
        setTimeout(function() {
            $(".h-subtitles").addClass("ready");
            if ($(".typed-bread").length) {
                $(".typed-bread").typed({
                    stringsElement: $(".typing-bread"),
                    showCursor: false
                });
            }
        }, 1000);
        var url_hash = location.hash;
        var sectionElem = $(url_hash);
        if (url_hash.indexOf("#section-") == 0 && sectionElem.length) {
            $("body, html").animate({
                scrollTop: $(url_hash).offset().top - 68
            }, 400);
        }
        if ($(".jarallax").length) {
            $(".jarallax").jarallax();
        }
        if ($(".started-carousel").length) {
            var slider_container = $(".started-carousel .swiper-container");
            var is_autoplaytime = slider_container.data("autoplaytime");
            var is_loop = slider_container.data("loop");
            var started_slider = new Swiper(".started-carousel .swiper-container",{
                init: false,
                loop: is_loop,
                spaceBetween: 0,
                effect: "fade",
                slidesPerView: 1,
                simulateTouch: false,
                autoplay: {
                    delay: is_autoplaytime,
                    disableOnInteraction: false,
                    waitForTransition: false
                },
                navigation: {
                    nextEl: ".started .swiper-button-next",
                    prevEl: ".started .swiper-button-prev"
                },
            });
            started_slider.on("slideChange", function() {
                var index = started_slider.realIndex;
                var total = started_slider.slides.length;
                $(".started-carousel .swiper-slide").removeClass("first");
                $(".started-carousel .swiper-slide").each(function(i, slide) {
                    if (index - 1 >= i) {
                        $(slide).addClass("swiper-clip-active");
                    } else {
                        $(slide).removeClass("swiper-clip-active");
                    }
                });
                $(".started-carousel .swiper-slide").each(function(i, slide) {
                    $(slide).css({
                        "z-index": total - i
                    });
                });
            });
            started_slider.init();
        }
        if ($(".reviews-carousel").length) {
            var rev_slider = $(".reviews-carousel .swiper-container");
            var is_autoplaytime = rev_slider.data("autoplaytime");
            var is_loop = rev_slider.data("loop");
            var is_slidesview = rev_slider.data("slidesview");
            var is_spacebetween = rev_slider.data("spacebetween");
            var rev_slider = new Swiper(".reviews-carousel .swiper-container",{
                loop: is_loop,
                spaceBetween: is_spacebetween,
                slidesPerView: is_slidesview,
                autoplay: false,
                navigation: {
                    nextEl: ".reviews-carousel .swiper-button-next",
                    prevEl: ".reviews-carousel .swiper-button-prev"
                },
                pagination: {
                    el: ".reviews-carousel .swiper-pagination",
                    type: "bullets"
                },
                breakpoints: {
                    720: {
                        slidesPerView: 1,
                        spaceBetween: is_spacebetween
                    },
                    1200: {
                        slidesPerView: is_slidesview,
                        spaceBetween: is_spacebetween
                    }
                },
            });
        }
        if ($(".team-carousel").length) {
            var team_slider = $(".team-carousel .swiper-container");
            var t_is_autoplaytime = team_slider.data("autoplaytime");
            var t_is_loop = team_slider.data("loop");
            var t_is_slidesview = team_slider.data("slidesview");
            var t_is_spacebetween = team_slider.data("spacebetween");
            var team_slider = new Swiper(".team-carousel .swiper-container",{
                loop: t_is_loop,
                spaceBetween: t_is_spacebetween,
                slidesPerView: t_is_slidesview,
                autoplay: false,
                navigation: {
                    nextEl: ".team-carousel .swiper-button-next",
                    prevEl: ".team-carousel .swiper-button-prev"
                },
                pagination: {
                    el: ".team-carousel .swiper-pagination",
                    type: "bullets"
                },
                breakpoints: {
                    720: {
                        slidesPerView: 1,
                        spaceBetween: t_is_spacebetween
                    },
                    1200: {
                        slidesPerView: t_is_slidesview,
                        spaceBetween: t_is_spacebetween
                    }
                },
            });
        }
    });
    var width = $(window).width();
    var height = $(window).height();
    $(".section.started").css({
        height: height
    });
    $(".logged-in .section.started").css({
        height: height - 32
    });
    if (width < 783) {
        $(".section.started").css({
            height: height
        });
        $(".logged-in .section.started").css({
            height: height - 46
        });
    }
    if ($(".section.started").hasClass("background-enabled")) {
        $("body").addClass("background-enabled");
    }
    if ($("#grained_container").length) {
        var grained_options = {
            animate: true,
            patternWidth: 400,
            patternHeight: 400,
            grainOpacity: 0.15,
            grainDensity: 3,
            grainWidth: 1,
            grainHeight: 1
        };
        grained("#grained_container", grained_options);
    }
    if (width > 1199 && $(".cursor-follower").length) {
        $(window).on("mousemove", function(e) {
            var x = e.pageX;
            var y = e.pageY;
            var newposX = x;
            var newposY = y;
            $(".cursor-follower").css("transform", "translate3d(" + newposX + "px," + newposY + "px,0px)");
        });
        $("a, .btn-group").on({
            mouseenter: function(e) {
                cursor_over();
            },
            mouseleave: function(e) {
                cursor_out();
            },
        });
    }
    function cursor_over() {
        $(".cursor-follower-inner").stop().animate({
            width: 86,
            height: 86,
            opacity: 0.1,
            margin: "-43px 0 0 -43px"
        }, 500);
    }
    function cursor_out() {
        $(".cursor-follower-inner").stop().animate({
            width: 26,
            height: 26,
            opacity: 0.4,
            margin: "-13px 0 0 -13px"
        }, 500);
    }
    $(".hover-masks a").each(function() {
        var mask_val = $(this).html();
        $(this).wrapInner('<span class="mask-lnk"></span>');
        $(this).append('<span class="mask-lnk mask-lnk-hover">' + mask_val + "</span>");
    });
    $(".hover-animated .circle").on({
        mouseenter: function(e) {
            if ($(this).find(".ink").length === 0) {
                $(this).prepend("<span class='ink'></span>");
            }
            var ink = $(this).find(".ink");
            ink.removeClass("animate");
            if (!ink.height() && !ink.width()) {
                var d = Math.max($(this).outerWidth(), $(this).outerHeight());
                ink.css({
                    height: d,
                    width: d
                });
            }
            var x = e.pageX - $(this).offset().left - ink.width() / 2;
            var y = e.pageY - $(this).offset().top - ink.height() / 2;
            ink.css({
                top: y + "px",
                left: x + "px"
            }).addClass("ink-animate");
            $(".cursor-follower").addClass("hide");
        },
        mouseleave: function(e) {
            var ink = $(this).find(".ink");
            var x = e.pageX - $(this).offset().left - ink.width() / 2;
            var y = e.pageY - $(this).offset().top - ink.height() / 2;
            ink.css({
                top: y + "px",
                left: x + "px"
            }).removeClass("ink-animate");
            $(".cursor-follower").removeClass("hide");
        },
    });
    $("header .top-menu, .typed-bread, .popup-box .bts, .animate-to-page").on("click", "a", function() {
        var link = $(this).attr("href");
        if (link.indexOf("#section-") == 0) {
            if (!$("body").hasClass("home")) {
                location.href = "/" + link;
            }
            $("body, html").animate({
                scrollTop: $(link).offset().top - 68
            }, 400);
            if ($("header").hasClass("active")) {
                $(".menu-btn").trigger("click");
            }
        } else {
            $(".lines").removeClass("finish");
            $(".lines").removeClass("ready");
            $(".lines").addClass("no-lines");
            setTimeout(function() {
                location.href = "" + link;
            }, 2500);
        }
        return false;
    });
    $(window).on("scroll", function() {
        if ($(this).scrollTop() >= $(".section.started").height()) {
            $("body").removeClass("background-enabled");
        } else {
            if ($(".section.started").hasClass("background-enabled")) {
                $("body").addClass("background-enabled");
            }
        }
        if ($(this).scrollTop() >= 100 && $(".section").length > 1) {
            $(".header").addClass("fixed");
            $(".footer").addClass("fixed");
            $("body").removeClass("background-enabled");
            $(".mouse_btn").fadeOut();
        }
        if ($(this).scrollTop() <= 100 && $(".section").length > 1) {
            $(".header").removeClass("fixed");
            $(".footer").removeClass("fixed");
            $(".mouse_btn").fadeIn();
        }
        if ($(this).scrollTop() <= 100 && $(".section").length > 1 && $(".section.started").hasClass("background-enabled")) {
            $("body").addClass("background-enabled");
        }
    });
    $("header").on("click", ".menu-btn", function() {
        if ($("header").hasClass("active")) {
            $("header").removeClass("active");
            $(".footer .soc").fadeIn();
            $("body").addClass("loaded");
            if ($(".video-bg").length) {
                $("body").addClass("background-enabled");
            }
        } else {
            $("header").addClass("active");
            $(".footer .soc").hide();
            $("body").removeClass("loaded");
            $("body").removeClass("background-enabled");
        }
        return false;
    });
    $(".top-menu li.menu-item-has-children").each(function() {
        $(this).append('<span class="open-lnk"></span>');
    });
    $(".top-menu").on("click", ".open-lnk", function() {
        if ($(this).closest("li").hasClass("menu-item-has-children")) {
            if ($(this).closest("li").hasClass("active")) {
                $(this).closest("li").removeClass("active");
                $(this).closest("li").find("> ul").slideUp();
            } else {
                $(this).closest("li").addClass("active");
                $(this).closest("li").find("> ul").slideDown();
            }
        }
    });
    $(".section.about").on("click touchstart", ".btn", function() {
        location.href = $(this).attr("href");
    });
    $(".section").on("click", ".mouse_btn", function() {
        $("body, html").animate({
            scrollTop: height - 150
        }, 800);
    });
    if ($(".section").length > 1) {
        $(".mouse_btn").show();
    }

    $(".filters").on("click", ".btn-group", function() {
        var filterValue = $(this).find("input").val();
        $container.isotope({
            filter: filterValue
        });
        $(".filters .btn-group label").removeClass("glitch-effect");
        $(this).find("label").addClass("glitch-effect");
    });
    if (/\.(?:jpg|jpeg|gif|png)$/i.test($(".gallery-item:first a").attr("href"))) {
        $(".gallery-item a").magnificPopup({
            gallery: {
                enabled: true
            },
            type: "image",
            closeBtnInside: false,
            mainClass: "mfp-fade"
        });
    }
    
    if ($(".jarallax-video").length) {
        $("body").addClass("background-enabled");
        $(".jarallax-video").jarallax();
    }
    if ($(".section").length && $(".top-menu li a").length) {
        $(window).on("scroll", function() {
            var scrollPos = $(window).scrollTop();
            $(".top-menu ul li a").each(function() {
                if ($(this).attr("href").indexOf("#section-") == 0) {
                    var currLink = $(this);
                    var refElement = $(currLink.attr("href"));
                    if (refElement.length) {
                        if (refElement.offset().top <= scrollPos + 70) {
                            $(".top-menu ul li").removeClass("current-menu-item");
                            currLink.closest("li").addClass("current-menu-item");
                        }
                    }
                    if (scrollPos == 0) {
                        $(".top-menu ul li").removeClass("current-menu-item");
                    }
                }
            });
        });
    }
    $(".single-post-text").each(function() {
        $(this).find("iframe").wrap('<div class="embed-container"></div>');
    });
    function skills() {
        var skills_dotted = $(".skills.dotted .progress");
        var skills_dotted_w = skills_dotted.width();
        if (skills_dotted.length) {
            skills_dotted.append('<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
            skills_dotted.find(".percentage").append('<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
            skills_dotted.find(".percentage .da").css({
                width: skills_dotted_w
            });
        }
    }
    setTimeout(skills, 1000);
    var skills_circles = $(".skills.circles .progress");
    if (skills_circles.length) {
        skills_circles.append('<div class="slice"><div class="bar"></div><div class="fill"></div></div>');
    }
    $(window).resize(function() {
        var width = $(window).width();
        var height = $(window).height();
        $(".section.started").css({
            height: height
        });
        $(".logged-in .section.started").css({
            height: height - 32
        });
        if (width < 783) {
            $(".section.started").css({
                height: height
            });
            $(".logged-in .section.started").css({
                height: height - 46
            });
        }
        var skills_dotted = $(".skills-list.dotted .progress");
        var skills_dotted_w = skills_dotted.width();
        if (skills_dotted.length) {
            skills_dotted.find(".percentage .da").css({
                width: skills_dotted_w + 1
            });
        }
    });
}
)(jQuery);
