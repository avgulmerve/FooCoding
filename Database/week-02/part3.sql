
-- I want to get alerts when a country has >= 10 languages
-- CREATE TRIGGER add_language BEFORE INSERT ON countrylanguage FOR EACH ROW BEGIN IF NEW.lan >= 10 THEN END;

DELIMITER //

CREATE TRIGGER add_language
AFTER INSERT ON CountryLanguage
FOR EACH ROW
BEGIN
    DECLARE language_count INT;
    SELECT COUNT(1) INTO language_count FROM CountryLanguage WHERE CountryCode = NEW.CountryCode;
    IF language_count >= 10 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'You have reached the language limit';
    END IF;
END //

INSERT INTO countryLanguage(CountryCode, Language, isOfficial) VALUES ('VNM', 'Swedish', 'F');
ERROR 1644 (45000): You have reached the language limit
