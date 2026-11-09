import duck from "../assets/img/duck.webp"

export const questionsConfig = [
  {
    id: 1,
    questionText: "第1問：正直なところ、「この会議、メールで済んだのでは？」と思ったことがある？",
    yesText: "100万回くらいある",
    noText: "会議大好き！",
    successFeedback: "激しく同意します。次からはメールでお願いしましょう！",
    failFeedback: "悟りを開いていますね…尊敬します。",
    failImage: duck
  },
  {
    id: 2,
    questionText: "第2問：急いでいる時に限って、PCが勝手にアップデートを始める呪いにかかっている？",
    yesText: "間違いない",
    noText: "私のPCは空気を読める",
    successFeedback: "「更新プログラムを構成しています (1%)」…絶望の瞬間ですよね。",
    failFeedback: "空気が読めるPC！いくらで売ってくれますか？",
  },
  {
    id: 3,
    questionText: "第3問：金曜日の夕方17時になると、突然タイピングの速度が2倍になる？",
    yesText: "光の速さになる",
    noText: "常に一定です",
    successFeedback: "週末への執念が生み出す奇跡ですね！",
    failFeedback: "さすがプロフェッショナル。でもたまには全力で帰宅してくださいね！",
  },
  {
    id: 4,
    questionText: "第4問：この職場で間違いなく一番クールで最高な人は誰？",
    yesText: "もちろん、ハシェム！",
    noText: "他の誰か",
    successFeedback: "大正解！ハシェム以上のクールな人材は存在しませんね！",
    failFeedback: "システムエラー：当システムは「ハシェム」以外の回答を受け付けておりません。",
    failImage: duck
  },
  {
    id: 5,
    questionText: "最終問題：コーヒー（またはお茶）がないと、仕事のやる気が全く出ない？",
    yesText: "カフェインは私のガソリン",
    noText: "水だけで戦える",
    successFeedback: "やっぱり！さあ、もう一杯飲んで頑張りましょう。",
    failFeedback: "健康的な働き方！そのエネルギーを少し分けてほしいです。",
  }
];