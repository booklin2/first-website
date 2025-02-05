export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-purple-500 text-white p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="/" className="text-xl font-bold hover:text-purple-200">首頁</a>
          </div>
          <div className="space-x-6">
            <a href="/about" className="hover:text-purple-200">關於本站</a>
            <a href="/todo" className="hover:text-purple-200">待辦事項</a>
            <a href="/chat-room" className="hover:text-purple-200">聊天室</a>
            <a href="/contact" className="hover:text-purple-200">聯絡資訊</a>
          </div>
        </div>
      </nav>
      
      {/* Add margin-top to prevent content from being hidden under navbar */}
      <div className="pt-16">
        <header className="bg-yellow-100 text-center py-8 text-green-600 border-b border-gray-200">
          <h1 className="text-4xl font-bold mb-4">Hi 我叫 BookLin</h1>
          <h2 className="text-2xl text-gray-600">我是一個資訊工程師</h2>
          <a
            href="/about"
            className="inline-block mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            關於本站
          </a>
        </header>
        <section className="text-center bg-blue-100 py-8">
          <h2 className="text-3xl font-bold text-gray-800">作品專區</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
            {/* Card 1 */}
            <div className="group [perspective:1000px]">
              <div className="relative h-96 w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0">
                  <img src="/image-list/17.jpg" alt="Project 1" className="w-full h-48 object-cover rounded-t-lg" />
                  <h3 className="text-xl font-semibold mt-4 text-purple-300">自然風景攝影集</h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 h-full w-full rounded-lg bg-gray-100 px-8 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <p className="text-gray-700">這是一款創新的智慧家居管理系統，整合了溫度控制、安全監控和能源管理功能，讓生活更加便利舒適，同時也能節省能源支出。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group [perspective:1000px]">
              <div className="relative h-96 w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0">
                  <img src="/image-list/25.jpg" alt="Project 2" className="w-full h-48 object-cover rounded-t-lg" />
                  <h3 className="text-xl font-semibold mt-4 text-purple-300">城市街景相簿</h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 h-full w-full rounded-lg bg-gray-100 px-8 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <p className="text-gray-700">專業的健康管理應用程式，提供運動追蹤、飲食紀錄和睡眠分析功能，協助用戶建立健康的生活習慣，實現個人健康目標。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group [perspective:1000px]">
              <div className="relative h-96 w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0">
                  <img src="/image-list/28.jpg" alt="Project 3" className="w-full h-48 object-cover rounded-t-lg" />
                  <h3 className="text-xl font-semibold mt-4 text-purple-300">藝術攝影作品</h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 h-full w-full rounded-lg bg-gray-100 px-8 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <p className="text-gray-700">互動式線上學習平台，結合影片課程、即時討論和進度追蹤功能，為學習者提供全方位的數位學習體驗，打造個人化學習旅程。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-300 mb-8">關於我</h2>
            <div className="max-w-3xl mx-auto text-gray-300">
              <p className="mb-4">
                我是一位擁有醫學背景的全端工程師，結合了醫療專業知識與軟體開發技能。在醫療領域工作多年後，
                投入軟體開發，致力於開發創新的醫療科技解決方案。
              </p>
              <p className="mb-4">
                專長領域包括：
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>全端網站開發 (React, Node.js, Python)</li>
                <li>醫療資訊系統設計與開發</li>
                <li>健康照護應用程式開發</li>
                <li>醫療數據分析與視覺化</li>
              </ul>
              <p>
                我期待能運用跨領域的專業知識，為醫療產業帶來創新的技術解決方案，提升醫療服務品質與效率。
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-purple-300 mb-4">聯絡資訊</h3>
                <p className="mb-2">醫智科技股份有限公司</p>
                <p className="mb-2">統一編號：28436957</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-300 mb-4">地址</h3>
                <p className="mb-2">台北市信義區松仁路100號12樓</p>
                <p className="mb-2">營業時間：週一至週五 9:00-18:00</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-300 mb-4">電話</h3>
                <p className="mb-2">Tel: (02) 2345-6789</p>
                <p className="mb-2">Fax: (02) 2345-6780</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-300 mb-4">電子郵件</h3>
                <p className="mb-2">contact@meditech.com.tw</p>
                <p className="mb-2">service@meditech.com.tw</p>
              </div>
            </div>
            <div className="text-center mt-8 pt-8 border-t border-gray-700">
              <p>© 2024 醫智科技股份有限公司. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
