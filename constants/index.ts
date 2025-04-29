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
            { item: "タブレット", path: "/categoryList/category/taplet" },
            { item: "スマートフォン", path: "/categoryList/category/smartphone" },
            { item: "パソコン", path: "/categoryList/category/computer" },
            { item: "イヤホン", path: "/categoryList/category/earphones" },
        ]
    },
    { 
        column: "ガイド", 
        menu : [
            { item : "利用者ガイド" ,path : "/guide"},
            { item : "問い合わせ" ,path : "/contant"},
        ]
    },
]

export const NAV_MENU = [
    { path: '/news', key: "news", label: "ニュース" },
    { path: '/categoryList', key: "categoryList", label: "カテゴリ" },
    { path: '/guide', key: "guide", label: "利用ガイド" },
    { path: '/contact', key: "help", label: "ヘルプ" },
]

export const CATEGORYLIST = [
    { path: 'smartphone', key: 'smartphone',title: 'スマートフォン' , img:"/smartphoneImage.jpeg"},
    { path: 'computer', key: 'computer' ,title:'パソコン', img:'/computerImage.jpeg'},
    { path: 'tablet', key: 'tablet' ,title:'タブレット', img:'/13inch iPad Pro (M4) シルバー.jpeg'},
    { path: 'earphones', key: 'earphones' ,title:'イヤホン', img:'/airpods pro 2.jpeg'},
]