!(function (t) {
        function e(e) {
            for (var n, o, r = e[0], a = e[1], s = 0, l = []; s < r.length; s++)
                (o = r[s]),
                    Object.prototype.hasOwnProperty.call(i, o) &&
                        i[o] &&
                        l.push(i[o][0]),
                    (i[o] = 0);
            for (n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
            for (c && c(e); l.length; ) l.shift()();
        }
        var n = {},
            i = { 0: 0 };
        function o(e) {
            if (n[e]) return n[e].exports;
            var i = (n[e] = { i: e, l: !1, exports: {} });
            return t[e].call(i.exports, i, i.exports, o), (i.l = !0), i.exports;
        }
        (o.e = function (t) {
            var e = [],
                n = i[t];
            if (0 !== n)
                if (n) e.push(n[2]);
                else {
                    var r = new Promise(function (e, o) {
                        n = i[t] = [e, o];
                    });
                    e.push((n[2] = r));
                    var a,
                        s = document.createElement('script');
                    (s.charset = 'utf-8'),
                        (s.timeout = 120),
                        o.nc && s.setAttribute('nonce', o.nc),
                        (s.src = (function (t) {
                            return o.p + '' + t + '.main.min.js';
                        })(t));
                    var c = new Error();
                    a = function (e) {
                        (s.onerror = s.onload = null), clearTimeout(l);
                        var n = i[t];
                        if (0 !== n) {
                            if (n) {
                                var o =
                                        e &&
                                        ('load' === e.type
                                            ? 'missing'
                                            : e.type),
                                    r = e && e.target && e.target.src;
                                (c.message =
                                    'Loading chunk ' +
                                    t +
                                    ' failed.\n(' +
                                    o +
                                    ': ' +
                                    r +
                                    ')'),
                                    (c.name = 'ChunkLoadError'),
                                    (c.type = o),
                                    (c.request = r),
                                    n[1](c);
                            }
                            i[t] = void 0;
                        }
                    };
                    var l = setTimeout(function () {
                        a({ type: 'timeout', target: s });
                    }, 12e4);
                    (s.onerror = s.onload = a), document.head.appendChild(s);
                }
            return Promise.all(e);
        }),
            (o.m = t),
            (o.c = n),
            (o.d = function (t, e, n) {
                o.o(t, e) ||
                    Object.defineProperty(t, e, { enumerable: !0, get: n });
            }),
            (o.r = function (t) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                        value: 'Module',
                    }),
                    Object.defineProperty(t, '__esModule', { value: !0 });
            }),
            (o.t = function (t, e) {
                if ((1 & e && (t = o(t)), 8 & e)) return t;
                if (4 & e && 'object' == typeof t && t && t.__esModule)
                    return t;
                var n = Object.create(null);
                if (
                    (o.r(n),
                    Object.defineProperty(n, 'default', {
                        enumerable: !0,
                        value: t,
                    }),
                    2 & e && 'string' != typeof t)
                )
                    for (var i in t)
                        o.d(
                            n,
                            i,
                            function (e) {
                                return t[e];
                            }.bind(null, i)
                        );
                return n;
            }),
            (o.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return o.d(e, 'a', e), e;
            }),
            (o.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (o.p = 'https://widget.bandsintown.com/'),
            (o.oe = function (t) {
                throw (console.error(t), t);
            });
        var r = (window.webpackJsonp = window.webpackJsonp || []),
            a = r.push.bind(r);
        (r.push = e), (r = r.slice());
        for (var s = 0; s < r.length; s++) e(r[s]);
        var c = a;
        o((o.s = 37));
    })([
        function (t, e, n) {
            'use strict';
            var i = n(12),
                o = Object.prototype.toString,
                r = Object.prototype.hasOwnProperty,
                a = function (t, e, n) {
                    for (var i = 0, o = t.length; i < o; i++)
                        r.call(t, i) &&
                            (null == n ? e(t[i], i, t) : e.call(n, t[i], i, t));
                },
                s = function (t, e, n) {
                    for (var i = 0, o = t.length; i < o; i++)
                        null == n
                            ? e(t.charAt(i), i, t)
                            : e.call(n, t.charAt(i), i, t);
                },
                c = function (t, e, n) {
                    for (var i in t)
                        r.call(t, i) &&
                            (null == n ? e(t[i], i, t) : e.call(n, t[i], i, t));
                };
            t.exports = function (t, e, n) {
                if (!i(e)) throw new TypeError('iterator must be a function');
                var r;
                arguments.length >= 3 && (r = n),
                    '[object Array]' === o.call(t)
                        ? a(t, e, r)
                        : 'string' == typeof t
                        ? s(t, e, r)
                        : c(t, e, r);
            };
        },
        function (t, e, n) {
            'use strict';
            n.d(e, 'a', function () {
                return a;
            });
            var i = n(4),
                o = n.n(i);
            function r(t, e, n) {
                return (
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = n),
                    t
                );
            }
            var a = function (t, e) {
                var n = o.a.parseUrl(t),
                    i = n.url,
                    a = (function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n =
                                    null != arguments[e]
                                        ? Object(arguments[e])
                                        : {},
                                i = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(
                                        function (t) {
                                            return Object.getOwnPropertyDescriptor(
                                                n,
                                                t
                                            ).enumerable;
                                        }
                                    )
                                )),
                                i.forEach(function (e) {
                                    r(t, e, n[e]);
                                });
                        }
                        return t;
                    })({}, n.query, e);
                return ''.concat(i, '?').concat(o.a.stringify(a));
            };
        },
        function (t, e) {
            var n = [],
                i = [];
            function o(t, e) {
                if (((e = e || {}), void 0 === t))
                    throw new Error(
                        'insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).'
                    );
                var o,
                    r = !0 === e.prepend ? 'prepend' : 'append',
                    a =
                        void 0 !== e.container
                            ? e.container
                            : document.querySelector('head'),
                    s = n.indexOf(a);
                return (
                    -1 === s && ((s = n.push(a) - 1), (i[s] = {})),
                    void 0 !== i[s] && void 0 !== i[s][r]
                        ? (o = i[s][r])
                        : ((o = i[s][r] = (function () {
                              var t = document.createElement('style');
                              return t.setAttribute('type', 'text/css'), t;
                          })()),
                          'prepend' === r
                              ? a.insertBefore(o, a.childNodes[0])
                              : a.appendChild(o)),
                    65279 === t.charCodeAt(0) && (t = t.substr(1, t.length)),
                    o.styleSheet
                        ? (o.styleSheet.cssText += t)
                        : (o.textContent += t),
                    o
                );
            }
            (t.exports = o), (t.exports.insertCss = o);
        },
        function (t, e, n) {
            var i, o, r;
            (o = [e, t]),
                void 0 ===
                    (r =
                        'function' ==
                        typeof (i = function (t, e) {
                            'use strict';
                            var n = 5e3,
                                i = 'callback';
                            function o() {
                                return (
                                    'jsonp_' +
                                    Date.now() +
                                    '_' +
                                    Math.ceil(1e5 * Math.random())
                                );
                            }
                            function r(t) {
                                try {
                                    delete window[t];
                                } catch (e) {
                                    window[t] = void 0;
                                }
                            }
                            function a(t) {
                                var e = document.getElementById(t);
                                e &&
                                    document
                                        .getElementsByTagName('head')[0]
                                        .removeChild(e);
                            }
                            e.exports = function (t) {
                                var e =
                                        arguments.length <= 1 ||
                                        void 0 === arguments[1]
                                            ? {}
                                            : arguments[1],
                                    s = t,
                                    c = e.timeout || n,
                                    l = e.jsonpCallback || i,
                                    u = void 0;
                                return new Promise(function (n, i) {
                                    var p = e.jsonpCallbackFunction || o(),
                                        d = l + '_' + p;
                                    (window[p] = function (t) {
                                        n({
                                            ok: !0,
                                            json: function () {
                                                return Promise.resolve(t);
                                            },
                                        }),
                                            u && clearTimeout(u),
                                            a(d),
                                            r(p);
                                    }),
                                        (s +=
                                            -1 === s.indexOf('?') ? '?' : '&');
                                    var f = document.createElement('script');
                                    f.setAttribute('src', '' + s + l + '=' + p),
                                        e.charset &&
                                            f.setAttribute(
                                                'charset',
                                                e.charset
                                            ),
                                        (f.id = d),
                                        document
                                            .getElementsByTagName('head')[0]
                                            .appendChild(f),
                                        (u = setTimeout(function () {
                                            i(
                                                new Error(
                                                    'JSONP request to ' +
                                                        t +
                                                        ' timed out'
                                                )
                                            ),
                                                r(p),
                                                a(d),
                                                (window[p] = function () {
                                                    r(p);
                                                });
                                        }, c)),
                                        (f.onerror = function () {
                                            i(
                                                new Error(
                                                    'JSONP request to ' +
                                                        t +
                                                        ' failed'
                                                )
                                            ),
                                                r(p),
                                                a(d),
                                                u && clearTimeout(u);
                                        });
                                });
                            };
                        })
                            ? i.apply(e, o)
                            : i) || (t.exports = r);
        },
        function (t, e, n) {
            'use strict';
            var i = n(13),
                o = n(14),
                r = n(15);
            function a(t, e) {
                return e.encode ? (e.strict ? i(t) : encodeURIComponent(t)) : t;
            }
            function s(t) {
                var e = t.indexOf('?');
                return -1 === e ? '' : t.slice(e + 1);
            }
            function c(t, e) {
                var n = (function (t) {
                        var e;
                        switch (t.arrayFormat) {
                            case 'index':
                                return function (t, n, i) {
                                    (e = /\[(\d*)\]$/.exec(t)),
                                        (t = t.replace(/\[\d*\]$/, '')),
                                        e
                                            ? (void 0 === i[t] && (i[t] = {}),
                                              (i[t][e[1]] = n))
                                            : (i[t] = n);
                                };
                            case 'bracket':
                                return function (t, n, i) {
                                    (e = /(\[\])$/.exec(t)),
                                        (t = t.replace(/\[\]$/, '')),
                                        e
                                            ? void 0 !== i[t]
                                                ? (i[t] = [].concat(i[t], n))
                                                : (i[t] = [n])
                                            : (i[t] = n);
                                };
                            default:
                                return function (t, e, n) {
                                    void 0 !== n[t]
                                        ? (n[t] = [].concat(n[t], e))
                                        : (n[t] = e);
                                };
                        }
                    })((e = o({ arrayFormat: 'none' }, e))),
                    i = Object.create(null);
                return 'string' != typeof t
                    ? i
                    : (t = t.trim().replace(/^[?#&]/, ''))
                    ? (t.split('&').forEach(function (t) {
                          var e = t.replace(/\+/g, ' ').split('='),
                              o = e.shift(),
                              a = e.length > 0 ? e.join('=') : void 0;
                          (a = void 0 === a ? null : r(a)), n(r(o), a, i);
                      }),
                      Object.keys(i)
                          .sort()
                          .reduce(function (t, e) {
                              var n = i[e];
                              return (
                                  Boolean(n) &&
                                  'object' == typeof n &&
                                  !Array.isArray(n)
                                      ? (t[e] = (function t(e) {
                                            return Array.isArray(e)
                                                ? e.sort()
                                                : 'object' == typeof e
                                                ? t(Object.keys(e))
                                                      .sort(function (t, e) {
                                                          return (
                                                              Number(t) -
                                                              Number(e)
                                                          );
                                                      })
                                                      .map(function (t) {
                                                          return e[t];
                                                      })
                                                : e;
                                        })(n))
                                      : (t[e] = n),
                                  t
                              );
                          }, Object.create(null)))
                    : i;
            }
            (e.extract = s),
                (e.parse = c),
                (e.stringify = function (t, e) {
                    !1 ===
                        (e = o(
                            { encode: !0, strict: !0, arrayFormat: 'none' },
                            e
                        )).sort && (e.sort = function () {});
                    var n = (function (t) {
                        switch (t.arrayFormat) {
                            case 'index':
                                return function (e, n, i) {
                                    return null === n
                                        ? [a(e, t), '[', i, ']'].join('')
                                        : [
                                              a(e, t),
                                              '[',
                                              a(i, t),
                                              ']=',
                                              a(n, t),
                                          ].join('');
                                };
                            case 'bracket':
                                return function (e, n) {
                                    return null === n
                                        ? a(e, t)
                                        : [a(e, t), '[]=', a(n, t)].join('');
                                };
                            default:
                                return function (e, n) {
                                    return null === n
                                        ? a(e, t)
                                        : [a(e, t), '=', a(n, t)].join('');
                                };
                        }
                    })(e);
                    return t
                        ? Object.keys(t)
                              .sort(e.sort)
                              .map(function (i) {
                                  var o = t[i];
                                  if (void 0 === o) return '';
                                  if (null === o) return a(i, e);
                                  if (Array.isArray(o)) {
                                      var r = [];
                                      return (
                                          o.slice().forEach(function (t) {
                                              void 0 !== t &&
                                                  r.push(n(i, t, r.length));
                                          }),
                                          r.join('&')
                                      );
                                  }
                                  return a(i, e) + '=' + a(o, e);
                              })
                              .filter(function (t) {
                                  return t.length > 0;
                              })
                              .join('&')
                        : '';
                }),
                (e.parseUrl = function (t, e) {
                    return { url: t.split('?')[0] || '', query: c(s(t), e) };
                });
        },
        function (t, e, n) {
            'use strict';
            var i = n(17),
                o = n(6),
                r = n(18),
                a = n(7);
            t.exports = function (t, e) {
                return null == t
                    ? {}
                    : (i(o(arguments, 1), function (e) {
                          a(e) &&
                              r(e, function (e, n) {
                                  null == t[n] && (t[n] = e);
                              });
                      }),
                      t);
            };
        },
        function (t, e, n) {
            'use strict';
            /*!
             * array-slice <https://github.com/jonschlinkert/array-slice>
             *
             * Copyright (c) 2014-2017, Jon Schlinkert.
             * Released under the MIT License.
             */ function i(t, e, n) {
                return (e =
                    null == e
                        ? n || 0
                        : e < 0
                        ? Math.max(t + e, 0)
                        : Math.min(e, t));
            }
            t.exports = function (t, e, n) {
                var o = t.length,
                    r = [];
                for (e = i(o, e), n = i(o, n, o); e < n; ) r.push(t[e++]);
                return r;
            };
        },
        function (t, e, n) {
            'use strict';
            /*!
             * isobject <https://github.com/jonschlinkert/isobject>
             *
             * Copyright (c) 2014-2017, Jon Schlinkert.
             * Released under the MIT License.
             */ t.exports = function (t) {
                return (
                    null != t && 'object' == typeof t && !1 === Array.isArray(t)
                );
            };
        },
        function (t, e) {
            t.exports = function (t) {
                var e = document.createElement('script');
                e.setAttribute('type', 'application/ld+json'),
                    (e.textContent = JSON.stringify(t)),
                    document.body.appendChild(e);
            };
        },
        function (t, e, n) {
            var i;
            !(function (e) {
                'use strict';
                function o(t) {
                    return t.toUpperCase();
                }
                function r(t) {
                    return t.toLowerCase();
                }
                function a(t) {
                    for (
                        var e,
                            n,
                            i = {},
                            a = /^data\-/,
                            s = t.attributes.length,
                            c = -1;
                        ++c < s;

                    )
                        (n = (e = t.attributes[c]).name),
                            a.test(n) &&
                                ((n = n.replace(a, '')),
                                (i[
                                    (n = n
                                        .toString()
                                        .trim()
                                        .replace(/[\-_]/g, ' ')
                                        .replace(/\s[a-z]/g, o)
                                        .replace(/\s+/g, '')
                                        .replace(/^[A-Z]/g, r))
                                ] = e.value));
                    return i;
                }
                void 0 ===
                    (i = function () {
                        return a;
                    }.call(e, n, e, t)) || (t.exports = i);
            })(this);
        },
        function (t, e) {
            t.exports =
                '.bit-widget {\n  min-width: 250px;\n  padding-bottom: 10px; }\n  .bit-widget .bit-spacer {\n    height: 10px; }\n  .bit-widget .bit-no-dates-container {\n    border-top: 1px solid rgba(124, 124, 124, 0.25);\n    text-align: center;\n    margin: 0px 10px 0px 10px;\n    padding: 100px 0px 100px 0px; }\n    .bit-widget .bit-no-dates-container .bit-no-dates-title {\n      text-transform: uppercase;\n      font-size: 15px;\n      font-weight: bold;\n      margin-bottom: 5px;\n      line-height: 25px; }\n    .bit-widget .bit-no-dates-container .bit-track-button {\n      text-decoration: none;\n      display: inline-block;\n      line-height: 44px;\n      width: 284px;\n      margin: 20px 0 0 0;\n      text-transform: uppercase;\n      font-weight: bold; }\n  .bit-widget .bit-nav-bar-container {\n    padding: 0px 10px 0px 10px; }\n    .bit-widget .bit-nav-bar-container .bit-nav-bar {\n      display: flex;\n      float: none;\n      flex-direction: row;\n      align-items: flex-end;\n      padding: 0px 0 10px 0; }\n      .bit-widget .bit-nav-bar-container .bit-nav-bar .bit-logo-container {\n        margin: 0 0 0 auto; }\n  .bit-widget .bit-top-track-button {\n    display: block;\n    font-size: 16px;\n    font-weight: 700;\n    padding: 5px 40px  0 10px; }\n    .bit-widget .bit-top-track-button span {\n      text-decoration: underline; }\n  .bit-widget .bit-upcoming-events, .bit-widget .bit-past-events {\n    margin-bottom: 8px;\n    margin: 0px 10px 10px 10px; }\n  .bit-widget .bit-local-events-container {\n    margin: 0px 10px 0px 10px; }\n  .bit-widget .bit-upcoming-events-show-all-button, .bit-widget .bit-past-events-show-all-button, .bit-widget .bit-play-my-city-button {\n    font-size: 0.88em;\n    font-weight: bold;\n    line-height: 44px;\n    text-align: center;\n    cursor: pointer;\n    text-transform: uppercase;\n    margin: 0px 10px 0px 10px; }\n  .bit-widget .bit-upcoming-events-show-all-button, .bit-widget .bit-past-events-show-all-button {\n    background-color: transparent; }\n  .bit-widget .bit-play-my-city-button {\n    display: block; }\n  .bit-widget .bit-event-list-title {\n    font-weight: bold;\n    padding: 0px 12px 0 0;\n    display: inline-block;\n    font-size: 14px; }\n    .bit-widget .bit-event-list-title.bit-clickable {\n      text-decoration: underline;\n      cursor: pointer; }\n  .bit-widget .bit-event {\n    text-decoration: none;\n    padding: 17px 0;\n    line-height: 22px; }\n    .bit-widget .bit-event .bit-event-buttons {\n      display: flex;\n      flex-direction: column-reverse;\n      align-items: center;\n      justify-content: space-between;\n      margin: 10px 0 0 0; }\n    .bit-widget .bit-event .bit-details:first-child {\n      flex-grow: 1; }\n    .bit-widget .bit-event .bit-date {\n      font-weight: bold; }\n    .bit-widget .bit-event .bit-startTime-container {\n      display: inline-block;\n      margin-left: 4px; }\n      .bit-widget .bit-event .bit-startTime-container .bit-startTime {\n        font-weight: bold; }\n    .bit-widget .bit-event .bit-location {\n      font-weight: bold;\n      margin-top: 1px; }\n    .bit-widget .bit-event .bit-button {\n      text-align: center;\n      line-height: 44px;\n      font-weight: bold; }\n    .bit-widget .bit-event .bit-rsvp {\n      background-color: transparent;\n      font-size: 0.88em;\n      text-transform: uppercase; }\n    .bit-widget .bit-event .bit-rsvp-container {\n      flex-basis: 100%;\n      width: 100%;\n      margin-top: 5px; }\n    .bit-widget .bit-event .bit-offers-container {\n      flex-basis: 100%;\n      width: 100%; }\n    .bit-widget .bit-event .bit-offers {\n      position: relative;\n      cursor: pointer; }\n    .bit-widget .bit-event .bit-lineUp-container {\n      margin-top: 2px;\n      margin: 2px 0 3px 0; }\n      .bit-widget .bit-event .bit-lineUp-container .bit-lineUp-with {\n        margin-right: 4px; }\n      .bit-widget .bit-event .bit-lineUp-container .bit-lineUp {\n        font-size: 0.88em;\n        line-height: 17px; }\n    .bit-widget .bit-event .on-sale-date {\n      margin: 2px 0 0 0; }\n    .bit-widget .bit-event .bit-details a, .bit-widget .bit-event .bit-offers-menu a {\n      display: block;\n      text-decoration: none; }\n    .bit-widget .bit-event .bit-display-none {\n      display: none; }\n    .bit-widget .bit-event .bit-transparent {\n      opacity: 0; }\n    .bit-widget .bit-event .bit-offers-menu {\n      position: absolute;\n      border: solid 1px #cbcbcb;\n      box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.11);\n      top: 46px;\n      left: -1px;\n      z-index: 50;\n      background-color: white;\n      color: black;\n      transition: opacity 0.25s ease-out;\n      line-height: 48px;\n      width: 100%; }\n    .bit-widget .bit-event .bit-overlay {\n      position: fixed;\n      z-index: 30;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0; }\n    .bit-widget .bit-event .bit-offers-text {\n      text-transform: uppercase;\n      font-size: 0.88em;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n    .bit-widget .bit-event .bit-offer {\n      text-transform: uppercase;\n      font-size: 0.88em; }\n      .bit-widget .bit-event .bit-offer:hover {\n        background-color: rgba(81, 81, 81, 0.1); }\n  .bit-widget a {\n    text-decoration: none;\n    color: inherit;\n    box-shadow: none; }\n  .bit-widget .bit-logo-desktop {\n    display: none; }\n  .bit-widget .bit-logo {\n    position: relative; }\n  .bit-widget.bit-layout-logo-ipad .bit-logo-mobile {\n    display: none; }\n  .bit-widget.bit-layout-logo-ipad .bit-logo-desktop {\n    display: block; }\n  .bit-widget.bit-layout-ipad .bit-upcoming-events, .bit-widget.bit-layout-ipad .bit-past-events {\n    margin-bottom: 8px;\n    margin: 0px 10px 10px 10px; }\n  .bit-widget.bit-layout-ipad .bit-local-events-container {\n    margin: 0px 10px 0px 10px; }\n  .bit-widget.bit-layout-ipad .bit-event-list-title {\n    font-weight: bold;\n    padding: 0px 12px 0 0;\n    display: inline-block; }\n    .bit-widget.bit-layout-ipad .bit-event-list-title.bit-clickable {\n      text-decoration: underline;\n      cursor: pointer; }\n  .bit-widget.bit-layout-ipad .bit-event {\n    display: flex;\n    flex-direction: row;\n    text-decoration: none;\n    padding: 16px 10px; }\n    .bit-widget.bit-layout-ipad .bit-event .bit-details {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: center; }\n    .bit-widget.bit-layout-ipad .bit-event .bit-event-buttons {\n      flex-direction: column-reverse;\n      margin: 0 0 0 15px; }\n    .bit-widget.bit-layout-ipad .bit-event .bit-button {\n      width: 150px; }\n    .bit-widget.bit-layout-ipad .bit-event .bit-rsvp-container {\n      flex-basis: auto;\n      margin: 4px 0 0 0; }\n    .bit-widget.bit-layout-ipad .bit-event .bit-offers-container {\n      flex-basis: auto; }\n    .bit-widget.bit-layout-ipad .bit-event .bit-offers {\n      flex-basis: auto;\n      margin-left: 0px;\n      margin-top: 0px; }\n  .bit-widget.bit-layout-desktop .bit-details {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center; }\n  .bit-widget.bit-layout-desktop .bit-event {\n    padding: 10px 6px;\n    display: flex;\n    flex-direction: row; }\n    .bit-widget.bit-layout-desktop .bit-event .bit-button {\n      width: 150px; }\n    .bit-widget.bit-layout-desktop .bit-event:hover {\n      padding: 10px 6px;\n      background-color: rgba(81, 81, 81, 0.1); }\n  .bit-widget.bit-layout-desktop .bit-offer:hover {\n    background-color: rgba(81, 81, 81, 0.1); }\n  .bit-widget.bit-layout-desktop .bit-date {\n    min-width: 95px;\n    margin: 0 15px 0 0; }\n  .bit-widget.bit-layout-desktop .bit-location {\n    margin: 0 14px 0 5px;\n    text-align: right;\n    font-weight: normal;\n    hyphens: auto; }\n  .bit-widget.bit-layout-desktop .bit-titleWrapper {\n    margin-right: auto; }\n    .bit-widget.bit-layout-desktop .bit-titleWrapper .bit-venue {\n      margin: 0 auto 0 0; }\n  .bit-widget.bit-layout-desktop .bit-rsvp-container {\n    padding: 0px;\n    margin-top: 0px; }\n  .bit-widget.bit-layout-desktop .bit-offers {\n    margin-left: 15px;\n    margin-top: 0px; }\n  .bit-widget img.bit-widget-loading {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    height: 20px;\n    width: 20px; }\n  .bit-widget .google-pixel-iframe {\n    height: 1px;\n    width: 1px;\n    display: none; }\n';
        },
        function (t, e) {
            var n = {};
            !(function (t, e) {
                'use strict';
                (t = t || 'docReady'), (e = e || window);
                var n = [],
                    i = !1,
                    o = !1;
                function r() {
                    if (!i) {
                        i = !0;
                        for (var t = 0; t < n.length; t++)
                            n[t].fn.call(window, n[t].ctx);
                        n = [];
                    }
                }
                function a() {
                    'complete' === document.readyState && r();
                }
                e[t] = function (t, e) {
                    if ('function' != typeof t)
                        throw new TypeError(
                            'callback for docReady(fn) must be a function'
                        );
                    i
                        ? setTimeout(function () {
                              t(e);
                          }, 1)
                        : (n.push({ fn: t, ctx: e }),
                          'complete' === document.readyState ||
                          (!document.attachEvent &&
                              'interactive' === document.readyState)
                              ? setTimeout(r, 1)
                              : o ||
                                (document.addEventListener
                                    ? (document.addEventListener(
                                          'DOMContentLoaded',
                                          r,
                                          !1
                                      ),
                                      window.addEventListener('load', r, !1))
                                    : (document.attachEvent(
                                          'onreadystatechange',
                                          a
                                      ),
                                      window.attachEvent('onload', r)),
                                (o = !0)));
                };
            })('docReady', n),
                (t.exports = n);
        },
        function (t, e, n) {
            'use strict';
            var i = Function.prototype.toString,
                o = /^\s*class\b/,
                r = function (t) {
                    try {
                        var e = i.call(t);
                        return o.test(e);
                    } catch (t) {
                        return !1;
                    }
                },
                a = Object.prototype.toString,
                s =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.toStringTag;
            t.exports = function (t) {
                if (!t) return !1;
                if ('function' != typeof t && 'object' != typeof t) return !1;
                if ('function' == typeof t && !t.prototype) return !0;
                if (s)
                    return (function (t) {
                        try {
                            return !r(t) && (i.call(t), !0);
                        } catch (t) {
                            return !1;
                        }
                    })(t);
                if (r(t)) return !1;
                var e = a.call(t);
                return (
                    '[object Function]' === e ||
                    '[object GeneratorFunction]' === e
                );
            };
        },
        function (t, e, n) {
            'use strict';
            t.exports = function (t) {
                return encodeURIComponent(t).replace(/[!'()*]/g, function (t) {
                    return '%' + t.charCodeAt(0).toString(16).toUpperCase();
                });
            };
        },
        function (t, e, n) {
            'use strict';
           var i =
                    Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable;
            function a(t) {
                if (null == t)
                    throw new TypeError(
                        'Object.assign cannot be called with null or undefined'
                    );
                return Object(t);
            }
            t.exports = (function () {
                try {
                    if (!Object.assign) return !1;
                    var t = new String('abc');
                    if (
                        ((t[5] = 'de'),
                        '5' === Object.getOwnPropertyNames(t)[0])
                    )
                        return !1;
                    for (var e = {}, n = 0; n < 10; n++)
                        e['_' + String.fromCharCode(n)] = n;
                    if (
                        '0123456789' !==
                        Object.getOwnPropertyNames(e)
                            .map(function (t) {
                                return e[t];
                            })
                            .join('')
                    )
                        return !1;
                    var i = {};
                    return (
                        'abcdefghijklmnopqrst'.split('').forEach(function (t) {
                            i[t] = t;
                        }),
                        'abcdefghijklmnopqrst' ===
                            Object.keys(Object.assign({}, i)).join('')
                    );
                } catch (t) {
                    return !1;
                }
            })()
                ? Object.assign
                : function (t, e) {
                      for (
                          var n, s, c = a(t), l = 1;
                          l < arguments.length;
                          l++
                      ) {
                          for (var u in (n = Object(arguments[l])))
                              o.call(n, u) && (c[u] = n[u]);
                          if (i) {
                              s = i(n);
                              for (var p = 0; p < s.length; p++)
                                  r.call(n, s[p]) && (c[s[p]] = n[s[p]]);
                          }
                      }
                      return c;
                  };
        },
        function (t, e, n) {
            'use strict';
            var i = new RegExp('%[a-f0-9]{2}', 'gi'),
                o = new RegExp('(%[a-f0-9]{2})+', 'gi');
            function r(t, e) {
                try {
                    return decodeURIComponent(t.join(''));
                } catch (t) {}
                if (1 === t.length) return t;
                e = e || 1;
                var n = t.slice(0, e),
                    i = t.slice(e);
                return Array.prototype.concat.call([], r(n), r(i));
            }
            function a(t) {
                try {
                    return decodeURIComponent(t);
                } catch (o) {
                    for (var e = t.match(i), n = 1; n < e.length; n++)
                        e = (t = r(e, n).join('')).match(i);
                    return t;
                }
            }
            t.exports = function (t) {
                if ('string' != typeof t)
                    throw new TypeError(
                        'Expected `encodedURI` to be of type `string`, got `' +
                            typeof t +
                            '`'
                    );
                try {
                    return (t = t.replace(/\+/g, ' ')), decodeURIComponent(t);
                } catch (e) {
                    return (function (t) {
                        for (
                            var e = { '%FE%FF': 'ï¿½ï¿½', '%FF%FE': 'ï¿½ï¿½' },
                                n = o.exec(t);
                            n;

                        ) {
                            try {
                                e[n[0]] = decodeURIComponent(n[0]);
                            } catch (t) {
                                var i = a(n[0]);
                                i !== n[0] && (e[n[0]] = i);
                            }
                            n = o.exec(t);
                        }
                        e['%C2'] = 'ï¿½';
                        for (var r = Object.keys(e), s = 0; s < r.length; s++) {
                            var c = r[s];
                            t = t.replace(new RegExp(c, 'g'), e[c]);
                        }
                        return t;
                    })(t);
                }
            };
        },
        function (t, e, n) {
            'use strict';
            /*!
             * object.defaults <https://github.com/jonschlinkert/object.defaults>
             *
             * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
             * Released under the MIT License.
             */ (t.exports = n(5)), (t.exports.immutable = n(20));
        },
        function (t, e, n) {
            'use strict';
            /*!
             * array-each <https://github.com/jonschlinkert/array-each>
             *
             * Copyright (c) 2015, 2017, Jon Schlinkert.
             * Released under the MIT License.
             */ t.exports = function (t, e, n) {
                if (null != t)
                    for (var i = t.length, o = -1; ++o < i; ) {
                        var r = t[o];
                        if (!1 === e.call(n, r, o, t)) break;
                    }
            };
        },
        function (t, e, n) {
            'use strict';
            /*!
             * for-own <https://github.com/jonschlinkert/for-own>
             *
             * Copyright (c) 2014-2017, Jon Schlinkert.
             * Released under the MIT License.
             */ var i = n(19),
                o = Object.prototype.hasOwnProperty;
            t.exports = function (t, e, n) {
                i(t, function (i, r) {
                    if (o.call(t, r)) return e.call(n, t[r], r, t);
                });
            };
        },
        function (t, e, n) {
            'use strict';
            /*!
             * for-in <https://github.com/jonschlinkert/for-in>
             *
             * Copyright (c) 2014-2017, Jon Schlinkert.
             * Released under the MIT License.
             */ t.exports = function (t, e, n) {
                for (var i in t) if (!1 === e.call(n, t[i], i, t)) break;
            };
        },
        function (t, e, n) {
            'use strict';
            var i = n(6),
                o = n(5);
            t.exports = function () {
                var t = i(arguments);
                return o.apply(null, [{}].concat(t));
            };
        },
        function (t, e, n) {
            'use strict';
            t.exports = function (t, e) {
                var n = {};
                for (var i in t) n[t[i]] = i;
                return n.hasOwnProperty(e);
            };
        },
        function (t, e, n) {
            'use strict';
            /*!
             * object.pick <https://github.com/jonschlinkert/object.pick>
             *
             * Copyright (c) 2014-2015 Jon Schlinkert, contributors.
             * Licensed under the MIT License
             */ var i = n(7);
            t.exports = function (t, e) {
                if (!i(t) && 'function' != typeof t) return {};
                var n = {};
                if ('string' == typeof e) return e in t && (n[e] = t[e]), n;
                for (var o = e.length, r = -1; ++r < o; ) {
                    var a = e[r];
                    a in t && (n[a] = t[a]);
                }
                return n;
            };
        },
        function (t, e, n) {
            var i = n(24),
                o = n(25),
                r = n(26),
                a = n(27),
                s = n(28),
                c = n(29),
                l = n(30);
            t.exports = { en: i, fr: o, de: r, es: a, it: s, ja: c, pt: l };
        },
        function (t) {
            t.exports = JSON.parse(
                '{"Local Dates":"Local Dates","Past Dates":"Past Dates","Upcoming Dates":"Upcoming Dates","Tickets":"Tickets","Presale":"Presale","Merch":"Merch","VIP":"VIP","Sold Out":"Sold Out","More Info":"More Info","Show All Dates":"Show All Dates","Going":"Going","Interested":"Interested","with":"with","Tickets & More":"Tickets & More","No Upcoming Tour Dates":"No Upcoming Tour Dates","<b>Track</b> to get notified about upcoming shows in your area.":"<b>Track</b> to get notified about upcoming shows in your area.","Track":"Track","RSVP":"RSVP","I Was There":"I Was There","On Sale":"On Sale","Notify Me":"Notify Me","<span>Track</span> to get concert and tour updates.":"<span>Track</span> to get concert and tour updates.","<span>Track</span> to get concert, live stream and tour updates.":"<span>Track</span> to get concert, live stream and tour updates.","Free":"Free","Play My City":"Play My City","Ask to play in your city":"Ask to play in your city","":""}'
            );
        },
        function (t) {
            t.exports = JSON.parse(
                '{"Local Dates":"Dates Locales","Past Dates":"Anciennes Dates","Upcoming Dates":"Prochaines Dates","Tickets":"Billets","Presale":"Avant-Vente","Merch":"Goodies","VIP":"VIP","Sold Out":"Ã‰puisÃ©","More Info":"Plus d\'info","Show All Dates":"Afficher toutes les Dates","Going":"J\'y vais","Interested":"IntÃ©ressÃ©","with":"avec","Tickets & More":"Billets & Autre","No Upcoming Tour Dates":"Pas de dates Ã  venir","<b>Track</b> to get notified about upcoming shows in your area.":"<b>Suivre</b> pour recevoir les dates des prochains concerts dans votre rÃ©gion.","Track":"Suivre","RSVP":"RSVP","I Was There":"J\'y Ã©tais","On Sale":"En vente","Notify Me":"Me prÃ©venir","<span>Track</span> to get concert and tour updates.":"<span>Suivre</span> pour recevoir news et info concerts.","<span>Track</span> to get concert, live stream and tour updates.":"<span>Suivre</span> pour recevoir info de concerts, live streams et de tournÃ©es.","Free":"Gratuit","Play My City":"Jouer dans ma ville","Ask to play in your city":"AViens jouer dans ma ville","":""}'
            );
        },
        function (t) {
            t.exports = JSON.parse(
                '{"Local Dates":"Lokale Daten","Past Dates":"Alte Daten","Upcoming Dates":"ZukÃ¼nftige Daten","Tickets":"Karten","Presale":"Vorverkauf","Merch":"Verkauf","VIP":"VIP","Sold Out":"Ausverkauft","More Info":"Weitere Infos","Show All Dates":"Alle Termine","Going":"Ausgehen","Interested":"Interessiert","with":"mit","Tickets & More":"Tickets und mehr","No Upcoming Tour Dates":"Keine ZukÃ¼nftige Daten","<b>Track</b> to get notified about upcoming shows in your area.":"<b>Folgen</b> um zukÃ¼nftige Konzerte in deiner Region zu finden.","Track":"Folgen","RSVP":"RSVP","I Was There":"Ich war da","On Sale":"Im Angebot","Notify Me":"Alarmiere mich","<span>Track</span> to get concert and tour updates.":"<span>Folgen</span> Um Konzertaktualisierungen zu erhalten.","<span>Track</span> to get concert, live stream and tour updates.":"<span>Folgen</span> um Updates zu Shows, Tourdaten & Live-Ãœbertragungen zu erhalten.","Free":"Kostenlos","Play My City":"Spiel in meiner Stadt","Ask to play in your city":"Bitten Sie, in Ihrer Stadt zu spielen","":""}'
            );
        },
        function (t) {
            t.exports = JSON.parse(
                '{"Local Dates":"Fechas Locales","Past Dates":"Fechas Pasadas","Upcoming Dates":"Fechas PrÃ³ximas","Tickets":"Entradas","Presale":"Preventa","Merch":"MercancÃ­a","VIP":"VIP","Sold Out":"Agotado","More Info":"MÃ¡s Info","Show All Dates":"Mostrar todas las fechas","Going":"Acudiendo","Interested":"Interesado","with":"con","Tickets & More":"Entradas y mÃ¡s","No Upcoming Tour Dates":"No hay fechas de giras prÃ³ximas","<b>Track</b> to get notified about upcoming shows in your area.":"<b>Seguir</b> para obtener notificaciones sobre fechas prÃ³ximas en tu Ã¡rea.","Track":"Seguir","RSVP":"RSVP","I Was There":"Estuve allÃ­","On Sale":"A la venta","Notify Me":"NotifÃ­came","<span>Track</span> to get concert and tour updates.":"<span>Seguir</span> para obtener notificaciones de conciertos.","<span>Track</span> to get concert, live stream and tour updates.":"<span>Seguir</span> para obtener notificaciones de conciertos y transmisiones en vivo.","Free":"Gratis","Play My City":"Actuad en mi ciudad","Ask to play in your city":"Pide a que actÃºe en tu ciudad","":""}'
            );
        },
        function (t) {
            t.exports = JSON.parse(
                '{"Local Dates":"Date Locali","Past Dates":"Date Passate","Upcoming Dates":"Date Future","Tickets":"Biglietti","Presale":"Prevendita","Merch":"Prodotti","VIP":"VIP","Sold Out":"Tutto esaurito","More Info":"PiÃ¹ Info","Show All Dates":"Mostra tutte le date","Going":"In corso","Interested":"Interessato","with":"con","Tickets & More":"Biglietti e altro","No Upcoming Tour Dates":"Nessuna data del tour in programma","<b>Track</b> to get notified about upcoming shows in your area.":"<b>Segui</b> per ricevere le notifiche sugli spettacoli in programma nella tua zona.","Track":"Segui","Notify Me":"Notify Me","RSVP":"RSVP","Free":"Gratis","Play My City":"Play My City","":""}'
            );
        },
        function (t) {
            t.exports = JSON.parse(
                '{"Local Dates":"æ—¥ç¨‹","Past Dates":"éŽåŽ»ã®æ—¥ç¨‹","Upcoming Dates":"ä»Šå¾Œã®æ—¥ç¨‹","Tickets":"ãƒã‚±ãƒƒãƒˆ","Presale":"å…ˆè¡Œè²©å£²","Merch":"ç‰©è²©","VIP":"VIP","Sold Out":"å®Œå£²","More Info":"è©³ç´°æƒ…å ±","Show All Dates":"æ—¥ç¨‹ã‚’ã™ã¹ã¦è¡¨ç¤º","Going":"å‚åŠ ","Interested":"èˆˆå‘³ã‚ã‚Š","with":"ä¸€ç·’ã«","Tickets & More":"ãƒã‚±ãƒƒãƒˆãã®ä»–ã®æƒ…å ±","No Upcoming Tour Dates":"ä»Šå¾Œã®ãƒ„ã‚¢ãƒ¼æ—¥ç¨‹ã¯ã‚ã‚Šã¾ã›ã‚“","<b>Track</b> to get notified about upcoming shows in your area.":"<b>ãƒ•ã‚©ãƒ­ãƒ¼</b>ã—ã¦ã€ãŠä½ã¾ã„ã®åœ°åŸŸã§è¿‘æ—¥é–‹å‚¬äºˆå®šã®å…¬æ¼”ã«é–¢ã™ã‚‹é€šçŸ¥ã‚’å—ã‘å–ã£ã¦ãã ã•ã„ã€‚","Track":"ãƒ•ã‚©ãƒ­ãƒ¼","RSVP":"å‚åŠ äºˆå®š","I Was There":"è¡Œãã¾ã—ãŸã€‚","On Sale":"ç™ºå£²ä¸­","Notify Me":"é€šçŸ¥ã‚’å—ã‘ã‚‹","<span>Track</span> to get concert and tour updates.":"<span>ãƒ•ã‚©ãƒ­ãƒ¼</span>ã—ã¦ã€ã‚³ãƒ³ã‚µãƒ¼ãƒˆæƒ…å ±ã‚„æœ€æ–°ãƒ„ã‚¢ãƒ¼æƒ…å ±ã‚’ã‚²ãƒƒãƒˆã€‚","<span>Track</span> to get concert, live stream and tour updates.":"<span>ãƒ•ã‚©ãƒ­ãƒ¼</span>ã—ã¦ã€ã‚³ãƒ³ã‚µãƒ¼ãƒˆã‚„ãƒ©ã‚¤ãƒ–ã‚¹ãƒˆãƒªãƒ¼ãƒ ã®æƒ…å ±ã‚’å–å¾—ã—ã¾ã™ã€‚","Free":"ç„¡æ–™","Play My City":"æ‰€åœ¨åœ°ã§ã®å…¬æ¼”ä¾é ¼","Ask to play in your city":"ãŠä½ã¾ã„ã®åœ°åŸŸã§ã®å…¬æ¼”ã‚’ãƒªã‚¯ã‚¨ã‚¹ãƒˆ","":""}'
            );
        },
        function (t) {
            t.exports = JSON.parse(
                '{"Local Dates":"Datas locais","Past Dates":"Datas Passadas","Upcoming Dates":"Datas Futuras","Tickets":"Bilhetes","Presale":"PrÃ©-Venda","Merch":"Merch","VIP":"VIP","Sold Out":"Esgotado","More Info":"Mais informaÃ§Ã£o","Show All Dates":"Mostrar todas as datas","Going":"Eu vou","Interested":"Interessado","with":"com","Tickets & More":"Bilhetes e mais","No Upcoming Tour Dates":"NÃ£o hÃ¡ datas de show marcadas","<b>Track</b> to get notified about upcoming shows in your area.":"<b>Seguir</b> para receber notificaÃ§Ãµes dos prÃ³ximos concertos na tua Ã¡rea.","Track":"Seguir","RSVP":"ConfirmaÃ§Ãµes (RSVP)","I Was There":"Eu estava lÃ¡","On Sale":"Ã€ venda","Notify Me":"Me informe","<span>Track</span> to get concert and tour updates.":"<span>Seguir</span> para obter atualizaÃ§Ãµes concerto y turnÃª.","<span>Track</span> to get concert, live stream and tour updates.":"<span>Seguir</span> para obter atualizaÃ§Ãµes concerto, transmissÃ£o ao vivo e turnÃª.","Free":"Gratuito","Play My City":"Toca na minha cidade","Ask to play in your city":"Pergunte a para jogar em sua cidade","":""}'
            );
        },
        function (t, e) {
            t.exports = {
                widgetOptions: [
                    'artistName',
                    'displayLimit',
                    'autoStyle',
                    'divId',
                    'facebookPageId',
                    'displayLocalDates',
                    'displayPastDates',
                    'displayLogo',
                    'appId',
                    'affilCode',
                    'language',
                    'displayLineup',
                    'displayDetails',
                    'displayTrackButton',
                    'displayPlayMyCity',
                    'displayStartTime',
                ],
                styleOptions: [
                    'textColor',
                    'linkColor',
                    'backgroundColor',
                    'separatorColor',
                    'widgetWidth',
                    'linkTextColor',
                    'font',
                ],
            };
        },
        function (t, e) {
            t.exports = {
                autoStyle: !0,
                displayLocalDates: !1,
                displayPastDates: !1,
                displayLogo: !0,
                displayLineup: !1,
                displayDetails: !1,
                displayTrackButton: !0,
                displayPlayMyCity: !0,
                displayStartTime: !1,
            };
        },
        function (t, e) {
            t.exports = {
                fontSize: '16px',
                font: "'helvetica', 'arial', sans-serif",
                textColor: '#000000',
                linkColor: '#000000',
                linkTextColor: 'white',
                backgroundColor: 'transparent',
                separatorColor: 'rgba(124,124,124,0.25)',
                widgetWidth: '100%',
            };
        },
        function (t, e, n) {
            (function (e, n) {
                /*!
                 * @overview es6-promise - a tiny implementation of Promises/A+.
                 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
                 * @license   Licensed under MIT license
                 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
                 * @version   v4.2.5+7f2b526d
                 */ var i;
                (i = function () {
                    'use strict';
                    function t(t) {
                        return 'function' == typeof t;
                    }
                    var i = Array.isArray
                            ? Array.isArray
                            : function (t) {
                                  return (
                                      '[object Array]' ===
                                      Object.prototype.toString.call(t)
                                  );
                              },
                        o = 0,
                        r = void 0,
                        a = void 0,
                        s = function (t, e) {
                            (b[o] = t),
                                (b[o + 1] = e),
                                2 === (o += 2) && (a ? a(v) : w());
                        },
                        c = 'undefined' != typeof window ? window : void 0,
                        l = c || {},
                        u = l.MutationObserver || l.WebKitMutationObserver,
                        p =
                            'undefined' == typeof self &&
                            void 0 !== e &&
                            '[object process]' === {}.toString.call(e),
                        d =
                            'undefined' != typeof Uint8ClampedArray &&
                            'undefined' != typeof importScripts &&
                            'undefined' != typeof MessageChannel;
                    function f() {
                        var t = setTimeout;
                        return function () {
                            return t(v, 1);
                        };
                    }
                    var b = new Array(1e3);
                    function v() {
                        for (var t = 0; t < o; t += 2)
                            (0, b[t])(b[t + 1]),
                                (b[t] = void 0),
                                (b[t + 1] = void 0);
                        o = 0;
                    }
                    var h,
                        m,
                        y,
                        g,
                        w = void 0;
                    function x(t, e) {
                        var n = this,
                            i = new this.constructor(k);
                        void 0 === i[S] && D(i);
                        var o = n._state;
                        if (o) {
                            var r = arguments[o - 1];
                            s(function () {
                                return A(o, i, r, n._result);
                            });
                        } else E(n, i, t, e);
                        return i;
                    }
                    function I(t) {
                        if (t && 'object' == typeof t && t.constructor === this)
                            return t;
                        var e = new this(k);
                        return _(e, t), e;
                    }
                    p
                        ? (w = function () {
                              return e.nextTick(v);
                          })
                        : u
                        ? ((m = 0),
                          (y = new u(v)),
                          (g = document.createTextNode('')),
                          y.observe(g, { characterData: !0 }),
                          (w = function () {
                              g.data = m = ++m % 2;
                          }))
                        : d
                        ? (((h = new MessageChannel()).port1.onmessage = v),
                          (w = function () {
                              return h.port2.postMessage(0);
                          }))
                        : (w =
                              void 0 === c
                                  ? (function () {
                                        try {
                                            var t = Function(
                                                'return this'
                                            )().require('vertx');
                                            return void 0 !==
                                                (r =
                                                    t.runOnLoop ||
                                                    t.runOnContext)
                                                ? function () {
                                                      r(v);
                                                  }
                                                : f();
                                        } catch (t) {
                                            return f();
                                        }
                                    })()
                                  : f());
                    var S = Math.random().toString(36).substring(2);
                    function k() {}
                    var P = { error: null };
                    function j(t) {
                        try {
                            return t.then;
                        } catch (t) {
                            return (P.error = t), P;
                        }
                    }
                    function T(e, n, i) {
                        n.constructor === e.constructor &&
                        i === x &&
                        n.constructor.resolve === I
                            ? (function (t, e) {
                                  1 === e._state
                                      ? O(t, e._result)
                                      : 2 === e._state
                                      ? C(t, e._result)
                                      : E(
                                            e,
                                            void 0,
                                            function (e) {
                                                return _(t, e);
                                            },
                                            function (e) {
                                                return C(t, e);
                                            }
                                        );
                              })(e, n)
                            : i === P
                            ? (C(e, P.error), (P.error = null))
                            : void 0 === i
                            ? O(e, n)
                            : t(i)
                            ? (function (t, e, n) {
                                  s(function (t) {
                                      var i = !1,
                                          o = (function (t, e, n, i) {
                                              try {
                                                  t.call(e, n, i);
                                              } catch (t) {
                                                  return t;
                                              }
                                          })(
                                              n,
                                              e,
                                              function (n) {
                                                  i ||
                                                      ((i = !0),
                                                      e !== n
                                                          ? _(t, n)
                                                          : O(t, n));
                                              },
                                              function (e) {
                                                  i || ((i = !0), C(t, e));
                                              },
                                              t._label
                                          );
                                      !i && o && ((i = !0), C(t, o));
                                  }, t);
                              })(e, n, i)
                            : O(e, n);
                    }
                    function _(t, e) {
                        var n, i;
                        t === e
                            ? C(
                                  t,
                                  new TypeError(
                                      'You cannot resolve a promise with itself'
                                  )
                              )
                            : ((i = typeof (n = e)),
                              null === n || ('object' !== i && 'function' !== i)
                                  ? O(t, e)
                                  : T(t, e, j(e)));
                    }
                    function N(t) {
                        t._onerror && t._onerror(t._result), M(t);
                    }
                    function O(t, e) {
                        void 0 === t._state &&
                            ((t._result = e),
                            (t._state = 1),
                            0 !== t._subscribers.length && s(M, t));
                    }
                    function C(t, e) {
                        void 0 === t._state &&
                            ((t._state = 2), (t._result = e), s(N, t));
                    }
                    function E(t, e, n, i) {
                        var o = t._subscribers,
                            r = o.length;
                        (t._onerror = null),
                            (o[r] = e),
                            (o[r + 1] = n),
                            (o[r + 2] = i),
                            0 === r && t._state && s(M, t);
                    }
                    function M(t) {
                        var e = t._subscribers,
                            n = t._state;
                        if (0 !== e.length) {
                            for (
                                var i = void 0,
                                    o = void 0,
                                    r = t._result,
                                    a = 0;
                                a < e.length;
                                a += 3
                            )
                                (i = e[a]),
                                    (o = e[a + n]),
                                    i ? A(n, i, o, r) : o(r);
                            t._subscribers.length = 0;
                        }
                    }
                    function A(e, n, i, o) {
                        var r = t(i),
                            a = void 0,
                            s = void 0,
                            c = void 0,
                            l = void 0;
                        if (r) {
                            if (
                                ((a = (function (t, e) {
                                    try {
                                        return t(e);
                                    } catch (t) {
                                        return (P.error = t), P;
                                    }
                                })(i, o)) === P
                                    ? ((l = !0),
                                      (s = a.error),
                                      (a.error = null))
                                    : (c = !0),
                                n === a)
                            )
                                return void C(
                                    n,
                                    new TypeError(
                                        'A promises callback cannot return that same promise.'
                                    )
                                );
                        } else (a = o), (c = !0);
                        void 0 !== n._state ||
                            (r && c
                                ? _(n, a)
                                : l
                                ? C(n, s)
                                : 1 === e
                                ? O(n, a)
                                : 2 === e && C(n, a));
                    }
                    var Z = 0;
                    function D(t) {
                        (t[S] = Z++),
                            (t._state = void 0),
                            (t._result = void 0),
                            (t._subscribers = []);
                    }
                    var L = (function () {
                            function t(t, e) {
                                (this._instanceConstructor = t),
                                    (this.promise = new t(k)),
                                    this.promise[S] || D(this.promise),
                                    i(e)
                                        ? ((this.length = e.length),
                                          (this._remaining = e.length),
                                          (this._result = new Array(
                                              this.length
                                          )),
                                          0 === this.length
                                              ? O(this.promise, this._result)
                                              : ((this.length =
                                                    this.length || 0),
                                                this._enumerate(e),
                                                0 === this._remaining &&
                                                    O(
                                                        this.promise,
                                                        this._result
                                                    )))
                                        : C(
                                              this.promise,
                                              new Error(
                                                  'Array Methods must be provided an Array'
                                              )
                                          );
                            }
                            return (
                                (t.prototype._enumerate = function (t) {
                                    for (
                                        var e = 0;
                                        void 0 === this._state && e < t.length;
                                        e++
                                    )
                                        this._eachEntry(t[e], e);
                                }),
                                (t.prototype._eachEntry = function (t, e) {
                                    var n = this._instanceConstructor,
                                        i = n.resolve;
                                    if (i === I) {
                                        var o = j(t);
                                        if (o === x && void 0 !== t._state)
                                            this._settledAt(
                                                t._state,
                                                e,
                                                t._result
                                            );
                                        else if ('function' != typeof o)
                                            this._remaining--,
                                                (this._result[e] = t);
                                        else if (n === W) {
                                            var r = new n(k);
                                            T(r, t, o),
                                                this._willSettleAt(r, e);
                                        } else
                                            this._willSettleAt(
                                                new n(function (e) {
                                                    return e(t);
                                                }),
                                                e
                                            );
                                    } else this._willSettleAt(i(t), e);
                                }),
                                (t.prototype._settledAt = function (t, e, n) {
                                    var i = this.promise;
                                    void 0 === i._state &&
                                        (this._remaining--,
                                        2 === t
                                            ? C(i, n)
                                            : (this._result[e] = n)),
                                        0 === this._remaining &&
                                            O(i, this._result);
                                }),
                                (t.prototype._willSettleAt = function (t, e) {
                                    var n = this;
                                    E(
                                        t,
                                        void 0,
                                        function (t) {
                                            return n._settledAt(1, e, t);
                                        },
                                        function (t) {
                                            return n._settledAt(2, e, t);
                                        }
                                    );
                                }),
                                t
                            );
                        })(),
                        W = (function () {
                            function e(t) {
                                (this[S] = Z++),
                                    (this._result = this._state = void 0),
                                    (this._subscribers = []),
                                    k !== t &&
                                        ('function' != typeof t &&
                                            (function () {
                                                throw new TypeError(
                                                    'You must pass a resolver function as the first argument to the promise constructor'
                                                );
                                            })(),
                                        this instanceof e
                                            ? (function (t, e) {
                                                  try {
                                                      e(
                                                          function (e) {
                                                              _(t, e);
                                                          },
                                                          function (e) {
                                                              C(t, e);
                                                          }
                                                      );
                                                  } catch (e) {
                                                      C(t, e);
                                                  }
                                              })(this, t)
                                            : (function () {
                                                  throw new TypeError(
                                                      "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                                                  );
                                              })());
                            }
                            return (
                                (e.prototype.catch = function (t) {
                                    return this.then(null, t);
                                }),
                                (e.prototype.finally = function (e) {
                                    var n = this.constructor;
                                    return t(e)
                                        ? this.then(
                                              function (t) {
                                                  return n
                                                      .resolve(e())
                                                      .then(function () {
                                                          return t;
                                                      });
                                              },
                                              function (t) {
                                                  return n
                                                      .resolve(e())
                                                      .then(function () {
                                                          throw t;
                                                      });
                                              }
                                          )
                                        : this.then(e, e);
                                }),
                                e
                            );
                        })();
                    return (
                        (W.prototype.then = x),
                        (W.all = function (t) {
                            return new L(this, t).promise;
                        }),
                        (W.race = function (t) {
                            var e = this;
                            return i(t)
                                ? new e(function (n, i) {
                                      for (var o = t.length, r = 0; r < o; r++)
                                          e.resolve(t[r]).then(n, i);
                                  })
                                : new e(function (t, e) {
                                      return e(
                                          new TypeError(
                                              'You must pass an array to race.'
                                          )
                                      );
                                  });
                        }),
                        (W.resolve = I),
                        (W.reject = function (t) {
                            var e = new this(k);
                            return C(e, t), e;
                        }),
                        (W._setScheduler = function (t) {
                            a = t;
                        }),
                        (W._setAsap = function (t) {
                            s = t;
                        }),
                        (W._asap = s),
                        (W.polyfill = function () {
                            var t = void 0;
                            if (void 0 !== n) t = n;
                            else if ('undefined' != typeof self) t = self;
                            else
                                try {
                                    t = Function('return this')();
                                } catch (t) {
                                    throw new Error(
                                        'polyfill failed because global object is unavailable in this environment'
                                    );
                                }
                            var e = t.Promise;
                            if (e) {
                                var i = null;
                                try {
                                    i = Object.prototype.toString.call(
                                        e.resolve()
                                    );
                                } catch (t) {}
                                if ('[object Promise]' === i && !e.cast) return;
                            }
                            t.Promise = W;
                        }),
                        (W.Promise = W),
                        W
                    );
                }),
                    (t.exports = i());
            }.call(this, n(35), n(36)));
        },
        function (t, e) {
            var n,
                i,
                o = (t.exports = {});
            function r() {
                throw new Error('setTimeout has not been defined');
            }
            function a() {
                throw new Error('clearTimeout has not been defined');
            }
            function s(t) {
                if (n === setTimeout) return setTimeout(t, 0);
                if ((n === r || !n) && setTimeout)
                    return (n = setTimeout), setTimeout(t, 0);
                try {
                    return n(t, 0);
                } catch (e) {
                    try {
                        return n.call(null, t, 0);
                    } catch (e) {
                        return n.call(this, t, 0);
                    }
                }
            }
            !(function () {
                try {
                    n = 'function' == typeof setTimeout ? setTimeout : r;
                } catch (t) {
                    n = r;
                }
                try {
                    i = 'function' == typeof clearTimeout ? clearTimeout : a;
                } catch (t) {
                    i = a;
                }
            })();
            var c,
                l = [],
                u = !1,
                p = -1;
            function d() {
                u &&
                    c &&
                    ((u = !1),
                    c.length ? (l = c.concat(l)) : (p = -1),
                    l.length && f());
            }
            function f() {
                if (!u) {
                    var t = s(d);
                    u = !0;
                    for (var e = l.length; e; ) {
                        for (c = l, l = []; ++p < e; ) c && c[p].run();
                        (p = -1), (e = l.length);
                    }
                    (c = null),
                        (u = !1),
                        (function (t) {
                            if (i === clearTimeout) return clearTimeout(t);
                            if ((i === a || !i) && clearTimeout)
                                return (i = clearTimeout), clearTimeout(t);
                            try {
                                i(t);
                            } catch (e) {
                                try {
                                    return i.call(null, t);
                                } catch (e) {
                                    return i.call(this, t);
                                }
                            }
                        })(t);
                }
            }
            function b(t, e) {
                (this.fun = t), (this.array = e);
            }
            function v() {}
            (o.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++)
                        e[n - 1] = arguments[n];
                l.push(new b(t, e)), 1 !== l.length || u || s(f);
            }),
                (b.prototype.run = function () {
                    this.fun.apply(null, this.array);
                }),
                (o.title = 'browser'),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ''),
                (o.versions = {}),
                (o.on = v),
                (o.addListener = v),
                (o.once = v),
                (o.off = v),
                (o.removeListener = v),
                (o.removeAllListeners = v),
                (o.emit = v),
                (o.prependListener = v),
                (o.prependOnceListener = v),
                (o.listeners = function (t) {
                    return [];
                }),
                (o.binding = function (t) {
                    throw new Error('process.binding is not supported');
                }),
                (o.cwd = function () {
                    return '/';
                }),
                (o.chdir = function (t) {
                    throw new Error('process.chdir is not supported');
                }),
                (o.umask = function () {
                    return 0;
                });
        },
        function (t, e) {
            var n;
            n = (function () {
                return this;
            })();
            try {
                n = n || new Function('return this')();
            } catch (t) {
                'object' == typeof window && (n = window);
            }
            t.exports = n;
        },
        function (t, e, n) {
            'use strict';
            n.r(e);
            var i = n(0),
                o = n.n(i),
                r = n(2),
                a = n.n(r),
                s = function () {},
                c = {},
                l = [],
                u = [];
            function p(t, e) {
                var n,
                    i,
                    o,
                    r,
                    a = u;
                for (r = arguments.length; r-- > 2; ) l.push(arguments[r]);
                for (
                    e &&
                    null != e.children &&
                    (l.length || l.push(e.children), delete e.children);
                    l.length;

                )
                    if ((i = l.pop()) && void 0 !== i.pop)
                        for (r = i.length; r--; ) l.push(i[r]);
                    else
                        'boolean' == typeof i && (i = null),
                            (o = 'function' != typeof t) &&
                                (null == i
                                    ? (i = '')
                                    : 'number' == typeof i
                                    ? (i = String(i))
                                    : 'string' != typeof i && (o = !1)),
                            o && n
                                ? (a[a.length - 1] += i)
                                : a === u
                                ? (a = [i])
                                : a.push(i),
                            (n = o);
                var p = new s();
                return (
                    (p.nodeName = t),
                    (p.children = a),
                    (p.attributes = null == e ? void 0 : e),
                    (p.key = null == e ? void 0 : e.key),
                    void 0 !== c.vnode && c.vnode(p),
                    p
                );
            }
            function d(t, e) {
                for (var n in e) t[n] = e[n];
                return t;
            }
            var f =
                'function' == typeof Promise
                    ? Promise.resolve().then.bind(Promise.resolve())
                    : setTimeout;
            var b = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
                v = [];
            function h(t) {
                !t._dirty &&
                    (t._dirty = !0) &&
                    1 == v.push(t) &&
                    (c.debounceRendering || f)(m);
            }
            function m() {
                var t,
                    e = v;
                for (v = []; (t = e.pop()); ) t._dirty && L(t);
            }
            function y(t, e, n) {
                return 'string' == typeof e || 'number' == typeof e
                    ? void 0 !== t.splitText
                    : 'string' == typeof e.nodeName
                    ? !t._componentConstructor && g(t, e.nodeName)
                    : n || t._componentConstructor === e.nodeName;
            }
            function g(t, e) {
                return (
                    t.normalizedNodeName === e ||
                    t.nodeName.toLowerCase() === e.toLowerCase()
                );
            }
            function w(t) {
                var e = d({}, t.attributes);
                e.children = t.children;
                var n = t.nodeName.defaultProps;
                if (void 0 !== n)
                    for (var i in n) void 0 === e[i] && (e[i] = n[i]);
                return e;
            }
            function x(t) {
                var e = t.parentNode;
                e && e.removeChild(t);
            }
            function I(t, e, n, i, o) {
                if (('className' === e && (e = 'class'), 'key' === e));
                else if ('ref' === e) n && n(null), i && i(t);
                else if ('class' !== e || o)
                    if ('style' === e) {
                        if (
                            ((i &&
                                'string' != typeof i &&
                                'string' != typeof n) ||
                                (t.style.cssText = i || ''),
                            i && 'object' == typeof i)
                        ) {
                            if ('string' != typeof n)
                                for (var r in n) r in i || (t.style[r] = '');
                            for (var r in i)
                                t.style[r] =
                                    'number' == typeof i[r] && !1 === b.test(r)
                                        ? i[r] + 'px'
                                        : i[r];
                        }
                    } else if ('dangerouslySetInnerHTML' === e)
                        i && (t.innerHTML = i.__html || '');
                    else if ('o' == e[0] && 'n' == e[1]) {
                        var a = e !== (e = e.replace(/Capture$/, ''));
                        (e = e.toLowerCase().substring(2)),
                            i
                                ? n || t.addEventListener(e, S, a)
                                : t.removeEventListener(e, S, a),
                            ((t._listeners || (t._listeners = {}))[e] = i);
                    } else if ('list' !== e && 'type' !== e && !o && e in t) {
                        try {
                            t[e] = null == i ? '' : i;
                        } catch (t) {}
                        (null != i && !1 !== i) ||
                            'spellcheck' == e ||
                            t.removeAttribute(e);
                    } else {
                        var s = o && e !== (e = e.replace(/^xlink:?/, ''));
                        null == i || !1 === i
                            ? s
                                ? t.removeAttributeNS(
                                      'http://www.w3.org/1999/xlink',
                                      e.toLowerCase()
                                  )
                                : t.removeAttribute(e)
                            : 'function' != typeof i &&
                              (s
                                  ? t.setAttributeNS(
                                        'http://www.w3.org/1999/xlink',
                                        e.toLowerCase(),
                                        i
                                    )
                                  : t.setAttribute(e, i));
                    }
                else t.className = i || '';
            }
            function S(t) {
                return this._listeners[t.type]((c.event && c.event(t)) || t);
            }
            var k = [],
                P = 0,
                j = !1,
                T = !1;
            function _() {
                for (var t; (t = k.pop()); )
                    c.afterMount && c.afterMount(t),
                        t.componentDidMount && t.componentDidMount();
            }
            function N(t, e, n, i, o, r) {
                P++ ||
                    ((j = null != o && void 0 !== o.ownerSVGElement),
                    (T = null != t && !('__preactattr_' in t)));
                var a = O(t, e, n, i, r);
                return (
                    o && a.parentNode !== o && o.appendChild(a),
                    --P || ((T = !1), r || _()),
                    a
                );
            }
            function O(t, e, n, i, o) {
                var r = t,
                    a = j;
                if (
                    ((null != e && 'boolean' != typeof e) || (e = ''),
                    'string' == typeof e || 'number' == typeof e)
                )
                    return (
                        t &&
                        void 0 !== t.splitText &&
                        t.parentNode &&
                        (!t._component || o)
                            ? t.nodeValue != e && (t.nodeValue = e)
                            : ((r = document.createTextNode(e)),
                              t &&
                                  (t.parentNode &&
                                      t.parentNode.replaceChild(r, t),
                                  C(t, !0))),
                        (r.__preactattr_ = !0),
                        r
                    );
                var s,
                    c,
                    l = e.nodeName;
                if ('function' == typeof l)
                    return (function (t, e, n, i) {
                        var o = t && t._component,
                            r = o,
                            a = t,
                            s = o && t._componentConstructor === e.nodeName,
                            c = s,
                            l = w(e);
                        for (; o && !c && (o = o._parentComponent); )
                            c = o.constructor === e.nodeName;
                        o && c && (!i || o._component)
                            ? (D(o, l, 3, n, i), (t = o.base))
                            : (r && !s && (W(r), (t = a = null)),
                              (o = A(e.nodeName, l, n)),
                              t &&
                                  !o.nextBase &&
                                  ((o.nextBase = t), (a = null)),
                              D(o, l, 1, n, i),
                              (t = o.base),
                              a &&
                                  t !== a &&
                                  ((a._component = null), C(a, !1)));
                        return t;
                    })(t, e, n, i);
                if (
                    ((j = 'svg' === l || ('foreignObject' !== l && j)),
                    (l = String(l)),
                    (!t || !g(t, l)) &&
                        ((s = l),
                        ((c = j
                            ? document.createElementNS(
                                  'http://www.w3.org/2000/svg',
                                  s
                              )
                            : document.createElement(
                                  s
                              )).normalizedNodeName = s),
                        (r = c),
                        t))
                ) {
                    for (; t.firstChild; ) r.appendChild(t.firstChild);
                    t.parentNode && t.parentNode.replaceChild(r, t), C(t, !0);
                }
                var u = r.firstChild,
                    p = r.__preactattr_,
                    d = e.children;
                if (null == p) {
                    p = r.__preactattr_ = {};
                    for (var f = r.attributes, b = f.length; b--; )
                        p[f[b].name] = f[b].value;
                }
                return (
                    !T &&
                    d &&
                    1 === d.length &&
                    'string' == typeof d[0] &&
                    null != u &&
                    void 0 !== u.splitText &&
                    null == u.nextSibling
                        ? u.nodeValue != d[0] && (u.nodeValue = d[0])
                        : ((d && d.length) || null != u) &&
                          (function (t, e, n, i, o) {
                              var r,
                                  a,
                                  s,
                                  c,
                                  l,
                                  u = t.childNodes,
                                  p = [],
                                  d = {},
                                  f = 0,
                                  b = 0,
                                  v = u.length,
                                  h = 0,
                                  m = e ? e.length : 0;
                              if (0 !== v)
                                  for (var g = 0; g < v; g++) {
                                      var w = u[g],
                                          I = w.__preactattr_;
                                      null !=
                                      (S =
                                          m && I
                                              ? w._component
                                                  ? w._component.__key
                                                  : I.key
                                              : null)
                                          ? (f++, (d[S] = w))
                                          : (I ||
                                                (void 0 !== w.splitText
                                                    ? !o || w.nodeValue.trim()
                                                    : o)) &&
                                            (p[h++] = w);
                                  }
                              if (0 !== m)
                                  for (g = 0; g < m; g++) {
                                      var S;
                                      if (
                                          ((c = e[g]),
                                          (l = null),
                                          null != (S = c.key))
                                      )
                                          f &&
                                              void 0 !== d[S] &&
                                              ((l = d[S]),
                                              (d[S] = void 0),
                                              f--);
                                      else if (b < h)
                                          for (r = b; r < h; r++)
                                              if (
                                                  void 0 !== p[r] &&
                                                  y((a = p[r]), c, o)
                                              ) {
                                                  (l = a),
                                                      (p[r] = void 0),
                                                      r === h - 1 && h--,
                                                      r === b && b++;
                                                  break;
                                              }
                                      (l = O(l, c, n, i)),
                                          (s = u[g]),
                                          l &&
                                              l !== t &&
                                              l !== s &&
                                              (null == s
                                                  ? t.appendChild(l)
                                                  : l === s.nextSibling
                                                  ? x(s)
                                                  : t.insertBefore(l, s));
                                  }
                              if (f)
                                  for (var g in d)
                                      void 0 !== d[g] && C(d[g], !1);
                              for (; b <= h; )
                                  void 0 !== (l = p[h--]) && C(l, !1);
                          })(
                              r,
                              d,
                              n,
                              i,
                              T || null != p.dangerouslySetInnerHTML
                          ),
                    (function (t, e, n) {
                        var i;
                        for (i in n)
                            (e && null != e[i]) ||
                                null == n[i] ||
                                I(t, i, n[i], (n[i] = void 0), j);
                        for (i in e)
                            'children' === i ||
                                'innerHTML' === i ||
                                (i in n &&
                                    e[i] ===
                                        ('value' === i || 'checked' === i
                                            ? t[i]
                                            : n[i])) ||
                                I(t, i, n[i], (n[i] = e[i]), j);
                    })(r, e.attributes, p),
                    (j = a),
                    r
                );
            }
            function C(t, e) {
                var n = t._component;
                n
                    ? W(n)
                    : (null != t.__preactattr_ &&
                          t.__preactattr_.ref &&
                          t.__preactattr_.ref(null),
                      (!1 !== e && null != t.__preactattr_) || x(t),
                      E(t));
            }
            function E(t) {
                for (t = t.lastChild; t; ) {
                    var e = t.previousSibling;
                    C(t, !0), (t = e);
                }
            }
            var M = [];
            function A(t, e, n) {
                var i,
                    o = M.length;
                for (
                    t.prototype && t.prototype.render
                        ? ((i = new t(e, n)), U.call(i, e, n))
                        : (((i = new U(e, n)).constructor = t), (i.render = Z));
                    o--;

                )
                    if (M[o].constructor === t)
                        return (i.nextBase = M[o].nextBase), M.splice(o, 1), i;
                return i;
            }
            function Z(t, e, n) {
                return this.constructor(t, n);
            }
            function D(t, e, n, i, o) {
                t._disable ||
                    ((t._disable = !0),
                    (t.__ref = e.ref),
                    (t.__key = e.key),
                    delete e.ref,
                    delete e.key,
                    void 0 === t.constructor.getDerivedStateFromProps &&
                        (!t.base || o
                            ? t.componentWillMount && t.componentWillMount()
                            : t.componentWillReceiveProps &&
                              t.componentWillReceiveProps(e, i)),
                    i &&
                        i !== t.context &&
                        (t.prevContext || (t.prevContext = t.context),
                        (t.context = i)),
                    t.prevProps || (t.prevProps = t.props),
                    (t.props = e),
                    (t._disable = !1),
                    0 !== n &&
                        (1 !== n && !1 === c.syncComponentUpdates && t.base
                            ? h(t)
                            : L(t, 1, o)),
                    t.__ref && t.__ref(t));
            }
            function L(t, e, n, i) {
                if (!t._disable) {
                    var o,
                        r,
                        a,
                        s = t.props,
                        l = t.state,
                        u = t.context,
                        p = t.prevProps || s,
                        f = t.prevState || l,
                        b = t.prevContext || u,
                        v = t.base,
                        h = t.nextBase,
                        m = v || h,
                        y = t._component,
                        g = !1,
                        x = b;
                    if (
                        (t.constructor.getDerivedStateFromProps &&
                            ((l = d(
                                d({}, l),
                                t.constructor.getDerivedStateFromProps(s, l)
                            )),
                            (t.state = l)),
                        v &&
                            ((t.props = p),
                            (t.state = f),
                            (t.context = b),
                            2 !== e &&
                            t.shouldComponentUpdate &&
                            !1 === t.shouldComponentUpdate(s, l, u)
                                ? (g = !0)
                                : t.componentWillUpdate &&
                                  t.componentWillUpdate(s, l, u),
                            (t.props = s),
                            (t.state = l),
                            (t.context = u)),
                        (t.prevProps = t.prevState = t.prevContext = t.nextBase = null),
                        (t._dirty = !1),
                        !g)
                    ) {
                        (o = t.render(s, l, u)),
                            t.getChildContext &&
                                (u = d(d({}, u), t.getChildContext())),
                            v &&
                                t.getSnapshotBeforeUpdate &&
                                (x = t.getSnapshotBeforeUpdate(p, f));
                        var I,
                            S,
                            j = o && o.nodeName;
                        if ('function' == typeof j) {
                            var T = w(o);
                            (r = y) && r.constructor === j && T.key == r.__key
                                ? D(r, T, 1, u, !1)
                                : ((I = r),
                                  (t._component = r = A(j, T, u)),
                                  (r.nextBase = r.nextBase || h),
                                  (r._parentComponent = t),
                                  D(r, T, 0, u, !1),
                                  L(r, 1, n, !0)),
                                (S = r.base);
                        } else
                            (a = m),
                                (I = y) && (a = t._component = null),
                                (m || 1 === e) &&
                                    (a && (a._component = null),
                                    (S = N(
                                        a,
                                        o,
                                        u,
                                        n || !v,
                                        m && m.parentNode,
                                        !0
                                    )));
                        if (m && S !== m && r !== y) {
                            var O = m.parentNode;
                            O &&
                                S !== O &&
                                (O.replaceChild(S, m),
                                I || ((m._component = null), C(m, !1)));
                        }
                        if ((I && W(I), (t.base = S), S && !i)) {
                            for (var E = t, M = t; (M = M._parentComponent); )
                                (E = M).base = S;
                            (S._component = E),
                                (S._componentConstructor = E.constructor);
                        }
                    }
                    for (
                        !v || n
                            ? k.unshift(t)
                            : g ||
                              (t.componentDidUpdate &&
                                  t.componentDidUpdate(p, f, x),
                              c.afterUpdate && c.afterUpdate(t));
                        t._renderCallbacks.length;

                    )
                        t._renderCallbacks.pop().call(t);
                    P || i || _();
                }
            }
            function W(t) {
                c.beforeUnmount && c.beforeUnmount(t);
                var e = t.base;
                (t._disable = !0),
                    t.componentWillUnmount && t.componentWillUnmount(),
                    (t.base = null);
                var n = t._component;
                n
                    ? W(n)
                    : e &&
                      (e.__preactattr_ &&
                          e.__preactattr_.ref &&
                          e.__preactattr_.ref(null),
                      (t.nextBase = e),
                      x(e),
                      M.push(t),
                      E(e)),
                    t.__ref && t.__ref(null);
            }
            function U(t, e) {
                (this._dirty = !0),
                    (this.context = e),
                    (this.props = t),
                    (this.state = this.state || {}),
                    (this._renderCallbacks = []);
            }
            function G(t, e, n) {
                return N(n, t, {}, !1, e, !1);
            }
            d(U.prototype, {
                setState: function (t, e) {
                    this.prevState || (this.prevState = this.state),
                        (this.state = d(
                            d({}, this.state),
                            'function' == typeof t
                                ? t(this.state, this.props)
                                : t
                        )),
                        e && this._renderCallbacks.push(e),
                        h(this);
                },
                forceUpdate: function (t) {
                    t && this._renderCallbacks.push(t), L(this, 2);
                },
                render: function () {},
            });
            var R = function () {
                return p('img', {
                    className: 'bit-widget-loading',
                    alt: '',
                    src:
                        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSc1MHB4JyBoZWlnaHQ9JzUwcHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLXNwaW4iPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiPjxnIHRyYW5zZm9ybT0icm90YXRlKDApIHRyYW5zbGF0ZSgzNCAwKSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiM4YThhOGEiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwLjEiIGJlZ2luPSIwcyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBmcm9tPSIxLjUiIHRvPSIxIiBiZWdpbj0iMHMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9jaXJjbGU+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSB0cmFuc2xhdGUoMzQgMCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjOGE4YThhIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMC4xMnMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgZnJvbT0iMS41IiB0bz0iMSIgYmVnaW49IjAuMTJzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSg5MCkgdHJhbnNsYXRlKDM0IDApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iOCIgZmlsbD0iIzhhOGE4YSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAuMSIgYmVnaW49IjAuMjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwLjI1cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTM1KSB0cmFuc2xhdGUoMzQgMCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjOGE4YThhIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMC4zN3MiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgZnJvbT0iMS41IiB0bz0iMSIgYmVnaW49IjAuMzdzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgxODApIHRyYW5zbGF0ZSgzNCAwKSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiM4YThhOGEiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwLjEiIGJlZ2luPSIwLjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwLjVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgyMjUpIHRyYW5zbGF0ZSgzNCAwKSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjgiIGZpbGw9IiM4YThhOGEiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwLjEiIGJlZ2luPSIwLjYycyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBmcm9tPSIxLjUiIHRvPSIxIiBiZWdpbj0iMC42MnMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9jaXJjbGU+PC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDI3MCkgdHJhbnNsYXRlKDM0IDApIj48Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iOCIgZmlsbD0iIzhhOGE4YSI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAuMSIgYmVnaW49IjAuNzVzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGZyb209IjEuNSIgdG89IjEiIGJlZ2luPSIwLjc1cyIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMzE1KSB0cmFuc2xhdGUoMzQgMCkiPjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI4IiBmaWxsPSIjOGE4YThhIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMC4xIiBiZWdpbj0iMC44N3MiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgZnJvbT0iMS41IiB0bz0iMSIgYmVnaW49IjAuODdzIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvZz48L2c+PC9zdmc+',
                });
            };
            function B(t) {
                return (B =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  'function' == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof t;
                          })(t);
            }
            function F(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        'value' in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                }
            }
            function V(t) {
                return (V = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            function z(t, e) {
                return (z =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function Y(t) {
                if (void 0 === t)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return t;
            }
            var J = (function (t) {
                    function e(t) {
                        var n;
                        return (
                            (function (t, e) {
                                if (!(t instanceof e))
                                    throw new TypeError(
                                        'Cannot call a class as a function'
                                    );
                            })(this, e),
                            ((n = (function (t, e) {
                                return !e ||
                                    ('object' !== B(e) &&
                                        'function' != typeof e)
                                    ? Y(t)
                                    : e;
                            })(this, V(e).call(this, t))).state = {
                                displayTickets: !1,
                                transparencyClass: 'bit-transparent',
                                displayClass: 'bit-display-none',
                            }),
                            (n.toggleDisplayTickets = n.toggleDisplayTickets.bind(
                                Y(Y(n))
                            )),
                            n
                        );
                    }
                    var n, i, o;
                    return (
                        (function (t, e) {
                            if ('function' != typeof e && null !== e)
                                throw new TypeError(
                                    'Super expression must either be null or a function'
                                );
                            (t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0,
                                },
                            })),
                                e && z(t, e);
                        })(e, t),
                        (n = e),
                        (i = [
                            {
                                key: 'toggleDisplayTickets',
                                value: function (t) {
                                    var e = this;
                                    t.stopPropagation(),
                                        this.state.displayTickets
                                            ? this.setState({
                                                  displayTickets: !this.state
                                                      .displayTickets,
                                                  displayClass:
                                                      'bit-display-none',
                                                  transparencyClass:
                                                      'bit-transparent',
                                              })
                                            : (this.setState({
                                                  displayTickets: !this.state
                                                      .displayTickets,
                                                  displayClass: '',
                                              }),
                                              setTimeout(function () {
                                                  e.setState({
                                                      transparencyClass: '',
                                                  });
                                              }, 20));
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    var t = this.state,
                                        e = t.transparencyClass,
                                        n = t.displayClass,
                                        i = this.props,
                                        o = i.offersText,
                                        r = i.offers,
                                        a = i.linkTarget,
                                        s = r.map(function (t) {
                                            return p(
                                                'a',
                                                {
                                                    className: 'bit-offer',
                                                    rel: 'nofollow',
                                                    href: t.url,
                                                    target: a,
                                                    'aria-label': t.type,
                                                },
                                                t.type
                                            );
                                        });
                                    return p(
                                        'div',
                                        { className: 'bit-offers-container' },
                                        p(
                                            'div',
                                            {
                                                className:
                                                    'bit-offers bit-button',
                                                onClick: this
                                                    .toggleDisplayTickets,
                                            },
                                            p(
                                                'span',
                                                {
                                                    className:
                                                        'bit-offers-text',
                                                },
                                                o
                                            ),
                                            p('div', {
                                                className: 'bit-overlay '.concat(
                                                    n
                                                ),
                                                onClick: this
                                                    .toggleDisplayTickets,
                                            }),
                                            p(
                                                'div',
                                                {
                                                    className: 'bit-offers-menu bit-button '
                                                        .concat(e, ' ')
                                                        .concat(n),
                                                },
                                                s
                                            )
                                        )
                                    );
                                },
                            },
                        ]) && F(n.prototype, i),
                        o && F(n, o),
                        e
                    );
                })(U),
                H = function (t) {
                    var e = t.linkTarget,
                        n = t.defaultTicketUrl,
                        i = t.offersText,
                        o = t.isVirtualEvent;
                    return p(
                        'div',
                        {
                            className: 'bit-offers-container'.concat(
                                o ? ' bit-single-cta' : ''
                            ),
                        },
                        p(
                            'a',
                            {
                                className: 'bit-offers bit-button',
                                rel: 'nofollow',
                                target: e,
                                href: n,
                                'aria-label': i,
                            },
                            p('span', { className: 'bit-offers-text' }, i)
                        )
                    );
                },
                X = function (t) {
                    var e = t.linkTarget,
                        n = t.defaultTicketUrl,
                        i = t.offersText,
                        o = t.isLive,
                        r = t.isVirtualEvent,
                        a = t.offers;
                    return o || !r
                        ? a.length > 1
                            ? p(J, { offers: a, offersText: i, linkTarget: e })
                            : p(H, {
                                  linkTarget: e,
                                  defaultTicketUrl: n,
                                  offersText: i,
                                  isVirtualEvent: !0,
                              })
                        : null;
                },
                K = function (t) {
                    var e = t.isLive,
                        n = t.isVirtualEvent,
                        i = t.rsvpUrl,
                        o = t.linkTarget,
                        r = t.rsvpText;
                    return !e || !n
                        ? p(
                              'div',
                              {
                                  className: 'bit-rsvp-container'.concat(
                                      n ? ' bit-single-cta' : ''
                                  ),
                              },
                              p(
                                  'a',
                                  {
                                      className: 'bit-rsvp bit-button',
                                      href: i,
                                      target: o,
                                      'aria-label': r,
                                  },
                                  r
                              )
                          )
                        : null;
                },
                q = function (t) {
                    return p(
                        'div',
                        { className: 'bit-details bit-event-buttons' },
                        p(K, t),
                        p(X, t)
                    );
                },
                Q = function () {
                    return p(
                        'div',
                        {
                            style: {
                                width: '60px',
                                display: 'inline-block',
                                verticalAlign: 'middle',
                                margin: '2px 0px 0px 7px',
                            },
                        },
                        p(
                            'svg',
                            {
                                width: '38px',
                                height: '20px',
                                viewBox: '0 0 38 20',
                            },
                            p('rect', {
                                id: 'Rectangle-Copy',
                                fill: '#E4695D',
                                fillRule: 'nonzero',
                                x: '0',
                                y: '0',
                                width: '38',
                                height: '20',
                                rx: '2',
                            }),
                            p(
                                'text',
                                {
                                    id: 'LIVE',
                                    fontFamily: 'Helvetics, sans-serif',
                                    'font-size': '11',
                                    fontSize: '11',
                                    fontWeight: 'bold',
                                    fill: '#FFFFFF',
                                },
                                p('tspan', { x: '7', y: '14' }, 'LIVE')
                            )
                        )
                    );
                },
                $ = function (t) {
                    var e = t.lineUp,
                        n = t.description,
                        i = t.onSaleDate,
                        o = t.date,
                        r = t.startTime,
                        a = t.venue,
                        s = t.location,
                        c = t.withText,
                        l = t.linkTarget,
                        u = t.displayLineup,
                        d = t.eventUrl,
                        f = t.displayStartTime,
                        b = t.ctaData,
                        v = t.title,
                        h = t.isLive,
                        m = t.streamingEvent;
                    return p(
                        'div',
                        { className: 'bit-event' },
                        p(
                            'a',
                            { className: 'bit-details', href: d, target: l },
                            p(
                                'div',
                                null,
                                p('span', { className: 'bit-date' }, o),
                                f &&
                                    p(
                                        'div',
                                        {
                                            className:
                                                'bit-startTime-container',
                                        },
                                        p('span', null, ' @ '),
                                        p(
                                            'span',
                                            { className: 'bit-startTime' },
                                            r
                                        )
                                    )
                            ),
                            p(
                                'div',
                                { className: 'bit-titleWrapper' },
                                p(
                                    'div',
                                    { className: 'bit-venue' },
                                    v || a,
                                    !v && h && p(Q, null)
                                ),
                                v && m
                                    ? p(
                                          'div',
                                          { className: 'bit-streamingText' },
                                          a,
                                          h && p(Q, null)
                                      )
                                    : ''
                            ),
                            p('div', { className: 'bit-location' }, s),
                            u &&
                                e &&
                                p(
                                    'div',
                                    { className: 'bit-lineUp-container' },
                                    p(
                                        'span',
                                        { className: 'bit-lineUp-with' },
                                        c
                                    ),
                                    p('span', { className: 'bit-lineUp' }, e)
                                ),
                            n && p('div', { className: 'bit-description' }, n),
                            i && p('div', { className: 'on-sale-date' }, i)
                        ),
                        p(q, b)
                    );
                };
            function tt(t) {
                return (tt =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  'function' == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof t;
                          })(t);
            }
            function et(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        'value' in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                }
            }
            function nt(t) {
                return (nt = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            function it(t, e) {
                return (it =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function ot(t) {
                if (void 0 === t)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return t;
            }
            var rt = (function (t) {
                    function e(t) {
                        var n;
                        !(function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                );
                        })(this, e),
                            (n = (function (t, e) {
                                return !e ||
                                    ('object' !== tt(e) &&
                                        'function' != typeof e)
                                    ? ot(t)
                                    : e;
                            })(this, nt(e).call(this, t)));
                        var i = t.tooManyEvents;
                        return (
                            (n.state = { showingAllEvents: !i }),
                            (n.showAllEvents = n.showAllEvents.bind(ot(ot(n)))),
                            n
                        );
                    }
                    var n, i, o;
                    return (
                        (function (t, e) {
                            if ('function' != typeof e && null !== e)
                                throw new TypeError(
                                    'Super expression must either be null or a function'
                                );
                            (t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0,
                                },
                            })),
                                e && it(t, e);
                        })(e, t),
                        (n = e),
                        (i = [
                            {
                                key: 'showAllEvents',
                                value: function () {
                                    this.state.showingAllEvents ||
                                        this.setState({ showingAllEvents: !0 });
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    var t = this.state.showingAllEvents,
                                        e = this.props,
                                        n = e.events,
                                        i = e.tooManyEvents,
                                        o = e.showAllDatesText,
                                        r = e.displayLimit,
                                        a = e.playMyCityText,
                                        s = e.playMyCityUrl,
                                        c = e.linkTarget,
                                        l = e.displayPlayMyCity,
                                        u = n.map(function (t) {
                                            return p($, t);
                                        });
                                    return p(
                                        'div',
                                        {
                                            className:
                                                'bit-upcoming-events-container',
                                        },
                                        p(
                                            'div',
                                            {
                                                className:
                                                    'bit-upcoming-events',
                                            },
                                            t ? u : u.slice(0, r)
                                        ),
                                        i &&
                                            !t &&
                                            p(
                                                'div',
                                                {
                                                    className:
                                                        'bit-upcoming-events-show-all-button',
                                                    onClick: this.showAllEvents,
                                                },
                                                o
                                            ),
                                        l &&
                                            t &&
                                            p(
                                                'a',
                                                {
                                                    className:
                                                        'bit-play-my-city-button',
                                                    href: s,
                                                    target: c,
                                                },
                                                a
                                            )
                                    );
                                },
                            },
                        ]) && et(n.prototype, i),
                        o && et(n, o),
                        e
                    );
                })(U),
                at = function (t) {
                    var e = t.lineUp,
                        n = t.description,
                        i = t.onSaleDate,
                        o = t.date,
                        r = t.venue,
                        a = t.location,
                        s = t.withText,
                        c = t.rsvp,
                        l = t.rsvpUrl,
                        u = t.linkTarget,
                        d = t.displayLineup;
                    return p(
                        'div',
                        { className: 'bit-event' },
                        p(
                            'a',
                            {
                                className: 'bit-details',
                                href: t.eventUrl,
                                target: u,
                            },
                            p('div', { className: 'bit-date' }, o),
                            p('div', { className: 'bit-venue' }, r),
                            p('div', { className: 'bit-location' }, a),
                            d &&
                                p(
                                    'div',
                                    { className: 'bit-lineUp-container' },
                                    p(
                                        'span',
                                        { className: 'bit-lineUp-with' },
                                        s
                                    ),
                                    p('span', { className: 'bit-lineUp' }, e)
                                ),
                            n && p('div', { className: 'bit-description' }, n),
                            i && p('div', { className: 'on-sale-date' }, i)
                        ),
                        p(
                            'div',
                            { className: 'bit-details bit-event-buttons' },
                            p(
                                'div',
                                { className: 'bit-rsvp-container' },
                                p(
                                    'a',
                                    {
                                        className: 'bit-rsvp bit-button',
                                        href: l,
                                        target: u,
                                    },
                                    c
                                )
                            )
                        )
                    );
                };
            function st(t) {
                return (st =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  'function' == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof t;
                          })(t);
            }
            function ct(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        'value' in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                }
            }
            function lt(t) {
                return (lt = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            function ut(t, e) {
                return (ut =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function pt(t) {
                if (void 0 === t)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return t;
            }
            var dt = (function (t) {
                    function e(t) {
                        var n;
                        !(function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                );
                        })(this, e),
                            (n = (function (t, e) {
                                return !e ||
                                    ('object' !== st(e) &&
                                        'function' != typeof e)
                                    ? pt(t)
                                    : e;
                            })(this, lt(e).call(this, t)));
                        var i = t.tooManyEvents;
                        return (
                            (n.state = { showingAllEvents: !i }),
                            (n.showAllEvents = n.showAllEvents.bind(pt(pt(n)))),
                            n
                        );
                    }
                    var n, i, o;
                    return (
                        (function (t, e) {
                            if ('function' != typeof e && null !== e)
                                throw new TypeError(
                                    'Super expression must either be null or a function'
                                );
                            (t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0,
                                },
                            })),
                                e && ut(t, e);
                        })(e, t),
                        (n = e),
                        (i = [
                            {
                                key: 'showAllEvents',
                                value: function () {
                                    this.state.showingAllEvents ||
                                        this.setState({ showingAllEvents: !0 });
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    var t = this.state.showingAllEvents,
                                        e = this.props,
                                        n = e.pastEvents,
                                        i = e.tooManyEvents,
                                        o = e.showAllDatesText,
                                        r = e.displayLimit,
                                        a = n.map(function (t) {
                                            return p(at, t);
                                        });
                                    return p(
                                        'div',
                                        {
                                            className:
                                                'bit-upcoming-events-container',
                                        },
                                        p(
                                            'div',
                                            { className: 'bit-past-events' },
                                            t ? a : a.slice(0, r)
                                        ),
                                        i &&
                                            !t &&
                                            p(
                                                'div',
                                                {
                                                    className:
                                                        'bit-past-events-show-all-button',
                                                    onClick: this.showAllEvents,
                                                },
                                                o
                                            )
                                    );
                                },
                            },
                        ]) && ct(n.prototype, i),
                        o && ct(n, o),
                        e
                    );
                })(U),
                ft = function (t) {
                    var e = t.noUpcomingTourDatesText,
                        n = t.trackArtistDescription,
                        i = t.trackArtistUrl,
                        o = t.trackText;
                    return p(
                        'div',
                        { className: 'bit-no-dates-container' },
                        p('div', { className: 'bit-no-dates-title' }, e),
                        p(
                            'div',
                            null,
                            p('div', {
                                dangerouslySetInnerHTML: { __html: n },
                            }),
                            p(
                                'div',
                                null,
                                p(
                                    'a',
                                    {
                                        className:
                                            'bit-button bit-track-button bit-offers',
                                        href: i,
                                    },
                                    o
                                )
                            )
                        )
                    );
                },
                bt = function (t) {
                    var e = t.upcomingEvents,
                        n = t.noUpcomingEvents,
                        i = t.pastEvents,
                        o = t.showingPastEvents,
                        r = t.displayNoUpcomingEvents,
                        a = t.iframeSrc;
                    return p(
                        'div',
                        { className: 'bit-event-lists' },
                        p(
                            'div',
                            { className: 'bit-events-container' },
                            o ? p(dt, i) : r ? p(ft, n) : p(rt, e),
                            p('iframe', {
                                src: a,
                                className: 'google-pixel-iframe',
                            })
                        )
                    );
                },
                vt = function () {
                    return p(
                        'svg',
                        {
                            width: '23px',
                            height: '20px',
                            viewBox: '0 0 23 24',
                            ariaLabelledby: 'bit-imgTitle bit-imgDesc',
                            role: 'img',
                        },
                        p('title', { id: 'bit-imgTitle' }, 'Bandsintown'),
                        p(
                            'desc',
                            { id: 'bit-imgDesc' },
                            'Bandsintown Fist Logo'
                        ),
                        p(
                            'g',
                            {
                                id: 'Page-1',
                                stroke: 'none',
                                strokeWidth: '1',
                                fill: 'none',
                                fillRule: 'evenodd',
                                fillOpacity: '0.402400362',
                            },
                            p('path', {
                                d:
                                    'M17.709,0 L22.917,0 L22.917,12.343 L17.709,12.343 L17.709,0 Z M11.806,5.829 L17.014,5.829 L17.014,12.343 L11.806,12.343 L11.806,5.829 Z M5.903,5.829 L11.111,5.829 L11.111,12.343 L5.903,12.343 L5.903,5.829 Z M22.917,24 L0,24 L0,0 L5.208,0 L5.208,18.857 L17.708,18.857 L17.708,18.171 L5.904,18.171 L5.904,13.03 L22.918,13.03 L22.918,24 L22.917,24 Z',
                                id: 'Shape',
                                fill: '#A9A9A9',
                                fillRule: 'nonzero',
                            })
                        )
                    );
                },
                ht = function () {
                    return p(
                        'svg',
                        {
                            width: '144',
                            height: '20',
                            viewBox: '0 0 172 24',
                            ariaLabelledby: 'bit-logoTitle bit-logoDesc',
                            role: 'img',
                        },
                        p('title', { id: 'bit-logoTitle' }, 'Bandsintown'),
                        p(
                            'desc',
                            { id: 'bit-logoDesc' },
                            'Bandsintown Fist Logo'
                        ),
                        p(
                            'defs',
                            null,
                            p('path', {
                                id: 'a',
                                d:
                                    'M9.858 12.143c0-2.233-1.44-3.806-3.651-3.806S2.556 9.91 2.556 12.143s1.44 3.806 3.65 3.806c2.212 0 3.652-1.573 3.652-3.806zm-7.277 4.198h-.052v1.758H0V0h2.529v7.912h.052c.748-1.293 2.065-2.146 4.026-2.146 3.148 0 5.807 2.378 5.807 6.36s-2.659 6.36-5.807 6.36c-1.961 0-3.278-.853-4.026-2.145zm11.658-4.198c0-3.971 2.658-6.343 5.807-6.343 1.962 0 3.278.85 4.026 2.14h.052V6.186h2.529V18.1h-2.529v-1.754h-.052c-.748 1.29-2.064 2.14-4.026 2.14-3.149 0-5.807-2.372-5.807-6.343zm10.223 0c0-2.233-1.44-3.806-3.65-3.806-2.212 0-3.652 1.573-3.652 3.806s1.44 3.806 3.651 3.806 3.651-1.573 3.651-3.806zm16.43-1.357v7.338h-2.525v-6.898c0-2.041-1.031-2.894-2.733-2.894-1.854 0-3.17 1.11-3.17 4.082v5.71H29.94V6.187h2.526v1.809h.051c.774-1.37 2.062-2.196 3.892-2.196 2.551 0 4.484 1.369 4.484 4.986zm2.556 1.34c0-3.982 2.658-6.36 5.807-6.36 1.961 0 3.277.853 4.026 2.146h.052V0h2.529v18.099h-2.53V16.34h-.05c-.75 1.292-2.066 2.145-4.027 2.145-3.149 0-5.807-2.378-5.807-6.36zm10.223.017c0-2.233-1.44-3.806-3.651-3.806-2.212 0-3.651 1.573-3.651 3.806s1.44 3.806 3.65 3.806c2.212 0 3.652-1.573 3.652-3.806zm4.381 5.08l1.135-2.243c1.11.644 2.374 1.134 3.792 1.134 1.213 0 1.858-.36 1.858-1.108 0-.49-.258-.852-1.264-1.342l-2.167-1.057c-1.806-.85-2.502-2.063-2.502-3.429 0-2.192 1.625-3.378 4.23-3.378 1.367 0 2.864.36 4.127.928L66.23 8.92c-.903-.387-2.013-.774-3.173-.774-1.11 0-1.47.361-1.47.903 0 .567.335.928 1.367 1.418l2.218 1.057c1.548.722 2.373 1.754 2.373 3.352 0 2.424-1.857 3.61-4.643 3.61-1.703 0-3.482-.464-4.85-1.263zm12.049.9h2.556V6.164H70.1v11.96zm16.795-7.337v7.338H84.37v-6.898c0-2.041-1.03-2.894-2.731-2.894-1.856 0-3.171 1.11-3.171 4.082v5.71h-2.525V6.187h2.525v1.809h.052c.773-1.37 2.062-2.196 3.892-2.196 2.551 0 4.484 1.369 4.484 4.986zm6.383-2.44v6.227c0 .85.354 1.235 1.215 1.235h.607v2.316h-1.139c-2.05 0-3.164-1.106-3.164-3.062V8.346h-2.076V6.21h2.076V1.45h2.48v4.76h2.38v2.136h-2.38zm16.619 3.797c0 3.662-2.805 6.343-6.572 6.343s-6.572-2.681-6.572-6.343S99.559 5.8 103.326 5.8s6.572 2.681 6.572 6.343zm-10.223 0c0 2.309 1.57 3.806 3.834 3.806 2.264 0 3.833-1.497 3.833-3.806s-1.569-3.806-3.833-3.806c-2.265 0-3.834 1.497-3.834 3.806zm29.209-5.98l-3.98 11.96h-2.311l-2.824-8.569-2.85 8.57h-2.311l-3.98-11.962h2.773l2.388 8.622 2.748-8.622h2.438l2.748 8.622 2.388-8.622h2.773zm13.143 4.623v7.338h-2.525v-6.898c0-2.041-1.031-2.894-2.732-2.894-1.856 0-3.17 1.11-3.17 4.082v5.71h-2.526V6.187h2.526v1.809h.051c.774-1.37 2.062-2.196 3.892-2.196 2.552 0 4.484 1.369 4.484 4.986zm-68.64-8.974c0 1.001-.817 1.813-1.825 1.813a1.82 1.82 0 0 1-1.826-1.813c0-1 .817-1.812 1.826-1.812 1.008 0 1.825.811 1.825 1.812z',
                            })
                        ),
                        p(
                            'g',
                            {
                                fill: 'none',
                                fillRule: 'evenodd',
                                opacity: '0.402400362',
                            },
                            p(
                                'g',
                                { transform: 'translate(29.522 3.243)' },
                                p(
                                    'mask',
                                    { id: 'b', fill: '#fff' },
                                    p('use', { xlinkHref: '#a' })
                                ),
                                p('path', {
                                    fill: '#A9A9A9',
                                    d: 'M-.013 18.506H142.04V-.02H-.013z',
                                    mask: 'url(#b)',
                                })
                            ),
                            p('path', {
                                fill: '#A9A9A9',
                                d:
                                    'M17.709 0h5.208v12.343h-5.208V0zm-5.903 5.829h5.208v6.514h-5.208V5.829zm-5.903 0h5.208v6.514H5.903V5.829zM22.917 24H0V0h5.208v18.857h12.5v-.686H5.904V13.03h17.014V24z',
                            })
                        )
                    );
                },
                mt = function (t) {
                    var e = t.artistUrl,
                        n = t.handlePastEventsClick,
                        i = t.handleUpcomingEventsClick,
                        o = t.displayPastDates,
                        r = t.upcomingDatesText,
                        a = t.pastDatesText,
                        s = t.showingPastEvents,
                        c = t.displayLogo,
                        l = t.linkTarget;
                    return p(
                        'div',
                        { className: 'bit-nav-bar-container' },
                        p(
                            'div',
                            { className: 'bit-nav-bar' },
                            p(
                                'span',
                                {
                                    className: 'bit-event-list-title bit-show-upcoming '.concat(
                                        s ? 'bit-clickable' : ''
                                    ),
                                    onClick: i,
                                },
                                r
                            ),
                            o &&
                                p(
                                    'span',
                                    {
                                        className: 'bit-event-list-title bit-show-past '.concat(
                                            s ? '' : 'bit-clickable'
                                        ),
                                        onClick: n,
                                    },
                                    a
                                ),
                            c &&
                                p(
                                    'div',
                                    { className: 'bit-logo-container' },
                                    p(
                                        'div',
                                        { className: 'bit-logo' },
                                        p(
                                            'a',
                                            {
                                                href: e,
                                                target: l,
                                                className: 'bit-logo-link',
                                            },
                                            p(
                                                'div',
                                                {
                                                    className:
                                                        'bit-logo-desktop',
                                                },
                                                p(ht, null)
                                            ),
                                            p(
                                                'div',
                                                {
                                                    className:
                                                        'bit-logo-mobile',
                                                },
                                                p(vt, null)
                                            )
                                        )
                                    )
                                )
                        )
                    );
                },
                yt = function (t) {
                    return p('a', {
                        className: 'bit-top-track-button',
                        href: t.trackUrl,
                        dangerouslySetInnerHTML: { __html: t.trackDescription },
                        target: t.linkTarget,
                    });
                };
            function gt(t) {
                return (gt =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  'function' == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof t;
                          })(t);
            }
            function wt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        'value' in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                }
            }
            function xt(t) {
                return (xt = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            function It(t, e) {
                return (It =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function St(t) {
                if (void 0 === t)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return t;
            }
            var kt = (function (t) {
                    function e(t) {
                        var n;
                        !(function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                );
                        })(this, e),
                            (n = (function (t, e) {
                                return !e ||
                                    ('object' !== gt(e) &&
                                        'function' != typeof e)
                                    ? St(t)
                                    : e;
                            })(this, xt(e).call(this, t)));
                        var i = t.tooManyEvents;
                        return (
                            (n.state = { showingAllEvents: !i }),
                            (n.showAllEvents = n.showAllEvents.bind(St(St(n)))),
                            n
                        );
                    }
                    var n, i, o;
                    return (
                        (function (t, e) {
                            if ('function' != typeof e && null !== e)
                                throw new TypeError(
                                    'Super expression must either be null or a function'
                                );
                            (t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0,
                                },
                            })),
                                e && It(t, e);
                        })(e, t),
                        (n = e),
                        (i = [
                            {
                                key: 'showAllEvents',
                                value: function () {
                                    this.state.showingAllEvents ||
                                        this.setState({ showingAllEvents: !0 });
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    var t = this.state.showingAllEvents,
                                        e = this.props,
                                        n = e.events,
                                        i = e.tooManyEvents,
                                        o = e.showAllDatesText,
                                        r = e.displayLimit,
                                        a = e.title;
                                    if (0 === n.length) return null;
                                    var s = n.map(function (t) {
                                        return p($, t);
                                    });
                                    return p(
                                        'div',
                                        {
                                            className:
                                                'bit-local-events-container',
                                        },
                                        p(
                                            'div',
                                            {
                                                className:
                                                    'bit-event-list-title',
                                            },
                                            a
                                        ),
                                        p(
                                            'div',
                                            { className: 'bit-local-events' },
                                            t ? s : s.slice(0, r)
                                        ),
                                        i &&
                                            !t &&
                                            p(
                                                'div',
                                                {
                                                    className:
                                                        'bit-upcoming-events-show-all-button',
                                                    onClick: this.showAllEvents,
                                                },
                                                o
                                            ),
                                        p('div', { className: 'bit-spacer' })
                                    );
                                },
                            },
                        ]) && wt(n.prototype, i),
                        o && wt(n, o),
                        e
                    );
                })(U),
                Pt = function (t) {
                    return t.display
                        ? p(
                              'div',
                              { style: { textAlign: 'center', width: '100%' } },
                              p('iframe', {
                                  style: {
                                      border: '0px transparent none',
                                      width: '100%',
                                      maxWidth: '417px',
                                      height: '60',
                                  },
                                  allowTransparency: !0,
                                  src: t.url,
                              })
                          )
                        : null;
                };
            function jt() {
                return (jt =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var i in n)
                                Object.prototype.hasOwnProperty.call(n, i) &&
                                    (t[i] = n[i]);
                        }
                        return t;
                    }).apply(this, arguments);
            }
            var Tt = function (t) {
                    var e = t.data,
                        n = t.responsiveLayout,
                        i = t.responsiveLogoLayout,
                        o = t.options,
                        r = t.isLoading,
                        a = t.showingPastEvents,
                        s = t.handlePastEventsClick,
                        c = t.handleUpcomingEventsClick;
                    if (t.error) return null;
                    if (!e)
                        return p(
                            'div',
                            { className: 'bit-widget' },
                            p(R, null)
                        );
                    var l = e.navigationBar,
                        u = e.eventsContainer,
                        d = e.trackButton,
                        f = e.localEvents,
                        b = e.listenUnit,
                        v = o.widgetOptions,
                        h = v.displayLocalDates,
                        m = v.displayTrackButton;
                    return p(
                        'div',
                        { className: 'bit-widget '.concat(n, ' ').concat(i) },
                        p(Pt, b),
                        h && f && p(kt, f),
                        m && p(yt, d),
                        p(
                            mt,
                            jt({}, l, {
                                showingPastEvents: a,
                                handlePastEventsClick: s,
                                handleUpcomingEventsClick: c,
                            })
                        ),
                        r
                            ? p(R, null)
                            : p(bt, jt({}, u, { showingPastEvents: a }))
                    );
                },
                _t = function (t) {
                    return t <= 320
                        ? ''
                        : t > 900
                        ? 'bit-layout-desktop'
                        : 'bit-layout-ipad';
                },
                Nt = function (t) {
                    return t >= 520 ? 'bit-layout-ipad' : '';
                },
                Ot = function (t) {
                    return t >= 520 ? 'bit-layout-logo-ipad' : '';
                },
                Ct = n(3),
                Et = n.n(Ct),
                Mt = n(1),
                At = function (t) {
                    return new Promise(function (e, n) {
                        var i, o, r, a;
                        (i = t),
                            (o = function (t) {
                                return e(t);
                            }),
                            (r = function (t) {
                                return n(t);
                            }),
                            ((a = new XMLHttpRequest()).onreadystatechange = function () {
                                a.readyState === XMLHttpRequest.DONE &&
                                    (200 === a.status && o
                                        ? o(JSON.parse(a.responseText))
                                        : r && r(a));
                            }),
                            a.open('GET', i, !0),
                            a.send();
                    });
                };
            var Zt = function () {
                    var t, e;
                    return 'bitJsonp_'.concat(
                        ((t = 1),
                        (e = 9007199254740991),
                        Math.floor(Math.random() * (e - t)) + t)
                    );
                },
                Dt = function (t) {
                    var e = t.appId,
                        n = t.artistName,
                        i = {
                            app_id: e || 'js_'.concat(window.location.hostname),
                            date: 'past',
                        },
                        o = 'https://rest.bandsintown.com/artists/'.concat(
                            n,
                            '/events'
                        ),
                        r = Object(Mt.a)(o, i);
                    return Et()(r).then(function (t) {
                        return t.json();
                    });
                },
                Lt = function (t) {
                    return new Promise(function (e, n) {
                        (function (t) {
                            var e = t.appId,
                                n = t.artistName,
                                i = {
                                    app_id:
                                        e ||
                                        'js_'.concat(window.location.hostname),
                                },
                                o = 'https://rest.bandsintown.com/artists/'.concat(
                                    n,
                                    '/events/'
                                ),
                                r = Object(Mt.a)(o, i);
                            return Et()(r, { jsonpCallbackFunction: Zt() })
                                .then(function (t) {
                                    return t.json();
                                })
                                .catch(function (t) {
                                    return console.log(t);
                                });
                        })(t)
                            .then(function (n) {
                                n.length > 0 && n[0].artist
                                    ? e({ events: n, artist: n[0].artist })
                                    : (function (t) {
                                          var e = t.appId,
                                              n = t.artistName,
                                              i = {
                                                  app_id:
                                                      e ||
                                                      'js_'.concat(
                                                          window.location
                                                              .hostname
                                                      ),
                                              },
                                              o = 'https://rest.bandsintown.com/artists/'.concat(
                                                  n
                                              ),
                                              r = Object(Mt.a)(o, i);
                                          return At(r);
                                      })(t).then(function (t) {
                                          e({ events: n, artist: t });
                                      });
                            })
                            .catch(function (t) {
                                n(t);
                            });
                    });
                },
                Wt = n(8),
                Ut = n.n(Wt);
            function Gt(t) {
                return (Gt =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  'function' == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof t;
                          })(t);
            }
            function Rt() {
                return (Rt =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var i in n)
                                Object.prototype.hasOwnProperty.call(n, i) &&
                                    (t[i] = n[i]);
                        }
                        return t;
                    }).apply(this, arguments);
            }
            function Bt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? Object(arguments[e]) : {},
                        i = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (
                                t
                            ) {
                                return Object.getOwnPropertyDescriptor(n, t)
                                    .enumerable;
                            })
                        )),
                        i.forEach(function (e) {
                            Ft(t, e, n[e]);
                        });
                }
                return t;
            }
            function Ft(t, e, n) {
                return (
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = n),
                    t
                );
            }
            function Vt(t, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, e) {
                        if (
                            'undefined' == typeof Symbol ||
                            !(Symbol.iterator in Object(t))
                        )
                            return;
                        var n = [],
                            i = !0,
                            o = !1,
                            r = void 0;
                        try {
                            for (
                                var a, s = t[Symbol.iterator]();
                                !(i = (a = s.next()).done) &&
                                (n.push(a.value), !e || n.length !== e);
                                i = !0
                            );
                        } catch (t) {
                            (o = !0), (r = t);
                        } finally {
                            try {
                                i || null == s.return || s.return();
                            } finally {
                                if (o) throw r;
                            }
                        }
                        return n;
                    })(t, e) ||
                    (function (t, e) {
                        if (!t) return;
                        if ('string' == typeof t) return zt(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        'Object' === n &&
                            t.constructor &&
                            (n = t.constructor.name);
                        if ('Map' === n || 'Set' === n) return Array.from(t);
                        if (
                            'Arguments' === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                            return zt(t, e);
                    })(t, e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function zt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            function Yt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        'value' in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                }
            }
            function Jt(t) {
                return (Jt = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
            }
            function Ht(t, e) {
                return (Ht =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t;
                    })(t, e);
            }
            function Xt(t) {
                if (void 0 === t)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return t;
            }
            var Kt = Promise.all([n.e(1), n.e(2)]).then(n.bind(null, 203)),
                qt = (function (t) {
                    function e(t) {
                        var n;
                        return (
                            (function (t, e) {
                                if (!(t instanceof e))
                                    throw new TypeError(
                                        'Cannot call a class as a function'
                                    );
                            })(this, e),
                            ((n = (function (t, e) {
                                return !e ||
                                    ('object' !== Gt(e) &&
                                        'function' != typeof e)
                                    ? Xt(t)
                                    : e;
                            })(this, Jt(e).call(this, t))).state = {
                                rawData: {},
                                data: null,
                                responsiveLayout: '',
                                responsiveLogoLayout: '',
                                isLoading: !0,
                                showingPastEvents: !1,
                                pastEventsDataHasBeenFetched: !1,
                            }),
                            (n.handleBreakpoints = n.handleBreakpoints.bind(
                                Xt(Xt(n))
                            )),
                            (n.fetchPastEventsData = n.fetchPastEventsData.bind(
                                Xt(Xt(n))
                            )),
                            (n.handlePastEventsClick = n.handlePastEventsClick.bind(
                                Xt(Xt(n))
                            )),
                            (n.handleUpcomingEventsClick = n.handleUpcomingEventsClick.bind(
                                Xt(Xt(n))
                            )),
                            (n.getUserLocation = n.getUserLocation.bind(
                                Xt(Xt(n))
                            )),
                            n
                        );
                    }
                    var n, i, o;
                    return (
                        (function (t, e) {
                            if ('function' != typeof e && null !== e)
                                throw new TypeError(
                                    'Super expression must either be null or a function'
                                );
                            (t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0,
                                },
                            })),
                                e && Ht(t, e);
                        })(e, t),
                        (n = e),
                        (i = [
                            {
                                key: 'componentDidMount',
                                value: function () {
                                    var t = this,
                                        e = this.props.options,
                                        n = e.widgetOptions.displayLocalDates;
                                    this.handleBreakpoints(),
                                        window.addEventListener(
                                            'resize',
                                            this.handleBreakpoints
                                        ),
                                        Promise.all([Lt(e.widgetOptions), Kt])
                                            .then(function (n) {
                                                var i = Vt(n, 2),
                                                    o = i[0],
                                                    r = i[1].default,
                                                    a = t.state.rawData,
                                                    s = r(Bt({}, a, o), e);
                                                t.setState({
                                                    rawData: Bt({}, a, o),
                                                    data: s,
                                                    isLoading: !1,
                                                }),
                                                    Ut()(s.jsonLd);
                                            })
                                            .catch(function (e) {
                                                console.log(e),
                                                    t.setState({
                                                        isLoading: !1,
                                                        error: e,
                                                    });
                                            }),
                                        n && this.getUserLocation();
                                },
                            },
                            {
                                key: 'componentWillUnmount',
                                value: function () {
                                    window.removeEventListener(
                                        'resize',
                                        this.handleBreakpoints
                                    );
                                },
                            },
                            {
                                key: 'getUserLocation',
                                value: function () {
                                    var t = this,
                                        e = this.props.options;
                                    Promise.all([
                                        new Promise(function (t, e) {
                                            navigator.geolocation
                                                ? navigator.geolocation.getCurrentPosition(
                                                      t,
                                                      e,
                                                      { timeout: 1e4 }
                                                  )
                                                : e(new Error(''));
                                        }),
                                        Kt,
                                    ])
                                        .then(function (n) {
                                            var i = Vt(n, 2),
                                                o = i[0],
                                                r = i[1].default,
                                                a = t.state,
                                                s = a.rawData,
                                                c = a.data,
                                                l = o.coords,
                                                u = {
                                                    latitude: l.latitude,
                                                    longitude: l.longitude,
                                                };
                                            t.setState({
                                                rawData: Bt({}, s, {
                                                    userLocation: u,
                                                }),
                                                data:
                                                    c &&
                                                    r(
                                                        Bt({}, s, {
                                                            userLocation: u,
                                                        }),
                                                        e
                                                    ),
                                            });
                                        })
                                        .catch(function (t) {
                                            console.log(t);
                                        });
                                },
                            },
                            {
                                key: 'fetchPastEventsData',
                                value: function () {
                                    var t = this,
                                        e = this.props.options;
                                    this.setState({ isLoading: !0 }),
                                        Promise.all([
                                            Dt(e.widgetOptions),
                                            Kt,
                                        ]).then(function (n) {
                                            var i = Vt(n, 2),
                                                o = i[0],
                                                r = i[1].default,
                                                a = t.state.rawData;
                                            t.setState({
                                                rawData: Bt({}, a, {
                                                    pastEvents: o,
                                                }),
                                                data: r(
                                                    Bt({}, a, {
                                                        pastEvents: o,
                                                    }),
                                                    e
                                                ),
                                                isLoading: !1,
                                                showingPastEvents: !0,
                                                pastEventsDataHasBeenFetched: !0,
                                            });
                                        });
                                },
                            },
                            {
                                key: 'handlePastEventsClick',
                                value: function () {
                                    this.state.pastEventsDataHasBeenFetched
                                        ? this.setState({
                                              showingPastEvents: !0,
                                          })
                                        : this.fetchPastEventsData();
                                },
                            },
                            {
                                key: 'handleUpcomingEventsClick',
                                value: function () {
                                    this.setState({ showingPastEvents: !1 });
                                },
                            },
                            {
                                key: 'handleBreakpoints',
                                value: function () {
                                    var t = this.props.options.widgetOptions,
                                        e = t.displayDetails,
                                        n = t.displayLineup,
                                        i = this.widgetDiv.clientWidth;
                                    this.setState({
                                        responsiveLayout:
                                            e || n ? Nt(i) : _t(i),
                                        responsiveLogoLayout: Ot(i),
                                    });
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    var t = this,
                                        e = this.state,
                                        n = e.data,
                                        i = e.responsiveLayout,
                                        o = e.responsiveLogoLayout,
                                        r = e.isLoading,
                                        a = e.showingPastEvents,
                                        s = Bt(
                                            {
                                                error: e.error,
                                                data: n,
                                                responsiveLayout: i,
                                                responsiveLogoLayout: o,
                                                isLoading: r,
                                                showingPastEvents: a,
                                            },
                                            this.props
                                        );
                                    return p(
                                        'div',
                                        {
                                            ref: function (e) {
                                                return (t.widgetDiv = e);
                                            },
                                        },
                                        p(
                                            Tt,
                                            Rt({}, s, {
                                                handlePastEventsClick: this
                                                    .handlePastEventsClick,
                                                handleUpcomingEventsClick: this
                                                    .handleUpcomingEventsClick,
                                            })
                                        )
                                    );
                                },
                            },
                        ]) && Yt(n.prototype, i),
                        o && Yt(n, o),
                        e
                    );
                })(U),
                Qt = n(9),
                $t = n.n(Qt),
                te = function () {
                    if (!window.navigator) return !1;
                    return /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i.test(
                        window.navigator.userAgent
                    );
                },
                ee = [
                    { key: 'linkColor', name: 'color', element: 'a' },
                    { key: 'font', name: 'fontFamily', element: 'div' },
                    { key: 'textColor', name: 'color', element: 'div' },
                ],
                ne = function (t, e) {
                    var n = {};
                    return (
                        ee.forEach(function (i) {
                            var o = i.key,
                                r = i.name,
                                a = i.element;
                            e[o] ||
                                (n[o] = (function (t, e, n) {
                                    var i = document.createElement(n);
                                    'a' === n && i.setAttribute('href', '#'),
                                        t.appendChild(i);
                                    var o = window.getComputedStyle(i)[e];
                                    return i.parentNode.removeChild(i), o;
                                })(t, r, a));
                        }),
                        n
                    );
                };
            function ie(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        'value' in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                }
            }
            var oe = (function () {
                function t(e) {
                    var n = e.phrases;
                    !(function (t, e) {
                        if (!(t instanceof e))
                            throw new TypeError(
                                'Cannot call a class as a function'
                            );
                    })(this, t),
                        (this.phrases = n);
                }
                var e, n, i;
                return (
                    (e = t),
                    (n = [
                        {
                            key: 't',
                            value: function (t) {
                                return t && this.phrases[t]
                                    ? this.phrases[t]
                                    : t;
                            },
                        },
                    ]) && ie(e.prototype, n),
                    i && ie(e, i),
                    t
                );
            })();
            function re(t, e, n) {
                return (
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = n),
                    t
                );
            }
            var ae = n(16),
                se = n(21),
                ce = n(22),
                le = n(23),
                ue = n(31),
                pe = n(32),
                de = n(33),
                fe = function (t) {
                    var e = $t()(t),
                        n = {};
                    return (
                        o()(e, function (t, e) {
                            var i, o, r;
                            n[e] =
                                ((i = t.trim()),
                                (o = i.toLowerCase()),
                                (r = !isNaN(Number(i))),
                                '' === i
                                    ? void 0
                                    : 'true' === o ||
                                      ('false' !== o && (r ? Number(i) : i)));
                        }),
                        n.artistName &&
                            (n.artistName = n.artistName.toString()),
                        n
                    );
                },
                be = function (t, e) {
                    var n = (function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n =
                                        null != arguments[e]
                                            ? Object(arguments[e])
                                            : {},
                                    i = Object.keys(n);
                                'function' ==
                                    typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(
                                            function (t) {
                                                return Object.getOwnPropertyDescriptor(
                                                    n,
                                                    t
                                                ).enumerable;
                                            }
                                        )
                                    )),
                                    i.forEach(function (e) {
                                        re(t, e, n[e]);
                                    });
                            }
                            return t;
                        })({}, e.autoStyle ? ne(t, e) : {}, e),
                        i = ce(n, ue.styleOptions);
                    return ae(i, de);
                },
                ve = function (t) {
                    var e = ce(t, ue.widgetOptions);
                    return ae(e, pe);
                },
                he = function (t) {
                    return se(['de', 'en', 'es', 'fr', 'it', 'ja', 'pt'], t)
                        ? t
                        : 'en';
                },
                me = function (t) {
                    var e = t.affilCode,
                        n = t.appId,
                        i = 'js_'.concat(window.location.hostname);
                    return {
                        utm_medium: 'web',
                        utm_source: 'widget',
                        came_from: '242',
                        app_id: n || i,
                        affil_code: e || i,
                    };
                },
                ye = function (t) {
                    var e = t.styleOptions,
                        n = e.fontSize,
                        i = e.font,
                        o = e.widgetWidth,
                        r = e.textColor,
                        s = e.backgroundColor,
                        c = e.linkColor,
                        l = e.linkTextColor,
                        u = e.separatorColor;
                    a()(
                        '\n    .bit-widget {\n      font-size:'
                            .concat(n, ';\n      font-family:')
                            .concat(i, ';\n      width:')
                            .concat(o, ';\n      color:')
                            .concat(r, ';\n      background-color:')
                            .concat(
                                s,
                                ';\n    }\n\n    .bit-widget .bit-offers {\n      background-color:'
                            )
                            .concat(c, ';\n      border: 1px solid ')
                            .concat(c, ';\n      color: ')
                            .concat(
                                l,
                                ';\n    }\n\n    .bit-widget .bit-rsvp {\n      color:'
                            )
                            .concat(c, ';\n      border: 1px solid ')
                            .concat(
                                c,
                                ';\n    }\n\n    .bit-widget .bit-venue {\n      color:'
                            )
                            .concat(
                                c,
                                ';\n    }\n\n    .bit-widget .bit-lineUp {\n      color:'
                            )
                            .concat(
                                c,
                                ';\n    }\n\n    .bit-widget .bit-event {\n      border-top: 1px solid '
                            )
                            .concat(u, ';\n      color: ')
                            .concat(
                                r,
                                ';\n    }\n\n    .bit-widget .bit-upcoming-events, bit-past-events {\n      border-bottom: 1px solid '
                            )
                            .concat(
                                u,
                                ';\n    }\n\n    .bit-widget .bit-upcoming-events-show-all-button, .bit-past-events-show-all-button {\n      color: '
                            )
                            .concat(c, ';\n      border: 1px solid ')
                            .concat(
                                c,
                                ';\n    }\n\n    .bit-widget .bit-play-my-city-button {\n      background-color:'
                            )
                            .concat(c, ';\n      border: 1px solid ')
                            .concat(c, ';\n      color: ')
                            .concat(
                                l,
                                ';\n    }\n\n    .bit-widget .bit-clickable {\n      color: '
                            )
                            .concat(c, ';\n    }\n  ')
                    );
                },
                ge = function (t) {
                    var e = (function (t) {
                        var e = fe(t),
                            n = he(e.language),
                            i = new oe({ phrases: le[n] });
                        return {
                            styleOptions: be(t, e),
                            widgetOptions: ve(e),
                            language: n,
                            trackingParams: me(e),
                            polyglot: i,
                            isMobile: te(),
                        };
                    })(t);
                    ye(e);
                    var n = document.createElement('div');
                    n.setAttribute('class', 'bit-widget-container');
                    var i = e.widgetOptions.divId;
                    if (i && document.getElementById(i)) {
                        t.parentNode.removeChild(t),
                            document.getElementById(i).appendChild(n);
                    } else {
                        var o = t;
                        o.parentNode.replaceChild(n, o);
                    }
                    G(p(qt, { options: e }), n);
                },
                we = n(10),
                xe = n.n(we),
                Ie = n(11),
                Se = function (t, e) {
                    var n = (function (t, e) {
                        var n = he(e.language),
                            i = new oe({ phrases: le[n] });
                        return {
                            styleOptions: be(t, e),
                            widgetOptions: ve(e),
                            language: n,
                            trackingParams: me(e),
                            polyglot: i,
                            isMobile: te(),
                        };
                    })(t, e);
                    ye(n);
                    var i = document.createElement('div');
                    i.setAttribute('class', 'bit-widget-container'),
                        t.appendChild(i),
                        G(p(qt, { options: n }), i);
                };
            window.Promise || n(34).polyfill(),
                (window.BIT = window.BIT || {}),
                Object(Ie.docReady)(function () {
                    var t = document.querySelectorAll(
                        '.bit-widget-initializer'
                    );
                    o()(t, function (t) {
                        return ge(t);
                    }),
                        a()(xe.a);
                    var e = new MutationObserver(function () {
                        var t = document.querySelectorAll(
                            '.bit-widget-initializer'
                        );
                        o()(t, function (t) {
                            return ge(t);
                        });
                    });
                    e.observe(document.body, { childList: !0 }),
                        (window.BIT.widgetInitializer = {
                            append: Se,
                            mutationObserver: e,
                        }),
                        window.BIT.onReady && window.BIT.onReady();
                });
        },
    ]);
