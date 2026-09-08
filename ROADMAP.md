# MessyTurtule Roadmap

## Product direction

Build a simple, fast loyalty and customer engagement platform for small businesses, cafés and facilities. Customers use one account and one personal QR code across participating businesses.

---

## Phase 0 — Foundation

**Goal:** Establish the product architecture before building features.

- [x] Create GitHub repository
- [x] Define product vision
- [x] Define user roles
- [x] Define customer/business/admin experiences
- [ ] Confirm final product name and branding
- [ ] Create initial Next.js application
- [ ] Connect Supabase project
- [ ] Define database schema
- [ ] Define RLS policies
- [ ] Set up development/staging environments
- [ ] Establish basic CI/build checks

---

## Phase 1 — MVP

**Goal:** Complete the core loyalty loop.

### Customer

- [ ] Sign up / sign in
- [ ] Customer profile
- [ ] Customer dashboard
- [ ] View all joined businesses
- [ ] View each loyalty programme
- [ ] Show universal customer QR code
- [ ] View stamp progress
- [ ] View stamp history
- [ ] View rewards
- [ ] Join a business by QR/link

### Business

- [ ] Business registration/onboarding
- [ ] Business profile
- [ ] Create/edit loyalty programme
- [ ] Configure stamps required for reward
- [ ] Configure programme start/end dates
- [ ] Create/manage rewards
- [ ] Customer list
- [ ] Staff management
- [ ] Staff login
- [ ] QR scanner
- [ ] Issue stamp
- [ ] Redeem reward
- [ ] Stamp/reward audit history

### Super Admin

- [ ] Super Admin authentication
- [ ] Business management
- [ ] User management
- [ ] Programme management
- [ ] Platform activity dashboard
- [ ] Account suspension/status controls

---

## Phase 2 — Communications

**Goal:** Turn loyalty data into useful customer engagement.

- [ ] Business message centre
- [ ] Create promotion
- [ ] Send to all customers
- [ ] Send to selected customers
- [ ] Audience filters
- [ ] Customers by stamp progress
- [ ] Customers who have not visited recently
- [ ] Customers with available rewards
- [ ] In-app inbox
- [ ] Push notifications
- [ ] Notification preferences
- [ ] Campaign history
- [ ] Basic delivery/open/redeem metrics where supported
- [ ] Scheduled campaigns

### Automated campaigns

- [ ] Welcome message after joining
- [ ] Stamp earned notification
- [ ] Almost-at-reward notification
- [ ] Reward-earned notification
- [ ] Win-back campaign after configurable inactivity period

---

## Phase 3 — Better loyalty tools

- [ ] Multiple loyalty programmes per business
- [ ] Multiple business locations
- [ ] Location-specific staff permissions
- [ ] Programme templates
- [ ] Different reward types
- [ ] Visit-based loyalty
- [ ] Spend-based loyalty (optional)
- [ ] Campaign-specific rewards
- [ ] Programme rollover/reset rules
- [ ] Loyalty expiry rules
- [ ] Fraud/abuse controls
- [ ] Configurable stamp frequency limits
- [ ] Detailed reports

---

## Phase 4 — Business growth

- [ ] Business subscription plans
- [ ] Billing integration
- [ ] Business branding/custom logo
- [ ] Custom customer-facing branding options
- [ ] Export customer/loyalty reports
- [ ] Advanced analytics
- [ ] Multi-location organisations
- [ ] Chain/franchise administration
- [ ] Staff activity reporting
- [ ] Customer retention metrics
- [ ] Reward redemption analytics

---

## Phase 5 — Communications expansion

- [ ] Email campaigns
- [ ] Email templates
- [ ] SMS integration
- [ ] SMS consent/preferences
- [ ] Campaign scheduling
- [ ] Campaign segmentation
- [ ] Communication frequency controls
- [ ] Unsubscribe/opt-out management
- [ ] Australian spam/privacy compliance review

**Important:** Do not enable production marketing email/SMS until consent, unsubscribe, provider and compliance requirements have been properly implemented and reviewed.

---

## Phase 6 — PWA / mobile experience

- [ ] Installable PWA
- [ ] Mobile-first customer UI
- [ ] Offline-friendly shell where useful
- [ ] Camera QR scanning optimisation
- [ ] Push notification support
- [ ] App icon and splash screen
- [ ] iOS testing
- [ ] Android testing
- [ ] Accessibility review
- [ ] Performance optimisation

---

## Phase 7 — Native apps (only after validation)

**Trigger:** Build native apps only after the PWA has demonstrated real usage and retention.

- [ ] Evaluate Capacitor vs React Native
- [ ] iOS app
- [ ] Android app
- [ ] Native push notifications
- [ ] App Store submission
- [ ] Google Play submission
- [ ] Deep links/app links

The Supabase backend and core product model should remain shared.

---

## Technical roadmap

### Core data model

Expected primary entities:

- `profiles`
- `organisations`
- `locations`
- `memberships`
- `loyalty_programmes`
- `programme_memberships`
- `stamps`
- `rewards`
- `redemptions`
- `campaigns`
- `campaign_recipients`
- `messages`
- `notification_preferences`
- `staff`
- `audit_logs`

Names may change during implementation after the schema is reviewed.

### Access model

```text
Super Admin
  └── Entire platform

Business Admin
  └── Organisation
       ├── Locations
       ├── Staff
       ├── Customers
       ├── Programmes
       ├── Rewards
       └── Campaigns

Staff
  └── Assigned business/location

Customer
  └── Own profile + own memberships/stamps/rewards/messages
```

### Security requirements

- Supabase RLS on tenant-owned tables
- No trust in frontend-only access restrictions
- Least-privilege roles
- Server-side validation for stamp/reward actions
- Audit trail for manual stamp changes and redemptions
- Rate limiting/abuse protection
- Secure QR token design; avoid exposing sensitive customer data in the QR payload
- Marketing consent and preference records
- Secure secrets/environment variables
- Production database backups and recovery plan

---

## Suggested build order

1. Next.js + PWA shell
2. Supabase project and schema
3. Auth + profiles
4. Roles and RLS
5. Business onboarding
6. Loyalty programme creation
7. Customer join flow
8. Universal customer QR
9. Staff scanner
10. Stamp transaction
11. Rewards/redemption
12. Customer dashboard
13. Business dashboard
14. Super Admin dashboard
15. Communications
16. Push notifications
17. Analytics
18. Billing

Keep each stage deployable and testable before moving to the next.

---

## MVP success criteria

The MVP should pass this complete journey:

**Business creates programme → Customer joins → Customer receives universal QR → Staff scans → Stamp is issued → Customer dashboard updates → Customer reaches reward → Reward is redeemed → Business sees the transaction.**

Then validate:

**Business creates promotion → Selects audience → Sends campaign → Customer receives it → Customer returns → Business can see campaign activity.**

---

## Product principles

1. Make the customer experience extremely simple.
2. Make scanning/stamping take seconds, not minutes.
3. One customer account should work across many businesses.
4. Businesses own and control their customer relationships and programmes.
5. Tenant isolation must be enforced at database level.
6. Avoid unnecessary features until the core loyalty loop works.
7. PWA first; native apps only when justified by usage.
8. Keep infrastructure simple and low-cost while validating the business model.
