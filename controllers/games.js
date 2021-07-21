import { Game } from '../models/game.js'

export {
  index,
  create,
  show,
  edit,
  deleteGame as delete,
}

function deleteGame(req, res){
  Game.findById(req.params.id)
  .then(game => {
    if (game.owner.equals(req.user.profile._id)) {
      game.delete()
      .then(() => {
        res.redirect('/games')
      })
    } else {
      throw new Error ('You cannot delete games you did not create!')
    }
  })
}

function edit(req, res) {
  Game.findById(req.params.id)
	.then(game => {
		res.render('games/edit', {
			game,
			title: 'Edit Game'
		})
	})
}

function show(req, res) {
  Game.findById(req.params.id)
  .then(function (game){
    res.render('games/show', {
      game,
      title: 'Show Game',
    })
  })
}

function create(req, res) {
  Game.create(req.body)
  .then(game => {
    res.redirect('/games')
  })
  .catch(err => {
    res.redirect('/games')
  })
}

function index(req, res) {
  Game.find({})
  .then(games => {
    res.render("games/index", {
      games,
      title: 'All Games',
    })
})
    .catch(err => {
    res.redirect('/games')
  })
}