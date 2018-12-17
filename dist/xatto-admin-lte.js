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
        var xa = _a.xa, props = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({}, props, { oncreate: onCreate, tier: props }), children));
    }
    var onCreate = xatto.currentOnly(function (context, detail, props, event) {
        jQuery(event.target).boxRefresh();
        if (props.tier.oncreate) {
            props.tier.oncreate(context, detail, props, event);
        }
    });

    function BoxWidget(_a, children) {
        var xa = _a.xa, props = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({}, props, { class: [props.class, 'box'].filter(Boolean).join(' '), oncreate: onCreate$1, tier: props }), children));
    }
    var onCreate$1 = xatto.currentOnly(function (context, detail, props, event) {
        jQuery(event.target).boxWidget();
        if (props.tier.oncreate) {
            props.tier.oncreate(context, detail, props, event);
        }
    });

    function ControlSidebar(_a, children) {
        var xa = _a.xa, props = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({}, props, { oncreate: onCreate$2, tier: props }), children));
    }
    var onCreate$2 = xatto.currentOnly(function (context, detail, props, event) {
        jQuery(event.target).controlSidebar();
        if (props.tier.oncreate) {
            props.tier.oncreate(context, detail, props, event);
        }
    });

    function DirectChat(_a, children) {
        var xa = _a.xa, attrs = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({ oncreate: onCreate$3 }, attrs), children));
    }
    var onCreate$3 = xatto.currentOnly(function (context, detail, props, event) {
        jQuery(event.target).directChat();
        if (props.tier.oncreate) {
            props.tier.oncreate(context, detail, props, event);
        }
    });

    function Layout(_a, children) {
        var xa = _a.xa, props = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({}, props, { oncreate: onCreate$4, tier: props }),
            xatto.x("div", { class: "wrapper" }, children)));
    }
    var onCreate$4 = xatto.currentOnly(function (context, detail, props, event) {
        jQuery(event.target).layout();
        if (props.tier.oncreate) {
            props.tier.oncreate(context, detail, props, event);
        }
    });

    function PushMenu(_a, children) {
        var xa = _a.xa, props = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({}, props, { oncreate: onCreate$5, tier: props }), children));
    }
    var onCreate$5 = xatto.currentOnly(function (context, detail, props, event) {
        jQuery(event.target).pushMenu();
        if (props.tier.oncreate) {
            props.tier.oncreate(context, detail, props, event);
        }
    });

    function TodoList(_a, children) {
        var xa = _a.xa, props = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({}, props, { oncreate: onCreate$6, tier: props }), children));
    }
    var onCreate$6 = xatto.currentOnly(function (context, detail, props, event) {
        jQuery(event.target).todoList();
        if (props.tier.oncreate) {
            props.tier.oncreate(context, detail, props, event);
        }
    });

    function Tree(_a, children) {
        var xa = _a.xa, props = __rest(_a, ["xa"]);
        return (xatto.x("ul", __assign({}, props, { oncreate: onCreate$7, tier: props }), children));
    }
    var onCreate$7 = xatto.currentOnly(function (context, detail, props, event) {
        jQuery(event.target).tree();
        if (props.tier.oncreate) {
            props.tier.oncreate(context, detail, props, event);
        }
    });

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
        var xa = _a.xa, props = __rest(_a, ["xa"]);
        return (xatto.x("canvas", __assign({}, props, { oncreate: onCreate$8, onupdate: onUpdate, tier: props }), children));
    }
    var onCreate$8 = xatto.currentOnly(function (context, detail, props, event) {
        var element = event.target;
        var ctx = element.getContext('2d');
        var $element = jQuery(element);
        var options = $element.data() || {};
        var type = props.type || 'line';
        var data = parseJson(props.data) || {};
        // // chart.js v2 and newer
        // element.chart = new ChartJS(ctx, {
        //   type,
        //   data,
        //   options
        // })
        var method = type[0].toUpperCase() + type.slice(1);
        element.chart = new Chart(ctx)[method](data, options);
        if (props.tier.oncreate) {
            props.tier.oncreate(context, detail, props, event);
        }
    });
    var onUpdate = xatto.currentOnly(function (context, detail, props, event) {
        var element = event.target;
        var data = parseJson(props.data) || {};
        // // chart.js v2.6 and newer
        // element.chart.data = data
        var datasets = flattenObject(data.datasets || {});
        for (var key in datasets) {
            if (datasets.hasOwnProperty(key)) {
                var value = datasets[key];
                deepSet(element.chart.datasets, key, value);
            }
        }
        element.chart.update();
        if (props.tier.onupdate) {
            props.tier.onupdate(context, detail, props, event);
        }
    });

    function Sparklines(_a, children) {
        var xa = _a.xa, props = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({}, props, { oncreate: onCreate$9, tier: props }), children));
    }
    var onCreate$9 = xatto.currentOnly(function (context, detail, props, event) {
        var $element = jQuery(event.target);
        var data = parseJson(props.data) || 'html';
        var options = $element.data() || {};
        var type = props.type || 'bar';
        $element.sparkline(data, __assign({ type: type }, options));
        if (props.tier.oncreate) {
            props.tier.oncreate(context, detail, props, event);
        }
    });

    function VectorMap(_a, children) {
        var xa = _a.xa, props = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({}, props, { oncreate: onCreate$10, onupdate: onUpdate$1, tier: props })));
    }
    var onCreate$10 = xatto.currentOnly(function (context, detail, props, event) {
        var $element = jQuery(event.target);
        var data = parseJson(props.data) || {};
        $element.vectorMap(data);
        if (props.tier.oncreate) {
            props.tier.oncreate(context, detail, props, event);
        }
    });
    var settables = {
        backgroundColor: 1,
        focus: 1
    };
    var onUpdate$1 = xatto.currentOnly(function (context, detail, props, event) {
        var $element = jQuery(event.target);
        var data = parseJson(props.data) || {};
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var value = data[key];
                if (settables[key]) {
                    $element.vectorMap('set', key, value);
                }
            }
        }
        if (props.tier.onupdate) {
            props.tier.onupdate(context, detail, props, event);
        }
    });

    function Modal(_a, children) {
        var xa = _a.xa, props = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({ role: "dialog", tabindex: "-1" }, props, { class: props.class + ' modal fade', oncreate: onCreate$11, onremove: onRemove, tier: props }), children));
    }
    var eventsMap = {
        hidden: 'hidden.bs.modal',
        hide: 'hide.bs.modal',
        loaded: 'loaded.bs.modal',
        show: 'show.bs.modal',
        shown: 'shown.bs.modal'
    };
    var onCreate$11 = xatto.currentOnly(function (context, detail, props, event) {
        var $element = jQuery(event.target);
        $element.modal();
        for (var key in props) {
            if (props.hasOwnProperty(key)) {
                var value = props[key];
                if (eventsMap[key]) {
                    $element.on(eventsMap[key], value);
                }
            }
        }
        if (props.tier.oncreate) {
            props.tier.oncreate(context, detail, props, event);
        }
    });
    var onRemove = xatto.currentOnly(function (context, detail, props, event) {
        var $element = jQuery(event.target);
        $element.one('hidden.bs.modal', detail.done);
        $element.modal('hide');
        if (props.tier.onremove) {
            props.tier.onremove(context, detail, props, event);
        }
    });

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
