import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [activeSection, setActiveSection] = useState('homepage');

  const sections = {
    homepage: (
      <div className="modern-card max-w-7xl mx-auto my-20 p-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="flex-1 max-w-3xl space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold gradient-text leading-tight">
                恒輝国際不動産
              </h1>
              <div className="title-rule"></div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed">
              大阪を拠点に、国内外の法人・個人のお客様へ、売買・賃貸・投資・管理まで一貫した不動産
              サービスを提供しています。透明性とスピードを重視し、データに基づいた提案で最適な意思決定
              を支援します。
            </p>

            <div className="glass-effect rounded-xl p-6 space-y-3">
              <p className="text-gray-700">
                独自の市場データと物件ネットワークを活用し、条件整理から交渉・契約・入居後サポートまで
                ワンストップで対応。法人の社宅手配、海外投資家向けの英中サポート、リロケーションにも強み
                があります。
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">成約までの平均期間を短縮する提案力</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">英語・中国語対応で海外案件にも対応</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">オンライン内覧・契約を標準化</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">24時間の緊急対応と管理サポート</span>
              </div>
            </div>

            <p className="text-lg text-gray-600 italic">
              2025年は「信頼と速度の両立」をテーマに、顧客体験のアップデートと事業領域の拡大を進めています。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-effect p-5">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">売買・投資</h4>
                <p className="text-gray-700 text-sm">
                  収益性評価と出口戦略まで見据えた提案で、資産形成を支援します。
                </p>
              </div>
              <div className="glass-effect p-5">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">賃貸・社宅</h4>
                <p className="text-gray-700 text-sm">
                  法人契約や転勤サポートに強く、条件交渉と入居後支援を徹底します。
                </p>
              </div>
              <div className="glass-effect p-5">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">管理・運用</h4>
                <p className="text-gray-700 text-sm">
                  管理業務の見える化でオーナー様の負担を軽減し、安定稼働を実現します。
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-md">
            <div className="relative">
              <div className="media-frame"></div>
              <img
                loading="lazy"
                src="/pictures/content1.png"
                alt="恒輝国際不動産のサービスイメージ"
                className="relative w-full h-auto rounded-2xl shadow-2xl object-cover"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    company: (
      <div className="modern-card max-w-5xl mx-auto my-20 p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold gradient-text mb-4">会社概要</h2>
          <div className="title-rule"></div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-semibold text-gray-800">会社名</span>
              </div>
              <p className="text-gray-700 ml-6">恒輝国際不動産</p>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span className="font-semibold text-gray-800">設立</span>
              </div>
              <p className="text-gray-700 ml-6">2019年4月</p>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <span className="font-semibold text-gray-800">所在地</span>
              </div>
              <p className="text-gray-700 ml-6">大阪府大阪市浪速区日本橋5-13-20 5F</p>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="font-semibold text-gray-800">事業内容</span>
              </div>
              <p className="text-gray-700 ml-6">売買・賃貸仲介、投資、管理、宿泊事業</p>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-gray-800">対応言語</span>
              </div>
              <p className="text-gray-700 ml-6">日本語 / 英語 / 中国語</p>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="font-semibold text-gray-800">免許</span>
              </div>
              <p className="text-gray-700 ml-6">宅地建物取引業免許（大阪府）</p>
            </div>
          </div>

          <div className="glass-effect rounded-xl p-6">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
              <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
              ご利用の流れ
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-6">
              <li>ヒアリングで条件整理とゴールを明確化</li>
              <li>市場分析に基づく物件提案と比較検討</li>
              <li>内覧・交渉・契約条件の最適化</li>
              <li>契約後のフォロー、管理・運用支援</li>
            </ol>
          </div>

          <div className="glass-effect rounded-xl p-6">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
              <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
              資料ダウンロード
            </h3>
            <div className="space-y-3 ml-6">
              <a
                href="/files/privacyClarification.pdf"
                download
                className="modern-button btn-primary inline-block"
              >
                プライバシーポリシー
              </a>
              <br />
              <a
                href="/files/utility.pdf"
                download
                className="modern-button btn-secondary inline-block"
              >
                取引条件のご案内
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
    employment: (
      <div className="modern-card max-w-7xl mx-auto my-20 p-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4">採用情報</h2>
          <div className="title-rule"></div>
          <p className="text-2xl font-semibold text-gray-700">
            成長期のチームで、専門性を磨く。
            <br />
            営業・管理・バックオフィスを募集しています。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                募集職種
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">不動産営業（売買・賃貸）</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-700">物件管理・オーナーサポート</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span className="text-gray-700">事務・契約サポート</span>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                勤務地
              </h3>
              <p className="text-gray-700">
                大阪本社（日本橋）
                <br />
                ※リモート面談・一部在宅対応あり
              </p>
            </div>

            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                求める人物像
              </h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                  <span className="text-gray-700">顧客目線で提案できる方</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                  <span className="text-gray-700">数字と根拠を大切にする方</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2"></span>
                  <span className="text-gray-700">チームで成果を出すことが好きな方</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2"></span>
                  <span className="text-gray-700">語学力を活かしたい方（英語・中国語歓迎）</span>
                </div>
              </div>
              <p className="text-blue-700 font-semibold mt-4">
                宅建保有者・経験者は優遇します。未経験でも研修制度あり。
              </p>
            </div>

            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full mr-3"></div>
                待遇・福利厚生
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-gray-800">給与</span>
                  <span className="text-gray-700 ml-2">経験・能力を考慮し決定</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">手当</span>
                  <span className="text-gray-700 ml-2">交通費、宅建手当、成果インセンティブ</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">福利厚生</span>
                  <span className="text-gray-700 ml-2">社会保険完備、研修制度、社内表彰</span>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                選考フロー
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                  <span className="font-semibold text-gray-800">応募</span>
                  <span className="text-gray-700">履歴書・職務経歴書の提出</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                  <span className="font-semibold text-gray-800">面接</span>
                  <span className="text-gray-700">オンライン／対面（1〜2回）</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                  <span className="font-semibold text-gray-800">内定</span>
                  <span className="text-gray-700">条件提示後、入社日を調整</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
          </div>
        </div>
      </div>
    ),
    reflection: (
      <div className="modern-card max-w-6xl mx-auto my-20 p-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4">お客様の声</h2>
          <div className="title-rule"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="avatar-chip">M</div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-2 italic">
                    "初回のヒアリングが丁寧で、条件整理が早かったです。候補提示も的確でした。"
                  </p>
                  <p className="text-right text-sm text-gray-600">会社員 M様</p>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="avatar-chip">K</div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-2 italic">
                    "海外からの問い合わせにも迅速に対応いただき、契約まで安心して進められました。"
                  </p>
                  <p className="text-right text-sm text-gray-600">投資家 K様</p>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="avatar-chip">R</div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-2 italic">
                    "社宅の契約条件が複雑でしたが、交渉と書類対応が早く助かりました。"
                  </p>
                  <p className="text-right text-sm text-gray-600">総務担当 R様</p>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="avatar-chip">T</div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-2 italic">
                    "LINEでの相談が便利で、時間のない中でもスムーズに進みました。"
                  </p>
                  <p className="text-right text-sm text-gray-600">自営業 T様</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="avatar-chip">J</div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-2 italic">
                    "物件管理の見える化が進み、空室対策の提案も具体的で信頼できました。"
                  </p>
                  <p className="text-right text-sm text-gray-600">オーナー J様</p>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="avatar-chip">Y</div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-2 italic">
                    "条件が厳しい中でも最後まで提案を続けてくれた姿勢が印象的でした。"
                  </p>
                  <p className="text-right text-sm text-gray-600">会社員 Y様</p>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="avatar-chip">S</div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-2 italic">
                    "初めての不動産投資でしたが、リスク説明が分かりやすく安心でした。"
                  </p>
                  <p className="text-right text-sm text-gray-600">会社経営 S様</p>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="avatar-chip">W</div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-2 italic">
                    "引越し後の設備トラブルにも迅速に対応していただきました。"
                  </p>
                  <p className="text-right text-sm text-gray-600">学生 W様</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    access: (
      <div className="modern-card max-w-6xl mx-auto my-20 p-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4">アクセス</h2>
          <div className="title-rule"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                所在地
              </h3>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">大阪府大阪市浪速区日本橋5-13-20 5F</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Osaka Metro 堺筋線「恵美須町」駅 徒歩1分</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>JR「なんば」駅 徒歩10分</span>
                  </div>
                </div>
                <a
                  target="_blank"
                  href="https://maps.app.goo.gl/GNv5C7dMakQEhm4D7"
                  className="modern-button btn-primary inline-block"
                >
                  Google Mapsで開く
                </a>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                お問い合わせ
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-3 bg-white/50 rounded-lg">
                  <div className="contact-chip">
                    <span className="text-white font-bold">TEL</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">電話</p>
                    <p className="text-gray-700">06-4980-0458</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-white/50 rounded-lg">
                  <div className="contact-chip">
                    <span className="text-white font-bold">MAIL</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">メール</p>
                    <p className="text-gray-700">hzbjp800@hotmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-xl p-4">
            <iframe
              className="w-full h-96 rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1202.2185549174708!2d135.50457654965547!3d34.65622126530518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e7676b6aad43%3A0x21b098fa04e84f30!2s5f%2C%205-ch%C5%8Dme-13-20%20Nipponbashi%2C%20Naniwa%2C%20Osaka%2C%20556-0005%2C%20Japan!5e0!3m2!1sen!2ssg!4v1751969076937!5m2!1sen!2ssg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <>
      <Head>
        <title>恒輝国際不動産 | 大阪の不動産ソリューション</title>
        <meta
          name="description"
          content="恒輝国際不動産は大阪を拠点に、売買・賃貸・投資・管理・宿泊事業まで一貫したサービスを提供。法人社宅や海外顧客のサポートも強みです。"
        />
        <meta
          name="keywords"
          content="恒輝国際不動産, 大阪, 不動産, 売買, 賃貸, 投資, 管理, 社宅, 民泊"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="min-h-screen">
        <header className="site-hero text-center py-14 relative overflow-hidden">
          <div className="hero-overlay"></div>
          <div className="relative z-10">
            <div className="mb-6">
              <img
                loading="lazy"
                src="/pictures/hname2.png"
                alt="恒輝国際不動産"
                className="hero-logo max-w-xs mx-auto"
                style={{ maxWidth: '200px' }}
              />
            </div>
            <p className="text-white/90 text-lg font-medium">
              信頼と速度で、不動産の意思決定を支援します。
            </p>
          </div>
        </header>

        <nav className="site-nav py-5 shadow-sm">
          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto px-4">
            <button
              onClick={() => setActiveSection('homepage')}
              className="modern-button btn-ghost"
            >
              ホーム
            </button>
            <button
              onClick={() => setActiveSection('company')}
              className="modern-button btn-ghost"
            >
              会社概要
            </button>
            <button
              onClick={() => setActiveSection('employment')}
              className="modern-button btn-ghost"
            >
              採用情報
            </button>
            <button
              onClick={() => setActiveSection('reflection')}
              className="modern-button btn-ghost"
            >
              お客様の声
            </button>
            <button
              onClick={() => setActiveSection('access')}
              className="modern-button btn-ghost"
            >
              アクセス
            </button>
          </div>
        </nav>

        <nav className="site-subnav py-4">
          <div className="flex justify-center max-w-4xl mx-auto">
            <div className="relative group">
              <button className="modern-button btn-secondary">事業紹介</button>
              <Link href="/b-and-b" passHref>
                <button className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 modern-button btn-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap z-10">
                  宿泊事業（民泊）
                </button>
              </Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4">{sections[activeSection]}</main>
      </div>
    </>
  );
}
