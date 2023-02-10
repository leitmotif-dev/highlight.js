/*
Language: pbxproj
Category: common, system
Website: https://en.wikipedia.org/wiki/Property_list
*/

/** @type LanguageFn */
export default function(hljs) {
 
  const NUMBERS = {
    className: 'number',
    variants: [
      { begin: '\\b(0b[01\']+)' },
      { begin: '(-?)\\b([\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)' },
      { begin: '(-?)(\\b0[xX][a-fA-F0-9\']+|(\\b[\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)([eE][-+]?[\\d\']+)?)' }
    ],
    relevance: 0
  };

  const LITERALS = [
    "YES",
    "NO",
    "Automatic"
  ];

  return {
    name: 'Xcode Project Data',
    aliases: [ 'pbxproj', 'openstep_plist' ],
    keywords: {
      literal: LITERALS,
    },
    disableAutodetect: true,
    contains: [
      hljs.QUOTE_STRING_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE
    ]
  };
}
