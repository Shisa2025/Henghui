import Head from 'next/head';
import Link from 'next/link';

export default function BAndB() {
  return (
    <>
      <Head>
        <title>宿泊事業（民泊） | 恒輝国際不動産</title>
        <meta
          name="description"
          content="恒輝国際不動産の宿泊事業。長期・短期滞在の多様なニーズに応える物件を運営しています。"
        />
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
              宿泊体験の質を高める、信頼の運営体制
            </p>
          </div>
        </header>

        <nav className="site-nav py-5 shadow-sm">
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto px-4">
            <Link href="/" passHref>
              <button className="modern-button btn-ghost">ホームへ戻る</button>
            </Link>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-12">
          <div className="modern-card max-w-6xl mx-auto p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold gradient-text mb-4">宿泊事業（民泊）</h1>
              <div className="title-rule"></div>
              <p className="text-gray-700 mt-4">
                出張・観光・長期滞在まで、目的に合わせた滞在環境をご提供します。
                清掃品質とチェックイン体制を標準化し、安心してご利用いただけます。
              </p>
            </div>

            <div className="space-y-8">
              <div className="glass-effect rounded-xl p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="feature-chip">A</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">日本橋ビジネスレジデンス</h3>
                    <p className="text-gray-700 leading-relaxed">
                      駅徒歩5分。高速Wi-Fiとワークスペースを備え、ビジネス利用に最適。
                      長期滞在割引もございます。
                    </p>
                    <a
                      target="_blank"
                      href="https://www.airbnb.com.sg/rooms/1272368736148388619"
                      className="modern-button btn-primary inline-block mt-4"
                    >
                      Airbnbで詳細を見る
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="feature-chip">B</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">なんばシティスイート</h3>
                    <p className="text-gray-700 leading-relaxed">
                      観光・ショッピングに便利な立地。複数名での滞在に対応し、キッチン設備も充実。
                    </p>
                    <a
                      target="_blank"
                      href="https://www.airbnb.com.sg/rooms/1371703884206463781"
                      className="modern-button btn-primary inline-block mt-4"
                    >
                      Airbnbで詳細を見る
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="feature-chip">C</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">通天閣リトリート</h3>
                    <p className="text-gray-700 leading-relaxed">
                      大阪らしい街並みを楽しめる人気エリア。短期滞在から長期まで柔軟に対応します。
                    </p>
                    <a
                      target="_blank"
                      href="https://www.airbnb.com.sg/rooms/973772480467384249"
                      className="modern-button btn-primary inline-block mt-4"
                    >
                      Airbnbで詳細を見る
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="feature-chip">D</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">堺筋ステイ</h3>
                    <p className="text-gray-700 leading-relaxed">
                      交通アクセスが良く、コンパクトで清潔感のある空間。
                      出張の短期利用におすすめです。
                    </p>
                    <a
                      target="_blank"
                      href="https://www.airbnb.com.sg/rooms/879617752263041537"
                      className="modern-button btn-primary inline-block mt-4"
                    >
                      Airbnbで詳細を見る
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-8">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="feature-chip">E</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">ファミリールーム天王寺</h3>
                    <p className="text-gray-700 leading-relaxed">
                      家族連れでも安心の広さ。観光の拠点として快適にお過ごしいただけます。
                    </p>
                    <a
                      target="_blank"
                      href="https://www.airbnb.com.sg/rooms/879617752263041537"
                      className="modern-button btn-primary inline-block mt-4"
                    >
                      Airbnbで詳細を見る
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
