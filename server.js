require("dotenv").config();
const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(
  async (ctx) =>
    await ctx.reply("إختر فئة 👇", {
      reply_markup: {
        keyboard: [
          ["مقالات 📰", "شروح 📼", "صوتيات 🎙"],
          ["تفريغات 🖨", "كتب 📚"],
          ["قوائم اليوتيوب ⏯"],
        ],

        resize_keyboard: true,
        one_time_keyboard: true,
      },
    })
);

bot.hears("إرجع ◀", async (ctx) => {
  await ctx.reply("إختر فئة 👇", {
    reply_markup: {
      keyboard: [
        ["مقالات 📰", "شروح 📼", "صوتيات 🎙"],
        ["تفريغات 🖨", "كتب 📚"],
        ["قوائم اليوتيوب ⏯"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

// bot.hears("صوتيات 🎙", async (ctx) => {
//   await ctx.reply("إختر 👇", {
//     reply_markup: {
//       keyboard: [["صوتيات"], ["دروس"], ["مقالات"], ["كتب"], ["يوتيوب"]],

//       resize_keyboard: true,
//       one_time_keyboard: true,
//     },
//   });
// });

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& //
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& شروح &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& //
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& //

bot.hears("شروح 📼", async (ctx) => {
  await ctx.reply("إختر موضوع👇", {
    reply_markup: {
      keyboard: [
        ["القرآن 📖"],
        ["العقيدة 📜"],
        ["الحديث 📑"],
        ["فقه 💡"],
        ["شبهات وردود 🎯"],
        ["الأدب والتربية 📗"],
        ["كتب الحافظ ابن أبي دنيا 📚"],

        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! شبهات وردود !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

bot.hears("شبهات وردود 🎯", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 516);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 517);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 518);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 519);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 520);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 521);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 522);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 523);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 524);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 525);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 526);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 527);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 528);
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! عقيدة !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

bot.hears("العقيدة 📜", async (ctx) => {
  await ctx.reply("إختر موضوع👇", {
    reply_markup: {
      keyboard: [
        ["السنة لعبد الله بن أحمد"],
        ["نقض الدارمي على المريسي"],
        ["شرح الإبانة الصغرى لابن بطة"],
        ["شرح كتاب التوحيد"],
        ["شرح كتاب أصول الإيمان"],
        ["الإيمان لابن أبي شيبة"],
        ["الإيمان لأبي عبيد القاسم بن سلام"],
        ["شرح السنة للخلال"],
        ["رد الشيخ محمد بن عبد الوهاب على الأشاعرة"],
        ["شرح كتاب مفيد المستفيد"],
        ["كتاب خلق أفعال العباد للبخاري"],
        ["شرح كتاب الأدلة والبراهين لعبد الرحمن بن حسن"],
        ["شرح كتاب كشف الشبهتين لابن سحمان"],
        ["فضل علم السلف على علم الخلف للحافظ ابن رجب"],
        ["طاعة الرسول للإمام أحمد"],
        [
          "المسائل التي حلف عليها الإمام أحمد أو أكدها بقوله لعمري لابن أبي يعلى",
        ],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ السنة لعبد الله بن أحمد @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears(
  "السنة لعبد الله بن أحمد",
  async (ctx) =>
    await ctx.reply("إختر مجلِساً (السنة لعبد الله بن أحمد) 👇", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "1", callback_data: "1 السنة لعبد الله بن أحمد" },
            { text: "2", callback_data: "2 السنة لعبد الله بن أحمد" },
            { text: "3", callback_data: "3 السنة لعبد الله بن أحمد" },
          ],
          [
            { text: "4", callback_data: "4 السنة لعبد الله بن أحمد" },
            { text: "5", callback_data: "5 السنة لعبد الله بن أحمد" },
          ],
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    })
);

bot.action("1 السنة لعبد الله بن أحمد", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 17);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 18);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 19);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 20);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 21);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 22);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 23);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 24);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 25);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 26);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 27);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 28);
});

bot.action("2 السنة لعبد الله بن أحمد", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 29);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 30);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 31);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 32);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 33);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 34);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 35);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 36);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 37);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 38);
});

bot.action("3 السنة لعبد الله بن أحمد", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 39);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 40);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 41);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 42);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 43);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 44);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 45);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 46);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 47);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 48);
});

bot.action("4 السنة لعبد الله بن أحمد", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 49);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 50);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 51);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 52);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 53);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 54);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 55);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 56);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 57);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 58);
});

bot.action("5 السنة لعبد الله بن أحمد", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 59);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 60);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 61);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 62);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ نقض الدارمي على المريسي @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears(
  "نقض الدارمي على المريسي",
  async (ctx) =>
    await ctx.reply("إختر مجلِساً (نقض الدارمي على المريسي) 👇", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "1", callback_data: "1 نقض الدارمي على المريسي" },
            { text: "2", callback_data: "2 نقض الدارمي على المريسي" },
            { text: "3", callback_data: "3 نقض الدارمي على المريسي" },
          ],
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    })
);

bot.action("1 نقض الدارمي على المريسي", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 64);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 65);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 66);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 67);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 68);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 69);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 70);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 71);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 72);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 73);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 74);
});

bot.action("2 نقض الدارمي على المريسي", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 75);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 76);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 77);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 78);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 79);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 80);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 81);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 82);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 83);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 84);
});

bot.action("3 نقض الدارمي على المريسي", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 85);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 86);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 87);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ شرح الإبانة الصغرى لابن بطة @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears("شرح الإبانة الصغرى لابن بطة", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 89);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 90);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 91);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 92);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 93);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 94);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 95);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 96);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 97);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ شرح كتاب التوحيد @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears(
  "شرح كتاب التوحيد",
  async (ctx) =>
    await ctx.reply("إختر مجلِساً (شرح كتاب التوحيد) 👇", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "1", callback_data: "1 شرح كتاب التوحيد" },
            { text: "2", callback_data: "2 شرح كتاب التوحيد" },
            { text: "3", callback_data: "3 شرح كتاب التوحيد" },
          ],
          [{ text: "4", callback_data: "4 شرح كتاب التوحيد" }],
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    })
);

bot.action("1 شرح كتاب التوحيد", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 98);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 99);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 100);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 101);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 102);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 103);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 104);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 105);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 106);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 107);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 108);
});

bot.action("2 شرح كتاب التوحيد", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 109);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 110);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 111);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 112);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 113);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 114);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 115);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 116);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 117);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 118);
});

bot.action("3 شرح كتاب التوحيد", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 119);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 120);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 121);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 122);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 123);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 124);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 125);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 126);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 127);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 128);
});

bot.action("4 شرح كتاب التوحيد", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 129);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 130);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 131);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 132);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 133);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ شرح كتاب أصول الإيمان @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears("شرح كتاب أصول الإيمان", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 134);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 135);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 136);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 137);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 138);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 139);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 140);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 141);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 142);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 143);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ الإيمان لابن أبي شيبة @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears("الإيمان لابن أبي شيبة", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 144);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 145);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ الإيمان لأبي عبيد القاسم بن سلام @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears("الإيمان لأبي عبيد القاسم بن سلام", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 146);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 147);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ شرح السنة للخلال @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears(
  "شرح السنة للخلال",
  async (ctx) =>
    await ctx.reply("إختر مجلِساً 👇", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "1", callback_data: "1 شرح السنة للخلال" },
            { text: "2", callback_data: "2 شرح السنة للخلال" },
            { text: "3", callback_data: "3 شرح السنة للخلال" },
          ],
          [
            { text: "4", callback_data: "4 شرح السنة للخلال" },
            { text: "5", callback_data: "5 شرح السنة للخلال" },
            { text: "6", callback_data: "6 شرح السنة للخلال" },
          ],
          [{ text: "7", callback_data: "7 شرح السنة للخلال" }],
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    })
);

bot.action("1 شرح السنة للخلال", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 148);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 149);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 150);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 151);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 152);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 153);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 154);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 155);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 156);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 157);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 158);
});

bot.action("2 شرح السنة للخلال", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 159);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 160);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 161);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 162);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 163);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 164);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 165);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 166);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 167);
});

bot.action("3 شرح السنة للخلال", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 168);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 169);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 170);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 171);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 172);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 173);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 174);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 175);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 176);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 177);
});

bot.action("4 شرح السنة للخلال", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 178);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 179);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 180);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 181);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 182);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 183);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 184);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 185);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 186);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 187);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 188);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 189);
});

bot.action("5 شرح السنة للخلال", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 190);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 191);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 192);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 193);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 194);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 195);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 196);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 197);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 198);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 199);
});

bot.action("6 شرح السنة للخلال", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 200);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 201);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 202);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 203);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 204);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 205);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 206);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 207);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 208);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 209);
});

