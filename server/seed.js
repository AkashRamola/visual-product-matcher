const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const sampleProducts = [
    {
        name: "Topwear",
        category: "Girls",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/f3964f76c78edd85f4512d98b26d52e9_images.jpg",
        similarityScore: 42419,
    },
    {
        name: "Topwear",
        category: "Girls",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/dce310e4c15223a6c964631190263284_images.jpg",
        similarityScore: 34009,
    },
    {
        name: "Topwear",
        category: "Girls",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/fc3c1b46906d5c148c45f532d0b3ffb5_images.jpg",
        similarityScore: 40143,
    },
    {
        name: "Bottomwear",
        category: "Girls",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/5158808a5bdd60c8c8af6999f8481160_images.jpg",
        similarityScore: 47154,
    },
    {
        name: "Dress",
        category: "Girls",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/1f7c87ee0ac12c35df8c1dd28e2cd692_images.jpg",
        similarityScore: 31127,
    },
    {
        name: "Topwear",
        category: "Girls",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/f3964f76c78edd85f4512d98b26d52e9_images.jpg",
        similarityScore: 42419,
    },
    {
        name: "Topwear",
        category: "Girls",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/dce310e4c15223a6c964631190263284_images.jpg",
        similarityScore: 34009,
    },
    {
        name: "Topwear",
        category: "Girls",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/fc3c1b46906d5c148c45f532d0b3ffb5_images.jpg",
        similarityScore: 40143,
    },
    {
        name: "Bottomwear",
        category: "Girls",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/5158808a5bdd60c8c8af6999f8481160_images.jpg",
        similarityScore: 47154,
    },
    {
        name: "Dress",
        category: "Girls",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/1f7c87ee0ac12c35df8c1dd28e2cd692_images.jpg",
        similarityScore: 31127,
    },
    {
        name: "Tshirts",
        category: "Boys",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/0108969213975af06095ff84a0ec0c72_images.jpg",
        similarityScore: 4729,
    },
    {
        name: "Tshirts",
        category: "Boys",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/117451d5bf32c9ec341a6dfd0c28121a_images.jpg",
        similarityScore: 8322,
    },
    {
        name: "Shirts",
        category: "Boys",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/17d5cdd77de6f87ee2451b98f3466d88_images.jpg",
        similarityScore: 34036,
    },
    {
        name: "Jeans",
        category: "Boys",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/50aba4c7dbee879034bee18e8fa647f1_images.jpg",
        similarityScore: 31111,
    },
    {
        name: "Shorts",
        category: "Boys",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/ab13e5576f1a6b597ca99514da15fec6_images.jpg",
        similarityScore: 31116,
    },
    {
        name: "Tshirts",
        category: "Boys",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/0108969213975af06095ff84a0ec0c72_images.jpg",
        similarityScore: 4729,
    },
    {
        name: "Tshirts",
        category: "Boys",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/117451d5bf32c9ec341a6dfd0c28121a_images.jpg",
        similarityScore: 8322,
    },
    {
        name: "Shirts",
        category: "Boys",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/17d5cdd77de6f87ee2451b98f3466d88_images.jpg",
        similarityScore: 34036,
    },
    {
        name: "Jeans",
        category: "Boys",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/50aba4c7dbee879034bee18e8fa647f1_images.jpg",
        similarityScore: 31111,
    },
    {
        name: "Shorts",
        category: "Boys",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/ab13e5576f1a6b597ca99514da15fec6_images.jpg",
        similarityScore: 31116,
    },
    {
        name: "Casual Shoes",
        category: "Men",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/051d64772f1b38ff476fbf0a807f365a_images.jpg",
        similarityScore: 9204,
    },
    {
        name: "Flip Flops",
        category: "Men",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/53690e3f396f411e184b249672d6ebae_images.jpg",
        similarityScore: 18653,
    },
    {
        name: "Flats",
        category: "Women",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/94a9deea53125663d9bbe61cb38b84b4_images.jpg",
        similarityScore: 2886,
    },
    {
        name: "Sandals",
        category: "Women",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/0be6693dafb4261645b22c6e9e7e67f4_images.jpg",
        similarityScore: 8574,
    },
    {
        name: "Flip Flops",
        category: "Women",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/3101e6784596ba83c3fb728bcf5b6187_images.jpg",
        similarityScore: 49839,
    },
    {
        name: "Topwear",
        category: "Girls",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/f3964f76c78edd85f4512d98b26d52e9_images.jpg",
        similarityScore: 42419,
    },
    {
        name: "Topwear",
        category: "Girls",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/dce310e4c15223a6c964631190263284_images.jpg",
        similarityScore: 34009,
    },
    {
        name: "Topwear",
        category: "Girls",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/fc3c1b46906d5c148c45f532d0b3ffb5_images.jpg",
        similarityScore: 40143,
    },
    {
        name: "Bottomwear",
        category: "Girls",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/5158808a5bdd60c8c8af6999f8481160_images.jpg",
        similarityScore: 47154,
    },
    {
        name: "Dress",
        category: "Girls",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/1f7c87ee0ac12c35df8c1dd28e2cd692_images.jpg",
        similarityScore: 31127,
    },
    {
        name: "Topwear",
        category: "Girls",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/f3964f76c78edd85f4512d98b26d52e9_images.jpg",
        similarityScore: 42419,
    },
    {
        name: "Topwear",
        category: "Girls",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/dce310e4c15223a6c964631190263284_images.jpg",
        similarityScore: 34009,
    },
    {
        name: "Topwear",
        category: "Girls",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/fc3c1b46906d5c148c45f532d0b3ffb5_images.jpg",
        similarityScore: 40143,
    },
    {
        name: "Bottomwear",
        category: "Girls",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/5158808a5bdd60c8c8af6999f8481160_images.jpg",
        similarityScore: 47154,
    },
    {
        name: "Dress",
        category: "Girls",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/1f7c87ee0ac12c35df8c1dd28e2cd692_images.jpg",
        similarityScore: 31127,
    },
    {
        name: "Tshirts",
        category: "Boys",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/0108969213975af06095ff84a0ec0c72_images.jpg",
        similarityScore: 4729,
    },
    {
        name: "Tshirts",
        category: "Boys",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/117451d5bf32c9ec341a6dfd0c28121a_images.jpg",
        similarityScore: 8322,
    },
    {
        name: "Shirts",
        category: "Boys",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/17d5cdd77de6f87ee2451b98f3466d88_images.jpg",
        similarityScore: 34036,
    },
    {
        name: "Jeans",
        category: "Boys",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/50aba4c7dbee879034bee18e8fa647f1_images.jpg",
        similarityScore: 31111,
    },
    {
        name: "Shorts",
        category: "Boys",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/ab13e5576f1a6b597ca99514da15fec6_images.jpg",
        similarityScore: 31116,
    },
    {
        name: "Tshirts",
        category: "Boys",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/0108969213975af06095ff84a0ec0c72_images.jpg",
        similarityScore: 4729,
    },
    {
        name: "Tshirts",
        category: "Boys",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/117451d5bf32c9ec341a6dfd0c28121a_images.jpg",
        similarityScore: 8322,
    },
    {
        name: "Shirts",
        category: "Boys",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/17d5cdd77de6f87ee2451b98f3466d88_images.jpg",
        similarityScore: 34036,
    },
    {
        name: "Jeans",
        category: "Boys",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/50aba4c7dbee879034bee18e8fa647f1_images.jpg",
        similarityScore: 31111,
    },
    {
        name: "Shorts",
        category: "Boys",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/ab13e5576f1a6b597ca99514da15fec6_images.jpg",
        similarityScore: 31116,
    },
    {
        name: "Casual Shoes",
        category: "Men",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/051d64772f1b38ff476fbf0a807f365a_images.jpg",
        similarityScore: 9204,
    },
    {
        name: "Flip Flops",
        category: "Men",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/53690e3f396f411e184b249672d6ebae_images.jpg",
        similarityScore: 18653,
    },
    {
        name: "Flats",
        category: "Women",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/94a9deea53125663d9bbe61cb38b84b4_images.jpg",
        similarityScore: 2886,
    },
    {
        name: "Sandals",
        category: "Women",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/0be6693dafb4261645b22c6e9e7e67f4_images.jpg",
        similarityScore: 8574,
    },
    {
        name: "Flip Flops",
        category: "Women",
        image: "/uploads/http://assets.myntassets.com/v1/images/style/properties/3101e6784596ba83c3fb728bcf5b6187_images.jpg",
        similarityScore: 49839,
    },
    
    // Add more products
];

const seedDatabase = async () => {
    try {
        await Product.deleteMany();
        await Product.insertMany(sampleProducts);
        console.log("Sample products added!");
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDatabase();