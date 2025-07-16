import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { aiService } from './services/aiService'

// 加载环境变量
dotenv.config()

// 调试环境变量
console.log('🔍 环境变量调试:')
console.log(`   OPENAI_API_KEY: ${process.env.OPENAI_API_KEY ? process.env.OPENAI_API_KEY.substring(0, 10) + '...' : '未设置'}`)
console.log(`   OPENAI_MODEL: ${process.env.OPENAI_MODEL || '未设置'}`)
console.log(`   OPENAI_BASE_URL: ${process.env.OPENAI_BASE_URL || '未设置'}`)

const app = express()
const PORT = process.env.PORT || 5000

// 基本中间件
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}))

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// 健康检查
app.get('/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'AI心理咨询服务运行正常',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  })
})

// 简单的聊天API（不依赖数据库）
app.post('/api/chat/send', async (req, res): Promise<void> => {
  try {
    const { message } = req.body

    if (!message || message.trim().length === 0) {
      res.status(400).json({
        success: false,
        message: '消息内容不能为空'
      })
      return
    }

    // 真实AI调用
    const response = await aiService.generateResponse(message)
    const aiResponse = {
      content: response.message,
      emotion: response.emotion,
      cbtTechnique: response.cbtTechnique,
      timestamp: new Date().toISOString()
    }

    res.json({
      success: true,
      data: {
        message: aiResponse,
        isGuest: true
      }
    })

  } catch (error) {
    console.error('发送消息错误:', error)
    res.status(500).json({
      success: false,
      message: 'AI服务暂时不可用，请稍后重试'
    })
  }
})

// 404处理
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: '请求的资源不存在'
  })
})

// 全局错误处理中间件
app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('服务器错误:', error)
  
  res.status(error.status || 500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' 
      ? '服务器内部错误' 
      : error.message || '服务器内部错误'
  })
})

// 启动服务器
app.listen(PORT, () => {
  console.log(`🚀 AI心理咨询服务器启动成功`)
  console.log(`📍 服务地址: http://localhost:${PORT}`)
  console.log(`🌍 环境: ${process.env.NODE_ENV || 'development'}`)
  console.log(`🤖 AI模型: ${process.env.OPENAI_MODEL || process.env.DEEPSEEK_MODEL || 'gpt-4o-mini'}`)
})

export default app