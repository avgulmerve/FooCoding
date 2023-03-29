'use strict';

{
  const bookTitles = [
    'chronicle_of_a_death_foretold',
    'one_hundred_years_of_solitude',
    'snow',
    'the_name_of_the_rose',
    'letter_from_an_unknown_woman',
    '1984',
    'to_build_a_fire',
    'my_name_is_red',
    'the_country_of_white_lilies',
    'harry_potter_order_of_the_phoenix',
  ];

  const bookObj = {
    chronicle_of_a_death_foretold: {
      id: 'chronicle_of_a_death_foretold',
      author: 'Gabriel Marcia Marquez',
      language: 'Spanish',
      year: 1981,
    },
    one_hundred_years_of_solitude: {
      id: 'one_hundred_years_of_solitude',
      author: 'Gabriel Marcia Marquez',
      language: 'Spanish',
      year: 1967,
    },
    snow: {
      id: 'snow',
      author: 'Orhan Pamuk',
      language: 'Turkish',
      year: 2002,
    },
    the_name_of_the_rose: {
      id: 'the_name_of_the_rose',
      author: 'Umberto Eco',
      language: 'Italian',
      year: 1980,
    },
    letter_from_an_unknown_woman: {
      id: 'letter_from_an_unknown_woman',
      author: 'Stefan Zweig',
      language: 'German',
      year: 1922,
    },
    1984: {
      id: '1984',
      author: 'George Orwell',
      language: 'English',
      year: 1949,
    },
    to_build_a_fire: {
      id: 'to_build_a_fire',
      author: 'Jack London',
      language: 'English',
      year: 1902,
    },
    my_name_is_red: {
      id: 'my_name_is_red',
      author: 'Orhan Pamuk',
      language: 'Turkish',
      year: 1998,
    },
    the_country_of_white_lilies: {
      id: 'the_country_of_white_lilies',
      author: 'Grigoriy Petrov',
      language: 'Russian',
      year: 1923,
    },
    harry_potter_order_of_the_phoenix: {
      id: 'harry_potter_order_of_the_phoenix',
      author: 'JK Rowling',
      language: 'English',
      year: 2003,
    },
  };

  const imgObj = {
    chronicle_of_a_death_foretold:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51dpAr6fg1L._SY291_BO1,204,203,200_QL40_ML2_.jpg',
    one_hundred_years_of_solitude:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51Zr6Pd32ML._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    snow: 'https://m.media-amazon.com/images/I/41dzwLOHazL._SY264_BO1,204,203,200_QL40_ML2_.jpg',
    the_name_of_the_rose:
      'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0994/9780099466031.jpg',
    letter_from_an_unknown_woman:
      'https://www.alisverislio.com/images/thumbs/0061149_letter-from-an-unknown-woman.jpeg',
    '1984':
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41aM4xOZxaL._SX277_BO1,204,203,200_.jpg',
    to_build_a_fire: 'https://www2.alibris-static.com/to-build-a-fire/isbn/9781479418855_l.jpg',
    my_name_is_red:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51j-CYFSFuL._SY346_.jpg',
    the_country_of_white_lilies:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51i5KgASEcL.jpg',
    harry_potter_order_of_the_phoenix:
      'https://s2.adlibris.com/images/6673215/harry-potter-and-the-order-of-the-phoenix.jpg',
  };

  const container = document.querySelector('.container');
  const header = document.createElement('header');
  container.append(header);
  const h1 = document.createElement('h1');
  header.append(h1);
  h1.innerText = "Merve's Favorite Books";
  h1.setAttribute('class', 'header_one');
  const bookList = document.createElement('ul');
  container.append(bookList);
  bookList.setAttribute('class', 'book_list');
  console.log(container);

  function createImg(parent, address) {
    const bookListImg = document.createElement('img');
    parent.append(bookListImg);
    bookListImg.setAttribute('class', 'book_list_img');
    bookListImg.src = address;
  }

  function IdCorrection(record) {
    let fullId = [];
    for (let j = 0; j < Object.keys(record).length; j++) {
      fullId = record[bookTitles[j]].id.split('_');
      let anonym = '';
      for (let h = 0; h < fullId.length; h++) {
        anonym += ` ${fullId[h]}`;
      }
      const anonymize = anonym.toUpperCase();
      record[bookTitles[j]].id = anonymize;
    }
  }
  IdCorrection(bookObj);

  function createItem(parent, item, value, className) {
    const li = document.createElement('li');
    li.setAttribute('class', className);
    parent.append(li);
    li.innerText = item[value];
  }

  function createList(obj) {
    for (let i = 0; i < Object.keys(obj).length; i++) {
      const item = obj[bookTitles[i]];
      const bookListCard = document.createElement('li');
      bookListCard.setAttribute('class', 'book_list_card');
      bookList.append(bookListCard);
      bookListCard.innerText = item.id;
      const bookSecondListHead = document.createElement('ul');
      bookSecondListHead.setAttribute('class', 'id-card');
      bookListCard.append(bookSecondListHead);
      createItem(bookSecondListHead, item, 'author', 'book_second_list');
      createItem(bookSecondListHead, item, 'language', 'book_second_list');
      createItem(bookSecondListHead, item, 'year', 'book_second_list');
      createImg(bookSecondListHead, imgObj[bookTitles[i]]);
    }
  }
  createList(bookObj);
}
