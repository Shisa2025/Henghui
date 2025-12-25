import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [activeSection, setActiveSection] = useState('homepage');

  const sections = {
    homepage: (
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-8 bg-purple-200 bg-opacity-60 rounded-lg shadow-lg max-w-6xl mx-auto my-16">
        <div className="flex-1 max-w-2xl leading-relaxed text-gray-800">
          <p className="text-lg mb-4">不動産業界、唯一無二の存在。</p>
          <p className="mb-4">私たち恒輝国際不動産は、東京・大阪を中心に、これまで1万件以上の物件を取り扱い、「理想の住まい」に導いてまいりました。（※実際の数はご想像にお任せします。）独自AIマッチングシステム「HIKARI AI」により、わずか3分であなたに最適な物件をご提案。また、当社のエージェントは全員、宅建士＋五か国語以上対応可。交渉力はプロレス並み、誠実さは僧侶級です。「不動産屋っぽくない不動産屋」として、SNSフォロワー数は業界最多（当社調べ）。</p>
          <p className="font-bold text-red-600 mb-4">
            ✓ 月100件限定の「幻の物件」公開中！ <br />
            ✓ 仲介手数料は最大0円！さらに、契約時に豪華プレゼントあり（例：空気清浄機・温泉旅行券） <br />
            ✓ 海外投資家向け「プレミアム収益物件」も続々登場。ROIは驚異の年利30%超（※あくまで目安です） <br />
            ✓ 24時間365日、AI＋人力で物件相談受付中。深夜2時でも即レス可能！
          </p>
          <p>2025年には、火星コンドミニアム販売開始予定。 また、バーチャル空間「MetaTokyo」での土地販売にも対応済み。次世代の不動産は、もはや現実にとどまらない——それが恒輝国際です。</p>
        </div>
        <div className="flex-1 max-w-md">
          <img loading="lazy" src="/pictures/content1.png" alt="前景图加载失败" className="w-full h-auto rounded-full bg-purple-600 bg-opacity-60 p-8 shadow-lg" />
        </div>
      </div>
    ),
    company: (
      <div className="bg-blue-200 bg-opacity-60 rounded-lg shadow-lg max-w-4xl mx-auto my-16 p-8">
        <table className="w-full border-collapse border border-gray-300 bg-white bg-opacity-85 rounded-lg overflow-hidden shadow-md">
          <tbody>
            <tr className="border-b">
              <th className="bg-gray-100 p-4 text-left font-semibold">社　　名</th>
              <td className="p-4">恒輝国際株式会社 （略称：恒輝国際）</td>
            </tr>
            <tr className="border-b">
              <th className="bg-gray-100 p-4 text-left font-semibold">設　　立</th>
              <td className="p-4">令和4年5月26日（2022年5月26日）</td>
            </tr>
            <tr className="border-b">
              <th className="bg-gray-100 p-4 text-left font-semibold">所　在　地</th>
              <td className="p-4">大阪市浪速区日本橋五丁目13番20号　5F</td>
            </tr>
            <tr className="border-b">
              <th className="bg-gray-100 p-4 text-left font-semibold">代　表　者</th>
              <td className="p-4">代表取締役　黄 政賢</td>
            </tr>
            <tr className="border-b">
              <th className="bg-gray-100 p-4 text-left font-semibold">資　本　金</th>
              <td className="p-4">680万円</td>
            </tr>
            <tr className="border-b">
              <th className="bg-gray-100 p-4 text-left font-semibold">主な事業内容</th>
              <td className="p-4">
                <ol className="list-decimal list-inside space-y-1">
                  <li>住宅宿泊事業法に基づく住宅宿泊事業、住宅宿泊管理業及び住宅宿泊仲介業</li>
                  <li>不動産の販売、仲介、斡旋、賃貸及び管理</li>
                  <li>民泊運営代行・管理業務</li>
                  <li>民泊施設の企画・内装設計・施工監理</li>
                </ol>
              </td>
            </tr>
            <tr className="border-b">
              <th className="bg-gray-100 p-4 text-left font-semibold">その他の事業内容</th>
              <td className="p-4">
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>国際物流、貿易業及びその仲介</li>
                  <li>旅行業法に基づく旅行業者代理業</li>
                  <li>飲食店の経営管理</li>
                  <li>建築工事の設計、施工、監理及び請負</li>
                  <li>インターネット・携帯電話等を利用した各種情報提供サービス並びに通信販売業務</li>
                  <li>食料品、健康食品、日用雑貨、医薬品、医薬部外品及び化粧品の販売並びに輸出入</li>
                  <li>インテリア用品、家庭用電化製品、健康機器及び医療機器の販売並びに輸出入</li>
                  <li>ジュエリー、アクセサリー、衣料品、服飾雑貨、革製品及び毛皮の販売並びに輸出入</li>
                  <li>自動車及び自動二輪車並びにそれらの各種部品及び関連商品の販売並びに輸出入</li>
                  <li>事務用品、OA機器、通信機器及び精密機械の販売並びに輸出入</li>
                  <li>厨房機器、住宅設備機器及びそれらの部品の販売並びに輸出入</li>
                  <li>建築機器及びその部品並びに建築資材の販売及び輸出入</li>
                  <li>パルプ、紙製品、古紙、木材、プラスチック及び化学薬品の販売並びに輸出入</li>
                  <li>コンピュータ及びその部品の販売並びに輸出入</li>
                  <li>前各号に附帯又は関連する一切の業務</li>
                </ol>
              </td>
            </tr>
            <tr>
              <th className="bg-gray-100 p-4 text-left font-semibold">関連情報</th>
              <td className="p-4">
                <div className="space-y-2">
                  <p><a href="/files/privacyClarification.pdf" download className="text-blue-600 hover:text-blue-800 underline">プライバシーについて&nbsp;(&nbsp;click&nbsp;to&nbsp;download&nbsp;privacyClarification.pdf&nbsp;)</a></p>
                  <p><a href="/files/utility.pdf" download className="text-blue-600 hover:text-blue-800 underline">利用規約について&nbsp;(&nbsp;click&nbsp;to&nbsp;download&nbsp;utility.pdf&nbsp;)</a></p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    employment: (
      <div className="bg-blue-200 bg-opacity-60 rounded-lg shadow-lg max-w-6xl mx-auto my-16 p-8 flex flex-col lg:flex-row gap-8">
        <div className="flex-1 leading-relaxed text-gray-800">
          <h1 className="text-2xl font-bold mb-6 text-center lg:text-left">恒輝国際株式会社 採用情報</h1>
          <p className="text-xl font-semibold mb-4 text-purple-700">人材は<br />企業の原動力です。</p>
          <h2 className="text-xl font-semibold mb-3">募集職種</h2>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>不動産仲介営業</li>
            <li>物件管理スタッフ</li>
            <li>Webエンジニア/システム開発</li>
          </ul>
          <h2 className="text-xl font-semibold mb-3">勤務地</h2>
          <p className="mb-4">本社：<br />大阪市浪速区日本橋五丁目13番20号 5F<br />または各営業所・客先</p>
          <h2 className="text-xl font-semibold mb-3">応募内容</h2>
          <p className="mb-4">以下のいずれかに該当する方を歓迎します：</p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>不動産仲介・賃貸・売買の営業経験者</li>
            <li>物件管理・内装コーディネートの実務経験者</li>
            <li>HTML/CSS/JavaScript を用いたWebサイト制作・運用経験者</li>
            <li>システム開発（Java、C#、PHP 等）の実務経験者</li>
            <li>コミュニケーション力・折衝力に自信のある方</li>
          </ul>
          <p className="mb-4">※未経験者も意欲重視で歓迎します。</p>
          <h2 className="text-xl font-semibold mb-3">待遇</h2>
          <p className="mb-4">当社規定による<br />※経験・年齢・前職の待遇を考慮の上、面談にて決定します。</p>
          <h2 className="text-xl font-semibold mb-3">交通費</h2>
          <p className="mb-4">全額支給</p>
          <h2 className="text-xl font-semibold mb-3">休日</h2>
          <p className="mb-4">完全週休2日制（土・日・祝）、年末年始休暇、有給休暇</p>
          <h2 className="text-xl font-semibold mb-3">応募方法</h2>
          <dl className="space-y-2">
            <div><dt className="font-semibold">応募形態</dt><dd>自由応募、推薦応募</dd></div>
            <div><dt className="font-semibold">メール</dt><dd>hzbjp800@hotmail.com</dd></div>
            <div><dt className="font-semibold">電話</dt><dd>06-4980-0458</dd></div>
          </dl>
        </div>
        <div className="flex flex-col gap-8">
          <img loading="lazy" src="/pictures/content2.png" alt="前景图加载失败" className="w-96 h-auto rounded-full bg-purple-600 bg-opacity-60 p-8 shadow-lg mx-auto lg:mx-0" />
          <img loading="lazy" src="/pictures/content3.png" alt="前景图加载失败" className="w-96 h-auto rounded-full bg-purple-800 bg-opacity-60 p-8 shadow-lg mx-auto lg:mx-0" />
        </div>
      </div>
    ),
    reflection: (
      <div className="bg-white bg-opacity-85 rounded-lg shadow-lg max-w-4xl mx-auto my-16 p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">お客様の声</h1>
        <div className="space-y-6">
          <div className="border-l-4 border-purple-500 pl-4 py-2">
            <p className="text-gray-700 mb-2">「こんなに話のわかる不動産屋は初めてでした！」</p>
            <p className="text-right text-sm text-gray-600">（東京都・M様）</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 py-2">
            <p className="text-gray-700 mb-2">「物件探しがまるでエンタメのようでした！」</p>
            <p className="text-right text-sm text-gray-600">（大阪府・K様）</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 py-2">
            <p className="text-gray-700 mb-2">「本当に月5万円で住めるタワマンがありました……夢みたい！」</p>
            <p className="text-right text-sm text-gray-600">（神奈川県・R様）</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 py-2">
            <p className="text-gray-700 mb-2">「LINEだけで内見から契約まで完結。便利すぎて感動しました！」</p>
            <p className="text-right text-sm text-gray-600">（京都府・T様）</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 py-2">
            <p className="text-gray-700 mb-2">「外国人の私にもわかりやすく丁寧に説明してくれて安心できました」</p>
            <p className="text-right text-sm text-gray-600">（中国出身・J様）</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 py-2">
            <p className="text-gray-700 mb-2">「まさかの"契約特典で温泉旅行"。不動産会社のイメージが変わりました」</p>
            <p className="text-right text-sm text-gray-600">（兵庫県・Y様）</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 py-2">
            <p className="text-gray-700 mb-2">「担当者さん、物件より面白かった（笑）。またお願いしたいです」</p>
            <p className="text-right text-sm text-gray-600">（東京都・S様）</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 py-2">
            <p className="text-gray-700 mb-2">「夜中2時にレスが来て驚きました！本当に24時間対応してるとは…」</p>
            <p className="text-right text-sm text-gray-600">（名古屋市・W様）</p>
          </div>
        </div>
      </div>
    ),
    access: (
      <div className="bg-blue-200 bg-opacity-60 rounded-lg shadow-lg max-w-4xl mx-auto my-16 p-8">
        <div className="mb-6 text-gray-800">
          大阪メトロ堺筋線「恵美須町駅」徒歩1分<br />
          JR「難波駅」南出口より徒歩10分<br />
          <a target="_blank" href="https://maps.app.goo.gl/GNv5C7dMakQEhm4D7" className="text-blue-600 hover:text-blue-800 underline">マップへ</a>
        </div>
        <iframe
          className="w-full h-96 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1202.2185549174708!2d135.50457654965547!3d34.65622126530518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e7676b6aad43%3A0x21b098fa04e84f30!2s5f%2C%205-ch%C5%8Dme-13-20%20Nipponbashi%2C%20Naniwa%20Ward%2C%20Osaka%2C%20556-0005%2C%20Japan!5e0!3m2!1sen!2ssg!4v1751969076937!5m2!1sen!2ssg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    ),
  };

  return (
    <>
      <Head>
        <title>恒輝国際会社</title>
        <meta name="description" content="恒輝国際株式会社は民泊物件の売買、運営代行、内装設計などを行う大阪の不動産会社です。" />
        <meta name="keywords" content="恒輝,恒輝国際, 不動産, 民泊, 大阪, 代行, 管理, 投資,恒辉，恒辉国际，不动产，名宿，代理，管理，投资" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="min-h-screen">
        <header className="text-center py-8 bg-gradient-to-r from-purple-600 to-blue-600">
          <img loading="lazy" src="/pictures/hname2.png" alt="前景图加载失败" className="max-w-xs mx-auto rounded-full bg-purple-800 bg-opacity-60 p-8 shadow-lg" />
        </header>
        <nav className="bg-indigo-900 py-4">
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            <button onClick={() => setActiveSection('homepage')} className="bg-blue-500 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300">ホーム</button>
            <button onClick={() => setActiveSection('company')} className="bg-blue-500 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300">会社案内</button>
            <button onClick={() => setActiveSection('employment')} className="bg-blue-500 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300">採用情報</button>
            <button onClick={() => setActiveSection('reflection')} className="bg-blue-500 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300">お客様の声</button>
            <button onClick={() => setActiveSection('access')} className="bg-blue-500 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300">アクセス</button>
          </div>
        </nav>
        <nav className="bg-purple-800 py-4">
          <div className="flex justify-center max-w-4xl mx-auto">
            <div className="relative">
              <button className="bg-purple-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300">経営事業</button>
              <Link href="/b-and-b" passHref>
                <button className="absolute top-full left-0 bg-green-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300 opacity-0 hover:opacity-100 transform translate-y-2 hover:translate-y-0 whitespace-nowrap">開放済みの民泊</button>
              </Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4">
          {sections[activeSection]}
        </main>
      </div>
    </>
  );
}