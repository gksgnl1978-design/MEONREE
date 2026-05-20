import React, { useState, useEffect } from 'react';

export const BE = [{
    title: "가짜 무당",
    desc: "사용자는 은면리에 흘러든 가짜 무당. 처음에는 살아남기 위해 무당 행세를 하지만, 점점 진짜 저주의 중심으로 들어간다.",
    icon: "🎴",
    color: "border-lantern/30"
}, {
    title: "은면리 (銀面里)",
    desc: "외부와 단절된 저주마을. 과거 전국 낯병 환자들이 격리된 곳. 함부로 접근하는 자는 사형에 처한다.",
    icon: "🌫️",
    color: "border-mist/50"
}, {
    title: "낯병",
    desc: "얼굴, 이름, 기억을 잃어가는 병. 말기에는 죽은 자의 이름을 자칭하거나 죽음에 끌리는 행동을 보인다. 마을 사람들은 민낯과 이름을 들키면 영혼을 빼앗긴다고 믿는다.",
    icon: "🎭",
    color: "border-talisman/50"
}, {
    title: "월정 (月井)",
    desc: "보름달이 비치는 신성한 우물. 은면리 사람들은 월정의 물로 생활한다. 무당이 3년째 오지 않아 마을은 낯병을 두려워한다.",
    icon: "🌕",
    color: "border-lantern/50"
}];

export const kE = ["흑사포는 태어날 때부터 죽을 때까지 착용한다.", "실제 이름은 혼례자 외에는 공개하지 않는다.", "집 방문은 금기다.", "그믐밤에는 함부로 마을 밖을 돌아다녀서는 안된다.", "은면리에는 무당을 제외하고 흑사포를 쓰지 않은 사람은 출입할 수 없다."];

export const GE = [{
    cmd: "!신탁",
    func: "사용자가 신탁을 내린다. 마을의 반응, 소문, 신뢰도, 신의분노가 변화한다.",
    risk: "높음",
    ex: "!신탁",
    tag: "Oracle"
}, {
    cmd: "!조사",
    func: "장소, 인물, 물건, 소문을 조사한다. 의미 있는 단서를 얻는다.",
    risk: "중간",
    ex: "!조사(월정)",
    tag: "Investigate"
}, {
    cmd: "!흰재",
    func: "낯병, 저주, 흔적, 얼굴, 이름과 관련된 이상 징후를 확인한다.",
    risk: "높음",
    ex: "!흰재",
    tag: "Signs"
}, {
    cmd: "!거래",
    func: "정보, 물건, 이름, 기억, 약속, 거짓말, 신뢰 중 하나를 대가로 거래한다.",
    risk: "위험",
    ex: "!거래(묵사)",
    tag: "Trade"
}, {
    cmd: "!사전",
    func: "사용자가 현재까지 알게 된 정보만 정리한다. 미공개 진실은 보여주지 않는다.",
    risk: "낮음",
    ex: "!사전",
    tag: "Archive"
}, {
    cmd: "!이벤트",
    func: "현재 절기, 시간, 장소, 위험도에 맞는 사건이 발생한다.",
    risk: "랜덤",
    ex: "!이벤트",
    tag: "Event"
}, {
    cmd: "!절기",
    func: "다음 절기로 자연스럽게 이동한다",
    risk: "낮음",
    ex: "!절기",
    tag: "Phase"
}, {
    cmd: "!요약",
    func: "30턴이내의 내용을 장기기억에 추가할 수 있게 요약한다",
    risk: "낮음",
    ex: "!요약",
    tag: "Summary"
}, {
    cmd: "!점검",
    func: "전체적인 시스템을 점검한다.",
    risk: "낮음",
    ex: "!점검",
    tag: "Check"
}];

export const qE = [{
    name: "신뢰도",
    desc: "마을이 사용자를 무당으로 믿는 정도. 높으면 정보와 의뢰가 증가하지만, 너무 높으면 위험한 의식에 끌려갈 수 있다.",
    color: "bg-lantern",
    value: 65,
    icon: "🙏"
}, {
    name: "신의분노",
    desc: "금기, 거짓 신탁, 흰재, 산군 모독으로 상승한다. 높으면 밤 사건이 늘어난다.",
    color: "bg-talisman",
    value: 40,
    icon: "⚡"
}, {
    name: "낯병도",
    desc: "사용자가 낯병에 물드는 정도. 높으면 이름, 얼굴, 기억 이상이 증가한다.",
    color: "bg-mist",
    value: 25,
    icon: "🎭"
}, {
    name: "의심도",
    desc: "사용자가 가짜 무당임을 의심받는 정도. 높으면 감시, 추궁, 함정이 증가한다.",
    color: "bg-purple-900",
    value: 80,
    icon: "👁️"
}];

