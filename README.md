![Alt text](./docs/images/logo.png)

# bread.js


### What is bread.js?

 
The bread.js is a library that provides a simple way to access the `M-Team` API.
You can use it to get the information of the user, the torrent, the forum, and so on.


We've also provided the `cli` command to help you get what you want in an advanced way.


# Usage of bread.js



### Prerequisites

### Installation

```bash
pnpm install bread.js
```

### Import

You can import the module in your project like this(Node.js or Typescript):

```javascript
import Bread from 'bread.js';

const bread = new Bread({ key: 'YOUR KEY' });
const info = await bread.member.base('your user id');
```



# Not allowed to access for third-party

> [!IMPORTANT]
> The APIs below are not allowed to access for third-party which means we wouldn't implement them at all.

- /admin/**
- /login
- /apikey/**
- /member/updateLastBrowse
- /member/getSessionList
- /member/revokeSession
- /member/queryUserLoginHistory
- /msg/**
