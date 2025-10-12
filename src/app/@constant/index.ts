import type { MbtiData } from "../@types/index";

export const mbtiData: MbtiData = {
  questions: [
    {
      id: 1,
      question: "주말에 나는...",
      answers: [
        { text: "친구들과 만나 신나게 논다!", type: "E" },
        { text: "집에서 혼자 조용히 휴식을 취한다.", type: "I" },
      ],
    },
    {
      id: 2,
      question: "여행 계획을 짤 때 나는...",
      answers: [
        {
          text: "가보고 싶은 곳만 몇 군데 정하고, 나머지는 즉흥적으로!",
          type: "P",
        },
        { text: "분 단위로 동선과 맛집까지 완벽하게 계획한다.", type: "J" },
      ],
    },
    {
      id: 3,
      question: "처음 보는 장치를 보면...",
      answers: [
        {
          text: "일단 눌러보고 만져보며 직접 부딪쳐 사용법을 익힌다.",
          type: "S",
        },
        { text: "설명서를 꼼꼼히 읽고 원리를 파악한 후 사용한다.", type: "N" },
      ],
    },
    {
      id: 4,
      question: "친구가 슬퍼 보일 때 나는...",
      answers: [
        {
          text: "'무슨 일이야?'라며 먼저 따뜻하게 공감하고 위로부터 건넨다.",
          type: "F",
        },
        {
          text: "문제의 원인을 분석하고 실질적인 해결책을 제시해 준다.",
          type: "T",
        },
      ],
    },
  ],
  results: {
    ISTJ: {
      animal: "거북이",
      description:
        "청렴결백한 논리주의자! 꾸준하고 믿음직스러운 거북이처럼, 당신은 현실 감각이 뛰어나며 맡은 바를 책임감 있게 완수합니다.",
      match: "ESFP",
    },
    ISFJ: {
      animal: "골든 리트리버",
      description:
        "용감한 수호자! 충성스럽고 따뜻한 골든 리트리버처럼, 당신은 주변 사람들을 헌신적으로 돌보며 안정을 중요시합니다.",
      match: "ESTP",
    },
    INFJ: {
      animal: "늑대",
      description:
        "선의의 옹호자! 깊은 통찰력과 신념을 가진 늑대처럼, 당신은 조용히 무리를 이끌며 더 나은 세상을 만들기 위해 노력합니다.",
      match: "ENTP",
    },
    INTJ: {
      animal: "독수리",
      description:
        "용의주도한 전략가! 높은 곳에서 전체를 보는 독수리처럼, 당신은 뛰어난 분석력과 상상력으로 모든 가능성에 대비합니다.",
      match: "ENFP",
    },
    ISTP: {
      animal: "고양이",
      description:
        "만능 재주꾼! 독립적이고 호기심 많은 고양이처럼, 당신은 도구를 다루는 데 능숙하며 상황을 관찰하고 해결책을 찾는 것을 즐깁니다.",
      match: "ESFJ",
    },
    ISFP: {
      animal: "코알라",
      description:
        "호기심 많은 예술가! 온화하고 여유로운 코알라처럼, 당신은 현재의 순간을 즐기며 자신만의 아름다움을 찾아 표현하는 것을 좋아합니다.",
      match: "ESTJ",
    },
    INFP: {
      animal: "사슴",
      description:
        "열정적인 중재자! 상냥하고 이타적인 사슴처럼, 당신은 섬세한 감수성으로 세상을 바라보며 자신만의 이상을 꿈꿉니다.",
      match: "ENFJ",
    },
    INTP: {
      animal: "부엉이",
      description:
        "논리적인 사색가! 지혜롭고 탐구심이 강한 부엉이처럼, 당신은 복잡한 이론과 아이디어의 세계에 깊이 빠져드는 것을 즐깁니다.",
      match: "ENTJ",
    },
    ESTP: {
      animal: "여우",
      description:
        "모험을 즐기는 사업가! 재빠르고 영리한 여우처럼, 당신은 위기 상황에서 뛰어난 임기응변 능력을 발휘하며 스릴을 즐깁니다.",
      match: "ISFJ",
    },
    ESFP: {
      animal: "돌고래",
      description:
        "자유로운 영혼의 연예인! 사교적이고 유쾌한 돌고래처럼, 당신은 주변에 긍정적인 에너지를 퍼뜨리며 사람들의 중심에 서는 것을 좋아합니다.",
      match: "ISTJ",
    },
    ENFP: {
      animal: "미어캣",
      description:
        "재기발랄한 활동가! 호기심 많고 에너지가 넘치는 미어캣처럼, 당신은 사람들과 어울리며 새로운 가능성을 탐험하는 것을 사랑합니다.",
      match: "INTJ",
    },
    ENTP: {
      animal: "앵무새",
      description:
        "뜨거운 논쟁을 즐기는 변론가! 재치 있고 지적인 앵무새처럼, 당신은 똑똑하고 활기찬 아이디어로 주변을 즐겁게 만듭니다.",
      match: "INFJ",
    },
    ESTJ: {
      animal: "사자",
      description:
        "엄격한 관리자! 무리를 이끄는 카리스마를 가진 사자처럼, 당신은 타고난 리더십과 현실적인 판단력으로 조직을 효율적으로 관리합니다.",
      match: "ISFP",
    },
    ESFJ: {
      animal: "코끼리",
      description:
        "사교적인 외교관! 무리를 아끼고 사회성이 뛰어난 코끼리처럼, 당신은 주변 사람들에게 깊은 관심을 가지고 조화로운 관계를 만들어나갑니다.",
      match: "ISTP",
    },
    ENFJ: {
      animal: "셰퍼드",
      description:
        "정의로운 사회운동가! 용감하고 사람들을 잘 이끄는 셰퍼드처럼, 당신은 다른 사람들의 성장을 돕고 공동체에 긍정적인 영향을 미치는 일에 열정을 느낍니다.",
      match: "INFP",
    },
    ENTJ: {
      animal: "호랑이",
      description:
        "대담한 통솔자! 용맹하고 결단력 있는 호랑이처럼, 당신은 대담한 비전을 제시하고 목표 달성을 위해 사람들을 이끄는 능력이 탁월합니다.",
      match: "INTP",
    },
  },
};
