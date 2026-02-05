# CRM Feature Test Cases

## 1. Contact Management
**Test Case:** Create and update a contact profile with custom fields and deduplication.
- **Steps:**
  1. Click “+ New Contact”.
  2. Enter name, company, role, email, owner, and a custom field (e.g., “Renewal Date”).
  3. Save the contact.
  4. Attempt to create another contact with the same email.
  5. Choose “Merge” and confirm field selections in the merge preview.
  6. Edit the contact and add tags.
- **Expected Result:** Contact is created with required fields, duplicate detection is triggered, the merge completes without data loss, and updates persist with new tags.

## 2. Lead Pipeline
**Test Case:** Move a lead through stages with required fields and automation.
- **Steps:**
  1. Open the Lead Pipeline view.
  2. Drag “Acme Corp” from New to Qualified.
  3. Drag “Acme Corp” to Proposal.
  4. When prompted, enter required fields (deal value, expected close date).
  5. Confirm auto-created task (e.g., “Send proposal”) appears.
- **Expected Result:** Stage changes persist, required fields are enforced, stage history records each move, and automation creates the expected task.

## 3. Activity & Task Tracking
**Test Case:** Create a follow-up task with reminder and SLA alert.
- **Steps:**
  1. Open a contact detail page.
  2. Click “Log Activity” and choose “Task”.
  3. Set due date for tomorrow and enable reminder.
  4. Assign to a teammate and save.
  5. Let the task become overdue by 1 day (use test clock or wait).
- **Expected Result:** Task appears in My Tasks with the correct due date, reminder, and assignee; an SLA alert is triggered when overdue.

## 4. Communication Logging
**Test Case:** Log a call outcome and attach a file.
- **Steps:**
  1. Open a contact detail page.
  2. Click “Log Activity” and choose “Call”.
  3. Add call summary, outcome, and attach a file.
  4. Save the activity.
- **Expected Result:** Call entry appears in the contact timeline with summary, outcome, and downloadable attachment.

## 5. Reporting & Dashboard
**Test Case:** Filter dashboard metrics by owner and save view.
- **Steps:**
  1. Open the Dashboard.
  2. Apply owner filter to “Alex”.
  3. Observe pipeline value and conversion rate widgets.
  4. Save the filtered view as “Alex Weekly”.
  5. Re-open the dashboard and load “Alex Weekly”.
- **Expected Result:** Dashboard metrics refresh to display data scoped to Alex, and the saved view re-applies the filters when loaded.
