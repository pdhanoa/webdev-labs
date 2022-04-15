-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
SELECT id, first_name, last_name 
ORDER BY last_name
FROM users;



-- Exercise 4
SELECT id, user_id, image_url
FROM posts
WHERE user_id = 26;


-- Exercise 5
SELECT id, user_id, image_url
FROM posts
WHERE user_id = 26 OR user_id = 12;



-- Exercise 6
SELECT count(*)
FROM posts;



-- Exercise 7
SELECT user_id, count(*) AS comments
FROM comments
GROUP BY user_id
ORDER BY comments DESC;



-- Exercise 8
SELECT p.id, p.image_url, p.user_id, u.username, u.first_name, u.last_name
FROM posts p
INNER JOIN users u ON p.user_id = u.id
WHERE user_id = 26 OR user_id = 12;

-- Exercise 9
SELECT p.id, p.pub_date, f.following_id
FROM posts p
INNER JOIN following f ON p.user_id = f.following_id
WHERE f.user_id = 26;


-- Exercise 10
SELECT p.id, p.pub_date, f.following_id, u.username
FROM posts p
INNER JOIN following f ON p.user_id = f.following_id
INNER JOIN users u ON u.id = p.user_id
WHERE f.user_id = 26
ORDER BY p.pub_date DESC;


-- Exercise 11
INSERT INTO bookmarks(user_id, post_id, timestamp)
VALUES (26, 219, now());

INSERT INTO bookmarks(user_id, post_id, timestamp)
VALUES (26, 220, now());

INSERT INTO bookmarks(user_id, post_id, timestamp)
VALUES (26, 221, now());



-- Exercise 12
DELETE FROM bookmarks
WHERE user_id = 26 AND post_id in (219, 220, 221);



-- Exercise 13
UPDATE users
SET email = 'knick2022@gmail.com'
WHERE id = 26



-- Exercise 14
SELECT p.id, p.user_id, COUNT(*) AS count,p.caption AS concat
FROM posts p
JOIN comments c on c.post_id = p.id
WHERE p.user_id = 26
GROUP BY p.id
ORDER BY count DESC;