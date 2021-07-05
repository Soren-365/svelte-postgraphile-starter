CREATE TABLE coupon (
    id SERIAL primary key,
    coupon_code VARCHAR(12) UNIQUE NOT NULL,
    email TEXT UNIQUE,
    group_id INT REFERENCES grouptable(id),
    class_id INT REFERENCES classtable (id),
    teacher_id INT,
    city cities,
    gender genders,
    coupon_type coupon_type,
    signed_up BOOLEAN default false,
    invited BOOLEAN default false,
    lastModified TIMESTAMP,
    timeCreated TIMESTAMP default NOW()
);
CREATE INDEX ON coupon(id);
CREATE INDEX ON coupon(coupon_code);
CREATE INDEX ON coupon(class_id);
CREATE INDEX ON coupon(group_id);
CREATE INDEX ON coupon(teacher_id);
--//