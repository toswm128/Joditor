# joditor

Like Notion, it is a WYSIWYG editor with multiple features.

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
