# CRM Implementation Tasks (Checklist)

## Contact Management
- [ ] Build contact list view with sortable columns (name, company, role, owner, tags, status).【F:ui.md†L32-L41】
- [ ] Implement “+ New Contact” button to open right-side drawer.【F:ui.md†L90-L107】
- [ ] Create contact form with required fields, owner selection, tags, notes, and custom field support.【F:ui.md†L95-L104】【F:features.md†L3-L10】
- [ ] Add contact creation success toast and insert new contact at top of list.【F:ui.md†L90-L93】
- [ ] Implement duplicate detection on email with merge preview flow and safe merge confirmation.【F:features.md†L6-L10】【F:testcases.md†L4-L12】
- [ ] Support bulk import/export with field mapping and error reporting.【F:features.md†L6-L10】
- [ ] Enforce ownership, visibility, and team sharing rules on contact data access.【F:features.md†L8-L10】

## Lead Pipeline
- [ ] Build Kanban pipeline with configurable stages and draggable deal cards.【F:ui.md†L43-L49】【F:features.md†L19-L23】
- [ ] Enforce required fields when moving into Proposal stage via modal (deal value, close date, probability).【F:ui.md†L108-L122】【F:testcases.md†L15-L22】
- [ ] Record stage history and update weighted forecasting values after stage change.【F:features.md†L17-L22】
- [ ] Auto-create task on Proposal stage entry (e.g., “Send proposal”).【F:features.md†L21-L23】【F:testcases.md†L15-L22】
- [ ] Support win/loss reasons and required fields per stage configuration.【F:features.md†L19-L21】

## Activity & Task Tracking
- [ ] Implement “Log Activity” menu on contact detail and flow to open activity forms.【F:ui.md†L124-L151】
- [ ] Create task logging with due date, reminder, and assignment support.【F:features.md†L32-L36】【F:testcases.md†L25-L32】
- [ ] Surface tasks in “My Tasks” queue with filtering and status indicators (Today/Tomorrow/Overdue).【F:ui.md†L77-L86】
- [ ] Add task completion interaction (checkbox) and move to collapsed “Completed” section with toast.【F:ui.md†L153-L160】
- [ ] Trigger SLA-based alerts for overdue activities.【F:features.md†L35-L36】【F:testcases.md†L25-L32】

## Communication Logging
- [ ] Implement call logging form with outcome, duration, sentiment, summary, and attachment upload.【F:ui.md†L141-L151】
- [ ] Display logged calls in contact timeline with attachment download links.【F:ui.md†L58-L62】【F:testcases.md†L34-L41】
- [ ] Add email threading and automatic association to contacts/deals where applicable.【F:features.md†L45-L49】
- [ ] Enforce attachment access controls and preview support.【F:features.md†L47-L49】

## Reporting & Dashboard
- [ ] Build dashboard with KPI widgets, pipeline chart, team activity, and recent activity feed.【F:ui.md†L14-L30】【F:features.md†L55-L61】
- [ ] Implement owner/date/stage filters with saved view support (e.g., “Alex Weekly”).【F:features.md†L55-L61】【F:testcases.md†L43-L51】
- [ ] Add drill-down reporting with CSV export and role-based visibility controls.【F:features.md†L59-L62】

## Design System & Accessibility
- [ ] Apply modern color system tokens (primary, accent, warning, danger, neutrals, background, focus ring).【F:ui.md†L3-L12】
- [ ] Implement typography scale and ensure focus ring visibility for keyboard navigation.【F:ui.md†L11-L12】
