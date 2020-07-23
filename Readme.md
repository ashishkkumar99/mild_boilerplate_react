# Boilerplate

[webpack+babel(basics) + HMR with react-hot-loader](https://docs.google.com/document/d/1DkOYLjroCwYiykL0hdZVTVXWsRx_lPEzdDjEma4G0po/edit#heading=h.dxp0w9fvf833)

## Features

- basic react
- webpack
- babel
- react-hot-loader

## also basic git

- git init => for initializing git in repo
- git status => for the status of the files
- git add . => for adding all files to staging area
- git commit -m "message" => for commiting changes to repo
  for adding repo to remote(first create repo in the remote server)
- git remote add origin
  https://github.com/ashishkkumar99/mild_boilerplate_react.git => add remote url in origin variable
- git push -u origin master => pushed to master branch in remote repo


## Bable, Webpack and react-hot-loder
For buliding JSX and ESnext scripts webpack needs bable loader.
To integrate react-hot-loader in the webpack-dev-server, add react-hot-loader/babel plugin to babel and export your root component using hot API of react-hot-loader.
Also make sure that the hot key in devServer option of webpack.deve.js is set to true, this allows HMR(Hot module replacement).
Required Installation
```bash
npm install babel babel-loader webpack webpack-dev-server react-hot-loader
```

## Install react and react-dom
`npm install -S react react-dom`
