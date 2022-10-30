// Include all dependencies
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// const helpers = require('./utils/helpers');

// Initial Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Connect Sequelize to session
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Create session
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Handlebars
const hbs = exphbs.create({  });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use(require('./controllers/'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});
