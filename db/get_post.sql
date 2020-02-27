SELECT p.title, p.img, p.content, u.username, u.profile_pic FROM post p
JOIN users u ON p.author_id = u.user_id 
