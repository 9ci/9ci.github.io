---
layout: post
title: RPA - Robotic Process Automation
date: 2020-05-10
author: John Kuhn
tags: autocash ai collection
summary: How RPA can benefit your productivity
description: How RPA can benefit your productivity
image: "/assets/img/blog/rpa.jpg"
featured_image: "/blog/rpa.jpg"
featured_image_alt: "RPA"
featured_image_height: "100px"
featured_image_width: "200px"
---

Robotic Process Automation (RPA) is the automation of routine, repetitive tasks performed by human users.  These tasks are not yet automated because typically they span multiple systems or software products and require some level of judgement in the workflow process.  RPA tools allow developers to automate tasks across these independent systems.

An example especially relevant to the AR world is the challenge presented by the ever-increasing trend of customers to send remittance advice independent of a payment, usually by email.  The process generally goes as follows:

1. A payment arrives by check or EFT with no remittance advice
2. An email containing the remittance advice is sent by the payor to a designated email address
3. An AR system user or clerk scans the email inbox for remittance
4. The remittance advice is manually “filed” by copying the spreadsheet attachment or non-machine readable attachment into a shared directory structure organized for future retrieval
5. The cash applier sees the check and searches their email or the shared directory for the proper customer and check
6. After finding the proper remittance file, the cash applier does a cut and paste for spreadsheets into a predefined import format, or manually keys in remittance advice for non-machine readable attachments.

An independent RPA tool would interface to the AR system, the email system and an OCR agent to invoke each system and manage the workflow between them.  But RPA isn’t always needed.  Modern AR systems have the capability to completely automate this process internally:

1. An email containing remittance advice is sent by the payor to a designated email address
2. An AI agent scans the email address for emails containing remittance advice
3. The agent categorizes the type of email advice
4. Non-machine readable attachments are routed to an OCR agent for data capture and translation to text
5. An intelligent data extraction agent analyzes the text/spreadsheet advice and the data captured by the OCR function and maps this data directly into system remittance tables 
6. A payment arrives by check or EFT with no remittance advice.  The system searches for stored remittance advice and matches it to the check for automatic processing.  If the remittance email has not yet been received, the system will wait and process the payment when it arrives.

As you can see, whether the automation is achieved by the AR system, or externally by Robotic Process Automation, the productivity benefit can be significant.  
