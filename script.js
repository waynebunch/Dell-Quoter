let markup = 0.04;

function dellToHTML() {

    // let groupTotalCount = 0;

    //This is for the E-Quote Only
    let dellEqData = Array.from(document.querySelectorAll('tbody'));
    let dellEqSkuData = document.querySelectorAll('.sku');
    let unitPrices = document.querySelectorAll('.unit_price');
    let quantities = document.querySelectorAll('.quantity');

    // console.log(markup);


    dellEqData.forEach((data, index) => {
        let length = data.children.length - 1;
        let parentDiv = document.getElementById('itemSpecs');

        //For loop to go through each child, get innerText and create elements
        for (let i = 0; i < length; i++) {
            if (i === 0) {

                //This will create the top bar of each group (group #, quantity, system Price, total price)
                let groupPricing = document.createElement('div');
                groupPricing.innerHTML = '<div class="groupPricingDiv" id="groupPricingDiv'
                + index + '"><div class="groupPricingItems" id="groupNumber' + index + '">'
                + 'Group: ' + (index + 1) + '</div><div class="groupPricingItems" id="quantity'
                + index + '">Quantity: </div><div class="groupPricingItems" id="systemPrice'
                + index + '">System Price: </div><div class="groupPricingItems" id="totalPrice' + index + '"</div>Total Price: </div>';

                parentDiv.appendChild(groupPricing);

                let groupDiv = document.createElement('div');
                groupDiv.className = 'groupDiv';
                groupDiv.id = 'group' + index;
                parentDiv.appendChild(groupDiv);

                let getId = 'group' + index;
                let groupDivParent = document.getElementById(getId);
                let newDiv = document.createElement('div');
                newDiv.className = 'itemText';
                newDiv.innerHTML = data.children[i].innerText;
                groupDivParent.appendChild(newDiv);

            } else {
                let getId = 'group' + index;
                let groupDivParent = document.getElementById(getId);
                let newDiv = document.createElement('div');
                newDiv.className = 'itemText';
                newDiv.innerHTML = data.children[i].innerText;
                groupDivParent.appendChild(newDiv);
            }
        }
    })

    quantities.forEach((data, index) => {
        if (index === 0) return;
        let quantity = 'quantity' + (index - 1);
        let getQuantity = document.getElementById(quantity);
        getQuantity.innerHTML = 'Quantity: ' + parseFloat(data.innerText);
    })

    unitPrices.forEach((data,index) => {
        let makeNumberFirst = parseFloat((data.innerText.replace(/[()/ea$,]+/g, '')));
        console.log(markup);
        let makeNumber = (makeNumberFirst * markup) + makeNumberFirst;
        let systemPriceId = 'systemPrice' + index;
        let getSystemPrice = document.getElementById(systemPriceId);
        getSystemPrice.innerHTML = 'System Price: ' + makeNumber.toFixed(2);
        // console.log(makeNumber);
    })


    // dellEqData.forEach(data => {
    //     tempArray.push(data.children[2].innerText);
    //     // console.log(data.children[2]);
    // })
    //
    // console.log(tempArray);

    // dellEqData.forEach(data => {
    //     console.log(data);
    //     // dellDescriptionArray.push(data.innerText);
    // });

    //
    // dellEqSkuData.forEach((data, index) => {
    //     if (data.innerHTML === "" || data.innerHTML === "SKU") return;
    //     dellSkuArray.push(data.innerText);
    // })
    //
    // dellSkuArray.forEach((data, index) => {
    //     dellDescriptionArray[index] = dellDescriptionArray[index] + ' ' + data;
    // })
    //
    // dellDescriptionArray.forEach(data => {
    //     let parentDiv = document.getElementById('itemSpecs');
    //     let newDiv = document.createElement('div');
    //     newDiv.innerHTML = data;
    //     newDiv.className = 'itemText';
    //     parentDiv.appendChild(newDiv);
    // })


    // console.log(dellEqData[0].innerText);
    //This is for Dell Direct Quote Only

    // let dellDirectNodeListDescription = Array.from(document.querySelectorAll('p.normalLeft'));
    // let dellDirectNodeListQuantity = Array.from(document.querySelectorAll('td.normalCenter'));
    //
    // dellEqData.forEach(data => {
    //     let parentDiv = document.getElementById('itemSpecs');
    //     let newDiv = document.createElement('div');
    //     newDiv.innerHTML = data.innerText;
    //     newDiv.className = 'dellDescriptionText';
    //     parentDiv.appendChild(newDiv);
    // });
}

function deleteTextbox(e) {
    let deleteText = document.getElementById('pasteBox');
    while (deleteText.hasChildNodes()) {
        deleteText.removeChild(deleteText.lastChild);
    }
}

document.getElementById('markup').addEventListener('keyup', (e) => markup = e.target.value * 0.01);
document.getElementById('submitBtn').addEventListener('click', dellToHTML);
document.querySelector('.pasteBox').addEventListener('mousedown', (e) => e.target.innerHTML = '');
// document.querySelector('.quoteBtn').addEventListener('click', pickDistribution);
document.querySelector('.quoteBtn').addEventListener('click', deleteTextbox);