export const Cl = [{
    name: "초승 7일",
    desc: `흑사포 끈을 교체한다. 끈 색은 관계를 의미한다.
빨강=사랑, 초록=우정, 파랑=신뢰/스승, 흰색=그리움`,
    icon: "🌙",
    theme: "text-blue-200"
}, {
    name: "상현 7일",
    desc: "송문장, 청등사 방문. 소문, 약재, 관아 정보, 전국 낯병 단서를 얻는다.",
    icon: "🌓",
    theme: "text-blue-300"
}, {
    name: "보름 1일",
    desc: "저주가 약해진다. 혼례, 민낯, 우물조사, 고백이 가능하다.",
    icon: "🌕",
    theme: "text-lantern"
}, {
    name: "하현 7일",
    desc: "낯병이 심해진다. 환자 발생, 부적 교체, 신탁 요구, 위기 선택이 늘어난다.",
    icon: "🌗",
    theme: "text-talisman"
}, {
    name: "그믐 7일",
    desc: "밤외출 금지. 산군 조우, 소지제, 죽은 자의 목소리, 우물 아래 진실에 접근한다.",
    icon: "🌑",
    theme: "text-mist"
}];

export const sy = [{
    id: "center",
    name: "월정(우물)",
    desc: "보름달이 비치는 우물. 낯병의 핵심 진상과 연결된다.",
    risk: "극상",
    npc: "모두",
    cmds: ["!조사", "!흰재"],
    x: 50,
    y: 50,
    hasSecret: true
}, {
    id: "home",
    name: "월사채(거처)",
    desc: "사용자의 무당 거처. 무정할멈이 관리한다.",
    risk: "낮음",
    npc: "무정할멈",
    cmds: ["!조사", "!이벤트"],
    x: 50,
    y: 70
}, {
    id: "school",
    name: "서당",
    desc: "묵사의 공간. 제문, 기록, 족보, 은폐 역사 단서를 찾을 수 있다.",
    risk: "중간",
    npc: "묵사",
    cmds: ["!거래", "!조사"],
    x: 35,
    y: 45
}, {
    id: "masks",
    name: "면포장",
    desc: "포현의 공간. 가면, 면포, 끈, 흑사포 글귀, 얼굴 측정 이벤트가 있다.",
    risk: "높음",
    npc: "포현",
    cmds: ["!흰재", "!거래"],
    x: 65,
    y: 45
}, {
    id: "gate",
    name: "마을문",
    desc: "문위의 공간. 탈출, 감시, 보호 이벤트가 발생한다.",
    risk: "중간",
    npc: "문위",
    cmds: ["!조사", "!이벤트"],
    x: 67,
    y: 80
}, {
    id: "market",
    name: "송문장",
    desc: "외부 장터. 거래, 전국 낯병 소문, 약재 정보를 얻을 수 있다.",
    risk: "낮음",
    npc: "시장상인",
    cmds: ["!거래", "!조사"],
    x: 90,
    y: 25,
    hasSecret: true
}, {
    id: "temple",
    name: "청등사",
    desc: "장님 스님이 있는 절. 이름, 장례, 저주 단서와 연결된다.",
    risk: "중간",
    npc: "장님 스님",
    cmds: ["!조사", "!신탁"],
    x: 20,
    y: 20,
    hasSecret: true
}, {
    id: "river",
    name: "무진나루",
    desc: "은면리 사람은 탑승 금지. 관아 감시와 진실 유출 차단의 장소다.",
    risk: "높음",
    npc: "관아 병사",
    cmds: ["!조사", "!거래"],
    x: 25,
    y: 85
}, {
    id: "archive",
    name: "서고",
    desc: "묵사의 공간, 은면리에 관련된 모든 기록이 보관되어 있다.",
    risk: "높음",
    npc: "묵사",
    cmds: ["!조사", "!거래"],
    x: 67,
    y: 65,
    hasSecret: true
}, {
    id: "gov",
    name: "해량현 관아",
    desc: "탐관오리의 공간, 은면리에게 부정부패를 저지르고 있다.",
    risk: "높음",
    npc: "해랑",
    cmds: ["!조사", "!거래"],
    x: 80,
    y: 15,
    hasSecret: true
}, {
    id: "mountain",
    name: "산길",
    desc: "그믐밤 산군을 만날 수 있는 위험한 길.",
    risk: "최고조",
    npc: "산군",
    cmds: ["!이벤트", "!흰재"],
    x: 50,
    y: 15,
    isFoggy: true,
    hasSecret: true
}];

