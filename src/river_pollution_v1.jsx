export default function RiverPollutionResearchGuide() {
  const steps = [
    {
      no: 1,
      title: "연구 질문 좁히기",
      emoji: "🎯",
      summary: "사진으로 직접 보이는 오염 징후를 중심으로 문제를 정함",
      details: [
        "처음부터 '모든 수질오염'을 판별하려 하지 않기",
        "부유 쓰레기, 거품, 유막, 녹조, 수색 변화처럼 눈에 보이는 요소부터 시작하기",
        "연구 질문 예: 하천 표면 이미지로 오염 여부 또는 오염 정도를 분류할 수 있는가?"
      ]
    },
    {
      no: 2,
      title: "데이터셋 찾기",
      emoji: "🗂️",
      summary: "공개 데이터셋과 직접 촬영한 현장 이미지를 함께 활용함",
      details: [
        "공개 데이터셋은 모델의 출발점이 됨",
        "직접 촬영한 사진은 우리 지역 하천에 맞는 모델을 만드는 데 중요함",
        "공개 데이터 + 현장 데이터 조합이 가장 현실적임"
      ]
    },
    {
      no: 3,
      title: "현장 촬영 계획 세우기",
      emoji: "📷",
      summary: "같은 조건으로 반복 촬영해야 좋은 연구가 됨",
      details: [
        "구간을 정하고 같은 위치, 비슷한 높이와 각도로 촬영하기",
        "날짜, 시간, 날씨, 햇빛 방향을 함께 기록하기",
        "반사가 심한 사진은 따로 표시해 두기"
      ]
    },
    {
      no: 4,
      title: "라벨링 기준 만들기",
      emoji: "🏷️",
      summary: "무엇을 오염으로 볼지 기준표를 먼저 정함",
      details: [
        "예: 부유 쓰레기 있음 / 없음",
        "예: 오염도 0~3단계",
        "가능하면 2명 이상이 함께 보고 기준을 맞추기"
      ]
    },
    {
      no: 5,
      title: "전처리하기",
      emoji: "🧼",
      summary: "사진 속 불필요한 요소를 줄이고 물 표면을 더 잘 보이게 만듦",
      details: [
        "하천이 아닌 배경을 줄이기",
        "빛 반사 영역을 보정하거나 마스킹하기",
        "밝기와 색을 어느 정도 통일하기"
      ]
    },
    {
      no: 6,
      title: "모델 만들기",
      emoji: "🤖",
      summary: "처음에는 단순한 분류 모델로 시작하고, 이후 탐지 모델로 확장함",
      details: [
        "1단계: 오염 여부 이진 분류",
        "2단계: 오염도 4단계 분류",
        "3단계: 부유물·거품·유막 위치까지 찾는 탐지 모델"
      ]
    },
    {
      no: 7,
      title: "공정하게 평가하기",
      emoji: "📊",
      summary: "같은 장소 사진이 학습과 평가에 함께 들어가지 않도록 주의함",
      details: [
        "구간 기준으로 학습용과 평가용을 나누기",
        "같은 날 연속 촬영 이미지를 무작위로 섞지 않기",
        "정확도뿐 아니라 F1-score, 혼동행렬도 함께 보기"
      ]
    },
    {
      no: 8,
      title: "결과 해석하기",
      emoji: "🔍",
      summary: "왜 맞고 왜 틀렸는지를 분석해야 연구가 완성됨",
      details: [
        "반사광 때문에 틀렸는지 확인하기",
        "거품과 파문을 혼동했는지 살펴보기",
        "잘된 사례와 실패 사례를 함께 제시하기"
      ]
    }
  ];

  const datasets = [
    {
      name: "TUD-GV",
      level: "가장 추천",
      use: "오염 정도 4단계 분류 연습",
      why: "하천·수로 표면에서 부유 쓰레기 양을 단계별로 분류하는 데 적합함"
    },
    {
      name: "YRDG",
      level: "탐지 실험용",
      use: "작은 부유 쓰레기 탐지",
      why: "하천 표면의 작은 부유물을 찾는 연습에 유리함"
    },
    {
      name: "WATER-DET",
      level: "확장 연구용",
      use: "쓰레기 외 다양한 가시적 오염 징후 탐지",
      why: "거품, 변색, 이상 징후 등으로 연구 범위를 넓히기 좋음"
    },
    {
      name: "직접 촬영 데이터",
      level: "반드시 필요",
      use: "우리 지역 하천 맞춤형 모델 만들기",
      why: "공개 데이터만으로는 실제 현장 일반화가 어려울 수 있음"
    }
  ];

  const labels = [
    { type: "오염 징후 유형", examples: "부유 쓰레기, 거품, 유막, 녹조, 수색 이상" },
    { type: "오염도 등급", examples: "0: 깨끗함 / 1: 경미 / 2: 보통 / 3: 심각" },
    { type: "현장 정보", examples: "날짜, 시간, 날씨, 반사 정도, 촬영 위치" }
  ];

  const mistakes = [
    "처음부터 '실제 수질 전체'를 예측하려고 함",
    "라벨 기준 없이 감으로 오염 단계를 나눔",
    "같은 장소의 비슷한 사진이 학습과 테스트에 동시에 들어감",
    "빛 반사를 무시하고 모델만 바꾸려 함",
    "결과가 잘 나온 이유보다, 틀린 이유를 분석하지 않음"
  ];

  const roadmap = [
    "1주차: 연구 질문 정하기 + 공개 데이터셋 조사",
    "2주차: 촬영 계획 세우기 + 라벨 기준표 만들기",
    "3주차: 현장 촬영 + 데이터 정리",
    "4주차: 라벨링 + 전처리 실험",
    "5주차: 첫 분류 모델 만들기",
    "6주차: 성능 평가 + 오류 분석",
    "7주차: 반사 보정, 데이터 보강, 모델 개선",
    "8주차: 결과 정리 + 발표 자료 제작"
  ];

  const checklist = [
    "내 연구 질문이 너무 넓지 않은가?",
    "사진으로 실제로 보이는 오염 요소를 대상으로 했는가?",
    "공개 데이터와 직접 촬영 데이터를 함께 쓸 계획이 있는가?",
    "라벨 기준표를 먼저 만들었는가?",
    "촬영 위치, 시간, 날씨를 기록할 준비가 되었는가?",
    "반사광 보정 또는 제외 기준을 정했는가?",
    "평가용 데이터를 공정하게 분리했는가?",
    "실패 사례까지 분석할 계획이 있는가?"
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
            하천 표면 이미지 기반 오염 판별 연구 안내
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            처음 연구하는 학생도 이해할 수 있는<br />
            하천 오염 판별 AI 연구 가이드
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-emerald-50 leading-8">
            "정말 이게 가능할까?"라는 질문에서 출발해도 괜찮습니다.
            이 페이지는 하천 표면 사진을 이용해 오염 여부나 오염 정도를 판별하는 인공지능 연구를
            처음 시작하는 학생을 위해, 연구 절차와 방법을 쉬운 흐름으로 정리한 안내서입니다.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <div className="text-sm text-emerald-100">핵심 메시지 1</div>
              <div className="mt-2 text-lg font-semibold">가능함</div>
              <p className="mt-2 text-sm text-emerald-50">다만 사진으로 보이는 오염 징후를 중심으로 문제를 좁히는 것이 중요합니다.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <div className="text-sm text-emerald-100">핵심 메시지 2</div>
              <div className="mt-2 text-lg font-semibold">공개 데이터 + 현장 데이터</div>
              <p className="mt-2 text-sm text-emerald-50">처음에는 공개 데이터셋으로 출발하고, 이후 직접 촬영한 사진으로 모델을 보완합니다.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <div className="text-sm text-emerald-100">핵심 메시지 3</div>
              <div className="mt-2 text-lg font-semibold">반사광은 핵심 변수</div>
              <p className="mt-2 text-sm text-emerald-50">빛 반사는 단순한 잡음이 아니라, 반드시 통제해야 하는 연구 변수입니다.</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-14">
        <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-bold">먼저, 이 연구는 어떤 질문으로 시작하면 좋을까요?</h2>
            <p className="mt-4 leading-8 text-slate-700">
              가장 좋은 출발점은 "하천 사진만으로 모든 수질 오염을 정확히 알 수 있는가"가 아닙니다.
              대신 "하천 표면 사진에서 눈에 보이는 오염 징후를 자동으로 찾을 수 있는가"처럼,
              실제로 사진 속에서 확인 가능한 요소를 중심으로 질문을 세우는 것입니다.
            </p>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                <div className="text-sm font-semibold text-rose-700">너무 넓은 질문</div>
                <p className="mt-2 text-sm leading-7 text-rose-900">하천 사진만으로 실제 수질 전체를 판별할 수 있는가?</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <div className="text-sm font-semibold text-emerald-700">좋은 연구 질문</div>
                <p className="mt-2 text-sm leading-7 text-emerald-900">하천 표면 이미지에서 부유 쓰레기, 거품, 유막, 녹조 같은 가시적 오염 징후를 판별할 수 있는가?</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold">한눈에 보는 연구 흐름</h2>
            <div className="mt-6 space-y-3">
              {[
                "연구 질문 정하기",
                "데이터셋 찾기",
                "현장 촬영 계획 세우기",
                "라벨링 기준 만들기",
                "전처리하기",
                "모델 학습하기",
                "평가하기",
                "결과 해석하기"
              ].map((item, idx) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl bg-white/10 px-4 py-3">
                  <div className="h-8 w-8 rounded-full bg-cyan-400 text-slate-900 flex items-center justify-center text-sm font-bold">{idx + 1}</div>
                  <div className="font-medium">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl font-bold">연구 절차를 단계별로 이해하기</h2>
              <p className="mt-3 text-slate-600">처음 하는 학생도 따라갈 수 있도록 순서를 단순하고 명확하게 정리했습니다.</p>
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {steps.map((step) => (
              <div key={step.no} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="text-3xl">{step.emoji}</div>
                  <div className="text-sm font-bold text-teal-700 bg-teal-50 border border-teal-200 rounded-full px-3 py-1">STEP {step.no}</div>
                </div>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.summary}</p>
                <div className="mt-4 space-y-2">
                  {step.details.map((detail) => (
                    <div key={detail} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-2xl font-bold">어떤 데이터셋을 쓰면 좋을까요?</h2>
            <p className="mt-4 text-slate-600 leading-8">
              처음에는 공개 데이터셋으로 기본 모델을 만들고, 이후 직접 촬영한 사진을 추가하는 것이 가장 안정적입니다.
            </p>
            <div className="mt-6 space-y-4">
              {datasets.map((ds) => (
                <div key={ds.name} className="rounded-2xl border border-slate-200 p-5">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <h3 className="text-lg font-bold">{ds.name}</h3>
                    <span className="rounded-full bg-cyan-50 border border-cyan-200 px-3 py-1 text-sm font-medium text-cyan-800">{ds.level}</span>
                  </div>
                  <p className="mt-3 text-sm"><span className="font-semibold">활용:</span> {ds.use}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600"><span className="font-semibold text-slate-700">이유:</span> {ds.why}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-2xl font-bold">라벨은 어떻게 붙이면 좋을까요?</h2>
            <p className="mt-4 text-slate-600 leading-8">
              한 장의 사진에 하나의 라벨만 붙이기보다, 여러 층으로 나누어 기록하면 연구가 훨씬 탄탄해집니다.
            </p>
            <div className="mt-6 space-y-4">
              {labels.map((label) => (
                <div key={label.type} className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                  <h3 className="font-bold text-lg">{label.type}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{label.examples}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-amber-50 border border-amber-200 p-5">
              <h3 className="font-semibold text-amber-900">중요</h3>
              <p className="mt-2 text-sm leading-7 text-amber-900">
                오염도 등급은 주관적일 수 있으므로, 기준표를 먼저 만들고 가능하면 2명 이상이 함께 라벨링하는 것이 좋습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-2xl font-bold">모델은 어떤 순서로 발전시키면 좋을까요?</h2>
            <div className="mt-6 space-y-5">
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="text-sm font-semibold text-teal-700">1단계</div>
                <h3 className="mt-1 text-lg font-bold">오염 여부 이진 분류</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">가장 쉬운 시작입니다. 깨끗함 / 오염 의심처럼 두 범주로 나누어 기본 가능성을 확인합니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="text-sm font-semibold text-teal-700">2단계</div>
                <h3 className="mt-1 text-lg font-bold">오염도 4단계 분류</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">0, 1, 2, 3 단계로 오염 정도를 나누어 보다 실제적인 판별 모델로 발전시킵니다.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="text-sm font-semibold text-teal-700">3단계</div>
                <h3 className="mt-1 text-lg font-bold">오염 징후 탐지 모델</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">부유 쓰레기, 거품, 유막처럼 무엇이 어디에 있는지 찾는 모델로 확장하면 설명력이 높아집니다.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl shadow-sm p-8">
            <h2 className="text-2xl font-bold">기억해야 할 핵심</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
              <div className="rounded-2xl bg-white/10 p-4">처음에는 단순하게 시작하고, 점점 확장하는 것이 좋습니다.</div>
              <div className="rounded-2xl bg-white/10 p-4">모델 성능보다 데이터 품질과 라벨 기준이 더 중요할 수 있습니다.</div>
              <div className="rounded-2xl bg-white/10 p-4">빛 반사와 촬영 조건은 연구의 핵심 변수입니다.</div>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-2xl font-bold">초보 연구자가 자주 하는 실수</h2>
            <div className="mt-6 space-y-3">
              {mistakes.map((item, idx) => (
                <div key={item} className="flex gap-4 rounded-2xl bg-rose-50 border border-rose-200 p-4">
                  <div className="h-7 w-7 shrink-0 rounded-full bg-rose-600 text-white flex items-center justify-center text-sm font-bold">{idx + 1}</div>
                  <div className="text-sm leading-7 text-rose-950">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
            <h2 className="text-2xl font-bold">8주 연구 로드맵 예시</h2>
            <div className="mt-6 space-y-3">
              {roadmap.map((item, idx) => (
                <div key={item} className="flex gap-4 rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
                  <div className="h-7 w-7 shrink-0 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-bold">{idx + 1}</div>
                  <div className="text-sm leading-7 text-emerald-950">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
          <h2 className="text-2xl font-bold">연구를 시작하기 전 최종 점검</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {checklist.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 border border-slate-200 p-4">
                <div className="mt-1 h-5 w-5 rounded-md border-2 border-teal-600"></div>
                <div className="text-sm leading-7 text-slate-700">{item}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-slate-900 to-teal-900 text-white rounded-3xl p-8 md:p-10">
          <h2 className="text-3xl font-bold">마지막으로, 이 연구에서 가장 중요한 한 문장</h2>
          <p className="mt-5 text-lg leading-9 text-slate-100 max-w-4xl">
            좋은 인공지능 모델은 복잡한 알고리즘에서만 시작되지 않습니다.
            오히려 잘 정의된 연구 질문, 분명한 라벨 기준, 공정한 평가 설계,
            그리고 현장을 성실하게 관찰한 데이터에서 출발합니다.
          </p>
          <div className="mt-8 rounded-2xl bg-white/10 p-5 text-sm leading-7 text-slate-100 max-w-3xl">
            따라서 처음 연구하는 학생이라면, “최고 성능의 모델”보다 “왜 이 문제를 이렇게 정의했는가”를 설명할 수 있는 연구를 만드는 것이 더 중요합니다.
          </div>
        </section>
      </main>
    </div>
  );
}
