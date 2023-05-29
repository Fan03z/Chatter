/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // 允许预渲染函数返回道具，包括非 JSON 值（日期、地图、设置……）
    // 具体参考: https://github.com/blitz-js/next-superjson-plugin
    // FIXME: 💥💥💥下句加上会爆栈？？
    // swcPlugins: [["next-superjson-plugin", {}]],

    // 加载获取谷歌github的登录默认头像
    // 添加上图片加载获取的域址
    images: {
      domains: ["res.cloudinary.com", "avatars.githubusercontent.com", "lh3.googleusercontent.com"],
    },
  },
};

module.exports = nextConfig;
