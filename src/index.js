function registerLanguageFactory(id, definition) {
  return function (monaco) {
    // Register a new language
    monaco.languages.register({ id });

    // Register a tokens provider for the language
    monaco.languages.setMonarchTokensProvider(id, definition);
  };
}

// jq
const JQLanguageDefinition = require("./jq/JQLanguageDefinition");
exports.JQLanguageDefinition = JQLanguageDefinition;
exports.registerJQLanguageDefinition = registerLanguageFactory("jq", JQLanguageDefinition);
