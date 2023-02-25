const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;

const alcohol_list_Routes = require('./routes/alcohol_list_Routes');
const cocktail_recipes_Routes = require('./routes/cocktail_recipes_Routes');
const represent_mood_list_Routes = require('./routes/represent_mood_list_Routes');
const taste_preferences_list_Routes = require('./routes/taste_preferences_list_Routes');

// home route:  we can safely delete this
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.use('/alcohol_list', alcohol_list_Routes);
app.use('/cocktails_list', cocktail_recipes_Routes);
app.use('/represent_mood_list', represent_mood_list_Routes);
app.use('/taste_preferences_list', taste_preferences_list_Routes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});