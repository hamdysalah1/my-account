![alt text](https://drive.google.com/uc?export=view&id=1ovCGaFLos_ywZiCQav3BW8YJ14i_XPGG "ApiRequestsFlow")

##Install dependencies
First, run `yarn add` or `npm install` to install all dependencies

## Run the project
To runs the app in the development mode.<br />
use `yarn start` or `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Linting
Eslint and Prettier are used for linting

**Install Eslint and Prettier globally**

`yarn add eslint --dev` or `npm install eslint --save-dev`


**Use this command to run the linting**
`yarn lint` or `npm run lint`

## Styling
[Styled Component](https://styled-components.com/docs) is passing styled HTML tag as a component 
*Example*
```
    const Title= styled.h1`
        font-size: 30px;
        color: red
    `
```

You can import this in any component and treat it as actual component
```
   <Title title="Hello World"/>
```
## Error handling
Component `ErrorBoundary.js` is a top-level component wrap all app components it catch errors in the components below them in the tree.

**Error boundaries do not catch errors for:**
- Event handlers
- Asynchronous code

To pass an error to the component use `Throw Error`

*Example*
<pre><code>fetch('URL')
.then( res => res.json )
.then( res => {
    if(res.error){
        new new Error(res.error)
    }
})
.catch( () => throw new Error("Somthing went wrong")</code></pre>

## Production

use `yarn build` or `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

## Editor Config
if `.editorconfig` file not exist create new one on root folder
```
root = true

[*]
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
indent_style = space
indent_size = 2

[*.{js,txt,md,css,html,php,py,json,yml,sass,pug}]
indent_style = space
indent_size = 2

[*.{diff,md}]
trim_trailing_whitespace = false

```
