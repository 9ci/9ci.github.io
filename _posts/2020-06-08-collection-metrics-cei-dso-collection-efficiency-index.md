---
layout: post
title: Collection Metrics – Collection Efficiency Index
date: 2020-06-08
author: John Kuhn
tags: ar-dashboard collection-calculation collection
summary: Collection Metrics – Collection Efficiency Index
description: Collection Metrics – Collection Efficiency Index
image: "/assets/img/blog/ceiimage.jpg"
featured_image: "/blog/ceiimage.jpg"
featured_image_alt: "RPA"
featured_image_height: "100px"
featured_image_width: "200px"
---

There are a wide variety of ways to measure the effectiveness of collections.  The most popular and well known is **Days Sales Outstanding (DSO)**.  Briefly defined it is the number of days of a company’s sales that haven’t yet been collected.  A previous blog covers this metric in detail. 

While very useful for specific financial purposes, especially with investors, as a measure of your collectors, DSO leaves a lot to be desired when comparing companies or even the same company over time.  Some of the more obvious issues are:

1. If sales take a large jump or suffer a large decline, the value can change significantly independent of collections

2. The mix of invoice terms and sales discounts can also alter the calculation.  If the mix of invoices with 40 day terms vs 10 day terms changes, the DSO will also change, again independently of collections.

3. You only know that a given collector’s value for DSO is good or bad if you know the mix of terms for that collector’s due invoices for that period of time.  A DSO of 30 is great if the terms of the invoices due are on average 30 days.  But it’s not so good if the terms are closer to 20.

A much better metric is the **Collection Efficiency Index of CEI**.  It’s a very simple calculation:  what percentage of due (collectable) revenues am I actually collecting.  The formula for calculating CEI is:

```
(Beginning receivables + Monthly credit sales - Ending total receivables)  ÷
(Beginning receivables + Monthly credit sales - Ending current receivables)  x 100
```

The advantages of using this metric are obvious:

1. Each collector is measured against their true highest objective, collect everything that can be collected  

2. The metric is inherently dollar weighted.  Collecting one 1,000 dollar invoice has more effect than collecting ten 50 dollar invoices  

3. Changes in sales or terms do not affect the calculation  
