# monaco-languages-jq &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/elisherer/monaco-languages-jq/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/monaco-languages-jq.svg?style=flat)](https://www.npmjs.com/package/monaco-languages-jq) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

[Monaco Editor](https://github.com/microsoft/monaco-editor) JQ language definition (and syntax highlight)

## Installation

- `npm i -S monaco-languages-jq`

## Usage

With a helper function to register straight to monaco
```js
// `monaco` should be global or local in the loading module

import { registerJQLanguageDefinition } from 'monaco-languages-jq';

...

registerJQLanguageDefinition(monaco);
```

DIY (in case you want it to be called some other name):
```js
// `monaco` should be global or local in the loading module

import { JQLanguageDefinition } from 'monaco-languages-jq';

...

// Register a new language
monaco.languages.register({ id: 'jq' });

// Register a tokens provider for the language
monaco.languages.setMonarchTokensProvider('jq', JQLanguageDefinition);
```

In monaco editor use `"jq"` (or your value if changed) as `language`.

## License

monaco-languages-jq is [MIT Licensed](https://github.com/elisherer/monaco-languages-jq/blob/master/LICENSE)
