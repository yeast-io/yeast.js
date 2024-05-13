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

### Install

You can install the module via `bun` or `pnpm` and so on:

```bash
pnpm i bread.js
```

Or you can install it globally to use the `cli` command:

```bash
pnpm i -g bread.js


# Then you can use the `bread` command to get the information you want.
bread member base 1
```

### Import

You can import the module in your project like this(Node.js or Typescript):

```javascript
import Bread from 'bread.js';

// The https://test2.*.* is the default value of the url if you don't provide it.
const bread = new Bread({ key: 'YOUR KEY', url: '' });

try {
  const info = await bread.member.base('your user id');
  await bread.member.bindOTP(); // The unimplemented error will be thrown
} catch (err) {
  console.error(err);
}
```

## Unimplemented APIs

> [!IMPORTANT]
> 
> The APIs below have not been implemented yet because the original documents from the official website are not clear enough.
> 
> The `UnimplementedMethodError` error will be thrown when you call them.

### Member

* bread.member.bindOTP
* bread.member.unbindOTP
* bread.member.changeEmail
* bread.member.changeEmailSendCode
* <ins>bread.member.getSessionList</ins>
* bread.member.checkInviteCode
* bread.member.forgotPwd
* bread.member.forgetPwdTow
* <ins>bread.member.queryLoginHistory</ins>
* bread.member.register
* <ins>bread.member.revokeSession</ins>
* bread.member.sendEmailVerifyCode
* bread.member.sendLoginEmailVerifyCode
* <ins>bread.member.updateLastBrowse</ins>

### System

* bread.system.top
* bread.system.getConf

### Tracker

* bread.tracker.announce
* bread.tracker.scrape
* bread.tracker.queryHistory


### Seek

* bread.seek.recovery

> [!IMPORTANT]
> To comply with the regulations of the official website, 
> There are some APIs which are not allowed to be accessed by third-party applications. 
> If you use them (Unimplemented Methods with underline), you may be banned from the website.
