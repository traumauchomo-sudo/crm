# CRM Implementation Tasks (Checklist)

## Contact Management
- [ ] Build contact list view with sortable columns (name, company, role, owner, tags, status).
- [ ] Implement “+ New Contact” button to open right-side drawer and create form validation states.
- [ ] Create contact form with required fields, owner selection, tags, notes, and custom field support.
- [ ] Add contact creation success toast and insert new contact at top of list.
- [ ] Implement duplicate detection on email with merge preview flow and safe merge confirmation.
- [ ] Support bulk import/export with field mapping and error reporting.
- [ ] Enforce ownership, visibility, and team sharing rules on contact data access.

## Lead Pipeline
- [ ] Build Kanban pipeline with configurable stages and draggable deal cards.
- [ ] Enforce required fields when moving into Proposal stage via modal (deal value, close date, probability).
- [ ] Record stage history and update weighted forecasting values after stage change.
- [ ] Auto-create task on Proposal stage entry (e.g., “Send proposal”).
- [ ] Support win/loss reasons and required fields per stage configuration.

## Activity & Task Tracking
- [ ] Implement “Log Activity” menu on contact detail and flow to open activity forms.
- [ ] Create task logging with due date, reminder, and assignment support.
- [ ] Surface tasks in “My Tasks” queue with filtering and status indicators (Today/Tomorrow/Overdue).
- [ ] Add task completion interaction (checkbox) and move to collapsed “Completed” section with toast.
- [ ] Trigger SLA-based alerts for overdue activities.

## Communication Logging
- [ ] Implement call logging form with outcome, duration, sentiment, summary, and attachment upload.
- [ ] Display logged calls in contact timeline with attachment download links.
- [ ] Add email threading and automatic association to contacts/deals where applicable.
- [ ] Enforce attachment access controls and preview support.

## Reporting & Dashboard
- [ ] Build dashboard with KPI widgets, pipeline chart, team activity, and recent activity feed.
- [ ] Implement owner/date/stage filters with saved view support (e.g., “Alex Weekly”).
- [ ] Add drill-down reporting with CSV export and role-based visibility controls.

## Design System & Accessibility
- [ ] Apply modern color system tokens (primary, accent, warning, danger, neutrals, background, focus ring).
- [ ] Implement typography scale and ensure focus ring visibility for keyboard navigation.

## Database & Backend Structure Changes
- [ ] Add core entities: contacts, organizations, deals, stages, activities, tasks, and notes.
- [ ] Add join tables for many-to-many relations (contact_tags, deal_contacts, contact_owners).
- [ ] Add custom_fields and custom_field_values to support extensibility for contacts and deals.
- [ ] Create stage_history table to track deal progression with timestamps and actor.
- [ ] Add attachments table with polymorphic links to activities/notes and access control flags.
- [ ] Add reporting_views table to store saved dashboard filters and visibility scope.
- [ ] Implement soft deletes (deleted_at) for contacts, organizations, and deals.
- [ ] Add indexes: contacts(email), deals(stage_id), activities(contact_id, occurred_at), tasks(assignee_id, due_at).
