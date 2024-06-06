<p align="center">
  <img width="250" height="250" src="https://github.com/danielsss/yeast.js/blob/main/docs/images/logo.png">
</p>
<h1 align="center">yeast.js</h1>

<p align="center">
  <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://forthebadge.com/images/badges/made-with-typescript.svg"></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/yeast.js" target="_blank"><img src="https://img.shields.io/npm/v/yeast.js?style=for-the-badge"></a>
  <a href="https://www.npmjs.com/package/yeast.js" target="_blank"><img src="https://img.shields.io/npm/dt/yeast.js?style=for-the-badge"></a>
</p>


The yeast.js is a library that provides a simple way to access the `M-Team` API.
You can use it to get the information of the user, the torrent, the forum, and so on.


We've also provided the `cli` command to help you get what you want in an advanced way. Please, [click here](./docs/cli.md) for more information


## Usage of yeast.js



### Prerequisites

- Node.js 19.x or later

### Install

You can install the module via `bun` or `pnpm` and so on:

```bash
pnpm add yeast.js
```

### Import

You can import the module in your project like this(Node.js or Typescript):

```javascript
import Yeast from 'yeast.js';

// The https://test2.*.* is the default value of the url if you don't provide it.
const yeast = new Yeast({ key: 'YOUR KEY', url: '' });

try {
  const info = await yeast.member.base('$userId');
  await yeast.member.bindOTP(); // The unimplemented error will be thrown
} catch (err) {
  console.error(err);
}
```

## Implemented APIs 

* Forum
* Friend
* Laboratory
* Member
* RSS
* Seed
* Seek
* Subtitle
* System
* Tracker


## Unimplemented APIs

> [!IMPORTANT]
> 
> The APIs below have not been implemented yet because the original documents from the official website are not clear enough.
> 
> The `UnimplementedMethodError` error will be thrown when you call them.

### Member

* yeast.member.bindOTP
* yeast.member.unbindOTP
* yeast.member.changeEmail
* yeast.member.changeEmailSendCode
* <ins>yeast.member.getSessionList</ins>
* yeast.member.checkInviteCode
* yeast.member.forgotPwd
* yeast.member.forgetPwdTow
* <ins>yeast.member.queryLoginHistory</ins>
* yeast.member.register
* <ins>yeast.member.revokeSession</ins>
* yeast.member.sendEmailVerifyCode
* yeast.member.sendLoginEmailVerifyCode
* <ins>yeast.member.updateLastBrowse</ins>

### System

* yeast.system.top
* yeast.system.getConf

### Tracker

* yeast.tracker.announce
* yeast.tracker.scrape
* yeast.tracker.queryHistory


### Seek

* yeast.seek.recovery

### Forum

* yeast.forum.forumDel
* yeast.forum.forumDetail
* yeast.forum.topicDel **OR** yeast.forum.topic.delete
* yeast.forum.topicMod **OR** yeast.forum.topic.modify
* yeast.forum.topicRedirectV2 **OR** yeast.forum.topic.redirect



> [!IMPORTANT]
> To comply with the regulations of the official website, 
> There are some APIs which are not allowed to be accessed by third-party applications. 
> If you use them (Unimplemented Methods with underline), you may be banned from the website.
