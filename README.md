#PRODUCTIVITY TRACKER CHROME EXTENTION

COMPANY: CODTECH IT SOLUTIONS

NAME: ANIRUDDHA LANDGE

INTERN ID: CT04XLA

DOMAIN: MERN STACK WEB DEVELOPMENT

DURATION: 4 WEEKS

MENTOR: NEELA SANTOSH

#DESCRIPTION OF THE PROJECT
The Productivity Tracker Chrome Extension is a powerful tool designed to enhance focus and efficiency by monitoring time spent on websites and blocking distracting ones. Built using JavaScript, HTML, and CSS, this extension leverages Chrome’s robust extension APIs to provide users with actionable insights into their browsing habits while enforcing productivity through site-blocking features. Ideal for students, professionals, or anyone aiming to minimize digital distractions, it combines real-time tracking with customizable controls in a lightweight, user-friendly package.

The extension’s core functionality revolves around two main features: time tracking and site blocking. For time tracking, it uses the chrome.tabs and chrome.windows APIs to monitor active tabs and detect URL changes. A background script (background.js) runs persistently, logging the time spent on each domain. The script employs a timer that starts when a tab becomes active and pauses when it’s inactive or closed, storing data in chrome.storage.local for persistence across sessions. Users can view their browsing stats—such as time spent on productive sites (e.g., work tools) versus distracting ones (e.g., social media)—via a popup interface (popup.html), styled with CSS for clarity and rendered dynamically with JavaScript.

The site-blocking feature allows users to define a list of distracting websites (e.g., Facebook, YouTube) through the popup UI. This list is saved in chrome.storage, and a content script or chrome.webRequest API intercepts requests to these URLs. When a match is detected, the extension redirects the user to a motivational message or a blank page, effectively preventing access during focus periods. A toggle switch in the popup enables or disables blocking, giving users flexibility. Optionally, a focus mode could enforce blocking for a set duration (e.g., 25 minutes, inspired by the Pomodoro technique), using a countdown timer implemented in JavaScript.

Development begins with a manifest.json file, the backbone of any Chrome extension. It declares permissions (tabs, storage, webRequest, webRequestBlocking), specifies the background script, and links the popup UI. The background script handles the logic for tracking and blocking, while the popup script (popup.js) fetches stored data and updates the UI with stats (e.g., a pie chart using Chart.js) and controls. Error handling ensures the extension gracefully manages edge cases, like invalid URLs or storage limits.

The UI is minimal yet functional, featuring a dashboard with time stats, a list of blocked sites, and buttons to add/remove sites or toggle blocking. CSS ensures responsiveness and a clean aesthetic, with optional dark mode support. For advanced features, the extension could categorize sites (productive, neutral, distracting) based on predefined or user-customized rules, or integrate with Google Calendar to align focus periods with scheduled tasks.

Deployable via the Chrome Web Store or loaded locally in developer mode, this Productivity Tracker empowers users to take control of their online habits. It exemplifies how Chrome’s APIs can transform browsing into a productivity tool, blending technical precision with practical utility.

#OUTPUT
![Image](https://github.com/user-attachments/assets/299bdb77-39d4-47f0-9bda-1d6bc4a1f6de)
