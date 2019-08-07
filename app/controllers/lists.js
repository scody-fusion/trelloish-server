const Board = require('../models/boards')

//TODO:


const createList = (req, res) => {

    Board
        .findOne({"_id": req.body.board_id})
        .then((board) => {
            board.lists.push({
                title: req.body.listTitle
            })
            board.save()
            res.json(board)
        })

}

const fetchLists = (req, res) => {

    Board
        .findOne({"_id":req.body.board_id})
        .then((board) => {
            res.json(board.lists)
        })
}

const deleteList = (req, res) => {

    Board
        .findOne({"_id": req.body.board_id})
        .then((board) => {
            board.lists.id(req.body.list_id).remove()
            board.save()
            res.json(board.lists)
        })
}

const updateList = (req, res) => {

    Board
        .findOne({"_id": req.body.board_id})
        .then((board) => {
            const list = board.lists.id(req.body.list_id)
            list.title = req.body.listTitle
            board.save()
            res.json(board.lists)
        })
}

module.exports = {createList, fetchLists, deleteList, updateList}