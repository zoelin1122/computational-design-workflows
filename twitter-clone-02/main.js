// Structure
//----------------------------
const form = document.querySelector("form");
const tweetInput = document.querySelector(".tweet");
const submitTweetButton = document.querySelector("button");
const tweetContainer = document.querySelector("ul");
let tweetCount = document.querySelector(".tweet_count");



//OBJECT SETUP
//----------------------------
let tweets = {
	"tweetList": []
}

let count = 30;
tweetCount.innerText = count;

//Event Handelers

function addTweet(event){
    event.preventDefault()
    let newTweet = tweetInput.value

    tweetObject = {
        name: newTweet
    }
    tweets.tweetList.push(tweetObject)
    displayTweet(tweetObject)
    form.reset();
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

function pageLoadFn(){
if (localStorage.getItem('tweets')==null)
    {
        return
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'))
        tweets.tweetList.forEach(displayTweet)
    }
}

function displayTweet(tweet){
    console.log(tweet)
    let tweetItem = document.createElement('li')
    let tweetContent = tweet.name
    tweetItem.textContent = "Zoelin1122 @bot " + tweetContent 
    if (tweetContent == ""){
        return null
    }
    if (tweetContent.length < 30) {
        tweetContainer.appendChild(tweetItem)
    }
    count = 30;
    tweetCount.innerText = count;
}


function updateTweetCount(event){
    if ((event.code == "Backspace") && (count<30)) {
        count = count + 1
        tweetCount.innerText = count;
    }  
    
    if (count > 0){
        count = count - 1
        tweetCount.innerText = count;
    }
    
}

pageLoadFn()

//Event Listeners
submitTweetButton.addEventListener('click', addTweet)
tweetInput.addEventListener('keyup', updateTweetCount)