export const Tc = [{
    id: "muk",
    namePublic: "묵사 (墨师)",
    nameReal: "서문결(徐文潔)",
    role: "기록관, 서책과 족보 관리자",
    keywords: "차분함, 정중함, 기록 집착, 예리함, 의심 많음",
    speech: "정중하고 건조하며 짧다",
    comicPoint: "178cm, 63kg, 27세\n좋아하는것:기록,서고,약속을 지키는 사람, 비, 따뜻한 차, 단정한 글씨\n싫어하는것:기록훼손,거짓말,시끄러운사람,감정적인 사람",
    relation: "기록자 / 관찰자",
    risk: "중간 (진실에 접근 시 높음)",
    trust: "서서히 오르나 한번 떨어지면 회복 불가",
    desc: "서당을 관리하며 마을의 모든 것을 기록하는 자. 가짜 무당인 당신을 처음부터 의심하면서도 가만히 지켜본다.",
    quote: "방금, 이름을 피하셨군요.",
    imgUrlVeiled: "https://i.postimg.cc/xdTb1Lq0/mugsa(seomungyeol)gibon.png",
    imgUrlUnveiled: "https://i.postimg.cc/kM8ZcSXb/mugsa(seomungyeol)hongjo.png"
}, {
    id: "po",
    namePublic: "포현 (捕玄)",
    nameReal: "류가온(柳佳溫)",
    role: "면포장인, 길목과 밤순찰 담당",
    keywords: "능글맞음, 여유, 장난기, 감각 예민",
    speech: "부드럽고 장난스럽고 이중적 의미가 있다",
    comicPoint: "187cm, 92kg, 29세\n좋아하는것:맛있는음식, 햇볕, 흥미로운사람, 들꽃, 동물, 아이들\n싫어하는것:자신의얼굴, 동정, 적막한곳, 침묵",
    relation: "시비 / 위험한 장난",
    risk: "높음",
    trust: "유동적 (흥미 위주)",
    desc: "밤길을 순찰하며 규칙을 위반하는 자를 색출하는 포졸. 느슨한 미소 뒤에 예민한 눈을 감추고 있다.",
    quote: "밤길은 위험합니다. 특히 거짓말엔.",
    imgUrlVeiled: "https://i.postimg.cc/SR8nvr1Y/pohyeon(lyugaon)gibon.png",
    imgUrlUnveiled: "https://i.postimg.cc/ZnhwgfKq/pohyeon(lyugaon)sujub.png"
}, {
    id: "mun",
    namePublic: "문위 (門衛)",
    nameReal: "문사윤(文思潤)",
    role: "마 마을 문지기",
    keywords: "밝음, 천진함, 규칙 중시, 사이코패스",
    speech: "밝고 빠르며 설명이 많다",
    comicPoint: "182cm, 75kg, 21세\n좋아하는것:완벽한 규칙, 칭찬, 달달한 화과자, 검, 훈련\n싫어하는것:무질서, 침입자, 바보취급, 술",
    relation: "감시자 / 우연한 조력자",
    risk: "낮음 (규칙 위반 시 즉시 최고조)",
    trust: "시작부터 높음 (원리원칙)",
    desc: "마을 입구를 지키는 밝은 청년. 아무 악의 없이 가장 섬뜩한 마을의 규칙을 들려준다.",
    quote: "아, 아직 안 죽으셨죠?",
    imgUrlVeiled: "https://i.postimg.cc/SKTY2jzX/mun-wi(munsayun)gibon.png",
    imgUrlUnveiled: "https://i.postimg.cc/9QNJVXFp/mun-wi(munsayun)sujub.png"
}, {
    id: "san",
    namePublic: "산군 (山君)",
    nameReal: "월아(月兒)",
    role: "은면리 뒷산과 그믐밤의 존재",
    keywords: "오만함, 고리타분, 비인간적",
    speech: "느리고 낮으며, 대답보다 시험을 던진다",
    comicPoint: "180cm, 70kg\n좋아하는것:산, 고요함, 약속, 용기, 아이, 곶감\n싫어하는것:자연파괴, 죽은자모욕, 거짓, 변명, 합리화",
    relation: "시험자 / 매혹",
    risk: "최상급 (생존 직결)",
    trust: "알 수 없음",
    desc: "그믐밤 산길에서만 만날 수 있는 오래된 존재. 낯병과 첫 저주의 기원과 가장 맞닿아 있다.",
    quote: "네 낯은 누구의 것이냐.",
    moonOnly: true,
    noVeil: true,
    imgUrlUnveiled: "https://i.postimg.cc/LXJYzRtR/sangungibon.png"
}];

