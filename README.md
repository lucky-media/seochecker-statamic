# SEOPulse - Statamic Addon

Welcome to SEOPulse, your professional companion for SEO and Performance insights directly within your Statamic site.

## Overview

Elevate your website's SEO and user experience with SEOPulse. This Statamic addon streamlines the process of auditing your web pages, delivering a suite of checks to ensure your content and meta elements adhere to best practices and are optimized for visibility and performance.

### Features:

- **SEO Analysis**: Dive deep into your metatags as SEOPulse illuminates actionable SEO insights and recommendations.
  
- **Content Checks**: Evaluate a range of content features including heading usage, image alt check, mixed content issues, content length checks, and external/internal links.

- **Meta Preview**: Visualize how your URL will appear across Google, Facebook, Twitter, LinkedIn, and Discord.

- **JSON-LD Preview**: Inspect your page's structured data to ensure it's primed for rich results.

- **Lighthouse Reports**: Harness the power of Google Lighthouse for detailed Performance reports accessible directly from the SEOPulse interface.

## Installation

Get started with SEOPulse by running the following command:

```bash
composer require lucky-media/seopulse-statamic
```

## Performance Considerations

To keep your site speedy, SEOPulse communicates with our API for status updates, and you can run the Job in the background via the Redis queue. This ensures efficient memory usage and minimal impact on your website's performance.

## Usage

After installing, navigate to the SEOPulse page within your Statamic Control Panel. Enter your desired URL to initiate the check, and watch as insights populate your dashboard.

Remember, SEOPulse relies on our specially designed API to perform checks without burdening your server. As such, it's important to deploy this addon in a production environment to ensure our API can access your live site.

## Data Retention

For all the generated reports we have a 30-day retention policy. However, we do save the generated reports on your website's local storage folder. You can keep them there indefinitely if needed.

## Rate Limiting

We currently allow one check every 5 minutes per URL in our API. We're actively improving this to boost performance and capacity.
While there are currently no limits on API usage, this might change in the future if server demand grows.
