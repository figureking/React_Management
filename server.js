const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express!'});
}); */

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();
    
const multer = require('multer');
const upload = multer({dest:'./upload'})

app.get('/api/customer', (req, res) => {
    connection.query(
        'SELECT * FROM CUSTOMER',
        (err, rows, fields) => {
        res.send(rows);
        }
    )

});
/**이미지폴더에서 업로드 폴더로 접근 */
app.use('/image', express.static('./upload'));

app.post('/api/customer', upload.single('image'), (req, res) => {
    let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?)';
    let image = '/image/' + req.file.filename;
    let name = req.body.name;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;
/*
    console.log(name);
    console.log(image);
    console.log(birthday);
    console.log(gender);
    console.log(job);
*/
    let params = [image, name, birthday, gender, job];
        connection.query(sql, params,
            (err, rows, fields) => {
                 res.send(rows);
                 console.log(err);
                 console.log(rows);
        }
    )
});



app.listen(port, () => console.log(`Listening on port ${port}`));