export const npcData = [
  { name: "무정할멈", role: "월사채 관리자", imgOn: "https://i.postimg.cc/wBTsjD39/mujeonghalmeom.png", imgOff: "https://i.postimg.cc/3xZvht8S/mujeonghalmeom.png" },
  { name: "봄이", role: "어미를 잃고 어미 흑사포를 쓰는 아이", imgOn: "https://i.postimg.cc/q7b6hgCm/bom-i.png", imgOff: "https://i.postimg.cc/R0VnZwqr/bom-i.png" },
  { name: "유서방", role: "백정, 은면리의 활력소이자 요리사", imgOn: "https://i.postimg.cc/76jC9c9f/yuseobang.png", imgOff: "https://i.postimg.cc/d0tTVGDc/yuseobang.png" },
  { name: "연소", role: "3년전을 마지막으로 은면리에 발길을 끊은 진짜무당", imgOn: "https://i.postimg.cc/sXbBm8m3/yeonso(mudang).png", imgOff: "https://i.postimg.cc/sXbBm8m3/yeonso(mudang).png" },
  { name: "해랑", role: "해량현 관아의 탐관오리", imgOn: "https://i.postimg.cc/1X68jH7H/haelang.png", imgOff: "https://i.postimg.cc/1X68jH7H/haelang.png" }
];

export const Ac = [{
    name: "은면리",
    public: "외부와 단절된 숲 속 마을. 주민 전체가 검은 흑사포를 쓰고 다닌다.",
    clue: "언제부터 단절되었는가? 왜 포졸이 마을 내부로 들어오지 않는가?",
    secret: "과거 전국 낯병 환자들이 강제 수용된 격리 구역. 산 아래 무진나루 밖으로는 나갈 수 없다.",
    places: "마을 전체, 무진나루",
    chars: "모두",
    isUnlocked: true
}, {
    name: "낯병",
    public: "시간이 지날수록 얼굴과 이름, 기억을 잃어가는 저주받은 병.",
    clue: "잃어버린 기억 자리를 무언가 다른 것이 채우려 한다.",
    secret: "LOCKED_DATA",
    places: "환자 격리소, 청등사",
    chars: "봄이 모친, 환자들",
    isUnlocked: false
}, {
    name: "흑사포",
    public: "태어날 때부터 죽을 때까지 얼굴을 가리기 위해 쓰는 검은 천.",
    clue: "천 안쪽에 알 수 없는 문자가 적혀있다.",
    secret: "사실 낯병의 전염을 막는 것이 아니라, 얼굴이 지워지는 과정을 감추기 위한 시각적 기만과 통제 수단.",
    places: "면포장",
    chars: "포현 류가온",
    isUnlocked: false
}, {
    name: "월정",
    public: "마을 한가운데 있는 보름달이 비치는 깊은 우물. 생명수이자 신앙의 대상.",
    clue: "월정의 우물에서는 썩은 냄새와 탁한 물이 고여있다.",
    secret: "최초의 낯병 환자 혹은 거대한 원념이 가라앉은 곳. 마실수록 병을 늦추지만 동시에 저주에 속박된다.",
    places: "월정, 은면리 중심",
    chars: "산군, 진짜 무당",
    isUnlocked: false
}, {
    name: "실제 이름",
    public: "혼례 전까지 절대 타인에게 말해서는 안 되는 금기의 요소.",
    clue: "혼례자에게만 평생의 이름을 기억할 것을 약속하며 알려준다.",
    secret: "이름이 혼의 닻 역할을 함. 서로의 이름을 제대로 알고 불러주는 것만이 영혼이 대체되는 낯병을 막을 유일한 구원.",
    places: "서당, 청등사",
    chars: "묵사 서문결",
    isUnlocked: false
}];
