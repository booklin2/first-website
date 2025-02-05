export default function Contact() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-purple-500 text-white p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold hover:text-purple-200">我的網站</a>
          <div className="space-x-6">
            <a href="/" className="hover:text-purple-200">首頁</a>
            <a href="/about" className="hover:text-purple-200">關於本站</a>
            <a href="/todo" className="hover:text-purple-200">待辦事項</a>
            <a href="/chat-room" className="hover:text-purple-200">聊天室</a>
            <a href="/contact" className="hover:text-purple-200">聯絡資訊</a>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Contact Form Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">聯絡我們</h1>
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">姓名</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="請輸入您的姓名"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">電子郵件</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="請輸入您的電子郵件"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">主旨</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="請輸入主旨"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">訊息內容</label>
                  <textarea
                    id="message"
                    rows="6"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="請輸入您的訊息"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition-colors"
                >
                  送出訊息
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">公司地址</h3>
                <p className="text-gray-600">台北市信義區松仁路100號12樓</p>
                <p className="text-gray-600 mt-2">營業時間：週一至週五 9:00-18:00</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">聯絡電話</h3>
                <p className="text-gray-600">電話：(02) 2345-6789</p>
                <p className="text-gray-600 mt-2">傳真：(02) 2345-6780</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">電子郵件</h3>
                <p className="text-gray-600">客服信箱：service@meditech.com.tw</p>
                <p className="text-gray-600 mt-2">業務信箱：contact@meditech.com.tw</p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">交通資訊</h2>
            <div className="max-w-4xl mx-auto bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-600">地圖區塊 - 需整合 Google Maps 或其他地圖服務</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 