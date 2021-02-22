---
layout: post
title: EDI 820 – Payment Order and Remittance Advice - part 1
date: 2021-02-01
author: John Kuhn
tags:  best-practices
summary: EDI 820 - payment information, remittance advice, adjustments
image: "/assets/img/blog/edi-820-part1.jpg"
featured_image: "/blog/edi-820-part1.jpg"
featured_image_alt: "edi_820-part1"
featured_image_height: "100px"
featured_image_width: "200px"
---

An EDI 820 details exactly how your customer intends their payments to be applied.  When implemented to the fullest capability, EDI 820s are the ultimate answer to ensuring clarity and accuracy in the payment application and deduction management processes, which, in turn, makes the collection function much easier to accomplish.

In today’s world, many of your customers may not offer 820s, they’ll simply direct you to their vendor portal.  Depending on the quality of that portal, and your ability to access, download and automatically process the information available there, you may be fine.  A good portal is infinitely better than a sketchy 820 implementation, but, in the long run, a good 820 solution is preferable if it’s available.

In general, there are two levels to the 820, payment information and remittance information.  Let’s take a look at what that includes.

## Payment Information

Typically, an 820 will be sent independent of the payment.  It can arrive before or after the actual payment.  The payment may be an EFT or a check.  So, from a cash application standpoint, you need to know which customers are sending 820s and how to match them to payments.  This information includes:

- Sender
- Payment date
- Payment amount
- Payment reference number
- Currency, payment method, etc.

A good, modern AR system will handle 820 matching automatically.   When a payment arrives, the system searches for the matching 820 (usually on customer, payment date or reference number and amount).  If a match is found, the 820 detail is merged to the payment and applied.  If no match is found, the payment is suspended.  When an 820 arrives, the system searches for a matching payment.  If one is found, it is merged and processed; otherwise, the 820 is stored.

## Remittance Information

Implementations vary considerably here.  The minimum data elements I’ve seen are:

- Document Type (invoice, credit memo, etc.)
- Reference Number
- Gross Amount
- Net Amount

If the above is all that is offered, chances are you’ll be better off with the vendor portal because that will likely give better information on shortpays.  But before you conclude that, make sure that your EDI department, or third-party EDI vendor, is mapping and forwarding you all the fields your customer offers.  

Key additional fields associated with an invoice that may be provided:

- Discount taken
- Adjustment amount
- Adjustment reason code

These additional fields can make all the difference in shortpay/deduction situations.  Not only do you explicitly see the discount/adjustment taken against a given invoice, you are also given a reason for the adjustment.  That reason will be a two character code that will likely be different customer to customer, but a good AR system will translate that code into your own internal reason code when it’s imported into your system.  Armed with this information, you’re in a much better position to accurately apply cash and aggressively manage and collect invalid deductions.

## Free Floating Adjustments

What we have covered in this blog is the payment application information in the 820 associated with existing invoices or credits open in your AR System.  Unfortunately, as with most things in the AR world, it’s not always that simple.  You may also get what I call “free floating adjustments.”  Deductions or credits completely independent of the invoices or anything else associated with the particular payment the 820 refers to.  I’ll cover these in my next blog.  
