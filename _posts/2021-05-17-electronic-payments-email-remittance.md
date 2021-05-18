---
layout: post
title: The Double-edged Sword of Electronic Payments – Part 2 – Email Remittance Advice
date: 2021-05-17
author: John Kuhn
tags:  best-practices
summary: Receive emails with attachments as remittance 
image: "/assets/img/blog/elect_paym_email.jpg"
featured_image: "/blog/elect_paym_email.jpg"
featured_image_alt: "elect_paym_email"
featured_image_height: "100px"
featured_image_width: "200px"
---

You’ve moved a good number of your customers to electronic payments to get paid faster and avoid the expense of lockboxes and check payment application, but you find yourself in a new challenging situation.  With checks, you at least had the check stub if nothing else for determining how to apply the check.  Electronic payments frequently supply no useable remittance advice.  Larger customers will typically offer EDI 820s or a vendor portal to help apply their payments, but many customers will simply email application instructions.   The remittance advice comes as either an attachment, or worse, embedded in the body of the email itself.  The attachment could be a PDF, spreadsheet, CSV, an image of a report, a screenshot or maybe just a plain text file.  How can you efficiently manage this?   For my purposes here, I’ll outline the steps that a well-equipped AR system would follow:

## Consolidated email remittance address

You need to establish a consolidated email remittance address for your company.  Have all remittance email come there so you have a single point of control and accountability.

## Automated agent

Have an automated agent read the emails.  This agent should preserve the email body and pull in the attachment(s).  You should also preserve the original email stream and make it accessible to your appliers/collectors for research or audit purposes.  An easy way to do this is simply have the email agent forward the emails to a second dedicated email account.

## Classify attachments

Once the emails are read, they are reduced to a set of documents, usually the email body and one attachment.   The documents are then classified as text (usually the body), CSV, spreadsheet, data embedded PDF or image file.  The customer can also be tentatively identified based on the email origination domain.  

## Send to OCR engine

Image files should be routed to your OCR engine to translate them to text with the appropriate meta-date to facilitate classification, then merged back into the process flow.  I’m assuming here that your OCR engine is a modern AI-driven facility trained to the AR environment that doesn’t require templates, zones or other document/format specific aids.  

## Extract the data

Using keywords, captions and/or dynamic recognition of table structures, a data extractor will parse the data to extract the relevant information from each document in the set and map it to the appropriate data fields in your AR system for import.  

## Merge data to the payment

Using the extracted payment information (reference number, amount, date), the system should immediately check to see if the actual payment has already been received from the payment source.  If so, the extracted remittance detail should be immediately merged to the payment and applied.  

## Store remittance data

If the payment has not yet been received, the remittance detail should be appropriately stored so the system can monitor incoming payments to automatically perform the merge when the payment arrives.

A good AR system will handle all this for you, but many fall short.  I frequently talk to large companies that spend a significant portion of their highly skilled AR resources performing the essentially clerical task of matching email remittance advice to payments.  I will suggest alternate solutions for addressing this growing challenge in a future blog.
