var HTMLtoJSX = require('htmltojsx')
    , converter = new HTMLtoJSX({
        createClass: true,
        outputClassName: ''
    });

module.exports = function(source) {
    var output = converter.convert(source);

    //I suppose everybody use es5->es6 transpilers
    return `import React from 'react'; \nexport default ${output}`;
};