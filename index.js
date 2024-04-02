const postBlock = document.getElementById('post-block');
const inputId = document.getElementById('input-id');
const button = document.getElementById('but'); 
const postId = document.getElementById('post-block-id')
const postTitle = document.getElementById('post-block-title')
const postBody = document.getElementById('post-block-body')

button.addEventListener('click', () => {
    let inputValue = parseInt(inputId.value);
    if (!(inputValue && inputValue >= 1 && inputValue <= 100)) {
        alert('Введите корректный ID поста (число от 1 до 100)');
        return;
    }
    postId.textContent = '';
    postTitle.textContent = '';
    postBody.textContent = '';

    fetch(`https://jsonplaceholder.typicode.com/posts/${inputValue}`)
    .then(response => response.json())
    .then((post) => {
        if (post.id) {
            postId.textContent = `Id ${post.id}`;
            postTitle.textContent = post.title;
            postBody.textContent = post.body;

            const commentButton = document.createElement('button');
            commentButton.textContent = 'Показать комментарии';
            commentButton.addEventListener('click', () => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${inputValue}/comments`)
                .then(response => response.json())
                .then((comments) => {
                    if (comments.length === 0) {
                        alert('К этому посту пока нет комментариев');
                        return;
                    }
                    const commentsBlock = document.createElement('div');
                    comments.forEach(comment => {
                        const commentText = document.createElement('div');
                        commentText.textContent = comment.body;
                        commentsBlock.appendChild(commentText);
                    });
                    postBlock.appendChild(commentsBlock);
                })
                .catch((error) => {
                    console.error('Произошла ошибка при загрузке комментариев', error);
                });
            });
            postBlock.appendChild(commentButton);
        } else {
            alert('Пост не найден');
        }
    })
    .catch((error) => {
        console.error('Произошла ошибка при загрузке поста', error);
    });
});