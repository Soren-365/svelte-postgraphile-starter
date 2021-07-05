create function set_last_modified() returns trigger as $$
begin
  new."lastModified" := current_timestamp;
  return new;
end;
$$ language plpgsql;

--//
