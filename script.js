//connectng Dom with Factory Function 
const AppleWidgt = AppleWidgt();//factory function 

const calculateButton = document.querySelector(".calculateButton");//settings button


const recommendedPacketPrice = document.querySelector(".recommendedPacketPrice");//Recommended packet price
const costPricePerPacket = document.querySelector(".costPricePerPacket");//Cost price per packet
const numberPackets = document.querySelector(".numberPackets");//Number of Packets
const costPricePerApple = document.querySelector(".costPricePerApple");//Cost price per apple


const costPriceAppleBox = document.querySelector(".costPriceAppleBox");//Cost price for a box of apples//settings
const numApplesBox = document.querySelector(".numApplesBox");//Number of apples in the box//settings
const packetSizeApplesSold = document.querySelector(".packetSizeApplesSold");//The packet size apples are sold in//settings
const requiredProfit = document.querySelector(".requiredProfit");//required Profit //settings



//function1 for my settings 
function calculateBtn() {

    AppleWidgt.recomendPacketPrice(parseFloat(costPriceAppleBox.value));//costPriceAppleBox
    AppleWidgt.costPricePerPacket(parseFloat(numApplesBox.value));//numApplesBox
    AppleWidgt.numberPackets(parseFloat(packetSizeApplesSold.value));//packetSizeApplesSold
    AppleWidgt.costPricePerApple(parseFloat(requiredProfit.value));//requiredProfit


}




calculateButton.addEventListener("click", calculateBtn);