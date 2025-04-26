export const NAV_ITEMS = [
    { path: '/', key: 'login', label: 'login' },
    { path: '/', key: 'myPage', label: 'myPage' },
    { path: '/', key: 'cart', label: 'cart' },
];

export const CATEGORY_NAV = [
    {
        column: "新着商品",
        menu: [
            { item: "1月商品", path: "/", },
            { item: "2月商品", path: "/", },
            { item: "3月商品", path: "/", },
            { item: "4月商品", path: "/", },
        ]
    },
    { column: "シリーズから探す" },
    {
        column: "カテゴリから探す",
        menu: [
            { item: "生写真", path: "/categoryList/category/photos" },
            { item: "グッズ", path: "/categoryList/category/goods" },
            { item: "スマートフォン", path: "/categoryList/category/smartphone" },
            { item: "パソコン", path: "/categoryList/category/computer" },
            { item: "イヤホン", path: "/categoryList/category/earphones" },
        ]
    },
    { column: "利用ガイド" },
]

export const NAV_MENU = [
    { path: '/news', key: "news", label: "ニュース" },
    { path: '/categoryList', key: "categoryList", label: "カテゴリ" },
    { path: '/guide', key: "guide", label: "利用ガイド" },
    { path: '/help', key: "help", label: "ヘルプ" },
]

export const CATEGORYLIST = [
    { path: '/smartphone', key: 'smartphone',title: 'スマートフォン' , img:"/smartphoneImage.jpeg"},
    { path: '/computer', key: 'computer' ,title:'パソコン', img:'/computerImage.jpeg'},
]