bot.action("7 شرح السنة للخلال", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 210);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 211);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 212);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ رد الشيخ محمد بن عبد الوهاب على الأشاعرة @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears("رد الشيخ محمد بن عبد الوهاب على الأشاعرة", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 213);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 214);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ شرح كتاب مفيد المستفيد @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears("شرح كتاب مفيد المستفيد", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 215);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 216);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 217);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 218);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 219);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ كتاب خلق أفعال العباد للبخاري @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears("كتاب خلق أفعال العباد للبخاري", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 220);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 221);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 222);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 223);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 224);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 225);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 226);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 227);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 228);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 229);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ شرح كتاب الأدلة والبراهين لعبد الرحمن بن حسن @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears("شرح كتاب الأدلة والبراهين لعبد الرحمن بن حسن", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 230);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 231);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 232);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ شرح كتاب كشف الشبهتين لابن سحمان @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears("شرح كتاب كشف الشبهتين لابن سحمان", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 233);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 234);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 235);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 236);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 237);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 238);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 239);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 240);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ فضل علم السلف على علم الخلف للحافظ ابن رجب @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears(
  "فضل علم السلف على علم الخلف للحافظ ابن رجب",
  async (ctx) =>
    await ctx.reply("إختر مجلِساً 👇", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "1", callback_data: "1 فضل علم السلف" },
            { text: "2", callback_data: "2 فضل علم السلف" },
          ],
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    })
);

bot.action("1 فضل علم السلف", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 332);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 333);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 334);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 335);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 336);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 337);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 338);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 339);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 340);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 341);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 342);
});

bot.action("2 فضل علم السلف", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 343);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 344);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 345);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 346);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ طاعة الرسول للإمام أحمد @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears("طاعة الرسول للإمام أحمد", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 347);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 348);
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! القرآن !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

bot.hears("القرآن 📖", async (ctx) => {
  await ctx.reply("إختر موضوع👇", {
    reply_markup: {
      keyboard: [
        ["فضائل القرآن للفريابي"],
        ["فضائل القرآن لأبي عبيد"],
        ["أخلاق حملة القرآن للآجري"],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ فضائل القرآن للفريابي @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears("فضائل القرآن للفريابي", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 241);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 242);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 243);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 244);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 245);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 246);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 247);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 248);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ فضائل القرآن لأبي عبيد @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears(
  "فضائل القرآن لأبي عبيد",
  async (ctx) =>
    await ctx.reply("إختر مجلِساً 👇", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "1", callback_data: "1 فضائل القرآن لأبي عبيد" },
            { text: "2", callback_data: "2 فضائل القرآن لأبي عبيد" },
          ],
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    })
);

bot.action("1 فضائل القرآن لأبي عبيد", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 249);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 250);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 251);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 252);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 253);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 254);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 255);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 256);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 257);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 258);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 259);
});

bot.action("2 فضائل القرآن لأبي عبيد", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 260);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 261);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 262);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 263);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 264);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ أخلاق حملة القرآن للآجري @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears("أخلاق حملة القرآن للآجري", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 265);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 266);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 267);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 268);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 269);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 270);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 271);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 272);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 273);
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! الأدب والتربية !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

bot.hears("الأدب والتربية 📗", async (ctx) => {
  await ctx.reply("إختر موضوع👇", {
    reply_markup: {
      keyboard: [
        ["أخلاق الشيوخ وأخبارهم للحافظ أبي بكر المروذي"],
        ["العلم  للحافظ أبي خيثمة زهير بن حرب النسائي"],
        ["الأدب مع الله عَزَّ وجَلَّ"],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ أخلاق الشيوخ وأخبارهم للحافظ أبي بكر المروذي @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears("أخلاق الشيوخ وأخبارهم للحافظ أبي بكر المروذي", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 309);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 310);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 311);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 312);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 313);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 314);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ العلم  للحافظ أبي خيثمة زهير بن حرب النسائي @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears("العلم  للحافظ أبي خيثمة زهير بن حرب النسائي", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 505);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 506);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 507);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 508);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 509);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 510);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 511);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 512);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 513);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 514);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ الأدب مع الله عَزَّ وجَلَّ @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears("الأدب مع الله عَزَّ وجَلَّ", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 529);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 530);
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! الحديث !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

bot.hears("الحديث 📑", async (ctx) => {
  await ctx.reply("إختر موضوع👇", {
    reply_markup: {
      keyboard: [
        ["التمييز للحافظ أبي الحجاج مسلم صاحب الصحيح"],
        ["شرف أصحاب الحديث للخطيب البغدادي"],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ التمييز للحافظ أبي الحجاج مسلم صاحب الصحيح @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears("التمييز للحافظ أبي الحجاج مسلم صاحب الصحيح", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 315);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 316);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 317);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 318);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 319);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 320);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 321);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 322);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 323);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 324);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ شرف أصحاب الحديث للخطيب البغدادي @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears("شرف أصحاب الحديث للخطيب البغدادي", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 325);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 326);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 327);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 328);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 329);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 330);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 331);
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! كتب الحافظ ابن أبي دنيا !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

bot.hears("كتب الحافظ ابن أبي دنيا 📚", async (ctx) => {
  await ctx.reply("إختر موضوع👇", {
    reply_markup: {
      keyboard: [
        ["كتاب الصمت"],
        ["كتاب الزهد "],
        ["كتاب التوبة"],
        ["كتاب الإخلاص والنية"],
        ["كتاب فضائل رمضان"],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ كتاب الصمت @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears("كتاب الصمت", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 274);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 275);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 276);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 277);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 278);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 279);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 280);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 281);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 282);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 283);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 284);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 285);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ كتاب الزهد @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears("كتاب الزهد", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 286);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 287);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 288);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 289);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 290);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 291);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 292);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 293);

  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 294);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ كتاب التوبة @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears("كتاب التوبة", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 295);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 296);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 297);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 298);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 299);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ كتاب الإخلاص والنية @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears("كتاب الإخلاص والنية", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 303);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 304);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 305);
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ كتاب فضائل رمضان @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears("كتاب فضائل رمضان", async (ctx) => {
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 306);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 307);
  await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 308);
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! فقه !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

