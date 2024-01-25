const productData = [
    // Road bikes
    {
        id: 1,
        category: 'road',
        image: './images/products/road-alu-bogdan-cadar-BhmINpuC3QQ-unsplash.jpg',
        title: 'aluminium road bike',
        size: ['XS', 'S', 'M', 'L', 'XL'],
        price: '30',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste in vitae alias reprehenderit laudantium, aut expedita. Nulla fugit sapiente, blanditiis totam fugiat ipsum placeat voluptas similique, magni, consectetur recusandae excepturi.'
    },
    {
        id: 2,
        category: 'road',
        image: './images/products/road-light-matt-saling-6tK2Og9dEKA-unsplash.jpg',
        title: 'light carbon road bike',
        size: ['XS', 'S', 'M', 'L', 'XL'],
        price: '60',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam libero consequuntur itaque maiores aspernatur sit debitis minus! Debitis minima id sit, adipisci magni, molestias inventore laborum architecto corrupti veritatis voluptatem.'
    },
    {
        id: 3,
        category: 'road',
        image: './images/products/road-endurance-luca-david-ia8uTRsZZYY-unsplash.jpg',
        title: 'carbon endurance road bike',
        size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        price: '65',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse architecto repudiandae porro mollitia perspiciatis similique velit deleniti quaerat illo veritatis voluptatem illum, repellendus sint dolores exercitationem, expedita necessitatibus provident?'
    },
    {
        id: 4,
        category: 'road',
        image: './images/products/road-aero-jordan-brierley-0TPSP3L6RmA-unsplash.jpg',
        title: 'carbon aero road bike',
        size: ['XS', 'S', 'M', 'L', 'XL'],
        price: '75',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptas nam recusandae ullam id voluptatibus atque, soluta qui quos, et molestiae pariatur neque eveniet reprehenderit eius quia, aspernatur numquam magnam.'
    },
    {
        id: 5,
        category: 'road',
        image: './images/products/road-tt-luca-j-y77wZNATu74-unsplash.jpg',
        title: 'carbon aero time trial bike',
        size: ['S', 'M', 'L', 'XL'],
        price: '80',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptas nam recusandae ullam id voluptatibus atque, soluta qui quos, et molestiae pariatur neque eveniet reprehenderit eius quia, aspernatur numquam magnam.'
    },
    // Mountain bikes
    {
        id: 6,
        category: 'mountain',
        image: './images/products/mountain-alu-will-gonzalez-uAK3jJr6md4-unsplash.jpg',
        title: 'aluminium mountain bike',
        size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        price: '35',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur hic magnam distinctio repellendus aut enim repudiandae, ut minus neque, qui voluptatem exercitationem quos. Aliquid repellat omnis harum temporibus reprehenderit enim.'
    },
    {
        id: 7,
        category: 'mountain',
        image: './images/products/mountain-trail-patrick-hendry-kX2xIZBZA3Q-unsplash.jpg',
        title: 'aluminium trail bike',
        size: ['S', 'M', 'L', 'XL'],
        price: '35',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur hic magnam distinctio repellendus aut enim repudiandae, ut minus neque, qui voluptatem exercitationem quos. Aliquid repellat omnis harum temporibus reprehenderit enim.'
    },
    {
        id: 8,
        category: 'mountain',
        image: './images/products/mountain-trail-full-pascal-obermeier-YOphb-Xr2sk-unsplash.jpg',
        title: 'full-suspension trail bike',
        size: ['S', 'M', 'L', 'XL'],
        price: '45',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam error reprehenderit eius distinctio est illum voluptate, modi doloremque inventore voluptatum tenetur. Numquam, corrupti. Ut suscipit labore enim dolor optio ex.'
    },
    {
        id: 9,
        category: 'mountain',
        image: './images/products/mountain-race-jannik-wuster-HcN5H_PiZsE-unsplash.jpg',
        title: 'carbon race mountain bike',
        size: ['XS','S', 'M', 'L', 'XL'],
        price: '65',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla exercitationem possimus quae at! Temporibus amet dignissimos sed quam suscipit quisquam ipsam quidem quaerat officiis laudantium hic quod totam, tenetur adipisci.'
    },
    // Gravel bikes
    {
        id: 10,
        category: 'gravel',
        image: './images/products/gravel-steel-daniel-spase-FafiIrfd-Vw-unsplash.jpg',
        title: 'steel gravel bike',
        size: ['S', 'M', 'L', 'XL', 'XXL'],
        price: '35',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste in vitae alias reprehenderit laudantium, aut expedita. Nulla fugit sapiente, blanditiis totam fugiat ipsum placeat voluptas similique, magni, consectetur recusandae excepturi.'
    },
    {
        id: 11,
        category: 'gravel',
        image: './images/products/gravel-alu-nick-rickert-gsWcSMpWugM-unsplash.jpg',
        title: 'aluminium gravel bike',
        size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        price: '40',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam quidem fuga velit, nihil corrupti eius earum quod commodi cupiditate odio hic, nisi dicta architecto tempora. Illum voluptate magni esse.'
    },
    {
        id: 12,
        category: 'gravel',
        image: './images/products/gravel-carbon-alessio-soggetti-HPpj2190tGs-unsplash.jpg',
        title: 'carbon gravel bike',
        size: ['XS', 'S', 'M', 'L', 'XL'],
        price: '55',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim omnis perferendis provident adipisci, hic et culpa itaque eligendi optio debitis molestiae tempore odit, illo est a suscipit vitae sint sapiente.'
    },
    {
        id: 13,
        category: 'gravel',
        image: './images/products/gravel-aero-dmitrii-vaccinium-sw9Vozf6j_4-unsplash.jpg',
        title: 'carbon race gravel bike',
        size: ['S', 'M', 'L', 'XL'],
        price: '65',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim omnis perferendis provident adipisci, hic et culpa itaque eligendi optio debitis molestiae tempore odit, illo est a suscipit vitae sint sapiente.'
    },
    // City bikes
    {
        id: 14,
        category: 'city',
        image: './images/products/city-single-mac-blades-jpgJSBQtw5U-unsplash.jpg',
        title: 'Singlespeed city bike',
        size: ['M', 'L', 'XL'],
        price: '20',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat odit magnam obcaecati assumenda quo sapiente officiis libero, repudiandae facere harum? Deleniti natus in id fugit eius, similique culpa repellendus odit.'
    },
    {
        id: 15,
        category: 'city',
        image: './images/products/city-classic-greg-boll-ukUc_ayZwrU-unsplash.jpg',
        title: 'Classic city bike',
        size: ['M', 'L'],
        price: '25',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat odit magnam obcaecati assumenda quo sapiente officiis libero, repudiandae facere harum? Deleniti natus in id fugit eius, similique culpa repellendus odit.'
    },
    {
        id: 16,
        category: 'city',
        image: './images/products/city-modern-hiroshi-kimura-q4S6brzsUZc-unsplash.jpg',
        title: 'Modern city bike',
        size: ['S', 'M', 'L', 'XL'],
        price: '35',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat odit magnam obcaecati assumenda quo sapiente officiis libero, repudiandae facere harum? Deleniti natus in id fugit eius, similique culpa repellendus odit.'
    },
]

export default productData