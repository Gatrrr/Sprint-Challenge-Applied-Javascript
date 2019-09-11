// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cardsContainer = document.querySelector('.cards-container')


axios.get('https://lambda-times-backend.herokuapp.com/articles')

    .then(response =>{
        console.log(response)

    let articles = response.data.articles
        console.log(articles)


    let topics = Object.keys(articles)
        console.log(topics)

    topics.forEach(topic =>{

    articles[topic].forEach(article =>{

    console.log(article)
    
    cardsContainer.appendChild(card(article))
    })

    })

})

    function card(article){
         
        const cardHead = document.createElement('div')
        const cardHeadline = document.createElement('div')
        const cardAuthor = document.createElement('div')
        const cardImgContainer = document.createElement('div')
        const cardImg = document.createElement('img')
        const cardSpan = document.createElement('span')
        
        
        cardHead.classList.add('card');
        cardHeadline.classList.add('headline')
        cardAuthor.classList.add('author')
        cardImgContainer.classList.add('img-container')
        
    
    
        cardHead.appendChild(cardHeadline)
        cardHead.appendChild(cardAuthor)
        cardAuthor.appendChild(cardImgContainer)
        cardImgContainer.appendChild(cardImg)
        cardAuthor.appendChild(cardSpan)
        
    
    
        cardHeadline.textContent = article.headline;
        cardImg.src = article.authorPhoto;
        cardSpan.textContent = 'By ' + article.authorName;
        
        
        return cardHead
    }

   