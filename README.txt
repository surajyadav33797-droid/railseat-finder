RAILSEAT FINDER

This is a complete mobile-friendly website with a Netlify serverless API proxy.

SETUP
1. Sign up for a RailCore API key at https://railcore.tech/ . The API is an independent provider, not the official Indian Railways.
2. Create a Netlify site by uploading this project folder or its ZIP file. For Netlify Functions, use a Git repository deployment or the Netlify CLI/build workflow that includes the netlify/functions folder. A simple drag-and-drop of index.html alone WILL NOT activate live functions.
3. In Netlify, go to Site configuration > Environment variables, add RAILCORE_KEY and paste your key. Keep this key private. Redeploy your site.
4. Visit your site and search. Train-list results may contain cached availability summaries with timestamps. Use Check seats now for the freshest available provider response.

FEATURES
Station autocomplete, 60-day date selection, city station expansion, General and Tatkal train lists, all coach classes, live individual seat checks, confirmed and RAC filters, best-first ranking, sorting, last updated time, fares where returned by provider, IRCTC booking link, alternatives guidance, iPhone-friendly layout.

IMPORTANT LIMITS
No genuine seat statuses without a working provider key. The service's free tier has request limits, and checking every class and quota can consume many credits. RailCore does not support Premium Tatkal availability on its seat endpoint. Provider data may lag. The site does not book tickets. Some options such as earlier boarding-station scanning, split segments and automatic alerts are not implemented, not represented as active features. Date availability is governed by railway advance booking rules; the 60-day date picker does not guarantee availability on its last day.
