# React Go QR Code
[![Version](https://img.shields.io/npm/v/react-goqr-code.svg?style=for-the-badge&logo=appveyor)]()
[![React](https://img.shields.io/npm/dependency-version/react-goqr-code/react.svg?style=for-the-badge&logo=appveyor)]()
[![Downloads](https://img.shields.io/npm/dw/react-goqr-code.svg?style=for-the-badge&logo=appveyor)]()
[![License](https://img.shields.io/github/license/iamgutz/react-goqr-code.svg?style=for-the-badge&logo=appveyor)]()

react-goqr-code is a React Component to generate a QR code via Google Chart API.
![screen shot](https://raw.githubusercontent.com/iamgutz/react-goqr-code/master/screenshots/demo-image.png)

## Installation
```
$ yarn add react-goqr-code
or
$ npm install --save react-goqr-code
```

## Usage

```
import React, { Component } from 'react';
import QRCode from 'react-goqr-code';

class App extends Component {
  render() {
    return (
        <div>
          <QRCode
            data="https://www.google.com"
            size={130}
            framed
          />
        </div>
    );
  }
}
```

### Props
|Prop| Type | Required | Description| Default
|---	|---	|--- |--- |--- |
|data| String | No | The data to encode| -
|size| Number | No | Image size in pixels (width x height). Min value: 30, Max value: 547| 130
|framed| Boolean | No |  Adds a frame to the image| false

# Demo
You want to see some examples? Go to [Online Demo](https://iamgutz.github.io/react-goqr-code/)