bot.hears("فقه 💡", async (ctx) => {
  await ctx.reply("إختر موضوع👇", {
    reply_markup: {
      keyboard: [
        [
          "المسائل التي حلف عليها الإمام أحمد أو أكدها بقوله لعمري لابن أبي يعلى",
        ],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ المسائل التي حلف عليها الإمام أحمد أو أكدها بقوله لعمري لابن أبي يعلى @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears(
  "المسائل التي حلف عليها الإمام أحمد أو أكدها بقوله لعمري لابن أبي يعلى",
  async (ctx) => {
    await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 349);
    await ctx.telegram.forwardMessage(ctx.chat.id, -1001329536041, 350);
  }
);

// ------------------------------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------------------------------ //
// bot.hears("الرد على الفرق الضالة", async (ctx) => {
//   await ctx.reply("إختر موضوع👇", {
//     reply_markup: {
//       inline_keyboard: [
//         [
//           { text: "(الجهمية) الأشاعرة", callback_data: "الرد على الأشاعرة" },
//           [{ text: "العلمانية", callback_data: "الرد على العلمانية" }],
//           [{ text: "النسوية", callback_data: "الرد على النسوية" }],
//         ],
//         [
//           { text: "الملاحدة", callback_data: "الرد على الملاحدة" },
//           [{ text: "الأشاعرة", callback_data: "الرد على الأشاعرة" }],
//           [{ text: "الأشاعرة", callback_data: "الرد على الأشاعرة" }],
//         ],
//         [
//           { text: "الأشاعرة", callback_data: "الرد على الأشاعرة" },
//           [{ text: "الأشاعرة", callback_data: "الرد على الأشاعرة" }],
//           [{ text: "الأشاعرة", callback_data: "الرد على الأشاعرة" }],
//         ],
//       ],

//       resize_keyboard: true,
//       one_time_keyboard: true,
//     },
//   });
// });

// bot.hears("مقالات", async (ctx) => {
//   await ctx.reply("إختر 👇", {
//     reply_markup: {
//       keyboard: [["صوتيات"], ["دروس"], ["مقالات"], ["كتب"], ["يوتيوب"]],

//       resize_keyboard: true,
//       one_time_keyboard: true,
//     },
//   });
// });

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& //
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& كتب &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& //
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& //

bot.hears("كتب 📚", async (ctx) => {
  await ctx.reply("إختر كتاباً👇", {
    reply_markup: {
      keyboard: [
        ["الترجيح بين أقوال المعدلين والجارحين في أبي حنيفة النعمان بن ثابت"],
        ["طليعة المقنع في علل الحديث"],
        ["الوجوه في إثبات الإجماع على أن بدعة الأشاعرة مكفرة"],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

bot.hears(
  "الترجيح بين أقوال المعدلين والجارحين في أبي حنيفة النعمان بن ثابت",
  async (ctx) => {
    await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 14);
  }
);
bot.hears("طليعة المقنع في علل الحديث", async (ctx) => {
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 15);
});
bot.hears("الوجوه في إثبات الإجماع على أن بدعة الأشاعرة مكفرة", async (ctx) => {
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 16);
});

// ------------------------------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------------------------------ //

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& //
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& مقالات &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& //
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& //

bot.hears("مقالات 📰", async (ctx) => {
  await ctx.reply("إختر فئة", {
    reply_markup: {
      keyboard: [
        ["مقالات المدونة"],
        ["مقالات القناة (غير المرفقة بالصور)"],
        ["مقالات القناة (مرفقة بالصور)"],
        ["تقويم المعاصرين 🎙"],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! تقويم المعاصرين !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

bot.hears(
  "تقويم المعاصرين 🎙",
  async (ctx) =>
    await ctx.reply("إختر حلقة 👇", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "1", callback_data: "1 تقويم المعاصرين" },
            { text: "2", callback_data: "2 تقويم المعاصرين" },
            { text: "3", callback_data: "3 تقويم المعاصرين" },
            { text: "4", callback_data: "4 تقويم المعاصرين" },
            { text: "5", callback_data: "5 تقويم المعاصرين" },
          ],
          [
            { text: "6", callback_data: "6 تقويم المعاصرين" },
            { text: "7", callback_data: "7 تقويم المعاصرين" },
            { text: "8", callback_data: "8 تقويم المعاصرين" },
            { text: "9", callback_data: "9 تقويم المعاصرين" },
            { text: "10", callback_data: "10 تقويم المعاصرين" },
          ],
          [
            { text: "11", callback_data: "11 تقويم المعاصرين" },
            { text: "12", callback_data: "12 تقويم المعاصرين" },
            { text: "13", callback_data: "13 تقويم المعاصرين" },
            { text: "14", callback_data: "14 تقويم المعاصرين" },
            { text: "15", callback_data: "15 تقويم المعاصرين" },
          ],

          [
            { text: "16", callback_data: "16 تقويم المعاصرين" },
            { text: "17", callback_data: "17 تقويم المعاصرين" },
          ],
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    })
);

bot.action("1 تقويم المعاصرين", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 756);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 758);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 759);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 757);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 760);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 761);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 762);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 763);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 764);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 765);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 766);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 767);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 768);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 769);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 770);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 771);
});
bot.action("2 تقويم المعاصرين", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 772);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 773);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 774);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 775);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 776);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 777);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 778);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 779);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 780);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 781);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 782);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 783);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 784);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 785);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 786);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 787);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 788);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 789);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 791);

  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 790);

  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 792);
});
bot.action("3 تقويم المعاصرين", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 793);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 794);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 795);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 796);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 797);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 798);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 799);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 800);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 801);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 802);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 803);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 804);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 805);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 806);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 807);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 808);
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 809);
});
bot.action("4 تقويم المعاصرين", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 14);
});
bot.action("5 تقويم المعاصرين", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 14);
});
bot.action("6 تقويم المعاصرين", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 14);
});
bot.action("7 تقويم المعاصرين", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 14);
});
bot.action("8 تقويم المعاصرين", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 14);
});
bot.action("9 تقويم المعاصرين", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 14);
});
bot.action("10 تقويم المعاصرين", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 14);
});
bot.action("11 تقويم المعاصرين", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 14);
});
bot.action("12 تقويم المعاصرين", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 14);
});
bot.action("13 تقويم المعاصرين", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 14);
});
bot.action("14 تقويم المعاصرين", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 14);
});
bot.action("15 تقويم المعاصرين", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 14);
});
bot.action("16 تقويم المعاصرين", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 14);
});
bot.action("17 تقويم المعاصرين", async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.telegram.copyMessage(ctx.chat.id, -1001329536041, 14);
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! مقالات المدونة !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! //

bot.hears("مقالات المدونة", async (ctx) => {
  await ctx.reply("إختر فئة", {
    reply_markup: {
      keyboard: [
        ["التوحيد والعقيدة"],
        ["دراسة الأحاديث والحكم على الأسانيد"],
        ["الردود والتعقيبات"],
        ["أخبار وحكايات مشهورة لا تصح"],
        ["الفقه"],
        ["متفرقات"],
        ["الرد على الأشاعرة الجهمية"],
        ["تنبيهات"],
        ["آداب ومواعظ"],
        ["التفسير وعلوم القرآن"],
        ["الدراسات الحديثية"],
        ["صحيح آثار التابعين"],
        ["صحيح آثار الصحابة"],

        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// @@@@@@@@@@ التوحيد والعقيدة @@@@@@@@@ //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

bot.hears(
  "التوحيد والعقيدة",
  async (ctx) =>
    await ctx.reply("إختر قسماً 👇 (كل قسم يتضمن 50 مقالة)", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "1", callback_data: "1 التوحيد والعقيدة" },
            { text: "2", callback_data: "2 التوحيد والعقيدة" },
            { text: "3", callback_data: "3 التوحيد والعقيدة" },
            { text: "4", callback_data: "4 التوحيد والعقيدة" },
            { text: "5", callback_data: "5 التوحيد والعقيدة" },
          ],
          [
            { text: "6", callback_data: "6 التوحيد والعقيدة" },
            { text: "7", callback_data: "7 التوحيد والعقيدة" },
            { text: "8", callback_data: "8 التوحيد والعقيدة" },
            { text: "9", callback_data: "9 التوحيد والعقيدة" },
            { text: "10", callback_data: "10 التوحيد والعقيدة" },
          ],
          [
            { text: "11", callback_data: "11 التوحيد والعقيدة" },
            { text: "12", callback_data: "12 التوحيد والعقيدة" },
            { text: "13", callback_data: "13 التوحيد والعقيدة" },
            { text: "14", callback_data: "14 التوحيد والعقيدة" },
            { text: "15", callback_data: "15 التوحيد والعقيدة" },
          ],

          [
            { text: "16", callback_data: "16 التوحيد والعقيدة" },
            { text: "17", callback_data: "17 التوحيد والعقيدة" },
            { text: "18", callback_data: "18 التوحيد والعقيدة" },
            { text: "19", callback_data: "19 التوحيد والعقيدة" },
          ],
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    })
);

bot.action("1 التوحيد والعقيدة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply("إختر مقالة 👇", {
    reply_markup: {
      keyboard: [
        ["1- ظاهرة اختزال الدين ..."],
        ["2- بيان كذب رواية تبرؤ معاوية بن يزيد من جده معاوية بن أبي سفيان"],
        ["3-الرد على ياسر الحبيب في موضوع نفاق معتب بن قشير "],
        [
          "4-سخافة عقول الملاحدة تتجلى في شريف جابر : حديثه عن سورة الولاية نموذجاً ...",
        ],
        ["5-تحرير موقف ابن تيمية من مناظرة الجهم للسمنية "],
        ["6-قاعدة في إثبات قطعية عدالة الصحابة ..."],
        ["7-تتمة كشف تلبيس الأزهري في تبريره استغاثات القبورية "],
        [
          "8-تحرير مذهب ابن تيمية في المعارف القبلية ونقد دعوى أن القول بها قول الجهمية ",
        ],
        ["9-نقض شبهات محمد عبد الواحد الأزهري في تبرير استغاثات القبورية "],
        ["10-بتر محمد الأزهري كلام ابن مفلح في التبرك في موضعين"],
        ["11-نقض تلبيس محمد الأزهري في موضوع مدح الشيخين للصرصري ..."],
        ["12-براءة الإمام مالك من افتراءات الجهمية "],
        ["13-الإمامية يخالفون إجماع الأمة برواية كافر عندهم "],
        ["14-بشارة صلب أم بشارة نجاة ..."],
        ["15-برهان كذب شيخ الرافضة الصدوق على علماء أهل السنة ..."],
        ["16-نصيحة للإمامية حول كتاب كامل الزيارات للقمي ..."],
        [
          "17-كفر شيخ الرافضة الصدوق في دعواه أن المعصوم ينكر على الرسول تعديه لحدود الله ...",
        ],
        [
          "18-الإمام السجاد يدعو لبني أمية وجنودهم ويظهر فضائل الصحابة ويترضى عليهم وأبنائهم...",
        ],
        ["19-نقض دعوى الرافضي وجود رواية كسر الضلع في كتب أهل السنة ..."],
        ["20-حين يجمح الخيال المريض بالمنصرين وأتباعهم من الملاحدة ..."],
        ["21-الملاحدة والعلمانيون والانتقال للثناء على الجاهليين "],
        ["22-الرد على من أنكر وجود موقوف له حكم الرفع ..."],
        ["23-مفارقة أينشتاين والبراءة من القنبلة الذرية ..."],
        ["24-الكنيسة الأرثودكسية المصرية : فكرة اللاطائفية فكرة لاعقلانية "],
        ["25-عدنان إبراهيم والاستهزاء بعقول متابعيه ..."],
        [
          "26-قول ابن تيمية في تسلسل الحوادث وسوء فهم عدنان إبراهيم وأحمد سعد زايد ",
        ],
        ["27-قلب أدلة كارل ساغان على التطور "],
        ["28-براءة أم المؤمنين خديجة مما افتراه عليها الملحد حامد عبد الصمد"],
        ["29-نقض طعن أحمد عمارة في الصحابة الكرام ..."],
        ["30-عراب الملاحدة دوكنز : حتى لو كانت المثلية جينية فليست حتمية .."],
        ["31-راسل : التعاسة التي جلبتها لنا الديمقراطية ..."],
        ["32-نيتشة : الشفقة رذيلة في قانون الانتخاب الطبيعي ..."],
        ["33-يتكلمون وكأن الجنة ملكهم ..."],
        ["34-ريتشارد دوكنز والعنصرية البشرية ..."],
        ["35-نبينا أولى بالتعجب من المسيح عليهما الصلاة والسلام ..."],
        ["36-ليسوا شعب الله المختار ..."],
        ["37-فخ العلموية ..."],
        ["38-براءة شيخ الإسلام من الطعن في أم المؤمنين "],
        ["39-الحرية أم الديمقراطية ( مدخل لنقد أوهام مقدسي الغرب ) "],
        ["40-نقض شبهة إسنادية حول حديث ابن عباس في انشقاق القمر "],
        ["41-حقيقة الكفر العملي عند الجهمية وتوضيح مسألة قصد الكفر"],
        ["42-وهم التعايش ..."],
        ["43-الشعر الجاهلي وتثبيت دلالة النبوة "],
        ["44-وهم الحرية والمساواة ! "],
        ["45-طاغوت الصدفة في الديانة العلموية ..."],
        ["46-أكثر من طوفان لتسلم النظرية ..."],
        ["47-براءة الخليل بن أحمد من تحريف صفة العلو "],
        ["48-أألف هاشمية لا تحصن لأنهن مستأجرات يا رافضة ! "],
        ["49-التحذير من التسليم لنماذج الماديين العلمويين "],
        [
          "50-الفلسفات الغربية السائدة في العصر الحديث وأثرها على الأخلاق والقيم ",
        ],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

bot.action("2 التوحيد والعقيدة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply("إختر مقالة 👇", {
    reply_markup: {
      keyboard: [
        [
          "1-تثبيت حفظ الكتاب والسنة من عكس أدلة بارت إيرمات على تحريف الكتاب المقدس",
        ],
        ["2-بعيداً عن التقديس وليس بعيداً عن التدليس .."],
        ["3-بل أنتم من مرد على النفاق معاشر التنويريين "],
        ["4-براءة عبد الله بن عمر من رد حديث أبي هريرة"],
        ["5-تعقيب على حاتم العوني فيما ذكره عن المحدثين في أبي حنيفة "],
        ["6-عدنان بين عرض أبي جهل وعرض معاوية ! "],
        ["7-نقض شبهة خبر ( فأدخلني في اللحاف فصرنا ثلاثة )"],
        ["8-الأنصار دليل مستقل من دلائل النبوة "],
        ["9-بيان كذب السمهوري على ابن تيمية في مسألتي الأمية والكيمياء "],
        ["10-الحل العلماني لمشكلة تعدد المذاهب والفرق الإسلامية ..."],
        ["11-هل أباح الله لنا نكاح الفاجرات يا ياسر الخبيث ..."],
        ["12-تعقيب على أحمد الحازمي في إقراره دليل الحدوث بصيغته الكلامية "],
        ["13-البرهان على أن الصحابة غير داخلين في القوم الذين يذادون عن الحوض"],
        ["14-الحكمة من ذكر قصة زواج زينب بنت جحش من زيد بن حارثة في القرآن "],
        [
          "15-من تناقض الرافضة وعدنان إبراهيم في استدلالهم بحديث ( أنا حرب لمن حاربتم وسلم لمن سالمتم)",
        ],
        ["16-تثبيت صحة أثر عمر في السمع والطاعة والرد على خالد الحايك ..."],
        ["17-هل دعا ابن باجه إلى فصل الفلسفة عن الدين ؟"],
        ["18-براءة أبي الريحان البيروني من تهمة الرفض ..."],
        ["19-تعقيب على صاحب كتاب الكون الأحدب ..."],
        ["20-لفظة ( مخانيث ) في التوصيف العقدي بين ابن تيمية والغزالي "],
        ["21-تصريح ابن سينا بالنهي عن تدريس العوام الفلسفة ! "],
        ["22-هل خدع أبو موسى الأشعري يوم التحكيم ( رد على عمرو بسيوني )"],
        ["23-من دلائل النبوة في حكمي الإحرام والاعتكاف "],
        [
          "24-اعتراض الرازي على قول من قال عقل النبي أكمل العقول وإليه ينبغي الرجوع ...",
        ],
        ["25-حال الحمس في الجاهلية دليل من دلائل النبوة ..."],
        ["26-نقض كلام بعض متأخري الشافعية في تجويز الذبح للرسول أو الكعبة ..."],
        ["27-تعقيب على تعليق عدنان إبراهيم على مؤتمر الشيشان ..."],
        ["28-هل أعطى عثمان لمروان بن الحكم خمس خراج افريقية ؟"],
        ["29-ثلاث شبهات داحضة على معاوية وعمرو بن العاص ..."],
        ["30-نقض زندقة عدنان إبراهيم في تسميته رب العالمين تسمية الأثنى "],
        ["31-دليل نبوة تاريخي جديد عجيب ! "],
        [
          "32-كذب عدنان إبراهيم على الفقهاء في مسألة دفن المنتحر في مقابر المسلمين ...",
        ],
        [
          "33-بين تكفير الواحدي لشيخ الصوفية السلمي وتكفيرنا للجهمية منكري العلو",
        ],
        ["34-الرازي ينقض على أصحابه من حيث لا يشعر"],
        ["35-نقض طعن عدنان إبراهيم في الإمام أحمد وابن تيمية "],
        ["36-ثناء عبد الله بن عمر بن الخطاب على سخاء معاوية بن أبي سفيان ..."],
        ["37-براهين وقرائن جديدة على حفظ السنة "],
        ["38-كذب عدنان إبراهيم على الفقهاء والتاريخ والصحابة ..."],
        ["39-باب من قتلته الرافضة على السنة وجهله أكثر الناس ..."],
        ["40-نقض طعن عدنان إبراهيم في عيينة بن حصن الفزاري ..."],
        [
          "41-التنبيه على كذب قصة منع معاوية لعطاء الحسين ( رد على عدنان إبراهيم )",
        ],
        ["42-كذب عدنان إبراهيم على أبي هريرة في موضوع الأخوة الإنسانية"],
        ["43-عدنان إبراهيم والكذب على الصحيحين وتناقضات منهجية"],
        ["44-عدنان إبراهيم والبتر من الروايات التاريخية المكذوبة"],
        ["45-نقض طعن عدنان إبراهيم في خالد بن يزيد بن معاوية ..."],
        ["46-نقض طعن عدنان إبراهيم في حديث ( شفاعتي لأهل الكبائر من أمتي )"],
        ["47-هل الرجم اختراع عباسي ؟"],
        ["48-نقض شبهة ( عريانا يجر ثوبه )"],
        ["49-تعقيب على مقطع مصطفى العدوي وتلميذه حول رؤية الله في المنام "],
        ["50-جلال الدين الرومي مولى عدنان إبراهيم ..."],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

bot.action("3 التوحيد والعقيدة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply("إختر مقالة 👇", {
    reply_markup: {
      keyboard: [
        ["1-نقض شبهة سبايا أوطاس ..."],
        ["2-الرازي الأشعري : القرآن ليس هدى في الإلهيات والنبوات"],
        ["3-أنت في واد وعلي بن أبي طالب في واد يا عدنان "],
        ["4-سلف ابن تيمية في تعريف الإيمان لغة بأنه تصديق وزيادة "],
        ["5-الأعمش وهوس عدنان إبراهيم والرافضة ..."],
        ["6-كذب عدنان إبراهيم في دعواه أن النبي رأى بلالاً في المعراج ..."],
        [
          "7-أعظم الذكر الذي غفل عنه النبي صلى الله عليه وسلم والصحابة وعلمه الرازي بزعمه ",
        ],
        ["8-نقض طعن عبد الرحمن الحجي في تفاسير السلف ..."],
        ["9-عدنان إبراهيم والنيوترون ( قصة فيها عظة ) ! "],
        ["10-عدنان إبراهيم بين التكذيب بالمتواترات ونشر الموضوعات والمنكرات "],
        ["11-تناقض دعاة النسبية الأخلاقية من الليبراليين والملاحدة"],
        ["12-الرافضة بين التصديق بكتاب سليم بن قيس والتكذيب بالمتواترات "],
        ["13-حاتم العوني بين منهج المتقدمين في الحديث ومنهجهم في العقيدة ..."],
        [
          "14-حل إشكال في خبر ( فَتُوُفِّيَ رَسُولُ اللهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ ، وَهُنَّ فِيمَا يُقْرَأُ مِنَ الْقُرْآنِ)",
        ],
        [
          "15-بين معجزات السيد المسيح ( يسوع ) ومعجزات النبي محمد صلى الله عليهما وسلم ",
        ],
        ["16-ولكن الاشتراك المعنوي يدمر تجهمك يا عدنان ..."],
        ["17-لو كانوا أحياءاً لكفروك وما ترحموا عليك !"],
        ["18-نقض طعن عدنان إبراهيم في ترجمان القرآن عبد الله بن عباس "],
        [
          "19-كذب عدنان إبراهيم على ابن تيمية في تفسير حديث ( لا تفضلوني على يونس بن متى )",
        ],
        ["20-عدنان إبراهيم بين الامتنان للنمسا وجحود فضل الصحابة ..."],
        [
          "21-تعقيب على عدنان إبراهيم في نسبته مذهب الجبرية إلى جماهير المسلمين",
        ],
        ["22-حقيقة فصل الدين عن الدولة في أوروبا ..."],
        ["23-لماذا لم يقبل الإمام أحمد عذر داود الأصبهاني ؟ "],
        ["24-آية في سورة الكهف تنقض بنيان عامة أهل البدع ..."],
        ["25-نقض طعن الرافضة في الكسائي صاحب اللغة ..."],
        ["26-معضلات تواجه الفكر العلماني ..."],
        ["27-نظرة في التشريعات الإسلامية التي تدل على النبوة ..."],
        ["28-عبادة الشمس في الحضارات القديمة وآثارها الباقية اليوم ..."],
        ["29-بين الإمام البخاري و مانيتون المؤرخ المصري "],
        ["30-براءة الدارقطني من الطعن في ابن قتيبة ..."],
        ["31-عبقرية البخاري تتصدى لجهالات الروافض ..."],
        [
          "32-دليل نبوة جديد من التاريخ الفرعوني : فما بكت عليهم السماء والأرض ",
        ],
        ["33-نظرة إسلامية في تاريخ هيرودوت ( هيرودتس ) اليوناني ..."],
        ["34-اعتراف كاتبة إيطالية أن تحرير السود في أوروبا كان ضرورة وحيلة "],
        ["35-ابن رشد : المحنة المختلقة ..."],
        [
          "36-قاعدة في أن إظهار الشريعة في بلاد الكفر أقوى في الدلالة على إسلام المظهر ...",
        ],
        ["37-حلمي القمص يعقوب يثبت النبوة من حيث لا يشعر ..."],
        ["38-تصحيح مفاهيم خاطئة حول حمورابي وشريعته ..."],
        ["39-بين وجادات التطوريين ووجادات المحدثين ..."],
        ["40-الدفاع عن كتاب السنة للإمام ابن الإمام عبد الله بن أحمد ..."],
        ["41-وهم لمحمود شاكر استغله الملاحدة ..."],
        ["42-أثر الجهمية وعلم الكلام على متأخري اليهود...."],
        ["43-الداروينية والديمقراطية ضدان لا يجتمعان "],
        ["44-بين ما حصل لبني قريظة وما حصل لسبط بنيامين ..."],
        ["45-لا دفاعاً عن الخطيب بل حباً في الإنصاف "],
        ["46-نظرة في الصراع بين الإلحاد والنصرانية في الغرب ..."],
        ["47-النفاق المعرفي عند أدعياء الثقافة العرب ..."],
        ["48-أرادوا أن يطعنوا في نبوته فأثبتوها ..."],
        ["49-شبهات داحضة على القرآن والحديث ...."],
        ["50-هل كان أئمة السلف علماء سلاطين ؟"],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

bot.action("4 التوحيد والعقيدة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply("إختر مقالة 👇", {
    reply_markup: {
      keyboard: [
        ["1-من تناقض التطوريين في سؤالهم ( لماذا تعدد الأعراق ) ؟"],
        ["2-نقض شبهة رافضية حول خبر ورقة بن نوفل ..."],
        ["3-ماذا خسر الناس بترك المسلمين للجهاد ..."],
        ["4-الأثر الخيالي لبني أمية على العقيدة والحديث ..."],
        ["5-الرد على بدر بن علي العتيبي في شأن أبي حنيفة ..."],
        ["6-بين تدوين الكتاب المقدس وتدوين السنة النبوية ( الموطأ نموذجاً ) "],
        ["7-بين حفظ أبي هريرة وكرامات عدنان إبراهيم المزعومة ..."],
        [
          "8-الرشديون الجدد : درء تعارض البحث التجريبي الصحيح مع المنقول القطعي الصريح ...",
        ],
        ["9-تعقيب على مقطع يوسف الغفيص في أبي إسماعيل الأنصاري ..."],
        ["10-هل حديث ( خلق الله التربة يوم السبت ) إسرائيلية ؟"],
        ["11-قصة الأعرابي مع معاوية ( ما أشبه عجيزتك بعجيزة أمك هند ) ..."],
        ["12-الدفاع عن حديث ( شق الصدر )"],
        ["13-الدفاع عن الصحابي ضرار بن الأزور ..."],
        ["14-الدفاع عن آية انشقاق القمر ..."],
        ["15-من منظور إلحادي : ما الذي جعل الإنسان مقدساً وله حقوق يفرضها !"],
        ["16-اعتراف مكي بن أبي طالب أن تحريفات الجهمية تنقض العربية ..."],
        ["17-بل هو الصادق الأمين وإن رغم أنفك ..."],
        ["18-الدفاع عن حديث ( خلق الله آدم على صورته طوله ستون ذراعاً ) "],
        ["19-من أشبه باليهود أهل السنة أم الوعيدية ..."],
        ["20-لطيفة : ما رواه الكلبي في فضل أبي بكر وعمر وعثمان ..."],
        ["21-نقض افتراء أبي محمد المقدسي على أئمة الدعوة النجدية ..."],
        ["22-قضاة الجهمية بين إيذاء أهل السنة وترك الزنادقة ..."],
        ["23-جواب على طعونات ساقطة في معاوية بن أبي سفيان ..."],
        ["24-فكيف لو رأى ابن عباس ما أحدث الناس ؟ "],
        ["25-من فضل معاوية المغيب : أرجع جيشاً لحديث سمعه ..."],
        ["26-قلب الاستدلال على الأشعرية بأسانيد أئمتهم ..."],
        ["27-من تاريخ الأشعرية في التوسع في الدماء "],
        ["28-بين حديث الكذبات الثلاث وتجويز الخوئي الافتراء على المخالفين "],
        ["29-بيان كذب أسطورة المسجد الأقصى في الطائف التي اخترعها يوسف زيدان "],
        ["30-انتحال أهل البيت بالباطل طريق الزنادقة ..."],
        ["31-حتى ابن حزم لا يوافقكم معاشر الإباحيين ..."],
        ["32-لسان حالهم : الإنسان أقدس من الله ..."],
        ["33-أثران نفيسان في مسألتين هامتين ..."],
        ["34-حرية الاعتقاد دين أبي جهل ..."],
        ["35-من كذب الجهمية على السلف في التفسير "],
        [
          "36-وقفة مع مقطع ( هل سمعت قصة دفاع الله عن اليهودي الذي ظلمه بعض الصحابة)؟ ",
        ],
        ["37-غلاة الصوفية بين تقديس الشيوخ وانتقاص الأنبياء ..."],
        ["38-من أظهر دلائل النبوة وقل من يتفطن لها ..."],
        ["39-السلفية قطعية قرآنية وخيار عقلاني ..."],
        ["40-براءة عقبة بن عامر مما ذكره النووي في تهذيب الأسماء واللغات"],
        ["41-الرد على ياسر الحبيب في إلحاده في آيات الله "],
        ["42-من تجهم حسن البنا ..."],
        [
          "43-الرد كذب عدنان إبراهيم في دعواه أن قتلى بني قريظة معظمهم لا ذنب لهم ",
        ],
        ["44-هلا اتعظ الإخوان بكلام إمامهم حسن البنا "],
        ["45-وقفة مع القشيري في نفيه الحكمة عن آيات المواريث "],
        ["46-براءة عبد الله بن عباس من معارضة السنة بالرأي "],
        ["47-تنفير قيادات الإخوان القديمة من دراسة العقيدة ..."],
        ["48-هلا اعتبر الصوفية بكلام متقدميهم ..."],
        ["49-نقض زندقة عدنان إبراهيم في المواريث ..."],
        [
          "50-بيان كذب عدنان إبراهيم وتناقضه في دعواه أن مسلم بن عقبة كان صحابياً ",
        ],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

bot.action("5 التوحيد والعقيدة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply("إختر مقالة 👇", {
    reply_markup: {
      keyboard: [
        ["1-نقض نشرة في تجويز بناء المساجد على القبور ..."],
        ["2-براءة معاوية بن أبي سفيان من تعطيل الحدود ..."],
        ["3-باب في بعض من لم تأخذه في الله لومة لائم ..."],
        ["4-التنبيه على قولهم ( معاداة السامية ) و ( نجمة داود ) ..."],
        ["5-من قرمطة الأشعرية الجهمية للأخ أبي سعيد الرادسي ..."],
        ["6-الرد على عدنان إبراهيم في كذبه على الصحابة والشريعة الإسلامية ..."],
        ["7-مراجعات في مسائل عقيدية ..."],
        ["8-التنبيه على تحريف في أثر ميمون بن مهران في تعريف الخوارج"],
        ["9-الرد على سالم الجكني في دفاعه عن تفسير الرازي للأخ آلان الكردي "],
        ["10-مناقشة يوسف الغفيص في كلامه عن أبي حنيفة لأبي سعيد الرادسي ..."],
        ["11-الرد على عبد الإله العرفج في قياسه المولد على صلاة القيام ..."],
        ["12-قطعيات قرآنية نكشفها للمدعو عدنان إبراهيم ..."],
        ["13-تناقض السفاريني في عده الأشعرية من أهل السنة ..."],
        ["14-من عدل معاوية الذي غيبوه !"],
        ["15-خرافات علمانية ..."],
        ["16-تناقض المستدلين بحديث النهي عن كتابة الحديث ..."],
        [
          "17-باب في أن مقالة الأشعرية في العلو أخبث من مقالة الجهمية الأولى للأخ أبي سعيد الرادسي",
        ],
        ["18-ابن فورك الأشعري يكفر بمقالة قالها السلف !"],
        ["19-المقدسي ينكر على السعدي لفظاً نبوياً !"],
        ["20-ابن فورك الأشعري : شبهة عبادة الأصنام دخلت على أكثر العوام ..."],
        ["21-النووي يحكم على إمامه الأشعري بأنه تكلم بما ينافي الإيمان ..."],
        ["22-عقيدة ماء الحياة في مجمع البحرين ..."],
        ["23-سلف الدعاة إلى ( تجديد الخطاب الديني ) أو تغيير المناهج "],
        ["24-نقض طعن الماتردي في حماد بن سلمة ..."],
        ["25-من تناقضات الليبراليين والديمقراطيين "],
        ["26-أبو منصور الماتردي يكذب على النبي نصرة للتجهم ..."],
        ["27-باب فيمن صدق نظرية التطور وكذب بالأحاديث الصحيحة ..."],
        ["28-توضيح إجماع حرب الكرماني في تكفير من لم يكفر الجهمية بأصنافها "],
        ["29-التنبيه على أخطاء بعض المتكلمين في الماسونية وأشراط الساعة "],
        ["30-إما وحي ونظر أو طاغوتية وتيه "],
        ["31-نقض شبهة جهمية في العلو ..."],
        ["32-بيان كذب الكتاب المنسوب لعمر بن الخطاب في أمر القدر ..."],
        ["33-نفيسة : إثبات ابن مسعود لصفة الساق بإسناد صحيح عنه "],
        ["34-نقض أسطورة ( صحيح البخاري لم يروه ولم يشرحه إلا الأشعرية ) "],
        ["35-عذاب القبر حقيقة قرآنية قطعية ..."],
        ["36-إيضاح مسألة هل كان الأنبياء على الكفر قبل البعثة ؟"],
        ["37-الرد على من ادعى أن تبعاً كان نبيا ؟"],
        ["38-قام مقام الأنبياء ..."],
        ["39-أسطورة ابن رشد التنويري"],
        ["40-بحث في العقيدة التي رواها محمد بن عوف الحمصي عن الإمام أحمد "],
        ["41-فأفحم الرافضي ..."],
        ["42-الرد على من أنكر خلق حواء من ضلع آدم "],
        ["43-فائدة في الرد على نفاة القياس من قصة زكريا ومريم "],
        ["44-تزكية أبي الدرداء لمعاوية بن أبي سفيان رضي الله عنهم "],
        ["45-وجود عبد الله بن سبأ حقيقة تاريخية قطعية ..."],
        ["46-بين سرقة الرضواني والتنكر لأئمة الدعوة "],
        ["47-فائدة في عقيدة يحيى بن سلام المغربي المفسر ..."],
        [
          "48-فائدة حديثية عقدية : تصحيح سفيان الثوري لحديث ( رأيت ربي في أحسن صورة ) ",
        ],
        ["49-جواب شبهة قبورية في بناء المساجد على القبور "],
        ["50-رد مقاتل بن سليمان على من طعن على النبي في كثرة النكاح "],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

bot.action("6 التوحيد والعقيدة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply("إختر مقالة 👇", {
    reply_markup: {
      keyboard: [
        ["1-"],
        ["2-"],
        ["3-"],
        ["4-"],
        ["5-"],
        ["6-"],
        ["7-"],
        ["8-"],
        ["9-"],
        ["10-"],
        ["11-"],
        ["12-"],
        ["13-"],
        ["14-"],
        ["15-"],
        ["16-"],
        ["17-"],
        ["18-"],
        ["19-"],
        ["20-"],
        ["21-"],
        ["22-"],
        ["23-"],
        ["24-"],
        ["25-"],
        ["26-"],
        ["27-"],
        ["28-"],
        ["29-"],
        ["30-"],
        ["31-"],
        ["32-"],
        ["33-"],
        ["34-"],
        ["35-"],
        ["36-"],
        ["37-"],
        ["38-"],
        ["39-"],
        ["40-"],
        ["41-"],
        ["42-"],
        ["43-"],
        ["44-"],
        ["45-"],
        ["46-"],
        ["47-"],
        ["48-"],
        ["49-"],
        ["50-"],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

bot.action("7 التوحيد والعقيدة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply("إختر مقالة 👇", {
    reply_markup: {
      keyboard: [
        ["1-"],
        ["2-"],
        ["3-"],
        ["4-"],
        ["5-"],
        ["6-"],
        ["7-"],
        ["8-"],
        ["9-"],
        ["10-"],
        ["11-"],
        ["12-"],
        ["13-"],
        ["14-"],
        ["15-"],
        ["16-"],
        ["17-"],
        ["18-"],
        ["19-"],
        ["20-"],
        ["21-"],
        ["22-"],
        ["23-"],
        ["24-"],
        ["25-"],
        ["26-"],
        ["27-"],
        ["28-"],
        ["29-"],
        ["30-"],
        ["31-"],
        ["32-"],
        ["33-"],
        ["34-"],
        ["35-"],
        ["36-"],
        ["37-"],
        ["38-"],
        ["39-"],
        ["40-"],
        ["41-"],
        ["42-"],
        ["43-"],
        ["44-"],
        ["45-"],
        ["46-"],
        ["47-"],
        ["48-"],
        ["49-"],
        ["50-"],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

bot.action("8 التوحيد والعقيدة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply("إختر مقالة 👇", {
    reply_markup: {
      keyboard: [
        ["1-"],
        ["2-"],
        ["3-"],
        ["4-"],
        ["5-"],
        ["6-"],
        ["7-"],
        ["8-"],
        ["9-"],
        ["10-"],
        ["11-"],
        ["12-"],
        ["13-"],
        ["14-"],
        ["15-"],
        ["16-"],
        ["17-"],
        ["18-"],
        ["19-"],
        ["20-"],
        ["21-"],
        ["22-"],
        ["23-"],
        ["24-"],
        ["25-"],
        ["26-"],
        ["27-"],
        ["28-"],
        ["29-"],
        ["30-"],
        ["31-"],
        ["32-"],
        ["33-"],
        ["34-"],
        ["35-"],
        ["36-"],
        ["37-"],
        ["38-"],
        ["39-"],
        ["40-"],
        ["41-"],
        ["42-"],
        ["43-"],
        ["44-"],
        ["45-"],
        ["46-"],
        ["47-"],
        ["48-"],
        ["49-"],
        ["50-"],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

bot.action("9 التوحيد والعقيدة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply("إختر مقالة 👇", {
    reply_markup: {
      keyboard: [
        ["1-"],
        ["2-"],
        ["3-"],
        ["4-"],
        ["5-"],
        ["6-"],
        ["7-"],
        ["8-"],
        ["9-"],
        ["10-"],
        ["11-"],
        ["12-"],
        ["13-"],
        ["14-"],
        ["15-"],
        ["16-"],
        ["17-"],
        ["18-"],
        ["19-"],
        ["20-"],
        ["21-"],
        ["22-"],
        ["23-"],
        ["24-"],
        ["25-"],
        ["26-"],
        ["27-"],
        ["28-"],
        ["29-"],
        ["30-"],
        ["31-"],
        ["32-"],
        ["33-"],
        ["34-"],
        ["35-"],
        ["36-"],
        ["37-"],
        ["38-"],
        ["39-"],
        ["40-"],
        ["41-"],
        ["42-"],
        ["43-"],
        ["44-"],
        ["45-"],
        ["46-"],
        ["47-"],
        ["48-"],
        ["49-"],
        ["50-"],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});
bot.action("10 التوحيد والعقيدة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply("إختر مقالة 👇", {
    reply_markup: {
      keyboard: [
        ["1-"],
        ["2-"],
        ["3-"],
        ["4-"],
        ["5-"],
        ["6-"],
        ["7-"],
        ["8-"],
        ["9-"],
        ["10-"],
        ["11-"],
        ["12-"],
        ["13-"],
        ["14-"],
        ["15-"],
        ["16-"],
        ["17-"],
        ["18-"],
        ["19-"],
        ["20-"],
        ["21-"],
        ["22-"],
        ["23-"],
        ["24-"],
        ["25-"],
        ["26-"],
        ["27-"],
        ["28-"],
        ["29-"],
        ["30-"],
        ["31-"],
        ["32-"],
        ["33-"],
        ["34-"],
        ["35-"],
        ["36-"],
        ["37-"],
        ["38-"],
        ["39-"],
        ["40-"],
        ["41-"],
        ["42-"],
        ["43-"],
        ["44-"],
        ["45-"],
        ["46-"],
        ["47-"],
        ["48-"],
        ["49-"],
        ["50-"],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});
bot.action("11 التوحيد والعقيدة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply("إختر مقالة 👇", {
    reply_markup: {
      keyboard: [
        ["1-"],
        ["2-"],
        ["3-"],
        ["4-"],
        ["5-"],
        ["6-"],
        ["7-"],
        ["8-"],
        ["9-"],
        ["10-"],
        ["11-"],
        ["12-"],
        ["13-"],
        ["14-"],
        ["15-"],
        ["16-"],
        ["17-"],
        ["18-"],
        ["19-"],
        ["20-"],
        ["21-"],
        ["22-"],
        ["23-"],
        ["24-"],
        ["25-"],
        ["26-"],
        ["27-"],
        ["28-"],
        ["29-"],
        ["30-"],
        ["31-"],
        ["32-"],
        ["33-"],
        ["34-"],
        ["35-"],
        ["36-"],
        ["37-"],
        ["38-"],
        ["39-"],
        ["40-"],
        ["41-"],
        ["42-"],
        ["43-"],
        ["44-"],
        ["45-"],
        ["46-"],
        ["47-"],
        ["48-"],
        ["49-"],
        ["50-"],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});
bot.action("12 التوحيد والعقيدة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply("إختر مقالة 👇", {
    reply_markup: {
      keyboard: [
        ["1-"],
        ["2-"],
        ["3-"],
        ["4-"],
        ["5-"],
        ["6-"],
        ["7-"],
        ["8-"],
        ["9-"],
        ["10-"],
        ["11-"],
        ["12-"],
        ["13-"],
        ["14-"],
        ["15-"],
        ["16-"],
        ["17-"],
        ["18-"],
        ["19-"],
        ["20-"],
        ["21-"],
        ["22-"],
        ["23-"],
        ["24-"],
        ["25-"],
        ["26-"],
        ["27-"],
        ["28-"],
        ["29-"],
        ["30-"],
        ["31-"],
        ["32-"],
        ["33-"],
        ["34-"],
        ["35-"],
        ["36-"],
        ["37-"],
        ["38-"],
        ["39-"],
        ["40-"],
        ["41-"],
        ["42-"],
        ["43-"],
        ["44-"],
        ["45-"],
        ["46-"],
        ["47-"],
        ["48-"],
        ["49-"],
        ["50-"],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});
bot.action("13 التوحيد والعقيدة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply("إختر مقالة 👇", {
    reply_markup: {
      keyboard: [
        ["1-"],
        ["2-"],
        ["3-"],
        ["4-"],
        ["5-"],
        ["6-"],
        ["7-"],
        ["8-"],
        ["9-"],
        ["10-"],
        ["11-"],
        ["12-"],
        ["13-"],
        ["14-"],
        ["15-"],
        ["16-"],
        ["17-"],
        ["18-"],
        ["19-"],
        ["20-"],
        ["21-"],
        ["22-"],
        ["23-"],
        ["24-"],
        ["25-"],
        ["26-"],
        ["27-"],
        ["28-"],
        ["29-"],
        ["30-"],
        ["31-"],
        ["32-"],
        ["33-"],
        ["34-"],
        ["35-"],
        ["36-"],
        ["37-"],
        ["38-"],
        ["39-"],
        ["40-"],
        ["41-"],
        ["42-"],
        ["43-"],
        ["44-"],
        ["45-"],
        ["46-"],
        ["47-"],
        ["48-"],
        ["49-"],
        ["50-"],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});
bot.action("14 التوحيد والعقيدة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply("إختر مقالة 👇", {
    reply_markup: {
      keyboard: [
        ["1-"],
        ["2-"],
        ["3-"],
        ["4-"],
        ["5-"],
        ["6-"],
        ["7-"],
        ["8-"],
        ["9-"],
        ["10-"],
        ["11-"],
        ["12-"],
        ["13-"],
        ["14-"],
        ["15-"],
        ["16-"],
        ["17-"],
        ["18-"],
        ["19-"],
        ["20-"],
        ["21-"],
        ["22-"],
        ["23-"],
        ["24-"],
        ["25-"],
        ["26-"],
        ["27-"],
        ["28-"],
        ["29-"],
        ["30-"],
        ["31-"],
        ["32-"],
        ["33-"],
        ["34-"],
        ["35-"],
        ["36-"],
        ["37-"],
        ["38-"],
        ["39-"],
        ["40-"],
        ["41-"],
        ["42-"],
        ["43-"],
        ["44-"],
        ["45-"],
        ["46-"],
        ["47-"],
        ["48-"],
        ["49-"],
        ["50-"],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});
bot.action("15 التوحيد والعقيدة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply("إختر مقالة 👇", {
    reply_markup: {
      keyboard: [
        ["1-"],
        ["2-"],
        ["3-"],
        ["4-"],
        ["5-"],
        ["6-"],
        ["7-"],
        ["8-"],
        ["9-"],
        ["10-"],
        ["11-"],
        ["12-"],
        ["13-"],
        ["14-"],
        ["15-"],
        ["16-"],
        ["17-"],
        ["18-"],
        ["19-"],
        ["20-"],
        ["21-"],
        ["22-"],
        ["23-"],
        ["24-"],
        ["25-"],
        ["26-"],
        ["27-"],
        ["28-"],
        ["29-"],
        ["30-"],
        ["31-"],
        ["32-"],
        ["33-"],
        ["34-"],
        ["35-"],
        ["36-"],
        ["37-"],
        ["38-"],
        ["39-"],
        ["40-"],
        ["41-"],
        ["42-"],
        ["43-"],
        ["44-"],
        ["45-"],
        ["46-"],
        ["47-"],
        ["48-"],
        ["49-"],
        ["50-"],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});
bot.action("16 التوحيد والعقيدة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply("إختر مقالة 👇", {
    reply_markup: {
      keyboard: [
        ["1-"],
        ["2-"],
        ["3-"],
        ["4-"],
        ["5-"],
        ["6-"],
        ["7-"],
        ["8-"],
        ["9-"],
        ["10-"],
        ["11-"],
        ["12-"],
        ["13-"],
        ["14-"],
        ["15-"],
        ["16-"],
        ["17-"],
        ["18-"],
        ["19-"],
        ["20-"],
        ["21-"],
        ["22-"],
        ["23-"],
        ["24-"],
        ["25-"],
        ["26-"],
        ["27-"],
        ["28-"],
        ["29-"],
        ["30-"],
        ["31-"],
        ["32-"],
        ["33-"],
        ["34-"],
        ["35-"],
        ["36-"],
        ["37-"],
        ["38-"],
        ["39-"],
        ["40-"],
        ["41-"],
        ["42-"],
        ["43-"],
        ["44-"],
        ["45-"],
        ["46-"],
        ["47-"],
        ["48-"],
        ["49-"],
        ["50-"],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});
bot.action("17 التوحيد والعقيدة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply("إختر مقالة 👇", {
    reply_markup: {
      keyboard: [
        ["1-"],
        ["2-"],
        ["3-"],
        ["4-"],
        ["5-"],
        ["6-"],
        ["7-"],
        ["8-"],
        ["9-"],
        ["10-"],
        ["11-"],
        ["12-"],
        ["13-"],
        ["14-"],
        ["15-"],
        ["16-"],
        ["17-"],
        ["18-"],
        ["19-"],
        ["20-"],
        ["21-"],
        ["22-"],
        ["23-"],
        ["24-"],
        ["25-"],
        ["26-"],
        ["27-"],
        ["28-"],
        ["29-"],
        ["30-"],
        ["31-"],
        ["32-"],
        ["33-"],
        ["34-"],
        ["35-"],
        ["36-"],
        ["37-"],
        ["38-"],
        ["39-"],
        ["40-"],
        ["41-"],
        ["42-"],
        ["43-"],
        ["44-"],
        ["45-"],
        ["46-"],
        ["47-"],
        ["48-"],
        ["49-"],
        ["50-"],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});
bot.action("18 التوحيد والعقيدة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply("إختر مقالة 👇", {
    reply_markup: {
      keyboard: [
        ["1-"],
        ["2-"],
        ["3-"],
        ["4-"],
        ["5-"],
        ["6-"],
        ["7-"],
        ["8-"],
        ["9-"],
        ["10-"],
        ["11-"],
        ["12-"],
        ["13-"],
        ["14-"],
        ["15-"],
        ["16-"],
        ["17-"],
        ["18-"],
        ["19-"],
        ["20-"],
        ["21-"],
        ["22-"],
        ["23-"],
        ["24-"],
        ["25-"],
        ["26-"],
        ["27-"],
        ["28-"],
        ["29-"],
        ["30-"],
        ["31-"],
        ["32-"],
        ["33-"],
        ["34-"],
        ["35-"],
        ["36-"],
        ["37-"],
        ["38-"],
        ["39-"],
        ["40-"],
        ["41-"],
        ["42-"],
        ["43-"],
        ["44-"],
        ["45-"],
        ["46-"],
        ["47-"],
        ["48-"],
        ["49-"],
        ["50-"],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});
bot.action("19 التوحيد والعقيدة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply("إختر مقالة 👇", {
    reply_markup: {
      keyboard: [
        ["1-"],
        ["2-"],
        ["3-"],
        ["4-"],
        ["5-"],
        ["6-"],
        ["7-"],
        ["8-"],
        ["9-"],
        ["10-"],
        ["11-"],
        ["12-"],
        ["13-"],
        ["14-"],
        ["15-"],
        ["16-"],
        ["17-"],
        ["18-"],
        ["19-"],
        ["20-"],
        ["21-"],
        ["22-"],
        ["23-"],
        ["24-"],
        ["25-"],
        ["26-"],
        ["27-"],
        ["28-"],
        ["29-"],
        ["30-"],
        ["31-"],
        ["32-"],
        ["33-"],
        ["34-"],
        ["35-"],
        ["36-"],
        ["37-"],
        ["38-"],
        ["39-"],
        ["40-"],
        ["41-"],
        ["42-"],
        ["43-"],
        ["44-"],
        ["45-"],
        ["46-"],
        ["47-"],
        ["48-"],
        ["49-"],
        ["50-"],
        ["إرجع ◀"],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

// ------------------------------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------------------------------ //

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& //
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& يوتيوب &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& //
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& //

bot.hears("قوائم اليوتيوب ⏯", async (ctx) => {
  await ctx.reply("إختر قائمة👇", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "خواطر قرآنية لطلبة العلم",
            callback_data: "ي-خواطر",
          },
          {
            text: "شرح كتاب الصمت لابن أبي الدنيا",
            callback_data: "ي-الصمت",
          },
        ],

        [
          {
            text: "نحو إعادة هيكلة عقل طالب العلم",
            callback_data: "ي-إعادة هيكلة",
          },
          {
            text: "نحو إعادة هيكلة تفكير الفرد المسلم المعاصر",
            callback_data: "ي-إعادة هيكلة المسلم",
          },
        ],
        [
          {
            text: "كتاب العلم لأبي خيثمة",
            callback_data: "ي-أبي خيثمة",
          },
          {
            text: "شرح كتاب التمييز للحافظ مسلم",
            callback_data: "ي-تمييز",
          },
        ],
        [
          {
            text: "سلسلة دردشة حول مدرسة المنار",
            callback_data: "ي-مدرسة المنار",
          },
          {
            text: "شرح السنة لعبد الله بن أحمد",
            callback_data: "ي-السنة لعبد الله بن أحمد",
          },
        ],
        [
          {
            text: "الدروس التثقيفية في علم الحديث",
            callback_data: "ي-تثقيف الحديث",
          },
          {
            text: "سلسلة تباريح مع الغمارين",
            callback_data: "ي-تباريح الغمارين",
          },
        ],
        [
          {
            text: "شرح عمدة الفقه",
            callback_data: "ي-عمدة الفقه",
          },
          {
            text: "شرح أخلاق حملة القرآن للإمام الآجري",
            callback_data: "ي-اخلاق الاجري",
          },
        ],
        [
          {
            text: "شرح فضائل القرآن لأبي عبيد القاسم",
            callback_data: "ي-فضائل القرآن",
          },
          {
            text: "شرح أصول السنة للإمام أحمد",
            callback_data: "ي-أصول السنة",
          },
        ],
        [
          {
            text: "دروس بث مباشر",
            callback_data: "ي-دروس بث",
          },
          {
            text: "مواد علمية متفرقة",
            callback_data: "ي-مواد علمية",
          },
        ],
        [
          {
            text: "لقاءات",
            callback_data: "ي-لقاءات",
          },
          {
            text: "فقه",
            callback_data: "ي-فقه",
          },
        ],
        [
          {
            text: "أسئلة عامة مع عبد الله الخليفي",
            callback_data: "ي-أسئلة عامة",
          },
          {
            text: "شرح الأصول من علم الأصول",
            callback_data: "ي-الأصول من الأصول",
          },
        ],
        [
          {
            text: "صوتيات قناة التلغرام الرئيسية",
            callback_data: "ي-صوتيات تلغرام",
          },
          {
            text: "شرح فضائل القرآن للحافظ الفريابي",
            callback_data: "ي-فضائل القرآن فا",
          },
        ],
        [
          {
            text: "أجوبة مختارة",
            callback_data: "ي-أجوبة مختارة",
          },
          {
            text: "مواعظ ومحاضرات",
            callback_data: "ي-مواعظ",
          },
        ],
        [
          {
            text: "صوتيات يسيرة",
            callback_data: "ي-صوتيات يسيرة",
          },
          {
            text: "سلسلة تفكيك الإعلام",
            callback_data: "ي-تفكيك الإعلام",
          },
        ],
        [
          {
            text: "شرح السيرة النبوية",
            callback_data: "ي-السيرة النبوية",
          },
          {
            text: "شرح كتاب التوبة للحافظ ابن أبي الدنيا",
            callback_data: "ي-التوبة للحافظ",
          },
        ],
        [
          {
            text: "شرح مسند الحافظ الدارمي",
            callback_data: "ي-مسند الدارمي",
          },
          {
            text: "مواد شهر رمضان",
            callback_data: "ي-مواد رمضان",
          },
        ],
        [
          {
            text: "نقض الدارمي على المريسي",
            callback_data: "ي-نقض الدارمي",
          },
          {
            text: "سلسلة اقتباسات من كتب المعاصرين",
            callback_data: "ي-اقتباسات",
          },
        ],
        [
          {
            text: "شرح كتاب شرف أصحاب الحديث",
            callback_data: "ي-شرف أصحاب",
          },
        ],
      ],

      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});

bot.action("ي-خواطر", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=ovVraAjJikg&list=PLkLIIYo0Lm4vXSVZs6tJYBz-jKgvnfMxk"
  );
});
bot.action("ي-الصمت", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=h1fBrcyaI8k&list=PLkLIIYo0Lm4vnor27qJyZ_T90-mf_H8Ak"
  );
});
bot.action("ي-شرف أصحاب", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=SWmV4HuGySE&list=PLkLIIYo0Lm4uFXTogy3QwdWDl6O8Pvhkn"
  );
});
bot.action("ي-إعادة هيكلة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=YfxvfWH7asE&list=PLkLIIYo0Lm4tkVz9bLVZ8ZXsvKoILy3S0"
  );
});
bot.action("ي-إعادة هيكلة المسلم", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=jHWQefyk_tU&list=PLkLIIYo0Lm4uJ0xAvIWkkqxDhtAEiC3Z8"
  );
});
bot.action("ي-تمييز", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=1-QyXXDqQDQ&list=PLkLIIYo0Lm4vLLM4M3yXQqrKmClshoVFf"
  );
});
bot.action("ي-أبي خيثمة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=WUpDyTd7Z1k&list=PLkLIIYo0Lm4vjNkaIav5huq1zJyw74vZ2"
  );
});
bot.action("ي-نقض الدارمي", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=ucCsV5s57Nc&list=PLkLIIYo0Lm4tfe1UHOjAgaT-f-8pglv3C"
  );
});
bot.action("ي-اقتباسات", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=9DjEaws-mz0&list=PLkLIIYo0Lm4ui3Z-IWnpNsUQj6X6K5-FX"
  );
});
bot.action("ي-مسند الدارمي", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=Ibklk6DPZWg&list=PLkLIIYo0Lm4uNT9gamlSlUfSADeSCM1Gk"
  );
});
bot.action("ي-مدرسة المنار", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=Xgcd23dsxz8&list=PLkLIIYo0Lm4v-g-xmMVZZJb1kaoLTSPGT"
  );
});
bot.action("ي-السنة لعبد الله بن أحمد", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=i0ONykYW-M4&list=PLkLIIYo0Lm4uTRJVRWbdQpmsptc1VwQ8K"
  );
});
bot.action("ي-تثقيف الحديث", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=dvM6XNB54_c&list=PLkLIIYo0Lm4s8WNz08dEDLuiy6mNZ4uR5"
  );
});
bot.action("ي-تباريح الغمارين", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=YlaoRdLInF4&list=PLkLIIYo0Lm4vdANFudfmxSSK5Nd09oys6"
  );
});
bot.action("ي-عمدة الفقه", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=Yu-SOkzyP98&list=PLkLIIYo0Lm4sd0IpM3t2DwO38AE4OnAuL"
  );
});
bot.action("ي-اخلاق الاجري", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=XJwpYqccobA&list=PLkLIIYo0Lm4ut475yMXs3w30Z3-wW1KCQ"
  );
});
bot.action("ي-فضائل القرآن", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=TTbdOpUWmJ0&list=PLkLIIYo0Lm4uDbUciqRiYuiTSwgTcHjfZ"
  );
});
bot.action("ي-أصول السنة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=AZmPxIydFfY&list=PLkLIIYo0Lm4s63kmB3IjH0XXbaXTbmbD4"
  );
});
bot.action("ي-دروس بث", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=dS0lXJDEOSw&list=PLkLIIYo0Lm4vWDfE_fSeysOC6XzfUUrye"
  );
});
bot.action("ي-مواد علمية", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=u7DsiL5_Exg&list=PLkLIIYo0Lm4sS0jhjejD1VXcI2zeX84lB"
  );
});
bot.action("ي-لقاءات", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=TGUOZ6kEcWE&list=PLkLIIYo0Lm4srltQHEtweghqjMPqP6x0V"
  );
});
bot.action("ي-فقه", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=latebYhGgOM&list=PLkLIIYo0Lm4uLqkXJ6-q-_-SAHOi_QIEY"
  );
});
bot.action("ي-أسئلة عامة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=bZeY1hhk1Ww&list=PLkLIIYo0Lm4sIXxAIDyw4KbZSpHhODkDr"
  );
});
bot.action("ي-الأصول من الأصول", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=3jdz_FO4Fks&list=PLkLIIYo0Lm4tvXf4ZOoFgZ557KqxkM6TK"
  );
});
bot.action("ي-أجوبة مختارة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=RA5Uh-3bAN0&list=PLkLIIYo0Lm4vFk8tUXFv-uKA_vuzckCuX"
  );
});
bot.action("ي-مواعظ", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=Vm9ex-9q3a8&list=PLkLIIYo0Lm4vv62F6RvHoWbTX1n_T4y3h"
  );
});
bot.action("ي-صوتيات يسيرة", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=BvxXd8SuZCU&list=PLkLIIYo0Lm4srubcb25cy9RyWf6dl3mkd"
  );
});
bot.action("ي-تفكيك الإعلام", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=SNQ3D5CJxEY&list=PLkLIIYo0Lm4vZD7FjpyB7X7oQBVqagsUf"
  );
});

bot.action("ي-السيرة النبوية", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=HbLBvuWLSck&list=PLkLIIYo0Lm4tFvTg7NRtabBz0XR0svUmN"
  );
});
bot.action("ي-التوبة للحافظ", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=ltl1pZTfmgk&list=PLkLIIYo0Lm4tsq-1UpmVJkOeME0mNLynW"
  );
});
bot.action("ي-صوتيات تلغرام", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=OM0_2TSiC9Y&list=PLkLIIYo0Lm4stJ6p2_PMHWwU-V9mbFBjA"
  );
});
bot.action("ي-فضائل القرآن فا", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=EXW1EEgYvIk&list=PLkLIIYo0Lm4sgYO0uuNl2o-BCjnORXAxZ"
  );
});
bot.action("ي-مواد رمضان", async (ctx) => {
  await ctx.answerCbQuery();

  await ctx.reply(
    "https://www.youtube.com/watch?v=8nPDSvB4x-s&list=PLkLIIYo0Lm4tHal3uaEdWEm_un6SYE8xw"
  );
});

// ------------------------------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------------------------------ //

bot.launch();
