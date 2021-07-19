import { Profile } from "../models/profile.js"

export {
  index,
}

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render("games/index", { // LOOKAT ME
      profiles,
      title: "Compare with friends!"
  })
})
.catch(err => {
  console.log(err)
  res.redirect(`/profiles/${req.user.profile}`)
	})
}