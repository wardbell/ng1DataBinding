# Data Binding Demo with Angular v1 and TypeScript

Explore 2-way data binding scenarios in Angular v.1.x 
for comparison with corresponding approach in Angular v.2.

Written in TypeScript because
* we're encouraging use of TS in ng1 as well as ng2
* makes the comparison a bit easier

## Install

1. Install [Node.js](http://nodejs.org) 
 - on OSX use [homebrew](http://brew.sh) `brew install node`
 - on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

>Refer to these [instructions on how to not require sudo](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md)

2. Install these NPM packages globally

    ```bash
    npm install -g bower gulp nodemon live-server tsd
    ```

2. Install TypeScript d.ts files

    ```bash
    tsd install
    tsd reinstall
    tsd rebundle
    ```
    
## Compile and run

1. In one terminal, compile and watch changes to TS files

    ```bash
    gulp ts-watcher
    ```
To compile on-demand, w/o watching try either of

        gulp ts-compile
        tsc -p src

1. In second terminal, launch server (8080) with live reload

    ```bash
    live-server
    ```
For more on *live-server*, try

        live-server --help
