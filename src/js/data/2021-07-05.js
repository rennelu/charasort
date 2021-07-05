dataSetVersion = "2021-07-05"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Region",
    key: "region",
    tooltip: "Check this to restrict to livers from certain regions.",
    checked: false,
    sub: [
      { name: "JP", key: "jp" },
      { name: "IN", key: "id" },
      { name: "KR", key: "kr" },
      { name: "EN", key: "en" },
      { name: "IN", key: "in" }
    ]
  },
  {
    name: "Remove boys",
    key: "boy",
    tooltip: "Check this to remove boys.",
    checked: false
  },
  {
    name: "Remove girls",
    key: "girl",
    tooltip: "Check this to remove girls.",
    checked: false
  },
  {
    name: "Remove retired members",
    key: "retired",
    tooltip: "Check this to remove graduated/retired members.",
    checked: true
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Tsukino Mito",
    img: "KWgYIBI.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Yuki Chihiro",
    img: "Xcb81tu.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Elu",
    img: "O5OjlwD.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Higuchi Kaede",
    img: "lekjc0H.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Shizuka Rin",
    img: "NRN3GaM.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Shibuya Hajime",
    img: "ytmMtTQ.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Suzuya Aki",
    img: "HGUH9IS.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Moira",
    img: "GHw0eWY.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Mononobe Alice",
    img: "lA1mmvk.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Fushimi Gaku",
    img: "XAIajUf.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Ienaga Mugi",
    img: "qiFbdZA.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Morinaka Kazaki",
    img: "4RnE12b.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Suzuka Utako",
    img: "wlJgtuq.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Ushimi Ichigo",
    img: "lz4JCHu.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Yuuhi Riri",
    img: "4Km7J2W.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Kenmochi Toya",
    img: "08PHSmg.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Gilzaren III",
    img: "eWwQ19s.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Fumino Tamaki",
    img: "xEO8yuc.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Kanae",
    img: "jmIgSRm.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Akabane Youko",
    img: "rymEqEa.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Sasaki Saku",
    img: "meGIDKt.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Yamiyono Moruru",
    img: "IQVHPrl.png",
    opts: {
      region: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Honma Himawari",
    img: "8HKx10I.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Makaino Ririmu",
    img: "gcc0GZ1.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Kuzuha",
    img: "U5fcrf6.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Setsuna",
    img: "fVix3F0.png",
    opts: {
      region: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Shiina Yuika",
    img: "iyAo2KZ.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Dola",
    img: "5LwJADr.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Hanabatake Chaika",
    img: "IvrkYCn.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Hassaku Yuzu",
    img: "v1gWlyK.png",
    opts: {
      region: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Izumo Kasumi",
    img: "pC2bGPG.png",
    opts: {
      region: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Azuchi Momo",
    img: "ZYYfLyE.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Nakao Azuma",
    img: "60g97ay.png",
    opts: {
      region: ['jp'],
      boy: true,
      retired: true
    }
  },
  {
    name: "Naruto Kogane",
    img: "OEpkB9E.png",
    opts: {
      region: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Ryushen",
    img: "BG5dxEm.png",
    opts: {
      region: ['jp'],
    }
  },
  {
    name: "Sister Claire",
    img: "4MFYKhy.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Suzuki Masaru",
    img: "3zkKfkz.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Todoroki Kyoko",
    img: "2L1lEwr.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Umiyashano Kami",
    img: "5hCj2c7.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Uzuki Kou",
    img: "ODV7JU2.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Yashiro Kizuku",
    img: "m1cAXCq.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Kanda Shoichi",
    img: "6DnLScz.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Amemori Sayo",
    img: "FrZIx77.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Takamiya Rion",
    img: "Pk2RI1r.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Asuka Hina",
    img: "1xbvwi4.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Maimoto Keisuke",
    img: "bMXOpxE.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Debidebi Debiru",
    img: "fS8rzqK.png",
    opts: {
      region: ['jp'],
    }
  },
  {
    name: "Rindou Mikoto",
    img: "N5m3P4T.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Joe Rikiichi",
    img: "0hqNu2R.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Machita Chima",
    img: "yCYseru.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Tsukimi Shizuku",
    img: "xbJYhxe.png",
    opts: {
      region: ['jp'],
      girl: true, 
      retired: true
    }
  },
  {
    name: "Sakura Ritsuki",
    img: "dnvVrNG.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Achikita Chinami",
    img: "dTdm1Pr.png",
    opts: {
      region: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Belmond Banderas",
    img: "8ImxShR.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Yaguruma Rine",
    img: "4gSgzbo.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Yumeoi Kakeru",
    img: "3zICmGc.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Kuroi Shiba",
    img: "FkwiyyM.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Harusaki Air",
    img: "1NHzHmB.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Naruse Naru",
    img: "kyB4ljo.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Warabeda Meiji",
    img: "Ak1TsSv.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Kudo Chitose",
    img: "j3J0PNa.png",
    opts: {
      region: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Gundou Mirei",
    img: "l1WcKEE.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Yuzuki Roa",
    img: "AZJhCTv.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Onomachi Haruka",
    img: "5EPLPNa.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Kataribe Tsumugu",
    img: "h0xKWQb.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Seto Miyako",
    img: "g2iwbNd.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Shindo Raito",
    img: "p4vnrLC.png",
    opts: {
      region: ['jp'],
      boy: true,
      retired: true
    }
  },
  {
    name: "Otogibara Era",
    img: "YAMl7Yb.png",
    opts: {
      region: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Inui Toko",
    img: "tR7OgzW.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Ange Katrina",
    img: "V5Srh3F.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Lize Helesta",
    img: "gRHlw75.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Saegusa Akina",
    img: "VleAmXA.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Aizono Manami",
    img: "kzZ71CJ.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Suzuhara Lulu",
    img: "7VbaHrV.png",
    opts: {
      region: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Yukishiro Mahiro",
    img: "IPfUP41.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Ex Albio",
    img: "getaVcN.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Levi Elipha",
    img: "fYyX65l.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Hayama Marin",
    img: "FxPobxF.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Nui Sociere",
    img: "J5Buoam.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Hakase Fuyuki",
    img: "krWHEh9.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Kagami Hayato",
    img: "RPwONpc.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Yorumi Rena",
    img: "peH2ux5.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Mayuzumi Kai",
    img: "WLuAyxi.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Ars Almal",
    img: "krRdLoo.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Aiba Uiha",
    img: "ZpPlfEl.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Amamiya Kokoro",
    img: "zk2Lnip.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Eli Conifer",
    img: "hfT9tT8.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Ratna Petite",
    img: "HOPsjdM.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Hayase Sou",
    img: "5XoQ7NF.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Sukoya Kana",
    img: "V8FiZlt.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Shellin Burgundy",
    img: "O4yJhcd.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Fumi",
    img: "QWROMHY.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Hoshikawa Sara",
    img: "be9WXBG.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Yamagami Karuta",
    img: "qq8lIpw.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Matsukai Mao",
    img: "6gyZF3m.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Emma★August",
    img: "81SmEiY.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Luis Cammy",
    img: "3Av8SH9.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Fuwa Minato",
    img: "rPCfCex.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Shirayuki Tomoe",
    img: "2ohiJ8B.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Gwelu Os Gar",
    img: "paIy8aR.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Mashiro",
    img: "XsIvVaj.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Naraka",
    img: "F79IS7o.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Kurusu Natsume",
    img: "QXOALC0.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Furen E Lustario",
    img: "aMhn00x.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Ibrahim",
    img: "tIGI1Ml.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Melissa Kinrenka",
    img: "Q578oYo.png",
    opts: {
      region: ['jp'],
    }
  },
  {
    name: "Nagao Kei",
    img: "wVTsocX.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Genzuki Tojiro",
    img: "PKdceUr.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Kaida Haru",
    img: "xBuWJ6a.png",
    opts: {
      region: ['jp'],
      boy: true
    }
  },
  {
    name: "Kingyozaka Meiro",
    img: "5ibXgHF.png",
    opts: {
      region: ['jp'],
      girl: true,
      retired: true
    }
  },
  {
    name: "Sorahoshi Kirame",
    img: "hP0twcf.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Asahina Akane",
    img: "LHQ01rF.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Suo Sango",
    img: "ml6HD62.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Todo Kohaku",
    img: "7av9CcZ.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Kitakoji Hisui",
    img: "eex2lZd.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Nishizono Chigusa",
    img: "eVbjFQ7.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  }
];
