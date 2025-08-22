export default {
  "grammars": {
    "kotlin": {
      "displayName": "Kotlin",
      "fileTypes": [
        "kt",
        "kts"
      ],
      "name": "kotlin",
      "patterns": [
        {
          "include": "#import"
        },
        {
          "include": "#package"
        },
        {
          "include": "#code"
        }
      ],
      "repository": {
        "annotation-simple": {
          "match": "(?<!\\w)@[.\\w]+\\b(?!:)",
          "name": "entity.name.type.annotation.kotlin"
        },
        "annotation-site": {
          "begin": "(?<!\\w)(@\\w+):\\s*(?!\\[)",
          "beginCaptures": {
            "1": {
              "name": "entity.name.type.annotation-site.kotlin"
            }
          },
          "end": "$",
          "patterns": [
            {
              "include": "#unescaped-annotation"
            }
          ]
        },
        "annotation-site-list": {
          "begin": "(?<!\\w)(@\\w+):\\s*\\[",
          "beginCaptures": {
            "1": {
              "name": "entity.name.type.annotation-site.kotlin"
            }
          },
          "end": "]",
          "patterns": [
            {
              "include": "#unescaped-annotation"
            }
          ]
        },
        "binary-literal": {
          "match": "0([Bb])[01][01_]*",
          "name": "constant.numeric.binary.kotlin"
        },
        "boolean-literal": {
          "match": "\\b(true|false)\\b",
          "name": "constant.language.boolean.kotlin"
        },
        "character": {
          "begin": "'",
          "end": "'",
          "name": "string.quoted.single.kotlin",
          "patterns": [
            {
              "match": "\\\\.",
              "name": "constant.character.escape.kotlin"
            }
          ]
        },
        "class-declaration": {
          "captures": {
            "1": {
              "name": "keyword.hard.class.kotlin"
            },
            "2": {
              "name": "entity.name.type.class.kotlin"
            },
            "3": {
              "patterns": [
                {
                  "include": "#type-parameter"
                }
              ]
            }
          },
          "match": "\\b(class|(?:fun\\s+)?interface)\\s+(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?"
        },
        "code": {
          "patterns": [
            {
              "include": "#comments"
            },
            {
              "include": "#keywords"
            },
            {
              "include": "#annotation-simple"
            },
            {
              "include": "#annotation-site-list"
            },
            {
              "include": "#annotation-site"
            },
            {
              "include": "#class-declaration"
            },
            {
              "include": "#object"
            },
            {
              "include": "#type-alias"
            },
            {
              "include": "#function"
            },
            {
              "include": "#variable-declaration"
            },
            {
              "include": "#type-constraint"
            },
            {
              "include": "#type-annotation"
            },
            {
              "include": "#function-call"
            },
            {
              "include": "#method-reference"
            },
            {
              "include": "#key"
            },
            {
              "include": "#string"
            },
            {
              "include": "#string-empty"
            },
            {
              "include": "#string-multiline"
            },
            {
              "include": "#character"
            },
            {
              "include": "#lambda-arrow"
            },
            {
              "include": "#operators"
            },
            {
              "include": "#self-reference"
            },
            {
              "include": "#decimal-literal"
            },
            {
              "include": "#hex-literal"
            },
            {
              "include": "#binary-literal"
            },
            {
              "include": "#boolean-literal"
            },
            {
              "include": "#null-literal"
            }
          ]
        },
        "comment-block": {
          "begin": "/\\*(?!\\*)",
          "end": "\\*/",
          "name": "comment.block.kotlin"
        },
        "comment-javadoc": {
          "patterns": [
            {
              "begin": "/\\*\\*",
              "end": "\\*/",
              "name": "comment.block.javadoc.kotlin",
              "patterns": [
                {
                  "match": "@(return|constructor|receiver|sample|see|author|since|suppress)\\b",
                  "name": "keyword.other.documentation.javadoc.kotlin"
                },
                {
                  "captures": {
                    "1": {
                      "name": "keyword.other.documentation.javadoc.kotlin"
                    },
                    "2": {
                      "name": "variable.parameter.kotlin"
                    }
                  },
                  "match": "(@p(?:aram|roperty))\\s+(\\S+)"
                },
                {
                  "captures": {
                    "1": {
                      "name": "keyword.other.documentation.javadoc.kotlin"
                    },
                    "2": {
                      "name": "variable.parameter.kotlin"
                    }
                  },
                  "match": "(@param)\\[(\\S+)]"
                },
                {
                  "captures": {
                    "1": {
                      "name": "keyword.other.documentation.javadoc.kotlin"
                    },
                    "2": {
                      "name": "entity.name.type.class.kotlin"
                    }
                  },
                  "match": "(@(?:exception|throws))\\s+(\\S+)"
                },
                {
                  "captures": {
                    "1": {
                      "name": "keyword.other.documentation.javadoc.kotlin"
                    },
                    "2": {
                      "name": "entity.name.type.class.kotlin"
                    },
                    "3": {
                      "name": "variable.parameter.kotlin"
                    }
                  },
                  "match": "\\{(@link)\\s+(\\S+)?#([$\\w]+\\s*\\([^()]*\\)).*}"
                }
              ]
            }
          ]
        },
        "comment-line": {
          "begin": "//",
          "end": "$",
          "name": "comment.line.double-slash.kotlin"
        },
        "comments": {
          "patterns": [
            {
              "include": "#comment-line"
            },
            {
              "include": "#comment-block"
            },
            {
              "include": "#comment-javadoc"
            }
          ]
        },
        "control-keywords": {
          "match": "\\b(if|else|while|do|when|try|throw|break|continue|return|for)\\b",
          "name": "keyword.control.kotlin"
        },
        "decimal-literal": {
          "match": "\\b\\d[_\\d]*(\\.[_\\d]+)?(([Ee])\\d+)?([Uu])?([FLf])?\\b",
          "name": "constant.numeric.decimal.kotlin"
        },
        "function": {
          "captures": {
            "1": {
              "name": "keyword.hard.fun.kotlin"
            },
            "2": {
              "patterns": [
                {
                  "include": "#type-parameter"
                }
              ]
            },
            "4": {
              "name": "entity.name.type.class.extension.kotlin"
            },
            "5": {
              "name": "entity.name.function.declaration.kotlin"
            }
          },
          "match": "\\b(fun)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?:(?:(\\w+)\\.)?(\\b\\w+\\b|`[^`]+`))?"
        },
        "function-call": {
          "captures": {
            "1": {
              "name": "entity.name.function.call.kotlin"
            },
            "2": {
              "patterns": [
                {
                  "include": "#type-parameter"
                }
              ]
            }
          },
          "match": "\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])"
        },
        "hard-keywords": {
          "match": "\\b(as|typeof|is|in)\\b",
          "name": "keyword.hard.kotlin"
        },
        "hex-literal": {
          "match": "0([Xx])\\h[_\\h]*([Uu])?",
          "name": "constant.numeric.hex.kotlin"
        },
        "import": {
          "begin": "\\b(import)\\b\\s*",
          "beginCaptures": {
            "1": {
              "name": "keyword.soft.kotlin"
            }
          },
          "contentName": "entity.name.package.kotlin",
          "end": ";|$",
          "name": "meta.import.kotlin",
          "patterns": [
            {
              "include": "#comments"
            },
            {
              "include": "#hard-keywords"
            },
            {
              "match": "\\*",
              "name": "variable.language.wildcard.kotlin"
            }
          ]
        },
        "key": {
          "captures": {
            "1": {
              "name": "variable.parameter.kotlin"
            },
            "2": {
              "name": "keyword.operator.assignment.kotlin"
            }
          },
          "match": "\\b(\\w=)\\s*(=)"
        },
        "keywords": {
          "patterns": [
            {
              "include": "#prefix-modifiers"
            },
            {
              "include": "#postfix-modifiers"
            },
            {
              "include": "#soft-keywords"
            },
            {
              "include": "#hard-keywords"
            },
            {
              "include": "#control-keywords"
            }
          ]
        },
        "lambda-arrow": {
          "match": "->",
          "name": "storage.type.function.arrow.kotlin"
        },
        "method-reference": {
          "captures": {
            "1": {
              "name": "entity.name.function.reference.kotlin"
            }
          },
          "match": "\\??::(\\b\\w+\\b|`[^`]+`)"
        },
        "null-literal": {
          "match": "\\bnull\\b",
          "name": "constant.language.null.kotlin"
        },
        "object": {
          "captures": {
            "1": {
              "name": "keyword.hard.object.kotlin"
            },
            "2": {
              "name": "entity.name.type.object.kotlin"
            }
          },
          "match": "\\b(object)(?:\\s+(\\b\\w+\\b|`[^`]+`))?"
        },
        "operators": {
          "patterns": [
            {
              "match": "(===?|!==?|<=|>=|[<>])",
              "name": "keyword.operator.comparison.kotlin"
            },
            {
              "match": "([-%*+/]=)",
              "name": "keyword.operator.assignment.arithmetic.kotlin"
            },
            {
              "match": "(=)",
              "name": "keyword.operator.assignment.kotlin"
            },
            {
              "match": "([-%*+/])",
              "name": "keyword.operator.arithmetic.kotlin"
            },
            {
              "match": "(!|&&|\\|\\|)",
              "name": "keyword.operator.logical.kotlin"
            },
            {
              "match": "(--|\\+\\+)",
              "name": "keyword.operator.increment-decrement.kotlin"
            },
            {
              "match": "(\\.\\.)",
              "name": "keyword.operator.range.kotlin"
            }
          ]
        },
        "package": {
          "begin": "\\b(package)\\b\\s*",
          "beginCaptures": {
            "1": {
              "name": "keyword.hard.package.kotlin"
            }
          },
          "contentName": "entity.name.package.kotlin",
          "end": ";|$",
          "name": "meta.package.kotlin",
          "patterns": [
            {
              "include": "#comments"
            }
          ]
        },
        "postfix-modifiers": {
          "match": "\\b(where|by|get|set)\\b",
          "name": "storage.modifier.other.kotlin"
        },
        "prefix-modifiers": {
          "match": "\\b(abstract|final|enum|open|annotation|sealed|data|override|final|lateinit|private|protected|public|internal|inner|companion|noinline|crossinline|vararg|reified|tailrec|operator|infix|inline|external|const|suspend|value)\\b",
          "name": "storage.modifier.other.kotlin"
        },
        "self-reference": {
          "match": "\\b(this|super)(@\\w+)?\\b",
          "name": "variable.language.this.kotlin"
        },
        "soft-keywords": {
          "match": "\\b(init|catch|finally|field)\\b",
          "name": "keyword.soft.kotlin"
        },
        "string": {
          "begin": "(?<!\")\"(?!\")",
          "end": "\"",
          "name": "string.quoted.double.kotlin",
          "patterns": [
            {
              "match": "\\\\.",
              "name": "constant.character.escape.kotlin"
            },
            {
              "include": "#string-escape-simple"
            },
            {
              "include": "#string-escape-bracketed"
            }
          ]
        },
        "string-empty": {
          "match": "(?<!\")\"\"(?!\")",
          "name": "string.quoted.double.kotlin"
        },
        "string-escape-bracketed": {
          "begin": "(?<!\\\\)(\\$\\{)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.template-expression.begin"
            }
          },
          "end": "(})",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.template-expression.end"
            }
          },
          "name": "meta.template.expression.kotlin",
          "patterns": [
            {
              "include": "#code"
            }
          ]
        },
        "string-escape-simple": {
          "match": "(?<!\\\\)\\$\\w+\\b",
          "name": "variable.string-escape.kotlin"
        },
        "string-multiline": {
          "begin": "\"\"\"",
          "end": "\"\"\"",
          "name": "string.quoted.double.kotlin",
          "patterns": [
            {
              "match": "\\\\.",
              "name": "constant.character.escape.kotlin"
            },
            {
              "include": "#string-escape-simple"
            },
            {
              "include": "#string-escape-bracketed"
            }
          ]
        },
        "type-alias": {
          "captures": {
            "1": {
              "name": "keyword.hard.typealias.kotlin"
            },
            "2": {
              "name": "entity.name.type.kotlin"
            },
            "3": {
              "patterns": [
                {
                  "include": "#type-parameter"
                }
              ]
            }
          },
          "match": "\\b(typealias)\\s+(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?"
        },
        "type-annotation": {
          "captures": {
            "0": {
              "patterns": [
                {
                  "include": "#type-parameter"
                }
              ]
            }
          },
          "match": "(?<![:?]):\\s*([?\\w\\s]|->|(?<GROUP>[(<]([^\"'()<>]|\\g<GROUP>)+[)>]))+"
        },
        "type-parameter": {
          "patterns": [
            {
              "match": "\\b\\w+\\b",
              "name": "entity.name.type.kotlin"
            },
            {
              "match": "\\b(in|out)\\b",
              "name": "storage.modifier.kotlin"
            }
          ]
        },
        "unescaped-annotation": {
          "match": "\\b[.\\w]+\\b",
          "name": "entity.name.type.annotation.kotlin"
        },
        "variable-declaration": {
          "captures": {
            "1": {
              "name": "keyword.hard.kotlin"
            },
            "2": {
              "patterns": [
                {
                  "include": "#type-parameter"
                }
              ]
            }
          },
          "match": "\\b(va[lr])\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?"
        }
      },
      "scopeName": "source.kotlin"
    },
    "go": {
      "displayName": "Go",
      "name": "go",
      "patterns": [
        {
          "include": "#statements"
        }
      ],
      "repository": {
        "after_control_variables": {
          "captures": {
            "1": {
              "patterns": [
                {
                  "include": "#type-declarations-without-brackets"
                },
                {
                  "match": "\\[",
                  "name": "punctuation.definition.begin.bracket.square.go"
                },
                {
                  "match": "]",
                  "name": "punctuation.definition.end.bracket.square.go"
                },
                {
                  "match": "\\w+",
                  "name": "variable.other.go"
                }
              ]
            }
          },
          "match": "(?<=\\brange\\b|;|\\bif\\b|\\bfor\\b|[<>]|<=|>=|==|!=|\\w[-%*+/]|\\w[-%*+/]=|\\|\\||&&)\\s*((?![]\\[]+)[-\\]!%*+./:<=>\\[_[:alnum:]]+)\\s*(?=\\{)"
        },
        "brackets": {
          "patterns": [
            {
              "begin": "\\{",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.begin.bracket.curly.go"
                }
              },
              "end": "}",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.curly.go"
                }
              },
              "patterns": [
                {
                  "include": "$self"
                }
              ]
            },
            {
              "begin": "\\(",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.begin.bracket.round.go"
                }
              },
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "include": "$self"
                }
              ]
            },
            {
              "begin": "\\[",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.begin.bracket.square.go"
                }
              },
              "end": "]",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.square.go"
                }
              },
              "patterns": [
                {
                  "include": "$self"
                }
              ]
            }
          ]
        },
        "built_in_functions": {
          "patterns": [
            {
              "match": "\\b(append|cap|close|complex|copy|delete|imag|len|panic|print|println|real|recover|min|max|clear)\\b(?=\\()",
              "name": "entity.name.function.support.builtin.go"
            },
            {
              "begin": "\\b(new)\\b(\\()",
              "beginCaptures": {
                "1": {
                  "name": "entity.name.function.support.builtin.go"
                },
                "2": {
                  "name": "punctuation.definition.begin.bracket.round.go"
                }
              },
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "include": "#functions"
                },
                {
                  "include": "#struct_variables_types"
                },
                {
                  "include": "#type-declarations"
                },
                {
                  "include": "#generic_types"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.type.go"
                },
                {
                  "include": "$self"
                }
              ]
            },
            {
              "begin": "\\b(make)\\b(\\()((?:(?:[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+(?:\\([^)]+\\))?)?[]*\\[]+{0,1}(?:(?!\\bmap\\b)[.\\w]+)?(\\[(?:\\S+(?:,\\s*\\S+)*)?])?,?)?",
              "beginCaptures": {
                "1": {
                  "name": "entity.name.function.support.builtin.go"
                },
                "2": {
                  "name": "punctuation.definition.begin.bracket.round.go"
                },
                "3": {
                  "patterns": [
                    {
                      "include": "#type-declarations-without-brackets"
                    },
                    {
                      "include": "#parameter-variable-types"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "include": "$self"
                }
              ]
            }
          ]
        },
        "comments": {
          "patterns": [
            {
              "begin": "(/\\*)",
              "beginCaptures": {
                "1": {
                  "name": "punctuation.definition.comment.go"
                }
              },
              "end": "(\\*/)",
              "endCaptures": {
                "1": {
                  "name": "punctuation.definition.comment.go"
                }
              },
              "name": "comment.block.go"
            },
            {
              "begin": "(//)",
              "beginCaptures": {
                "1": {
                  "name": "punctuation.definition.comment.go"
                }
              },
              "end": "\\n|$",
              "name": "comment.line.double-slash.go"
            }
          ]
        },
        "const_assignment": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#delimiters"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.other.constant.go"
                    }
                  ]
                },
                "2": {
                  "patterns": [
                    {
                      "include": "#type-declarations-without-brackets"
                    },
                    {
                      "include": "#generic_types"
                    },
                    {
                      "match": "\\(",
                      "name": "punctuation.definition.begin.bracket.round.go"
                    },
                    {
                      "match": "\\)",
                      "name": "punctuation.definition.end.bracket.round.go"
                    },
                    {
                      "match": "\\[",
                      "name": "punctuation.definition.begin.bracket.square.go"
                    },
                    {
                      "match": "]",
                      "name": "punctuation.definition.end.bracket.square.go"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "match": "(?<=\\bconst\\b)\\s*\\b([.\\w]+(?:,\\s*[.\\w]+)*)\\s*((?:(?:[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+(?:\\([^)]+\\))?)?(?![]*\\[]+{0,1}\\b(?:struct|func|map)\\b)(?:[]*.\\[\\w]+(?:,\\s*[]*.\\[\\w]+)*)?\\s*=?)?"
            },
            {
              "begin": "(?<=\\bconst\\b)\\s*(\\()",
              "beginCaptures": {
                "1": {
                  "name": "punctuation.definition.begin.bracket.round.go"
                }
              },
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "captures": {
                    "1": {
                      "patterns": [
                        {
                          "include": "#delimiters"
                        },
                        {
                          "match": "\\w+",
                          "name": "variable.other.constant.go"
                        }
                      ]
                    },
                    "2": {
                      "patterns": [
                        {
                          "include": "#type-declarations-without-brackets"
                        },
                        {
                          "include": "#generic_types"
                        },
                        {
                          "match": "\\(",
                          "name": "punctuation.definition.begin.bracket.round.go"
                        },
                        {
                          "match": "\\)",
                          "name": "punctuation.definition.end.bracket.round.go"
                        },
                        {
                          "match": "\\[",
                          "name": "punctuation.definition.begin.bracket.square.go"
                        },
                        {
                          "match": "]",
                          "name": "punctuation.definition.end.bracket.square.go"
                        },
                        {
                          "match": "\\w+",
                          "name": "entity.name.type.go"
                        }
                      ]
                    }
                  },
                  "match": "^\\s*\\b([.\\w]+(?:,\\s*[.\\w]+)*)\\s*((?:(?:[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+(?:\\([^)]+\\))?)?(?![]*\\[]+{0,1}\\b(?:struct|func|map)\\b)(?:[]*.\\[\\w]+(?:,\\s*[]*.\\[\\w]+)*)?\\s*=?)?"
                },
                {
                  "include": "$self"
                }
              ]
            }
          ]
        },
        "delimiters": {
          "patterns": [
            {
              "match": ",",
              "name": "punctuation.other.comma.go"
            },
            {
              "match": "\\.(?!\\.\\.)",
              "name": "punctuation.other.period.go"
            },
            {
              "match": ":(?!=)",
              "name": "punctuation.other.colon.go"
            }
          ]
        },
        "double_parentheses_types": {
          "captures": {
            "1": {
              "patterns": [
                {
                  "include": "#type-declarations-without-brackets"
                },
                {
                  "match": "\\(",
                  "name": "punctuation.definition.begin.bracket.round.go"
                },
                {
                  "match": "\\)",
                  "name": "punctuation.definition.end.bracket.round.go"
                },
                {
                  "match": "\\[",
                  "name": "punctuation.definition.begin.bracket.square.go"
                },
                {
                  "match": "]",
                  "name": "punctuation.definition.end.bracket.square.go"
                },
                {
                  "match": "\\{",
                  "name": "punctuation.definition.begin.bracket.curly.go"
                },
                {
                  "match": "}",
                  "name": "punctuation.definition.end.bracket.curly.go"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.type.go"
                }
              ]
            }
          },
          "match": "(?<!\\w)(\\([]*\\[]+{0,1}[.\\w]+(?:\\[(?:[]*.\\[{}\\w]+(?:,\\s*[]*.\\[{}\\w]+)*)?])?\\))(?=\\()"
        },
        "function_declaration": {
          "begin": "^\\b(func)\\b\\s*(\\([^)]+\\)\\s*)?(?:(\\w+)(?=[(\\[]))?",
          "beginCaptures": {
            "1": {
              "name": "keyword.function.go"
            },
            "2": {
              "patterns": [
                {
                  "begin": "\\(",
                  "beginCaptures": {
                    "0": {
                      "name": "punctuation.definition.begin.bracket.round.go"
                    }
                  },
                  "end": "\\)",
                  "endCaptures": {
                    "0": {
                      "name": "punctuation.definition.end.bracket.round.go"
                    }
                  },
                  "patterns": [
                    {
                      "captures": {
                        "1": {
                          "name": "variable.parameter.go"
                        },
                        "2": {
                          "patterns": [
                            {
                              "include": "#type-declarations-without-brackets"
                            },
                            {
                              "include": "#parameter-variable-types"
                            },
                            {
                              "match": "\\w+",
                              "name": "entity.name.type.go"
                            }
                          ]
                        }
                      },
                      "match": "(\\w+\\s+)?([*.\\w]+(?:\\[(?:[*.\\w]+(?:,\\s+)?)+{0,1}])?)"
                    },
                    {
                      "include": "$self"
                    }
                  ]
                }
              ]
            },
            "3": {
              "patterns": [
                {
                  "match": "\\d\\w*",
                  "name": "invalid.illegal.identifier.go"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.function.go"
                }
              ]
            }
          },
          "end": "(?<=\\))\\s*((?:[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+{0,1}(?![]*\\[]+{0,1}\\b(?:struct|interface)\\b)[-\\]*.\\[\\w]+)?\\s*(?=\\{)",
          "endCaptures": {
            "1": {
              "patterns": [
                {
                  "include": "#type-declarations-without-brackets"
                },
                {
                  "include": "#parameter-variable-types"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.type.go"
                }
              ]
            }
          },
          "patterns": [
            {
              "begin": "\\(",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.begin.bracket.round.go"
                }
              },
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "include": "#function_param_types"
                }
              ]
            },
            {
              "begin": "([*.\\w]+)?(\\[)",
              "beginCaptures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                },
                "2": {
                  "name": "punctuation.definition.begin.bracket.square.go"
                }
              },
              "end": "]",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.square.go"
                }
              },
              "patterns": [
                {
                  "include": "#generic_param_types"
                }
              ]
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations-without-brackets"
                    },
                    {
                      "include": "#parameter-variable-types"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "match": "(?<=\\))\\s*((?:\\s*[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+{0,1}[-\\]*.<>\\[\\w]+\\s*(?:/[*/].*)?)$"
            },
            {
              "include": "$self"
            }
          ]
        },
        "function_param_types": {
          "patterns": [
            {
              "include": "#struct_variables_types"
            },
            {
              "include": "#interface_variables_types"
            },
            {
              "include": "#type-declarations-without-brackets"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.parameter.go"
                    }
                  ]
                }
              },
              "match": "((?:\\b\\w+,\\s*)+{0,1}\\b\\w+)\\s+(?=(?:\\s*[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+{0,1}[]*\\[]+{0,1}\\b(?:struct|interface)\\b\\s*\\{)"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.parameter.go"
                    }
                  ]
                }
              },
              "match": "(?:(?<=\\()|^\\s*)((?:\\b\\w+,\\s*)+(?:/[*/].*)?)$"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#delimiters"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.parameter.go"
                    }
                  ]
                },
                "2": {
                  "patterns": [
                    {
                      "include": "#type-declarations-without-brackets"
                    },
                    {
                      "include": "#parameter-variable-types"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "match": "((?:\\b\\w+,\\s*)+{0,1}\\b\\w+)\\s+((?:\\s*[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+{0,1}(?:[]*.\\[\\w]+{0,1}(?:\\bfunc\\b\\([^)]+{0,1}\\)(?:\\s*[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+{0,1}\\s*)+(?:[]*.\\[\\w]+|\\([^)]+{0,1}\\))?|(?:[]*\\[]+{0,1}[*.\\w]+(?:\\[[^]]+])?[*.\\w]+{0,1})+))"
            },
            {
              "begin": "([*.\\w]+)?(\\[)",
              "beginCaptures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                },
                "2": {
                  "name": "punctuation.definition.begin.bracket.square.go"
                }
              },
              "end": "]",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.square.go"
                }
              },
              "patterns": [
                {
                  "include": "#generic_param_types"
                }
              ]
            },
            {
              "begin": "\\(",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.begin.bracket.round.go"
                }
              },
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "include": "#function_param_types"
                }
              ]
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "match": "([.\\w]+)"
            },
            {
              "include": "$self"
            }
          ]
        },
        "functions": {
          "begin": "\\b(func)\\b(?=\\()",
          "beginCaptures": {
            "1": {
              "name": "keyword.function.go"
            }
          },
          "end": "(?<=\\))(\\s*(?:[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+)?(\\s*(?:[]*\\[]+{0,1}[*.\\w]+)?(?:\\[(?:[*.\\w]+{0,1}(?:\\[[^]]+{0,1}])?(?:,\\s+)?)+]|\\([^)]+{0,1}\\))?[*.\\w]+{0,1}\\s*(?=\\{)|\\s*(?:[]*\\[]+{0,1}(?!\\bfunc\\b)[*.\\w]+(?:\\[(?:[*.\\w]+{0,1}(?:\\[[^]]+{0,1}])?(?:,\\s+)?)+])?[*.\\w]+{0,1}|\\([^)]+{0,1}\\)))?",
          "endCaptures": {
            "1": {
              "patterns": [
                {
                  "include": "#type-declarations"
                }
              ]
            },
            "2": {
              "patterns": [
                {
                  "include": "#type-declarations-without-brackets"
                },
                {
                  "include": "#parameter-variable-types"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.type.go"
                }
              ]
            }
          },
          "patterns": [
            {
              "include": "#parameter-variable-types"
            }
          ]
        },
        "functions_inline": {
          "captures": {
            "1": {
              "name": "keyword.function.go"
            },
            "2": {
              "patterns": [
                {
                  "include": "#type-declarations-without-brackets"
                },
                {
                  "begin": "\\(",
                  "beginCaptures": {
                    "0": {
                      "name": "punctuation.definition.begin.bracket.round.go"
                    }
                  },
                  "end": "\\)",
                  "endCaptures": {
                    "0": {
                      "name": "punctuation.definition.end.bracket.round.go"
                    }
                  },
                  "patterns": [
                    {
                      "include": "#function_param_types"
                    },
                    {
                      "include": "$self"
                    }
                  ]
                },
                {
                  "match": "\\[",
                  "name": "punctuation.definition.begin.bracket.square.go"
                },
                {
                  "match": "]",
                  "name": "punctuation.definition.end.bracket.square.go"
                },
                {
                  "match": "\\{",
                  "name": "punctuation.definition.begin.bracket.curly.go"
                },
                {
                  "match": "}",
                  "name": "punctuation.definition.end.bracket.curly.go"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.type.go"
                }
              ]
            }
          },
          "match": "\\b(func)\\b(\\([^/]*?\\)\\s+\\([^/]*?\\))\\s+(?=\\{)"
        },
        "generic_param_types": {
          "patterns": [
            {
              "include": "#struct_variables_types"
            },
            {
              "include": "#interface_variables_types"
            },
            {
              "include": "#type-declarations-without-brackets"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.parameter.go"
                    }
                  ]
                }
              },
              "match": "((?:\\b\\w+,\\s*)+{0,1}\\b\\w+)\\s+(?=(?:\\s*[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+{0,1}[]*\\[]+{0,1}\\b(?:struct|interface)\\b\\s*\\{)"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.parameter.go"
                    }
                  ]
                }
              },
              "match": "(?:(?<=\\()|^\\s*)((?:\\b\\w+,\\s*)+(?:/[*/].*)?)$"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#delimiters"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.parameter.go"
                    }
                  ]
                },
                "2": {
                  "patterns": [
                    {
                      "include": "#type-declarations-without-brackets"
                    },
                    {
                      "include": "#parameter-variable-types"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                },
                "3": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "match": "((?:\\b\\w+,\\s*)+{0,1}\\b\\w+)\\s+((?:\\s*[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+{0,1}(?:[]*.\\[\\w]+{0,1}(?:\\bfunc\\b\\([^)]+{0,1}\\)(?:\\s*[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+{0,1}\\s*)+(?:[*.\\w]+|\\([^)]+{0,1}\\))?|(?:(?:[*.~\\w]+|\\[(?:[*.\\w]+{0,1}(?:\\[[^]]+{0,1}])?(?:,\\s+)?)+])[*.\\w]+{0,1})+))"
            },
            {
              "begin": "([*.\\w]+)?(\\[)",
              "beginCaptures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                },
                "2": {
                  "name": "punctuation.definition.begin.bracket.square.go"
                }
              },
              "end": "]",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.square.go"
                }
              },
              "patterns": [
                {
                  "include": "#generic_param_types"
                }
              ]
            },
            {
              "begin": "\\(",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.begin.bracket.round.go"
                }
              },
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "include": "#function_param_types"
                }
              ]
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "match": "\\b([.\\w]+)"
            },
            {
              "include": "$self"
            }
          ]
        },
        "generic_types": {
          "captures": {
            "1": {
              "patterns": [
                {
                  "include": "#type-declarations"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.type.go"
                }
              ]
            },
            "2": {
              "patterns": [
                {
                  "include": "#parameter-variable-types"
                }
              ]
            }
          },
          "match": "([*.\\w]+)(\\[[^]]+{0,1}])"
        },
        "group-functions": {
          "patterns": [
            {
              "include": "#function_declaration"
            },
            {
              "include": "#functions_inline"
            },
            {
              "include": "#functions"
            },
            {
              "include": "#built_in_functions"
            },
            {
              "include": "#support_functions"
            }
          ]
        },
        "group-types": {
          "patterns": [
            {
              "include": "#other_struct_interface_expressions"
            },
            {
              "include": "#type_assertion_inline"
            },
            {
              "include": "#struct_variables_types"
            },
            {
              "include": "#interface_variables_types"
            },
            {
              "include": "#single_type"
            },
            {
              "include": "#multi_types"
            },
            {
              "include": "#struct_interface_declaration"
            },
            {
              "include": "#double_parentheses_types"
            },
            {
              "include": "#switch_types"
            },
            {
              "include": "#type-declarations"
            }
          ]
        },
        "group-variables": {
          "patterns": [
            {
              "include": "#const_assignment"
            },
            {
              "include": "#var_assignment"
            },
            {
              "include": "#variable_assignment"
            },
            {
              "include": "#label_loop_variables"
            },
            {
              "include": "#slice_index_variables"
            },
            {
              "include": "#property_variables"
            },
            {
              "include": "#switch_variables"
            },
            {
              "include": "#other_variables"
            }
          ]
        },
        "hover": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.other.property.go"
                    }
                  ]
                },
                "2": {
                  "patterns": [
                    {
                      "match": "\\binvalid\\b\\s+\\btype\\b",
                      "name": "invalid.field.go"
                    },
                    {
                      "include": "#type-declarations-without-brackets"
                    },
                    {
                      "include": "#parameter-variable-types"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "match": "(?<=^\\bfield\\b)\\s+([*.\\w]+)\\s+([\\s\\S]+)"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations-without-brackets"
                    },
                    {
                      "include": "#parameter-variable-types"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "match": "(?<=^\\breturns\\b)\\s+([\\s\\S]+)"
            }
          ]
        },
        "import": {
          "patterns": [
            {
              "begin": "\\b(import)\\s+",
              "beginCaptures": {
                "1": {
                  "name": "keyword.control.import.go"
                }
              },
              "end": "(?!\\G)",
              "patterns": [
                {
                  "include": "#imports"
                }
              ]
            }
          ]
        },
        "imports": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#delimiters"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.other.import.go"
                    }
                  ]
                },
                "2": {
                  "name": "string.quoted.double.go"
                },
                "3": {
                  "name": "punctuation.definition.string.begin.go"
                },
                "4": {
                  "name": "entity.name.import.go"
                },
                "5": {
                  "name": "punctuation.definition.string.end.go"
                }
              },
              "match": "(\\s*[.\\w]+)?\\s*((\")([^\"]*)(\"))"
            },
            {
              "begin": "\\(",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.imports.begin.bracket.round.go"
                }
              },
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.imports.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "include": "#comments"
                },
                {
                  "include": "#imports"
                }
              ]
            },
            {
              "include": "$self"
            }
          ]
        },
        "interface_variables_types": {
          "begin": "\\b(interface)\\b\\s*(\\{)",
          "beginCaptures": {
            "1": {
              "name": "keyword.interface.go"
            },
            "2": {
              "name": "punctuation.definition.begin.bracket.curly.go"
            }
          },
          "end": "}",
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.end.bracket.curly.go"
            }
          },
          "patterns": [
            {
              "include": "#interface_variables_types_field"
            },
            {
              "include": "$self"
            }
          ]
        },
        "interface_variables_types_field": {
          "patterns": [
            {
              "include": "#support_functions"
            },
            {
              "include": "#type-declarations-without-brackets"
            },
            {
              "begin": "([*.\\w]+)?(\\[)",
              "beginCaptures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                },
                "2": {
                  "name": "punctuation.definition.begin.bracket.square.go"
                }
              },
              "end": "]",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.square.go"
                }
              },
              "patterns": [
                {
                  "include": "#generic_param_types"
                }
              ]
            },
            {
              "begin": "\\(",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.begin.bracket.round.go"
                }
              },
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "include": "#function_param_types"
                }
              ]
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "match": "([.\\w]+)"
            }
          ]
        },
        "keywords": {
          "patterns": [
            {
              "match": "\\b(break|case|continue|default|defer|else|fallthrough|for|go|goto|if|range|return|select|switch)\\b",
              "name": "keyword.control.go"
            },
            {
              "match": "\\bchan\\b",
              "name": "keyword.channel.go"
            },
            {
              "match": "\\bconst\\b",
              "name": "keyword.const.go"
            },
            {
              "match": "\\bvar\\b",
              "name": "keyword.var.go"
            },
            {
              "match": "\\bfunc\\b",
              "name": "keyword.function.go"
            },
            {
              "match": "\\binterface\\b",
              "name": "keyword.interface.go"
            },
            {
              "match": "\\bmap\\b",
              "name": "keyword.map.go"
            },
            {
              "match": "\\bstruct\\b",
              "name": "keyword.struct.go"
            },
            {
              "match": "\\bimport\\b",
              "name": "keyword.control.import.go"
            },
            {
              "match": "\\btype\\b",
              "name": "keyword.type.go"
            }
          ]
        },
        "label_loop_variables": {
          "captures": {
            "1": {
              "patterns": [
                {
                  "include": "#type-declarations"
                },
                {
                  "match": "\\w+",
                  "name": "variable.other.label.go"
                }
              ]
            }
          },
          "match": "^(\\s*\\w+:\\s*|\\s*\\b(?:break|goto|continue)\\b\\s+\\w+(?:\\s*/[*/]\\s*.*)?)$"
        },
        "language_constants": {
          "captures": {
            "1": {
              "name": "constant.language.boolean.go"
            },
            "2": {
              "name": "constant.language.null.go"
            },
            "3": {
              "name": "constant.language.iota.go"
            }
          },
          "match": "\\b(?:(true|false)|(nil)|(iota))\\b"
        },
        "map_types": {
          "begin": "\\b(map)\\b(\\[)",
          "beginCaptures": {
            "1": {
              "name": "keyword.map.go"
            },
            "2": {
              "name": "punctuation.definition.begin.bracket.square.go"
            }
          },
          "end": "(])((?:[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+{0,1}(?![]*\\[]+{0,1}\\b(?:func|struct|map)\\b)[]*\\[]+{0,1}[.\\w]+(?:\\[(?:[]*.\\[{}\\w]+(?:,\\s*[]*.\\[{}\\w]+)*)?])?)?",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.end.bracket.square.go"
            },
            "2": {
              "patterns": [
                {
                  "include": "#type-declarations-without-brackets"
                },
                {
                  "match": "\\[",
                  "name": "punctuation.definition.begin.bracket.square.go"
                },
                {
                  "match": "]",
                  "name": "punctuation.definition.end.bracket.square.go"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.type.go"
                }
              ]
            }
          },
          "patterns": [
            {
              "include": "#type-declarations-without-brackets"
            },
            {
              "include": "#parameter-variable-types"
            },
            {
              "include": "#functions"
            },
            {
              "match": "\\[",
              "name": "punctuation.definition.begin.bracket.square.go"
            },
            {
              "match": "]",
              "name": "punctuation.definition.end.bracket.square.go"
            },
            {
              "match": "\\{",
              "name": "punctuation.definition.begin.bracket.curly.go"
            },
            {
              "match": "}",
              "name": "punctuation.definition.end.bracket.curly.go"
            },
            {
              "match": "\\(",
              "name": "punctuation.definition.begin.bracket.round.go"
            },
            {
              "match": "\\)",
              "name": "punctuation.definition.end.bracket.round.go"
            },
            {
              "match": "\\w+",
              "name": "entity.name.type.go"
            }
          ]
        },
        "multi_types": {
          "begin": "\\b(type)\\b\\s*(\\()",
          "beginCaptures": {
            "1": {
              "name": "keyword.type.go"
            },
            "2": {
              "name": "punctuation.definition.begin.bracket.round.go"
            }
          },
          "end": "\\)",
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.end.bracket.round.go"
            }
          },
          "patterns": [
            {
              "include": "#struct_variables_types"
            },
            {
              "include": "#interface_variables_types"
            },
            {
              "include": "#type-declarations-without-brackets"
            },
            {
              "include": "#parameter-variable-types"
            },
            {
              "match": "\\w+",
              "name": "entity.name.type.go"
            }
          ]
        },
        "numeric_literals": {
          "captures": {
            "0": {
              "patterns": [
                {
                  "begin": "(?=.)",
                  "end": "\\n|$",
                  "patterns": [
                    {
                      "captures": {
                        "1": {
                          "name": "constant.numeric.decimal.go",
                          "patterns": [
                            {
                              "match": "(?<=\\h)_(?=\\h)",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "2": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "3": {
                          "name": "constant.numeric.decimal.point.go"
                        },
                        "4": {
                          "name": "constant.numeric.decimal.go",
                          "patterns": [
                            {
                              "match": "(?<=\\h)_(?=\\h)",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "5": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "6": {
                          "name": "keyword.other.unit.exponent.decimal.go"
                        },
                        "7": {
                          "name": "keyword.operator.plus.exponent.decimal.go"
                        },
                        "8": {
                          "name": "keyword.operator.minus.exponent.decimal.go"
                        },
                        "9": {
                          "name": "constant.numeric.exponent.decimal.go",
                          "patterns": [
                            {
                              "match": "(?<=\\h)_(?=\\h)",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "10": {
                          "name": "keyword.other.unit.imaginary.go"
                        },
                        "11": {
                          "name": "constant.numeric.decimal.go",
                          "patterns": [
                            {
                              "match": "(?<=\\h)_(?=\\h)",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "12": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "13": {
                          "name": "keyword.other.unit.exponent.decimal.go"
                        },
                        "14": {
                          "name": "keyword.operator.plus.exponent.decimal.go"
                        },
                        "15": {
                          "name": "keyword.operator.minus.exponent.decimal.go"
                        },
                        "16": {
                          "name": "constant.numeric.exponent.decimal.go",
                          "patterns": [
                            {
                              "match": "(?<=\\h)_(?=\\h)",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "17": {
                          "name": "keyword.other.unit.imaginary.go"
                        },
                        "18": {
                          "name": "constant.numeric.decimal.point.go"
                        },
                        "19": {
                          "name": "constant.numeric.decimal.go",
                          "patterns": [
                            {
                              "match": "(?<=\\h)_(?=\\h)",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "20": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "21": {
                          "name": "keyword.other.unit.exponent.decimal.go"
                        },
                        "22": {
                          "name": "keyword.operator.plus.exponent.decimal.go"
                        },
                        "23": {
                          "name": "keyword.operator.minus.exponent.decimal.go"
                        },
                        "24": {
                          "name": "constant.numeric.exponent.decimal.go",
                          "patterns": [
                            {
                              "match": "(?<=\\h)_(?=\\h)",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "25": {
                          "name": "keyword.other.unit.imaginary.go"
                        },
                        "26": {
                          "name": "keyword.other.unit.hexadecimal.go"
                        },
                        "27": {
                          "name": "constant.numeric.hexadecimal.go",
                          "patterns": [
                            {
                              "match": "(?<=\\h)_(?=\\h)",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "28": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "29": {
                          "name": "constant.numeric.hexadecimal.go"
                        },
                        "30": {
                          "name": "constant.numeric.hexadecimal.go",
                          "patterns": [
                            {
                              "match": "(?<=\\h)_(?=\\h)",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "31": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "32": {
                          "name": "keyword.other.unit.exponent.hexadecimal.go"
                        },
                        "33": {
                          "name": "keyword.operator.plus.exponent.hexadecimal.go"
                        },
                        "34": {
                          "name": "keyword.operator.minus.exponent.hexadecimal.go"
                        },
                        "35": {
                          "name": "constant.numeric.exponent.hexadecimal.go",
                          "patterns": [
                            {
                              "match": "(?<=\\h)_(?=\\h)",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "36": {
                          "name": "keyword.other.unit.imaginary.go"
                        },
                        "37": {
                          "name": "keyword.other.unit.hexadecimal.go"
                        },
                        "38": {
                          "name": "constant.numeric.hexadecimal.go",
                          "patterns": [
                            {
                              "match": "(?<=\\h)_(?=\\h)",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "39": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "40": {
                          "name": "keyword.other.unit.exponent.hexadecimal.go"
                        },
                        "41": {
                          "name": "keyword.operator.plus.exponent.hexadecimal.go"
                        },
                        "42": {
                          "name": "keyword.operator.minus.exponent.hexadecimal.go"
                        },
                        "43": {
                          "name": "constant.numeric.exponent.hexadecimal.go",
                          "patterns": [
                            {
                              "match": "(?<=\\h)_(?=\\h)",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "44": {
                          "name": "keyword.other.unit.imaginary.go"
                        },
                        "45": {
                          "name": "keyword.other.unit.hexadecimal.go"
                        },
                        "46": {
                          "name": "constant.numeric.hexadecimal.go"
                        },
                        "47": {
                          "name": "constant.numeric.hexadecimal.go",
                          "patterns": [
                            {
                              "match": "(?<=\\h)_(?=\\h)",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "48": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "49": {
                          "name": "keyword.other.unit.exponent.hexadecimal.go"
                        },
                        "50": {
                          "name": "keyword.operator.plus.exponent.hexadecimal.go"
                        },
                        "51": {
                          "name": "keyword.operator.minus.exponent.hexadecimal.go"
                        },
                        "52": {
                          "name": "constant.numeric.exponent.hexadecimal.go",
                          "patterns": [
                            {
                              "match": "(?<=\\h)_(?=\\h)",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "53": {
                          "name": "keyword.other.unit.imaginary.go"
                        }
                      },
                      "match": "\\G(?:(?:(?:(?:(?:(?=[.0-9])(?!0[BOXbox])([0-9](?:[0-9]|((?<=\\h)_(?=\\h)))*)((?<=[0-9])\\.|\\.(?=[0-9]))([0-9](?:[0-9]|((?<=\\h)_(?=\\h)))*)?(?:(?<!_)([Ee])(\\+?)(-?)([0-9](?:[0-9]|(?<=\\h)_(?=\\h))*))?(i(?!\\w))?(?:\\n|$)|(?=[.0-9])(?!0[BOXbox])([0-9](?:[0-9]|((?<=\\h)_(?=\\h)))*)(?<!_)([Ee])(\\+?)(-?)([0-9](?:[0-9]|(?<=\\h)_(?=\\h))*)(i(?!\\w))?(?:\\n|$))|((?<=[0-9])\\.|\\.(?=[0-9]))([0-9](?:[0-9]|((?<=\\h)_(?=\\h)))*)(?:(?<!_)([Ee])(\\+?)(-?)([0-9](?:[0-9]|(?<=\\h)_(?=\\h))*))?(i(?!\\w))?(?:\\n|$))|(0[Xx])_?(\\h(?:\\h|((?<=\\h)_(?=\\h)))*)((?<=\\h)\\.|\\.(?=\\h))(\\h(?:\\h|((?<=\\h)_(?=\\h)))*)?(?<!_)([Pp])(\\+?)(-?)([0-9](?:[0-9]|(?<=\\h)_(?=\\h))*)(i(?!\\w))?(?:\\n|$))|(0[Xx])_?(\\h(?:\\h|((?<=\\h)_(?=\\h)))*)(?<!_)([Pp])(\\+?)(-?)([0-9](?:[0-9]|(?<=\\h)_(?=\\h))*)(i(?!\\w))?(?:\\n|$))|(0[Xx])((?<=\\h)\\.|\\.(?=\\h))(\\h(?:\\h|((?<=\\h)_(?=\\h)))*)(?<!_)([Pp])(\\+?)(-?)([0-9](?:[0-9]|(?<=\\h)_(?=\\h))*)(i(?!\\w))?(?:\\n|$))"
                    },
                    {
                      "captures": {
                        "1": {
                          "name": "constant.numeric.decimal.go",
                          "patterns": [
                            {
                              "match": "(?<=\\h)_(?=\\h)",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "2": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "3": {
                          "name": "keyword.other.unit.imaginary.go"
                        },
                        "4": {
                          "name": "keyword.other.unit.binary.go"
                        },
                        "5": {
                          "name": "constant.numeric.binary.go",
                          "patterns": [
                            {
                              "match": "(?<=\\h)_(?=\\h)",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "6": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "7": {
                          "name": "keyword.other.unit.imaginary.go"
                        },
                        "8": {
                          "name": "keyword.other.unit.octal.go"
                        },
                        "9": {
                          "name": "constant.numeric.octal.go",
                          "patterns": [
                            {
                              "match": "(?<=\\h)_(?=\\h)",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "10": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "11": {
                          "name": "keyword.other.unit.imaginary.go"
                        },
                        "12": {
                          "name": "keyword.other.unit.hexadecimal.go"
                        },
                        "13": {
                          "name": "constant.numeric.hexadecimal.go",
                          "patterns": [
                            {
                              "match": "(?<=\\h)_(?=\\h)",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "14": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "15": {
                          "name": "keyword.other.unit.imaginary.go"
                        }
                      },
                      "match": "\\G(?:(?:(?:(?=[.0-9])(?!0[BOXbox])([0-9](?:[0-9]|((?<=\\h)_(?=\\h)))*)(i(?!\\w))?(?:\\n|$)|(0[Bb])_?([01](?:[01]|((?<=\\h)_(?=\\h)))*)(i(?!\\w))?(?:\\n|$))|(0[Oo]?)_?((?:[0-7]|((?<=\\h)_(?=\\h)))+)(i(?!\\w))?(?:\\n|$))|(0[Xx])_?(\\h(?:\\h|((?<=\\h)_(?=\\h)))*)(i(?!\\w))?(?:\\n|$))"
                    },
                    {
                      "match": "(?:[.0-9A-Z_a-z]|(?<=[EPep])[-+])+",
                      "name": "invalid.illegal.constant.numeric.go"
                    }
                  ]
                }
              ]
            }
          },
          "match": "(?<!\\w)\\.?\\d(?:[.0-9A-Z_a-z]|(?<=[EPep])[-+])*"
        },
        "operators": {
          "patterns": [
            {
              "match": "(?<!\\w)[\\&*]+(?!\\d)(?=[]\\[\\w]|<-)",
              "name": "keyword.operator.address.go"
            },
            {
              "match": "<-",
              "name": "keyword.operator.channel.go"
            },
            {
              "match": "--",
              "name": "keyword.operator.decrement.go"
            },
            {
              "match": "\\+\\+",
              "name": "keyword.operator.increment.go"
            },
            {
              "match": "(==|!=|<=|>=|<(?!<)|>(?!>))",
              "name": "keyword.operator.comparison.go"
            },
            {
              "match": "(&&|\\|\\||!)",
              "name": "keyword.operator.logical.go"
            },
            {
              "match": "((?:|[-%*+/:^|]|<<|>>|&\\^?)=)",
              "name": "keyword.operator.assignment.go"
            },
            {
              "match": "([-%*+/])",
              "name": "keyword.operator.arithmetic.go"
            },
            {
              "match": "(&(?!\\^)|[\\^|]|&\\^|<<|>>|~)",
              "name": "keyword.operator.arithmetic.bitwise.go"
            },
            {
              "match": "\\.\\.\\.",
              "name": "keyword.operator.ellipsis.go"
            }
          ]
        },
        "other_struct_interface_expressions": {
          "patterns": [
            {
              "include": "#after_control_variables"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                },
                "2": {
                  "patterns": [
                    {
                      "include": "#type-declarations-without-brackets"
                    },
                    {
                      "match": "\\[",
                      "name": "punctuation.definition.begin.bracket.square.go"
                    },
                    {
                      "match": "]",
                      "name": "punctuation.definition.end.bracket.square.go"
                    },
                    {
                      "match": "\\{",
                      "name": "punctuation.definition.begin.bracket.curly.go"
                    },
                    {
                      "match": "}",
                      "name": "punctuation.definition.end.bracket.curly.go"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "match": "\\b(?!(?:struct|interface)\\b)([.\\w]+)(?<brackets>\\[(?:[^]\\[]|\\g<brackets>)*])?(?=\\{)"
            }
          ]
        },
        "other_variables": {
          "match": "\\w+",
          "name": "variable.other.go"
        },
        "package_name": {
          "patterns": [
            {
              "begin": "\\b(package)\\s+",
              "beginCaptures": {
                "1": {
                  "name": "keyword.package.go"
                }
              },
              "end": "(?!\\G)",
              "patterns": [
                {
                  "match": "\\d\\w*",
                  "name": "invalid.illegal.identifier.go"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.type.package.go"
                }
              ]
            }
          ]
        },
        "parameter-variable-types": {
          "patterns": [
            {
              "match": "\\{",
              "name": "punctuation.definition.begin.bracket.curly.go"
            },
            {
              "match": "}",
              "name": "punctuation.definition.end.bracket.curly.go"
            },
            {
              "begin": "([*.\\w]+)?(\\[)",
              "beginCaptures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                },
                "2": {
                  "name": "punctuation.definition.begin.bracket.square.go"
                }
              },
              "end": "]",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.square.go"
                }
              },
              "patterns": [
                {
                  "include": "#generic_param_types"
                }
              ]
            },
            {
              "begin": "\\(",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.begin.bracket.round.go"
                }
              },
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "include": "#function_param_types"
                }
              ]
            }
          ]
        },
        "property_variables": {
          "captures": {
            "1": {
              "patterns": [
                {
                  "include": "#type-declarations"
                },
                {
                  "match": "\\w+",
                  "name": "variable.other.property.go"
                }
              ]
            }
          },
          "match": "\\b([.\\w]+:(?!=))"
        },
        "raw_string_literals": {
          "begin": "`",
          "beginCaptures": {
            "0": {
              "name": "punctuation.definition.string.begin.go"
            }
          },
          "end": "`",
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.string.end.go"
            }
          },
          "name": "string.quoted.raw.go",
          "patterns": [
            {
              "include": "#string_placeholder"
            }
          ]
        },
        "runes": {
          "patterns": [
            {
              "begin": "'",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.string.begin.go"
                }
              },
              "end": "'",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.string.end.go"
                }
              },
              "name": "string.quoted.rune.go",
              "patterns": [
                {
                  "match": "\\G(\\\\([0-7]{3}|[\"'\\\\abfnrtv]|x\\h{2}|u\\h{4}|U\\h{8})|.)(?=')",
                  "name": "constant.other.rune.go"
                },
                {
                  "match": "[^']+",
                  "name": "invalid.illegal.unknown-rune.go"
                }
              ]
            }
          ]
        },
        "single_type": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "name": "keyword.type.go"
                },
                "2": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                },
                "3": {
                  "patterns": [
                    {
                      "begin": "\\(",
                      "beginCaptures": {
                        "0": {
                          "name": "punctuation.definition.begin.bracket.round.go"
                        }
                      },
                      "end": "\\)",
                      "endCaptures": {
                        "0": {
                          "name": "punctuation.definition.end.bracket.round.go"
                        }
                      },
                      "patterns": [
                        {
                          "include": "#function_param_types"
                        },
                        {
                          "include": "$self"
                        }
                      ]
                    },
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "include": "#generic_types"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "match": "^\\s*\\b(type)\\b\\s*([*.\\w]+)\\s+(?!(?:=\\s*)?[]*\\[]+{0,1}\\b(?:struct|interface)\\b)([\\s\\S]+)"
            },
            {
              "begin": "(?:^|\\s+)\\b(type)\\b\\s*([*.\\w]+)(?=\\[)",
              "beginCaptures": {
                "1": {
                  "name": "keyword.type.go"
                },
                "2": {
                  "patterns": [
                    {
                      "include": "#type-declarations-without-brackets"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "end": "(?<=])(\\s+(?:=\\s*)?(?:[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+{0,1}(?![]*\\[]+{0,1}\\b(?:struct|interface|func)\\b)[-\\]*.\\[\\w]+(?:,\\s*[]*.\\[\\w]+)*)?",
              "endCaptures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations-without-brackets"
                    },
                    {
                      "match": "\\[",
                      "name": "punctuation.definition.begin.bracket.square.go"
                    },
                    {
                      "match": "]",
                      "name": "punctuation.definition.end.bracket.square.go"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "patterns": [
                {
                  "include": "#struct_variables_types"
                },
                {
                  "include": "#type-declarations-without-brackets"
                },
                {
                  "include": "#parameter-variable-types"
                },
                {
                  "match": "\\[",
                  "name": "punctuation.definition.begin.bracket.square.go"
                },
                {
                  "match": "]",
                  "name": "punctuation.definition.end.bracket.square.go"
                },
                {
                  "match": "\\{",
                  "name": "punctuation.definition.begin.bracket.curly.go"
                },
                {
                  "match": "}",
                  "name": "punctuation.definition.end.bracket.curly.go"
                },
                {
                  "match": "\\(",
                  "name": "punctuation.definition.begin.bracket.round.go"
                },
                {
                  "match": "\\)",
                  "name": "punctuation.definition.end.bracket.round.go"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.type.go"
                }
              ]
            }
          ]
        },
        "slice_index_variables": {
          "captures": {
            "1": {
              "patterns": [
                {
                  "include": "#type-declarations"
                },
                {
                  "match": "\\w+",
                  "name": "variable.other.go"
                }
              ]
            }
          },
          "match": "(?<=\\w\\[)((?:\\b[-%\\&*+./<>|\\w]+:|:\\b[-%\\&*+./<>|\\w]+)(?:\\b[-%\\&*+./<>|\\w]+)?(?::\\b[-%\\&*+./<>|\\w]+)?)(?=])"
        },
        "statements": {
          "patterns": [
            {
              "include": "#package_name"
            },
            {
              "include": "#import"
            },
            {
              "include": "#syntax_errors"
            },
            {
              "include": "#group-functions"
            },
            {
              "include": "#group-types"
            },
            {
              "include": "#group-variables"
            },
            {
              "include": "#hover"
            }
          ]
        },
        "storage_types": {
          "patterns": [
            {
              "match": "\\bbool\\b",
              "name": "storage.type.boolean.go"
            },
            {
              "match": "\\bbyte\\b",
              "name": "storage.type.byte.go"
            },
            {
              "match": "\\berror\\b",
              "name": "storage.type.error.go"
            },
            {
              "match": "\\b(complex(64|128)|float(32|64)|u?int(8|16|32|64)?)\\b",
              "name": "storage.type.numeric.go"
            },
            {
              "match": "\\brune\\b",
              "name": "storage.type.rune.go"
            },
            {
              "match": "\\bstring\\b",
              "name": "storage.type.string.go"
            },
            {
              "match": "\\buintptr\\b",
              "name": "storage.type.uintptr.go"
            },
            {
              "match": "\\bany\\b",
              "name": "entity.name.type.any.go"
            },
            {
              "match": "\\bcomparable\\b",
              "name": "entity.name.type.comparable.go"
            }
          ]
        },
        "string_escaped_char": {
          "patterns": [
            {
              "match": "\\\\([0-7]{3}|[\"'\\\\abfnrtv]|x\\h{2}|u\\h{4}|U\\h{8})",
              "name": "constant.character.escape.go"
            },
            {
              "match": "\\\\[^\"'0-7Uabfnrtuvx]",
              "name": "invalid.illegal.unknown-escape.go"
            }
          ]
        },
        "string_literals": {
          "patterns": [
            {
              "begin": "\"",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.string.begin.go"
                }
              },
              "end": "\"",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.string.end.go"
                }
              },
              "name": "string.quoted.double.go",
              "patterns": [
                {
                  "include": "#string_escaped_char"
                },
                {
                  "include": "#string_placeholder"
                }
              ]
            }
          ]
        },
        "string_placeholder": {
          "patterns": [
            {
              "match": "%(\\[\\d+])?([- #+0]{0,2}((\\d+|\\*)?(\\.?(\\d+|\\*|(\\[\\d+])\\*?)?(\\[\\d+])?)?))?[%EFGTUXb-gopqstvwx]",
              "name": "constant.other.placeholder.go"
            }
          ]
        },
        "struct_interface_declaration": {
          "captures": {
            "1": {
              "name": "keyword.type.go"
            },
            "2": {
              "patterns": [
                {
                  "include": "#type-declarations"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.type.go"
                }
              ]
            }
          },
          "match": "^\\s*\\b(type)\\b\\s*([.\\w]+)"
        },
        "struct_variable_types_fields_multi": {
          "patterns": [
            {
              "begin": "\\b(\\w+(?:,\\s*\\b\\w+)*(?:\\s*[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+{0,1}\\s*[]*\\[]+{0,1})\\b(struct)\\b\\s*(\\{)",
              "beginCaptures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.other.property.go"
                    }
                  ]
                },
                "2": {
                  "name": "keyword.struct.go"
                },
                "3": {
                  "name": "punctuation.definition.begin.bracket.curly.go"
                }
              },
              "end": "}",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.curly.go"
                }
              },
              "patterns": [
                {
                  "include": "#struct_variables_types_fields"
                },
                {
                  "include": "$self"
                }
              ]
            },
            {
              "begin": "\\b(\\w+(?:,\\s*\\b\\w+)*(?:\\s*[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+{0,1}\\s*[]*\\[]+{0,1})\\b(interface)\\b\\s*(\\{)",
              "beginCaptures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.other.property.go"
                    }
                  ]
                },
                "2": {
                  "name": "keyword.interface.go"
                },
                "3": {
                  "name": "punctuation.definition.begin.bracket.curly.go"
                }
              },
              "end": "}",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.curly.go"
                }
              },
              "patterns": [
                {
                  "include": "#interface_variables_types_field"
                },
                {
                  "include": "$self"
                }
              ]
            },
            {
              "begin": "\\b(\\w+(?:,\\s*\\b\\w+)*(?:\\s*[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+{0,1}\\s*[]*\\[]+{0,1})\\b(func)\\b\\s*(\\()",
              "beginCaptures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.other.property.go"
                    }
                  ]
                },
                "2": {
                  "name": "keyword.function.go"
                },
                "3": {
                  "name": "punctuation.definition.begin.bracket.round.go"
                }
              },
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "include": "#function_param_types"
                },
                {
                  "include": "$self"
                }
              ]
            },
            {
              "include": "#parameter-variable-types"
            }
          ]
        },
        "struct_variables_types": {
          "begin": "\\b(struct)\\b\\s*(\\{)",
          "beginCaptures": {
            "1": {
              "name": "keyword.struct.go"
            },
            "2": {
              "name": "punctuation.definition.begin.bracket.curly.go"
            }
          },
          "end": "}",
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.end.bracket.curly.go"
            }
          },
          "patterns": [
            {
              "include": "#struct_variables_types_fields"
            },
            {
              "include": "$self"
            }
          ]
        },
        "struct_variables_types_fields": {
          "patterns": [
            {
              "include": "#struct_variable_types_fields_multi"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "match": "(?<=\\{)\\s*((?:\\s*[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+{0,1}[]*.\\[\\w]+)\\s*(?=})"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.other.property.go"
                    }
                  ]
                },
                "2": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "match": "(?<=\\{)\\s*((?:\\w+,\\s*)+{0,1}\\w+\\s+)((?:\\s*[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+{0,1}[]*.\\[\\w]+)\\s*(?=})"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "captures": {
                        "1": {
                          "patterns": [
                            {
                              "include": "#type-declarations"
                            },
                            {
                              "match": "\\w+",
                              "name": "variable.other.property.go"
                            }
                          ]
                        },
                        "2": {
                          "patterns": [
                            {
                              "include": "#type-declarations"
                            },
                            {
                              "match": "\\w+",
                              "name": "entity.name.type.go"
                            }
                          ]
                        }
                      },
                      "match": "((?:\\w+,\\s*)+{0,1}\\w+\\s+)?((?:\\s*[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+{0,1}[^/\\s]+;?)"
                    }
                  ]
                }
              },
              "match": "(?<=\\{)((?:\\s*(?:(?:\\w+,\\s*)+{0,1}\\w+\\s+)?(?:\\s*[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+{0,1}[^/\\s]+;?)+)\\s*(?=})"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "match": "((?:\\s*[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+{0,1}[*.\\w]+\\s*)(?:(?=[\"/`])|$)"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.other.property.go"
                    }
                  ]
                },
                "2": {
                  "patterns": [
                    {
                      "include": "#type-declarations-without-brackets"
                    },
                    {
                      "include": "#parameter-variable-types"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "match": "\\b(\\w+(?:\\s*,\\s*\\b\\w+)*)\\s*([^\"/`]+)"
            }
          ]
        },
        "support_functions": {
          "captures": {
            "1": {
              "name": "entity.name.function.support.go"
            },
            "2": {
              "patterns": [
                {
                  "include": "#type-declarations"
                },
                {
                  "match": "\\d\\w*",
                  "name": "invalid.illegal.identifier.go"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.function.support.go"
                }
              ]
            },
            "3": {
              "patterns": [
                {
                  "include": "#type-declarations-without-brackets"
                },
                {
                  "match": "\\[",
                  "name": "punctuation.definition.begin.bracket.square.go"
                },
                {
                  "match": "]",
                  "name": "punctuation.definition.end.bracket.square.go"
                },
                {
                  "match": "\\{",
                  "name": "punctuation.definition.begin.bracket.curly.go"
                },
                {
                  "match": "}",
                  "name": "punctuation.definition.end.bracket.curly.go"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.type.go"
                }
              ]
            }
          },
          "match": "(?:((?<=\\.)\\b\\w+)|\\b(\\w+))(?<brackets>\\[(?:[^]\\[]|\\g<brackets>)*])?(?=\\()"
        },
        "switch_types": {
          "begin": "(?<=\\bswitch\\b)\\s*(\\w+\\s*:=)?\\s*([-\\]%\\&(-+./<>\\[|\\w]+)(\\.\\(\\btype\\b\\)\\s*)(\\{)",
          "beginCaptures": {
            "1": {
              "patterns": [
                {
                  "include": "#operators"
                },
                {
                  "match": "\\w+",
                  "name": "variable.other.assignment.go"
                }
              ]
            },
            "2": {
              "patterns": [
                {
                  "include": "#support_functions"
                },
                {
                  "include": "#type-declarations"
                },
                {
                  "match": "\\w+",
                  "name": "variable.other.go"
                }
              ]
            },
            "3": {
              "patterns": [
                {
                  "include": "#delimiters"
                },
                {
                  "include": "#brackets"
                },
                {
                  "match": "\\btype\\b",
                  "name": "keyword.type.go"
                }
              ]
            },
            "4": {
              "name": "punctuation.definition.begin.bracket.curly.go"
            }
          },
          "end": "}",
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.end.bracket.curly.go"
            }
          },
          "patterns": [
            {
              "captures": {
                "1": {
                  "name": "keyword.control.go"
                },
                "2": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.other.colon.go"
                },
                "4": {
                  "patterns": [
                    {
                      "include": "#comments"
                    }
                  ]
                }
              },
              "match": "^\\s*\\b(case)\\b\\s+([!*,.<=>\\w\\s]+)(:)(\\s*/[*/]\\s*.*)?$"
            },
            {
              "begin": "\\bcase\\b",
              "beginCaptures": {
                "0": {
                  "name": "keyword.control.go"
                }
              },
              "end": ":",
              "endCaptures": {
                "0": {
                  "name": "punctuation.other.colon.go"
                }
              },
              "patterns": [
                {
                  "include": "#type-declarations"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.type.go"
                }
              ]
            },
            {
              "include": "$self"
            }
          ]
        },
        "switch_variables": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "name": "keyword.control.go"
                },
                "2": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "include": "#support_functions"
                    },
                    {
                      "include": "#variable_assignment"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.other.go"
                    }
                  ]
                }
              },
              "match": "^\\s*\\b(case)\\b\\s+([\\s\\S]+:\\s*(?:/[*/].*)?)$"
            },
            {
              "begin": "(?<=\\bswitch\\b)\\s*((?:[.\\w]+(?:\\s*[-!%\\&+,/:<=>|]+\\s*[.\\w]+)*\\s*[-!%\\&+,/:<=>|]+)?\\s*[-\\]%\\&(-+./<>\\[|\\w]+{0,1}\\s*(?:;\\s*[-\\]%\\&(-+./<>\\[|\\w]+\\s*)?)(\\{)",
              "beginCaptures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#support_functions"
                    },
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "include": "#variable_assignment"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.other.go"
                    }
                  ]
                },
                "2": {
                  "name": "punctuation.definition.begin.bracket.curly.go"
                }
              },
              "end": "}",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.curly.go"
                }
              },
              "patterns": [
                {
                  "begin": "\\bcase\\b",
                  "beginCaptures": {
                    "0": {
                      "name": "keyword.control.go"
                    }
                  },
                  "end": ":",
                  "endCaptures": {
                    "0": {
                      "name": "punctuation.other.colon.go"
                    }
                  },
                  "patterns": [
                    {
                      "include": "#support_functions"
                    },
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "include": "#variable_assignment"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.other.go"
                    }
                  ]
                },
                {
                  "include": "$self"
                }
              ]
            }
          ]
        },
        "syntax_errors": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "name": "invalid.illegal.slice.go"
                }
              },
              "match": "\\[](\\s+)"
            },
            {
              "match": "\\b0[0-7]*[89]\\d*\\b",
              "name": "invalid.illegal.numeric.go"
            }
          ]
        },
        "terminators": {
          "match": ";",
          "name": "punctuation.terminator.go"
        },
        "type-declarations": {
          "patterns": [
            {
              "include": "#language_constants"
            },
            {
              "include": "#comments"
            },
            {
              "include": "#map_types"
            },
            {
              "include": "#brackets"
            },
            {
              "include": "#delimiters"
            },
            {
              "include": "#keywords"
            },
            {
              "include": "#operators"
            },
            {
              "include": "#runes"
            },
            {
              "include": "#storage_types"
            },
            {
              "include": "#raw_string_literals"
            },
            {
              "include": "#string_literals"
            },
            {
              "include": "#numeric_literals"
            },
            {
              "include": "#terminators"
            }
          ]
        },
        "type-declarations-without-brackets": {
          "patterns": [
            {
              "include": "#language_constants"
            },
            {
              "include": "#comments"
            },
            {
              "include": "#map_types"
            },
            {
              "include": "#delimiters"
            },
            {
              "include": "#keywords"
            },
            {
              "include": "#operators"
            },
            {
              "include": "#runes"
            },
            {
              "include": "#storage_types"
            },
            {
              "include": "#raw_string_literals"
            },
            {
              "include": "#string_literals"
            },
            {
              "include": "#numeric_literals"
            },
            {
              "include": "#terminators"
            }
          ]
        },
        "type_assertion_inline": {
          "captures": {
            "1": {
              "name": "keyword.type.go"
            },
            "2": {
              "patterns": [
                {
                  "include": "#type-declarations-without-brackets"
                },
                {
                  "match": "\\(",
                  "name": "punctuation.definition.begin.bracket.round.go"
                },
                {
                  "match": "\\)",
                  "name": "punctuation.definition.end.bracket.round.go"
                },
                {
                  "match": "\\[",
                  "name": "punctuation.definition.begin.bracket.square.go"
                },
                {
                  "match": "]",
                  "name": "punctuation.definition.end.bracket.square.go"
                },
                {
                  "match": "\\{",
                  "name": "punctuation.definition.begin.bracket.curly.go"
                },
                {
                  "match": "}",
                  "name": "punctuation.definition.end.bracket.curly.go"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.type.go"
                }
              ]
            }
          },
          "match": "(?<=\\.\\()(?:\\b(type)\\b|((?:\\s*[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+{0,1}[]*\\[]+{0,1}[.\\w]+(?:\\[(?:[]*.\\[{}\\w]+(?:,\\s*[]*.\\[{}\\w]+)*)?])?))(?=\\))"
        },
        "var_assignment": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#delimiters"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.other.assignment.go"
                    }
                  ]
                },
                "2": {
                  "patterns": [
                    {
                      "include": "#type-declarations-without-brackets"
                    },
                    {
                      "include": "#generic_types"
                    },
                    {
                      "match": "\\(",
                      "name": "punctuation.definition.begin.bracket.round.go"
                    },
                    {
                      "match": "\\)",
                      "name": "punctuation.definition.end.bracket.round.go"
                    },
                    {
                      "match": "\\[",
                      "name": "punctuation.definition.begin.bracket.square.go"
                    },
                    {
                      "match": "]",
                      "name": "punctuation.definition.end.bracket.square.go"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "match": "(?<=\\bvar\\b)\\s*\\b([.\\w]+(?:,\\s*[.\\w]+)*)\\s*((?:(?:[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+(?:\\([^)]+\\))?)?(?![]*\\[]+{0,1}\\b(?:struct|func|map)\\b)(?:[]*.\\[\\w]+(?:,\\s*[]*.\\[\\w]+)*)?\\s*=?)?"
            },
            {
              "begin": "(?<=\\bvar\\b)\\s*(\\()",
              "beginCaptures": {
                "1": {
                  "name": "punctuation.definition.begin.bracket.round.go"
                }
              },
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "captures": {
                    "1": {
                      "patterns": [
                        {
                          "include": "#delimiters"
                        },
                        {
                          "match": "\\w+",
                          "name": "variable.other.assignment.go"
                        }
                      ]
                    },
                    "2": {
                      "patterns": [
                        {
                          "include": "#type-declarations-without-brackets"
                        },
                        {
                          "include": "#generic_types"
                        },
                        {
                          "match": "\\(",
                          "name": "punctuation.definition.begin.bracket.round.go"
                        },
                        {
                          "match": "\\)",
                          "name": "punctuation.definition.end.bracket.round.go"
                        },
                        {
                          "match": "\\[",
                          "name": "punctuation.definition.begin.bracket.square.go"
                        },
                        {
                          "match": "]",
                          "name": "punctuation.definition.end.bracket.square.go"
                        },
                        {
                          "match": "\\w+",
                          "name": "entity.name.type.go"
                        }
                      ]
                    }
                  },
                  "match": "^\\s*\\b([.\\w]+(?:,\\s*[.\\w]+)*)\\s*((?:(?:[]*\\[]+{0,1}(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+(?:\\([^)]+\\))?)?(?![]*\\[]+{0,1}\\b(?:struct|func|map)\\b)(?:[]*.\\[\\w]+(?:,\\s*[]*.\\[\\w]+)*)?\\s*=?)?"
                },
                {
                  "include": "$self"
                }
              ]
            }
          ]
        },
        "variable_assignment": {
          "patterns": [
            {
              "captures": {
                "0": {
                  "patterns": [
                    {
                      "include": "#delimiters"
                    },
                    {
                      "match": "\\d\\w*",
                      "name": "invalid.illegal.identifier.go"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.other.assignment.go"
                    }
                  ]
                }
              },
              "match": "\\b\\w+(?:,\\s*\\w+)*(?=\\s*:=)"
            },
            {
              "captures": {
                "0": {
                  "patterns": [
                    {
                      "include": "#delimiters"
                    },
                    {
                      "include": "#operators"
                    },
                    {
                      "match": "\\d\\w*",
                      "name": "invalid.illegal.identifier.go"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.other.assignment.go"
                    }
                  ]
                }
              },
              "match": "\\b[*.\\w]+(?:,\\s*[*.\\w]+)*(?=\\s*=(?!=))"
            }
          ]
        }
      },
      "scopeName": "source.go"
    },
    "rust": {
      "displayName": "Rust",
      "name": "rust",
      "patterns": [
        {
          "begin": "(<)(\\[)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.brackets.angle.rust"
            },
            "2": {
              "name": "punctuation.brackets.square.rust"
            }
          },
          "end": ">",
          "endCaptures": {
            "0": {
              "name": "punctuation.brackets.angle.rust"
            }
          },
          "patterns": [
            {
              "include": "#block-comments"
            },
            {
              "include": "#comments"
            },
            {
              "include": "#gtypes"
            },
            {
              "include": "#lvariables"
            },
            {
              "include": "#lifetimes"
            },
            {
              "include": "#punctuation"
            },
            {
              "include": "#types"
            }
          ]
        },
        {
          "captures": {
            "1": {
              "name": "keyword.operator.macro.dollar.rust"
            },
            "3": {
              "name": "keyword.other.crate.rust"
            },
            "4": {
              "name": "entity.name.type.metavariable.rust"
            },
            "6": {
              "name": "keyword.operator.key-value.rust"
            },
            "7": {
              "name": "variable.other.metavariable.specifier.rust"
            }
          },
          "match": "(\\$)((crate)|([A-Z]\\w*))(\\s*(:)\\s*(block|expr(?:_2021)?|ident|item|lifetime|literal|meta|pat(?:_param)?|path|stmt|tt|ty|vis)\\b)?",
          "name": "meta.macro.metavariable.type.rust",
          "patterns": [
            {
              "include": "#keywords"
            }
          ]
        },
        {
          "captures": {
            "1": {
              "name": "keyword.operator.macro.dollar.rust"
            },
            "2": {
              "name": "variable.other.metavariable.name.rust"
            },
            "4": {
              "name": "keyword.operator.key-value.rust"
            },
            "5": {
              "name": "variable.other.metavariable.specifier.rust"
            }
          },
          "match": "(\\$)([a-z]\\w*)(\\s*(:)\\s*(block|expr(?:_2021)?|ident|item|lifetime|literal|meta|pat(?:_param)?|path|stmt|tt|ty|vis)\\b)?",
          "name": "meta.macro.metavariable.rust",
          "patterns": [
            {
              "include": "#keywords"
            }
          ]
        },
        {
          "captures": {
            "1": {
              "name": "entity.name.function.macro.rules.rust"
            },
            "3": {
              "name": "entity.name.function.macro.rust"
            },
            "4": {
              "name": "entity.name.type.macro.rust"
            },
            "5": {
              "name": "punctuation.brackets.curly.rust"
            }
          },
          "match": "\\b(macro_rules!)\\s+(([0-9_a-z]+)|([A-Z][0-9_a-z]*))\\s+(\\{)",
          "name": "meta.macro.rules.rust"
        },
        {
          "captures": {
            "1": {
              "name": "storage.type.rust"
            },
            "2": {
              "name": "entity.name.module.rust"
            }
          },
          "match": "(mod)\\s+((?:r#(?!crate|[Ss]elf|super))?[a-z][0-9A-Z_a-z]*)"
        },
        {
          "begin": "\\b(extern)\\s+(crate)",
          "beginCaptures": {
            "1": {
              "name": "storage.type.rust"
            },
            "2": {
              "name": "keyword.other.crate.rust"
            }
          },
          "end": ";",
          "endCaptures": {
            "0": {
              "name": "punctuation.semi.rust"
            }
          },
          "name": "meta.import.rust",
          "patterns": [
            {
              "include": "#block-comments"
            },
            {
              "include": "#comments"
            },
            {
              "include": "#keywords"
            },
            {
              "include": "#punctuation"
            }
          ]
        },
        {
          "begin": "\\b(use)\\s",
          "beginCaptures": {
            "1": {
              "name": "keyword.other.rust"
            }
          },
          "end": ";",
          "endCaptures": {
            "0": {
              "name": "punctuation.semi.rust"
            }
          },
          "name": "meta.use.rust",
          "patterns": [
            {
              "include": "#block-comments"
            },
            {
              "include": "#comments"
            },
            {
              "include": "#keywords"
            },
            {
              "include": "#namespaces"
            },
            {
              "include": "#punctuation"
            },
            {
              "include": "#types"
            },
            {
              "include": "#lvariables"
            }
          ]
        },
        {
          "include": "#block-comments"
        },
        {
          "include": "#comments"
        },
        {
          "include": "#attributes"
        },
        {
          "include": "#lvariables"
        },
        {
          "include": "#constants"
        },
        {
          "include": "#gtypes"
        },
        {
          "include": "#functions"
        },
        {
          "include": "#types"
        },
        {
          "include": "#keywords"
        },
        {
          "include": "#lifetimes"
        },
        {
          "include": "#macros"
        },
        {
          "include": "#namespaces"
        },
        {
          "include": "#punctuation"
        },
        {
          "include": "#strings"
        },
        {
          "include": "#variables"
        }
      ],
      "repository": {
        "attributes": {
          "begin": "(#)(!?)(\\[)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.attribute.rust"
            },
            "3": {
              "name": "punctuation.brackets.attribute.rust"
            }
          },
          "end": "]",
          "endCaptures": {
            "0": {
              "name": "punctuation.brackets.attribute.rust"
            }
          },
          "name": "meta.attribute.rust",
          "patterns": [
            {
              "include": "#block-comments"
            },
            {
              "include": "#comments"
            },
            {
              "include": "#keywords"
            },
            {
              "include": "#lifetimes"
            },
            {
              "include": "#punctuation"
            },
            {
              "include": "#strings"
            },
            {
              "include": "#gtypes"
            },
            {
              "include": "#types"
            }
          ]
        },
        "block-comments": {
          "patterns": [
            {
              "match": "/\\*\\*/",
              "name": "comment.block.rust"
            },
            {
              "begin": "/\\*\\*",
              "end": "\\*/",
              "name": "comment.block.documentation.rust",
              "patterns": [
                {
                  "include": "#block-comments"
                }
              ]
            },
            {
              "begin": "/\\*(?!\\*)",
              "end": "\\*/",
              "name": "comment.block.rust",
              "patterns": [
                {
                  "include": "#block-comments"
                }
              ]
            }
          ]
        },
        "comments": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "name": "punctuation.definition.comment.rust"
                }
              },
              "match": "(///).*$",
              "name": "comment.line.documentation.rust"
            },
            {
              "captures": {
                "1": {
                  "name": "punctuation.definition.comment.rust"
                }
              },
              "match": "(//).*$",
              "name": "comment.line.double-slash.rust"
            }
          ]
        },
        "constants": {
          "patterns": [
            {
              "match": "\\b[A-Z]{2}[0-9A-Z_]*\\b",
              "name": "constant.other.caps.rust"
            },
            {
              "captures": {
                "1": {
                  "name": "storage.type.rust"
                },
                "2": {
                  "name": "constant.other.caps.rust"
                }
              },
              "match": "\\b(const)\\s+([A-Z][0-9A-Z_a-z]*)\\b"
            },
            {
              "captures": {
                "1": {
                  "name": "punctuation.separator.dot.decimal.rust"
                },
                "2": {
                  "name": "keyword.operator.exponent.rust"
                },
                "3": {
                  "name": "keyword.operator.exponent.sign.rust"
                },
                "4": {
                  "name": "constant.numeric.decimal.exponent.mantissa.rust"
                },
                "5": {
                  "name": "entity.name.type.numeric.rust"
                }
              },
              "match": "\\b\\d[_\\d]*(\\.?)[_\\d]*(?:([Ee])([-+]?)([_\\d]+))?(f32|f64|i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b",
              "name": "constant.numeric.decimal.rust"
            },
            {
              "captures": {
                "1": {
                  "name": "entity.name.type.numeric.rust"
                }
              },
              "match": "\\b0x[A-F_a-f\\d]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b",
              "name": "constant.numeric.hex.rust"
            },
            {
              "captures": {
                "1": {
                  "name": "entity.name.type.numeric.rust"
                }
              },
              "match": "\\b0o[0-7_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b",
              "name": "constant.numeric.oct.rust"
            },
            {
              "captures": {
                "1": {
                  "name": "entity.name.type.numeric.rust"
                }
              },
              "match": "\\b0b[01_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b",
              "name": "constant.numeric.bin.rust"
            },
            {
              "match": "\\b(true|false)\\b",
              "name": "constant.language.bool.rust"
            }
          ]
        },
        "escapes": {
          "captures": {
            "1": {
              "name": "constant.character.escape.backslash.rust"
            },
            "2": {
              "name": "constant.character.escape.bit.rust"
            },
            "3": {
              "name": "constant.character.escape.unicode.rust"
            },
            "4": {
              "name": "constant.character.escape.unicode.punctuation.rust"
            },
            "5": {
              "name": "constant.character.escape.unicode.punctuation.rust"
            }
          },
          "match": "(\\\\)(?:(x[0-7][A-Fa-f\\d])|(u(\\{)[A-Fa-f\\d]{4,6}(}))|.)",
          "name": "constant.character.escape.rust"
        },
        "functions": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "name": "keyword.other.rust"
                },
                "2": {
                  "name": "punctuation.brackets.round.rust"
                }
              },
              "match": "\\b(pub)(\\()"
            },
            {
              "begin": "\\b(fn)\\s+((?:r#(?!crate|[Ss]elf|super))?[0-9A-Z_a-z]+)((\\()|(<))",
              "beginCaptures": {
                "1": {
                  "name": "keyword.other.fn.rust"
                },
                "2": {
                  "name": "entity.name.function.rust"
                },
                "4": {
                  "name": "punctuation.brackets.round.rust"
                },
                "5": {
                  "name": "punctuation.brackets.angle.rust"
                }
              },
              "end": "(\\{)|(;)",
              "endCaptures": {
                "1": {
                  "name": "punctuation.brackets.curly.rust"
                },
                "2": {
                  "name": "punctuation.semi.rust"
                }
              },
              "name": "meta.function.definition.rust",
              "patterns": [
                {
                  "include": "#block-comments"
                },
                {
                  "include": "#comments"
                },
                {
                  "include": "#keywords"
                },
                {
                  "include": "#lvariables"
                },
                {
                  "include": "#constants"
                },
                {
                  "include": "#gtypes"
                },
                {
                  "include": "#functions"
                },
                {
                  "include": "#lifetimes"
                },
                {
                  "include": "#macros"
                },
                {
                  "include": "#namespaces"
                },
                {
                  "include": "#punctuation"
                },
                {
                  "include": "#strings"
                },
                {
                  "include": "#types"
                },
                {
                  "include": "#variables"
                }
              ]
            },
            {
              "begin": "((?:r#(?!crate|[Ss]elf|super))?[0-9A-Z_a-z]+)(\\()",
              "beginCaptures": {
                "1": {
                  "name": "entity.name.function.rust"
                },
                "2": {
                  "name": "punctuation.brackets.round.rust"
                }
              },
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.brackets.round.rust"
                }
              },
              "name": "meta.function.call.rust",
              "patterns": [
                {
                  "include": "#block-comments"
                },
                {
                  "include": "#comments"
                },
                {
                  "include": "#attributes"
                },
                {
                  "include": "#keywords"
                },
                {
                  "include": "#lvariables"
                },
                {
                  "include": "#constants"
                },
                {
                  "include": "#gtypes"
                },
                {
                  "include": "#functions"
                },
                {
                  "include": "#lifetimes"
                },
                {
                  "include": "#macros"
                },
                {
                  "include": "#namespaces"
                },
                {
                  "include": "#punctuation"
                },
                {
                  "include": "#strings"
                },
                {
                  "include": "#types"
                },
                {
                  "include": "#variables"
                }
              ]
            },
            {
              "begin": "((?:r#(?!crate|[Ss]elf|super))?[0-9A-Z_a-z]+)(?=::<.*>\\()",
              "beginCaptures": {
                "1": {
                  "name": "entity.name.function.rust"
                }
              },
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.brackets.round.rust"
                }
              },
              "name": "meta.function.call.rust",
              "patterns": [
                {
                  "include": "#block-comments"
                },
                {
                  "include": "#comments"
                },
                {
                  "include": "#attributes"
                },
                {
                  "include": "#keywords"
                },
                {
                  "include": "#lvariables"
                },
                {
                  "include": "#constants"
                },
                {
                  "include": "#gtypes"
                },
                {
                  "include": "#functions"
                },
                {
                  "include": "#lifetimes"
                },
                {
                  "include": "#macros"
                },
                {
                  "include": "#namespaces"
                },
                {
                  "include": "#punctuation"
                },
                {
                  "include": "#strings"
                },
                {
                  "include": "#types"
                },
                {
                  "include": "#variables"
                }
              ]
            }
          ]
        },
        "gtypes": {
          "patterns": [
            {
              "match": "\\b(Some|None)\\b",
              "name": "entity.name.type.option.rust"
            },
            {
              "match": "\\b(Ok|Err)\\b",
              "name": "entity.name.type.result.rust"
            }
          ]
        },
        "interpolations": {
          "captures": {
            "1": {
              "name": "punctuation.definition.interpolation.rust"
            },
            "2": {
              "name": "punctuation.definition.interpolation.rust"
            }
          },
          "match": "(\\{)[^\"{}]*(})",
          "name": "meta.interpolation.rust"
        },
        "keywords": {
          "patterns": [
            {
              "match": "\\b(await|break|continue|do|else|for|if|loop|match|return|try|while|yield)\\b",
              "name": "keyword.control.rust"
            },
            {
              "match": "\\b(extern|let|macro|mod)\\b",
              "name": "keyword.other.rust storage.type.rust"
            },
            {
              "match": "\\b(const)\\b",
              "name": "storage.modifier.rust"
            },
            {
              "match": "\\b(type)\\b",
              "name": "keyword.declaration.type.rust storage.type.rust"
            },
            {
              "match": "\\b(enum)\\b",
              "name": "keyword.declaration.enum.rust storage.type.rust"
            },
            {
              "match": "\\b(trait)\\b",
              "name": "keyword.declaration.trait.rust storage.type.rust"
            },
            {
              "match": "\\b(struct)\\b",
              "name": "keyword.declaration.struct.rust storage.type.rust"
            },
            {
              "match": "\\b(abstract|static)\\b",
              "name": "storage.modifier.rust"
            },
            {
              "match": "\\b(as|async|become|box|dyn|move|final|gen|impl|in|override|priv|pub|ref|typeof|union|unsafe|unsized|use|virtual|where)\\b",
              "name": "keyword.other.rust"
            },
            {
              "match": "\\bfn\\b",
              "name": "keyword.other.fn.rust"
            },
            {
              "match": "\\bcrate\\b",
              "name": "keyword.other.crate.rust"
            },
            {
              "match": "\\bmut\\b",
              "name": "storage.modifier.mut.rust"
            },
            {
              "match": "([\\^|]|\\|\\||&&|<<|>>|!)(?!=)",
              "name": "keyword.operator.logical.rust"
            },
            {
              "match": "&(?![\\&=])",
              "name": "keyword.operator.borrow.and.rust"
            },
            {
              "match": "((?:[-%\\&*+/^|]|<<|>>)=)",
              "name": "keyword.operator.assignment.rust"
            },
            {
              "match": "(?<![<>])=(?![=>])",
              "name": "keyword.operator.assignment.equal.rust"
            },
            {
              "match": "(=(=)?(?!>)|!=|<=|(?<!=)>=)",
              "name": "keyword.operator.comparison.rust"
            },
            {
              "match": "(([%+]|(\\*(?!\\w)))(?!=))|(-(?!>))|(/(?!/))",
              "name": "keyword.operator.math.rust"
            },
            {
              "captures": {
                "1": {
                  "name": "punctuation.brackets.round.rust"
                },
                "2": {
                  "name": "punctuation.brackets.square.rust"
                },
                "3": {
                  "name": "punctuation.brackets.curly.rust"
                },
                "4": {
                  "name": "keyword.operator.comparison.rust"
                },
                "5": {
                  "name": "punctuation.brackets.round.rust"
                },
                "6": {
                  "name": "punctuation.brackets.square.rust"
                },
                "7": {
                  "name": "punctuation.brackets.curly.rust"
                }
              },
              "match": "(?:\\b|(?:(\\))|(])|(})))[\\t ]+([<>])[\\t ]+(?:\\b|(?:(\\()|(\\[)|(\\{)))"
            },
            {
              "match": "::",
              "name": "keyword.operator.namespace.rust"
            },
            {
              "captures": {
                "1": {
                  "name": "keyword.operator.dereference.rust"
                }
              },
              "match": "(\\*)(?=\\w+)"
            },
            {
              "match": "@",
              "name": "keyword.operator.subpattern.rust"
            },
            {
              "match": "\\.(?!\\.)",
              "name": "keyword.operator.access.dot.rust"
            },
            {
              "match": "\\.{2}([.=])?",
              "name": "keyword.operator.range.rust"
            },
            {
              "match": ":(?!:)",
              "name": "keyword.operator.key-value.rust"
            },
            {
              "match": "->|<-",
              "name": "keyword.operator.arrow.skinny.rust"
            },
            {
              "match": "=>",
              "name": "keyword.operator.arrow.fat.rust"
            },
            {
              "match": "\\$",
              "name": "keyword.operator.macro.dollar.rust"
            },
            {
              "match": "\\?",
              "name": "keyword.operator.question.rust"
            }
          ]
        },
        "lifetimes": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "name": "punctuation.definition.lifetime.rust"
                },
                "2": {
                  "name": "entity.name.type.lifetime.rust"
                }
              },
              "match": "(')([A-Z_a-z][0-9A-Z_a-z]*)(?!')\\b"
            },
            {
              "captures": {
                "1": {
                  "name": "keyword.operator.borrow.rust"
                },
                "2": {
                  "name": "punctuation.definition.lifetime.rust"
                },
                "3": {
                  "name": "entity.name.type.lifetime.rust"
                }
              },
              "match": "(&)(')([A-Z_a-z][0-9A-Z_a-z]*)(?!')\\b"
            }
          ]
        },
        "lvariables": {
          "patterns": [
            {
              "match": "\\b[Ss]elf\\b",
              "name": "variable.language.self.rust"
            },
            {
              "match": "\\bsuper\\b",
              "name": "variable.language.super.rust"
            }
          ]
        },
        "macros": {
          "patterns": [
            {
              "captures": {
                "2": {
                  "name": "entity.name.function.macro.rust"
                },
                "3": {
                  "name": "entity.name.type.macro.rust"
                }
              },
              "match": "(([_a-z][0-9A-Z_a-z]*!)|([A-Z_][0-9A-Z_a-z]*!))",
              "name": "meta.macro.rust"
            }
          ]
        },
        "namespaces": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "name": "entity.name.namespace.rust"
                },
                "2": {
                  "name": "keyword.operator.namespace.rust"
                }
              },
              "match": "(?<![0-9A-Z_a-z])([0-9A-Z_a-z]+)((?<!s(?:uper|elf))::)"
            }
          ]
        },
        "punctuation": {
          "patterns": [
            {
              "match": ",",
              "name": "punctuation.comma.rust"
            },
            {
              "match": "[{}]",
              "name": "punctuation.brackets.curly.rust"
            },
            {
              "match": "[()]",
              "name": "punctuation.brackets.round.rust"
            },
            {
              "match": ";",
              "name": "punctuation.semi.rust"
            },
            {
              "match": "[]\\[]",
              "name": "punctuation.brackets.square.rust"
            },
            {
              "match": "(?<!=)[<>]",
              "name": "punctuation.brackets.angle.rust"
            }
          ]
        },
        "strings": {
          "patterns": [
            {
              "begin": "(b?)(\")",
              "beginCaptures": {
                "1": {
                  "name": "string.quoted.byte.raw.rust"
                },
                "2": {
                  "name": "punctuation.definition.string.rust"
                }
              },
              "end": "\"",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.string.rust"
                }
              },
              "name": "string.quoted.double.rust",
              "patterns": [
                {
                  "include": "#escapes"
                },
                {
                  "include": "#interpolations"
                }
              ]
            },
            {
              "begin": "(b?r)(#*)(\")",
              "beginCaptures": {
                "1": {
                  "name": "string.quoted.byte.raw.rust"
                },
                "2": {
                  "name": "punctuation.definition.string.raw.rust"
                },
                "3": {
                  "name": "punctuation.definition.string.rust"
                }
              },
              "end": "(\")(\\2)",
              "endCaptures": {
                "1": {
                  "name": "punctuation.definition.string.rust"
                },
                "2": {
                  "name": "punctuation.definition.string.raw.rust"
                }
              },
              "name": "string.quoted.double.rust"
            },
            {
              "begin": "(b)?(')",
              "beginCaptures": {
                "1": {
                  "name": "string.quoted.byte.raw.rust"
                },
                "2": {
                  "name": "punctuation.definition.char.rust"
                }
              },
              "end": "'",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.char.rust"
                }
              },
              "name": "string.quoted.single.char.rust",
              "patterns": [
                {
                  "include": "#escapes"
                }
              ]
            }
          ]
        },
        "types": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "name": "entity.name.type.numeric.rust"
                }
              },
              "match": "(?<![A-Za-z])(f32|f64|i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)\\b"
            },
            {
              "begin": "\\b(_?[A-Z][0-9A-Z_a-z]*)(<)",
              "beginCaptures": {
                "1": {
                  "name": "entity.name.type.rust"
                },
                "2": {
                  "name": "punctuation.brackets.angle.rust"
                }
              },
              "end": ">",
              "endCaptures": {
                "0": {
                  "name": "punctuation.brackets.angle.rust"
                }
              },
              "patterns": [
                {
                  "include": "#block-comments"
                },
                {
                  "include": "#comments"
                },
                {
                  "include": "#keywords"
                },
                {
                  "include": "#lvariables"
                },
                {
                  "include": "#lifetimes"
                },
                {
                  "include": "#punctuation"
                },
                {
                  "include": "#types"
                },
                {
                  "include": "#variables"
                }
              ]
            },
            {
              "match": "\\b(bool|char|str)\\b",
              "name": "entity.name.type.primitive.rust"
            },
            {
              "captures": {
                "1": {
                  "name": "keyword.declaration.trait.rust storage.type.rust"
                },
                "2": {
                  "name": "entity.name.type.trait.rust"
                }
              },
              "match": "\\b(trait)\\s+(_?[A-Z][0-9A-Z_a-z]*)\\b"
            },
            {
              "captures": {
                "1": {
                  "name": "keyword.declaration.struct.rust storage.type.rust"
                },
                "2": {
                  "name": "entity.name.type.struct.rust"
                }
              },
              "match": "\\b(struct)\\s+(_?[A-Z][0-9A-Z_a-z]*)\\b"
            },
            {
              "captures": {
                "1": {
                  "name": "keyword.declaration.enum.rust storage.type.rust"
                },
                "2": {
                  "name": "entity.name.type.enum.rust"
                }
              },
              "match": "\\b(enum)\\s+(_?[A-Z][0-9A-Z_a-z]*)\\b"
            },
            {
              "captures": {
                "1": {
                  "name": "keyword.declaration.type.rust storage.type.rust"
                },
                "2": {
                  "name": "entity.name.type.declaration.rust"
                }
              },
              "match": "\\b(type)\\s+(_?[A-Z][0-9A-Z_a-z]*)\\b"
            },
            {
              "match": "\\b_?[A-Z][0-9A-Z_a-z]*\\b(?!!)",
              "name": "entity.name.type.rust"
            }
          ]
        },
        "variables": {
          "patterns": [
            {
              "match": "\\b(?<!(?<!\\.)\\.)(?:r#(?!(crate|[Ss]elf|super)))?[0-9_a-z]+\\b",
              "name": "variable.other.rust"
            }
          ]
        }
      },
      "scopeName": "source.rust"
    },
    "python": {
      "displayName": "Python",
      "name": "python",
      "patterns": [
        {
          "include": "#statement"
        },
        {
          "include": "#expression"
        }
      ],
      "repository": {
        "annotated-parameter": {
          "begin": "\\b([_[:alpha:]]\\w*)\\s*(:)",
          "beginCaptures": {
            "1": {
              "name": "variable.parameter.function.language.python"
            },
            "2": {
              "name": "punctuation.separator.annotation.python"
            }
          },
          "end": "(,)|(?=\\))",
          "endCaptures": {
            "1": {
              "name": "punctuation.separator.parameters.python"
            }
          },
          "patterns": [
            {
              "include": "#expression"
            },
            {
              "match": "=(?!=)",
              "name": "keyword.operator.assignment.python"
            }
          ]
        },
        "assignment-operator": {
          "match": "<<=|>>=|//=|\\*\\*=|\\+=|-=|/=|@=|\\*=|%=|~=|\\^=|&=|\\|=|=(?!=)",
          "name": "keyword.operator.assignment.python"
        },
        "backticks": {
          "begin": "`",
          "end": "`|(?<!\\\\)(\\n)",
          "name": "invalid.deprecated.backtick.python",
          "patterns": [
            {
              "include": "#expression"
            }
          ]
        },
        "builtin-callables": {
          "patterns": [
            {
              "include": "#illegal-names"
            },
            {
              "include": "#illegal-object-name"
            },
            {
              "include": "#builtin-exceptions"
            },
            {
              "include": "#builtin-functions"
            },
            {
              "include": "#builtin-types"
            }
          ]
        },
        "builtin-exceptions": {
          "match": "(?<!\\.)\\b((Arithmetic|Assertion|Attribute|Buffer|BlockingIO|BrokenPipe|ChildProcess|(Connection(Aborted|Refused|Reset)?)|EOF|Environment|FileExists|FileNotFound|FloatingPoint|IO|Import|Indentation|Index|Interrupted|IsADirectory|NotADirectory|Permission|ProcessLookup|Timeout|Key|Lookup|Memory|Name|NotImplemented|OS|Overflow|Reference|Runtime|Recursion|Syntax|System|Tab|Type|UnboundLocal|Unicode(Encode|Decode|Translate)?|Value|Windows|ZeroDivision|ModuleNotFound)Error|((Pending)?Deprecation|Runtime|Syntax|User|Future|Import|Unicode|Bytes|Resource)?Warning|SystemExit|Stop(Async)?Iteration|KeyboardInterrupt|GeneratorExit|(Base)?Exception)\\b",
          "name": "support.type.exception.python"
        },
        "builtin-functions": {
          "patterns": [
            {
              "match": "(?<!\\.)\\b(__import__|abs|aiter|all|any|anext|ascii|bin|breakpoint|callable|chr|compile|copyright|credits|delattr|dir|divmod|enumerate|eval|exec|exit|filter|format|getattr|globals|hasattr|hash|help|hex|id|input|isinstance|issubclass|iter|len|license|locals|map|max|memoryview|min|next|oct|open|ord|pow|print|quit|range|reload|repr|reversed|round|setattr|sorted|sum|vars|zip)\\b",
              "name": "support.function.builtin.python"
            },
            {
              "match": "(?<!\\.)\\b(file|reduce|intern|raw_input|unicode|cmp|basestring|execfile|long|xrange)\\b",
              "name": "variable.legacy.builtin.python"
            }
          ]
        },
        "builtin-possible-callables": {
          "patterns": [
            {
              "include": "#builtin-callables"
            },
            {
              "include": "#magic-names"
            }
          ]
        },
        "builtin-types": {
          "match": "(?<!\\.)\\b(bool|bytearray|bytes|classmethod|complex|dict|float|frozenset|int|list|object|property|set|slice|staticmethod|str|tuple|type|super)\\b",
          "name": "support.type.python"
        },
        "call-wrapper-inheritance": {
          "begin": "\\b(?=([_[:alpha:]]\\w*)\\s*(\\())",
          "end": "(\\))",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.arguments.end.python"
            }
          },
          "name": "meta.function-call.python",
          "patterns": [
            {
              "include": "#inheritance-name"
            },
            {
              "include": "#function-arguments"
            }
          ]
        },
        "class-declaration": {
          "patterns": [
            {
              "begin": "\\s*(class)\\s+(?=[_[:alpha:]]\\w*\\s*([(:]))",
              "beginCaptures": {
                "1": {
                  "name": "storage.type.class.python"
                }
              },
              "end": "(:)",
              "endCaptures": {
                "1": {
                  "name": "punctuation.section.class.begin.python"
                }
              },
              "name": "meta.class.python",
              "patterns": [
                {
                  "include": "#class-name"
                },
                {
                  "include": "#class-inheritance"
                }
              ]
            }
          ]
        },
        "class-inheritance": {
          "begin": "(\\()",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.inheritance.begin.python"
            }
          },
          "end": "(\\))",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.inheritance.end.python"
            }
          },
          "name": "meta.class.inheritance.python",
          "patterns": [
            {
              "match": "(\\*\\*?)",
              "name": "keyword.operator.unpacking.arguments.python"
            },
            {
              "match": ",",
              "name": "punctuation.separator.inheritance.python"
            },
            {
              "match": "=(?!=)",
              "name": "keyword.operator.assignment.python"
            },
            {
              "match": "\\bmetaclass\\b",
              "name": "support.type.metaclass.python"
            },
            {
              "include": "#illegal-names"
            },
            {
              "include": "#class-kwarg"
            },
            {
              "include": "#call-wrapper-inheritance"
            },
            {
              "include": "#expression-base"
            },
            {
              "include": "#member-access-class"
            },
            {
              "include": "#inheritance-identifier"
            }
          ]
        },
        "class-kwarg": {
          "captures": {
            "1": {
              "name": "entity.other.inherited-class.python variable.parameter.class.python"
            },
            "2": {
              "name": "keyword.operator.assignment.python"
            }
          },
          "match": "\\b([_[:alpha:]]\\w*)\\s*(=)(?!=)"
        },
        "class-name": {
          "patterns": [
            {
              "include": "#illegal-object-name"
            },
            {
              "include": "#builtin-possible-callables"
            },
            {
              "match": "\\b([_[:alpha:]]\\w*)\\b",
              "name": "entity.name.type.class.python"
            }
          ]
        },
        "codetags": {
          "captures": {
            "1": {
              "name": "keyword.codetag.notation.python"
            }
          },
          "match": "\\b(NOTE|XXX|HACK|FIXME|BUG|TODO)\\b"
        },
        "comments": {
          "patterns": [
            {
              "begin": "#\\s*(type:)\\s*+(?!$|#)",
              "beginCaptures": {
                "0": {
                  "name": "meta.typehint.comment.python"
                },
                "1": {
                  "name": "comment.typehint.directive.notation.python"
                }
              },
              "contentName": "meta.typehint.comment.python",
              "end": "$|(?=#)",
              "name": "comment.line.number-sign.python",
              "patterns": [
                {
                  "match": "\\Gignore(?=\\s*(?:$|#))",
                  "name": "comment.typehint.ignore.notation.python"
                },
                {
                  "match": "(?<!\\.)\\b(bool|bytes|float|int|object|str|List|Dict|Iterable|Sequence|Set|FrozenSet|Callable|Union|Tuple|Any|None)\\b",
                  "name": "comment.typehint.type.notation.python"
                },
                {
                  "match": "([]()*,.=\\[]|(->))",
                  "name": "comment.typehint.punctuation.notation.python"
                },
                {
                  "match": "([_[:alpha:]]\\w*)",
                  "name": "comment.typehint.variable.notation.python"
                }
              ]
            },
            {
              "include": "#comments-base"
            }
          ]
        },
        "comments-base": {
          "begin": "(#)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.comment.python"
            }
          },
          "end": "$()",
          "name": "comment.line.number-sign.python",
          "patterns": [
            {
              "include": "#codetags"
            }
          ]
        },
        "comments-string-double-three": {
          "begin": "(#)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.comment.python"
            }
          },
          "end": "($|(?=\"\"\"))",
          "name": "comment.line.number-sign.python",
          "patterns": [
            {
              "include": "#codetags"
            }
          ]
        },
        "comments-string-single-three": {
          "begin": "(#)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.comment.python"
            }
          },
          "end": "($|(?='''))",
          "name": "comment.line.number-sign.python",
          "patterns": [
            {
              "include": "#codetags"
            }
          ]
        },
        "curly-braces": {
          "begin": "\\{",
          "beginCaptures": {
            "0": {
              "name": "punctuation.definition.dict.begin.python"
            }
          },
          "end": "}",
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.dict.end.python"
            }
          },
          "patterns": [
            {
              "match": ":",
              "name": "punctuation.separator.dict.python"
            },
            {
              "include": "#expression"
            }
          ]
        },
        "decorator": {
          "begin": "^\\s*((@))\\s*(?=[_[:alpha:]]\\w*)",
          "beginCaptures": {
            "1": {
              "name": "entity.name.function.decorator.python"
            },
            "2": {
              "name": "punctuation.definition.decorator.python"
            }
          },
          "end": "(\\))(.*?)(?=\\s*(?:#|$))|(?=[\\n#])",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.arguments.end.python"
            },
            "2": {
              "name": "invalid.illegal.decorator.python"
            }
          },
          "name": "meta.function.decorator.python",
          "patterns": [
            {
              "include": "#decorator-name"
            },
            {
              "include": "#function-arguments"
            }
          ]
        },
        "decorator-name": {
          "patterns": [
            {
              "include": "#builtin-callables"
            },
            {
              "include": "#illegal-object-name"
            },
            {
              "captures": {
                "2": {
                  "name": "punctuation.separator.period.python"
                }
              },
              "match": "([_[:alpha:]]\\w*)|(\\.)",
              "name": "entity.name.function.decorator.python"
            },
            {
              "include": "#line-continuation"
            },
            {
              "captures": {
                "1": {
                  "name": "invalid.illegal.decorator.python"
                }
              },
              "match": "\\s*([^#(.\\\\_[:alpha:]\\s].*?)(?=#|$)",
              "name": "invalid.illegal.decorator.python"
            }
          ]
        },
        "docstring": {
          "patterns": [
            {
              "begin": "('''|\"\"\")",
              "beginCaptures": {
                "1": {
                  "name": "punctuation.definition.string.begin.python"
                }
              },
              "end": "(\\1)",
              "endCaptures": {
                "1": {
                  "name": "punctuation.definition.string.end.python"
                }
              },
              "name": "string.quoted.docstring.multi.python",
              "patterns": [
                {
                  "include": "#docstring-prompt"
                },
                {
                  "include": "#codetags"
                },
                {
                  "include": "#docstring-guts-unicode"
                }
              ]
            },
            {
              "begin": "([Rr])('''|\"\"\")",
              "beginCaptures": {
                "1": {
                  "name": "storage.type.string.python"
                },
                "2": {
                  "name": "punctuation.definition.string.begin.python"
                }
              },
              "end": "(\\2)",
              "endCaptures": {
                "1": {
                  "name": "punctuation.definition.string.end.python"
                }
              },
              "name": "string.quoted.docstring.raw.multi.python",
              "patterns": [
                {
                  "include": "#string-consume-escape"
                },
                {
                  "include": "#docstring-prompt"
                },
                {
                  "include": "#codetags"
                }
              ]
            },
            {
              "begin": "([\"'])",
              "beginCaptures": {
                "1": {
                  "name": "punctuation.definition.string.begin.python"
                }
              },
              "end": "(\\1)|(\\n)",
              "endCaptures": {
                "1": {
                  "name": "punctuation.definition.string.end.python"
                },
                "2": {
                  "name": "invalid.illegal.newline.python"
                }
              },
              "name": "string.quoted.docstring.single.python",
              "patterns": [
                {
                  "include": "#codetags"
                },
                {
                  "include": "#docstring-guts-unicode"
                }
              ]
            },
            {
              "begin": "([Rr])([\"'])",
              "beginCaptures": {
                "1": {
                  "name": "storage.type.string.python"
                },
                "2": {
                  "name": "punctuation.definition.string.begin.python"
                }
              },
              "end": "(\\2)|(\\n)",
              "endCaptures": {
                "1": {
                  "name": "punctuation.definition.string.end.python"
                },
                "2": {
                  "name": "invalid.illegal.newline.python"
                }
              },
              "name": "string.quoted.docstring.raw.single.python",
              "patterns": [
                {
                  "include": "#string-consume-escape"
                },
                {
                  "include": "#codetags"
                }
              ]
            }
          ]
        },
        "docstring-guts-unicode": {
          "patterns": [
            {
              "include": "#escape-sequence-unicode"
            },
            {
              "include": "#escape-sequence"
            },
            {
              "include": "#string-line-continuation"
            }
          ]
        },
        "docstring-prompt": {
          "captures": {
            "1": {
              "name": "keyword.control.flow.python"
            }
          },
          "match": "(?:^|\\G)\\s*((?:>>>|\\.\\.\\.)\\s)(?=\\s*\\S)"
        },
        "docstring-statement": {
          "begin": "^(?=\\s*[Rr]?('''|\"\"\"|[\"']))",
          "end": "((?<=\\1)|^)(?!\\s*[Rr]?('''|\"\"\"|[\"']))",
          "patterns": [
            {
              "include": "#docstring"
            }
          ]
        },
        "double-one-regexp-character-set": {
          "patterns": [
            {
              "match": "\\[\\^?](?!.*?])"
            },
            {
              "begin": "(\\[)(\\^)?(])?",
              "beginCaptures": {
                "1": {
                  "name": "punctuation.character.set.begin.regexp constant.other.set.regexp"
                },
                "2": {
                  "name": "keyword.operator.negation.regexp"
                },
                "3": {
                  "name": "constant.character.set.regexp"
                }
              },
              "end": "(]|(?=\"))|((?=(?<!\\\\)\\n))",
              "endCaptures": {
                "1": {
                  "name": "punctuation.character.set.end.regexp constant.other.set.regexp"
                },
                "2": {
                  "name": "invalid.illegal.newline.python"
                }
              },
              "name": "meta.character.set.regexp",
              "patterns": [
                {
                  "include": "#regexp-charecter-set-escapes"
                },
                {
                  "match": "\\N",
                  "name": "constant.character.set.regexp"
                }
              ]
            }
          ]
        },
        "double-one-regexp-comments": {
          "begin": "\\(\\?#",
          "beginCaptures": {
            "0": {
              "name": "punctuation.comment.begin.regexp"
            }
          },
          "end": "(\\)|(?=\"))|((?=(?<!\\\\)\\n))",
          "endCaptures": {
            "1": {
              "name": "punctuation.comment.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "comment.regexp",
          "patterns": [
            {
              "include": "#codetags"
            }
          ]
        },
        "double-one-regexp-conditional": {
          "begin": "(\\()\\?\\((\\w+(?:\\s+\\p{alnum}+)?|\\d+)\\)",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.conditional.regexp"
            },
            "1": {
              "name": "punctuation.parenthesis.conditional.begin.regexp"
            }
          },
          "end": "(\\)|(?=\"))|((?=(?<!\\\\)\\n))",
          "endCaptures": {
            "1": {
              "name": "keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#double-one-regexp-expression"
            }
          ]
        },
        "double-one-regexp-expression": {
          "patterns": [
            {
              "include": "#regexp-base-expression"
            },
            {
              "include": "#double-one-regexp-character-set"
            },
            {
              "include": "#double-one-regexp-comments"
            },
            {
              "include": "#regexp-flags"
            },
            {
              "include": "#double-one-regexp-named-group"
            },
            {
              "include": "#regexp-backreference"
            },
            {
              "include": "#double-one-regexp-lookahead"
            },
            {
              "include": "#double-one-regexp-lookahead-negative"
            },
            {
              "include": "#double-one-regexp-lookbehind"
            },
            {
              "include": "#double-one-regexp-lookbehind-negative"
            },
            {
              "include": "#double-one-regexp-conditional"
            },
            {
              "include": "#double-one-regexp-parentheses-non-capturing"
            },
            {
              "include": "#double-one-regexp-parentheses"
            }
          ]
        },
        "double-one-regexp-lookahead": {
          "begin": "(\\()\\?=",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.lookahead.regexp"
            },
            "1": {
              "name": "punctuation.parenthesis.lookahead.begin.regexp"
            }
          },
          "end": "(\\)|(?=\"))|((?=(?<!\\\\)\\n))",
          "endCaptures": {
            "1": {
              "name": "keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#double-one-regexp-expression"
            }
          ]
        },
        "double-one-regexp-lookahead-negative": {
          "begin": "(\\()\\?!",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.lookahead.negative.regexp"
            },
            "1": {
              "name": "punctuation.parenthesis.lookahead.begin.regexp"
            }
          },
          "end": "(\\)|(?=\"))|((?=(?<!\\\\)\\n))",
          "endCaptures": {
            "1": {
              "name": "keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#double-one-regexp-expression"
            }
          ]
        },
        "double-one-regexp-lookbehind": {
          "begin": "(\\()\\?<=",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.lookbehind.regexp"
            },
            "1": {
              "name": "punctuation.parenthesis.lookbehind.begin.regexp"
            }
          },
          "end": "(\\)|(?=\"))|((?=(?<!\\\\)\\n))",
          "endCaptures": {
            "1": {
              "name": "keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#double-one-regexp-expression"
            }
          ]
        },
        "double-one-regexp-lookbehind-negative": {
          "begin": "(\\()\\?<!",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.lookbehind.negative.regexp"
            },
            "1": {
              "name": "punctuation.parenthesis.lookbehind.begin.regexp"
            }
          },
          "end": "(\\)|(?=\"))|((?=(?<!\\\\)\\n))",
          "endCaptures": {
            "1": {
              "name": "keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#double-one-regexp-expression"
            }
          ]
        },
        "double-one-regexp-named-group": {
          "begin": "(\\()(\\?P<\\w+(?:\\s+\\p{alnum}+)?>)",
          "beginCaptures": {
            "1": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp"
            },
            "2": {
              "name": "entity.name.tag.named.group.regexp"
            }
          },
          "end": "(\\)|(?=\"))|((?=(?<!\\\\)\\n))",
          "endCaptures": {
            "1": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "meta.named.regexp",
          "patterns": [
            {
              "include": "#double-one-regexp-expression"
            }
          ]
        },
        "double-one-regexp-parentheses": {
          "begin": "\\(",
          "beginCaptures": {
            "0": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp"
            }
          },
          "end": "(\\)|(?=\"))|((?=(?<!\\\\)\\n))",
          "endCaptures": {
            "1": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#double-one-regexp-expression"
            }
          ]
        },
        "double-one-regexp-parentheses-non-capturing": {
          "begin": "\\(\\?:",
          "beginCaptures": {
            "0": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp"
            }
          },
          "end": "(\\)|(?=\"))|((?=(?<!\\\\)\\n))",
          "endCaptures": {
            "1": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#double-one-regexp-expression"
            }
          ]
        },
        "double-three-regexp-character-set": {
          "patterns": [
            {
              "match": "\\[\\^?](?!.*?])"
            },
            {
              "begin": "(\\[)(\\^)?(])?",
              "beginCaptures": {
                "1": {
                  "name": "punctuation.character.set.begin.regexp constant.other.set.regexp"
                },
                "2": {
                  "name": "keyword.operator.negation.regexp"
                },
                "3": {
                  "name": "constant.character.set.regexp"
                }
              },
              "end": "(]|(?=\"\"\"))",
              "endCaptures": {
                "1": {
                  "name": "punctuation.character.set.end.regexp constant.other.set.regexp"
                },
                "2": {
                  "name": "invalid.illegal.newline.python"
                }
              },
              "name": "meta.character.set.regexp",
              "patterns": [
                {
                  "include": "#regexp-charecter-set-escapes"
                },
                {
                  "match": "\\N",
                  "name": "constant.character.set.regexp"
                }
              ]
            }
          ]
        },
        "double-three-regexp-comments": {
          "begin": "\\(\\?#",
          "beginCaptures": {
            "0": {
              "name": "punctuation.comment.begin.regexp"
            }
          },
          "end": "(\\)|(?=\"\"\"))",
          "endCaptures": {
            "1": {
              "name": "punctuation.comment.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "comment.regexp",
          "patterns": [
            {
              "include": "#codetags"
            }
          ]
        },
        "double-three-regexp-conditional": {
          "begin": "(\\()\\?\\((\\w+(?:\\s+\\p{alnum}+)?|\\d+)\\)",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.conditional.regexp"
            },
            "1": {
              "name": "punctuation.parenthesis.conditional.begin.regexp"
            }
          },
          "end": "(\\)|(?=\"\"\"))",
          "endCaptures": {
            "1": {
              "name": "keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#double-three-regexp-expression"
            },
            {
              "include": "#comments-string-double-three"
            }
          ]
        },
        "double-three-regexp-expression": {
          "patterns": [
            {
              "include": "#regexp-base-expression"
            },
            {
              "include": "#double-three-regexp-character-set"
            },
            {
              "include": "#double-three-regexp-comments"
            },
            {
              "include": "#regexp-flags"
            },
            {
              "include": "#double-three-regexp-named-group"
            },
            {
              "include": "#regexp-backreference"
            },
            {
              "include": "#double-three-regexp-lookahead"
            },
            {
              "include": "#double-three-regexp-lookahead-negative"
            },
            {
              "include": "#double-three-regexp-lookbehind"
            },
            {
              "include": "#double-three-regexp-lookbehind-negative"
            },
            {
              "include": "#double-three-regexp-conditional"
            },
            {
              "include": "#double-three-regexp-parentheses-non-capturing"
            },
            {
              "include": "#double-three-regexp-parentheses"
            },
            {
              "include": "#comments-string-double-three"
            }
          ]
        },
        "double-three-regexp-lookahead": {
          "begin": "(\\()\\?=",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.lookahead.regexp"
            },
            "1": {
              "name": "punctuation.parenthesis.lookahead.begin.regexp"
            }
          },
          "end": "(\\)|(?=\"\"\"))",
          "endCaptures": {
            "1": {
              "name": "keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#double-three-regexp-expression"
            },
            {
              "include": "#comments-string-double-three"
            }
          ]
        },
        "double-three-regexp-lookahead-negative": {
          "begin": "(\\()\\?!",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.lookahead.negative.regexp"
            },
            "1": {
              "name": "punctuation.parenthesis.lookahead.begin.regexp"
            }
          },
          "end": "(\\)|(?=\"\"\"))",
          "endCaptures": {
            "1": {
              "name": "keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#double-three-regexp-expression"
            },
            {
              "include": "#comments-string-double-three"
            }
          ]
        },
        "double-three-regexp-lookbehind": {
          "begin": "(\\()\\?<=",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.lookbehind.regexp"
            },
            "1": {
              "name": "punctuation.parenthesis.lookbehind.begin.regexp"
            }
          },
          "end": "(\\)|(?=\"\"\"))",
          "endCaptures": {
            "1": {
              "name": "keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#double-three-regexp-expression"
            },
            {
              "include": "#comments-string-double-three"
            }
          ]
        },
        "double-three-regexp-lookbehind-negative": {
          "begin": "(\\()\\?<!",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.lookbehind.negative.regexp"
            },
            "1": {
              "name": "punctuation.parenthesis.lookbehind.begin.regexp"
            }
          },
          "end": "(\\)|(?=\"\"\"))",
          "endCaptures": {
            "1": {
              "name": "keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#double-three-regexp-expression"
            },
            {
              "include": "#comments-string-double-three"
            }
          ]
        },
        "double-three-regexp-named-group": {
          "begin": "(\\()(\\?P<\\w+(?:\\s+\\p{alnum}+)?>)",
          "beginCaptures": {
            "1": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp"
            },
            "2": {
              "name": "entity.name.tag.named.group.regexp"
            }
          },
          "end": "(\\)|(?=\"\"\"))",
          "endCaptures": {
            "1": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "meta.named.regexp",
          "patterns": [
            {
              "include": "#double-three-regexp-expression"
            },
            {
              "include": "#comments-string-double-three"
            }
          ]
        },
        "double-three-regexp-parentheses": {
          "begin": "\\(",
          "beginCaptures": {
            "0": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp"
            }
          },
          "end": "(\\)|(?=\"\"\"))",
          "endCaptures": {
            "1": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#double-three-regexp-expression"
            },
            {
              "include": "#comments-string-double-three"
            }
          ]
        },
        "double-three-regexp-parentheses-non-capturing": {
          "begin": "\\(\\?:",
          "beginCaptures": {
            "0": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp"
            }
          },
          "end": "(\\)|(?=\"\"\"))",
          "endCaptures": {
            "1": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#double-three-regexp-expression"
            },
            {
              "include": "#comments-string-double-three"
            }
          ]
        },
        "ellipsis": {
          "match": "\\.\\.\\.",
          "name": "constant.other.ellipsis.python"
        },
        "escape-sequence": {
          "match": "\\\\(x\\h{2}|[0-7]{1,3}|[\"'\\\\abfnrtv])",
          "name": "constant.character.escape.python"
        },
        "escape-sequence-unicode": {
          "patterns": [
            {
              "match": "\\\\(u\\h{4}|U\\h{8}|N\\{[\\w\\s]+?})",
              "name": "constant.character.escape.python"
            }
          ]
        },
        "expression": {
          "patterns": [
            {
              "include": "#expression-base"
            },
            {
              "include": "#member-access"
            },
            {
              "match": "\\b([_[:alpha:]]\\w*)\\b"
            }
          ]
        },
        "expression-bare": {
          "patterns": [
            {
              "include": "#backticks"
            },
            {
              "include": "#illegal-anno"
            },
            {
              "include": "#literal"
            },
            {
              "include": "#regexp"
            },
            {
              "include": "#string"
            },
            {
              "include": "#lambda"
            },
            {
              "include": "#generator"
            },
            {
              "include": "#illegal-operator"
            },
            {
              "include": "#operator"
            },
            {
              "include": "#curly-braces"
            },
            {
              "include": "#item-access"
            },
            {
              "include": "#list"
            },
            {
              "include": "#odd-function-call"
            },
            {
              "include": "#round-braces"
            },
            {
              "include": "#function-call"
            },
            {
              "include": "#builtin-functions"
            },
            {
              "include": "#builtin-types"
            },
            {
              "include": "#builtin-exceptions"
            },
            {
              "include": "#magic-names"
            },
            {
              "include": "#special-names"
            },
            {
              "include": "#illegal-names"
            },
            {
              "include": "#special-variables"
            },
            {
              "include": "#ellipsis"
            },
            {
              "include": "#punctuation"
            },
            {
              "include": "#line-continuation"
            }
          ]
        },
        "expression-base": {
          "patterns": [
            {
              "include": "#comments"
            },
            {
              "include": "#expression-bare"
            },
            {
              "include": "#line-continuation"
            }
          ]
        },
        "f-expression": {
          "patterns": [
            {
              "include": "#expression-bare"
            },
            {
              "include": "#member-access"
            },
            {
              "match": "\\b([_[:alpha:]]\\w*)\\b"
            }
          ]
        },
        "fregexp-base-expression": {
          "patterns": [
            {
              "include": "#fregexp-quantifier"
            },
            {
              "include": "#fstring-formatting-braces"
            },
            {
              "match": "\\{.*?}"
            },
            {
              "include": "#regexp-base-common"
            }
          ]
        },
        "fregexp-quantifier": {
          "match": "\\{\\{(\\d+|\\d+,(\\d+)?|,\\d+)}}",
          "name": "keyword.operator.quantifier.regexp"
        },
        "fstring-fnorm-quoted-multi-line": {
          "begin": "\\b([Ff])([BUbu])?('''|\"\"\")",
          "beginCaptures": {
            "1": {
              "name": "string.interpolated.python string.quoted.multi.python storage.type.string.python"
            },
            "2": {
              "name": "invalid.illegal.prefix.python"
            },
            "3": {
              "name": "punctuation.definition.string.begin.python string.interpolated.python string.quoted.multi.python"
            }
          },
          "end": "(\\3)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.python string.interpolated.python string.quoted.multi.python"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "meta.fstring.python",
          "patterns": [
            {
              "include": "#fstring-guts"
            },
            {
              "include": "#fstring-illegal-multi-brace"
            },
            {
              "include": "#fstring-multi-brace"
            },
            {
              "include": "#fstring-multi-core"
            }
          ]
        },
        "fstring-fnorm-quoted-single-line": {
          "begin": "\\b([Ff])([BUbu])?(([\"']))",
          "beginCaptures": {
            "1": {
              "name": "string.interpolated.python string.quoted.single.python storage.type.string.python"
            },
            "2": {
              "name": "invalid.illegal.prefix.python"
            },
            "3": {
              "name": "punctuation.definition.string.begin.python string.interpolated.python string.quoted.single.python"
            }
          },
          "end": "(\\3)|((?<!\\\\)\\n)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.python string.interpolated.python string.quoted.single.python"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "meta.fstring.python",
          "patterns": [
            {
              "include": "#fstring-guts"
            },
            {
              "include": "#fstring-illegal-single-brace"
            },
            {
              "include": "#fstring-single-brace"
            },
            {
              "include": "#fstring-single-core"
            }
          ]
        },
        "fstring-formatting": {
          "patterns": [
            {
              "include": "#fstring-formatting-braces"
            },
            {
              "include": "#fstring-formatting-singe-brace"
            }
          ]
        },
        "fstring-formatting-braces": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "name": "constant.character.format.placeholder.other.python"
                },
                "2": {
                  "name": "invalid.illegal.brace.python"
                },
                "3": {
                  "name": "constant.character.format.placeholder.other.python"
                }
              },
              "match": "(\\{)(\\s*?)(})"
            },
            {
              "match": "(\\{\\{|}})",
              "name": "constant.character.escape.python"
            }
          ]
        },
        "fstring-formatting-singe-brace": {
          "match": "(}(?!}))",
          "name": "invalid.illegal.brace.python"
        },
        "fstring-guts": {
          "patterns": [
            {
              "include": "#escape-sequence-unicode"
            },
            {
              "include": "#escape-sequence"
            },
            {
              "include": "#string-line-continuation"
            },
            {
              "include": "#fstring-formatting"
            }
          ]
        },
        "fstring-illegal-multi-brace": {
          "patterns": [
            {
              "include": "#impossible"
            }
          ]
        },
        "fstring-illegal-single-brace": {
          "begin": "(\\{)(?=[^\\n}]*$\\n?)",
          "beginCaptures": {
            "1": {
              "name": "constant.character.format.placeholder.other.python"
            }
          },
          "end": "(})|(?=\\n)",
          "endCaptures": {
            "1": {
              "name": "constant.character.format.placeholder.other.python"
            }
          },
          "patterns": [
            {
              "include": "#fstring-terminator-single"
            },
            {
              "include": "#f-expression"
            }
          ]
        },
        "fstring-multi-brace": {
          "begin": "(\\{)",
          "beginCaptures": {
            "1": {
              "name": "constant.character.format.placeholder.other.python"
            }
          },
          "end": "(})",
          "endCaptures": {
            "1": {
              "name": "constant.character.format.placeholder.other.python"
            }
          },
          "patterns": [
            {
              "include": "#fstring-terminator-multi"
            },
            {
              "include": "#f-expression"
            }
          ]
        },
        "fstring-multi-core": {
          "match": "(.+?)($(\\n?)|(?=[\\\\{}]|'''|\"\"\"))|\\n",
          "name": "string.interpolated.python string.quoted.multi.python"
        },
        "fstring-normf-quoted-multi-line": {
          "begin": "\\b([BUbu])([Ff])('''|\"\"\")",
          "beginCaptures": {
            "1": {
              "name": "invalid.illegal.prefix.python"
            },
            "2": {
              "name": "string.interpolated.python string.quoted.multi.python storage.type.string.python"
            },
            "3": {
              "name": "punctuation.definition.string.begin.python string.quoted.multi.python"
            }
          },
          "end": "(\\3)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.python string.interpolated.python string.quoted.multi.python"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "meta.fstring.python",
          "patterns": [
            {
              "include": "#fstring-guts"
            },
            {
              "include": "#fstring-illegal-multi-brace"
            },
            {
              "include": "#fstring-multi-brace"
            },
            {
              "include": "#fstring-multi-core"
            }
          ]
        },
        "fstring-normf-quoted-single-line": {
          "begin": "\\b([BUbu])([Ff])(([\"']))",
          "beginCaptures": {
            "1": {
              "name": "invalid.illegal.prefix.python"
            },
            "2": {
              "name": "string.interpolated.python string.quoted.single.python storage.type.string.python"
            },
            "3": {
              "name": "punctuation.definition.string.begin.python string.quoted.single.python"
            }
          },
          "end": "(\\3)|((?<!\\\\)\\n)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.python string.interpolated.python string.quoted.single.python"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "meta.fstring.python",
          "patterns": [
            {
              "include": "#fstring-guts"
            },
            {
              "include": "#fstring-illegal-single-brace"
            },
            {
              "include": "#fstring-single-brace"
            },
            {
              "include": "#fstring-single-core"
            }
          ]
        },
        "fstring-raw-guts": {
          "patterns": [
            {
              "include": "#string-consume-escape"
            },
            {
              "include": "#fstring-formatting"
            }
          ]
        },
        "fstring-raw-multi-core": {
          "match": "(.+?)($(\\n?)|(?=[\\\\{}]|'''|\"\"\"))|\\n",
          "name": "string.interpolated.python string.quoted.raw.multi.python"
        },
        "fstring-raw-quoted-multi-line": {
          "begin": "\\b([Rr][Ff]|[Ff][Rr])('''|\"\"\")",
          "beginCaptures": {
            "1": {
              "name": "string.interpolated.python string.quoted.raw.multi.python storage.type.string.python"
            },
            "2": {
              "name": "punctuation.definition.string.begin.python string.quoted.raw.multi.python"
            }
          },
          "end": "(\\2)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.python string.interpolated.python string.quoted.raw.multi.python"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "meta.fstring.python",
          "patterns": [
            {
              "include": "#fstring-raw-guts"
            },
            {
              "include": "#fstring-illegal-multi-brace"
            },
            {
              "include": "#fstring-multi-brace"
            },
            {
              "include": "#fstring-raw-multi-core"
            }
          ]
        },
        "fstring-raw-quoted-single-line": {
          "begin": "\\b([Rr][Ff]|[Ff][Rr])(([\"']))",
          "beginCaptures": {
            "1": {
              "name": "string.interpolated.python string.quoted.raw.single.python storage.type.string.python"
            },
            "2": {
              "name": "punctuation.definition.string.begin.python string.quoted.raw.single.python"
            }
          },
          "end": "(\\2)|((?<!\\\\)\\n)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.python string.interpolated.python string.quoted.raw.single.python"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "meta.fstring.python",
          "patterns": [
            {
              "include": "#fstring-raw-guts"
            },
            {
              "include": "#fstring-illegal-single-brace"
            },
            {
              "include": "#fstring-single-brace"
            },
            {
              "include": "#fstring-raw-single-core"
            }
          ]
        },
        "fstring-raw-single-core": {
          "match": "(.+?)($(\\n?)|(?=[\\\\{}]|([\"'])|((?<!\\\\)\\n)))|\\n",
          "name": "string.interpolated.python string.quoted.raw.single.python"
        },
        "fstring-single-brace": {
          "begin": "(\\{)",
          "beginCaptures": {
            "1": {
              "name": "constant.character.format.placeholder.other.python"
            }
          },
          "end": "(})|(?=\\n)",
          "endCaptures": {
            "1": {
              "name": "constant.character.format.placeholder.other.python"
            }
          },
          "patterns": [
            {
              "include": "#fstring-terminator-single"
            },
            {
              "include": "#f-expression"
            }
          ]
        },
        "fstring-single-core": {
          "match": "(.+?)($(\\n?)|(?=[\\\\{}]|([\"'])|((?<!\\\\)\\n)))|\\n",
          "name": "string.interpolated.python string.quoted.single.python"
        },
        "fstring-terminator-multi": {
          "patterns": [
            {
              "match": "(=(![ars])?)(?=})",
              "name": "storage.type.format.python"
            },
            {
              "match": "(=?![ars])(?=})",
              "name": "storage.type.format.python"
            },
            {
              "captures": {
                "1": {
                  "name": "storage.type.format.python"
                },
                "2": {
                  "name": "storage.type.format.python"
                }
              },
              "match": "(=?(?:![ars])?)(:\\w?[<=>^]?[- +]?#?\\d*,?(\\.\\d+)?[%EFGXb-gnosx]?)(?=})"
            },
            {
              "include": "#fstring-terminator-multi-tail"
            }
          ]
        },
        "fstring-terminator-multi-tail": {
          "begin": "(=?(?:![ars])?)(:)(?=.*?\\{)",
          "beginCaptures": {
            "1": {
              "name": "storage.type.format.python"
            },
            "2": {
              "name": "storage.type.format.python"
            }
          },
          "end": "(?=})",
          "patterns": [
            {
              "include": "#fstring-illegal-multi-brace"
            },
            {
              "include": "#fstring-multi-brace"
            },
            {
              "match": "([%EFGXb-gnosx])(?=})",
              "name": "storage.type.format.python"
            },
            {
              "match": "(\\.\\d+)",
              "name": "storage.type.format.python"
            },
            {
              "match": "(,)",
              "name": "storage.type.format.python"
            },
            {
              "match": "(\\d+)",
              "name": "storage.type.format.python"
            },
            {
              "match": "(#)",
              "name": "storage.type.format.python"
            },
            {
              "match": "([- +])",
              "name": "storage.type.format.python"
            },
            {
              "match": "([<=>^])",
              "name": "storage.type.format.python"
            },
            {
              "match": "(\\w)",
              "name": "storage.type.format.python"
            }
          ]
        },
        "fstring-terminator-single": {
          "patterns": [
            {
              "match": "(=(![ars])?)(?=})",
              "name": "storage.type.format.python"
            },
            {
              "match": "(=?![ars])(?=})",
              "name": "storage.type.format.python"
            },
            {
              "captures": {
                "1": {
                  "name": "storage.type.format.python"
                },
                "2": {
                  "name": "storage.type.format.python"
                }
              },
              "match": "(=?(?:![ars])?)(:\\w?[<=>^]?[- +]?#?\\d*,?(\\.\\d+)?[%EFGXb-gnosx]?)(?=})"
            },
            {
              "include": "#fstring-terminator-single-tail"
            }
          ]
        },
        "fstring-terminator-single-tail": {
          "begin": "(=?(?:![ars])?)(:)(?=.*?\\{)",
          "beginCaptures": {
            "1": {
              "name": "storage.type.format.python"
            },
            "2": {
              "name": "storage.type.format.python"
            }
          },
          "end": "(?=})|(?=\\n)",
          "patterns": [
            {
              "include": "#fstring-illegal-single-brace"
            },
            {
              "include": "#fstring-single-brace"
            },
            {
              "match": "([%EFGXb-gnosx])(?=})",
              "name": "storage.type.format.python"
            },
            {
              "match": "(\\.\\d+)",
              "name": "storage.type.format.python"
            },
            {
              "match": "(,)",
              "name": "storage.type.format.python"
            },
            {
              "match": "(\\d+)",
              "name": "storage.type.format.python"
            },
            {
              "match": "(#)",
              "name": "storage.type.format.python"
            },
            {
              "match": "([- +])",
              "name": "storage.type.format.python"
            },
            {
              "match": "([<=>^])",
              "name": "storage.type.format.python"
            },
            {
              "match": "(\\w)",
              "name": "storage.type.format.python"
            }
          ]
        },
        "function-arguments": {
          "begin": "(\\()",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.arguments.begin.python"
            }
          },
          "contentName": "meta.function-call.arguments.python",
          "end": "(?=\\))(?!\\)\\s*\\()",
          "patterns": [
            {
              "match": "(,)",
              "name": "punctuation.separator.arguments.python"
            },
            {
              "captures": {
                "1": {
                  "name": "keyword.operator.unpacking.arguments.python"
                }
              },
              "match": "(?:(?<=[(,])|^)\\s*(\\*{1,2})"
            },
            {
              "include": "#lambda-incomplete"
            },
            {
              "include": "#illegal-names"
            },
            {
              "captures": {
                "1": {
                  "name": "variable.parameter.function-call.python"
                },
                "2": {
                  "name": "keyword.operator.assignment.python"
                }
              },
              "match": "\\b([_[:alpha:]]\\w*)\\s*(=)(?!=)"
            },
            {
              "match": "=(?!=)",
              "name": "keyword.operator.assignment.python"
            },
            {
              "include": "#expression"
            },
            {
              "captures": {
                "1": {
                  "name": "punctuation.definition.arguments.end.python"
                },
                "2": {
                  "name": "punctuation.definition.arguments.begin.python"
                }
              },
              "match": "\\s*(\\))\\s*(\\()"
            }
          ]
        },
        "function-call": {
          "begin": "\\b(?=([_[:alpha:]]\\w*)\\s*(\\())",
          "end": "(\\))",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.arguments.end.python"
            }
          },
          "name": "meta.function-call.python",
          "patterns": [
            {
              "include": "#special-variables"
            },
            {
              "include": "#function-name"
            },
            {
              "include": "#function-arguments"
            }
          ]
        },
        "function-declaration": {
          "begin": "\\s*(?:\\b(async)\\s+)?\\b(def)\\s+(?=[_[:alpha:]]\\p{word}*\\s*\\()",
          "beginCaptures": {
            "1": {
              "name": "storage.type.function.async.python"
            },
            "2": {
              "name": "storage.type.function.python"
            }
          },
          "end": "(:|(?=[\\n\"#']))",
          "endCaptures": {
            "1": {
              "name": "punctuation.section.function.begin.python"
            }
          },
          "name": "meta.function.python",
          "patterns": [
            {
              "include": "#function-def-name"
            },
            {
              "include": "#parameters"
            },
            {
              "include": "#line-continuation"
            },
            {
              "include": "#return-annotation"
            }
          ]
        },
        "function-def-name": {
          "patterns": [
            {
              "include": "#illegal-object-name"
            },
            {
              "include": "#builtin-possible-callables"
            },
            {
              "match": "\\b([_[:alpha:]]\\w*)\\b",
              "name": "entity.name.function.python"
            }
          ]
        },
        "function-name": {
          "patterns": [
            {
              "include": "#builtin-possible-callables"
            },
            {
              "match": "\\b([_[:alpha:]]\\w*)\\b",
              "name": "meta.function-call.generic.python"
            }
          ]
        },
        "generator": {
          "begin": "\\bfor\\b",
          "beginCaptures": {
            "0": {
              "name": "keyword.control.flow.python"
            }
          },
          "end": "\\bin\\b",
          "endCaptures": {
            "0": {
              "name": "keyword.control.flow.python"
            }
          },
          "patterns": [
            {
              "include": "#expression"
            }
          ]
        },
        "illegal-anno": {
          "match": "->",
          "name": "invalid.illegal.annotation.python"
        },
        "illegal-names": {
          "captures": {
            "1": {
              "name": "keyword.control.flow.python"
            },
            "2": {
              "name": "keyword.control.import.python"
            }
          },
          "match": "\\b(?:(and|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|in|is|(?<=\\.)lambda|lambda(?=\\s*[.=])|nonlocal|not|or|pass|raise|return|try|while|with|yield)|(as|import))\\b"
        },
        "illegal-object-name": {
          "match": "\\b(True|False|None)\\b",
          "name": "keyword.illegal.name.python"
        },
        "illegal-operator": {
          "patterns": [
            {
              "match": "&&|\\|\\||--|\\+\\+",
              "name": "invalid.illegal.operator.python"
            },
            {
              "match": "[$?]",
              "name": "invalid.illegal.operator.python"
            },
            {
              "match": "!\\b",
              "name": "invalid.illegal.operator.python"
            }
          ]
        },
        "import": {
          "patterns": [
            {
              "begin": "\\b(?<!\\.)(from)\\b(?=.+import)",
              "beginCaptures": {
                "1": {
                  "name": "keyword.control.import.python"
                }
              },
              "end": "$|(?=import)",
              "patterns": [
                {
                  "match": "\\.+",
                  "name": "punctuation.separator.period.python"
                },
                {
                  "include": "#expression"
                }
              ]
            },
            {
              "begin": "\\b(?<!\\.)(import)\\b",
              "beginCaptures": {
                "1": {
                  "name": "keyword.control.import.python"
                }
              },
              "end": "$",
              "patterns": [
                {
                  "match": "\\b(?<!\\.)as\\b",
                  "name": "keyword.control.import.python"
                },
                {
                  "include": "#expression"
                }
              ]
            }
          ]
        },
        "impossible": {
          "match": "$.^"
        },
        "inheritance-identifier": {
          "captures": {
            "1": {
              "name": "entity.other.inherited-class.python"
            }
          },
          "match": "\\b([_[:alpha:]]\\w*)\\b"
        },
        "inheritance-name": {
          "patterns": [
            {
              "include": "#lambda-incomplete"
            },
            {
              "include": "#builtin-possible-callables"
            },
            {
              "include": "#inheritance-identifier"
            }
          ]
        },
        "item-access": {
          "patterns": [
            {
              "begin": "\\b(?=[_[:alpha:]]\\w*\\s*\\[)",
              "end": "(])",
              "endCaptures": {
                "1": {
                  "name": "punctuation.definition.arguments.end.python"
                }
              },
              "name": "meta.item-access.python",
              "patterns": [
                {
                  "include": "#item-name"
                },
                {
                  "include": "#item-index"
                },
                {
                  "include": "#expression"
                }
              ]
            }
          ]
        },
        "item-index": {
          "begin": "(\\[)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.arguments.begin.python"
            }
          },
          "contentName": "meta.item-access.arguments.python",
          "end": "(?=])",
          "patterns": [
            {
              "match": ":",
              "name": "punctuation.separator.slice.python"
            },
            {
              "include": "#expression"
            }
          ]
        },
        "item-name": {
          "patterns": [
            {
              "include": "#special-variables"
            },
            {
              "include": "#builtin-functions"
            },
            {
              "include": "#special-names"
            },
            {
              "match": "\\b([_[:alpha:]]\\w*)\\b",
              "name": "meta.indexed-name.python"
            }
          ]
        },
        "lambda": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "name": "keyword.control.flow.python"
                }
              },
              "match": "((?<=\\.)lambda|lambda(?=\\s*[.=]))"
            },
            {
              "captures": {
                "1": {
                  "name": "storage.type.function.lambda.python"
                }
              },
              "match": "\\b(lambda)\\s*?(?=[\\n,]|$)"
            },
            {
              "begin": "\\b(lambda)\\b",
              "beginCaptures": {
                "1": {
                  "name": "storage.type.function.lambda.python"
                }
              },
              "contentName": "meta.function.lambda.parameters.python",
              "end": "(:)|(\\n)",
              "endCaptures": {
                "1": {
                  "name": "punctuation.section.function.lambda.begin.python"
                }
              },
              "name": "meta.lambda-function.python",
              "patterns": [
                {
                  "match": "/",
                  "name": "keyword.operator.positional.parameter.python"
                },
                {
                  "match": "(\\*\\*?)",
                  "name": "keyword.operator.unpacking.parameter.python"
                },
                {
                  "include": "#lambda-nested-incomplete"
                },
                {
                  "include": "#illegal-names"
                },
                {
                  "captures": {
                    "1": {
                      "name": "variable.parameter.function.language.python"
                    },
                    "2": {
                      "name": "punctuation.separator.parameters.python"
                    }
                  },
                  "match": "([_[:alpha:]]\\w*)\\s*(?:(,)|(?=:|$))"
                },
                {
                  "include": "#comments"
                },
                {
                  "include": "#backticks"
                },
                {
                  "include": "#illegal-anno"
                },
                {
                  "include": "#lambda-parameter-with-default"
                },
                {
                  "include": "#line-continuation"
                },
                {
                  "include": "#illegal-operator"
                }
              ]
            }
          ]
        },
        "lambda-incomplete": {
          "match": "\\blambda(?=\\s*[),])",
          "name": "storage.type.function.lambda.python"
        },
        "lambda-nested-incomplete": {
          "match": "\\blambda(?=\\s*[),:])",
          "name": "storage.type.function.lambda.python"
        },
        "lambda-parameter-with-default": {
          "begin": "\\b([_[:alpha:]]\\w*)\\s*(=)",
          "beginCaptures": {
            "1": {
              "name": "variable.parameter.function.language.python"
            },
            "2": {
              "name": "keyword.operator.python"
            }
          },
          "end": "(,)|(?=:|$)",
          "endCaptures": {
            "1": {
              "name": "punctuation.separator.parameters.python"
            }
          },
          "patterns": [
            {
              "include": "#expression"
            }
          ]
        },
        "line-continuation": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "name": "punctuation.separator.continuation.line.python"
                },
                "2": {
                  "name": "invalid.illegal.line.continuation.python"
                }
              },
              "match": "(\\\\)\\s*(\\S.*$\\n?)"
            },
            {
              "begin": "(\\\\)\\s*$\\n?",
              "beginCaptures": {
                "1": {
                  "name": "punctuation.separator.continuation.line.python"
                }
              },
              "end": "(?=^\\s*$)|(?!(\\s*[Rr]?('''|\"\"\"|[\"']))|\\G()$)",
              "patterns": [
                {
                  "include": "#regexp"
                },
                {
                  "include": "#string"
                }
              ]
            }
          ]
        },
        "list": {
          "begin": "\\[",
          "beginCaptures": {
            "0": {
              "name": "punctuation.definition.list.begin.python"
            }
          },
          "end": "]",
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.list.end.python"
            }
          },
          "patterns": [
            {
              "include": "#expression"
            }
          ]
        },
        "literal": {
          "patterns": [
            {
              "match": "\\b(True|False|None|NotImplemented|Ellipsis)\\b",
              "name": "constant.language.python"
            },
            {
              "include": "#number"
            }
          ]
        },
        "loose-default": {
          "begin": "(=)",
          "beginCaptures": {
            "1": {
              "name": "keyword.operator.python"
            }
          },
          "end": "(,)|(?=\\))",
          "endCaptures": {
            "1": {
              "name": "punctuation.separator.parameters.python"
            }
          },
          "patterns": [
            {
              "include": "#expression"
            }
          ]
        },
        "magic-function-names": {
          "captures": {
            "1": {
              "name": "support.function.magic.python"
            }
          },
          "match": "\\b(__(?:abs|add|aenter|aexit|aiter|and|anext|await|bool|call|ceil|class_getitem|cmp|coerce|complex|contains|copy|deepcopy|del|delattr|delete|delitem|delslice|dir|div|divmod|enter|eq|exit|float|floor|floordiv|format|get??|getattr|getattribute|getinitargs|getitem|getnewargs|getslice|getstate|gt|hash|hex|iadd|iand|idiv|ifloordiv||ilshift|imod|imul|index|init|instancecheck|int|invert|ior|ipow|irshift|isub|iter|itruediv|ixor|len??|long|lshift|lt|missing|mod|mul|neg??|new|next|nonzero|oct|or|pos|pow|radd|rand|rdiv|rdivmod|reduce|reduce_ex|repr|reversed|rfloordiv||rlshift|rmod|rmul|ror|round|rpow|rrshift|rshift|rsub|rtruediv|rxor|set|setattr|setitem|set_name|setslice|setstate|sizeof|str|sub|subclasscheck|truediv|trunc|unicode|xor|matmul|rmatmul|imatmul|init_subclass|set_name|fspath|bytes|prepare|length_hint)__)\\b"
        },
        "magic-names": {
          "patterns": [
            {
              "include": "#magic-function-names"
            },
            {
              "include": "#magic-variable-names"
            }
          ]
        },
        "magic-variable-names": {
          "captures": {
            "1": {
              "name": "support.variable.magic.python"
            }
          },
          "match": "\\b(__(?:all|annotations|bases|builtins|class|closure|code|debug|defaults|dict|doc|file|func|globals|kwdefaults|match_args|members|metaclass|methods|module|mro|mro_entries|name|qualname|post_init|self|signature|slots|subclasses|version|weakref|wrapped|classcell|spec|path|package|future|traceback)__)\\b"
        },
        "member-access": {
          "begin": "(\\.)\\s*(?!\\.)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.separator.period.python"
            }
          },
          "end": "(?<=\\S)(?=\\W)|(^|(?<=\\s))(?=[^\\\\\\w\\s])|$",
          "name": "meta.member.access.python",
          "patterns": [
            {
              "include": "#function-call"
            },
            {
              "include": "#member-access-base"
            },
            {
              "include": "#member-access-attribute"
            }
          ]
        },
        "member-access-attribute": {
          "match": "\\b([_[:alpha:]]\\w*)\\b",
          "name": "meta.attribute.python"
        },
        "member-access-base": {
          "patterns": [
            {
              "include": "#magic-names"
            },
            {
              "include": "#illegal-names"
            },
            {
              "include": "#illegal-object-name"
            },
            {
              "include": "#special-names"
            },
            {
              "include": "#line-continuation"
            },
            {
              "include": "#item-access"
            }
          ]
        },
        "member-access-class": {
          "begin": "(\\.)\\s*(?!\\.)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.separator.period.python"
            }
          },
          "end": "(?<=\\S)(?=\\W)|$",
          "name": "meta.member.access.python",
          "patterns": [
            {
              "include": "#call-wrapper-inheritance"
            },
            {
              "include": "#member-access-base"
            },
            {
              "include": "#inheritance-identifier"
            }
          ]
        },
        "number": {
          "name": "constant.numeric.python",
          "patterns": [
            {
              "include": "#number-float"
            },
            {
              "include": "#number-dec"
            },
            {
              "include": "#number-hex"
            },
            {
              "include": "#number-oct"
            },
            {
              "include": "#number-bin"
            },
            {
              "include": "#number-long"
            },
            {
              "match": "\\b[0-9]+\\w+",
              "name": "invalid.illegal.name.python"
            }
          ]
        },
        "number-bin": {
          "captures": {
            "1": {
              "name": "storage.type.number.python"
            }
          },
          "match": "(?<![.\\w])(0[Bb])(_?[01])+\\b",
          "name": "constant.numeric.bin.python"
        },
        "number-dec": {
          "captures": {
            "1": {
              "name": "storage.type.imaginary.number.python"
            },
            "2": {
              "name": "invalid.illegal.dec.python"
            }
          },
          "match": "(?<![.\\w])(?:[1-9](?:_?[0-9])*|0+|[0-9](?:_?[0-9])*([Jj])|0([0-9]+)(?![.Ee]))\\b",
          "name": "constant.numeric.dec.python"
        },
        "number-float": {
          "captures": {
            "1": {
              "name": "storage.type.imaginary.number.python"
            }
          },
          "match": "(?<!\\w)(?:(?:\\.[0-9](?:_?[0-9])*|[0-9](?:_?[0-9])*\\.[0-9](?:_?[0-9])*|[0-9](?:_?[0-9])*\\.)(?:[Ee][-+]?[0-9](?:_?[0-9])*)?|[0-9](?:_?[0-9])*[Ee][-+]?[0-9](?:_?[0-9])*)([Jj])?\\b",
          "name": "constant.numeric.float.python"
        },
        "number-hex": {
          "captures": {
            "1": {
              "name": "storage.type.number.python"
            }
          },
          "match": "(?<![.\\w])(0[Xx])(_?\\h)+\\b",
          "name": "constant.numeric.hex.python"
        },
        "number-long": {
          "captures": {
            "2": {
              "name": "storage.type.number.python"
            }
          },
          "match": "(?<![.\\w])([1-9][0-9]*|0)([Ll])\\b",
          "name": "constant.numeric.bin.python"
        },
        "number-oct": {
          "captures": {
            "1": {
              "name": "storage.type.number.python"
            }
          },
          "match": "(?<![.\\w])(0[Oo])(_?[0-7])+\\b",
          "name": "constant.numeric.oct.python"
        },
        "odd-function-call": {
          "begin": "(?<=[])])\\s*(?=\\()",
          "end": "(\\))",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.arguments.end.python"
            }
          },
          "patterns": [
            {
              "include": "#function-arguments"
            }
          ]
        },
        "operator": {
          "captures": {
            "1": {
              "name": "keyword.operator.logical.python"
            },
            "2": {
              "name": "keyword.control.flow.python"
            },
            "3": {
              "name": "keyword.operator.bitwise.python"
            },
            "4": {
              "name": "keyword.operator.arithmetic.python"
            },
            "5": {
              "name": "keyword.operator.comparison.python"
            },
            "6": {
              "name": "keyword.operator.assignment.python"
            }
          },
          "match": "\\b(?<!\\.)(?:(and|or|not|in|is)|(for|if|else|await|yield(?:\\s+from)?))(?!\\s*:)\\b|(<<|>>|[\\&^|~])|(\\*\\*|[-%*+]|//|[/@])|(!=|==|>=|<=|[<>])|(:=)"
        },
        "parameter-special": {
          "captures": {
            "1": {
              "name": "variable.parameter.function.language.python"
            },
            "2": {
              "name": "variable.parameter.function.language.special.self.python"
            },
            "3": {
              "name": "variable.parameter.function.language.special.cls.python"
            },
            "4": {
              "name": "punctuation.separator.parameters.python"
            }
          },
          "match": "\\b((self)|(cls))\\b\\s*(?:(,)|(?=\\)))"
        },
        "parameters": {
          "begin": "(\\()",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.parameters.begin.python"
            }
          },
          "end": "(\\))",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.parameters.end.python"
            }
          },
          "name": "meta.function.parameters.python",
          "patterns": [
            {
              "match": "/",
              "name": "keyword.operator.positional.parameter.python"
            },
            {
              "match": "(\\*\\*?)",
              "name": "keyword.operator.unpacking.parameter.python"
            },
            {
              "include": "#lambda-incomplete"
            },
            {
              "include": "#illegal-names"
            },
            {
              "include": "#illegal-object-name"
            },
            {
              "include": "#parameter-special"
            },
            {
              "captures": {
                "1": {
                  "name": "variable.parameter.function.language.python"
                },
                "2": {
                  "name": "punctuation.separator.parameters.python"
                }
              },
              "match": "([_[:alpha:]]\\w*)\\s*(?:(,)|(?=[\\n#)=]))"
            },
            {
              "include": "#comments"
            },
            {
              "include": "#loose-default"
            },
            {
              "include": "#annotated-parameter"
            }
          ]
        },
        "punctuation": {
          "patterns": [
            {
              "match": ":",
              "name": "punctuation.separator.colon.python"
            },
            {
              "match": ",",
              "name": "punctuation.separator.element.python"
            }
          ]
        },
        "regexp": {
          "patterns": [
            {
              "include": "#regexp-single-three-line"
            },
            {
              "include": "#regexp-double-three-line"
            },
            {
              "include": "#regexp-single-one-line"
            },
            {
              "include": "#regexp-double-one-line"
            }
          ]
        },
        "regexp-backreference": {
          "captures": {
            "1": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.backreference.named.begin.regexp"
            },
            "2": {
              "name": "entity.name.tag.named.backreference.regexp"
            },
            "3": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.backreference.named.end.regexp"
            }
          },
          "match": "(\\()(\\?P=\\w+(?:\\s+\\p{alnum}+)?)(\\))",
          "name": "meta.backreference.named.regexp"
        },
        "regexp-backreference-number": {
          "captures": {
            "1": {
              "name": "entity.name.tag.backreference.regexp"
            }
          },
          "match": "(\\\\[1-9]\\d?)",
          "name": "meta.backreference.regexp"
        },
        "regexp-base-common": {
          "patterns": [
            {
              "match": "\\.",
              "name": "support.other.match.any.regexp"
            },
            {
              "match": "\\^",
              "name": "support.other.match.begin.regexp"
            },
            {
              "match": "\\$",
              "name": "support.other.match.end.regexp"
            },
            {
              "match": "[*+?]\\??",
              "name": "keyword.operator.quantifier.regexp"
            },
            {
              "match": "\\|",
              "name": "keyword.operator.disjunction.regexp"
            },
            {
              "include": "#regexp-escape-sequence"
            }
          ]
        },
        "regexp-base-expression": {
          "patterns": [
            {
              "include": "#regexp-quantifier"
            },
            {
              "include": "#regexp-base-common"
            }
          ]
        },
        "regexp-charecter-set-escapes": {
          "patterns": [
            {
              "match": "\\\\[\\\\abfnrtv]",
              "name": "constant.character.escape.regexp"
            },
            {
              "include": "#regexp-escape-special"
            },
            {
              "match": "\\\\([0-7]{1,3})",
              "name": "constant.character.escape.regexp"
            },
            {
              "include": "#regexp-escape-character"
            },
            {
              "include": "#regexp-escape-unicode"
            },
            {
              "include": "#regexp-escape-catchall"
            }
          ]
        },
        "regexp-double-one-line": {
          "begin": "\\b(([Uu]r)|([Bb]r)|(r[Bb]?))(\")",
          "beginCaptures": {
            "2": {
              "name": "invalid.deprecated.prefix.python"
            },
            "3": {
              "name": "storage.type.string.python"
            },
            "4": {
              "name": "storage.type.string.python"
            },
            "5": {
              "name": "punctuation.definition.string.begin.python"
            }
          },
          "end": "(\")|(?<!\\\\)(\\n)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.python"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "string.regexp.quoted.single.python",
          "patterns": [
            {
              "include": "#double-one-regexp-expression"
            }
          ]
        },
        "regexp-double-three-line": {
          "begin": "\\b(([Uu]r)|([Bb]r)|(r[Bb]?))(\"\"\")",
          "beginCaptures": {
            "2": {
              "name": "invalid.deprecated.prefix.python"
            },
            "3": {
              "name": "storage.type.string.python"
            },
            "4": {
              "name": "storage.type.string.python"
            },
            "5": {
              "name": "punctuation.definition.string.begin.python"
            }
          },
          "end": "(\"\"\")",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.python"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "string.regexp.quoted.multi.python",
          "patterns": [
            {
              "include": "#double-three-regexp-expression"
            }
          ]
        },
        "regexp-escape-catchall": {
          "match": "\\\\(.|\\n)",
          "name": "constant.character.escape.regexp"
        },
        "regexp-escape-character": {
          "match": "\\\\(x\\h{2}|0[0-7]{1,2}|[0-7]{3})",
          "name": "constant.character.escape.regexp"
        },
        "regexp-escape-sequence": {
          "patterns": [
            {
              "include": "#regexp-escape-special"
            },
            {
              "include": "#regexp-escape-character"
            },
            {
              "include": "#regexp-escape-unicode"
            },
            {
              "include": "#regexp-backreference-number"
            },
            {
              "include": "#regexp-escape-catchall"
            }
          ]
        },
        "regexp-escape-special": {
          "match": "\\\\([ABDSWZbdsw])",
          "name": "support.other.escape.special.regexp"
        },
        "regexp-escape-unicode": {
          "match": "\\\\(u\\h{4}|U\\h{8})",
          "name": "constant.character.unicode.regexp"
        },
        "regexp-flags": {
          "match": "\\(\\?[Laimsux]+\\)",
          "name": "storage.modifier.flag.regexp"
        },
        "regexp-quantifier": {
          "match": "\\{(\\d+|\\d+,(\\d+)?|,\\d+)}",
          "name": "keyword.operator.quantifier.regexp"
        },
        "regexp-single-one-line": {
          "begin": "\\b(([Uu]r)|([Bb]r)|(r[Bb]?))(')",
          "beginCaptures": {
            "2": {
              "name": "invalid.deprecated.prefix.python"
            },
            "3": {
              "name": "storage.type.string.python"
            },
            "4": {
              "name": "storage.type.string.python"
            },
            "5": {
              "name": "punctuation.definition.string.begin.python"
            }
          },
          "end": "(')|(?<!\\\\)(\\n)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.python"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "string.regexp.quoted.single.python",
          "patterns": [
            {
              "include": "#single-one-regexp-expression"
            }
          ]
        },
        "regexp-single-three-line": {
          "begin": "\\b(([Uu]r)|([Bb]r)|(r[Bb]?))(''')",
          "beginCaptures": {
            "2": {
              "name": "invalid.deprecated.prefix.python"
            },
            "3": {
              "name": "storage.type.string.python"
            },
            "4": {
              "name": "storage.type.string.python"
            },
            "5": {
              "name": "punctuation.definition.string.begin.python"
            }
          },
          "end": "(''')",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.python"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "string.regexp.quoted.multi.python",
          "patterns": [
            {
              "include": "#single-three-regexp-expression"
            }
          ]
        },
        "return-annotation": {
          "begin": "(->)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.separator.annotation.result.python"
            }
          },
          "end": "(?=:)",
          "patterns": [
            {
              "include": "#expression"
            }
          ]
        },
        "round-braces": {
          "begin": "\\(",
          "beginCaptures": {
            "0": {
              "name": "punctuation.parenthesis.begin.python"
            }
          },
          "end": "\\)",
          "endCaptures": {
            "0": {
              "name": "punctuation.parenthesis.end.python"
            }
          },
          "patterns": [
            {
              "include": "#expression"
            }
          ]
        },
        "semicolon": {
          "patterns": [
            {
              "match": ";$",
              "name": "invalid.deprecated.semicolon.python"
            }
          ]
        },
        "single-one-regexp-character-set": {
          "patterns": [
            {
              "match": "\\[\\^?](?!.*?])"
            },
            {
              "begin": "(\\[)(\\^)?(])?",
              "beginCaptures": {
                "1": {
                  "name": "punctuation.character.set.begin.regexp constant.other.set.regexp"
                },
                "2": {
                  "name": "keyword.operator.negation.regexp"
                },
                "3": {
                  "name": "constant.character.set.regexp"
                }
              },
              "end": "(]|(?='))|((?=(?<!\\\\)\\n))",
              "endCaptures": {
                "1": {
                  "name": "punctuation.character.set.end.regexp constant.other.set.regexp"
                },
                "2": {
                  "name": "invalid.illegal.newline.python"
                }
              },
              "name": "meta.character.set.regexp",
              "patterns": [
                {
                  "include": "#regexp-charecter-set-escapes"
                },
                {
                  "match": "\\N",
                  "name": "constant.character.set.regexp"
                }
              ]
            }
          ]
        },
        "single-one-regexp-comments": {
          "begin": "\\(\\?#",
          "beginCaptures": {
            "0": {
              "name": "punctuation.comment.begin.regexp"
            }
          },
          "end": "(\\)|(?='))|((?=(?<!\\\\)\\n))",
          "endCaptures": {
            "1": {
              "name": "punctuation.comment.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "comment.regexp",
          "patterns": [
            {
              "include": "#codetags"
            }
          ]
        },
        "single-one-regexp-conditional": {
          "begin": "(\\()\\?\\((\\w+(?:\\s+\\p{alnum}+)?|\\d+)\\)",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.conditional.regexp"
            },
            "1": {
              "name": "punctuation.parenthesis.conditional.begin.regexp"
            }
          },
          "end": "(\\)|(?='))|((?=(?<!\\\\)\\n))",
          "endCaptures": {
            "1": {
              "name": "keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#single-one-regexp-expression"
            }
          ]
        },
        "single-one-regexp-expression": {
          "patterns": [
            {
              "include": "#regexp-base-expression"
            },
            {
              "include": "#single-one-regexp-character-set"
            },
            {
              "include": "#single-one-regexp-comments"
            },
            {
              "include": "#regexp-flags"
            },
            {
              "include": "#single-one-regexp-named-group"
            },
            {
              "include": "#regexp-backreference"
            },
            {
              "include": "#single-one-regexp-lookahead"
            },
            {
              "include": "#single-one-regexp-lookahead-negative"
            },
            {
              "include": "#single-one-regexp-lookbehind"
            },
            {
              "include": "#single-one-regexp-lookbehind-negative"
            },
            {
              "include": "#single-one-regexp-conditional"
            },
            {
              "include": "#single-one-regexp-parentheses-non-capturing"
            },
            {
              "include": "#single-one-regexp-parentheses"
            }
          ]
        },
        "single-one-regexp-lookahead": {
          "begin": "(\\()\\?=",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.lookahead.regexp"
            },
            "1": {
              "name": "punctuation.parenthesis.lookahead.begin.regexp"
            }
          },
          "end": "(\\)|(?='))|((?=(?<!\\\\)\\n))",
          "endCaptures": {
            "1": {
              "name": "keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#single-one-regexp-expression"
            }
          ]
        },
        "single-one-regexp-lookahead-negative": {
          "begin": "(\\()\\?!",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.lookahead.negative.regexp"
            },
            "1": {
              "name": "punctuation.parenthesis.lookahead.begin.regexp"
            }
          },
          "end": "(\\)|(?='))|((?=(?<!\\\\)\\n))",
          "endCaptures": {
            "1": {
              "name": "keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#single-one-regexp-expression"
            }
          ]
        },
        "single-one-regexp-lookbehind": {
          "begin": "(\\()\\?<=",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.lookbehind.regexp"
            },
            "1": {
              "name": "punctuation.parenthesis.lookbehind.begin.regexp"
            }
          },
          "end": "(\\)|(?='))|((?=(?<!\\\\)\\n))",
          "endCaptures": {
            "1": {
              "name": "keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#single-one-regexp-expression"
            }
          ]
        },
        "single-one-regexp-lookbehind-negative": {
          "begin": "(\\()\\?<!",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.lookbehind.negative.regexp"
            },
            "1": {
              "name": "punctuation.parenthesis.lookbehind.begin.regexp"
            }
          },
          "end": "(\\)|(?='))|((?=(?<!\\\\)\\n))",
          "endCaptures": {
            "1": {
              "name": "keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#single-one-regexp-expression"
            }
          ]
        },
        "single-one-regexp-named-group": {
          "begin": "(\\()(\\?P<\\w+(?:\\s+\\p{alnum}+)?>)",
          "beginCaptures": {
            "1": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp"
            },
            "2": {
              "name": "entity.name.tag.named.group.regexp"
            }
          },
          "end": "(\\)|(?='))|((?=(?<!\\\\)\\n))",
          "endCaptures": {
            "1": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "meta.named.regexp",
          "patterns": [
            {
              "include": "#single-one-regexp-expression"
            }
          ]
        },
        "single-one-regexp-parentheses": {
          "begin": "\\(",
          "beginCaptures": {
            "0": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp"
            }
          },
          "end": "(\\)|(?='))|((?=(?<!\\\\)\\n))",
          "endCaptures": {
            "1": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#single-one-regexp-expression"
            }
          ]
        },
        "single-one-regexp-parentheses-non-capturing": {
          "begin": "\\(\\?:",
          "beginCaptures": {
            "0": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp"
            }
          },
          "end": "(\\)|(?='))|((?=(?<!\\\\)\\n))",
          "endCaptures": {
            "1": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#single-one-regexp-expression"
            }
          ]
        },
        "single-three-regexp-character-set": {
          "patterns": [
            {
              "match": "\\[\\^?](?!.*?])"
            },
            {
              "begin": "(\\[)(\\^)?(])?",
              "beginCaptures": {
                "1": {
                  "name": "punctuation.character.set.begin.regexp constant.other.set.regexp"
                },
                "2": {
                  "name": "keyword.operator.negation.regexp"
                },
                "3": {
                  "name": "constant.character.set.regexp"
                }
              },
              "end": "(]|(?='''))",
              "endCaptures": {
                "1": {
                  "name": "punctuation.character.set.end.regexp constant.other.set.regexp"
                },
                "2": {
                  "name": "invalid.illegal.newline.python"
                }
              },
              "name": "meta.character.set.regexp",
              "patterns": [
                {
                  "include": "#regexp-charecter-set-escapes"
                },
                {
                  "match": "\\N",
                  "name": "constant.character.set.regexp"
                }
              ]
            }
          ]
        },
        "single-three-regexp-comments": {
          "begin": "\\(\\?#",
          "beginCaptures": {
            "0": {
              "name": "punctuation.comment.begin.regexp"
            }
          },
          "end": "(\\)|(?='''))",
          "endCaptures": {
            "1": {
              "name": "punctuation.comment.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "comment.regexp",
          "patterns": [
            {
              "include": "#codetags"
            }
          ]
        },
        "single-three-regexp-conditional": {
          "begin": "(\\()\\?\\((\\w+(?:\\s+\\p{alnum}+)?|\\d+)\\)",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.conditional.regexp"
            },
            "1": {
              "name": "punctuation.parenthesis.conditional.begin.regexp"
            }
          },
          "end": "(\\)|(?='''))",
          "endCaptures": {
            "1": {
              "name": "keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#single-three-regexp-expression"
            },
            {
              "include": "#comments-string-single-three"
            }
          ]
        },
        "single-three-regexp-expression": {
          "patterns": [
            {
              "include": "#regexp-base-expression"
            },
            {
              "include": "#single-three-regexp-character-set"
            },
            {
              "include": "#single-three-regexp-comments"
            },
            {
              "include": "#regexp-flags"
            },
            {
              "include": "#single-three-regexp-named-group"
            },
            {
              "include": "#regexp-backreference"
            },
            {
              "include": "#single-three-regexp-lookahead"
            },
            {
              "include": "#single-three-regexp-lookahead-negative"
            },
            {
              "include": "#single-three-regexp-lookbehind"
            },
            {
              "include": "#single-three-regexp-lookbehind-negative"
            },
            {
              "include": "#single-three-regexp-conditional"
            },
            {
              "include": "#single-three-regexp-parentheses-non-capturing"
            },
            {
              "include": "#single-three-regexp-parentheses"
            },
            {
              "include": "#comments-string-single-three"
            }
          ]
        },
        "single-three-regexp-lookahead": {
          "begin": "(\\()\\?=",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.lookahead.regexp"
            },
            "1": {
              "name": "punctuation.parenthesis.lookahead.begin.regexp"
            }
          },
          "end": "(\\)|(?='''))",
          "endCaptures": {
            "1": {
              "name": "keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#single-three-regexp-expression"
            },
            {
              "include": "#comments-string-single-three"
            }
          ]
        },
        "single-three-regexp-lookahead-negative": {
          "begin": "(\\()\\?!",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.lookahead.negative.regexp"
            },
            "1": {
              "name": "punctuation.parenthesis.lookahead.begin.regexp"
            }
          },
          "end": "(\\)|(?='''))",
          "endCaptures": {
            "1": {
              "name": "keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#single-three-regexp-expression"
            },
            {
              "include": "#comments-string-single-three"
            }
          ]
        },
        "single-three-regexp-lookbehind": {
          "begin": "(\\()\\?<=",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.lookbehind.regexp"
            },
            "1": {
              "name": "punctuation.parenthesis.lookbehind.begin.regexp"
            }
          },
          "end": "(\\)|(?='''))",
          "endCaptures": {
            "1": {
              "name": "keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#single-three-regexp-expression"
            },
            {
              "include": "#comments-string-single-three"
            }
          ]
        },
        "single-three-regexp-lookbehind-negative": {
          "begin": "(\\()\\?<!",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.lookbehind.negative.regexp"
            },
            "1": {
              "name": "punctuation.parenthesis.lookbehind.begin.regexp"
            }
          },
          "end": "(\\)|(?='''))",
          "endCaptures": {
            "1": {
              "name": "keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#single-three-regexp-expression"
            },
            {
              "include": "#comments-string-single-three"
            }
          ]
        },
        "single-three-regexp-named-group": {
          "begin": "(\\()(\\?P<\\w+(?:\\s+\\p{alnum}+)?>)",
          "beginCaptures": {
            "1": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp"
            },
            "2": {
              "name": "entity.name.tag.named.group.regexp"
            }
          },
          "end": "(\\)|(?='''))",
          "endCaptures": {
            "1": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "meta.named.regexp",
          "patterns": [
            {
              "include": "#single-three-regexp-expression"
            },
            {
              "include": "#comments-string-single-three"
            }
          ]
        },
        "single-three-regexp-parentheses": {
          "begin": "\\(",
          "beginCaptures": {
            "0": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp"
            }
          },
          "end": "(\\)|(?='''))",
          "endCaptures": {
            "1": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#single-three-regexp-expression"
            },
            {
              "include": "#comments-string-single-three"
            }
          ]
        },
        "single-three-regexp-parentheses-non-capturing": {
          "begin": "\\(\\?:",
          "beginCaptures": {
            "0": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp"
            }
          },
          "end": "(\\)|(?='''))",
          "endCaptures": {
            "1": {
              "name": "support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "patterns": [
            {
              "include": "#single-three-regexp-expression"
            },
            {
              "include": "#comments-string-single-three"
            }
          ]
        },
        "special-names": {
          "match": "\\b(_*\\p{upper}[_\\d]*\\p{upper})[[:upper:]\\d]*(_\\w*)?\\b",
          "name": "constant.other.caps.python"
        },
        "special-variables": {
          "captures": {
            "1": {
              "name": "variable.language.special.self.python"
            },
            "2": {
              "name": "variable.language.special.cls.python"
            }
          },
          "match": "\\b(?<!\\.)(?:(self)|(cls))\\b"
        },
        "statement": {
          "patterns": [
            {
              "include": "#import"
            },
            {
              "include": "#class-declaration"
            },
            {
              "include": "#function-declaration"
            },
            {
              "include": "#generator"
            },
            {
              "include": "#statement-keyword"
            },
            {
              "include": "#assignment-operator"
            },
            {
              "include": "#decorator"
            },
            {
              "include": "#docstring-statement"
            },
            {
              "include": "#semicolon"
            }
          ]
        },
        "statement-keyword": {
          "patterns": [
            {
              "match": "\\b((async\\s+)?\\s*def)\\b",
              "name": "storage.type.function.python"
            },
            {
              "match": "\\b(?<!\\.)as\\b(?=.*[:\\\\])",
              "name": "keyword.control.flow.python"
            },
            {
              "match": "\\b(?<!\\.)as\\b",
              "name": "keyword.control.import.python"
            },
            {
              "match": "\\b(?<!\\.)(async|continue|del|assert|break|finally|for|from|elif|else|if|except|pass|raise|return|try|while|with)\\b",
              "name": "keyword.control.flow.python"
            },
            {
              "match": "\\b(?<!\\.)(global|nonlocal)\\b",
              "name": "storage.modifier.declaration.python"
            },
            {
              "match": "\\b(?<!\\.)(class)\\b",
              "name": "storage.type.class.python"
            },
            {
              "captures": {
                "1": {
                  "name": "keyword.control.flow.python"
                }
              },
              "match": "^\\s*(case|match)(?=\\s*([-\"#'(+:\\[{\\w\\d]|$))\\b"
            }
          ]
        },
        "string": {
          "patterns": [
            {
              "include": "#string-quoted-multi-line"
            },
            {
              "include": "#string-quoted-single-line"
            },
            {
              "include": "#string-bin-quoted-multi-line"
            },
            {
              "include": "#string-bin-quoted-single-line"
            },
            {
              "include": "#string-raw-quoted-multi-line"
            },
            {
              "include": "#string-raw-quoted-single-line"
            },
            {
              "include": "#string-raw-bin-quoted-multi-line"
            },
            {
              "include": "#string-raw-bin-quoted-single-line"
            },
            {
              "include": "#fstring-fnorm-quoted-multi-line"
            },
            {
              "include": "#fstring-fnorm-quoted-single-line"
            },
            {
              "include": "#fstring-normf-quoted-multi-line"
            },
            {
              "include": "#fstring-normf-quoted-single-line"
            },
            {
              "include": "#fstring-raw-quoted-multi-line"
            },
            {
              "include": "#fstring-raw-quoted-single-line"
            }
          ]
        },
        "string-bin-quoted-multi-line": {
          "begin": "\\b([Bb])('''|\"\"\")",
          "beginCaptures": {
            "1": {
              "name": "storage.type.string.python"
            },
            "2": {
              "name": "punctuation.definition.string.begin.python"
            }
          },
          "end": "(\\2)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.python"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "string.quoted.binary.multi.python",
          "patterns": [
            {
              "include": "#string-entity"
            }
          ]
        },
        "string-bin-quoted-single-line": {
          "begin": "\\b([Bb])(([\"']))",
          "beginCaptures": {
            "1": {
              "name": "storage.type.string.python"
            },
            "2": {
              "name": "punctuation.definition.string.begin.python"
            }
          },
          "end": "(\\2)|((?<!\\\\)\\n)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.python"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "string.quoted.binary.single.python",
          "patterns": [
            {
              "include": "#string-entity"
            }
          ]
        },
        "string-brace-formatting": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "name": "constant.character.format.placeholder.other.python"
                },
                "3": {
                  "name": "storage.type.format.python"
                },
                "4": {
                  "name": "storage.type.format.python"
                }
              },
              "match": "(\\{\\{|}}|\\{\\w*(\\.[_[:alpha:]]\\w*|\\[[^]\"']+])*(![ars])?(:\\w?[<=>^]?[- +]?#?\\d*,?(\\.\\d+)?[%EFGXb-gnosx]?)?})",
              "name": "meta.format.brace.python"
            },
            {
              "captures": {
                "1": {
                  "name": "constant.character.format.placeholder.other.python"
                },
                "3": {
                  "name": "storage.type.format.python"
                },
                "4": {
                  "name": "storage.type.format.python"
                }
              },
              "match": "(\\{\\w*(\\.[_[:alpha:]]\\w*|\\[[^]\"']+])*(![ars])?(:)[^\\n\"'{}]*(?:\\{[^\\n\"'}]*?}[^\\n\"'{}]*)*})",
              "name": "meta.format.brace.python"
            }
          ]
        },
        "string-consume-escape": {
          "match": "\\\\[\\n\"'\\\\]"
        },
        "string-entity": {
          "patterns": [
            {
              "include": "#escape-sequence"
            },
            {
              "include": "#string-line-continuation"
            },
            {
              "include": "#string-formatting"
            }
          ]
        },
        "string-formatting": {
          "captures": {
            "1": {
              "name": "constant.character.format.placeholder.other.python"
            }
          },
          "match": "(%(\\([\\w\\s]*\\))?[- #+0]*(\\d+|\\*)?(\\.(\\d+|\\*))?([Lhl])?[%EFGXa-giorsux])",
          "name": "meta.format.percent.python"
        },
        "string-line-continuation": {
          "match": "\\\\$",
          "name": "constant.language.python"
        },
        "string-multi-bad-brace1-formatting-raw": {
          "begin": "(?=\\{%(.*?(?!'''|\"\"\"))%})",
          "end": "(?='''|\"\"\")",
          "patterns": [
            {
              "include": "#string-consume-escape"
            }
          ]
        },
        "string-multi-bad-brace1-formatting-unicode": {
          "begin": "(?=\\{%(.*?(?!'''|\"\"\"))%})",
          "end": "(?='''|\"\"\")",
          "patterns": [
            {
              "include": "#escape-sequence-unicode"
            },
            {
              "include": "#escape-sequence"
            },
            {
              "include": "#string-line-continuation"
            }
          ]
        },
        "string-multi-bad-brace2-formatting-raw": {
          "begin": "(?!\\{\\{)(?=\\{(\\w*?(?!'''|\"\"\")[^!.:\\[}\\w]).*?(?!'''|\"\"\")})",
          "end": "(?='''|\"\"\")",
          "patterns": [
            {
              "include": "#string-consume-escape"
            },
            {
              "include": "#string-formatting"
            }
          ]
        },
        "string-multi-bad-brace2-formatting-unicode": {
          "begin": "(?!\\{\\{)(?=\\{(\\w*?(?!'''|\"\"\")[^!.:\\[}\\w]).*?(?!'''|\"\"\")})",
          "end": "(?='''|\"\"\")",
          "patterns": [
            {
              "include": "#escape-sequence-unicode"
            },
            {
              "include": "#string-entity"
            }
          ]
        },
        "string-quoted-multi-line": {
          "begin": "(?:\\b([Rr])(?=[Uu]))?([Uu])?('''|\"\"\")",
          "beginCaptures": {
            "1": {
              "name": "invalid.illegal.prefix.python"
            },
            "2": {
              "name": "storage.type.string.python"
            },
            "3": {
              "name": "punctuation.definition.string.begin.python"
            }
          },
          "end": "(\\3)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.python"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "string.quoted.multi.python",
          "patterns": [
            {
              "include": "#string-multi-bad-brace1-formatting-unicode"
            },
            {
              "include": "#string-multi-bad-brace2-formatting-unicode"
            },
            {
              "include": "#string-unicode-guts"
            }
          ]
        },
        "string-quoted-single-line": {
          "begin": "(?:\\b([Rr])(?=[Uu]))?([Uu])?(([\"']))",
          "beginCaptures": {
            "1": {
              "name": "invalid.illegal.prefix.python"
            },
            "2": {
              "name": "storage.type.string.python"
            },
            "3": {
              "name": "punctuation.definition.string.begin.python"
            }
          },
          "end": "(\\3)|((?<!\\\\)\\n)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.python"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "string.quoted.single.python",
          "patterns": [
            {
              "include": "#string-single-bad-brace1-formatting-unicode"
            },
            {
              "include": "#string-single-bad-brace2-formatting-unicode"
            },
            {
              "include": "#string-unicode-guts"
            }
          ]
        },
        "string-raw-bin-guts": {
          "patterns": [
            {
              "include": "#string-consume-escape"
            },
            {
              "include": "#string-formatting"
            }
          ]
        },
        "string-raw-bin-quoted-multi-line": {
          "begin": "\\b(R[Bb]|[Bb]R)('''|\"\"\")",
          "beginCaptures": {
            "1": {
              "name": "storage.type.string.python"
            },
            "2": {
              "name": "punctuation.definition.string.begin.python"
            }
          },
          "end": "(\\2)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.python"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "string.quoted.raw.binary.multi.python",
          "patterns": [
            {
              "include": "#string-raw-bin-guts"
            }
          ]
        },
        "string-raw-bin-quoted-single-line": {
          "begin": "\\b(R[Bb]|[Bb]R)(([\"']))",
          "beginCaptures": {
            "1": {
              "name": "storage.type.string.python"
            },
            "2": {
              "name": "punctuation.definition.string.begin.python"
            }
          },
          "end": "(\\2)|((?<!\\\\)\\n)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.python"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "string.quoted.raw.binary.single.python",
          "patterns": [
            {
              "include": "#string-raw-bin-guts"
            }
          ]
        },
        "string-raw-guts": {
          "patterns": [
            {
              "include": "#string-consume-escape"
            },
            {
              "include": "#string-formatting"
            },
            {
              "include": "#string-brace-formatting"
            }
          ]
        },
        "string-raw-quoted-multi-line": {
          "begin": "\\b(([Uu]R)|(R))('''|\"\"\")",
          "beginCaptures": {
            "2": {
              "name": "invalid.deprecated.prefix.python"
            },
            "3": {
              "name": "storage.type.string.python"
            },
            "4": {
              "name": "punctuation.definition.string.begin.python"
            }
          },
          "end": "(\\4)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.python"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "string.quoted.raw.multi.python",
          "patterns": [
            {
              "include": "#string-multi-bad-brace1-formatting-raw"
            },
            {
              "include": "#string-multi-bad-brace2-formatting-raw"
            },
            {
              "include": "#string-raw-guts"
            }
          ]
        },
        "string-raw-quoted-single-line": {
          "begin": "\\b(([Uu]R)|(R))(([\"']))",
          "beginCaptures": {
            "2": {
              "name": "invalid.deprecated.prefix.python"
            },
            "3": {
              "name": "storage.type.string.python"
            },
            "4": {
              "name": "punctuation.definition.string.begin.python"
            }
          },
          "end": "(\\4)|((?<!\\\\)\\n)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.string.end.python"
            },
            "2": {
              "name": "invalid.illegal.newline.python"
            }
          },
          "name": "string.quoted.raw.single.python",
          "patterns": [
            {
              "include": "#string-single-bad-brace1-formatting-raw"
            },
            {
              "include": "#string-single-bad-brace2-formatting-raw"
            },
            {
              "include": "#string-raw-guts"
            }
          ]
        },
        "string-single-bad-brace1-formatting-raw": {
          "begin": "(?=\\{%(.*?(?!([\"'])|((?<!\\\\)\\n)))%})",
          "end": "(?=([\"'])|((?<!\\\\)\\n))",
          "patterns": [
            {
              "include": "#string-consume-escape"
            }
          ]
        },
        "string-single-bad-brace1-formatting-unicode": {
          "begin": "(?=\\{%(.*?(?!([\"'])|((?<!\\\\)\\n)))%})",
          "end": "(?=([\"'])|((?<!\\\\)\\n))",
          "patterns": [
            {
              "include": "#escape-sequence-unicode"
            },
            {
              "include": "#escape-sequence"
            },
            {
              "include": "#string-line-continuation"
            }
          ]
        },
        "string-single-bad-brace2-formatting-raw": {
          "begin": "(?!\\{\\{)(?=\\{(\\w*?(?!([\"'])|((?<!\\\\)\\n))[^!.:\\[}\\w]).*?(?!([\"'])|((?<!\\\\)\\n))})",
          "end": "(?=([\"'])|((?<!\\\\)\\n))",
          "patterns": [
            {
              "include": "#string-consume-escape"
            },
            {
              "include": "#string-formatting"
            }
          ]
        },
        "string-single-bad-brace2-formatting-unicode": {
          "begin": "(?!\\{\\{)(?=\\{(\\w*?(?!([\"'])|((?<!\\\\)\\n))[^!.:\\[}\\w]).*?(?!([\"'])|((?<!\\\\)\\n))})",
          "end": "(?=([\"'])|((?<!\\\\)\\n))",
          "patterns": [
            {
              "include": "#escape-sequence-unicode"
            },
            {
              "include": "#string-entity"
            }
          ]
        },
        "string-unicode-guts": {
          "patterns": [
            {
              "include": "#escape-sequence-unicode"
            },
            {
              "include": "#string-entity"
            },
            {
              "include": "#string-brace-formatting"
            }
          ]
        }
      },
      "scopeName": "source.python"
    }
  },
  "theme": {
    "light": {
      "colors": {
        "activityBar.activeBorder": "#1c6b48",
        "activityBar.background": "#ffffff",
        "activityBar.border": "#f0f0f0",
        "activityBar.foreground": "#393a34",
        "activityBar.inactiveForeground": "#393a3450",
        "activityBarBadge.background": "#4e4f47",
        "activityBarBadge.foreground": "#ffffff",
        "badge.background": "#393a3490",
        "badge.foreground": "#ffffff",
        "breadcrumb.activeSelectionForeground": "#22222218",
        "breadcrumb.background": "#f7f7f7",
        "breadcrumb.focusForeground": "#393a34",
        "breadcrumb.foreground": "#6a737d",
        "breadcrumbPicker.background": "#ffffff",
        "button.background": "#1c6b48",
        "button.foreground": "#ffffff",
        "button.hoverBackground": "#1c6b48",
        "checkbox.background": "#f7f7f7",
        "checkbox.border": "#d1d5da",
        "debugToolBar.background": "#ffffff",
        "descriptionForeground": "#393a3490",
        "diffEditor.insertedTextBackground": "#1c6b4830",
        "diffEditor.removedTextBackground": "#ab595940",
        "dropdown.background": "#ffffff",
        "dropdown.border": "#f0f0f0",
        "dropdown.foreground": "#393a34",
        "dropdown.listBackground": "#f7f7f7",
        "editor.background": "#ffffff",
        "editor.findMatchBackground": "#e6cc7744",
        "editor.findMatchHighlightBackground": "#e6cc7766",
        "editor.focusedStackFrameHighlightBackground": "#fff5b1",
        "editor.foldBackground": "#22222210",
        "editor.foreground": "#393a34",
        "editor.inactiveSelectionBackground": "#22222210",
        "editor.lineHighlightBackground": "#f7f7f7",
        "editor.selectionBackground": "#22222218",
        "editor.selectionHighlightBackground": "#22222210",
        "editor.stackFrameHighlightBackground": "#fffbdd",
        "editor.wordHighlightBackground": "#1c6b4805",
        "editor.wordHighlightStrongBackground": "#1c6b4810",
        "editorBracketHighlight.foreground1": "#2993a3",
        "editorBracketHighlight.foreground2": "#1e754f",
        "editorBracketHighlight.foreground3": "#a65e2b",
        "editorBracketHighlight.foreground4": "#a13865",
        "editorBracketHighlight.foreground5": "#bda437",
        "editorBracketHighlight.foreground6": "#296aa3",
        "editorBracketMatch.background": "#1c6b4820",
        "editorError.foreground": "#ab5959",
        "editorGroup.border": "#f0f0f0",
        "editorGroupHeader.tabsBackground": "#ffffff",
        "editorGroupHeader.tabsBorder": "#f0f0f0",
        "editorGutter.addedBackground": "#1e754f",
        "editorGutter.commentRangeForeground": "#393a3450",
        "editorGutter.deletedBackground": "#ab5959",
        "editorGutter.foldingControlForeground": "#393a3490",
        "editorGutter.modifiedBackground": "#296aa3",
        "editorHint.foreground": "#1e754f",
        "editorIndentGuide.activeBackground": "#00000030",
        "editorIndentGuide.background": "#00000015",
        "editorInfo.foreground": "#296aa3",
        "editorInlayHint.background": "#f7f7f7",
        "editorInlayHint.foreground": "#999999",
        "editorLineNumber.activeForeground": "#4e4f47",
        "editorLineNumber.foreground": "#393a3450",
        "editorOverviewRuler.border": "#fff",
        "editorStickyScroll.background": "#f7f7f7",
        "editorStickyScrollHover.background": "#f7f7f7",
        "editorWarning.foreground": "#a65e2b",
        "editorWhitespace.foreground": "#00000015",
        "editorWidget.background": "#ffffff",
        "errorForeground": "#ab5959",
        "focusBorder": "#00000000",
        "foreground": "#393a34",
        "gitDecoration.addedResourceForeground": "#1e754f",
        "gitDecoration.conflictingResourceForeground": "#a65e2b",
        "gitDecoration.deletedResourceForeground": "#ab5959",
        "gitDecoration.ignoredResourceForeground": "#393a3450",
        "gitDecoration.modifiedResourceForeground": "#296aa3",
        "gitDecoration.submoduleResourceForeground": "#393a3490",
        "gitDecoration.untrackedResourceForeground": "#2993a3",
        "input.background": "#f7f7f7",
        "input.border": "#f0f0f0",
        "input.foreground": "#393a34",
        "input.placeholderForeground": "#393a3490",
        "inputOption.activeBackground": "#393a3450",
        "list.activeSelectionBackground": "#f7f7f7",
        "list.activeSelectionForeground": "#393a34",
        "list.focusBackground": "#f7f7f7",
        "list.highlightForeground": "#1c6b48",
        "list.hoverBackground": "#f7f7f7",
        "list.hoverForeground": "#393a34",
        "list.inactiveFocusBackground": "#ffffff",
        "list.inactiveSelectionBackground": "#f7f7f7",
        "list.inactiveSelectionForeground": "#393a34",
        "menu.separatorBackground": "#f0f0f0",
        "notificationCenterHeader.background": "#ffffff",
        "notificationCenterHeader.foreground": "#6a737d",
        "notifications.background": "#ffffff",
        "notifications.border": "#f0f0f0",
        "notifications.foreground": "#393a34",
        "notificationsErrorIcon.foreground": "#ab5959",
        "notificationsInfoIcon.foreground": "#296aa3",
        "notificationsWarningIcon.foreground": "#a65e2b",
        "panel.background": "#ffffff",
        "panel.border": "#f0f0f0",
        "panelInput.border": "#e1e4e8",
        "panelTitle.activeBorder": "#1c6b48",
        "panelTitle.activeForeground": "#393a34",
        "panelTitle.inactiveForeground": "#6a737d",
        "peekViewEditor.background": "#ffffff",
        "peekViewResult.background": "#ffffff",
        "pickerGroup.border": "#f0f0f0",
        "pickerGroup.foreground": "#393a34",
        "problemsErrorIcon.foreground": "#ab5959",
        "problemsInfoIcon.foreground": "#296aa3",
        "problemsWarningIcon.foreground": "#a65e2b",
        "progressBar.background": "#1c6b48",
        "quickInput.background": "#ffffff",
        "quickInput.foreground": "#393a34",
        "quickInputList.focusBackground": "#f7f7f7",
        "scrollbar.shadow": "#6a737d33",
        "scrollbarSlider.activeBackground": "#393a3450",
        "scrollbarSlider.background": "#393a3410",
        "scrollbarSlider.hoverBackground": "#393a3450",
        "settings.headerForeground": "#393a34",
        "settings.modifiedItemIndicator": "#1c6b48",
        "sideBar.background": "#ffffff",
        "sideBar.border": "#f0f0f0",
        "sideBar.foreground": "#4e4f47",
        "sideBarSectionHeader.background": "#ffffff",
        "sideBarSectionHeader.border": "#f0f0f0",
        "sideBarSectionHeader.foreground": "#393a34",
        "sideBarTitle.foreground": "#393a34",
        "statusBar.background": "#ffffff",
        "statusBar.border": "#f0f0f0",
        "statusBar.debuggingBackground": "#f7f7f7",
        "statusBar.debuggingForeground": "#4e4f47",
        "statusBar.foreground": "#4e4f47",
        "statusBar.noFolderBackground": "#ffffff",
        "statusBarItem.prominentBackground": "#f7f7f7",
        "tab.activeBackground": "#ffffff",
        "tab.activeBorder": "#f0f0f0",
        "tab.activeBorderTop": "#393a3490",
        "tab.activeForeground": "#393a34",
        "tab.border": "#f0f0f0",
        "tab.hoverBackground": "#f7f7f7",
        "tab.inactiveBackground": "#ffffff",
        "tab.inactiveForeground": "#6a737d",
        "tab.unfocusedActiveBorder": "#f0f0f0",
        "tab.unfocusedActiveBorderTop": "#f0f0f0",
        "tab.unfocusedHoverBackground": "#ffffff",
        "terminal.ansiBlack": "#121212",
        "terminal.ansiBlue": "#296aa3",
        "terminal.ansiBrightBlack": "#aaaaaa",
        "terminal.ansiBrightBlue": "#296aa3",
        "terminal.ansiBrightCyan": "#2993a3",
        "terminal.ansiBrightGreen": "#1e754f",
        "terminal.ansiBrightMagenta": "#a13865",
        "terminal.ansiBrightRed": "#ab5959",
        "terminal.ansiBrightWhite": "#dddddd",
        "terminal.ansiBrightYellow": "#bda437",
        "terminal.ansiCyan": "#2993a3",
        "terminal.ansiGreen": "#1e754f",
        "terminal.ansiMagenta": "#a13865",
        "terminal.ansiRed": "#ab5959",
        "terminal.ansiWhite": "#dbd7ca",
        "terminal.ansiYellow": "#bda437",
        "terminal.foreground": "#393a34",
        "terminal.selectionBackground": "#22222218",
        "textBlockQuote.background": "#ffffff",
        "textBlockQuote.border": "#f0f0f0",
        "textCodeBlock.background": "#ffffff",
        "textLink.activeForeground": "#1c6b48",
        "textLink.foreground": "#1c6b48",
        "textPreformat.foreground": "#586069",
        "textSeparator.foreground": "#d1d5da",
        "titleBar.activeBackground": "#ffffff",
        "titleBar.activeForeground": "#4e4f47",
        "titleBar.border": "#f7f7f7",
        "titleBar.inactiveBackground": "#ffffff",
        "titleBar.inactiveForeground": "#6a737d",
        "tree.indentGuidesStroke": "#e1e4e8",
        "welcomePage.buttonBackground": "#f6f8fa",
        "welcomePage.buttonHoverBackground": "#e1e4e8"
      },
      "displayName": "Vitesse Light",
      "name": "vitesse-light",
      "semanticHighlighting": true,
      "semanticTokenColors": {
        "class": "#5a6aa6",
        "interface": "#2e808f",
        "namespace": "#b05a78",
        "property": "#998418",
        "type": "#2e808f"
      },
      "tokenColors": [
        {
          "scope": [
            "comment",
            "punctuation.definition.comment",
            "string.comment"
          ],
          "settings": {
            "foreground": "#a0ada0"
          }
        },
        {
          "scope": [
            "delimiter.bracket",
            "delimiter",
            "invalid.illegal.character-not-allowed-here.html",
            "keyword.operator.rest",
            "keyword.operator.spread",
            "keyword.operator.type.annotation",
            "keyword.operator.relational",
            "keyword.operator.assignment",
            "keyword.operator.type",
            "meta.brace",
            "meta.tag.block.any.html",
            "meta.tag.inline.any.html",
            "meta.tag.structure.input.void.html",
            "meta.type.annotation",
            "meta.embedded.block.github-actions-expression",
            "storage.type.function.arrow",
            "meta.objectliteral.ts",
            "punctuation",
            "punctuation.definition.string.begin.html.vue",
            "punctuation.definition.string.end.html.vue"
          ],
          "settings": {
            "foreground": "#999999"
          }
        },
        {
          "scope": [
            "constant",
            "entity.name.constant",
            "variable.language",
            "meta.definition.variable"
          ],
          "settings": {
            "foreground": "#a65e2b"
          }
        },
        {
          "scope": [
            "entity",
            "entity.name"
          ],
          "settings": {
            "foreground": "#59873a"
          }
        },
        {
          "scope": "variable.parameter.function",
          "settings": {
            "foreground": "#393a34"
          }
        },
        {
          "scope": [
            "entity.name.tag",
            "tag.html"
          ],
          "settings": {
            "foreground": "#1e754f"
          }
        },
        {
          "scope": "entity.name.function",
          "settings": {
            "foreground": "#59873a"
          }
        },
        {
          "scope": [
            "keyword",
            "storage.type.class.jsdoc",
            "punctuation.definition.template-expression"
          ],
          "settings": {
            "foreground": "#1e754f"
          }
        },
        {
          "scope": [
            "storage",
            "storage.type",
            "support.type.builtin",
            "constant.language.undefined",
            "constant.language.null",
            "constant.language.import-export-all.ts"
          ],
          "settings": {
            "foreground": "#ab5959"
          }
        },
        {
          "scope": [
            "text.html.derivative",
            "storage.modifier.package",
            "storage.modifier.import",
            "storage.type.java"
          ],
          "settings": {
            "foreground": "#393a34"
          }
        },
        {
          "scope": [
            "string",
            "string punctuation.section.embedded source",
            "attribute.value"
          ],
          "settings": {
            "foreground": "#b56959"
          }
        },
        {
          "scope": [
            "punctuation.definition.string"
          ],
          "settings": {
            "foreground": "#b5695977"
          }
        },
        {
          "scope": [
            "punctuation.support.type.property-name"
          ],
          "settings": {
            "foreground": "#99841877"
          }
        },
        {
          "scope": "support",
          "settings": {
            "foreground": "#998418"
          }
        },
        {
          "scope": [
            "property",
            "meta.property-name",
            "meta.object-literal.key",
            "entity.name.tag.yaml",
            "attribute.name"
          ],
          "settings": {
            "foreground": "#998418"
          }
        },
        {
          "scope": [
            "entity.other.attribute-name",
            "invalid.deprecated.entity.other.attribute-name.html"
          ],
          "settings": {
            "foreground": "#b07d48"
          }
        },
        {
          "scope": [
            "variable",
            "identifier"
          ],
          "settings": {
            "foreground": "#b07d48"
          }
        },
        {
          "scope": [
            "support.type.primitive",
            "entity.name.type"
          ],
          "settings": {
            "foreground": "#2e8f82"
          }
        },
        {
          "scope": "namespace",
          "settings": {
            "foreground": "#b05a78"
          }
        },
        {
          "scope": [
            "keyword.operator",
            "keyword.operator.assignment.compound",
            "meta.var.expr.ts"
          ],
          "settings": {
            "foreground": "#ab5959"
          }
        },
        {
          "scope": "invalid.broken",
          "settings": {
            "fontStyle": "italic",
            "foreground": "#b31d28"
          }
        },
        {
          "scope": "invalid.deprecated",
          "settings": {
            "fontStyle": "italic",
            "foreground": "#b31d28"
          }
        },
        {
          "scope": "invalid.illegal",
          "settings": {
            "fontStyle": "italic",
            "foreground": "#b31d28"
          }
        },
        {
          "scope": "invalid.unimplemented",
          "settings": {
            "fontStyle": "italic",
            "foreground": "#b31d28"
          }
        },
        {
          "scope": "carriage-return",
          "settings": {
            "background": "#d73a49",
            "content": "^M",
            "fontStyle": "italic underline",
            "foreground": "#fafbfc"
          }
        },
        {
          "scope": "message.error",
          "settings": {
            "foreground": "#b31d28"
          }
        },
        {
          "scope": "string variable",
          "settings": {
            "foreground": "#b56959"
          }
        },
        {
          "scope": [
            "source.regexp",
            "string.regexp"
          ],
          "settings": {
            "foreground": "#ab5e3f"
          }
        },
        {
          "scope": [
            "string.regexp.character-class",
            "string.regexp constant.character.escape",
            "string.regexp source.ruby.embedded",
            "string.regexp string.regexp.arbitrary-repitition"
          ],
          "settings": {
            "foreground": "#b56959"
          }
        },
        {
          "scope": "string.regexp constant.character.escape",
          "settings": {
            "foreground": "#bda437"
          }
        },
        {
          "scope": [
            "support.constant"
          ],
          "settings": {
            "foreground": "#a65e2b"
          }
        },
        {
          "scope": [
            "keyword.operator.quantifier.regexp",
            "constant.numeric",
            "number"
          ],
          "settings": {
            "foreground": "#2f798a"
          }
        },
        {
          "scope": [
            "keyword.other.unit"
          ],
          "settings": {
            "foreground": "#ab5959"
          }
        },
        {
          "scope": [
            "constant.language.boolean",
            "constant.language"
          ],
          "settings": {
            "foreground": "#1e754f"
          }
        },
        {
          "scope": "meta.module-reference",
          "settings": {
            "foreground": "#1c6b48"
          }
        },
        {
          "scope": "punctuation.definition.list.begin.markdown",
          "settings": {
            "foreground": "#a65e2b"
          }
        },
        {
          "scope": [
            "markup.heading",
            "markup.heading entity.name"
          ],
          "settings": {
            "fontStyle": "bold",
            "foreground": "#1c6b48"
          }
        },
        {
          "scope": "markup.quote",
          "settings": {
            "foreground": "#2e808f"
          }
        },
        {
          "scope": "markup.italic",
          "settings": {
            "fontStyle": "italic",
            "foreground": "#393a34"
          }
        },
        {
          "scope": "markup.bold",
          "settings": {
            "fontStyle": "bold",
            "foreground": "#393a34"
          }
        },
        {
          "scope": "markup.raw",
          "settings": {
            "foreground": "#1c6b48"
          }
        },
        {
          "scope": [
            "markup.deleted",
            "meta.diff.header.from-file",
            "punctuation.definition.deleted"
          ],
          "settings": {
            "background": "#ffeef0",
            "foreground": "#b31d28"
          }
        },
        {
          "scope": [
            "markup.inserted",
            "meta.diff.header.to-file",
            "punctuation.definition.inserted"
          ],
          "settings": {
            "background": "#f0fff4",
            "foreground": "#22863a"
          }
        },
        {
          "scope": [
            "markup.changed",
            "punctuation.definition.changed"
          ],
          "settings": {
            "background": "#ffebda",
            "foreground": "#e36209"
          }
        },
        {
          "scope": [
            "markup.ignored",
            "markup.untracked"
          ],
          "settings": {
            "background": "#005cc5",
            "foreground": "#f6f8fa"
          }
        },
        {
          "scope": "meta.diff.range",
          "settings": {
            "fontStyle": "bold",
            "foreground": "#6f42c1"
          }
        },
        {
          "scope": "meta.diff.header",
          "settings": {
            "foreground": "#005cc5"
          }
        },
        {
          "scope": "meta.separator",
          "settings": {
            "fontStyle": "bold",
            "foreground": "#005cc5"
          }
        },
        {
          "scope": "meta.output",
          "settings": {
            "foreground": "#005cc5"
          }
        },
        {
          "scope": [
            "brackethighlighter.tag",
            "brackethighlighter.curly",
            "brackethighlighter.round",
            "brackethighlighter.square",
            "brackethighlighter.angle",
            "brackethighlighter.quote"
          ],
          "settings": {
            "foreground": "#586069"
          }
        },
        {
          "scope": "brackethighlighter.unmatched",
          "settings": {
            "foreground": "#b31d28"
          }
        },
        {
          "scope": [
            "constant.other.reference.link",
            "string.other.link",
            "punctuation.definition.string.begin.markdown",
            "punctuation.definition.string.end.markdown"
          ],
          "settings": {
            "foreground": "#b56959"
          }
        },
        {
          "scope": [
            "markup.underline.link.markdown",
            "markup.underline.link.image.markdown"
          ],
          "settings": {
            "fontStyle": "underline",
            "foreground": "#393a3490"
          }
        },
        {
          "scope": [
            "type.identifier",
            "constant.other.character-class.regexp"
          ],
          "settings": {
            "foreground": "#5a6aa6"
          }
        },
        {
          "scope": [
            "entity.other.attribute-name.html.vue"
          ],
          "settings": {
            "foreground": "#59873a"
          }
        },
        {
          "scope": [
            "invalid.illegal.unrecognized-tag.html"
          ],
          "settings": {
            "fontStyle": "normal"
          }
        }
      ],
      "type": "light"
    },
    "dark": {
      "colors": {
        "activityBar.activeBorder": "#4d9375",
        "activityBar.background": "#121212",
        "activityBar.border": "#191919",
        "activityBar.foreground": "#dbd7caee",
        "activityBar.inactiveForeground": "#dedcd550",
        "activityBarBadge.background": "#bfbaaa",
        "activityBarBadge.foreground": "#121212",
        "badge.background": "#dedcd590",
        "badge.foreground": "#121212",
        "breadcrumb.activeSelectionForeground": "#eeeeee18",
        "breadcrumb.background": "#181818",
        "breadcrumb.focusForeground": "#dbd7caee",
        "breadcrumb.foreground": "#959da5",
        "breadcrumbPicker.background": "#121212",
        "button.background": "#4d9375",
        "button.foreground": "#121212",
        "button.hoverBackground": "#4d9375",
        "checkbox.background": "#181818",
        "checkbox.border": "#2f363d",
        "debugToolBar.background": "#121212",
        "descriptionForeground": "#dedcd590",
        "diffEditor.insertedTextBackground": "#4d937550",
        "diffEditor.removedTextBackground": "#ab595950",
        "dropdown.background": "#121212",
        "dropdown.border": "#191919",
        "dropdown.foreground": "#dbd7caee",
        "dropdown.listBackground": "#181818",
        "editor.background": "#121212",
        "editor.findMatchBackground": "#e6cc7722",
        "editor.findMatchHighlightBackground": "#e6cc7744",
        "editor.focusedStackFrameHighlightBackground": "#b808",
        "editor.foldBackground": "#eeeeee10",
        "editor.foreground": "#dbd7caee",
        "editor.inactiveSelectionBackground": "#eeeeee10",
        "editor.lineHighlightBackground": "#181818",
        "editor.selectionBackground": "#eeeeee18",
        "editor.selectionHighlightBackground": "#eeeeee10",
        "editor.stackFrameHighlightBackground": "#a707",
        "editor.wordHighlightBackground": "#1c6b4805",
        "editor.wordHighlightStrongBackground": "#1c6b4810",
        "editorBracketHighlight.foreground1": "#5eaab5",
        "editorBracketHighlight.foreground2": "#4d9375",
        "editorBracketHighlight.foreground3": "#d4976c",
        "editorBracketHighlight.foreground4": "#d9739f",
        "editorBracketHighlight.foreground5": "#e6cc77",
        "editorBracketHighlight.foreground6": "#6394bf",
        "editorBracketMatch.background": "#4d937520",
        "editorError.foreground": "#cb7676",
        "editorGroup.border": "#191919",
        "editorGroupHeader.tabsBackground": "#121212",
        "editorGroupHeader.tabsBorder": "#191919",
        "editorGutter.addedBackground": "#4d9375",
        "editorGutter.commentRangeForeground": "#dedcd550",
        "editorGutter.deletedBackground": "#cb7676",
        "editorGutter.foldingControlForeground": "#dedcd590",
        "editorGutter.modifiedBackground": "#6394bf",
        "editorHint.foreground": "#4d9375",
        "editorIndentGuide.activeBackground": "#ffffff30",
        "editorIndentGuide.background": "#ffffff15",
        "editorInfo.foreground": "#6394bf",
        "editorInlayHint.background": "#181818",
        "editorInlayHint.foreground": "#666666",
        "editorLineNumber.activeForeground": "#bfbaaa",
        "editorLineNumber.foreground": "#dedcd550",
        "editorOverviewRuler.border": "#111",
        "editorStickyScroll.background": "#181818",
        "editorStickyScrollHover.background": "#181818",
        "editorWarning.foreground": "#d4976c",
        "editorWhitespace.foreground": "#ffffff15",
        "editorWidget.background": "#121212",
        "errorForeground": "#cb7676",
        "focusBorder": "#00000000",
        "foreground": "#dbd7caee",
        "gitDecoration.addedResourceForeground": "#4d9375",
        "gitDecoration.conflictingResourceForeground": "#d4976c",
        "gitDecoration.deletedResourceForeground": "#cb7676",
        "gitDecoration.ignoredResourceForeground": "#dedcd550",
        "gitDecoration.modifiedResourceForeground": "#6394bf",
        "gitDecoration.submoduleResourceForeground": "#dedcd590",
        "gitDecoration.untrackedResourceForeground": "#5eaab5",
        "input.background": "#181818",
        "input.border": "#191919",
        "input.foreground": "#dbd7caee",
        "input.placeholderForeground": "#dedcd590",
        "inputOption.activeBackground": "#dedcd550",
        "list.activeSelectionBackground": "#181818",
        "list.activeSelectionForeground": "#dbd7caee",
        "list.focusBackground": "#181818",
        "list.highlightForeground": "#4d9375",
        "list.hoverBackground": "#181818",
        "list.hoverForeground": "#dbd7caee",
        "list.inactiveFocusBackground": "#121212",
        "list.inactiveSelectionBackground": "#181818",
        "list.inactiveSelectionForeground": "#dbd7caee",
        "menu.separatorBackground": "#191919",
        "notificationCenterHeader.background": "#121212",
        "notificationCenterHeader.foreground": "#959da5",
        "notifications.background": "#121212",
        "notifications.border": "#191919",
        "notifications.foreground": "#dbd7caee",
        "notificationsErrorIcon.foreground": "#cb7676",
        "notificationsInfoIcon.foreground": "#6394bf",
        "notificationsWarningIcon.foreground": "#d4976c",
        "panel.background": "#121212",
        "panel.border": "#191919",
        "panelInput.border": "#2f363d",
        "panelTitle.activeBorder": "#4d9375",
        "panelTitle.activeForeground": "#dbd7caee",
        "panelTitle.inactiveForeground": "#959da5",
        "peekViewEditor.background": "#121212",
        "peekViewEditor.matchHighlightBackground": "#ffd33d33",
        "peekViewResult.background": "#121212",
        "peekViewResult.matchHighlightBackground": "#ffd33d33",
        "pickerGroup.border": "#191919",
        "pickerGroup.foreground": "#dbd7caee",
        "problemsErrorIcon.foreground": "#cb7676",
        "problemsInfoIcon.foreground": "#6394bf",
        "problemsWarningIcon.foreground": "#d4976c",
        "progressBar.background": "#4d9375",
        "quickInput.background": "#121212",
        "quickInput.foreground": "#dbd7caee",
        "quickInputList.focusBackground": "#181818",
        "scrollbar.shadow": "#0000",
        "scrollbarSlider.activeBackground": "#dedcd550",
        "scrollbarSlider.background": "#dedcd510",
        "scrollbarSlider.hoverBackground": "#dedcd550",
        "settings.headerForeground": "#dbd7caee",
        "settings.modifiedItemIndicator": "#4d9375",
        "sideBar.background": "#121212",
        "sideBar.border": "#191919",
        "sideBar.foreground": "#bfbaaa",
        "sideBarSectionHeader.background": "#121212",
        "sideBarSectionHeader.border": "#191919",
        "sideBarSectionHeader.foreground": "#dbd7caee",
        "sideBarTitle.foreground": "#dbd7caee",
        "statusBar.background": "#121212",
        "statusBar.border": "#191919",
        "statusBar.debuggingBackground": "#181818",
        "statusBar.debuggingForeground": "#bfbaaa",
        "statusBar.foreground": "#bfbaaa",
        "statusBar.noFolderBackground": "#121212",
        "statusBarItem.prominentBackground": "#181818",
        "tab.activeBackground": "#121212",
        "tab.activeBorder": "#191919",
        "tab.activeBorderTop": "#dedcd590",
        "tab.activeForeground": "#dbd7caee",
        "tab.border": "#191919",
        "tab.hoverBackground": "#181818",
        "tab.inactiveBackground": "#121212",
        "tab.inactiveForeground": "#959da5",
        "tab.unfocusedActiveBorder": "#191919",
        "tab.unfocusedActiveBorderTop": "#191919",
        "tab.unfocusedHoverBackground": "#121212",
        "terminal.ansiBlack": "#393a34",
        "terminal.ansiBlue": "#6394bf",
        "terminal.ansiBrightBlack": "#777777",
        "terminal.ansiBrightBlue": "#6394bf",
        "terminal.ansiBrightCyan": "#5eaab5",
        "terminal.ansiBrightGreen": "#4d9375",
        "terminal.ansiBrightMagenta": "#d9739f",
        "terminal.ansiBrightRed": "#cb7676",
        "terminal.ansiBrightWhite": "#ffffff",
        "terminal.ansiBrightYellow": "#e6cc77",
        "terminal.ansiCyan": "#5eaab5",
        "terminal.ansiGreen": "#4d9375",
        "terminal.ansiMagenta": "#d9739f",
        "terminal.ansiRed": "#cb7676",
        "terminal.ansiWhite": "#dbd7ca",
        "terminal.ansiYellow": "#e6cc77",
        "terminal.foreground": "#dbd7caee",
        "terminal.selectionBackground": "#eeeeee18",
        "textBlockQuote.background": "#121212",
        "textBlockQuote.border": "#191919",
        "textCodeBlock.background": "#121212",
        "textLink.activeForeground": "#4d9375",
        "textLink.foreground": "#4d9375",
        "textPreformat.foreground": "#d1d5da",
        "textSeparator.foreground": "#586069",
        "titleBar.activeBackground": "#121212",
        "titleBar.activeForeground": "#bfbaaa",
        "titleBar.border": "#181818",
        "titleBar.inactiveBackground": "#121212",
        "titleBar.inactiveForeground": "#959da5",
        "tree.indentGuidesStroke": "#2f363d",
        "welcomePage.buttonBackground": "#2f363d",
        "welcomePage.buttonHoverBackground": "#444d56"
      },
      "displayName": "Vitesse Dark",
      "name": "vitesse-dark",
      "semanticHighlighting": true,
      "semanticTokenColors": {
        "class": "#6872ab",
        "interface": "#5d99a9",
        "namespace": "#db889a",
        "property": "#b8a965",
        "type": "#5d99a9"
      },
      "tokenColors": [
        {
          "scope": [
            "comment",
            "punctuation.definition.comment",
            "string.comment"
          ],
          "settings": {
            "foreground": "#758575dd"
          }
        },
        {
          "scope": [
            "delimiter.bracket",
            "delimiter",
            "invalid.illegal.character-not-allowed-here.html",
            "keyword.operator.rest",
            "keyword.operator.spread",
            "keyword.operator.type.annotation",
            "keyword.operator.relational",
            "keyword.operator.assignment",
            "keyword.operator.type",
            "meta.brace",
            "meta.tag.block.any.html",
            "meta.tag.inline.any.html",
            "meta.tag.structure.input.void.html",
            "meta.type.annotation",
            "meta.embedded.block.github-actions-expression",
            "storage.type.function.arrow",
            "meta.objectliteral.ts",
            "punctuation",
            "punctuation.definition.string.begin.html.vue",
            "punctuation.definition.string.end.html.vue"
          ],
          "settings": {
            "foreground": "#666666"
          }
        },
        {
          "scope": [
            "constant",
            "entity.name.constant",
            "variable.language",
            "meta.definition.variable"
          ],
          "settings": {
            "foreground": "#c99076"
          }
        },
        {
          "scope": [
            "entity",
            "entity.name"
          ],
          "settings": {
            "foreground": "#80a665"
          }
        },
        {
          "scope": "variable.parameter.function",
          "settings": {
            "foreground": "#dbd7caee"
          }
        },
        {
          "scope": [
            "entity.name.tag",
            "tag.html"
          ],
          "settings": {
            "foreground": "#4d9375"
          }
        },
        {
          "scope": "entity.name.function",
          "settings": {
            "foreground": "#80a665"
          }
        },
        {
          "scope": [
            "keyword",
            "storage.type.class.jsdoc",
            "punctuation.definition.template-expression"
          ],
          "settings": {
            "foreground": "#4d9375"
          }
        },
        {
          "scope": [
            "storage",
            "storage.type",
            "support.type.builtin",
            "constant.language.undefined",
            "constant.language.null",
            "constant.language.import-export-all.ts"
          ],
          "settings": {
            "foreground": "#cb7676"
          }
        },
        {
          "scope": [
            "text.html.derivative",
            "storage.modifier.package",
            "storage.modifier.import",
            "storage.type.java"
          ],
          "settings": {
            "foreground": "#dbd7caee"
          }
        },
        {
          "scope": [
            "string",
            "string punctuation.section.embedded source",
            "attribute.value"
          ],
          "settings": {
            "foreground": "#c98a7d"
          }
        },
        {
          "scope": [
            "punctuation.definition.string"
          ],
          "settings": {
            "foreground": "#c98a7d77"
          }
        },
        {
          "scope": [
            "punctuation.support.type.property-name"
          ],
          "settings": {
            "foreground": "#b8a96577"
          }
        },
        {
          "scope": "support",
          "settings": {
            "foreground": "#b8a965"
          }
        },
        {
          "scope": [
            "property",
            "meta.property-name",
            "meta.object-literal.key",
            "entity.name.tag.yaml",
            "attribute.name"
          ],
          "settings": {
            "foreground": "#b8a965"
          }
        },
        {
          "scope": [
            "entity.other.attribute-name",
            "invalid.deprecated.entity.other.attribute-name.html"
          ],
          "settings": {
            "foreground": "#bd976a"
          }
        },
        {
          "scope": [
            "variable",
            "identifier"
          ],
          "settings": {
            "foreground": "#bd976a"
          }
        },
        {
          "scope": [
            "support.type.primitive",
            "entity.name.type"
          ],
          "settings": {
            "foreground": "#5DA994"
          }
        },
        {
          "scope": "namespace",
          "settings": {
            "foreground": "#db889a"
          }
        },
        {
          "scope": [
            "keyword.operator",
            "keyword.operator.assignment.compound",
            "meta.var.expr.ts"
          ],
          "settings": {
            "foreground": "#cb7676"
          }
        },
        {
          "scope": "invalid.broken",
          "settings": {
            "fontStyle": "italic",
            "foreground": "#fdaeb7"
          }
        },
        {
          "scope": "invalid.deprecated",
          "settings": {
            "fontStyle": "italic",
            "foreground": "#fdaeb7"
          }
        },
        {
          "scope": "invalid.illegal",
          "settings": {
            "fontStyle": "italic",
            "foreground": "#fdaeb7"
          }
        },
        {
          "scope": "invalid.unimplemented",
          "settings": {
            "fontStyle": "italic",
            "foreground": "#fdaeb7"
          }
        },
        {
          "scope": "carriage-return",
          "settings": {
            "background": "#f97583",
            "content": "^M",
            "fontStyle": "italic underline",
            "foreground": "#24292e"
          }
        },
        {
          "scope": "message.error",
          "settings": {
            "foreground": "#fdaeb7"
          }
        },
        {
          "scope": "string variable",
          "settings": {
            "foreground": "#c98a7d"
          }
        },
        {
          "scope": [
            "source.regexp",
            "string.regexp"
          ],
          "settings": {
            "foreground": "#c4704f"
          }
        },
        {
          "scope": [
            "string.regexp.character-class",
            "string.regexp constant.character.escape",
            "string.regexp source.ruby.embedded",
            "string.regexp string.regexp.arbitrary-repitition"
          ],
          "settings": {
            "foreground": "#c98a7d"
          }
        },
        {
          "scope": "string.regexp constant.character.escape",
          "settings": {
            "foreground": "#e6cc77"
          }
        },
        {
          "scope": [
            "support.constant"
          ],
          "settings": {
            "foreground": "#c99076"
          }
        },
        {
          "scope": [
            "keyword.operator.quantifier.regexp",
            "constant.numeric",
            "number"
          ],
          "settings": {
            "foreground": "#4C9A91"
          }
        },
        {
          "scope": [
            "keyword.other.unit"
          ],
          "settings": {
            "foreground": "#cb7676"
          }
        },
        {
          "scope": [
            "constant.language.boolean",
            "constant.language"
          ],
          "settings": {
            "foreground": "#4d9375"
          }
        },
        {
          "scope": "meta.module-reference",
          "settings": {
            "foreground": "#4d9375"
          }
        },
        {
          "scope": "punctuation.definition.list.begin.markdown",
          "settings": {
            "foreground": "#d4976c"
          }
        },
        {
          "scope": [
            "markup.heading",
            "markup.heading entity.name"
          ],
          "settings": {
            "fontStyle": "bold",
            "foreground": "#4d9375"
          }
        },
        {
          "scope": "markup.quote",
          "settings": {
            "foreground": "#5d99a9"
          }
        },
        {
          "scope": "markup.italic",
          "settings": {
            "fontStyle": "italic",
            "foreground": "#dbd7caee"
          }
        },
        {
          "scope": "markup.bold",
          "settings": {
            "fontStyle": "bold",
            "foreground": "#dbd7caee"
          }
        },
        {
          "scope": "markup.raw",
          "settings": {
            "foreground": "#4d9375"
          }
        },
        {
          "scope": [
            "markup.deleted",
            "meta.diff.header.from-file",
            "punctuation.definition.deleted"
          ],
          "settings": {
            "background": "#86181d",
            "foreground": "#fdaeb7"
          }
        },
        {
          "scope": [
            "markup.inserted",
            "meta.diff.header.to-file",
            "punctuation.definition.inserted"
          ],
          "settings": {
            "background": "#144620",
            "foreground": "#85e89d"
          }
        },
        {
          "scope": [
            "markup.changed",
            "punctuation.definition.changed"
          ],
          "settings": {
            "background": "#c24e00",
            "foreground": "#ffab70"
          }
        },
        {
          "scope": [
            "markup.ignored",
            "markup.untracked"
          ],
          "settings": {
            "background": "#79b8ff",
            "foreground": "#2f363d"
          }
        },
        {
          "scope": "meta.diff.range",
          "settings": {
            "fontStyle": "bold",
            "foreground": "#b392f0"
          }
        },
        {
          "scope": "meta.diff.header",
          "settings": {
            "foreground": "#79b8ff"
          }
        },
        {
          "scope": "meta.separator",
          "settings": {
            "fontStyle": "bold",
            "foreground": "#79b8ff"
          }
        },
        {
          "scope": "meta.output",
          "settings": {
            "foreground": "#79b8ff"
          }
        },
        {
          "scope": [
            "brackethighlighter.tag",
            "brackethighlighter.curly",
            "brackethighlighter.round",
            "brackethighlighter.square",
            "brackethighlighter.angle",
            "brackethighlighter.quote"
          ],
          "settings": {
            "foreground": "#d1d5da"
          }
        },
        {
          "scope": "brackethighlighter.unmatched",
          "settings": {
            "foreground": "#fdaeb7"
          }
        },
        {
          "scope": [
            "constant.other.reference.link",
            "string.other.link",
            "punctuation.definition.string.begin.markdown",
            "punctuation.definition.string.end.markdown"
          ],
          "settings": {
            "foreground": "#c98a7d"
          }
        },
        {
          "scope": [
            "markup.underline.link.markdown",
            "markup.underline.link.image.markdown"
          ],
          "settings": {
            "fontStyle": "underline",
            "foreground": "#dedcd590"
          }
        },
        {
          "scope": [
            "type.identifier",
            "constant.other.character-class.regexp"
          ],
          "settings": {
            "foreground": "#6872ab"
          }
        },
        {
          "scope": [
            "entity.other.attribute-name.html.vue"
          ],
          "settings": {
            "foreground": "#80a665"
          }
        },
        {
          "scope": [
            "invalid.illegal.unrecognized-tag.html"
          ],
          "settings": {
            "fontStyle": "normal"
          }
        }
      ],
      "type": "dark"
    }
  }
}