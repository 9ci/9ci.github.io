---
layout: post
title: Write-off Tolerances
date: 2020-10-12
author: John Kuhn
tags:  best-practices, cashapply
summary: Automatic write-off within tolerance by reason code and customer class
image: "/assets/img/blog/writeofftolerance.jpg"
featured_image: "/blog/writeofftolerance.jpg"
featured_image_alt: "writeofftolerance"
featured_image_height: "100px"
featured_image_width: "200px"
---

In my previous blog on discounting, I noted the need for any modern AR system to have a robust tolerance handling facility.  Here we will examine exactly what that’s important. 

## Automatic write-off

Attempting to collect short-pays is a frustrating business.  A few can be collected just by asking persistently; but many won’t be collected no matter what you do.  And before they’re resolved, they just clog up and confuse your normal AR.  The trick to far less headaches and wasted effort is to immediately and automatically write-off as much as you can that you know will not be worth the investment of your time.  Here are the capabilities your AR system needs to have to help: 

## 1. Write-off tolerance

The ability to examine each short pay against a pre-determined tolerance and write-off the short pay if it falls below the threshold.  The system should be able to handle the threshold expressed in either a fixed dollar amount or a percentage of the invoice.

## 2. Tolerance on check level

A lot of small individual invoice short pays can add up, even on a single check.  So the system should have the capability of calculating and managing tolerances at the check level as well.

## 3. Tolerance by reason code, customer classes

A single, global tolerance amount is inadequate.  A $1 tolerance on unearned discount may be fine, but be too low for an advertising or promo deduction.  And you should have the flexibility to have certain short pays, or customers, have no tolerance write-offs at all.  The system, therefore, needs to be able to specify tolerances by reason code.  And different tolerances for individual customers, or customer classes, should also be supported for full benefits to be realized.

## 4. Package write-offs

A good system should also protect you against the “death by a thousand cuts” syndrome.  If your tolerance is set at $1 by invoice and you have 10,000 invoices a quarter for a certain customer who habitually short pays, that could mean up to a $10,000 write-off.  Here, I would still argue for the automatic “write-off” to clean up the normal AR, but with a quarterly, or perhaps monthly, review to aggregate the problem short pays and prepare a package to the customer for reimbursement.  It’s been my experience that a well- documented, timely submitted package will generally result in at least a partial settlement.