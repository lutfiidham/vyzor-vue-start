# 🔌 API DOCUMENTATION

## Base URL

```
https://your-domain.com/api
```

## Authentication

All API requests require authentication using Bearer tokens (Laravel Sanctum).

### Getting API Token

**Endpoint**: `POST /api/login`

**Request**:
```json
{
  "email": "admin@vyzor.test",
  "password": "password"
}
```

**Response**:
```json
{
  "token": "1|abcdef...",
  "user": {
    "id": 1,
    "name": "Admin User",
    "email": "admin@vyzor.test"
  }
}
```

### Using Token

Include token in Authorization header:

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
  https://your-domain.com/api/users
```

---

## Rate Limiting

API requests are rate-limited:
- **Default**: 60 requests per minute
- **Strict endpoints**: 10 requests per minute

Rate limit headers:
- `X-RateLimit-Limit`: Total requests allowed
- `X-RateLimit-Remaining`: Remaining requests
- `Retry-After`: Seconds until reset (when limit exceeded)

---

## Response Format

### Success Response

```json
{
  "data": {
    "id": 1,
    "name": "John Doe"
  }
}
```

### Collection Response

```json
{
  "data": [
    {
      "id": 1,
      "name": "John Doe"
    },
    {
      "id": 2,
      "name": "Jane Smith"
    }
  ],
  "links": {
    "first": "https://api.com/users?page=1",
    "last": "https://api.com/users?page=10",
    "prev": null,
    "next": "https://api.com/users?page=2"
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 10,
    "per_page": 15,
    "to": 15,
    "total": 150
  }
}
```

### Error Response

```json
{
  "message": "Validation error",
  "errors": {
    "email": [
      "The email field is required."
    ]
  }
}
```

---

## Users API

### List Users

**Endpoint**: `GET /api/users`

**Permission**: `users.view`

**Query Parameters**:
- `page` (integer): Page number (default: 1)
- `per_page` (integer): Items per page (default: 15, max: 100)
- `search` (string): Search by name or email
- `role` (string): Filter by role
- `is_active` (boolean): Filter by status
- `sort` (string): Sort field (name, email, created_at)
- `order` (string): Sort order (asc, desc)

**Example Request**:
```bash
GET /api/users?search=john&role=admin&page=1&per_page=20
```

**Response**: `200 OK`
```json
{
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "avatar": "https://...",
      "role": "admin",
      "permissions": ["users.view", "users.create"],
      "is_active": true,
      "last_login_at": "2025-11-09T10:30:00Z",
      "created_at": "2025-01-01T00:00:00Z"
    }
  ],
  "meta": {...}
}
```

### Get User

**Endpoint**: `GET /api/users/{id}`

**Permission**: `users.view`

**Response**: `200 OK`
```json
{
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "avatar": "https://...",
    "phone": "+1234567890",
    "timezone": "America/New_York",
    "locale": "en",
    "role": "admin",
    "permissions": ["users.view", "users.create"],
    "is_active": true,
    "last_login_at": "2025-11-09T10:30:00Z",
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-11-09T10:30:00Z"
  }
}
```

### Create User

**Endpoint**: `POST /api/users`

**Permission**: `users.create`

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "+1234567890",
  "role": "user",
  "timezone": "America/New_York",
  "locale": "en",
  "is_active": true
}
```

