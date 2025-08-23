const lightWallpapers = [
  '/wallpapers/1.jpg',
  '/wallpapers/3.jpg',
  // 可继续添加更多白天壁纸路径
]

const darkWallpapers = [
  '/wallpapers/4.jpg',
  // 可继续添加更多夜间壁纸路径
]

// 根据当天日期和模式生成随机但每日固定的壁纸
export function getDailyWallpaper(mode: 'light' | 'dark' = 'light'): string {
  const today = new Date()
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()
  const wallpapers = mode === 'dark' ? darkWallpapers : lightWallpapers
  const index = seed % wallpapers.length
  return wallpapers[index]
}