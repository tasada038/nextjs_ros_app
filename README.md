# nextjs_ros_app

This is a ROS application using Nextjs.

[![GitHub stars](https://img.shields.io/github/stars/tasada038/nextjs_ros_app.svg?style=social&label=Star&maxAge=2592000)](https://github.com/tasada038/nextjs_ros_app/stargazers/)
[![GitHub forks](https://img.shields.io/github/forks/tasada038/nextjs_ros_app.svg?style=social&label=Fork&maxAge=2592000)](https://github.com/tasada038/nextjs_ros_app/network/)
[![GitHub issues](https://img.shields.io/github/issues/tasada038/nextjs_ros_app.svg)](https://github.com/tasada038/nextjs_ros_app/issues/)
[![GitHub license](https://img.shields.io/github/license/tasada038/nextjs_ros_app.svg)](https://github.com/tasada038/nextjs_ros_app/blob/master/LICENSE)


## Getting Started

First, install nodejs and nvm packages:

```sh:
sudo apt-get install nodejs
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
ls -l ~/.nvm | grep ins*
source ~/.bashrc
command -v nvm

node -v
# v12.22.9
nvm ls-remote
nvm install 20.13.0
nvm use 20.13.0

```

Second, install dependences, create next app and, run the development server:

```sh:
npm install -g typescript
npm install hono
npm i -g wrangler
npm install roslib
# npx create-next-app@latest
# What is your project named? > nextjs_ros_app

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

![nextjs_ros_app](./img/nexjs_ros_app.png)

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## develop

Open [http://localhost:3000/api/ros](http://localhost:3000) with your browser to see the API result.


## Publish and Subscribe Topics
The topics of the nextjs_ros_app are as follows.

Subscribe data
- /color/image_raw/compressed