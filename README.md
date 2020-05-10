
## 주제: Counter

## 목적: useState vs useReducer 차이 알기

* 목표: `useState` vs `useReducer` 차이를 학습한다.

* 기능: 버튼을 클릭하면 1씩 증가/감소한다

* 주제 선정 이유: 

    <strong>Vocabulary</strong>를 만들다보니 App 컴포넌트가 비대하게 느껴졌다. **_App 컴포넌트를 컴팩트_하게 구현하고 싶어 구글링을 하다보니
    `useReducer`&&`useContext`를 알게됐다. 솔직히 바로 사용하기에는 어렵게 느껴져 먼저는 `useReducer`에 대해 익숙해지기 위해 `useState`와의 차이점에 대한 학습을 목표로 삼았다. 보다 간결한 예시를 통해 단계별로 학습할 계획이다.

* 학습 결과: 상태관리를 컴포넌트에서 분리할 수 있다. 
    

* 최종 목표: <counter> 를 시작으로 <vocabulary> 상태관리 또한 useReducer 로 변경해 볼 것이다.

* 다음 단계:  Counter 에 Context API 구현해보기 (사실... 굉장히 잉여적이지만, 단계별 연습을 위해^^) 





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
