# Fix: Password Input v-model Issue

## 📋 Issue

**Problem:** 
Saat login, selalu muncul error "The password field is required" meskipun password sudah diisi.

**Cause:**
PasswordInput component menggunakan Vue 2 syntax (`emit('input')`) yang tidak compatible dengan Vue 3 `v-model`.

---

## 🐛 Root Cause Analysis

### Vue 2 vs Vue 3 v-model

**Vue 2:**
```javascript
// Component
emit('input', value)

// Usage
<PasswordInput v-model="password" />
// Automatically binds to 'input' event
```

**Vue 3:**
```javascript
// Component
emit('update:modelValue', value)

// Usage
<PasswordInput v-model="password" />
// Automatically binds to 'update:modelValue' event
```

### The Problem in PasswordInput.vue

**Before (Broken):**
```javascript
const props = defineProps({
  initialValue: String,  // ❌ Wrong prop name
  // ...
})

const emit = defineEmits(['input'])  // ❌ Vue 2 syntax

const inputValue = ref(props.initialValue || '')

watch(inputValue, () => {
  emit('input', inputValue.value)  // ❌ Doesn't work in Vue 3
})
```

**Why it failed:**
1. Vue 3 `v-model` expects `modelValue` prop, not `initialValue`
2. Vue 3 `v-model` expects `update:modelValue` event, not `input`
3. No two-way sync between parent and component
4. Password value never sent to parent form

---

## ✅ Solution

### Fixed PasswordInput.vue

**After (Working):**
```javascript
const props = defineProps({
  modelValue: String,  // ✅ Correct Vue 3 prop name
  name: String,
  id: String,
  placeholder: String,
  required: Boolean,
})

const emit = defineEmits(['update:modelValue'])  // ✅ Correct Vue 3 event

const inputType = ref('password')
const inputValue = ref(props.modelValue || '')

const changeInputType = () => {
  inputType.value = inputType.value === 'text' ? 'password' : 'text'
}

// Emit changes to parent
watch(inputValue, (newValue) => {
  emit('update:modelValue', newValue)  // ✅ Correct event
})

// Sync from parent changes
watch(() => props.modelValue, (newValue) => {
  inputValue.value = newValue || ''
})
```

**What changed:**
1. ✅ Prop: `initialValue` → `modelValue`
2. ✅ Event: `emit('input')` → `emit('update:modelValue')`
3. ✅ Added two-way sync with parent via watch
4. ✅ Component now properly works with `v-model`

---

## 🔄 How v-model Works in Vue 3

### Behind the Scenes

When you write:
```vue
<PasswordInput v-model="form.password" />
```

Vue 3 automatically expands it to:
```vue
<PasswordInput 
  :modelValue="form.password"
  @update:modelValue="form.password = $event"
/>
```

### Complete Flow

```
User types in input
  ↓
inputValue changes (v-model in component)
  ↓
watch triggers
  ↓
emit('update:modelValue', newValue)
  ↓
Parent receives event
  ↓
form.password = newValue
  ↓
Password saved in form ✅
```

---

## 🧪 Testing

### Test Case 1: Type Password

**Steps:**
1. Go to login page
2. Type in password field
3. Check form data in Vue DevTools

**Expected Result:**
- ✅ `form.password` updates in real-time
- ✅ Value is saved in form
- ✅ No error on submit

### Test Case 2: Submit Form

**Steps:**
1. Enter username: `test@example.com`
2. Enter password: `password123`
3. Click "Sign In"

**Expected Result:**
- ✅ Request payload includes `password` field
- ✅ Backend receives password
- ✅ No "password required" error

### Test Case 3: Show/Hide Password

**Steps:**
1. Type password: `secret123`
2. Click eye icon to show password
3. Verify text is visible
4. Click eye icon again to hide

**Expected Result:**
- ✅ Password toggles between visible/hidden
- ✅ Value remains in form
- ✅ v-model still works

### Test Case 4: Clear Password

**Steps:**
1. Type password
2. Select all and delete
3. Check form data

**Expected Result:**
- ✅ `form.password` becomes empty string
- ✅ Validation error shows (if required)
- ✅ Component syncs with parent

---

## 📊 Before vs After

### Before (Broken)

```javascript
// PasswordInput.vue
emit('input', value)

// Login.vue
<PasswordInput v-model="form.password" />

// Result
form.password = undefined ❌
Backend receives: { username: 'test', password: '' }
Error: "Password field is required"
```

### After (Fixed)

```javascript
// PasswordInput.vue
emit('update:modelValue', value)

// Login.vue
<PasswordInput v-model="form.password" />

// Result
form.password = 'actual_password' ✅
Backend receives: { username: 'test', password: 'actual_password' }
Success: Login works!
```

---

## 🔧 File Modified

**File:** `resources/UI/passwordInput.vue`

**Changes:**
1. Changed prop from `initialValue` to `modelValue`
2. Changed emit event from `input` to `update:modelValue`
3. Added two-way sync with parent component
4. Updated watch to use new event name

**Lines changed:** ~10 lines
**Impact:** Critical - fixes login functionality

---

## 📝 Additional Notes

### Custom v-model in Vue 3

If you want custom v-model with different name:

```vue
<!-- Usage -->
<MyInput v-model:password="form.password" />

<!-- Component -->
<script setup>
const props = defineProps({
  password: String  // Custom prop name
})

const emit = defineEmits(['update:password'])  // Custom event

// Emit changes
emit('update:password', newValue)
</script>
```

### Multiple v-models

Vue 3 supports multiple v-models:

```vue
<UserForm 
  v-model:username="form.username"
  v-model:password="form.password"
  v-model:email="form.email"
/>
```

---

## ✅ Verification Checklist

- [x] PasswordInput component fixed
- [x] Using correct Vue 3 v-model syntax
- [x] Two-way binding working
- [x] Build successful
- [x] Login form receives password
- [x] No "password required" error
- [x] Show/hide password still works
- [x] Component reusable in other forms

---

## 🚀 Related Components

Check if other custom input components have the same issue:

```bash
# Search for components using old syntax
grep -r "emit('input'" resources/UI/
grep -r "defineProps.*initialValue" resources/UI/
```

**Potential affected components:**
- `PasswordInput.vue` - ✅ FIXED
- Other custom input components - Check and fix if needed

---

## 💡 Best Practice

When creating custom input components in Vue 3:

```vue
<script setup>
// Always use modelValue prop
const props = defineProps({
  modelValue: [String, Number, Boolean, Array, Object],
  // other props...
})

// Always use update:modelValue event
const emit = defineEmits(['update:modelValue'])

// Create local ref
const value = ref(props.modelValue)

// Emit to parent
watch(value, (newValue) => {
  emit('update:modelValue', newValue)
})

// Sync from parent
watch(() => props.modelValue, (newValue) => {
  value.value = newValue
})
</script>
```

---

## 🔗 Resources

- [Vue 3 v-model Documentation](https://vuejs.org/guide/components/v-model.html)
- [Vue 3 Migration Guide - v-model](https://v3-migration.vuejs.org/breaking-changes/v-model.html)
- [Custom Input Components](https://vuejs.org/guide/components/events.html#usage-with-v-model)

---

*Fix applied: 9 November 2025*
*Status: ✅ RESOLVED*
*Impact: CRITICAL - Login now works*
