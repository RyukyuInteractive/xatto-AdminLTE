(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('xatto'), require('jquery'), require('admin-lte'), require('chart.js'), require('jquery-sparkline'), require('jvectormap'), require('bootstrap')) :
    typeof define === 'function' && define.amd ? define(['exports', 'xatto', 'jquery', 'admin-lte', 'chart.js', 'jquery-sparkline', 'jvectormap', 'bootstrap'], factory) :
    (factory((global['xatto-admin-lte'] = {}),global.xatto,global.jQuery,null,global.Chart));
}(this, (function (exports,xatto,jQuery,adminLte,Chart) { 'use strict';

    jQuery = jQuery && jQuery.hasOwnProperty('default') ? jQuery['default'] : jQuery;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    function BoxRefresh(_a, children) {
        var xa = _a.xa, attrs = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({ oncreate: onCreate }, attrs), children));
    }
    function onCreate(element) {
        jQuery(element).boxRefresh();
    }

    function BoxWidget(_a, children) {
        var xa = _a.xa, attrs = __rest(_a, ["xa"]);
        if (null == attrs.class) {
            attrs.class = '';
        }
        attrs.class += ' box';
        return (xatto.x("div", __assign({ oncreate: onCreate$1 }, attrs), children));
    }
    function onCreate$1(element) {
        jQuery(element).boxWidget();
    }

    function ControlSidebar(_a, children) {
        var xa = _a.xa, attrs = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({ oncreate: onCreate$2 }, attrs), children));
    }
    function onCreate$2(element) {
        jQuery(element).controlSidebar();
    }

    function DirectChat(_a, children) {
        var xa = _a.xa, attrs = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({ oncreate: onCreate$3 }, attrs), children));
    }
    function onCreate$3(element) {
        jQuery(element).directChat();
    }

    function Layout(_a, children) {
        var xa = _a.xa, attrs = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({ oncreate: onCreate$4 }, attrs),
            xatto.x("div", { class: "wrapper" }, children)));
    }
    function onCreate$4(element) {
        jQuery(element).layout();
    }

    function PushMenu(_a, children) {
        var xa = _a.xa, attrs = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({ oncreate: onCreate$5 }, attrs), children));
    }
    function onCreate$5(element) {
        jQuery(element).pushMenu();
    }

    function TodoList(_a, children) {
        var xa = _a.xa, attrs = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({ oncreate: onCreate$6 }, attrs), children));
    }
    function onCreate$6(element) {
        jQuery(element).todoList();
    }

    function Tree(_a, children) {
        var xa = _a.xa, attrs = __rest(_a, ["xa"]);
        return (xatto.x("ul", __assign({ oncreate: onCreate$7 }, attrs), children));
    }
    function onCreate$7(element) {
        jQuery(element).tree();
    }

    /**
     * Get an item from an object using separator notation.
     *
     * @typeparam {T}
     * @param {any} target
     * @param {string} key
     * @param {string} separator
     * @return {T}
     */

    /**
     * Set an object item to a given value using separator notation.
     *
     * @param {any} target
     * @param {string} key
     * @param {any} value
     * @param {string} separator
     * @return {boolean}
     */
    function deepSet(target, key, value, separator) {
        if (separator === void 0) { separator = '.'; }
        while (true) {
            if ('object' !== typeof target) {
                return false;
            }
            var idx = key.indexOf(separator);
            if (idx < 0) {
                target[key] = value;
                return true;
            }
            var current = key.slice(0, idx);
            var nexts = key.slice(idx + 1);
            if (null == target[current]) {
                var next = nexts.split(separator, 1)[0];
                target[current] = next === "" + parseInt(next, 10) ? [] : {};
            }
            target = target[current];
            key = nexts;
        }
    }

    /**
     * Flatten a multi-dimensional object with separators.
     *
     * @typeparam {T extends {}}
     * @param {any} target
     * @param {string} separator
     * @param {T} acc
     * @return Object
     */
    function flattenObject(target, separator, acc) {
        if (separator === void 0) { separator = '.'; }
        if (acc === void 0) { acc = {}; }
        if ('object' !== typeof target) {
            return acc;
        }
        return optimizatedFlattenObjectTailCall([[target]], separator, acc);
    }
    function optimizatedFlattenObjectTailCall(targets, separator, acc) {
        while (true) {
            if (targets.length < 1) {
                return acc;
            }
            var nexts = [];
            var _loop_1 = function (target, key) {
                if ('object' === typeof target) {
                    var prefix_1 = key ? "" + key + separator : '';
                    nexts.push.apply(nexts, Array.isArray(target)
                        ? target.map(function (v, i) { return [v, "" + prefix_1 + i]; })
                        : Object.entries(target).map(function (_a) {
                            var k = _a[0], v = _a[1];
                            return [v, "" + prefix_1 + k];
                        }));
                }
                else {
                    acc[key] = target;
                }
            };
            for (var _i = 0, targets_1 = targets; _i < targets_1.length; _i++) {
                var _a = targets_1[_i], target = _a[0], key = _a[1];
                _loop_1(target, key);
            }
            targets = nexts;
        }
    }

    function parseJson(value) {
        if (null == value) {
            return null;
        }
        try {
            return 'string' === typeof value ? JSON.parse(value) : value;
        }
        catch (e) {
            return null;
        }
    }

    function ChartX(_a, children) {
        var xa = _a.xa, attrs = __rest(_a, ["xa"]);
        return (xatto.x("canvas", __assign({}, attrs, { oncreate: onCreateFactory(attrs), onupdate: onUpdateFactory(attrs) }), children));
    }
    function onCreateFactory(attrs) {
        return function (element) { return onCreate$8(element, attrs); };
    }
    function onCreate$8(element, attrs) {
        var ctx = element.getContext('2d');
        var $element = jQuery(element);
        var options = $element.data() || {};
        var type = attrs.type || 'line';
        var data = parseJson(attrs.data) || {};
        // // chart.js v2 and newer
        // element.chart = new ChartJS(ctx, {
        //   type,
        //   data,
        //   options
        // })
        var method = type[0].toUpperCase() + type.slice(1);
        element.chart = new Chart(ctx)[method](data, options);
    }
    function onUpdateFactory(attrs) {
        return function (element) { return onUpdate(element, attrs); };
    }
    function onUpdate(element, attrs) {
        var data = parseJson(attrs.data) || {};
        // // chart.js v2.6 and newer
        // element.chart.data = data
        Object.entries(flattenObject(data.datasets || {})).map(function (_a) {
            var key = _a[0], value = _a[1];
            return deepSet(element.chart.datasets, key, value);
        });
        element.chart.update();
    }

    function Sparklines(_a, children) {
        var xa = _a.xa, attrs = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({}, attrs, { oncreate: onCreateFactory$1(attrs) }), children));
    }
    function onCreateFactory$1(attrs) {
        return function (element) { return onCreate$9(element, attrs); };
    }
    function onCreate$9(element, attrs) {
        var $element = jQuery(element);
        var data = parseJson(attrs.data) || 'html';
        var options = $element.data() || {};
        var type = attrs.type || 'bar';
        $element.sparkline(data, __assign({ type: type }, options));
    }

    function VectorMap(attrs, children) {
        return (xatto.x("div", __assign({}, attrs, { oncreate: onCreateFactory$2(attrs), onupdate: onUpdateFactory$1(attrs) })));
    }
    function onCreateFactory$2(attrs) {
        return function (element) { return onCreate$10(element, attrs); };
    }
    function onCreate$10(element, attrs) {
        var $element = jQuery(element);
        var data = parseJson(attrs.data) || {};
        $element.vectorMap(data);
    }
    var settables = {
        backgroundColor: 1,
        focus: 1
    };
    function onUpdateFactory$1(attrs) {
        return function (element) { return onUpdate$1(element, attrs); };
    }
    function onUpdate$1(element, attrs) {
        var $element = jQuery(element);
        var data = parseJson(attrs.data) || {};
        Object.entries(data).map(function (_a) {
            var key = _a[0], value = _a[1];
            if (settables[key]) {
                $element.vectorMap('set', key, value);
            }
        });
    }

    function Modal(attrs, children) {
        return function (state, actions) { return (xatto.x("div", __assign({ role: "dialog", tabindex: "-1" }, filterEvents(attrs), { class: attrs.class + ' modal fade', oncreate: onCreateFactory$3(attrs), onremove: onRemoveFactory(attrs) }), children)); };
    }
    var eventsMap = {
        onhidden: 'hidden.bs.modal',
        onhide: 'hide.bs.modal',
        onloaded: 'loaded.bs.modal',
        onshow: 'show.bs.modal',
        onshown: 'shown.bs.modal'
    };
    function onCreateFactory$3(attrs) {
        return function (element) { return onCreate$11(element, attrs); };
    }
    function onCreate$11(element, attrs) {
        var $element = jQuery(element);
        $element.modal();
        Object.entries(attrs).map(function (_a) {
            var key = _a[0], value = _a[1];
            if (eventsMap[key]) {
                $element.on(eventsMap[key], value);
            }
        });
        if (attrs.oncreate) {
            attrs.oncreate(element);
        }
    }
    function onRemoveFactory(attrs) {
        return function (element, done) { return onRemove(element, done, attrs); };
    }
    function onRemove(element, done, attrs) {
        var $element = jQuery(element);
        $element.one('hidden.bs.modal', done);
        $element.modal('hide');
        if (attrs.onremove) {
            attrs.onremove(element, done);
        }
    }
    function filterEvents(attrs) {
        return Object.entries(attrs).reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            if (!(key in eventsMap)) {
                acc[key] = value;
            }
            return acc;
        }, {});
    }

    exports.BoxRefresh = BoxRefresh;
    exports.BoxWidget = BoxWidget;
    exports.ControlSidebar = ControlSidebar;
    exports.DirectChat = DirectChat;
    exports.Layout = Layout;
    exports.PushMenu = PushMenu;
    exports.TodoList = TodoList;
    exports.Tree = Tree;
    exports.Chart = ChartX;
    exports.Sparklines = Sparklines;
    exports.VectorMap = VectorMap;
    exports.Modal = Modal;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
