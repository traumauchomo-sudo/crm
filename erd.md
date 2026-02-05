# CRM Database ERD (ASCII)

```
+-------------------+         +---------------------+
| organizations     |         | contacts            |
|-------------------|         |---------------------|
| id (PK)           |<-----+  | id (PK)             |
| name              |      |  | organization_id FK  |
| industry          |      +--| first_name          |
| domain            |         | last_name           |
| owner_id FK       |         | email (unique)      |
| created_at        |         | phone               |
| updated_at        |         | owner_id FK         |
| deleted_at        |         | status              |
+-------------------+         | created_at          |
                              | updated_at          |
                              | deleted_at          |
                              +---------------------+

+-------------------+         +---------------------+        +------------------+
| deals             |         | stages              |        | stage_history    |
|-------------------|         |---------------------|        |------------------|
| id (PK)           |---+     | id (PK)             |<---+   | id (PK)          |
| organization_id FK|   |     | name                |    |   | deal_id FK       |
| owner_id FK       |   +-----| pipeline_id FK      |    +---| stage_id FK      |
| stage_id FK       |         | sort_order          |        | changed_by FK    |
| title             |         | required_fields     |        | changed_at       |
| amount            |         | created_at          |        | from_stage_id FK |
| probability       |         | updated_at          |        | to_stage_id FK   |
| expected_close_at |         +---------------------+        +------------------+
| created_at        |
| updated_at        |
| deleted_at        |
+-------------------+

+-------------------+         +---------------------+        +------------------+
| activities        |         | tasks               |        | attachments      |
|-------------------|         |---------------------|        |------------------|
| id (PK)           |         | id (PK)             |        | id (PK)          |
| contact_id FK     |         | title               |        | owner_id FK      |
| deal_id FK        |         | description         |        | file_name        |
| type              |         | due_at              |        | file_path        |
| outcome           |         | reminder_at         |        | content_type     |
| duration_minutes  |         | status              |        | size_bytes       |
| sentiment         |         | assignee_id FK      |        | attachable_id FK |
| summary           |         | related_type        |        | attachable_type  |
| occurred_at       |         | related_id          |        | is_private       |
| created_at        |         | created_at          |        | created_at       |
| updated_at        |         | updated_at          |        | updated_at       |
+-------------------+         +---------------------+        +------------------+

+-------------------+         +---------------------+        +------------------+
| notes             |         | tags                |        | contact_tags     |
|-------------------|         |---------------------|        |------------------|
| id (PK)           |         | id (PK)             |        | contact_id FK    |
| contact_id FK     |         | name (unique)       |        | tag_id FK        |
| body              |         | color               |        | created_at       |
| created_by FK     |         | created_at          |        | updated_at       |
| created_at        |         | updated_at          |        +------------------+
| updated_at        |         +---------------------+
+-------------------+

+-------------------+         +---------------------+        +------------------+
| custom_fields     |         | custom_field_values |        | reporting_views  |
|-------------------|         |---------------------|        |------------------|
| id (PK)           |         | id (PK)             |        | id (PK)          |
| entity_type       |         | custom_field_id FK  |        | name             |
| name              |         | entity_id           |        | owner_id FK      |
| field_type        |         | value_text          |        | filters_json     |
| required          |         | value_number        |        | visibility_scope |
| created_at        |         | value_date          |        | created_at       |
| updated_at        |         | created_at          |        | updated_at       |
+-------------------+         | updated_at          |        +------------------+
                              +---------------------+

+-------------------+         +---------------------+
| deal_contacts     |         | contact_owners      |
|-------------------|         |---------------------|
| deal_id FK        |         | contact_id FK       |
| contact_id FK     |         | owner_id FK         |
| role              |         | role                |
| created_at        |         | created_at          |
| updated_at        |         | updated_at          |
+-------------------+         +---------------------+
```

## Notes
- Polymorphic relations: `attachments` attach to activities or notes via `attachable_type` and `attachable_id`.
- Soft deletes: `contacts`, `organizations`, and `deals` include `deleted_at`.
- Indexing strategy aligns with core queries: email lookup, pipeline stage, activity timelines, and task queues.
