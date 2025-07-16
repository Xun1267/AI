import express from 'express'
import { User } from '../models/User'
import { auth, AuthRequest } from '../middleware/auth'
import { logger } from '../utils/logger'

const router = express.Router()

// 获取用户资料
router.get('/profile', auth, async (req: AuthRequest, res) => {
  try {
    const user = req.user!
    res.json({
      success: true,
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          createdAt: user.createdAt
        }
      }
    })
  } catch (error) {
    logger.error('获取用户资料错误:', error)
    res.status(500).json({
      success: false,
      message: '获取用户资料失败'
    })
  }
})

// 更新用户资料
router.put('/profile', auth, async (req: AuthRequest, res) => {
  try {
    const userId = req.user!._id
    const { name, avatar } = req.body

    const updateData: any = {}
    if (name) updateData.name = name
    if (avatar !== undefined) updateData.avatar = avatar

    const user = await User.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, runValidators: true }
    )

    if (!user) {
      return res.status(404).json({
        success: false,
        message: '用户不存在'
      })
    }

    res.json({
      success: true,
      message: '资料更新成功',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          avatar: user.avatar
        }
      }
    })
  } catch (error) {
    logger.error('更新用户资料错误:', error)
    res.status(500).json({
      success: false,
      message: '更新资料失败'
    })
  }
})

export default router