**Response**: `201 Created`
```json
{
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Update User

**Endpoint**: `PUT /api/users/{id}`

**Permission**: `users.edit`

**Request Body**:
```json
{
  "name": "John Smith",
  "email": "john.smith@example.com",
  "phone": "+1234567890",
  "is_active": true
}
```

**Response**: `200 OK`

### Delete User

**Endpoint**: `DELETE /api/users/{id}`

**Permission**: `users.delete`

**Response**: `204 No Content`

---

## Roles API

### List Roles

**Endpoint**: `GET /api/roles`

**Permission**: `roles.view`

**Response**: `200 OK`
```json
{
  "data": [
    {
      "id": 1,
      "name": "admin",
      "permissions": [
        {"name": "users.view"},
        {"name": "users.create"}
      ],
      "users_count": 5,
      "created_at": "2025-01-01T00:00:00Z"
    }
  ]
}
```

### Get Role

**Endpoint**: `GET /api/roles/{id}`

**Permission**: `roles.view`

### Create Role

**Endpoint**: `POST /api/roles`

**Permission**: `roles.create`

**Request Body**:
```json
{
  "name": "moderator",
  "permissions": ["users.view", "users.edit"]
}
```

### Update Role

**Endpoint**: `PUT /api/roles/{id}`

**Permission**: `roles.edit`

### Delete Role

**Endpoint**: `DELETE /api/roles/{id}`

**Permission**: `roles.delete`

---

## Permissions API

### List Permissions

**Endpoint**: `GET /api/permissions`

**Permission**: `permissions.view`

**Response**: `200 OK`
```json
{
  "data": [
    {
      "id": 1,
      "name": "users.view",
      "group": "users",
      "created_at": "2025-01-01T00:00:00Z"
    }
  ]
}
```

### Assign Permissions

**Endpoint**: `POST /api/roles/{id}/permissions`

**Permission**: `permissions.assign`

**Request Body**:
```json
{
  "permissions": ["users.view", "users.create"]
}
```

---

## Activity Logs API

### List Activity Logs

**Endpoint**: `GET /api/activity-logs`

**Permission**: `activity-logs.view`

**Query Parameters**:
- `page` (integer)
- `per_page` (integer)
- `subject_type` (string): Model type (User, Role, etc.)
- `event` (string): created, updated, deleted
- `causer_id` (integer): User who caused the activity
- `from_date` (string): ISO 8601 date
- `to_date` (string): ISO 8601 date

**Response**: `200 OK`
```json
{
  "data": [
    {
      "id": 1,
      "log_name": "default",
      "description": "updated",
      "subject_type": "App\\Models\\User",
      "subject_id": 1,
      "causer_type": "App\\Models\\User",
      "causer_id": 1,
      "causer": {
        "id": 1,
        "name": "Admin User"
      },
      "properties": {
        "attributes": {
          "name": "John Smith"
        },
        "old": {
          "name": "John Doe"
        }
      },
      "created_at": "2025-11-09T10:30:00Z"
    }
  ]
}
```

---

## Files API

### List Files

**Endpoint**: `GET /api/files`

**Permission**: `files.view`

**Query Parameters**:
- `folder_id` (integer): Filter by folder
- `type` (string): Filter by file type
- `search` (string): Search filename

**Response**: `200 OK`
```json
{
  "data": [
    {
      "id": 1,
      "name": "document.pdf",
      "file_name": "document.pdf",
      "mime_type": "application/pdf",
      "size": 102400,
      "url": "https://...",
      "folder_id": 1,
      "created_at": "2025-11-09T10:30:00Z"
    }
  ]
}
```

### Upload File

**Endpoint**: `POST /api/files`

**Permission**: `files.upload`

**Request** (multipart/form-data):
```
file: (binary)
folder_id: 1 (optional)
```

**Response**: `201 Created`
```json
{
  "data": {
    "id": 1,
    "name": "document.pdf",
    "url": "https://..."
  }
}
```

### Download File

**Endpoint**: `GET /api/files/{id}/download`

**Permission**: `files.download`

**Response**: File binary with appropriate headers

### Delete File

**Endpoint**: `DELETE /api/files/{id}`

**Permission**: `files.delete`

---

## Notifications API

### List Notifications

**Endpoint**: `GET /api/notifications`

**Permission**: `notifications.view`

**Query Parameters**:
- `unread` (boolean): Filter unread only

**Response**: `200 OK`
```json
{
  "data": [
    {
      "id": "uuid-here",
      "type": "App\\Notifications\\UserCreated",
      "data": {
        "message": "New user registered",
        "user_id": 1
      },
      "read_at": null,
      "created_at": "2025-11-09T10:30:00Z"
    }
  ],
  "unread_count": 5
}
```

### Mark as Read

**Endpoint**: `POST /api/notifications/{id}/read`

**Response**: `200 OK`

### Mark All as Read

**Endpoint**: `POST /api/notifications/read-all`

**Response**: `200 OK`

### Delete Notification

**Endpoint**: `DELETE /api/notifications/{id}`

---

## System Settings API

### Get Public Settings

**Endpoint**: `GET /api/settings`

**Response**: `200 OK`
```json
{
  "data": {
    "app_name": "Vyzor Application",
    "timezone": "UTC",
    "date_format": "Y-m-d"
  }
}
```

### Get All Settings

**Endpoint**: `GET /api/settings/all`

**Permission**: `settings.view`

**Response**: `200 OK`
```json
{
  "data": [
    {
      "key": "app_name",
      "value": "Vyzor Application",
      "type": "string",
      "group": "general",
      "is_public": true
    }
  ]
}
```

### Update Setting

**Endpoint**: `PUT /api/settings/{key}`

**Permission**: `settings.edit`

**Request Body**:
```json
{
  "value": "New Value"
}
```

---

## Error Codes

| Code | Message | Description |
|------|---------|-------------|
| 200 | OK | Request successful |
| 201 | Created | Resource created |
| 204 | No Content | Resource deleted |
| 400 | Bad Request | Invalid request |
| 401 | Unauthorized | Authentication required |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource not found |
| 422 | Unprocessable Entity | Validation error |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server error |

---

## Webhooks

### Register Webhook

**Endpoint**: `POST /api/webhooks`

**Request Body**:
```json
{
  "url": "https://your-app.com/webhook",
  "events": ["user.created", "user.updated"],
  "secret": "your-webhook-secret"
}
```

### Webhook Events

Available events:
- `user.created`
- `user.updated`
- `user.deleted`
- `role.created`
- `file.uploaded`

### Webhook Payload

```json
{
  "event": "user.created",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  "timestamp": "2025-11-09T10:30:00Z",
  "signature": "sha256-hash"
}
```

### Verifying Webhook

```php
$signature = hash_hmac('sha256', $payload, $secret);

