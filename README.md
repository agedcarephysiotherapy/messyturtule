# MessyTurtule

> Mobile-first digital loyalty, rewards and customer engagement platform.

MessyTurtule is planned as a multi-tenant loyalty platform where customers can keep loyalty programmes from multiple businesses in one account. Businesses can issue digital stamps, manage rewards, and send targeted promotions and communications.

## Product vision

**One app. All your loyalty cards. All your rewards. All your offers.**

### Customer

- Personal dashboard showing every business and loyalty programme
- Universal QR/barcode for quick identification at participating businesses
- Live stamp progress and programme periods
- Stamp history
- Rewards and redemption status
- Offers and promotions
- In-app messages and push notifications
- Join a business by scanning its QR code

### Business / Café / Facility

- Business-level isolated account and data
- Loyalty programme creation and management
- Staff accounts and permissions
- Customer lookup and QR scanning
- Add/remove stamps with an audit trail
- Rewards and redemption management
- Bulk communications
- Selected-customer communications
- Audience filtering and targeting
- Scheduled promotions
- Campaign history and basic analytics

### Super Admin

- Manage all businesses, users and programmes
- Master settings and platform functions
- Account status and support controls
- Platform-wide activity and analytics
- Multi-tenant oversight

## Proposed stack

- **Frontend:** Next.js / React, mobile-first PWA
- **Database:** Supabase PostgreSQL
- **Authentication:** Supabase Auth
- **Authorisation:** Supabase Row Level Security (RLS)
- **Storage:** Supabase Storage where required
- **Hosting:** Vercel initially; Cloudflare remains a viable deployment option
- **Source control:** GitHub
- **QR:** Browser/device camera scanning
- **Notifications:** Web push initially; email/SMS providers added where required

## Architecture principles

1. **Multi-tenant by design.** A business must only access its own customers, programmes, stamps, rewards and communications.
2. **RLS is the security boundary.** Frontend hiding is never treated as access control.
3. **Customer-first mobile UX.** Core actions should take only a few taps.
4. **Universal customer identity.** One customer QR should work across participating businesses.
5. **Auditable loyalty events.** Stamp additions, removals and redemptions should be recorded with business, location, staff and timestamp information.
6. **Consent-aware communications.** Marketing preferences, unsubscribe handling and Australian spam-law requirements must be considered before production messaging is enabled.
7. **PWA first, native later.** Validate the product before investing in separate App Store and Google Play builds.

## Initial user roles

| Role | Scope | Main capabilities |
|---|---|---|
| Super Admin | Entire platform | Master functions, businesses, users, reporting and support |
| Business Admin | Organisation | Programmes, customers, staff, rewards, communications |
| Staff | Assigned location/business | Scan customers, issue stamps, redeem rewards |
| Customer | Own account | Dashboard, QR, stamps, rewards, offers and messages |

## MVP goal

A customer should be able to:

1. Sign up / sign in.
2. Join a business.
3. See that business on their dashboard.
4. Show their personal QR code.
5. Have staff scan the code and add a stamp.
6. See the stamp immediately on their dashboard.
7. Earn a reward after the configured number of stamps.
8. Receive a business promotion or message.

A business should be able to:

1. Create an account.
2. Create a loyalty programme with a start/end period.
3. Add staff.
4. Scan a customer QR code.
5. Issue a stamp.
6. Manage rewards.
7. Send a promotion to all customers or a selected audience.
8. View basic campaign and loyalty activity.

## Status

**Stage: Product definition / MVP planning**

The repository starts intentionally lightweight. Product and technical decisions should be captured here before implementation expands.

## Roadmap

See [ROADMAP.md](./ROADMAP.md).

## Security & privacy

Security and privacy are core requirements rather than post-MVP additions. The implementation should include tenant isolation, least-privilege roles, audit logs, rate limiting for loyalty actions, consent/preferences for marketing, and appropriate Australian privacy/spam compliance review before launch.

## Naming

Repository: `messyturtule`

Working product name: **MessyTurtule**. The name can be changed later without affecting the underlying architecture.
