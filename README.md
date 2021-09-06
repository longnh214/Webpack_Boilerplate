# Webpack_Boilerplate

Webpack과 Babel, source-map을 연동하여 프론트엔드 개발환경 Setting

## Webpack이란?

> 프론트엔드에서 성능 향상 및 좋은 구조를 짜기 위해 사용하는 것

> 자바스크립트의 패키지를 사용하다보면 서로 같은 변수를 사용하여 충돌이 일어나게 되는 것을 해결하기 위해 'Bundler'를 사용한다.

> 하나의 자바스크립트 파일에 css와 같은 여러 이미지 모듈들을 몰아 넣을 수 있다.

<br>

```jsx
//webpack과 webpack-cli를 dev Dependency로 설치
npm install -D webpack webpack-cli
```

<br>

```jsx
//webpack.config.js
const path = require("path");

const config = {
    mode: "none",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "build.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            { test: /\.css$/, use: "css-loader" },
            {
                test: /\.scss$/,
                use: ["css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]?[hash]",
                        },
                    },
                ],
            },
        ],
    },
    devtool: "source-map",
};

module.exports = config;
```

<br>

```jsx
//babel 연동
npm i @babel/core @babel/cli @babel/preset-env -D
```

<br>

```jsx
//babel.config.js
module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            "@babel/preset-env",
            {
                targets: "> 0.25%, not dead",
            },
        ],
    ];

    return {
        presets,
    };
};
```

<br>

```jsx
//file 로더 설치
npm i file-loader -D

//css, sass 로더 설치
npm i css-loader sass-loader -D
```

<br>
