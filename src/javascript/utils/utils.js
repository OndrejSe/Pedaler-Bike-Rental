const increaseCounter = (firstDayPrice, days) => {
    let basePrice = firstDayPrice
    let increase = firstDayPrice
    for(let i = 1; i<= days - 1; i = i + 1) {
        increase = increase * 0.8
        basePrice = basePrice + increase
    }
    return Math.ceil(basePrice)
}

const rentalPriceCounter = (firstDayPrice, numberOfDays) => {
    const basePrice = parseInt(firstDayPrice)
    const period = parseInt(numberOfDays + 1)
    let finalPrice = 0
    const IncreaseFromHalfWeek = increaseCounter(basePrice, 4) - increaseCounter(basePrice, 3)
    const IncreaseFromOneWeek = Math.ceil(IncreaseFromHalfWeek * 0.75)

    if (period < 1) {
        finalPrice = "You have to make reservation for at least one day."
    } else if (period === 1) {
        finalPrice = basePrice
    } else if (period > 1 && period <= 4) {
        finalPrice = increaseCounter(basePrice, period)
    } else if (period > 4 && period <= 6) {
        finalPrice = increaseCounter(basePrice, 4) + ((period - 4) * IncreaseFromHalfWeek)
    } else {
        finalPrice = increaseCounter(basePrice, 4) + (IncreaseFromHalfWeek * 2) + ((period - 6) * IncreaseFromOneWeek)
    }

    return {
            price: `${finalPrice}`,
            additionalDayPrice: `${IncreaseFromOneWeek}`,
            }
}

const depositCounter = (value) => {
    let deposit = Math.ceil(value * 0.3)
    return deposit
}

const createPriceList = (firstDayPrice) => {
    const daysOfWeek = [1, 2, 3, 4, 5, 6, 7]

    let priceList = []
    daysOfWeek.forEach((day) => {
        priceList.push(
            {
                title: `day ${day}`,
                price: `€${rentalPriceCounter(firstDayPrice, day - 1).price}`
            })
    })

    priceList.push(
        {
            title: "from day 8",
            price: `+€${rentalPriceCounter(firstDayPrice).additionalDayPrice}`
        }
    )

    return priceList
}

const sizeGuide = (size) => {
    if (size === "XS") {
        return "150 - 160cm"
    } else if (size === "S") {
        return "160 - 168cm"
    } else if (size === "M") {
        return "168 - 176cm"
    } else if (size === "L") {
        return "176 - 184cm"
    } else if (size === "XL") {
        return "184 - 192cm"
    } else if (size === "XXL") {
        return "above 192cm"
    }
}

const accordions = (containers) => {
    containers.forEach((currentBox) => {
        const button = currentBox.querySelector("button")
        button.addEventListener("click", () => {
            containers.forEach((box) => {
                const contentBox = box.querySelector(".content-box")
                const content = box.querySelector(".content")
                const contentHeight = content.getBoundingClientRect().height

                if (box !== currentBox) {
                    removeActive(box)
                    contentBox.style.height = 0
                } else if (box === currentBox){
                    toggleActive(box)
                    if(box.classList.contains("active")){
                        contentBox.style.height = `${contentHeight}px`
                    } else {
                        contentBox.style.height = 0
                    }     
                }
            })
        })
        window.addEventListener('resize', () => {
            const activeContentBox = document.querySelector(".active .content-box")
            const activeContent = document.querySelector(".active .content")

            if(activeContent){
                const activeContentHeight = activeContent.getBoundingClientRect().height

                activeContentBox.style.height = `${activeContentHeight}px` 
            }
        })
    })
}

const getDateInWords = (object) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }

    const dateInWords = object.toLocaleDateString('en-GB', options);

    return dateInWords
}

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

const addClass = (element, classNameString) => {
    element.classList.add(classNameString)
}

const removeClass = (element, classNameString) => {
    element.classList.remove(classNameString)
}

const addActive = (element) => {
    element.classList.add("active")
}

const removeActive = (element) => {
    element.classList.remove("active")
}

const toggleActive = (element) => {
    element.classList.toggle("active")
}
const smoothItemLoading = (item) => {
    item.classList.add("loaded")
}

export {
    sizeGuide,
    rentalPriceCounter,
    depositCounter, 
    createPriceList,
    addClass,
    removeClass, 
    addActive,
    removeActive,
    toggleActive,
    smoothItemLoading,
    accordions,
    getDateInWords
}