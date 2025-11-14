# 👤 USER GUIDE

## Table of Contents

1. [Getting Started](#getting-started)
2. [Dashboard](#dashboard)
3. [User Management](#user-management)
4. [Role & Permission Management](#role--permission-management)
5. [Profile Management](#profile-management)
6. [Notifications](#notifications)
7. [File Management](#file-management)
8. [Settings](#settings)
9. [Activity Logs](#activity-logs)
10. [API Keys](#api-keys)

---

## Getting Started

### First Login

1. Navigate to the application URL
2. Enter your credentials:
   - Email: `admin@vyzor.test`
   - Password: `password`
3. You'll be redirected to the dashboard

### Password Change

After first login, it's recommended to change your password:

1. Go to Profile → Settings
2. Click "Change Password"
3. Enter current password and new password
4. Click "Update Password"

---

## Dashboard

The dashboard provides an overview of:

- **User Statistics**: Total users, active users, new users
- **Activity Overview**: Recent activities in the system
- **Quick Actions**: Common tasks shortcuts
- **System Information**: Server status, storage usage

### Widgets

Dashboard widgets are customizable. You can:
- Drag and drop to rearrange
- Hide/show widgets
- Refresh individual widgets
- Export widget data

---

## User Management

### Viewing Users

**Permission Required**: `users.view`

1. Navigate to Admin → Users
2. View list of all users with:
   - Name, Email, Role
   - Status (Active/Inactive)
   - Last login date
   - Actions

### Creating User

**Permission Required**: `users.create`

1. Click "Add User" button
2. Fill in required information:
   - Name (required)
   - Email (required)
   - Password (required)
   - Phone (optional)
   - Role (required)
   - Timezone
   - Locale
3. Set user status (Active/Inactive)
4. Click "Create User"

### Editing User

**Permission Required**: `users.edit`

1. Click edit icon on user row
2. Modify user information
3. Update roles if needed
4. Click "Update User"

### Deleting User

**Permission Required**: `users.delete`

1. Click delete icon on user row
2. Confirm deletion
3. User will be permanently deleted

**Note**: Deleted users cannot be recovered.

### Bulk Actions

Select multiple users using checkboxes:
- **Activate**: Activate selected users
- **Deactivate**: Deactivate selected users
- **Delete**: Delete selected users
- **Export**: Export selected users

### Filters

Filter users by:
- **Role**: Admin, Manager, User
- **Status**: Active, Inactive, Locked
- **Date Range**: Registration date
- **Search**: Name, Email

### Export Users

**Permission Required**: `users.export`

1. Apply filters if needed
2. Click "Export" button
3. Choose format: CSV, Excel, PDF
4. Download file

### Import Users

**Permission Required**: `users.import`

1. Click "Import" button
2. Download template (optional)
3. Upload CSV/Excel file
4. Map columns
5. Review and confirm import

---

## Role & Permission Management

### Understanding Roles

Roles are collections of permissions. Default roles:

- **Admin**: Full system access
- **Manager**: Limited admin access
- **User**: Basic user access

### Viewing Roles

**Permission Required**: `roles.view`

1. Navigate to Admin → Roles
2. View list of all roles with:
   - Name
   - Number of permissions
   - Number of users
   - Actions

### Creating Role

**Permission Required**: `roles.create`

1. Click "Add Role" button
2. Enter role name
3. Select permissions
4. Click "Create Role"

### Editing Role

**Permission Required**: `roles.edit`

1. Click edit icon on role row
2. Modify role name
3. Update permissions
4. Click "Update Role"

### Permission Groups

Permissions are grouped by module:

- **Users**: users.view, users.create, users.edit, users.delete
- **Roles**: roles.view, roles.create, roles.edit, roles.delete
- **Settings**: settings.view, settings.edit
- **Files**: files.view, files.upload, files.delete
- **Activity Logs**: activity-logs.view, activity-logs.delete
- **API Keys**: api-keys.view, api-keys.create, api-keys.delete

---

## Profile Management

### Viewing Profile

1. Click user avatar in top right
2. Select "Profile"

### Editing Profile

1. Go to Profile page
2. Click "Edit Profile"
3. Update information:
   - Name
   - Email
   - Phone
   - Avatar
   - Timezone
   - Locale
4. Click "Save Changes"

### Uploading Avatar

1. Click on avatar placeholder
2. Select image file
3. Crop if desired
4. Click "Upload"

**Accepted formats**: JPG, PNG, GIF
**Maximum size**: 2MB

### Security Settings

#### Change Password

1. Go to Profile → Security
2. Enter current password
3. Enter new password
4. Confirm new password
5. Click "Change Password"

#### Two-Factor Authentication (2FA)

Enable 2FA for extra security:

1. Go to Profile → Security
2. Click "Enable 2FA"
3. Scan QR code with authenticator app
4. Enter verification code
5. Save recovery codes

**Recovery Codes**: Save these in a secure place. You'll need them if you lose access to your authenticator app.

#### Active Sessions

View and manage active sessions:

1. Go to Profile → Security → Sessions
2. View list of active sessions with:
   - Device information
   - IP address
   - Last activity
   - Location (approximate)
3. Logout specific sessions or all other sessions

---

## Notifications

### Viewing Notifications

1. Click bell icon in header
2. View unread notifications
3. Click "View All" for full list

### Notification Types

- **System**: System updates, maintenance
- **User**: New user registrations, profile updates
- **Security**: Login attempts, password changes
- **Activity**: Important activities in the system

### Managing Notifications

- **Mark as Read**: Click notification
- **Mark All as Read**: Click "Mark all as read"
- **Delete**: Swipe left or click delete icon

### Notification Preferences

Customize which notifications you receive:

1. Go to Profile → Notifications
2. Toggle notification types:
   - Email notifications
   - Push notifications
   - In-app notifications
3. Choose notification frequency:
   - Real-time
   - Daily digest
   - Weekly digest
4. Click "Save Preferences"

---

## File Management

### Browsing Files

**Permission Required**: `files.view`

1. Navigate to Files
2. Browse folders and files
3. View file details on hover

### Uploading Files

**Permission Required**: `files.upload`

**Single File**:
1. Click "Upload" button
2. Select file
3. File will upload automatically

**Multiple Files**:
1. Drag and drop multiple files
2. Files will upload in queue

**Accepted types**: Configured in settings
**Maximum size**: Configured in settings

### Organizing Files

**Create Folder**:
1. Click "New Folder"
2. Enter folder name
3. Click "Create"

**Move Files**:
1. Select file(s)
2. Click "Move"
3. Select destination folder
4. Click "Move"

**Rename**:
1. Right-click file/folder
2. Select "Rename"
3. Enter new name
4. Press Enter

### Sharing Files

1. Select file
2. Click "Share"
3. Choose sharing options:
   - Get shareable link
   - Set expiration date
   - Set password (optional)
   - Set permissions (view/download)
4. Copy link

### Deleting Files

**Permission Required**: `files.delete`

1. Select file(s)
2. Click "Delete"
3. Confirm deletion
4. Files moved to Trash

### Trash Management

Files in trash are kept for 30 days:

1. Go to Trash
2. **Restore**: Select and click "Restore"
3. **Permanent Delete**: Select and click "Delete Forever"
4. **Empty Trash**: Delete all items

---

## Settings

### General Settings

**Permission Required**: `settings.view`, `settings.edit`

#### Application Settings

1. Navigate to Settings → General
2. Configure:
   - Application name
   - Description
   - Logo
   - Favicon
   - Timezone
   - Date/Time format
3. Click "Save"

### Authentication Settings

Configure authentication options:

- **Enable Registration**: Allow new user registration
- **Email Verification**: Require email verification
- **Two-Factor Authentication**: Enable 2FA
- **Social Login**: Configure OAuth providers

### Email Settings

Configure email delivery:

1. Go to Settings → Email
2. Configure SMTP:
   - Mail Driver
   - Host
   - Port
   - Username
   - Password
   - Encryption
3. Set From Address/Name
4. Test email configuration
5. Click "Save"

### Security Settings

Configure security options:

- **Max Login Attempts**: Before account lockout
- **Lockout Duration**: In minutes
- **Password Requirements**:
  - Minimum length
  - Require uppercase
  - Require numbers
  - Require symbols
- **Session Timeout**: Auto-logout after inactivity

### File Storage Settings

Configure file upload limits:

- **Maximum Upload Size**: In MB
- **Allowed File Types**: Comma-separated
- **Storage Driver**: Local, S3, etc.
- **Storage Quota**: Per user

### Maintenance Mode

Enable maintenance mode:

1. Go to Settings → System
2. Toggle "Maintenance Mode"
3. Set maintenance message
4. Add allowed IPs (optional)
5. Click "Enable"

**Note**: Admins can still access the site during maintenance.

---

## Activity Logs

### Viewing Activity Logs

**Permission Required**: `activity-logs.view`

1. Navigate to Activity Logs
2. View chronological list of activities

### Activity Information

Each activity shows:

- **User**: Who performed the action
- **Action**: What was done
- **Subject**: What was affected
- **Properties**: Changes made (before/after)
- **IP Address**: Where action originated
- **Timestamp**: When action occurred

### Filtering Activities

Filter by:

- **User**: Specific user
- **Action Type**: Created, Updated, Deleted, etc.
- **Subject Type**: User, Role, File, etc.
- **Date Range**: Custom date range
- **IP Address**: Specific IP

### Exporting Logs

1. Apply filters
2. Click "Export"
3. Choose format: CSV, Excel, PDF
4. Download file

### Deleting Logs

**Permission Required**: `activity-logs.delete`

Configure log retention:

1. Go to Settings → Activity Logs
2. Set retention period (days)
3. Old logs will be automatically deleted

---

## API Keys

### What are API Keys?

API Keys allow external applications to access your data programmatically.

### Viewing API Keys

**Permission Required**: `api-keys.view`

1. Navigate to Profile → API Keys
2. View list of your API keys

### Creating API Key

**Permission Required**: `api-keys.create`

1. Click "Generate API Key"
2. Enter key name
3. Select permissions
4. Set rate limit (requests per minute)
5. Set expiration (optional)
6. Click "Generate"
7. **Copy and save the key** - you won't see it again!

### Using API Key

Include the API key in your requests:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://your-app.com/api/users
```

### Managing API Keys

- **View Usage**: See last used date and request count
- **Regenerate**: Generate new key (old key will be invalidated)
- **Deactivate**: Temporarily disable key
- **Delete**: Permanently remove key

### Security Best Practices

1. **Never share** API keys
2. **Use different keys** for different applications
3. **Set appropriate permissions** - only what's needed
4. **Set expiration dates** when possible
5. **Regenerate keys** if compromised
6. **Monitor usage** regularly

---

## Tips & Tricks

### Keyboard Shortcuts

- `Ctrl/Cmd + K`: Global search
- `Ctrl/Cmd + /`: Show keyboard shortcuts
- `Esc`: Close modals/dropdowns

### Dark Mode

Toggle dark mode:
1. Click theme icon in header
2. Select "Dark" or "Light"

### Search

Use global search (Ctrl/Cmd + K):
- Search users
- Search files
- Search settings
- Quick navigation

### Notifications

- Click on notifications for quick actions
- Use filters to find specific notifications
- Archive old notifications

---

## Getting Help

### Support Resources

- **Documentation**: Full documentation available
- **FAQ**: Common questions answered
- **Community**: Join our community forum
- **Support**: Contact support team

### Reporting Issues

If you encounter issues:

1. Note what you were doing
2. Take screenshot if applicable
3. Check browser console for errors
4. Contact support with details

### Feature Requests

Have an idea? Submit a feature request:

1. Go to Settings → Feedback
2. Click "Request Feature"
3. Describe your idea
4. Submit request

---

**Version**: 1.0.0
**Last Updated**: 2025-11-09
