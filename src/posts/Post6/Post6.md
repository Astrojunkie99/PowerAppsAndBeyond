---
title: Improvements to the blog
date: 2019-10-11
author: Paul Robinson
tags: ["Gatsby", "Blog", "Improvements"]
featuredImage: gatsby.png
description: Using Gatsby to construct this blog and a small list of items that I am working on such as security, responsiveness and  dynamic content using API calls.
draft: false
slug: /post6
---

##Blog construction updates##

I have put a fair bit of work into getting this moving in the direction I want these past handful of weeks. The list is long but there is still heaps to do. The list of things I have done has included dynamic elements with API calls to both the astronomy picture of the day and rocket launch database. The tricky part of the latter was getting a countdown clock completed. This was quite hard for me and caused my build to crash multiple times.

After working out that it was a npm package that was causing the drama, I had two choices, lose it or make a workaround for it. The first choice was the one I took. I replaced the package I was using with something else that did a similar job. Problem solved. When I got it mechanically working, I stopped without worrying about styling.

Another element added was API key security. Because I am using Netlify I am taking advantage of their excellent service to secure API keys. Gatsby being a client side renderer, has the disadvantage of giving all of your secrets to the client. Netlify, among some of the other hosting services has functions that helps secure these API keys. Some API keys are public like Firebase, others not so much. I have some that need securing and with a lot of patience eventually worked it out. (I do not claim any ability and to tell the truth am really more of bumbler in this.)

I added SEO to the site. It works.

Inline images were added. I just followed the Gatsby docs on that one and that works without any issues.
Outstanding tasks for me include:

1. A page for hubble pictures
1. Include responsiveness for the site so that it looks decent on mobile
1. Include a discussion section and generally finish off the styling
1. And some social media linking

Hopefully I should have a lot of this very soon.
