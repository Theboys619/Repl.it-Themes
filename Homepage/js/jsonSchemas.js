const schemas = [
  {
    "$schema": "http://json-schema.org/draft-07/schema",
    "type": "object",
    "default": {},
    "description": "The main schema for creating Monaco Editor themes.",
    "examples": [
        {
            "name": "Solarized Dark",
            "base": "vs-dark",
            "inherit": true,
            "rules": [
                {
                    "foreground": "586e75",
                    "token": "comment"
                },
                {
                    "foreground": "2aa198",
                    "token": "string"
                },
                {
                    "foreground": "586e75",
                    "token": "string"
                },
                {
                    "foreground": "d30102",
                    "token": "string.regexp"
                },
                {
                    "foreground": "d33682",
                    "token": "constant.numeric"
                },
                {
                    "foreground": "268bd2",
                    "token": "variable.language"
                },
                {
                    "foreground": "268bd2",
                    "token": "variable.other"
                },
                {
                    "foreground": "859900",
                    "token": "keyword"
                },
                {
                    "foreground": "738a05",
                    "token": "storage"
                },
                {
                    "foreground": "268bd2",
                    "token": "entity.name.class"
                },
                {
                    "foreground": "268bd2",
                    "token": "entity.name.type.class"
                },
                {
                    "foreground": "268bd2",
                    "token": "entity.name.function"
                },
                {
                    "foreground": "859900",
                    "token": "punctuation.definition.variable"
                },
                {
                    "foreground": "d30102",
                    "token": "punctuation.section.embedded.begin"
                },
                {
                    "foreground": "d30102",
                    "token": "punctuation.section.embedded.end"
                },
                {
                    "foreground": "b58900",
                    "token": "constant.language"
                },
                {
                    "foreground": "b58900",
                    "token": "meta.preprocessor"
                },
                {
                    "foreground": "d30102",
                    "token": "support.function.construct"
                },
                {
                    "foreground": "d30102",
                    "token": "keyword.other.new"
                },
                {
                    "foreground": "cb4b16",
                    "token": "constant.character"
                },
                {
                    "foreground": "cb4b16",
                    "token": "constant.other"
                },
                {
                    "foreground": "268bd2",
                    "fontStyle": "bold",
                    "token": "entity.name.tag"
                },
                {
                    "foreground": "586e75",
                    "token": "punctuation.definition.tag.html"
                },
                {
                    "foreground": "586e75",
                    "token": "punctuation.definition.tag.begin"
                },
                {
                    "foreground": "586e75",
                    "token": "punctuation.definition.tag.end"
                },
                {
                    "foreground": "93a1a1",
                    "token": "entity.other.attribute-name"
                },
                {
                    "foreground": "268bd2",
                    "token": "support.function"
                },
                {
                    "foreground": "d30102",
                    "token": "punctuation.separator.continuation"
                },
                {
                    "foreground": "859900",
                    "token": "support.type"
                },
                {
                    "foreground": "859900",
                    "token": "support.class"
                },
                {
                    "foreground": "cb4b16",
                    "token": "support.type.exception"
                },
                {
                    "foreground": "cb4b16",
                    "token": "keyword.other.special-method"
                },
                {
                    "foreground": "269186",
                    "token": "string.quoted.double"
                },
                {
                    "foreground": "269186",
                    "token": "string.quoted.single"
                },
                {
                    "foreground": "c60000",
                    "token": "punctuation.definition.string.begin"
                },
                {
                    "foreground": "c60000",
                    "token": "punctuation.definition.string.end"
                },
                {
                    "foreground": "a57800",
                    "token": "entity.name.tag.css"
                },
                {
                    "foreground": "a57800",
                    "token": "support.type.property-name.css"
                },
                {
                    "foreground": "a57800",
                    "token": "meta.property-name.css"
                },
                {
                    "foreground": "d01f1e",
                    "token": "source.css"
                },
                {
                    "foreground": "536871",
                    "token": "meta.selector.css"
                },
                {
                    "foreground": "5a74cf",
                    "token": "punctuation.section.property-list.css"
                },
                {
                    "foreground": "269186",
                    "token": "meta.property-value.css constant.numeric.css"
                },
                {
                    "foreground": "269186",
                    "token": "keyword.other.unit.css"
                },
                {
                    "foreground": "269186",
                    "token": "constant.other.color.rgb-value.css"
                },
                {
                    "foreground": "269186",
                    "token": "meta.property-value.css"
                },
                {
                    "foreground": "d01f1e",
                    "token": "keyword.other.important.css"
                },
                {
                    "foreground": "269186",
                    "token": "support.constant.color"
                },
                {
                    "foreground": "738a13",
                    "token": "entity.name.tag.css"
                },
                {
                    "foreground": "536871",
                    "token": "punctuation.separator.key-value.css"
                },
                {
                    "foreground": "536871",
                    "token": "punctuation.terminator.rule.css"
                },
                {
                    "foreground": "268bd2",
                    "token": "entity.other.attribute-name.class.css"
                },
                {
                    "foreground": "bd3800",
                    "token": "entity.other.attribute-name.pseudo-element.css"
                },
                {
                    "foreground": "bd3800",
                    "token": "entity.other.attribute-name.pseudo-class.css"
                },
                {
                    "foreground": "268bd2",
                    "token": "entity.other.attribute-name.id.css"
                },
                {
                    "foreground": "a57800",
                    "token": "meta.function.js"
                },
                {
                    "foreground": "a57800",
                    "token": "entity.name.function.js"
                },
                {
                    "foreground": "a57800",
                    "token": "support.function.dom.js"
                },
                {
                    "foreground": "a57800",
                    "token": "text.html.basic source.js.embedded.html"
                },
                {
                    "foreground": "268bd2",
                    "token": "storage.type.function.js"
                },
                {
                    "foreground": "269186",
                    "token": "constant.numeric.js"
                },
                {
                    "foreground": "268bd2",
                    "token": "meta.brace.square.js"
                },
                {
                    "foreground": "268bd2",
                    "token": "storage.type.js"
                },
                {
                    "foreground": "93a1a1",
                    "token": "meta.brace.round"
                },
                {
                    "foreground": "93a1a1",
                    "token": "punctuation.definition.parameters.begin.js"
                },
                {
                    "foreground": "93a1a1",
                    "token": "punctuation.definition.parameters.end.js"
                },
                {
                    "foreground": "268bd2",
                    "token": "meta.brace.curly.js"
                },
                {
                    "foreground": "899090",
                    "fontStyle": "italic",
                    "token": "entity.name.tag.doctype.html"
                },
                {
                    "foreground": "899090",
                    "fontStyle": "italic",
                    "token": "meta.tag.sgml.html"
                },
                {
                    "foreground": "899090",
                    "fontStyle": "italic",
                    "token": "string.quoted.double.doctype.identifiers-and-DTDs.html"
                },
                {
                    "foreground": "839496",
                    "fontStyle": "italic",
                    "token": "comment.block.html"
                },
                {
                    "fontStyle": "italic",
                    "token": "entity.name.tag.script.html"
                },
                {
                    "foreground": "269186",
                    "token": "source.css.embedded.html string.quoted.double.html"
                },
                {
                    "foreground": "bd3800",
                    "fontStyle": "bold",
                    "token": "text.html.ruby"
                },
                {
                    "foreground": "708284",
                    "token": "text.html.basic meta.tag.other.html"
                },
                {
                    "foreground": "708284",
                    "token": "text.html.basic meta.tag.any.html"
                },
                {
                    "foreground": "708284",
                    "token": "text.html.basic meta.tag.block.any"
                },
                {
                    "foreground": "708284",
                    "token": "text.html.basic meta.tag.inline.any"
                },
                {
                    "foreground": "708284",
                    "token": "text.html.basic meta.tag.structure.any.html"
                },
                {
                    "foreground": "708284",
                    "token": "text.html.basic source.js.embedded.html"
                },
                {
                    "foreground": "708284",
                    "token": "punctuation.separator.key-value.html"
                },
                {
                    "foreground": "708284",
                    "token": "text.html.basic entity.other.attribute-name.html"
                },
                {
                    "foreground": "269186",
                    "token": "text.html.basic meta.tag.structure.any.html punctuation.definition.string.begin.html"
                },
                {
                    "foreground": "269186",
                    "token": "punctuation.definition.string.begin.html"
                },
                {
                    "foreground": "269186",
                    "token": "punctuation.definition.string.end.html"
                },
                {
                    "foreground": "268bd2",
                    "fontStyle": "bold",
                    "token": "entity.name.tag.block.any.html"
                },
                {
                    "fontStyle": "italic",
                    "token": "source.css.embedded.html entity.name.tag.style.html"
                },
                {
                    "foreground": "819090",
                    "fontStyle": "italic",
                    "token": "source.css.embedded.html"
                },
                {
                    "foreground": "819090",
                    "fontStyle": "italic",
                    "token": "comment.block.html"
                },
                {
                    "foreground": "268bd2",
                    "token": "punctuation.definition.variable.ruby"
                },
                {
                    "foreground": "708284",
                    "token": "meta.function.method.with-arguments.ruby"
                },
                {
                    "foreground": "469186",
                    "token": "variable.language.ruby"
                },
                {
                    "foreground": "268bd2",
                    "token": "entity.name.function.ruby"
                },
                {
                    "foreground": "738a05",
                    "fontStyle": "bold",
                    "token": "keyword.control.ruby"
                },
                {
                    "foreground": "738a05",
                    "fontStyle": "bold",
                    "token": "keyword.control.def.ruby"
                },
                {
                    "foreground": "748b00",
                    "token": "keyword.control.class.ruby"
                },
                {
                    "foreground": "748b00",
                    "token": "meta.class.ruby"
                },
                {
                    "foreground": "a57800",
                    "token": "entity.name.type.class.ruby"
                },
                {
                    "foreground": "748b00",
                    "token": "keyword.control.ruby"
                },
                {
                    "foreground": "a57800",
                    "token": "support.class.ruby"
                },
                {
                    "foreground": "748b00",
                    "token": "keyword.other.special-method.ruby"
                },
                {
                    "foreground": "269186",
                    "token": "constant.language.ruby"
                },
                {
                    "foreground": "269186",
                    "token": "constant.numeric.ruby"
                },
                {
                    "foreground": "a57800",
                    "token": "variable.other.constant.ruby"
                },
                {
                    "foreground": "269186",
                    "token": "constant.other.symbol.ruby"
                },
                {
                    "foreground": "d01f1e",
                    "token": "punctuation.section.embedded.ruby"
                },
                {
                    "foreground": "d01f1e",
                    "token": "punctuation.definition.string.begin.ruby"
                },
                {
                    "foreground": "d01f1e",
                    "token": "punctuation.definition.string.end.ruby"
                },
                {
                    "foreground": "bd3800",
                    "token": "keyword.other.special-method.ruby"
                },
                {
                    "foreground": "bd3800",
                    "token": "keyword.control.import.include.php"
                },
                {
                    "foreground": "819090",
                    "token": "text.html.ruby meta.tag.inline.any.html"
                },
                {
                    "foreground": "269186",
                    "token": "text.html.ruby punctuation.definition.string.begin"
                },
                {
                    "foreground": "269186",
                    "token": "text.html.ruby punctuation.definition.string.end"
                },
                {
                    "foreground": "839496",
                    "token": "punctuation.definition.string.begin"
                },
                {
                    "foreground": "839496",
                    "token": "punctuation.definition.string.end"
                },
                {
                    "foreground": "839496",
                    "token": "support.class.php"
                },
                {
                    "foreground": "d31e1e",
                    "token": "keyword.operator.index-start.php"
                },
                {
                    "foreground": "d31e1e",
                    "token": "keyword.operator.index-end.php"
                },
                {
                    "foreground": "536871",
                    "token": "meta.array.php"
                },
                {
                    "foreground": "a57800",
                    "token": "meta.array.php support.function.construct.php"
                },
                {
                    "foreground": "a57800",
                    "token": "meta.array.empty.php support.function.construct.php"
                },
                {
                    "foreground": "a57800",
                    "token": "support.function.construct.php"
                },
                {
                    "foreground": "d31e1e",
                    "token": "punctuation.definition.array.begin"
                },
                {
                    "foreground": "d31e1e",
                    "token": "punctuation.definition.array.end"
                },
                {
                    "foreground": "269186",
                    "token": "constant.numeric.php"
                },
                {
                    "foreground": "cb4b16",
                    "token": "keyword.other.new.php"
                },
                {
                    "foreground": "839496",
                    "token": "keyword.operator.class"
                },
                {
                    "foreground": "899090",
                    "token": "variable.other.property.php"
                },
                {
                    "foreground": "a57800",
                    "token": "storage.modifier.extends.php"
                },
                {
                    "foreground": "a57800",
                    "token": "storage.type.class.php"
                },
                {
                    "foreground": "a57800",
                    "token": "keyword.operator.class.php"
                },
                {
                    "foreground": "839496",
                    "token": "punctuation.terminator.expression.php"
                },
                {
                    "foreground": "536871",
                    "token": "meta.other.inherited-class.php"
                },
                {
                    "foreground": "748b00",
                    "token": "storage.type.php"
                },
                {
                    "foreground": "899090",
                    "token": "entity.name.function.php"
                },
                {
                    "foreground": "748b00",
                    "token": "support.function.construct.php"
                },
                {
                    "foreground": "839496",
                    "token": "entity.name.type.class.php"
                },
                {
                    "foreground": "839496",
                    "token": "meta.function-call.php"
                },
                {
                    "foreground": "839496",
                    "token": "meta.function-call.static.php"
                },
                {
                    "foreground": "839496",
                    "token": "meta.function-call.object.php"
                },
                {
                    "foreground": "899090",
                    "token": "keyword.other.phpdoc"
                },
                {
                    "foreground": "bd3613",
                    "token": "source.php.embedded.block.html"
                },
                {
                    "foreground": "bd3800",
                    "token": "storage.type.function.php"
                },
                {
                    "foreground": "269186",
                    "token": "constant.numeric.c"
                },
                {
                    "foreground": "bb3700",
                    "token": "meta.preprocessor.c.include"
                },
                {
                    "foreground": "bb3700",
                    "token": "meta.preprocessor.macro.c"
                },
                {
                    "foreground": "bb3700",
                    "token": "keyword.control.import.define.c"
                },
                {
                    "foreground": "bb3700",
                    "token": "keyword.control.import.include.c"
                },
                {
                    "foreground": "bb3700",
                    "token": "entity.name.function.preprocessor.c"
                },
                {
                    "foreground": "269186",
                    "token": "meta.preprocessor.c.include string.quoted.other.lt-gt.include.c"
                },
                {
                    "foreground": "269186",
                    "token": "meta.preprocessor.c.include punctuation.definition.string.begin.c"
                },
                {
                    "foreground": "269186",
                    "token": "meta.preprocessor.c.include punctuation.definition.string.end.c"
                },
                {
                    "foreground": "536871",
                    "token": "support.function.C99.c"
                },
                {
                    "foreground": "536871",
                    "token": "support.function.any-method.c"
                },
                {
                    "foreground": "536871",
                    "token": "entity.name.function.c"
                },
                {
                    "foreground": "269186",
                    "token": "punctuation.definition.string.begin.c"
                },
                {
                    "foreground": "269186",
                    "token": "punctuation.definition.string.end.c"
                },
                {
                    "foreground": "a57800",
                    "token": "storage.type.c"
                },
                {
                    "foreground": "e0eddd",
                    "background": "a57706",
                    "fontStyle": "italic",
                    "token": "meta.diff"
                },
                {
                    "foreground": "e0eddd",
                    "background": "a57706",
                    "fontStyle": "italic",
                    "token": "meta.diff.header"
                },
                {
                    "foreground": "d3201f",
                    "background": "eae3ca",
                    "token": "markup.deleted"
                },
                {
                    "foreground": "bf3904",
                    "background": "eae3ca",
                    "token": "markup.changed"
                },
                {
                    "foreground": "219186",
                    "background": "eae3ca",
                    "token": "markup.inserted"
                },
                {
                    "foreground": "e0eddd",
                    "background": "a57706",
                    "token": "text.html.markdown meta.dummy.line-break"
                },
                {
                    "foreground": "269186",
                    "token": "text.html.markdown markup.raw.inline"
                },
                {
                    "foreground": "269186",
                    "token": "text.restructuredtext markup.raw"
                },
                {
                    "foreground": "d3201f",
                    "token": "other.package.exclude"
                },
                {
                    "foreground": "d3201f",
                    "token": "other.remove"
                },
                {
                    "foreground": "269186",
                    "token": "other.add"
                },
                {
                    "foreground": "b81d1c",
                    "token": "punctuation.section.group.tex"
                },
                {
                    "foreground": "b81d1c",
                    "token": "punctuation.definition.arguments.begin.latex"
                },
                {
                    "foreground": "b81d1c",
                    "token": "punctuation.definition.arguments.end.latex"
                },
                {
                    "foreground": "b81d1c",
                    "token": "punctuation.definition.arguments.latex"
                },
                {
                    "foreground": "a57705",
                    "token": "meta.group.braces.tex"
                },
                {
                    "foreground": "a57705",
                    "token": "string.other.math.tex"
                },
                {
                    "foreground": "bd3800",
                    "token": "variable.parameter.function.latex"
                },
                {
                    "foreground": "d01f1e",
                    "token": "punctuation.definition.constant.math.tex"
                },
                {
                    "foreground": "269186",
                    "token": "text.tex.latex constant.other.math.tex"
                },
                {
                    "foreground": "269186",
                    "token": "constant.other.general.math.tex"
                },
                {
                    "foreground": "269186",
                    "token": "constant.other.general.math.tex"
                },
                {
                    "foreground": "269186",
                    "token": "constant.character.math.tex"
                },
                {
                    "foreground": "a57800",
                    "token": "string.other.math.tex"
                },
                {
                    "foreground": "d3201f",
                    "token": "punctuation.definition.string.begin.tex"
                },
                {
                    "foreground": "d3201f",
                    "token": "punctuation.definition.string.end.tex"
                },
                {
                    "foreground": "269186",
                    "token": "keyword.control.label.latex"
                },
                {
                    "foreground": "269186",
                    "token": "text.tex.latex constant.other.general.math.tex"
                },
                {
                    "foreground": "d01f1e",
                    "token": "variable.parameter.definition.label.latex"
                },
                {
                    "foreground": "748b00",
                    "token": "support.function.be.latex"
                },
                {
                    "foreground": "bd3800",
                    "token": "support.function.section.latex"
                },
                {
                    "foreground": "269186",
                    "token": "support.function.general.tex"
                },
                {
                    "fontStyle": "italic",
                    "token": "punctuation.definition.comment.tex"
                },
                {
                    "fontStyle": "italic",
                    "token": "comment.line.percentage.tex"
                },
                {
                    "foreground": "269186",
                    "token": "keyword.control.ref.latex"
                },
                {
                    "foreground": "748b00",
                    "token": "storage.type.class.python"
                },
                {
                    "foreground": "748b00",
                    "token": "storage.type.function.python"
                },
                {
                    "foreground": "748b00",
                    "token": "storage.modifier.global.python"
                },
                {
                    "foreground": "bd3800",
                    "token": "keyword.control.import.python"
                },
                {
                    "foreground": "bd3800",
                    "token": "keyword.control.import.from.python"
                },
                {
                    "foreground": "a57800",
                    "token": "support.type.exception.python"
                },
                {
                    "foreground": "748b00",
                    "token": "support.function.builtin.shell"
                },
                {
                    "foreground": "bd3800",
                    "token": "variable.other.normal.shell"
                },
                {
                    "foreground": "268bd2",
                    "token": "source.shell"
                },
                {
                    "foreground": "536871",
                    "token": "meta.scope.for-in-loop.shell"
                },
                {
                    "foreground": "536871",
                    "token": "variable.other.loop.shell"
                },
                {
                    "foreground": "748b00",
                    "token": "punctuation.definition.string.end.shell"
                },
                {
                    "foreground": "748b00",
                    "token": "punctuation.definition.string.begin.shell"
                },
                {
                    "foreground": "536871",
                    "token": "meta.scope.case-block.shell"
                },
                {
                    "foreground": "536871",
                    "token": "meta.scope.case-body.shell"
                },
                {
                    "foreground": "cd1e1d",
                    "token": "punctuation.definition.logical-expression.shell"
                },
                {
                    "fontStyle": "italic",
                    "token": "comment.line.number-sign.shell"
                },
                {
                    "foreground": "bd3800",
                    "token": "keyword.other.import.java"
                },
                {
                    "foreground": "586e75",
                    "token": "storage.modifier.import.java"
                },
                {
                    "foreground": "a57800",
                    "token": "meta.class.java storage.modifier.java"
                },
                {
                    "foreground": "536871",
                    "token": "source.java comment.block"
                },
                {
                    "foreground": "536871",
                    "token": "comment.block meta.documentation.tag.param.javadoc keyword.other.documentation.param.javadoc"
                },
                {
                    "foreground": "b58900",
                    "token": "punctuation.definition.variable.perl"
                },
                {
                    "foreground": "b58900",
                    "token": "variable.other.readwrite.global.perl"
                },
                {
                    "foreground": "b58900",
                    "token": "variable.other.predefined.perl"
                },
                {
                    "foreground": "b58900",
                    "token": "keyword.operator.comparison.perl"
                },
                {
                    "foreground": "859900",
                    "token": "support.function.perl"
                },
                {
                    "foreground": "586e75",
                    "fontStyle": "italic",
                    "token": "comment.line.number-sign.perl"
                },
                {
                    "foreground": "2aa198",
                    "token": "punctuation.definition.string.begin.perl"
                },
                {
                    "foreground": "2aa198",
                    "token": "punctuation.definition.string.end.perl"
                },
                {
                    "foreground": "dc322f",
                    "token": "constant.character.escape.perl"
                }
            ],
            "colors": {
                "editor.foreground": "#839496",
                "editor.background": "#042029",
                "editor.selectionBackground": "#0A2933",
                "editor.lineHighlightBackground": "#0A2933",
                "editorCursor.foreground": "#819090",
                "editorWhitespace.foreground": "#0A2933"
            }
        }
    ],
    "required": [
        "name",
        "colors"
    ],
    "title": "The root schema",
    "properties": {
        "name": {
            "$id": "#/properties/name",
            "type": "string",
            "title": "The name schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "Solarized Dark"
            ]
        },
        "base": {
            "$id": "#/properties/base",
            "type": "string",
            "title": "The base schema",
            "description": "An explanation about the purpose of this instance.",
            "default": "",
            "examples": [
                "vs-dark"
            ]
        },
        "inherit": {
            "$id": "#/properties/inherit",
            "type": "boolean",
            "title": "The inherit schema",
            "description": "An explanation about the purpose of this instance.",
            "default": false,
            "examples": [
                true
            ]
        },
        "rules": {
            "$id": "#/properties/rules",
            "type": "array",
            "title": "The rules schema",
            "description": "An explanation about the purpose of this instance.",
            "default": [],
            "examples": [
                [
                    {
                        "foreground": "586e75",
                        "token": "comment"
                    },
                    {
                        "foreground": "2aa198",
                        "token": "string"
                    }
                ]
            ],
            "additionalItems": true,
            "items": {
                "$id": "#/properties/rules/items",
                "anyOf": [
                    {
                        "$id": "#/properties/rules/items/anyOf/0",
                        "type": "object",
                        "title": "The first anyOf schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": {},
                        "examples": [
                            {
                                "foreground": "586e75",
                                "token": "comment"
                            }
                        ],
                        "required": [
                            "foreground",
                            "token"
                        ],
                        "properties": {
                            "foreground": {
                                "$id": "#/properties/rules/items/anyOf/0/properties/foreground",
                                "type": "string",
                                "title": "The foreground schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": "",
                                "examples": [
                                    "586e75"
                                ]
                            },
                            "token": {
                                "$id": "#/properties/rules/items/anyOf/0/properties/token",
                                "type": "string",
                                "title": "The token schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": "",
                                "examples": [
                                    "comment"
                                ]
                            }
                        },
                        "additionalProperties": true
                    },
                    {
                        "$id": "#/properties/rules/items/anyOf/1",
                        "type": "object",
                        "title": "The second anyOf schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": {},
                        "examples": [
                            {
                                "foreground": "268bd2",
                                "fontStyle": "bold",
                                "token": "entity.name.tag"
                            }
                        ],
                        "required": [
                            "foreground",
                            "fontStyle",
                            "token"
                        ],
                        "properties": {
                            "foreground": {
                                "$id": "#/properties/rules/items/anyOf/1/properties/foreground",
                                "type": "string",
                                "title": "The foreground schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": "",
                                "examples": [
                                    "268bd2"
                                ]
                            },
                            "fontStyle": {
                                "$id": "#/properties/rules/items/anyOf/1/properties/fontStyle",
                                "type": "string",
                                "title": "The fontStyle schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": "",
                                "examples": [
                                    "bold"
                                ]
                            },
                            "token": {
                                "$id": "#/properties/rules/items/anyOf/1/properties/token",
                                "type": "string",
                                "title": "The token schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": "",
                                "examples": [
                                    "entity.name.tag"
                                ]
                            }
                        },
                        "additionalProperties": true
                    },
                    {
                        "$id": "#/properties/rules/items/anyOf/2",
                        "type": "object",
                        "title": "The third anyOf schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": {},
                        "examples": [
                            {
                                "fontStyle": "italic",
                                "token": "entity.name.tag.script.html"
                            }
                        ],
                        "required": [
                            "fontStyle",
                            "token"
                        ],
                        "properties": {
                            "fontStyle": {
                                "$id": "#/properties/rules/items/anyOf/2/properties/fontStyle",
                                "type": "string",
                                "title": "The fontStyle schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": "",
                                "examples": [
                                    "italic"
                                ]
                            },
                            "token": {
                                "$id": "#/properties/rules/items/anyOf/2/properties/token",
                                "type": "string",
                                "title": "The token schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": "",
                                "examples": [
                                    "entity.name.tag.script.html"
                                ]
                            }
                        },
                        "additionalProperties": true
                    },
                    {
                        "$id": "#/properties/rules/items/anyOf/3",
                        "type": "object",
                        "title": "The fourth anyOf schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": {},
                        "examples": [
                            {
                                "foreground": "e0eddd",
                                "background": "a57706",
                                "fontStyle": "italic",
                                "token": "meta.diff"
                            }
                        ],
                        "required": [
                            "foreground",
                            "background",
                            "fontStyle",
                            "token"
                        ],
                        "properties": {
                            "foreground": {
                                "$id": "#/properties/rules/items/anyOf/3/properties/foreground",
                                "type": "string",
                                "title": "The foreground schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": "",
                                "examples": [
                                    "e0eddd"
                                ]
                            },
                            "background": {
                                "$id": "#/properties/rules/items/anyOf/3/properties/background",
                                "type": "string",
                                "title": "The background schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": "",
                                "examples": [
                                    "a57706"
                                ]
                            },
                            "fontStyle": {
                                "$id": "#/properties/rules/items/anyOf/3/properties/fontStyle",
                                "type": "string",
                                "title": "The fontStyle schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": "",
                                "examples": [
                                    "italic"
                                ]
                            },
                            "token": {
                                "$id": "#/properties/rules/items/anyOf/3/properties/token",
                                "type": "string",
                                "title": "The token schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": "",
                                "examples": [
                                    "meta.diff"
                                ]
                            }
                        },
                        "additionalProperties": true
                    },
                    {
                        "$id": "#/properties/rules/items/anyOf/4",
                        "type": "object",
                        "title": "The fifth anyOf schema",
                        "description": "An explanation about the purpose of this instance.",
                        "default": {},
                        "examples": [
                            {
                                "foreground": "d3201f",
                                "background": "eae3ca",
                                "token": "markup.deleted"
                            }
                        ],
                        "required": [
                            "foreground",
                            "background",
                            "token"
                        ],
                        "properties": {
                            "foreground": {
                                "$id": "#/properties/rules/items/anyOf/4/properties/foreground",
                                "type": "string",
                                "title": "The foreground schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": "",
                                "examples": [
                                    "d3201f"
                                ]
                            },
                            "background": {
                                "$id": "#/properties/rules/items/anyOf/4/properties/background",
                                "type": "string",
                                "title": "The background schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": "",
                                "examples": [
                                    "eae3ca"
                                ]
                            },
                            "token": {
                                "$id": "#/properties/rules/items/anyOf/4/properties/token",
                                "type": "string",
                                "title": "The token schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": "",
                                "examples": [
                                    "markup.deleted"
                                ]
                            }
                        },
                        "additionalProperties": true
                    }
                ]
            }
        },
        "colors": {
            "$id": "#/properties/colors",
            "type": "object",
            "title": "The colors schema",
            "description": "An explanation about the purpose of this instance.",
            "default": {},
            "examples": [
                {
                    "editor.foreground": "#839496",
                    "editor.background": "#042029",
                    "editor.selectionBackground": "#0A2933",
                    "editor.lineHighlightBackground": "#0A2933",
                    "editorCursor.foreground": "#819090",
                    "editorWhitespace.foreground": "#0A2933"
                }
            ],
            "required": [
                "editor.foreground",
                "editor.background",
                "editor.selectionBackground",
                "editor.lineHighlightBackground",
                "editorCursor.foreground",
                "editorWhitespace.foreground"
            ],
            "properties": {
                "editor.foreground": {
                    "$id": "#/properties/colors/properties/editor.foreground",
                    "type": "string",
                    "title": "The editor.foreground schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": "",
                    "examples": [
                        "#839496"
                    ]
                },
                "editor.background": {
                    "$id": "#/properties/colors/properties/editor.background",
                    "type": "string",
                    "title": "The editor.background schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": "",
                    "examples": [
                        "#042029"
                    ]
                },
                "editor.selectionBackground": {
                    "$id": "#/properties/colors/properties/editor.selectionBackground",
                    "type": "string",
                    "title": "The editor.selectionBackground schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": "",
                    "examples": [
                        "#0A2933"
                    ]
                },
                "editor.lineHighlightBackground": {
                    "$id": "#/properties/colors/properties/editor.lineHighlightBackground",
                    "type": "string",
                    "title": "The editor.lineHighlightBackground schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": "",
                    "examples": [
                        "#0A2933"
                    ]
                },
                "editorCursor.foreground": {
                    "$id": "#/properties/colors/properties/editorCursor.foreground",
                    "type": "string",
                    "title": "The editorCursor.foreground schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": "",
                    "examples": [
                        "#819090"
                    ]
                },
                "editorWhitespace.foreground": {
                    "$id": "#/properties/colors/properties/editorWhitespace.foreground",
                    "type": "string",
                    "title": "The editorWhitespace.foreground schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": "",
                    "examples": [
                        "#0A2933"
                    ]
                }
            },
            "additionalProperties": true
        }
    },
    "additionalProperties": true
  }
]