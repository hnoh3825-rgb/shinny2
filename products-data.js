// Shinny — product data
// Single source of truth for every item shown on shop.html, index.html and product.html.
// To add a new product: add an entry here, then add a matching card in shop.html
// (and optionally index.html) that links to product.html?item=<id>.

const CLUTCH_CARE = {
  size: 'الطول ٢٦سم × الارتفاع ١٦سم. خيط قطني ٣ طبقات مع بطانة قطنية داخلية.',
  shipping: 'القطع الجاهزة تُشحن خلال ٢-٣ أيام عمل. القطع المخصصة تحتاج ٧-١٢ يوم عمل.',
  care: 'تُنظف يدويًا بماء بارد، وتُجفف مفرودة بعيدًا عن أشعة الشمس المباشرة.'
};

const IPAD_CARE = {
  size: 'مقاس مرن يحتضن الجهاز بإحكام، بطانة داخلية ناعمة تحمي الشاشة من الخدوش.',
  shipping: 'القطع الجاهزة تُشحن خلال ٢-٣ أيام عمل. القطع المخصصة تحتاج ٧-١٢ يوم عمل.',
  care: 'يُنظف بقطعة قماش جافة أو مبللة قليلًا، ويُجنَّب البلل الزائد والحرارة المباشرة.'
};

const PRODUCTS = {
  pearl: {
    name: 'بيرل', catKey: 'clutch', cat: 'كلتش كروشيه',
    price: '٢٤٠ ر.س',
    desc: 'كلتش مسائية بحواف مدورة وبطانة قطنية، مثالية للمناسبات الليلية بلمسة ناعمة وهادئة.',
    images: ['assets/clutch-pearl.svg'],
    colors: [{ name: 'بيج', hex: '#7A3F38' }],
    details: CLUTCH_CARE
  },
  luna: {
    name: 'لونا', catKey: 'clutch', cat: 'كلتش كروشيه',
    price: '٢١٠ ر.س',
    desc: 'تصميم يومي بمقبض قصير وقماش داخلي متين، عملية للاستخدام اليومي وسهلة الحمل.',
    images: ['assets/clutch-luna.svg'],
    colors: [{ name: 'بني داكن', hex: '#5B4632' }],
    details: CLUTCH_CARE
  },
  rose: {
    name: 'روز', catKey: 'clutch', cat: 'كلتش كروشيه',
    price: '٢٦٠ ر.س',
    desc: 'كلتش هلالية الشكل بدرجات وردية متدرجة، محبوكة بغرزة نصف عمود مزدوجة لملمس كثيف ومتين. تُغلق بسحاب خفي وتحتوي على بطانة قطنية بجيب داخلي صغير للبطاقات.',
    images: ['assets/clutch-rose.svg'],
    colors: [
      { name: 'وردي', hex: '#D98CAA' },
      { name: 'نحاسي', hex: '#B96B63' },
      { name: 'بيج', hex: '#8C7350' },
      { name: 'زيتي', hex: '#4A5A2A' }
    ],
    details: CLUTCH_CARE
  },
  scarlet: {
    name: 'سكارليت', catKey: 'clutch', cat: 'كلتش كروشيه',
    price: '٢٥٠ ر.س',
    desc: 'لون جريء لمناسبات المساء، بغطاء مغناطيسي يمنحها إغلاقًا سلسًا وأنيقًا.',
    images: ['assets/clutch-scarlet.svg'],
    colors: [{ name: 'أحمر غامق', hex: '#5E2019' }],
    details: CLUTCH_CARE
  },
  olive: {
    name: 'أوليف', catKey: 'clutch', cat: 'كلتش كروشيه',
    price: '٢٢٠ ر.س',
    desc: 'درجات زيتية هادئة تناسب الإطلالات اليومية، بتصميم بسيط يلائم كل الأوقات.',
    images: ['assets/clutch-olive.svg'],
    colors: [{ name: 'زيتي', hex: '#4A5A2A' }],
    details: CLUTCH_CARE
  },
  hala: {
    name: 'هالة', catKey: 'clutch', cat: 'كلتش كروشيه',
    price: '٢٧٠ ر.س',
    desc: 'لمسة ذهبية دافئة، تصلح كهدية مميزة بفضل تفاصيلها الأنيقة.',
    images: ['assets/clutch-hala.svg'],
    colors: [{ name: 'ذهبي دافئ', hex: '#5C4A1B' }],
    details: CLUTCH_CARE
  },
  regina: {
    name: 'ريجينا', catKey: 'clutch', cat: 'كلتش كروشيه فاخر',
    price: '٣٢٠ ر.س',
    desc: 'قطعة فاخرة محبوكة يدويًا بخيط عنابي كثيف، مع إطار معدني ذهبي منقوش برأس غزال وسلسلة معدنية قابلة للفصل. تفصيلة استثنائية تناسب السهرات والمناسبات الخاصة.',
    images: ['assets/photos/regina-1.jpg', 'assets/photos/regina-2.jpg', 'assets/photos/regina-3.jpg'],
    photo: true,
    colors: [{ name: 'عنابي', hex: '#5C1A24' }],
    details: {
      size: 'الطول ٢٤سم × الارتفاع ١٤سم تقريبًا. إطار معدني ذهبي بإغلاق كباسة وسلسلة كتف قابلة للفصل.',
      shipping: 'قطعة شبه جاهزة — تُشحن خلال ٤-٦ أيام عمل. النسخ المخصصة بلون آخر تحتاج ٧-١٢ يوم عمل.',
      care: 'تُنظف يدويًا بماء بارد بعيدًا عن الإطار المعدني، وتُحفظ في مكان جاف بعيدًا عن الرطوبة لحماية التذهيب.'
    }
  },
  cocoon: {
    name: 'كوكون', catKey: 'ipad', cat: 'كفر آيباد',
    price: '١٦٥ ر.س',
    desc: 'حماية مبطنة لآيباد ١٠.٩ و١١ إنش، بتصميم بسيط يحافظ على أناقة الجهاز.',
    images: ['assets/case-cocoon.svg'],
    colors: [{ name: 'بيج', hex: '#7A6640' }],
    details: IPAD_CARE
  },
  mira: {
    name: 'ميرا', catKey: 'ipad', cat: 'كفر آيباد',
    price: '١٧٥ ر.س',
    desc: 'تصميم أخضر هادئ بإغلاق بزر خشبي، عملي وأنيق في آنٍ واحد.',
    images: ['assets/case-mira.svg'],
    colors: [{ name: 'أخضر هادئ', hex: '#4E6B60' }],
    details: IPAD_CARE
  },
  dafa: {
    name: 'دفء', catKey: 'ipad', cat: 'كفر آيباد',
    price: '١٨٥ ر.س',
    desc: 'درجات ترابية دافئة، بطانة من الفرو الصناعي لحماية إضافية في الشتاء.',
    images: ['assets/case-dafa.svg'],
    colors: [{ name: 'ترابي دافئ', hex: '#8C4A38' }],
    details: IPAD_CARE
  },
  celine: {
    name: 'سيلين', catKey: 'ipad', cat: 'كفر آيباد',
    price: '١٩٥ ر.س',
    desc: 'بنفسجي أنيق يناسب آيباد برو ١٢.٩ إنش، بلمسة عصرية مميزة.',
    images: ['assets/case-celine.svg'],
    colors: [{ name: 'بنفسجي', hex: '#5E4B7C' }],
    details: IPAD_CARE
  }
};
