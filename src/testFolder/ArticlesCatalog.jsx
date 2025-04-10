import "react"
import visa from "../../../DonateFlowBackEnd/data/img/visa.jpg";
import wallet from "../../../DonateFlowBackEnd/data/img/wallet.jpg";
import bottle from "../../../DonateFlowBackEnd/data/img/bottle.jpg";
import soccerball from "../../../DonateFlowBackEnd/data/img/soccerball.jpg";
import monitor from "../../../DonateFlowBackEnd/data/img/monitor.jpg";
import backpack from "../../../DonateFlowBackEnd/data/img/backpack.jpg";

const articlesCatalog = [

        {
            id:1,
            title: "Visa gift card",
            description: "Prepaid visa card with unlimited benefits and a value of a hundred dollars.",
            price: 100.00,
            image: visa,
            inStock: true
        },
        {
            id:2,
            title: "Card wallet",
            description: "An aestethically pleasing wallet with futuristic features containing ample card space while maintaining a low transport volume",
            price: 25.00,
            image: wallet,
            inStock: true
        },
        {
            id:3,
            title: "Flow water 50 pack",
            description: "Exclusive pack format in sponsorship with the Flow water beverage company and a limited edition flavor. Get it while you can !!!",
            price: 45.00,
            image: bottle,
            inStock: true
        },
        {
            id:4,
            title: "Signed soccer ball",
            description: "Famous soccer player and all-time great Pele signed soccer ball from his infamous 8 goal game.",
            price: 200.00,
            image: soccerball,
            inStock: true
        },
        {
            id:5,
            title: "LG UltraGear monitor",
            description: "Newest generation Lg UltraGear monitor with advanced graphic display and latest technology graphic resolution tailord for hig-level gaming or streaming",
            price: 500.00,
            image: monitor,
            inStock: true
        },
        {
            id:6,
            title: "Crypto backpack",
            description: "Crypto designed backpack for crypto fans or users with a unique color scheme. LIMITED EDITION ***",
            price: 15.00,
            image: backpack,
            inStock: true
        }
    ];

function getArticleCatalog(id){

    let itemData = articlesCatalog.find(article => article.id === id)

    if (itemData == undefined){
        console.log("Item not found");
        return undefined
    }

    return  itemData;

}

export { articlesCatalog, getArticleCatalog};