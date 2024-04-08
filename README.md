<p align="center">
  <img src="https://github.com/danielsss/bread/blob/main/docs/images/logo.png">
</p>
<h1 align="center">bread.js</h1>

<p align="center">
  <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://forthebadge.com/images/badges/made-with-typescript.svg"></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/bread.js" target="_blank"><img src="https://img.shields.io/npm/v/bread.js?style=for-the-badge"></a>
  <a href="https://www.npmjs.com/package/bread.js" target="_blank"><img src="https://img.shields.io/npm/dt/bread.js?style=for-the-badge"></a>
</p>


The bread.js is a library that provides a simple way to access the `M-Team` API.
You can use it to get the information of the user, the torrent, the forum, and so on.


We've also provided the `cli` command to help you get what you want in an advanced way.


## Usage of bread.js



### Prerequisites

- Node.js 19.x or later

### Installation

```bash
pnpm install bread.js
```

### Import

You can import the module in your project like this(Node.js or Typescript):

```javascript
import Bread from 'bread.js';

const bread = new Bread({ key: 'YOUR KEY', url: 'test enviroment will be used in default' });

try {
  const info = await bread.member.base('your user id');
  await bread.member.bindOTP(); // The unImplemented error will be thrown
} catch (err) {
  console.error(err);
}
```

## Unimplemented APIs

> [!TIP]
> 
> The APIs below are not implemented yet for some reason.
> 
> The `UnimplementedMethodError` error will be thrown when you call them.

 
* bread.member.bindOTP
* bread.member.unbindOTP
* bread.member.changeEmail
* bread.member.changeEmailSendCode
* bread.member.updateLastBrowse


## Not allowed to access for third-party

> [!IMPORTANT]
> The APIs below are not allowed to access for third-party which means we wouldn't implement them at all.

* /admin/**
* /login
* /apikey/**
* /member/updateLastBrowse
* /member/getSessionList
* /member/revokeSession
* /member/queryUserLoginHistory
* /msg/**