if (hash_equals($signature, $receivedSignature)) {
    // Valid webhook
}
```

---

## API Client Examples

### JavaScript (Axios)

```javascript
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://your-domain.com/api',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/json'
  }
})

// Get users
const { data } = await api.get('/users')

// Create user
await api.post('/users', {
  name: 'John Doe',
  email: 'john@example.com',
  password: 'password'
})
```

### PHP (Guzzle)

```php
use GuzzleHttp\Client;

$client = new Client([
    'base_uri' => 'https://your-domain.com/api',
    'headers' => [
        'Authorization' => 'Bearer ' . $token,
        'Accept' => 'application/json'
    ]
]);

// Get users
$response = $client->get('/users');
$users = json_decode($response->getBody());

// Create user
$response = $client->post('/users', [
    'json' => [
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'password' => 'password'
    ]
]);
```

### Python (Requests)

```python
import requests

api_url = 'https://your-domain.com/api'
headers = {
    'Authorization': f'Bearer {token}',
    'Accept': 'application/json'
}

# Get users
response = requests.get(f'{api_url}/users', headers=headers)
users = response.json()

# Create user
data = {
    'name': 'John Doe',
    'email': 'john@example.com',
    'password': 'password'
}
response = requests.post(f'{api_url}/users', json=data, headers=headers)
```

---

## Changelog

### Version 1.0.0 (2025-11-09)

Initial API release:
- User management endpoints
- Role & permission endpoints
- Activity logs endpoints
- File management endpoints
- Notification endpoints
- Settings endpoints

---

**API Version**: 1.0.0
**Last Updated**: 2025-11-09
