import React, { useState } from 'react';

/**
 * 하천 오염 판별 AI 연구 통합 가이드
 * 깃허브 배포용 단일 컴포넌트
 */
export default function RiverPollutionWebPage() {
  const [activeTab, setActiveTab] = useState('v2');

  // 데이터셋 정보
  const datasetsV1 = [
    { name: "TUD-GV", link: "https://zenodo.org/record/5716552" },
    { name: "YRDG", link: "https://github.com/YellowRiverDataset" },
    { name: "WATER-DET", link: "https://github.com/water-det" },
    { name: "TUD-HCMC", link: "https://zenodo.org/records/17387612" }
  ];

  const datasetsV2 = [
    { name: "TUD-GV", level: "가장 추천", use: "오염 정도 4단계 분류 연습", why: "하천 표면 부유 쓰레기 양 분류에 적합" },
    { name: "YRDG", level: "탐지 실험용", use: "작은 부유 쓰레기 탐지", why: "작은 객체 검출 연습에 유리" },
    { name: "WATER-DET", level: "확장 연구용", use: "다양한 오염 징후 탐지", why: "거품, 변색 등 범위 확장 가능" },
    { name: "직접 촬영 데이터", level: "반드시 필요", use: "지역 맞춤형 모델", why: "현장 일반화 성능 확보 필수" }
  ];

  // 연구 단계 데이터
  const steps = [
    { no: 1, title: "연구 질문 좁히기", emoji: "🎯", summary: "눈에 보이는 오염 징후에 집중", details: ["'모든 수질오염' 대신 가시적 요소(쓰레기, 거품 등) 선택"] },
    { no: 2, title: "데이터셋 찾기", emoji: "🗂️", summary: "공개 데이터와 현장 사진 조합", details: ["기존 데이터셋으로 시작 후 현장 데이터로 보완"] },
    { no: 3, title: "현장 촬영 계획", emoji: "📷", summary: "통제된 환경에서 반복 촬영", details: ["위치, 각도, 날씨, 햇빛 방향 기록 필수"] },
    { no: 4, title: "라벨링 기준 수립", emoji: "🏷️", summary: "명확한 판단 기준표 작성", details: ["오염 없음/있음 또는 0~3단계 등급화"] },
    { no: 5, title: "전처리 공정", emoji: "🧼", summary: "노이즈 제거 및 데이터 정제", details: ["배경 제거, 빛 반사 보정 및 마스킹"] },
    { no: 6, title: "모델 아키텍처", emoji: "🤖", summary: "분류에서 탐지로 단계적 확장", details: ["이진 분류 -> 다중 분류 -> 객체 탐지"] },
    { no: 7, title: "공정한 평가", emoji: "📊", summary: "데이터 오염 방지", details: ["학습/평가 데이터셋을 장소별로 엄격히 분리"] },
    { no: 8, title: "오류 분석", emoji: "🔍", summary: "실패 사례 분석을 통한 개선", details: ["왜 틀렸는지(반사광 등) 원인 파악"] }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* 내비게이션 바 */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 p-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <span className="font-bold text-xl text-teal-700">River AI Guide</span>
          <div className="flex gap-2">
            <button 
              onClick={() => setActiveTab('v1')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition ${activeTab === 'v1' ? 'bg-teal-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              퀵 가이드 & 도구
            </button>
            <button 
              onClick={() => setActiveTab('v2')}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition ${activeTab === 'v2' ? 'bg-cyan-700 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              심층 연구 로드맵
            </button>
          </div>
        </div>
      </nav>

      {/* 메인 컨텐츠 */}
      <main className="transition-opacity duration-300">
        {activeTab === 'v1' ? (
          <section className="animate-in fade-in slide-in-from-bottom-4">
            <div className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-16 px-6 text-center">
              <h1 className="text-4xl font-bold mb-4">하천 오염 판별 AI 연구 가이드</h1>
              <p className="text-lg opacity-90">처음 연구하는 학생을 위한 도구와 데이터셋 모음</p>
            </div>
            
            <div className="max-w-6xl mx-auto p-8 space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">📂 데이터셋 링크</h2>
                  <div className="space-y-3">
                    {datasetsV1.map(d => (
                      <a key={d.name} href={d.link} target="_blank" rel="noreferrer" className="block p-4 border border-slate-100 rounded-xl hover:bg-teal-50 hover:border-teal-200 transition">
                        <div className="font-bold text-teal-700">{d.name}</div>
                        <div className="text-xs text-slate-500">클릭하여 공식 페이지로 이동</div>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <h2 className="text-2xl font-bold mb-6">📝 연구계획서 초안 작성</h2>
                  <div className="space-y-4">
                    <input className="w-full p-3 bg-slate-50 border rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" placeholder="연구 주제를 입력하세요" />
                    <textarea className="w-full p-3 bg-slate-50 border rounded-lg h-32 focus:ring-2 focus:ring-teal-500 outline-none" placeholder="연구 목적과 기대 효과"></textarea>
                    <button className="w-full py-3 bg-teal-600 text-white rounded-lg font-bold hover:bg-teal-700">PDF로 저장하기 (예시)</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="animate-in fade-in slide-in-from-bottom-4">
            <div className="bg-slate-900 text-white py-20 px-6">
              <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 italic leading-tight">
                  "정확한 모델보다<br/>중요한 것은 올바른 질문입니다."
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl">실제 필드 데이터 수집부터 모델 평가까지, 8단계의 전문 연구 프로세스를 안내합니다.</p>
              </div>
            </div>

            <div className="max-w-6xl mx-auto p-8 space-y-16">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map(step => (
                  <div key={step.no} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition">
                    <div className="text-3xl mb-4">{step.emoji}</div>
                    <h3 className="font-bold text-lg mb-2">Step {step.no}. {step.title}</h3>
                    <p className="text-sm text-slate-600 mb-4">{step.summary}</p>
                    <ul className="text-xs text-slate-400 space-y-1">
                      {step.details.map((d, i) => <li key={i}>• {d}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-emerald-900 mb-6">초보 연구자 체크리스트</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "질문이 사진으로 판별 가능한 수준인가?",
                    "라벨링 기준표를 사전에 정의했는가?",
                    "빛 반사 통제 계획이 있는가?",
                    "학습/평가 데이터를 엄격히 분리했는가?"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-emerald-200 shadow-sm">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">✓</div>
                      <span className="text-sm font-medium text-emerald-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-slate-200 bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-500 text-sm">© 2026 River AI Research Guide. Built for Students.</p>
        </div>
      </footer>
    </div>
  );
}