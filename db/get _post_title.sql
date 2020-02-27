SELECT * FROM post p
JOIN users u ON p.author_id = u.user_id
WHERE p.title ILIKE $1
ORDER BY p.post_id DESC

