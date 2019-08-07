const Board = require('../models/boards')

//TODO:

function findList(boardId, listId, callback) {
    Board
        .findOne({"_id": boardId})
        .then((board) => {
            const list = board.lists.id(listId)
            callback(board, list)
        })
}

const createCard = (req, res) => {

    findList(req.body.board_id, req.body.list_id, (board, list) => {

        const newCard = {
            title: req.body.cardTitle,
            createdBy: req.body.createdBy,
            createdDate: req.body.date,
            lastModified: req.body.date,
            description: req.body.description

        }
        list.cards.push(newCard)
        board.save()
        res.json(board)

    })

    // Board
    //     .findOne({"_id": req.body.board_id})
    //     .then((board) => {
    //         const list = board.lists.id(req.body.list_id)

    //         list.cards.push({
    //             title: req.body.cardTitle
    //         })
    //         board.save()
    //         res.json(board)
    //     })

}

const fetchCards = (req, res) => {

    findList(req.body.board_id, req.body.list_id, (board, list) => {
        res.json(list.cards)

    })

    // Board
    //     .findOne({"_id":req.body.board_id})
    //     .then((board) => {
    //         const list = board.lists.id(req.body.list_id)
    //         res.json(list.cards)
    //     })
}

const deleteCard = (req, res) => {

    findList(req.body.board_id, req.body.list_id, (board, list) => {
        list.cards.id(req.body.card_id).remove()
        board.save()
        res.json(list.cards)

    })

    // Board
    //     .findOne({"_id": req.body.board_id})
    //     .then((board) => {
    //         const list = board.lists.id(req.body.list_id)
    //         list.cards.id(req.body.card_id).remove()
    //         board.save()
    //         res.json(list.cards)
    //     })
}

const updateCard = (req, res) => {
    console.log('req.body', req.body)

    const cardUpdates = {
        
    }

    Board
        .findById(
            {"_id": req.body.board_id, "lists._id": req.body.list_id, "cards._id": req.body.card_id},
        )
        .then(board => {
            let card = board.lists.id(req.body.list_id).cards.id(req.body.card_id);

            //TODO: Update the following lines to use the spread operator to update the card, or some other conditional update
            card.title = req.body.cardUpdates.title ? req.body.cardUpdates.title : card.title;
            card.description = req.body.cardUpdates.description ? req.body.cardUpdates.description : card.description;
            card.lastModified = req.body.cardUpdates.lastModified

            res.json(card)
            board.save()
        })

    // findList(req.body.board_id, req.body.list_id, (board, list) => {
    //     let card = list.cards.id(req.body.card_id)
    //     card.title = req.body.cardTitle



    //     console.log(card)
    //     board.save()
    //     res.json(board.lists)

    // })

    // Board
    //     .findOne({"_id": req.body.board_id})
    //     .then((board) => {
    //         const list = board.lists.id(req.body.list_id)
    //         const card = list.cards.id(req.body.card_id)
    //         card.title = req.body.cardTitle
    //         board.save()
    //         res.json(board.lists)
    //     })
}

module.exports = {createCard, fetchCards, deleteCard, updateCard}