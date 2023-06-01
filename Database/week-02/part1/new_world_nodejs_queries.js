const mysql = require('mysql2');
const readline = require('readline');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'new_world'
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
});

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//the capital of a country
function getCapital() {
  const query = 'SELECT city.Name FROM city INNER JOIN country ON city.ID = country.Capital WHERE country.Name = ?';
  connection.prepare(query, (err, statement) => {
    if (err) {
      console.error('Error preparing statement:', err);
      statement.close(() => {
        connection.close();
      });
      return;
    }
    rl.question('Enter the country name: ', (country) => {
      statement.execute([country], (error, results) => {
        if (error) {
          console.error('Error:', error.message);
        } else if (results.length > 0) {
          console.log(`Capital of ${country} is:`, results[0].Name);
        } else {
          console.log('Country not found');
        }
        statement.close();
      });
      rl.close();
      connection.close();
    });
  });
}

//list all languages spoken in a region
function listLanguages() {
  const query = 'SELECT cl.Language FROM countrylanguage cl INNER JOIN country co ON cl.CountryCode = co.code WHERE co.Region = ?';
  connection.prepare(query, (err, statement) => {
    if (err) {
      console.error('Error preparing statement:', err);
      rl.close();
      connection.close();
      return;
    }
    rl.question('Enter the region name: ', (region) => {
      statement.execute([region], (error, results) => {
        if (error) {
          console.error('Error:', error.message);
        } else if (results.length > 0) {
          console.log(`That is the list all languages spoken in the Region ${region}:`, results.map(result => result.Language).join(', '));
        } else {
          console.log('No languages found');
        }
        statement.close();
      });
      rl.close();
      connection.close();
    });
  })
}

//find the number of cities where a language is spoken
function countCities() {
  const query = 'SELECT COUNT(1) AS CityLanguageCount FROM city ci INNER JOIN countrylanguage cl ON ci.CountryCode=cl.CountryCode WHERE Language = ?';
  connection.prepare(query, (err, statement) => {
    if (err) {
      console.error('Error preparing statement:', err);
      rl.close();
      connection.close();
      return;
    }
    rl.question('Enter the language name: ', (language) => {
      statement.execute([language], (error, results) => {
        if (error) {
          console.error('Error:', error.message);
        } else {
          console.log(`Number of cities that spoken ${language}:`, results[0].CityLanguageCount);
        }
        statement.close();
      });
      rl.close();
      connection.close();
    });
  });
};

//list continents with the number of languages spoken in each continent
function listContinents() {
  const query = 'SELECT co.Continent, COUNT(DISTINCT cl.Language) as numOfLanguages FROM country co INNER JOIN countrylanguage cl ON co.Code = cl.CountryCode GROUP BY co.Continent';
  connection.prepare(query, (err, statement) => {
    if (err) {
      console.error('Error preparing statement:', err);
      rl.close();
      connection.close();
      return;
    }
    statement.execute((error, results) => {
      if (error) {
        console.error('Error:', error.message);
      } else {
        console.log('Continents:');
        results.forEach(result => {
          console.log(`${result.Continent}: ${result.numOfLanguages} languages`);
        });
      }
      statement.close();
    });
    rl.close();
    connection.end();
  });
}

//check if countries have the same official language and are in the same continent
function checkCountries() {
  const query = 'SELECT DISTINCT c2.Name AS SameLanCountry, IF(cl2.Language IS NOT NULL, "True", "False") AS HasSameOfficialLanguage FROM country AS c1 JOIN country AS c2 ON c1.Code <> c2.Code LEFT JOIN countrylanguage AS cl1 ON c1.Code = cl1.CountryCode AND cl1.IsOfficial = "T" LEFT JOIN countrylanguage AS cl2 ON c2.Code = cl2.CountryCode AND cl2.IsOfficial = "T" WHERE c1.Name = ? AND c1.Continent = c2.Continent AND cl1.Language = cl2.Language';
  connection.prepare(query, (err, statement) => {
    if (err) {
      console.error('Error preparing statement:', err);
      rl.close();
      connection.close();
      return;
    }
    rl.question('Enter the country name: ', (countryName) => {
      statement.execute([countryName], (error, results) => {
        if (error) {
          console.error('Error:', error.message);
        } else if (results.length > 0) {
          console.log(`The countries spoke same language as ${countryName}:`);
          results.forEach(result => {
            console.log(result.SameLanCountry);
          });
        } else {
          console.log('FALSE');
        }
        statement.close();
      });
      rl.close();
      connection.end();
    });
  });
}

rl.question('Select the query:\n1. Get capital of a country\n2. List languages in a region\n3. Count cities with a language\n4. List continents with language count\n5. Check countries\n', (choice) => {
  switch (choice) {
    case '1':
      getCapital();
      break;
    case '2':
      listLanguages();
      break;
    case '3':
      countCities();
      break;
    case '4':
      listContinents();
      break;
    case '5':
      checkCountries();
      break;
    default:
      console.log('Invalid choice');
      rl.close();
      connection.end();
      break;
  }
});
