/*
Language: pbxproj
Category: common, system
Website: https://en.wikipedia.org/wiki/Property_list
*/

/** @type LanguageFn */
export default function(hljs) {
 
  const LITERALS = [
    "YES",
    "YES_AGGRESSIVE",
    "YES_ERROR",
    "NO",
    "Automatic",
    "PBXBuildFile",
    "PBXSourcesBuildPhase",
    "PBXBuildFile",
    "PBXGroup",
    "PBXFileReference",
    "PBXCopyFilesBuildPhase",
    "PBXFrameworksBuildPhase",
    "XCBuildConfiguration",
    "PBXVariantGroup",
    "PBXTargetDependency",
    "PBXShellScriptBuildPhase",
    "PBXResourcesBuildPhase",
    "PBXProject",
    "PBXNativeTarget",
    "PBXHeadersBuildPhase",
    "XCSwiftPackageProductDependency",
    "XCRemoteSwiftPackageReference",
    "XCConfigurationList",
    
  ];

  const ATTRIBUTES = [
    "isa",
    "name",
    "buildSettings",
    "fileRef",
    "sourceTree",
    "path",
    "children",
    "fileEncoding",
    "lastKnownFileType",
    "files",

];

  const SIMPLE_NUMBER_RE = '\\b\\d+(\\.\\d+)?\\b';
  const NUMBER = {
    className: 'number',
    begin: SIMPLE_NUMBER_RE,
    relevance: 0
  };

  return {
    name: 'Xcode Project Data',
    aliases: [ 'pbxproj', 'openstep_plist' ],
    keywords: {
      literal: LITERALS,
    },
    disableAutodetect: true,
    contains: [
      NUMBER,
      hljs.QUOTE_STRING_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'attr',
        begin: '\\b(' + ATTRIBUTES.join('|') + ')\\b'
      }
    ]
  };
}
