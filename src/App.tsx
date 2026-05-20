import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, EyeOff, Lock, LockOpen } from 'lucide-react';
import { BE, kE, GE, qE, Cl, sy, Tc, Ac, npcData } from './data';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

// Custom ci component
function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-12 md:mb-16 text-center">
      <h2 className="text-3xl md:text-5xl font-title text-lantern drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)] flex items-center justify-center gap-4">
        {title}
      </h2>
      <p className="mt-4 text-ghost/70 font-body text-lg md:text-xl tracking-wider">{subtitle}</p>
      <div className="mt-6 h-px bg-gradient-to-r from-transparent via-lantern/30 to-transparent mx-auto w-1/2"></div>
    </div>
  );
}

function BgComponent() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-bg-dark">
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
      <motion.div
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute inset-y-0 w-[200vw] left-0 pointer-events-none opacity-30 mix-blend-screen"
        style={{
          background: "radial-gradient(ellipse at center, rgba(122, 139, 139, 0.4) 0%, transparent 70%)",
          backgroundSize: "50% 100%",
          backgroundRepeat: "repeat-x"
        }}
      />
      <motion.div
        animate={{ x: ["-100%", "0%"] }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        className="absolute inset-y-0 w-[200vw] left-0 pointer-events-none opacity-20 mix-blend-screen"
        style={{
          background: "radial-gradient(circle calc(50vw + 200px) at 50% 50%, rgba(10, 37, 43, 0.5) 0%, transparent 100%)",
          backgroundSize: "50% 100%",
          backgroundRepeat: "repeat-x"
        }}
      />
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-mist opacity-10 blur-[100px]"></div>
    </div>
  );
}

