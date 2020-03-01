const baseUrl = document.URL + '/answers';
document.addEventListener("DOMContentLoaded", function(){
    getAnswerList()
});

const submitAnswer = () => {
    const data = { 'contents': document.getElementById('contents').value };
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText)
            }
            getAnswerList()
        })
}

const getAnswerList = () => {
    fetch(baseUrl, {method: 'GET'})
        .then(response => {
            return response.json();
        })
        .then(response => {
            const answerList = response.answers;
            let element = document.querySelector('.qna-comment-slipp-articles')
            answerList.forEach(answer => {
                element.innerHTML = element.innerHTML +
                    `<article class="article">
                    <div class="article-header">
			            <div class="article-header-thumb">
				            <img src="https://graph.facebook.com/v2.3/1324855987/picture" class="article-author-thumb" alt="">
			            </div>
			            <div class="article-header-text">
				            <a href="/users/${answer.writer.id}" class="article-author-name">${answer.writer.userId}</a>
			            	<div class="article-header-time">${answer.createdAt}</div>
			            </div>
		            </div>
		            <div class="article-doc comment-doc">${answer.contents}</div>
		            <div class="article-util">
		                <ul class="article-util-list">
			                <li>
				                <a class="link-modify-article" href="/questions/${answer.question.id}/answers/${answer.id}">수정</a>
			                </li>
			                <li>
				                <form class="delete-answer-form" action="/questions/${answer.question.id}/answers/${answer.id}" method="POST">
					                <input type="hidden" name="_method" value="DELETE">
                                    <button type="submit" class="delete-answer-button">삭제</button>
				                </form>
			                </li>
		                </ul>
		            </div>
	            </article>`
            })
        });
}