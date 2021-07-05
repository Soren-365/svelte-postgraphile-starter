INSERT into usertable (
        "name",
        "telephone",
        "signup_in_class_id",
        "signup_teacher_in_classes_id",
        "email",
        "password"
    )
VALUES (
        'benny',
        '22',
        2,
        array [0],
        'benny@sol.ro',
        '$2b$10$k4OCZrRkySRSvOHofF/QyeKt6iXQeJVHhYWuVwPEjn8crFhTa3sPe'
    );
--password is "lovelove"
INSERT into usertable (
        "name",
        "telephone",
        "signup_in_class_id",
        "signup_teacher_in_classes_id",
        "email",
        "password"
    )
VALUES (
        'allstar',
        '333',
        5,
        array [0],
        --31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4
        'allstar@sol.ro',
        '$2b$10$k4OCZrRkySRSvOHofF/QyeKt6iXQeJVHhYWuVwPEjn8crFhTa3sPe'
    );
--password is "lovelove"
INSERT into usertable (
        "name",
        "telephone",
        "signup_in_class_id",
        "signup_teacher_in_classes_id",
        "email",
        "password"
    )
VALUES (
        'Allstar Micisescu',
        '333',
        23,
        array [8,5,6,7],
        --31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4
        'allstar2@sol.ro',
        '$2b$10$k4OCZrRkySRSvOHofF/QyeKt6iXQeJVHhYWuVwPEjn8crFhTa3sPe'
    );
--password is "lovelove"
INSERT into usertable (
        "name",
        "telephone",
        "signup_in_class_id",
        "signup_teacher_in_classes_id",
        "email",
        "password"
    )
VALUES (
        'Vlad Tepes',
        '22342',
        2,
        array [0],
        'vlad@sol.ro',
        '$2b$10$k4OCZrRkySRSvOHofF/QyeKt6iXQeJVHhYWuVwPEjn8crFhTa3sPe'
    );
--password is "lovelove"

INSERT into usertable (
        "name",
        "email",
        "password",
        "my_role"
    )
VALUES (
        'admin',
        'contact@avantweb.ro',
        '$2b$10$k4OCZrRkySRSvOHofF/QyeKt6iXQeJVHhYWuVwPEjn8crFhTa3sPe',
        'app_admin'
    );
--password is "lovelove"