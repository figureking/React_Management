This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Management System
테스트 프로젝트 입니다.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

- dist (리액트 컴포넌트를 렌더링할 대상)
    - index.html

- server (BACK-END)
    - models
    : mongoose 모델이 위치하는 디렉토리
    - routes
    : API 들이 위치하는 디렉토리
    - main.js : 서버를 위한 js 파일

- src (FRONT-END)
    - actions
    : actionType, action 생성자 함수, thunk 가 위치할 디렉토리
    - components
    : 기능을 가진 컴포넌트 (작은단위의 컴포넌트) 들이 위치할 디렉토리
    - containers
    : 컴포넌트를 포함하는 상위 개념의 컴포넌트 (라우트에 렌더링할 컴포넌트) 들이 위치할 디렉토리
    - reducers
    : 액션객체를 전달받아 Redux state 를 업데이트하는 함수가 위치할 디렉토리
    - index.js : 리액트 설정 파일 (렌더링 위치, 라우트 등을 지정)
    - style.css : 스타일시트

PS C:\Users\user\React Project Tutorial\mesmanagement> npm list --depth=0
management@1.0.0 C:\Users\user\React Project Tutorial\mesmanagement
+-- UNMET PEER DEPENDENCY @material-ui/core@^4.0.0
+-- @material-ui/icons@4.9.1
+-- body-parser@1.19.0
+-- concurrently@5.2.0
+-- express@4.17.1
+-- UNMET DEPENDENCY http-proxy-middleware@^1.0.4
+-- multer@1.4.2
+-- mysql@2.18.1
+-- nodemon@2.0.4
+-- UNMET PEER DEPENDENCY react@^16.8.0
`-- UNMET PEER DEPENDENCY react-dom@^16.8.0