import Head from 'next/head';
import Link from 'next/link';

export default function BAndB() {
  return (
    <>
      <Head>
        <title>恒輝国際会社-民泊</title>
      </Head>
      <div className="min-h-screen">
        <header className="text-center py-8 bg-gradient-to-r from-purple-600 to-blue-600">
          <img loading="lazy" src="/pictures/hname2.png" alt="前景图加载失败" className="max-w-xs mx-auto rounded-full bg-purple-800 bg-opacity-60 p-8 shadow-lg" />
        </header>
        <nav className="bg-indigo-900 py-4">
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            <Link href="/" passHref>
              <button className="bg-blue-500 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300">ホームに戻る</button>
            </Link>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">
          <div className="bg-white bg-opacity-60 rounded-lg shadow-lg max-w-4xl mx-auto p-8">
            <br />
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-800 leading-relaxed">
                晶 | 天神茶屋駅徒歩5分！🚶‍♂️関西空港・なんばにも直結！✈️お部屋は2階建て！！🏠リビング、キッチン＆ダイニング、5部屋🛏️、ベッド7台🛌、バルコニー🌿、トイレ🚽、バスルーム🛁、さらに機能充実の浴室も完備！！🎉グループやファミリーにもぴったり！！👨‍👩‍👧‍👦💕
                <a target="_blank" href="https://www.airbnb.com.sg/rooms/1272368736148388619" className="text-blue-600 hover:text-blue-800 underline ml-2">詳細はこちら</a>
              </p>
            </div>
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-800 leading-relaxed">
                アンナ | 🚉駅徒歩3分！！✈️空港直通アクセス抜群！！🏠和モダン一軒家を丸ごと貸切！！🛏️3寝室（ダブル3台＋シングル2台）、🛁バス2・🚽トイレ完備で最大8名宿泊OK！！🚃新今宮駅・大阪環状線すぐそばで難波・心斎橋もラクラク！！🛒24時間コンビニ＆スーパーも徒歩圏内！！🍳キッチン・📶Wi-Fi・❄️エアコン完備で快適ステイをお約束！
                <a target="_blank" href="https://www.airbnb.com.sg/rooms/1371703884206463781" className="text-blue-600 hover:text-blue-800 underline ml-2">詳細はこちら</a>
              </p>
            </div>
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-800 leading-relaxed">
                幸 3 | 🚶‍♂️大阪市内中心部、駅から徒歩1分！✨通天閣まで3分！🎡黒門市場、難波もすぐ近く！🍣3部屋＋リビング1部屋で最大8名様まで宿泊可能！🏠大阪旅行に最適な物件です！🎉
                <a target="_blank" href="https://www.airbnb.com.sg/rooms/973772480467384249" className="text-blue-600 hover:text-blue-800 underline ml-2">詳細はこちら</a>
              </p>
            </div>
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-800 leading-relaxed">
                幸 4 | 🛍️大阪のでんでんタウンに位置し、ショッピングがとっても便利！！✨完全プライベートな一軒家で、滞在中は他のゲストと会うことなく、安心してお過ごしいただけます！！🏠🔒
                <a target="_blank" href="https://www.airbnb.com.sg/rooms/879617752263041537" className="text-blue-600 hover:text-blue-800 underline ml-2">詳細はこちら</a>
              </p>
            </div>
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-800 leading-relaxed">
                幸 5 | 大阪・でんでんタウンにあり🛍️、買い物も超便利！！✨完全プライベート空間で他のゲストと会うことなし！！🔒難波・心斎橋・道頓堀・黒門市場へも徒歩圏内！！🚶‍♂️心斎橋はショッピング天国！！🛒道頓堀はグルメが充実！！🍣黒門市場で新鮮な食材やお土産をゲット！！🎁
                <a target="_blank" href="https://www.airbnb.com.sg/rooms/974615283679034021" className="text-blue-600 hover:text-blue-800 underline ml-2">詳細はこちら</a>
              </p>
            </div>
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-800 leading-relaxed">
                幸 6 | 🏠お部屋は大阪・でんでんタウンにあり、アニメストリートのすぐそば！！🎌買い物もラクラク＆とっても便利！！🛍️完全独立型の物件なので、滞在中はプライベート空間をしっかり確保！！🔒難波・心斎橋・道頓堀・黒門市場も徒歩圏内！！🚶‍♀️心斎橋筋商店街はショッピング天国！！🛒道頓堀には多彩なグルメが勢ぞろい！！🍣黒門市場では新鮮な食材やお土産も楽しめます！！🎁
                <a target="_blank" href="https://www.airbnb.com.sg/rooms/1430302661175466956" className="text-blue-600 hover:text-blue-800 underline ml-2">詳細はこちら</a>
              </p>
            </div>
          </div>
          <div className="bg-cyan-100 bg-opacity-60 rounded-lg shadow-lg max-w-4xl mx-auto my-8 p-8">
            <a target="_blank" href="https://www.airbnb.com.sg/users/show/73528540" className="text-blue-600 hover:text-blue-800 underline font-semibold">彬</a>
            <p className="text-gray-800 mt-2">職業：大阪で不動産開発および民泊運営を担当。</p>
            <p className="text-gray-800">1970年代生まれ。</p>
            <p className="text-gray-800">出身校：福州大学。</p>
            <p className="text-gray-800">中国語と日本語を話す。</p>
            <p className="text-gray-800">現在、東京都に居住。</p>
            <p className="text-gray-800">自宅の特徴：清潔で衛生的。</p>
          </div>
        </main>
      </div>
    </>
  );
}