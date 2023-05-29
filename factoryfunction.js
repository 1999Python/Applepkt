
function  AppleWidgt1() {

    var counterCostPriceAppleBox = 0;
    var counterNumApplesBox = 0;
    var counterpacketSizeSold = 0;
    var counterRequiredProfit = 0;
    ///////////////////////////

    function setCostPriceAppleBox(appleBoxPrice) {

        counterCostPriceAppleBox = appleBoxPrice;
    }

    function getCostPriceAppleBox() {
        return counterCostPriceAppleBox;
    }


    function setNumApplesBox(numApplesBoxList) {
        counterNumApplesBox = numApplesBoxList;
    }

    function getNumApplesBox() {

        return counterNumApplesBox;
    }

    function setpacketSizeApplesSold(packetSoldList) {
        counterpacketSizeSold = packetSoldList;
    }

    function getpacketSizeApplesSold() {
        return counterpacketSizeSold;
    }

    function setRequiredProfit(requiredProfitList) {
        counterRequiredProfit = requiredProfitList;
    }

    function getRequiredProfit() {
        return counterRequiredProfit;
    }

     ///////////////////////////////////
    //the above are the settings part//
   ///////////////////////////////////

    function recommendedPacketPrice() {
        return (counterpacketSizeSold * counterRequiredProfit ) / 100;
    }

    function costPricePerPacket() {
        return counterNumApplesBox / counterpacketSizeSold ;
    }

    function numberPackets() {
        return ;
    }

    function costPricePerApple() {
        
        return counterCostPriceAppleBox / counterNumApplesBox;
    }


    return {

        setCostPriceAppleBox,
        getCostPriceAppleBox,

        setNumApplesBox,
        getNumApplesBox,

        setpacketSizeApplesSold,
        getpacketSizeApplesSold,

        setRequiredProfit,
        getRequiredProfit,
///////////////////////////////////
//the above are the settings part//
///////////////////////////////////
recommendedPacketPrice,
costPricePerPacket,
numberPackets,
costPricePerApple,

    }
}
