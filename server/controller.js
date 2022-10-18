const houses = require('./db.json')



module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        let deleteId = req.params.id
        let index = houses.findIndex(element => element.id === +deleteId)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        const {id, address, price, imageURL} = req.body

        let greatestId = 0 
        for (let i = 0; i < houses.length; i++) {
           if (houses[i].id > greatestId) {
                 greatestId = houses[i].id
            }
        }    
        nextId = greatestId + 1

        let newHouse = {
            id: nextId,
            address,
            price,
            imageURL
        }

        houses.push(newHouse)
        res.status(200).send(houses)

    },
    updateHouse: (req, res) => {
        let type = req.body.type
        let id = req.params.id

        console.log(type + ' to ' + id)

        let index = houses.findIndex(element => element.id === +id)

        let newPrice = +(houses[index].price)
        
        if (type === 'plus') {
            (houses[index].price) = newPrice + 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price = newPrice - 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }
    }
}