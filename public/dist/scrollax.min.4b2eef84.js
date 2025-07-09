// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/scrollax.min.js":[function(require,module,exports) {
var define;
/**
 *  _______ _______  ______  _____                _______ _     _
 *  |______ |       |_____/ |     | |      |      |_____|  \___/ 
 *  ______| |_____  |    \_ |_____| |_____ |_____ |     | _/   \_
 *
 *  Parallax Scrolling Library
 *  http://iprodev.github.io/Scrollax.js
 *
 *  @version:  1.0.0
 *  @released: July 21, 2015
 *
 *  @author:   iProDev (Hemn Chawroka)
 *             http://iprodev.com/
 *
 *  Licensed under the MIT license.
 *  http://opensource.org/licenses/MIT
 * 
 */
(function (e) {
  "function" === typeof define && define.amd ? define(["jquery"], e) : "undefined" !== typeof exports ? module.exports = e(require("jquery")) : e(jQuery);
})(function (e) {
  function W(a) {
    if (console && console.warn) console.warn("Scrollax: " + a);else throw "Scrollax: " + a;
  }
  function ka(a) {
    var g = !!("pageYOffset" in a);
    return {
      width: g ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth : a.offsetWidth,
      height: g ? window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight : a.offsetHeight,
      left: a[g ? "pageXOffset" : "scrollLeft"],
      top: a[g ? "pageYOffset" : "scrollTop"]
    };
  }
  function X(a) {
    return (a = a.data("scrollax")) && eval("({" + a + "})") || {};
  }
  function Y(a) {
    var g, c;
    return !!(a && "object" === typeof a && "object" === typeof a.window && a.window == a && a.setTimeout && a.alert && (g = a.document) && "object" === typeof g && (c = g.defaultView || g.parentWindow) && "object" === typeof c && c == a);
  }
  var v = Array.prototype,
    C = v.push,
    Z = v.splice,
    aa = Object.prototype.hasOwnProperty,
    la = /[-+]?\d+(\.\d+)?/g,
    ma = "translateX translateY rotate rotateX rotateY rotateZ skewX skewY scaleX scaleY".split(" "),
    ba = e(window),
    ca = e(document.body),
    da,
    ea,
    L,
    M,
    N,
    q = function (a, g, c) {
      function k() {
        O = fa ? ca.find(ga) : P.find(ga);
        x.length = 0;
        r = !!t.horizontal;
        O.each(na);
        d();
        t.performanceTrick && (F = fa ? ca : P);
        u("load");
        return f;
      }
      function l() {
        G && (G = clearTimeout(G));
        G = setTimeout(function () {
          f.reload();
        });
      }
      function d() {
        var ha = x.length;
        t.performanceTrick && F && (clearTimeout(ia), Q || (F.addClass("scrollax-performance"), Q = !0), ia = setTimeout(function () {
          F.removeClass("scrollax-performance");
          Q = !1;
        }, 100));
        if (ha) {
          H = ka(a);
          for (var c = 0; c < ha; c++) I = x[c], y = L(I.element, a), 0 > y[r ? "right" : "bottom"] || y[r ? "left" : "top"] > H[r ? "width" : "height"] || (ja = I.options, R = ja.offset || t.offset || 0, J = y[r ? "right" : "bottom"], z = y[r ? "width" : "height"], A = (z - J + R) / z, 0 > A && (J = y[r ? "left" : "top"], z = H[r ? "width" : "height"], A = -1 + (z - J + R) / z), 1 < A || -1 > A || b(I, A, r));
          u("scroll", H);
        }
      }
      function b(a, b) {
        S = a.parallaxElements;
        var c = S.length;
        if (c) for (var f = 0; f < c; f++) {
          T = S[f];
          var g = oa = T.element,
            d = b;
          U = T.properties || (r ? {
            translateX: "100%"
          } : {
            translateY: "100%"
          });
          D = "";
          for (B in U) {
            n = U[B];
            if ("number" === typeof n) n *= d;else if ("string" === typeof n) for (K = n.match(la), m = 0, E = K.length; m < E; m++) n = n.replace(K[m], parseFloat(K[m] * d));
            if (-1 !== e.inArray(B, ma)) D += B + "(" + n + ")";else {
              var k = g.style,
                l = B,
                h;
              "opacity" === B ? (h = 0 > d ? 1 + n : 1 - n, h = 0 > h ? 0 : 1 < h ? 1 : h) : h = n;
              k[l] = h;
            }
          }
          D && (g.style[da] = ea + D);
        }
      }
      function pa(a) {
        return "undefined" !== typeof a ? "number" !== typeof a && "string" !== typeof a || "" === a || isNaN(a) ? O.index(a) : 0 <= a && a < x.length ? a : -1 : -1;
      }
      function u(a, b) {
        if (h[a]) {
          E = h[a].length;
          for (m = V.length = 0; m < E; m++) C.call(V, h[a][m]);
          for (m = 0; m < E; m++) V[m].call(f, a, b);
        }
      }
      function p(a, b) {
        for (var c = 0, f = h[a].length; c < f; c++) if (h[a][c] === b) return c;
        return -1;
      }
      var f = this,
        P = a && e(a).eq(0) || ba,
        w = q.instances,
        v = null;
      a = P[0];
      e.each(w, function (b, c) {
        b && b.frame === a && (v = !0);
      });
      if (!a || v) v ? W("Scrollax: Scrollax has been initialized for this frame!") : W("Scrollax: Frame is not available!");else {
        var t = e.extend({}, q.defaults, g),
          x = [],
          O = null,
          ga = t.parentSelector || "[data-scrollax-parent]",
          qa = t.elementsSelector || "[data-scrollax]",
          h = {},
          V = [],
          G,
          fa = Y(a),
          m,
          E,
          F,
          ia,
          Q,
          H,
          r,
          R,
          y,
          I,
          ja,
          A,
          J,
          z,
          S,
          T,
          oa,
          U,
          B,
          n,
          D,
          K;
        f.frame = a;
        f.options = t;
        f.parents = x;
        f.initialized = !1;
        f.reload = k;
        var na = function (a, b) {
          var c = e(b),
            f = X(e(b)),
            d = {};
          d.element = b;
          d.options = f;
          d.parallaxElements = [];
          c.find(qa).each(function (a, b) {
            var c = X(e(b));
            c.element = b;
            C.call(d.parallaxElements, c);
          });
          C.call(x, d);
        };
        f.scroll = d;
        f.getIndex = pa;
        f.one = function (a, b) {
          function c() {
            b.apply(f, arguments);
            f.off(a, c);
          }
          f.on(a, c);
          return f;
        };
        f.on = function (a, b) {
          if ("object" === typeof a) for (var c in a) {
            if (aa.call(a, c)) f.on(c, a[c]);
          } else if ("function" === typeof b) {
            c = a.split(" ");
            for (var d = 0, g = c.length; d < g; d++) h[c[d]] = h[c[d]] || [], -1 === p(c[d], b) && C.call(h[c[d]], b);
          } else if ("array" === typeof b) for (c = 0, d = b.length; c < d; c++) f.on(a, b[c]);
          return f;
        };
        f.off = function (a, c) {
          if (c instanceof Array) for (var b = 0, d = c.length; b < d; b++) f.off(a, c[b]);else for (var b = a.split(" "), d = 0, g = b.length; d < g; d++) if (h[b[d]] = h[b[d]] || [], "undefined" === typeof c) h[b[d]].length = 0;else {
            var k = p(b[d], c);
            -1 !== k && Z.call(h[b[d]], k, 1);
          }
          return f;
        };
        f.set = function (a, b) {
          e.isPlainObject(a) ? e.extend(t, a) : aa.call(t, a) && (t[a] = b);
          k();
          return f;
        };
        f.destroy = function () {
          N(window, "resize", l);
          N(a, "scroll", d);
          e.each(w, function (b, c) {
            b && b.frame === a && Z.call(q.instances, c, 1);
          });
          x.length = 0;
          f.initialized = !1;
          u("destroy");
          return f;
        };
        f.init = function () {
          if (!f.initialized) return f.on(c), k(), M(window, "resize", l), M(a, "scroll", d), C.call(q.instances, f), f.initialized = !0, u("initialized"), f;
        };
      }
    };
  q.instances = [];
  (function () {
    var a, g, c, k, l, d, b, e;
    L = function (u, p) {
      g = u.ownerDocument || u;
      c = g.documentElement;
      k = Y(p) ? p : g.defaultView || window;
      p = p && p !== g ? p : c;
      l = (k.pageYOffset || c.scrollTop) - c.clientTop;
      d = (k.pageXOffset || c.scrollLeft) - c.clientLeft;
      b = {
        top: 0,
        left: 0
      };
      if (u && u.getBoundingClientRect) {
        var f = {},
          q = u.getBoundingClientRect();
        for (a in q) f[a] = q[a];
        b = f;
        b.width = b.right - b.left;
        b.height = b.bottom - b.top;
      } else return null;
      if (p === k) return b;
      b.top += l;
      b.left += d;
      b.right += d;
      b.bottom += l;
      if (p === c) return b;
      e = L(p);
      b.left -= e.left;
      b.right -= e.left;
      b.top -= e.top;
      b.bottom -= e.top;
      return b;
    };
  })();
  (function () {
    function a() {
      this.returnValue = !1;
    }
    function g() {
      this.cancelBubble = !0;
    }
    M = window.addEventListener ? function (a, g, e, d) {
      a.addEventListener(g, e, d || !1);
      return e;
    } : function (c, e, l) {
      var d = e + l;
      c[d] = c[d] || function () {
        var b = window.event;
        b.target = b.srcElement;
        b.preventDefault = a;
        b.stopPropagation = g;
        l.call(c, b);
      };
      c.attachEvent("on" + e, c[d]);
      return l;
    };
    N = window.removeEventListener ? function (a, g, e, d) {
      a.removeEventListener(g, e, d || !1);
      return e;
    } : function (a, g, e) {
      var d = g + e;
      a.detachEvent("on" + g, a[d]);
      try {
        delete a[d];
      } catch (b) {
        a[d] = void 0;
      }
      return e;
    };
  })();
  (function () {
    function a(a) {
      for (var e = 0, d = g.length; e < d; e++) {
        var b = g[e] ? g[e] + a.charAt(0).toUpperCase() + a.slice(1) : a;
        if (null != c.style[b]) return b;
      }
    }
    var g = ["", "webkit", "moz", "ms", "o"],
      c = document.createElement("div");
    da = a("transform");
    ea = a("perspective") ? "translateZ(0) " : "";
  })();
  q.defaults = {
    horizontal: !1,
    offset: 0,
    parentSelector: null,
    elementsSelector: null,
    performanceTrick: !1
  };
  window.Scrollax = q;
  e.fn.Scrollax = function (a, g) {
    var c, k;
    if (!e.isPlainObject(a)) {
      if ("string" === typeof a || !1 === a) c = !1 === a ? "destroy" : a, k = slice.call(arguments, 1);
      a = {};
    }
    return this.each(function (l, d) {
      var b = e.data(d, "scrollax");
      b || c ? b && c && b[c] && b[c].apply(b, k) : e.data(d, "scrollax", new q(d, a, g).init());
    });
  };
  e.Scrollax = function (a, e) {
    ba.Scrollax(a, e);
  };
  var v = document.head || document.getElementsByTagName("head")[0],
    w = document.createElement("style");
  w.type = "text/css";
  w.styleSheet ? w.styleSheet.cssText = ".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };" : w.appendChild(document.createTextNode(".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };"));
  v.appendChild(w);
  return q;
});
},{}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49168" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/scrollax.min.js"], null)
//# sourceMappingURL=/scrollax.min.4b2eef84.js.map