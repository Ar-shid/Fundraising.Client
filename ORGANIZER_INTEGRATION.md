# Organizer Integration for Campaigns

This document explains the new organizer integration functionality that automatically assigns organizers to campaigns after login.

## Overview

After a user successfully logs in, the system automatically:

1. Fetches the list of organizers from `/api/Auth/GetOrganizers`
2. Saves the first organizer's ID and name to localStorage
3. Pre-fills the campaign form with the assigned organizer information

## Implementation Details

### 1. New API Function

Added `getOrganizers` function in `src/api/Auth/Auth.js`:

```javascript
export const getOrganizers = async (token) => {
  const { data } = await invoke({
    url: `/api/Auth/GetOrganizers`,
    method: "GET",
    token,
  });
  return data;
};
```

### 2. Login Flow Update

Modified `src/views/admin/auth/Login.js` to:

- Call `getOrganizers` after successful login
- Store organizer ID and name in localStorage
- Continue with normal login flow

### 3. Campaign Form Update

Updated `src/views/admin/campaign/pages/AddCompaign.js` to:

- Load organizer data from localStorage on component mount
- Display the assigned organizer (read-only)
- Automatically set `assignedToId` in form data

## API Response Format

The `/api/Auth/GetOrganizers` endpoint returns:

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Uses List",
  "data": [
    {
      "id": "43aad053-7716-4bb5-ad0b-91ef2f9bf452",
      "name": "Bilal Hanif"
    },
    {
      "id": "917b5c2c-6e31-4fe8-8927-6506e25cbe92",
      "name": "Super Admin"
    }
  ]
}
```

## LocalStorage Keys

- `organizerId`: The ID of the assigned organizer
- `organizerName`: The name of the assigned organizer

## Testing

### Manual Testing

1. Login to the system
2. Check browser console for organizer data logs
3. Navigate to Add Campaign page
4. Verify organizer is pre-filled and read-only
5. Check debug information section for form data

### Automated Testing

Run the test suite:

```javascript
// In browser console
runAllTests();
```

Or test individual functions:

```javascript
// Test authentication and organizer fetch
testAuthentication();
```

## Form Data Structure

The campaign form now automatically includes:

- `assignedToId`: Organizer ID from localStorage
- `assignedToName`: Organizer name from localStorage

## Error Handling

- If organizer fetch fails, login continues normally
- If no organizers exist, form shows "No organizer assigned"
- Console logs provide debugging information

## Future Enhancements

- Allow users to select from multiple organizers
- Add organizer management interface
- Implement organizer permissions and roles
