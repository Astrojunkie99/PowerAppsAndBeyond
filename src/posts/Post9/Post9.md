---
title: Gatsby and SEO for me
date: 2019-10-22
author: Paul Robinson
tags: ["Gatsby", "SEO"]
featuredImage: gatsby.png
description: A small article on my delving into the world of SEO optimisation with Gatsby
draft: false
slug: /post9
---

## Gatsby and SEO for me

I will say this right at the beginning that this will not be a roll of code on how to enact it. There are lots of articles and YouTube videos on the subject done far better than I can ever do on it. Instead I will just go through my experience in getting this done.
The reasoning for doing SEO or search engine optimisation is to get your website noticed. If you are doing a commercial site this will be crucial. We want more people when they do a google search to find your site. One of the ways this is done is by the search engine looking for meta tags in your header of the site page.
All good so far. Just add a meta tag do the header and be done with it. Not so simple with Gatsby. We are dynamically generating static pages. What we will want to do is at the moment the page is dynamically created we insert the appropriate tags.
How this is done in Gatsby is with Graphql and the plugin Helmet. Together these can query your post for the appropriate information and then using Helmet, inject the meta tags into the header section.
Thankfully most Gatsby starter templates already have this working, and having this working knowledge, it is easy to get done. For me, I wanted to also add keywords so what I had to do was alter the provided SEO component to accept my tags as keywords that will further assist in finding this page.
By using developer tools we can simply check that the injected meta tags have been placed in the header. 
The other part we have to consider is creating a site map. And Gatsby allows us to do that through the site map plugin. This plugin will generate an XML file with the page details required by search engines.
With that in mind happy coding.
