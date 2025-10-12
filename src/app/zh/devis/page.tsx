'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Plane, Ship, Calculator, MapPin, Clock, Package, DollarSign, CheckCircle, ChevronRight } from 'lucide-react'

export default function DevisPageZH() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/zh" className="inline-flex items-center text-orange-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回首页
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            运输费率与报价
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl">
            发现我们从中国空运和海运的透明费率
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* 费率网格 */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* 空运 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
              <div className="flex items-center">
                <Plane className="h-8 w-8 mr-3" />
                <h2 className="text-2xl font-bold">空运服务</h2>
              </div>
              <p className="text-blue-100 mt-2">快速安全的配送</p>
            </div>

            <div className="p-6 space-y-6">
              {/* 非洲区域 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                  非洲区域
                </h3>
                
                {/* 快递服务 */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-red-700">快递服务</h4>
                    <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">快速</span>
                  </div>
                  <div className="text-2xl font-bold text-red-600 mb-2">11,900 西非法郎/公斤</div>
                  <div className="flex items-center text-sm text-red-600 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    1-4天
                  </div>
                  <div className="text-sm text-gray-600">
                    目的地：科特迪瓦、贝宁、多哥
                  </div>
                </div>

                {/* 标准服务 */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-green-700">标准服务</h4>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">经济</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600 mb-2">9,900 西非法郎/公斤</div>
                  <div className="flex items-center text-sm text-green-600 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    10-15天
                  </div>
                  <div className="text-sm text-gray-600">
                    目的地：科特迪瓦、贝宁、多哥
                  </div>
                </div>
              </div>

              {/* 国际区域 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                  国际区域
                </h3>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">按报价计费</h4>
                  <div className="text-sm text-gray-600 mb-2">
                    目的地：法国、加拿大、美国、迪拜
                  </div>
                  <div className="flex items-center text-sm text-blue-600">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    根据目的地定制报价
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 海运 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-6">
              <div className="flex items-center">
                <Ship className="h-8 w-8 mr-3" />
                <h2 className="text-2xl font-bold">海运服务</h2>
              </div>
              <p className="text-blue-100 mt-2">大货量的经济解决方案</p>
            </div>

            <div className="p-6 space-y-6">
              {/* 非洲区域 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                  非洲区域
                </h3>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-700 mb-2">集装箱费率</h4>
                  <div className="text-2xl font-bold text-orange-600 mb-2">起价 210,500 西非法郎/立方米</div>
                  <div className="flex items-center text-sm text-orange-600 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    40-60天
                  </div>
                  <div className="text-sm text-gray-600">
                    所有西非国家
                  </div>
                </div>
              </div>

              {/* 国际区域 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                  国际区域
                </h3>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">按报价计费</h4>
                  <div className="text-sm text-gray-600 mb-2">
                    全球所有目的地
                  </div>
                  <div className="flex items-center text-sm text-blue-600">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    根据货量和目的地报价
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 联系CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">获取定制报价</h2>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            联系我们，告知您的具体需求，获得详细的个性化报价
          </p>
          <Link href="/zh#contact" className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors inline-flex items-center">
            立即联系我们
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}