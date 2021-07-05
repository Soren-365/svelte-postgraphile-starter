create function set_last_modified() returns trigger as $$
begin
  new."lastModified" := NOW();
  return new;
end;
$$ language plpgsql;

--//
