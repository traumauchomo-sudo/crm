# CRM Implementation Tasks (Checklist)

## Contact Management
- [ ] Contact list view with sorting and filters.
  - **Frontend:** Build contacts table UI with sortable columns and status pills; add search input and tag filters.
  - **Backend:** Add contacts list endpoint with sort, filter, and pagination; return counts for status filters.
  - **Database:** Ensure contacts table supports status, owner_id, and organization_id indexes.
- [ ] “+ New Contact” drawer flow.
  - **Frontend:** Implement right-side drawer, validation states, and save/cancel actions.
  - **Backend:** Create contact create endpoint with validation and duplicate detection.
  - **Database:** Add unique index on contacts.email and store custom field values.
- [ ] Contact form with custom fields and notes.
  - **Frontend:** Render custom field controls based on field type and include notes editor.
  - **Backend:** Return custom field definitions and persist values on save.
  - **Database:** Add custom_fields and custom_field_values tables if missing.
- [ ] Duplicate detection and merge preview.
  - **Frontend:** Show merge modal with field-by-field selection.
  - **Backend:** Provide merge preview API and perform merge transaction.
  - **Database:** Track merged_from contact IDs for auditing.
- [ ] Bulk import/export.
  - **Frontend:** Import wizard with field mapping and error summary.
  - **Backend:** CSV import processor with row-level validation feedback.
  - **Database:** Store import job and row error logs.
- [ ] Ownership and sharing rules.
  - **Frontend:** Show owner selector and sharing indicators.
  - **Backend:** Enforce permission checks on read/write and sharing scopes.
  - **Database:** Add contact_owners join table for multi-owner support.

## Lead Pipeline
- [ ] Kanban pipeline with configurable stages.
  - **Frontend:** Render columns from stage config and enable drag-and-drop.
  - **Backend:** Serve pipeline/stage config and deals by stage.
  - **Database:** Add stages table with sort_order and pipeline_id.
- [ ] Required fields on stage move (Proposal).
  - **Frontend:** Show required fields modal and block drop until completed.
  - **Backend:** Validate required fields on stage change and return errors.
  - **Database:** Store required_fields JSON per stage.
- [ ] Stage history and forecasting.
  - **Frontend:** Display stage history timeline and updated forecast numbers.
  - **Backend:** Record stage_history and recompute weighted pipeline totals.
  - **Database:** Add stage_history table with from/to stage and actor.
- [ ] Automation: auto-create proposal task.
  - **Frontend:** Show created task toast and link to task queue.
  - **Backend:** Trigger task creation on stage transition.
  - **Database:** Ensure tasks table supports related_type/related_id.
- [ ] Win/Loss reasons.
  - **Frontend:** Prompt for reason on Won/Lost transitions.
  - **Backend:** Validate reason and store on deal record.
  - **Database:** Add win_reason, loss_reason fields on deals.

## Activity & Task Tracking
- [ ] Log Activity menu and forms.
  - **Frontend:** Implement log activity menu and modal forms for call/email/meeting/task.
  - **Backend:** Create activity endpoints with validation per type.
  - **Database:** Add activities table with type, outcome, sentiment, occurred_at.
- [ ] Task logging with reminders and assignments.
  - **Frontend:** Task form with due date, reminder, and assignee picker.
  - **Backend:** Schedule reminders and send notifications.
  - **Database:** Add reminder_at and assignee_id fields to tasks.
- [ ] My Tasks queue.
  - **Frontend:** Build task list with due filters and status chips.
  - **Backend:** Query tasks for assignee with due-date filters.
  - **Database:** Index tasks on assignee_id and due_at.
- [ ] Task completion flow.
  - **Frontend:** Checkbox completion with toast and collapsed completed section.
  - **Backend:** Update task status and completed_at.
  - **Database:** Add completed_at and status fields.
