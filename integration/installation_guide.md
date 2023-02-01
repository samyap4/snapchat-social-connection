
The Snapchat social connection allows users to log in to your application using their Snapchat profile.

By default, Auth0 automatically syncs user profile data with each user login, thereby ensuring that changes made in the connection source are automatically updated in Auth0. Optionally, you can  [disable user profile data synchronization](https://auth0.com/docs/users/configure-connection-sync-with-auth0)  to allow for updating profile attributes from your application.
  

## Prerequisites

  

1. An Auth0 account and tenant. [Sign up for free](https://auth0.com/signup).

2. A Snapchat developer account.  Register [here](https://devportal.snap.com/manage/).

  

## Set up Snapchat

  


### Step 1: Go to the Snap Kit Portal

Go to https://kit.snapchat.com/portal/ or click  `Log In`  at the top right corner of snapkit.com.

### Step 2: Create an app

Click the + button. Name your app, and select the permissions you want. You can also upload a logo using a 1024x1024px image (optional).

### Step 3: Select your products

You’ll need to pick the libraries you plan to use: Login Kit is required at the minimum.  Once you configure Login Kit is enabled, check the boxes for Display Name and Bitmoji Avatar (optional).  Then you will need to provide your Redirect URI.  This value is the URL of is `https://{your-Auth0-domain}/login/callback`.  If you are using a [Custom Domain](https://auth0.com/docs/customize/custom-domains) then provide this value instead of your Auth0 domain.

### Step 4: Generate Credentials

Now it is time to generate a Confidential OAuth 2.0 Client ID.  Click Add and copy down your Client Id and Secret.  You will need these later.

### Step 5: Submit your finished app for approval

Once you’re all done with testing and building, you’ll probably want to release something to everyone, not just the people you’ve added under the Demo Users list. You can do this with your Production ID, but to unlock this capability you’ll need to submit your app for approval.

Submitting your app for approval is as easy as clicking the button. For a smooth approvals process, have your privacy policy and demo video ready to go (more info on that in the  [app review guidelines](https://docs.snapchat.com/docs/review)). Then, just click Submit!

That’s all for now. Happy building!

  

## Add the Connection

  

1. Select **Add Integration** (at the top of this page).

1. Read the necessary access requirements, and select **Continue**.

1. Configure the integration using the following fields:

* Enter in your Client Id and Client Secret into the corresponding fields.

1. Select the **Permissions** needed for your applications.

1. Choose and configure whether to sync user profile attributes at each login.

1. Select **Create**.

1. In the **Applications** view, choose the Applications that should use this Connection to log in.

  

## Test connection

  

You're ready to [test this Connection](https://auth0.com/docs/authenticate/identity-providers/test-connections).

  

## Troubleshooting

  

Snapchat has multiple environments.  Ensure that your OAuth credentials match the proper environment you are working with.  Your application will have different credentials when moving from Staging to Production.