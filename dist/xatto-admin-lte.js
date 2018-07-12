(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('xatto')) :
    typeof define === 'function' && define.amd ? define(['exports', 'xatto'], factory) :
    (factory((global['xatto-admin-lte'] = {}),global.xatto));
}(this, (function (exports,xatto) { 'use strict';

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

    /*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
    ( function( global, factory ) {

    	if ( typeof module === "object" && typeof module.exports === "object" ) {

    		// For CommonJS and CommonJS-like environments where a proper `window`
    		// is present, execute the factory and get jQuery.
    		// For environments that do not have a `window` with a `document`
    		// (such as Node.js), expose a factory as module.exports.
    		// This accentuates the need for the creation of a real `window`.
    		// e.g. var jQuery = require("jquery")(window);
    		// See ticket #14549 for more info.
    		module.exports = global.document ?
    			factory( global, true ) :
    			function( w ) {
    				if ( !w.document ) {
    					throw new Error( "jQuery requires a window with a document" );
    				}
    				return factory( w );
    			};
    	} else {
    		factory( global );
    	}

    // Pass this if window is not defined yet
    } )( typeof window !== "undefined" ? window : undefined, function( window, noGlobal ) {

    var arr = [];

    var document = window.document;

    var getProto = Object.getPrototypeOf;

    var slice = arr.slice;

    var concat = arr.concat;

    var push = arr.push;

    var indexOf = arr.indexOf;

    var class2type = {};

    var toString = class2type.toString;

    var hasOwn = class2type.hasOwnProperty;

    var fnToString = hasOwn.toString;

    var ObjectFunctionString = fnToString.call( Object );

    var support = {};

    var isFunction = function isFunction( obj ) {

          // Support: Chrome <=57, Firefox <=52
          // In some browsers, typeof returns "function" for HTML <object> elements
          // (i.e., `typeof document.createElement( "object" ) === "function"`).
          // We don't want to classify *any* DOM node as a function.
          return typeof obj === "function" && typeof obj.nodeType !== "number";
      };


    var isWindow = function isWindow( obj ) {
    		return obj != null && obj === obj.window;
    	};




    	var preservedScriptAttributes = {
    		type: true,
    		src: true,
    		noModule: true
    	};

    	function DOMEval( code, doc, node ) {
    		doc = doc || document;

    		var i,
    			script = doc.createElement( "script" );

    		script.text = code;
    		if ( node ) {
    			for ( i in preservedScriptAttributes ) {
    				if ( node[ i ] ) {
    					script[ i ] = node[ i ];
    				}
    			}
    		}
    		doc.head.appendChild( script ).parentNode.removeChild( script );
    	}


    function toType( obj ) {
    	if ( obj == null ) {
    		return obj + "";
    	}

    	// Support: Android <=2.3 only (functionish RegExp)
    	return typeof obj === "object" || typeof obj === "function" ?
    		class2type[ toString.call( obj ) ] || "object" :
    		typeof obj;
    }
    /* global Symbol */
    // Defining this global in .eslintrc.json would create a danger of using the global
    // unguarded in another place, it seems safer to define global only for this module



    var
    	version = "3.3.1",

    	// Define a local copy of jQuery
    	jQuery = function( selector, context ) {

    		// The jQuery object is actually just the init constructor 'enhanced'
    		// Need init if jQuery is called (just allow error to be thrown if not included)
    		return new jQuery.fn.init( selector, context );
    	},

    	// Support: Android <=4.0 only
    	// Make sure we trim BOM and NBSP
    	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    jQuery.fn = jQuery.prototype = {

    	// The current version of jQuery being used
    	jquery: version,

    	constructor: jQuery,

    	// The default length of a jQuery object is 0
    	length: 0,

    	toArray: function() {
    		return slice.call( this );
    	},

    	// Get the Nth element in the matched element set OR
    	// Get the whole matched element set as a clean array
    	get: function( num ) {

    		// Return all the elements in a clean array
    		if ( num == null ) {
    			return slice.call( this );
    		}

    		// Return just the one element from the set
    		return num < 0 ? this[ num + this.length ] : this[ num ];
    	},

    	// Take an array of elements and push it onto the stack
    	// (returning the new matched element set)
    	pushStack: function( elems ) {

    		// Build a new jQuery matched element set
    		var ret = jQuery.merge( this.constructor(), elems );

    		// Add the old object onto the stack (as a reference)
    		ret.prevObject = this;

    		// Return the newly-formed element set
    		return ret;
    	},

    	// Execute a callback for every element in the matched set.
    	each: function( callback ) {
    		return jQuery.each( this, callback );
    	},

    	map: function( callback ) {
    		return this.pushStack( jQuery.map( this, function( elem, i ) {
    			return callback.call( elem, i, elem );
    		} ) );
    	},

    	slice: function() {
    		return this.pushStack( slice.apply( this, arguments ) );
    	},

    	first: function() {
    		return this.eq( 0 );
    	},

    	last: function() {
    		return this.eq( -1 );
    	},

    	eq: function( i ) {
    		var len = this.length,
    			j = +i + ( i < 0 ? len : 0 );
    		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
    	},

    	end: function() {
    		return this.prevObject || this.constructor();
    	},

    	// For internal use only.
    	// Behaves like an Array's method, not like a jQuery method.
    	push: push,
    	sort: arr.sort,
    	splice: arr.splice
    };

    jQuery.extend = jQuery.fn.extend = function() {
    	var options, name, src, copy, copyIsArray, clone,
    		target = arguments[ 0 ] || {},
    		i = 1,
    		length = arguments.length,
    		deep = false;

    	// Handle a deep copy situation
    	if ( typeof target === "boolean" ) {
    		deep = target;

    		// Skip the boolean and the target
    		target = arguments[ i ] || {};
    		i++;
    	}

    	// Handle case when target is a string or something (possible in deep copy)
    	if ( typeof target !== "object" && !isFunction( target ) ) {
    		target = {};
    	}

    	// Extend jQuery itself if only one argument is passed
    	if ( i === length ) {
    		target = this;
    		i--;
    	}

    	for ( ; i < length; i++ ) {

    		// Only deal with non-null/undefined values
    		if ( ( options = arguments[ i ] ) != null ) {

    			// Extend the base object
    			for ( name in options ) {
    				src = target[ name ];
    				copy = options[ name ];

    				// Prevent never-ending loop
    				if ( target === copy ) {
    					continue;
    				}

    				// Recurse if we're merging plain objects or arrays
    				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
    					( copyIsArray = Array.isArray( copy ) ) ) ) {

    					if ( copyIsArray ) {
    						copyIsArray = false;
    						clone = src && Array.isArray( src ) ? src : [];

    					} else {
    						clone = src && jQuery.isPlainObject( src ) ? src : {};
    					}

    					// Never move original objects, clone them
    					target[ name ] = jQuery.extend( deep, clone, copy );

    				// Don't bring in undefined values
    				} else if ( copy !== undefined ) {
    					target[ name ] = copy;
    				}
    			}
    		}
    	}

    	// Return the modified object
    	return target;
    };

    jQuery.extend( {

    	// Unique for each copy of jQuery on the page
    	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

    	// Assume jQuery is ready without the ready module
    	isReady: true,

    	error: function( msg ) {
    		throw new Error( msg );
    	},

    	noop: function() {},

    	isPlainObject: function( obj ) {
    		var proto, Ctor;

    		// Detect obvious negatives
    		// Use toString instead of jQuery.type to catch host objects
    		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
    			return false;
    		}

    		proto = getProto( obj );

    		// Objects with no prototype (e.g., `Object.create( null )`) are plain
    		if ( !proto ) {
    			return true;
    		}

    		// Objects with prototype are plain iff they were constructed by a global Object function
    		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
    		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
    	},

    	isEmptyObject: function( obj ) {

    		/* eslint-disable no-unused-vars */
    		// See https://github.com/eslint/eslint/issues/6125
    		var name;

    		for ( name in obj ) {
    			return false;
    		}
    		return true;
    	},

    	// Evaluates a script in a global context
    	globalEval: function( code ) {
    		DOMEval( code );
    	},

    	each: function( obj, callback ) {
    		var length, i = 0;

    		if ( isArrayLike( obj ) ) {
    			length = obj.length;
    			for ( ; i < length; i++ ) {
    				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
    					break;
    				}
    			}
    		} else {
    			for ( i in obj ) {
    				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
    					break;
    				}
    			}
    		}

    		return obj;
    	},

    	// Support: Android <=4.0 only
    	trim: function( text ) {
    		return text == null ?
    			"" :
    			( text + "" ).replace( rtrim, "" );
    	},

    	// results is for internal usage only
    	makeArray: function( arr, results ) {
    		var ret = results || [];

    		if ( arr != null ) {
    			if ( isArrayLike( Object( arr ) ) ) {
    				jQuery.merge( ret,
    					typeof arr === "string" ?
    					[ arr ] : arr
    				);
    			} else {
    				push.call( ret, arr );
    			}
    		}

    		return ret;
    	},

    	inArray: function( elem, arr, i ) {
    		return arr == null ? -1 : indexOf.call( arr, elem, i );
    	},

    	// Support: Android <=4.0 only, PhantomJS 1 only
    	// push.apply(_, arraylike) throws on ancient WebKit
    	merge: function( first, second ) {
    		var len = +second.length,
    			j = 0,
    			i = first.length;

    		for ( ; j < len; j++ ) {
    			first[ i++ ] = second[ j ];
    		}

    		first.length = i;

    		return first;
    	},

    	grep: function( elems, callback, invert ) {
    		var callbackInverse,
    			matches = [],
    			i = 0,
    			length = elems.length,
    			callbackExpect = !invert;

    		// Go through the array, only saving the items
    		// that pass the validator function
    		for ( ; i < length; i++ ) {
    			callbackInverse = !callback( elems[ i ], i );
    			if ( callbackInverse !== callbackExpect ) {
    				matches.push( elems[ i ] );
    			}
    		}

    		return matches;
    	},

    	// arg is for internal usage only
    	map: function( elems, callback, arg ) {
    		var length, value,
    			i = 0,
    			ret = [];

    		// Go through the array, translating each of the items to their new values
    		if ( isArrayLike( elems ) ) {
    			length = elems.length;
    			for ( ; i < length; i++ ) {
    				value = callback( elems[ i ], i, arg );

    				if ( value != null ) {
    					ret.push( value );
    				}
    			}

    		// Go through every key on the object,
    		} else {
    			for ( i in elems ) {
    				value = callback( elems[ i ], i, arg );

    				if ( value != null ) {
    					ret.push( value );
    				}
    			}
    		}

    		// Flatten any nested arrays
    		return concat.apply( [], ret );
    	},

    	// A global GUID counter for objects
    	guid: 1,

    	// jQuery.support is not used in Core but other projects attach their
    	// properties to it so it needs to exist.
    	support: support
    } );

    if ( typeof Symbol === "function" ) {
    	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
    }

    // Populate the class2type map
    jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
    function( i, name ) {
    	class2type[ "[object " + name + "]" ] = name.toLowerCase();
    } );

    function isArrayLike( obj ) {

    	// Support: real iOS 8.2 only (not reproducible in simulator)
    	// `in` check used to prevent JIT error (gh-2145)
    	// hasOwn isn't used here due to false negatives
    	// regarding Nodelist length in IE
    	var length = !!obj && "length" in obj && obj.length,
    		type = toType( obj );

    	if ( isFunction( obj ) || isWindow( obj ) ) {
    		return false;
    	}

    	return type === "array" || length === 0 ||
    		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
    }
    var Sizzle =
    /*!
     * Sizzle CSS Selector Engine v2.3.3
     * https://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2016-08-08
     */
    (function( window ) {

    var i,
    	support,
    	Expr,
    	getText,
    	isXML,
    	tokenize,
    	compile,
    	select,
    	outermostContext,
    	sortInput,
    	hasDuplicate,

    	// Local document vars
    	setDocument,
    	document,
    	docElem,
    	documentIsHTML,
    	rbuggyQSA,
    	rbuggyMatches,
    	matches,
    	contains,

    	// Instance-specific data
    	expando = "sizzle" + 1 * new Date(),
    	preferredDoc = window.document,
    	dirruns = 0,
    	done = 0,
    	classCache = createCache(),
    	tokenCache = createCache(),
    	compilerCache = createCache(),
    	sortOrder = function( a, b ) {
    		if ( a === b ) {
    			hasDuplicate = true;
    		}
    		return 0;
    	},

    	// Instance methods
    	hasOwn = ({}).hasOwnProperty,
    	arr = [],
    	pop = arr.pop,
    	push_native = arr.push,
    	push = arr.push,
    	slice = arr.slice,
    	// Use a stripped-down indexOf as it's faster than native
    	// https://jsperf.com/thor-indexof-vs-for/5
    	indexOf = function( list, elem ) {
    		var i = 0,
    			len = list.length;
    		for ( ; i < len; i++ ) {
    			if ( list[i] === elem ) {
    				return i;
    			}
    		}
    		return -1;
    	},

    	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

    	// Regular expressions

    	// http://www.w3.org/TR/css3-selectors/#whitespace
    	whitespace = "[\\x20\\t\\r\\n\\f]",

    	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
    	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

    	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
    	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
    		// Operator (capture 2)
    		"*([*^$|!~]?=)" + whitespace +
    		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
    		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
    		"*\\]",

    	pseudos = ":(" + identifier + ")(?:\\((" +
    		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
    		// 1. quoted (capture 3; capture 4 or capture 5)
    		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
    		// 2. simple (capture 6)
    		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
    		// 3. anything else (capture 2)
    		".*" +
    		")\\)|)",

    	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
    	rwhitespace = new RegExp( whitespace + "+", "g" ),
    	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

    	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
    	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

    	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

    	rpseudo = new RegExp( pseudos ),
    	ridentifier = new RegExp( "^" + identifier + "$" ),

    	matchExpr = {
    		"ID": new RegExp( "^#(" + identifier + ")" ),
    		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
    		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
    		"ATTR": new RegExp( "^" + attributes ),
    		"PSEUDO": new RegExp( "^" + pseudos ),
    		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
    			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
    			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
    		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
    		// For use in libraries implementing .is()
    		// We use this for POS matching in `select`
    		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
    			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
    	},

    	rinputs = /^(?:input|select|textarea|button)$/i,
    	rheader = /^h\d$/i,

    	rnative = /^[^{]+\{\s*\[native \w/,

    	// Easily-parseable/retrievable ID or TAG or CLASS selectors
    	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

    	rsibling = /[+~]/,

    	// CSS escapes
    	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
    	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
    	funescape = function( _, escaped, escapedWhitespace ) {
    		var high = "0x" + escaped - 0x10000;
    		// NaN means non-codepoint
    		// Support: Firefox<24
    		// Workaround erroneous numeric interpretation of +"0x"
    		return high !== high || escapedWhitespace ?
    			escaped :
    			high < 0 ?
    				// BMP codepoint
    				String.fromCharCode( high + 0x10000 ) :
    				// Supplemental Plane codepoint (surrogate pair)
    				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
    	},

    	// CSS string/identifier serialization
    	// https://drafts.csswg.org/cssom/#common-serializing-idioms
    	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
    	fcssescape = function( ch, asCodePoint ) {
    		if ( asCodePoint ) {

    			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
    			if ( ch === "\0" ) {
    				return "\uFFFD";
    			}

    			// Control characters and (dependent upon position) numbers get escaped as code points
    			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
    		}

    		// Other potentially-special ASCII characters get backslash-escaped
    		return "\\" + ch;
    	},

    	// Used for iframes
    	// See setDocument()
    	// Removing the function wrapper causes a "Permission Denied"
    	// error in IE
    	unloadHandler = function() {
    		setDocument();
    	},

    	disabledAncestor = addCombinator(
    		function( elem ) {
    			return elem.disabled === true && ("form" in elem || "label" in elem);
    		},
    		{ dir: "parentNode", next: "legend" }
    	);

    // Optimize for push.apply( _, NodeList )
    try {
    	push.apply(
    		(arr = slice.call( preferredDoc.childNodes )),
    		preferredDoc.childNodes
    	);
    	// Support: Android<4.0
    	// Detect silently failing push.apply
    	arr[ preferredDoc.childNodes.length ].nodeType;
    } catch ( e ) {
    	push = { apply: arr.length ?

    		// Leverage slice if possible
    		function( target, els ) {
    			push_native.apply( target, slice.call(els) );
    		} :

    		// Support: IE<9
    		// Otherwise append directly
    		function( target, els ) {
    			var j = target.length,
    				i = 0;
    			// Can't trust NodeList.length
    			while ( (target[j++] = els[i++]) ) {}
    			target.length = j - 1;
    		}
    	};
    }

    function Sizzle( selector, context, results, seed ) {
    	var m, i, elem, nid, match, groups, newSelector,
    		newContext = context && context.ownerDocument,

    		// nodeType defaults to 9, since context defaults to document
    		nodeType = context ? context.nodeType : 9;

    	results = results || [];

    	// Return early from calls with invalid selector or context
    	if ( typeof selector !== "string" || !selector ||
    		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

    		return results;
    	}

    	// Try to shortcut find operations (as opposed to filters) in HTML documents
    	if ( !seed ) {

    		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
    			setDocument( context );
    		}
    		context = context || document;

    		if ( documentIsHTML ) {

    			// If the selector is sufficiently simple, try using a "get*By*" DOM method
    			// (excepting DocumentFragment context, where the methods don't exist)
    			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

    				// ID selector
    				if ( (m = match[1]) ) {

    					// Document context
    					if ( nodeType === 9 ) {
    						if ( (elem = context.getElementById( m )) ) {

    							// Support: IE, Opera, Webkit
    							// TODO: identify versions
    							// getElementById can match elements by name instead of ID
    							if ( elem.id === m ) {
    								results.push( elem );
    								return results;
    							}
    						} else {
    							return results;
    						}

    					// Element context
    					} else {

    						// Support: IE, Opera, Webkit
    						// TODO: identify versions
    						// getElementById can match elements by name instead of ID
    						if ( newContext && (elem = newContext.getElementById( m )) &&
    							contains( context, elem ) &&
    							elem.id === m ) {

    							results.push( elem );
    							return results;
    						}
    					}

    				// Type selector
    				} else if ( match[2] ) {
    					push.apply( results, context.getElementsByTagName( selector ) );
    					return results;

    				// Class selector
    				} else if ( (m = match[3]) && support.getElementsByClassName &&
    					context.getElementsByClassName ) {

    					push.apply( results, context.getElementsByClassName( m ) );
    					return results;
    				}
    			}

    			// Take advantage of querySelectorAll
    			if ( support.qsa &&
    				!compilerCache[ selector + " " ] &&
    				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

    				if ( nodeType !== 1 ) {
    					newContext = context;
    					newSelector = selector;

    				// qSA looks outside Element context, which is not what we want
    				// Thanks to Andrew Dupont for this workaround technique
    				// Support: IE <=8
    				// Exclude object elements
    				} else if ( context.nodeName.toLowerCase() !== "object" ) {

    					// Capture the context ID, setting it first if necessary
    					if ( (nid = context.getAttribute( "id" )) ) {
    						nid = nid.replace( rcssescape, fcssescape );
    					} else {
    						context.setAttribute( "id", (nid = expando) );
    					}

    					// Prefix every selector in the list
    					groups = tokenize( selector );
    					i = groups.length;
    					while ( i-- ) {
    						groups[i] = "#" + nid + " " + toSelector( groups[i] );
    					}
    					newSelector = groups.join( "," );

    					// Expand context for sibling selectors
    					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
    						context;
    				}

    				if ( newSelector ) {
    					try {
    						push.apply( results,
    							newContext.querySelectorAll( newSelector )
    						);
    						return results;
    					} catch ( qsaError ) {
    					} finally {
    						if ( nid === expando ) {
    							context.removeAttribute( "id" );
    						}
    					}
    				}
    			}
    		}
    	}

    	// All others
    	return select( selector.replace( rtrim, "$1" ), context, results, seed );
    }

    /**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */
    function createCache() {
    	var keys = [];

    	function cache( key, value ) {
    		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
    		if ( keys.push( key + " " ) > Expr.cacheLength ) {
    			// Only keep the most recent entries
    			delete cache[ keys.shift() ];
    		}
    		return (cache[ key + " " ] = value);
    	}
    	return cache;
    }

    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */
    function markFunction( fn ) {
    	fn[ expando ] = true;
    	return fn;
    }

    /**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */
    function assert( fn ) {
    	var el = document.createElement("fieldset");

    	try {
    		return !!fn( el );
    	} catch (e) {
    		return false;
    	} finally {
    		// Remove from its parent by default
    		if ( el.parentNode ) {
    			el.parentNode.removeChild( el );
    		}
    		// release memory in IE
    		el = null;
    	}
    }

    /**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */
    function addHandle( attrs, handler ) {
    	var arr = attrs.split("|"),
    		i = arr.length;

    	while ( i-- ) {
    		Expr.attrHandle[ arr[i] ] = handler;
    	}
    }

    /**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */
    function siblingCheck( a, b ) {
    	var cur = b && a,
    		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
    			a.sourceIndex - b.sourceIndex;

    	// Use IE sourceIndex if available on both nodes
    	if ( diff ) {
    		return diff;
    	}

    	// Check if b follows a
    	if ( cur ) {
    		while ( (cur = cur.nextSibling) ) {
    			if ( cur === b ) {
    				return -1;
    			}
    		}
    	}

    	return a ? 1 : -1;
    }

    /**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */
    function createInputPseudo( type ) {
    	return function( elem ) {
    		var name = elem.nodeName.toLowerCase();
    		return name === "input" && elem.type === type;
    	};
    }

    /**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */
    function createButtonPseudo( type ) {
    	return function( elem ) {
    		var name = elem.nodeName.toLowerCase();
    		return (name === "input" || name === "button") && elem.type === type;
    	};
    }

    /**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */
    function createDisabledPseudo( disabled ) {

    	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
    	return function( elem ) {

    		// Only certain elements can match :enabled or :disabled
    		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
    		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
    		if ( "form" in elem ) {

    			// Check for inherited disabledness on relevant non-disabled elements:
    			// * listed form-associated elements in a disabled fieldset
    			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
    			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
    			// * option elements in a disabled optgroup
    			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
    			// All such elements have a "form" property.
    			if ( elem.parentNode && elem.disabled === false ) {

    				// Option elements defer to a parent optgroup if present
    				if ( "label" in elem ) {
    					if ( "label" in elem.parentNode ) {
    						return elem.parentNode.disabled === disabled;
    					} else {
    						return elem.disabled === disabled;
    					}
    				}

    				// Support: IE 6 - 11
    				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
    				return elem.isDisabled === disabled ||

    					// Where there is no isDisabled, check manually
    					/* jshint -W018 */
    					elem.isDisabled !== !disabled &&
    						disabledAncestor( elem ) === disabled;
    			}

    			return elem.disabled === disabled;

    		// Try to winnow out elements that can't be disabled before trusting the disabled property.
    		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
    		// even exist on them, let alone have a boolean value.
    		} else if ( "label" in elem ) {
    			return elem.disabled === disabled;
    		}

    		// Remaining elements are neither :enabled nor :disabled
    		return false;
    	};
    }

    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */
    function createPositionalPseudo( fn ) {
    	return markFunction(function( argument ) {
    		argument = +argument;
    		return markFunction(function( seed, matches ) {
    			var j,
    				matchIndexes = fn( [], seed.length, argument ),
    				i = matchIndexes.length;

    			// Match elements found at the specified indexes
    			while ( i-- ) {
    				if ( seed[ (j = matchIndexes[i]) ] ) {
    					seed[j] = !(matches[j] = seed[j]);
    				}
    			}
    		});
    	});
    }

    /**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */
    function testContext( context ) {
    	return context && typeof context.getElementsByTagName !== "undefined" && context;
    }

    // Expose support vars for convenience
    support = Sizzle.support = {};

    /**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */
    isXML = Sizzle.isXML = function( elem ) {
    	// documentElement is verified for cases where it doesn't yet exist
    	// (such as loading iframes in IE - #4833)
    	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
    	return documentElement ? documentElement.nodeName !== "HTML" : false;
    };

    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */
    setDocument = Sizzle.setDocument = function( node ) {
    	var hasCompare, subWindow,
    		doc = node ? node.ownerDocument || node : preferredDoc;

    	// Return early if doc is invalid or already selected
    	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
    		return document;
    	}

    	// Update global variables
    	document = doc;
    	docElem = document.documentElement;
    	documentIsHTML = !isXML( document );

    	// Support: IE 9-11, Edge
    	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
    	if ( preferredDoc !== document &&
    		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

    		// Support: IE 11, Edge
    		if ( subWindow.addEventListener ) {
    			subWindow.addEventListener( "unload", unloadHandler, false );

    		// Support: IE 9 - 10 only
    		} else if ( subWindow.attachEvent ) {
    			subWindow.attachEvent( "onunload", unloadHandler );
    		}
    	}

    	/* Attributes
    	---------------------------------------------------------------------- */

    	// Support: IE<8
    	// Verify that getAttribute really returns attributes and not properties
    	// (excepting IE8 booleans)
    	support.attributes = assert(function( el ) {
    		el.className = "i";
    		return !el.getAttribute("className");
    	});

    	/* getElement(s)By*
    	---------------------------------------------------------------------- */

    	// Check if getElementsByTagName("*") returns only elements
    	support.getElementsByTagName = assert(function( el ) {
    		el.appendChild( document.createComment("") );
    		return !el.getElementsByTagName("*").length;
    	});

    	// Support: IE<9
    	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

    	// Support: IE<10
    	// Check if getElementById returns elements by name
    	// The broken getElementById methods don't pick up programmatically-set names,
    	// so use a roundabout getElementsByName test
    	support.getById = assert(function( el ) {
    		docElem.appendChild( el ).id = expando;
    		return !document.getElementsByName || !document.getElementsByName( expando ).length;
    	});

    	// ID filter and find
    	if ( support.getById ) {
    		Expr.filter["ID"] = function( id ) {
    			var attrId = id.replace( runescape, funescape );
    			return function( elem ) {
    				return elem.getAttribute("id") === attrId;
    			};
    		};
    		Expr.find["ID"] = function( id, context ) {
    			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
    				var elem = context.getElementById( id );
    				return elem ? [ elem ] : [];
    			}
    		};
    	} else {
    		Expr.filter["ID"] =  function( id ) {
    			var attrId = id.replace( runescape, funescape );
    			return function( elem ) {
    				var node = typeof elem.getAttributeNode !== "undefined" &&
    					elem.getAttributeNode("id");
    				return node && node.value === attrId;
    			};
    		};

    		// Support: IE 6 - 7 only
    		// getElementById is not reliable as a find shortcut
    		Expr.find["ID"] = function( id, context ) {
    			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
    				var node, i, elems,
    					elem = context.getElementById( id );

    				if ( elem ) {

    					// Verify the id attribute
    					node = elem.getAttributeNode("id");
    					if ( node && node.value === id ) {
    						return [ elem ];
    					}

    					// Fall back on getElementsByName
    					elems = context.getElementsByName( id );
    					i = 0;
    					while ( (elem = elems[i++]) ) {
    						node = elem.getAttributeNode("id");
    						if ( node && node.value === id ) {
    							return [ elem ];
    						}
    					}
    				}

    				return [];
    			}
    		};
    	}

    	// Tag
    	Expr.find["TAG"] = support.getElementsByTagName ?
    		function( tag, context ) {
    			if ( typeof context.getElementsByTagName !== "undefined" ) {
    				return context.getElementsByTagName( tag );

    			// DocumentFragment nodes don't have gEBTN
    			} else if ( support.qsa ) {
    				return context.querySelectorAll( tag );
    			}
    		} :

    		function( tag, context ) {
    			var elem,
    				tmp = [],
    				i = 0,
    				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
    				results = context.getElementsByTagName( tag );

    			// Filter out possible comments
    			if ( tag === "*" ) {
    				while ( (elem = results[i++]) ) {
    					if ( elem.nodeType === 1 ) {
    						tmp.push( elem );
    					}
    				}

    				return tmp;
    			}
    			return results;
    		};

    	// Class
    	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
    		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
    			return context.getElementsByClassName( className );
    		}
    	};

    	/* QSA/matchesSelector
    	---------------------------------------------------------------------- */

    	// QSA and matchesSelector support

    	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
    	rbuggyMatches = [];

    	// qSa(:focus) reports false when true (Chrome 21)
    	// We allow this because of a bug in IE8/9 that throws an error
    	// whenever `document.activeElement` is accessed on an iframe
    	// So, we allow :focus to pass through QSA all the time to avoid the IE error
    	// See https://bugs.jquery.com/ticket/13378
    	rbuggyQSA = [];

    	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
    		// Build QSA regex
    		// Regex strategy adopted from Diego Perini
    		assert(function( el ) {
    			// Select is set to empty string on purpose
    			// This is to test IE's treatment of not explicitly
    			// setting a boolean content attribute,
    			// since its presence should be enough
    			// https://bugs.jquery.com/ticket/12359
    			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
    				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
    				"<option selected=''></option></select>";

    			// Support: IE8, Opera 11-12.16
    			// Nothing should be selected when empty strings follow ^= or $= or *=
    			// The test attribute must be unknown in Opera but "safe" for WinRT
    			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
    			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
    				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
    			}

    			// Support: IE8
    			// Boolean attributes and "value" are not treated correctly
    			if ( !el.querySelectorAll("[selected]").length ) {
    				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
    			}

    			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
    			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
    				rbuggyQSA.push("~=");
    			}

    			// Webkit/Opera - :checked should return selected option elements
    			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
    			// IE8 throws error here and will not see later tests
    			if ( !el.querySelectorAll(":checked").length ) {
    				rbuggyQSA.push(":checked");
    			}

    			// Support: Safari 8+, iOS 8+
    			// https://bugs.webkit.org/show_bug.cgi?id=136851
    			// In-page `selector#id sibling-combinator selector` fails
    			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
    				rbuggyQSA.push(".#.+[+~]");
    			}
    		});

    		assert(function( el ) {
    			el.innerHTML = "<a href='' disabled='disabled'></a>" +
    				"<select disabled='disabled'><option/></select>";

    			// Support: Windows 8 Native Apps
    			// The type and name attributes are restricted during .innerHTML assignment
    			var input = document.createElement("input");
    			input.setAttribute( "type", "hidden" );
    			el.appendChild( input ).setAttribute( "name", "D" );

    			// Support: IE8
    			// Enforce case-sensitivity of name attribute
    			if ( el.querySelectorAll("[name=d]").length ) {
    				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
    			}

    			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
    			// IE8 throws error here and will not see later tests
    			if ( el.querySelectorAll(":enabled").length !== 2 ) {
    				rbuggyQSA.push( ":enabled", ":disabled" );
    			}

    			// Support: IE9-11+
    			// IE's :disabled selector does not pick up the children of disabled fieldsets
    			docElem.appendChild( el ).disabled = true;
    			if ( el.querySelectorAll(":disabled").length !== 2 ) {
    				rbuggyQSA.push( ":enabled", ":disabled" );
    			}

    			// Opera 10-11 does not throw on post-comma invalid pseudos
    			el.querySelectorAll("*,:x");
    			rbuggyQSA.push(",.*:");
    		});
    	}

    	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
    		docElem.webkitMatchesSelector ||
    		docElem.mozMatchesSelector ||
    		docElem.oMatchesSelector ||
    		docElem.msMatchesSelector) )) ) {

    		assert(function( el ) {
    			// Check to see if it's possible to do matchesSelector
    			// on a disconnected node (IE 9)
    			support.disconnectedMatch = matches.call( el, "*" );

    			// This should fail with an exception
    			// Gecko does not error, returns false instead
    			matches.call( el, "[s!='']:x" );
    			rbuggyMatches.push( "!=", pseudos );
    		});
    	}

    	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
    	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

    	/* Contains
    	---------------------------------------------------------------------- */
    	hasCompare = rnative.test( docElem.compareDocumentPosition );

    	// Element contains another
    	// Purposefully self-exclusive
    	// As in, an element does not contain itself
    	contains = hasCompare || rnative.test( docElem.contains ) ?
    		function( a, b ) {
    			var adown = a.nodeType === 9 ? a.documentElement : a,
    				bup = b && b.parentNode;
    			return a === bup || !!( bup && bup.nodeType === 1 && (
    				adown.contains ?
    					adown.contains( bup ) :
    					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
    			));
    		} :
    		function( a, b ) {
    			if ( b ) {
    				while ( (b = b.parentNode) ) {
    					if ( b === a ) {
    						return true;
    					}
    				}
    			}
    			return false;
    		};

    	/* Sorting
    	---------------------------------------------------------------------- */

    	// Document order sorting
    	sortOrder = hasCompare ?
    	function( a, b ) {

    		// Flag for duplicate removal
    		if ( a === b ) {
    			hasDuplicate = true;
    			return 0;
    		}

    		// Sort on method existence if only one input has compareDocumentPosition
    		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
    		if ( compare ) {
    			return compare;
    		}

    		// Calculate position if both inputs belong to the same document
    		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
    			a.compareDocumentPosition( b ) :

    			// Otherwise we know they are disconnected
    			1;

    		// Disconnected nodes
    		if ( compare & 1 ||
    			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

    			// Choose the first element that is related to our preferred document
    			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
    				return -1;
    			}
    			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
    				return 1;
    			}

    			// Maintain original order
    			return sortInput ?
    				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
    				0;
    		}

    		return compare & 4 ? -1 : 1;
    	} :
    	function( a, b ) {
    		// Exit early if the nodes are identical
    		if ( a === b ) {
    			hasDuplicate = true;
    			return 0;
    		}

    		var cur,
    			i = 0,
    			aup = a.parentNode,
    			bup = b.parentNode,
    			ap = [ a ],
    			bp = [ b ];

    		// Parentless nodes are either documents or disconnected
    		if ( !aup || !bup ) {
    			return a === document ? -1 :
    				b === document ? 1 :
    				aup ? -1 :
    				bup ? 1 :
    				sortInput ?
    				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
    				0;

    		// If the nodes are siblings, we can do a quick check
    		} else if ( aup === bup ) {
    			return siblingCheck( a, b );
    		}

    		// Otherwise we need full lists of their ancestors for comparison
    		cur = a;
    		while ( (cur = cur.parentNode) ) {
    			ap.unshift( cur );
    		}
    		cur = b;
    		while ( (cur = cur.parentNode) ) {
    			bp.unshift( cur );
    		}

    		// Walk down the tree looking for a discrepancy
    		while ( ap[i] === bp[i] ) {
    			i++;
    		}

    		return i ?
    			// Do a sibling check if the nodes have a common ancestor
    			siblingCheck( ap[i], bp[i] ) :

    			// Otherwise nodes in our document sort first
    			ap[i] === preferredDoc ? -1 :
    			bp[i] === preferredDoc ? 1 :
    			0;
    	};

    	return document;
    };

    Sizzle.matches = function( expr, elements ) {
    	return Sizzle( expr, null, null, elements );
    };

    Sizzle.matchesSelector = function( elem, expr ) {
    	// Set document vars if needed
    	if ( ( elem.ownerDocument || elem ) !== document ) {
    		setDocument( elem );
    	}

    	// Make sure that attribute selectors are quoted
    	expr = expr.replace( rattributeQuotes, "='$1']" );

    	if ( support.matchesSelector && documentIsHTML &&
    		!compilerCache[ expr + " " ] &&
    		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
    		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

    		try {
    			var ret = matches.call( elem, expr );

    			// IE 9's matchesSelector returns false on disconnected nodes
    			if ( ret || support.disconnectedMatch ||
    					// As well, disconnected nodes are said to be in a document
    					// fragment in IE 9
    					elem.document && elem.document.nodeType !== 11 ) {
    				return ret;
    			}
    		} catch (e) {}
    	}

    	return Sizzle( expr, document, null, [ elem ] ).length > 0;
    };

    Sizzle.contains = function( context, elem ) {
    	// Set document vars if needed
    	if ( ( context.ownerDocument || context ) !== document ) {
    		setDocument( context );
    	}
    	return contains( context, elem );
    };

    Sizzle.attr = function( elem, name ) {
    	// Set document vars if needed
    	if ( ( elem.ownerDocument || elem ) !== document ) {
    		setDocument( elem );
    	}

    	var fn = Expr.attrHandle[ name.toLowerCase() ],
    		// Don't get fooled by Object.prototype properties (jQuery #13807)
    		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
    			fn( elem, name, !documentIsHTML ) :
    			undefined;

    	return val !== undefined ?
    		val :
    		support.attributes || !documentIsHTML ?
    			elem.getAttribute( name ) :
    			(val = elem.getAttributeNode(name)) && val.specified ?
    				val.value :
    				null;
    };

    Sizzle.escape = function( sel ) {
    	return (sel + "").replace( rcssescape, fcssescape );
    };

    Sizzle.error = function( msg ) {
    	throw new Error( "Syntax error, unrecognized expression: " + msg );
    };

    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */
    Sizzle.uniqueSort = function( results ) {
    	var elem,
    		duplicates = [],
    		j = 0,
    		i = 0;

    	// Unless we *know* we can detect duplicates, assume their presence
    	hasDuplicate = !support.detectDuplicates;
    	sortInput = !support.sortStable && results.slice( 0 );
    	results.sort( sortOrder );

    	if ( hasDuplicate ) {
    		while ( (elem = results[i++]) ) {
    			if ( elem === results[ i ] ) {
    				j = duplicates.push( i );
    			}
    		}
    		while ( j-- ) {
    			results.splice( duplicates[ j ], 1 );
    		}
    	}

    	// Clear input after sorting to release objects
    	// See https://github.com/jquery/sizzle/pull/225
    	sortInput = null;

    	return results;
    };

    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */
    getText = Sizzle.getText = function( elem ) {
    	var node,
    		ret = "",
    		i = 0,
    		nodeType = elem.nodeType;

    	if ( !nodeType ) {
    		// If no nodeType, this is expected to be an array
    		while ( (node = elem[i++]) ) {
    			// Do not traverse comment nodes
    			ret += getText( node );
    		}
    	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
    		// Use textContent for elements
    		// innerText usage removed for consistency of new lines (jQuery #11153)
    		if ( typeof elem.textContent === "string" ) {
    			return elem.textContent;
    		} else {
    			// Traverse its children
    			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
    				ret += getText( elem );
    			}
    		}
    	} else if ( nodeType === 3 || nodeType === 4 ) {
    		return elem.nodeValue;
    	}
    	// Do not include comment or processing instruction nodes

    	return ret;
    };

    Expr = Sizzle.selectors = {

    	// Can be adjusted by the user
    	cacheLength: 50,

    	createPseudo: markFunction,

    	match: matchExpr,

    	attrHandle: {},

    	find: {},

    	relative: {
    		">": { dir: "parentNode", first: true },
    		" ": { dir: "parentNode" },
    		"+": { dir: "previousSibling", first: true },
    		"~": { dir: "previousSibling" }
    	},

    	preFilter: {
    		"ATTR": function( match ) {
    			match[1] = match[1].replace( runescape, funescape );

    			// Move the given value to match[3] whether quoted or unquoted
    			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

    			if ( match[2] === "~=" ) {
    				match[3] = " " + match[3] + " ";
    			}

    			return match.slice( 0, 4 );
    		},

    		"CHILD": function( match ) {
    			/* matches from matchExpr["CHILD"]
    				1 type (only|nth|...)
    				2 what (child|of-type)
    				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
    				4 xn-component of xn+y argument ([+-]?\d*n|)
    				5 sign of xn-component
    				6 x of xn-component
    				7 sign of y-component
    				8 y of y-component
    			*/
    			match[1] = match[1].toLowerCase();

    			if ( match[1].slice( 0, 3 ) === "nth" ) {
    				// nth-* requires argument
    				if ( !match[3] ) {
    					Sizzle.error( match[0] );
    				}

    				// numeric x and y parameters for Expr.filter.CHILD
    				// remember that false/true cast respectively to 0/1
    				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
    				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

    			// other types prohibit arguments
    			} else if ( match[3] ) {
    				Sizzle.error( match[0] );
    			}

    			return match;
    		},

    		"PSEUDO": function( match ) {
    			var excess,
    				unquoted = !match[6] && match[2];

    			if ( matchExpr["CHILD"].test( match[0] ) ) {
    				return null;
    			}

    			// Accept quoted arguments as-is
    			if ( match[3] ) {
    				match[2] = match[4] || match[5] || "";

    			// Strip excess characters from unquoted arguments
    			} else if ( unquoted && rpseudo.test( unquoted ) &&
    				// Get excess from tokenize (recursively)
    				(excess = tokenize( unquoted, true )) &&
    				// advance to the next closing parenthesis
    				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

    				// excess is a negative index
    				match[0] = match[0].slice( 0, excess );
    				match[2] = unquoted.slice( 0, excess );
    			}

    			// Return only captures needed by the pseudo filter method (type and argument)
    			return match.slice( 0, 3 );
    		}
    	},

    	filter: {

    		"TAG": function( nodeNameSelector ) {
    			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
    			return nodeNameSelector === "*" ?
    				function() { return true; } :
    				function( elem ) {
    					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
    				};
    		},

    		"CLASS": function( className ) {
    			var pattern = classCache[ className + " " ];

    			return pattern ||
    				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
    				classCache( className, function( elem ) {
    					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
    				});
    		},

    		"ATTR": function( name, operator, check ) {
    			return function( elem ) {
    				var result = Sizzle.attr( elem, name );

    				if ( result == null ) {
    					return operator === "!=";
    				}
    				if ( !operator ) {
    					return true;
    				}

    				result += "";

    				return operator === "=" ? result === check :
    					operator === "!=" ? result !== check :
    					operator === "^=" ? check && result.indexOf( check ) === 0 :
    					operator === "*=" ? check && result.indexOf( check ) > -1 :
    					operator === "$=" ? check && result.slice( -check.length ) === check :
    					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
    					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
    					false;
    			};
    		},

    		"CHILD": function( type, what, argument, first, last ) {
    			var simple = type.slice( 0, 3 ) !== "nth",
    				forward = type.slice( -4 ) !== "last",
    				ofType = what === "of-type";

    			return first === 1 && last === 0 ?

    				// Shortcut for :nth-*(n)
    				function( elem ) {
    					return !!elem.parentNode;
    				} :

    				function( elem, context, xml ) {
    					var cache, uniqueCache, outerCache, node, nodeIndex, start,
    						dir = simple !== forward ? "nextSibling" : "previousSibling",
    						parent = elem.parentNode,
    						name = ofType && elem.nodeName.toLowerCase(),
    						useCache = !xml && !ofType,
    						diff = false;

    					if ( parent ) {

    						// :(first|last|only)-(child|of-type)
    						if ( simple ) {
    							while ( dir ) {
    								node = elem;
    								while ( (node = node[ dir ]) ) {
    									if ( ofType ?
    										node.nodeName.toLowerCase() === name :
    										node.nodeType === 1 ) {

    										return false;
    									}
    								}
    								// Reverse direction for :only-* (if we haven't yet done so)
    								start = dir = type === "only" && !start && "nextSibling";
    							}
    							return true;
    						}

    						start = [ forward ? parent.firstChild : parent.lastChild ];

    						// non-xml :nth-child(...) stores cache data on `parent`
    						if ( forward && useCache ) {

    							// Seek `elem` from a previously-cached index

    							// ...in a gzip-friendly way
    							node = parent;
    							outerCache = node[ expando ] || (node[ expando ] = {});

    							// Support: IE <9 only
    							// Defend against cloned attroperties (jQuery gh-1709)
    							uniqueCache = outerCache[ node.uniqueID ] ||
    								(outerCache[ node.uniqueID ] = {});

    							cache = uniqueCache[ type ] || [];
    							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
    							diff = nodeIndex && cache[ 2 ];
    							node = nodeIndex && parent.childNodes[ nodeIndex ];

    							while ( (node = ++nodeIndex && node && node[ dir ] ||

    								// Fallback to seeking `elem` from the start
    								(diff = nodeIndex = 0) || start.pop()) ) {

    								// When found, cache indexes on `parent` and break
    								if ( node.nodeType === 1 && ++diff && node === elem ) {
    									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
    									break;
    								}
    							}

    						} else {
    							// Use previously-cached element index if available
    							if ( useCache ) {
    								// ...in a gzip-friendly way
    								node = elem;
    								outerCache = node[ expando ] || (node[ expando ] = {});

    								// Support: IE <9 only
    								// Defend against cloned attroperties (jQuery gh-1709)
    								uniqueCache = outerCache[ node.uniqueID ] ||
    									(outerCache[ node.uniqueID ] = {});

    								cache = uniqueCache[ type ] || [];
    								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
    								diff = nodeIndex;
    							}

    							// xml :nth-child(...)
    							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
    							if ( diff === false ) {
    								// Use the same loop as above to seek `elem` from the start
    								while ( (node = ++nodeIndex && node && node[ dir ] ||
    									(diff = nodeIndex = 0) || start.pop()) ) {

    									if ( ( ofType ?
    										node.nodeName.toLowerCase() === name :
    										node.nodeType === 1 ) &&
    										++diff ) {

    										// Cache the index of each encountered element
    										if ( useCache ) {
    											outerCache = node[ expando ] || (node[ expando ] = {});

    											// Support: IE <9 only
    											// Defend against cloned attroperties (jQuery gh-1709)
    											uniqueCache = outerCache[ node.uniqueID ] ||
    												(outerCache[ node.uniqueID ] = {});

    											uniqueCache[ type ] = [ dirruns, diff ];
    										}

    										if ( node === elem ) {
    											break;
    										}
    									}
    								}
    							}
    						}

    						// Incorporate the offset, then check against cycle size
    						diff -= last;
    						return diff === first || ( diff % first === 0 && diff / first >= 0 );
    					}
    				};
    		},

    		"PSEUDO": function( pseudo, argument ) {
    			// pseudo-class names are case-insensitive
    			// http://www.w3.org/TR/selectors/#pseudo-classes
    			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
    			// Remember that setFilters inherits from pseudos
    			var args,
    				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
    					Sizzle.error( "unsupported pseudo: " + pseudo );

    			// The user may use createPseudo to indicate that
    			// arguments are needed to create the filter function
    			// just as Sizzle does
    			if ( fn[ expando ] ) {
    				return fn( argument );
    			}

    			// But maintain support for old signatures
    			if ( fn.length > 1 ) {
    				args = [ pseudo, pseudo, "", argument ];
    				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
    					markFunction(function( seed, matches ) {
    						var idx,
    							matched = fn( seed, argument ),
    							i = matched.length;
    						while ( i-- ) {
    							idx = indexOf( seed, matched[i] );
    							seed[ idx ] = !( matches[ idx ] = matched[i] );
    						}
    					}) :
    					function( elem ) {
    						return fn( elem, 0, args );
    					};
    			}

    			return fn;
    		}
    	},

    	pseudos: {
    		// Potentially complex pseudos
    		"not": markFunction(function( selector ) {
    			// Trim the selector passed to compile
    			// to avoid treating leading and trailing
    			// spaces as combinators
    			var input = [],
    				results = [],
    				matcher = compile( selector.replace( rtrim, "$1" ) );

    			return matcher[ expando ] ?
    				markFunction(function( seed, matches, context, xml ) {
    					var elem,
    						unmatched = matcher( seed, null, xml, [] ),
    						i = seed.length;

    					// Match elements unmatched by `matcher`
    					while ( i-- ) {
    						if ( (elem = unmatched[i]) ) {
    							seed[i] = !(matches[i] = elem);
    						}
    					}
    				}) :
    				function( elem, context, xml ) {
    					input[0] = elem;
    					matcher( input, null, xml, results );
    					// Don't keep the element (issue #299)
    					input[0] = null;
    					return !results.pop();
    				};
    		}),

    		"has": markFunction(function( selector ) {
    			return function( elem ) {
    				return Sizzle( selector, elem ).length > 0;
    			};
    		}),

    		"contains": markFunction(function( text ) {
    			text = text.replace( runescape, funescape );
    			return function( elem ) {
    				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
    			};
    		}),

    		// "Whether an element is represented by a :lang() selector
    		// is based solely on the element's language value
    		// being equal to the identifier C,
    		// or beginning with the identifier C immediately followed by "-".
    		// The matching of C against the element's language value is performed case-insensitively.
    		// The identifier C does not have to be a valid language name."
    		// http://www.w3.org/TR/selectors/#lang-pseudo
    		"lang": markFunction( function( lang ) {
    			// lang value must be a valid identifier
    			if ( !ridentifier.test(lang || "") ) {
    				Sizzle.error( "unsupported lang: " + lang );
    			}
    			lang = lang.replace( runescape, funescape ).toLowerCase();
    			return function( elem ) {
    				var elemLang;
    				do {
    					if ( (elemLang = documentIsHTML ?
    						elem.lang :
    						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

    						elemLang = elemLang.toLowerCase();
    						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
    					}
    				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
    				return false;
    			};
    		}),

    		// Miscellaneous
    		"target": function( elem ) {
    			var hash = window.location && window.location.hash;
    			return hash && hash.slice( 1 ) === elem.id;
    		},

    		"root": function( elem ) {
    			return elem === docElem;
    		},

    		"focus": function( elem ) {
    			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
    		},

    		// Boolean properties
    		"enabled": createDisabledPseudo( false ),
    		"disabled": createDisabledPseudo( true ),

    		"checked": function( elem ) {
    			// In CSS3, :checked should return both checked and selected elements
    			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
    			var nodeName = elem.nodeName.toLowerCase();
    			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
    		},

    		"selected": function( elem ) {
    			// Accessing this property makes selected-by-default
    			// options in Safari work properly
    			if ( elem.parentNode ) {
    				elem.parentNode.selectedIndex;
    			}

    			return elem.selected === true;
    		},

    		// Contents
    		"empty": function( elem ) {
    			// http://www.w3.org/TR/selectors/#empty-pseudo
    			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
    			//   but not by others (comment: 8; processing instruction: 7; etc.)
    			// nodeType < 6 works because attributes (2) do not appear as children
    			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
    				if ( elem.nodeType < 6 ) {
    					return false;
    				}
    			}
    			return true;
    		},

    		"parent": function( elem ) {
    			return !Expr.pseudos["empty"]( elem );
    		},

    		// Element/input types
    		"header": function( elem ) {
    			return rheader.test( elem.nodeName );
    		},

    		"input": function( elem ) {
    			return rinputs.test( elem.nodeName );
    		},

    		"button": function( elem ) {
    			var name = elem.nodeName.toLowerCase();
    			return name === "input" && elem.type === "button" || name === "button";
    		},

    		"text": function( elem ) {
    			var attr;
    			return elem.nodeName.toLowerCase() === "input" &&
    				elem.type === "text" &&

    				// Support: IE<8
    				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
    				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
    		},

    		// Position-in-collection
    		"first": createPositionalPseudo(function() {
    			return [ 0 ];
    		}),

    		"last": createPositionalPseudo(function( matchIndexes, length ) {
    			return [ length - 1 ];
    		}),

    		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
    			return [ argument < 0 ? argument + length : argument ];
    		}),

    		"even": createPositionalPseudo(function( matchIndexes, length ) {
    			var i = 0;
    			for ( ; i < length; i += 2 ) {
    				matchIndexes.push( i );
    			}
    			return matchIndexes;
    		}),

    		"odd": createPositionalPseudo(function( matchIndexes, length ) {
    			var i = 1;
    			for ( ; i < length; i += 2 ) {
    				matchIndexes.push( i );
    			}
    			return matchIndexes;
    		}),

    		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
    			var i = argument < 0 ? argument + length : argument;
    			for ( ; --i >= 0; ) {
    				matchIndexes.push( i );
    			}
    			return matchIndexes;
    		}),

    		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
    			var i = argument < 0 ? argument + length : argument;
    			for ( ; ++i < length; ) {
    				matchIndexes.push( i );
    			}
    			return matchIndexes;
    		})
    	}
    };

    Expr.pseudos["nth"] = Expr.pseudos["eq"];

    // Add button/input type pseudos
    for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
    	Expr.pseudos[ i ] = createInputPseudo( i );
    }
    for ( i in { submit: true, reset: true } ) {
    	Expr.pseudos[ i ] = createButtonPseudo( i );
    }

    // Easy API for creating new setFilters
    function setFilters() {}
    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();

    tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
    	var matched, match, tokens, type,
    		soFar, groups, preFilters,
    		cached = tokenCache[ selector + " " ];

    	if ( cached ) {
    		return parseOnly ? 0 : cached.slice( 0 );
    	}

    	soFar = selector;
    	groups = [];
    	preFilters = Expr.preFilter;

    	while ( soFar ) {

    		// Comma and first run
    		if ( !matched || (match = rcomma.exec( soFar )) ) {
    			if ( match ) {
    				// Don't consume trailing commas as valid
    				soFar = soFar.slice( match[0].length ) || soFar;
    			}
    			groups.push( (tokens = []) );
    		}

    		matched = false;

    		// Combinators
    		if ( (match = rcombinators.exec( soFar )) ) {
    			matched = match.shift();
    			tokens.push({
    				value: matched,
    				// Cast descendant combinators to space
    				type: match[0].replace( rtrim, " " )
    			});
    			soFar = soFar.slice( matched.length );
    		}

    		// Filters
    		for ( type in Expr.filter ) {
    			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
    				(match = preFilters[ type ]( match ))) ) {
    				matched = match.shift();
    				tokens.push({
    					value: matched,
    					type: type,
    					matches: match
    				});
    				soFar = soFar.slice( matched.length );
    			}
    		}

    		if ( !matched ) {
    			break;
    		}
    	}

    	// Return the length of the invalid excess
    	// if we're just parsing
    	// Otherwise, throw an error or return tokens
    	return parseOnly ?
    		soFar.length :
    		soFar ?
    			Sizzle.error( selector ) :
    			// Cache the tokens
    			tokenCache( selector, groups ).slice( 0 );
    };

    function toSelector( tokens ) {
    	var i = 0,
    		len = tokens.length,
    		selector = "";
    	for ( ; i < len; i++ ) {
    		selector += tokens[i].value;
    	}
    	return selector;
    }

    function addCombinator( matcher, combinator, base ) {
    	var dir = combinator.dir,
    		skip = combinator.next,
    		key = skip || dir,
    		checkNonElements = base && key === "parentNode",
    		doneName = done++;

    	return combinator.first ?
    		// Check against closest ancestor/preceding element
    		function( elem, context, xml ) {
    			while ( (elem = elem[ dir ]) ) {
    				if ( elem.nodeType === 1 || checkNonElements ) {
    					return matcher( elem, context, xml );
    				}
    			}
    			return false;
    		} :

    		// Check against all ancestor/preceding elements
    		function( elem, context, xml ) {
    			var oldCache, uniqueCache, outerCache,
    				newCache = [ dirruns, doneName ];

    			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
    			if ( xml ) {
    				while ( (elem = elem[ dir ]) ) {
    					if ( elem.nodeType === 1 || checkNonElements ) {
    						if ( matcher( elem, context, xml ) ) {
    							return true;
    						}
    					}
    				}
    			} else {
    				while ( (elem = elem[ dir ]) ) {
    					if ( elem.nodeType === 1 || checkNonElements ) {
    						outerCache = elem[ expando ] || (elem[ expando ] = {});

    						// Support: IE <9 only
    						// Defend against cloned attroperties (jQuery gh-1709)
    						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

    						if ( skip && skip === elem.nodeName.toLowerCase() ) {
    							elem = elem[ dir ] || elem;
    						} else if ( (oldCache = uniqueCache[ key ]) &&
    							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

    							// Assign to newCache so results back-propagate to previous elements
    							return (newCache[ 2 ] = oldCache[ 2 ]);
    						} else {
    							// Reuse newcache so results back-propagate to previous elements
    							uniqueCache[ key ] = newCache;

    							// A match means we're done; a fail means we have to keep checking
    							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
    								return true;
    							}
    						}
    					}
    				}
    			}
    			return false;
    		};
    }

    function elementMatcher( matchers ) {
    	return matchers.length > 1 ?
    		function( elem, context, xml ) {
    			var i = matchers.length;
    			while ( i-- ) {
    				if ( !matchers[i]( elem, context, xml ) ) {
    					return false;
    				}
    			}
    			return true;
    		} :
    		matchers[0];
    }

    function multipleContexts( selector, contexts, results ) {
    	var i = 0,
    		len = contexts.length;
    	for ( ; i < len; i++ ) {
    		Sizzle( selector, contexts[i], results );
    	}
    	return results;
    }

    function condense( unmatched, map, filter, context, xml ) {
    	var elem,
    		newUnmatched = [],
    		i = 0,
    		len = unmatched.length,
    		mapped = map != null;

    	for ( ; i < len; i++ ) {
    		if ( (elem = unmatched[i]) ) {
    			if ( !filter || filter( elem, context, xml ) ) {
    				newUnmatched.push( elem );
    				if ( mapped ) {
    					map.push( i );
    				}
    			}
    		}
    	}

    	return newUnmatched;
    }

    function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
    	if ( postFilter && !postFilter[ expando ] ) {
    		postFilter = setMatcher( postFilter );
    	}
    	if ( postFinder && !postFinder[ expando ] ) {
    		postFinder = setMatcher( postFinder, postSelector );
    	}
    	return markFunction(function( seed, results, context, xml ) {
    		var temp, i, elem,
    			preMap = [],
    			postMap = [],
    			preexisting = results.length,

    			// Get initial elements from seed or context
    			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

    			// Prefilter to get matcher input, preserving a map for seed-results synchronization
    			matcherIn = preFilter && ( seed || !selector ) ?
    				condense( elems, preMap, preFilter, context, xml ) :
    				elems,

    			matcherOut = matcher ?
    				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
    				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

    					// ...intermediate processing is necessary
    					[] :

    					// ...otherwise use results directly
    					results :
    				matcherIn;

    		// Find primary matches
    		if ( matcher ) {
    			matcher( matcherIn, matcherOut, context, xml );
    		}

    		// Apply postFilter
    		if ( postFilter ) {
    			temp = condense( matcherOut, postMap );
    			postFilter( temp, [], context, xml );

    			// Un-match failing elements by moving them back to matcherIn
    			i = temp.length;
    			while ( i-- ) {
    				if ( (elem = temp[i]) ) {
    					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
    				}
    			}
    		}

    		if ( seed ) {
    			if ( postFinder || preFilter ) {
    				if ( postFinder ) {
    					// Get the final matcherOut by condensing this intermediate into postFinder contexts
    					temp = [];
    					i = matcherOut.length;
    					while ( i-- ) {
    						if ( (elem = matcherOut[i]) ) {
    							// Restore matcherIn since elem is not yet a final match
    							temp.push( (matcherIn[i] = elem) );
    						}
    					}
    					postFinder( null, (matcherOut = []), temp, xml );
    				}

    				// Move matched elements from seed to results to keep them synchronized
    				i = matcherOut.length;
    				while ( i-- ) {
    					if ( (elem = matcherOut[i]) &&
    						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

    						seed[temp] = !(results[temp] = elem);
    					}
    				}
    			}

    		// Add elements to results, through postFinder if defined
    		} else {
    			matcherOut = condense(
    				matcherOut === results ?
    					matcherOut.splice( preexisting, matcherOut.length ) :
    					matcherOut
    			);
    			if ( postFinder ) {
    				postFinder( null, results, matcherOut, xml );
    			} else {
    				push.apply( results, matcherOut );
    			}
    		}
    	});
    }

    function matcherFromTokens( tokens ) {
    	var checkContext, matcher, j,
    		len = tokens.length,
    		leadingRelative = Expr.relative[ tokens[0].type ],
    		implicitRelative = leadingRelative || Expr.relative[" "],
    		i = leadingRelative ? 1 : 0,

    		// The foundational matcher ensures that elements are reachable from top-level context(s)
    		matchContext = addCombinator( function( elem ) {
    			return elem === checkContext;
    		}, implicitRelative, true ),
    		matchAnyContext = addCombinator( function( elem ) {
    			return indexOf( checkContext, elem ) > -1;
    		}, implicitRelative, true ),
    		matchers = [ function( elem, context, xml ) {
    			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
    				(checkContext = context).nodeType ?
    					matchContext( elem, context, xml ) :
    					matchAnyContext( elem, context, xml ) );
    			// Avoid hanging onto element (issue #299)
    			checkContext = null;
    			return ret;
    		} ];

    	for ( ; i < len; i++ ) {
    		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
    			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
    		} else {
    			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

    			// Return special upon seeing a positional matcher
    			if ( matcher[ expando ] ) {
    				// Find the next relative operator (if any) for proper handling
    				j = ++i;
    				for ( ; j < len; j++ ) {
    					if ( Expr.relative[ tokens[j].type ] ) {
    						break;
    					}
    				}
    				return setMatcher(
    					i > 1 && elementMatcher( matchers ),
    					i > 1 && toSelector(
    						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
    						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
    					).replace( rtrim, "$1" ),
    					matcher,
    					i < j && matcherFromTokens( tokens.slice( i, j ) ),
    					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
    					j < len && toSelector( tokens )
    				);
    			}
    			matchers.push( matcher );
    		}
    	}

    	return elementMatcher( matchers );
    }

    function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
    	var bySet = setMatchers.length > 0,
    		byElement = elementMatchers.length > 0,
    		superMatcher = function( seed, context, xml, results, outermost ) {
    			var elem, j, matcher,
    				matchedCount = 0,
    				i = "0",
    				unmatched = seed && [],
    				setMatched = [],
    				contextBackup = outermostContext,
    				// We must always have either seed elements or outermost context
    				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
    				// Use integer dirruns iff this is the outermost matcher
    				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
    				len = elems.length;

    			if ( outermost ) {
    				outermostContext = context === document || context || outermost;
    			}

    			// Add elements passing elementMatchers directly to results
    			// Support: IE<9, Safari
    			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
    			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
    				if ( byElement && elem ) {
    					j = 0;
    					if ( !context && elem.ownerDocument !== document ) {
    						setDocument( elem );
    						xml = !documentIsHTML;
    					}
    					while ( (matcher = elementMatchers[j++]) ) {
    						if ( matcher( elem, context || document, xml) ) {
    							results.push( elem );
    							break;
    						}
    					}
    					if ( outermost ) {
    						dirruns = dirrunsUnique;
    					}
    				}

    				// Track unmatched elements for set filters
    				if ( bySet ) {
    					// They will have gone through all possible matchers
    					if ( (elem = !matcher && elem) ) {
    						matchedCount--;
    					}

    					// Lengthen the array for every element, matched or not
    					if ( seed ) {
    						unmatched.push( elem );
    					}
    				}
    			}

    			// `i` is now the count of elements visited above, and adding it to `matchedCount`
    			// makes the latter nonnegative.
    			matchedCount += i;

    			// Apply set filters to unmatched elements
    			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
    			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
    			// no element matchers and no seed.
    			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
    			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
    			// numerically zero.
    			if ( bySet && i !== matchedCount ) {
    				j = 0;
    				while ( (matcher = setMatchers[j++]) ) {
    					matcher( unmatched, setMatched, context, xml );
    				}

    				if ( seed ) {
    					// Reintegrate element matches to eliminate the need for sorting
    					if ( matchedCount > 0 ) {
    						while ( i-- ) {
    							if ( !(unmatched[i] || setMatched[i]) ) {
    								setMatched[i] = pop.call( results );
    							}
    						}
    					}

    					// Discard index placeholder values to get only actual matches
    					setMatched = condense( setMatched );
    				}

    				// Add matches to results
    				push.apply( results, setMatched );

    				// Seedless set matches succeeding multiple successful matchers stipulate sorting
    				if ( outermost && !seed && setMatched.length > 0 &&
    					( matchedCount + setMatchers.length ) > 1 ) {

    					Sizzle.uniqueSort( results );
    				}
    			}

    			// Override manipulation of globals by nested matchers
    			if ( outermost ) {
    				dirruns = dirrunsUnique;
    				outermostContext = contextBackup;
    			}

    			return unmatched;
    		};

    	return bySet ?
    		markFunction( superMatcher ) :
    		superMatcher;
    }

    compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
    	var i,
    		setMatchers = [],
    		elementMatchers = [],
    		cached = compilerCache[ selector + " " ];

    	if ( !cached ) {
    		// Generate a function of recursive functions that can be used to check each element
    		if ( !match ) {
    			match = tokenize( selector );
    		}
    		i = match.length;
    		while ( i-- ) {
    			cached = matcherFromTokens( match[i] );
    			if ( cached[ expando ] ) {
    				setMatchers.push( cached );
    			} else {
    				elementMatchers.push( cached );
    			}
    		}

    		// Cache the compiled function
    		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

    		// Save selector and tokenization
    		cached.selector = selector;
    	}
    	return cached;
    };

    /**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */
    select = Sizzle.select = function( selector, context, results, seed ) {
    	var i, tokens, token, type, find,
    		compiled = typeof selector === "function" && selector,
    		match = !seed && tokenize( (selector = compiled.selector || selector) );

    	results = results || [];

    	// Try to minimize operations if there is only one selector in the list and no seed
    	// (the latter of which guarantees us context)
    	if ( match.length === 1 ) {

    		// Reduce context if the leading compound selector is an ID
    		tokens = match[0] = match[0].slice( 0 );
    		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
    				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

    			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
    			if ( !context ) {
    				return results;

    			// Precompiled matchers will still verify ancestry, so step up a level
    			} else if ( compiled ) {
    				context = context.parentNode;
    			}

    			selector = selector.slice( tokens.shift().value.length );
    		}

    		// Fetch a seed set for right-to-left matching
    		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
    		while ( i-- ) {
    			token = tokens[i];

    			// Abort if we hit a combinator
    			if ( Expr.relative[ (type = token.type) ] ) {
    				break;
    			}
    			if ( (find = Expr.find[ type ]) ) {
    				// Search, expanding context for leading sibling combinators
    				if ( (seed = find(
    					token.matches[0].replace( runescape, funescape ),
    					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
    				)) ) {

    					// If seed is empty or no tokens remain, we can return early
    					tokens.splice( i, 1 );
    					selector = seed.length && toSelector( tokens );
    					if ( !selector ) {
    						push.apply( results, seed );
    						return results;
    					}

    					break;
    				}
    			}
    		}
    	}

    	// Compile and execute a filtering function if one is not provided
    	// Provide `match` to avoid retokenization if we modified the selector above
    	( compiled || compile( selector, match ) )(
    		seed,
    		context,
    		!documentIsHTML,
    		results,
    		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
    	);
    	return results;
    };

    // One-time assignments

    // Sort stability
    support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

    // Support: Chrome 14-35+
    // Always assume duplicates if they aren't passed to the comparison function
    support.detectDuplicates = !!hasDuplicate;

    // Initialize against the default document
    setDocument();

    // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
    // Detached nodes confoundingly follow *each other*
    support.sortDetached = assert(function( el ) {
    	// Should return 1, but returns 4 (following)
    	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
    });

    // Support: IE<8
    // Prevent attribute/property "interpolation"
    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
    if ( !assert(function( el ) {
    	el.innerHTML = "<a href='#'></a>";
    	return el.firstChild.getAttribute("href") === "#" ;
    }) ) {
    	addHandle( "type|href|height|width", function( elem, name, isXML ) {
    		if ( !isXML ) {
    			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
    		}
    	});
    }

    // Support: IE<9
    // Use defaultValue in place of getAttribute("value")
    if ( !support.attributes || !assert(function( el ) {
    	el.innerHTML = "<input/>";
    	el.firstChild.setAttribute( "value", "" );
    	return el.firstChild.getAttribute( "value" ) === "";
    }) ) {
    	addHandle( "value", function( elem, name, isXML ) {
    		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
    			return elem.defaultValue;
    		}
    	});
    }

    // Support: IE<9
    // Use getAttributeNode to fetch booleans when getAttribute lies
    if ( !assert(function( el ) {
    	return el.getAttribute("disabled") == null;
    }) ) {
    	addHandle( booleans, function( elem, name, isXML ) {
    		var val;
    		if ( !isXML ) {
    			return elem[ name ] === true ? name.toLowerCase() :
    					(val = elem.getAttributeNode( name )) && val.specified ?
    					val.value :
    				null;
    		}
    	});
    }

    return Sizzle;

    })( window );



    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;

    // Deprecated
    jQuery.expr[ ":" ] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    jQuery.escapeSelector = Sizzle.escape;




    var dir = function( elem, dir, until ) {
    	var matched = [],
    		truncate = until !== undefined;

    	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
    		if ( elem.nodeType === 1 ) {
    			if ( truncate && jQuery( elem ).is( until ) ) {
    				break;
    			}
    			matched.push( elem );
    		}
    	}
    	return matched;
    };


    var siblings = function( n, elem ) {
    	var matched = [];

    	for ( ; n; n = n.nextSibling ) {
    		if ( n.nodeType === 1 && n !== elem ) {
    			matched.push( n );
    		}
    	}

    	return matched;
    };


    var rneedsContext = jQuery.expr.match.needsContext;



    function nodeName( elem, name ) {

      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

    }var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



    // Implement the identical functionality for filter and not
    function winnow( elements, qualifier, not ) {
    	if ( isFunction( qualifier ) ) {
    		return jQuery.grep( elements, function( elem, i ) {
    			return !!qualifier.call( elem, i, elem ) !== not;
    		} );
    	}

    	// Single element
    	if ( qualifier.nodeType ) {
    		return jQuery.grep( elements, function( elem ) {
    			return ( elem === qualifier ) !== not;
    		} );
    	}

    	// Arraylike of elements (jQuery, arguments, Array)
    	if ( typeof qualifier !== "string" ) {
    		return jQuery.grep( elements, function( elem ) {
    			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
    		} );
    	}

    	// Filtered directly for both simple and complex selectors
    	return jQuery.filter( qualifier, elements, not );
    }

    jQuery.filter = function( expr, elems, not ) {
    	var elem = elems[ 0 ];

    	if ( not ) {
    		expr = ":not(" + expr + ")";
    	}

    	if ( elems.length === 1 && elem.nodeType === 1 ) {
    		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
    	}

    	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
    		return elem.nodeType === 1;
    	} ) );
    };

    jQuery.fn.extend( {
    	find: function( selector ) {
    		var i, ret,
    			len = this.length,
    			self = this;

    		if ( typeof selector !== "string" ) {
    			return this.pushStack( jQuery( selector ).filter( function() {
    				for ( i = 0; i < len; i++ ) {
    					if ( jQuery.contains( self[ i ], this ) ) {
    						return true;
    					}
    				}
    			} ) );
    		}

    		ret = this.pushStack( [] );

    		for ( i = 0; i < len; i++ ) {
    			jQuery.find( selector, self[ i ], ret );
    		}

    		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
    	},
    	filter: function( selector ) {
    		return this.pushStack( winnow( this, selector || [], false ) );
    	},
    	not: function( selector ) {
    		return this.pushStack( winnow( this, selector || [], true ) );
    	},
    	is: function( selector ) {
    		return !!winnow(
    			this,

    			// If this is a positional/relative selector, check membership in the returned set
    			// so $("p:first").is("p:last") won't return true for a doc with two "p".
    			typeof selector === "string" && rneedsContext.test( selector ) ?
    				jQuery( selector ) :
    				selector || [],
    			false
    		).length;
    	}
    } );


    // Initialize a jQuery object


    // A central reference to the root jQuery(document)
    var rootjQuery,

    	// A simple way to check for HTML strings
    	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
    	// Strict HTML recognition (#11290: must start with <)
    	// Shortcut simple #id case for speed
    	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

    	init = jQuery.fn.init = function( selector, context, root ) {
    		var match, elem;

    		// HANDLE: $(""), $(null), $(undefined), $(false)
    		if ( !selector ) {
    			return this;
    		}

    		// Method init() accepts an alternate rootjQuery
    		// so migrate can support jQuery.sub (gh-2101)
    		root = root || rootjQuery;

    		// Handle HTML strings
    		if ( typeof selector === "string" ) {
    			if ( selector[ 0 ] === "<" &&
    				selector[ selector.length - 1 ] === ">" &&
    				selector.length >= 3 ) {

    				// Assume that strings that start and end with <> are HTML and skip the regex check
    				match = [ null, selector, null ];

    			} else {
    				match = rquickExpr.exec( selector );
    			}

    			// Match html or make sure no context is specified for #id
    			if ( match && ( match[ 1 ] || !context ) ) {

    				// HANDLE: $(html) -> $(array)
    				if ( match[ 1 ] ) {
    					context = context instanceof jQuery ? context[ 0 ] : context;

    					// Option to run scripts is true for back-compat
    					// Intentionally let the error be thrown if parseHTML is not present
    					jQuery.merge( this, jQuery.parseHTML(
    						match[ 1 ],
    						context && context.nodeType ? context.ownerDocument || context : document,
    						true
    					) );

    					// HANDLE: $(html, props)
    					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
    						for ( match in context ) {

    							// Properties of context are called as methods if possible
    							if ( isFunction( this[ match ] ) ) {
    								this[ match ]( context[ match ] );

    							// ...and otherwise set as attributes
    							} else {
    								this.attr( match, context[ match ] );
    							}
    						}
    					}

    					return this;

    				// HANDLE: $(#id)
    				} else {
    					elem = document.getElementById( match[ 2 ] );

    					if ( elem ) {

    						// Inject the element directly into the jQuery object
    						this[ 0 ] = elem;
    						this.length = 1;
    					}
    					return this;
    				}

    			// HANDLE: $(expr, $(...))
    			} else if ( !context || context.jquery ) {
    				return ( context || root ).find( selector );

    			// HANDLE: $(expr, context)
    			// (which is just equivalent to: $(context).find(expr)
    			} else {
    				return this.constructor( context ).find( selector );
    			}

    		// HANDLE: $(DOMElement)
    		} else if ( selector.nodeType ) {
    			this[ 0 ] = selector;
    			this.length = 1;
    			return this;

    		// HANDLE: $(function)
    		// Shortcut for document ready
    		} else if ( isFunction( selector ) ) {
    			return root.ready !== undefined ?
    				root.ready( selector ) :

    				// Execute immediately if ready is not present
    				selector( jQuery );
    		}

    		return jQuery.makeArray( selector, this );
    	};

    // Give the init function the jQuery prototype for later instantiation
    init.prototype = jQuery.fn;

    // Initialize central reference
    rootjQuery = jQuery( document );


    var rparentsprev = /^(?:parents|prev(?:Until|All))/,

    	// Methods guaranteed to produce a unique set when starting from a unique set
    	guaranteedUnique = {
    		children: true,
    		contents: true,
    		next: true,
    		prev: true
    	};

    jQuery.fn.extend( {
    	has: function( target ) {
    		var targets = jQuery( target, this ),
    			l = targets.length;

    		return this.filter( function() {
    			var i = 0;
    			for ( ; i < l; i++ ) {
    				if ( jQuery.contains( this, targets[ i ] ) ) {
    					return true;
    				}
    			}
    		} );
    	},

    	closest: function( selectors, context ) {
    		var cur,
    			i = 0,
    			l = this.length,
    			matched = [],
    			targets = typeof selectors !== "string" && jQuery( selectors );

    		// Positional selectors never match, since there's no _selection_ context
    		if ( !rneedsContext.test( selectors ) ) {
    			for ( ; i < l; i++ ) {
    				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

    					// Always skip document fragments
    					if ( cur.nodeType < 11 && ( targets ?
    						targets.index( cur ) > -1 :

    						// Don't pass non-elements to Sizzle
    						cur.nodeType === 1 &&
    							jQuery.find.matchesSelector( cur, selectors ) ) ) {

    						matched.push( cur );
    						break;
    					}
    				}
    			}
    		}

    		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
    	},

    	// Determine the position of an element within the set
    	index: function( elem ) {

    		// No argument, return index in parent
    		if ( !elem ) {
    			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
    		}

    		// Index in selector
    		if ( typeof elem === "string" ) {
    			return indexOf.call( jQuery( elem ), this[ 0 ] );
    		}

    		// Locate the position of the desired element
    		return indexOf.call( this,

    			// If it receives a jQuery object, the first element is used
    			elem.jquery ? elem[ 0 ] : elem
    		);
    	},

    	add: function( selector, context ) {
    		return this.pushStack(
    			jQuery.uniqueSort(
    				jQuery.merge( this.get(), jQuery( selector, context ) )
    			)
    		);
    	},

    	addBack: function( selector ) {
    		return this.add( selector == null ?
    			this.prevObject : this.prevObject.filter( selector )
    		);
    	}
    } );

    function sibling( cur, dir ) {
    	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
    	return cur;
    }

    jQuery.each( {
    	parent: function( elem ) {
    		var parent = elem.parentNode;
    		return parent && parent.nodeType !== 11 ? parent : null;
    	},
    	parents: function( elem ) {
    		return dir( elem, "parentNode" );
    	},
    	parentsUntil: function( elem, i, until ) {
    		return dir( elem, "parentNode", until );
    	},
    	next: function( elem ) {
    		return sibling( elem, "nextSibling" );
    	},
    	prev: function( elem ) {
    		return sibling( elem, "previousSibling" );
    	},
    	nextAll: function( elem ) {
    		return dir( elem, "nextSibling" );
    	},
    	prevAll: function( elem ) {
    		return dir( elem, "previousSibling" );
    	},
    	nextUntil: function( elem, i, until ) {
    		return dir( elem, "nextSibling", until );
    	},
    	prevUntil: function( elem, i, until ) {
    		return dir( elem, "previousSibling", until );
    	},
    	siblings: function( elem ) {
    		return siblings( ( elem.parentNode || {} ).firstChild, elem );
    	},
    	children: function( elem ) {
    		return siblings( elem.firstChild );
    	},
    	contents: function( elem ) {
            if ( nodeName( elem, "iframe" ) ) {
                return elem.contentDocument;
            }

            // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
            // Treat the template element as a regular one in browsers that
            // don't support it.
            if ( nodeName( elem, "template" ) ) {
                elem = elem.content || elem;
            }

            return jQuery.merge( [], elem.childNodes );
    	}
    }, function( name, fn ) {
    	jQuery.fn[ name ] = function( until, selector ) {
    		var matched = jQuery.map( this, fn, until );

    		if ( name.slice( -5 ) !== "Until" ) {
    			selector = until;
    		}

    		if ( selector && typeof selector === "string" ) {
    			matched = jQuery.filter( selector, matched );
    		}

    		if ( this.length > 1 ) {

    			// Remove duplicates
    			if ( !guaranteedUnique[ name ] ) {
    				jQuery.uniqueSort( matched );
    			}

    			// Reverse order for parents* and prev-derivatives
    			if ( rparentsprev.test( name ) ) {
    				matched.reverse();
    			}
    		}

    		return this.pushStack( matched );
    	};
    } );
    var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



    // Convert String-formatted options into Object-formatted ones
    function createOptions( options ) {
    	var object = {};
    	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
    		object[ flag ] = true;
    	} );
    	return object;
    }

    /*
     * Create a callback list using the following parameters:
     *
     *	options: an optional list of space-separated options that will change how
     *			the callback list behaves or a more traditional option object
     *
     * By default a callback list will act like an event callback list and can be
     * "fired" multiple times.
     *
     * Possible options:
     *
     *	once:			will ensure the callback list can only be fired once (like a Deferred)
     *
     *	memory:			will keep track of previous values and will call any callback added
     *					after the list has been fired right away with the latest "memorized"
     *					values (like a Deferred)
     *
     *	unique:			will ensure a callback can only be added once (no duplicate in the list)
     *
     *	stopOnFalse:	interrupt callings when a callback returns false
     *
     */
    jQuery.Callbacks = function( options ) {

    	// Convert options from String-formatted to Object-formatted if needed
    	// (we check in cache first)
    	options = typeof options === "string" ?
    		createOptions( options ) :
    		jQuery.extend( {}, options );

    	var // Flag to know if list is currently firing
    		firing,

    		// Last fire value for non-forgettable lists
    		memory,

    		// Flag to know if list was already fired
    		fired,

    		// Flag to prevent firing
    		locked,

    		// Actual callback list
    		list = [],

    		// Queue of execution data for repeatable lists
    		queue = [],

    		// Index of currently firing callback (modified by add/remove as needed)
    		firingIndex = -1,

    		// Fire callbacks
    		fire = function() {

    			// Enforce single-firing
    			locked = locked || options.once;

    			// Execute callbacks for all pending executions,
    			// respecting firingIndex overrides and runtime changes
    			fired = firing = true;
    			for ( ; queue.length; firingIndex = -1 ) {
    				memory = queue.shift();
    				while ( ++firingIndex < list.length ) {

    					// Run callback and check for early termination
    					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
    						options.stopOnFalse ) {

    						// Jump to end and forget the data so .add doesn't re-fire
    						firingIndex = list.length;
    						memory = false;
    					}
    				}
    			}

    			// Forget the data if we're done with it
    			if ( !options.memory ) {
    				memory = false;
    			}

    			firing = false;

    			// Clean up if we're done firing for good
    			if ( locked ) {

    				// Keep an empty list if we have data for future add calls
    				if ( memory ) {
    					list = [];

    				// Otherwise, this object is spent
    				} else {
    					list = "";
    				}
    			}
    		},

    		// Actual Callbacks object
    		self = {

    			// Add a callback or a collection of callbacks to the list
    			add: function() {
    				if ( list ) {

    					// If we have memory from a past run, we should fire after adding
    					if ( memory && !firing ) {
    						firingIndex = list.length - 1;
    						queue.push( memory );
    					}

    					( function add( args ) {
    						jQuery.each( args, function( _, arg ) {
    							if ( isFunction( arg ) ) {
    								if ( !options.unique || !self.has( arg ) ) {
    									list.push( arg );
    								}
    							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

    								// Inspect recursively
    								add( arg );
    							}
    						} );
    					} )( arguments );

    					if ( memory && !firing ) {
    						fire();
    					}
    				}
    				return this;
    			},

    			// Remove a callback from the list
    			remove: function() {
    				jQuery.each( arguments, function( _, arg ) {
    					var index;
    					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
    						list.splice( index, 1 );

    						// Handle firing indexes
    						if ( index <= firingIndex ) {
    							firingIndex--;
    						}
    					}
    				} );
    				return this;
    			},

    			// Check if a given callback is in the list.
    			// If no argument is given, return whether or not list has callbacks attached.
    			has: function( fn ) {
    				return fn ?
    					jQuery.inArray( fn, list ) > -1 :
    					list.length > 0;
    			},

    			// Remove all callbacks from the list
    			empty: function() {
    				if ( list ) {
    					list = [];
    				}
    				return this;
    			},

    			// Disable .fire and .add
    			// Abort any current/pending executions
    			// Clear all callbacks and values
    			disable: function() {
    				locked = queue = [];
    				list = memory = "";
    				return this;
    			},
    			disabled: function() {
    				return !list;
    			},

    			// Disable .fire
    			// Also disable .add unless we have memory (since it would have no effect)
    			// Abort any pending executions
    			lock: function() {
    				locked = queue = [];
    				if ( !memory && !firing ) {
    					list = memory = "";
    				}
    				return this;
    			},
    			locked: function() {
    				return !!locked;
    			},

    			// Call all callbacks with the given context and arguments
    			fireWith: function( context, args ) {
    				if ( !locked ) {
    					args = args || [];
    					args = [ context, args.slice ? args.slice() : args ];
    					queue.push( args );
    					if ( !firing ) {
    						fire();
    					}
    				}
    				return this;
    			},

    			// Call all the callbacks with the given arguments
    			fire: function() {
    				self.fireWith( this, arguments );
    				return this;
    			},

    			// To know if the callbacks have already been called at least once
    			fired: function() {
    				return !!fired;
    			}
    		};

    	return self;
    };


    function Identity( v ) {
    	return v;
    }
    function Thrower( ex ) {
    	throw ex;
    }

    function adoptValue( value, resolve, reject, noValue ) {
    	var method;

    	try {

    		// Check for promise aspect first to privilege synchronous behavior
    		if ( value && isFunction( ( method = value.promise ) ) ) {
    			method.call( value ).done( resolve ).fail( reject );

    		// Other thenables
    		} else if ( value && isFunction( ( method = value.then ) ) ) {
    			method.call( value, resolve, reject );

    		// Other non-thenables
    		} else {

    			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
    			// * false: [ value ].slice( 0 ) => resolve( value )
    			// * true: [ value ].slice( 1 ) => resolve()
    			resolve.apply( undefined, [ value ].slice( noValue ) );
    		}

    	// For Promises/A+, convert exceptions into rejections
    	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
    	// Deferred#then to conditionally suppress rejection.
    	} catch ( value ) {

    		// Support: Android 4.0 only
    		// Strict mode functions invoked without .call/.apply get global-object context
    		reject.apply( undefined, [ value ] );
    	}
    }

    jQuery.extend( {

    	Deferred: function( func ) {
    		var tuples = [

    				// action, add listener, callbacks,
    				// ... .then handlers, argument index, [final state]
    				[ "notify", "progress", jQuery.Callbacks( "memory" ),
    					jQuery.Callbacks( "memory" ), 2 ],
    				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
    					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
    				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
    					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
    			],
    			state = "pending",
    			promise = {
    				state: function() {
    					return state;
    				},
    				always: function() {
    					deferred.done( arguments ).fail( arguments );
    					return this;
    				},
    				"catch": function( fn ) {
    					return promise.then( null, fn );
    				},

    				// Keep pipe for back-compat
    				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
    					var fns = arguments;

    					return jQuery.Deferred( function( newDefer ) {
    						jQuery.each( tuples, function( i, tuple ) {

    							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
    							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

    							// deferred.progress(function() { bind to newDefer or newDefer.notify })
    							// deferred.done(function() { bind to newDefer or newDefer.resolve })
    							// deferred.fail(function() { bind to newDefer or newDefer.reject })
    							deferred[ tuple[ 1 ] ]( function() {
    								var returned = fn && fn.apply( this, arguments );
    								if ( returned && isFunction( returned.promise ) ) {
    									returned.promise()
    										.progress( newDefer.notify )
    										.done( newDefer.resolve )
    										.fail( newDefer.reject );
    								} else {
    									newDefer[ tuple[ 0 ] + "With" ](
    										this,
    										fn ? [ returned ] : arguments
    									);
    								}
    							} );
    						} );
    						fns = null;
    					} ).promise();
    				},
    				then: function( onFulfilled, onRejected, onProgress ) {
    					var maxDepth = 0;
    					function resolve( depth, deferred, handler, special ) {
    						return function() {
    							var that = this,
    								args = arguments,
    								mightThrow = function() {
    									var returned, then;

    									// Support: Promises/A+ section 2.3.3.3.3
    									// https://promisesaplus.com/#point-59
    									// Ignore double-resolution attempts
    									if ( depth < maxDepth ) {
    										return;
    									}

    									returned = handler.apply( that, args );

    									// Support: Promises/A+ section 2.3.1
    									// https://promisesaplus.com/#point-48
    									if ( returned === deferred.promise() ) {
    										throw new TypeError( "Thenable self-resolution" );
    									}

    									// Support: Promises/A+ sections 2.3.3.1, 3.5
    									// https://promisesaplus.com/#point-54
    									// https://promisesaplus.com/#point-75
    									// Retrieve `then` only once
    									then = returned &&

    										// Support: Promises/A+ section 2.3.4
    										// https://promisesaplus.com/#point-64
    										// Only check objects and functions for thenability
    										( typeof returned === "object" ||
    											typeof returned === "function" ) &&
    										returned.then;

    									// Handle a returned thenable
    									if ( isFunction( then ) ) {

    										// Special processors (notify) just wait for resolution
    										if ( special ) {
    											then.call(
    												returned,
    												resolve( maxDepth, deferred, Identity, special ),
    												resolve( maxDepth, deferred, Thrower, special )
    											);

    										// Normal processors (resolve) also hook into progress
    										} else {

    											// ...and disregard older resolution values
    											maxDepth++;

    											then.call(
    												returned,
    												resolve( maxDepth, deferred, Identity, special ),
    												resolve( maxDepth, deferred, Thrower, special ),
    												resolve( maxDepth, deferred, Identity,
    													deferred.notifyWith )
    											);
    										}

    									// Handle all other returned values
    									} else {

    										// Only substitute handlers pass on context
    										// and multiple values (non-spec behavior)
    										if ( handler !== Identity ) {
    											that = undefined;
    											args = [ returned ];
    										}

    										// Process the value(s)
    										// Default process is resolve
    										( special || deferred.resolveWith )( that, args );
    									}
    								},

    								// Only normal processors (resolve) catch and reject exceptions
    								process = special ?
    									mightThrow :
    									function() {
    										try {
    											mightThrow();
    										} catch ( e ) {

    											if ( jQuery.Deferred.exceptionHook ) {
    												jQuery.Deferred.exceptionHook( e,
    													process.stackTrace );
    											}

    											// Support: Promises/A+ section 2.3.3.3.4.1
    											// https://promisesaplus.com/#point-61
    											// Ignore post-resolution exceptions
    											if ( depth + 1 >= maxDepth ) {

    												// Only substitute handlers pass on context
    												// and multiple values (non-spec behavior)
    												if ( handler !== Thrower ) {
    													that = undefined;
    													args = [ e ];
    												}

    												deferred.rejectWith( that, args );
    											}
    										}
    									};

    							// Support: Promises/A+ section 2.3.3.3.1
    							// https://promisesaplus.com/#point-57
    							// Re-resolve promises immediately to dodge false rejection from
    							// subsequent errors
    							if ( depth ) {
    								process();
    							} else {

    								// Call an optional hook to record the stack, in case of exception
    								// since it's otherwise lost when execution goes async
    								if ( jQuery.Deferred.getStackHook ) {
    									process.stackTrace = jQuery.Deferred.getStackHook();
    								}
    								window.setTimeout( process );
    							}
    						};
    					}

    					return jQuery.Deferred( function( newDefer ) {

    						// progress_handlers.add( ... )
    						tuples[ 0 ][ 3 ].add(
    							resolve(
    								0,
    								newDefer,
    								isFunction( onProgress ) ?
    									onProgress :
    									Identity,
    								newDefer.notifyWith
    							)
    						);

    						// fulfilled_handlers.add( ... )
    						tuples[ 1 ][ 3 ].add(
    							resolve(
    								0,
    								newDefer,
    								isFunction( onFulfilled ) ?
    									onFulfilled :
    									Identity
    							)
    						);

    						// rejected_handlers.add( ... )
    						tuples[ 2 ][ 3 ].add(
    							resolve(
    								0,
    								newDefer,
    								isFunction( onRejected ) ?
    									onRejected :
    									Thrower
    							)
    						);
    					} ).promise();
    				},

    				// Get a promise for this deferred
    				// If obj is provided, the promise aspect is added to the object
    				promise: function( obj ) {
    					return obj != null ? jQuery.extend( obj, promise ) : promise;
    				}
    			},
    			deferred = {};

    		// Add list-specific methods
    		jQuery.each( tuples, function( i, tuple ) {
    			var list = tuple[ 2 ],
    				stateString = tuple[ 5 ];

    			// promise.progress = list.add
    			// promise.done = list.add
    			// promise.fail = list.add
    			promise[ tuple[ 1 ] ] = list.add;

    			// Handle state
    			if ( stateString ) {
    				list.add(
    					function() {

    						// state = "resolved" (i.e., fulfilled)
    						// state = "rejected"
    						state = stateString;
    					},

    					// rejected_callbacks.disable
    					// fulfilled_callbacks.disable
    					tuples[ 3 - i ][ 2 ].disable,

    					// rejected_handlers.disable
    					// fulfilled_handlers.disable
    					tuples[ 3 - i ][ 3 ].disable,

    					// progress_callbacks.lock
    					tuples[ 0 ][ 2 ].lock,

    					// progress_handlers.lock
    					tuples[ 0 ][ 3 ].lock
    				);
    			}

    			// progress_handlers.fire
    			// fulfilled_handlers.fire
    			// rejected_handlers.fire
    			list.add( tuple[ 3 ].fire );

    			// deferred.notify = function() { deferred.notifyWith(...) }
    			// deferred.resolve = function() { deferred.resolveWith(...) }
    			// deferred.reject = function() { deferred.rejectWith(...) }
    			deferred[ tuple[ 0 ] ] = function() {
    				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
    				return this;
    			};

    			// deferred.notifyWith = list.fireWith
    			// deferred.resolveWith = list.fireWith
    			// deferred.rejectWith = list.fireWith
    			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
    		} );

    		// Make the deferred a promise
    		promise.promise( deferred );

    		// Call given func if any
    		if ( func ) {
    			func.call( deferred, deferred );
    		}

    		// All done!
    		return deferred;
    	},

    	// Deferred helper
    	when: function( singleValue ) {
    		var

    			// count of uncompleted subordinates
    			remaining = arguments.length,

    			// count of unprocessed arguments
    			i = remaining,

    			// subordinate fulfillment data
    			resolveContexts = Array( i ),
    			resolveValues = slice.call( arguments ),

    			// the master Deferred
    			master = jQuery.Deferred(),

    			// subordinate callback factory
    			updateFunc = function( i ) {
    				return function( value ) {
    					resolveContexts[ i ] = this;
    					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
    					if ( !( --remaining ) ) {
    						master.resolveWith( resolveContexts, resolveValues );
    					}
    				};
    			};

    		// Single- and empty arguments are adopted like Promise.resolve
    		if ( remaining <= 1 ) {
    			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
    				!remaining );

    			// Use .then() to unwrap secondary thenables (cf. gh-3000)
    			if ( master.state() === "pending" ||
    				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

    				return master.then();
    			}
    		}

    		// Multiple arguments are aggregated like Promise.all array elements
    		while ( i-- ) {
    			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
    		}

    		return master.promise();
    	}
    } );


    // These usually indicate a programmer mistake during development,
    // warn about them ASAP rather than swallowing them by default.
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

    jQuery.Deferred.exceptionHook = function( error, stack ) {

    	// Support: IE 8 - 9 only
    	// Console exists when dev tools are open, which can happen at any time
    	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
    		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
    	}
    };




    jQuery.readyException = function( error ) {
    	window.setTimeout( function() {
    		throw error;
    	} );
    };




    // The deferred used on DOM ready
    var readyList = jQuery.Deferred();

    jQuery.fn.ready = function( fn ) {

    	readyList
    		.then( fn )

    		// Wrap jQuery.readyException in a function so that the lookup
    		// happens at the time of error handling instead of callback
    		// registration.
    		.catch( function( error ) {
    			jQuery.readyException( error );
    		} );

    	return this;
    };

    jQuery.extend( {

    	// Is the DOM ready to be used? Set to true once it occurs.
    	isReady: false,

    	// A counter to track how many items to wait for before
    	// the ready event fires. See #6781
    	readyWait: 1,

    	// Handle when the DOM is ready
    	ready: function( wait ) {

    		// Abort if there are pending holds or we're already ready
    		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
    			return;
    		}

    		// Remember that the DOM is ready
    		jQuery.isReady = true;

    		// If a normal DOM Ready event fired, decrement, and wait if need be
    		if ( wait !== true && --jQuery.readyWait > 0 ) {
    			return;
    		}

    		// If there are functions bound, to execute
    		readyList.resolveWith( document, [ jQuery ] );
    	}
    } );

    jQuery.ready.then = readyList.then;

    // The ready event handler and self cleanup method
    function completed() {
    	document.removeEventListener( "DOMContentLoaded", completed );
    	window.removeEventListener( "load", completed );
    	jQuery.ready();
    }

    // Catch cases where $(document).ready() is called
    // after the browser event has already occurred.
    // Support: IE <=9 - 10 only
    // Older IE sometimes signals "interactive" too soon
    if ( document.readyState === "complete" ||
    	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

    	// Handle it asynchronously to allow scripts the opportunity to delay ready
    	window.setTimeout( jQuery.ready );

    } else {

    	// Use the handy event callback
    	document.addEventListener( "DOMContentLoaded", completed );

    	// A fallback to window.onload, that will always work
    	window.addEventListener( "load", completed );
    }




    // Multifunctional method to get and set values of a collection
    // The value/s can optionally be executed if it's a function
    var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
    	var i = 0,
    		len = elems.length,
    		bulk = key == null;

    	// Sets many values
    	if ( toType( key ) === "object" ) {
    		chainable = true;
    		for ( i in key ) {
    			access( elems, fn, i, key[ i ], true, emptyGet, raw );
    		}

    	// Sets one value
    	} else if ( value !== undefined ) {
    		chainable = true;

    		if ( !isFunction( value ) ) {
    			raw = true;
    		}

    		if ( bulk ) {

    			// Bulk operations run against the entire set
    			if ( raw ) {
    				fn.call( elems, value );
    				fn = null;

    			// ...except when executing function values
    			} else {
    				bulk = fn;
    				fn = function( elem, key, value ) {
    					return bulk.call( jQuery( elem ), value );
    				};
    			}
    		}

    		if ( fn ) {
    			for ( ; i < len; i++ ) {
    				fn(
    					elems[ i ], key, raw ?
    					value :
    					value.call( elems[ i ], i, fn( elems[ i ], key ) )
    				);
    			}
    		}
    	}

    	if ( chainable ) {
    		return elems;
    	}

    	// Gets
    	if ( bulk ) {
    		return fn.call( elems );
    	}

    	return len ? fn( elems[ 0 ], key ) : emptyGet;
    };


    // Matches dashed string for camelizing
    var rmsPrefix = /^-ms-/,
    	rdashAlpha = /-([a-z])/g;

    // Used by camelCase as callback to replace()
    function fcamelCase( all, letter ) {
    	return letter.toUpperCase();
    }

    // Convert dashed to camelCase; used by the css and data modules
    // Support: IE <=9 - 11, Edge 12 - 15
    // Microsoft forgot to hump their vendor prefix (#9572)
    function camelCase( string ) {
    	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
    }
    var acceptData = function( owner ) {

    	// Accepts only:
    	//  - Node
    	//    - Node.ELEMENT_NODE
    	//    - Node.DOCUMENT_NODE
    	//  - Object
    	//    - Any
    	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
    };




    function Data() {
    	this.expando = jQuery.expando + Data.uid++;
    }

    Data.uid = 1;

    Data.prototype = {

    	cache: function( owner ) {

    		// Check if the owner object already has a cache
    		var value = owner[ this.expando ];

    		// If not, create one
    		if ( !value ) {
    			value = {};

    			// We can accept data for non-element nodes in modern browsers,
    			// but we should not, see #8335.
    			// Always return an empty object.
    			if ( acceptData( owner ) ) {

    				// If it is a node unlikely to be stringify-ed or looped over
    				// use plain assignment
    				if ( owner.nodeType ) {
    					owner[ this.expando ] = value;

    				// Otherwise secure it in a non-enumerable property
    				// configurable must be true to allow the property to be
    				// deleted when data is removed
    				} else {
    					Object.defineProperty( owner, this.expando, {
    						value: value,
    						configurable: true
    					} );
    				}
    			}
    		}

    		return value;
    	},
    	set: function( owner, data, value ) {
    		var prop,
    			cache = this.cache( owner );

    		// Handle: [ owner, key, value ] args
    		// Always use camelCase key (gh-2257)
    		if ( typeof data === "string" ) {
    			cache[ camelCase( data ) ] = value;

    		// Handle: [ owner, { properties } ] args
    		} else {

    			// Copy the properties one-by-one to the cache object
    			for ( prop in data ) {
    				cache[ camelCase( prop ) ] = data[ prop ];
    			}
    		}
    		return cache;
    	},
    	get: function( owner, key ) {
    		return key === undefined ?
    			this.cache( owner ) :

    			// Always use camelCase key (gh-2257)
    			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
    	},
    	access: function( owner, key, value ) {

    		// In cases where either:
    		//
    		//   1. No key was specified
    		//   2. A string key was specified, but no value provided
    		//
    		// Take the "read" path and allow the get method to determine
    		// which value to return, respectively either:
    		//
    		//   1. The entire cache object
    		//   2. The data stored at the key
    		//
    		if ( key === undefined ||
    				( ( key && typeof key === "string" ) && value === undefined ) ) {

    			return this.get( owner, key );
    		}

    		// When the key is not a string, or both a key and value
    		// are specified, set or extend (existing objects) with either:
    		//
    		//   1. An object of properties
    		//   2. A key and value
    		//
    		this.set( owner, key, value );

    		// Since the "set" path can have two possible entry points
    		// return the expected data based on which path was taken[*]
    		return value !== undefined ? value : key;
    	},
    	remove: function( owner, key ) {
    		var i,
    			cache = owner[ this.expando ];

    		if ( cache === undefined ) {
    			return;
    		}

    		if ( key !== undefined ) {

    			// Support array or space separated string of keys
    			if ( Array.isArray( key ) ) {

    				// If key is an array of keys...
    				// We always set camelCase keys, so remove that.
    				key = key.map( camelCase );
    			} else {
    				key = camelCase( key );

    				// If a key with the spaces exists, use it.
    				// Otherwise, create an array by matching non-whitespace
    				key = key in cache ?
    					[ key ] :
    					( key.match( rnothtmlwhite ) || [] );
    			}

    			i = key.length;

    			while ( i-- ) {
    				delete cache[ key[ i ] ];
    			}
    		}

    		// Remove the expando if there's no more data
    		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

    			// Support: Chrome <=35 - 45
    			// Webkit & Blink performance suffers when deleting properties
    			// from DOM nodes, so set to undefined instead
    			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
    			if ( owner.nodeType ) {
    				owner[ this.expando ] = undefined;
    			} else {
    				delete owner[ this.expando ];
    			}
    		}
    	},
    	hasData: function( owner ) {
    		var cache = owner[ this.expando ];
    		return cache !== undefined && !jQuery.isEmptyObject( cache );
    	}
    };
    var dataPriv = new Data();

    var dataUser = new Data();



    //	Implementation Summary
    //
    //	1. Enforce API surface and semantic compatibility with 1.9.x branch
    //	2. Improve the module's maintainability by reducing the storage
    //		paths to a single mechanism.
    //	3. Use the same single mechanism to support "private" and "user" data.
    //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
    //	5. Avoid exposing implementation details on user objects (eg. expando properties)
    //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    	rmultiDash = /[A-Z]/g;

    function getData( data ) {
    	if ( data === "true" ) {
    		return true;
    	}

    	if ( data === "false" ) {
    		return false;
    	}

    	if ( data === "null" ) {
    		return null;
    	}

    	// Only convert to a number if it doesn't change the string
    	if ( data === +data + "" ) {
    		return +data;
    	}

    	if ( rbrace.test( data ) ) {
    		return JSON.parse( data );
    	}

    	return data;
    }

    function dataAttr( elem, key, data ) {
    	var name;

    	// If nothing was found internally, try to fetch any
    	// data from the HTML5 data-* attribute
    	if ( data === undefined && elem.nodeType === 1 ) {
    		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
    		data = elem.getAttribute( name );

    		if ( typeof data === "string" ) {
    			try {
    				data = getData( data );
    			} catch ( e ) {}

    			// Make sure we set the data so it isn't changed later
    			dataUser.set( elem, key, data );
    		} else {
    			data = undefined;
    		}
    	}
    	return data;
    }

    jQuery.extend( {
    	hasData: function( elem ) {
    		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
    	},

    	data: function( elem, name, data ) {
    		return dataUser.access( elem, name, data );
    	},

    	removeData: function( elem, name ) {
    		dataUser.remove( elem, name );
    	},

    	// TODO: Now that all calls to _data and _removeData have been replaced
    	// with direct calls to dataPriv methods, these can be deprecated.
    	_data: function( elem, name, data ) {
    		return dataPriv.access( elem, name, data );
    	},

    	_removeData: function( elem, name ) {
    		dataPriv.remove( elem, name );
    	}
    } );

    jQuery.fn.extend( {
    	data: function( key, value ) {
    		var i, name, data,
    			elem = this[ 0 ],
    			attrs = elem && elem.attributes;

    		// Gets all values
    		if ( key === undefined ) {
    			if ( this.length ) {
    				data = dataUser.get( elem );

    				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
    					i = attrs.length;
    					while ( i-- ) {

    						// Support: IE 11 only
    						// The attrs elements can be null (#14894)
    						if ( attrs[ i ] ) {
    							name = attrs[ i ].name;
    							if ( name.indexOf( "data-" ) === 0 ) {
    								name = camelCase( name.slice( 5 ) );
    								dataAttr( elem, name, data[ name ] );
    							}
    						}
    					}
    					dataPriv.set( elem, "hasDataAttrs", true );
    				}
    			}

    			return data;
    		}

    		// Sets multiple values
    		if ( typeof key === "object" ) {
    			return this.each( function() {
    				dataUser.set( this, key );
    			} );
    		}

    		return access( this, function( value ) {
    			var data;

    			// The calling jQuery object (element matches) is not empty
    			// (and therefore has an element appears at this[ 0 ]) and the
    			// `value` parameter was not undefined. An empty jQuery object
    			// will result in `undefined` for elem = this[ 0 ] which will
    			// throw an exception if an attempt to read a data cache is made.
    			if ( elem && value === undefined ) {

    				// Attempt to get data from the cache
    				// The key will always be camelCased in Data
    				data = dataUser.get( elem, key );
    				if ( data !== undefined ) {
    					return data;
    				}

    				// Attempt to "discover" the data in
    				// HTML5 custom data-* attrs
    				data = dataAttr( elem, key );
    				if ( data !== undefined ) {
    					return data;
    				}

    				// We tried really hard, but the data doesn't exist.
    				return;
    			}

    			// Set the data...
    			this.each( function() {

    				// We always store the camelCased key
    				dataUser.set( this, key, value );
    			} );
    		}, null, value, arguments.length > 1, null, true );
    	},

    	removeData: function( key ) {
    		return this.each( function() {
    			dataUser.remove( this, key );
    		} );
    	}
    } );


    jQuery.extend( {
    	queue: function( elem, type, data ) {
    		var queue;

    		if ( elem ) {
    			type = ( type || "fx" ) + "queue";
    			queue = dataPriv.get( elem, type );

    			// Speed up dequeue by getting out quickly if this is just a lookup
    			if ( data ) {
    				if ( !queue || Array.isArray( data ) ) {
    					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
    				} else {
    					queue.push( data );
    				}
    			}
    			return queue || [];
    		}
    	},

    	dequeue: function( elem, type ) {
    		type = type || "fx";

    		var queue = jQuery.queue( elem, type ),
    			startLength = queue.length,
    			fn = queue.shift(),
    			hooks = jQuery._queueHooks( elem, type ),
    			next = function() {
    				jQuery.dequeue( elem, type );
    			};

    		// If the fx queue is dequeued, always remove the progress sentinel
    		if ( fn === "inprogress" ) {
    			fn = queue.shift();
    			startLength--;
    		}

    		if ( fn ) {

    			// Add a progress sentinel to prevent the fx queue from being
    			// automatically dequeued
    			if ( type === "fx" ) {
    				queue.unshift( "inprogress" );
    			}

    			// Clear up the last queue stop function
    			delete hooks.stop;
    			fn.call( elem, next, hooks );
    		}

    		if ( !startLength && hooks ) {
    			hooks.empty.fire();
    		}
    	},

    	// Not public - generate a queueHooks object, or return the current one
    	_queueHooks: function( elem, type ) {
    		var key = type + "queueHooks";
    		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
    			empty: jQuery.Callbacks( "once memory" ).add( function() {
    				dataPriv.remove( elem, [ type + "queue", key ] );
    			} )
    		} );
    	}
    } );

    jQuery.fn.extend( {
    	queue: function( type, data ) {
    		var setter = 2;

    		if ( typeof type !== "string" ) {
    			data = type;
    			type = "fx";
    			setter--;
    		}

    		if ( arguments.length < setter ) {
    			return jQuery.queue( this[ 0 ], type );
    		}

    		return data === undefined ?
    			this :
    			this.each( function() {
    				var queue = jQuery.queue( this, type, data );

    				// Ensure a hooks for this queue
    				jQuery._queueHooks( this, type );

    				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
    					jQuery.dequeue( this, type );
    				}
    			} );
    	},
    	dequeue: function( type ) {
    		return this.each( function() {
    			jQuery.dequeue( this, type );
    		} );
    	},
    	clearQueue: function( type ) {
    		return this.queue( type || "fx", [] );
    	},

    	// Get a promise resolved when queues of a certain type
    	// are emptied (fx is the type by default)
    	promise: function( type, obj ) {
    		var tmp,
    			count = 1,
    			defer = jQuery.Deferred(),
    			elements = this,
    			i = this.length,
    			resolve = function() {
    				if ( !( --count ) ) {
    					defer.resolveWith( elements, [ elements ] );
    				}
    			};

    		if ( typeof type !== "string" ) {
    			obj = type;
    			type = undefined;
    		}
    		type = type || "fx";

    		while ( i-- ) {
    			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
    			if ( tmp && tmp.empty ) {
    				count++;
    				tmp.empty.add( resolve );
    			}
    		}
    		resolve();
    		return defer.promise( obj );
    	}
    } );
    var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

    var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


    var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

    var isHiddenWithinTree = function( elem, el ) {

    		// isHiddenWithinTree might be called from jQuery#filter function;
    		// in that case, element will be second argument
    		elem = el || elem;

    		// Inline style trumps all
    		return elem.style.display === "none" ||
    			elem.style.display === "" &&

    			// Otherwise, check computed style
    			// Support: Firefox <=43 - 45
    			// Disconnected elements can have computed display: none, so first confirm that elem is
    			// in the document.
    			jQuery.contains( elem.ownerDocument, elem ) &&

    			jQuery.css( elem, "display" ) === "none";
    	};

    var swap = function( elem, options, callback, args ) {
    	var ret, name,
    		old = {};

    	// Remember the old values, and insert the new ones
    	for ( name in options ) {
    		old[ name ] = elem.style[ name ];
    		elem.style[ name ] = options[ name ];
    	}

    	ret = callback.apply( elem, args || [] );

    	// Revert the old values
    	for ( name in options ) {
    		elem.style[ name ] = old[ name ];
    	}

    	return ret;
    };




    function adjustCSS( elem, prop, valueParts, tween ) {
    	var adjusted, scale,
    		maxIterations = 20,
    		currentValue = tween ?
    			function() {
    				return tween.cur();
    			} :
    			function() {
    				return jQuery.css( elem, prop, "" );
    			},
    		initial = currentValue(),
    		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

    		// Starting value computation is required for potential unit mismatches
    		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
    			rcssNum.exec( jQuery.css( elem, prop ) );

    	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

    		// Support: Firefox <=54
    		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
    		initial = initial / 2;

    		// Trust units reported by jQuery.css
    		unit = unit || initialInUnit[ 3 ];

    		// Iteratively approximate from a nonzero starting point
    		initialInUnit = +initial || 1;

    		while ( maxIterations-- ) {

    			// Evaluate and update our best guess (doubling guesses that zero out).
    			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
    			jQuery.style( elem, prop, initialInUnit + unit );
    			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
    				maxIterations = 0;
    			}
    			initialInUnit = initialInUnit / scale;

    		}

    		initialInUnit = initialInUnit * 2;
    		jQuery.style( elem, prop, initialInUnit + unit );

    		// Make sure we update the tween properties later on
    		valueParts = valueParts || [];
    	}

    	if ( valueParts ) {
    		initialInUnit = +initialInUnit || +initial || 0;

    		// Apply relative offset (+=/-=) if specified
    		adjusted = valueParts[ 1 ] ?
    			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
    			+valueParts[ 2 ];
    		if ( tween ) {
    			tween.unit = unit;
    			tween.start = initialInUnit;
    			tween.end = adjusted;
    		}
    	}
    	return adjusted;
    }


    var defaultDisplayMap = {};

    function getDefaultDisplay( elem ) {
    	var temp,
    		doc = elem.ownerDocument,
    		nodeName = elem.nodeName,
    		display = defaultDisplayMap[ nodeName ];

    	if ( display ) {
    		return display;
    	}

    	temp = doc.body.appendChild( doc.createElement( nodeName ) );
    	display = jQuery.css( temp, "display" );

    	temp.parentNode.removeChild( temp );

    	if ( display === "none" ) {
    		display = "block";
    	}
    	defaultDisplayMap[ nodeName ] = display;

    	return display;
    }

    function showHide( elements, show ) {
    	var display, elem,
    		values = [],
    		index = 0,
    		length = elements.length;

    	// Determine new display value for elements that need to change
    	for ( ; index < length; index++ ) {
    		elem = elements[ index ];
    		if ( !elem.style ) {
    			continue;
    		}

    		display = elem.style.display;
    		if ( show ) {

    			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
    			// check is required in this first loop unless we have a nonempty display value (either
    			// inline or about-to-be-restored)
    			if ( display === "none" ) {
    				values[ index ] = dataPriv.get( elem, "display" ) || null;
    				if ( !values[ index ] ) {
    					elem.style.display = "";
    				}
    			}
    			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
    				values[ index ] = getDefaultDisplay( elem );
    			}
    		} else {
    			if ( display !== "none" ) {
    				values[ index ] = "none";

    				// Remember what we're overwriting
    				dataPriv.set( elem, "display", display );
    			}
    		}
    	}

    	// Set the display of the elements in a second loop to avoid constant reflow
    	for ( index = 0; index < length; index++ ) {
    		if ( values[ index ] != null ) {
    			elements[ index ].style.display = values[ index ];
    		}
    	}

    	return elements;
    }

    jQuery.fn.extend( {
    	show: function() {
    		return showHide( this, true );
    	},
    	hide: function() {
    		return showHide( this );
    	},
    	toggle: function( state ) {
    		if ( typeof state === "boolean" ) {
    			return state ? this.show() : this.hide();
    		}

    		return this.each( function() {
    			if ( isHiddenWithinTree( this ) ) {
    				jQuery( this ).show();
    			} else {
    				jQuery( this ).hide();
    			}
    		} );
    	}
    } );
    var rcheckableType = ( /^(?:checkbox|radio)$/i );

    var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

    var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



    // We have to close these tags to support XHTML (#13200)
    var wrapMap = {

    	// Support: IE <=9 only
    	option: [ 1, "<select multiple='multiple'>", "</select>" ],

    	// XHTML parsers do not magically insert elements in the
    	// same way that tag soup parsers do. So we cannot shorten
    	// this by omitting <tbody> or other required elements.
    	thead: [ 1, "<table>", "</table>" ],
    	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
    	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
    	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

    	_default: [ 0, "", "" ]
    };

    // Support: IE <=9 only
    wrapMap.optgroup = wrapMap.option;

    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;


    function getAll( context, tag ) {

    	// Support: IE <=9 - 11 only
    	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
    	var ret;

    	if ( typeof context.getElementsByTagName !== "undefined" ) {
    		ret = context.getElementsByTagName( tag || "*" );

    	} else if ( typeof context.querySelectorAll !== "undefined" ) {
    		ret = context.querySelectorAll( tag || "*" );

    	} else {
    		ret = [];
    	}

    	if ( tag === undefined || tag && nodeName( context, tag ) ) {
    		return jQuery.merge( [ context ], ret );
    	}

    	return ret;
    }


    // Mark scripts as having already been evaluated
    function setGlobalEval( elems, refElements ) {
    	var i = 0,
    		l = elems.length;

    	for ( ; i < l; i++ ) {
    		dataPriv.set(
    			elems[ i ],
    			"globalEval",
    			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
    		);
    	}
    }


    var rhtml = /<|&#?\w+;/;

    function buildFragment( elems, context, scripts, selection, ignored ) {
    	var elem, tmp, tag, wrap, contains, j,
    		fragment = context.createDocumentFragment(),
    		nodes = [],
    		i = 0,
    		l = elems.length;

    	for ( ; i < l; i++ ) {
    		elem = elems[ i ];

    		if ( elem || elem === 0 ) {

    			// Add nodes directly
    			if ( toType( elem ) === "object" ) {

    				// Support: Android <=4.0 only, PhantomJS 1 only
    				// push.apply(_, arraylike) throws on ancient WebKit
    				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

    			// Convert non-html into a text node
    			} else if ( !rhtml.test( elem ) ) {
    				nodes.push( context.createTextNode( elem ) );

    			// Convert html into DOM nodes
    			} else {
    				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

    				// Deserialize a standard representation
    				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
    				wrap = wrapMap[ tag ] || wrapMap._default;
    				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

    				// Descend through wrappers to the right content
    				j = wrap[ 0 ];
    				while ( j-- ) {
    					tmp = tmp.lastChild;
    				}

    				// Support: Android <=4.0 only, PhantomJS 1 only
    				// push.apply(_, arraylike) throws on ancient WebKit
    				jQuery.merge( nodes, tmp.childNodes );

    				// Remember the top-level container
    				tmp = fragment.firstChild;

    				// Ensure the created nodes are orphaned (#12392)
    				tmp.textContent = "";
    			}
    		}
    	}

    	// Remove wrapper from fragment
    	fragment.textContent = "";

    	i = 0;
    	while ( ( elem = nodes[ i++ ] ) ) {

    		// Skip elements already in the context collection (trac-4087)
    		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
    			if ( ignored ) {
    				ignored.push( elem );
    			}
    			continue;
    		}

    		contains = jQuery.contains( elem.ownerDocument, elem );

    		// Append to fragment
    		tmp = getAll( fragment.appendChild( elem ), "script" );

    		// Preserve script evaluation history
    		if ( contains ) {
    			setGlobalEval( tmp );
    		}

    		// Capture executables
    		if ( scripts ) {
    			j = 0;
    			while ( ( elem = tmp[ j++ ] ) ) {
    				if ( rscriptType.test( elem.type || "" ) ) {
    					scripts.push( elem );
    				}
    			}
    		}
    	}

    	return fragment;
    }


    ( function() {
    	var fragment = document.createDocumentFragment(),
    		div = fragment.appendChild( document.createElement( "div" ) ),
    		input = document.createElement( "input" );

    	// Support: Android 4.0 - 4.3 only
    	// Check state lost if the name is set (#11217)
    	// Support: Windows Web Apps (WWA)
    	// `name` and `type` must use .setAttribute for WWA (#14901)
    	input.setAttribute( "type", "radio" );
    	input.setAttribute( "checked", "checked" );
    	input.setAttribute( "name", "t" );

    	div.appendChild( input );

    	// Support: Android <=4.1 only
    	// Older WebKit doesn't clone checked state correctly in fragments
    	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

    	// Support: IE <=11 only
    	// Make sure textarea (and checkbox) defaultValue is properly cloned
    	div.innerHTML = "<textarea>x</textarea>";
    	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
    } )();
    var documentElement = document.documentElement;



    var
    	rkeyEvent = /^key/,
    	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

    function returnTrue() {
    	return true;
    }

    function returnFalse() {
    	return false;
    }

    // Support: IE <=9 only
    // See #13393 for more info
    function safeActiveElement() {
    	try {
    		return document.activeElement;
    	} catch ( err ) { }
    }

    function on( elem, types, selector, data, fn, one ) {
    	var origFn, type;

    	// Types can be a map of types/handlers
    	if ( typeof types === "object" ) {

    		// ( types-Object, selector, data )
    		if ( typeof selector !== "string" ) {

    			// ( types-Object, data )
    			data = data || selector;
    			selector = undefined;
    		}
    		for ( type in types ) {
    			on( elem, type, selector, data, types[ type ], one );
    		}
    		return elem;
    	}

    	if ( data == null && fn == null ) {

    		// ( types, fn )
    		fn = selector;
    		data = selector = undefined;
    	} else if ( fn == null ) {
    		if ( typeof selector === "string" ) {

    			// ( types, selector, fn )
    			fn = data;
    			data = undefined;
    		} else {

    			// ( types, data, fn )
    			fn = data;
    			data = selector;
    			selector = undefined;
    		}
    	}
    	if ( fn === false ) {
    		fn = returnFalse;
    	} else if ( !fn ) {
    		return elem;
    	}

    	if ( one === 1 ) {
    		origFn = fn;
    		fn = function( event ) {

    			// Can use an empty set, since event contains the info
    			jQuery().off( event );
    			return origFn.apply( this, arguments );
    		};

    		// Use same guid so caller can remove using origFn
    		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
    	}
    	return elem.each( function() {
    		jQuery.event.add( this, types, fn, data, selector );
    	} );
    }

    /*
     * Helper functions for managing events -- not part of the public interface.
     * Props to Dean Edwards' addEvent library for many of the ideas.
     */
    jQuery.event = {

    	global: {},

    	add: function( elem, types, handler, data, selector ) {

    		var handleObjIn, eventHandle, tmp,
    			events, t, handleObj,
    			special, handlers, type, namespaces, origType,
    			elemData = dataPriv.get( elem );

    		// Don't attach events to noData or text/comment nodes (but allow plain objects)
    		if ( !elemData ) {
    			return;
    		}

    		// Caller can pass in an object of custom data in lieu of the handler
    		if ( handler.handler ) {
    			handleObjIn = handler;
    			handler = handleObjIn.handler;
    			selector = handleObjIn.selector;
    		}

    		// Ensure that invalid selectors throw exceptions at attach time
    		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
    		if ( selector ) {
    			jQuery.find.matchesSelector( documentElement, selector );
    		}

    		// Make sure that the handler has a unique ID, used to find/remove it later
    		if ( !handler.guid ) {
    			handler.guid = jQuery.guid++;
    		}

    		// Init the element's event structure and main handler, if this is the first
    		if ( !( events = elemData.events ) ) {
    			events = elemData.events = {};
    		}
    		if ( !( eventHandle = elemData.handle ) ) {
    			eventHandle = elemData.handle = function( e ) {

    				// Discard the second event of a jQuery.event.trigger() and
    				// when an event is called after a page has unloaded
    				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
    					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
    			};
    		}

    		// Handle multiple events separated by a space
    		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
    		t = types.length;
    		while ( t-- ) {
    			tmp = rtypenamespace.exec( types[ t ] ) || [];
    			type = origType = tmp[ 1 ];
    			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

    			// There *must* be a type, no attaching namespace-only handlers
    			if ( !type ) {
    				continue;
    			}

    			// If event changes its type, use the special event handlers for the changed type
    			special = jQuery.event.special[ type ] || {};

    			// If selector defined, determine special event api type, otherwise given type
    			type = ( selector ? special.delegateType : special.bindType ) || type;

    			// Update special based on newly reset type
    			special = jQuery.event.special[ type ] || {};

    			// handleObj is passed to all event handlers
    			handleObj = jQuery.extend( {
    				type: type,
    				origType: origType,
    				data: data,
    				handler: handler,
    				guid: handler.guid,
    				selector: selector,
    				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
    				namespace: namespaces.join( "." )
    			}, handleObjIn );

    			// Init the event handler queue if we're the first
    			if ( !( handlers = events[ type ] ) ) {
    				handlers = events[ type ] = [];
    				handlers.delegateCount = 0;

    				// Only use addEventListener if the special events handler returns false
    				if ( !special.setup ||
    					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

    					if ( elem.addEventListener ) {
    						elem.addEventListener( type, eventHandle );
    					}
    				}
    			}

    			if ( special.add ) {
    				special.add.call( elem, handleObj );

    				if ( !handleObj.handler.guid ) {
    					handleObj.handler.guid = handler.guid;
    				}
    			}

    			// Add to the element's handler list, delegates in front
    			if ( selector ) {
    				handlers.splice( handlers.delegateCount++, 0, handleObj );
    			} else {
    				handlers.push( handleObj );
    			}

    			// Keep track of which events have ever been used, for event optimization
    			jQuery.event.global[ type ] = true;
    		}

    	},

    	// Detach an event or set of events from an element
    	remove: function( elem, types, handler, selector, mappedTypes ) {

    		var j, origCount, tmp,
    			events, t, handleObj,
    			special, handlers, type, namespaces, origType,
    			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

    		if ( !elemData || !( events = elemData.events ) ) {
    			return;
    		}

    		// Once for each type.namespace in types; type may be omitted
    		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
    		t = types.length;
    		while ( t-- ) {
    			tmp = rtypenamespace.exec( types[ t ] ) || [];
    			type = origType = tmp[ 1 ];
    			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

    			// Unbind all events (on this namespace, if provided) for the element
    			if ( !type ) {
    				for ( type in events ) {
    					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
    				}
    				continue;
    			}

    			special = jQuery.event.special[ type ] || {};
    			type = ( selector ? special.delegateType : special.bindType ) || type;
    			handlers = events[ type ] || [];
    			tmp = tmp[ 2 ] &&
    				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

    			// Remove matching events
    			origCount = j = handlers.length;
    			while ( j-- ) {
    				handleObj = handlers[ j ];

    				if ( ( mappedTypes || origType === handleObj.origType ) &&
    					( !handler || handler.guid === handleObj.guid ) &&
    					( !tmp || tmp.test( handleObj.namespace ) ) &&
    					( !selector || selector === handleObj.selector ||
    						selector === "**" && handleObj.selector ) ) {
    					handlers.splice( j, 1 );

    					if ( handleObj.selector ) {
    						handlers.delegateCount--;
    					}
    					if ( special.remove ) {
    						special.remove.call( elem, handleObj );
    					}
    				}
    			}

    			// Remove generic event handler if we removed something and no more handlers exist
    			// (avoids potential for endless recursion during removal of special event handlers)
    			if ( origCount && !handlers.length ) {
    				if ( !special.teardown ||
    					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

    					jQuery.removeEvent( elem, type, elemData.handle );
    				}

    				delete events[ type ];
    			}
    		}

    		// Remove data and the expando if it's no longer used
    		if ( jQuery.isEmptyObject( events ) ) {
    			dataPriv.remove( elem, "handle events" );
    		}
    	},

    	dispatch: function( nativeEvent ) {

    		// Make a writable jQuery.Event from the native event object
    		var event = jQuery.event.fix( nativeEvent );

    		var i, j, ret, matched, handleObj, handlerQueue,
    			args = new Array( arguments.length ),
    			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
    			special = jQuery.event.special[ event.type ] || {};

    		// Use the fix-ed jQuery.Event rather than the (read-only) native event
    		args[ 0 ] = event;

    		for ( i = 1; i < arguments.length; i++ ) {
    			args[ i ] = arguments[ i ];
    		}

    		event.delegateTarget = this;

    		// Call the preDispatch hook for the mapped type, and let it bail if desired
    		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
    			return;
    		}

    		// Determine handlers
    		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

    		// Run delegates first; they may want to stop propagation beneath us
    		i = 0;
    		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
    			event.currentTarget = matched.elem;

    			j = 0;
    			while ( ( handleObj = matched.handlers[ j++ ] ) &&
    				!event.isImmediatePropagationStopped() ) {

    				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
    				// a subset or equal to those in the bound event (both can have no namespace).
    				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

    					event.handleObj = handleObj;
    					event.data = handleObj.data;

    					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
    						handleObj.handler ).apply( matched.elem, args );

    					if ( ret !== undefined ) {
    						if ( ( event.result = ret ) === false ) {
    							event.preventDefault();
    							event.stopPropagation();
    						}
    					}
    				}
    			}
    		}

    		// Call the postDispatch hook for the mapped type
    		if ( special.postDispatch ) {
    			special.postDispatch.call( this, event );
    		}

    		return event.result;
    	},

    	handlers: function( event, handlers ) {
    		var i, handleObj, sel, matchedHandlers, matchedSelectors,
    			handlerQueue = [],
    			delegateCount = handlers.delegateCount,
    			cur = event.target;

    		// Find delegate handlers
    		if ( delegateCount &&

    			// Support: IE <=9
    			// Black-hole SVG <use> instance trees (trac-13180)
    			cur.nodeType &&

    			// Support: Firefox <=42
    			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
    			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
    			// Support: IE 11 only
    			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
    			!( event.type === "click" && event.button >= 1 ) ) {

    			for ( ; cur !== this; cur = cur.parentNode || this ) {

    				// Don't check non-elements (#13208)
    				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
    				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
    					matchedHandlers = [];
    					matchedSelectors = {};
    					for ( i = 0; i < delegateCount; i++ ) {
    						handleObj = handlers[ i ];

    						// Don't conflict with Object.prototype properties (#13203)
    						sel = handleObj.selector + " ";

    						if ( matchedSelectors[ sel ] === undefined ) {
    							matchedSelectors[ sel ] = handleObj.needsContext ?
    								jQuery( sel, this ).index( cur ) > -1 :
    								jQuery.find( sel, this, null, [ cur ] ).length;
    						}
    						if ( matchedSelectors[ sel ] ) {
    							matchedHandlers.push( handleObj );
    						}
    					}
    					if ( matchedHandlers.length ) {
    						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
    					}
    				}
    			}
    		}

    		// Add the remaining (directly-bound) handlers
    		cur = this;
    		if ( delegateCount < handlers.length ) {
    			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
    		}

    		return handlerQueue;
    	},

    	addProp: function( name, hook ) {
    		Object.defineProperty( jQuery.Event.prototype, name, {
    			enumerable: true,
    			configurable: true,

    			get: isFunction( hook ) ?
    				function() {
    					if ( this.originalEvent ) {
    							return hook( this.originalEvent );
    					}
    				} :
    				function() {
    					if ( this.originalEvent ) {
    							return this.originalEvent[ name ];
    					}
    				},

    			set: function( value ) {
    				Object.defineProperty( this, name, {
    					enumerable: true,
    					configurable: true,
    					writable: true,
    					value: value
    				} );
    			}
    		} );
    	},

    	fix: function( originalEvent ) {
    		return originalEvent[ jQuery.expando ] ?
    			originalEvent :
    			new jQuery.Event( originalEvent );
    	},

    	special: {
    		load: {

    			// Prevent triggered image.load events from bubbling to window.load
    			noBubble: true
    		},
    		focus: {

    			// Fire native event if possible so blur/focus sequence is correct
    			trigger: function() {
    				if ( this !== safeActiveElement() && this.focus ) {
    					this.focus();
    					return false;
    				}
    			},
    			delegateType: "focusin"
    		},
    		blur: {
    			trigger: function() {
    				if ( this === safeActiveElement() && this.blur ) {
    					this.blur();
    					return false;
    				}
    			},
    			delegateType: "focusout"
    		},
    		click: {

    			// For checkbox, fire native event so checked state will be right
    			trigger: function() {
    				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
    					this.click();
    					return false;
    				}
    			},

    			// For cross-browser consistency, don't fire native .click() on links
    			_default: function( event ) {
    				return nodeName( event.target, "a" );
    			}
    		},

    		beforeunload: {
    			postDispatch: function( event ) {

    				// Support: Firefox 20+
    				// Firefox doesn't alert if the returnValue field is not set.
    				if ( event.result !== undefined && event.originalEvent ) {
    					event.originalEvent.returnValue = event.result;
    				}
    			}
    		}
    	}
    };

    jQuery.removeEvent = function( elem, type, handle ) {

    	// This "if" is needed for plain objects
    	if ( elem.removeEventListener ) {
    		elem.removeEventListener( type, handle );
    	}
    };

    jQuery.Event = function( src, props ) {

    	// Allow instantiation without the 'new' keyword
    	if ( !( this instanceof jQuery.Event ) ) {
    		return new jQuery.Event( src, props );
    	}

    	// Event object
    	if ( src && src.type ) {
    		this.originalEvent = src;
    		this.type = src.type;

    		// Events bubbling up the document may have been marked as prevented
    		// by a handler lower down the tree; reflect the correct value.
    		this.isDefaultPrevented = src.defaultPrevented ||
    				src.defaultPrevented === undefined &&

    				// Support: Android <=2.3 only
    				src.returnValue === false ?
    			returnTrue :
    			returnFalse;

    		// Create target properties
    		// Support: Safari <=6 - 7 only
    		// Target should not be a text node (#504, #13143)
    		this.target = ( src.target && src.target.nodeType === 3 ) ?
    			src.target.parentNode :
    			src.target;

    		this.currentTarget = src.currentTarget;
    		this.relatedTarget = src.relatedTarget;

    	// Event type
    	} else {
    		this.type = src;
    	}

    	// Put explicitly provided properties onto the event object
    	if ( props ) {
    		jQuery.extend( this, props );
    	}

    	// Create a timestamp if incoming event doesn't have one
    	this.timeStamp = src && src.timeStamp || Date.now();

    	// Mark it as fixed
    	this[ jQuery.expando ] = true;
    };

    // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
    // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
    	constructor: jQuery.Event,
    	isDefaultPrevented: returnFalse,
    	isPropagationStopped: returnFalse,
    	isImmediatePropagationStopped: returnFalse,
    	isSimulated: false,

    	preventDefault: function() {
    		var e = this.originalEvent;

    		this.isDefaultPrevented = returnTrue;

    		if ( e && !this.isSimulated ) {
    			e.preventDefault();
    		}
    	},
    	stopPropagation: function() {
    		var e = this.originalEvent;

    		this.isPropagationStopped = returnTrue;

    		if ( e && !this.isSimulated ) {
    			e.stopPropagation();
    		}
    	},
    	stopImmediatePropagation: function() {
    		var e = this.originalEvent;

    		this.isImmediatePropagationStopped = returnTrue;

    		if ( e && !this.isSimulated ) {
    			e.stopImmediatePropagation();
    		}

    		this.stopPropagation();
    	}
    };

    // Includes all common event props including KeyEvent and MouseEvent specific props
    jQuery.each( {
    	altKey: true,
    	bubbles: true,
    	cancelable: true,
    	changedTouches: true,
    	ctrlKey: true,
    	detail: true,
    	eventPhase: true,
    	metaKey: true,
    	pageX: true,
    	pageY: true,
    	shiftKey: true,
    	view: true,
    	"char": true,
    	charCode: true,
    	key: true,
    	keyCode: true,
    	button: true,
    	buttons: true,
    	clientX: true,
    	clientY: true,
    	offsetX: true,
    	offsetY: true,
    	pointerId: true,
    	pointerType: true,
    	screenX: true,
    	screenY: true,
    	targetTouches: true,
    	toElement: true,
    	touches: true,

    	which: function( event ) {
    		var button = event.button;

    		// Add which for key events
    		if ( event.which == null && rkeyEvent.test( event.type ) ) {
    			return event.charCode != null ? event.charCode : event.keyCode;
    		}

    		// Add which for click: 1 === left; 2 === middle; 3 === right
    		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
    			if ( button & 1 ) {
    				return 1;
    			}

    			if ( button & 2 ) {
    				return 3;
    			}

    			if ( button & 4 ) {
    				return 2;
    			}

    			return 0;
    		}

    		return event.which;
    	}
    }, jQuery.event.addProp );

    // Create mouseenter/leave events using mouseover/out and event-time checks
    // so that event delegation works in jQuery.
    // Do the same for pointerenter/pointerleave and pointerover/pointerout
    //
    // Support: Safari 7 only
    // Safari sends mouseenter too often; see:
    // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
    // for the description of the bug (it existed in older Chrome versions as well).
    jQuery.each( {
    	mouseenter: "mouseover",
    	mouseleave: "mouseout",
    	pointerenter: "pointerover",
    	pointerleave: "pointerout"
    }, function( orig, fix ) {
    	jQuery.event.special[ orig ] = {
    		delegateType: fix,
    		bindType: fix,

    		handle: function( event ) {
    			var ret,
    				target = this,
    				related = event.relatedTarget,
    				handleObj = event.handleObj;

    			// For mouseenter/leave call the handler if related is outside the target.
    			// NB: No relatedTarget if the mouse left/entered the browser window
    			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
    				event.type = handleObj.origType;
    				ret = handleObj.handler.apply( this, arguments );
    				event.type = fix;
    			}
    			return ret;
    		}
    	};
    } );

    jQuery.fn.extend( {

    	on: function( types, selector, data, fn ) {
    		return on( this, types, selector, data, fn );
    	},
    	one: function( types, selector, data, fn ) {
    		return on( this, types, selector, data, fn, 1 );
    	},
    	off: function( types, selector, fn ) {
    		var handleObj, type;
    		if ( types && types.preventDefault && types.handleObj ) {

    			// ( event )  dispatched jQuery.Event
    			handleObj = types.handleObj;
    			jQuery( types.delegateTarget ).off(
    				handleObj.namespace ?
    					handleObj.origType + "." + handleObj.namespace :
    					handleObj.origType,
    				handleObj.selector,
    				handleObj.handler
    			);
    			return this;
    		}
    		if ( typeof types === "object" ) {

    			// ( types-object [, selector] )
    			for ( type in types ) {
    				this.off( type, selector, types[ type ] );
    			}
    			return this;
    		}
    		if ( selector === false || typeof selector === "function" ) {

    			// ( types [, fn] )
    			fn = selector;
    			selector = undefined;
    		}
    		if ( fn === false ) {
    			fn = returnFalse;
    		}
    		return this.each( function() {
    			jQuery.event.remove( this, types, fn, selector );
    		} );
    	}
    } );


    var

    	/* eslint-disable max-len */

    	// See https://github.com/eslint/eslint/issues/3229
    	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

    	/* eslint-enable */

    	// Support: IE <=10 - 11, Edge 12 - 13 only
    	// In IE/Edge using regex groups here causes severe slowdowns.
    	// See https://connect.microsoft.com/IE/feedback/details/1736512/
    	rnoInnerhtml = /<script|<style|<link/i,

    	// checked="checked" or checked
    	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
    	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    // Prefer a tbody over its parent table for containing new rows
    function manipulationTarget( elem, content ) {
    	if ( nodeName( elem, "table" ) &&
    		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

    		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
    	}

    	return elem;
    }

    // Replace/restore the type attribute of script elements for safe DOM manipulation
    function disableScript( elem ) {
    	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
    	return elem;
    }
    function restoreScript( elem ) {
    	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
    		elem.type = elem.type.slice( 5 );
    	} else {
    		elem.removeAttribute( "type" );
    	}

    	return elem;
    }

    function cloneCopyEvent( src, dest ) {
    	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

    	if ( dest.nodeType !== 1 ) {
    		return;
    	}

    	// 1. Copy private data: events, handlers, etc.
    	if ( dataPriv.hasData( src ) ) {
    		pdataOld = dataPriv.access( src );
    		pdataCur = dataPriv.set( dest, pdataOld );
    		events = pdataOld.events;

    		if ( events ) {
    			delete pdataCur.handle;
    			pdataCur.events = {};

    			for ( type in events ) {
    				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
    					jQuery.event.add( dest, type, events[ type ][ i ] );
    				}
    			}
    		}
    	}

    	// 2. Copy user data
    	if ( dataUser.hasData( src ) ) {
    		udataOld = dataUser.access( src );
    		udataCur = jQuery.extend( {}, udataOld );

    		dataUser.set( dest, udataCur );
    	}
    }

    // Fix IE bugs, see support tests
    function fixInput( src, dest ) {
    	var nodeName = dest.nodeName.toLowerCase();

    	// Fails to persist the checked state of a cloned checkbox or radio button.
    	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
    		dest.checked = src.checked;

    	// Fails to return the selected option to the default selected state when cloning options
    	} else if ( nodeName === "input" || nodeName === "textarea" ) {
    		dest.defaultValue = src.defaultValue;
    	}
    }

    function domManip( collection, args, callback, ignored ) {

    	// Flatten any nested arrays
    	args = concat.apply( [], args );

    	var fragment, first, scripts, hasScripts, node, doc,
    		i = 0,
    		l = collection.length,
    		iNoClone = l - 1,
    		value = args[ 0 ],
    		valueIsFunction = isFunction( value );

    	// We can't cloneNode fragments that contain checked, in WebKit
    	if ( valueIsFunction ||
    			( l > 1 && typeof value === "string" &&
    				!support.checkClone && rchecked.test( value ) ) ) {
    		return collection.each( function( index ) {
    			var self = collection.eq( index );
    			if ( valueIsFunction ) {
    				args[ 0 ] = value.call( this, index, self.html() );
    			}
    			domManip( self, args, callback, ignored );
    		} );
    	}

    	if ( l ) {
    		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
    		first = fragment.firstChild;

    		if ( fragment.childNodes.length === 1 ) {
    			fragment = first;
    		}

    		// Require either new content or an interest in ignored elements to invoke the callback
    		if ( first || ignored ) {
    			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
    			hasScripts = scripts.length;

    			// Use the original fragment for the last item
    			// instead of the first because it can end up
    			// being emptied incorrectly in certain situations (#8070).
    			for ( ; i < l; i++ ) {
    				node = fragment;

    				if ( i !== iNoClone ) {
    					node = jQuery.clone( node, true, true );

    					// Keep references to cloned scripts for later restoration
    					if ( hasScripts ) {

    						// Support: Android <=4.0 only, PhantomJS 1 only
    						// push.apply(_, arraylike) throws on ancient WebKit
    						jQuery.merge( scripts, getAll( node, "script" ) );
    					}
    				}

    				callback.call( collection[ i ], node, i );
    			}

    			if ( hasScripts ) {
    				doc = scripts[ scripts.length - 1 ].ownerDocument;

    				// Reenable scripts
    				jQuery.map( scripts, restoreScript );

    				// Evaluate executable scripts on first document insertion
    				for ( i = 0; i < hasScripts; i++ ) {
    					node = scripts[ i ];
    					if ( rscriptType.test( node.type || "" ) &&
    						!dataPriv.access( node, "globalEval" ) &&
    						jQuery.contains( doc, node ) ) {

    						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

    							// Optional AJAX dependency, but won't run scripts if not present
    							if ( jQuery._evalUrl ) {
    								jQuery._evalUrl( node.src );
    							}
    						} else {
    							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
    						}
    					}
    				}
    			}
    		}
    	}

    	return collection;
    }

    function remove( elem, selector, keepData ) {
    	var node,
    		nodes = selector ? jQuery.filter( selector, elem ) : elem,
    		i = 0;

    	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
    		if ( !keepData && node.nodeType === 1 ) {
    			jQuery.cleanData( getAll( node ) );
    		}

    		if ( node.parentNode ) {
    			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
    				setGlobalEval( getAll( node, "script" ) );
    			}
    			node.parentNode.removeChild( node );
    		}
    	}

    	return elem;
    }

    jQuery.extend( {
    	htmlPrefilter: function( html ) {
    		return html.replace( rxhtmlTag, "<$1></$2>" );
    	},

    	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
    		var i, l, srcElements, destElements,
    			clone = elem.cloneNode( true ),
    			inPage = jQuery.contains( elem.ownerDocument, elem );

    		// Fix IE cloning issues
    		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
    				!jQuery.isXMLDoc( elem ) ) {

    			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
    			destElements = getAll( clone );
    			srcElements = getAll( elem );

    			for ( i = 0, l = srcElements.length; i < l; i++ ) {
    				fixInput( srcElements[ i ], destElements[ i ] );
    			}
    		}

    		// Copy the events from the original to the clone
    		if ( dataAndEvents ) {
    			if ( deepDataAndEvents ) {
    				srcElements = srcElements || getAll( elem );
    				destElements = destElements || getAll( clone );

    				for ( i = 0, l = srcElements.length; i < l; i++ ) {
    					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
    				}
    			} else {
    				cloneCopyEvent( elem, clone );
    			}
    		}

    		// Preserve script evaluation history
    		destElements = getAll( clone, "script" );
    		if ( destElements.length > 0 ) {
    			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
    		}

    		// Return the cloned set
    		return clone;
    	},

    	cleanData: function( elems ) {
    		var data, elem, type,
    			special = jQuery.event.special,
    			i = 0;

    		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
    			if ( acceptData( elem ) ) {
    				if ( ( data = elem[ dataPriv.expando ] ) ) {
    					if ( data.events ) {
    						for ( type in data.events ) {
    							if ( special[ type ] ) {
    								jQuery.event.remove( elem, type );

    							// This is a shortcut to avoid jQuery.event.remove's overhead
    							} else {
    								jQuery.removeEvent( elem, type, data.handle );
    							}
    						}
    					}

    					// Support: Chrome <=35 - 45+
    					// Assign undefined instead of using delete, see Data#remove
    					elem[ dataPriv.expando ] = undefined;
    				}
    				if ( elem[ dataUser.expando ] ) {

    					// Support: Chrome <=35 - 45+
    					// Assign undefined instead of using delete, see Data#remove
    					elem[ dataUser.expando ] = undefined;
    				}
    			}
    		}
    	}
    } );

    jQuery.fn.extend( {
    	detach: function( selector ) {
    		return remove( this, selector, true );
    	},

    	remove: function( selector ) {
    		return remove( this, selector );
    	},

    	text: function( value ) {
    		return access( this, function( value ) {
    			return value === undefined ?
    				jQuery.text( this ) :
    				this.empty().each( function() {
    					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
    						this.textContent = value;
    					}
    				} );
    		}, null, value, arguments.length );
    	},

    	append: function() {
    		return domManip( this, arguments, function( elem ) {
    			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
    				var target = manipulationTarget( this, elem );
    				target.appendChild( elem );
    			}
    		} );
    	},

    	prepend: function() {
    		return domManip( this, arguments, function( elem ) {
    			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
    				var target = manipulationTarget( this, elem );
    				target.insertBefore( elem, target.firstChild );
    			}
    		} );
    	},

    	before: function() {
    		return domManip( this, arguments, function( elem ) {
    			if ( this.parentNode ) {
    				this.parentNode.insertBefore( elem, this );
    			}
    		} );
    	},

    	after: function() {
    		return domManip( this, arguments, function( elem ) {
    			if ( this.parentNode ) {
    				this.parentNode.insertBefore( elem, this.nextSibling );
    			}
    		} );
    	},

    	empty: function() {
    		var elem,
    			i = 0;

    		for ( ; ( elem = this[ i ] ) != null; i++ ) {
    			if ( elem.nodeType === 1 ) {

    				// Prevent memory leaks
    				jQuery.cleanData( getAll( elem, false ) );

    				// Remove any remaining nodes
    				elem.textContent = "";
    			}
    		}

    		return this;
    	},

    	clone: function( dataAndEvents, deepDataAndEvents ) {
    		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
    		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

    		return this.map( function() {
    			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
    		} );
    	},

    	html: function( value ) {
    		return access( this, function( value ) {
    			var elem = this[ 0 ] || {},
    				i = 0,
    				l = this.length;

    			if ( value === undefined && elem.nodeType === 1 ) {
    				return elem.innerHTML;
    			}

    			// See if we can take a shortcut and just use innerHTML
    			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
    				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

    				value = jQuery.htmlPrefilter( value );

    				try {
    					for ( ; i < l; i++ ) {
    						elem = this[ i ] || {};

    						// Remove element nodes and prevent memory leaks
    						if ( elem.nodeType === 1 ) {
    							jQuery.cleanData( getAll( elem, false ) );
    							elem.innerHTML = value;
    						}
    					}

    					elem = 0;

    				// If using innerHTML throws an exception, use the fallback method
    				} catch ( e ) {}
    			}

    			if ( elem ) {
    				this.empty().append( value );
    			}
    		}, null, value, arguments.length );
    	},

    	replaceWith: function() {
    		var ignored = [];

    		// Make the changes, replacing each non-ignored context element with the new content
    		return domManip( this, arguments, function( elem ) {
    			var parent = this.parentNode;

    			if ( jQuery.inArray( this, ignored ) < 0 ) {
    				jQuery.cleanData( getAll( this ) );
    				if ( parent ) {
    					parent.replaceChild( elem, this );
    				}
    			}

    		// Force callback invocation
    		}, ignored );
    	}
    } );

    jQuery.each( {
    	appendTo: "append",
    	prependTo: "prepend",
    	insertBefore: "before",
    	insertAfter: "after",
    	replaceAll: "replaceWith"
    }, function( name, original ) {
    	jQuery.fn[ name ] = function( selector ) {
    		var elems,
    			ret = [],
    			insert = jQuery( selector ),
    			last = insert.length - 1,
    			i = 0;

    		for ( ; i <= last; i++ ) {
    			elems = i === last ? this : this.clone( true );
    			jQuery( insert[ i ] )[ original ]( elems );

    			// Support: Android <=4.0 only, PhantomJS 1 only
    			// .get() because push.apply(_, arraylike) throws on ancient WebKit
    			push.apply( ret, elems.get() );
    		}

    		return this.pushStack( ret );
    	};
    } );
    var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

    var getStyles = function( elem ) {

    		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    		// IE throws on elements created in popups
    		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    		var view = elem.ownerDocument.defaultView;

    		if ( !view || !view.opener ) {
    			view = window;
    		}

    		return view.getComputedStyle( elem );
    	};

    var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



    ( function() {

    	// Executing both pixelPosition & boxSizingReliable tests require only one layout
    	// so they're executed at the same time to save the second computation.
    	function computeStyleTests() {

    		// This is a singleton, we need to execute it only once
    		if ( !div ) {
    			return;
    		}

    		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
    			"margin-top:1px;padding:0;border:0";
    		div.style.cssText =
    			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
    			"margin:auto;border:1px;padding:1px;" +
    			"width:60%;top:1%";
    		documentElement.appendChild( container ).appendChild( div );

    		var divStyle = window.getComputedStyle( div );
    		pixelPositionVal = divStyle.top !== "1%";

    		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
    		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

    		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
    		// Some styles come back with percentage values, even though they shouldn't
    		div.style.right = "60%";
    		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

    		// Support: IE 9 - 11 only
    		// Detect misreporting of content dimensions for box-sizing:border-box elements
    		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

    		// Support: IE 9 only
    		// Detect overflow:scroll screwiness (gh-3699)
    		div.style.position = "absolute";
    		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

    		documentElement.removeChild( container );

    		// Nullify the div so it wouldn't be stored in the memory and
    		// it will also be a sign that checks already performed
    		div = null;
    	}

    	function roundPixelMeasures( measure ) {
    		return Math.round( parseFloat( measure ) );
    	}

    	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
    		reliableMarginLeftVal,
    		container = document.createElement( "div" ),
    		div = document.createElement( "div" );

    	// Finish early in limited (non-browser) environments
    	if ( !div.style ) {
    		return;
    	}

    	// Support: IE <=9 - 11 only
    	// Style of cloned element affects source element cloned (#8908)
    	div.style.backgroundClip = "content-box";
    	div.cloneNode( true ).style.backgroundClip = "";
    	support.clearCloneStyle = div.style.backgroundClip === "content-box";

    	jQuery.extend( support, {
    		boxSizingReliable: function() {
    			computeStyleTests();
    			return boxSizingReliableVal;
    		},
    		pixelBoxStyles: function() {
    			computeStyleTests();
    			return pixelBoxStylesVal;
    		},
    		pixelPosition: function() {
    			computeStyleTests();
    			return pixelPositionVal;
    		},
    		reliableMarginLeft: function() {
    			computeStyleTests();
    			return reliableMarginLeftVal;
    		},
    		scrollboxSize: function() {
    			computeStyleTests();
    			return scrollboxSizeVal;
    		}
    	} );
    } )();


    function curCSS( elem, name, computed ) {
    	var width, minWidth, maxWidth, ret,

    		// Support: Firefox 51+
    		// Retrieving style before computed somehow
    		// fixes an issue with getting wrong values
    		// on detached elements
    		style = elem.style;

    	computed = computed || getStyles( elem );

    	// getPropertyValue is needed for:
    	//   .css('filter') (IE 9 only, #12537)
    	//   .css('--customProperty) (#3144)
    	if ( computed ) {
    		ret = computed.getPropertyValue( name ) || computed[ name ];

    		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
    			ret = jQuery.style( elem, name );
    		}

    		// A tribute to the "awesome hack by Dean Edwards"
    		// Android Browser returns percentage for some values,
    		// but width seems to be reliably pixels.
    		// This is against the CSSOM draft spec:
    		// https://drafts.csswg.org/cssom/#resolved-values
    		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

    			// Remember the original values
    			width = style.width;
    			minWidth = style.minWidth;
    			maxWidth = style.maxWidth;

    			// Put in the new values to get a computed value out
    			style.minWidth = style.maxWidth = style.width = ret;
    			ret = computed.width;

    			// Revert the changed values
    			style.width = width;
    			style.minWidth = minWidth;
    			style.maxWidth = maxWidth;
    		}
    	}

    	return ret !== undefined ?

    		// Support: IE <=9 - 11 only
    		// IE returns zIndex value as an integer.
    		ret + "" :
    		ret;
    }


    function addGetHookIf( conditionFn, hookFn ) {

    	// Define the hook, we'll check on the first run if it's really needed.
    	return {
    		get: function() {
    			if ( conditionFn() ) {

    				// Hook not needed (or it's not possible to use it due
    				// to missing dependency), remove it.
    				delete this.get;
    				return;
    			}

    			// Hook needed; redefine it so that the support test is not executed again.
    			return ( this.get = hookFn ).apply( this, arguments );
    		}
    	};
    }


    var

    	// Swappable if display is none or starts with table
    	// except "table", "table-cell", or "table-caption"
    	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
    	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
    	rcustomProp = /^--/,
    	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
    	cssNormalTransform = {
    		letterSpacing: "0",
    		fontWeight: "400"
    	},

    	cssPrefixes = [ "Webkit", "Moz", "ms" ],
    	emptyStyle = document.createElement( "div" ).style;

    // Return a css property mapped to a potentially vendor prefixed property
    function vendorPropName( name ) {

    	// Shortcut for names that are not vendor prefixed
    	if ( name in emptyStyle ) {
    		return name;
    	}

    	// Check for vendor prefixed names
    	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
    		i = cssPrefixes.length;

    	while ( i-- ) {
    		name = cssPrefixes[ i ] + capName;
    		if ( name in emptyStyle ) {
    			return name;
    		}
    	}
    }

    // Return a property mapped along what jQuery.cssProps suggests or to
    // a vendor prefixed property.
    function finalPropName( name ) {
    	var ret = jQuery.cssProps[ name ];
    	if ( !ret ) {
    		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
    	}
    	return ret;
    }

    function setPositiveNumber( elem, value, subtract ) {

    	// Any relative (+/-) values have already been
    	// normalized at this point
    	var matches = rcssNum.exec( value );
    	return matches ?

    		// Guard against undefined "subtract", e.g., when used as in cssHooks
    		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
    		value;
    }

    function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
    	var i = dimension === "width" ? 1 : 0,
    		extra = 0,
    		delta = 0;

    	// Adjustment may not be necessary
    	if ( box === ( isBorderBox ? "border" : "content" ) ) {
    		return 0;
    	}

    	for ( ; i < 4; i += 2 ) {

    		// Both box models exclude margin
    		if ( box === "margin" ) {
    			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
    		}

    		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
    		if ( !isBorderBox ) {

    			// Add padding
    			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

    			// For "border" or "margin", add border
    			if ( box !== "padding" ) {
    				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

    			// But still keep track of it otherwise
    			} else {
    				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
    			}

    		// If we get here with a border-box (content + padding + border), we're seeking "content" or
    		// "padding" or "margin"
    		} else {

    			// For "content", subtract padding
    			if ( box === "content" ) {
    				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
    			}

    			// For "content" or "padding", subtract border
    			if ( box !== "margin" ) {
    				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
    			}
    		}
    	}

    	// Account for positive content-box scroll gutter when requested by providing computedVal
    	if ( !isBorderBox && computedVal >= 0 ) {

    		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
    		// Assuming integer scroll gutter, subtract the rest and round down
    		delta += Math.max( 0, Math.ceil(
    			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
    			computedVal -
    			delta -
    			extra -
    			0.5
    		) );
    	}

    	return delta;
    }

    function getWidthOrHeight( elem, dimension, extra ) {

    	// Start with computed style
    	var styles = getStyles( elem ),
    		val = curCSS( elem, dimension, styles ),
    		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
    		valueIsBorderBox = isBorderBox;

    	// Support: Firefox <=54
    	// Return a confounding non-pixel value or feign ignorance, as appropriate.
    	if ( rnumnonpx.test( val ) ) {
    		if ( !extra ) {
    			return val;
    		}
    		val = "auto";
    	}

    	// Check for style in case a browser which returns unreliable values
    	// for getComputedStyle silently falls back to the reliable elem.style
    	valueIsBorderBox = valueIsBorderBox &&
    		( support.boxSizingReliable() || val === elem.style[ dimension ] );

    	// Fall back to offsetWidth/offsetHeight when value is "auto"
    	// This happens for inline elements with no explicit setting (gh-3571)
    	// Support: Android <=4.1 - 4.3 only
    	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
    	if ( val === "auto" ||
    		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

    		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

    		// offsetWidth/offsetHeight provide border-box values
    		valueIsBorderBox = true;
    	}

    	// Normalize "" and auto
    	val = parseFloat( val ) || 0;

    	// Adjust for the element's box model
    	return ( val +
    		boxModelAdjustment(
    			elem,
    			dimension,
    			extra || ( isBorderBox ? "border" : "content" ),
    			valueIsBorderBox,
    			styles,

    			// Provide the current computed size to request scroll gutter calculation (gh-3589)
    			val
    		)
    	) + "px";
    }

    jQuery.extend( {

    	// Add in style property hooks for overriding the default
    	// behavior of getting and setting a style property
    	cssHooks: {
    		opacity: {
    			get: function( elem, computed ) {
    				if ( computed ) {

    					// We should always get a number back from opacity
    					var ret = curCSS( elem, "opacity" );
    					return ret === "" ? "1" : ret;
    				}
    			}
    		}
    	},

    	// Don't automatically add "px" to these possibly-unitless properties
    	cssNumber: {
    		"animationIterationCount": true,
    		"columnCount": true,
    		"fillOpacity": true,
    		"flexGrow": true,
    		"flexShrink": true,
    		"fontWeight": true,
    		"lineHeight": true,
    		"opacity": true,
    		"order": true,
    		"orphans": true,
    		"widows": true,
    		"zIndex": true,
    		"zoom": true
    	},

    	// Add in properties whose names you wish to fix before
    	// setting or getting the value
    	cssProps: {},

    	// Get and set the style property on a DOM Node
    	style: function( elem, name, value, extra ) {

    		// Don't set styles on text and comment nodes
    		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
    			return;
    		}

    		// Make sure that we're working with the right name
    		var ret, type, hooks,
    			origName = camelCase( name ),
    			isCustomProp = rcustomProp.test( name ),
    			style = elem.style;

    		// Make sure that we're working with the right name. We don't
    		// want to query the value if it is a CSS custom property
    		// since they are user-defined.
    		if ( !isCustomProp ) {
    			name = finalPropName( origName );
    		}

    		// Gets hook for the prefixed version, then unprefixed version
    		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

    		// Check if we're setting a value
    		if ( value !== undefined ) {
    			type = typeof value;

    			// Convert "+=" or "-=" to relative numbers (#7345)
    			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
    				value = adjustCSS( elem, name, ret );

    				// Fixes bug #9237
    				type = "number";
    			}

    			// Make sure that null and NaN values aren't set (#7116)
    			if ( value == null || value !== value ) {
    				return;
    			}

    			// If a number was passed in, add the unit (except for certain CSS properties)
    			if ( type === "number" ) {
    				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
    			}

    			// background-* props affect original clone's values
    			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
    				style[ name ] = "inherit";
    			}

    			// If a hook was provided, use that value, otherwise just set the specified value
    			if ( !hooks || !( "set" in hooks ) ||
    				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

    				if ( isCustomProp ) {
    					style.setProperty( name, value );
    				} else {
    					style[ name ] = value;
    				}
    			}

    		} else {

    			// If a hook was provided get the non-computed value from there
    			if ( hooks && "get" in hooks &&
    				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

    				return ret;
    			}

    			// Otherwise just get the value from the style object
    			return style[ name ];
    		}
    	},

    	css: function( elem, name, extra, styles ) {
    		var val, num, hooks,
    			origName = camelCase( name ),
    			isCustomProp = rcustomProp.test( name );

    		// Make sure that we're working with the right name. We don't
    		// want to modify the value if it is a CSS custom property
    		// since they are user-defined.
    		if ( !isCustomProp ) {
    			name = finalPropName( origName );
    		}

    		// Try prefixed name followed by the unprefixed name
    		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

    		// If a hook was provided get the computed value from there
    		if ( hooks && "get" in hooks ) {
    			val = hooks.get( elem, true, extra );
    		}

    		// Otherwise, if a way to get the computed value exists, use that
    		if ( val === undefined ) {
    			val = curCSS( elem, name, styles );
    		}

    		// Convert "normal" to computed value
    		if ( val === "normal" && name in cssNormalTransform ) {
    			val = cssNormalTransform[ name ];
    		}

    		// Make numeric if forced or a qualifier was provided and val looks numeric
    		if ( extra === "" || extra ) {
    			num = parseFloat( val );
    			return extra === true || isFinite( num ) ? num || 0 : val;
    		}

    		return val;
    	}
    } );

    jQuery.each( [ "height", "width" ], function( i, dimension ) {
    	jQuery.cssHooks[ dimension ] = {
    		get: function( elem, computed, extra ) {
    			if ( computed ) {

    				// Certain elements can have dimension info if we invisibly show them
    				// but it must have a current display style that would benefit
    				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

    					// Support: Safari 8+
    					// Table columns in Safari have non-zero offsetWidth & zero
    					// getBoundingClientRect().width unless display is changed.
    					// Support: IE <=11 only
    					// Running getBoundingClientRect on a disconnected node
    					// in IE throws an error.
    					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
    						swap( elem, cssShow, function() {
    							return getWidthOrHeight( elem, dimension, extra );
    						} ) :
    						getWidthOrHeight( elem, dimension, extra );
    			}
    		},

    		set: function( elem, value, extra ) {
    			var matches,
    				styles = getStyles( elem ),
    				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
    				subtract = extra && boxModelAdjustment(
    					elem,
    					dimension,
    					extra,
    					isBorderBox,
    					styles
    				);

    			// Account for unreliable border-box dimensions by comparing offset* to computed and
    			// faking a content-box to get border and padding (gh-3699)
    			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
    				subtract -= Math.ceil(
    					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
    					parseFloat( styles[ dimension ] ) -
    					boxModelAdjustment( elem, dimension, "border", false, styles ) -
    					0.5
    				);
    			}

    			// Convert to pixels if value adjustment is needed
    			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
    				( matches[ 3 ] || "px" ) !== "px" ) {

    				elem.style[ dimension ] = value;
    				value = jQuery.css( elem, dimension );
    			}

    			return setPositiveNumber( elem, value, subtract );
    		}
    	};
    } );

    jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
    	function( elem, computed ) {
    		if ( computed ) {
    			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
    				elem.getBoundingClientRect().left -
    					swap( elem, { marginLeft: 0 }, function() {
    						return elem.getBoundingClientRect().left;
    					} )
    				) + "px";
    		}
    	}
    );

    // These hooks are used by animate to expand properties
    jQuery.each( {
    	margin: "",
    	padding: "",
    	border: "Width"
    }, function( prefix, suffix ) {
    	jQuery.cssHooks[ prefix + suffix ] = {
    		expand: function( value ) {
    			var i = 0,
    				expanded = {},

    				// Assumes a single number if not a string
    				parts = typeof value === "string" ? value.split( " " ) : [ value ];

    			for ( ; i < 4; i++ ) {
    				expanded[ prefix + cssExpand[ i ] + suffix ] =
    					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
    			}

    			return expanded;
    		}
    	};

    	if ( prefix !== "margin" ) {
    		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
    	}
    } );

    jQuery.fn.extend( {
    	css: function( name, value ) {
    		return access( this, function( elem, name, value ) {
    			var styles, len,
    				map = {},
    				i = 0;

    			if ( Array.isArray( name ) ) {
    				styles = getStyles( elem );
    				len = name.length;

    				for ( ; i < len; i++ ) {
    					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
    				}

    				return map;
    			}

    			return value !== undefined ?
    				jQuery.style( elem, name, value ) :
    				jQuery.css( elem, name );
    		}, name, value, arguments.length > 1 );
    	}
    } );


    function Tween( elem, options, prop, end, easing ) {
    	return new Tween.prototype.init( elem, options, prop, end, easing );
    }
    jQuery.Tween = Tween;

    Tween.prototype = {
    	constructor: Tween,
    	init: function( elem, options, prop, end, easing, unit ) {
    		this.elem = elem;
    		this.prop = prop;
    		this.easing = easing || jQuery.easing._default;
    		this.options = options;
    		this.start = this.now = this.cur();
    		this.end = end;
    		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
    	},
    	cur: function() {
    		var hooks = Tween.propHooks[ this.prop ];

    		return hooks && hooks.get ?
    			hooks.get( this ) :
    			Tween.propHooks._default.get( this );
    	},
    	run: function( percent ) {
    		var eased,
    			hooks = Tween.propHooks[ this.prop ];

    		if ( this.options.duration ) {
    			this.pos = eased = jQuery.easing[ this.easing ](
    				percent, this.options.duration * percent, 0, 1, this.options.duration
    			);
    		} else {
    			this.pos = eased = percent;
    		}
    		this.now = ( this.end - this.start ) * eased + this.start;

    		if ( this.options.step ) {
    			this.options.step.call( this.elem, this.now, this );
    		}

    		if ( hooks && hooks.set ) {
    			hooks.set( this );
    		} else {
    			Tween.propHooks._default.set( this );
    		}
    		return this;
    	}
    };

    Tween.prototype.init.prototype = Tween.prototype;

    Tween.propHooks = {
    	_default: {
    		get: function( tween ) {
    			var result;

    			// Use a property on the element directly when it is not a DOM element,
    			// or when there is no matching style property that exists.
    			if ( tween.elem.nodeType !== 1 ||
    				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
    				return tween.elem[ tween.prop ];
    			}

    			// Passing an empty string as a 3rd parameter to .css will automatically
    			// attempt a parseFloat and fallback to a string if the parse fails.
    			// Simple values such as "10px" are parsed to Float;
    			// complex values such as "rotate(1rad)" are returned as-is.
    			result = jQuery.css( tween.elem, tween.prop, "" );

    			// Empty strings, null, undefined and "auto" are converted to 0.
    			return !result || result === "auto" ? 0 : result;
    		},
    		set: function( tween ) {

    			// Use step hook for back compat.
    			// Use cssHook if its there.
    			// Use .style if available and use plain properties where available.
    			if ( jQuery.fx.step[ tween.prop ] ) {
    				jQuery.fx.step[ tween.prop ]( tween );
    			} else if ( tween.elem.nodeType === 1 &&
    				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
    					jQuery.cssHooks[ tween.prop ] ) ) {
    				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
    			} else {
    				tween.elem[ tween.prop ] = tween.now;
    			}
    		}
    	}
    };

    // Support: IE <=9 only
    // Panic based approach to setting things on disconnected nodes
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    	set: function( tween ) {
    		if ( tween.elem.nodeType && tween.elem.parentNode ) {
    			tween.elem[ tween.prop ] = tween.now;
    		}
    	}
    };

    jQuery.easing = {
    	linear: function( p ) {
    		return p;
    	},
    	swing: function( p ) {
    		return 0.5 - Math.cos( p * Math.PI ) / 2;
    	},
    	_default: "swing"
    };

    jQuery.fx = Tween.prototype.init;

    // Back compat <1.8 extension point
    jQuery.fx.step = {};




    var
    	fxNow, inProgress,
    	rfxtypes = /^(?:toggle|show|hide)$/,
    	rrun = /queueHooks$/;

    function schedule() {
    	if ( inProgress ) {
    		if ( document.hidden === false && window.requestAnimationFrame ) {
    			window.requestAnimationFrame( schedule );
    		} else {
    			window.setTimeout( schedule, jQuery.fx.interval );
    		}

    		jQuery.fx.tick();
    	}
    }

    // Animations created synchronously will run synchronously
    function createFxNow() {
    	window.setTimeout( function() {
    		fxNow = undefined;
    	} );
    	return ( fxNow = Date.now() );
    }

    // Generate parameters to create a standard animation
    function genFx( type, includeWidth ) {
    	var which,
    		i = 0,
    		attrs = { height: type };

    	// If we include width, step value is 1 to do all cssExpand values,
    	// otherwise step value is 2 to skip over Left and Right
    	includeWidth = includeWidth ? 1 : 0;
    	for ( ; i < 4; i += 2 - includeWidth ) {
    		which = cssExpand[ i ];
    		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
    	}

    	if ( includeWidth ) {
    		attrs.opacity = attrs.width = type;
    	}

    	return attrs;
    }

    function createTween( value, prop, animation ) {
    	var tween,
    		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
    		index = 0,
    		length = collection.length;
    	for ( ; index < length; index++ ) {
    		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

    			// We're done with this property
    			return tween;
    		}
    	}
    }

    function defaultPrefilter( elem, props, opts ) {
    	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
    		isBox = "width" in props || "height" in props,
    		anim = this,
    		orig = {},
    		style = elem.style,
    		hidden = elem.nodeType && isHiddenWithinTree( elem ),
    		dataShow = dataPriv.get( elem, "fxshow" );

    	// Queue-skipping animations hijack the fx hooks
    	if ( !opts.queue ) {
    		hooks = jQuery._queueHooks( elem, "fx" );
    		if ( hooks.unqueued == null ) {
    			hooks.unqueued = 0;
    			oldfire = hooks.empty.fire;
    			hooks.empty.fire = function() {
    				if ( !hooks.unqueued ) {
    					oldfire();
    				}
    			};
    		}
    		hooks.unqueued++;

    		anim.always( function() {

    			// Ensure the complete handler is called before this completes
    			anim.always( function() {
    				hooks.unqueued--;
    				if ( !jQuery.queue( elem, "fx" ).length ) {
    					hooks.empty.fire();
    				}
    			} );
    		} );
    	}

    	// Detect show/hide animations
    	for ( prop in props ) {
    		value = props[ prop ];
    		if ( rfxtypes.test( value ) ) {
    			delete props[ prop ];
    			toggle = toggle || value === "toggle";
    			if ( value === ( hidden ? "hide" : "show" ) ) {

    				// Pretend to be hidden if this is a "show" and
    				// there is still data from a stopped show/hide
    				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
    					hidden = true;

    				// Ignore all other no-op show/hide data
    				} else {
    					continue;
    				}
    			}
    			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
    		}
    	}

    	// Bail out if this is a no-op like .hide().hide()
    	propTween = !jQuery.isEmptyObject( props );
    	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
    		return;
    	}

    	// Restrict "overflow" and "display" styles during box animations
    	if ( isBox && elem.nodeType === 1 ) {

    		// Support: IE <=9 - 11, Edge 12 - 15
    		// Record all 3 overflow attributes because IE does not infer the shorthand
    		// from identically-valued overflowX and overflowY and Edge just mirrors
    		// the overflowX value there.
    		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

    		// Identify a display type, preferring old show/hide data over the CSS cascade
    		restoreDisplay = dataShow && dataShow.display;
    		if ( restoreDisplay == null ) {
    			restoreDisplay = dataPriv.get( elem, "display" );
    		}
    		display = jQuery.css( elem, "display" );
    		if ( display === "none" ) {
    			if ( restoreDisplay ) {
    				display = restoreDisplay;
    			} else {

    				// Get nonempty value(s) by temporarily forcing visibility
    				showHide( [ elem ], true );
    				restoreDisplay = elem.style.display || restoreDisplay;
    				display = jQuery.css( elem, "display" );
    				showHide( [ elem ] );
    			}
    		}

    		// Animate inline elements as inline-block
    		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
    			if ( jQuery.css( elem, "float" ) === "none" ) {

    				// Restore the original display value at the end of pure show/hide animations
    				if ( !propTween ) {
    					anim.done( function() {
    						style.display = restoreDisplay;
    					} );
    					if ( restoreDisplay == null ) {
    						display = style.display;
    						restoreDisplay = display === "none" ? "" : display;
    					}
    				}
    				style.display = "inline-block";
    			}
    		}
    	}

    	if ( opts.overflow ) {
    		style.overflow = "hidden";
    		anim.always( function() {
    			style.overflow = opts.overflow[ 0 ];
    			style.overflowX = opts.overflow[ 1 ];
    			style.overflowY = opts.overflow[ 2 ];
    		} );
    	}

    	// Implement show/hide animations
    	propTween = false;
    	for ( prop in orig ) {

    		// General show/hide setup for this element animation
    		if ( !propTween ) {
    			if ( dataShow ) {
    				if ( "hidden" in dataShow ) {
    					hidden = dataShow.hidden;
    				}
    			} else {
    				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
    			}

    			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
    			if ( toggle ) {
    				dataShow.hidden = !hidden;
    			}

    			// Show elements before animating them
    			if ( hidden ) {
    				showHide( [ elem ], true );
    			}

    			/* eslint-disable no-loop-func */

    			anim.done( function() {

    			/* eslint-enable no-loop-func */

    				// The final step of a "hide" animation is actually hiding the element
    				if ( !hidden ) {
    					showHide( [ elem ] );
    				}
    				dataPriv.remove( elem, "fxshow" );
    				for ( prop in orig ) {
    					jQuery.style( elem, prop, orig[ prop ] );
    				}
    			} );
    		}

    		// Per-property setup
    		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
    		if ( !( prop in dataShow ) ) {
    			dataShow[ prop ] = propTween.start;
    			if ( hidden ) {
    				propTween.end = propTween.start;
    				propTween.start = 0;
    			}
    		}
    	}
    }

    function propFilter( props, specialEasing ) {
    	var index, name, easing, value, hooks;

    	// camelCase, specialEasing and expand cssHook pass
    	for ( index in props ) {
    		name = camelCase( index );
    		easing = specialEasing[ name ];
    		value = props[ index ];
    		if ( Array.isArray( value ) ) {
    			easing = value[ 1 ];
    			value = props[ index ] = value[ 0 ];
    		}

    		if ( index !== name ) {
    			props[ name ] = value;
    			delete props[ index ];
    		}

    		hooks = jQuery.cssHooks[ name ];
    		if ( hooks && "expand" in hooks ) {
    			value = hooks.expand( value );
    			delete props[ name ];

    			// Not quite $.extend, this won't overwrite existing keys.
    			// Reusing 'index' because we have the correct "name"
    			for ( index in value ) {
    				if ( !( index in props ) ) {
    					props[ index ] = value[ index ];
    					specialEasing[ index ] = easing;
    				}
    			}
    		} else {
    			specialEasing[ name ] = easing;
    		}
    	}
    }

    function Animation( elem, properties, options ) {
    	var result,
    		stopped,
    		index = 0,
    		length = Animation.prefilters.length,
    		deferred = jQuery.Deferred().always( function() {

    			// Don't match elem in the :animated selector
    			delete tick.elem;
    		} ),
    		tick = function() {
    			if ( stopped ) {
    				return false;
    			}
    			var currentTime = fxNow || createFxNow(),
    				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

    				// Support: Android 2.3 only
    				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
    				temp = remaining / animation.duration || 0,
    				percent = 1 - temp,
    				index = 0,
    				length = animation.tweens.length;

    			for ( ; index < length; index++ ) {
    				animation.tweens[ index ].run( percent );
    			}

    			deferred.notifyWith( elem, [ animation, percent, remaining ] );

    			// If there's more to do, yield
    			if ( percent < 1 && length ) {
    				return remaining;
    			}

    			// If this was an empty animation, synthesize a final progress notification
    			if ( !length ) {
    				deferred.notifyWith( elem, [ animation, 1, 0 ] );
    			}

    			// Resolve the animation and report its conclusion
    			deferred.resolveWith( elem, [ animation ] );
    			return false;
    		},
    		animation = deferred.promise( {
    			elem: elem,
    			props: jQuery.extend( {}, properties ),
    			opts: jQuery.extend( true, {
    				specialEasing: {},
    				easing: jQuery.easing._default
    			}, options ),
    			originalProperties: properties,
    			originalOptions: options,
    			startTime: fxNow || createFxNow(),
    			duration: options.duration,
    			tweens: [],
    			createTween: function( prop, end ) {
    				var tween = jQuery.Tween( elem, animation.opts, prop, end,
    						animation.opts.specialEasing[ prop ] || animation.opts.easing );
    				animation.tweens.push( tween );
    				return tween;
    			},
    			stop: function( gotoEnd ) {
    				var index = 0,

    					// If we are going to the end, we want to run all the tweens
    					// otherwise we skip this part
    					length = gotoEnd ? animation.tweens.length : 0;
    				if ( stopped ) {
    					return this;
    				}
    				stopped = true;
    				for ( ; index < length; index++ ) {
    					animation.tweens[ index ].run( 1 );
    				}

    				// Resolve when we played the last frame; otherwise, reject
    				if ( gotoEnd ) {
    					deferred.notifyWith( elem, [ animation, 1, 0 ] );
    					deferred.resolveWith( elem, [ animation, gotoEnd ] );
    				} else {
    					deferred.rejectWith( elem, [ animation, gotoEnd ] );
    				}
    				return this;
    			}
    		} ),
    		props = animation.props;

    	propFilter( props, animation.opts.specialEasing );

    	for ( ; index < length; index++ ) {
    		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
    		if ( result ) {
    			if ( isFunction( result.stop ) ) {
    				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
    					result.stop.bind( result );
    			}
    			return result;
    		}
    	}

    	jQuery.map( props, createTween, animation );

    	if ( isFunction( animation.opts.start ) ) {
    		animation.opts.start.call( elem, animation );
    	}

    	// Attach callbacks from options
    	animation
    		.progress( animation.opts.progress )
    		.done( animation.opts.done, animation.opts.complete )
    		.fail( animation.opts.fail )
    		.always( animation.opts.always );

    	jQuery.fx.timer(
    		jQuery.extend( tick, {
    			elem: elem,
    			anim: animation,
    			queue: animation.opts.queue
    		} )
    	);

    	return animation;
    }

    jQuery.Animation = jQuery.extend( Animation, {

    	tweeners: {
    		"*": [ function( prop, value ) {
    			var tween = this.createTween( prop, value );
    			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
    			return tween;
    		} ]
    	},

    	tweener: function( props, callback ) {
    		if ( isFunction( props ) ) {
    			callback = props;
    			props = [ "*" ];
    		} else {
    			props = props.match( rnothtmlwhite );
    		}

    		var prop,
    			index = 0,
    			length = props.length;

    		for ( ; index < length; index++ ) {
    			prop = props[ index ];
    			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
    			Animation.tweeners[ prop ].unshift( callback );
    		}
    	},

    	prefilters: [ defaultPrefilter ],

    	prefilter: function( callback, prepend ) {
    		if ( prepend ) {
    			Animation.prefilters.unshift( callback );
    		} else {
    			Animation.prefilters.push( callback );
    		}
    	}
    } );

    jQuery.speed = function( speed, easing, fn ) {
    	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
    		complete: fn || !fn && easing ||
    			isFunction( speed ) && speed,
    		duration: speed,
    		easing: fn && easing || easing && !isFunction( easing ) && easing
    	};

    	// Go to the end state if fx are off
    	if ( jQuery.fx.off ) {
    		opt.duration = 0;

    	} else {
    		if ( typeof opt.duration !== "number" ) {
    			if ( opt.duration in jQuery.fx.speeds ) {
    				opt.duration = jQuery.fx.speeds[ opt.duration ];

    			} else {
    				opt.duration = jQuery.fx.speeds._default;
    			}
    		}
    	}

    	// Normalize opt.queue - true/undefined/null -> "fx"
    	if ( opt.queue == null || opt.queue === true ) {
    		opt.queue = "fx";
    	}

    	// Queueing
    	opt.old = opt.complete;

    	opt.complete = function() {
    		if ( isFunction( opt.old ) ) {
    			opt.old.call( this );
    		}

    		if ( opt.queue ) {
    			jQuery.dequeue( this, opt.queue );
    		}
    	};

    	return opt;
    };

    jQuery.fn.extend( {
    	fadeTo: function( speed, to, easing, callback ) {

    		// Show any hidden elements after setting opacity to 0
    		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

    			// Animate to the value specified
    			.end().animate( { opacity: to }, speed, easing, callback );
    	},
    	animate: function( prop, speed, easing, callback ) {
    		var empty = jQuery.isEmptyObject( prop ),
    			optall = jQuery.speed( speed, easing, callback ),
    			doAnimation = function() {

    				// Operate on a copy of prop so per-property easing won't be lost
    				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

    				// Empty animations, or finishing resolves immediately
    				if ( empty || dataPriv.get( this, "finish" ) ) {
    					anim.stop( true );
    				}
    			};
    			doAnimation.finish = doAnimation;

    		return empty || optall.queue === false ?
    			this.each( doAnimation ) :
    			this.queue( optall.queue, doAnimation );
    	},
    	stop: function( type, clearQueue, gotoEnd ) {
    		var stopQueue = function( hooks ) {
    			var stop = hooks.stop;
    			delete hooks.stop;
    			stop( gotoEnd );
    		};

    		if ( typeof type !== "string" ) {
    			gotoEnd = clearQueue;
    			clearQueue = type;
    			type = undefined;
    		}
    		if ( clearQueue && type !== false ) {
    			this.queue( type || "fx", [] );
    		}

    		return this.each( function() {
    			var dequeue = true,
    				index = type != null && type + "queueHooks",
    				timers = jQuery.timers,
    				data = dataPriv.get( this );

    			if ( index ) {
    				if ( data[ index ] && data[ index ].stop ) {
    					stopQueue( data[ index ] );
    				}
    			} else {
    				for ( index in data ) {
    					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
    						stopQueue( data[ index ] );
    					}
    				}
    			}

    			for ( index = timers.length; index--; ) {
    				if ( timers[ index ].elem === this &&
    					( type == null || timers[ index ].queue === type ) ) {

    					timers[ index ].anim.stop( gotoEnd );
    					dequeue = false;
    					timers.splice( index, 1 );
    				}
    			}

    			// Start the next in the queue if the last step wasn't forced.
    			// Timers currently will call their complete callbacks, which
    			// will dequeue but only if they were gotoEnd.
    			if ( dequeue || !gotoEnd ) {
    				jQuery.dequeue( this, type );
    			}
    		} );
    	},
    	finish: function( type ) {
    		if ( type !== false ) {
    			type = type || "fx";
    		}
    		return this.each( function() {
    			var index,
    				data = dataPriv.get( this ),
    				queue = data[ type + "queue" ],
    				hooks = data[ type + "queueHooks" ],
    				timers = jQuery.timers,
    				length = queue ? queue.length : 0;

    			// Enable finishing flag on private data
    			data.finish = true;

    			// Empty the queue first
    			jQuery.queue( this, type, [] );

    			if ( hooks && hooks.stop ) {
    				hooks.stop.call( this, true );
    			}

    			// Look for any active animations, and finish them
    			for ( index = timers.length; index--; ) {
    				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
    					timers[ index ].anim.stop( true );
    					timers.splice( index, 1 );
    				}
    			}

    			// Look for any animations in the old queue and finish them
    			for ( index = 0; index < length; index++ ) {
    				if ( queue[ index ] && queue[ index ].finish ) {
    					queue[ index ].finish.call( this );
    				}
    			}

    			// Turn off finishing flag
    			delete data.finish;
    		} );
    	}
    } );

    jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
    	var cssFn = jQuery.fn[ name ];
    	jQuery.fn[ name ] = function( speed, easing, callback ) {
    		return speed == null || typeof speed === "boolean" ?
    			cssFn.apply( this, arguments ) :
    			this.animate( genFx( name, true ), speed, easing, callback );
    	};
    } );

    // Generate shortcuts for custom animations
    jQuery.each( {
    	slideDown: genFx( "show" ),
    	slideUp: genFx( "hide" ),
    	slideToggle: genFx( "toggle" ),
    	fadeIn: { opacity: "show" },
    	fadeOut: { opacity: "hide" },
    	fadeToggle: { opacity: "toggle" }
    }, function( name, props ) {
    	jQuery.fn[ name ] = function( speed, easing, callback ) {
    		return this.animate( props, speed, easing, callback );
    	};
    } );

    jQuery.timers = [];
    jQuery.fx.tick = function() {
    	var timer,
    		i = 0,
    		timers = jQuery.timers;

    	fxNow = Date.now();

    	for ( ; i < timers.length; i++ ) {
    		timer = timers[ i ];

    		// Run the timer and safely remove it when done (allowing for external removal)
    		if ( !timer() && timers[ i ] === timer ) {
    			timers.splice( i--, 1 );
    		}
    	}

    	if ( !timers.length ) {
    		jQuery.fx.stop();
    	}
    	fxNow = undefined;
    };

    jQuery.fx.timer = function( timer ) {
    	jQuery.timers.push( timer );
    	jQuery.fx.start();
    };

    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
    	if ( inProgress ) {
    		return;
    	}

    	inProgress = true;
    	schedule();
    };

    jQuery.fx.stop = function() {
    	inProgress = null;
    };

    jQuery.fx.speeds = {
    	slow: 600,
    	fast: 200,

    	// Default speed
    	_default: 400
    };


    // Based off of the plugin by Clint Helfers, with permission.
    // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
    jQuery.fn.delay = function( time, type ) {
    	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
    	type = type || "fx";

    	return this.queue( type, function( next, hooks ) {
    		var timeout = window.setTimeout( next, time );
    		hooks.stop = function() {
    			window.clearTimeout( timeout );
    		};
    	} );
    };


    ( function() {
    	var input = document.createElement( "input" ),
    		select = document.createElement( "select" ),
    		opt = select.appendChild( document.createElement( "option" ) );

    	input.type = "checkbox";

    	// Support: Android <=4.3 only
    	// Default value for a checkbox should be "on"
    	support.checkOn = input.value !== "";

    	// Support: IE <=11 only
    	// Must access selectedIndex to make default options select
    	support.optSelected = opt.selected;

    	// Support: IE <=11 only
    	// An input loses its value after becoming a radio
    	input = document.createElement( "input" );
    	input.value = "t";
    	input.type = "radio";
    	support.radioValue = input.value === "t";
    } )();


    var boolHook,
    	attrHandle = jQuery.expr.attrHandle;

    jQuery.fn.extend( {
    	attr: function( name, value ) {
    		return access( this, jQuery.attr, name, value, arguments.length > 1 );
    	},

    	removeAttr: function( name ) {
    		return this.each( function() {
    			jQuery.removeAttr( this, name );
    		} );
    	}
    } );

    jQuery.extend( {
    	attr: function( elem, name, value ) {
    		var ret, hooks,
    			nType = elem.nodeType;

    		// Don't get/set attributes on text, comment and attribute nodes
    		if ( nType === 3 || nType === 8 || nType === 2 ) {
    			return;
    		}

    		// Fallback to prop when attributes are not supported
    		if ( typeof elem.getAttribute === "undefined" ) {
    			return jQuery.prop( elem, name, value );
    		}

    		// Attribute hooks are determined by the lowercase version
    		// Grab necessary hook if one is defined
    		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
    			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
    				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
    		}

    		if ( value !== undefined ) {
    			if ( value === null ) {
    				jQuery.removeAttr( elem, name );
    				return;
    			}

    			if ( hooks && "set" in hooks &&
    				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
    				return ret;
    			}

    			elem.setAttribute( name, value + "" );
    			return value;
    		}

    		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
    			return ret;
    		}

    		ret = jQuery.find.attr( elem, name );

    		// Non-existent attributes return null, we normalize to undefined
    		return ret == null ? undefined : ret;
    	},

    	attrHooks: {
    		type: {
    			set: function( elem, value ) {
    				if ( !support.radioValue && value === "radio" &&
    					nodeName( elem, "input" ) ) {
    					var val = elem.value;
    					elem.setAttribute( "type", value );
    					if ( val ) {
    						elem.value = val;
    					}
    					return value;
    				}
    			}
    		}
    	},

    	removeAttr: function( elem, value ) {
    		var name,
    			i = 0,

    			// Attribute names can contain non-HTML whitespace characters
    			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
    			attrNames = value && value.match( rnothtmlwhite );

    		if ( attrNames && elem.nodeType === 1 ) {
    			while ( ( name = attrNames[ i++ ] ) ) {
    				elem.removeAttribute( name );
    			}
    		}
    	}
    } );

    // Hooks for boolean attributes
    boolHook = {
    	set: function( elem, value, name ) {
    		if ( value === false ) {

    			// Remove boolean attributes when set to false
    			jQuery.removeAttr( elem, name );
    		} else {
    			elem.setAttribute( name, name );
    		}
    		return name;
    	}
    };

    jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
    	var getter = attrHandle[ name ] || jQuery.find.attr;

    	attrHandle[ name ] = function( elem, name, isXML ) {
    		var ret, handle,
    			lowercaseName = name.toLowerCase();

    		if ( !isXML ) {

    			// Avoid an infinite loop by temporarily removing this function from the getter
    			handle = attrHandle[ lowercaseName ];
    			attrHandle[ lowercaseName ] = ret;
    			ret = getter( elem, name, isXML ) != null ?
    				lowercaseName :
    				null;
    			attrHandle[ lowercaseName ] = handle;
    		}
    		return ret;
    	};
    } );




    var rfocusable = /^(?:input|select|textarea|button)$/i,
    	rclickable = /^(?:a|area)$/i;

    jQuery.fn.extend( {
    	prop: function( name, value ) {
    		return access( this, jQuery.prop, name, value, arguments.length > 1 );
    	},

    	removeProp: function( name ) {
    		return this.each( function() {
    			delete this[ jQuery.propFix[ name ] || name ];
    		} );
    	}
    } );

    jQuery.extend( {
    	prop: function( elem, name, value ) {
    		var ret, hooks,
    			nType = elem.nodeType;

    		// Don't get/set properties on text, comment and attribute nodes
    		if ( nType === 3 || nType === 8 || nType === 2 ) {
    			return;
    		}

    		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

    			// Fix name and attach hooks
    			name = jQuery.propFix[ name ] || name;
    			hooks = jQuery.propHooks[ name ];
    		}

    		if ( value !== undefined ) {
    			if ( hooks && "set" in hooks &&
    				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
    				return ret;
    			}

    			return ( elem[ name ] = value );
    		}

    		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
    			return ret;
    		}

    		return elem[ name ];
    	},

    	propHooks: {
    		tabIndex: {
    			get: function( elem ) {

    				// Support: IE <=9 - 11 only
    				// elem.tabIndex doesn't always return the
    				// correct value when it hasn't been explicitly set
    				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
    				// Use proper attribute retrieval(#12072)
    				var tabindex = jQuery.find.attr( elem, "tabindex" );

    				if ( tabindex ) {
    					return parseInt( tabindex, 10 );
    				}

    				if (
    					rfocusable.test( elem.nodeName ) ||
    					rclickable.test( elem.nodeName ) &&
    					elem.href
    				) {
    					return 0;
    				}

    				return -1;
    			}
    		}
    	},

    	propFix: {
    		"for": "htmlFor",
    		"class": "className"
    	}
    } );

    // Support: IE <=11 only
    // Accessing the selectedIndex property
    // forces the browser to respect setting selected
    // on the option
    // The getter ensures a default option is selected
    // when in an optgroup
    // eslint rule "no-unused-expressions" is disabled for this code
    // since it considers such accessions noop
    if ( !support.optSelected ) {
    	jQuery.propHooks.selected = {
    		get: function( elem ) {

    			/* eslint no-unused-expressions: "off" */

    			var parent = elem.parentNode;
    			if ( parent && parent.parentNode ) {
    				parent.parentNode.selectedIndex;
    			}
    			return null;
    		},
    		set: function( elem ) {

    			/* eslint no-unused-expressions: "off" */

    			var parent = elem.parentNode;
    			if ( parent ) {
    				parent.selectedIndex;

    				if ( parent.parentNode ) {
    					parent.parentNode.selectedIndex;
    				}
    			}
    		}
    	};
    }

    jQuery.each( [
    	"tabIndex",
    	"readOnly",
    	"maxLength",
    	"cellSpacing",
    	"cellPadding",
    	"rowSpan",
    	"colSpan",
    	"useMap",
    	"frameBorder",
    	"contentEditable"
    ], function() {
    	jQuery.propFix[ this.toLowerCase() ] = this;
    } );




    	// Strip and collapse whitespace according to HTML spec
    	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
    	function stripAndCollapse( value ) {
    		var tokens = value.match( rnothtmlwhite ) || [];
    		return tokens.join( " " );
    	}


    function getClass( elem ) {
    	return elem.getAttribute && elem.getAttribute( "class" ) || "";
    }

    function classesToArray( value ) {
    	if ( Array.isArray( value ) ) {
    		return value;
    	}
    	if ( typeof value === "string" ) {
    		return value.match( rnothtmlwhite ) || [];
    	}
    	return [];
    }

    jQuery.fn.extend( {
    	addClass: function( value ) {
    		var classes, elem, cur, curValue, clazz, j, finalValue,
    			i = 0;

    		if ( isFunction( value ) ) {
    			return this.each( function( j ) {
    				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
    			} );
    		}

    		classes = classesToArray( value );

    		if ( classes.length ) {
    			while ( ( elem = this[ i++ ] ) ) {
    				curValue = getClass( elem );
    				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

    				if ( cur ) {
    					j = 0;
    					while ( ( clazz = classes[ j++ ] ) ) {
    						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
    							cur += clazz + " ";
    						}
    					}

    					// Only assign if different to avoid unneeded rendering.
    					finalValue = stripAndCollapse( cur );
    					if ( curValue !== finalValue ) {
    						elem.setAttribute( "class", finalValue );
    					}
    				}
    			}
    		}

    		return this;
    	},

    	removeClass: function( value ) {
    		var classes, elem, cur, curValue, clazz, j, finalValue,
    			i = 0;

    		if ( isFunction( value ) ) {
    			return this.each( function( j ) {
    				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
    			} );
    		}

    		if ( !arguments.length ) {
    			return this.attr( "class", "" );
    		}

    		classes = classesToArray( value );

    		if ( classes.length ) {
    			while ( ( elem = this[ i++ ] ) ) {
    				curValue = getClass( elem );

    				// This expression is here for better compressibility (see addClass)
    				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

    				if ( cur ) {
    					j = 0;
    					while ( ( clazz = classes[ j++ ] ) ) {

    						// Remove *all* instances
    						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
    							cur = cur.replace( " " + clazz + " ", " " );
    						}
    					}

    					// Only assign if different to avoid unneeded rendering.
    					finalValue = stripAndCollapse( cur );
    					if ( curValue !== finalValue ) {
    						elem.setAttribute( "class", finalValue );
    					}
    				}
    			}
    		}

    		return this;
    	},

    	toggleClass: function( value, stateVal ) {
    		var type = typeof value,
    			isValidValue = type === "string" || Array.isArray( value );

    		if ( typeof stateVal === "boolean" && isValidValue ) {
    			return stateVal ? this.addClass( value ) : this.removeClass( value );
    		}

    		if ( isFunction( value ) ) {
    			return this.each( function( i ) {
    				jQuery( this ).toggleClass(
    					value.call( this, i, getClass( this ), stateVal ),
    					stateVal
    				);
    			} );
    		}

    		return this.each( function() {
    			var className, i, self, classNames;

    			if ( isValidValue ) {

    				// Toggle individual class names
    				i = 0;
    				self = jQuery( this );
    				classNames = classesToArray( value );

    				while ( ( className = classNames[ i++ ] ) ) {

    					// Check each className given, space separated list
    					if ( self.hasClass( className ) ) {
    						self.removeClass( className );
    					} else {
    						self.addClass( className );
    					}
    				}

    			// Toggle whole class name
    			} else if ( value === undefined || type === "boolean" ) {
    				className = getClass( this );
    				if ( className ) {

    					// Store className if set
    					dataPriv.set( this, "__className__", className );
    				}

    				// If the element has a class name or if we're passed `false`,
    				// then remove the whole classname (if there was one, the above saved it).
    				// Otherwise bring back whatever was previously saved (if anything),
    				// falling back to the empty string if nothing was stored.
    				if ( this.setAttribute ) {
    					this.setAttribute( "class",
    						className || value === false ?
    						"" :
    						dataPriv.get( this, "__className__" ) || ""
    					);
    				}
    			}
    		} );
    	},

    	hasClass: function( selector ) {
    		var className, elem,
    			i = 0;

    		className = " " + selector + " ";
    		while ( ( elem = this[ i++ ] ) ) {
    			if ( elem.nodeType === 1 &&
    				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
    					return true;
    			}
    		}

    		return false;
    	}
    } );




    var rreturn = /\r/g;

    jQuery.fn.extend( {
    	val: function( value ) {
    		var hooks, ret, valueIsFunction,
    			elem = this[ 0 ];

    		if ( !arguments.length ) {
    			if ( elem ) {
    				hooks = jQuery.valHooks[ elem.type ] ||
    					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

    				if ( hooks &&
    					"get" in hooks &&
    					( ret = hooks.get( elem, "value" ) ) !== undefined
    				) {
    					return ret;
    				}

    				ret = elem.value;

    				// Handle most common string cases
    				if ( typeof ret === "string" ) {
    					return ret.replace( rreturn, "" );
    				}

    				// Handle cases where value is null/undef or number
    				return ret == null ? "" : ret;
    			}

    			return;
    		}

    		valueIsFunction = isFunction( value );

    		return this.each( function( i ) {
    			var val;

    			if ( this.nodeType !== 1 ) {
    				return;
    			}

    			if ( valueIsFunction ) {
    				val = value.call( this, i, jQuery( this ).val() );
    			} else {
    				val = value;
    			}

    			// Treat null/undefined as ""; convert numbers to string
    			if ( val == null ) {
    				val = "";

    			} else if ( typeof val === "number" ) {
    				val += "";

    			} else if ( Array.isArray( val ) ) {
    				val = jQuery.map( val, function( value ) {
    					return value == null ? "" : value + "";
    				} );
    			}

    			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

    			// If set returns undefined, fall back to normal setting
    			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
    				this.value = val;
    			}
    		} );
    	}
    } );

    jQuery.extend( {
    	valHooks: {
    		option: {
    			get: function( elem ) {

    				var val = jQuery.find.attr( elem, "value" );
    				return val != null ?
    					val :

    					// Support: IE <=10 - 11 only
    					// option.text throws exceptions (#14686, #14858)
    					// Strip and collapse whitespace
    					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
    					stripAndCollapse( jQuery.text( elem ) );
    			}
    		},
    		select: {
    			get: function( elem ) {
    				var value, option, i,
    					options = elem.options,
    					index = elem.selectedIndex,
    					one = elem.type === "select-one",
    					values = one ? null : [],
    					max = one ? index + 1 : options.length;

    				if ( index < 0 ) {
    					i = max;

    				} else {
    					i = one ? index : 0;
    				}

    				// Loop through all the selected options
    				for ( ; i < max; i++ ) {
    					option = options[ i ];

    					// Support: IE <=9 only
    					// IE8-9 doesn't update selected after form reset (#2551)
    					if ( ( option.selected || i === index ) &&

    							// Don't return options that are disabled or in a disabled optgroup
    							!option.disabled &&
    							( !option.parentNode.disabled ||
    								!nodeName( option.parentNode, "optgroup" ) ) ) {

    						// Get the specific value for the option
    						value = jQuery( option ).val();

    						// We don't need an array for one selects
    						if ( one ) {
    							return value;
    						}

    						// Multi-Selects return an array
    						values.push( value );
    					}
    				}

    				return values;
    			},

    			set: function( elem, value ) {
    				var optionSet, option,
    					options = elem.options,
    					values = jQuery.makeArray( value ),
    					i = options.length;

    				while ( i-- ) {
    					option = options[ i ];

    					/* eslint-disable no-cond-assign */

    					if ( option.selected =
    						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
    					) {
    						optionSet = true;
    					}

    					/* eslint-enable no-cond-assign */
    				}

    				// Force browsers to behave consistently when non-matching value is set
    				if ( !optionSet ) {
    					elem.selectedIndex = -1;
    				}
    				return values;
    			}
    		}
    	}
    } );

    // Radios and checkboxes getter/setter
    jQuery.each( [ "radio", "checkbox" ], function() {
    	jQuery.valHooks[ this ] = {
    		set: function( elem, value ) {
    			if ( Array.isArray( value ) ) {
    				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
    			}
    		}
    	};
    	if ( !support.checkOn ) {
    		jQuery.valHooks[ this ].get = function( elem ) {
    			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
    		};
    	}
    } );




    // Return jQuery for attributes-only inclusion


    support.focusin = "onfocusin" in window;


    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
    	stopPropagationCallback = function( e ) {
    		e.stopPropagation();
    	};

    jQuery.extend( jQuery.event, {

    	trigger: function( event, data, elem, onlyHandlers ) {

    		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
    			eventPath = [ elem || document ],
    			type = hasOwn.call( event, "type" ) ? event.type : event,
    			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

    		cur = lastElement = tmp = elem = elem || document;

    		// Don't do events on text and comment nodes
    		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
    			return;
    		}

    		// focus/blur morphs to focusin/out; ensure we're not firing them right now
    		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
    			return;
    		}

    		if ( type.indexOf( "." ) > -1 ) {

    			// Namespaced trigger; create a regexp to match event type in handle()
    			namespaces = type.split( "." );
    			type = namespaces.shift();
    			namespaces.sort();
    		}
    		ontype = type.indexOf( ":" ) < 0 && "on" + type;

    		// Caller can pass in a jQuery.Event object, Object, or just an event type string
    		event = event[ jQuery.expando ] ?
    			event :
    			new jQuery.Event( type, typeof event === "object" && event );

    		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
    		event.isTrigger = onlyHandlers ? 2 : 3;
    		event.namespace = namespaces.join( "." );
    		event.rnamespace = event.namespace ?
    			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
    			null;

    		// Clean up the event in case it is being reused
    		event.result = undefined;
    		if ( !event.target ) {
    			event.target = elem;
    		}

    		// Clone any incoming data and prepend the event, creating the handler arg list
    		data = data == null ?
    			[ event ] :
    			jQuery.makeArray( data, [ event ] );

    		// Allow special events to draw outside the lines
    		special = jQuery.event.special[ type ] || {};
    		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
    			return;
    		}

    		// Determine event propagation path in advance, per W3C events spec (#9951)
    		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
    		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

    			bubbleType = special.delegateType || type;
    			if ( !rfocusMorph.test( bubbleType + type ) ) {
    				cur = cur.parentNode;
    			}
    			for ( ; cur; cur = cur.parentNode ) {
    				eventPath.push( cur );
    				tmp = cur;
    			}

    			// Only add window if we got to document (e.g., not plain obj or detached DOM)
    			if ( tmp === ( elem.ownerDocument || document ) ) {
    				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
    			}
    		}

    		// Fire handlers on the event path
    		i = 0;
    		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
    			lastElement = cur;
    			event.type = i > 1 ?
    				bubbleType :
    				special.bindType || type;

    			// jQuery handler
    			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
    				dataPriv.get( cur, "handle" );
    			if ( handle ) {
    				handle.apply( cur, data );
    			}

    			// Native handler
    			handle = ontype && cur[ ontype ];
    			if ( handle && handle.apply && acceptData( cur ) ) {
    				event.result = handle.apply( cur, data );
    				if ( event.result === false ) {
    					event.preventDefault();
    				}
    			}
    		}
    		event.type = type;

    		// If nobody prevented the default action, do it now
    		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

    			if ( ( !special._default ||
    				special._default.apply( eventPath.pop(), data ) === false ) &&
    				acceptData( elem ) ) {

    				// Call a native DOM method on the target with the same name as the event.
    				// Don't do default actions on window, that's where global variables be (#6170)
    				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

    					// Don't re-trigger an onFOO event when we call its FOO() method
    					tmp = elem[ ontype ];

    					if ( tmp ) {
    						elem[ ontype ] = null;
    					}

    					// Prevent re-triggering of the same event, since we already bubbled it above
    					jQuery.event.triggered = type;

    					if ( event.isPropagationStopped() ) {
    						lastElement.addEventListener( type, stopPropagationCallback );
    					}

    					elem[ type ]();

    					if ( event.isPropagationStopped() ) {
    						lastElement.removeEventListener( type, stopPropagationCallback );
    					}

    					jQuery.event.triggered = undefined;

    					if ( tmp ) {
    						elem[ ontype ] = tmp;
    					}
    				}
    			}
    		}

    		return event.result;
    	},

    	// Piggyback on a donor event to simulate a different one
    	// Used only for `focus(in | out)` events
    	simulate: function( type, elem, event ) {
    		var e = jQuery.extend(
    			new jQuery.Event(),
    			event,
    			{
    				type: type,
    				isSimulated: true
    			}
    		);

    		jQuery.event.trigger( e, null, elem );
    	}

    } );

    jQuery.fn.extend( {

    	trigger: function( type, data ) {
    		return this.each( function() {
    			jQuery.event.trigger( type, data, this );
    		} );
    	},
    	triggerHandler: function( type, data ) {
    		var elem = this[ 0 ];
    		if ( elem ) {
    			return jQuery.event.trigger( type, data, elem, true );
    		}
    	}
    } );


    // Support: Firefox <=44
    // Firefox doesn't have focus(in | out) events
    // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
    //
    // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
    // focus(in | out) events fire after focus & blur events,
    // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
    // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
    if ( !support.focusin ) {
    	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

    		// Attach a single capturing handler on the document while someone wants focusin/focusout
    		var handler = function( event ) {
    			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
    		};

    		jQuery.event.special[ fix ] = {
    			setup: function() {
    				var doc = this.ownerDocument || this,
    					attaches = dataPriv.access( doc, fix );

    				if ( !attaches ) {
    					doc.addEventListener( orig, handler, true );
    				}
    				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
    			},
    			teardown: function() {
    				var doc = this.ownerDocument || this,
    					attaches = dataPriv.access( doc, fix ) - 1;

    				if ( !attaches ) {
    					doc.removeEventListener( orig, handler, true );
    					dataPriv.remove( doc, fix );

    				} else {
    					dataPriv.access( doc, fix, attaches );
    				}
    			}
    		};
    	} );
    }
    var location = window.location;

    var nonce = Date.now();

    var rquery = ( /\?/ );



    // Cross-browser xml parsing
    jQuery.parseXML = function( data ) {
    	var xml;
    	if ( !data || typeof data !== "string" ) {
    		return null;
    	}

    	// Support: IE 9 - 11 only
    	// IE throws on parseFromString with invalid input.
    	try {
    		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
    	} catch ( e ) {
    		xml = undefined;
    	}

    	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
    		jQuery.error( "Invalid XML: " + data );
    	}
    	return xml;
    };


    var
    	rbracket = /\[\]$/,
    	rCRLF = /\r?\n/g,
    	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
    	rsubmittable = /^(?:input|select|textarea|keygen)/i;

    function buildParams( prefix, obj, traditional, add ) {
    	var name;

    	if ( Array.isArray( obj ) ) {

    		// Serialize array item.
    		jQuery.each( obj, function( i, v ) {
    			if ( traditional || rbracket.test( prefix ) ) {

    				// Treat each array item as a scalar.
    				add( prefix, v );

    			} else {

    				// Item is non-scalar (array or object), encode its numeric index.
    				buildParams(
    					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
    					v,
    					traditional,
    					add
    				);
    			}
    		} );

    	} else if ( !traditional && toType( obj ) === "object" ) {

    		// Serialize object item.
    		for ( name in obj ) {
    			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
    		}

    	} else {

    		// Serialize scalar item.
    		add( prefix, obj );
    	}
    }

    // Serialize an array of form elements or a set of
    // key/values into a query string
    jQuery.param = function( a, traditional ) {
    	var prefix,
    		s = [],
    		add = function( key, valueOrFunction ) {

    			// If value is a function, invoke it and use its return value
    			var value = isFunction( valueOrFunction ) ?
    				valueOrFunction() :
    				valueOrFunction;

    			s[ s.length ] = encodeURIComponent( key ) + "=" +
    				encodeURIComponent( value == null ? "" : value );
    		};

    	// If an array was passed in, assume that it is an array of form elements.
    	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

    		// Serialize the form elements
    		jQuery.each( a, function() {
    			add( this.name, this.value );
    		} );

    	} else {

    		// If traditional, encode the "old" way (the way 1.3.2 or older
    		// did it), otherwise encode params recursively.
    		for ( prefix in a ) {
    			buildParams( prefix, a[ prefix ], traditional, add );
    		}
    	}

    	// Return the resulting serialization
    	return s.join( "&" );
    };

    jQuery.fn.extend( {
    	serialize: function() {
    		return jQuery.param( this.serializeArray() );
    	},
    	serializeArray: function() {
    		return this.map( function() {

    			// Can add propHook for "elements" to filter or add form elements
    			var elements = jQuery.prop( this, "elements" );
    			return elements ? jQuery.makeArray( elements ) : this;
    		} )
    		.filter( function() {
    			var type = this.type;

    			// Use .is( ":disabled" ) so that fieldset[disabled] works
    			return this.name && !jQuery( this ).is( ":disabled" ) &&
    				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
    				( this.checked || !rcheckableType.test( type ) );
    		} )
    		.map( function( i, elem ) {
    			var val = jQuery( this ).val();

    			if ( val == null ) {
    				return null;
    			}

    			if ( Array.isArray( val ) ) {
    				return jQuery.map( val, function( val ) {
    					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
    				} );
    			}

    			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
    		} ).get();
    	}
    } );


    var
    	r20 = /%20/g,
    	rhash = /#.*$/,
    	rantiCache = /([?&])_=[^&]*/,
    	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

    	// #7653, #8125, #8152: local protocol detection
    	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    	rnoContent = /^(?:GET|HEAD)$/,
    	rprotocol = /^\/\//,

    	/* Prefilters
    	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
    	 * 2) These are called:
    	 *    - BEFORE asking for a transport
    	 *    - AFTER param serialization (s.data is a string if s.processData is true)
    	 * 3) key is the dataType
    	 * 4) the catchall symbol "*" can be used
    	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
    	 */
    	prefilters = {},

    	/* Transports bindings
    	 * 1) key is the dataType
    	 * 2) the catchall symbol "*" can be used
    	 * 3) selection will start with transport dataType and THEN go to "*" if needed
    	 */
    	transports = {},

    	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
    	allTypes = "*/".concat( "*" ),

    	// Anchor tag for parsing the document origin
    	originAnchor = document.createElement( "a" );
    	originAnchor.href = location.href;

    // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function addToPrefiltersOrTransports( structure ) {

    	// dataTypeExpression is optional and defaults to "*"
    	return function( dataTypeExpression, func ) {

    		if ( typeof dataTypeExpression !== "string" ) {
    			func = dataTypeExpression;
    			dataTypeExpression = "*";
    		}

    		var dataType,
    			i = 0,
    			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

    		if ( isFunction( func ) ) {

    			// For each dataType in the dataTypeExpression
    			while ( ( dataType = dataTypes[ i++ ] ) ) {

    				// Prepend if requested
    				if ( dataType[ 0 ] === "+" ) {
    					dataType = dataType.slice( 1 ) || "*";
    					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

    				// Otherwise append
    				} else {
    					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
    				}
    			}
    		}
    	};
    }

    // Base inspection function for prefilters and transports
    function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

    	var inspected = {},
    		seekingTransport = ( structure === transports );

    	function inspect( dataType ) {
    		var selected;
    		inspected[ dataType ] = true;
    		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
    			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
    			if ( typeof dataTypeOrTransport === "string" &&
    				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

    				options.dataTypes.unshift( dataTypeOrTransport );
    				inspect( dataTypeOrTransport );
    				return false;
    			} else if ( seekingTransport ) {
    				return !( selected = dataTypeOrTransport );
    			}
    		} );
    		return selected;
    	}

    	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
    }

    // A special extend for ajax options
    // that takes "flat" options (not to be deep extended)
    // Fixes #9887
    function ajaxExtend( target, src ) {
    	var key, deep,
    		flatOptions = jQuery.ajaxSettings.flatOptions || {};

    	for ( key in src ) {
    		if ( src[ key ] !== undefined ) {
    			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
    		}
    	}
    	if ( deep ) {
    		jQuery.extend( true, target, deep );
    	}

    	return target;
    }

    /* Handles responses to an ajax request:
     * - finds the right dataType (mediates between content-type and expected dataType)
     * - returns the corresponding response
     */
    function ajaxHandleResponses( s, jqXHR, responses ) {

    	var ct, type, finalDataType, firstDataType,
    		contents = s.contents,
    		dataTypes = s.dataTypes;

    	// Remove auto dataType and get content-type in the process
    	while ( dataTypes[ 0 ] === "*" ) {
    		dataTypes.shift();
    		if ( ct === undefined ) {
    			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
    		}
    	}

    	// Check if we're dealing with a known content-type
    	if ( ct ) {
    		for ( type in contents ) {
    			if ( contents[ type ] && contents[ type ].test( ct ) ) {
    				dataTypes.unshift( type );
    				break;
    			}
    		}
    	}

    	// Check to see if we have a response for the expected dataType
    	if ( dataTypes[ 0 ] in responses ) {
    		finalDataType = dataTypes[ 0 ];
    	} else {

    		// Try convertible dataTypes
    		for ( type in responses ) {
    			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
    				finalDataType = type;
    				break;
    			}
    			if ( !firstDataType ) {
    				firstDataType = type;
    			}
    		}

    		// Or just use first one
    		finalDataType = finalDataType || firstDataType;
    	}

    	// If we found a dataType
    	// We add the dataType to the list if needed
    	// and return the corresponding response
    	if ( finalDataType ) {
    		if ( finalDataType !== dataTypes[ 0 ] ) {
    			dataTypes.unshift( finalDataType );
    		}
    		return responses[ finalDataType ];
    	}
    }

    /* Chain conversions given the request and the original response
     * Also sets the responseXXX fields on the jqXHR instance
     */
    function ajaxConvert( s, response, jqXHR, isSuccess ) {
    	var conv2, current, conv, tmp, prev,
    		converters = {},

    		// Work with a copy of dataTypes in case we need to modify it for conversion
    		dataTypes = s.dataTypes.slice();

    	// Create converters map with lowercased keys
    	if ( dataTypes[ 1 ] ) {
    		for ( conv in s.converters ) {
    			converters[ conv.toLowerCase() ] = s.converters[ conv ];
    		}
    	}

    	current = dataTypes.shift();

    	// Convert to each sequential dataType
    	while ( current ) {

    		if ( s.responseFields[ current ] ) {
    			jqXHR[ s.responseFields[ current ] ] = response;
    		}

    		// Apply the dataFilter if provided
    		if ( !prev && isSuccess && s.dataFilter ) {
    			response = s.dataFilter( response, s.dataType );
    		}

    		prev = current;
    		current = dataTypes.shift();

    		if ( current ) {

    			// There's only work to do if current dataType is non-auto
    			if ( current === "*" ) {

    				current = prev;

    			// Convert response if prev dataType is non-auto and differs from current
    			} else if ( prev !== "*" && prev !== current ) {

    				// Seek a direct converter
    				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

    				// If none found, seek a pair
    				if ( !conv ) {
    					for ( conv2 in converters ) {

    						// If conv2 outputs current
    						tmp = conv2.split( " " );
    						if ( tmp[ 1 ] === current ) {

    							// If prev can be converted to accepted input
    							conv = converters[ prev + " " + tmp[ 0 ] ] ||
    								converters[ "* " + tmp[ 0 ] ];
    							if ( conv ) {

    								// Condense equivalence converters
    								if ( conv === true ) {
    									conv = converters[ conv2 ];

    								// Otherwise, insert the intermediate dataType
    								} else if ( converters[ conv2 ] !== true ) {
    									current = tmp[ 0 ];
    									dataTypes.unshift( tmp[ 1 ] );
    								}
    								break;
    							}
    						}
    					}
    				}

    				// Apply converter (if not an equivalence)
    				if ( conv !== true ) {

    					// Unless errors are allowed to bubble, catch and return them
    					if ( conv && s.throws ) {
    						response = conv( response );
    					} else {
    						try {
    							response = conv( response );
    						} catch ( e ) {
    							return {
    								state: "parsererror",
    								error: conv ? e : "No conversion from " + prev + " to " + current
    							};
    						}
    					}
    				}
    			}
    		}
    	}

    	return { state: "success", data: response };
    }

    jQuery.extend( {

    	// Counter for holding the number of active queries
    	active: 0,

    	// Last-Modified header cache for next request
    	lastModified: {},
    	etag: {},

    	ajaxSettings: {
    		url: location.href,
    		type: "GET",
    		isLocal: rlocalProtocol.test( location.protocol ),
    		global: true,
    		processData: true,
    		async: true,
    		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

    		/*
    		timeout: 0,
    		data: null,
    		dataType: null,
    		username: null,
    		password: null,
    		cache: null,
    		throws: false,
    		traditional: false,
    		headers: {},
    		*/

    		accepts: {
    			"*": allTypes,
    			text: "text/plain",
    			html: "text/html",
    			xml: "application/xml, text/xml",
    			json: "application/json, text/javascript"
    		},

    		contents: {
    			xml: /\bxml\b/,
    			html: /\bhtml/,
    			json: /\bjson\b/
    		},

    		responseFields: {
    			xml: "responseXML",
    			text: "responseText",
    			json: "responseJSON"
    		},

    		// Data converters
    		// Keys separate source (or catchall "*") and destination types with a single space
    		converters: {

    			// Convert anything to text
    			"* text": String,

    			// Text to html (true = no transformation)
    			"text html": true,

    			// Evaluate text as a json expression
    			"text json": JSON.parse,

    			// Parse text as xml
    			"text xml": jQuery.parseXML
    		},

    		// For options that shouldn't be deep extended:
    		// you can add your own custom options here if
    		// and when you create one that shouldn't be
    		// deep extended (see ajaxExtend)
    		flatOptions: {
    			url: true,
    			context: true
    		}
    	},

    	// Creates a full fledged settings object into target
    	// with both ajaxSettings and settings fields.
    	// If target is omitted, writes into ajaxSettings.
    	ajaxSetup: function( target, settings ) {
    		return settings ?

    			// Building a settings object
    			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

    			// Extending ajaxSettings
    			ajaxExtend( jQuery.ajaxSettings, target );
    	},

    	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
    	ajaxTransport: addToPrefiltersOrTransports( transports ),

    	// Main method
    	ajax: function( url, options ) {

    		// If url is an object, simulate pre-1.5 signature
    		if ( typeof url === "object" ) {
    			options = url;
    			url = undefined;
    		}

    		// Force options to be an object
    		options = options || {};

    		var transport,

    			// URL without anti-cache param
    			cacheURL,

    			// Response headers
    			responseHeadersString,
    			responseHeaders,

    			// timeout handle
    			timeoutTimer,

    			// Url cleanup var
    			urlAnchor,

    			// Request state (becomes false upon send and true upon completion)
    			completed,

    			// To know if global events are to be dispatched
    			fireGlobals,

    			// Loop variable
    			i,

    			// uncached part of the url
    			uncached,

    			// Create the final options object
    			s = jQuery.ajaxSetup( {}, options ),

    			// Callbacks context
    			callbackContext = s.context || s,

    			// Context for global events is callbackContext if it is a DOM node or jQuery collection
    			globalEventContext = s.context &&
    				( callbackContext.nodeType || callbackContext.jquery ) ?
    					jQuery( callbackContext ) :
    					jQuery.event,

    			// Deferreds
    			deferred = jQuery.Deferred(),
    			completeDeferred = jQuery.Callbacks( "once memory" ),

    			// Status-dependent callbacks
    			statusCode = s.statusCode || {},

    			// Headers (they are sent all at once)
    			requestHeaders = {},
    			requestHeadersNames = {},

    			// Default abort message
    			strAbort = "canceled",

    			// Fake xhr
    			jqXHR = {
    				readyState: 0,

    				// Builds headers hashtable if needed
    				getResponseHeader: function( key ) {
    					var match;
    					if ( completed ) {
    						if ( !responseHeaders ) {
    							responseHeaders = {};
    							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
    								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
    							}
    						}
    						match = responseHeaders[ key.toLowerCase() ];
    					}
    					return match == null ? null : match;
    				},

    				// Raw string
    				getAllResponseHeaders: function() {
    					return completed ? responseHeadersString : null;
    				},

    				// Caches the header
    				setRequestHeader: function( name, value ) {
    					if ( completed == null ) {
    						name = requestHeadersNames[ name.toLowerCase() ] =
    							requestHeadersNames[ name.toLowerCase() ] || name;
    						requestHeaders[ name ] = value;
    					}
    					return this;
    				},

    				// Overrides response content-type header
    				overrideMimeType: function( type ) {
    					if ( completed == null ) {
    						s.mimeType = type;
    					}
    					return this;
    				},

    				// Status-dependent callbacks
    				statusCode: function( map ) {
    					var code;
    					if ( map ) {
    						if ( completed ) {

    							// Execute the appropriate callbacks
    							jqXHR.always( map[ jqXHR.status ] );
    						} else {

    							// Lazy-add the new callbacks in a way that preserves old ones
    							for ( code in map ) {
    								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
    							}
    						}
    					}
    					return this;
    				},

    				// Cancel the request
    				abort: function( statusText ) {
    					var finalText = statusText || strAbort;
    					if ( transport ) {
    						transport.abort( finalText );
    					}
    					done( 0, finalText );
    					return this;
    				}
    			};

    		// Attach deferreds
    		deferred.promise( jqXHR );

    		// Add protocol if not provided (prefilters might expect it)
    		// Handle falsy url in the settings object (#10093: consistency with old signature)
    		// We also use the url parameter if available
    		s.url = ( ( url || s.url || location.href ) + "" )
    			.replace( rprotocol, location.protocol + "//" );

    		// Alias method option to type as per ticket #12004
    		s.type = options.method || options.type || s.method || s.type;

    		// Extract dataTypes list
    		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

    		// A cross-domain request is in order when the origin doesn't match the current origin.
    		if ( s.crossDomain == null ) {
    			urlAnchor = document.createElement( "a" );

    			// Support: IE <=8 - 11, Edge 12 - 15
    			// IE throws exception on accessing the href property if url is malformed,
    			// e.g. http://example.com:80x/
    			try {
    				urlAnchor.href = s.url;

    				// Support: IE <=8 - 11 only
    				// Anchor's host property isn't correctly set when s.url is relative
    				urlAnchor.href = urlAnchor.href;
    				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
    					urlAnchor.protocol + "//" + urlAnchor.host;
    			} catch ( e ) {

    				// If there is an error parsing the URL, assume it is crossDomain,
    				// it can be rejected by the transport if it is invalid
    				s.crossDomain = true;
    			}
    		}

    		// Convert data if not already a string
    		if ( s.data && s.processData && typeof s.data !== "string" ) {
    			s.data = jQuery.param( s.data, s.traditional );
    		}

    		// Apply prefilters
    		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

    		// If request was aborted inside a prefilter, stop there
    		if ( completed ) {
    			return jqXHR;
    		}

    		// We can fire global events as of now if asked to
    		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
    		fireGlobals = jQuery.event && s.global;

    		// Watch for a new set of requests
    		if ( fireGlobals && jQuery.active++ === 0 ) {
    			jQuery.event.trigger( "ajaxStart" );
    		}

    		// Uppercase the type
    		s.type = s.type.toUpperCase();

    		// Determine if request has content
    		s.hasContent = !rnoContent.test( s.type );

    		// Save the URL in case we're toying with the If-Modified-Since
    		// and/or If-None-Match header later on
    		// Remove hash to simplify url manipulation
    		cacheURL = s.url.replace( rhash, "" );

    		// More options handling for requests with no content
    		if ( !s.hasContent ) {

    			// Remember the hash so we can put it back
    			uncached = s.url.slice( cacheURL.length );

    			// If data is available and should be processed, append data to url
    			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
    				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

    				// #9682: remove data so that it's not used in an eventual retry
    				delete s.data;
    			}

    			// Add or update anti-cache param if needed
    			if ( s.cache === false ) {
    				cacheURL = cacheURL.replace( rantiCache, "$1" );
    				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
    			}

    			// Put hash and anti-cache on the URL that will be requested (gh-1732)
    			s.url = cacheURL + uncached;

    		// Change '%20' to '+' if this is encoded form body content (gh-2658)
    		} else if ( s.data && s.processData &&
    			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
    			s.data = s.data.replace( r20, "+" );
    		}

    		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
    		if ( s.ifModified ) {
    			if ( jQuery.lastModified[ cacheURL ] ) {
    				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
    			}
    			if ( jQuery.etag[ cacheURL ] ) {
    				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
    			}
    		}

    		// Set the correct header, if data is being sent
    		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
    			jqXHR.setRequestHeader( "Content-Type", s.contentType );
    		}

    		// Set the Accepts header for the server, depending on the dataType
    		jqXHR.setRequestHeader(
    			"Accept",
    			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
    				s.accepts[ s.dataTypes[ 0 ] ] +
    					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
    				s.accepts[ "*" ]
    		);

    		// Check for headers option
    		for ( i in s.headers ) {
    			jqXHR.setRequestHeader( i, s.headers[ i ] );
    		}

    		// Allow custom headers/mimetypes and early abort
    		if ( s.beforeSend &&
    			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

    			// Abort if not done already and return
    			return jqXHR.abort();
    		}

    		// Aborting is no longer a cancellation
    		strAbort = "abort";

    		// Install callbacks on deferreds
    		completeDeferred.add( s.complete );
    		jqXHR.done( s.success );
    		jqXHR.fail( s.error );

    		// Get transport
    		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

    		// If no transport, we auto-abort
    		if ( !transport ) {
    			done( -1, "No Transport" );
    		} else {
    			jqXHR.readyState = 1;

    			// Send global event
    			if ( fireGlobals ) {
    				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
    			}

    			// If request was aborted inside ajaxSend, stop there
    			if ( completed ) {
    				return jqXHR;
    			}

    			// Timeout
    			if ( s.async && s.timeout > 0 ) {
    				timeoutTimer = window.setTimeout( function() {
    					jqXHR.abort( "timeout" );
    				}, s.timeout );
    			}

    			try {
    				completed = false;
    				transport.send( requestHeaders, done );
    			} catch ( e ) {

    				// Rethrow post-completion exceptions
    				if ( completed ) {
    					throw e;
    				}

    				// Propagate others as results
    				done( -1, e );
    			}
    		}

    		// Callback for when everything is done
    		function done( status, nativeStatusText, responses, headers ) {
    			var isSuccess, success, error, response, modified,
    				statusText = nativeStatusText;

    			// Ignore repeat invocations
    			if ( completed ) {
    				return;
    			}

    			completed = true;

    			// Clear timeout if it exists
    			if ( timeoutTimer ) {
    				window.clearTimeout( timeoutTimer );
    			}

    			// Dereference transport for early garbage collection
    			// (no matter how long the jqXHR object will be used)
    			transport = undefined;

    			// Cache response headers
    			responseHeadersString = headers || "";

    			// Set readyState
    			jqXHR.readyState = status > 0 ? 4 : 0;

    			// Determine if successful
    			isSuccess = status >= 200 && status < 300 || status === 304;

    			// Get response data
    			if ( responses ) {
    				response = ajaxHandleResponses( s, jqXHR, responses );
    			}

    			// Convert no matter what (that way responseXXX fields are always set)
    			response = ajaxConvert( s, response, jqXHR, isSuccess );

    			// If successful, handle type chaining
    			if ( isSuccess ) {

    				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
    				if ( s.ifModified ) {
    					modified = jqXHR.getResponseHeader( "Last-Modified" );
    					if ( modified ) {
    						jQuery.lastModified[ cacheURL ] = modified;
    					}
    					modified = jqXHR.getResponseHeader( "etag" );
    					if ( modified ) {
    						jQuery.etag[ cacheURL ] = modified;
    					}
    				}

    				// if no content
    				if ( status === 204 || s.type === "HEAD" ) {
    					statusText = "nocontent";

    				// if not modified
    				} else if ( status === 304 ) {
    					statusText = "notmodified";

    				// If we have data, let's convert it
    				} else {
    					statusText = response.state;
    					success = response.data;
    					error = response.error;
    					isSuccess = !error;
    				}
    			} else {

    				// Extract error from statusText and normalize for non-aborts
    				error = statusText;
    				if ( status || !statusText ) {
    					statusText = "error";
    					if ( status < 0 ) {
    						status = 0;
    					}
    				}
    			}

    			// Set data for the fake xhr object
    			jqXHR.status = status;
    			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

    			// Success/Error
    			if ( isSuccess ) {
    				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
    			} else {
    				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
    			}

    			// Status-dependent callbacks
    			jqXHR.statusCode( statusCode );
    			statusCode = undefined;

    			if ( fireGlobals ) {
    				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
    					[ jqXHR, s, isSuccess ? success : error ] );
    			}

    			// Complete
    			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

    			if ( fireGlobals ) {
    				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

    				// Handle the global AJAX counter
    				if ( !( --jQuery.active ) ) {
    					jQuery.event.trigger( "ajaxStop" );
    				}
    			}
    		}

    		return jqXHR;
    	},

    	getJSON: function( url, data, callback ) {
    		return jQuery.get( url, data, callback, "json" );
    	},

    	getScript: function( url, callback ) {
    		return jQuery.get( url, undefined, callback, "script" );
    	}
    } );

    jQuery.each( [ "get", "post" ], function( i, method ) {
    	jQuery[ method ] = function( url, data, callback, type ) {

    		// Shift arguments if data argument was omitted
    		if ( isFunction( data ) ) {
    			type = type || callback;
    			callback = data;
    			data = undefined;
    		}

    		// The url can be an options object (which then must have .url)
    		return jQuery.ajax( jQuery.extend( {
    			url: url,
    			type: method,
    			dataType: type,
    			data: data,
    			success: callback
    		}, jQuery.isPlainObject( url ) && url ) );
    	};
    } );


    jQuery._evalUrl = function( url ) {
    	return jQuery.ajax( {
    		url: url,

    		// Make this explicit, since user can override this through ajaxSetup (#11264)
    		type: "GET",
    		dataType: "script",
    		cache: true,
    		async: false,
    		global: false,
    		"throws": true
    	} );
    };


    jQuery.fn.extend( {
    	wrapAll: function( html ) {
    		var wrap;

    		if ( this[ 0 ] ) {
    			if ( isFunction( html ) ) {
    				html = html.call( this[ 0 ] );
    			}

    			// The elements to wrap the target around
    			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

    			if ( this[ 0 ].parentNode ) {
    				wrap.insertBefore( this[ 0 ] );
    			}

    			wrap.map( function() {
    				var elem = this;

    				while ( elem.firstElementChild ) {
    					elem = elem.firstElementChild;
    				}

    				return elem;
    			} ).append( this );
    		}

    		return this;
    	},

    	wrapInner: function( html ) {
    		if ( isFunction( html ) ) {
    			return this.each( function( i ) {
    				jQuery( this ).wrapInner( html.call( this, i ) );
    			} );
    		}

    		return this.each( function() {
    			var self = jQuery( this ),
    				contents = self.contents();

    			if ( contents.length ) {
    				contents.wrapAll( html );

    			} else {
    				self.append( html );
    			}
    		} );
    	},

    	wrap: function( html ) {
    		var htmlIsFunction = isFunction( html );

    		return this.each( function( i ) {
    			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
    		} );
    	},

    	unwrap: function( selector ) {
    		this.parent( selector ).not( "body" ).each( function() {
    			jQuery( this ).replaceWith( this.childNodes );
    		} );
    		return this;
    	}
    } );


    jQuery.expr.pseudos.hidden = function( elem ) {
    	return !jQuery.expr.pseudos.visible( elem );
    };
    jQuery.expr.pseudos.visible = function( elem ) {
    	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
    };




    jQuery.ajaxSettings.xhr = function() {
    	try {
    		return new window.XMLHttpRequest();
    	} catch ( e ) {}
    };

    var xhrSuccessStatus = {

    		// File protocol always yields status code 0, assume 200
    		0: 200,

    		// Support: IE <=9 only
    		// #1450: sometimes IE returns 1223 when it should be 204
    		1223: 204
    	},
    	xhrSupported = jQuery.ajaxSettings.xhr();

    support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
    support.ajax = xhrSupported = !!xhrSupported;

    jQuery.ajaxTransport( function( options ) {
    	var callback, errorCallback;

    	// Cross domain only allowed if supported through XMLHttpRequest
    	if ( support.cors || xhrSupported && !options.crossDomain ) {
    		return {
    			send: function( headers, complete ) {
    				var i,
    					xhr = options.xhr();

    				xhr.open(
    					options.type,
    					options.url,
    					options.async,
    					options.username,
    					options.password
    				);

    				// Apply custom fields if provided
    				if ( options.xhrFields ) {
    					for ( i in options.xhrFields ) {
    						xhr[ i ] = options.xhrFields[ i ];
    					}
    				}

    				// Override mime type if needed
    				if ( options.mimeType && xhr.overrideMimeType ) {
    					xhr.overrideMimeType( options.mimeType );
    				}

    				// X-Requested-With header
    				// For cross-domain requests, seeing as conditions for a preflight are
    				// akin to a jigsaw puzzle, we simply never set it to be sure.
    				// (it can always be set on a per-request basis or even using ajaxSetup)
    				// For same-domain requests, won't change header if already provided.
    				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
    					headers[ "X-Requested-With" ] = "XMLHttpRequest";
    				}

    				// Set headers
    				for ( i in headers ) {
    					xhr.setRequestHeader( i, headers[ i ] );
    				}

    				// Callback
    				callback = function( type ) {
    					return function() {
    						if ( callback ) {
    							callback = errorCallback = xhr.onload =
    								xhr.onerror = xhr.onabort = xhr.ontimeout =
    									xhr.onreadystatechange = null;

    							if ( type === "abort" ) {
    								xhr.abort();
    							} else if ( type === "error" ) {

    								// Support: IE <=9 only
    								// On a manual native abort, IE9 throws
    								// errors on any property access that is not readyState
    								if ( typeof xhr.status !== "number" ) {
    									complete( 0, "error" );
    								} else {
    									complete(

    										// File: protocol always yields status 0; see #8605, #14207
    										xhr.status,
    										xhr.statusText
    									);
    								}
    							} else {
    								complete(
    									xhrSuccessStatus[ xhr.status ] || xhr.status,
    									xhr.statusText,

    									// Support: IE <=9 only
    									// IE9 has no XHR2 but throws on binary (trac-11426)
    									// For XHR2 non-text, let the caller handle it (gh-2498)
    									( xhr.responseType || "text" ) !== "text"  ||
    									typeof xhr.responseText !== "string" ?
    										{ binary: xhr.response } :
    										{ text: xhr.responseText },
    									xhr.getAllResponseHeaders()
    								);
    							}
    						}
    					};
    				};

    				// Listen to events
    				xhr.onload = callback();
    				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

    				// Support: IE 9 only
    				// Use onreadystatechange to replace onabort
    				// to handle uncaught aborts
    				if ( xhr.onabort !== undefined ) {
    					xhr.onabort = errorCallback;
    				} else {
    					xhr.onreadystatechange = function() {

    						// Check readyState before timeout as it changes
    						if ( xhr.readyState === 4 ) {

    							// Allow onerror to be called first,
    							// but that will not handle a native abort
    							// Also, save errorCallback to a variable
    							// as xhr.onerror cannot be accessed
    							window.setTimeout( function() {
    								if ( callback ) {
    									errorCallback();
    								}
    							} );
    						}
    					};
    				}

    				// Create the abort callback
    				callback = callback( "abort" );

    				try {

    					// Do send the request (this may raise an exception)
    					xhr.send( options.hasContent && options.data || null );
    				} catch ( e ) {

    					// #14683: Only rethrow if this hasn't been notified as an error yet
    					if ( callback ) {
    						throw e;
    					}
    				}
    			},

    			abort: function() {
    				if ( callback ) {
    					callback();
    				}
    			}
    		};
    	}
    } );




    // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
    jQuery.ajaxPrefilter( function( s ) {
    	if ( s.crossDomain ) {
    		s.contents.script = false;
    	}
    } );

    // Install script dataType
    jQuery.ajaxSetup( {
    	accepts: {
    		script: "text/javascript, application/javascript, " +
    			"application/ecmascript, application/x-ecmascript"
    	},
    	contents: {
    		script: /\b(?:java|ecma)script\b/
    	},
    	converters: {
    		"text script": function( text ) {
    			jQuery.globalEval( text );
    			return text;
    		}
    	}
    } );

    // Handle cache's special case and crossDomain
    jQuery.ajaxPrefilter( "script", function( s ) {
    	if ( s.cache === undefined ) {
    		s.cache = false;
    	}
    	if ( s.crossDomain ) {
    		s.type = "GET";
    	}
    } );

    // Bind script tag hack transport
    jQuery.ajaxTransport( "script", function( s ) {

    	// This transport only deals with cross domain requests
    	if ( s.crossDomain ) {
    		var script, callback;
    		return {
    			send: function( _, complete ) {
    				script = jQuery( "<script>" ).prop( {
    					charset: s.scriptCharset,
    					src: s.url
    				} ).on(
    					"load error",
    					callback = function( evt ) {
    						script.remove();
    						callback = null;
    						if ( evt ) {
    							complete( evt.type === "error" ? 404 : 200, evt.type );
    						}
    					}
    				);

    				// Use native DOM manipulation to avoid our domManip AJAX trickery
    				document.head.appendChild( script[ 0 ] );
    			},
    			abort: function() {
    				if ( callback ) {
    					callback();
    				}
    			}
    		};
    	}
    } );




    var oldCallbacks = [],
    	rjsonp = /(=)\?(?=&|$)|\?\?/;

    // Default jsonp settings
    jQuery.ajaxSetup( {
    	jsonp: "callback",
    	jsonpCallback: function() {
    		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
    		this[ callback ] = true;
    		return callback;
    	}
    } );

    // Detect, normalize options and install callbacks for jsonp requests
    jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

    	var callbackName, overwritten, responseContainer,
    		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
    			"url" :
    			typeof s.data === "string" &&
    				( s.contentType || "" )
    					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
    				rjsonp.test( s.data ) && "data"
    		);

    	// Handle iff the expected data type is "jsonp" or we have a parameter to set
    	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

    		// Get callback name, remembering preexisting value associated with it
    		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
    			s.jsonpCallback() :
    			s.jsonpCallback;

    		// Insert callback into url or form data
    		if ( jsonProp ) {
    			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
    		} else if ( s.jsonp !== false ) {
    			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
    		}

    		// Use data converter to retrieve json after script execution
    		s.converters[ "script json" ] = function() {
    			if ( !responseContainer ) {
    				jQuery.error( callbackName + " was not called" );
    			}
    			return responseContainer[ 0 ];
    		};

    		// Force json dataType
    		s.dataTypes[ 0 ] = "json";

    		// Install callback
    		overwritten = window[ callbackName ];
    		window[ callbackName ] = function() {
    			responseContainer = arguments;
    		};

    		// Clean-up function (fires after converters)
    		jqXHR.always( function() {

    			// If previous value didn't exist - remove it
    			if ( overwritten === undefined ) {
    				jQuery( window ).removeProp( callbackName );

    			// Otherwise restore preexisting value
    			} else {
    				window[ callbackName ] = overwritten;
    			}

    			// Save back as free
    			if ( s[ callbackName ] ) {

    				// Make sure that re-using the options doesn't screw things around
    				s.jsonpCallback = originalSettings.jsonpCallback;

    				// Save the callback name for future use
    				oldCallbacks.push( callbackName );
    			}

    			// Call if it was a function and we have a response
    			if ( responseContainer && isFunction( overwritten ) ) {
    				overwritten( responseContainer[ 0 ] );
    			}

    			responseContainer = overwritten = undefined;
    		} );

    		// Delegate to script
    		return "script";
    	}
    } );




    // Support: Safari 8 only
    // In Safari 8 documents created via document.implementation.createHTMLDocument
    // collapse sibling forms: the second one becomes a child of the first one.
    // Because of that, this security measure has to be disabled in Safari 8.
    // https://bugs.webkit.org/show_bug.cgi?id=137337
    support.createHTMLDocument = ( function() {
    	var body = document.implementation.createHTMLDocument( "" ).body;
    	body.innerHTML = "<form></form><form></form>";
    	return body.childNodes.length === 2;
    } )();


    // Argument "data" should be string of html
    // context (optional): If specified, the fragment will be created in this context,
    // defaults to document
    // keepScripts (optional): If true, will include scripts passed in the html string
    jQuery.parseHTML = function( data, context, keepScripts ) {
    	if ( typeof data !== "string" ) {
    		return [];
    	}
    	if ( typeof context === "boolean" ) {
    		keepScripts = context;
    		context = false;
    	}

    	var base, parsed, scripts;

    	if ( !context ) {

    		// Stop scripts or inline event handlers from being executed immediately
    		// by using document.implementation
    		if ( support.createHTMLDocument ) {
    			context = document.implementation.createHTMLDocument( "" );

    			// Set the base href for the created document
    			// so any parsed elements with URLs
    			// are based on the document's URL (gh-2965)
    			base = context.createElement( "base" );
    			base.href = document.location.href;
    			context.head.appendChild( base );
    		} else {
    			context = document;
    		}
    	}

    	parsed = rsingleTag.exec( data );
    	scripts = !keepScripts && [];

    	// Single tag
    	if ( parsed ) {
    		return [ context.createElement( parsed[ 1 ] ) ];
    	}

    	parsed = buildFragment( [ data ], context, scripts );

    	if ( scripts && scripts.length ) {
    		jQuery( scripts ).remove();
    	}

    	return jQuery.merge( [], parsed.childNodes );
    };


    /**
     * Load a url into a page
     */
    jQuery.fn.load = function( url, params, callback ) {
    	var selector, type, response,
    		self = this,
    		off = url.indexOf( " " );

    	if ( off > -1 ) {
    		selector = stripAndCollapse( url.slice( off ) );
    		url = url.slice( 0, off );
    	}

    	// If it's a function
    	if ( isFunction( params ) ) {

    		// We assume that it's the callback
    		callback = params;
    		params = undefined;

    	// Otherwise, build a param string
    	} else if ( params && typeof params === "object" ) {
    		type = "POST";
    	}

    	// If we have elements to modify, make the request
    	if ( self.length > 0 ) {
    		jQuery.ajax( {
    			url: url,

    			// If "type" variable is undefined, then "GET" method will be used.
    			// Make value of this field explicit since
    			// user can override it through ajaxSetup method
    			type: type || "GET",
    			dataType: "html",
    			data: params
    		} ).done( function( responseText ) {

    			// Save response for use in complete callback
    			response = arguments;

    			self.html( selector ?

    				// If a selector was specified, locate the right elements in a dummy div
    				// Exclude scripts to avoid IE 'Permission Denied' errors
    				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

    				// Otherwise use the full result
    				responseText );

    		// If the request succeeds, this function gets "data", "status", "jqXHR"
    		// but they are ignored because response was set above.
    		// If it fails, this function gets "jqXHR", "status", "error"
    		} ).always( callback && function( jqXHR, status ) {
    			self.each( function() {
    				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
    			} );
    		} );
    	}

    	return this;
    };




    // Attach a bunch of functions for handling common AJAX events
    jQuery.each( [
    	"ajaxStart",
    	"ajaxStop",
    	"ajaxComplete",
    	"ajaxError",
    	"ajaxSuccess",
    	"ajaxSend"
    ], function( i, type ) {
    	jQuery.fn[ type ] = function( fn ) {
    		return this.on( type, fn );
    	};
    } );




    jQuery.expr.pseudos.animated = function( elem ) {
    	return jQuery.grep( jQuery.timers, function( fn ) {
    		return elem === fn.elem;
    	} ).length;
    };




    jQuery.offset = {
    	setOffset: function( elem, options, i ) {
    		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
    			position = jQuery.css( elem, "position" ),
    			curElem = jQuery( elem ),
    			props = {};

    		// Set position first, in-case top/left are set even on static elem
    		if ( position === "static" ) {
    			elem.style.position = "relative";
    		}

    		curOffset = curElem.offset();
    		curCSSTop = jQuery.css( elem, "top" );
    		curCSSLeft = jQuery.css( elem, "left" );
    		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
    			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

    		// Need to be able to calculate position if either
    		// top or left is auto and position is either absolute or fixed
    		if ( calculatePosition ) {
    			curPosition = curElem.position();
    			curTop = curPosition.top;
    			curLeft = curPosition.left;

    		} else {
    			curTop = parseFloat( curCSSTop ) || 0;
    			curLeft = parseFloat( curCSSLeft ) || 0;
    		}

    		if ( isFunction( options ) ) {

    			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
    			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
    		}

    		if ( options.top != null ) {
    			props.top = ( options.top - curOffset.top ) + curTop;
    		}
    		if ( options.left != null ) {
    			props.left = ( options.left - curOffset.left ) + curLeft;
    		}

    		if ( "using" in options ) {
    			options.using.call( elem, props );

    		} else {
    			curElem.css( props );
    		}
    	}
    };

    jQuery.fn.extend( {

    	// offset() relates an element's border box to the document origin
    	offset: function( options ) {

    		// Preserve chaining for setter
    		if ( arguments.length ) {
    			return options === undefined ?
    				this :
    				this.each( function( i ) {
    					jQuery.offset.setOffset( this, options, i );
    				} );
    		}

    		var rect, win,
    			elem = this[ 0 ];

    		if ( !elem ) {
    			return;
    		}

    		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
    		// Support: IE <=11 only
    		// Running getBoundingClientRect on a
    		// disconnected node in IE throws an error
    		if ( !elem.getClientRects().length ) {
    			return { top: 0, left: 0 };
    		}

    		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
    		rect = elem.getBoundingClientRect();
    		win = elem.ownerDocument.defaultView;
    		return {
    			top: rect.top + win.pageYOffset,
    			left: rect.left + win.pageXOffset
    		};
    	},

    	// position() relates an element's margin box to its offset parent's padding box
    	// This corresponds to the behavior of CSS absolute positioning
    	position: function() {
    		if ( !this[ 0 ] ) {
    			return;
    		}

    		var offsetParent, offset, doc,
    			elem = this[ 0 ],
    			parentOffset = { top: 0, left: 0 };

    		// position:fixed elements are offset from the viewport, which itself always has zero offset
    		if ( jQuery.css( elem, "position" ) === "fixed" ) {

    			// Assume position:fixed implies availability of getBoundingClientRect
    			offset = elem.getBoundingClientRect();

    		} else {
    			offset = this.offset();

    			// Account for the *real* offset parent, which can be the document or its root element
    			// when a statically positioned element is identified
    			doc = elem.ownerDocument;
    			offsetParent = elem.offsetParent || doc.documentElement;
    			while ( offsetParent &&
    				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
    				jQuery.css( offsetParent, "position" ) === "static" ) {

    				offsetParent = offsetParent.parentNode;
    			}
    			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

    				// Incorporate borders into its offset, since they are outside its content origin
    				parentOffset = jQuery( offsetParent ).offset();
    				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
    				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
    			}
    		}

    		// Subtract parent offsets and element margins
    		return {
    			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
    			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
    		};
    	},

    	// This method will return documentElement in the following cases:
    	// 1) For the element inside the iframe without offsetParent, this method will return
    	//    documentElement of the parent window
    	// 2) For the hidden or detached element
    	// 3) For body or html element, i.e. in case of the html node - it will return itself
    	//
    	// but those exceptions were never presented as a real life use-cases
    	// and might be considered as more preferable results.
    	//
    	// This logic, however, is not guaranteed and can change at any point in the future
    	offsetParent: function() {
    		return this.map( function() {
    			var offsetParent = this.offsetParent;

    			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
    				offsetParent = offsetParent.offsetParent;
    			}

    			return offsetParent || documentElement;
    		} );
    	}
    } );

    // Create scrollLeft and scrollTop methods
    jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
    	var top = "pageYOffset" === prop;

    	jQuery.fn[ method ] = function( val ) {
    		return access( this, function( elem, method, val ) {

    			// Coalesce documents and windows
    			var win;
    			if ( isWindow( elem ) ) {
    				win = elem;
    			} else if ( elem.nodeType === 9 ) {
    				win = elem.defaultView;
    			}

    			if ( val === undefined ) {
    				return win ? win[ prop ] : elem[ method ];
    			}

    			if ( win ) {
    				win.scrollTo(
    					!top ? val : win.pageXOffset,
    					top ? val : win.pageYOffset
    				);

    			} else {
    				elem[ method ] = val;
    			}
    		}, method, val, arguments.length );
    	};
    } );

    // Support: Safari <=7 - 9.1, Chrome <=37 - 49
    // Add the top/left cssHooks using jQuery.fn.position
    // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
    // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
    // getComputedStyle returns percent when specified for top/left/bottom/right;
    // rather than make the css module depend on the offset module, just check for it here
    jQuery.each( [ "top", "left" ], function( i, prop ) {
    	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
    		function( elem, computed ) {
    			if ( computed ) {
    				computed = curCSS( elem, prop );

    				// If curCSS returns percentage, fallback to offset
    				return rnumnonpx.test( computed ) ?
    					jQuery( elem ).position()[ prop ] + "px" :
    					computed;
    			}
    		}
    	);
    } );


    // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
    	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
    		function( defaultExtra, funcName ) {

    		// Margin is only for outerHeight, outerWidth
    		jQuery.fn[ funcName ] = function( margin, value ) {
    			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
    				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

    			return access( this, function( elem, type, value ) {
    				var doc;

    				if ( isWindow( elem ) ) {

    					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
    					return funcName.indexOf( "outer" ) === 0 ?
    						elem[ "inner" + name ] :
    						elem.document.documentElement[ "client" + name ];
    				}

    				// Get document width or height
    				if ( elem.nodeType === 9 ) {
    					doc = elem.documentElement;

    					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
    					// whichever is greatest
    					return Math.max(
    						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
    						elem.body[ "offset" + name ], doc[ "offset" + name ],
    						doc[ "client" + name ]
    					);
    				}

    				return value === undefined ?

    					// Get width or height on the element, requesting but not forcing parseFloat
    					jQuery.css( elem, type, extra ) :

    					// Set width or height on the element
    					jQuery.style( elem, type, value, extra );
    			}, type, chainable ? margin : undefined, chainable );
    		};
    	} );
    } );


    jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
    	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
    	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
    	function( i, name ) {

    	// Handle event binding
    	jQuery.fn[ name ] = function( data, fn ) {
    		return arguments.length > 0 ?
    			this.on( name, null, data, fn ) :
    			this.trigger( name );
    	};
    } );

    jQuery.fn.extend( {
    	hover: function( fnOver, fnOut ) {
    		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
    	}
    } );




    jQuery.fn.extend( {

    	bind: function( types, data, fn ) {
    		return this.on( types, null, data, fn );
    	},
    	unbind: function( types, fn ) {
    		return this.off( types, null, fn );
    	},

    	delegate: function( selector, types, data, fn ) {
    		return this.on( types, selector, data, fn );
    	},
    	undelegate: function( selector, types, fn ) {

    		// ( namespace ) or ( selector, types [, fn] )
    		return arguments.length === 1 ?
    			this.off( selector, "**" ) :
    			this.off( types, selector || "**", fn );
    	}
    } );

    // Bind a function to a context, optionally partially applying any
    // arguments.
    // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
    // However, it is not slated for removal any time soon
    jQuery.proxy = function( fn, context ) {
    	var tmp, args, proxy;

    	if ( typeof context === "string" ) {
    		tmp = fn[ context ];
    		context = fn;
    		fn = tmp;
    	}

    	// Quick check to determine if target is callable, in the spec
    	// this throws a TypeError, but we will just return undefined.
    	if ( !isFunction( fn ) ) {
    		return undefined;
    	}

    	// Simulated bind
    	args = slice.call( arguments, 2 );
    	proxy = function() {
    		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
    	};

    	// Set the guid of unique handler to the same of original handler, so it can be removed
    	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

    	return proxy;
    };

    jQuery.holdReady = function( hold ) {
    	if ( hold ) {
    		jQuery.readyWait++;
    	} else {
    		jQuery.ready( true );
    	}
    };
    jQuery.isArray = Array.isArray;
    jQuery.parseJSON = JSON.parse;
    jQuery.nodeName = nodeName;
    jQuery.isFunction = isFunction;
    jQuery.isWindow = isWindow;
    jQuery.camelCase = camelCase;
    jQuery.type = toType;

    jQuery.now = Date.now;

    jQuery.isNumeric = function( obj ) {

    	// As of jQuery 3.0, isNumeric is limited to
    	// strings and numbers (primitives or objects)
    	// that can be coerced to finite numbers (gh-2662)
    	var type = jQuery.type( obj );
    	return ( type === "number" || type === "string" ) &&

    		// parseFloat NaNs numeric-cast false positives ("")
    		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    		// subtraction forces infinities to NaN
    		!isNaN( obj - parseFloat( obj ) );
    };




    // Register as a named AMD module, since jQuery can be concatenated with other
    // files that may use define, but not via a proper concatenation script that
    // understands anonymous AMD modules. A named AMD is safest and most robust
    // way to register. Lowercase jquery is used because AMD module names are
    // derived from file names, and jQuery is normally delivered in a lowercase
    // file name. Do this after creating the global so that if an AMD module wants
    // to call noConflict to hide this version of jQuery, it will work.

    // Note that for maximum portability, libraries that are not jQuery should
    // declare themselves as anonymous modules, and avoid setting a global if an
    // AMD loader is present. jQuery is a special case. For more information, see
    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

    if ( typeof define === "function" && define.amd ) {
    	define( "jquery", [], function() {
    		return jQuery;
    	} );
    }




    var

    	// Map over jQuery in case of overwrite
    	_jQuery = window.jQuery,

    	// Map over the $ in case of overwrite
    	_$ = window.$;

    jQuery.noConflict = function( deep ) {
    	if ( window.$ === jQuery ) {
    		window.$ = _$;
    	}

    	if ( deep && window.jQuery === jQuery ) {
    		window.jQuery = _jQuery;
    	}

    	return jQuery;
    };

    // Expose jQuery and $ identifiers, even in AMD
    // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
    // and CommonJS for browser emulators (#13566)
    if ( !noGlobal ) {
    	window.jQuery = window.$ = jQuery;
    }




    return jQuery;
    } );

    var jqueryProxy = /*#__PURE__*/Object.freeze({

    });

    /*! AdminLTE app.js
    * ================
    * Main JS application file for AdminLTE v2. This file
    * should be included in all pages. It controls some layout
    * options and implements exclusive AdminLTE plugins.
    *
    * @Author  Almsaeed Studio
    * @Support <https://www.almsaeedstudio.com>
    * @Email   <abdullah@almsaeedstudio.com>
    * @version 2.4.2
    * @repository git://github.com/almasaeed2010/AdminLTE.git
    * @license MIT <http://opensource.org/licenses/MIT>
    */
    if("undefined"==typeof jQuery)throw new Error("AdminLTE requires jQuery");+function(a){function b(b){return this.each(function(){var e=a(this),g=e.data(c);if(!g){var h=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,g=new f(e,h));}if("string"==typeof g){if(void 0===g[b])throw new Error("No method named "+b);g[b]();}})}var c="lte.boxrefresh",d={source:"",params:{},trigger:".refresh-btn",content:".box-body",loadInContent:!0,responseType:"",overlayTemplate:'<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>',onLoadStart:function(){},onLoadDone:function(a){return a}},e={data:'[data-widget="box-refresh"]'},f=function(b,c){if(this.element=b, this.options=c, this.$overlay=a(c.overlay), ""===c.source)throw new Error("Source url was not defined. Please specify a url in your BoxRefresh source option.");this._setUpListeners(), this.load();};f.prototype.load=function(){this._addOverlay(), this.options.onLoadStart.call(a(this)), a.get(this.options.source,this.options.params,function(b){this.options.loadInContent&&a(this.options.content).html(b), this.options.onLoadDone.call(a(this),b), this._removeOverlay();}.bind(this),""!==this.options.responseType&&this.options.responseType);}, f.prototype._setUpListeners=function(){a(this.element).on("click",e.trigger,function(a){a&&a.preventDefault(), this.load();}.bind(this));}, f.prototype._addOverlay=function(){a(this.element).append(this.$overlay);}, f.prototype._removeOverlay=function(){a(this.element).remove(this.$overlay);};var g=a.fn.boxRefresh;a.fn.boxRefresh=b, a.fn.boxRefresh.Constructor=f, a.fn.boxRefresh.noConflict=function(){return a.fn.boxRefresh=g, this}, a(window).on("load",function(){a(e.data).each(function(){b.call(a(this));});});}(jQuery), function(a){function b(b){return this.each(function(){var e=a(this),f=e.data(c);if(!f){var g=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,f=new h(e,g));}if("string"==typeof b){if(void 0===f[b])throw new Error("No method named "+b);f[b]();}})}var c="lte.boxwidget",d={animationSpeed:500,collapseTrigger:'[data-widget="collapse"]',removeTrigger:'[data-widget="remove"]',collapseIcon:"fa-minus",expandIcon:"fa-plus",removeIcon:"fa-times"},e={data:".box",collapsed:".collapsed-box",header:".box-header",body:".box-body",footer:".box-footer",tools:".box-tools"},f={collapsed:"collapsed-box"},g={collapsed:"collapsed.boxwidget",expanded:"expanded.boxwidget",removed:"removed.boxwidget"},h=function(a,b){this.element=a, this.options=b, this._setUpListeners();};h.prototype.toggle=function(){a(this.element).is(e.collapsed)?this.expand():this.collapse();}, h.prototype.expand=function(){var b=a.Event(g.expanded),c=this.options.collapseIcon,d=this.options.expandIcon;a(this.element).removeClass(f.collapsed), a(this.element).children(e.header+", "+e.body+", "+e.footer).children(e.tools).find("."+d).removeClass(d).addClass(c), a(this.element).children(e.body+", "+e.footer).slideDown(this.options.animationSpeed,function(){a(this.element).trigger(b);}.bind(this));}, h.prototype.collapse=function(){var b=a.Event(g.collapsed),c=this.options.collapseIcon,d=this.options.expandIcon;a(this.element).children(e.header+", "+e.body+", "+e.footer).children(e.tools).find("."+c).removeClass(c).addClass(d), a(this.element).children(e.body+", "+e.footer).slideUp(this.options.animationSpeed,function(){a(this.element).addClass(f.collapsed), a(this.element).trigger(b);}.bind(this));}, h.prototype.remove=function(){var b=a.Event(g.removed);a(this.element).slideUp(this.options.animationSpeed,function(){a(this.element).trigger(b), a(this.element).remove();}.bind(this));}, h.prototype._setUpListeners=function(){var b=this;a(this.element).on("click",this.options.collapseTrigger,function(c){return c&&c.preventDefault(), b.toggle(a(this)), !1}), a(this.element).on("click",this.options.removeTrigger,function(c){return c&&c.preventDefault(), b.remove(a(this)), !1});};var i=a.fn.boxWidget;a.fn.boxWidget=b, a.fn.boxWidget.Constructor=h, a.fn.boxWidget.noConflict=function(){return a.fn.boxWidget=i, this}, a(window).on("load",function(){a(e.data).each(function(){b.call(a(this));});});}(jQuery), function(a){function b(b){return this.each(function(){var e=a(this),f=e.data(c);if(!f){var g=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,f=new h(e,g));}"string"==typeof b&&f.toggle();})}var c="lte.controlsidebar",d={slide:!0},e={sidebar:".control-sidebar",data:'[data-toggle="control-sidebar"]',open:".control-sidebar-open",bg:".control-sidebar-bg",wrapper:".wrapper",content:".content-wrapper",boxed:".layout-boxed"},f={open:"control-sidebar-open",fixed:"fixed"},g={collapsed:"collapsed.controlsidebar",expanded:"expanded.controlsidebar"},h=function(a,b){this.element=a, this.options=b, this.hasBindedResize=!1, this.init();};h.prototype.init=function(){a(this.element).is(e.data)||a(this).on("click",this.toggle), this.fix(), a(window).resize(function(){this.fix();}.bind(this));}, h.prototype.toggle=function(b){b&&b.preventDefault(), this.fix(), a(e.sidebar).is(e.open)||a("body").is(e.open)?this.collapse():this.expand();}, h.prototype.expand=function(){this.options.slide?a(e.sidebar).addClass(f.open):a("body").addClass(f.open), a(this.element).trigger(a.Event(g.expanded));}, h.prototype.collapse=function(){a("body, "+e.sidebar).removeClass(f.open), a(this.element).trigger(a.Event(g.collapsed));}, h.prototype.fix=function(){a("body").is(e.boxed)&&this._fixForBoxed(a(e.bg));}, h.prototype._fixForBoxed=function(b){b.css({position:"absolute",height:a(e.wrapper).height()});};var i=a.fn.controlSidebar;a.fn.controlSidebar=b, a.fn.controlSidebar.Constructor=h, a.fn.controlSidebar.noConflict=function(){return a.fn.controlSidebar=i, this}, a(document).on("click",e.data,function(c){c&&c.preventDefault(), b.call(a(this),"toggle");});}(jQuery), function(a){function b(b){return this.each(function(){var d=a(this),e=d.data(c);e||d.data(c,e=new f(d)), "string"==typeof b&&e.toggle(d);})}var c="lte.directchat",d={data:'[data-widget="chat-pane-toggle"]',box:".direct-chat"},e={open:"direct-chat-contacts-open"},f=function(a){this.element=a;};f.prototype.toggle=function(a){a.parents(d.box).first().toggleClass(e.open);};var g=a.fn.directChat;a.fn.directChat=b, a.fn.directChat.Constructor=f, a.fn.directChat.noConflict=function(){return a.fn.directChat=g, this}, a(document).on("click",d.data,function(c){c&&c.preventDefault(), b.call(a(this),"toggle");});}(jQuery), function(a){function b(b){return this.each(function(){var e=a(this),f=e.data(c);if(!f){var h=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,f=new g(h));}if("string"==typeof b){if(void 0===f[b])throw new Error("No method named "+b);f[b]();}})}var c="lte.layout",d={slimscroll:!0,resetHeight:!0},e={wrapper:".wrapper",contentWrapper:".content-wrapper",layoutBoxed:".layout-boxed",mainFooter:".main-footer",mainHeader:".main-header",sidebar:".sidebar",controlSidebar:".control-sidebar",fixed:".fixed",sidebarMenu:".sidebar-menu",logo:".main-header .logo"},f={fixed:"fixed",holdTransition:"hold-transition"},g=function(a){this.options=a, this.bindedResize=!1, this.activate();};g.prototype.activate=function(){this.fix(), this.fixSidebar(), a("body").removeClass(f.holdTransition), this.options.resetHeight&&a("body, html, "+e.wrapper).css({height:"auto","min-height":"100%"}), this.bindedResize||(a(window).resize(function(){this.fix(), this.fixSidebar(), a(e.logo+", "+e.sidebar).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){this.fix(), this.fixSidebar();}.bind(this));}.bind(this)), this.bindedResize=!0), a(e.sidebarMenu).on("expanded.tree",function(){this.fix(), this.fixSidebar();}.bind(this)), a(e.sidebarMenu).on("collapsed.tree",function(){this.fix(), this.fixSidebar();}.bind(this));}, g.prototype.fix=function(){a(e.layoutBoxed+" > "+e.wrapper).css("overflow","hidden");var b=a(e.mainFooter).outerHeight()||0,c=a(e.mainHeader).outerHeight()+b,d=a(window).height(),g=a(e.sidebar).height()||0;if(a("body").hasClass(f.fixed))a(e.contentWrapper).css("min-height",d-b);else{var h;d>=g?(a(e.contentWrapper).css("min-height",d-c), h=d-c):(a(e.contentWrapper).css("min-height",g), h=g);var i=a(e.controlSidebar);void 0!==i&&i.height()>h&&a(e.contentWrapper).css("min-height",i.height());}}, g.prototype.fixSidebar=function(){if(!a("body").hasClass(f.fixed))return void(void 0!==a.fn.slimScroll&&a(e.sidebar).slimScroll({destroy:!0}).height("auto"));this.options.slimscroll&&void 0!==a.fn.slimScroll&&a(e.sidebar).slimScroll({height:a(window).height()-a(e.mainHeader).height()+"px"});};var h=a.fn.layout;a.fn.layout=b, a.fn.layout.Constuctor=g, a.fn.layout.noConflict=function(){return a.fn.layout=h, this}, a(window).on("load",function(){b.call(a("body"));});}(jQuery), function(a){function b(b){return this.each(function(){var e=a(this),f=e.data(c);if(!f){var g=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,f=new h(g));}"toggle"===b&&f.toggle();})}var c="lte.pushmenu",d={collapseScreenSize:767,expandOnHover:!1,expandTransitionDelay:200},e={collapsed:".sidebar-collapse",open:".sidebar-open",mainSidebar:".main-sidebar",contentWrapper:".content-wrapper",searchInput:".sidebar-form .form-control",button:'[data-toggle="push-menu"]',mini:".sidebar-mini",expanded:".sidebar-expanded-on-hover",layoutFixed:".fixed"},f={collapsed:"sidebar-collapse",open:"sidebar-open",mini:"sidebar-mini",expanded:"sidebar-expanded-on-hover",expandFeature:"sidebar-mini-expand-feature",layoutFixed:"fixed"},g={expanded:"expanded.pushMenu",collapsed:"collapsed.pushMenu"},h=function(a){this.options=a, this.init();};h.prototype.init=function(){(this.options.expandOnHover||a("body").is(e.mini+e.layoutFixed))&&(this.expandOnHover(), a("body").addClass(f.expandFeature)), a(e.contentWrapper).click(function(){a(window).width()<=this.options.collapseScreenSize&&a("body").hasClass(f.open)&&this.close();}.bind(this)), a(e.searchInput).click(function(a){a.stopPropagation();});}, h.prototype.toggle=function(){var b=a(window).width(),c=!a("body").hasClass(f.collapsed);b<=this.options.collapseScreenSize&&(c=a("body").hasClass(f.open)), c?this.close():this.open();}, h.prototype.open=function(){a(window).width()>this.options.collapseScreenSize?a("body").removeClass(f.collapsed).trigger(a.Event(g.expanded)):a("body").addClass(f.open).trigger(a.Event(g.expanded));}, h.prototype.close=function(){a(window).width()>this.options.collapseScreenSize?a("body").addClass(f.collapsed).trigger(a.Event(g.collapsed)):a("body").removeClass(f.open+" "+f.collapsed).trigger(a.Event(g.collapsed));}, h.prototype.expandOnHover=function(){a(e.mainSidebar).hover(function(){a("body").is(e.mini+e.collapsed)&&a(window).width()>this.options.collapseScreenSize&&this.expand();}.bind(this),function(){a("body").is(e.expanded)&&this.collapse();}.bind(this));}, h.prototype.expand=function(){setTimeout(function(){a("body").removeClass(f.collapsed).addClass(f.expanded);},this.options.expandTransitionDelay);}, h.prototype.collapse=function(){setTimeout(function(){a("body").removeClass(f.expanded).addClass(f.collapsed);},this.options.expandTransitionDelay);};var i=a.fn.pushMenu;a.fn.pushMenu=b, a.fn.pushMenu.Constructor=h, a.fn.pushMenu.noConflict=function(){return a.fn.pushMenu=i, this}, a(document).on("click",e.button,function(c){c.preventDefault(), b.call(a(this),"toggle");}), a(window).on("load",function(){b.call(a(e.button));});}(jQuery), function(a){function b(b){return this.each(function(){var e=a(this),f=e.data(c);if(!f){var h=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,f=new g(e,h));}if("string"==typeof f){if(void 0===f[b])throw new Error("No method named "+b);f[b]();}})}var c="lte.todolist",d={onCheck:function(a){return a},onUnCheck:function(a){return a}},e={data:'[data-widget="todo-list"]'},f={done:"done"},g=function(a,b){this.element=a, this.options=b, this._setUpListeners();};g.prototype.toggle=function(a){if(a.parents(e.li).first().toggleClass(f.done), !a.prop("checked"))return void this.unCheck(a);this.check(a);}, g.prototype.check=function(a){this.options.onCheck.call(a);}, g.prototype.unCheck=function(a){this.options.onUnCheck.call(a);}, g.prototype._setUpListeners=function(){var b=this;a(this.element).on("change ifChanged","input:checkbox",function(){b.toggle(a(this));});};var h=a.fn.todoList;a.fn.todoList=b, a.fn.todoList.Constructor=g, a.fn.todoList.noConflict=function(){return a.fn.todoList=h, this}, a(window).on("load",function(){a(e.data).each(function(){b.call(a(this));});});}(jQuery), function(a){function b(b){return this.each(function(){var e=a(this);if(!e.data(c)){var f=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,new h(e,f));}})}var c="lte.tree",d={animationSpeed:500,accordion:!0,followLink:!1,trigger:".treeview a"},e={tree:".tree",treeview:".treeview",treeviewMenu:".treeview-menu",open:".menu-open, .active",li:"li",data:'[data-widget="tree"]',active:".active"},f={open:"menu-open",tree:"tree"},g={collapsed:"collapsed.tree",expanded:"expanded.tree"},h=function(b,c){this.element=b, this.options=c, a(this.element).addClass(f.tree), a(e.treeview+e.active,this.element).addClass(f.open), this._setUpListeners();};h.prototype.toggle=function(a,b){var c=a.next(e.treeviewMenu),d=a.parent(),g=d.hasClass(f.open);d.is(e.treeview)&&(this.options.followLink&&"#"!==a.attr("href")||b.preventDefault(), g?this.collapse(c,d):this.expand(c,d));}, h.prototype.expand=function(b,c){var d=a.Event(g.expanded);if(this.options.accordion){var h=c.siblings(e.open),i=h.children(e.treeviewMenu);this.collapse(i,h);}c.addClass(f.open), b.slideDown(this.options.animationSpeed,function(){a(this.element).trigger(d);}.bind(this));}, h.prototype.collapse=function(b,c){var d=a.Event(g.collapsed);b.find(e.open).removeClass(f.open), c.removeClass(f.open), b.slideUp(this.options.animationSpeed,function(){b.find(e.open+" > "+e.treeview).slideUp(), a(this.element).trigger(d);}.bind(this));}, h.prototype._setUpListeners=function(){var b=this;a(this.element).on("click",this.options.trigger,function(c){b.toggle(a(this),c);});};var i=a.fn.tree;a.fn.tree=b, a.fn.tree.Constructor=h, a.fn.tree.noConflict=function(){return a.fn.tree=i, this}, a(window).on("load",function(){a(e.data).each(function(){b.call(a(this));});});}(jQuery);

    var $ = jqueryProxy;
    function BoxRefresh(_a, children) {
        var xa = _a.xa, attrs = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({ oncreate: onCreate }, attrs), children));
    }
    function onCreate(element) {
        $(element).boxRefresh();
    }

    var $$1 = jqueryProxy;
    function BoxWidget(_a, children) {
        var xa = _a.xa, attrs = __rest(_a, ["xa"]);
        if (null == attrs.class) {
            attrs.class = '';
        }
        attrs.class += ' box';
        return (xatto.x("div", __assign({ oncreate: onCreate$1 }, attrs), children));
    }
    function onCreate$1(element) {
        $$1(element).boxWidget();
    }

    var $$2 = jqueryProxy;
    function ControlSidebar(_a, children) {
        var xa = _a.xa, attrs = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({ oncreate: onCreate$2 }, attrs), children));
    }
    function onCreate$2(element) {
        $$2(element).controlSidebar();
    }

    var $$3 = jqueryProxy;
    function DirectChat(_a, children) {
        var xa = _a.xa, attrs = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({ oncreate: onCreate$3 }, attrs), children));
    }
    function onCreate$3(element) {
        $$3(element).directChat();
    }

    var $$4 = jqueryProxy;
    function Layout(_a, children) {
        var xa = _a.xa, attrs = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({ oncreate: onCreate$4 }, attrs),
            xatto.x("div", { class: "wrapper" }, children)));
    }
    function onCreate$4(element) {
        $$4(element).layout();
    }

    var $$5 = jqueryProxy;
    function PushMenu(_a, children) {
        var xa = _a.xa, attrs = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({ oncreate: onCreate$5 }, attrs), children));
    }
    function onCreate$5(element) {
        $$5(element).pushMenu();
    }

    var $$6 = jqueryProxy;
    function TodoList(_a, children) {
        var xa = _a.xa, attrs = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({ oncreate: onCreate$6 }, attrs), children));
    }
    function onCreate$6(element) {
        $$6(element).todoList();
    }

    var $$7 = jqueryProxy;
    function Tree(_a, children) {
        var xa = _a.xa, attrs = __rest(_a, ["xa"]);
        return (xatto.x("ul", __assign({ oncreate: onCreate$7 }, attrs), children));
    }
    function onCreate$7(element) {
        $$7(element).tree();
    }

    /*!
     * Chart.js
     * http://chartjs.org/
     * Version: 1.0.2
     *
     * Copyright 2015 Nick Downie
     * Released under the MIT license
     * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
     */


    (function(){

    	//Declare root variable - window in the browser, global on the server
    	var root = this,
    		previous = root.Chart;

    	//Occupy the global variable of Chart, and create a simple base class
    	var Chart = function(context){
    		this.canvas = context.canvas;

    		this.ctx = context;

    		//Variables global to the chart
    		var computeDimension = function(element,dimension)
    		{
    			if (element['offset'+dimension])
    			{
    				return element['offset'+dimension];
    			}
    			else
    			{
    				return document.defaultView.getComputedStyle(element).getPropertyValue(dimension);
    			}
    		};

    		var width = this.width = computeDimension(context.canvas,'Width');
    		var height = this.height = computeDimension(context.canvas,'Height');

    		// Firefox requires this to work correctly
    		context.canvas.width  = width;
    		context.canvas.height = height;

    		var width = this.width = context.canvas.width;
    		var height = this.height = context.canvas.height;
    		this.aspectRatio = this.width / this.height;
    		//High pixel density displays - multiply the size of the canvas height/width by the device pixel ratio, then scale.
    		helpers.retinaScale(this);

    		return this;
    	};
    	//Globally expose the defaults to allow for user updating/changing
    	Chart.defaults = {
    		global: {
    			// Boolean - Whether to animate the chart
    			animation: true,

    			// Number - Number of animation steps
    			animationSteps: 60,

    			// String - Animation easing effect
    			animationEasing: "easeOutQuart",

    			// Boolean - If we should show the scale at all
    			showScale: true,

    			// Boolean - If we want to override with a hard coded scale
    			scaleOverride: false,

    			// ** Required if scaleOverride is true **
    			// Number - The number of steps in a hard coded scale
    			scaleSteps: null,
    			// Number - The value jump in the hard coded scale
    			scaleStepWidth: null,
    			// Number - The scale starting value
    			scaleStartValue: null,

    			// String - Colour of the scale line
    			scaleLineColor: "rgba(0,0,0,.1)",

    			// Number - Pixel width of the scale line
    			scaleLineWidth: 1,

    			// Boolean - Whether to show labels on the scale
    			scaleShowLabels: true,

    			// Interpolated JS string - can access value
    			scaleLabel: "<%=value%>",

    			// Boolean - Whether the scale should stick to integers, and not show any floats even if drawing space is there
    			scaleIntegersOnly: true,

    			// Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    			scaleBeginAtZero: false,

    			// String - Scale label font declaration for the scale label
    			scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    			// Number - Scale label font size in pixels
    			scaleFontSize: 12,

    			// String - Scale label font weight style
    			scaleFontStyle: "normal",

    			// String - Scale label font colour
    			scaleFontColor: "#666",

    			// Boolean - whether or not the chart should be responsive and resize when the browser does.
    			responsive: false,

    			// Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    			maintainAspectRatio: true,

    			// Boolean - Determines whether to draw tooltips on the canvas or not - attaches events to touchmove & mousemove
    			showTooltips: true,

    			// Boolean - Determines whether to draw built-in tooltip or call custom tooltip function
    			customTooltips: false,

    			// Array - Array of string names to attach tooltip events
    			tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],

    			// String - Tooltip background colour
    			tooltipFillColor: "rgba(0,0,0,0.8)",

    			// String - Tooltip label font declaration for the scale label
    			tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    			// Number - Tooltip label font size in pixels
    			tooltipFontSize: 14,

    			// String - Tooltip font weight style
    			tooltipFontStyle: "normal",

    			// String - Tooltip label font colour
    			tooltipFontColor: "#fff",

    			// String - Tooltip title font declaration for the scale label
    			tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    			// Number - Tooltip title font size in pixels
    			tooltipTitleFontSize: 14,

    			// String - Tooltip title font weight style
    			tooltipTitleFontStyle: "bold",

    			// String - Tooltip title font colour
    			tooltipTitleFontColor: "#fff",

    			// Number - pixel width of padding around tooltip text
    			tooltipYPadding: 6,

    			// Number - pixel width of padding around tooltip text
    			tooltipXPadding: 6,

    			// Number - Size of the caret on the tooltip
    			tooltipCaretSize: 8,

    			// Number - Pixel radius of the tooltip border
    			tooltipCornerRadius: 6,

    			// Number - Pixel offset from point x to tooltip edge
    			tooltipXOffset: 10,

    			// String - Template string for single tooltips
    			tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

    			// String - Template string for single tooltips
    			multiTooltipTemplate: "<%= value %>",

    			// String - Colour behind the legend colour block
    			multiTooltipKeyBackground: '#fff',

    			// Function - Will fire on animation progression.
    			onAnimationProgress: function(){},

    			// Function - Will fire on animation completion.
    			onAnimationComplete: function(){}

    		}
    	};

    	//Create a dictionary of chart types, to allow for extension of existing types
    	Chart.types = {};

    	//Global Chart helpers object for utility methods and classes
    	var helpers = Chart.helpers = {};

    		//-- Basic js utility methods
    	var each = helpers.each = function(loopable,callback,self){
    			var additionalArgs = Array.prototype.slice.call(arguments, 3);
    			// Check to see if null or undefined firstly.
    			if (loopable){
    				if (loopable.length === +loopable.length){
    					var i;
    					for (i=0; i<loopable.length; i++){
    						callback.apply(self,[loopable[i], i].concat(additionalArgs));
    					}
    				}
    				else{
    					for (var item in loopable){
    						callback.apply(self,[loopable[item],item].concat(additionalArgs));
    					}
    				}
    			}
    		},
    		clone = helpers.clone = function(obj){
    			var objClone = {};
    			each(obj,function(value,key){
    				if (obj.hasOwnProperty(key)) objClone[key] = value;
    			});
    			return objClone;
    		},
    		extend = helpers.extend = function(base){
    			each(Array.prototype.slice.call(arguments,1), function(extensionObject) {
    				each(extensionObject,function(value,key){
    					if (extensionObject.hasOwnProperty(key)) base[key] = value;
    				});
    			});
    			return base;
    		},
    		merge = helpers.merge = function(base,master){
    			//Merge properties in left object over to a shallow clone of object right.
    			var args = Array.prototype.slice.call(arguments,0);
    			args.unshift({});
    			return extend.apply(null, args);
    		},
    		indexOf = helpers.indexOf = function(arrayToSearch, item){
    			if (Array.prototype.indexOf) {
    				return arrayToSearch.indexOf(item);
    			}
    			else{
    				for (var i = 0; i < arrayToSearch.length; i++) {
    					if (arrayToSearch[i] === item) return i;
    				}
    				return -1;
    			}
    		},
    		where = helpers.where = function(collection, filterCallback){
    			var filtered = [];

    			helpers.each(collection, function(item){
    				if (filterCallback(item)){
    					filtered.push(item);
    				}
    			});

    			return filtered;
    		},
    		findNextWhere = helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex){
    			// Default to start of the array
    			if (!startIndex){
    				startIndex = -1;
    			}
    			for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
    				var currentItem = arrayToSearch[i];
    				if (filterCallback(currentItem)){
    					return currentItem;
    				}
    			}
    		},
    		findPreviousWhere = helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex){
    			// Default to end of the array
    			if (!startIndex){
    				startIndex = arrayToSearch.length;
    			}
    			for (var i = startIndex - 1; i >= 0; i--) {
    				var currentItem = arrayToSearch[i];
    				if (filterCallback(currentItem)){
    					return currentItem;
    				}
    			}
    		},
    		inherits = helpers.inherits = function(extensions){
    			//Basic javascript inheritance based on the model created in Backbone.js
    			var parent = this;
    			var ChartElement = (extensions && extensions.hasOwnProperty("constructor")) ? extensions.constructor : function(){ return parent.apply(this, arguments); };

    			var Surrogate = function(){ this.constructor = ChartElement;};
    			Surrogate.prototype = parent.prototype;
    			ChartElement.prototype = new Surrogate();

    			ChartElement.extend = inherits;

    			if (extensions) extend(ChartElement.prototype, extensions);

    			ChartElement.__super__ = parent.prototype;

    			return ChartElement;
    		},
    		noop = helpers.noop = function(){},
    		uid = helpers.uid = (function(){
    			var id=0;
    			return function(){
    				return "chart-" + id++;
    			};
    		})(),
    		warn = helpers.warn = function(str){
    			//Method for warning of errors
    			if (window.console && typeof window.console.warn == "function") console.warn(str);
    		},
    		amd = helpers.amd = (typeof define == 'function' && define.amd),
    		//-- Math methods
    		isNumber = helpers.isNumber = function(n){
    			return !isNaN(parseFloat(n)) && isFinite(n);
    		},
    		max = helpers.max = function(array){
    			return Math.max.apply( Math, array );
    		},
    		min = helpers.min = function(array){
    			return Math.min.apply( Math, array );
    		},
    		cap = helpers.cap = function(valueToCap,maxValue,minValue){
    			if(isNumber(maxValue)) {
    				if( valueToCap > maxValue ) {
    					return maxValue;
    				}
    			}
    			else if(isNumber(minValue)){
    				if ( valueToCap < minValue ){
    					return minValue;
    				}
    			}
    			return valueToCap;
    		},
    		getDecimalPlaces = helpers.getDecimalPlaces = function(num){
    			if (num%1!==0 && isNumber(num)){
    				return num.toString().split(".")[1].length;
    			}
    			else {
    				return 0;
    			}
    		},
    		toRadians = helpers.radians = function(degrees){
    			return degrees * (Math.PI/180);
    		},
    		// Gets the angle from vertical upright to the point about a centre.
    		getAngleFromPoint = helpers.getAngleFromPoint = function(centrePoint, anglePoint){
    			var distanceFromXCenter = anglePoint.x - centrePoint.x,
    				distanceFromYCenter = anglePoint.y - centrePoint.y,
    				radialDistanceFromCenter = Math.sqrt( distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);


    			var angle = Math.PI * 2 + Math.atan2(distanceFromYCenter, distanceFromXCenter);

    			//If the segment is in the top left quadrant, we need to add another rotation to the angle
    			if (distanceFromXCenter < 0 && distanceFromYCenter < 0){
    				angle += Math.PI*2;
    			}

    			return {
    				angle: angle,
    				distance: radialDistanceFromCenter
    			};
    		},
    		aliasPixel = helpers.aliasPixel = function(pixelWidth){
    			return (pixelWidth % 2 === 0) ? 0 : 0.5;
    		},
    		splineCurve = helpers.splineCurve = function(FirstPoint,MiddlePoint,AfterPoint,t){
    			//Props to Rob Spencer at scaled innovation for his post on splining between points
    			//http://scaledinnovation.com/analytics/splines/aboutSplines.html
    			var d01=Math.sqrt(Math.pow(MiddlePoint.x-FirstPoint.x,2)+Math.pow(MiddlePoint.y-FirstPoint.y,2)),
    				d12=Math.sqrt(Math.pow(AfterPoint.x-MiddlePoint.x,2)+Math.pow(AfterPoint.y-MiddlePoint.y,2)),
    				fa=t*d01/(d01+d12),// scaling factor for triangle Ta
    				fb=t*d12/(d01+d12);
    			return {
    				inner : {
    					x : MiddlePoint.x-fa*(AfterPoint.x-FirstPoint.x),
    					y : MiddlePoint.y-fa*(AfterPoint.y-FirstPoint.y)
    				},
    				outer : {
    					x: MiddlePoint.x+fb*(AfterPoint.x-FirstPoint.x),
    					y : MiddlePoint.y+fb*(AfterPoint.y-FirstPoint.y)
    				}
    			};
    		},
    		calculateOrderOfMagnitude = helpers.calculateOrderOfMagnitude = function(val){
    			return Math.floor(Math.log(val) / Math.LN10);
    		},
    		calculateScaleRange = helpers.calculateScaleRange = function(valuesArray, drawingSize, textSize, startFromZero, integersOnly){

    			//Set a minimum step of two - a point at the top of the graph, and a point at the base
    			var minSteps = 2,
    				maxSteps = Math.floor(drawingSize/(textSize * 1.5)),
    				skipFitting = (minSteps >= maxSteps);

    			var maxValue = max(valuesArray),
    				minValue = min(valuesArray);

    			// We need some degree of seperation here to calculate the scales if all the values are the same
    			// Adding/minusing 0.5 will give us a range of 1.
    			if (maxValue === minValue){
    				maxValue += 0.5;
    				// So we don't end up with a graph with a negative start value if we've said always start from zero
    				if (minValue >= 0.5 && !startFromZero){
    					minValue -= 0.5;
    				}
    				else{
    					// Make up a whole number above the values
    					maxValue += 0.5;
    				}
    			}

    			var	valueRange = Math.abs(maxValue - minValue),
    				rangeOrderOfMagnitude = calculateOrderOfMagnitude(valueRange),
    				graphMax = Math.ceil(maxValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
    				graphMin = (startFromZero) ? 0 : Math.floor(minValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
    				graphRange = graphMax - graphMin,
    				stepValue = Math.pow(10, rangeOrderOfMagnitude),
    				numberOfSteps = Math.round(graphRange / stepValue);

    			//If we have more space on the graph we'll use it to give more definition to the data
    			while((numberOfSteps > maxSteps || (numberOfSteps * 2) < maxSteps) && !skipFitting) {
    				if(numberOfSteps > maxSteps){
    					stepValue *=2;
    					numberOfSteps = Math.round(graphRange/stepValue);
    					// Don't ever deal with a decimal number of steps - cancel fitting and just use the minimum number of steps.
    					if (numberOfSteps % 1 !== 0){
    						skipFitting = true;
    					}
    				}
    				//We can fit in double the amount of scale points on the scale
    				else{
    					//If user has declared ints only, and the step value isn't a decimal
    					if (integersOnly && rangeOrderOfMagnitude >= 0){
    						//If the user has said integers only, we need to check that making the scale more granular wouldn't make it a float
    						if(stepValue/2 % 1 === 0){
    							stepValue /=2;
    							numberOfSteps = Math.round(graphRange/stepValue);
    						}
    						//If it would make it a float break out of the loop
    						else{
    							break;
    						}
    					}
    					//If the scale doesn't have to be an int, make the scale more granular anyway.
    					else{
    						stepValue /=2;
    						numberOfSteps = Math.round(graphRange/stepValue);
    					}

    				}
    			}

    			if (skipFitting){
    				numberOfSteps = minSteps;
    				stepValue = graphRange / numberOfSteps;
    			}

    			return {
    				steps : numberOfSteps,
    				stepValue : stepValue,
    				min : graphMin,
    				max	: graphMin + (numberOfSteps * stepValue)
    			};

    		},
    		/* jshint ignore:start */
    		// Blows up jshint errors based on the new Function constructor
    		//Templating methods
    		//Javascript micro templating by John Resig - source at http://ejohn.org/blog/javascript-micro-templating/
    		template = helpers.template = function(templateString, valuesObject){

    			// If templateString is function rather than string-template - call the function for valuesObject

    			if(templateString instanceof Function){
    			 	return templateString(valuesObject);
    		 	}

    			var cache = {};
    			function tmpl(str, data){
    				// Figure out if we're getting a template, or if we need to
    				// load the template - and be sure to cache the result.
    				var fn = !/\W/.test(str) ?
    				cache[str] = cache[str] :

    				// Generate a reusable function that will serve as a template
    				// generator (and which will be cached).
    				new Function("obj",
    					"var p=[],print=function(){p.push.apply(p,arguments);};" +

    					// Introduce the data as local variables using with(){}
    					"with(obj){p.push('" +

    					// Convert the template into pure JavaScript
    					str
    						.replace(/[\r\t\n]/g, " ")
    						.split("<%").join("\t")
    						.replace(/((^|%>)[^\t]*)'/g, "$1\r")
    						.replace(/\t=(.*?)%>/g, "',$1,'")
    						.split("\t").join("');")
    						.split("%>").join("p.push('")
    						.split("\r").join("\\'") +
    					"');}return p.join('');"
    				);

    				// Provide some basic currying to the user
    				return data ? fn( data ) : fn;
    			}
    			return tmpl(templateString,valuesObject);
    		},
    		/* jshint ignore:end */
    		generateLabels = helpers.generateLabels = function(templateString,numberOfSteps,graphMin,stepValue){
    			var labelsArray = new Array(numberOfSteps);
    			if (labelTemplateString){
    				each(labelsArray,function(val,index){
    					labelsArray[index] = template(templateString,{value: (graphMin + (stepValue*(index+1)))});
    				});
    			}
    			return labelsArray;
    		},
    		//--Animation methods
    		//Easing functions adapted from Robert Penner's easing equations
    		//http://www.robertpenner.com/easing/
    		easingEffects = helpers.easingEffects = {
    			linear: function (t) {
    				return t;
    			},
    			easeInQuad: function (t) {
    				return t * t;
    			},
    			easeOutQuad: function (t) {
    				return -1 * t * (t - 2);
    			},
    			easeInOutQuad: function (t) {
    				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t;
    				return -1 / 2 * ((--t) * (t - 2) - 1);
    			},
    			easeInCubic: function (t) {
    				return t * t * t;
    			},
    			easeOutCubic: function (t) {
    				return 1 * ((t = t / 1 - 1) * t * t + 1);
    			},
    			easeInOutCubic: function (t) {
    				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t;
    				return 1 / 2 * ((t -= 2) * t * t + 2);
    			},
    			easeInQuart: function (t) {
    				return t * t * t * t;
    			},
    			easeOutQuart: function (t) {
    				return -1 * ((t = t / 1 - 1) * t * t * t - 1);
    			},
    			easeInOutQuart: function (t) {
    				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t;
    				return -1 / 2 * ((t -= 2) * t * t * t - 2);
    			},
    			easeInQuint: function (t) {
    				return 1 * (t /= 1) * t * t * t * t;
    			},
    			easeOutQuint: function (t) {
    				return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
    			},
    			easeInOutQuint: function (t) {
    				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t * t;
    				return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
    			},
    			easeInSine: function (t) {
    				return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
    			},
    			easeOutSine: function (t) {
    				return 1 * Math.sin(t / 1 * (Math.PI / 2));
    			},
    			easeInOutSine: function (t) {
    				return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
    			},
    			easeInExpo: function (t) {
    				return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
    			},
    			easeOutExpo: function (t) {
    				return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
    			},
    			easeInOutExpo: function (t) {
    				if (t === 0) return 0;
    				if (t === 1) return 1;
    				if ((t /= 1 / 2) < 1) return 1 / 2 * Math.pow(2, 10 * (t - 1));
    				return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
    			},
    			easeInCirc: function (t) {
    				if (t >= 1) return t;
    				return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
    			},
    			easeOutCirc: function (t) {
    				return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
    			},
    			easeInOutCirc: function (t) {
    				if ((t /= 1 / 2) < 1) return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
    				return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    			},
    			easeInElastic: function (t) {
    				var s = 1.70158;
    				var p = 0;
    				var a = 1;
    				if (t === 0) return 0;
    				if ((t /= 1) == 1) return 1;
    				if (!p) p = 1 * 0.3;
    				if (a < Math.abs(1)) {
    					a = 1;
    					s = p / 4;
    				} else s = p / (2 * Math.PI) * Math.asin(1 / a);
    				return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
    			},
    			easeOutElastic: function (t) {
    				var s = 1.70158;
    				var p = 0;
    				var a = 1;
    				if (t === 0) return 0;
    				if ((t /= 1) == 1) return 1;
    				if (!p) p = 1 * 0.3;
    				if (a < Math.abs(1)) {
    					a = 1;
    					s = p / 4;
    				} else s = p / (2 * Math.PI) * Math.asin(1 / a);
    				return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
    			},
    			easeInOutElastic: function (t) {
    				var s = 1.70158;
    				var p = 0;
    				var a = 1;
    				if (t === 0) return 0;
    				if ((t /= 1 / 2) == 2) return 1;
    				if (!p) p = 1 * (0.3 * 1.5);
    				if (a < Math.abs(1)) {
    					a = 1;
    					s = p / 4;
    				} else s = p / (2 * Math.PI) * Math.asin(1 / a);
    				if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
    				return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;
    			},
    			easeInBack: function (t) {
    				var s = 1.70158;
    				return 1 * (t /= 1) * t * ((s + 1) * t - s);
    			},
    			easeOutBack: function (t) {
    				var s = 1.70158;
    				return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
    			},
    			easeInOutBack: function (t) {
    				var s = 1.70158;
    				if ((t /= 1 / 2) < 1) return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
    				return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
    			},
    			easeInBounce: function (t) {
    				return 1 - easingEffects.easeOutBounce(1 - t);
    			},
    			easeOutBounce: function (t) {
    				if ((t /= 1) < (1 / 2.75)) {
    					return 1 * (7.5625 * t * t);
    				} else if (t < (2 / 2.75)) {
    					return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);
    				} else if (t < (2.5 / 2.75)) {
    					return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);
    				} else {
    					return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);
    				}
    			},
    			easeInOutBounce: function (t) {
    				if (t < 1 / 2) return easingEffects.easeInBounce(t * 2) * 0.5;
    				return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;
    			}
    		},
    		//Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
    		requestAnimFrame = helpers.requestAnimFrame = (function(){
    			return window.requestAnimationFrame ||
    				window.webkitRequestAnimationFrame ||
    				window.mozRequestAnimationFrame ||
    				window.oRequestAnimationFrame ||
    				window.msRequestAnimationFrame ||
    				function(callback) {
    					return window.setTimeout(callback, 1000 / 60);
    				};
    		})(),
    		cancelAnimFrame = helpers.cancelAnimFrame = (function(){
    			return window.cancelAnimationFrame ||
    				window.webkitCancelAnimationFrame ||
    				window.mozCancelAnimationFrame ||
    				window.oCancelAnimationFrame ||
    				window.msCancelAnimationFrame ||
    				function(callback) {
    					return window.clearTimeout(callback, 1000 / 60);
    				};
    		})(),
    		animationLoop = helpers.animationLoop = function(callback,totalSteps,easingString,onProgress,onComplete,chartInstance){

    			var currentStep = 0,
    				easingFunction = easingEffects[easingString] || easingEffects.linear;

    			var animationFrame = function(){
    				currentStep++;
    				var stepDecimal = currentStep/totalSteps;
    				var easeDecimal = easingFunction(stepDecimal);

    				callback.call(chartInstance,easeDecimal,stepDecimal, currentStep);
    				onProgress.call(chartInstance,easeDecimal,stepDecimal);
    				if (currentStep < totalSteps){
    					chartInstance.animationFrame = requestAnimFrame(animationFrame);
    				} else{
    					onComplete.apply(chartInstance);
    				}
    			};
    			requestAnimFrame(animationFrame);
    		},
    		//-- DOM methods
    		getRelativePosition = helpers.getRelativePosition = function(evt){
    			var mouseX, mouseY;
    			var e = evt.originalEvent || evt,
    				canvas = evt.currentTarget || evt.srcElement,
    				boundingRect = canvas.getBoundingClientRect();

    			if (e.touches){
    				mouseX = e.touches[0].clientX - boundingRect.left;
    				mouseY = e.touches[0].clientY - boundingRect.top;

    			}
    			else{
    				mouseX = e.clientX - boundingRect.left;
    				mouseY = e.clientY - boundingRect.top;
    			}

    			return {
    				x : mouseX,
    				y : mouseY
    			};

    		},
    		addEvent = helpers.addEvent = function(node,eventType,method){
    			if (node.addEventListener){
    				node.addEventListener(eventType,method);
    			} else if (node.attachEvent){
    				node.attachEvent("on"+eventType, method);
    			} else {
    				node["on"+eventType] = method;
    			}
    		},
    		removeEvent = helpers.removeEvent = function(node, eventType, handler){
    			if (node.removeEventListener){
    				node.removeEventListener(eventType, handler, false);
    			} else if (node.detachEvent){
    				node.detachEvent("on"+eventType,handler);
    			} else{
    				node["on" + eventType] = noop;
    			}
    		},
    		bindEvents = helpers.bindEvents = function(chartInstance, arrayOfEvents, handler){
    			// Create the events object if it's not already present
    			if (!chartInstance.events) chartInstance.events = {};

    			each(arrayOfEvents,function(eventName){
    				chartInstance.events[eventName] = function(){
    					handler.apply(chartInstance, arguments);
    				};
    				addEvent(chartInstance.chart.canvas,eventName,chartInstance.events[eventName]);
    			});
    		},
    		unbindEvents = helpers.unbindEvents = function (chartInstance, arrayOfEvents) {
    			each(arrayOfEvents, function(handler,eventName){
    				removeEvent(chartInstance.chart.canvas, eventName, handler);
    			});
    		},
    		getMaximumWidth = helpers.getMaximumWidth = function(domNode){
    			var container = domNode.parentNode;
    			// TODO = check cross browser stuff with this.
    			return container.clientWidth;
    		},
    		getMaximumHeight = helpers.getMaximumHeight = function(domNode){
    			var container = domNode.parentNode;
    			// TODO = check cross browser stuff with this.
    			return container.clientHeight;
    		},
    		getMaximumSize = helpers.getMaximumSize = helpers.getMaximumWidth, // legacy support
    		retinaScale = helpers.retinaScale = function(chart){
    			var ctx = chart.ctx,
    				width = chart.canvas.width,
    				height = chart.canvas.height;

    			if (window.devicePixelRatio) {
    				ctx.canvas.style.width = width + "px";
    				ctx.canvas.style.height = height + "px";
    				ctx.canvas.height = height * window.devicePixelRatio;
    				ctx.canvas.width = width * window.devicePixelRatio;
    				ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    			}
    		},
    		//-- Canvas methods
    		clear = helpers.clear = function(chart){
    			chart.ctx.clearRect(0,0,chart.width,chart.height);
    		},
    		fontString = helpers.fontString = function(pixelSize,fontStyle,fontFamily){
    			return fontStyle + " " + pixelSize+"px " + fontFamily;
    		},
    		longestText = helpers.longestText = function(ctx,font,arrayOfStrings){
    			ctx.font = font;
    			var longest = 0;
    			each(arrayOfStrings,function(string){
    				var textWidth = ctx.measureText(string).width;
    				longest = (textWidth > longest) ? textWidth : longest;
    			});
    			return longest;
    		},
    		drawRoundedRectangle = helpers.drawRoundedRectangle = function(ctx,x,y,width,height,radius){
    			ctx.beginPath();
    			ctx.moveTo(x + radius, y);
    			ctx.lineTo(x + width - radius, y);
    			ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    			ctx.lineTo(x + width, y + height - radius);
    			ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    			ctx.lineTo(x + radius, y + height);
    			ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    			ctx.lineTo(x, y + radius);
    			ctx.quadraticCurveTo(x, y, x + radius, y);
    			ctx.closePath();
    		};


    	//Store a reference to each instance - allowing us to globally resize chart instances on window resize.
    	//Destroy method on the chart will remove the instance of the chart from this reference.
    	Chart.instances = {};

    	Chart.Type = function(data,options,chart){
    		this.options = options;
    		this.chart = chart;
    		this.id = uid();
    		//Add the chart instance to the global namespace
    		Chart.instances[this.id] = this;

    		// Initialize is always called when a chart type is created
    		// By default it is a no op, but it should be extended
    		if (options.responsive){
    			this.resize();
    		}
    		this.initialize.call(this,data);
    	};

    	//Core methods that'll be a part of every chart type
    	extend(Chart.Type.prototype,{
    		initialize : function(){return this;},
    		clear : function(){
    			clear(this.chart);
    			return this;
    		},
    		stop : function(){
    			// Stops any current animation loop occuring
    			cancelAnimFrame(this.animationFrame);
    			return this;
    		},
    		resize : function(callback){
    			this.stop();
    			var canvas = this.chart.canvas,
    				newWidth = getMaximumWidth(this.chart.canvas),
    				newHeight = this.options.maintainAspectRatio ? newWidth / this.chart.aspectRatio : getMaximumHeight(this.chart.canvas);

    			canvas.width = this.chart.width = newWidth;
    			canvas.height = this.chart.height = newHeight;

    			retinaScale(this.chart);

    			if (typeof callback === "function"){
    				callback.apply(this, Array.prototype.slice.call(arguments, 1));
    			}
    			return this;
    		},
    		reflow : noop,
    		render : function(reflow){
    			if (reflow){
    				this.reflow();
    			}
    			if (this.options.animation && !reflow){
    				helpers.animationLoop(
    					this.draw,
    					this.options.animationSteps,
    					this.options.animationEasing,
    					this.options.onAnimationProgress,
    					this.options.onAnimationComplete,
    					this
    				);
    			}
    			else{
    				this.draw();
    				this.options.onAnimationComplete.call(this);
    			}
    			return this;
    		},
    		generateLegend : function(){
    			return template(this.options.legendTemplate,this);
    		},
    		destroy : function(){
    			this.clear();
    			unbindEvents(this, this.events);
    			var canvas = this.chart.canvas;

    			// Reset canvas height/width attributes starts a fresh with the canvas context
    			canvas.width = this.chart.width;
    			canvas.height = this.chart.height;

    			// < IE9 doesn't support removeProperty
    			if (canvas.style.removeProperty) {
    				canvas.style.removeProperty('width');
    				canvas.style.removeProperty('height');
    			} else {
    				canvas.style.removeAttribute('width');
    				canvas.style.removeAttribute('height');
    			}

    			delete Chart.instances[this.id];
    		},
    		showTooltip : function(ChartElements, forceRedraw){
    			// Only redraw the chart if we've actually changed what we're hovering on.
    			if (typeof this.activeElements === 'undefined') this.activeElements = [];

    			var isChanged = (function(Elements){
    				var changed = false;

    				if (Elements.length !== this.activeElements.length){
    					changed = true;
    					return changed;
    				}

    				each(Elements, function(element, index){
    					if (element !== this.activeElements[index]){
    						changed = true;
    					}
    				}, this);
    				return changed;
    			}).call(this, ChartElements);

    			if (!isChanged && !forceRedraw){
    				return;
    			}
    			else{
    				this.activeElements = ChartElements;
    			}
    			this.draw();
    			if(this.options.customTooltips){
    				this.options.customTooltips(false);
    			}
    			if (ChartElements.length > 0){
    				// If we have multiple datasets, show a MultiTooltip for all of the data points at that index
    				if (this.datasets && this.datasets.length > 1) {
    					var dataArray,
    						dataIndex;

    					for (var i = this.datasets.length - 1; i >= 0; i--) {
    						dataArray = this.datasets[i].points || this.datasets[i].bars || this.datasets[i].segments;
    						dataIndex = indexOf(dataArray, ChartElements[0]);
    						if (dataIndex !== -1){
    							break;
    						}
    					}
    					var tooltipLabels = [],
    						tooltipColors = [],
    						medianPosition = (function(index) {

    							// Get all the points at that particular index
    							var Elements = [],
    								dataCollection,
    								xPositions = [],
    								yPositions = [],
    								xMax,
    								yMax,
    								xMin,
    								yMin;
    							helpers.each(this.datasets, function(dataset){
    								dataCollection = dataset.points || dataset.bars || dataset.segments;
    								if (dataCollection[dataIndex] && dataCollection[dataIndex].hasValue()){
    									Elements.push(dataCollection[dataIndex]);
    								}
    							});

    							helpers.each(Elements, function(element) {
    								xPositions.push(element.x);
    								yPositions.push(element.y);


    								//Include any colour information about the element
    								tooltipLabels.push(helpers.template(this.options.multiTooltipTemplate, element));
    								tooltipColors.push({
    									fill: element._saved.fillColor || element.fillColor,
    									stroke: element._saved.strokeColor || element.strokeColor
    								});

    							}, this);

    							yMin = min(yPositions);
    							yMax = max(yPositions);

    							xMin = min(xPositions);
    							xMax = max(xPositions);

    							return {
    								x: (xMin > this.chart.width/2) ? xMin : xMax,
    								y: (yMin + yMax)/2
    							};
    						}).call(this, dataIndex);

    					new Chart.MultiTooltip({
    						x: medianPosition.x,
    						y: medianPosition.y,
    						xPadding: this.options.tooltipXPadding,
    						yPadding: this.options.tooltipYPadding,
    						xOffset: this.options.tooltipXOffset,
    						fillColor: this.options.tooltipFillColor,
    						textColor: this.options.tooltipFontColor,
    						fontFamily: this.options.tooltipFontFamily,
    						fontStyle: this.options.tooltipFontStyle,
    						fontSize: this.options.tooltipFontSize,
    						titleTextColor: this.options.tooltipTitleFontColor,
    						titleFontFamily: this.options.tooltipTitleFontFamily,
    						titleFontStyle: this.options.tooltipTitleFontStyle,
    						titleFontSize: this.options.tooltipTitleFontSize,
    						cornerRadius: this.options.tooltipCornerRadius,
    						labels: tooltipLabels,
    						legendColors: tooltipColors,
    						legendColorBackground : this.options.multiTooltipKeyBackground,
    						title: ChartElements[0].label,
    						chart: this.chart,
    						ctx: this.chart.ctx,
    						custom: this.options.customTooltips
    					}).draw();

    				} else {
    					each(ChartElements, function(Element) {
    						var tooltipPosition = Element.tooltipPosition();
    						new Chart.Tooltip({
    							x: Math.round(tooltipPosition.x),
    							y: Math.round(tooltipPosition.y),
    							xPadding: this.options.tooltipXPadding,
    							yPadding: this.options.tooltipYPadding,
    							fillColor: this.options.tooltipFillColor,
    							textColor: this.options.tooltipFontColor,
    							fontFamily: this.options.tooltipFontFamily,
    							fontStyle: this.options.tooltipFontStyle,
    							fontSize: this.options.tooltipFontSize,
    							caretHeight: this.options.tooltipCaretSize,
    							cornerRadius: this.options.tooltipCornerRadius,
    							text: template(this.options.tooltipTemplate, Element),
    							chart: this.chart,
    							custom: this.options.customTooltips
    						}).draw();
    					}, this);
    				}
    			}
    			return this;
    		},
    		toBase64Image : function(){
    			return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
    		}
    	});

    	Chart.Type.extend = function(extensions){

    		var parent = this;

    		var ChartType = function(){
    			return parent.apply(this,arguments);
    		};

    		//Copy the prototype object of the this class
    		ChartType.prototype = clone(parent.prototype);
    		//Now overwrite some of the properties in the base class with the new extensions
    		extend(ChartType.prototype, extensions);

    		ChartType.extend = Chart.Type.extend;

    		if (extensions.name || parent.prototype.name){

    			var chartName = extensions.name || parent.prototype.name;
    			//Assign any potential default values of the new chart type

    			//If none are defined, we'll use a clone of the chart type this is being extended from.
    			//I.e. if we extend a line chart, we'll use the defaults from the line chart if our new chart
    			//doesn't define some defaults of their own.

    			var baseDefaults = (Chart.defaults[parent.prototype.name]) ? clone(Chart.defaults[parent.prototype.name]) : {};

    			Chart.defaults[chartName] = extend(baseDefaults,extensions.defaults);

    			Chart.types[chartName] = ChartType;

    			//Register this new chart type in the Chart prototype
    			Chart.prototype[chartName] = function(data,options){
    				var config = merge(Chart.defaults.global, Chart.defaults[chartName], options || {});
    				return new ChartType(data,config,this);
    			};
    		} else{
    			warn("Name not provided for this chart, so it hasn't been registered");
    		}
    		return parent;
    	};

    	Chart.Element = function(configuration){
    		extend(this,configuration);
    		this.initialize.apply(this,arguments);
    		this.save();
    	};
    	extend(Chart.Element.prototype,{
    		initialize : function(){},
    		restore : function(props){
    			if (!props){
    				extend(this,this._saved);
    			} else {
    				each(props,function(key){
    					this[key] = this._saved[key];
    				},this);
    			}
    			return this;
    		},
    		save : function(){
    			this._saved = clone(this);
    			delete this._saved._saved;
    			return this;
    		},
    		update : function(newProps){
    			each(newProps,function(value,key){
    				this._saved[key] = this[key];
    				this[key] = value;
    			},this);
    			return this;
    		},
    		transition : function(props,ease){
    			each(props,function(value,key){
    				this[key] = ((value - this._saved[key]) * ease) + this._saved[key];
    			},this);
    			return this;
    		},
    		tooltipPosition : function(){
    			return {
    				x : this.x,
    				y : this.y
    			};
    		},
    		hasValue: function(){
    			return isNumber(this.value);
    		}
    	});

    	Chart.Element.extend = inherits;


    	Chart.Point = Chart.Element.extend({
    		display: true,
    		inRange: function(chartX,chartY){
    			var hitDetectionRange = this.hitDetectionRadius + this.radius;
    			return ((Math.pow(chartX-this.x, 2)+Math.pow(chartY-this.y, 2)) < Math.pow(hitDetectionRange,2));
    		},
    		draw : function(){
    			if (this.display){
    				var ctx = this.ctx;
    				ctx.beginPath();

    				ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    				ctx.closePath();

    				ctx.strokeStyle = this.strokeColor;
    				ctx.lineWidth = this.strokeWidth;

    				ctx.fillStyle = this.fillColor;

    				ctx.fill();
    				ctx.stroke();
    			}


    			//Quick debug for bezier curve splining
    			//Highlights control points and the line between them.
    			//Handy for dev - stripped in the min version.

    			// ctx.save();
    			// ctx.fillStyle = "black";
    			// ctx.strokeStyle = "black"
    			// ctx.beginPath();
    			// ctx.arc(this.controlPoints.inner.x,this.controlPoints.inner.y, 2, 0, Math.PI*2);
    			// ctx.fill();

    			// ctx.beginPath();
    			// ctx.arc(this.controlPoints.outer.x,this.controlPoints.outer.y, 2, 0, Math.PI*2);
    			// ctx.fill();

    			// ctx.moveTo(this.controlPoints.inner.x,this.controlPoints.inner.y);
    			// ctx.lineTo(this.x, this.y);
    			// ctx.lineTo(this.controlPoints.outer.x,this.controlPoints.outer.y);
    			// ctx.stroke();

    			// ctx.restore();



    		}
    	});

    	Chart.Arc = Chart.Element.extend({
    		inRange : function(chartX,chartY){

    			var pointRelativePosition = helpers.getAngleFromPoint(this, {
    				x: chartX,
    				y: chartY
    			});

    			//Check if within the range of the open/close angle
    			var betweenAngles = (pointRelativePosition.angle >= this.startAngle && pointRelativePosition.angle <= this.endAngle),
    				withinRadius = (pointRelativePosition.distance >= this.innerRadius && pointRelativePosition.distance <= this.outerRadius);

    			return (betweenAngles && withinRadius);
    			//Ensure within the outside of the arc centre, but inside arc outer
    		},
    		tooltipPosition : function(){
    			var centreAngle = this.startAngle + ((this.endAngle - this.startAngle) / 2),
    				rangeFromCentre = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
    			return {
    				x : this.x + (Math.cos(centreAngle) * rangeFromCentre),
    				y : this.y + (Math.sin(centreAngle) * rangeFromCentre)
    			};
    		},
    		draw : function(animationPercent){

    			var ctx = this.ctx;

    			ctx.beginPath();

    			ctx.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle);

    			ctx.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, true);

    			ctx.closePath();
    			ctx.strokeStyle = this.strokeColor;
    			ctx.lineWidth = this.strokeWidth;

    			ctx.fillStyle = this.fillColor;

    			ctx.fill();
    			ctx.lineJoin = 'bevel';

    			if (this.showStroke){
    				ctx.stroke();
    			}
    		}
    	});

    	Chart.Rectangle = Chart.Element.extend({
    		draw : function(){
    			var ctx = this.ctx,
    				halfWidth = this.width/2,
    				leftX = this.x - halfWidth,
    				rightX = this.x + halfWidth,
    				top = this.base - (this.base - this.y),
    				halfStroke = this.strokeWidth / 2;

    			// Canvas doesn't allow us to stroke inside the width so we can
    			// adjust the sizes to fit if we're setting a stroke on the line
    			if (this.showStroke){
    				leftX += halfStroke;
    				rightX -= halfStroke;
    				top += halfStroke;
    			}

    			ctx.beginPath();

    			ctx.fillStyle = this.fillColor;
    			ctx.strokeStyle = this.strokeColor;
    			ctx.lineWidth = this.strokeWidth;

    			// It'd be nice to keep this class totally generic to any rectangle
    			// and simply specify which border to miss out.
    			ctx.moveTo(leftX, this.base);
    			ctx.lineTo(leftX, top);
    			ctx.lineTo(rightX, top);
    			ctx.lineTo(rightX, this.base);
    			ctx.fill();
    			if (this.showStroke){
    				ctx.stroke();
    			}
    		},
    		height : function(){
    			return this.base - this.y;
    		},
    		inRange : function(chartX,chartY){
    			return (chartX >= this.x - this.width/2 && chartX <= this.x + this.width/2) && (chartY >= this.y && chartY <= this.base);
    		}
    	});

    	Chart.Tooltip = Chart.Element.extend({
    		draw : function(){

    			var ctx = this.chart.ctx;

    			ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

    			this.xAlign = "center";
    			this.yAlign = "above";

    			//Distance between the actual element.y position and the start of the tooltip caret
    			var caretPadding = this.caretPadding = 2;

    			var tooltipWidth = ctx.measureText(this.text).width + 2*this.xPadding,
    				tooltipRectHeight = this.fontSize + 2*this.yPadding,
    				tooltipHeight = tooltipRectHeight + this.caretHeight + caretPadding;

    			if (this.x + tooltipWidth/2 >this.chart.width){
    				this.xAlign = "left";
    			} else if (this.x - tooltipWidth/2 < 0){
    				this.xAlign = "right";
    			}

    			if (this.y - tooltipHeight < 0){
    				this.yAlign = "below";
    			}


    			var tooltipX = this.x - tooltipWidth/2,
    				tooltipY = this.y - tooltipHeight;

    			ctx.fillStyle = this.fillColor;

    			// Custom Tooltips
    			if(this.custom){
    				this.custom(this);
    			}
    			else{
    				switch(this.yAlign)
    				{
    				case "above":
    					//Draw a caret above the x/y
    					ctx.beginPath();
    					ctx.moveTo(this.x,this.y - caretPadding);
    					ctx.lineTo(this.x + this.caretHeight, this.y - (caretPadding + this.caretHeight));
    					ctx.lineTo(this.x - this.caretHeight, this.y - (caretPadding + this.caretHeight));
    					ctx.closePath();
    					ctx.fill();
    					break;
    				case "below":
    					tooltipY = this.y + caretPadding + this.caretHeight;
    					//Draw a caret below the x/y
    					ctx.beginPath();
    					ctx.moveTo(this.x, this.y + caretPadding);
    					ctx.lineTo(this.x + this.caretHeight, this.y + caretPadding + this.caretHeight);
    					ctx.lineTo(this.x - this.caretHeight, this.y + caretPadding + this.caretHeight);
    					ctx.closePath();
    					ctx.fill();
    					break;
    				}

    				switch(this.xAlign)
    				{
    				case "left":
    					tooltipX = this.x - tooltipWidth + (this.cornerRadius + this.caretHeight);
    					break;
    				case "right":
    					tooltipX = this.x - (this.cornerRadius + this.caretHeight);
    					break;
    				}

    				drawRoundedRectangle(ctx,tooltipX,tooltipY,tooltipWidth,tooltipRectHeight,this.cornerRadius);

    				ctx.fill();

    				ctx.fillStyle = this.textColor;
    				ctx.textAlign = "center";
    				ctx.textBaseline = "middle";
    				ctx.fillText(this.text, tooltipX + tooltipWidth/2, tooltipY + tooltipRectHeight/2);
    			}
    		}
    	});

    	Chart.MultiTooltip = Chart.Element.extend({
    		initialize : function(){
    			this.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);

    			this.titleFont = fontString(this.titleFontSize,this.titleFontStyle,this.titleFontFamily);

    			this.height = (this.labels.length * this.fontSize) + ((this.labels.length-1) * (this.fontSize/2)) + (this.yPadding*2) + this.titleFontSize *1.5;

    			this.ctx.font = this.titleFont;

    			var titleWidth = this.ctx.measureText(this.title).width,
    				//Label has a legend square as well so account for this.
    				labelWidth = longestText(this.ctx,this.font,this.labels) + this.fontSize + 3,
    				longestTextWidth = max([labelWidth,titleWidth]);

    			this.width = longestTextWidth + (this.xPadding*2);


    			var halfHeight = this.height/2;

    			//Check to ensure the height will fit on the canvas
    			if (this.y - halfHeight < 0 ){
    				this.y = halfHeight;
    			} else if (this.y + halfHeight > this.chart.height){
    				this.y = this.chart.height - halfHeight;
    			}

    			//Decide whether to align left or right based on position on canvas
    			if (this.x > this.chart.width/2){
    				this.x -= this.xOffset + this.width;
    			} else {
    				this.x += this.xOffset;
    			}


    		},
    		getLineHeight : function(index){
    			var baseLineHeight = this.y - (this.height/2) + this.yPadding,
    				afterTitleIndex = index-1;

    			//If the index is zero, we're getting the title
    			if (index === 0){
    				return baseLineHeight + this.titleFontSize/2;
    			} else{
    				return baseLineHeight + ((this.fontSize*1.5*afterTitleIndex) + this.fontSize/2) + this.titleFontSize * 1.5;
    			}

    		},
    		draw : function(){
    			// Custom Tooltips
    			if(this.custom){
    				this.custom(this);
    			}
    			else{
    				drawRoundedRectangle(this.ctx,this.x,this.y - this.height/2,this.width,this.height,this.cornerRadius);
    				var ctx = this.ctx;
    				ctx.fillStyle = this.fillColor;
    				ctx.fill();
    				ctx.closePath();

    				ctx.textAlign = "left";
    				ctx.textBaseline = "middle";
    				ctx.fillStyle = this.titleTextColor;
    				ctx.font = this.titleFont;

    				ctx.fillText(this.title,this.x + this.xPadding, this.getLineHeight(0));

    				ctx.font = this.font;
    				helpers.each(this.labels,function(label,index){
    					ctx.fillStyle = this.textColor;
    					ctx.fillText(label,this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(index + 1));

    					//A bit gnarly, but clearing this rectangle breaks when using explorercanvas (clears whole canvas)
    					//ctx.clearRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);
    					//Instead we'll make a white filled block to put the legendColour palette over.

    					ctx.fillStyle = this.legendColorBackground;
    					ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);

    					ctx.fillStyle = this.legendColors[index].fill;
    					ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);


    				},this);
    			}
    		}
    	});

    	Chart.Scale = Chart.Element.extend({
    		initialize : function(){
    			this.fit();
    		},
    		buildYLabels : function(){
    			this.yLabels = [];

    			var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

    			for (var i=0; i<=this.steps; i++){
    				this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
    			}
    			this.yLabelWidth = (this.display && this.showLabels) ? longestText(this.ctx,this.font,this.yLabels) : 0;
    		},
    		addXLabel : function(label){
    			this.xLabels.push(label);
    			this.valuesCount++;
    			this.fit();
    		},
    		removeXLabel : function(){
    			this.xLabels.shift();
    			this.valuesCount--;
    			this.fit();
    		},
    		// Fitting loop to rotate x Labels and figure out what fits there, and also calculate how many Y steps to use
    		fit: function(){
    			// First we need the width of the yLabels, assuming the xLabels aren't rotated

    			// To do that we need the base line at the top and base of the chart, assuming there is no x label rotation
    			this.startPoint = (this.display) ? this.fontSize : 0;
    			this.endPoint = (this.display) ? this.height - (this.fontSize * 1.5) - 5 : this.height; // -5 to pad labels

    			// Apply padding settings to the start and end point.
    			this.startPoint += this.padding;
    			this.endPoint -= this.padding;

    			// Cache the starting height, so can determine if we need to recalculate the scale yAxis
    			var cachedHeight = this.endPoint - this.startPoint,
    				cachedYLabelWidth;

    			// Build the current yLabels so we have an idea of what size they'll be to start
    			/*
    			 *	This sets what is returned from calculateScaleRange as static properties of this class:
    			 *
    				this.steps;
    				this.stepValue;
    				this.min;
    				this.max;
    			 *
    			 */
    			this.calculateYRange(cachedHeight);

    			// With these properties set we can now build the array of yLabels
    			// and also the width of the largest yLabel
    			this.buildYLabels();

    			this.calculateXLabelRotation();

    			while((cachedHeight > this.endPoint - this.startPoint)){
    				cachedHeight = this.endPoint - this.startPoint;
    				cachedYLabelWidth = this.yLabelWidth;

    				this.calculateYRange(cachedHeight);
    				this.buildYLabels();

    				// Only go through the xLabel loop again if the yLabel width has changed
    				if (cachedYLabelWidth < this.yLabelWidth){
    					this.calculateXLabelRotation();
    				}
    			}

    		},
    		calculateXLabelRotation : function(){
    			//Get the width of each grid by calculating the difference
    			//between x offsets between 0 and 1.

    			this.ctx.font = this.font;

    			var firstWidth = this.ctx.measureText(this.xLabels[0]).width,
    				lastWidth = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width,
    				firstRotated;


    			this.xScalePaddingRight = lastWidth/2 + 3;
    			this.xScalePaddingLeft = (firstWidth/2 > this.yLabelWidth + 10) ? firstWidth/2 : this.yLabelWidth + 10;

    			this.xLabelRotation = 0;
    			if (this.display){
    				var originalLabelWidth = longestText(this.ctx,this.font,this.xLabels),
    					cosRotation;
    				this.xLabelWidth = originalLabelWidth;
    				//Allow 3 pixels x2 padding either side for label readability
    				var xGridWidth = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6;

    				//Max label rotate should be 90 - also act as a loop counter
    				while ((this.xLabelWidth > xGridWidth && this.xLabelRotation === 0) || (this.xLabelWidth > xGridWidth && this.xLabelRotation <= 90 && this.xLabelRotation > 0)){
    					cosRotation = Math.cos(toRadians(this.xLabelRotation));

    					firstRotated = cosRotation * firstWidth;

    					// We're right aligning the text now.
    					if (firstRotated + this.fontSize / 2 > this.yLabelWidth + 8){
    						this.xScalePaddingLeft = firstRotated + this.fontSize / 2;
    					}
    					this.xScalePaddingRight = this.fontSize/2;


    					this.xLabelRotation++;
    					this.xLabelWidth = cosRotation * originalLabelWidth;

    				}
    				if (this.xLabelRotation > 0){
    					this.endPoint -= Math.sin(toRadians(this.xLabelRotation))*originalLabelWidth + 3;
    				}
    			}
    			else{
    				this.xLabelWidth = 0;
    				this.xScalePaddingRight = this.padding;
    				this.xScalePaddingLeft = this.padding;
    			}

    		},
    		// Needs to be overidden in each Chart type
    		// Otherwise we need to pass all the data into the scale class
    		calculateYRange: noop,
    		drawingArea: function(){
    			return this.startPoint - this.endPoint;
    		},
    		calculateY : function(value){
    			var scalingFactor = this.drawingArea() / (this.min - this.max);
    			return this.endPoint - (scalingFactor * (value - this.min));
    		},
    		calculateX : function(index){
    			var isRotated = (this.xLabelRotation > 0),
    				// innerWidth = (this.offsetGridLines) ? this.width - offsetLeft - this.padding : this.width - (offsetLeft + halfLabelWidth * 2) - this.padding,
    				innerWidth = this.width - (this.xScalePaddingLeft + this.xScalePaddingRight),
    				valueWidth = innerWidth/Math.max((this.valuesCount - ((this.offsetGridLines) ? 0 : 1)), 1),
    				valueOffset = (valueWidth * index) + this.xScalePaddingLeft;

    			if (this.offsetGridLines){
    				valueOffset += (valueWidth/2);
    			}

    			return Math.round(valueOffset);
    		},
    		update : function(newProps){
    			helpers.extend(this, newProps);
    			this.fit();
    		},
    		draw : function(){
    			var ctx = this.ctx,
    				yLabelGap = (this.endPoint - this.startPoint) / this.steps,
    				xStart = Math.round(this.xScalePaddingLeft);
    			if (this.display){
    				ctx.fillStyle = this.textColor;
    				ctx.font = this.font;
    				each(this.yLabels,function(labelString,index){
    					var yLabelCenter = this.endPoint - (yLabelGap * index),
    						linePositionY = Math.round(yLabelCenter),
    						drawHorizontalLine = this.showHorizontalLines;

    					ctx.textAlign = "right";
    					ctx.textBaseline = "middle";
    					if (this.showLabels){
    						ctx.fillText(labelString,xStart - 10,yLabelCenter);
    					}

    					// This is X axis, so draw it
    					if (index === 0 && !drawHorizontalLine){
    						drawHorizontalLine = true;
    					}

    					if (drawHorizontalLine){
    						ctx.beginPath();
    					}

    					if (index > 0){
    						// This is a grid line in the centre, so drop that
    						ctx.lineWidth = this.gridLineWidth;
    						ctx.strokeStyle = this.gridLineColor;
    					} else {
    						// This is the first line on the scale
    						ctx.lineWidth = this.lineWidth;
    						ctx.strokeStyle = this.lineColor;
    					}

    					linePositionY += helpers.aliasPixel(ctx.lineWidth);

    					if(drawHorizontalLine){
    						ctx.moveTo(xStart, linePositionY);
    						ctx.lineTo(this.width, linePositionY);
    						ctx.stroke();
    						ctx.closePath();
    					}

    					ctx.lineWidth = this.lineWidth;
    					ctx.strokeStyle = this.lineColor;
    					ctx.beginPath();
    					ctx.moveTo(xStart - 5, linePositionY);
    					ctx.lineTo(xStart, linePositionY);
    					ctx.stroke();
    					ctx.closePath();

    				},this);

    				each(this.xLabels,function(label,index){
    					var xPos = this.calculateX(index) + aliasPixel(this.lineWidth),
    						// Check to see if line/bar here and decide where to place the line
    						linePos = this.calculateX(index - (this.offsetGridLines ? 0.5 : 0)) + aliasPixel(this.lineWidth),
    						isRotated = (this.xLabelRotation > 0),
    						drawVerticalLine = this.showVerticalLines;

    					// This is Y axis, so draw it
    					if (index === 0 && !drawVerticalLine){
    						drawVerticalLine = true;
    					}

    					if (drawVerticalLine){
    						ctx.beginPath();
    					}

    					if (index > 0){
    						// This is a grid line in the centre, so drop that
    						ctx.lineWidth = this.gridLineWidth;
    						ctx.strokeStyle = this.gridLineColor;
    					} else {
    						// This is the first line on the scale
    						ctx.lineWidth = this.lineWidth;
    						ctx.strokeStyle = this.lineColor;
    					}

    					if (drawVerticalLine){
    						ctx.moveTo(linePos,this.endPoint);
    						ctx.lineTo(linePos,this.startPoint - 3);
    						ctx.stroke();
    						ctx.closePath();
    					}


    					ctx.lineWidth = this.lineWidth;
    					ctx.strokeStyle = this.lineColor;


    					// Small lines at the bottom of the base grid line
    					ctx.beginPath();
    					ctx.moveTo(linePos,this.endPoint);
    					ctx.lineTo(linePos,this.endPoint + 5);
    					ctx.stroke();
    					ctx.closePath();

    					ctx.save();
    					ctx.translate(xPos,(isRotated) ? this.endPoint + 12 : this.endPoint + 8);
    					ctx.rotate(toRadians(this.xLabelRotation)*-1);
    					ctx.font = this.font;
    					ctx.textAlign = (isRotated) ? "right" : "center";
    					ctx.textBaseline = (isRotated) ? "middle" : "top";
    					ctx.fillText(label, 0, 0);
    					ctx.restore();
    				},this);

    			}
    		}

    	});

    	Chart.RadialScale = Chart.Element.extend({
    		initialize: function(){
    			this.size = min([this.height, this.width]);
    			this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
    		},
    		calculateCenterOffset: function(value){
    			// Take into account half font size + the yPadding of the top value
    			var scalingFactor = this.drawingArea / (this.max - this.min);

    			return (value - this.min) * scalingFactor;
    		},
    		update : function(){
    			if (!this.lineArc){
    				this.setScaleSize();
    			} else {
    				this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);
    			}
    			this.buildYLabels();
    		},
    		buildYLabels: function(){
    			this.yLabels = [];

    			var stepDecimalPlaces = getDecimalPlaces(this.stepValue);

    			for (var i=0; i<=this.steps; i++){
    				this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
    			}
    		},
    		getCircumference : function(){
    			return ((Math.PI*2) / this.valuesCount);
    		},
    		setScaleSize: function(){
    			/*
    			 * Right, this is really confusing and there is a lot of maths going on here
    			 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
    			 *
    			 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
    			 *
    			 * Solution:
    			 *
    			 * We assume the radius of the polygon is half the size of the canvas at first
    			 * at each index we check if the text overlaps.
    			 *
    			 * Where it does, we store that angle and that index.
    			 *
    			 * After finding the largest index and angle we calculate how much we need to remove
    			 * from the shape radius to move the point inwards by that x.
    			 *
    			 * We average the left and right distances to get the maximum shape radius that can fit in the box
    			 * along with labels.
    			 *
    			 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
    			 * on each side, removing that from the size, halving it and adding the left x protrusion width.
    			 *
    			 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
    			 * and position it in the most space efficient manner
    			 *
    			 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
    			 */


    			// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
    			// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
    			var largestPossibleRadius = min([(this.height/2 - this.pointLabelFontSize - 5), this.width/2]),
    				pointPosition,
    				i,
    				textWidth,
    				halfTextWidth,
    				furthestRight = this.width,
    				furthestRightIndex,
    				furthestRightAngle,
    				furthestLeft = 0,
    				furthestLeftIndex,
    				furthestLeftAngle,
    				xProtrusionLeft,
    				xProtrusionRight,
    				radiusReductionRight,
    				radiusReductionLeft;
    			this.ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
    			for (i=0;i<this.valuesCount;i++){
    				// 5px to space the text slightly out - similar to what we do in the draw function.
    				pointPosition = this.getPointPosition(i, largestPossibleRadius);
    				textWidth = this.ctx.measureText(template(this.templateString, { value: this.labels[i] })).width + 5;
    				if (i === 0 || i === this.valuesCount/2){
    					// If we're at index zero, or exactly the middle, we're at exactly the top/bottom
    					// of the radar chart, so text will be aligned centrally, so we'll half it and compare
    					// w/left and right text sizes
    					halfTextWidth = textWidth/2;
    					if (pointPosition.x + halfTextWidth > furthestRight) {
    						furthestRight = pointPosition.x + halfTextWidth;
    						furthestRightIndex = i;
    					}
    					if (pointPosition.x - halfTextWidth < furthestLeft) {
    						furthestLeft = pointPosition.x - halfTextWidth;
    						furthestLeftIndex = i;
    					}
    				}
    				else if (i < this.valuesCount/2) {
    					// Less than half the values means we'll left align the text
    					if (pointPosition.x + textWidth > furthestRight) {
    						furthestRight = pointPosition.x + textWidth;
    						furthestRightIndex = i;
    					}
    				}
    				else if (i > this.valuesCount/2){
    					// More than half the values means we'll right align the text
    					if (pointPosition.x - textWidth < furthestLeft) {
    						furthestLeft = pointPosition.x - textWidth;
    						furthestLeftIndex = i;
    					}
    				}
    			}

    			xProtrusionLeft = furthestLeft;

    			xProtrusionRight = Math.ceil(furthestRight - this.width);

    			furthestRightAngle = this.getIndexAngle(furthestRightIndex);

    			furthestLeftAngle = this.getIndexAngle(furthestLeftIndex);

    			radiusReductionRight = xProtrusionRight / Math.sin(furthestRightAngle + Math.PI/2);

    			radiusReductionLeft = xProtrusionLeft / Math.sin(furthestLeftAngle + Math.PI/2);

    			// Ensure we actually need to reduce the size of the chart
    			radiusReductionRight = (isNumber(radiusReductionRight)) ? radiusReductionRight : 0;
    			radiusReductionLeft = (isNumber(radiusReductionLeft)) ? radiusReductionLeft : 0;

    			this.drawingArea = largestPossibleRadius - (radiusReductionLeft + radiusReductionRight)/2;

    			//this.drawingArea = min([maxWidthRadius, (this.height - (2 * (this.pointLabelFontSize + 5)))/2])
    			this.setCenterPoint(radiusReductionLeft, radiusReductionRight);

    		},
    		setCenterPoint: function(leftMovement, rightMovement){

    			var maxRight = this.width - rightMovement - this.drawingArea,
    				maxLeft = leftMovement + this.drawingArea;

    			this.xCenter = (maxLeft + maxRight)/2;
    			// Always vertically in the centre as the text height doesn't change
    			this.yCenter = (this.height/2);
    		},

    		getIndexAngle : function(index){
    			var angleMultiplier = (Math.PI * 2) / this.valuesCount;
    			// Start from the top instead of right, so remove a quarter of the circle

    			return index * angleMultiplier - (Math.PI/2);
    		},
    		getPointPosition : function(index, distanceFromCenter){
    			var thisAngle = this.getIndexAngle(index);
    			return {
    				x : (Math.cos(thisAngle) * distanceFromCenter) + this.xCenter,
    				y : (Math.sin(thisAngle) * distanceFromCenter) + this.yCenter
    			};
    		},
    		draw: function(){
    			if (this.display){
    				var ctx = this.ctx;
    				each(this.yLabels, function(label, index){
    					// Don't draw a centre value
    					if (index > 0){
    						var yCenterOffset = index * (this.drawingArea/this.steps),
    							yHeight = this.yCenter - yCenterOffset,
    							pointPosition;

    						// Draw circular lines around the scale
    						if (this.lineWidth > 0){
    							ctx.strokeStyle = this.lineColor;
    							ctx.lineWidth = this.lineWidth;

    							if(this.lineArc){
    								ctx.beginPath();
    								ctx.arc(this.xCenter, this.yCenter, yCenterOffset, 0, Math.PI*2);
    								ctx.closePath();
    								ctx.stroke();
    							} else{
    								ctx.beginPath();
    								for (var i=0;i<this.valuesCount;i++)
    								{
    									pointPosition = this.getPointPosition(i, this.calculateCenterOffset(this.min + (index * this.stepValue)));
    									if (i === 0){
    										ctx.moveTo(pointPosition.x, pointPosition.y);
    									} else {
    										ctx.lineTo(pointPosition.x, pointPosition.y);
    									}
    								}
    								ctx.closePath();
    								ctx.stroke();
    							}
    						}
    						if(this.showLabels){
    							ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);
    							if (this.showLabelBackdrop){
    								var labelWidth = ctx.measureText(label).width;
    								ctx.fillStyle = this.backdropColor;
    								ctx.fillRect(
    									this.xCenter - labelWidth/2 - this.backdropPaddingX,
    									yHeight - this.fontSize/2 - this.backdropPaddingY,
    									labelWidth + this.backdropPaddingX*2,
    									this.fontSize + this.backdropPaddingY*2
    								);
    							}
    							ctx.textAlign = 'center';
    							ctx.textBaseline = "middle";
    							ctx.fillStyle = this.fontColor;
    							ctx.fillText(label, this.xCenter, yHeight);
    						}
    					}
    				}, this);

    				if (!this.lineArc){
    					ctx.lineWidth = this.angleLineWidth;
    					ctx.strokeStyle = this.angleLineColor;
    					for (var i = this.valuesCount - 1; i >= 0; i--) {
    						if (this.angleLineWidth > 0){
    							var outerPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max));
    							ctx.beginPath();
    							ctx.moveTo(this.xCenter, this.yCenter);
    							ctx.lineTo(outerPosition.x, outerPosition.y);
    							ctx.stroke();
    							ctx.closePath();
    						}
    						// Extra 3px out for some label spacing
    						var pointLabelPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max) + 5);
    						ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);
    						ctx.fillStyle = this.pointLabelFontColor;

    						var labelsCount = this.labels.length,
    							halfLabelsCount = this.labels.length/2,
    							quarterLabelsCount = halfLabelsCount/2,
    							upperHalf = (i < quarterLabelsCount || i > labelsCount - quarterLabelsCount),
    							exactQuarter = (i === quarterLabelsCount || i === labelsCount - quarterLabelsCount);
    						if (i === 0){
    							ctx.textAlign = 'center';
    						} else if(i === halfLabelsCount){
    							ctx.textAlign = 'center';
    						} else if (i < halfLabelsCount){
    							ctx.textAlign = 'left';
    						} else {
    							ctx.textAlign = 'right';
    						}

    						// Set the correct text baseline based on outer positioning
    						if (exactQuarter){
    							ctx.textBaseline = 'middle';
    						} else if (upperHalf){
    							ctx.textBaseline = 'bottom';
    						} else {
    							ctx.textBaseline = 'top';
    						}

    						ctx.fillText(this.labels[i], pointLabelPosition.x, pointLabelPosition.y);
    					}
    				}
    			}
    		}
    	});

    	// Attach global event to resize each chart instance when the browser resizes
    	helpers.addEvent(window, "resize", (function(){
    		// Basic debounce of resize function so it doesn't hurt performance when resizing browser.
    		var timeout;
    		return function(){
    			clearTimeout(timeout);
    			timeout = setTimeout(function(){
    				each(Chart.instances,function(instance){
    					// If the responsive flag is set in the chart instance config
    					// Cascade the resize event down to the chart.
    					if (instance.options.responsive){
    						instance.resize(instance.render, true);
    					}
    				});
    			}, 50);
    		};
    	})());


    	if (amd) {
    		define(function(){
    			return Chart;
    		});
    	} else if (typeof module === 'object' && module.exports) {
    		module.exports = Chart;
    	}

    	root.Chart = Chart;

    	Chart.noConflict = function(){
    		root.Chart = previous;
    		return Chart;
    	};

    }).call(undefined);

    (function(){

    	var root = this,
    		Chart = root.Chart,
    		helpers = Chart.helpers;


    	var defaultConfig = {
    		//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    		scaleBeginAtZero : true,

    		//Boolean - Whether grid lines are shown across the chart
    		scaleShowGridLines : true,

    		//String - Colour of the grid lines
    		scaleGridLineColor : "rgba(0,0,0,.05)",

    		//Number - Width of the grid lines
    		scaleGridLineWidth : 1,

    		//Boolean - Whether to show horizontal lines (except X axis)
    		scaleShowHorizontalLines: true,

    		//Boolean - Whether to show vertical lines (except Y axis)
    		scaleShowVerticalLines: true,

    		//Boolean - If there is a stroke on each bar
    		barShowStroke : true,

    		//Number - Pixel width of the bar stroke
    		barStrokeWidth : 2,

    		//Number - Spacing between each of the X value sets
    		barValueSpacing : 5,

    		//Number - Spacing between data sets within X values
    		barDatasetSpacing : 1,

    		//String - A legend template
    		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    	};


    	Chart.Type.extend({
    		name: "Bar",
    		defaults : defaultConfig,
    		initialize:  function(data){

    			//Expose options as a scope variable here so we can access it in the ScaleClass
    			var options = this.options;

    			this.ScaleClass = Chart.Scale.extend({
    				offsetGridLines : true,
    				calculateBarX : function(datasetCount, datasetIndex, barIndex){
    					//Reusable method for calculating the xPosition of a given bar based on datasetIndex & width of the bar
    					var xWidth = this.calculateBaseWidth(),
    						xAbsolute = this.calculateX(barIndex) - (xWidth/2),
    						barWidth = this.calculateBarWidth(datasetCount);

    					return xAbsolute + (barWidth * datasetIndex) + (datasetIndex * options.barDatasetSpacing) + barWidth/2;
    				},
    				calculateBaseWidth : function(){
    					return (this.calculateX(1) - this.calculateX(0)) - (2*options.barValueSpacing);
    				},
    				calculateBarWidth : function(datasetCount){
    					//The padding between datasets is to the right of each bar, providing that there are more than 1 dataset
    					var baseWidth = this.calculateBaseWidth() - ((datasetCount - 1) * options.barDatasetSpacing);

    					return (baseWidth / datasetCount);
    				}
    			});

    			this.datasets = [];

    			//Set up tooltip events on the chart
    			if (this.options.showTooltips){
    				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
    					var activeBars = (evt.type !== 'mouseout') ? this.getBarsAtEvent(evt) : [];

    					this.eachBars(function(bar){
    						bar.restore(['fillColor', 'strokeColor']);
    					});
    					helpers.each(activeBars, function(activeBar){
    						activeBar.fillColor = activeBar.highlightFill;
    						activeBar.strokeColor = activeBar.highlightStroke;
    					});
    					this.showTooltip(activeBars);
    				});
    			}

    			//Declare the extension of the default point, to cater for the options passed in to the constructor
    			this.BarClass = Chart.Rectangle.extend({
    				strokeWidth : this.options.barStrokeWidth,
    				showStroke : this.options.barShowStroke,
    				ctx : this.chart.ctx
    			});

    			//Iterate through each of the datasets, and build this into a property of the chart
    			helpers.each(data.datasets,function(dataset,datasetIndex){

    				var datasetObject = {
    					label : dataset.label || null,
    					fillColor : dataset.fillColor,
    					strokeColor : dataset.strokeColor,
    					bars : []
    				};

    				this.datasets.push(datasetObject);

    				helpers.each(dataset.data,function(dataPoint,index){
    					//Add a new point for each piece of data, passing any required data to draw.
    					datasetObject.bars.push(new this.BarClass({
    						value : dataPoint,
    						label : data.labels[index],
    						datasetLabel: dataset.label,
    						strokeColor : dataset.strokeColor,
    						fillColor : dataset.fillColor,
    						highlightFill : dataset.highlightFill || dataset.fillColor,
    						highlightStroke : dataset.highlightStroke || dataset.strokeColor
    					}));
    				},this);

    			},this);

    			this.buildScale(data.labels);

    			this.BarClass.prototype.base = this.scale.endPoint;

    			this.eachBars(function(bar, index, datasetIndex){
    				helpers.extend(bar, {
    					width : this.scale.calculateBarWidth(this.datasets.length),
    					x: this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
    					y: this.scale.endPoint
    				});
    				bar.save();
    			}, this);

    			this.render();
    		},
    		update : function(){
    			this.scale.update();
    			// Reset any highlight colours before updating.
    			helpers.each(this.activeElements, function(activeElement){
    				activeElement.restore(['fillColor', 'strokeColor']);
    			});

    			this.eachBars(function(bar){
    				bar.save();
    			});
    			this.render();
    		},
    		eachBars : function(callback){
    			helpers.each(this.datasets,function(dataset, datasetIndex){
    				helpers.each(dataset.bars, callback, this, datasetIndex);
    			},this);
    		},
    		getBarsAtEvent : function(e){
    			var barsArray = [],
    				eventPosition = helpers.getRelativePosition(e),
    				datasetIterator = function(dataset){
    					barsArray.push(dataset.bars[barIndex]);
    				},
    				barIndex;

    			for (var datasetIndex = 0; datasetIndex < this.datasets.length; datasetIndex++) {
    				for (barIndex = 0; barIndex < this.datasets[datasetIndex].bars.length; barIndex++) {
    					if (this.datasets[datasetIndex].bars[barIndex].inRange(eventPosition.x,eventPosition.y)){
    						helpers.each(this.datasets, datasetIterator);
    						return barsArray;
    					}
    				}
    			}

    			return barsArray;
    		},
    		buildScale : function(labels){
    			var self = this;

    			var dataTotal = function(){
    				var values = [];
    				self.eachBars(function(bar){
    					values.push(bar.value);
    				});
    				return values;
    			};

    			var scaleOptions = {
    				templateString : this.options.scaleLabel,
    				height : this.chart.height,
    				width : this.chart.width,
    				ctx : this.chart.ctx,
    				textColor : this.options.scaleFontColor,
    				fontSize : this.options.scaleFontSize,
    				fontStyle : this.options.scaleFontStyle,
    				fontFamily : this.options.scaleFontFamily,
    				valuesCount : labels.length,
    				beginAtZero : this.options.scaleBeginAtZero,
    				integersOnly : this.options.scaleIntegersOnly,
    				calculateYRange: function(currentHeight){
    					var updatedRanges = helpers.calculateScaleRange(
    						dataTotal(),
    						currentHeight,
    						this.fontSize,
    						this.beginAtZero,
    						this.integersOnly
    					);
    					helpers.extend(this, updatedRanges);
    				},
    				xLabels : labels,
    				font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
    				lineWidth : this.options.scaleLineWidth,
    				lineColor : this.options.scaleLineColor,
    				showHorizontalLines : this.options.scaleShowHorizontalLines,
    				showVerticalLines : this.options.scaleShowVerticalLines,
    				gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
    				gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
    				padding : (this.options.showScale) ? 0 : (this.options.barShowStroke) ? this.options.barStrokeWidth : 0,
    				showLabels : this.options.scaleShowLabels,
    				display : this.options.showScale
    			};

    			if (this.options.scaleOverride){
    				helpers.extend(scaleOptions, {
    					calculateYRange: helpers.noop,
    					steps: this.options.scaleSteps,
    					stepValue: this.options.scaleStepWidth,
    					min: this.options.scaleStartValue,
    					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
    				});
    			}

    			this.scale = new this.ScaleClass(scaleOptions);
    		},
    		addData : function(valuesArray,label){
    			//Map the values array for each of the datasets
    			helpers.each(valuesArray,function(value,datasetIndex){
    				//Add a new point for each piece of data, passing any required data to draw.
    				this.datasets[datasetIndex].bars.push(new this.BarClass({
    					value : value,
    					label : label,
    					x: this.scale.calculateBarX(this.datasets.length, datasetIndex, this.scale.valuesCount+1),
    					y: this.scale.endPoint,
    					width : this.scale.calculateBarWidth(this.datasets.length),
    					base : this.scale.endPoint,
    					strokeColor : this.datasets[datasetIndex].strokeColor,
    					fillColor : this.datasets[datasetIndex].fillColor
    				}));
    			},this);

    			this.scale.addXLabel(label);
    			//Then re-render the chart.
    			this.update();
    		},
    		removeData : function(){
    			this.scale.removeXLabel();
    			//Then re-render the chart.
    			helpers.each(this.datasets,function(dataset){
    				dataset.bars.shift();
    			},this);
    			this.update();
    		},
    		reflow : function(){
    			helpers.extend(this.BarClass.prototype,{
    				y: this.scale.endPoint,
    				base : this.scale.endPoint
    			});
    			var newScaleProps = helpers.extend({
    				height : this.chart.height,
    				width : this.chart.width
    			});
    			this.scale.update(newScaleProps);
    		},
    		draw : function(ease){
    			var easingDecimal = ease || 1;
    			this.clear();

    			var ctx = this.chart.ctx;

    			this.scale.draw(easingDecimal);

    			//Draw all the bars for each dataset
    			helpers.each(this.datasets,function(dataset,datasetIndex){
    				helpers.each(dataset.bars,function(bar,index){
    					if (bar.hasValue()){
    						bar.base = this.scale.endPoint;
    						//Transition then draw
    						bar.transition({
    							x : this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
    							y : this.scale.calculateY(bar.value),
    							width : this.scale.calculateBarWidth(this.datasets.length)
    						}, easingDecimal).draw();
    					}
    				},this);

    			},this);
    		}
    	});


    }).call(undefined);

    (function(){

    	var root = this,
    		Chart = root.Chart,
    		//Cache a local reference to Chart.helpers
    		helpers = Chart.helpers;

    	var defaultConfig = {
    		//Boolean - Whether we should show a stroke on each segment
    		segmentShowStroke : true,

    		//String - The colour of each segment stroke
    		segmentStrokeColor : "#fff",

    		//Number - The width of each segment stroke
    		segmentStrokeWidth : 2,

    		//The percentage of the chart that we cut out of the middle.
    		percentageInnerCutout : 50,

    		//Number - Amount of animation steps
    		animationSteps : 100,

    		//String - Animation easing effect
    		animationEasing : "easeOutBounce",

    		//Boolean - Whether we animate the rotation of the Doughnut
    		animateRotate : true,

    		//Boolean - Whether we animate scaling the Doughnut from the centre
    		animateScale : false,

    		//String - A legend template
    		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

    	};


    	Chart.Type.extend({
    		//Passing in a name registers this chart in the Chart namespace
    		name: "Doughnut",
    		//Providing a defaults will also register the deafults in the chart namespace
    		defaults : defaultConfig,
    		//Initialize is fired when the chart is initialized - Data is passed in as a parameter
    		//Config is automatically merged by the core of Chart.js, and is available at this.options
    		initialize:  function(data){

    			//Declare segments as a static property to prevent inheriting across the Chart type prototype
    			this.segments = [];
    			this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;

    			this.SegmentArc = Chart.Arc.extend({
    				ctx : this.chart.ctx,
    				x : this.chart.width/2,
    				y : this.chart.height/2
    			});

    			//Set up tooltip events on the chart
    			if (this.options.showTooltips){
    				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
    					var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];

    					helpers.each(this.segments,function(segment){
    						segment.restore(["fillColor"]);
    					});
    					helpers.each(activeSegments,function(activeSegment){
    						activeSegment.fillColor = activeSegment.highlightColor;
    					});
    					this.showTooltip(activeSegments);
    				});
    			}
    			this.calculateTotal(data);

    			helpers.each(data,function(datapoint, index){
    				this.addData(datapoint, index, true);
    			},this);

    			this.render();
    		},
    		getSegmentsAtEvent : function(e){
    			var segmentsArray = [];

    			var location = helpers.getRelativePosition(e);

    			helpers.each(this.segments,function(segment){
    				if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
    			},this);
    			return segmentsArray;
    		},
    		addData : function(segment, atIndex, silent){
    			var index = atIndex || this.segments.length;
    			this.segments.splice(index, 0, new this.SegmentArc({
    				value : segment.value,
    				outerRadius : (this.options.animateScale) ? 0 : this.outerRadius,
    				innerRadius : (this.options.animateScale) ? 0 : (this.outerRadius/100) * this.options.percentageInnerCutout,
    				fillColor : segment.color,
    				highlightColor : segment.highlight || segment.color,
    				showStroke : this.options.segmentShowStroke,
    				strokeWidth : this.options.segmentStrokeWidth,
    				strokeColor : this.options.segmentStrokeColor,
    				startAngle : Math.PI * 1.5,
    				circumference : (this.options.animateRotate) ? 0 : this.calculateCircumference(segment.value),
    				label : segment.label
    			}));
    			if (!silent){
    				this.reflow();
    				this.update();
    			}
    		},
    		calculateCircumference : function(value){
    			return (Math.PI*2)*(Math.abs(value) / this.total);
    		},
    		calculateTotal : function(data){
    			this.total = 0;
    			helpers.each(data,function(segment){
    				this.total += Math.abs(segment.value);
    			},this);
    		},
    		update : function(){
    			this.calculateTotal(this.segments);

    			// Reset any highlight colours before updating.
    			helpers.each(this.activeElements, function(activeElement){
    				activeElement.restore(['fillColor']);
    			});

    			helpers.each(this.segments,function(segment){
    				segment.save();
    			});
    			this.render();
    		},

    		removeData: function(atIndex){
    			var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
    			this.segments.splice(indexToDelete, 1);
    			this.reflow();
    			this.update();
    		},

    		reflow : function(){
    			helpers.extend(this.SegmentArc.prototype,{
    				x : this.chart.width/2,
    				y : this.chart.height/2
    			});
    			this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;
    			helpers.each(this.segments, function(segment){
    				segment.update({
    					outerRadius : this.outerRadius,
    					innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
    				});
    			}, this);
    		},
    		draw : function(easeDecimal){
    			var animDecimal = (easeDecimal) ? easeDecimal : 1;
    			this.clear();
    			helpers.each(this.segments,function(segment,index){
    				segment.transition({
    					circumference : this.calculateCircumference(segment.value),
    					outerRadius : this.outerRadius,
    					innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout
    				},animDecimal);

    				segment.endAngle = segment.startAngle + segment.circumference;

    				segment.draw();
    				if (index === 0){
    					segment.startAngle = Math.PI * 1.5;
    				}
    				//Check to see if it's the last segment, if not get the next and update the start angle
    				if (index < this.segments.length-1){
    					this.segments[index+1].startAngle = segment.endAngle;
    				}
    			},this);

    		}
    	});

    	Chart.types.Doughnut.extend({
    		name : "Pie",
    		defaults : helpers.merge(defaultConfig,{percentageInnerCutout : 0})
    	});

    }).call(undefined);
    (function(){

    	var root = this,
    		Chart = root.Chart,
    		helpers = Chart.helpers;

    	var defaultConfig = {

    		///Boolean - Whether grid lines are shown across the chart
    		scaleShowGridLines : true,

    		//String - Colour of the grid lines
    		scaleGridLineColor : "rgba(0,0,0,.05)",

    		//Number - Width of the grid lines
    		scaleGridLineWidth : 1,

    		//Boolean - Whether to show horizontal lines (except X axis)
    		scaleShowHorizontalLines: true,

    		//Boolean - Whether to show vertical lines (except Y axis)
    		scaleShowVerticalLines: true,

    		//Boolean - Whether the line is curved between points
    		bezierCurve : true,

    		//Number - Tension of the bezier curve between points
    		bezierCurveTension : 0.4,

    		//Boolean - Whether to show a dot for each point
    		pointDot : true,

    		//Number - Radius of each point dot in pixels
    		pointDotRadius : 4,

    		//Number - Pixel width of point dot stroke
    		pointDotStrokeWidth : 1,

    		//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    		pointHitDetectionRadius : 20,

    		//Boolean - Whether to show a stroke for datasets
    		datasetStroke : true,

    		//Number - Pixel width of dataset stroke
    		datasetStrokeWidth : 2,

    		//Boolean - Whether to fill the dataset with a colour
    		datasetFill : true,

    		//String - A legend template
    		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    	};


    	Chart.Type.extend({
    		name: "Line",
    		defaults : defaultConfig,
    		initialize:  function(data){
    			//Declare the extension of the default point, to cater for the options passed in to the constructor
    			this.PointClass = Chart.Point.extend({
    				strokeWidth : this.options.pointDotStrokeWidth,
    				radius : this.options.pointDotRadius,
    				display: this.options.pointDot,
    				hitDetectionRadius : this.options.pointHitDetectionRadius,
    				ctx : this.chart.ctx,
    				inRange : function(mouseX){
    					return (Math.pow(mouseX-this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius,2));
    				}
    			});

    			this.datasets = [];

    			//Set up tooltip events on the chart
    			if (this.options.showTooltips){
    				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
    					var activePoints = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];
    					this.eachPoints(function(point){
    						point.restore(['fillColor', 'strokeColor']);
    					});
    					helpers.each(activePoints, function(activePoint){
    						activePoint.fillColor = activePoint.highlightFill;
    						activePoint.strokeColor = activePoint.highlightStroke;
    					});
    					this.showTooltip(activePoints);
    				});
    			}

    			//Iterate through each of the datasets, and build this into a property of the chart
    			helpers.each(data.datasets,function(dataset){

    				var datasetObject = {
    					label : dataset.label || null,
    					fillColor : dataset.fillColor,
    					strokeColor : dataset.strokeColor,
    					pointColor : dataset.pointColor,
    					pointStrokeColor : dataset.pointStrokeColor,
    					points : []
    				};

    				this.datasets.push(datasetObject);


    				helpers.each(dataset.data,function(dataPoint,index){
    					//Add a new point for each piece of data, passing any required data to draw.
    					datasetObject.points.push(new this.PointClass({
    						value : dataPoint,
    						label : data.labels[index],
    						datasetLabel: dataset.label,
    						strokeColor : dataset.pointStrokeColor,
    						fillColor : dataset.pointColor,
    						highlightFill : dataset.pointHighlightFill || dataset.pointColor,
    						highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
    					}));
    				},this);

    				this.buildScale(data.labels);


    				this.eachPoints(function(point, index){
    					helpers.extend(point, {
    						x: this.scale.calculateX(index),
    						y: this.scale.endPoint
    					});
    					point.save();
    				}, this);

    			},this);


    			this.render();
    		},
    		update : function(){
    			this.scale.update();
    			// Reset any highlight colours before updating.
    			helpers.each(this.activeElements, function(activeElement){
    				activeElement.restore(['fillColor', 'strokeColor']);
    			});
    			this.eachPoints(function(point){
    				point.save();
    			});
    			this.render();
    		},
    		eachPoints : function(callback){
    			helpers.each(this.datasets,function(dataset){
    				helpers.each(dataset.points,callback,this);
    			},this);
    		},
    		getPointsAtEvent : function(e){
    			var pointsArray = [],
    				eventPosition = helpers.getRelativePosition(e);
    			helpers.each(this.datasets,function(dataset){
    				helpers.each(dataset.points,function(point){
    					if (point.inRange(eventPosition.x,eventPosition.y)) pointsArray.push(point);
    				});
    			},this);
    			return pointsArray;
    		},
    		buildScale : function(labels){
    			var self = this;

    			var dataTotal = function(){
    				var values = [];
    				self.eachPoints(function(point){
    					values.push(point.value);
    				});

    				return values;
    			};

    			var scaleOptions = {
    				templateString : this.options.scaleLabel,
    				height : this.chart.height,
    				width : this.chart.width,
    				ctx : this.chart.ctx,
    				textColor : this.options.scaleFontColor,
    				fontSize : this.options.scaleFontSize,
    				fontStyle : this.options.scaleFontStyle,
    				fontFamily : this.options.scaleFontFamily,
    				valuesCount : labels.length,
    				beginAtZero : this.options.scaleBeginAtZero,
    				integersOnly : this.options.scaleIntegersOnly,
    				calculateYRange : function(currentHeight){
    					var updatedRanges = helpers.calculateScaleRange(
    						dataTotal(),
    						currentHeight,
    						this.fontSize,
    						this.beginAtZero,
    						this.integersOnly
    					);
    					helpers.extend(this, updatedRanges);
    				},
    				xLabels : labels,
    				font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
    				lineWidth : this.options.scaleLineWidth,
    				lineColor : this.options.scaleLineColor,
    				showHorizontalLines : this.options.scaleShowHorizontalLines,
    				showVerticalLines : this.options.scaleShowVerticalLines,
    				gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
    				gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
    				padding: (this.options.showScale) ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
    				showLabels : this.options.scaleShowLabels,
    				display : this.options.showScale
    			};

    			if (this.options.scaleOverride){
    				helpers.extend(scaleOptions, {
    					calculateYRange: helpers.noop,
    					steps: this.options.scaleSteps,
    					stepValue: this.options.scaleStepWidth,
    					min: this.options.scaleStartValue,
    					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
    				});
    			}


    			this.scale = new Chart.Scale(scaleOptions);
    		},
    		addData : function(valuesArray,label){
    			//Map the values array for each of the datasets

    			helpers.each(valuesArray,function(value,datasetIndex){
    				//Add a new point for each piece of data, passing any required data to draw.
    				this.datasets[datasetIndex].points.push(new this.PointClass({
    					value : value,
    					label : label,
    					x: this.scale.calculateX(this.scale.valuesCount+1),
    					y: this.scale.endPoint,
    					strokeColor : this.datasets[datasetIndex].pointStrokeColor,
    					fillColor : this.datasets[datasetIndex].pointColor
    				}));
    			},this);

    			this.scale.addXLabel(label);
    			//Then re-render the chart.
    			this.update();
    		},
    		removeData : function(){
    			this.scale.removeXLabel();
    			//Then re-render the chart.
    			helpers.each(this.datasets,function(dataset){
    				dataset.points.shift();
    			},this);
    			this.update();
    		},
    		reflow : function(){
    			var newScaleProps = helpers.extend({
    				height : this.chart.height,
    				width : this.chart.width
    			});
    			this.scale.update(newScaleProps);
    		},
    		draw : function(ease){
    			var easingDecimal = ease || 1;
    			this.clear();

    			var ctx = this.chart.ctx;

    			// Some helper methods for getting the next/prev points
    			var hasValue = function(item){
    				return item.value !== null;
    			},
    			nextPoint = function(point, collection, index){
    				return helpers.findNextWhere(collection, hasValue, index) || point;
    			},
    			previousPoint = function(point, collection, index){
    				return helpers.findPreviousWhere(collection, hasValue, index) || point;
    			};

    			this.scale.draw(easingDecimal);


    			helpers.each(this.datasets,function(dataset){
    				var pointsWithValues = helpers.where(dataset.points, hasValue);

    				//Transition each point first so that the line and point drawing isn't out of sync
    				//We can use this extra loop to calculate the control points of this dataset also in this loop

    				helpers.each(dataset.points, function(point, index){
    					if (point.hasValue()){
    						point.transition({
    							y : this.scale.calculateY(point.value),
    							x : this.scale.calculateX(index)
    						}, easingDecimal);
    					}
    				},this);


    				// Control points need to be calculated in a seperate loop, because we need to know the current x/y of the point
    				// This would cause issues when there is no animation, because the y of the next point would be 0, so beziers would be skewed
    				if (this.options.bezierCurve){
    					helpers.each(pointsWithValues, function(point, index){
    						var tension = (index > 0 && index < pointsWithValues.length - 1) ? this.options.bezierCurveTension : 0;
    						point.controlPoints = helpers.splineCurve(
    							previousPoint(point, pointsWithValues, index),
    							point,
    							nextPoint(point, pointsWithValues, index),
    							tension
    						);

    						// Prevent the bezier going outside of the bounds of the graph

    						// Cap puter bezier handles to the upper/lower scale bounds
    						if (point.controlPoints.outer.y > this.scale.endPoint){
    							point.controlPoints.outer.y = this.scale.endPoint;
    						}
    						else if (point.controlPoints.outer.y < this.scale.startPoint){
    							point.controlPoints.outer.y = this.scale.startPoint;
    						}

    						// Cap inner bezier handles to the upper/lower scale bounds
    						if (point.controlPoints.inner.y > this.scale.endPoint){
    							point.controlPoints.inner.y = this.scale.endPoint;
    						}
    						else if (point.controlPoints.inner.y < this.scale.startPoint){
    							point.controlPoints.inner.y = this.scale.startPoint;
    						}
    					},this);
    				}


    				//Draw the line between all the points
    				ctx.lineWidth = this.options.datasetStrokeWidth;
    				ctx.strokeStyle = dataset.strokeColor;
    				ctx.beginPath();

    				helpers.each(pointsWithValues, function(point, index){
    					if (index === 0){
    						ctx.moveTo(point.x, point.y);
    					}
    					else{
    						if(this.options.bezierCurve){
    							var previous = previousPoint(point, pointsWithValues, index);

    							ctx.bezierCurveTo(
    								previous.controlPoints.outer.x,
    								previous.controlPoints.outer.y,
    								point.controlPoints.inner.x,
    								point.controlPoints.inner.y,
    								point.x,
    								point.y
    							);
    						}
    						else{
    							ctx.lineTo(point.x,point.y);
    						}
    					}
    				}, this);

    				ctx.stroke();

    				if (this.options.datasetFill && pointsWithValues.length > 0){
    					//Round off the line by going to the base of the chart, back to the start, then fill.
    					ctx.lineTo(pointsWithValues[pointsWithValues.length - 1].x, this.scale.endPoint);
    					ctx.lineTo(pointsWithValues[0].x, this.scale.endPoint);
    					ctx.fillStyle = dataset.fillColor;
    					ctx.closePath();
    					ctx.fill();
    				}

    				//Now draw the points over the line
    				//A little inefficient double looping, but better than the line
    				//lagging behind the point positions
    				helpers.each(pointsWithValues,function(point){
    					point.draw();
    				});
    			},this);
    		}
    	});


    }).call(undefined);

    (function(){

    	var root = this,
    		Chart = root.Chart,
    		//Cache a local reference to Chart.helpers
    		helpers = Chart.helpers;

    	var defaultConfig = {
    		//Boolean - Show a backdrop to the scale label
    		scaleShowLabelBackdrop : true,

    		//String - The colour of the label backdrop
    		scaleBackdropColor : "rgba(255,255,255,0.75)",

    		// Boolean - Whether the scale should begin at zero
    		scaleBeginAtZero : true,

    		//Number - The backdrop padding above & below the label in pixels
    		scaleBackdropPaddingY : 2,

    		//Number - The backdrop padding to the side of the label in pixels
    		scaleBackdropPaddingX : 2,

    		//Boolean - Show line for each value in the scale
    		scaleShowLine : true,

    		//Boolean - Stroke a line around each segment in the chart
    		segmentShowStroke : true,

    		//String - The colour of the stroke on each segement.
    		segmentStrokeColor : "#fff",

    		//Number - The width of the stroke value in pixels
    		segmentStrokeWidth : 2,

    		//Number - Amount of animation steps
    		animationSteps : 100,

    		//String - Animation easing effect.
    		animationEasing : "easeOutBounce",

    		//Boolean - Whether to animate the rotation of the chart
    		animateRotate : true,

    		//Boolean - Whether to animate scaling the chart from the centre
    		animateScale : false,

    		//String - A legend template
    		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    	};


    	Chart.Type.extend({
    		//Passing in a name registers this chart in the Chart namespace
    		name: "PolarArea",
    		//Providing a defaults will also register the deafults in the chart namespace
    		defaults : defaultConfig,
    		//Initialize is fired when the chart is initialized - Data is passed in as a parameter
    		//Config is automatically merged by the core of Chart.js, and is available at this.options
    		initialize:  function(data){
    			this.segments = [];
    			//Declare segment class as a chart instance specific class, so it can share props for this instance
    			this.SegmentArc = Chart.Arc.extend({
    				showStroke : this.options.segmentShowStroke,
    				strokeWidth : this.options.segmentStrokeWidth,
    				strokeColor : this.options.segmentStrokeColor,
    				ctx : this.chart.ctx,
    				innerRadius : 0,
    				x : this.chart.width/2,
    				y : this.chart.height/2
    			});
    			this.scale = new Chart.RadialScale({
    				display: this.options.showScale,
    				fontStyle: this.options.scaleFontStyle,
    				fontSize: this.options.scaleFontSize,
    				fontFamily: this.options.scaleFontFamily,
    				fontColor: this.options.scaleFontColor,
    				showLabels: this.options.scaleShowLabels,
    				showLabelBackdrop: this.options.scaleShowLabelBackdrop,
    				backdropColor: this.options.scaleBackdropColor,
    				backdropPaddingY : this.options.scaleBackdropPaddingY,
    				backdropPaddingX: this.options.scaleBackdropPaddingX,
    				lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
    				lineColor: this.options.scaleLineColor,
    				lineArc: true,
    				width: this.chart.width,
    				height: this.chart.height,
    				xCenter: this.chart.width/2,
    				yCenter: this.chart.height/2,
    				ctx : this.chart.ctx,
    				templateString: this.options.scaleLabel,
    				valuesCount: data.length
    			});

    			this.updateScaleRange(data);

    			this.scale.update();

    			helpers.each(data,function(segment,index){
    				this.addData(segment,index,true);
    			},this);

    			//Set up tooltip events on the chart
    			if (this.options.showTooltips){
    				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
    					var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];
    					helpers.each(this.segments,function(segment){
    						segment.restore(["fillColor"]);
    					});
    					helpers.each(activeSegments,function(activeSegment){
    						activeSegment.fillColor = activeSegment.highlightColor;
    					});
    					this.showTooltip(activeSegments);
    				});
    			}

    			this.render();
    		},
    		getSegmentsAtEvent : function(e){
    			var segmentsArray = [];

    			var location = helpers.getRelativePosition(e);

    			helpers.each(this.segments,function(segment){
    				if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);
    			},this);
    			return segmentsArray;
    		},
    		addData : function(segment, atIndex, silent){
    			var index = atIndex || this.segments.length;

    			this.segments.splice(index, 0, new this.SegmentArc({
    				fillColor: segment.color,
    				highlightColor: segment.highlight || segment.color,
    				label: segment.label,
    				value: segment.value,
    				outerRadius: (this.options.animateScale) ? 0 : this.scale.calculateCenterOffset(segment.value),
    				circumference: (this.options.animateRotate) ? 0 : this.scale.getCircumference(),
    				startAngle: Math.PI * 1.5
    			}));
    			if (!silent){
    				this.reflow();
    				this.update();
    			}
    		},
    		removeData: function(atIndex){
    			var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;
    			this.segments.splice(indexToDelete, 1);
    			this.reflow();
    			this.update();
    		},
    		calculateTotal: function(data){
    			this.total = 0;
    			helpers.each(data,function(segment){
    				this.total += segment.value;
    			},this);
    			this.scale.valuesCount = this.segments.length;
    		},
    		updateScaleRange: function(datapoints){
    			var valuesArray = [];
    			helpers.each(datapoints,function(segment){
    				valuesArray.push(segment.value);
    			});

    			var scaleSizes = (this.options.scaleOverride) ?
    				{
    					steps: this.options.scaleSteps,
    					stepValue: this.options.scaleStepWidth,
    					min: this.options.scaleStartValue,
    					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
    				} :
    				helpers.calculateScaleRange(
    					valuesArray,
    					helpers.min([this.chart.width, this.chart.height])/2,
    					this.options.scaleFontSize,
    					this.options.scaleBeginAtZero,
    					this.options.scaleIntegersOnly
    				);

    			helpers.extend(
    				this.scale,
    				scaleSizes,
    				{
    					size: helpers.min([this.chart.width, this.chart.height]),
    					xCenter: this.chart.width/2,
    					yCenter: this.chart.height/2
    				}
    			);

    		},
    		update : function(){
    			this.calculateTotal(this.segments);

    			helpers.each(this.segments,function(segment){
    				segment.save();
    			});
    			
    			this.reflow();
    			this.render();
    		},
    		reflow : function(){
    			helpers.extend(this.SegmentArc.prototype,{
    				x : this.chart.width/2,
    				y : this.chart.height/2
    			});
    			this.updateScaleRange(this.segments);
    			this.scale.update();

    			helpers.extend(this.scale,{
    				xCenter: this.chart.width/2,
    				yCenter: this.chart.height/2
    			});

    			helpers.each(this.segments, function(segment){
    				segment.update({
    					outerRadius : this.scale.calculateCenterOffset(segment.value)
    				});
    			}, this);

    		},
    		draw : function(ease){
    			var easingDecimal = ease || 1;
    			//Clear & draw the canvas
    			this.clear();
    			helpers.each(this.segments,function(segment, index){
    				segment.transition({
    					circumference : this.scale.getCircumference(),
    					outerRadius : this.scale.calculateCenterOffset(segment.value)
    				},easingDecimal);

    				segment.endAngle = segment.startAngle + segment.circumference;

    				// If we've removed the first segment we need to set the first one to
    				// start at the top.
    				if (index === 0){
    					segment.startAngle = Math.PI * 1.5;
    				}

    				//Check to see if it's the last segment, if not get the next and update the start angle
    				if (index < this.segments.length - 1){
    					this.segments[index+1].startAngle = segment.endAngle;
    				}
    				segment.draw();
    			}, this);
    			this.scale.draw();
    		}
    	});

    }).call(undefined);
    (function(){

    	var root = this,
    		Chart = root.Chart,
    		helpers = Chart.helpers;



    	Chart.Type.extend({
    		name: "Radar",
    		defaults:{
    			//Boolean - Whether to show lines for each scale point
    			scaleShowLine : true,

    			//Boolean - Whether we show the angle lines out of the radar
    			angleShowLineOut : true,

    			//Boolean - Whether to show labels on the scale
    			scaleShowLabels : false,

    			// Boolean - Whether the scale should begin at zero
    			scaleBeginAtZero : true,

    			//String - Colour of the angle line
    			angleLineColor : "rgba(0,0,0,.1)",

    			//Number - Pixel width of the angle line
    			angleLineWidth : 1,

    			//String - Point label font declaration
    			pointLabelFontFamily : "'Arial'",

    			//String - Point label font weight
    			pointLabelFontStyle : "normal",

    			//Number - Point label font size in pixels
    			pointLabelFontSize : 10,

    			//String - Point label font colour
    			pointLabelFontColor : "#666",

    			//Boolean - Whether to show a dot for each point
    			pointDot : true,

    			//Number - Radius of each point dot in pixels
    			pointDotRadius : 3,

    			//Number - Pixel width of point dot stroke
    			pointDotStrokeWidth : 1,

    			//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    			pointHitDetectionRadius : 20,

    			//Boolean - Whether to show a stroke for datasets
    			datasetStroke : true,

    			//Number - Pixel width of dataset stroke
    			datasetStrokeWidth : 2,

    			//Boolean - Whether to fill the dataset with a colour
    			datasetFill : true,

    			//String - A legend template
    			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    		},

    		initialize: function(data){
    			this.PointClass = Chart.Point.extend({
    				strokeWidth : this.options.pointDotStrokeWidth,
    				radius : this.options.pointDotRadius,
    				display: this.options.pointDot,
    				hitDetectionRadius : this.options.pointHitDetectionRadius,
    				ctx : this.chart.ctx
    			});

    			this.datasets = [];

    			this.buildScale(data);

    			//Set up tooltip events on the chart
    			if (this.options.showTooltips){
    				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){
    					var activePointsCollection = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];

    					this.eachPoints(function(point){
    						point.restore(['fillColor', 'strokeColor']);
    					});
    					helpers.each(activePointsCollection, function(activePoint){
    						activePoint.fillColor = activePoint.highlightFill;
    						activePoint.strokeColor = activePoint.highlightStroke;
    					});

    					this.showTooltip(activePointsCollection);
    				});
    			}

    			//Iterate through each of the datasets, and build this into a property of the chart
    			helpers.each(data.datasets,function(dataset){

    				var datasetObject = {
    					label: dataset.label || null,
    					fillColor : dataset.fillColor,
    					strokeColor : dataset.strokeColor,
    					pointColor : dataset.pointColor,
    					pointStrokeColor : dataset.pointStrokeColor,
    					points : []
    				};

    				this.datasets.push(datasetObject);

    				helpers.each(dataset.data,function(dataPoint,index){
    					//Add a new point for each piece of data, passing any required data to draw.
    					var pointPosition;
    					if (!this.scale.animation){
    						pointPosition = this.scale.getPointPosition(index, this.scale.calculateCenterOffset(dataPoint));
    					}
    					datasetObject.points.push(new this.PointClass({
    						value : dataPoint,
    						label : data.labels[index],
    						datasetLabel: dataset.label,
    						x: (this.options.animation) ? this.scale.xCenter : pointPosition.x,
    						y: (this.options.animation) ? this.scale.yCenter : pointPosition.y,
    						strokeColor : dataset.pointStrokeColor,
    						fillColor : dataset.pointColor,
    						highlightFill : dataset.pointHighlightFill || dataset.pointColor,
    						highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor
    					}));
    				},this);

    			},this);

    			this.render();
    		},
    		eachPoints : function(callback){
    			helpers.each(this.datasets,function(dataset){
    				helpers.each(dataset.points,callback,this);
    			},this);
    		},

    		getPointsAtEvent : function(evt){
    			var mousePosition = helpers.getRelativePosition(evt),
    				fromCenter = helpers.getAngleFromPoint({
    					x: this.scale.xCenter,
    					y: this.scale.yCenter
    				}, mousePosition);

    			var anglePerIndex = (Math.PI * 2) /this.scale.valuesCount,
    				pointIndex = Math.round((fromCenter.angle - Math.PI * 1.5) / anglePerIndex),
    				activePointsCollection = [];

    			// If we're at the top, make the pointIndex 0 to get the first of the array.
    			if (pointIndex >= this.scale.valuesCount || pointIndex < 0){
    				pointIndex = 0;
    			}

    			if (fromCenter.distance <= this.scale.drawingArea){
    				helpers.each(this.datasets, function(dataset){
    					activePointsCollection.push(dataset.points[pointIndex]);
    				});
    			}

    			return activePointsCollection;
    		},

    		buildScale : function(data){
    			this.scale = new Chart.RadialScale({
    				display: this.options.showScale,
    				fontStyle: this.options.scaleFontStyle,
    				fontSize: this.options.scaleFontSize,
    				fontFamily: this.options.scaleFontFamily,
    				fontColor: this.options.scaleFontColor,
    				showLabels: this.options.scaleShowLabels,
    				showLabelBackdrop: this.options.scaleShowLabelBackdrop,
    				backdropColor: this.options.scaleBackdropColor,
    				backdropPaddingY : this.options.scaleBackdropPaddingY,
    				backdropPaddingX: this.options.scaleBackdropPaddingX,
    				lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
    				lineColor: this.options.scaleLineColor,
    				angleLineColor : this.options.angleLineColor,
    				angleLineWidth : (this.options.angleShowLineOut) ? this.options.angleLineWidth : 0,
    				// Point labels at the edge of each line
    				pointLabelFontColor : this.options.pointLabelFontColor,
    				pointLabelFontSize : this.options.pointLabelFontSize,
    				pointLabelFontFamily : this.options.pointLabelFontFamily,
    				pointLabelFontStyle : this.options.pointLabelFontStyle,
    				height : this.chart.height,
    				width: this.chart.width,
    				xCenter: this.chart.width/2,
    				yCenter: this.chart.height/2,
    				ctx : this.chart.ctx,
    				templateString: this.options.scaleLabel,
    				labels: data.labels,
    				valuesCount: data.datasets[0].data.length
    			});

    			this.scale.setScaleSize();
    			this.updateScaleRange(data.datasets);
    			this.scale.buildYLabels();
    		},
    		updateScaleRange: function(datasets){
    			var valuesArray = (function(){
    				var totalDataArray = [];
    				helpers.each(datasets,function(dataset){
    					if (dataset.data){
    						totalDataArray = totalDataArray.concat(dataset.data);
    					}
    					else {
    						helpers.each(dataset.points, function(point){
    							totalDataArray.push(point.value);
    						});
    					}
    				});
    				return totalDataArray;
    			})();


    			var scaleSizes = (this.options.scaleOverride) ?
    				{
    					steps: this.options.scaleSteps,
    					stepValue: this.options.scaleStepWidth,
    					min: this.options.scaleStartValue,
    					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
    				} :
    				helpers.calculateScaleRange(
    					valuesArray,
    					helpers.min([this.chart.width, this.chart.height])/2,
    					this.options.scaleFontSize,
    					this.options.scaleBeginAtZero,
    					this.options.scaleIntegersOnly
    				);

    			helpers.extend(
    				this.scale,
    				scaleSizes
    			);

    		},
    		addData : function(valuesArray,label){
    			//Map the values array for each of the datasets
    			this.scale.valuesCount++;
    			helpers.each(valuesArray,function(value,datasetIndex){
    				var pointPosition = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(value));
    				this.datasets[datasetIndex].points.push(new this.PointClass({
    					value : value,
    					label : label,
    					x: pointPosition.x,
    					y: pointPosition.y,
    					strokeColor : this.datasets[datasetIndex].pointStrokeColor,
    					fillColor : this.datasets[datasetIndex].pointColor
    				}));
    			},this);

    			this.scale.labels.push(label);

    			this.reflow();

    			this.update();
    		},
    		removeData : function(){
    			this.scale.valuesCount--;
    			this.scale.labels.shift();
    			helpers.each(this.datasets,function(dataset){
    				dataset.points.shift();
    			},this);
    			this.reflow();
    			this.update();
    		},
    		update : function(){
    			this.eachPoints(function(point){
    				point.save();
    			});
    			this.reflow();
    			this.render();
    		},
    		reflow: function(){
    			helpers.extend(this.scale, {
    				width : this.chart.width,
    				height: this.chart.height,
    				size : helpers.min([this.chart.width, this.chart.height]),
    				xCenter: this.chart.width/2,
    				yCenter: this.chart.height/2
    			});
    			this.updateScaleRange(this.datasets);
    			this.scale.setScaleSize();
    			this.scale.buildYLabels();
    		},
    		draw : function(ease){
    			var easeDecimal = ease || 1,
    				ctx = this.chart.ctx;
    			this.clear();
    			this.scale.draw();

    			helpers.each(this.datasets,function(dataset){

    				//Transition each point first so that the line and point drawing isn't out of sync
    				helpers.each(dataset.points,function(point,index){
    					if (point.hasValue()){
    						point.transition(this.scale.getPointPosition(index, this.scale.calculateCenterOffset(point.value)), easeDecimal);
    					}
    				},this);



    				//Draw the line between all the points
    				ctx.lineWidth = this.options.datasetStrokeWidth;
    				ctx.strokeStyle = dataset.strokeColor;
    				ctx.beginPath();
    				helpers.each(dataset.points,function(point,index){
    					if (index === 0){
    						ctx.moveTo(point.x,point.y);
    					}
    					else{
    						ctx.lineTo(point.x,point.y);
    					}
    				},this);
    				ctx.closePath();
    				ctx.stroke();

    				ctx.fillStyle = dataset.fillColor;
    				ctx.fill();

    				//Now draw the points over the line
    				//A little inefficient double looping, but better than the line
    				//lagging behind the point positions
    				helpers.each(dataset.points,function(point){
    					if (point.hasValue()){
    						point.draw();
    					}
    				});

    			},this);

    		}

    	});





    }).call(undefined);

    var ChartJS = /*#__PURE__*/Object.freeze({

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

    var $$8 = jqueryProxy;
    function Chart(_a, children) {
        var xa = _a.xa, attrs = __rest(_a, ["xa"]);
        return (xatto.x("canvas", __assign({}, attrs, { oncreate: onCreateFactory(attrs), onupdate: onUpdateFactory(attrs) }), children));
    }
    function onCreateFactory(attrs) {
        return function (element) { return onCreate$8(element, attrs); };
    }
    function onCreate$8(element, attrs) {
        var ctx = element.getContext('2d');
        var $element = $$8(element);
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
        element.chart = new ChartJS(ctx)[method](data, options);
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

    /**
    *
    * jquery.sparkline.js
    *
    * v2.4.1
    * (c) Splunk, Inc
    * Contact: Gareth Watts (gareth@splunk.com)
    * http://omnipotent.net/jquery.sparkline/
    *
    * Generates inline sparkline charts from data supplied either to the method
    * or inline in HTML
    *
    * Compatible with Internet Explorer 6.0+ and modern browsers equipped with the canvas tag
    * (Firefox 2.0+, Safari, Opera, etc)
    *
    * License: New BSD License
    *
    * Copyright (c) 2012, Splunk Inc.
    * All rights reserved.
    *
    * Redistribution and use in source and binary forms, with or without modification,
    * are permitted provided that the following conditions are met:
    *
    *     * Redistributions of source code must retain the above copyright notice,
    *       this list of conditions and the following disclaimer.
    *     * Redistributions in binary form must reproduce the above copyright notice,
    *       this list of conditions and the following disclaimer in the documentation
    *       and/or other materials provided with the distribution.
    *     * Neither the name of Splunk Inc nor the names of its contributors may
    *       be used to endorse or promote products derived from this software without
    *       specific prior written permission.
    *
    * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
    * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
    * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
    * SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
    * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT
    * OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
    * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
    * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    *
    *
    * Usage:
    *  $(selector).sparkline(values, options)
    *
    * If values is undefined or set to 'html' then the data values are read from the specified tag:
    *   <p>Sparkline: <span class="sparkline">1,4,6,6,8,5,3,5</span></p>
    *   $('.sparkline').sparkline();
    * There must be no spaces in the enclosed data set
    *
    * Otherwise values must be an array of numbers or null values
    *    <p>Sparkline: <span id="sparkline1">This text replaced if the browser is compatible</span></p>
    *    $('#sparkline1').sparkline([1,4,6,6,8,5,3,5])
    *    $('#sparkline2').sparkline([1,4,6,null,null,5,3,5])
    *
    * Values can also be specified in an HTML comment, or as a values attribute:
    *    <p>Sparkline: <span class="sparkline"><!--1,4,6,6,8,5,3,5 --></span></p>
    *    <p>Sparkline: <span class="sparkline" values="1,4,6,6,8,5,3,5"></span></p>
    *    $('.sparkline').sparkline();
    *
    * For line charts, x values can also be specified:
    *   <p>Sparkline: <span class="sparkline">1:1,2.7:4,3.4:6,5:6,6:8,8.7:5,9:3,10:5</span></p>
    *    $('#sparkline1').sparkline([ [1,1], [2.7,4], [3.4,6], [5,6], [6,8], [8.7,5], [9,3], [10,5] ])
    *
    * By default, options should be passed in as the second argument to the sparkline function:
    *   $('.sparkline').sparkline([1,2,3,4], {type: 'bar'})
    *
    * Options can also be set by passing them on the tag itself.  This feature is disabled by default though
    * as there's a slight performance overhead:
    *   $('.sparkline').sparkline([1,2,3,4], {enableTagOptions: true})
    *   <p>Sparkline: <span class="sparkline" sparkType="bar" sparkBarColor="red">loading</span></p>
    * Prefix all options supplied as tag attribute with "spark" (configurable by setting tagOptionsPrefix)
    *
    * Supported options:
    *   lineColor - Color of the line used for the chart
    *   fillColor - Color used to fill in the chart - Set to '' or false for a transparent chart
    *   width - Width of the chart - Defaults to 3 times the number of values in pixels
    *   height - Height of the chart - Defaults to the height of the containing element
    *   chartRangeMin - Specify the minimum value to use for the Y range of the chart - Defaults to the minimum value supplied
    *   chartRangeMax - Specify the maximum value to use for the Y range of the chart - Defaults to the maximum value supplied
    *   chartRangeClip - Clip out of range values to the max/min specified by chartRangeMin and chartRangeMax
    *   chartRangeMinX - Specify the minimum value to use for the X range of the chart - Defaults to the minimum value supplied
    *   chartRangeMaxX - Specify the maximum value to use for the X range of the chart - Defaults to the maximum value supplied
    *   composite - If true then don't erase any existing chart attached to the tag, but draw
    *           another chart over the top - Note that width and height are ignored if an
    *           existing chart is detected.
    *   tagValuesAttribute - Name of tag attribute to check for data values - Defaults to 'values'
    *   enableTagOptions - Whether to check tags for sparkline options
    *   tagOptionsPrefix - Prefix used for options supplied as tag attributes - Defaults to 'spark'
    *   disableHiddenCheck - If set to true, then the plugin will assume that charts will never be drawn into a
    *           hidden dom element, avoding a browser reflow
    *   disableInteraction - If set to true then all mouseover/click interaction behaviour will be disabled,
    *       making the plugin perform much like it did in 1.x
    *   disableTooltips - If set to true then tooltips will be disabled - Defaults to false (tooltips enabled)
    *   disableHighlight - If set to true then highlighting of selected chart elements on mouseover will be disabled
    *       defaults to false (highlights enabled)
    *   highlightLighten - Factor to lighten/darken highlighted chart values by - Defaults to 1.4 for a 40% increase
    *   tooltipContainer - Specify which DOM element the tooltip should be rendered into - defaults to document.body
    *   tooltipClassname - Optional CSS classname to apply to tooltips - If not specified then a default style will be applied
    *   tooltipOffsetX - How many pixels away from the mouse pointer to render the tooltip on the X axis
    *   tooltipOffsetY - How many pixels away from the mouse pointer to render the tooltip on the r axis
    *   tooltipFormatter  - Optional callback that allows you to override the HTML displayed in the tooltip
    *       callback is given arguments of (sparkline, options, fields)
    *   tooltipChartTitle - If specified then the tooltip uses the string specified by this setting as a title
    *   tooltipFormat - A format string or SPFormat object  (or an array thereof for multiple entries)
    *       to control the format of the tooltip
    *   tooltipPrefix - A string to prepend to each field displayed in a tooltip
    *   tooltipSuffix - A string to append to each field displayed in a tooltip
    *   tooltipSkipNull - If true then null values will not have a tooltip displayed (defaults to true)
    *   tooltipValueLookups - An object or range map to map field values to tooltip strings
    *       (eg. to map -1 to "Lost", 0 to "Draw", and 1 to "Win")
    *   numberFormatter - Optional callback for formatting numbers in tooltips
    *   numberDigitGroupSep - Character to use for group separator in numbers "1,234" - Defaults to ","
    *   numberDecimalMark - Character to use for the decimal point when formatting numbers - Defaults to "."
    *   numberDigitGroupCount - Number of digits between group separator - Defaults to 3
    *
    * There are 7 types of sparkline, selected by supplying a "type" option of 'line' (default),
    * 'bar', 'tristate', 'bullet', 'discrete', 'pie' or 'box'
    *    line - Line chart.  Options:
    *       spotColor - Set to '' to not end each line in a circular spot
    *       minSpotColor - If set, color of spot at minimum value
    *       maxSpotColor - If set, color of spot at maximum value
    *       spotRadius - Radius in pixels
    *       lineWidth - Width of line in pixels
    *       normalRangeMin
    *       normalRangeMax - If set draws a filled horizontal bar between these two values marking the "normal"
    *                      or expected range of values
    *       normalRangeColor - Color to use for the above bar
    *       drawNormalOnTop - Draw the normal range above the chart fill color if true
    *       defaultPixelsPerValue - Defaults to 3 pixels of width for each value in the chart
    *       highlightSpotColor - The color to use for drawing a highlight spot on mouseover - Set to null to disable
    *       highlightLineColor - The color to use for drawing a highlight line on mouseover - Set to null to disable
    *       valueSpots - Specify which points to draw spots on, and in which color.  Accepts a range map
    *
    *   bar - Bar chart.  Options:
    *       barColor - Color of bars for postive values
    *       negBarColor - Color of bars for negative values
    *       zeroColor - Color of bars with zero values
    *       nullColor - Color of bars with null values - Defaults to omitting the bar entirely
    *       barWidth - Width of bars in pixels
    *       colorMap - Optional mappnig of values to colors to override the *BarColor values above
    *                  can be an Array of values to control the color of individual bars or a range map
    *                  to specify colors for individual ranges of values
    *       barSpacing - Gap between bars in pixels
    *       zeroAxis - Centers the y-axis around zero if true
    *
    *   tristate - Charts values of win (>0), lose (<0) or draw (=0)
    *       posBarColor - Color of win values
    *       negBarColor - Color of lose values
    *       zeroBarColor - Color of draw values
    *       barWidth - Width of bars in pixels
    *       barSpacing - Gap between bars in pixels
    *       colorMap - Optional mappnig of values to colors to override the *BarColor values above
    *                  can be an Array of values to control the color of individual bars or a range map
    *                  to specify colors for individual ranges of values
    *
    *   discrete - Options:
    *       lineHeight - Height of each line in pixels - Defaults to 30% of the graph height
    *       thesholdValue - Values less than this value will be drawn using thresholdColor instead of lineColor
    *       thresholdColor
    *
    *   bullet - Values for bullet graphs msut be in the order: target, performance, range1, range2, range3, ...
    *       options:
    *       targetColor - The color of the vertical target marker
    *       targetWidth - The width of the target marker in pixels
    *       performanceColor - The color of the performance measure horizontal bar
    *       rangeColors - Colors to use for each qualitative range background color
    *
    *   pie - Pie chart. Options:
    *       sliceColors - An array of colors to use for pie slices
    *       offset - Angle in degrees to offset the first slice - Try -90 or +90
    *       borderWidth - Width of border to draw around the pie chart, in pixels - Defaults to 0 (no border)
    *       borderColor - Color to use for the pie chart border - Defaults to #000
    *
    *   box - Box plot. Options:
    *       raw - Set to true to supply pre-computed plot points as values
    *             values should be: low_outlier, low_whisker, q1, median, q3, high_whisker, high_outlier
    *             When set to false you can supply any number of values and the box plot will
    *             be computed for you.  Default is false.
    *       showOutliers - Set to true (default) to display outliers as circles
    *       outlierIQR - Interquartile range used to determine outliers.  Default 1.5
    *       boxLineColor - Outline color of the box
    *       boxFillColor - Fill color for the box
    *       whiskerColor - Line color used for whiskers
    *       outlierLineColor - Outline color of outlier circles
    *       outlierFillColor - Fill color of the outlier circles
    *       spotRadius - Radius of outlier circles
    *       medianColor - Line color of the median line
    *       target - Draw a target cross hair at the supplied value (default undefined)
    *
    *
    *
    *   Examples:
    *   $('#sparkline1').sparkline(myvalues, { lineColor: '#f00', fillColor: false });
    *   $('.barsparks').sparkline('html', { type:'bar', height:'40px', barWidth:5 });
    *   $('#tristate').sparkline([1,1,-1,1,0,0,-1], { type:'tristate' }):
    *   $('#discrete').sparkline([1,3,4,5,5,3,4,5], { type:'discrete' });
    *   $('#bullet').sparkline([10,12,12,9,7], { type:'bullet' });
    *   $('#pie').sparkline([1,1,2], { type:'pie' });
    */

    /*jslint regexp: true, browser: true, jquery: true, white: true, nomen: false, plusplus: false, maxerr: 500, indent: 4 */

    (function(document, Math, undefined) { // performance/minified-size optimization
    (function(factory) {
        if(typeof define === 'function' && define.amd) {
            define(['jquery'], factory);
        } else if (jQuery && !jQuery.fn.sparkline) {
            factory(jQuery);
        }
    }
    (function($) {

        var UNSET_OPTION = {},
            getDefaults, createClass, SPFormat, clipval, quartile, normalizeValue, normalizeValues,
            remove, isNumber, all, addCSS, ensureArray, formatNumber, RangeMap,
            MouseHandler, Tooltip, barHighlightMixin,
            line, bar, tristate, discrete, bullet, pie, box, defaultStyles, initStyles,
            VShape, VCanvas_base, VCanvas_canvas, VCanvas_vml, pending, shapeCount = 0;

        /**
         * Default configuration settings
         */
        getDefaults = function () {
            return {
                // Settings common to most/all chart types
                common: {
                    type: 'line',
                    lineColor: '#00f',
                    fillColor: '#cdf',
                    defaultPixelsPerValue: 3,
                    width: 'auto',
                    height: 'auto',
                    composite: false,
                    tagValuesAttribute: 'values',
                    tagOptionsPrefix: 'spark',
                    enableTagOptions: false,
                    enableHighlight: true,
                    highlightLighten: 1.4,
                    tooltipSkipNull: true,
                    tooltipPrefix: '',
                    tooltipSuffix: '',
                    disableHiddenCheck: false,
                    numberFormatter: false,
                    numberDigitGroupCount: 3,
                    numberDigitGroupSep: ',',
                    numberDecimalMark: '.',
                    disableTooltips: false,
                    disableInteraction: false
                },
                // Defaults for line charts
                line: {
                    spotColor: '#f80',
                    highlightSpotColor: '#5f5',
                    highlightLineColor: '#f22',
                    spotRadius: 1.5,
                    minSpotColor: '#f80',
                    maxSpotColor: '#f80',
                    lineWidth: 1,
                    normalRangeMin: undefined,
                    normalRangeMax: undefined,
                    normalRangeColor: '#ccc',
                    drawNormalOnTop: false,
                    chartRangeMin: undefined,
                    chartRangeMax: undefined,
                    chartRangeMinX: undefined,
                    chartRangeMaxX: undefined,
                    tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
                },
                // Defaults for bar charts
                bar: {
                    barColor: '#3366cc',
                    negBarColor: '#f44',
                    stackedBarColor: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#66aa00',
                        '#dd4477', '#0099c6', '#990099'],
                    zeroColor: undefined,
                    nullColor: undefined,
                    zeroAxis: true,
                    barWidth: 4,
                    barSpacing: 1,
                    chartRangeMax: undefined,
                    chartRangeMin: undefined,
                    chartRangeClip: false,
                    colorMap: undefined,
                    tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
                },
                // Defaults for tristate charts
                tristate: {
                    barWidth: 4,
                    barSpacing: 1,
                    posBarColor: '#6f6',
                    negBarColor: '#f44',
                    zeroBarColor: '#999',
                    colorMap: {},
                    tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
                    tooltipValueLookups: { map: { '-1': 'Loss', '0': 'Draw', '1': 'Win' } }
                },
                // Defaults for discrete charts
                discrete: {
                    lineHeight: 'auto',
                    thresholdColor: undefined,
                    thresholdValue: 0,
                    chartRangeMax: undefined,
                    chartRangeMin: undefined,
                    chartRangeClip: false,
                    tooltipFormat: new SPFormat('{{prefix}}{{value}}{{suffix}}')
                },
                // Defaults for bullet charts
                bullet: {
                    targetColor: '#f33',
                    targetWidth: 3, // width of the target bar in pixels
                    performanceColor: '#33f',
                    rangeColors: ['#d3dafe', '#a8b6ff', '#7f94ff'],
                    base: undefined, // set this to a number to change the base start number
                    tooltipFormat: new SPFormat('{{fieldkey:fields}} - {{value}}'),
                    tooltipValueLookups: { fields: {r: 'Range', p: 'Performance', t: 'Target'} }
                },
                // Defaults for pie charts
                pie: {
                    offset: 0,
                    sliceColors: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#66aa00',
                        '#dd4477', '#0099c6', '#990099'],
                    borderWidth: 0,
                    borderColor: '#000',
                    tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
                },
                // Defaults for box plots
                box: {
                    raw: false,
                    boxLineColor: '#000',
                    boxFillColor: '#cdf',
                    whiskerColor: '#000',
                    outlierLineColor: '#333',
                    outlierFillColor: '#fff',
                    medianColor: '#f00',
                    showOutliers: true,
                    outlierIQR: 1.5,
                    spotRadius: 1.5,
                    target: undefined,
                    targetColor: '#4a2',
                    chartRangeMax: undefined,
                    chartRangeMin: undefined,
                    tooltipFormat: new SPFormat('{{field:fields}}: {{value}}'),
                    tooltipFormatFieldlistKey: 'field',
                    tooltipValueLookups: { fields: { lq: 'Lower Quartile', med: 'Median',
                        uq: 'Upper Quartile', lo: 'Left Outlier', ro: 'Right Outlier',
                        lw: 'Left Whisker', rw: 'Right Whisker'} }
                }
            };
        };

        // You can have tooltips use a css class other than jqstooltip by specifying tooltipClassname
        defaultStyles = '.jqstooltip { ' +
                'position: absolute;' +
                'left: 0px;' +
                'top: 0px;' +
                'visibility: hidden;' +
                'background: rgb(0, 0, 0) transparent;' +
                'background-color: rgba(0,0,0,0.6);' +
                'filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);' +
                '-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";' +
                'color: white;' +
                'font: 10px arial, san serif;' +
                'text-align: left;' +
                'white-space: nowrap;' +
                'padding: 5px;' +
                'border: 1px solid white;' +
                'box-sizing: content-box;' +
                'z-index: 10000;' +
                '}' +
                '.jqsfield { ' +
                'color: white;' +
                'font: 10px arial, san serif;' +
                'text-align: left;' +
                '}';

        /**
         * Utilities
         */

        createClass = function (/* [baseclass, [mixin, ...]], definition */) {
            var Class, args;
            Class = function () {
                this.init.apply(this, arguments);
            };
            if (arguments.length > 1) {
                if (arguments[0]) {
                    Class.prototype = $.extend(new arguments[0](), arguments[arguments.length - 1]);
                    Class._super = arguments[0].prototype;
                } else {
                    Class.prototype = arguments[arguments.length - 1];
                }
                if (arguments.length > 2) {
                    args = Array.prototype.slice.call(arguments, 1, -1);
                    args.unshift(Class.prototype);
                    $.extend.apply($, args);
                }
            } else {
                Class.prototype = arguments[0];
            }
            Class.prototype.cls = Class;
            return Class;
        };

        /**
         * Wraps a format string for tooltips
         * {{x}}
         * {{x.2}
         * {{x:months}}
         */
        $.SPFormatClass = SPFormat = createClass({
            fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
            precre: /(\w+)\.(\d+)/,

            init: function (format, fclass) {
                this.format = format;
                this.fclass = fclass;
            },

            render: function (fieldset, lookups, options) {
                var self = this,
                    fields = fieldset,
                    match, token, lookupkey, fieldvalue, prec;
                return this.format.replace(this.fre, function () {
                    var lookup;
                    token = arguments[1];
                    lookupkey = arguments[3];
                    match = self.precre.exec(token);
                    if (match) {
                        prec = match[2];
                        token = match[1];
                    } else {
                        prec = false;
                    }
                    fieldvalue = fields[token];
                    if (fieldvalue === undefined) {
                        return '';
                    }
                    if (lookupkey && lookups && lookups[lookupkey]) {
                        lookup = lookups[lookupkey];
                        if (lookup.get) { // RangeMap
                            return lookups[lookupkey].get(fieldvalue) || fieldvalue;
                        } else {
                            return lookups[lookupkey][fieldvalue] || fieldvalue;
                        }
                    }
                    if (isNumber(fieldvalue)) {
                        if (options.get('numberFormatter')) {
                            fieldvalue = options.get('numberFormatter')(fieldvalue);
                        } else {
                            fieldvalue = formatNumber(fieldvalue, prec,
                                options.get('numberDigitGroupCount'),
                                options.get('numberDigitGroupSep'),
                                options.get('numberDecimalMark'));
                        }
                    }
                    return fieldvalue;
                });
            }
        });

        // convience method to avoid needing the new operator
        $.spformat = function(format, fclass) {
            return new SPFormat(format, fclass);
        };

        clipval = function (val, min, max) {
            if (val < min) {
                return min;
            }
            if (val > max) {
                return max;
            }
            return val;
        };

        quartile = function (values, q) {
            var vl;
            if (q === 2) {
                vl = Math.floor(values.length / 2);
                return values.length % 2 ? values[vl] : (values[vl-1] + values[vl]) / 2;
            } else {
                if (values.length % 2 ) { // odd
                    vl = (values.length * q + q) / 4;
                    return vl % 1 ? (values[Math.floor(vl)] + values[Math.floor(vl) - 1]) / 2 : values[vl-1];
                } else { //even
                    vl = (values.length * q + 2) / 4;
                    return vl % 1 ? (values[Math.floor(vl)] + values[Math.floor(vl) - 1]) / 2 :  values[vl-1];

                }
            }
        };

        normalizeValue = function (val) {
            var nf;
            switch (val) {
                case 'undefined':
                    val = undefined;
                    break;
                case 'null':
                    val = null;
                    break;
                case 'true':
                    val = true;
                    break;
                case 'false':
                    val = false;
                    break;
                default:
                    nf = parseFloat(val);
                    if (val == nf) {
                        val = nf;
                    }
            }
            return val;
        };

        normalizeValues = function (vals) {
            var i, result = [];
            for (i = vals.length; i--;) {
                result[i] = normalizeValue(vals[i]);
            }
            return result;
        };

        remove = function (vals, filter) {
            var i, vl, result = [];
            for (i = 0, vl = vals.length; i < vl; i++) {
                if (vals[i] !== filter) {
                    result.push(vals[i]);
                }
            }
            return result;
        };

        isNumber = function (num) {
            return !isNaN(parseFloat(num)) && isFinite(num);
        };

        formatNumber = function (num, prec, groupsize, groupsep, decsep) {
            var p, i;
            num = (prec === false ? parseFloat(num).toString() : num.toFixed(prec)).split('');
            p = (p = $.inArray('.', num)) < 0 ? num.length : p;
            if (p < num.length) {
                num[p] = decsep;
            }
            for (i = p - groupsize; i > 0; i -= groupsize) {
                num.splice(i, 0, groupsep);
            }
            return num.join('');
        };

        // determine if all values of an array match a value
        // returns true if the array is empty
        all = function (val, arr, ignoreNull) {
            var i;
            for (i = arr.length; i--; ) {
                if (ignoreNull && arr[i] === null) continue;
                if (arr[i] !== val) {
                    return false;
                }
            }
            return true;
        };

        ensureArray = function (val) {
            return $.isArray(val) ? val : [val];
        };

        // http://paulirish.com/2008/bookmarklet-inject-new-css-rules/
        addCSS = function(css) {
            var tag, iefail;
            if (document.createStyleSheet) {
                try {
                    document.createStyleSheet().cssText = css;
                    return;
                } catch (e) {
                    // IE <= 9 maxes out at 31 stylesheets; inject into page instead.
                    iefail = true;
                }
            }
            tag = document.createElement('style');
            tag.type = 'text/css';
            document.getElementsByTagName('head')[0].appendChild(tag);
            if (iefail) {
                document.styleSheets[document.styleSheets.length - 1].cssText = css;
            } else {
                tag[(typeof document.body.style.WebkitAppearance == 'string') /* webkit only */ ? 'innerText' : 'innerHTML'] = css;
            }
        };

        // Provide a cross-browser interface to a few simple drawing primitives
        $.fn.simpledraw = function (width, height, useExisting, interact) {
            var target, mhandler;
            if (useExisting && (target = this.data('_jqs_vcanvas'))) {
                return target;
            }

            if ($.fn.sparkline.canvas === false) {
                // We've already determined that neither Canvas nor VML are available
                return false;

            } else if ($.fn.sparkline.canvas === undefined) {
                // No function defined yet -- need to see if we support Canvas or VML
                var el = document.createElement('canvas');
                if (!!(el.getContext && el.getContext('2d'))) {
                    // Canvas is available
                    $.fn.sparkline.canvas = function(width, height, target, interact) {
                        return new VCanvas_canvas(width, height, target, interact);
                    };
                } else if (document.namespaces && !document.namespaces.v) {
                    // VML is available
                    document.namespaces.add('v', 'urn:schemas-microsoft-com:vml', '#default#VML');
                    $.fn.sparkline.canvas = function(width, height, target, interact) {
                        return new VCanvas_vml(width, height, target);
                    };
                } else {
                    // Neither Canvas nor VML are available
                    $.fn.sparkline.canvas = false;
                    return false;
                }
            }

            if (width === undefined) {
                width = $(this).innerWidth();
            }
            if (height === undefined) {
                height = $(this).innerHeight();
            }

            target = $.fn.sparkline.canvas(width, height, this, interact);

            mhandler = $(this).data('_jqs_mhandler');
            if (mhandler) {
                mhandler.registerCanvas(target);
            }
            return target;
        };

        $.fn.cleardraw = function () {
            var target = this.data('_jqs_vcanvas');
            if (target) {
                target.reset();
            }
        };

        $.RangeMapClass = RangeMap = createClass({
            init: function (map) {
                var key, range, rangelist = [];
                for (key in map) {
                    if (map.hasOwnProperty(key) && typeof key === 'string' && key.indexOf(':') > -1) {
                        range = key.split(':');
                        range[0] = range[0].length === 0 ? -Infinity : parseFloat(range[0]);
                        range[1] = range[1].length === 0 ? Infinity : parseFloat(range[1]);
                        range[2] = map[key];
                        rangelist.push(range);
                    }
                }
                this.map = map;
                this.rangelist = rangelist || false;
            },

            get: function (value) {
                var rangelist = this.rangelist,
                    i, range, result;
                if ((result = this.map[value]) !== undefined) {
                    return result;
                }
                if (rangelist) {
                    for (i = rangelist.length; i--;) {
                        range = rangelist[i];
                        if (range[0] <= value && range[1] >= value) {
                            return range[2];
                        }
                    }
                }
                return undefined;
            }
        });

        // Convenience function
        $.range_map = function(map) {
            return new RangeMap(map);
        };

        MouseHandler = createClass({
            init: function (el, options) {
                var $el = $(el);
                this.$el = $el;
                this.options = options;
                this.currentPageX = 0;
                this.currentPageY = 0;
                this.el = el;
                this.splist = [];
                this.tooltip = null;
                this.over = false;
                this.displayTooltips = !options.get('disableTooltips');
                this.highlightEnabled = !options.get('disableHighlight');
            },

            registerSparkline: function (sp) {
                this.splist.push(sp);
                if (this.over) {
                    this.updateDisplay();
                }
            },

            registerCanvas: function (canvas) {
                var $canvas = $(canvas.canvas);
                this.canvas = canvas;
                this.$canvas = $canvas;
                $canvas.mouseenter($.proxy(this.mouseenter, this));
                $canvas.mouseleave($.proxy(this.mouseleave, this));
                $canvas.click($.proxy(this.mouseclick, this));
            },

            reset: function (removeTooltip) {
                this.splist = [];
                if (this.tooltip && removeTooltip) {
                    this.tooltip.remove();
                    this.tooltip = undefined;
                }
            },

            mouseclick: function (e) {
                var clickEvent = $.Event('sparklineClick');
                clickEvent.originalEvent = e;
                clickEvent.sparklines = this.splist;
                this.$el.trigger(clickEvent);
            },

            mouseenter: function (e) {
                $(document.body).unbind('mousemove.jqs');
                $(document.body).bind('mousemove.jqs', $.proxy(this.mousemove, this));
                this.over = true;
                this.currentPageX = e.pageX;
                this.currentPageY = e.pageY;
                this.currentEl = e.target;
                if (!this.tooltip && this.displayTooltips) {
                    this.tooltip = new Tooltip(this.options);
                    this.tooltip.updatePosition(e.pageX, e.pageY);
                }
                this.updateDisplay();
            },

            mouseleave: function () {
                $(document.body).unbind('mousemove.jqs');
                var splist = this.splist,
                     spcount = splist.length,
                     needsRefresh = false,
                     sp, i;
                this.over = false;
                this.currentEl = null;

                if (this.tooltip) {
                    this.tooltip.remove();
                    this.tooltip = null;
                }

                for (i = 0; i < spcount; i++) {
                    sp = splist[i];
                    if (sp.clearRegionHighlight()) {
                        needsRefresh = true;
                    }
                }

                if (needsRefresh) {
                    this.canvas.render();
                }
            },

            mousemove: function (e) {
                this.currentPageX = e.pageX;
                this.currentPageY = e.pageY;
                this.currentEl = e.target;
                if (this.tooltip) {
                    this.tooltip.updatePosition(e.pageX, e.pageY);
                }
                this.updateDisplay();
            },

            updateDisplay: function () {
                var splist = this.splist,
                     spcount = splist.length,
                     needsRefresh = false,
                     offset = this.$canvas.offset(),
                     localX = this.currentPageX - offset.left,
                     localY = this.currentPageY - offset.top,
                     tooltiphtml, sp, i, result, changeEvent;
                if (!this.over) {
                    return;
                }
                for (i = 0; i < spcount; i++) {
                    sp = splist[i];
                    result = sp.setRegionHighlight(this.currentEl, localX, localY);
                    if (result) {
                        needsRefresh = true;
                    }
                }
                if (needsRefresh) {
                    changeEvent = $.Event('sparklineRegionChange');
                    changeEvent.sparklines = this.splist;
                    this.$el.trigger(changeEvent);
                    if (this.tooltip) {
                        tooltiphtml = '';
                        for (i = 0; i < spcount; i++) {
                            sp = splist[i];
                            tooltiphtml += sp.getCurrentRegionTooltip();
                        }
                        this.tooltip.setContent(tooltiphtml);
                    }
                    if (!this.disableHighlight) {
                        this.canvas.render();
                    }
                }
                if (result === null) {
                    this.mouseleave();
                }
            }
        });


        Tooltip = createClass({
            sizeStyle: 'position: static !important;' +
                'display: block !important;' +
                'visibility: hidden !important;' +
                'float: left !important;',

            init: function (options) {
                var tooltipClassname = options.get('tooltipClassname', 'jqstooltip'),
                    sizetipStyle = this.sizeStyle,
                    offset;
                this.container = options.get('tooltipContainer') || document.body;
                this.tooltipOffsetX = options.get('tooltipOffsetX', 10);
                this.tooltipOffsetY = options.get('tooltipOffsetY', 12);
                // remove any previous lingering tooltip
                $('#jqssizetip').remove();
                $('#jqstooltip').remove();
                this.sizetip = $('<div/>', {
                    id: 'jqssizetip',
                    style: sizetipStyle,
                    'class': tooltipClassname
                });
                this.tooltip = $('<div/>', {
                    id: 'jqstooltip',
                    'class': tooltipClassname
                }).appendTo(this.container);
                // account for the container's location
                offset = this.tooltip.offset();
                this.offsetLeft = offset.left;
                this.offsetTop = offset.top;
                this.hidden = true;
                $(window).unbind('resize.jqs scroll.jqs');
                $(window).bind('resize.jqs scroll.jqs', $.proxy(this.updateWindowDims, this));
                this.updateWindowDims();
            },

            updateWindowDims: function () {
                this.scrollTop = $(window).scrollTop();
                this.scrollLeft = $(window).scrollLeft();
                this.scrollRight = this.scrollLeft + $(window).width();
                this.updatePosition();
            },

            getSize: function (content) {
                this.sizetip.html(content).appendTo(this.container);
                this.width = this.sizetip.width() + 1;
                this.height = this.sizetip.height();
                this.sizetip.remove();
            },

            setContent: function (content) {
                if (!content) {
                    this.tooltip.css('visibility', 'hidden');
                    this.hidden = true;
                    return;
                }
                this.getSize(content);
                this.tooltip.html(content)
                    .css({
                        'width': this.width,
                        'height': this.height,
                        'visibility': 'visible'
                    });
                if (this.hidden) {
                    this.hidden = false;
                    this.updatePosition();
                }
            },

            updatePosition: function (x, y) {
                if (x === undefined) {
                    if (this.mousex === undefined) {
                        return;
                    }
                    x = this.mousex - this.offsetLeft;
                    y = this.mousey - this.offsetTop;

                } else {
                    this.mousex = x = x - this.offsetLeft;
                    this.mousey = y = y - this.offsetTop;
                }
                if (!this.height || !this.width || this.hidden) {
                    return;
                }

                y -= this.height + this.tooltipOffsetY;
                x += this.tooltipOffsetX;

                if (y < this.scrollTop) {
                    y = this.scrollTop;
                }
                if (x < this.scrollLeft) {
                    x = this.scrollLeft;
                } else if (x + this.width > this.scrollRight) {
                    x = this.scrollRight - this.width;
                }

                this.tooltip.css({
                    'left': x,
                    'top': y
                });
            },

            remove: function () {
                this.tooltip.remove();
                this.sizetip.remove();
                this.sizetip = this.tooltip = undefined;
                $(window).unbind('resize.jqs scroll.jqs');
            }
        });

        initStyles = function() {
            addCSS(defaultStyles);
        };

        $(initStyles);

        pending = [];
        $.fn.sparkline = function (userValues, userOptions) {
            return this.each(function () {
                var options = new $.fn.sparkline.options(this, userOptions),
                     $this = $(this),
                     render, i;
                render = function () {
                    var values, width, height, tmp, mhandler, sp, vals;
                    if (userValues === 'html' || userValues === undefined) {
                        vals = this.getAttribute(options.get('tagValuesAttribute'));
                        if (vals === undefined || vals === null) {
                            vals = $this.html();
                        }
                        values = vals.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, '').split(',');
                    } else {
                        values = userValues;
                    }

                    width = options.get('width') === 'auto' ? values.length * options.get('defaultPixelsPerValue') : options.get('width');
                    if (options.get('height') === 'auto') {
                        if (!options.get('composite') || !$.data(this, '_jqs_vcanvas')) {
                            // must be a better way to get the line height
                            tmp = document.createElement('span');
                            tmp.innerHTML = 'a';
                            $this.html(tmp);
                            height = $(tmp).innerHeight() || $(tmp).height();
                            $(tmp).remove();
                            tmp = null;
                        }
                    } else {
                        height = options.get('height');
                    }

                    if (!options.get('disableInteraction')) {
                        mhandler = $.data(this, '_jqs_mhandler');
                        if (!mhandler) {
                            mhandler = new MouseHandler(this, options);
                            $.data(this, '_jqs_mhandler', mhandler);
                        } else if (!options.get('composite')) {
                            mhandler.reset();
                        }
                    } else {
                        mhandler = false;
                    }

                    if (options.get('composite') && !$.data(this, '_jqs_vcanvas')) {
                        if (!$.data(this, '_jqs_errnotify')) {
                            alert('Attempted to attach a composite sparkline to an element with no existing sparkline');
                            $.data(this, '_jqs_errnotify', true);
                        }
                        return;
                    }

                    sp = new $.fn.sparkline[options.get('type')](this, values, options, width, height);

                    sp.render();

                    if (mhandler) {
                        mhandler.registerSparkline(sp);
                    }
                };
                if (($(this).html() && !options.get('disableHiddenCheck') && $(this).is(':hidden')) || !$(this).parents('body').length) {
                    if (!options.get('composite') && $.data(this, '_jqs_pending')) {
                        // remove any existing references to the element
                        for (i = pending.length; i; i--) {
                            if (pending[i - 1][0] == this) {
                                pending.splice(i - 1, 1);
                            }
                        }
                    }
                    pending.push([this, render]);
                    $.data(this, '_jqs_pending', true);
                } else {
                    render.call(this);
                }
            });
        };

        $.fn.sparkline.defaults = getDefaults();


        $.sparkline_display_visible = function () {
            var el, i, pl;
            var done = [];
            for (i = 0, pl = pending.length; i < pl; i++) {
                el = pending[i][0];
                if ($(el).is(':visible') && !$(el).parents().is(':hidden')) {
                    pending[i][1].call(el);
                    $.data(pending[i][0], '_jqs_pending', false);
                    done.push(i);
                } else if (!$(el).closest('html').length && !$.data(el, '_jqs_pending')) {
                    // element has been inserted and removed from the DOM
                    // If it was not yet inserted into the dom then the .data request
                    // will return true.
                    // removing from the dom causes the data to be removed.
                    $.data(pending[i][0], '_jqs_pending', false);
                    done.push(i);
                }
            }
            for (i = done.length; i; i--) {
                pending.splice(done[i - 1], 1);
            }
        };


        /**
         * User option handler
         */
        $.fn.sparkline.options = createClass({
            init: function (tag, userOptions) {
                var extendedOptions, defaults, base, tagOptionType;
                this.userOptions = userOptions = userOptions || {};
                this.tag = tag;
                this.tagValCache = {};
                defaults = $.fn.sparkline.defaults;
                base = defaults.common;
                this.tagOptionsPrefix = userOptions.enableTagOptions && (userOptions.tagOptionsPrefix || base.tagOptionsPrefix);

                tagOptionType = this.getTagSetting('type');
                if (tagOptionType === UNSET_OPTION) {
                    extendedOptions = defaults[userOptions.type || base.type];
                } else {
                    extendedOptions = defaults[tagOptionType];
                }
                this.mergedOptions = $.extend({}, base, extendedOptions, userOptions);
            },


            getTagSetting: function (key) {
                var prefix = this.tagOptionsPrefix,
                    val, i, pairs, keyval;
                if (prefix === false || prefix === undefined) {
                    return UNSET_OPTION;
                }
                if (this.tagValCache.hasOwnProperty(key)) {
                    val = this.tagValCache.key;
                } else {
                    val = this.tag.getAttribute(prefix + key);
                    if (val === undefined || val === null) {
                        val = UNSET_OPTION;
                    } else if (val.substr(0, 1) === '[') {
                        val = val.substr(1, val.length - 2).split(',');
                        for (i = val.length; i--;) {
                            val[i] = normalizeValue(val[i].replace(/(^\s*)|(\s*$)/g, ''));
                        }
                    } else if (val.substr(0, 1) === '{') {
                        pairs = val.substr(1, val.length - 2).split(',');
                        val = {};
                        for (i = pairs.length; i--;) {
                            keyval = pairs[i].split(':', 2);
                            val[keyval[0].replace(/(^\s*)|(\s*$)/g, '')] = normalizeValue(keyval[1].replace(/(^\s*)|(\s*$)/g, ''));
                        }
                    } else {
                        val = normalizeValue(val);
                    }
                    this.tagValCache.key = val;
                }
                return val;
            },

            get: function (key, defaultval) {
                var tagOption = this.getTagSetting(key),
                    result;
                if (tagOption !== UNSET_OPTION) {
                    return tagOption;
                }
                return (result = this.mergedOptions[key]) === undefined ? defaultval : result;
            }
        });


        $.fn.sparkline._base = createClass({
            disabled: false,

            init: function (el, values, options, width, height) {
                this.el = el;
                this.$el = $(el);
                this.values = values;
                this.options = options;
                this.width = width;
                this.height = height;
                this.currentRegion = undefined;
            },

            /**
             * Setup the canvas
             */
            initTarget: function () {
                var interactive = !this.options.get('disableInteraction');
                if (!(this.target = this.$el.simpledraw(this.width, this.height, this.options.get('composite'), interactive))) {
                    this.disabled = true;
                } else {
                    this.canvasWidth = this.target.pixelWidth;
                    this.canvasHeight = this.target.pixelHeight;
                }
            },

            /**
             * Actually render the chart to the canvas
             */
            render: function () {
                if (this.disabled) {
                    this.el.innerHTML = '';
                    return false;
                }
                return true;
            },

            /**
             * Return a region id for a given x/y co-ordinate
             */
            getRegion: function (x, y) {
            },

            /**
             * Highlight an item based on the moused-over x,y co-ordinate
             */
            setRegionHighlight: function (el, x, y) {
                var currentRegion = this.currentRegion,
                    highlightEnabled = !this.options.get('disableHighlight'),
                    newRegion;
                if (x > this.canvasWidth || y > this.canvasHeight || x < 0 || y < 0) {
                    return null;
                }
                newRegion = this.getRegion(el, x, y);
                if (currentRegion !== newRegion) {
                    if (currentRegion !== undefined && highlightEnabled) {
                        this.removeHighlight();
                    }
                    this.currentRegion = newRegion;
                    if (newRegion !== undefined && highlightEnabled) {
                        this.renderHighlight();
                    }
                    return true;
                }
                return false;
            },

            /**
             * Reset any currently highlighted item
             */
            clearRegionHighlight: function () {
                if (this.currentRegion !== undefined) {
                    this.removeHighlight();
                    this.currentRegion = undefined;
                    return true;
                }
                return false;
            },

            renderHighlight: function () {
                this.changeHighlight(true);
            },

            removeHighlight: function () {
                this.changeHighlight(false);
            },

            changeHighlight: function (highlight)  {},

            /**
             * Fetch the HTML to display as a tooltip
             */
            getCurrentRegionTooltip: function () {
                var options = this.options,
                    header = '',
                    entries = [],
                    fields, formats, formatlen, fclass, text, i,
                    showFields, showFieldsKey, newFields, fv,
                    formatter, format, fieldlen, j;
                if (this.currentRegion === undefined) {
                    return '';
                }
                fields = this.getCurrentRegionFields();
                formatter = options.get('tooltipFormatter');
                if (formatter) {
                    return formatter(this, options, fields);
                }
                if (options.get('tooltipChartTitle')) {
                    header += '<div class="jqs jqstitle">' + options.get('tooltipChartTitle') + '</div>\n';
                }
                formats = this.options.get('tooltipFormat');
                if (!formats) {
                    return '';
                }
                if (!$.isArray(formats)) {
                    formats = [formats];
                }
                if (!$.isArray(fields)) {
                    fields = [fields];
                }
                showFields = this.options.get('tooltipFormatFieldlist');
                showFieldsKey = this.options.get('tooltipFormatFieldlistKey');
                if (showFields && showFieldsKey) {
                    // user-selected ordering of fields
                    newFields = [];
                    for (i = fields.length; i--;) {
                        fv = fields[i][showFieldsKey];
                        if ((j = $.inArray(fv, showFields)) != -1) {
                            newFields[j] = fields[i];
                        }
                    }
                    fields = newFields;
                }
                formatlen = formats.length;
                fieldlen = fields.length;
                for (i = 0; i < formatlen; i++) {
                    format = formats[i];
                    if (typeof format === 'string') {
                        format = new SPFormat(format);
                    }
                    fclass = format.fclass || 'jqsfield';
                    for (j = 0; j < fieldlen; j++) {
                        if (!fields[j].isNull || !options.get('tooltipSkipNull')) {
                            $.extend(fields[j], {
                                prefix: options.get('tooltipPrefix'),
                                suffix: options.get('tooltipSuffix')
                            });
                            text = format.render(fields[j], options.get('tooltipValueLookups'), options);
                            entries.push('<div class="' + fclass + '">' + text + '</div>');
                        }
                    }
                }
                if (entries.length) {
                    return header + entries.join('\n');
                }
                return '';
            },

            getCurrentRegionFields: function () {},

            calcHighlightColor: function (color, options) {
                var highlightColor = options.get('highlightColor'),
                    lighten = options.get('highlightLighten'),
                    parse, mult, rgbnew, i;
                if (highlightColor) {
                    return highlightColor;
                }
                if (lighten) {
                    // extract RGB values
                    parse = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(color) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(color);
                    if (parse) {
                        rgbnew = [];
                        mult = color.length === 4 ? 16 : 1;
                        for (i = 0; i < 3; i++) {
                            rgbnew[i] = clipval(Math.round(parseInt(parse[i + 1], 16) * mult * lighten), 0, 255);
                        }
                        return 'rgb(' + rgbnew.join(',') + ')';
                    }

                }
                return color;
            }

        });

        barHighlightMixin = {
            changeHighlight: function (highlight) {
                var currentRegion = this.currentRegion,
                    target = this.target,
                    shapeids = this.regionShapes[currentRegion],
                    newShapes;
                // will be null if the region value was null
                if (shapeids) {
                    newShapes = this.renderRegion(currentRegion, highlight);
                    if ($.isArray(newShapes) || $.isArray(shapeids)) {
                        target.replaceWithShapes(shapeids, newShapes);
                        this.regionShapes[currentRegion] = $.map(newShapes, function (newShape) {
                            return newShape.id;
                        });
                    } else {
                        target.replaceWithShape(shapeids, newShapes);
                        this.regionShapes[currentRegion] = newShapes.id;
                    }
                }
            },

            render: function () {
                var values = this.values,
                    target = this.target,
                    regionShapes = this.regionShapes,
                    shapes, ids, i, j;

                if (!this.cls._super.render.call(this)) {
                    return;
                }
                for (i = values.length; i--;) {
                    shapes = this.renderRegion(i);
                    if (shapes) {
                        if ($.isArray(shapes)) {
                            ids = [];
                            for (j = shapes.length; j--;) {
                                shapes[j].append();
                                ids.push(shapes[j].id);
                            }
                            regionShapes[i] = ids;
                        } else {
                            shapes.append();
                            regionShapes[i] = shapes.id; // store just the shapeid
                        }
                    } else {
                        // null value
                        regionShapes[i] = null;
                    }
                }
                target.render();
            }
        };

        /**
         * Line charts
         */
        $.fn.sparkline.line = line = createClass($.fn.sparkline._base, {
            type: 'line',

            init: function (el, values, options, width, height) {
                line._super.init.call(this, el, values, options, width, height);
                this.vertices = [];
                this.regionMap = [];
                this.xvalues = [];
                this.yvalues = [];
                this.yminmax = [];
                this.hightlightSpotId = null;
                this.lastShapeId = null;
                this.initTarget();
            },

            getRegion: function (el, x, y) {
                var i,
                    regionMap = this.regionMap; // maps regions to value positions
                for (i = regionMap.length; i--;) {
                    if (regionMap[i] !== null && x >= regionMap[i][0] && x <= regionMap[i][1]) {
                        return regionMap[i][2];
                    }
                }
                return undefined;
            },

            getCurrentRegionFields: function () {
                var currentRegion = this.currentRegion;
                return {
                    isNull: this.yvalues[currentRegion] === null,
                    x: this.xvalues[currentRegion],
                    y: this.yvalues[currentRegion],
                    color: this.options.get('lineColor'),
                    fillColor: this.options.get('fillColor'),
                    offset: currentRegion
                };
            },

            renderHighlight: function () {
                var currentRegion = this.currentRegion,
                    target = this.target,
                    vertex = this.vertices[currentRegion],
                    options = this.options,
                    spotRadius = options.get('spotRadius'),
                    highlightSpotColor = options.get('highlightSpotColor'),
                    highlightLineColor = options.get('highlightLineColor'),
                    highlightSpot, highlightLine;

                if (!vertex) {
                    return;
                }
                if (spotRadius && highlightSpotColor) {
                    highlightSpot = target.drawCircle(vertex[0], vertex[1],
                        spotRadius, undefined, highlightSpotColor);
                    this.highlightSpotId = highlightSpot.id;
                    target.insertAfterShape(this.lastShapeId, highlightSpot);
                }
                if (highlightLineColor) {
                    highlightLine = target.drawLine(vertex[0], this.canvasTop, vertex[0],
                        this.canvasTop + this.canvasHeight, highlightLineColor);
                    this.highlightLineId = highlightLine.id;
                    target.insertAfterShape(this.lastShapeId, highlightLine);
                }
            },

            removeHighlight: function () {
                var target = this.target;
                if (this.highlightSpotId) {
                    target.removeShapeId(this.highlightSpotId);
                    this.highlightSpotId = null;
                }
                if (this.highlightLineId) {
                    target.removeShapeId(this.highlightLineId);
                    this.highlightLineId = null;
                }
            },

            scanValues: function () {
                var values = this.values,
                    valcount = values.length,
                    xvalues = this.xvalues,
                    yvalues = this.yvalues,
                    yminmax = this.yminmax,
                    i, val, isStr, isArray, sp;
                for (i = 0; i < valcount; i++) {
                    val = values[i];
                    isStr = typeof(values[i]) === 'string';
                    isArray = typeof(values[i]) === 'object' && values[i] instanceof Array;
                    sp = isStr && values[i].split(':');
                    if (isStr && sp.length === 2) { // x:y
                        xvalues.push(Number(sp[0]));
                        yvalues.push(Number(sp[1]));
                        yminmax.push(Number(sp[1]));
                    } else if (isArray) {
                        xvalues.push(val[0]);
                        yvalues.push(val[1]);
                        yminmax.push(val[1]);
                    } else {
                        xvalues.push(i);
                        if (values[i] === null || values[i] === 'null') {
                            yvalues.push(null);
                        } else {
                            yvalues.push(Number(val));
                            yminmax.push(Number(val));
                        }
                    }
                }
                if (this.options.get('xvalues')) {
                    xvalues = this.options.get('xvalues');
                }

                this.maxy = this.maxyorg = Math.max.apply(Math, yminmax);
                this.miny = this.minyorg = Math.min.apply(Math, yminmax);

                this.maxx = Math.max.apply(Math, xvalues);
                this.minx = Math.min.apply(Math, xvalues);

                this.xvalues = xvalues;
                this.yvalues = yvalues;
                this.yminmax = yminmax;

            },

            processRangeOptions: function () {
                var options = this.options,
                    normalRangeMin = options.get('normalRangeMin'),
                    normalRangeMax = options.get('normalRangeMax');

                if (normalRangeMin !== undefined) {
                    if (normalRangeMin < this.miny) {
                        this.miny = normalRangeMin;
                    }
                    if (normalRangeMax > this.maxy) {
                        this.maxy = normalRangeMax;
                    }
                }
                if (options.get('chartRangeMin') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMin') < this.miny)) {
                    this.miny = options.get('chartRangeMin');
                }
                if (options.get('chartRangeMax') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMax') > this.maxy)) {
                    this.maxy = options.get('chartRangeMax');
                }
                if (options.get('chartRangeMinX') !== undefined && (options.get('chartRangeClipX') || options.get('chartRangeMinX') < this.minx)) {
                    this.minx = options.get('chartRangeMinX');
                }
                if (options.get('chartRangeMaxX') !== undefined && (options.get('chartRangeClipX') || options.get('chartRangeMaxX') > this.maxx)) {
                    this.maxx = options.get('chartRangeMaxX');
                }

            },

            drawNormalRange: function (canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey) {
                var normalRangeMin = this.options.get('normalRangeMin'),
                    normalRangeMax = this.options.get('normalRangeMax'),
                    ytop = canvasTop + Math.round(canvasHeight - (canvasHeight * ((normalRangeMax - this.miny) / rangey))),
                    height = Math.round((canvasHeight * (normalRangeMax - normalRangeMin)) / rangey);
                this.target.drawRect(canvasLeft, ytop, canvasWidth, height, undefined, this.options.get('normalRangeColor')).append();
            },

            render: function () {
                var options = this.options,
                    target = this.target,
                    canvasWidth = this.canvasWidth,
                    canvasHeight = this.canvasHeight,
                    vertices = this.vertices,
                    spotRadius = options.get('spotRadius'),
                    regionMap = this.regionMap,
                    rangex, rangey, yvallast,
                    canvasTop, canvasLeft,
                    vertex, path, paths, x, y, xnext, xpos, xposnext,
                    last, next, yvalcount, lineShapes, fillShapes, plen,
                    valueSpots, hlSpotsEnabled, color, xvalues, yvalues, i;

                if (!line._super.render.call(this)) {
                    return;
                }

                this.scanValues();
                this.processRangeOptions();

                xvalues = this.xvalues;
                yvalues = this.yvalues;

                if (!this.yminmax.length || this.yvalues.length < 2) {
                    // empty or all null valuess
                    return;
                }

                canvasTop = canvasLeft = 0;

                rangex = this.maxx - this.minx === 0 ? 1 : this.maxx - this.minx;
                rangey = this.maxy - this.miny === 0 ? 1 : this.maxy - this.miny;
                yvallast = this.yvalues.length - 1;

                if (spotRadius && (canvasWidth < (spotRadius * 4) || canvasHeight < (spotRadius * 4))) {
                    spotRadius = 0;
                }
                if (spotRadius) {
                    // adjust the canvas size as required so that spots will fit
                    hlSpotsEnabled = options.get('highlightSpotColor') &&  !options.get('disableInteraction');
                    if (hlSpotsEnabled || options.get('minSpotColor') || (options.get('spotColor') && yvalues[yvallast] === this.miny)) {
                        canvasHeight -= Math.ceil(spotRadius);
                    }
                    if (hlSpotsEnabled || options.get('maxSpotColor') || (options.get('spotColor') && yvalues[yvallast] === this.maxy)) {
                        canvasHeight -= Math.ceil(spotRadius);
                        canvasTop += Math.ceil(spotRadius);
                    }
                    if (hlSpotsEnabled ||
                         ((options.get('minSpotColor') || options.get('maxSpotColor')) && (yvalues[0] === this.miny || yvalues[0] === this.maxy))) {
                        canvasLeft += Math.ceil(spotRadius);
                        canvasWidth -= Math.ceil(spotRadius);
                    }
                    if (hlSpotsEnabled || options.get('spotColor') ||
                        (options.get('minSpotColor') || options.get('maxSpotColor') &&
                            (yvalues[yvallast] === this.miny || yvalues[yvallast] === this.maxy))) {
                        canvasWidth -= Math.ceil(spotRadius);
                    }
                }


                canvasHeight--;

                if (options.get('normalRangeMin') !== undefined && !options.get('drawNormalOnTop')) {
                    this.drawNormalRange(canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey);
                }

                path = [];
                paths = [path];
                last = next = null;
                yvalcount = yvalues.length;
                for (i = 0; i < yvalcount; i++) {
                    x = xvalues[i];
                    xnext = xvalues[i + 1];
                    y = yvalues[i];
                    xpos = canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex));
                    xposnext = i < yvalcount - 1 ? canvasLeft + Math.round((xnext - this.minx) * (canvasWidth / rangex)) : canvasWidth;
                    next = xpos + ((xposnext - xpos) / 2);
                    regionMap[i] = [last || 0, next, i];
                    last = next;
                    if (y === null) {
                        if (i) {
                            if (yvalues[i - 1] !== null) {
                                path = [];
                                paths.push(path);
                            }
                            vertices.push(null);
                        }
                    } else {
                        if (y < this.miny) {
                            y = this.miny;
                        }
                        if (y > this.maxy) {
                            y = this.maxy;
                        }
                        if (!path.length) {
                            // previous value was null
                            path.push([xpos, canvasTop + canvasHeight]);
                        }
                        vertex = [xpos, canvasTop + Math.round(canvasHeight - (canvasHeight * ((y - this.miny) / rangey)))];
                        path.push(vertex);
                        vertices.push(vertex);
                    }
                }

                lineShapes = [];
                fillShapes = [];
                plen = paths.length;
                for (i = 0; i < plen; i++) {
                    path = paths[i];
                    if (path.length) {
                        if (options.get('fillColor')) {
                            path.push([path[path.length - 1][0], (canvasTop + canvasHeight)]);
                            fillShapes.push(path.slice(0));
                            path.pop();
                        }
                        // if there's only a single point in this path, then we want to display it
                        // as a vertical line which means we keep path[0]  as is
                        if (path.length > 2) {
                            // else we want the first value
                            path[0] = [path[0][0], path[1][1]];
                        }
                        lineShapes.push(path);
                    }
                }

                // draw the fill first, then optionally the normal range, then the line on top of that
                plen = fillShapes.length;
                for (i = 0; i < plen; i++) {
                    target.drawShape(fillShapes[i],
                        options.get('fillColor'), options.get('fillColor')).append();
                }

                if (options.get('normalRangeMin') !== undefined && options.get('drawNormalOnTop')) {
                    this.drawNormalRange(canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey);
                }

                plen = lineShapes.length;
                for (i = 0; i < plen; i++) {
                    target.drawShape(lineShapes[i], options.get('lineColor'), undefined,
                        options.get('lineWidth')).append();
                }

                if (spotRadius && options.get('valueSpots')) {
                    valueSpots = options.get('valueSpots');
                    if (valueSpots.get === undefined) {
                        valueSpots = new RangeMap(valueSpots);
                    }
                    for (i = 0; i < yvalcount; i++) {
                        color = valueSpots.get(yvalues[i]);
                        if (color) {
                            target.drawCircle(canvasLeft + Math.round((xvalues[i] - this.minx) * (canvasWidth / rangex)),
                                canvasTop + Math.round(canvasHeight - (canvasHeight * ((yvalues[i] - this.miny) / rangey))),
                                spotRadius, undefined,
                                color).append();
                        }
                    }

                }
                if (spotRadius && options.get('spotColor') && yvalues[yvallast] !== null) {
                    target.drawCircle(canvasLeft + Math.round((xvalues[xvalues.length - 1] - this.minx) * (canvasWidth / rangex)),
                        canvasTop + Math.round(canvasHeight - (canvasHeight * ((yvalues[yvallast] - this.miny) / rangey))),
                        spotRadius, undefined,
                        options.get('spotColor')).append();
                }
                if (this.maxy !== this.minyorg) {
                    if (spotRadius && options.get('minSpotColor')) {
                        x = xvalues[$.inArray(this.minyorg, yvalues)];
                        target.drawCircle(canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex)),
                            canvasTop + Math.round(canvasHeight - (canvasHeight * ((this.minyorg - this.miny) / rangey))),
                            spotRadius, undefined,
                            options.get('minSpotColor')).append();
                    }
                    if (spotRadius && options.get('maxSpotColor')) {
                        x = xvalues[$.inArray(this.maxyorg, yvalues)];
                        target.drawCircle(canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex)),
                            canvasTop + Math.round(canvasHeight - (canvasHeight * ((this.maxyorg - this.miny) / rangey))),
                            spotRadius, undefined,
                            options.get('maxSpotColor')).append();
                    }
                }

                this.lastShapeId = target.getLastShapeId();
                this.canvasTop = canvasTop;
                target.render();
            }
        });

        /**
         * Bar charts
         */
        $.fn.sparkline.bar = bar = createClass($.fn.sparkline._base, barHighlightMixin, {
            type: 'bar',

            init: function (el, values, options, width, height) {
                var barWidth = parseInt(options.get('barWidth'), 10),
                    barSpacing = parseInt(options.get('barSpacing'), 10),
                    chartRangeMin = options.get('chartRangeMin'),
                    chartRangeMax = options.get('chartRangeMax'),
                    chartRangeClip = options.get('chartRangeClip'),
                    stackMin = Infinity,
                    stackMax = -Infinity,
                    isStackString, groupMin, groupMax, stackRanges,
                    numValues, i, vlen, range, zeroAxis, xaxisOffset, min, max, clipMin, clipMax,
                    stacked, vlist, j, slen, svals, val, yoffset, yMaxCalc;
                bar._super.init.call(this, el, values, options, width, height);

                // scan values to determine whether to stack bars
                for (i = 0, vlen = values.length; i < vlen; i++) {
                    val = values[i];
                    isStackString = typeof(val) === 'string' && val.indexOf(':') > -1;
                    if (isStackString || $.isArray(val)) {
                        stacked = true;
                        if (isStackString) {
                            val = values[i] = normalizeValues(val.split(':'));
                        }
                        val = remove(val, null); // min/max will treat null as zero
                        groupMin = Math.min.apply(Math, val);
                        groupMax = Math.max.apply(Math, val);
                        if (groupMin < stackMin) {
                            stackMin = groupMin;
                        }
                        if (groupMax > stackMax) {
                            stackMax = groupMax;
                        }
                    }
                }

                this.stacked = stacked;
                this.regionShapes = {};
                this.barWidth = barWidth;
                this.barSpacing = barSpacing;
                this.totalBarWidth = barWidth + barSpacing;
                this.width = width = (values.length * barWidth) + ((values.length - 1) * barSpacing);

                this.initTarget();

                if (chartRangeClip) {
                    clipMin = chartRangeMin === undefined ? -Infinity : chartRangeMin;
                    clipMax = chartRangeMax === undefined ? Infinity : chartRangeMax;
                }

                numValues = [];
                stackRanges = stacked ? [] : numValues;
                var stackTotals = [];
                var stackRangesNeg = [];
                for (i = 0, vlen = values.length; i < vlen; i++) {
                    if (stacked) {
                        vlist = values[i];
                        values[i] = svals = [];
                        stackTotals[i] = 0;
                        stackRanges[i] = stackRangesNeg[i] = 0;
                        for (j = 0, slen = vlist.length; j < slen; j++) {
                            val = svals[j] = chartRangeClip ? clipval(vlist[j], clipMin, clipMax) : vlist[j];
                            if (val !== null) {
                                if (val > 0) {
                                    stackTotals[i] += val;
                                }
                                if (stackMin < 0 && stackMax > 0) {
                                    if (val < 0) {
                                        stackRangesNeg[i] += Math.abs(val);
                                    } else {
                                        stackRanges[i] += val;
                                    }
                                } else {
                                    stackRanges[i] += Math.abs(val - (val < 0 ? stackMax : stackMin));
                                }
                                numValues.push(val);
                            }
                        }
                    } else {
                        val = chartRangeClip ? clipval(values[i], clipMin, clipMax) : values[i];
                        val = values[i] = normalizeValue(val);
                        if (val !== null) {
                            numValues.push(val);
                        }
                    }
                }
                this.max = max = Math.max.apply(Math, numValues);
                this.min = min = Math.min.apply(Math, numValues);
                this.stackMax = stackMax = stacked ? Math.max.apply(Math, stackTotals) : max;
                this.stackMin = stackMin = stacked ? Math.min.apply(Math, numValues) : min;

                if (options.get('chartRangeMin') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMin') < min)) {
                    min = options.get('chartRangeMin');
                }
                if (options.get('chartRangeMax') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMax') > max)) {
                    max = options.get('chartRangeMax');
                }

                this.zeroAxis = zeroAxis = options.get('zeroAxis', true);
                if (min <= 0 && max >= 0 && zeroAxis) {
                    xaxisOffset = 0;
                } else if (zeroAxis == false) {
                    xaxisOffset = min;
                } else if (min > 0) {
                    xaxisOffset = min;
                } else {
                    xaxisOffset = max;
                }
                this.xaxisOffset = xaxisOffset;

                range = stacked ? (Math.max.apply(Math, stackRanges) + Math.max.apply(Math, stackRangesNeg)) : max - min;

                // as we plot zero/min values a single pixel line, we add a pixel to all other
                // values - Reduce the effective canvas size to suit
                this.canvasHeightEf = (zeroAxis && min < 0) ? this.canvasHeight - 2 : this.canvasHeight - 1;

                if (min < xaxisOffset) {
                    yMaxCalc = (stacked && max >= 0) ? stackMax : max;
                    yoffset = (yMaxCalc - xaxisOffset) / range * this.canvasHeight;
                    if (yoffset !== Math.ceil(yoffset)) {
                        this.canvasHeightEf -= 2;
                        yoffset = Math.ceil(yoffset);
                    }
                } else {
                    yoffset = this.canvasHeight;
                }
                this.yoffset = yoffset;

                if ($.isArray(options.get('colorMap'))) {
                    this.colorMapByIndex = options.get('colorMap');
                    this.colorMapByValue = null;
                } else {
                    this.colorMapByIndex = null;
                    this.colorMapByValue = options.get('colorMap');
                    if (this.colorMapByValue && this.colorMapByValue.get === undefined) {
                        this.colorMapByValue = new RangeMap(this.colorMapByValue);
                    }
                }

                this.range = range;
            },

            getRegion: function (el, x, y) {
                var result = Math.floor(x / this.totalBarWidth);
                return (result < 0 || result >= this.values.length) ? undefined : result;
            },

            getCurrentRegionFields: function () {
                var currentRegion = this.currentRegion,
                    values = ensureArray(this.values[currentRegion]),
                    result = [],
                    value, i;
                for (i = values.length; i--;) {
                    value = values[i];
                    result.push({
                        isNull: value === null,
                        value: value,
                        color: this.calcColor(i, value, currentRegion),
                        offset: currentRegion
                    });
                }
                return result;
            },

            calcColor: function (stacknum, value, valuenum) {
                var colorMapByIndex = this.colorMapByIndex,
                    colorMapByValue = this.colorMapByValue,
                    options = this.options,
                    color, newColor;
                if (this.stacked) {
                    color = options.get('stackedBarColor');
                } else {
                    color = (value < 0) ? options.get('negBarColor') : options.get('barColor');
                }
                if (value === 0 && options.get('zeroColor') !== undefined) {
                    color = options.get('zeroColor');
                }
                if (colorMapByValue && (newColor = colorMapByValue.get(value))) {
                    color = newColor;
                } else if (colorMapByIndex && colorMapByIndex.length > valuenum) {
                    color = colorMapByIndex[valuenum];
                }
                return $.isArray(color) ? color[stacknum % color.length] : color;
            },

            /**
             * Render bar(s) for a region
             */
            renderRegion: function (valuenum, highlight) {
                var vals = this.values[valuenum],
                    options = this.options,
                    xaxisOffset = this.xaxisOffset,
                    result = [],
                    range = this.range,
                    stacked = this.stacked,
                    target = this.target,
                    x = valuenum * this.totalBarWidth,
                    canvasHeightEf = this.canvasHeightEf,
                    yoffset = this.yoffset,
                    y, height, color, isNull, yoffsetNeg, i, valcount, val, minPlotted, allMin;

                vals = $.isArray(vals) ? vals : [vals];
                valcount = vals.length;
                val = vals[0];
                isNull = all(null, vals);
                allMin = all(xaxisOffset, vals, true);

                if (isNull) {
                    if (options.get('nullColor')) {
                        color = highlight ? options.get('nullColor') : this.calcHighlightColor(options.get('nullColor'), options);
                        y = (yoffset > 0) ? yoffset - 1 : yoffset;
                        return target.drawRect(x, y, this.barWidth - 1, 0, color, color);
                    } else {
                        return undefined;
                    }
                }
                yoffsetNeg = yoffset;
                for (i = 0; i < valcount; i++) {
                    val = vals[i];

                    if (stacked && val === xaxisOffset) {
                        if (!allMin || minPlotted) {
                            continue;
                        }
                        minPlotted = true;
                    }

                    if (range > 0) {
                        height = Math.floor(canvasHeightEf * ((Math.abs(val - xaxisOffset) / range))) + 1;
                    } else {
                        height = 1;
                    }
                    if (val < xaxisOffset || (val === xaxisOffset && yoffset === 0)) {
                        y = yoffsetNeg;
                        yoffsetNeg += height;
                    } else {
                        y = yoffset - height;
                        yoffset -= height;
                    }
                    color = this.calcColor(i, val, valuenum);
                    if (highlight) {
                        color = this.calcHighlightColor(color, options);
                    }
                    result.push(target.drawRect(x, y, this.barWidth - 1, height - 1, color, color));
                }
                if (result.length === 1) {
                    return result[0];
                }
                return result;
            }
        });

        /**
         * Tristate charts
         */
        $.fn.sparkline.tristate = tristate = createClass($.fn.sparkline._base, barHighlightMixin, {
            type: 'tristate',

            init: function (el, values, options, width, height) {
                var barWidth = parseInt(options.get('barWidth'), 10),
                    barSpacing = parseInt(options.get('barSpacing'), 10);
                tristate._super.init.call(this, el, values, options, width, height);

                this.regionShapes = {};
                this.barWidth = barWidth;
                this.barSpacing = barSpacing;
                this.totalBarWidth = barWidth + barSpacing;
                this.values = $.map(values, Number);
                this.width = width = (values.length * barWidth) + ((values.length - 1) * barSpacing);

                if ($.isArray(options.get('colorMap'))) {
                    this.colorMapByIndex = options.get('colorMap');
                    this.colorMapByValue = null;
                } else {
                    this.colorMapByIndex = null;
                    this.colorMapByValue = options.get('colorMap');
                    if (this.colorMapByValue && this.colorMapByValue.get === undefined) {
                        this.colorMapByValue = new RangeMap(this.colorMapByValue);
                    }
                }
                this.initTarget();
            },

            getRegion: function (el, x, y) {
                return Math.floor(x / this.totalBarWidth);
            },

            getCurrentRegionFields: function () {
                var currentRegion = this.currentRegion;
                return {
                    isNull: this.values[currentRegion] === undefined,
                    value: this.values[currentRegion],
                    color: this.calcColor(this.values[currentRegion], currentRegion),
                    offset: currentRegion
                };
            },

            calcColor: function (value, valuenum) {
                var values = this.values,
                    options = this.options,
                    colorMapByIndex = this.colorMapByIndex,
                    colorMapByValue = this.colorMapByValue,
                    color, newColor;

                if (colorMapByValue && (newColor = colorMapByValue.get(value))) {
                    color = newColor;
                } else if (colorMapByIndex && colorMapByIndex.length > valuenum) {
                    color = colorMapByIndex[valuenum];
                } else if (values[valuenum] < 0) {
                    color = options.get('negBarColor');
                } else if (values[valuenum] > 0) {
                    color = options.get('posBarColor');
                } else {
                    color = options.get('zeroBarColor');
                }
                return color;
            },

            renderRegion: function (valuenum, highlight) {
                var values = this.values,
                    options = this.options,
                    target = this.target,
                    canvasHeight, height, halfHeight,
                    x, y, color;

                canvasHeight = target.pixelHeight;
                halfHeight = Math.round(canvasHeight / 2);

                x = valuenum * this.totalBarWidth;
                if (values[valuenum] < 0) {
                    y = halfHeight;
                    height = halfHeight - 1;
                } else if (values[valuenum] > 0) {
                    y = 0;
                    height = halfHeight - 1;
                } else {
                    y = halfHeight - 1;
                    height = 2;
                }
                color = this.calcColor(values[valuenum], valuenum);
                if (color === null) {
                    return;
                }
                if (highlight) {
                    color = this.calcHighlightColor(color, options);
                }
                return target.drawRect(x, y, this.barWidth - 1, height - 1, color, color);
            }
        });

        /**
         * Discrete charts
         */
        $.fn.sparkline.discrete = discrete = createClass($.fn.sparkline._base, barHighlightMixin, {
            type: 'discrete',

            init: function (el, values, options, width, height) {
                discrete._super.init.call(this, el, values, options, width, height);

                this.regionShapes = {};
                this.values = values = $.map(values, Number);
                this.min = Math.min.apply(Math, values);
                this.max = Math.max.apply(Math, values);
                this.range = this.max - this.min;
                this.width = width = options.get('width') === 'auto' ? values.length * 2 : this.width;
                this.interval = Math.floor(width / values.length);
                this.itemWidth = width / values.length;
                if (options.get('chartRangeMin') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMin') < this.min)) {
                    this.min = options.get('chartRangeMin');
                }
                if (options.get('chartRangeMax') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMax') > this.max)) {
                    this.max = options.get('chartRangeMax');
                }
                this.initTarget();
                if (this.target) {
                    this.lineHeight = options.get('lineHeight') === 'auto' ? Math.round(this.canvasHeight * 0.3) : options.get('lineHeight');
                }
            },

            getRegion: function (el, x, y) {
                return Math.floor(x / this.itemWidth);
            },

            getCurrentRegionFields: function () {
                var currentRegion = this.currentRegion;
                return {
                    isNull: this.values[currentRegion] === undefined,
                    value: this.values[currentRegion],
                    offset: currentRegion
                };
            },

            renderRegion: function (valuenum, highlight) {
                var values = this.values,
                    options = this.options,
                    min = this.min,
                    max = this.max,
                    range = this.range,
                    interval = this.interval,
                    target = this.target,
                    canvasHeight = this.canvasHeight,
                    lineHeight = this.lineHeight,
                    pheight = canvasHeight - lineHeight,
                    ytop, val, color, x;

                val = clipval(values[valuenum], min, max);
                x = valuenum * interval;
                ytop = Math.round(pheight - pheight * ((val - min) / range));
                color = (options.get('thresholdColor') && val < options.get('thresholdValue')) ? options.get('thresholdColor') : options.get('lineColor');
                if (highlight) {
                    color = this.calcHighlightColor(color, options);
                }
                return target.drawLine(x, ytop, x, ytop + lineHeight, color);
            }
        });

        /**
         * Bullet charts
         */
        $.fn.sparkline.bullet = bullet = createClass($.fn.sparkline._base, {
            type: 'bullet',

            init: function (el, values, options, width, height) {
                var min, max, vals;
                bullet._super.init.call(this, el, values, options, width, height);

                // values: target, performance, range1, range2, range3
                this.values = values = normalizeValues(values);
                // target or performance could be null
                vals = values.slice();
                vals[0] = vals[0] === null ? vals[2] : vals[0];
                vals[1] = values[1] === null ? vals[2] : vals[1];
                min = Math.min.apply(Math, values);
                max = Math.max.apply(Math, values);
                if (options.get('base') === undefined) {
                    min = min < 0 ? min : 0;
                } else {
                    min = options.get('base');
                }
                this.min = min;
                this.max = max;
                this.range = max - min;
                this.shapes = {};
                this.valueShapes = {};
                this.regiondata = {};
                this.width = width = options.get('width') === 'auto' ? '4.0em' : width;
                this.target = this.$el.simpledraw(width, height, options.get('composite'));
                if (!values.length) {
                    this.disabled = true;
                }
                this.initTarget();
            },

            getRegion: function (el, x, y) {
                var shapeid = this.target.getShapeAt(el, x, y);
                return (shapeid !== undefined && this.shapes[shapeid] !== undefined) ? this.shapes[shapeid] : undefined;
            },

            getCurrentRegionFields: function () {
                var currentRegion = this.currentRegion;
                return {
                    fieldkey: currentRegion.substr(0, 1),
                    value: this.values[currentRegion.substr(1)],
                    region: currentRegion
                };
            },

            changeHighlight: function (highlight) {
                var currentRegion = this.currentRegion,
                    shapeid = this.valueShapes[currentRegion],
                    shape;
                delete this.shapes[shapeid];
                switch (currentRegion.substr(0, 1)) {
                    case 'r':
                        shape = this.renderRange(currentRegion.substr(1), highlight);
                        break;
                    case 'p':
                        shape = this.renderPerformance(highlight);
                        break;
                    case 't':
                        shape = this.renderTarget(highlight);
                        break;
                }
                this.valueShapes[currentRegion] = shape.id;
                this.shapes[shape.id] = currentRegion;
                this.target.replaceWithShape(shapeid, shape);
            },

            renderRange: function (rn, highlight) {
                var rangeval = this.values[rn],
                    rangewidth = Math.round(this.canvasWidth * ((rangeval - this.min) / this.range)),
                    color = this.options.get('rangeColors')[rn - 2];
                if (highlight) {
                    color = this.calcHighlightColor(color, this.options);
                }
                return this.target.drawRect(0, 0, rangewidth - 1, this.canvasHeight - 1, color, color);
            },

            renderPerformance: function (highlight) {
                var perfval = this.values[1],
                    perfwidth = Math.round(this.canvasWidth * ((perfval - this.min) / this.range)),
                    color = this.options.get('performanceColor');
                if (highlight) {
                    color = this.calcHighlightColor(color, this.options);
                }
                return this.target.drawRect(0, Math.round(this.canvasHeight * 0.3), perfwidth - 1,
                    Math.round(this.canvasHeight * 0.4) - 1, color, color);
            },

            renderTarget: function (highlight) {
                var targetval = this.values[0],
                    x = Math.round(this.canvasWidth * ((targetval - this.min) / this.range) - (this.options.get('targetWidth') / 2)),
                    targettop = Math.round(this.canvasHeight * 0.10),
                    targetheight = this.canvasHeight - (targettop * 2),
                    color = this.options.get('targetColor');
                if (highlight) {
                    color = this.calcHighlightColor(color, this.options);
                }
                return this.target.drawRect(x, targettop, this.options.get('targetWidth') - 1, targetheight - 1, color, color);
            },

            render: function () {
                var vlen = this.values.length,
                    target = this.target,
                    i, shape;
                if (!bullet._super.render.call(this)) {
                    return;
                }
                for (i = 2; i < vlen; i++) {
                    shape = this.renderRange(i).append();
                    this.shapes[shape.id] = 'r' + i;
                    this.valueShapes['r' + i] = shape.id;
                }
                if (this.values[1] !== null) {
                    shape = this.renderPerformance().append();
                    this.shapes[shape.id] = 'p1';
                    this.valueShapes.p1 = shape.id;
                }
                if (this.values[0] !== null) {
                    shape = this.renderTarget().append();
                    this.shapes[shape.id] = 't0';
                    this.valueShapes.t0 = shape.id;
                }
                target.render();
            }
        });

        /**
         * Pie charts
         */
        $.fn.sparkline.pie = pie = createClass($.fn.sparkline._base, {
            type: 'pie',

            init: function (el, values, options, width, height) {
                var total = 0, i;

                pie._super.init.call(this, el, values, options, width, height);

                this.shapes = {}; // map shape ids to value offsets
                this.valueShapes = {}; // maps value offsets to shape ids
                this.values = values = $.map(values, Number);

                if (options.get('width') === 'auto') {
                    this.width = this.height;
                }

                if (values.length > 0) {
                    for (i = values.length; i--;) {
                        total += values[i];
                    }
                }
                this.total = total;
                this.initTarget();
                this.radius = Math.floor(Math.min(this.canvasWidth, this.canvasHeight) / 2);
            },

            getRegion: function (el, x, y) {
                var shapeid = this.target.getShapeAt(el, x, y);
                return (shapeid !== undefined && this.shapes[shapeid] !== undefined) ? this.shapes[shapeid] : undefined;
            },

            getCurrentRegionFields: function () {
                var currentRegion = this.currentRegion;
                return {
                    isNull: this.values[currentRegion] === undefined,
                    value: this.values[currentRegion],
                    percent: this.values[currentRegion] / this.total * 100,
                    color: this.options.get('sliceColors')[currentRegion % this.options.get('sliceColors').length],
                    offset: currentRegion
                };
            },

            changeHighlight: function (highlight) {
                var currentRegion = this.currentRegion,
                     newslice = this.renderSlice(currentRegion, highlight),
                     shapeid = this.valueShapes[currentRegion];
                delete this.shapes[shapeid];
                this.target.replaceWithShape(shapeid, newslice);
                this.valueShapes[currentRegion] = newslice.id;
                this.shapes[newslice.id] = currentRegion;
            },

            renderSlice: function (valuenum, highlight) {
                var target = this.target,
                    options = this.options,
                    radius = this.radius,
                    borderWidth = options.get('borderWidth'),
                    offset = options.get('offset'),
                    circle = 2 * Math.PI,
                    values = this.values,
                    total = this.total,
                    next = offset ? (2*Math.PI)*(offset/360) : 0,
                    start, end, i, vlen, color;

                vlen = values.length;
                for (i = 0; i < vlen; i++) {
                    start = next;
                    end = next;
                    if (total > 0) {  // avoid divide by zero
                        end = next + (circle * (values[i] / total));
                    }
                    if (valuenum === i) {
                        color = options.get('sliceColors')[i % options.get('sliceColors').length];
                        if (highlight) {
                            color = this.calcHighlightColor(color, options);
                        }

                        return target.drawPieSlice(radius, radius, radius - borderWidth, start, end, undefined, color);
                    }
                    next = end;
                }
            },

            render: function () {
                var target = this.target,
                    values = this.values,
                    options = this.options,
                    radius = this.radius,
                    borderWidth = options.get('borderWidth'),
                    donutWidth = options.get('donutWidth'),
                    shape, i;

                if (!pie._super.render.call(this)) {
                    return;
                }
                if (borderWidth) {
                    target.drawCircle(radius, radius, Math.floor(radius - (borderWidth / 2)),
                        options.get('borderColor'), undefined, borderWidth).append();
                }
                for (i = values.length; i--;) {
                    if (values[i]) { // don't render zero values
                        shape = this.renderSlice(i).append();
                        this.valueShapes[i] = shape.id; // store just the shapeid
                        this.shapes[shape.id] = i;
                    }
                }
                if (donutWidth) {
                    target.drawCircle(radius, radius, radius - donutWidth, options.get('donutColor'), 
                        options.get('donutColor'), 0).append();
                }
                target.render();
            }
        });

        /**
         * Box plots
         */
        $.fn.sparkline.box = box = createClass($.fn.sparkline._base, {
            type: 'box',

            init: function (el, values, options, width, height) {
                box._super.init.call(this, el, values, options, width, height);
                this.values = $.map(values, Number);
                this.width = options.get('width') === 'auto' ? '4.0em' : width;
                this.initTarget();
                if (!this.values.length) {
                    this.disabled = 1;
                }
            },

            /**
             * Simulate a single region
             */
            getRegion: function () {
                return 1;
            },

            getCurrentRegionFields: function () {
                var result = [
                    { field: 'lq', value: this.quartiles[0] },
                    { field: 'med', value: this.quartiles[1] },
                    { field: 'uq', value: this.quartiles[2] }
                ];
                if (this.loutlier !== undefined) {
                    result.push({ field: 'lo', value: this.loutlier});
                }
                if (this.routlier !== undefined) {
                    result.push({ field: 'ro', value: this.routlier});
                }
                if (this.lwhisker !== undefined) {
                    result.push({ field: 'lw', value: this.lwhisker});
                }
                if (this.rwhisker !== undefined) {
                    result.push({ field: 'rw', value: this.rwhisker});
                }
                return result;
            },

            render: function () {
                var target = this.target,
                    values = this.values,
                    vlen = values.length,
                    options = this.options,
                    canvasWidth = this.canvasWidth,
                    canvasHeight = this.canvasHeight,
                    minValue = options.get('chartRangeMin') === undefined ? Math.min.apply(Math, values) : options.get('chartRangeMin'),
                    maxValue = options.get('chartRangeMax') === undefined ? Math.max.apply(Math, values) : options.get('chartRangeMax'),
                    canvasLeft = 0,
                    lwhisker, loutlier, iqr, q1, q2, q3, rwhisker, routlier, i,
                    size, unitSize;

                if (!box._super.render.call(this)) {
                    return;
                }

                if (options.get('raw')) {
                    if (options.get('showOutliers') && values.length > 5) {
                        loutlier = values[0];
                        lwhisker = values[1];
                        q1 = values[2];
                        q2 = values[3];
                        q3 = values[4];
                        rwhisker = values[5];
                        routlier = values[6];
                    } else {
                        lwhisker = values[0];
                        q1 = values[1];
                        q2 = values[2];
                        q3 = values[3];
                        rwhisker = values[4];
                    }
                } else {
                    values.sort(function (a, b) { return a - b; });
                    q1 = quartile(values, 1);
                    q2 = quartile(values, 2);
                    q3 = quartile(values, 3);
                    iqr = q3 - q1;
                    if (options.get('showOutliers')) {
                        lwhisker = rwhisker = undefined;
                        for (i = 0; i < vlen; i++) {
                            if (lwhisker === undefined && values[i] > q1 - (iqr * options.get('outlierIQR'))) {
                                lwhisker = values[i];
                            }
                            if (values[i] < q3 + (iqr * options.get('outlierIQR'))) {
                                rwhisker = values[i];
                            }
                        }
                        loutlier = values[0];
                        routlier = values[vlen - 1];
                    } else {
                        lwhisker = values[0];
                        rwhisker = values[vlen - 1];
                    }
                }
                this.quartiles = [q1, q2, q3];
                this.lwhisker = lwhisker;
                this.rwhisker = rwhisker;
                this.loutlier = loutlier;
                this.routlier = routlier;

                unitSize = canvasWidth / (maxValue - minValue + 1);
                if (options.get('showOutliers')) {
                    canvasLeft = Math.ceil(options.get('spotRadius'));
                    canvasWidth -= 2 * Math.ceil(options.get('spotRadius'));
                    unitSize = canvasWidth / (maxValue - minValue + 1);
                    if (loutlier < lwhisker) {
                        target.drawCircle((loutlier - minValue) * unitSize + canvasLeft,
                            canvasHeight / 2,
                            options.get('spotRadius'),
                            options.get('outlierLineColor'),
                            options.get('outlierFillColor')).append();
                    }
                    if (routlier > rwhisker) {
                        target.drawCircle((routlier - minValue) * unitSize + canvasLeft,
                            canvasHeight / 2,
                            options.get('spotRadius'),
                            options.get('outlierLineColor'),
                            options.get('outlierFillColor')).append();
                    }
                }

                // box
                target.drawRect(
                    Math.round((q1 - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight * 0.1),
                    Math.round((q3 - q1) * unitSize),
                    Math.round(canvasHeight * 0.8),
                    options.get('boxLineColor'),
                    options.get('boxFillColor')).append();
                // left whisker
                target.drawLine(
                    Math.round((lwhisker - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight / 2),
                    Math.round((q1 - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight / 2),
                    options.get('lineColor')).append();
                target.drawLine(
                    Math.round((lwhisker - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight / 4),
                    Math.round((lwhisker - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight - canvasHeight / 4),
                    options.get('whiskerColor')).append();
                // right whisker
                target.drawLine(Math.round((rwhisker - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight / 2),
                    Math.round((q3 - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight / 2),
                    options.get('lineColor')).append();
                target.drawLine(
                    Math.round((rwhisker - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight / 4),
                    Math.round((rwhisker - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight - canvasHeight / 4),
                    options.get('whiskerColor')).append();
                // median line
                target.drawLine(
                    Math.round((q2 - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight * 0.1),
                    Math.round((q2 - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight * 0.9),
                    options.get('medianColor')).append();
                if (options.get('target')) {
                    size = Math.ceil(options.get('spotRadius'));
                    target.drawLine(
                        Math.round((options.get('target') - minValue) * unitSize + canvasLeft),
                        Math.round((canvasHeight / 2) - size),
                        Math.round((options.get('target') - minValue) * unitSize + canvasLeft),
                        Math.round((canvasHeight / 2) + size),
                        options.get('targetColor')).append();
                    target.drawLine(
                        Math.round((options.get('target') - minValue) * unitSize + canvasLeft - size),
                        Math.round(canvasHeight / 2),
                        Math.round((options.get('target') - minValue) * unitSize + canvasLeft + size),
                        Math.round(canvasHeight / 2),
                        options.get('targetColor')).append();
                }
                target.render();
            }
        });

        // Setup a very simple "virtual canvas" to make drawing the few shapes we need easier
        // This is accessible as $(foo).simpledraw()

        VShape = createClass({
            init: function (target, id, type, args) {
                this.target = target;
                this.id = id;
                this.type = type;
                this.args = args;
            },
            append: function () {
                this.target.appendShape(this);
                return this;
            }
        });

        VCanvas_base = createClass({
            _pxregex: /(\d+)(px)?\s*$/i,

            init: function (width, height, target) {
                if (!width) {
                    return;
                }
                this.width = width;
                this.height = height;
                this.target = target;
                this.lastShapeId = null;
                if (target[0]) {
                    target = target[0];
                }
                $.data(target, '_jqs_vcanvas', this);
            },

            drawLine: function (x1, y1, x2, y2, lineColor, lineWidth) {
                return this.drawShape([[x1, y1], [x2, y2]], lineColor, lineWidth);
            },

            drawShape: function (path, lineColor, fillColor, lineWidth) {
                return this._genShape('Shape', [path, lineColor, fillColor, lineWidth]);
            },

            drawCircle: function (x, y, radius, lineColor, fillColor, lineWidth) {
                return this._genShape('Circle', [x, y, radius, lineColor, fillColor, lineWidth]);
            },

            drawPieSlice: function (x, y, radius, startAngle, endAngle, lineColor, fillColor) {
                return this._genShape('PieSlice', [x, y, radius, startAngle, endAngle, lineColor, fillColor]);
            },

            drawRect: function (x, y, width, height, lineColor, fillColor) {
                return this._genShape('Rect', [x, y, width, height, lineColor, fillColor]);
            },

            getElement: function () {
                return this.canvas;
            },

            /**
             * Return the most recently inserted shape id
             */
            getLastShapeId: function () {
                return this.lastShapeId;
            },

            /**
             * Clear and reset the canvas
             */
            reset: function () {
                alert('reset not implemented');
            },

            _insert: function (el, target) {
                $(target).html(el);
            },

            /**
             * Calculate the pixel dimensions of the canvas
             */
            _calculatePixelDims: function (width, height, canvas) {
                // XXX This should probably be a configurable option
                var match;
                match = this._pxregex.exec(height);
                if (match) {
                    this.pixelHeight = match[1];
                } else {
                    this.pixelHeight = $(canvas).height();
                }
                match = this._pxregex.exec(width);
                if (match) {
                    this.pixelWidth = match[1];
                } else {
                    this.pixelWidth = $(canvas).width();
                }
            },

            /**
             * Generate a shape object and id for later rendering
             */
            _genShape: function (shapetype, shapeargs) {
                var id = shapeCount++;
                shapeargs.unshift(id);
                return new VShape(this, id, shapetype, shapeargs);
            },

            /**
             * Add a shape to the end of the render queue
             */
            appendShape: function (shape) {
                alert('appendShape not implemented');
            },

            /**
             * Replace one shape with another
             */
            replaceWithShape: function (shapeid, shape) {
                alert('replaceWithShape not implemented');
            },

            /**
             * Insert one shape after another in the render queue
             */
            insertAfterShape: function (shapeid, shape) {
                alert('insertAfterShape not implemented');
            },

            /**
             * Remove a shape from the queue
             */
            removeShapeId: function (shapeid) {
                alert('removeShapeId not implemented');
            },

            /**
             * Find a shape at the specified x/y co-ordinates
             */
            getShapeAt: function (el, x, y) {
                alert('getShapeAt not implemented');
            },

            /**
             * Render all queued shapes onto the canvas
             */
            render: function () {
                alert('render not implemented');
            }
        });

        VCanvas_canvas = createClass(VCanvas_base, {
            init: function (width, height, target, interact) {
                VCanvas_canvas._super.init.call(this, width, height, target);
                this.canvas = document.createElement('canvas');
                if (target[0]) {
                    target = target[0];
                }
                $.data(target, '_jqs_vcanvas', this);
                $(this.canvas).css({ display: 'inline-block', width: width, height: height, verticalAlign: 'top' });
                this._insert(this.canvas, target);
                this._calculatePixelDims(width, height, this.canvas);
                this.canvas.width = this.pixelWidth;
                this.canvas.height = this.pixelHeight;
                this.interact = interact;
                this.shapes = {};
                this.shapeseq = [];
                this.currentTargetShapeId = undefined;
                $(this.canvas).css({width: this.pixelWidth, height: this.pixelHeight});
            },

            _getContext: function (lineColor, fillColor, lineWidth) {
                var context = this.canvas.getContext('2d');
                if (lineColor !== undefined) {
                    context.strokeStyle = lineColor;
                }
                context.lineWidth = lineWidth === undefined ? 1 : lineWidth;
                if (fillColor !== undefined) {
                    context.fillStyle = fillColor;
                }
                return context;
            },

            reset: function () {
                var context = this._getContext();
                context.clearRect(0, 0, this.pixelWidth, this.pixelHeight);
                this.shapes = {};
                this.shapeseq = [];
                this.currentTargetShapeId = undefined;
            },

            _drawShape: function (shapeid, path, lineColor, fillColor, lineWidth) {
                var context = this._getContext(lineColor, fillColor, lineWidth),
                    i, plen;
                context.beginPath();
                context.moveTo(path[0][0] + 0.5, path[0][1] + 0.5);
                for (i = 1, plen = path.length; i < plen; i++) {
                    context.lineTo(path[i][0] + 0.5, path[i][1] + 0.5); // the 0.5 offset gives us crisp pixel-width lines
                }
                if (lineColor !== undefined) {
                    context.stroke();
                }
                if (fillColor !== undefined) {
                    context.fill();
                }
                if (this.targetX !== undefined && this.targetY !== undefined &&
                    context.isPointInPath(this.targetX, this.targetY)) {
                    this.currentTargetShapeId = shapeid;
                }
            },

            _drawCircle: function (shapeid, x, y, radius, lineColor, fillColor, lineWidth) {
                var context = this._getContext(lineColor, fillColor, lineWidth);
                context.beginPath();
                context.arc(x, y, radius, 0, 2 * Math.PI, false);
                if (this.targetX !== undefined && this.targetY !== undefined &&
                    context.isPointInPath(this.targetX, this.targetY)) {
                    this.currentTargetShapeId = shapeid;
                }
                if (lineColor !== undefined) {
                    context.stroke();
                }
                if (fillColor !== undefined) {
                    context.fill();
                }
            },

            _drawPieSlice: function (shapeid, x, y, radius, startAngle, endAngle, lineColor, fillColor) {
                var context = this._getContext(lineColor, fillColor);
                context.beginPath();
                context.moveTo(x, y);
                context.arc(x, y, radius, startAngle, endAngle, false);
                context.lineTo(x, y);
                context.closePath();
                if (lineColor !== undefined) {
                    context.stroke();
                }
                if (fillColor) {
                    context.fill();
                }
                if (this.targetX !== undefined && this.targetY !== undefined &&
                    context.isPointInPath(this.targetX, this.targetY)) {
                    this.currentTargetShapeId = shapeid;
                }
            },

            _drawRect: function (shapeid, x, y, width, height, lineColor, fillColor) {
                return this._drawShape(shapeid, [[x, y], [x + width, y], [x + width, y + height], [x, y + height], [x, y]], lineColor, fillColor);
            },

            appendShape: function (shape) {
                this.shapes[shape.id] = shape;
                this.shapeseq.push(shape.id);
                this.lastShapeId = shape.id;
                return shape.id;
            },

            replaceWithShape: function (shapeid, shape) {
                var shapeseq = this.shapeseq,
                    i;
                this.shapes[shape.id] = shape;
                for (i = shapeseq.length; i--;) {
                    if (shapeseq[i] == shapeid) {
                        shapeseq[i] = shape.id;
                    }
                }
                delete this.shapes[shapeid];
            },

            replaceWithShapes: function (shapeids, shapes) {
                var shapeseq = this.shapeseq,
                    shapemap = {},
                    sid, i, first;

                for (i = shapeids.length; i--;) {
                    shapemap[shapeids[i]] = true;
                }
                for (i = shapeseq.length; i--;) {
                    sid = shapeseq[i];
                    if (shapemap[sid]) {
                        shapeseq.splice(i, 1);
                        delete this.shapes[sid];
                        first = i;
                    }
                }
                for (i = shapes.length; i--;) {
                    shapeseq.splice(first, 0, shapes[i].id);
                    this.shapes[shapes[i].id] = shapes[i];
                }

            },

            insertAfterShape: function (shapeid, shape) {
                var shapeseq = this.shapeseq,
                    i;
                for (i = shapeseq.length; i--;) {
                    if (shapeseq[i] === shapeid) {
                        shapeseq.splice(i + 1, 0, shape.id);
                        this.shapes[shape.id] = shape;
                        return;
                    }
                }
            },

            removeShapeId: function (shapeid) {
                var shapeseq = this.shapeseq,
                    i;
                for (i = shapeseq.length; i--;) {
                    if (shapeseq[i] === shapeid) {
                        shapeseq.splice(i, 1);
                        break;
                    }
                }
                delete this.shapes[shapeid];
            },

            getShapeAt: function (el, x, y) {
                this.targetX = x;
                this.targetY = y;
                this.render();
                return this.currentTargetShapeId;
            },

            render: function () {
                var shapeseq = this.shapeseq,
                    shapes = this.shapes,
                    shapeCount = shapeseq.length,
                    context = this._getContext(),
                    shapeid, shape, i;
                context.clearRect(0, 0, this.pixelWidth, this.pixelHeight);
                for (i = 0; i < shapeCount; i++) {
                    shapeid = shapeseq[i];
                    shape = shapes[shapeid];
                    this['_draw' + shape.type].apply(this, shape.args);
                }
                if (!this.interact) {
                    // not interactive so no need to keep the shapes array
                    this.shapes = {};
                    this.shapeseq = [];
                }
            }

        });

        VCanvas_vml = createClass(VCanvas_base, {
            init: function (width, height, target) {
                var groupel;
                VCanvas_vml._super.init.call(this, width, height, target);
                if (target[0]) {
                    target = target[0];
                }
                $.data(target, '_jqs_vcanvas', this);
                this.canvas = document.createElement('span');
                $(this.canvas).css({ display: 'inline-block', position: 'relative', overflow: 'hidden', width: width, height: height, margin: '0px', padding: '0px', verticalAlign: 'top'});
                this._insert(this.canvas, target);
                this._calculatePixelDims(width, height, this.canvas);
                this.canvas.width = this.pixelWidth;
                this.canvas.height = this.pixelHeight;
                groupel = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + ' ' + this.pixelHeight + '"' +
                        ' style="position:absolute;top:0;left:0;width:' + this.pixelWidth + 'px;height=' + this.pixelHeight + 'px;"></v:group>';
                this.canvas.insertAdjacentHTML('beforeEnd', groupel);
                this.group = $(this.canvas).children()[0];
                this.rendered = false;
                this.prerender = '';
            },

            _drawShape: function (shapeid, path, lineColor, fillColor, lineWidth) {
                var vpath = [],
                    initial, stroke, fill, closed, vel, plen, i;
                for (i = 0, plen = path.length; i < plen; i++) {
                    vpath[i] = '' + (path[i][0]) + ',' + (path[i][1]);
                }
                initial = vpath.splice(0, 1);
                lineWidth = lineWidth === undefined ? 1 : lineWidth;
                stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="' + lineWidth + 'px" strokeColor="' + lineColor + '" ';
                fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
                closed = vpath[0] === vpath[vpath.length - 1] ? 'x ' : '';
                vel = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + ' ' + this.pixelHeight + '" ' +
                     ' id="jqsshape' + shapeid + '" ' +
                     stroke +
                     fill +
                    ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + 'px;width:' + this.pixelWidth + 'px;padding:0px;margin:0px;" ' +
                    ' path="m ' + initial + ' l ' + vpath.join(', ') + ' ' + closed + 'e">' +
                    ' </v:shape>';
                return vel;
            },

            _drawCircle: function (shapeid, x, y, radius, lineColor, fillColor, lineWidth) {
                var stroke, fill, vel;
                x -= radius;
                y -= radius;
                stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="' + lineWidth + 'px" strokeColor="' + lineColor + '" ';
                fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
                vel = '<v:oval ' +
                     ' id="jqsshape' + shapeid + '" ' +
                    stroke +
                    fill +
                    ' style="position:absolute;top:' + y + 'px; left:' + x + 'px; width:' + (radius * 2) + 'px; height:' + (radius * 2) + 'px"></v:oval>';
                return vel;

            },

            _drawPieSlice: function (shapeid, x, y, radius, startAngle, endAngle, lineColor, fillColor) {
                var vpath, startx, starty, endx, endy, stroke, fill, vel;
                if (startAngle === endAngle) {
                    return '';  // VML seems to have problem when start angle equals end angle.
                }
                if ((endAngle - startAngle) === (2 * Math.PI)) {
                    startAngle = 0.0;  // VML seems to have a problem when drawing a full circle that doesn't start 0
                    endAngle = (2 * Math.PI);
                }

                startx = x + Math.round(Math.cos(startAngle) * radius);
                starty = y + Math.round(Math.sin(startAngle) * radius);
                endx = x + Math.round(Math.cos(endAngle) * radius);
                endy = y + Math.round(Math.sin(endAngle) * radius);

                if (startx === endx && starty === endy) {
                    if ((endAngle - startAngle) < Math.PI) {
                        // Prevent very small slices from being mistaken as a whole pie
                        return '';
                    }
                    // essentially going to be the entire circle, so ignore startAngle
                    startx = endx = x + radius;
                    starty = endy = y;
                }

                if (startx === endx && starty === endy && (endAngle - startAngle) < Math.PI) {
                    return '';
                }

                vpath = [x - radius, y - radius, x + radius, y + radius, startx, starty, endx, endy];
                stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + lineColor + '" ';
                fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
                vel = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + ' ' + this.pixelHeight + '" ' +
                     ' id="jqsshape' + shapeid + '" ' +
                     stroke +
                     fill +
                    ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + 'px;width:' + this.pixelWidth + 'px;padding:0px;margin:0px;" ' +
                    ' path="m ' + x + ',' + y + ' wa ' + vpath.join(', ') + ' x e">' +
                    ' </v:shape>';
                return vel;
            },

            _drawRect: function (shapeid, x, y, width, height, lineColor, fillColor) {
                return this._drawShape(shapeid, [[x, y], [x, y + height], [x + width, y + height], [x + width, y], [x, y]], lineColor, fillColor);
            },

            reset: function () {
                this.group.innerHTML = '';
            },

            appendShape: function (shape) {
                var vel = this['_draw' + shape.type].apply(this, shape.args);
                if (this.rendered) {
                    this.group.insertAdjacentHTML('beforeEnd', vel);
                } else {
                    this.prerender += vel;
                }
                this.lastShapeId = shape.id;
                return shape.id;
            },

            replaceWithShape: function (shapeid, shape) {
                var existing = $('#jqsshape' + shapeid),
                    vel = this['_draw' + shape.type].apply(this, shape.args);
                existing[0].outerHTML = vel;
            },

            replaceWithShapes: function (shapeids, shapes) {
                // replace the first shapeid with all the new shapes then toast the remaining old shapes
                var existing = $('#jqsshape' + shapeids[0]),
                    replace = '',
                    slen = shapes.length,
                    i;
                for (i = 0; i < slen; i++) {
                    replace += this['_draw' + shapes[i].type].apply(this, shapes[i].args);
                }
                existing[0].outerHTML = replace;
                for (i = 1; i < shapeids.length; i++) {
                    $('#jqsshape' + shapeids[i]).remove();
                }
            },

            insertAfterShape: function (shapeid, shape) {
                var existing = $('#jqsshape' + shapeid),
                     vel = this['_draw' + shape.type].apply(this, shape.args);
                existing[0].insertAdjacentHTML('afterEnd', vel);
            },

            removeShapeId: function (shapeid) {
                var existing = $('#jqsshape' + shapeid);
                this.group.removeChild(existing[0]);
            },

            getShapeAt: function (el, x, y) {
                var shapeid = el.id.substr(8);
                return shapeid;
            },

            render: function () {
                if (!this.rendered) {
                    // batch the intial render into a single repaint
                    this.group.innerHTML = this.prerender;
                    this.rendered = true;
                }
            }
        });

    }));}(document, Math));

    var $$9 = jqueryProxy;
    function Sparklines(_a, children) {
        var xa = _a.xa, attrs = __rest(_a, ["xa"]);
        return (xatto.x("div", __assign({}, attrs, { oncreate: onCreateFactory$1(attrs) }), children));
    }
    function onCreateFactory$1(attrs) {
        return function (element) { return onCreate$9(element, attrs); };
    }
    function onCreate$9(element, attrs) {
        var $element = $$9(element);
        var data = parseJson(attrs.data) || 'html';
        var options = $element.data() || {};
        var type = attrs.type || 'bar';
        $$9(element).sparkline(data, __assign({ type: type }, options));
    }

    !function($){var apiParams={set:{colors:1,values:1,backgroundColor:1,scaleColors:1,normalizeFunction:1,focus:1},get:{selectedRegions:1,selectedMarkers:1,mapObject:1,regionName:1}};$.fn.vectorMap=function(options){var map,methodName,map=this.children(".jvectormap-container").data("mapObject");if("addMap"===options)jvm.WorldMap.maps[arguments[1]]=arguments[2];else{if(("set"===options||"get"===options)&&apiParams[options][arguments[1]])return methodName=arguments[1].charAt(0).toUpperCase()+arguments[1].substr(1), map[options+methodName].apply(map,Array.prototype.slice.call(arguments,2));options=options||{}, options.container=this, map=new jvm.WorldMap(options);}return this};}(jQuery), function($){function handler(event){var orgEvent=event||window.event,args=[].slice.call(arguments,1),delta=0,deltaX=0,deltaY=0;return event=$.event.fix(orgEvent), event.type="mousewheel", orgEvent.wheelDelta&&(delta=orgEvent.wheelDelta/120), orgEvent.detail&&(delta=-orgEvent.detail/3), deltaY=delta, void 0!==orgEvent.axis&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS&&(deltaY=0, deltaX=-1*delta), void 0!==orgEvent.wheelDeltaY&&(deltaY=orgEvent.wheelDeltaY/120), void 0!==orgEvent.wheelDeltaX&&(deltaX=-1*orgEvent.wheelDeltaX/120), args.unshift(event,delta,deltaX,deltaY), ($.event.dispatch||$.event.handle).apply(this,args)}var types=["DOMMouseScroll","mousewheel"];if($.event.fixHooks)for(var i=types.length;i;)$.event.fixHooks[types[--i]]=$.event.mouseHooks;$.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var i=types.length;i;)this.addEventListener(types[--i],handler,!1);else this.onmousewheel=handler;},teardown:function(){if(this.removeEventListener)for(var i=types.length;i;)this.removeEventListener(types[--i],handler,!1);else this.onmousewheel=null;}}, $.fn.extend({mousewheel:function(fn){return fn?this.bind("mousewheel",fn):this.trigger("mousewheel")},unmousewheel:function(fn){return this.unbind("mousewheel",fn)}});}(jQuery);var jvm={inherits:function(child,parent){function temp(){}temp.prototype=parent.prototype, child.prototype=new temp, child.prototype.constructor=child, child.parentClass=parent;},mixin:function(target,source){var prop;for(prop in source.prototype)source.prototype.hasOwnProperty(prop)&&(target.prototype[prop]=source.prototype[prop]);},min:function(values){var i,min=Number.MAX_VALUE;if(values instanceof Array)for(i=0;i<values.length;i++)values[i]<min&&(min=values[i]);else for(i in values)values[i]<min&&(min=values[i]);return min},max:function(values){var i,max=Number.MIN_VALUE;if(values instanceof Array)for(i=0;i<values.length;i++)values[i]>max&&(max=values[i]);else for(i in values)values[i]>max&&(max=values[i]);return max},keys:function(object){var key,keys=[];for(key in object)keys.push(key);return keys},values:function(object){var key,i,values=[];for(i=0;i<arguments.length;i++){object=arguments[i];for(key in object)values.push(object[key]);}return values}};jvm.$=jQuery, jvm.AbstractElement=function(name,config){this.node=this.createElement(name), this.name=name, this.properties={}, config&&this.set(config);}, jvm.AbstractElement.prototype.set=function(property,value){var key;if("object"==typeof property)for(key in property)this.properties[key]=property[key], this.applyAttr(key,property[key]);else this.properties[property]=value, this.applyAttr(property,value);}, jvm.AbstractElement.prototype.get=function(property){return this.properties[property]}, jvm.AbstractElement.prototype.applyAttr=function(property,value){this.node.setAttribute(property,value);}, jvm.AbstractElement.prototype.remove=function(){jvm.$(this.node).remove();}, jvm.AbstractCanvasElement=function(container,width,height){this.container=container, this.setSize(width,height), this.rootElement=new jvm[this.classPrefix+"GroupElement"], this.node.appendChild(this.rootElement.node), this.container.appendChild(this.node);}, jvm.AbstractCanvasElement.prototype.add=function(element,group){group=group||this.rootElement, group.add(element), element.canvas=this;}, jvm.AbstractCanvasElement.prototype.addPath=function(config,style,group){var el=new jvm[this.classPrefix+"PathElement"](config,style);return this.add(el,group), el}, jvm.AbstractCanvasElement.prototype.addCircle=function(config,style,group){var el=new jvm[this.classPrefix+"CircleElement"](config,style);return this.add(el,group), el}, jvm.AbstractCanvasElement.prototype.addGroup=function(parentGroup){var el=new jvm[this.classPrefix+"GroupElement"];return parentGroup?parentGroup.node.appendChild(el.node):this.node.appendChild(el.node), el.canvas=this, el}, jvm.AbstractShapeElement=function(name,config,style){this.style=style||{}, this.style.current={}, this.isHovered=!1, this.isSelected=!1, this.updateStyle();}, jvm.AbstractShapeElement.prototype.setHovered=function(isHovered){this.isHovered!==isHovered&&(this.isHovered=isHovered, this.updateStyle());}, jvm.AbstractShapeElement.prototype.setSelected=function(isSelected){this.isSelected!==isSelected&&(this.isSelected=isSelected, this.updateStyle(), jvm.$(this.node).trigger("selected",[isSelected]));}, jvm.AbstractShapeElement.prototype.setStyle=function(property,value){var styles={};"object"==typeof property?styles=property:styles[property]=value, jvm.$.extend(this.style.current,styles), this.updateStyle();}, jvm.AbstractShapeElement.prototype.updateStyle=function(){var attrs={};jvm.AbstractShapeElement.mergeStyles(attrs,this.style.initial), jvm.AbstractShapeElement.mergeStyles(attrs,this.style.current), this.isHovered&&jvm.AbstractShapeElement.mergeStyles(attrs,this.style.hover), this.isSelected&&(jvm.AbstractShapeElement.mergeStyles(attrs,this.style.selected), this.isHovered&&jvm.AbstractShapeElement.mergeStyles(attrs,this.style.selectedHover)), this.set(attrs);}, jvm.AbstractShapeElement.mergeStyles=function(styles,newStyles){var key;newStyles=newStyles||{};for(key in newStyles)null===newStyles[key]?delete styles[key]:styles[key]=newStyles[key];}, jvm.SVGElement=function(){jvm.SVGElement.parentClass.apply(this,arguments);}, jvm.inherits(jvm.SVGElement,jvm.AbstractElement), jvm.SVGElement.svgns="http://www.w3.org/2000/svg", jvm.SVGElement.prototype.createElement=function(tagName){return document.createElementNS(jvm.SVGElement.svgns,tagName)}, jvm.SVGElement.prototype.addClass=function(className){this.node.setAttribute("class",className);}, jvm.SVGElement.prototype.getElementCtr=function(ctr){return jvm["SVG"+ctr]}, jvm.SVGElement.prototype.getBBox=function(){return this.node.getBBox()}, jvm.SVGGroupElement=function(){jvm.SVGGroupElement.parentClass.call(this,"g");}, jvm.inherits(jvm.SVGGroupElement,jvm.SVGElement), jvm.SVGGroupElement.prototype.add=function(element){this.node.appendChild(element.node);}, jvm.SVGCanvasElement=function(){this.classPrefix="SVG", jvm.SVGCanvasElement.parentClass.call(this,"svg"), jvm.AbstractCanvasElement.apply(this,arguments);}, jvm.inherits(jvm.SVGCanvasElement,jvm.SVGElement), jvm.mixin(jvm.SVGCanvasElement,jvm.AbstractCanvasElement), jvm.SVGCanvasElement.prototype.setSize=function(width,height){this.width=width, this.height=height, this.node.setAttribute("width",width), this.node.setAttribute("height",height);}, jvm.SVGCanvasElement.prototype.applyTransformParams=function(scale,transX,transY){this.scale=scale, this.transX=transX, this.transY=transY, this.rootElement.node.setAttribute("transform","scale("+scale+") translate("+transX+", "+transY+")");}, jvm.SVGShapeElement=function(name,config){jvm.SVGShapeElement.parentClass.call(this,name,config), jvm.AbstractShapeElement.apply(this,arguments);}, jvm.inherits(jvm.SVGShapeElement,jvm.SVGElement), jvm.mixin(jvm.SVGShapeElement,jvm.AbstractShapeElement), jvm.SVGPathElement=function(config,style){jvm.SVGPathElement.parentClass.call(this,"path",config,style), this.node.setAttribute("fill-rule","evenodd");}, jvm.inherits(jvm.SVGPathElement,jvm.SVGShapeElement), jvm.SVGCircleElement=function(config,style){jvm.SVGCircleElement.parentClass.call(this,"circle",config,style);}, jvm.inherits(jvm.SVGCircleElement,jvm.SVGShapeElement), jvm.VMLElement=function(){jvm.VMLElement.VMLInitialized||jvm.VMLElement.initializeVML(), jvm.VMLElement.parentClass.apply(this,arguments);}, jvm.inherits(jvm.VMLElement,jvm.AbstractElement), jvm.VMLElement.VMLInitialized=!1, jvm.VMLElement.initializeVML=function(){try{document.namespaces.rvml||document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"), jvm.VMLElement.prototype.createElement=function(tagName){return document.createElement("<rvml:"+tagName+' class="rvml">')};}catch(e){jvm.VMLElement.prototype.createElement=function(tagName){return document.createElement("<"+tagName+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')};}document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"), jvm.VMLElement.VMLInitialized=!0;}, jvm.VMLElement.prototype.getElementCtr=function(ctr){return jvm["VML"+ctr]}, jvm.VMLElement.prototype.addClass=function(className){jvm.$(this.node).addClass(className);}, jvm.VMLElement.prototype.applyAttr=function(attr,value){this.node[attr]=value;}, jvm.VMLElement.prototype.getBBox=function(){var node=jvm.$(this.node);return{x:node.position().left/this.canvas.scale,y:node.position().top/this.canvas.scale,width:node.width()/this.canvas.scale,height:node.height()/this.canvas.scale}}, jvm.VMLGroupElement=function(){jvm.VMLGroupElement.parentClass.call(this,"group"), this.node.style.left="0px", this.node.style.top="0px", this.node.coordorigin="0 0";}, jvm.inherits(jvm.VMLGroupElement,jvm.VMLElement), jvm.VMLGroupElement.prototype.add=function(element){this.node.appendChild(element.node);}, jvm.VMLCanvasElement=function(){this.classPrefix="VML", jvm.VMLCanvasElement.parentClass.call(this,"group"), jvm.AbstractCanvasElement.apply(this,arguments), this.node.style.position="absolute";}, jvm.inherits(jvm.VMLCanvasElement,jvm.VMLElement), jvm.mixin(jvm.VMLCanvasElement,jvm.AbstractCanvasElement), jvm.VMLCanvasElement.prototype.setSize=function(width,height){var paths,groups,i,l;if(this.width=width, this.height=height, this.node.style.width=width+"px", this.node.style.height=height+"px", this.node.coordsize=width+" "+height, this.node.coordorigin="0 0", this.rootElement){for(paths=this.rootElement.node.getElementsByTagName("shape"), i=0, l=paths.length;l>i;i++)paths[i].coordsize=width+" "+height, paths[i].style.width=width+"px", paths[i].style.height=height+"px";for(groups=this.node.getElementsByTagName("group"), i=0, l=groups.length;l>i;i++)groups[i].coordsize=width+" "+height, groups[i].style.width=width+"px", groups[i].style.height=height+"px";}}, jvm.VMLCanvasElement.prototype.applyTransformParams=function(scale,transX,transY){this.scale=scale, this.transX=transX, this.transY=transY, this.rootElement.node.coordorigin=this.width-transX-this.width/100+","+(this.height-transY-this.height/100), this.rootElement.node.coordsize=this.width/scale+","+this.height/scale;}, jvm.VMLShapeElement=function(name,config){jvm.VMLShapeElement.parentClass.call(this,name,config), this.fillElement=new jvm.VMLElement("fill"), this.strokeElement=new jvm.VMLElement("stroke"), this.node.appendChild(this.fillElement.node), this.node.appendChild(this.strokeElement.node), this.node.stroked=!1, jvm.AbstractShapeElement.apply(this,arguments);}, jvm.inherits(jvm.VMLShapeElement,jvm.VMLElement), jvm.mixin(jvm.VMLShapeElement,jvm.AbstractShapeElement), jvm.VMLShapeElement.prototype.applyAttr=function(attr,value){switch(attr){case"fill":this.node.fillcolor=value;break;case"fill-opacity":this.fillElement.node.opacity=Math.round(100*value)+"%";break;case"stroke":this.node.stroked="none"===value?!1:!0, this.node.strokecolor=value;break;case"stroke-opacity":this.strokeElement.node.opacity=Math.round(100*value)+"%";break;case"stroke-width":this.node.stroked=0===parseInt(value,10)?!1:!0, this.node.strokeweight=value;break;case"d":this.node.path=jvm.VMLPathElement.pathSvgToVml(value);break;default:jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this,arguments);}}, jvm.VMLPathElement=function(config,style){var scale=new jvm.VMLElement("skew");jvm.VMLPathElement.parentClass.call(this,"shape",config,style), this.node.coordorigin="0 0", scale.node.on=!0, scale.node.matrix="0.01,0,0,0.01,0,0", scale.node.offset="0,0", this.node.appendChild(scale.node);}, jvm.inherits(jvm.VMLPathElement,jvm.VMLShapeElement), jvm.VMLPathElement.prototype.applyAttr=function(attr,value){"d"===attr?this.node.path=jvm.VMLPathElement.pathSvgToVml(value):jvm.VMLShapeElement.prototype.applyAttr.call(this,attr,value);}, jvm.VMLPathElement.pathSvgToVml=function(path){var ctrlx,ctrly,cx=0,cy=0;return path=path.replace(/(-?\d+)e(-?\d+)/g,"0"), path.replace(/([MmLlHhVvCcSs])\s*((?:-?\d*(?:\.\d+)?\s*,?\s*)+)/g,function(segment,letter,coords){coords=coords.replace(/(\d)-/g,"$1,-").replace(/^\s+/g,"").replace(/\s+$/g,"").replace(/\s+/g,",").split(","), coords[0]||coords.shift();for(var i=0,l=coords.length;l>i;i++)coords[i]=Math.round(100*coords[i]);switch(letter){case"m":return cx+=coords[0], cy+=coords[1], "t"+coords.join(",");case"M":return cx=coords[0], cy=coords[1], "m"+coords.join(",");case"l":return cx+=coords[0], cy+=coords[1], "r"+coords.join(",");case"L":return cx=coords[0], cy=coords[1], "l"+coords.join(",");case"h":return cx+=coords[0], "r"+coords[0]+",0";case"H":return cx=coords[0], "l"+cx+","+cy;case"v":return cy+=coords[0], "r0,"+coords[0];case"V":return cy=coords[0], "l"+cx+","+cy;case"c":return ctrlx=cx+coords[coords.length-4], ctrly=cy+coords[coords.length-3], cx+=coords[coords.length-2], cy+=coords[coords.length-1], "v"+coords.join(",");case"C":return ctrlx=coords[coords.length-4], ctrly=coords[coords.length-3], cx=coords[coords.length-2], cy=coords[coords.length-1], "c"+coords.join(",");case"s":return coords.unshift(cy-ctrly), coords.unshift(cx-ctrlx), ctrlx=cx+coords[coords.length-4], ctrly=cy+coords[coords.length-3], cx+=coords[coords.length-2], cy+=coords[coords.length-1], "v"+coords.join(",");case"S":return coords.unshift(cy+cy-ctrly), coords.unshift(cx+cx-ctrlx), ctrlx=coords[coords.length-4], ctrly=coords[coords.length-3], cx=coords[coords.length-2], cy=coords[coords.length-1], "c"+coords.join(",")}return""}).replace(/z/g,"e")}, jvm.VMLCircleElement=function(config,style){jvm.VMLCircleElement.parentClass.call(this,"oval",config,style);}, jvm.inherits(jvm.VMLCircleElement,jvm.VMLShapeElement), jvm.VMLCircleElement.prototype.applyAttr=function(attr,value){switch(attr){case"r":this.node.style.width=2*value+"px", this.node.style.height=2*value+"px", this.applyAttr("cx",this.get("cx")||0), this.applyAttr("cy",this.get("cy")||0);break;case"cx":if(!value)return;this.node.style.left=value-(this.get("r")||0)+"px";break;case"cy":if(!value)return;this.node.style.top=value-(this.get("r")||0)+"px";break;default:jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this,attr,value);}}, jvm.VectorCanvas=function(container,width,height){return this.mode=window.SVGAngle?"svg":"vml", this.impl="svg"==this.mode?new jvm.SVGCanvasElement(container,width,height):new jvm.VMLCanvasElement(container,width,height), this.impl}, jvm.SimpleScale=function(scale){this.scale=scale;}, jvm.SimpleScale.prototype.getValue=function(value){return value}, jvm.OrdinalScale=function(scale){this.scale=scale;}, jvm.OrdinalScale.prototype.getValue=function(value){return this.scale[value]}, jvm.NumericScale=function(scale,normalizeFunction,minValue,maxValue){this.scale=[], normalizeFunction=normalizeFunction||"linear", scale&&this.setScale(scale), normalizeFunction&&this.setNormalizeFunction(normalizeFunction), minValue&&this.setMin(minValue), maxValue&&this.setMax(maxValue);}, jvm.NumericScale.prototype={setMin:function(min){this.clearMinValue=min, this.minValue="function"==typeof this.normalize?this.normalize(min):min;},setMax:function(max){this.clearMaxValue=max, this.maxValue="function"==typeof this.normalize?this.normalize(max):max;},setScale:function(scale){var i;for(i=0;i<scale.length;i++)this.scale[i]=[scale[i]];},setNormalizeFunction:function(f){"polynomial"===f?this.normalize=function(value){return Math.pow(value,.2)}:"linear"===f?delete this.normalize:this.normalize=f, this.setMin(this.clearMinValue), this.setMax(this.clearMaxValue);},getValue:function(value){var l,c,lengthes=[],fullLength=0,i=0;for("function"==typeof this.normalize&&(value=this.normalize(value)), i=0;i<this.scale.length-1;i++)l=this.vectorLength(this.vectorSubtract(this.scale[i+1],this.scale[i])), lengthes.push(l), fullLength+=l;for(c=(this.maxValue-this.minValue)/fullLength, i=0;i<lengthes.length;i++)lengthes[i]*=c;for(i=0, value-=this.minValue;value-lengthes[i]>=0;)value-=lengthes[i], i++;return value=this.vectorToNum(i==this.scale.length-1?this.scale[i]:this.vectorAdd(this.scale[i],this.vectorMult(this.vectorSubtract(this.scale[i+1],this.scale[i]),value/lengthes[i])))},vectorToNum:function(vector){var i,num=0;for(i=0;i<vector.length;i++)num+=Math.round(vector[i])*Math.pow(256,vector.length-i-1);return num},vectorSubtract:function(vector1,vector2){var i,vector=[];for(i=0;i<vector1.length;i++)vector[i]=vector1[i]-vector2[i];return vector},vectorAdd:function(vector1,vector2){var i,vector=[];for(i=0;i<vector1.length;i++)vector[i]=vector1[i]+vector2[i];return vector},vectorMult:function(vector,num){var i,result=[];for(i=0;i<vector.length;i++)result[i]=vector[i]*num;return result},vectorLength:function(vector){var i,result=0;for(i=0;i<vector.length;i++)result+=vector[i]*vector[i];return Math.sqrt(result)}}, jvm.ColorScale=function(){jvm.ColorScale.parentClass.apply(this,arguments);}, jvm.inherits(jvm.ColorScale,jvm.NumericScale), jvm.ColorScale.prototype.setScale=function(scale){var i;for(i=0;i<scale.length;i++)this.scale[i]=jvm.ColorScale.rgbToArray(scale[i]);}, jvm.ColorScale.prototype.getValue=function(value){return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this,value))}, jvm.ColorScale.arrayToRgb=function(ar){var d,i,rgb="#";for(i=0;i<ar.length;i++)d=ar[i].toString(16), rgb+=1==d.length?"0"+d:d;return rgb}, jvm.ColorScale.numToRgb=function(num){for(num=num.toString(16);num.length<6;)num="0"+num;return"#"+num}, jvm.ColorScale.rgbToArray=function(rgb){return rgb=rgb.substr(1), [parseInt(rgb.substr(0,2),16),parseInt(rgb.substr(2,2),16),parseInt(rgb.substr(4,2),16)]}, jvm.DataSeries=function(params,elements){var scaleConstructor;params=params||{}, params.attribute=params.attribute||"fill", this.elements=elements, this.params=params, params.attributes&&this.setAttributes(params.attributes), jvm.$.isArray(params.scale)?(scaleConstructor="fill"===params.attribute||"stroke"===params.attribute?jvm.ColorScale:jvm.NumericScale, this.scale=new scaleConstructor(params.scale,params.normalizeFunction,params.min,params.max)):this.scale=params.scale?new jvm.OrdinalScale(params.scale):new jvm.SimpleScale(params.scale), this.values=params.values||{}, this.setValues(this.values);}, jvm.DataSeries.prototype={setAttributes:function(key,attr){var code,attrs=key;if("string"==typeof key)this.elements[key]&&this.elements[key].setStyle(this.params.attribute,attr);else for(code in attrs)this.elements[code]&&this.elements[code].element.setStyle(this.params.attribute,attrs[code]);},setValues:function(values){var val,cc,max=Number.MIN_VALUE,min=Number.MAX_VALUE,attrs={};if(this.scale instanceof jvm.OrdinalScale||this.scale instanceof jvm.SimpleScale)for(cc in values)attrs[cc]=values[cc]?this.scale.getValue(values[cc]):this.elements[cc].element.style.initial[this.params.attribute];else{if(!this.params.min||!this.params.max){for(cc in values)val=parseFloat(values[cc]), val>max&&(max=values[cc]), min>val&&(min=val);this.params.min||this.scale.setMin(min), this.params.max||this.scale.setMax(max), this.params.min=min, this.params.max=max;}for(cc in values)val=parseFloat(values[cc]), attrs[cc]=isNaN(val)?this.elements[cc].element.style.initial[this.params.attribute]:this.scale.getValue(val);}this.setAttributes(attrs), jvm.$.extend(this.values,values);},clear:function(){var key,attrs={};for(key in this.values)this.elements[key]&&(attrs[key]=this.elements[key].element.style.initial[this.params.attribute]);this.setAttributes(attrs), this.values={};},setScale:function(scale){this.scale.setScale(scale), this.values&&this.setValues(this.values);},setNormalizeFunction:function(f){this.scale.setNormalizeFunction(f), this.values&&this.setValues(this.values);}}, jvm.Proj={degRad:180/Math.PI,radDeg:Math.PI/180,radius:6381372,sgn:function(n){return n>0?1:0>n?-1:n},mill:function(lat,lng,c){return{x:this.radius*(lng-c)*this.radDeg,y:-this.radius*Math.log(Math.tan((45+.4*lat)*this.radDeg))/.8}},mill_inv:function(x,y,c){return{lat:(2.5*Math.atan(Math.exp(.8*y/this.radius))-5*Math.PI/8)*this.degRad,lng:(c*this.radDeg+x/this.radius)*this.degRad}},merc:function(lat,lng,c){return{x:this.radius*(lng-c)*this.radDeg,y:-this.radius*Math.log(Math.tan(Math.PI/4+lat*Math.PI/360))}},merc_inv:function(x,y,c){return{lat:(2*Math.atan(Math.exp(y/this.radius))-Math.PI/2)*this.degRad,lng:(c*this.radDeg+x/this.radius)*this.degRad}},aea:function(lat,lng,c){var fi0=0,lambda0=c*this.radDeg,fi1=29.5*this.radDeg,fi2=45.5*this.radDeg,fi=lat*this.radDeg,lambda=lng*this.radDeg,n=(Math.sin(fi1)+Math.sin(fi2))/2,C=Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),theta=n*(lambda-lambda0),ro=Math.sqrt(C-2*n*Math.sin(fi))/n,ro0=Math.sqrt(C-2*n*Math.sin(fi0))/n;return{x:ro*Math.sin(theta)*this.radius,y:-(ro0-ro*Math.cos(theta))*this.radius}},aea_inv:function(xCoord,yCoord,c){var x=xCoord/this.radius,y=yCoord/this.radius,fi0=0,lambda0=c*this.radDeg,fi1=29.5*this.radDeg,fi2=45.5*this.radDeg,n=(Math.sin(fi1)+Math.sin(fi2))/2,C=Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),ro0=Math.sqrt(C-2*n*Math.sin(fi0))/n,ro=Math.sqrt(x*x+(ro0-y)*(ro0-y)),theta=Math.atan(x/(ro0-y));return{lat:Math.asin((C-ro*ro*n*n)/(2*n))*this.degRad,lng:(lambda0+theta/n)*this.degRad}},lcc:function(lat,lng,c){var fi0=0,lambda0=c*this.radDeg,lambda=lng*this.radDeg,fi1=33*this.radDeg,fi2=45*this.radDeg,fi=lat*this.radDeg,n=Math.log(Math.cos(fi1)*(1/Math.cos(fi2)))/Math.log(Math.tan(Math.PI/4+fi2/2)*(1/Math.tan(Math.PI/4+fi1/2))),F=Math.cos(fi1)*Math.pow(Math.tan(Math.PI/4+fi1/2),n)/n,ro=F*Math.pow(1/Math.tan(Math.PI/4+fi/2),n),ro0=F*Math.pow(1/Math.tan(Math.PI/4+fi0/2),n);return{x:ro*Math.sin(n*(lambda-lambda0))*this.radius,y:-(ro0-ro*Math.cos(n*(lambda-lambda0)))*this.radius}},lcc_inv:function(xCoord,yCoord,c){var x=xCoord/this.radius,y=yCoord/this.radius,fi0=0,lambda0=c*this.radDeg,fi1=33*this.radDeg,fi2=45*this.radDeg,n=Math.log(Math.cos(fi1)*(1/Math.cos(fi2)))/Math.log(Math.tan(Math.PI/4+fi2/2)*(1/Math.tan(Math.PI/4+fi1/2))),F=Math.cos(fi1)*Math.pow(Math.tan(Math.PI/4+fi1/2),n)/n,ro0=F*Math.pow(1/Math.tan(Math.PI/4+fi0/2),n),ro=this.sgn(n)*Math.sqrt(x*x+(ro0-y)*(ro0-y)),theta=Math.atan(x/(ro0-y));return{lat:(2*Math.atan(Math.pow(F/ro,1/n))-Math.PI/2)*this.degRad,lng:(lambda0+theta/n)*this.degRad}}}, jvm.WorldMap=function(params){var e,map=this;if(this.params=jvm.$.extend(!0,{},jvm.WorldMap.defaultParams,params), !jvm.WorldMap.maps[this.params.map])throw new Error("Attempt to use map which was not loaded: "+this.params.map);this.mapData=jvm.WorldMap.maps[this.params.map], this.markers={}, this.regions={}, this.regionsColors={}, this.regionsData={}, this.container=jvm.$("<div>").css({width:"100%",height:"100%"}).addClass("jvectormap-container"), this.params.container.append(this.container), this.container.data("mapObject",this), this.container.css({position:"relative",overflow:"hidden"}), this.defaultWidth=this.mapData.width, this.defaultHeight=this.mapData.height, this.setBackgroundColor(this.params.backgroundColor), this.onResize=function(){map.setSize();}, jvm.$(window).resize(this.onResize);for(e in jvm.WorldMap.apiEvents)this.params[e]&&this.container.bind(jvm.WorldMap.apiEvents[e]+".jvectormap",this.params[e]);this.canvas=new jvm.VectorCanvas(this.container[0],this.width,this.height), "ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch?this.params.bindTouchEvents&&this.bindContainerTouchEvents():this.bindContainerEvents(), this.bindElementEvents(), this.createLabel(), this.params.zoomButtons&&this.bindZoomButtons(), this.createRegions(), this.createMarkers(this.params.markers||{}), this.setSize(), this.params.focusOn&&("object"==typeof this.params.focusOn?this.setFocus.call(this,this.params.focusOn.scale,this.params.focusOn.x,this.params.focusOn.y):this.setFocus.call(this,this.params.focusOn)), this.params.selectedRegions&&this.setSelectedRegions(this.params.selectedRegions), this.params.selectedMarkers&&this.setSelectedMarkers(this.params.selectedMarkers), this.params.series&&this.createSeries();}, jvm.WorldMap.prototype={transX:0,transY:0,scale:1,baseTransX:0,baseTransY:0,baseScale:1,width:0,height:0,setBackgroundColor:function(backgroundColor){this.container.css("background-color",backgroundColor);},resize:function(){var curBaseScale=this.baseScale;this.width/this.height>this.defaultWidth/this.defaultHeight?(this.baseScale=this.height/this.defaultHeight, this.baseTransX=Math.abs(this.width-this.defaultWidth*this.baseScale)/(2*this.baseScale)):(this.baseScale=this.width/this.defaultWidth, this.baseTransY=Math.abs(this.height-this.defaultHeight*this.baseScale)/(2*this.baseScale)), this.scale*=this.baseScale/curBaseScale, this.transX*=this.baseScale/curBaseScale, this.transY*=this.baseScale/curBaseScale;},setSize:function(){this.width=this.container.width(), this.height=this.container.height(), this.resize(), this.canvas.setSize(this.width,this.height), this.applyTransform();},reset:function(){var key,i;for(key in this.series)for(i=0;i<this.series[key].length;i++)this.series[key][i].clear();this.scale=this.baseScale, this.transX=this.baseTransX, this.transY=this.baseTransY, this.applyTransform();},applyTransform:function(){var maxTransX,maxTransY,minTransX,minTransY;this.defaultWidth*this.scale<=this.width?(maxTransX=(this.width-this.defaultWidth*this.scale)/(2*this.scale), minTransX=(this.width-this.defaultWidth*this.scale)/(2*this.scale)):(maxTransX=0, minTransX=(this.width-this.defaultWidth*this.scale)/this.scale), this.defaultHeight*this.scale<=this.height?(maxTransY=(this.height-this.defaultHeight*this.scale)/(2*this.scale), minTransY=(this.height-this.defaultHeight*this.scale)/(2*this.scale)):(maxTransY=0, minTransY=(this.height-this.defaultHeight*this.scale)/this.scale), this.transY>maxTransY?this.transY=maxTransY:this.transY<minTransY&&(this.transY=minTransY), this.transX>maxTransX?this.transX=maxTransX:this.transX<minTransX&&(this.transX=minTransX), this.canvas.applyTransformParams(this.scale,this.transX,this.transY), this.markers&&this.repositionMarkers(), this.container.trigger("viewportChange",[this.scale/this.baseScale,this.transX,this.transY]);},bindContainerEvents:function(){var oldPageX,oldPageY,mouseDown=!1,map=this;this.container.mousemove(function(e){return mouseDown&&(map.transX-=(oldPageX-e.pageX)/map.scale, map.transY-=(oldPageY-e.pageY)/map.scale, map.applyTransform(), oldPageX=e.pageX, oldPageY=e.pageY), !1}).mousedown(function(e){return mouseDown=!0, oldPageX=e.pageX, oldPageY=e.pageY, !1}), jvm.$("body").mouseup(function(){mouseDown=!1;}), this.params.zoomOnScroll&&this.container.mousewheel(function(event,delta,deltaX,deltaY){var offset=jvm.$(map.container).offset(),centerX=event.pageX-offset.left,centerY=event.pageY-offset.top,zoomStep=Math.pow(1.3,deltaY);map.label.hide(), map.setScale(map.scale*zoomStep,centerX,centerY), event.preventDefault();});},bindContainerTouchEvents:function(){var touchStartScale,touchStartDistance,touchX,touchY,centerTouchX,centerTouchY,lastTouchesLength,map=this,handleTouchEvent=function(e){var offset,scale,transXOld,transYOld,touches=e.originalEvent.touches;"touchstart"==e.type&&(lastTouchesLength=0), 1==touches.length?(1==lastTouchesLength&&(transXOld=map.transX, transYOld=map.transY, map.transX-=(touchX-touches[0].pageX)/map.scale, map.transY-=(touchY-touches[0].pageY)/map.scale, map.applyTransform(), map.label.hide(), (transXOld!=map.transX||transYOld!=map.transY)&&e.preventDefault()), touchX=touches[0].pageX, touchY=touches[0].pageY):2==touches.length&&(2==lastTouchesLength?(scale=Math.sqrt(Math.pow(touches[0].pageX-touches[1].pageX,2)+Math.pow(touches[0].pageY-touches[1].pageY,2))/touchStartDistance, map.setScale(touchStartScale*scale,centerTouchX,centerTouchY), map.label.hide(), e.preventDefault()):(offset=jvm.$(map.container).offset(), centerTouchX=touches[0].pageX>touches[1].pageX?touches[1].pageX+(touches[0].pageX-touches[1].pageX)/2:touches[0].pageX+(touches[1].pageX-touches[0].pageX)/2, centerTouchY=touches[0].pageY>touches[1].pageY?touches[1].pageY+(touches[0].pageY-touches[1].pageY)/2:touches[0].pageY+(touches[1].pageY-touches[0].pageY)/2, centerTouchX-=offset.left, centerTouchY-=offset.top, touchStartScale=map.scale, touchStartDistance=Math.sqrt(Math.pow(touches[0].pageX-touches[1].pageX,2)+Math.pow(touches[0].pageY-touches[1].pageY,2)))), lastTouchesLength=touches.length;};jvm.$(this.container).bind("touchstart",handleTouchEvent), jvm.$(this.container).bind("touchmove",handleTouchEvent);},bindElementEvents:function(){var mouseMoved,map=this;this.container.mousemove(function(){mouseMoved=!0;}), this.container.delegate("[class~='jvectormap-element']","mouseover mouseout",function(e){var baseVal=jvm.$(this).attr("class").baseVal?jvm.$(this).attr("class").baseVal:jvm.$(this).attr("class"),type=-1===baseVal.indexOf("jvectormap-region")?"marker":"region",code=jvm.$(this).attr("region"==type?"data-code":"data-index"),element="region"==type?map.regions[code].element:map.markers[code].element,labelText="region"==type?map.mapData.paths[code].name:map.markers[code].config.name||"",labelShowEvent=jvm.$.Event(type+"LabelShow.jvectormap"),overEvent=jvm.$.Event(type+"Over.jvectormap");"mouseover"==e.type?(map.container.trigger(overEvent,[code]), overEvent.isDefaultPrevented()||element.setHovered(!0), map.label.text(labelText), map.container.trigger(labelShowEvent,[map.label,code]), labelShowEvent.isDefaultPrevented()||(map.label.show(), map.labelWidth=map.label.width(), map.labelHeight=map.label.height())):(element.setHovered(!1), map.label.hide(), map.container.trigger(type+"Out.jvectormap",[code]));}), this.container.delegate("[class~='jvectormap-element']","mousedown",function(){mouseMoved=!1;}), this.container.delegate("[class~='jvectormap-element']","mouseup",function(){var baseVal=jvm.$(this).attr("class").baseVal?jvm.$(this).attr("class").baseVal:jvm.$(this).attr("class"),type=-1===baseVal.indexOf("jvectormap-region")?"marker":"region",code=jvm.$(this).attr("region"==type?"data-code":"data-index"),clickEvent=jvm.$.Event(type+"Click.jvectormap"),element="region"==type?map.regions[code].element:map.markers[code].element;mouseMoved||(map.container.trigger(clickEvent,[code]), ("region"===type&&map.params.regionsSelectable||"marker"===type&&map.params.markersSelectable)&&(clickEvent.isDefaultPrevented()||(map.params[type+"sSelectableOne"]&&map.clearSelected(type+"s"), element.setSelected(!element.isSelected))));});},bindZoomButtons:function(){var map=this;jvm.$("<div/>").addClass("jvectormap-zoomin").text("+").appendTo(this.container), jvm.$("<div/>").addClass("jvectormap-zoomout").html("&#x2212;").appendTo(this.container), this.container.find(".jvectormap-zoomin").click(function(){map.setScale(map.scale*map.params.zoomStep,map.width/2,map.height/2);}), this.container.find(".jvectormap-zoomout").click(function(){map.setScale(map.scale/map.params.zoomStep,map.width/2,map.height/2);});},createLabel:function(){var map=this;this.label=jvm.$("<div/>").addClass("jvectormap-label").appendTo(jvm.$("body")), this.container.mousemove(function(e){var left=e.pageX-15-map.labelWidth,top=e.pageY-15-map.labelHeight;5>left&&(left=e.pageX+15), 5>top&&(top=e.pageY+15), map.label.is(":visible")&&map.label.css({left:left,top:top});});},setScale:function(scale,anchorX,anchorY,isCentered){var zoomStep,viewportChangeEvent=jvm.$.Event("zoom.jvectormap");scale>this.params.zoomMax*this.baseScale?scale=this.params.zoomMax*this.baseScale:scale<this.params.zoomMin*this.baseScale&&(scale=this.params.zoomMin*this.baseScale), "undefined"!=typeof anchorX&&"undefined"!=typeof anchorY&&(zoomStep=scale/this.scale, isCentered?(this.transX=anchorX+this.defaultWidth*(this.width/(this.defaultWidth*scale))/2, this.transY=anchorY+this.defaultHeight*(this.height/(this.defaultHeight*scale))/2):(this.transX-=(zoomStep-1)/scale*anchorX, this.transY-=(zoomStep-1)/scale*anchorY)), this.scale=scale, this.applyTransform(), this.container.trigger(viewportChangeEvent,[scale/this.baseScale]);},setFocus:function(scale,centerX,centerY){var bbox,itemBbox,newBbox,codes,i;if(jvm.$.isArray(scale)||this.regions[scale]){for(codes=jvm.$.isArray(scale)?scale:[scale], i=0;i<codes.length;i++)this.regions[codes[i]]&&(itemBbox=this.regions[codes[i]].element.getBBox(), itemBbox&&("undefined"==typeof bbox?bbox=itemBbox:(newBbox={x:Math.min(bbox.x,itemBbox.x),y:Math.min(bbox.y,itemBbox.y),width:Math.max(bbox.x+bbox.width,itemBbox.x+itemBbox.width)-Math.min(bbox.x,itemBbox.x),height:Math.max(bbox.y+bbox.height,itemBbox.y+itemBbox.height)-Math.min(bbox.y,itemBbox.y)}, bbox=newBbox)));this.setScale(Math.min(this.width/bbox.width,this.height/bbox.height),-(bbox.x+bbox.width/2),-(bbox.y+bbox.height/2),!0);}else scale*=this.baseScale, this.setScale(scale,-centerX*this.defaultWidth,-centerY*this.defaultHeight,!0);},getSelected:function(type){var key,selected=[];for(key in this[type])this[type][key].element.isSelected&&selected.push(key);return selected},getSelectedRegions:function(){return this.getSelected("regions")},getSelectedMarkers:function(){return this.getSelected("markers")},setSelected:function(type,keys){var i;if("object"!=typeof keys&&(keys=[keys]), jvm.$.isArray(keys))for(i=0;i<keys.length;i++)this[type][keys[i]].element.setSelected(!0);else for(i in keys)this[type][i].element.setSelected(!!keys[i]);},setSelectedRegions:function(keys){this.setSelected("regions",keys);},setSelectedMarkers:function(keys){this.setSelected("markers",keys);},clearSelected:function(type){var i,select={},selected=this.getSelected(type);for(i=0;i<selected.length;i++)select[selected[i]]=!1;this.setSelected(type,select);},clearSelectedRegions:function(){this.clearSelected("regions");},clearSelectedMarkers:function(){this.clearSelected("markers");},getMapObject:function(){return this},getRegionName:function(code){return this.mapData.paths[code].name},createRegions:function(){var key,region,map=this;for(key in this.mapData.paths)region=this.canvas.addPath({d:this.mapData.paths[key].path,"data-code":key},jvm.$.extend(!0,{},this.params.regionStyle)), jvm.$(region.node).bind("selected",function(e,isSelected){map.container.trigger("regionSelected.jvectormap",[jvm.$(this).attr("data-code"),isSelected,map.getSelectedRegions()]);}), region.addClass("jvectormap-region jvectormap-element"), this.regions[key]={element:region,config:this.mapData.paths[key]};},createMarkers:function(markers){var i,marker,point,markerConfig,markersArray,map=this;if(this.markersGroup=this.markersGroup||this.canvas.addGroup(), jvm.$.isArray(markers))for(markersArray=markers.slice(), markers={}, i=0;i<markersArray.length;i++)markers[i]=markersArray[i];for(i in markers)markerConfig=markers[i]instanceof Array?{latLng:markers[i]}:markers[i], point=this.getMarkerPosition(markerConfig), point!==!1&&(marker=this.canvas.addCircle({"data-index":i,cx:point.x,cy:point.y},jvm.$.extend(!0,{},this.params.markerStyle,{initial:markerConfig.style||{}}),this.markersGroup), marker.addClass("jvectormap-marker jvectormap-element"), jvm.$(marker.node).bind("selected",function(e,isSelected){map.container.trigger("markerSelected.jvectormap",[jvm.$(this).attr("data-index"),isSelected,map.getSelectedMarkers()]);}), this.markers[i]&&this.removeMarkers([i]), this.markers[i]={element:marker,config:markerConfig});},repositionMarkers:function(){var i,point;for(i in this.markers)point=this.getMarkerPosition(this.markers[i].config), point!==!1&&this.markers[i].element.setStyle({cx:point.x,cy:point.y});},getMarkerPosition:function(markerConfig){return jvm.WorldMap.maps[this.params.map].projection?this.latLngToPoint.apply(this,markerConfig.latLng||[0,0]):{x:markerConfig.coords[0]*this.scale+this.transX*this.scale,y:markerConfig.coords[1]*this.scale+this.transY*this.scale}},addMarker:function(key,marker,seriesData){var values,i,markers={},data=[],seriesData=seriesData||[];for(markers[key]=marker, i=0;i<seriesData.length;i++)values={}, values[key]=seriesData[i], data.push(values);this.addMarkers(markers,data);},addMarkers:function(markers,seriesData){var i;for(seriesData=seriesData||[], this.createMarkers(markers), i=0;i<seriesData.length;i++)this.series.markers[i].setValues(seriesData[i]||{});},removeMarkers:function(markers){var i;for(i=0;i<markers.length;i++)this.markers[markers[i]].element.remove(), delete this.markers[markers[i]];},removeAllMarkers:function(){var i,markers=[];for(i in this.markers)markers.push(i);this.removeMarkers(markers);},latLngToPoint:function(lat,lng){{var point,inset,bbox,proj=jvm.WorldMap.maps[this.params.map].projection,centralMeridian=proj.centralMeridian;this.width-2*this.baseTransX*this.baseScale, this.height-2*this.baseTransY*this.baseScale, this.scale/this.baseScale;}return-180+centralMeridian>lng&&(lng+=360), point=jvm.Proj[proj.type](lat,lng,centralMeridian), inset=this.getInsetForPoint(point.x,point.y), inset?(bbox=inset.bbox, point.x=(point.x-bbox[0].x)/(bbox[1].x-bbox[0].x)*inset.width*this.scale, point.y=(point.y-bbox[0].y)/(bbox[1].y-bbox[0].y)*inset.height*this.scale, {x:point.x+this.transX*this.scale+inset.left*this.scale,y:point.y+this.transY*this.scale+inset.top*this.scale}):!1},pointToLatLng:function(x,y){var i,inset,bbox,nx,ny,proj=jvm.WorldMap.maps[this.params.map].projection,centralMeridian=proj.centralMeridian,insets=jvm.WorldMap.maps[this.params.map].insets;for(i=0;i<insets.length;i++)if(inset=insets[i], bbox=inset.bbox, nx=x-(this.transX*this.scale+inset.left*this.scale), ny=y-(this.transY*this.scale+inset.top*this.scale), nx=nx/(inset.width*this.scale)*(bbox[1].x-bbox[0].x)+bbox[0].x, ny=ny/(inset.height*this.scale)*(bbox[1].y-bbox[0].y)+bbox[0].y, nx>bbox[0].x&&nx<bbox[1].x&&ny>bbox[0].y&&ny<bbox[1].y)return jvm.Proj[proj.type+"_inv"](nx,-ny,centralMeridian);return!1},getInsetForPoint:function(x,y){var i,bbox,insets=jvm.WorldMap.maps[this.params.map].insets;for(i=0;i<insets.length;i++)if(bbox=insets[i].bbox, x>bbox[0].x&&x<bbox[1].x&&y>bbox[0].y&&y<bbox[1].y)return insets[i]},createSeries:function(){var i,key;this.series={markers:[],regions:[]};for(key in this.params.series)for(i=0;i<this.params.series[key].length;i++)this.series[key][i]=new jvm.DataSeries(this.params.series[key][i],this[key]);},remove:function(){this.label.remove(), this.container.remove(), jvm.$(window).unbind("resize",this.onResize);}}, jvm.WorldMap.maps={}, jvm.WorldMap.defaultParams={map:"world_mill_en",backgroundColor:"#505050",zoomButtons:!0,zoomOnScroll:!0,zoomMax:8,zoomMin:1,zoomStep:1.6,regionsSelectable:!1,markersSelectable:!1,bindTouchEvents:!0,regionStyle:{initial:{fill:"white","fill-opacity":1,stroke:"none","stroke-width":0,"stroke-opacity":1},hover:{"fill-opacity":.8},selected:{fill:"yellow"},selectedHover:{}},markerStyle:{initial:{fill:"grey",stroke:"#505050","fill-opacity":1,"stroke-width":1,"stroke-opacity":1,r:5},hover:{stroke:"black","stroke-width":2},selected:{fill:"blue"},selectedHover:{}}}, jvm.WorldMap.apiEvents={onRegionLabelShow:"regionLabelShow",onRegionOver:"regionOver",onRegionOut:"regionOut",onRegionClick:"regionClick",onRegionSelected:"regionSelected",onMarkerLabelShow:"markerLabelShow",onMarkerOver:"markerOver",onMarkerOut:"markerOut",onMarkerClick:"markerClick",onMarkerSelected:"markerSelected",onViewportChange:"viewportChange"};

    var $$10 = jqueryProxy;
    function VectorMap(attrs, children) {
        return (xatto.x("div", __assign({}, attrs, { oncreate: onCreateFactory$2(attrs), onupdate: onUpdateFactory$1(attrs) })));
    }
    function onCreateFactory$2(attrs) {
        return function (element) { return onCreate$10(element, attrs); };
    }
    function onCreate$10(element, attrs) {
        var $element = $$10(element);
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
        var $element = $$10(element);
        var data = parseJson(attrs.data) || {};
        Object.entries(data).map(function (_a) {
            var key = _a[0], value = _a[1];
            if (settables[key]) {
                $element.vectorMap('set', key, value);
            }
        });
    }

    // This file is autogenerated via the `commonjs` Grunt task. You can require() this file in a CommonJS environment.
    require('../../js/transition.js');
    require('../../js/alert.js');
    require('../../js/button.js');
    require('../../js/carousel.js');
    require('../../js/collapse.js');
    require('../../js/dropdown.js');
    require('../../js/modal.js');
    require('../../js/tooltip.js');
    require('../../js/popover.js');
    require('../../js/scrollspy.js');
    require('../../js/tab.js');
    require('../../js/affix.js');

    var $$11 = jqueryProxy;
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
        var $element = $$11(element);
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
        var $element = $$11(element);
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
    exports.Chart = Chart;
    exports.Sparklines = Sparklines;
    exports.VectorMap = VectorMap;
    exports.Modal = Modal;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
