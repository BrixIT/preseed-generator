hljs.registerLanguage('preseed', function (hljs) {
  return {
    case_insensitive: true,
    lexemes: '[a-zA-Z][a-zA-Z0-9_\-]*',
    className: 'test',
    keywords: {
      built_in: 'd-i tasksel string select boolean multiselect note',
      literal: 'true false'
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.NUMBER_MODE
    ]
  }
});