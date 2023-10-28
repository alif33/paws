---

# Functional Requirements Specification (FRS) for SaaS Landing Page and User Journey

1. **Landing Page:**
   - Display what we offer and a brief explanation about our service
   - Display available plans/packages along with details and pricing.
   - Provide an option to select a plan/package.
   - Provide a contact us form

2. **Sign-up Page:**
   - Allow users to register using either their Gmail account or by providing an email and password.
   - Collect necessary user information such as name, email, and password for account creation and store in firestore collection.

3. **Payment Process:**
   - Integrate Stripe for processing payments.
   - Ensure a secure and smooth payment process for users.
   - Capture and store payment details for future reference.
   - If user close the tab/browser in the mid of payment process, next time when they come to client area, they will be able to continue their payment.

4. **Setup Page:**
   - Prompt the user to select their country.
   - Determine the appropriate Firestore region based on the chosen country.
   - Initiate the setup of a Firestore database using Google Cloud SDK and apply necessary rules to it.
   - Notify the user to wait for the setup to be completed.

5. **Email Notification:**
   - Send a confirmation email to the user once the setup is complete.
   - Include relevant information regarding the setup and next steps.

6. **Client Panel:**
   - Display the user's subscribed plan along with all relevant details and pricing information.
   - Provide the next payment date and the option to cancel the plan/subscription.
   - Allow users to invite staff/friends to join by providing their email addresses.

7. **Staff Invitation:**
   - Send a signup link to the provided staff email addresses.
   - Enable staff members to create their accounts using the received link.
   - Utilize Firebase Authentication for staff account creation.
   - **Staff should not be able to login to this Portal**. Staff will access our backoffice (That's not in your scope)

8. **Sign-up/Sign-in Page:**
   - Include a 'Forgot Password' option for users to reset their passwords.

## Non-Functional Requirements:
1. Ensure the security of user data and payment information.
2. Maintain a responsive and user-friendly interface for a seamless user experience.
3. Store all textual and visual content, including package information and pricing details, in a Firestore collection for easy retrieval and management.
4. Ensure compliance with data protection regulations and industry standards.
5. Conduct security audits to track every movement of the user.
6. Employ robust error handling and validation mechanisms.
7. Use firebase analytics to track every footstep of the visitors/users.
8. Provide scalability to handle increasing user traffic and data volume.

---

**Flow Diagram:**
```
User → Landing Page → Select Plan → Sign-up → Payment → Setup → Client Panel → Staff Invitation → Firebase Authentication
```
---
