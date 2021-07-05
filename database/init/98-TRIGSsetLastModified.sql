create trigger coupon_last_modified
before
update on coupon for each row execute procedure set_last_modified();
--//
create trigger usertable_last_modified
before
update on usertable for each row execute procedure set_last_modified();
--//
create trigger classtable_last_modified
before
update on classtable for each row execute procedure set_last_modified();
--//
create trigger student_last_modified
before
update on student for each row execute procedure set_last_modified();
--//
create trigger teacher_last_modified
before
update on teacher for each row execute procedure set_last_modified();
--//
create trigger classonline_last_modified
before
update on class_online for each row execute procedure set_last_modified();
--//