function Hero() {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const text = "은면리에 흘러든 가짜 무당. 이름도, 얼굴도, 진실도 숨긴 마을에서 당신은 낯병의 저주를 파헤치거나, 사랑하거나, 도망치거나, 타락하거나, 구원해야 한다.";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTyped(text.substring(0, index));
      index++;
      if (index > text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor(prev => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-dark/50 to-bg-dark z-[-1] pointer-events-none"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="mb-8 relative"
      >
        <div className="absolute inset-0 bg-lantern opacity-10 blur-[100px] rounded-full"></div>
        <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-black text-ghost opacity-90 drop-shadow-2xl font-title tracking-widest relative z-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-ghost to-ghost/20">銀面里</span>
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-talisman mt-4 font-body tracking-[0.2em] uppercase text-sm md:text-lg drop-shadow-md"
        >
          흑사포를 벗기는 것이 고백이고, 이름을 기억하는 것이 구원인 마을
        </motion.p>
      </motion.div>
      <div className="max-w-2xl mt-12 bg-ink/60 border border-mist/20 p-6 md:p-8 rounded-sm backdrop-blur-sm relative shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mist/50 to-transparent"></div>
        <p className="text-ghost/80 text-sm md:text-base leading-relaxed md:leading-loose font-body text-left whitespace-pre-wrap min-h-[4rem]">
          {typed}
          <span className={cn("inline-block w-2 md:w-3 h-4 md:h-5 bg-lantern align-middle ml-1", showCursor ? "opacity-100" : "opacity-0")}></span>
        </p>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
      <SectionHeader title="스토리 개요" subtitle="가면 속에 가려진 진실의 조각들" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {BE.map((i, l) => (
          <motion.div
            key={l}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: l * 0.1 }}
            className="p-8 border border-ghost/10 bg-ink rounded-sm flex flex-col gap-4 group hover:border-ghost/30 transition-colors relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 blur-3xl opacity-10 bg-current transition-opacity group-hover:opacity-20 ${i.color.replace("border", "text")}`}></div>
            <div className="flex items-center gap-4 relative z-10">
              <span className="text-xl md:text-3xl opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-md">{i.icon}</span>
              <h3 className="text-xl font-title text-ghost uppercase tracking-widest">{i.title}</h3>
            </div>
            <p className="text-ghost/80 text-sm md:text-base leading-relaxed font-body font-light relative z-10 mt-2">{i.desc}</p>
            <div className="absolute top-0 right-0 p-4 opacity-5 font-title text-5xl select-none pointer-events-none">
              {["巫", "里", "病", "井"][l]}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Rules() {
  return (
    <section id="rules" className="py-24 px-6 sm:px-12 max-w-5xl mx-auto relative z-10">
      <SectionHeader title="은면리의 금기" subtitle="살아남기 위해 새겨야 할 다섯 가지 규칙" />
      <div className="mt-16 mx-auto relative max-w-3xl">
        <div className="absolute inset-0 bg-bg-paper-dark opacity-10 blur-xl rounded-full"></div>
        <div className="relative bg-ink/80 backdrop-blur-md border border-talisman/20 p-8 md:p-12 rounded-sm shadow-[0_0_30px_rgba(10,17,18,0.5)]">
          <div className="absolute top-0 left-[-20px] right-[-20px] h-3 bg-wood border border-ghost/10 shadow-md z-10"></div>
          <div className="absolute bottom-0 left-[-20px] right-[-20px] h-3 bg-wood border border-ghost/10 shadow-md z-10"></div>
          <ul className="space-y-6 font-body">
            {kE.map((i, l) => (
              <motion.li
                key={l}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: l * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="text-talisman text-xl font-title shrink-0">禁</span>
                <span className="text-ghost/90 text-lg leading-relaxed">{i}</span>
              </motion.li>
            ))}
          </ul>
          <div className="absolute bottom-4 right-8 opacity-20">
            <span className="font-title text-5xl text-talisman">印</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Commands() {
  return (
    <section id="commands" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
      <SectionHeader title="명령어 안내" subtitle="신을 가장하기 위해 뱉어야 할 말들" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {GE.map((i, l) => (
          <motion.div
            key={l}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="bg-talisman/10 border border-talisman/30 p-6 rounded-sm relative group"
          >
            <div className="absolute -top-1 -right-1 w-8 h-8 bg-talisman opacity-20 blur-xl transition-opacity group-hover:opacity-40"></div>
            <div className="relative z-10">
              <h3 className="text-talisman text-xs mb-4 uppercase tracking-widest">Command Talismans</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-talisman/20 pb-2">
                  <span className="text-sm font-bold">
                    {i.cmd} <span className="text-[10px] font-normal opacity-60">[{i.risk}]</span>
                  </span>
                  <span className="text-[10px] bg-talisman/20 px-2 py-0.5 rounded text-talisman uppercase tracking-widest">{i.tag}</span>
                </div>
              </div>
              <p className="text-ghost/80 text-sm mt-4 min-h-[3rem] font-body font-light">{i.func}</p>
              <div className="mt-6 bg-ghost text-ink p-2 text-[10px] font-mono tracking-widest">
                EXAMPLE: {i.ex}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Status() {
  return (
    <section id="status" className="py-24 px-6 sm:px-12 max-w-5xl mx-auto relative z-10">
      <SectionHeader title="진행 수치" subtitle="당신의 생존을 결정짓는 보이지 않는 저울" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-16">
        {qE.map((i, l) => (
          <motion.div
            key={l}
            initial={{ opacity: 0, x: l % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex justify-between text-xs mb-2">
              <span className="font-title tracking-widest text-ghost">{i.name}</span>
              <span className="font-mono text-ghost/50">{i.value}%</span>
            </div>
            <div className="w-full bg-ghost/10 h-1 relative">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${i.value}%` }}
                transition={{ duration: 1, delay: 0.2 + l * 0.1 }}
                className={cn("h-full", i.color)}
              />
            </div>
            <p className="text-ghost/60 text-[11px] mt-4 leading-relaxed font-body">{i.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Calendar() {
  const [i, l] = useState(2);
  return (
    <section id="calendar" className="py-24 px-6 sm:px-12 max-w-5xl mx-auto relative z-10 transition-colors duration-1000">
      <div className={cn("absolute inset-0 -z-10 blur-3xl opacity-10 transition-colors duration-1000", i === 2 ? "bg-lantern" : i === 4 ? "bg-black" : i === 3 ? "bg-talisman" : "bg-blue-900")}></div>
      <SectionHeader title="은면리 절기" subtitle="한 달 29일, 달의 위상에 따라 변하는 저주" />
      <p className="text-center text-ghost/50 text-sm -mt-10 mb-8 font-title tracking-wider">달을 클릭해서 확인하세요</p>
      <div className="flex flex-col md:flex-row gap-12 items-center mt-16">
        <div className="relative w-64 h-64 shrink-0 flex items-center justify-center border-2 border-lantern/20 rounded-full">
          {Cl.map((s, o) => {
            const c = o * (360 / Cl.length) - 90;
            const d = Math.cos(c * Math.PI / 180) * 128;
            const f = Math.sin(c * Math.PI / 180) * 128;
            return (
              <button
                key={o}
                onClick={() => l(o)}
                className={cn("absolute text-4xl transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-125 focus:outline-none", i === o ? "scale-125 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] filter" : "opacity-50 grayscale")}
                style={{ left: `calc(50% + ${d}px)`, top: `calc(50% + ${f}px)` }}
                aria-label={s.name}
              >
                {s.icon}
              </button>
            );
          })}
          <div className="text-center">
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className={cn("text-2xl font-title font-bold", Cl[i].theme)}
            >
              {Cl[i].name}
            </motion.div>
          </div>
        </div>
        <div className="flex-1 bg-ink/60 border border-mist/30 p-8 rounded-sm backdrop-blur-sm min-h-[200px] flex items-center">
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-ghost/80 text-lg leading-relaxed font-body"
          >
            {Cl[i].desc}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function MapComp() {
  const [i, l] = useState(sy[0]);
  return (
    <section id="map" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
      <SectionHeader title="은면리 지도" subtitle="안개 속에 숨겨진 금기의 구역들" />
      <p className="text-center text-ghost/50 text-sm -mt-10 mb-8 font-title tracking-wider">지명을 클릭하여 상세설명을 확인하세요</p>
      <div className="flex flex-col lg:flex-row gap-8 mt-12 bg-ink-light/20 p-4 md:p-8 border border-mist/20 rounded-sm">
        <div className="w-full lg:w-2/3 relative aspect-square md:aspect-video bg-[url('https://i.postimg.cc/sXLt5SFy/12121.png')] bg-cover bg-center border border-ghost/10 overflow-hidden rounded-sm">
          <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute w-64 h-64 bg-mist/20 blur-[80px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          {sy.map(s => (
            <button
              key={s.id}
              onClick={() => l(s)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
              style={{ left: `${s.x}%`, top: `${s.y}%` }}
            >
              <div className={cn("w-3 h-3 md:w-4 md:h-4 rounded-full border-2 transition-all duration-300", i.id === s.id ? "bg-lantern border-white shadow-[0_0_15px_#E6AF2E] scale-125" : "bg-ink border-ghost/40 group-hover:border-ghost group-hover:scale-110")}></div>
              <span className={cn("absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] md:text-xs font-title tracking-widest transition-all drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]", i.id === s.id ? "text-lantern font-bold drop-shadow-md" : "text-ghost/90 group-hover:text-white")}>
                {s.name}
              </span>
              {i.id === s.id && (
                <motion.div layoutId="map-ping" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-lantern/50 pointer-events-none" animate={{ scale: [1, 2], opacity: [0.8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
              )}
            </button>
          ))}
        </div>
        <div className="w-full lg:w-1/3">
          <AnimatePresence mode="wait">
            <motion.div
              key={i.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-bg-dark border border-mist/30 p-6 md:p-8 h-full flex flex-col relative overflow-hidden"
            >
              {i.isFoggy && <div className="absolute inset-0 bg-mist opacity-10 blur-xl"></div>}
              <div className="relative z-10 flex-grow border-b border-mist/20 pb-6 mb-6">
                <h3 className="text-2xl font-title text-lantern tracking-widest mb-2">{i.name}</h3>
                <p className="text-[10px] uppercase tracking-widest text-ghost/50 mb-4 inline-flex items-center gap-2 border border-ghost/10 px-2 py-1 bg-black/40">
                  <span className={cn("w-1.5 h-1.5 rounded-full", i.risk === "극상" || i.risk === "최고조" ? "bg-red-500" : i.risk === "높음" ? "bg-orange-500" : i.risk === "중간" ? "bg-yellow-500" : "bg-green-500")}></span>
                  위험도: {i.risk}
                </p>
                <p className="text-ghost/90 text-sm leading-relaxed mb-6 font-body">{i.desc}</p>
              </div>
              <div className="relative z-10 space-y-4 text-xs font-body">
                <div>
                  <span className="text-mist block mb-1 uppercase tracking-wider text-[10px]">주요 인물</span>
                  <span className="text-ghost">{i.npc}</span>
                </div>
                <div>
                  <span className="text-mist block mb-1 uppercase tracking-wider text-[10px]">추천 명령어</span>
                  <div className="flex flex-wrap gap-2">
                    {i.cmds.map((c: string, idx: number) => (
                      <span key={idx} className="bg-ghost/10 text-ghost px-2 py-1 font-mono text-[10px]">{c}</span>
                    ))}
                  </div>
                </div>
                {i.hasSecret && (
                  <div className="mt-4 border border-lantern/30 bg-lantern/10 p-3 rounded-sm">
                    <span className="text-lantern font-title tracking-widest text-xs flex items-center gap-2">
                      <LockOpen size={12} />
                      비밀을 풀 수 있는 단서 획득 가능
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Characters() {
  const [i, l] = useState(Tc.reduce((d, f) => ({ ...d, [f.id]: true }), {} as Record<string, boolean>));
  const [s, o] = useState(false);
  
  useEffect(() => {
    Tc.forEach((d: any) => {
      if (d.imgUrlVeiled) { const img = new Image(); img.src = d.imgUrlVeiled; }
      if (d.imgUrlUnveiled) { const img = new Image(); img.src = d.imgUrlUnveiled; }
    });
  }, []);

  const c = Object.keys(i).length > 0 ? (d: string) => l(f => ({ ...f, [d]: !f[d] })) : () => {};

  return (
    <section id="characters" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto relative z-10">
      <SectionHeader title="인물 도감" subtitle="흑사포 뒤에 숨겨진 진실들" />
      <p className="text-center text-talisman text-sm -mt-10 mb-12 font-title tracking-wider">'VEIL ON'을 클릭하면 실제 얼굴과 실명이 스포되니 주의해주세요</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        {Tc.map((d: any) => {
          if (d.moonOnly && !s) {
            return (
              <motion.div key={d.id} className="p-3 bg-black/60 border border-dashed border-ghost/20 rounded-sm relative min-h-[400px] flex flex-col items-center justify-center group hover:border-ghost/40 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm text-xs tracking-widest text-talisman uppercase">LOCKED: 그믐밤 한정</div>
                <span className="text-4xl opacity-20 filter blur-sm">🐺</span>
                <h4 className="text-sm font-bold opacity-20 mt-4">{d.namePublic}</h4>
                <button onClick={() => o(true)} className="absolute bottom-6 px-4 py-2 border border-talisman/40 text-talisman text-[10px] hover:bg-talisman/10 flex items-center gap-2 uppercase tracking-widest z-10">
                  <LockOpen size={12} /> 강제 해금
                </button>
              </motion.div>
            );
          }
          const f = d.noVeil ? false : i[d.id];
          return (
            <motion.div key={d.id} className="bg-bg-dark border border-ghost/20 rounded-sm group hover:border-lantern transition-colors flex flex-col relative" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="p-4 border-b border-ghost/10 flex justify-between items-start bg-bg-dark/40">
                <div>
                  <h3 className="text-lg font-bold text-lantern flex items-center gap-2">
                    {d.namePublic}
                    <span className="text-[10px] text-ghost/60 uppercase tracking-wider font-normal">[{d.risk}]</span>
                  </h3>
                  <p className="text-[10px] opacity-60 text-ghost mt-1">{d.role}</p>
                </div>
                {!d.noVeil && (
                  <button onClick={() => c(d.id)} className={cn("px-2 py-1 text-[10px] uppercase border transition-colors flex items-center gap-1", f ? "border-ghost/40 text-ghost/40 hover:text-ghost hover:border-ghost" : "border-talisman text-talisman hover:bg-talisman/10")}>
                    {f ? <EyeOff size={10} /> : <Eye size={10} />}
                    {f ? "Veil On" : "Veil Off"}
                  </button>
                )}
              </div>
              <div className="flex flex-col md:flex-row flex-grow">
                <div className="w-full md:w-1/3 min-h-[300px] relative border-b md:border-b-0 md:border-r border-ghost/10 bg-black flex items-center justify-center overflow-hidden">
                  <motion.div initial={{ opacity: f ? 1 : 0 }} animate={{ opacity: f ? 1 : 0 }} transition={{ duration: 0.3 }} className="absolute inset-0 text-center text-ghost w-full h-full flex flex-col items-center justify-center pointer-events-none" style={{ zIndex: f ? 2 : 1 }}>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.05)_0%,_transparent_50%)] z-10 pointer-events-none"></div>
                    {d.imgUrlVeiled ? (
                      <img src={d.imgUrlVeiled} alt="veiled" decoding="async" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover object-top opacity-100" />
                    ) : (
                      <>
                        <div className="w-16 h-24 bg-bg-dark border border-mist/30 rounded-t-full relative shadow-[0_10px_20px_rgba(0,0,0,0.8)] z-10">
                          <div className="absolute top-4 left-0 right-0 h-1 bg-black/80 shadow-md"></div>
                        </div>
                        <p className="mt-4 font-title text-[10px] opacity-50 tracking-widest uppercase relative z-10">Veiled</p>
                      </>
                    )}
                  </motion.div>
                  <motion.div initial={{ opacity: f ? 0 : 1 }} animate={{ opacity: f ? 0 : 1 }} transition={{ duration: 0.3 }} className="absolute inset-0 text-center text-ghost w-full h-full flex flex-col items-center justify-center pointer-events-none" style={{ zIndex: f ? 1 : 2 }}>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(226,175,46,0.1)_0%,_transparent_70%)] z-10 pointer-events-none"></div>
                    {d.imgUrlUnveiled ? (
                      <img src={d.imgUrlUnveiled} alt="unveiled" decoding="async" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top opacity-100 drop-shadow-[0_0_15px_rgba(212,175,55,0.15)]" />
                    ) : (
                      <>
                        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-bg-paper-dark to-wood shadow-[0_0_20px_rgba(226,175,46,0.2)] z-10"></div>
                        <p className="mt-4 font-title text-lantern text-[10px] tracking-widest relative z-10 shadow-black drop-shadow-md bg-black/60 px-2 py-1 rounded">{d.nameReal}</p>
                      </>
                    )}
                  </motion.div>
                </div>
                <div className="p-5 space-y-4 w-full md:w-2/3 bg-transparent">
                  <p className="text-[11px] leading-tight text-ghost/80 italic border-l border-talisman pl-3 mb-4">“{d.quote}”</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-[10px] md:text-sm">
                    <div className="col-span-2">
                       <span className="text-mist block mb-1 uppercase tracking-wider text-[10px]">Real Name</span>
                      {f ? <span className="bg-black/50 text-transparent select-none blur-[4px] inline-block px-1">LOCKED_DATA</span> : <span className="text-talisman font-bold inline-block px-1 text-xs">{d.nameReal}</span>}
                    </div>
                    <div className="col-span-2">
                      <span className="text-mist block mb-1 uppercase tracking-wider text-[10px]">Keywords</span>
                      <span className="text-ghost/90 text-[11px]">{d.keywords}</span>
                    </div>
                    <div className="col-span-2 border-t border-ghost/10 pt-2 mt-2">
                      <span className="text-mist block mb-1 uppercase tracking-wider text-[10px]">Traits</span>
                      <span className="text-ghost/70 italic bg-ink p-1 inline-block rounded text-[11px] whitespace-pre-wrap">{d.comicPoint}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <div className="mt-24">
        <h3 className="text-2xl font-title text-lantern text-center mb-2 tracking-widest">일반 인물 (NPC)</h3>
        <p className="text-center text-ghost/60 text-sm mb-12">클릭하면 민낯을 확인할 수 있습니다.</p>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {npcData.map((npc, idx) => {
            const hasVeil = Boolean(npc.imgOff);
            // Reusing the veil state object if we want individual toggling, 
            // but the requirement didn't specify toggling for NPCs individually via the global state. Let's just use local component hovered state or a simple hover effect for veil off.
            // Actually, we can use the same state pattern `i[npc.name]` if we use `i` object from parent.
            // Oh wait, `i` is declared in Characters function scope. Let's just allow hover on the image to reveal.
            return (
              <div key={idx} className="bg-ink border border-ghost/20 rounded-sm group overflow-hidden flex flex-col items-center p-4">
                <div className="w-40 h-40 md:w-48 md:h-48 mb-4 rounded-full overflow-hidden border-2 border-ghost/10 relative group-hover:border-lantern/30 transition-colors bg-black">
                  {/* imgOn is always shown unless hovered and imgOff exists */}
                  {npc.imgOn && (
                    <img src={npc.imgOn} alt={npc.name} className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${hasVeil ? 'group-hover:opacity-0' : ''}`} />
                  )}
                  {hasVeil && npc.imgOff && (
                    <img src={npc.imgOff} alt={`${npc.name} unveiled`} className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </div>
                <h4 className="text-lantern font-bold text-sm mb-1">{npc.name}</h4>
                <p className="text-[10px] text-ghost/60 text-center">{npc.role}</p>
                {hasVeil && (
                  <span className="absolute top-2 right-2 text-[8px] text-talisman opacity-50 uppercase tracking-widest hidden lg:block group-hover:hidden">Hover to Unveil</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Dictionary() {
  const [i, l] = useState(Ac[0].name);
  return (
    <section id="dictionary" className="py-24 px-6 sm:px-12 max-w-6xl mx-auto relative z-10">
      <SectionHeader title="사전 (辭典)" subtitle="당신이 도달한 진실과 아직 감춰진 비밀" />
      <div className="flex flex-col md:flex-row gap-8 mt-12">
        <div className="w-full md:w-1/3 space-y-2">
          {Ac.map(s => (
            <button
              key={s.name}
              onClick={() => l(s.name)}
              className={cn("w-full text-left px-5 py-4 border transition-all flex justify-between items-center", i === s.name ? "bg-bg-paper-dark text-wood border-wood font-bold" : "bg-ink/40 text-ghost border-transparent hover:bg-ink/60 hover:border-ghost/20")}
            >
              <span className="font-title text-lg tracking-wide">{s.name}</span>
              {!s.isUnlocked && <Lock size={14} className="opacity-50" />}
            </button>
          ))}
        </div>
        <div className="w-full md:w-2/3">
          <AnimatePresence mode="wait">
            {Ac.map(s => s.name === i && (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="bg-ink border border-ghost/20 p-8 md:p-12 min-h-[400px] relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-bg-dark/80 to-transparent pointer-events-none"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-3xl md:text-5xl font-title text-lantern mb-8 pb-4 border-b border-ghost/20">{s.name}</h3>
                  <div className="space-y-8 font-body text-ghost/90 flex-grow">
                    <div>
                      <h4 className="text-[10px] text-ghost/60 tracking-widest mb-3 uppercase">Public Record</h4>
                      <p className="bg-bg-dark p-4 border border-ghost/10 text-sm leading-relaxed">{s.public}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] text-lantern/70 tracking-widest mb-3 uppercase">Suspected Clues</h4>
                      <p className="px-4 text-sm italic opacity-80 border-l-2 border-lantern/30">{s.clue}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] text-talisman tracking-widest mb-3 uppercase flex items-center gap-2">
                        {s.isUnlocked ? <LockOpen size={12} /> : <Lock size={12} />}
                        Locked Truth
                      </h4>
                      {s.isUnlocked ? (
                        <p className="bg-talisman/10 text-talisman p-4 border border-talisman/30 text-sm leading-relaxed">{s.secret}</p>
                      ) : (
                        <div className="bg-black/80 border border-dashed border-ghost/20 relative overflow-hidden flex items-center justify-center p-6 min-h-[80px]">
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm text-[10px] tracking-widest text-talisman uppercase">LOCKED_DATA</div>
                          <p className="opacity-10 blur-sm text-sm select-none">이 내용은 그믐밤 또는 단서 조사를 통해서만 밝혀집니다. 알면 다침.</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="pt-6 mt-8 border-t border-ghost/10 text-[10px] uppercase tracking-widest flex gap-8 opacity-60">
                    <span><strong className="text-ghost">Location /</strong> {s.places}</span>
                    <span><strong className="text-ghost">Entity /</strong> {s.chars}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="h-auto md:h-20 border-t border-ghost/10 bg-bg-dark px-6 md:px-8 py-6 md:py-0 flex flex-col md:flex-row items-center justify-between z-50 relative mt-20">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-start text-center md:text-left mb-6 md:mb-0">
        <div className="text-[10px]">
          <span className="text-talisman font-bold uppercase tracking-widest mr-2">금기 01.</span>
          <span className="text-ghost/80">흑사포는 태어날 때부터 죽을 때까지 착용한다.</span>
        </div>
        <div className="text-[10px]">
          <span className="text-talisman font-bold uppercase tracking-widest mr-2">금기 02.</span>
          <span className="text-ghost/80">실제 이름은 혼례자 외에 공개하지 않는다.</span>
        </div>
        <div className="text-[10px]">
          <span className="text-talisman font-bold uppercase tracking-widest mr-2">금기 03.</span>
          <span className="text-ghost/80">그믐밤에는 함부로 마을 밖을 돌아다녀서는 안된다.</span>
        </div>
      </div>
      <div className="text-center md:text-right">
        <p className="text-[10px] opacity-40 mb-1">이름을 잊은 자들이 우물 아래에서 부른다.</p>
        <p className="text-[10px] text-ghost italic tracking-widest">가면을 벗기는 것은 고백이고, 이름을 기억하는 것은 구원이다.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen pt-16">
      <BgComponent />
      
      <header className="fixed top-0 left-0 right-0 h-16 border-b border-ghost/20 flex items-center justify-between px-4 md:px-8 bg-bg-dark/80 backdrop-blur-sm z-50">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 md:w-10 md:h-10 border border-talisman rotate-45 flex items-center justify-center bg-ink">
            <span className="-rotate-45 text-talisman font-bold text-lg md:text-xl font-title">銀</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg md:text-xl tracking-widest font-bold text-ghost font-title">
              은면리 <span className="text-xs font-normal opacity-60 ml-2 font-body">| 銀面里</span>
            </h1>
            <p className="text-[10px] md:text-xs text-talisman mt-1 uppercase tracking-[0.2em] font-body block">낯병의 저주에 걸린 숨겨진 마을</p>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-ghost/5 border border-ghost/10 rounded-full text-[10px] md:text-xs">
            <span className="w-2 h-2 rounded-full bg-lantern shadow-[0_0_8px_#E6AF2E]"></span>
            <span className="font-title">보름 (Full Moon) : 저주가 약해짐</span>
          </div>
          <a
            href="https://crack.wrtn.ai/detail/6a04153e4a59cb34a2664f6a"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 md:px-4 md:py-1.5 border border-talisman text-talisman text-[10px] md:text-xs hover:bg-talisman hover:text-white transition-all uppercase tracking-widest"
          >
            구원하러 가기
          </a>
        </div>
      </header>

      <main className="relative z-10 font-body">
        <Hero />
        <Story />
        <Rules />
        <Commands />
        <Status />
        <Calendar />
        <MapComp />
        <Characters />
        <Dictionary />
        
        <div className="py-24 flex justify-center">
          <a
            href="https://crack.wrtn.ai/detail/6a04153e4a59cb34a2664f6a"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-6 bg-transparent border border-talisman/50 text-talisman font-title text-xl md:text-2xl tracking-widest overflow-hidden transition-all hover:border-talisman hover:shadow-[0_0_20px_rgba(139,37,30,0.4)]"
          >
            <span className="absolute inset-0 bg-talisman/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">구원하러 가기</span>
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
