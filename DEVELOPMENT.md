# AI心理咨询网站开发指南

## 🎯 项目概述

这是一个基于CBT（认知行为疗法）理论的AI心理咨询平台，为用户提供专业的心理健康支持服务。

## 🏗️ 技术架构

### 前端技术栈
- **React 18** + **TypeScript** - 现代化的用户界面
- **Ant Design** - 企业级UI组件库
- **Redux Toolkit** - 状态管理
- **React Router** - 路由管理
- **Tailwind CSS** - 原子化CSS框架
- **Vite** - 快速构建工具

### 后端技术栈
- **Node.js** + **Express.js** - 服务器框架
- **TypeScript** - 类型安全
- **MongoDB** + **Mongoose** - 数据库
- **JWT** - 身份认证
- **OpenAI API** - AI对话服务

## 🚀 快速开始

### 环境要求
- Node.js >= 16.0.0
- MongoDB >= 4.4
- npm 或 yarn

### 1. 克隆项目
```bash
git clone <repository-url>
cd ai-psychology-counseling
```

### 2. 配置环境变量
```bash
# 复制后端环境变量模板
cp backend/.env.example backend/.env

# 编辑环境变量文件
# 配置数据库连接、OpenAI API密钥等
```

### 3. 启动开发环境

#### Windows用户
```bash
start-dev.bat
```

#### Linux/Mac用户
```bash
chmod +x start-dev.sh
./start-dev.sh
```

#### 手动启动
```bash
# 启动后端 (终端1)
cd backend
npm install
npm run dev

# 启动前端 (终端2)
cd frontend
npm install
npm run dev
```

### 4. 访问应用
- 前端: http://localhost:3000
- 后端API: http://localhost:5000
- 健康检查: http://localhost:5000/health

## 📁 项目结构

```
ai-psychology-counseling/
├── frontend/                 # React前端应用
│   ├── src/
│   │   ├── components/      # 可复用组件
│   │   │   └── Layout/     # 布局组件
│   │   ├── pages/          # 页面组件
│   │   ├── store/          # Redux状态管理
│   │   │   └── slices/     # Redux切片
│   │   ├── services/       # API服务
│   │   ├── utils/          # 工具函数
│   │   └── types/          # TypeScript类型
│   ├── public/             # 静态资源
│   └── package.json
├── backend/                 # Node.js后端API
│   ├── src/
│   │   ├── controllers/    # 控制器
│   │   ├── models/         # 数据模型
│   │   ├── routes/         # 路由定义
│   │   ├── middleware/     # 中间件
│   │   ├── services/       # 业务逻辑
│   │   ├── utils/          # 工具函数
│   │   └── config/         # 配置文件
│   └── package.json
├── docs/                   # 项目文档
├── README.md              # 项目说明
├── start-dev.sh          # Linux/Mac启动脚本
└── start-dev.bat         # Windows启动脚本
```

## 🔧 开发指南

### 前端开发

#### 添加新页面
1. 在 `frontend/src/pages/` 创建新组件
2. 在 `frontend/src/App.tsx` 添加路由
3. 更新导航菜单（如需要）

#### 状态管理
使用Redux Toolkit管理全局状态：
```typescript
// 创建新的slice
import { createSlice } from '@reduxjs/toolkit'

const newSlice = createSlice({
  name: 'feature',
  initialState,
  reducers: {
    // 定义actions
  }
})
```

#### API调用
使用统一的API服务：
```typescript
import { api } from '../services/chatService'

const response = await api.get('/endpoint')
```

### 后端开发

#### 添加新API
1. 在 `backend/src/models/` 定义数据模型
2. 在 `backend/src/controllers/` 创建控制器
3. 在 `backend/src/routes/` 定义路由
4. 在 `backend/src/server.ts` 注册路由

#### 数据库模型
使用Mongoose定义模型：
```typescript
import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  // 定义字段
})

export const Model = mongoose.model('Model', schema)
```

## 🤖 AI集成

### OpenAI配置
1. 获取OpenAI API密钥
2. 在 `.env` 文件中配置：
```env
OPENAI_API_KEY=your-api-key
OPENAI_MODEL=gpt-3.5-turbo
```

### CBT理论集成
AI服务已集成CBT核心技术：
- 认知重构
- 行为激活
- 问题解决
- 放松训练
- 情绪识别

## 🔒 安全考虑

### 数据保护
- 所有敏感数据加密存储
- 使用HTTPS传输
- 实施访问控制

### 隐私保护
- 最小化数据收集
- 用户数据匿名化
- 遵循数据保护法规

### API安全
- JWT身份认证
- 请求频率限制
- 输入验证和清理

## 📊 监控和日志

### 日志系统
使用Winston进行日志记录：
```typescript
import { logger } from './utils/logger'

logger.info('信息日志')
logger.error('错误日志')
```

### 健康检查
访问 `/health` 端点检查服务状态

## 🧪 测试

### 前端测试
```bash
cd frontend
npm run test
```

### 后端测试
```bash
cd backend
npm run test
```

## 📦 部署

### 生产构建
```bash
# 前端构建
cd frontend
npm run build

# 后端构建
cd backend
npm run build
```

### 环境变量
生产环境需要配置：
- 数据库连接字符串
- JWT密钥
- OpenAI API密钥
- CORS域名

## 🤝 贡献指南

1. Fork项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建Pull Request

## 📝 开发注意事项

### 心理咨询特殊要求
1. **专业性**: 确保AI回复符合CBT理论
2. **安全性**: 识别自杀/自伤风险并提供紧急帮助
3. **边界性**: 不提供医疗诊断或药物建议
4. **隐私性**: 严格保护用户隐私数据

### 代码规范
- 使用TypeScript进行类型检查
- 遵循ESLint规则
- 编写清晰的注释
- 保持代码简洁可读

## 🆘 常见问题

### Q: AI回复不准确怎么办？
A: 检查OpenAI API配置，调整系统提示词，或更新CBT知识库。

### Q: 数据库连接失败？
A: 确保MongoDB服务运行，检查连接字符串配置。

### Q: 前端无法连接后端？
A: 检查CORS配置，确保后端服务正常运行。

## 📞 支持

如有问题，请：
1. 查看文档和FAQ
2. 检查GitHub Issues
3. 联系开发团队

---

**重要提醒**: 本平台仅提供心理健康信息和支持，不能替代专业医疗诊断和治疗。如有严重心理问题，请及时寻求专业医疗帮助。