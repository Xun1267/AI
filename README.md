# 🧠 AI心理咨询聊天平台

一个基于React和Node.js的全栈AI心理咨询应用，提供温馨、专业的心理健康支持服务。

## ✨ 功能特性

- 🎨 **现代化UI设计** - 采用毛玻璃效果和温暖色调的精美界面
- 💬 **实时聊天** - 流畅的AI对话体验
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🔒 **隐私保护** - 安全的数据处理和存储
- ⚡ **高性能** - 基于Vite和现代前端技术栈

## 🛠️ 技术栈

### 前端
- **React 18** - 现代化的用户界面框架
- **TypeScript** - 类型安全的JavaScript
- **Redux Toolkit** - 状态管理
- **Tailwind CSS** - 实用优先的CSS框架
- **Vite** - 快速的构建工具
- **Ant Design** - 企业级UI组件库
- **Lucide React** - 精美的图标库

### 后端
- **Node.js** - JavaScript运行时
- **Express** - Web应用框架
- **TypeScript** - 类型安全的服务端开发
- **Winston** - 日志管理

## 🚀 快速开始

### 环境要求
- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/your-username/ai-psychology-chat.git
   cd ai-psychology-chat
   ```

2. **安装依赖**
   ```bash
   # 安装后端依赖
   cd backend
   npm install
   
   # 安装前端依赖
   cd ../frontend
   npm install
   ```

3. **环境配置**
   ```bash
   # 复制环境变量文件
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```

4. **启动开发服务器**
   
   **方式一：使用启动脚本（推荐）**
   ```bash
   # Windows
   ./start-dev.bat
   
   # Linux/macOS
   ./start-dev.sh
   ```
   
   **方式二：手动启动**
   ```bash
   # 启动后端服务器（端口3000）
   cd backend
   npm run dev
   
   # 启动前端服务器（端口5173）
   cd frontend
   npm run dev
   ```

5. **访问应用**
   - 前端应用：http://localhost:5173
   - 后端API：http://localhost:3000

## 📁 项目结构

```
ai-psychology-chat/
├── backend/                 # 后端服务
│   ├── src/
│   │   ├── config/         # 配置文件
│   │   ├── middleware/     # 中间件
│   │   ├── models/         # 数据模型
│   │   ├── routes/         # 路由定义
│   │   ├── services/       # 业务逻辑
│   │   └── utils/          # 工具函数
│   ├── .env.example        # 环境变量示例
│   └── package.json
├── frontend/               # 前端应用
│   ├── src/
│   │   ├── components/     # React组件
│   │   ├── pages/          # 页面组件
│   │   ├── services/       # API服务
│   │   ├── store/          # Redux状态管理
│   │   └── App.tsx         # 主应用组件
│   ├── public/             # 静态资源
│   └── package.json
├── start-dev.bat           # Windows启动脚本
├── start-dev.sh            # Linux/macOS启动脚本
└── README.md
```

## 🎯 主要页面

- **首页** - 简洁优雅的欢迎页面，一键开始咨询
- **聊天页面** - 核心功能页面，提供AI心理咨询服务
- **用户认证** - 登录和注册功能
- **个人资料** - 用户信息管理
- **对话历史** - 查看历史聊天记录

## 🎨 设计特色

- **毛玻璃效果** - 现代化的视觉设计
- **温暖色调** - 营造舒适的咨询环境
- **流畅动画** - 提升用户体验
- **响应式布局** - 适配各种设备尺寸

## 🔧 开发说明

### 可用脚本

**后端**
- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm start` - 启动生产服务器

**前端**
- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run preview` - 预览生产版本

### 代码规范
- 使用TypeScript进行类型检查
- 遵循ESLint代码规范
- 使用Prettier进行代码格式化

## 📝 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🤝 贡献

欢迎提交Issue和Pull Request来帮助改进项目！

## 📞 联系方式

如有问题或建议，请通过以下方式联系：
- 提交Issue：[GitHub Issues](https://github.com/your-username/ai-psychology-chat/issues)
- 邮箱：developer@ai-psychology.com

---

⭐ 如果这个项目对您有帮助，请给它一个星标！