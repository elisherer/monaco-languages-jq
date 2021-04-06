module.exports = {
  // Set defaultToken to invalid to see what you do not tokenize yet
  // defaultToken: 'invalid',

  // prettier-ignore
  keywords: [
    'def', 'not', 'or', 'and', 'as', 'in', 'label', 'add',
    'try', 'catch', 'any', 'all', 'flatten', 'range',
    'if', 'then', 'else', 'elif',
    'end',
    'select', 'map', 'map_values', 'reduce',
    'path', 'del', 'getpath', 'setpath', 'delpaths', 'paths', 'leaf_paths',
    'to_entries', 'from_entries', 'with_entries',
    'arrays', 'objects', 'iterables', 'booleans', 'numbers', 'normals', 'finites', 'strings', 'nulls', 'values', 'scalars', 'empty',
    'error', 'halt', 'halt_error',
    'length', 'utf8bytelength', 'keys', 'keys_unsorted', 'has',
    'tonumber', 'tostring', 'type',
    'acos','acosh','asin','asinh','atan','atanh','cbrt','ceil','cos','cosh','erf','erfc','exp','exp10','exp2','expm1','fabs','floor','gamma','j0','j1','lgamma','log','log10','log1p','log2','logb','nearbyint','pow10','rint','round','significand','sin','sinh','sqrt','tan','tanh','tgamma','trunc','y0','y1',
    'fma','atan2','copysign','drem','fdim','fmax','fmin','fmod','frexp','hypot','jn','ldexp','modf','nextafter','nexttoward','pow','remainder','scalb','scalbln','yn',
    'infinite', 'nan', 'isinfinite', 'isnan', 'isfinite', 'isnormal',
    'sort', 'sort_by', 'group_by', 'min', 'max', 'min_by', 'max_by',
    'unique', 'unique_by', 'reverse', 'contains', 'indices', 'index', 'rindex',
    'inside', 'startswith', 'endswith', 'combinations', 'ltrimstr', 'rtrimstr',
    'explode', 'implode', 'split', 'join', 'ascii_downcase', 'ascii_upcase',
    'foreach', 'while', 'until', 'recurse', 'break', 'recurse_down', 'walk', 'transpose', 'bsearch',
    'INDEX', 'JOIN', 'IN',
    'test','match','capture', 'scan', 'splits','sub', 'gsub',
    'isempty', 'limit', 'first', 'last', 'nth',
    'tostream', 'fromstream',
    'import', 'include', 'module', 'modulemeta'
  ],

  // prettier-ignore
  operators: [
    '=', '>', '<', '!', '~', '?', '==', '<=', '>=', '!=',
    '+', '-', '*', '/', '&', '|', '^', '%', '//', '..',
    '+=', '-=', '*=', '/=', '%=', '//=', '?//', "|="
  ],

  // we include these common regular expressions
  symbols: /[=><!~?:&|+\-*/^%]+/,

  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

  // The main tokenizer for our languages
  tokenizer: {
    root: [
      [/def +/, { token: "keyword", next: "@definition" }],
      // identifiers and keywords
      [/[a-z_][\w$]*/, { cases: { "@keywords": "keyword", "@default": "identifier" } }],
      [/\$[a-z_$][\w$]*/, "annotation"],

      // delimiters and operators
      [/[{}()[\]]/, "@brackets"],
      [/[<>](?!@symbols)/, "@brackets"],
      [/@symbols/, { cases: { "@operators": "operator", "@default": "" } }],

      // numbers
      [/\d*\.\d+([eE][-+]?\d+)?/, "number.float"],
      [/0[xX][0-9a-fA-F]+/, "number.hex"],
      [/\d+/, "number"],

      // delimiter: after number because of .\d floats
      [/[;,.]/, "delimiter"],

      // strings
      [/"([^"\\]|\\.)*$/, "string.invalid"], // non-teminated string
      [/"/, { token: "string.quote", bracket: "@open", next: "@string" }],

      // whitespace
      [/[ \t\r\n]+/, "white"],
      [/#.*$/, "comment"]
    ],

    definition: [[/[a-z_][\w$]*/, { token: "type", next: "@root" }]],

    string: [
      [/[^\\"]+/, "string"],
      [/@escapes/, "string.escape"],
      [/\\./, "string.escape.invalid"],
      [/"/, { token: "string.quote", bracket: "@close", next: "@pop" }]
    ]
  }
};
