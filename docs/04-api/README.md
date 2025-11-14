# 🔌 API Documentation

Complete API reference and integration guide.

## 📚 Available Documentation

### [API Documentation](./API_DOCUMENTATION.md)
Complete REST API reference for all endpoints.

**Contents:**
- Authentication endpoints
- User management endpoints
- Role & permission endpoints
- Activity log endpoints
- System settings endpoints
- Profile endpoints

---

## 🚀 Quick Start

### Base URL
```
http://localhost:8000/api
```

### Authentication
All API requests require authentication using Laravel Sanctum:

```javascript
// Get token
POST /api/login
{
  "email": "user@example.com",
  "password": "password"
}

// Use token in headers
headers: {
  'Authorization': 'Bearer YOUR_TOKEN_HERE',
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}
```

---

## 📋 API Categories

### 🔐 Authentication
- `POST /api/login` - User login
- `POST /api/logout` - User logout
- `POST /api/register` - User registration
- `POST /api/forgot-password` - Password reset request
- `POST /api/reset-password` - Password reset

### 👥 Users
- `GET /api/users` - List all users
- `GET /api/users/{id}` - Get user details
- `POST /api/users` - Create new user
- `PUT /api/users/{id}` - Update user
- `DELETE /api/users/{id}` - Delete user

### 🎭 Roles & Permissions
- `GET /api/roles` - List all roles
- `GET /api/roles/{id}` - Get role details
- `POST /api/roles` - Create new role
- `PUT /api/roles/{id}` - Update role
- `DELETE /api/roles/{id}` - Delete role
- `GET /api/permissions` - List all permissions

### 📝 Activity Logs
- `GET /api/activity-logs` - List activity logs
- `GET /api/activity-logs/{id}` - Get log details
- `GET /api/activity-logs/export` - Export logs

### ⚙️ System Settings
- `GET /api/settings` - Get all settings
- `PUT /api/settings` - Update settings
- `GET /api/settings/{key}` - Get specific setting

### 👤 Profile
- `GET /api/profile` - Get current user profile
- `PUT /api/profile` - Update profile
- `POST /api/profile/avatar` - Upload avatar
- `PUT /api/profile/password` - Change password

---

## 📖 Response Format

### Success Response
```json
{
  "success": true,
  "data": {
    // Response data
  },
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message",
  "errors": {
    "field": ["Validation error message"]
  }
}
```

### Pagination Response
```json
{
  "success": true,
  "data": [...],
  "meta": {
    "current_page": 1,
    "last_page": 10,
    "per_page": 15,
    "total": 150
  },
  "links": {
    "first": "...",
    "last": "...",
    "prev": null,
    "next": "..."
  }
}
```

---

## 🔒 Security

### Rate Limiting
- **Default**: 60 requests per minute
- **Authenticated**: 120 requests per minute
- Header: `X-RateLimit-Remaining`

### CORS
Configured domains only. Update in `config/cors.php`

### Validation
All inputs are validated. Check error responses for details.

---

## 💡 Usage Examples

### JavaScript (Fetch)
```javascript
// Login
const response = await fetch('http://localhost:8000/api/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    email: 'admin@admin.com',
    password: 'password'
  })
});

const data = await response.json();
const token = data.token;

// Get users (authenticated)
const users = await fetch('http://localhost:8000/api/users', {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/json'
  }
});
```

### JavaScript (Axios)
```javascript
import axios from 'axios';

// Set base URL
axios.defaults.baseURL = 'http://localhost:8000/api';

// Login
const { data } = await axios.post('/login', {
  email: 'admin@admin.com',
  password: 'password'
});

// Set token for future requests
axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

// Get users
const users = await axios.get('/users');
```

### PHP (Guzzle)
```php
use GuzzleHttp\Client;

$client = new Client([
    'base_uri' => 'http://localhost:8000/api',
]);

// Login
$response = $client->post('/login', [
    'json' => [
        'email' => 'admin@admin.com',
        'password' => 'password'
    ]
]);

$data = json_decode($response->getBody());
$token = $data->token;

// Get users
$response = $client->get('/users', [
    'headers' => [
        'Authorization' => 'Bearer ' . $token,
        'Accept' => 'application/json'
    ]
]);
```

### cURL
```bash
# Login
curl -X POST http://localhost:8000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@admin.com","password":"password"}'

# Get users (replace TOKEN)
curl -X GET http://localhost:8000/api/users \
  -H "Authorization: Bearer TOKEN" \
  -H "Accept: application/json"
```

---

## 🧪 Testing

### Postman Collection
Import the API collection for testing:
1. Download collection from repository
2. Import to Postman
3. Set environment variables
4. Start testing

### API Testing Tools
- **Postman** - GUI testing
- **Insomnia** - REST client
- **HTTPie** - CLI testing
- **cURL** - Command line

---

## 📊 Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 422 | Validation Error |
| 429 | Too Many Requests |
| 500 | Server Error |

---

## 🔍 Related Documentation

- [Features Planning](../03-features/FEATURES_PLANNING.md) - Feature overview
- [Developer Guide](../02-guides/DEVELOPER_GUIDE.md) - Development guidelines
- [Technical Docs](../07-technical/IMPLEMENTATION_SUMMARY.md) - Implementation details

---

## 💬 Support

For API support:
- Check [API Documentation](./API_DOCUMENTATION.md) for detailed reference
- Review examples above
- Test with Postman
- Check Laravel logs for errors

---

[← Back to Documentation](../README.md) | [Full API Docs →](./API_DOCUMENTATION.md)
