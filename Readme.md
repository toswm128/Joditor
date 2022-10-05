# joditor

Like Notion, it is a WYSIWYG editor with multiple features.

<div style="display:flex; justify-content:space-between">

<img src="https://joblog-images-buckit.s3.ap-northeast-2.amazonaws.com/images/6f8ed419-b69f-4ef9-803e-9862e0879351.gif" width="40%" />
<img src="https://joblog-images-buckit.s3.ap-northeast-2.amazonaws.com/images/e86632d3-86aa-4238-9b41-b5dfb4a9e93b.00" width="50%"  />

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
