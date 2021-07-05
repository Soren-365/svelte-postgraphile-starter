create function set_time_created() returns trigger as $$
begin
  new."timeCreated" := current_timestamp;
  return new;
end;
$$ language plpgsql;

--//
