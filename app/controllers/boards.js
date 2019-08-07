const Board = require('../models/boards')

const createBoard = (req, res) => {

    console.log(req.body);

    let board = new Board(); 
    board.title = req.body.title;
    board.date = 'June 17'

    board.save()
    return res.send('creating a board')
}

const fetchBoards = (req, res) => {
    console.log(req.user);

    Board
        .find()
        .then(boards => {
            return res.json(boards)
        })
}

const deleteBoard = (req, res) => {
    console.log(req.body._id);

    Board
        .findOneAndDelete({"_id": req.body._id})
        .then(board => {
            res.json(board)
        })

}

const updateBoard = (req, res) => {
    console.log(req.body);

    Board
        .findOneAndUpdate({"_id": req.body._id})
        .then(board => {
            board.title = req.body.title
            board.save()
            res.json(board)
        })
}

module.exports = {createBoard, fetchBoards, deleteBoard, updateBoard}