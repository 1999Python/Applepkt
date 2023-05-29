//connectng Dom with Factory Function 
const AppleWidgt = AppleWidgt1();//factory function 

const calculateButton = document.querySelector(".calculateBtn");//settings button

const costPriceAppleBox = document.querySelector(".costPriceAppleBox");//Cost price for a box of apples//settings
const numApplesBox = document.querySelector(".numApplesBox");//Number of apples in the box//settings
const packetSizeApplesSold = document.querySelector(".packetSizeApplesSold");//The packet size apples are sold in//settings
const requiredProfit = document.querySelector(".requiredProfit");//required Profit //settings


const recommendedPacketPrice = document.querySelector(".recommendedPacketPrice");//Recommended packet price
const costPricePerPacket = document.querySelector(".costPricePerPacket");//Cost price per packet
const numberPackets = document.querySelector(".numberPackets");//Number of Packets
const costPricePerApple = document.querySelector(".costPricePerApple");//Cost price per apple


//function1 for my settings 
function calculateBtn() {

    AppleWidgt.setCostPriceAppleBox(parseFloat(costPriceAppleBox.value));//costPriceAppleBox
    AppleWidgt.setNumApplesBox(parseFloat(numApplesBox.value));//numApplesBox
    AppleWidgt.setpacketSizeApplesSold(parseFloat(packetSizeApplesSold.value));//packetSizeApplesSold
    AppleWidgt.setRequiredProfit(parseFloat(requiredProfit.value));//requiredProfit

    
        costPricePerApple.innerHTML = AppleWidgt.costPricePerApple();
        costPricePerPacket.innerHTML = AppleWidgt.costPricePerPacket();
        numberPackets.innerHTML = AppleWidgt.numberPackets();
        recommendedPacketPrice.innerHTML = AppleWidgt.recommendedPacketPrice();

}


calculateButton.addEventListener("click", calculateBtn);