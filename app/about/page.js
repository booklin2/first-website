export default function About() {
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

      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-pink-100 to-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">關於本站</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              這是一個展示我的作品集和專業技能的個人網站，透過這個平台，我希望能與更多人分享我的工作經驗和專業知識。
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">網站宗旨</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  本網站的主要目的是建立一個專業的作品展示平台，同時也作為與潛在合作夥伴和客戶溝通的橋樑。
                  我們致力於：
                </p>
                <ul className="list-disc list-inside space-y-3 pl-4">
                  <li>展示高品質的專案作品</li>
                  <li>分享專業的技術文章和經驗</li>
                  <li>提供專業的技術諮詢服務</li>
                  <li>建立良好的客戶溝通管道</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">網站特色</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">作品展示</h3>
                <p className="text-gray-600">
                  精心策劃的作品展示區，讓您可以直觀地了解我們的專業能力和項目經驗。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">技術分享</h3>
                <p className="text-gray-600">
                  定期更新的技術文章，分享最新的技術趨勢和實務經驗。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">專業諮詢</h3>
                <p className="text-gray-600">
                  提供專業的技術諮詢服務，協助您解決開發過程中遇到的問題。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">技術堆疊</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gray-100 rounded-full p-6 mb-4 mx-auto w-24 h-24 flex items-center justify-center">
                  <span className="text-3xl">🌐</span>
                </div>
                <h3 className="font-semibold text-gray-800">前端開發</h3>
                <p className="text-gray-600 text-sm mt-2">React, Next.js</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-100 rounded-full p-6 mb-4 mx-auto w-24 h-24 flex items-center justify-center">
                  <span className="text-3xl">⚙️</span>
                </div>
                <h3 className="font-semibold text-gray-800">後端開發</h3>
                <p className="text-gray-600 text-sm mt-2">Node.js, Python</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-100 rounded-full p-6 mb-4 mx-auto w-24 h-24 flex items-center justify-center">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="font-semibold text-gray-800">UI/UX 設計</h3>
                <p className="text-gray-600 text-sm mt-2">Figma, Tailwind</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-100 rounded-full p-6 mb-4 mx-auto w-24 h-24 flex items-center justify-center">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="font-semibold text-gray-800">數據分析</h3>
                <p className="text-gray-600 text-sm mt-2">Python, R</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
