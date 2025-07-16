#!/bin/bash

echo "🚀 启动AI心理咨询平台开发环境"

# 检查Node.js版本
echo "📋 检查环境..."
node_version=$(node -v 2>/dev/null)
if [ $? -ne 0 ]; then
    echo "❌ 请先安装Node.js (版本 >= 16.0.0)"
    exit 1
fi

echo "✅ Node.js版本: $node_version"

# 检查MongoDB
echo "📋 检查MongoDB连接..."
if ! command -v mongod &> /dev/null; then
    echo "⚠️  MongoDB未安装或未在PATH中，请确保MongoDB正在运行"
fi

# 安装前端依赖
echo "📦 安装前端依赖..."
cd frontend
if [ ! -d "node_modules" ]; then
    npm install
fi

# 安装后端依赖
echo "📦 安装后端依赖..."
cd ../backend
if [ ! -d "node_modules" ]; then
    npm install
fi

# 检查环境变量文件
if [ ! -f ".env" ]; then
    echo "📝 创建环境变量文件..."
    cp .env.example .env
    echo "⚠️  请编辑 backend/.env 文件，配置您的API密钥和数据库连接"
fi

# 启动服务
echo "🎯 启动开发服务器..."

# 在后台启动后端
echo "🔧 启动后端服务 (端口 5000)..."
npm run dev &
BACKEND_PID=$!

# 等待后端启动
sleep 3

# 启动前端
echo "🎨 启动前端服务 (端口 3000)..."
cd ../frontend
npm run dev &
FRONTEND_PID=$!

echo ""
echo "🎉 开发环境启动成功！"
echo ""
echo "📱 前端地址: http://localhost:3000"
echo "🔧 后端地址: http://localhost:5000"
echo "📊 健康检查: http://localhost:5000/health"
echo ""
echo "按 Ctrl+C 停止所有服务"

# 等待用户中断
wait

# 清理进程
echo "🛑 停止服务..."
kill $BACKEND_PID 2>/dev/null
kill $FRONTEND_PID 2>/dev/null
echo "✅ 服务已停止"