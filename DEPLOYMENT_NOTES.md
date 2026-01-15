# Deployment Notes

## Backend URL Configuration

All API URLs are now centralized in `src/config/api.js`. 

**Current Backend URL:** `https://kwco-website-j42s.onrender.com/api`

If you need to change the backend URL in the future:
1. Update `src/config/api.js`
2. Rebuild the frontend: `npm run build`
3. Redeploy the frontend

## Important: Frontend Must Be Rebuilt

The error you're seeing (`kwco-website.onrender.com`) means the **deployed frontend build is using the old URL**. 

### To Fix:

1. **Rebuild the frontend:**
   ```bash
   npm run build
   ```

2. **Redeploy the frontend** to your hosting platform (Vercel, Render, etc.)

3. **Clear browser cache** or do a hard refresh (Ctrl+Shift+R)

### Files Updated:
- ✅ `src/config/api.js` - Centralized API configuration
- ✅ `src/pages/Blog.jsx` - Uses centralized config
- ✅ `src/pages/BlogDetail.jsx` - Uses centralized config
- ✅ `src/components/AdminDashboard.jsx` - Uses centralized config
- ✅ `src/components/AdminLogin.jsx` - Uses centralized config

All components now import from `../config/api` instead of hardcoding URLs.
