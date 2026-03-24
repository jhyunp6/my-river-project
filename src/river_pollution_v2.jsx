export default function RiverPollutionResearchGuide() {
  const datasets = [
    { name: "TUD-GV", link: "https://zenodo.org/record/5716552" },
    { name: "YRDG", link: "https://github.com/YellowRiverDataset" },
    { name: "WATER-DET", link: "https://github.com/water-det" },
    { name: "TUD-HCMC", link: "https://zenodo.org/records/17387612" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* HEADER */}
      <header className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white p-10">
        <h1 className="text-4xl font-bold">하천 오염 판별 AI 연구 가이드</h1>
        <p className="mt-4 text-lg">처음 연구하는 학생을 위한 단계별 안내 웹페이지</p>
      </header>

      <main className="max-w-6xl mx-auto p-8 space-y-16">

        {/* 1. 데이터셋 링크 */}
        <section>
          <h2 className="text-2xl font-bold">📂 데이터셋 바로가기</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {datasets.map((d) => (
              <a key={d.name} href={d.link} target="_blank" className="p-5 bg-white rounded-xl shadow hover:shadow-lg border">
                <h3 className="text-lg font-bold">{d.name}</h3>
                <p className="text-sm mt-2 text-slate-600">클릭하여 데이터셋 확인하기</p>
              </a>
            ))}
          </div>
        </section>

        {/* 2. 연구계획서 입력 폼 */}
        <section>
          <h2 className="text-2xl font-bold">📝 연구계획서 작성 도구</h2>
          <div className="mt-6 space-y-4">
            <input className="w-full p-3 border rounded" placeholder="연구 제목" />
            <textarea className="w-full p-3 border rounded" placeholder="연구 목적"></textarea>
            <textarea className="w-full p-3 border rounded" placeholder="연구 방법"></textarea>
            <textarea className="w-full p-3 border rounded" placeholder="예상 결과"></textarea>
          </div>
        </section>

        {/* 3. 모델 구조 그림 */}
        <section>
          <h2 className="text-2xl font-bold">🧠 모델 구조 이해하기</h2>
          <div className="mt-6 bg-white p-6 rounded-xl shadow">
            <svg viewBox="0 0 600 200" className="w-full">
              <rect x="20" y="60" width="120" height="60" fill="#0ea5e9" />
              <text x="30" y="95" fill="white">이미지 입력</text>

              <rect x="180" y="60" width="120" height="60" fill="#22c55e" />
              <text x="190" y="95" fill="white">특징 추출</text>

              <rect x="340" y="60" width="120" height="60" fill="#f59e0b" />
              <text x="350" y="95" fill="white">오염 탐지</text>

              <rect x="500" y="60" width="80" height="60" fill="#ef4444" />
              <text x="505" y="95" fill="white">결과</text>

              <line x1="140" y1="90" x2="180" y2="90" stroke="black" />
              <line x1="300" y1="90" x2="340" y2="90" stroke="black" />
              <line x1="460" y1="90" x2="500" y2="90" stroke="black" />
            </svg>
          </div>
        </section>

        {/* 4. 발표용 요약 페이지 */}
        <section>
          <h2 className="text-2xl font-bold">📊 발표용 핵심 정리</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-white rounded-xl shadow">
              <h3 className="font-bold">연구 목표</h3>
              <p className="text-sm mt-2">하천 이미지로 오염 여부를 판별</p>
            </div>
            <div className="p-5 bg-white rounded-xl shadow">
              <h3 className="font-bold">방법</h3>
              <p className="text-sm mt-2">CNN 기반 이미지 분류</p>
            </div>
            <div className="p-5 bg-white rounded-xl shadow">
              <h3 className="font-bold">결과</h3>
              <p className="text-sm mt-2">정확도 및 사례 분석</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
