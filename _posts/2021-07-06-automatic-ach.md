---
layout: post
title: Automatic ACH - Part 1 – COD orders
date: 2021-07--6
author: John Kuhn
tags:  best-practices
summary: Receive emails with attachments as remittance 
image: "/assets/img/blog/automatic-ach.jpg"
featured_image: "/blog/automatic-ach.jpg"
featured_image_alt: "automatic-ach"
featured_image_height: "100px"
featured_image_width: "200px"
---

COD terms can be a nuisance.  How they are implemented can take several forms, the most common of which are:

- Fulfill and hold an order, wait for the check, match one to the other, ship the order
- Process the check for the estimated cost, upon clearing, match and fulfill the order
- Fulfill and deliver the order, accepting a check on delivery, hoping the check clears

Each scenario presents its issues.  An increasingly popular way to avoid them is to enter into an automatic ACH arrangement with your customer.   Let’s explore what that would mean.

ACH payments transfer funds from one party’s bank account to the other.  No paper is involved, it’s all electronic.  They are widely used in consumer payments today.  When you authorize your mortgage company or utility company to directly debit your bank account monthly, you’re using ACH as a regularly scheduled recurring payment.  

ACH’s can also be used on demand to greatly simplify COD orders.  Conceptually, the process is very straightforward:

- Enter into an agreement with your COD customers authorizing the direct debit of their accounts
- When a COD order is placed, initiate the ACH debit
- Ship the order

To make this happen we need the following supporting logistics:

- As part of the ACH agreement, the customer needs to supply its bank account information.  This takes the form of a 9 digit bank routing number and a variable digit account number

- This account information must be stored very securely for the obvious reasons
- You need a mechanism to initiate the ACH and process errors or NSFs if they occur
- You should have an email alert automatically informing your customer of the debit, and potentially a separate shipment email, if the order itself doesn’t ship the same day

A good, modern AR system should cover you.  If yours doesn’t, you still have options.  There are many third-party companies that specialize in payment processing that will work with you and your customers (for a fee, of course) to facilitate ACHs.

You can also work directly with your bank.   If you have IT resources to utilize, your bank can give you the standard file format it will accept to process ACH payments on your behalf.   Your IT folks will have to extract the relevant ACH orders daily from your system, format and transmit the daily ACH file to your bank and handle any exceptions that occur.  If you’re on your own, without the benefit of IT, many banks now have reasonably user-friendly web applications for initiating ACHs.  Some will have the ability to import simple CSV files, which could be readily user extractable, perhaps automated, by your AR system.

Regardless of your system and its capabilities, auto ACH should be something on your radar to consider.  I’ve only focused on COD orders here because those are a no brainer, but other scenarios, particularly with smaller accounts, are also worth exploring.  I’ll cover those in a future blog.