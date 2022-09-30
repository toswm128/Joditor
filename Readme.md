# joditor

노션을 참고하여 만든 위즈윅 에디터 입니다.
<br/>

## 설치

---

### npm

```
npm install joditor
```

### yarn

```
yarn add joditor
```

## 사용방법

---

```jsx
import React from "react";
import Joditor from "joditor";

const Editor = () => {
  return (
    <div>
      <Joditor onSubmit={(dom) => {}} onCancle={() => {}} />
    </div>
  );
};
```

## Props

---

| title    | Type | Default | Description                                   |
| -------- | ---- | ------- | --------------------------------------------- |
| onSubmit | func | null    | 작성하기 버튼을 눌렀을때 실행될 callback 함수 |
| onCancle | func | null    | 취소하기 버튼을 눌렀을때 실행될 callback 함수 |
