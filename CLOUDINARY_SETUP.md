# Cloudinary Setup Guide

## Problem
On Render (and most cloud hosting platforms), the filesystem is **ephemeral** - files uploaded to the server are lost when:
- The service restarts
- The service redeploys
- The service scales to multiple instances

This is why your blog images are not showing - they were uploaded but then lost during a deployment.

## Solution: Use Cloudinary

Cloudinary is a cloud-based image storage service that persists your images permanently.

## Setup Steps

### 1. Create a Cloudinary Account
1. Go to https://cloudinary.com/
2. Sign up for a free account (generous free tier)
3. After signing up, you'll see your **Dashboard**

### 2. Get Your Credentials
From your Cloudinary Dashboard, copy:
- **Cloud Name** (e.g., `dxyz123abc`)
- **API Key** (e.g., `123456789012345`)
- **API Secret** (e.g., `abcdefghijklmnopqrstuvwxyz123456`)

### 3. Add to Render Environment Variables
1. Go to your Render dashboard
2. Select your backend service (`kwco-website-backend`)
3. Go to **Environment** tab
4. Add these three environment variables:

```
CLOUDINARY_CLOUD_NAME=your_cloud_name_here
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
```

### 4. Redeploy Backend
After adding the environment variables, Render will automatically redeploy your backend.

### 5. Re-upload Images
Since existing images were lost, you'll need to:
1. Go to Admin Dashboard
2. Edit each blog post
3. Re-upload the featured image
4. Save

New images will now be stored in Cloudinary and will persist permanently!

## How It Works

- **With Cloudinary configured**: Images are uploaded to Cloudinary and stored permanently
- **Without Cloudinary**: Images are saved locally (works for development, but lost on Render)

The code automatically detects if Cloudinary is configured and uses it if available.

## Testing

After setup, when you upload a new image:
- Check the backend logs - you should see: `"Image uploaded to Cloudinary: https://res.cloudinary.com/..."`
- The image URL in the database will be a full Cloudinary URL
- Images will load reliably from Cloudinary's CDN

## Benefits

✅ Images persist permanently  
✅ Fast CDN delivery  
✅ Automatic image optimization  
✅ No storage limits on free tier (within reason)  
✅ Works across all deployments and instances  
