"use client";

import { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { icon: string; width?: string | number; style?: React.CSSProperties },
        HTMLElement
      >;
    }
  }
}

const SPARKLES = [
  { top: "5%",  left: "7%",  size: 14, delay: "0s",   dur: "2.8s" },
  { top: "3%",  left: "33%", size: 10, delay: "0.5s",  dur: "2.4s" },
  { top: "9%",  left: "58%", size: 18, delay: "0.9s",  dur: "3.0s" },
  { top: "6%",  left: "80%", size: 12, delay: "0.3s",  dur: "2.6s" },
  { top: "16%", left: "18%", size: 10, delay: "1.2s",  dur: "2.9s" },
  { top: "19%", left: "70%", size: 14, delay: "0.7s",  dur: "2.5s" },
  { top: "2%",  left: "50%", size: 22, delay: "0.2s",  dur: "3.2s" },
  { top: "13%", left: "91%", size: 10, delay: "1.0s",  dur: "2.7s" },
];
const RAYS = [0,24,48,72,96,120,144,168,192,216,240,264,288,312,336];

const T = "all .5s cubic-bezier(.16,1,.3,1)";

export default function Home() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://code.iconify.design/iconify-icon/2.3.0/iconify-icon.min.js";
    document.head.appendChild(s);

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div
      className="relative min-h-[100dvh] overflow-x-hidden"
      style={{ background: "linear-gradient(175deg,#FFF8DC 0%,#FFF0A0 5%,#C8EEFF 22%,#55C5F0 50%,#1E90CC 78%,#0A6FA0 100%)" }}
    >
      {/* ── 햇살 레이어 (fixed) ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute animate-float"
          style={{ top:"-90px", left:"50%", transform:"translateX(-50%)", width:"360px", height:"360px",
            borderRadius:"50%", background:"radial-gradient(circle,rgba(255,252,160,1) 0%,rgba(255,220,60,.55) 35%,rgba(255,190,30,.1) 65%,transparent 100%)",
            filter:"blur(6px)", animationDuration:"8s" }} />
        <div className="absolute" style={{ top:0, left:"50%", width:0, height:0 }}>
          {RAYS.map((deg, i) => (
            <div key={i} className="animate-ray absolute"
              style={{ top:0, left:0, width:"1.5px", height:"600px", transformOrigin:"top center",
                transform:`rotate(${deg}deg)`,
                background:"linear-gradient(to bottom,rgba(255,235,80,.5) 0%,rgba(255,200,40,.06) 50%,transparent 100%)",
                animationDelay:`${i * 0.15}s` }} />
          ))}
        </div>
        <div className="absolute" style={{ top:"-200px", left:"50%", transform:"translateX(-50%)", width:"900px", height:"600px",
          background:"radial-gradient(ellipse,rgba(255,245,130,.36) 0%,rgba(255,215,60,.10) 50%,transparent 72%)", filter:"blur(28px)" }} />
        {SPARKLES.map((sp, i) => (
          <div key={i} className="animate-sparkle absolute"
            style={{ top:sp.top, left:sp.left, width:sp.size, height:sp.size, animationDelay:sp.delay, animationDuration:sp.dur }}>
            <div style={{ position:"relative", width:"100%", height:"100%" }}>
              <div style={{ position:"absolute", top:"50%", left:0, right:0, height:"2px", background:"rgba(255,255,255,.95)", transform:"translateY(-50%)", borderRadius:"1px", boxShadow:"0 0 8px 3px rgba(255,240,80,.85)" }} />
              <div style={{ position:"absolute", left:"50%", top:0, bottom:0, width:"2px", background:"rgba(255,255,255,.95)", transform:"translateX(-50%)", borderRadius:"1px", boxShadow:"0 0 8px 3px rgba(255,240,80,.85)" }} />
            </div>
          </div>
        ))}
      </div>

      {/* 물결 */}
      <svg className="pointer-events-none fixed bottom-0 left-0 w-full z-0" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d="M0,52 C360,100 780,8 1100,55 C1270,78 1390,36 1440,52 L1440,100 L0,100 Z" fill="rgba(255,255,255,.22)" />
      </svg>
      <svg className="pointer-events-none fixed bottom-0 left-0 w-full z-0" viewBox="0 0 1440 70" preserveAspectRatio="none">
        <path d="M0,50 C420,18 840,65 1200,40 C1330,28 1410,50 1440,50 L1440,70 L0,70 Z" fill="rgba(255,255,255,.13)" />
      </svg>

      {/* ════ NAV ════ */}
      <nav className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4">
        <div className="flex items-center justify-between w-full max-w-3xl rounded-full px-5 py-2.5"
          style={{ background:"rgba(255,255,255,.45)", border:"1px solid rgba(255,255,255,.7)", backdropFilter:"blur(24px)", boxShadow:"0 4px 24px rgba(14,122,180,.1)" }}>
          <a href="#" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background:"rgba(12,74,110,.12)", border:"1px solid rgba(12,74,110,.2)" }}>
              <iconify-icon icon="solar:global-linear" style={{ color:"#0C4A6E" }} width="16" />
            </div>
            <span className="text-sm font-bold" style={{ color:"#0C4A6E" }}>ODA 스터디</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {["스터디 소개","특징","후기"].map((t,i)=>(
              <a key={i} href="#" className="text-sm font-medium" style={{ color:"rgba(12,74,110,.6)", transition:T }}
                onMouseEnter={e=>(e.currentTarget.style.color="rgba(12,74,110,.95)")}
                onMouseLeave={e=>(e.currentTarget.style.color="rgba(12,74,110,.6)")}>{t}</a>
            ))}
          </div>
          <a href="#cta" className="rounded-full px-5 py-2 text-sm font-bold"
            style={{ background:"linear-gradient(135deg,#0C4A6E,#075985)", color:"#fff", boxShadow:"0 4px 16px rgba(12,74,110,.3)", transition:T }}
            onMouseEnter={e=>{ e.currentTarget.style.transform="scale(1.03)"; e.currentTarget.style.boxShadow="0 8px 28px rgba(12,74,110,.42)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow="0 4px 16px rgba(12,74,110,.3)"; }}>
            모집 중인 스터디
          </a>
        </div>
      </nav>

      {/* ════ HERO ════ */}
      <section className="relative z-10 min-h-[100dvh] flex items-center pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-bold tracking-[.15em] uppercase"
              style={{ background:"rgba(12,74,110,.1)", border:"1px solid rgba(12,74,110,.25)", color:"#075985", animation:"fadeInUp .7s cubic-bezier(.16,1,.3,1) both" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{ background:"#0EA5E9" }} />
              5월 기수 모집 진행 중
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-snug tracking-tight mb-6"
              style={{ color:"#0C4A6E", textShadow:"0 2px 20px rgba(255,235,80,.3)", animation:"fadeInUp .7s cubic-bezier(.16,1,.3,1) .1s both" }}>
              ODA,<br />혼자 공부하다<br />
              <span style={{ background:"linear-gradient(90deg,#0C4A6E,#0EA5E9,#0C4A6E)", backgroundSize:"200% auto", WebkitBackgroundClip:"text", backgroundClip:"text", WebkitTextFillColor:"transparent", animation:"shimmer 3s linear infinite" }}>
                지치셨나요?
              </span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-[50ch] mb-8"
              style={{ color:"rgba(12,74,110,.62)", animation:"fadeInUp .7s cubic-bezier(.16,1,.3,1) .2s both" }}>
              국가별 개발협력 스터디를 4주 단위로 모집합니다.<br />
              KOICA 준비부터 파견국 심층 분석까지,<br />
              같은 목표를 가진 4–6명이 함께합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8"
              style={{ animation:"fadeInUp .7s cubic-bezier(.16,1,.3,1) .3s both" }}>
              <a href="#cta" className="rounded-full px-8 py-4 text-base font-bold flex items-center gap-2 justify-center"
                style={{ background:"linear-gradient(135deg,#0C4A6E,#075985)", color:"#fff", boxShadow:"0 4px 24px rgba(12,74,110,.28)", transition:T }}
                onMouseEnter={e=>{ e.currentTarget.style.transform="scale(1.03)"; e.currentTarget.style.boxShadow="0 8px 40px rgba(12,74,110,.4)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow="0 4px 24px rgba(12,74,110,.28)"; }}>
                모집 중인 스터디 보기 <iconify-icon icon="solar:arrow-right-linear" width="18" />
              </a>
              <a href="#features" className="rounded-full px-8 py-4 text-base font-semibold flex items-center gap-2 justify-center"
                style={{ border:"1px solid rgba(12,74,110,.25)", color:"rgba(12,74,110,.72)", background:"rgba(255,255,255,.35)", backdropFilter:"blur(12px)", transition:T }}
                onMouseEnter={e=>{ e.currentTarget.style.background="rgba(255,255,255,.55)"; e.currentTarget.style.transform="scale(1.02)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.background="rgba(255,255,255,.35)"; e.currentTarget.style.transform="scale(1)"; }}>
                샘플 커리큘럼 보기 <iconify-icon icon="solar:document-text-linear" width="18" />
              </a>
            </div>
            <div className="flex items-center gap-3" style={{ animation:"fadeInUp .7s cubic-bezier(.16,1,.3,1) .4s both" }}>
              <div className="flex -space-x-2">
                {["oda1","oda2","oda3","oda4"].map(u=>(
                  <img key={u} src={`https://i.pravatar.cc/32?u=${u}`} alt="참여자" width="32" height="32"
                    className="w-8 h-8 rounded-full object-cover" style={{ border:"2px solid rgba(255,255,255,.8)" }} loading="lazy" decoding="async" />
                ))}
              </div>
              <p className="text-sm" style={{ color:"rgba(12,74,110,.55)" }}>이번 달 <span style={{ color:"#0C4A6E", fontWeight:700 }}>47명</span>이 함께 공부하고 있습니다</p>
            </div>
          </div>

          {/* 플로팅 스터디 카드 */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 rounded-3xl blur-[60px] opacity-30"
              style={{ background:"radial-gradient(circle,rgba(255,255,255,.8),transparent 65%)" }} />
            <div className="animate-float relative w-full max-w-[380px]">
              <div className="rounded-[2rem] p-[5px]"
                style={{ background:"rgba(255,255,255,.25)", border:"1px solid rgba(255,255,255,.72)", boxShadow:"0 12px 40px rgba(14,122,180,.15), inset 0 1px 0 rgba(255,255,255,.9)" }}>
                <div className="rounded-[calc(2rem-5px)] p-6"
                  style={{ background:"rgba(255,255,255,.55)", border:"1px solid rgba(255,255,255,.82)", backdropFilter:"blur(24px)", boxShadow:"inset 0 1px 0 rgba(255,255,255,.95)" }}>
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <p className="text-xs uppercase tracking-widest font-medium" style={{ color:"rgba(12,74,110,.45)" }}>현재 모집 중</p>
                      <p className="text-base font-bold mt-0.5" style={{ color:"#0C4A6E" }}>5월 기수 스터디</p>
                    </div>
                    <span className="rounded-full px-3 py-1 text-xs font-bold text-white" style={{ background:"#0C4A6E" }}>D-19</span>
                  </div>
                  <div className="space-y-2 mb-5">
                    {[
                      { code:"VNM", name:"베트남",    seats:"잔여 2석",  hot:false, closed:false },
                      { code:"ETH", name:"에티오피아", seats:"잔여 3석",  hot:true,  closed:false },
                      { code:"KHM", name:"캄보디아",   seats:"잔여 4석",  hot:false, closed:false },
                      { code:"RWA", name:"르완다",     seats:"모집 마감", hot:false, closed:true  },
                      { code:"IDN", name:"인도네시아", seats:"잔여 5석",  hot:false, closed:false },
                    ].map(({ code, name, seats, hot, closed })=>(
                      <div key={code} className="flex items-center justify-between px-3 py-2.5 rounded-xl"
                        style={{
                          border: hot ? "1px solid rgba(14,165,233,.5)" : "1px solid rgba(12,74,110,.12)",
                          background: hot ? "rgba(14,165,233,.08)" : closed ? "rgba(12,74,110,.03)" : "rgba(255,255,255,.3)",
                          opacity: closed ? 0.45 : 1, transition:T,
                        }}>
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-mono px-1.5 py-0.5 rounded" style={{ color:"#075985", background:"rgba(12,74,110,.1)" }}>{code}</span>
                          <span className="text-sm font-medium" style={{ color:"#0C4A6E" }}>{name}</span>
                        </div>
                        <span className="text-xs font-semibold"
                          style={{ color: hot ? "#0EA5E9" : closed ? "rgba(12,74,110,.35)" : "rgba(12,74,110,.5)" }}>{seats}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#cta" className="w-full rounded-xl py-3 text-sm font-bold flex items-center justify-center gap-2"
                    style={{ background:"linear-gradient(135deg,#0C4A6E,#075985)", color:"#fff", boxShadow:"0 4px 16px rgba(12,74,110,.3)", transition:T }}
                    onMouseEnter={e=>{ e.currentTarget.style.transform="scale(1.02)"; e.currentTarget.style.boxShadow="0 6px 24px rgba(12,74,110,.4)"; }}
                    onMouseLeave={e=>{ e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow="0 4px 16px rgba(12,74,110,.3)"; }}>
                    전체 국가 목록 보기 <iconify-icon icon="solar:arrow-right-linear" width="16" />
                  </a>
                  <p className="text-center text-xs mt-3" style={{ color:"rgba(12,74,110,.4)" }}>개설 취소 시 전액 환불 보장</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ METRICS ════ */}
      <section className="relative z-10 py-10 px-4 sm:px-6 lg:px-8"
        style={{ borderTop:"1px solid rgba(255,255,255,.5)", borderBottom:"1px solid rgba(255,255,255,.5)", background:"rgba(255,255,255,.25)", backdropFilter:"blur(12px)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {([["82%","지원서 직접 활용률"],["91%","스터디 완주율"],["34명","연간 합격자 배출"],["20개국","국가별 커리큘럼 보유"]] as const).map(([n,l],i)=>(
            <div key={i} className={`reveal ${["","d1","d2","d3"][i]} text-center`}>
              <p className="text-4xl font-bold tracking-tight" style={{ color:"#0C4A6E" }}>{n}</p>
              <p className="text-sm mt-1" style={{ color:"rgba(12,74,110,.52)" }}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════ PROBLEM ════ */}
      <section id="about" className="relative z-10 py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="reveal inline-flex items-center gap-2 rounded-full px-3 py-1 mb-5 text-xs font-bold tracking-[.14em] uppercase"
              style={{ border:"1px solid rgba(12,74,110,.18)", color:"rgba(12,74,110,.5)", background:"rgba(255,255,255,.35)", backdropFilter:"blur(8px)" }}>
              <iconify-icon icon="solar:info-circle-linear" width="12" /> 왜 ODA 스터디가 필요한가
            </div>
            <h2 className="reveal text-4xl md:text-5xl font-bold leading-snug d1" style={{ color:"#0C4A6E" }}>
              이런 경험,<br />익숙하지 않으신가요?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="reveal d1 md:col-span-2 rounded-[1.5rem] p-7"
              style={{ background:"rgba(255,255,255,.45)", border:"1px solid rgba(255,255,255,.7)", backdropFilter:"blur(20px)", boxShadow:"0 8px 32px rgba(14,122,180,.08)", transition:T }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 16px 48px rgba(14,122,180,.14)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 8px 32px rgba(14,122,180,.08)"; }}>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background:"rgba(12,74,110,.1)", border:"1px solid rgba(12,74,110,.2)" }}>
                  <iconify-icon icon="solar:document-text-linear" style={{ color:"#075985" }} width="22" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2" style={{ color:"#0C4A6E" }}>자료는 많은데, 정리가 안 된다</h3>
                  <p className="leading-relaxed text-sm" style={{ color:"rgba(12,74,110,.58)" }}>UNDP 보고서, World Bank 데이터, 외교부 ODA 현황... 정보는 넘치지만 어디서부터 봐야 할지 막막합니다.</p>
                </div>
                <div className="md:text-right shrink-0">
                  <p className="text-3xl font-bold" style={{ color:"#0C4A6E" }}>10명 중 7명</p>
                  <p className="text-sm mt-1" style={{ color:"rgba(12,74,110,.45)" }}>체계적인 학습 루트가 없다고 응답</p>
                </div>
              </div>
            </div>
            {[
              { icon:"solar:map-point-linear", title:"파견국 공부, 시작도 못 하고 출국한다", body:"파견 전 국가 사전 교육은 평균 ", bold:"3일", after:". 현지 맥락을 3일 만에 파악하고 업무에 투입되는 건 처음부터 무리입니다." },
              { icon:"solar:users-group-two-rounded-linear", title:"같은 방향을 보는 사람이 주변에 없다", body:"KOICA 면접 준비나 ODA 논문 작성 시 피드백을 줄 동료를 찾는 데만 평균 ", bold:"3주 이상", after:" 걸립니다." },
            ].map(({ icon, title, body, bold, after }, i)=>(
              <div key={i} className={`reveal d${i+2} rounded-[1.5rem] p-7`}
                style={{ background:"rgba(255,255,255,.4)", border:"1px solid rgba(255,255,255,.65)", backdropFilter:"blur(20px)", boxShadow:"0 8px 32px rgba(14,122,180,.07)", transition:T }}
                onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 16px 48px rgba(14,122,180,.12)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 8px 32px rgba(14,122,180,.07)"; }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background:"rgba(255,255,255,.5)", border:"1px solid rgba(12,74,110,.14)" }}>
                  <iconify-icon icon={icon} style={{ color:"rgba(12,74,110,.5)" }} width="22" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color:"#0C4A6E" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color:"rgba(12,74,110,.58)" }}>
                  {body}<strong style={{ color:"#0C4A6E" }}>{bold}</strong>{after}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ FEATURES ════ */}
      <section id="features" className="relative z-10 py-24 md:py-32 px-4 sm:px-6 lg:px-8" style={{ borderTop:"1px solid rgba(255,255,255,.4)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 reveal">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-5 text-xs font-bold tracking-[.14em] uppercase"
              style={{ border:"1px solid rgba(12,74,110,.18)", color:"rgba(12,74,110,.5)", background:"rgba(255,255,255,.35)", backdropFilter:"blur(8px)" }}>
              <iconify-icon icon="solar:star-linear" width="12" /> 우리가 다르게 하는 것
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-snug" style={{ color:"#0C4A6E" }}>3가지 차이</h2>
          </div>

          {/* F1: text + card */}
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-28">
            <div>
              <span className="inline-flex rounded-full px-3 py-1 mb-5 text-xs font-bold" style={{ background:"rgba(12,74,110,.1)", border:"1px solid rgba(12,74,110,.25)", color:"#075985" }}>01</span>
              <h3 className="text-3xl md:text-4xl font-bold leading-snug mb-4" style={{ color:"#0C4A6E" }}>국가별 맞춤<br />커리큘럼</h3>
              <p className="leading-relaxed mb-6" style={{ color:"rgba(12,74,110,.6)" }}>베트남, 에티오피아, 캄보디아 등 20개국 스터디 커리큘럼이 준비되어 있습니다. 4주 동안 해당 국가의 개발 현황·ODA 사례·현장 이슈를 한 권처럼 정리합니다.</p>
              <div className="rounded-2xl p-5" style={{ background:"rgba(255,255,255,.45)", border:"1px solid rgba(255,255,255,.7)", borderLeft:"3px solid #0EA5E9", backdropFilter:"blur(12px)" }}>
                <p className="text-sm leading-relaxed italic" style={{ color:"rgba(12,74,110,.7)" }}>"스터디 참여자 82%가 파견·지원서 작성에 직접 활용했다고 응답"</p>
              </div>
            </div>
            <div className="reveal d1 rounded-[1.75rem] p-[5px]" style={{ background:"rgba(255,255,255,.2)", border:"1px solid rgba(255,255,255,.65)", boxShadow:"0 12px 40px rgba(14,122,180,.1)" }}>
              <div className="rounded-[calc(1.75rem-5px)]" style={{ background:"rgba(255,255,255,.5)", border:"1px solid rgba(255,255,255,.8)", backdropFilter:"blur(20px)" }}>
                <img src="https://picsum.photos/seed/oda-map/560/220" alt="국가별 커리큘럼" width="560" height="220" className="w-full h-48 object-cover rounded-t-[calc(1.75rem-5px)]" loading="lazy" decoding="async" />
                <div className="p-5 space-y-2.5">
                  <p className="text-xs uppercase tracking-widest mb-3" style={{ color:"rgba(12,74,110,.4)" }}>주간 커리큘럼 구성</p>
                  {[["1주","국가 기본 현황 및 개발 지표 분석"],["2주","주요 ODA 사업 사례 연구"],["3주","현장 이슈 및 거버넌스 분석"],["4주","지원서·면접 연계 발표 및 피드백"]].map(([w,t])=>(
                    <div key={w} className="flex items-center gap-3">
                      <span className="text-xs font-mono px-2 py-0.5 rounded shrink-0" style={{ color:"#075985", background:"rgba(12,74,110,.1)" }}>{w}</span>
                      <span className="text-sm" style={{ color:"rgba(12,74,110,.7)" }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* F2: card + text */}
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-28">
            <div className="order-2 lg:order-1 reveal d1 rounded-[1.75rem] p-[5px]" style={{ background:"rgba(255,255,255,.2)", border:"1px solid rgba(255,255,255,.65)", boxShadow:"0 12px 40px rgba(14,122,180,.1)" }}>
              <div className="rounded-[calc(1.75rem-5px)] p-6" style={{ background:"rgba(255,255,255,.5)", border:"1px solid rgba(255,255,255,.8)", backdropFilter:"blur(20px)" }}>
                <p className="text-xs uppercase tracking-widest mb-5" style={{ color:"rgba(12,74,110,.4)" }}>일반 강의 vs ODA 스터디</p>
                {([["완주율","91% vs 15%","91%","1"],["실질 활용률","82%","82%",".75"],["참여자 만족도","4.87 / 5.0","97%",".5"]] as const).map(([label,val,w,op])=>(
                  <div key={label} className="mb-4">
                    <div className="flex justify-between text-xs mb-1.5" style={{ color:"rgba(12,74,110,.55)" }}>
                      <span>{label}</span><span className="font-bold" style={{ color:"#075985" }}>{val}</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background:"rgba(12,74,110,.08)" }}>
                      <div className="h-full rounded-full" style={{ width:w, background:`rgba(14,122,180,${op})`, transition:"width .6s cubic-bezier(.16,1,.3,1)" }} />
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-3 mt-5 pt-5" style={{ borderTop:"1px solid rgba(12,74,110,.1)" }}>
                  <div className="flex -space-x-2">
                    {["b1","b2","b3"].map(u=>(
                      <img key={u} src={`https://i.pravatar.cc/28?u=${u}`} alt="" width="28" height="28" className="w-7 h-7 rounded-full object-cover" style={{ border:"2px solid rgba(255,255,255,.8)" }} loading="lazy" decoding="async" />
                    ))}
                  </div>
                  <p className="text-xs" style={{ color:"rgba(12,74,110,.48)" }}>이번 달 47명 참여 중</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-flex rounded-full px-3 py-1 mb-5 text-xs font-bold" style={{ background:"rgba(12,74,110,.1)", border:"1px solid rgba(12,74,110,.25)", color:"#075985" }}>02</span>
              <h3 className="text-3xl md:text-4xl font-bold leading-snug mb-4" style={{ color:"#0C4A6E" }}>4–6인 소규모<br />밀착 운영</h3>
              <p className="leading-relaxed mb-6" style={{ color:"rgba(12,74,110,.6)" }}>대규모 강의가 아닙니다. 4–6명이 매주 90분, 4회 모입니다. 발표·토론·피드백이 한 세션 안에 모두 이루어집니다.</p>
              <div className="rounded-2xl p-5" style={{ background:"rgba(255,255,255,.45)", border:"1px solid rgba(255,255,255,.7)", borderLeft:"3px solid #0EA5E9", backdropFilter:"blur(12px)" }}>
                <p className="text-sm leading-relaxed italic" style={{ color:"rgba(12,74,110,.7)" }}>"완주율 91% — 일반 온라인 강의 완주율(15%)의 6배"</p>
              </div>
            </div>
          </div>

          {/* F3: text + card */}
          <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-flex rounded-full px-3 py-1 mb-5 text-xs font-bold" style={{ background:"rgba(12,74,110,.1)", border:"1px solid rgba(12,74,110,.25)", color:"#075985" }}>03</span>
              <h3 className="text-3xl md:text-4xl font-bold leading-snug mb-4" style={{ color:"#0C4A6E" }}>KOICA·국제기구<br />대비 실전 자료</h3>
              <p className="leading-relaxed mb-6" style={{ color:"rgba(12,74,110,.6)" }}>단순 정보 공유로 끝나지 않습니다. 면접 예상 질문, 자기소개서 키워드, 분야별 핵심 레퍼런스를 스터디 종료 후 PDF로 제공합니다.</p>
              <div className="rounded-2xl p-5" style={{ background:"rgba(255,255,255,.45)", border:"1px solid rgba(255,255,255,.7)", borderLeft:"3px solid #0EA5E9", backdropFilter:"blur(12px)" }}>
                <p className="text-sm leading-relaxed italic" style={{ color:"rgba(12,74,110,.7)" }}>"참여자 중 KOICA 봉사단·국제기구 지원 합격자 연간 34명 배출"</p>
              </div>
            </div>
            <div className="reveal d1 rounded-[1.75rem] p-[5px]" style={{ background:"rgba(255,255,255,.2)", border:"1px solid rgba(255,255,255,.65)", boxShadow:"0 12px 40px rgba(14,122,180,.1)" }}>
              <div className="rounded-[calc(1.75rem-5px)] p-6" style={{ background:"rgba(255,255,255,.5)", border:"1px solid rgba(255,255,255,.8)", backdropFilter:"blur(20px)" }}>
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color:"rgba(12,74,110,.4)" }}>스터디 종료 후 제공 자료</p>
                {[
                  ["solar:document-add-linear","면접 예상 질문 30선","국가·분야별 맞춤 정리 PDF", true],
                  ["solar:pen-linear","자기소개서 키워드 가이드","합격자 패턴 분석 기반", false],
                  ["solar:library-linear","핵심 레퍼런스 아카이브","분야별 필독 보고서·논문 링크", false],
                ].map(([icon,title,sub,primary])=>(
                  <div key={title as string} className="flex items-center gap-3 p-3 rounded-xl mb-3"
                    style={{ border:"1px solid rgba(12,74,110,.1)", background:"rgba(255,255,255,.35)" }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background:primary?"rgba(12,74,110,.1)":"rgba(255,255,255,.5)", border:`1px solid rgba(12,74,110,${primary?.2:.12})` }}>
                      <iconify-icon icon={icon as string} style={{ color:primary?"#075985":"rgba(12,74,110,.45)" }} width="17" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color:"#0C4A6E" }}>{title as string}</p>
                      <p className="text-xs" style={{ color:"rgba(12,74,110,.45)" }}>{sub as string}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ TESTIMONIALS ════ */}
      <section id="testimonials" className="relative z-10 py-24 md:py-32 px-4 sm:px-6 lg:px-8" style={{ borderTop:"1px solid rgba(255,255,255,.4)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-5 text-xs font-bold tracking-[.14em] uppercase"
              style={{ border:"1px solid rgba(12,74,110,.18)", color:"rgba(12,74,110,.5)", background:"rgba(255,255,255,.35)", backdropFilter:"blur(8px)" }}>
              <iconify-icon icon="solar:chat-round-dots-linear" width="12" /> 참여자 후기
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-snug" style={{ color:"#0C4A6E" }}>함께했던 분들의 이야기</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
            <div className="reveal d1 rounded-[1.75rem] p-[5px]" style={{ background:"rgba(255,255,255,.2)", border:"1px solid rgba(255,255,255,.65)" }}>
              <div className="rounded-[calc(1.75rem-5px)] p-7" style={{ background:"rgba(255,255,255,.52)", border:"1px solid rgba(255,255,255,.82)", backdropFilter:"blur(22px)" }}>
                <iconify-icon icon="solar:quote-up-bold" style={{ color:"#0EA5E9", opacity:.5, display:"block", marginBottom:"1rem" }} width="28" />
                <blockquote className="leading-relaxed mb-6" style={{ color:"rgba(12,74,110,.7)" }}>
                  "스터디 전까지는 에티오피아 하면 아프리카, 그 이상을 몰랐어요. 4주 동안 농업 ODA 사례부터 현지 거버넌스 구조까지 공부하고 나니 면접에서 구체적인 숫자와 사례를 자연스럽게 말할 수 있었습니다. 최종 합격 통보 받고 제일 먼저 스터디 단톡방에 알렸어요."
                </blockquote>
                <div className="flex items-center gap-3 pt-5" style={{ borderTop:"1px solid rgba(12,74,110,.1)" }}>
                  <img src="https://i.pravatar.cc/48?u=kimsoohyun" alt="김수현" width="48" height="48" className="w-12 h-12 rounded-full object-cover" loading="lazy" decoding="async" />
                  <div className="flex-1">
                    <p className="text-sm font-bold" style={{ color:"#0C4A6E" }}>김수현</p>
                    <p className="text-xs" style={{ color:"rgba(12,74,110,.45)" }}>KOICA 해외봉사단 24기 · 교육 분야 · 에티오피아 파견</p>
                  </div>
                  <span className="rounded-full px-2.5 py-1 text-xs font-bold text-white shrink-0" style={{ background:"#0C4A6E" }}>최종 합격</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="reveal d2 rounded-[1.75rem] p-[5px]" style={{ background:"rgba(255,255,255,.2)", border:"1px solid rgba(255,255,255,.65)" }}>
                <div className="rounded-[calc(1.75rem-5px)] p-7" style={{ background:"rgba(255,255,255,.52)", border:"1px solid rgba(255,255,255,.82)", backdropFilter:"blur(22px)" }}>
                  <iconify-icon icon="solar:quote-up-bold" style={{ color:"#0EA5E9", opacity:.5, display:"block", marginBottom:"1rem" }} width="28" />
                  <blockquote className="text-sm leading-relaxed mb-6" style={{ color:"rgba(12,74,110,.7)" }}>
                    "NGO에서 5년 일하면서도 국가 맥락을 깊게 공부할 시간이 없었어요. 캄보디아 스터디에서 World Bank 보고서를 같이 읽고 토론하는 게 처음엔 낯설었는데, 4주 지나고 나니 업무 보고서 퀄리티가 확 달라졌다는 피드백을 받았습니다."
                  </blockquote>
                  <div className="flex items-center gap-3 pt-5" style={{ borderTop:"1px solid rgba(12,74,110,.1)" }}>
                    <img src="https://i.pravatar.cc/48?u=parkjunhyeok" alt="박준혁" width="48" height="48" className="w-12 h-12 rounded-full object-cover" loading="lazy" decoding="async" />
                    <div>
                      <p className="text-sm font-bold" style={{ color:"#0C4A6E" }}>박준혁</p>
                      <p className="text-xs" style={{ color:"rgba(12,74,110,.45)" }}>국제개발 NGO 현장 담당자 · 경력 5년</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reveal d3 rounded-[1.75rem] p-7 text-center"
                style={{ background:"rgba(255,255,255,.42)", border:"1px solid rgba(14,165,233,.3)", backdropFilter:"blur(22px)" }}>
                <p className="text-5xl font-bold tracking-tight" style={{ color:"#075985" }}>4.87</p>
                <p className="text-sm mt-1" style={{ color:"rgba(12,74,110,.52)" }}>/ 5.0 참여자 만족도</p>
                <div className="flex justify-center gap-1 mt-3">
                  {[0,1,2,3].map(i=><iconify-icon key={i} icon="solar:star-bold" style={{ color:"#F59E0B" }} width="18" />)}
                  <iconify-icon icon="solar:star-bold" style={{ color:"#F59E0B", opacity:.4 }} width="18" />
                </div>
                <p className="text-xs mt-3" style={{ color:"rgba(12,74,110,.38)" }}>2024년 전체 스터디 참여자 기준</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ CTA ════ */}
      <section id="cta" className="relative z-10 py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ borderTop:"1px solid rgba(255,255,255,.4)", background:"rgba(255,255,255,.28)", backdropFilter:"blur(8px)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ background:"radial-gradient(circle,rgba(255,255,255,.5),transparent 70%)" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="reveal inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-bold tracking-[.15em] uppercase"
            style={{ background:"rgba(12,74,110,.1)", border:"1px solid rgba(12,74,110,.25)", color:"#075985" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{ background:"#0EA5E9" }} />
            5월 31일 이전 신청 시 30% 할인 적용
          </div>
          <h2 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold leading-snug mb-6 d1" style={{ color:"#0C4A6E" }}>
            다음 기수, 지금 신청하면<br />
            <span style={{ background:"linear-gradient(90deg,#0C4A6E,#0EA5E9,#0C4A6E)", backgroundSize:"200% auto", WebkitBackgroundClip:"text", backgroundClip:"text", WebkitTextFillColor:"transparent", animation:"shimmer 3s linear infinite" }}>
              얼마나 다를까요?
            </span>
          </h2>
          <p className="reveal text-lg leading-relaxed max-w-[44ch] mx-auto mb-8 d2" style={{ color:"rgba(12,74,110,.6)" }}>
            4주 뒤, 지원서에 국가명 하나를 더 구체적으로 쓸 수 있습니다.<br />
            정원은 스터디당 6명, 현재 일부 국가 스터디는 <strong style={{ color:"#0C4A6E" }}>3자리 남았습니다.</strong>
          </p>
          <div className="reveal flex flex-col sm:flex-row gap-3 justify-center mb-10 d3">
            <a href="#" className="rounded-full px-8 py-4 text-base font-bold flex items-center gap-2 justify-center"
              style={{ background:"linear-gradient(135deg,#0C4A6E,#075985)", color:"#fff", boxShadow:"0 4px 24px rgba(12,74,110,.28)", transition:T }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="scale(1.03)"; e.currentTarget.style.boxShadow="0 8px 40px rgba(12,74,110,.4)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow="0 4px 24px rgba(12,74,110,.28)"; }}>
              <iconify-icon icon="solar:global-linear" width="18" /> 모집 중인 국가 스터디 확인하기
            </a>
            <a href="#features" className="rounded-full px-8 py-4 text-base font-semibold flex items-center gap-2 justify-center"
              style={{ border:"1px solid rgba(12,74,110,.25)", color:"rgba(12,74,110,.72)", background:"rgba(255,255,255,.45)", backdropFilter:"blur(12px)", transition:T }}
              onMouseEnter={e=>{ e.currentTarget.style.background="rgba(255,255,255,.65)"; e.currentTarget.style.transform="scale(1.02)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.background="rgba(255,255,255,.45)"; e.currentTarget.style.transform="scale(1)"; }}>
              샘플 커리큘럼 보기 <iconify-icon icon="solar:arrow-right-linear" width="18" />
            </a>
          </div>
          <div className="reveal flex flex-wrap justify-center gap-5 d4">
            {([["solar:shield-check-linear","개설 취소 시 전액 환불"],["solar:shield-check-linear","첫 회 미만족 시 환불 보장"],["solar:chat-round-line-linear","카카오톡 24시간 문의 가능"]] as const).map(([icon,text])=>(
              <span key={text} className="flex items-center gap-1.5 text-sm" style={{ color:"rgba(12,74,110,.5)" }}>
                <iconify-icon icon={icon} style={{ color:"#0EA5E9" }} width="16" /> {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════ FOOTER ════ */}
      <footer className="relative z-10 py-10 px-4 sm:px-6 lg:px-8"
        style={{ borderTop:"1px solid rgba(255,255,255,.4)", background:"rgba(255,255,255,.2)", backdropFilter:"blur(12px)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background:"rgba(12,74,110,.1)", border:"1px solid rgba(12,74,110,.2)" }}>
              <iconify-icon icon="solar:global-linear" style={{ color:"#075985" }} width="16" />
            </div>
            <span className="text-sm font-bold" style={{ color:"rgba(12,74,110,.7)" }}>ODA 스터디</span>
          </div>
          <div className="flex items-center gap-6">
            {["이용약관","개인정보처리방침","스터디 소개","문의하기"].map(t=>(
              <a key={t} href="#" className="text-xs font-medium" style={{ color:"rgba(12,74,110,.48)", transition:T }}
                onMouseEnter={e=>e.currentTarget.style.color="rgba(12,74,110,.85)"}
                onMouseLeave={e=>e.currentTarget.style.color="rgba(12,74,110,.48)"}>{t}</a>
            ))}
          </div>
          <p className="text-xs" style={{ color:"rgba(12,74,110,.32)" }}>© 2025 ODA 스터디. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
