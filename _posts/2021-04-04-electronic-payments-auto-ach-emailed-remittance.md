---
layout: post
title: The Double-edged Sword of Electronic Payments – Part 1
date: 2021-04-4
author: John Kuhn
tags:  best-practices
summary: Auto ACH, Customer initiated ACH, emailed remittance 
image: "/assets/img/blog/epayment1.jpg"
featured_image: "/blog/epayment1.jpg"
featured_image_alt: "epayment1"
featured_image_height: "100px"
featured_image_width: "200px"
---

You hear it more and more.  Move your customers away from checks to electronic payments.  You get the money quicker, cut back on expensive lockbox fees, cut back on manual check applications, eliminate “check’s in the mail” excuses, etc., etc.  In general, it’s good advice, but you have to be prepared for the operational changes that come with it for certain types of electronic payments.  Today when you get a check you often have a check stub with remittance advice attached.  An electronic payment generally will not include useful remittance information.  Let’s take a look at some of the possibilities.

## Auto-ACH

This is the best of all possible scenarios, if you’re fortunate enough to have it as an option.  You have an agreement with the customer to automatically initiate an ACH to their bank account based on a pre-defined business rule.  That rule could be all invoices coming due within 14 days, triggered on the second and fourth Tuesday of each month, or simply total due on the last Friday of each month.  There are a lot of possibilities and a good AR system will give you flexibility.  The advantages are obvious, you auto collect what needs to be paid and you know exactly what each payment covers, so auto-ACH also implies auto payment application.  Aside from dealing with ACH rejections, which are much like an NSF check, you’ll have to deal with the auto-ACH setup and administration.  For disputes and correcting mistakes, I recommend that you also implement the ability to manually credit your customer via ACH, to quickly address any issues.

## Customer initiated ACH

This is usually done in a customer-facing payment portal, but it can also be done by your collectors in a customer call situation.   The considerations here are similar to the auto-ACH situation above, except there is less chance of disputes or mistakes since the customer drives the process in each case.

## Electronic payment supported by an EDI 820

I cover 820s in other blogs, so I won’t go into much detail here.  The 820 supplies the invoice by invoice list of how each payment is be applied, usually with short payment information.  Your challenge here is to get your EDI dept to map all the relevant information and supply it to you automatically in a format suitable for importing and application in your AR system, and to configure the system to support it.  The 820 may arrive before or after the payment.  A good AR system should have the capability of recognizing either situation and automatically matching the 820 remittance advice to the right payment based on reference number, dating and amount.  

## Electronic payment supported by a vendor portal

This scenario is similar to the 820 above, except you don’t need EDI and you have to retrieve the remittance advice yourself.  Vendor portals often have APIs.  If not, or if your AR system won’t support it, there’s always the crude, but usually effective, screen scrape method.  A good AR system should support both.  Another alternative would be to download the remittance advice as a spreadsheet or CSV and import it.  Once the information is in your system it can be matched to the payment.  

## Electronic payment supported by emailed remittance information

This is the most problematic situation.  The remittance advice comes as either an attachment, or worse, embedded in the body of the email itself.  The attachment could be a PDF, spreadsheet, CSV, an image of a report, maybe even a plain text file.   Unfortunately, this is the most difficult scenario to address and for many the most common.  It presents several challenges that we’ll address in the next blog.