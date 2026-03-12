import { JourneyData } from "@/types/journey";

export const JOURNEY_DATA: JourneyData = {
  sections: [
    {
      id: "section-1",
      title: "سەرەتای ژیان",
      description: "ژیانی پێغەمبەر (د.خ) پێش ئەوەی ببێتە پێغەمبەر",
      themeColor: "bg-emerald-500",
      levels: [
        {
          id: "level-1-1",
          title: "ناوی پیرۆز",
          type: "Lesson",
          questions: [
            {
              id: "q1",
              question: "ناوی پێغەمبەرەکەمان چییە؟",
              options: ["ئادەم", "عیسا", "محەمەد (د.خ)", "نووح"],
              correctAnswer: 2,
              explanation: "پێغەمبەری ئێمە ناوی محەمەدە (دروودی خوای لەسەر بێت).",
              funFact: "ناوی محەمەد بە واتای 'کەسێک کە زۆر سوپاس دەکرێت' دێت!",
              imageUrl: "https://picsum.photos/seed/prophet_name/600/400"
            },
            {
              id: "q2",
              question: "پێغەمبەر (د.خ) لە کوێ لەدایک بووە؟",
              options: ["مەدینە", "مەککە", "قودس", "بەغدا"],
              correctAnswer: 1,
              explanation: "پێغەمبەر (د.خ) لە شاری مەککەی پیرۆز لەدایک بووە.",
              funFact: "مەککە پیرۆزترین شاری جیهانە بۆ موسڵمانان!",
              imageUrl: "https://picsum.photos/seed/mecca/600/400"
            }
          ]
        },
        {
          id: "level-1-2",
          title: "خێزانی پێغەمبەر",
          type: "Quiz",
          questions: [
            {
              id: "q3",
              question: "ناوی باوکی پێغەمبەر (د.خ) چی بوو؟",
              options: ["ئەبو تالیب", "عەبدولموتەلیب", "عەبدوڵڵا", "حەمزە"],
              correctAnswer: 2,
              explanation: "ناوی باوکی عەبدوڵڵا بوو.",
              funFact: "باوکی پێغەمبەر پێش ئەوەی ئەو لەدایک بێت کۆچی دوایی کردبوو.",
              imageUrl: "https://picsum.photos/seed/father/600/400"
            },
            {
              id: "q4",
              question: "ناوی دایکی پێغەمبەر (د.خ) چی بوو؟",
              options: ["فاتیمە", "ئامینە", "خەدیجە", "عائیشە"],
              correctAnswer: 1,
              explanation: "ناوی دایکی ئامینە بوو.",
              funFact: "دایکی پێغەمبەر زۆر میهرەبان بوو!",
              imageUrl: "https://picsum.photos/seed/mother/600/400"
            },
            {
              id: "q5",
              question: "ناوی باپیری پێغەمبەر (د.خ) چی بوو؟",
              options: ["عەبدولموتەلیب", "ئەبو جەهل", "ئەبو لەهەب", "عەباس"],
              correctAnswer: 0,
              explanation: "ناوی باپیری عەبدولموتەلیب بوو کە زۆر خۆشی دەویست.",
              funFact: "باپیری پێغەمبەر گەورەی شاری مەککە بوو!",
              imageUrl: "https://picsum.photos/seed/grandfather/600/400"
            }
          ]
        }
      ]
    },
    {
      id: "section-2",
      title: "پێغەمبەرایەتی",
      description: "کاتێک فریشتە جوبڕائیل یەکەم وەحی بۆ هێنا",
      themeColor: "bg-amber-500",
      levels: [
        {
          id: "level-2-1",
          title: "ئەشکەوتی حەڕا",
          type: "Lesson",
          questions: [
            {
              id: "q6",
              question: "پێغەمبەر (د.خ) لە چ ئەشکەوتێکدا یەکەم وەحی بۆ هات؟",
              options: ["ئەشکەوتی سەور", "ئەشکەوتی حەڕا", "ئەشکەوتی ئەسحابولکەهف", "ئەشکەوتی شانەدەر"],
              correctAnswer: 1,
              explanation: "لە ئەشکەوتی حەڕا یەکەم جار فریشتە جوبڕائیل هات بۆ لای.",
              funFact: "ئەشکەوتی حەڕا لەسەر کێوێکی بەرزە بە ناوی جەبەلولنور!",
              imageUrl: "https://picsum.photos/seed/cave/600/400"
            },
            {
              id: "q7",
              question: "ناوی ئەو فریشتەیە چی بوو کە وەحی بۆ پێغەمبەر (د.خ) هێنا؟",
              options: ["میکائیل", "ئیسرافیل", "جوبڕائیل", "عەزرائیل"],
              correctAnswer: 2,
              explanation: "فریشتە جوبڕائیل گەورەی فریشتەکانە و وەحی دەهێنا.",
              funFact: "جوبڕائیل بە شێوەی مرۆڤیش دەهاتە لای پێغەمبەر!",
              imageUrl: "https://picsum.photos/seed/angel/600/400"
            }
          ]
        },
        {
          id: "level-2-2",
          title: "یەکەم موسڵمانەکان",
          type: "Quiz",
          questions: [
            {
              id: "q8",
              question: "ناوی یەکەم هاوسەری پێغەمبەر (د.خ) چی بوو؟",
              options: ["عائیشە", "زەینەب", "خەدیجە", "حەفسا"],
              correctAnswer: 2,
              explanation: "خاتوونی خەدیجە یەکەم هاوسەری پێغەمبەر (د.خ) بوو.",
              funFact: "خەدیجە یەکەم کەس بوو کە باوەڕی بە پێغەمبەر هێنا!",
              imageUrl: "https://picsum.photos/seed/khadija/600/400"
            },
            {
              id: "q9",
              question: "ناوی یەکەم کەس لە پیاوان کە باوەڕی هێنا چی بوو؟",
              options: ["عومەر", "عەلی", "ئەبوبەکر", "عوسمان"],
              correctAnswer: 2,
              explanation: "ئەبوبەکری سدیق یەکەم کەس بوو لە پیاوان کە باوەڕی هێنا.",
              funFact: "ئەبوبەکر باشترین هاوڕێی پێغەمبەر بوو!",
              imageUrl: "https://picsum.photos/seed/abubakr/600/400"
            },
            {
              id: "q10",
              question: "ناوی یەکەم منداڵ کە باوەڕی هێنا چی بوو؟",
              options: ["زەید", "عەلی", "حەسەن", "حوسێن"],
              correctAnswer: 1,
              explanation: "عەلی کوڕی ئەبو تالیب یەکەم منداڵ بوو کە باوەڕی هێنا.",
              funFact: "عەلی ئامۆزای پێغەمبەر بوو و لە ماڵی ئەودا گەورە ببوو!",
              imageUrl: "https://picsum.photos/seed/ali/600/400"
            }
          ]
        }
      ]
    },
    {
      id: "section-3",
      title: "کۆچکردن بۆ مەدینە",
      description: "گەشتە گەورەکەی پێغەمبەر (د.خ) بۆ شاری مەدینە",
      themeColor: "bg-indigo-500",
      levels: [
        {
          id: "level-3-1",
          title: "گەشتی کۆچ",
          type: "Lesson",
          questions: [
            {
              id: "q11",
              question: "کۆچکردنی پێغەمبەر (د.خ) بۆ کوێ بوو؟",
              options: ["بەغدا", "مەدینە", "شام", "میسر"],
              correctAnswer: 1,
              explanation: "پێغەمبەر (د.خ) و هاوەڵەکانی لە مەککەوە کۆچیان کرد بۆ مەدینە.",
              funFact: "ناوی مەدینە پێشتر 'یەثریب' بوو!",
              imageUrl: "https://picsum.photos/seed/medina/600/400"
            },
            {
              id: "q12",
              question: "ناوی ئەو وشترەی پێغەمبەر (د.خ) چی بوو؟",
              options: ["قەسوا", "عەزبا", "جەدعا", "وەجنا"],
              correctAnswer: 0,
              explanation: "وشترەکەی پێغەمبەر (د.خ) ناوی قەسوا بوو.",
              funFact: "قەسوا یارمەتی پێغەمبەری دا بۆ دۆزینەوەی شوێنی مزگەوتەکە!",
              imageUrl: "https://picsum.photos/seed/camel/600/400"
            }
          ]
        },
        {
          id: "level-3-2",
          title: "ژیان لە مەدینە",
          type: "Quiz",
          questions: [
            {
              id: "q13",
              question: "ناوی یەکەم مزگەوت کە پێغەمبەر (د.خ) دروستی کرد چی بوو؟",
              options: ["مزگەوتی حەرام", "مزگەوتی قوبا", "مزگەوتی نەبەوی", "مزگەوتی ئەقسا"],
              correctAnswer: 1,
              explanation: "مزگەوتی قوبا یەکەم مزگەوت بوو کە لە کاتی کۆچکردن دروست کرا.",
              funFact: "پێغەمبەر خۆی بە دەستی خۆی یارمەتی دا لە دروستکردنی مزگەوتەکەدا!",
              imageUrl: "https://picsum.photos/seed/mosque/600/400"
            },
            {
              id: "q14",
              question: "ناوی ئەو کەسە چی بوو کە بانگی دەدا لە مەدینە؟",
              options: ["عومەر", "عەلی", "بیلال", "عەمار"],
              correctAnswer: 2,
              explanation: "بیلال حەبەشی یەکەم بانگدەر بوو لە ئیسلامدا.",
              funFact: "بیلال دەنگێکی زۆر خۆشی هەبوو!",
              imageUrl: "https://picsum.photos/seed/bilal/600/400"
            },
            {
              id: "q15",
              question: "پێغەمبەر (د.خ) چەند ساڵ لە مەدینە ژیا؟",
              options: ["٥ ساڵ", "١٠ ساڵ", "١٣ ساڵ", "٢٣ ساڵ"],
              correctAnswer: 1,
              explanation: "پێغەمبەر (د.خ) ١٠ ساڵ لە مەدینە ژیا و ئیسلامی بڵاوکردەوە.",
              funFact: "لەو ١٠ ساڵەدا مەدینە بوو بە جوانترین شاری جیهان!",
              imageUrl: "https://picsum.photos/seed/medina_life/600/400"
            }
          ]
        }
      ]
    },
    {
      id: "section-4",
      title: "جەنگەکان و بەرگری",
      description: "بەرگریکردن لە ئیسلام و موسڵمانان",
      themeColor: "bg-red-500",
      levels: [
        {
          id: "level-4-1",
          title: "جەنگی بەدر",
          type: "Lesson",
          questions: [
            {
              id: "q16",
              question: "یەکەم جەنگی گەورەی موسڵمانان ناوی چی بوو؟",
              options: ["جەنگی ئوحود", "جەنگی خەندەق", "جەنگی بەدر", "جەنگی خەیبەر"],
              correctAnswer: 2,
              explanation: "جەنگی بەدر یەکەم جەنگی گەورە بوو کە موسڵمانان تێیدا سەرکەوتن.",
              funFact: "لە جەنگی بەدردا ژمارەی موسڵمانان زۆر کەمتر بوو لە دوژمنەکانیان!",
              imageUrl: "https://picsum.photos/seed/badr/600/400"
            },
            {
              id: "q17",
              question: "لە جەنگی بەدردا، کێ یارمەتی موسڵمانانی دا؟",
              options: ["فریشتەکان", "پاشای حەبەشە", "خەڵکی مەککە", "کەس یارمەتی نەدان"],
              correctAnswer: 0,
              explanation: "خوای گەورە فریشتەکانی نارد بۆ یارمەتیدانی موسڵمانان.",
              funFact: "هەزاران فریشتە بە جلی سپییەوە هاتنە خوارەوە بۆ یارمەتیدانیان!",
              imageUrl: "https://picsum.photos/seed/angels_help/600/400"
            }
          ]
        },
        {
          id: "level-4-2",
          title: "ئوحود و خەندەق",
          type: "Quiz",
          questions: [
            {
              id: "q18",
              question: "لە چ جەنگێکدا موسڵمانان خەندەقیان (چاڵێکی گەورە) لێدا؟",
              options: ["جەنگی بەدر", "جەنگی خەندەق", "جەنگی ئوحود", "جەنگی تەبوک"],
              correctAnswer: 1,
              explanation: "لە جەنگی خەندەق (یان ئەحزاب) موسڵمانان خەندەقیان لێدا بۆ پاراستنی مەدینە.",
              funFact: "خەندەقەکە هێندە گەورە بوو کە ئەسپ نەیدەتوانی بازی بەسەردا بدات!",
              imageUrl: "https://picsum.photos/seed/khandaq/600/400"
            },
            {
              id: "q19",
              question: "کێ پێشنیاری کرد کە خەندەق لێبدەن؟",
              options: ["عومەر", "عەلی", "سەلمانی فارسی", "ئەبوبەکر"],
              correctAnswer: 2,
              explanation: "سەلمانی فارسی کە خەڵکی وڵاتی فارس بوو ئەم پێشنیارەی کرد.",
              funFact: "لێدانی خەندەق بیرۆکەیەکی نوێ بوو کە عەرەبەکان پێشتر نەیاندەزانی!",
              imageUrl: "https://picsum.photos/seed/salman/600/400"
            },
            {
              id: "q20",
              question: "ناوی ئەو چیایە چییە کە جەنگی ئوحودی لێ ڕوویدا؟",
              options: ["چیای سەور", "چیای حەڕا", "چیای عەرەفە", "چیای ئوحود"],
              correctAnswer: 3,
              explanation: "جەنگەکە لە نزیک چیای ئوحود ڕوویدا.",
              funFact: "پێغەمبەر (د.خ) فەرمووی: 'ئوحود چیایەکە ئێمەی خۆش دەوێت و ئێمەش ئەومان خۆش دەوێت'!",
              imageUrl: "https://picsum.photos/seed/uhud/600/400"
            }
          ]
        }
      ]
    },
    {
      id: "section-5",
      title: "فەتحی مەککە",
      description: "گەڕانەوەی سەرکەوتووانە بۆ شاری مەککە",
      themeColor: "bg-teal-500",
      levels: [
        {
          id: "level-5-1",
          title: "گەڕانەوە بۆ مەککە",
          type: "Lesson",
          questions: [
            {
              id: "q21",
              question: "کاتێک پێغەمبەر (د.خ) گەڕایەوە مەککە، چی لە دوژمنەکانی کرد؟",
              options: ["سزای دان", "لێیان خۆش بوو", "دەری کردن", "زیندانی کردن"],
              correctAnswer: 1,
              explanation: "پێغەمبەر (د.خ) زۆر لێبوردە بوو و لە هەموویان خۆش بوو.",
              funFact: "پێغەمبەر پێی وتن: 'بڕۆن ئێوە ئازادن!'",
              imageUrl: "https://picsum.photos/seed/forgiveness/600/400"
            },
            {
              id: "q22",
              question: "کێ چۆوە سەر کەعبە بۆ بانگدان لە ڕۆژی فەتحی مەککە؟",
              options: ["عەلی", "عومەر", "بیلال", "عوسمان"],
              correctAnswer: 2,
              explanation: "بیلال حەبەشی بە فەرمانی پێغەمبەر چۆوە سەر کەعبە و بانگی دا.",
              funFact: "ئەمە یەکەم جار بوو بانگ لەسەر کەعبەی پیرۆز بدرێت!",
              imageUrl: "https://picsum.photos/seed/kaaba_bilal/600/400"
            }
          ]
        },
        {
          id: "level-5-2",
          title: "ماڵئاوایی",
          type: "Quiz",
          questions: [
            {
              id: "q23",
              question: "ناوی کۆتا حەجی پێغەمبەر (د.خ) چی بوو؟",
              options: ["حەجی گەورە", "حەجی ماڵئاوایی", "حەجی یەکەم", "حەجی عومرە"],
              correctAnswer: 1,
              explanation: "پێی دەوترێت حەجی ماڵئاوایی چونکە کۆتا حەجی پێغەمبەر بوو.",
              funFact: "لەو حەجەدا زیاتر لە ١٠٠ هەزار موسڵمان لەگەڵ پێغەمبەر بوون!",
              imageUrl: "https://picsum.photos/seed/hajj/600/400"
            },
            {
              id: "q24",
              question: "پێغەمبەر (د.خ) لە کوێ نێژراوە؟",
              options: ["مەککە", "قودس", "مەدینە", "تائیف"],
              correctAnswer: 2,
              explanation: "پێغەمبەر (د.خ) لە شاری مەدینە لە ماڵەکەی خۆیدا نێژرا.",
              funFact: "ئێستا گۆڕی پێغەمبەر لە ناو مزگەوتی نەبەویدایە لە مەدینە!",
              imageUrl: "https://picsum.photos/seed/prophet_mosque/600/400"
            },
            {
              id: "q25",
              question: "کێ بوو بە خەلیفە (سەرکردە) دوای پێغەمبەر (د.خ)؟",
              options: ["عومەر", "عەلی", "عوسمان", "ئەبوبەکر"],
              correctAnswer: 3,
              explanation: "ئەبوبەکری سدیق بوو بە یەکەم خەلیفەی موسڵمانان.",
              funFact: "ئەبوبەکر باشترین هاوڕێی پێغەمبەر بوو لە هەموو ژیانیدا!",
              imageUrl: "https://picsum.photos/seed/caliph/600/400"
            }
          ]
        }
      ]
    },
    {
      id: "section-6",
      title: "ڕەوشت و هاوەڵان",
      description: "ڕەوشتە جوانەکانی پێغەمبەر و هاوڕێکانی",
      themeColor: "bg-sky-500",
      levels: [
        {
          id: "level-6-1",
          title: "ڕەوشتی پێغەمبەر",
          type: "Lesson",
          questions: [
            {
              id: "q26",
              question: "پێغەمبەر (د.خ) پێش پێغەمبەرایەتی بە چی ناسرابوو؟",
              options: ["ئازا و جەنگاوەر", "دەوڵەمەند", "ڕاستگۆ و دەستپاک", "زانا"],
              correctAnswer: 2,
              explanation: "خەڵکی مەککە پێیان دەوت 'سادق و ئەمین' واتە ڕاستگۆ و دەستپاک.",
              funFact: "تەنانەت دوژمنەکانیش شتەکانیان لای ئەو دادەنا چونکە دەستپاک بوو!",
              imageUrl: "https://picsum.photos/seed/honest/600/400"
            },
            {
              id: "q27",
              question: "پێغەمبەر (د.خ) چۆن مامەڵەی لەگەڵ منداڵان دەکرد؟",
              options: ["گرنگی پێنەدەدان", "لێی دەدان", "بە میهرەبانی و یاری لەگەڵ دەکردن", "تەنها ئامۆژگاری دەکردن"],
              correctAnswer: 2,
              explanation: "پێغەمبەر زۆر میهرەبان بوو لەگەڵ منداڵان و یاری لەگەڵ دەکردن.",
              funFact: "کاتێک پێغەمبەر نوێژی دەکرد، هەندێک جار نەوەکانی دەچوونە سەر پشتی و ئەویش چاوەڕێی دەکردن!",
              imageUrl: "https://picsum.photos/seed/children/600/400"
            }
          ]
        },
        {
          id: "level-6-2",
          title: "هاوەڵە نزیکەکان",
          type: "Quiz",
          questions: [
            {
              id: "q28",
              question: "کێ بە 'فاروق' (جیاکەرەوەی ڕاست و هەڵە) ناسرابوو؟",
              options: ["عەلی", "عومەر", "ئەبوبەکر", "عوسمان"],
              correctAnswer: 1,
              explanation: "عومەری کوڕی خەتاب بە فاروق ناسرابوو چونکە حەقی لە باتڵ جیا دەکردەوە.",
              funFact: "شەیتان لەو ڕێگایە نەدەڕۆیشت کە عومەری پێدا دەڕۆیشت!",
              imageUrl: "https://picsum.photos/seed/omar/600/400"
            },
            {
              id: "q29",
              question: "کێ بە 'خاوەنی دوو ڕووناکی' ناسرابوو؟",
              options: ["عوسمان", "عەلی", "حەمزە", "زەید"],
              correctAnswer: 0,
              explanation: "عوسمانی کوڕی عەفان، چونکە دوو کچی پێغەمبەری خواستبوو.",
              funFact: "عوسمان زۆر شەرمن و بەڕەوشت بوو، تەنانەت فریشتەکانیش شەرمیان لێ دەکرد!",
              imageUrl: "https://picsum.photos/seed/othman/600/400"
            },
            {
              id: "q30",
              question: "ئایا پێغەمبەر (د.خ) ئاژەڵی خۆش دەویست؟",
              options: ["نەخێر", "بەڵێ، زۆر میهرەبان بوو لەگەڵیان", "تەنها وشتر", "تەنها ئەسپ"],
              correctAnswer: 1,
              explanation: "پێغەمبەر فەرمانی پێکردووین کە میهرەبان بین لەگەڵ ئاژەڵەکان.",
              funFact: "پێغەمبەر پشیلەیەکی هەبوو بە ناوی موعیزە کە زۆری خۆش دەویست!",
              imageUrl: "https://picsum.photos/seed/animals/600/400"
            }
          ]
        }
      ]
    }
  ]
};
