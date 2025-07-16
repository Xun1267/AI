# 🔧 配置指南 - 需要手动调整的部分

## 1. 🔑 获取OpenAI API密钥

### 步骤：
1. 访问 [OpenAI官网](https://platform.openai.com/)
2. 注册/登录账户
3. 进入 API Keys 页面
4. 点击 "Create new secret key"
5. 复制生成的密钥（格式：sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx）

### 配置位置：
```bash
# 文件：backend/.env
OPENAI_API_KEY=sk-your-actual-api-key-here
OPENAI_MODEL=gpt-3.5-turbo  # 或 gpt-4
```

## 2. 🗄️ 数据库配置

### MongoDB安装和配置：

#### Windows:
1. 下载 [MongoDB Community Server](https://www.mongodb.com/try/download/community)
2. 安装并启动服务
3. 默认连接：`mongodb://localhost:27017`

#### 使用云数据库（推荐）:
1. 注册 [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. 创建免费集群
3. 获取连接字符串
4. 配置白名单IP

```bash
# 文件：backend/.env
# 本地MongoDB
MONGODB_URI=mongodb://localhost:27017/ai-psychology

# 或云数据库
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ai-psychology
```

## 3. 🔐 安全配置

### JWT密钥生成：
```bash
# 生成随机密钥（Node.js）
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

# 或在线生成：https://www.allkeysgenerator.com/Random/Security-Encryption-Key-Generator.aspx
```

```bash
# 文件：backend/.env
JWT_SECRET=your-generated-64-character-random-string
```

## 4. 📁 需要创建的文件

### 创建后端环境变量文件：
```bash
# 复制模板
cp backend/.env.example backend/.env

# 编辑配置
notepad backend/.env  # Windows
# 或
nano backend/.env     # Linux/Mac
```

### 完整的 .env 文件示例：
```env
# 环境配置
NODE_ENV=development
PORT=5000

# 数据库配置
MONGODB_URI=mongodb://localhost:27017/ai-psychology

# JWT配置
JWT_SECRET=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2
JWT_EXPIRE=7d

# OpenAI API配置
OPENAI_API_KEY=sk-your-actual-openai-api-key-here
OPENAI_MODEL=gpt-3.5-turbo

# 安全配置
BCRYPT_ROUNDS=12
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# CORS配置
CORS_ORIGIN=http://localhost:3000

# 日志配置
LOG_LEVEL=info
```

## 5. 🔄 替代AI服务配置

### 如果不使用OpenAI，可以配置其他服务：

#### Azure OpenAI:
```env
# 取消注释并配置
AZURE_OPENAI_ENDPOINT=https://your-resource.openai.azure.com/
AZURE_OPENAI_API_KEY=your-azure-api-key
```

#### 其他AI服务：
需要修改 `backend/src/services/aiService.ts` 文件中的API调用逻辑。

## 6. 🚀 启动前检查清单

- [ ] 已安装 Node.js (>= 16.0.0)
- [ ] 已安装 MongoDB 或配置云数据库
- [ ] 已获取 OpenAI API 密钥
- [ ] 已创建 backend/.env 文件
- [ ] 已配置所有必需的环境变量
- [ ] 已安装项目依赖 (npm install)

## 7. 🧪 测试配置

### 测试数据库连接：
```bash
cd backend
npm run dev
# 查看控制台输出，确认 "MongoDB 连接成功"
```

### 测试API密钥：
访问 http://localhost:5000/health 确认服务正常运行

### 测试AI对话：
1. 启动前端：http://localhost:3000
2. 注册/登录账户
3. 进入聊天页面测试对话

## 8. ⚠️ 常见问题

### API密钥无效：
- 检查密钥格式是否正确
- 确认OpenAI账户有足够余额
- 检查API使用限制

### 数据库连接失败：
- 确认MongoDB服务正在运行
- 检查连接字符串格式
- 验证网络连接和防火墙设置

### CORS错误：
- 检查 CORS_ORIGIN 配置
- 确认前后端端口号正确

## 9. 💰 费用说明

### OpenAI API费用：
- GPT-3.5-turbo: ~$0.002/1K tokens
- GPT-4: ~$0.03/1K tokens
- 建议设置使用限制

### MongoDB Atlas：
- 免费层：512MB存储
- 足够开发和小规模使用

## 10. 🔧 高级配置

### 自定义AI提示词：
修改 `aiService.ts` 中的 `buildSystemPrompt()` 方法

### 调整AI参数：
```typescript
// 在 generateResponse 方法中调整
{
  model: this.model,
  messages,
  max_tokens: 1000,        // 回复长度
  temperature: 0.7,        // 创造性 (0-1)
  presence_penalty: 0.1,   // 话题多样性
  frequency_penalty: 0.1,  // 重复惩罚
}
```

---

**重要提醒：**
- 妥善保管API密钥，不要提交到版本控制
- 定期检查API使用量和费用
- 在生产环境中使用更强的JWT密钥