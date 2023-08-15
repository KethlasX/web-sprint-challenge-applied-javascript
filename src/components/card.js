const Card = (article) => {
  const cardWrap = document.createElement('div');
  const cardHeadline = document.createElement('div');
  const cardAuthorWrap = document.createElement('div');
  const cardImgWrap = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardAuthorName = document.createElement('span');

  cardWrap.classList.add('card');
  cardHeadline.classList.add('headline');
  cardAuthorWrap.classList.add('author');
  cardImgWrap.classList.add('img-container');

  cardWrap.appendChild(cardHeadline);
  cardWrap.appendChild(cardAuthorWrap);
  cardAuthorWrap.appendChild(cardImgWrap);
  cardImgWrap.appendChild(cardImg);
  cardAuthorWrap.appendChild(cardAuthorName);

  cardImg.src = article.authorPhoto;
  cardImg.alt = `an image of ${authorName}`;
  cardHeadline.textContent = article.headline;
  cardAuthorName.textContent = article.authorName;

  return cardWrap;
    
  
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

Card.addEventListener('click', console.log(card.cardHeadline));

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
