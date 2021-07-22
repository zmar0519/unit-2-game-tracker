import { Game } from "../models/game.js"
import { Profile } from "../models/profile.js"

export {
  index,
  show,
  gameAdd,
}

function gameAdd(req, res) {
  let currentDate = new Date()
  const gameBeaten = {date: currentDate.toDateString(), game: req.params.gameId}
  Profile.findById(req.user.profile._id)
  .then((profile) => {
    profile.gamesBeaten.push(gameBeaten)
    profile.save(err => {
      res.redirect(`/games/${req.params.gameId}`)
    })
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate({path: 'gamesBeaten', populate: {path: 'game', model: "Game"}})
  .then((profile) => {
    Profile.findById(req.user.profile._id)
    .then(self => {
      const isSelf = self._id.equals(profile._id)
      res.render("profiles/show", {
        title: `${profile.name}'s profile`,
        profile,
        self,
        isSelf,
      })
    })
  })
}

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render("profiles/index", {
      profiles,
      title: "Compare with friends!"
  })
})
.catch(err => {
  console.log(err)
  res.redirect(`/profiles/${req.user.profile}`)
	})
}