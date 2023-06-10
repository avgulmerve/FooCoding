const express = require('express');
const mysql = require('mysql2');

const app = express();
//var router = express.Router();
const port = 8080;

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'Adem1991',
    database: 'todoappdb'
})

connection.connect(function(err) {
    if (err) {
        console.error('error: ' + err);
        return
    }
    console.log('Connected to the MySQL server.');
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/todoapp/signup',  (req, res) => {
    //const username = req.body;
    console.log('user registered')

    const {username} = req.body;
    if(username !== "" && username !== undefined){
        const query = `INSERT INTO users (username) VALUES ('${username}')`;
        connection.query(query, (err) => {
            if (err) {
                console.error('Error inserting user into database: ', err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.status(200).json({ message: 'User registered successfully to DATABASE' })
        });
    }
    else {
        res.status(404).json({ error: 'You cant add empty string' })
        console.error('You should add a value')
    };
});


app.delete('/todoapp/signup/:user_id',  (req, res) => { 
    console.log('user deleted')
    const user_id = req.params.user_id;
    const query = `DELETE FROM users WHERE user_id = ?`;
  
    connection.query(query, [user_id], (err, result) => {
      if (err) {
        console.error('Error deleting user from database: ', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.status(200).json({ message: 'User deleted successfully' });
    });
  });


app.post('/todoapp/todolist', (req, res) => {
    console.log('list registered')
    const {name, explanation, user_id} = req.body;
    if(name !== "" && name !== undefined){
        const query = `INSERT INTO todolists (name, explanation, user_id) 
                    VALUES ('${name}', '${explanation}', ${user_id})`;
        connection.query(query, (err) => {
            if (err) {
                console.error('Error inserting user into database: ', err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.status(200).json({ message: 'List created successfully to DATABASE' });
        });
    }
    else {
        res.status(404).json({ error: 'You cant add empty string' })
        console.error('You should add a value')
    };
});


app.delete('/todoapp/todolist/:list_id', (req, res) => {
    console.log('list deleted')
    const list_id = req.params.list_id;
    const query = `DELETE FROM todolists WHERE list_id = ?`;
    connection.query(query, [list_id], (err, result) => {
      if (err) {
        console.error('Error deleting user from database: ', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'List not found' });
        return;
      }
      res.status(200).json({ message: 'List deleted successfully' });
    });
});
  
app.post('/todoapp/item', (req, res) => {
    console.log('item registered')
    const {explanation, list_id} = req.body;
    if(explanation !== "" && explanation !== undefined){
        const query = `INSERT INTO items (explanation, list_id) 
                    VALUES ('${explanation}', ${list_id})`;
        connection.query(query, (err) => {
            if (err) {
            console.error('Error inserting user into database: ', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
            }
            res.status(200).json({ message: 'Item created successfully to DATABASE' });
        });
    }
    else {
        res.status(404).json({ error: 'You cant add empty string' })
        console.error('You should add a value')
    }
});
  
app.delete('/todoapp/item/:item_id', (req, res) => {
    console.log('item deleted');
    const item_id = req.params.item_id;
    const query = `DELETE FROM items WHERE item_id = ?`;
    connection.query(query, [item_id],(err, result) => {
      if (err) {
        console.error('Error deleting user from database: ', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Item not found' });
        return;
      }
      res.status(200).json({ message: 'Item deleted successfully' });
    });
});

app.post('/todoapp/reminder', (req, res) => {
    console.log('reminder registered')
    const {title_reminder, date_reminder} = req.body;
    const query = `INSERT INTO reminders (title_reminder, date_reminder) 
                    VALUES ('${title_reminder}', '${date_reminder}')`;
    connection.query(query, (err) => {
      if (err) {
        console.error('Error inserting user into database: ', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.status(200).json({ message: 'Reminder created successfully to DATABASE' });
    });
});

app.delete('/todoapp/reminder/:reminder_id', (req, res) => {
    console.log('reminder deleted');
    const reminder_id = req.params.reminder_id;
    const query = `DELETE FROM reminders WHERE reminder_id = ?`;
    connection.query(query, [reminder_id], (err, result) => {
      if (err) {
        console.error('Error deleting user from database: ', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Reminder not found' });
        return;
      }
      res.status(200).json({ message: 'Reminder deleted successfully' });
    });
});
  
app.put('/todoapp/completed/:item_id', (req, res) => {
    console.log('Item set completed');
    const item_id = req.params.item_id;
    const query = `UPDATE items SET completed=1 WHERE item_id = ?`
    connection.query(query, [item_id], (err,result) => {
        if(err) {
            console.error('Error when item completed: ', err);
            res.status(500).json({error: 'Internal Server Error'});
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Item not found' });
            return;
        }
        res.status(200).json({message: 'Set item completed'});
    })
});
  
app.put('/todoapp/todolist/reminder', (req, res) => {
    console.log('reminder added');
    const {reminder_id, list_id} = req.body;
    const query = `UPDATE todolists SET reminder_id=${reminder_id} WHERE list_id = ${list_id}`
    connection.query(query, (err,result) => {
        if(err) {
            console.error('Error when reminder added: ', err);
            res.status(500).json({error: 'Internal Server Error'});
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Reminder not found' });
            return;
        }
        res.status(200).json({message: 'Reminder added'})
    })
})


app.listen(port, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});
