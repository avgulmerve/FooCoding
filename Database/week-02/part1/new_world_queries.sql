use new_world;

-- 1. What is the capital of country X?
PREPARE statement_1 FROM 'SELECT city.Name FROM city INNER JOIN country ON city.ID = country.Capital WHERE country.Name = ?';
SET @country = 'Sweden';
EXECUTE statement_1 using @country;
DEALLOCATE PREPARE statement_1;

-- 2. List all the languages spoken in the region Y
PREPARE statement_2 FROM 'SELECT distinct (cl.Language) FROM countrylanguage cl INNER JOIN country co ON cl.CountryCode = co.code WHERE co.Region = ?';
SET @region = 'Southern Europe';
EXECUTE statement_2 using @region;
DEALLOCATE PREPARE statement_2;

-- 3. Find the number of cities in which language Z is spoken
PREPARE statement_3 FROM 'SELECT COUNT(1) AS CityLanguageCount FROM city ci INNER JOIN countrylanguage cl ON ci.CountryCode=cl.CountryCode WHERE cl.Language = ?';
SET @language = 'Swedish';
EXECUTE statement_3 using @language;
DEALLOCATE PREPARE statement_3;

-- 4. List all the continents with the number of languages spoken in each continent
PREPARE statement_4 FROM 'SELECT co.Continent, COUNT(DISTINCT cl.Language) AS NumOfLanguages FROM country co INNER JOIN countrylanguage cl ON co.Code = cl.CountryCode GROUP BY co.Continent';
EXECUTE statement_4;
DEALLOCATE PREPARE statement_4;

-- 5. For the country given as input, check if there are any countries that have the same official language and are in the same continent

PREPARE statement_5 FROM 'SELECT IFNULL(GROUP_CONCAT(c2.Name), "False") AS MatchingCountries FROM country AS c1 JOIN country AS c2 ON c1.Code <> c2.Code JOIN countrylanguage AS cl1 ON c1.Code = cl1.CountryCode AND cl1.IsOfficial = "T" JOIN countrylanguage AS cl2 ON c2.Code = cl2.CountryCode AND cl2.IsOfficial = "T" WHERE c1.Name = ? AND c1.Continent = c2.Continent AND cl1.Language = cl2.Language GROUP BY c1.Code';
SET @country = 'Vietnam';
EXECUTE statement_5 using @country;
DEALLOCATE PREPARE statement_5;
