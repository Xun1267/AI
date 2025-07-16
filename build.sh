#!/bin/bash

# 安装前端依赖
cd frontend
npm install

# 构建前端项目
npm run build

# 将构建文件移动到根目录
cp -r dist/* ../