- [ ] SLA overdue alerts.
  - **Frontend:** Show overdue badge and alert banner.
  - **Backend:** Scheduled job to flag overdue tasks and notify owners.
  - **Database:** Store SLA policy config per team or owner.

## Communication Logging
- [ ] Call logging with attachment.
  - **Frontend:** Call log form with file upload and summary fields.
  - **Backend:** Store call metadata and upload files.
  - **Database:** Attachments table with polymorphic link to activities.
- [ ] Contact timeline with downloads.
  - **Frontend:** Render timeline entries with attachment links.
  - **Backend:** Provide signed URLs or protected download endpoint.
  - **Database:** Index attachments by attachable_id/type.
- [ ] Email threading and association.
  - **Frontend:** Show thread grouping and related deal/contact badges.
  - **Backend:** Match email headers to contacts/deals.
  - **Database:** Store email_message_id and thread_id on activities.
- [ ] Attachment access control.
  - **Frontend:** Respect permissions in UI (hide or disabled links).
  - **Backend:** Enforce access checks on download.
  - **Database:** Add is_private and owner_id fields to attachments.

## Reporting & Dashboard
- [ ] KPI dashboard layout.
  - **Frontend:** Render KPI cards, pipeline chart, activity list.
  - **Backend:** Aggregate metrics endpoints for KPIs and charts.
  - **Database:** Add materialized views or cached aggregates as needed.
- [ ] Filters and saved views.
  - **Frontend:** Filter bar with save/load views.
  - **Backend:** Persist filters and scope to user/team.
  - **Database:** Add reporting_views with filters_json and visibility_scope.
- [ ] Drill-down and export.
  - **Frontend:** Drill-down tables with export action.
  - **Backend:** CSV export endpoint with audit logging.
  - **Database:** Add export_audit table if required by compliance.

## Design System & Accessibility
- [ ] Color system tokens.
  - **Frontend:** Apply theme tokens in components and charts.
  - **Backend:** Not applicable.
  - **Database:** Not applicable.
- [ ] Typography and focus states.
  - **Frontend:** Apply typography scale and focus ring styling.
  - **Backend:** Not applicable.
  - **Database:** Not applicable.

## Database & Backend Structure Changes
- [ ] Add core entities: contacts, organizations, deals, stages, activities, tasks, and notes.
  - **Frontend:** Not applicable.
  - **Backend:** Add models, controllers, and validation rules.
  - **Database:** Create tables with foreign keys and soft deletes.
- [ ] Add join tables for many-to-many relations (contact_tags, deal_contacts, contact_owners).
  - **Frontend:** Not applicable.
  - **Backend:** Add relationship mappings and sync endpoints.
  - **Database:** Create join tables with composite indexes.
- [ ] Add custom_fields and custom_field_values.
  - **Frontend:** Not applicable.
  - **Backend:** Add endpoints to manage field definitions and values.
  - **Database:** Add custom field tables with indexes on entity_type/entity_id.
- [ ] Create stage_history.
  - **Frontend:** Not applicable.
  - **Backend:** Write stage transition logging on updates.
  - **Database:** Create stage_history with deal_id, from/to stage_id, changed_by.
- [ ] Add attachments with polymorphic links.
  - **Frontend:** Not applicable.
  - **Backend:** Store attachments and handle authorization.
  - **Database:** Add attachments with attachable_type/id and indexes.
- [ ] Add reporting_views.
  - **Frontend:** Not applicable.
  - **Backend:** CRUD for saved views.
  - **Database:** Create reporting_views with filters_json.
- [ ] Implement soft deletes.
  - **Frontend:** Not applicable.
  - **Backend:** Ensure queries exclude deleted records by default.
  - **Database:** Add deleted_at where needed.
- [ ] Add indexes for core queries.
  - **Frontend:** Not applicable.
  - **Backend:** Align query plans to indexes.
  - **Database:** Add indexes on contacts(email), deals(stage_id), activities(contact_id, occurred_at), tasks(assignee_id, due_at).
