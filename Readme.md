# joditor

Like Notion, it is a WYSIWYG editor with multiple features.

<div style="display:flex; justify-content:space-between">

<img src="https://joblog-images-buckit.s3.ap-northeast-2.amazonaws.com/images/title+move.gif" alt="" width="45%" />
<img src="https://joblog-images-buckit.s3.ap-northeast-2.amazonaws.com/images/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2022-10-05+%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB+10.00.36.png" alt="" width="50%"  />

</div>
<br/>

## Install

### npm

```
npm install joditor
```

### yarn

```
yarn add joditor
```

## How to use

```jsx
import React from "react";
import Joditor from "joditor";

const Editor = () => {
  return (
    <div>
      <Joditor onSubmit={(dom) => {}} onCancel={() => {}} />
    </div>
  );
};
```

## Props

| title    | Type | Default | Description                                      |
| -------- | ---- | ------- | ------------------------------------------------ |
| onSubmit | func | null    | submit callback. has dom as argument (dom)=> ... |
| onCancel | func | null    | cancel callback. ()=> ...                        |
