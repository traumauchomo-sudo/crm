# CRM UI (ASCII)

## Modern Color System (Reference)
- **Primary:** Indigo 600 (#4F46E5) for primary actions and highlights.
- **Primary Hover:** Indigo 700 (#4338CA).
- **Accent:** Emerald 500 (#10B981) for success and positive trend indicators.
- **Warning:** Amber 500 (#F59E0B) for at-risk deals and alerts.
- **Danger:** Rose 500 (#F43F5E) for losses or destructive actions.
- **Neutrals:** Slate 50 (#F8FAFC), Slate 100 (#F1F5F9), Slate 500 (#64748B), Slate 900 (#0F172A).
- **Background:** Slate 50 with elevated cards on white (#FFFFFF).
- **Focus Ring:** Cyan 400 (#22D3EE) for accessibility.
- **Typography:** Inter or system UI; 14-16px body, 20-24px headings.

## Dashboard
+--------------------------------------------------------------------------------+
| CRM Dashboard                                                [Search........] |
+--------------------------------------------------------------------------------+
| KPIs: Pipeline $1.2M | Win Rate 32% | Tasks Due Today 5 | New Leads 12         |
+-----------------------------+-----------------------------+--------------------+
| Pipeline by Stage           | Team Activity               | My Tasks           |
| New        ████  20         | Calls     ███  12          | [ ] Call Acme       |
| Qualified  ██████ 30        | Emails    █████ 18         | [ ] Send proposal   |
| Proposal   ███  15          | Meetings  ██  6            | [ ] Follow-up Beta  |
| Negotiation ██  8           | Notes     ████ 14          | [ ] Review notes    |
+-----------------------------+-----------------------------+--------------------+
| Recent Activity                                                              |
| - Alex logged a call with Acme Corp                                           |
| - Priya moved Beta LLC to Proposal                                           |
| - Sam scheduled meeting with Delta Co                                        |
+--------------------------------------------------------------------------------+

## Contacts List
+--------------------------------------------------------------------------------+
| Contacts                                                     [+ New Contact]   |
+--------------------------------------------------------------------------------+
| Name            | Company        | Role         | Owner   | Tags   | Status   |
|----------------+----------------+--------------+---------+--------+----------|
| Jamie Rivera   | Acme Corp      | Director     | Alex    | VIP    | Active   |
| Priya Nair     | Beta LLC       | VP Sales     | Sam     | Lead   | Active   |
| Chen Li        | Delta Co       | Manager      | Priya   | Demo   | Active   |
+--------------------------------------------------------------------------------+

## Lead Pipeline (Kanban)
+--------------------------------------------------------------------------------+
| New                | Qualified           | Proposal            | Negotiation  |
+--------------------+---------------------+---------------------+--------------+
| Acme Corp          | Beta LLC            | Delta Co            | Echo Inc     |
| Foxtrot Ltd        | Gamma Partners      |                     |              |
+--------------------------------------------------------------------------------+

## Contact Detail
+--------------------------------------------------------------------------------+
| Jamie Rivera (Acme Corp)                        [Edit] [Log Activity]          |
+--------------------------------------------------------------------------------+
| Title: Director of Operations   | Owner: Alex   | Status: Active               |
| Email: jamie@acme.com           | Phone: 555-123| Tags: VIP, Renewal            |
+--------------------------------------------------------------------------------+
| Timeline                                                                      |
| 2024-06-05  Call logged: Discussed renewal timeline                           |
| 2024-06-02  Email sent: Proposal attached                                     |
| 2024-05-28  Meeting: Requirements gathering                                   |
+--------------------------------------------------------------------------------+

## Lead Detail
+--------------------------------------------------------------------------------+
| Deal: Acme Corp Renewal                          Stage: Proposal  $45,000      |
+--------------------------------------------------------------------------------+
| Owner: Alex  | Close Date: 2024-07-15 | Probability: 65% | Source: Referral    |
+--------------------------------------------------------------------------------+
| Next Best Action: Send proposal by 2024-06-10    [Mark Complete]               |
+--------------------------------------------------------------------------------+
| Activity Timeline                                                                |
| - 2024-06-05  Call: Discussed renewal scope                                     |
| - 2024-06-02  Email: Shared pricing options                                     |
+--------------------------------------------------------------------------------+

## Task Queue
+--------------------------------------------------------------------------------+
| My Tasks                                     [Filter: Due Today] [New Task]    |
+--------------------------------------------------------------------------------+
| Due        | Task                               | Related To       | Owner     |
|-----------+------------------------------------+------------------+-----------|
| Today     | Send proposal to Acme              | Acme Corp Deal   | Alex      |
| Tomorrow  | Follow up with Beta               | Beta LLC Contact | Sam       |
| Overdue   | Update notes from Delta meeting   | Delta Co Deal    | Priya     |
+--------------------------------------------------------------------------------+

## Button Behavior & Flow Notes

### Flow: Add Contact
1. **Contacts List** → click **[+ New Contact]**
2. **New Contact Drawer** opens (right side)
3. Click **[Save Contact]** → success toast → appears at top of list

**New Contact Drawer**
+--------------------------------------------------------------------------------+
| New Contact                                                    [Close X]       |
+--------------------------------------------------------------------------------+
| Name: _____________   Company: ____________   Owner: [Alex v]                  |
| Email: ____________   Phone: ____________    Tags:  [VIP] [Lead] [+ Add]       |
| Custom Field: Renewal Date  [ 2024-12-15 v ]                                   |
| Notes:                                                                       | |
|                                                                              | |
+--------------------------------------------------------------------------------+
| [Cancel]                                         [Save Contact]                |
+--------------------------------------------------------------------------------+

### Flow: Move Deal to Proposal
1. **Lead Pipeline** → drag card to **Proposal**
2. **Required Fields Modal** opens
3. Click **[Confirm]** → stage updates → auto-task created

**Required Fields Modal**
+--------------------------------------------------------------------------------+
| Update Deal: Acme Corp                                   [Close X]            |
+--------------------------------------------------------------------------------+
| Stage: Proposal                                                                |
| Deal Value: $_________   Expected Close: [ 2024-07-15 v ]                      |
| Win Probability: [65% v]   Next Step: [Send proposal v]                        |
+--------------------------------------------------------------------------------+
| [Cancel]                                         [Confirm]                     |
+--------------------------------------------------------------------------------+

### Flow: Log Activity from Contact Detail
1. **Contact Detail** → click **[Log Activity]**
2. **Log Activity Menu** → choose **Call**
3. **Call Log Form** opens → **[Save Activity]** → entry appears in timeline

**Log Activity Menu**
+----------------------------------------------+
| Log Activity                                 |
|----------------------------------------------|
| ( ) Call                                     |
| ( ) Email                                    |
| ( ) Meeting                                  |
| ( ) Task                                     |
|----------------------------------------------|
| [Continue]                                   |
+----------------------------------------------+

**Call Log Form**
+--------------------------------------------------------------------------------+
| Log Call: Jamie Rivera                                  [Close X]             |
+--------------------------------------------------------------------------------+
| Outcome: [Connected v]   Duration: [15 min v]           Sentiment: [Positive] |
| Summary:                                                                     | |
|                                                                              | |
| Attachment: [Choose File]                                                    |
+--------------------------------------------------------------------------------+
| [Cancel]                                         [Save Activity]               |
+--------------------------------------------------------------------------------+

### Flow: Complete Task
1. **Task Queue** → click checkbox on task row
2. Row collapses to “Completed” section → toast confirms

**Completed Tasks (Collapsed)**
+--------------------------------------------------------------------------------+
| Completed Tasks (3)                                           [Show v]         |
+--------------------------------------------------------------------------------+
