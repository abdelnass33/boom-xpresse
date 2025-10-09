import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BoomXpresse - 中国进口与国际物流 | 免费报价",
  description: "🚀 使用BoomXpresse轻松从中国进口！采购、质量控制、海运和清关。自2020年以来的专业服务。24小时免费报价 ⚡",
  openGraph: {
    locale: 'zh_CN',
  },
}

export default function ChineseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>
        {children}
      </body>
    </html>
  )
}