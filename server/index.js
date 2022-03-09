require('dotenv').config();

const Express = require('express');
const cors = require('cors');
const router = require('./routes/router');
const db = require('./models/index');
const app = new Express();

const PORT = process.env.PORT || 3001
const DB_URL = process.env.DB_URL


app.use(cors());
app.use(Express.json());
app.use(router);

//from env file: PORT=3001, DB_URL="mongodb://localhost:27017/hikehikedb1"

(() => {
  db.mongoose.connect(DB_URL, () => {
    console.log('Database connected to: ' + DB_URL),
      app.listen(PORT, () => {
        console.log(
          'Server up and running at http://localhost:' + PORT
        );
      });
  });
})();