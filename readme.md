# html2jsx-loader

Webpack loader module that exports HTML as [React](http://facebook.github.io/react/) JSX class.
I created this loader to help webmasters work with layouts in friendly html environment.
HTML can be then just copied by front-end developer to proper component or container for further development.

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

## Installation

```
npm i html2jsx-loader
```

## Examples

Add the **html2jsx-loader** to your Webpack configuration:

``` javascript
{
    resolve: {
        extensions: ['','.js','.html']
    }
    ...
    module: {
        loaders: [{
            test: /.html$/
            , loader: 'babel!htmltojsx'
        }
    ]}
    ...
}
```

Now you can write raw HTML (e.g. Layout1.html) and webpack will automatically convert the content of this file to a React component.

Finally, you can reference this component in your JavaScript code as follows:

``` javascript
const Layout1 = require('./Layout1');
const Layout2 = require('./Layout2');

//Layout1 is not HTML but ReactJS class.
const routes = (
    <Route path="/" component={RootLayout}>
        <Route path = "layout1" component = {Layout1} />
        <Route path = "layout2" component = {Layout2} />
        ...
```
