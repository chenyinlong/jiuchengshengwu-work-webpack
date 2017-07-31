# jiuchengshengwu-work-webpack
work-久成生物 

## 1. 项目简介
        久成生物项目前端页面，使用妹子ui，jq第三方库，使用webpcak打包

## 2.项目结构说明
        -dist 生成目录 ，项生成文件在此文件夹，
        -nonode_modules node库文件夹（此文件夹不需要直接复制 通过“npm i”命令生成）
        -src 源文件夹
        --css css文件
        --font 字体文件
        --img 图片资源
        --js js文件 webpack入口文件夹
        --view html模版文件夹
        -static 静态文件夹
        -。。（其他为不同的配置文件）
##　3.使用方法
* 将dist文件夹中的文件复制到 服务器的静态访问目录下
* 此项目默认资源访问在静态目录“/”下，（需要特别注意）
* dist中的img文件经过压缩和添加hash值，需要更改的图片资源放在static中，static 为未修改引用资源。
        