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
    //{ column:"おすすめ" },
    {
        column: "メンバーから探す",
        menu: [
            { item: "岩本蓮加", path: "/", },
            { item: "筒井あやめ", path: "/", },
            { item: "川﨑桜", path: "/", },
            { item: "池田瑛紗", path: "/", },
        ]
    },
    { column: "シリーズから探す" },
    {
        column: "カテゴリから探す",
        menu: [
            { item: "生写真", path: "/photos" },
            { item: "グッズ", path: "/goods" },
            { item: "スマートフォン", path: "/categoryList/category/smartphone" },
            { item: "パソコン", path: "/categoryList/category/computer" },
            { item: "イヤホン", path: "/earphones" },
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