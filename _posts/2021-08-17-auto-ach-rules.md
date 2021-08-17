---
layout: post
title: Automatic ACH - Part 2 – Auto ACH by Rules
date: 2021-08-17
author: John Kuhn
tags:  best-practices
summary: Rules on auto ach - What invoices to select for the ACH and when to initiate the payment
image: "/assets/img/blog/ach-auto-rules.jpg"
featured_image: "/blog/ach-auto-rules.jpg"
featured_image_alt: "automatic-ach-rules"
featured_image_height: "100px"
featured_image_width: "200px"
---

Assuming that you have implemented ACH with a set of your customers for the payment of invoices (see Part 1 of this blog topic), there’s much more that you can do beyond COD orders.  Many businesses have a set of customers that “pay as they go” in some form.  Most AR packages that support customer ACH, also support business rules that can be configured to auto-ACH invoices periodically.  Typically, the rules are flexible enough to meet a wide variety of criteria.  They usually fall into two categories:

1. What invoices to select for the ACH 
2. When to initiate the payment

## Most implementations offer options for invoice selection, such as:

- Current Total Due
- Current Past Due
- Last Statement Total Due
- Last Statement Past Due
- Previous Week Invoices
- Previous Month Invoices

## Options for scheduling the payment typically include:

- Monthly – specifying day(s) of the month
- Weekly – specifying day(s) of the week

In addition to auto-ACH, it’s also very important to auto-email your customer.  The last thing you want is to ACH and have the transaction returned for NSF, or have your customer surprised by any aspect of this arrangement.  I recommend, therefore, a minimum of two emails:

1. An email informing the customer of the upcoming ACH with amount, with time enough for the option of cancelling or delaying the ACH
2. An email informing the customer of the completed ACH listing the invoices paid

Following this methodology has significant benefits for both you and your customer.  From your side, the collection and cash application functions are greatly simplified, invoices are automatically paid, you know exactly which invoices are paid and the customer automatically stays current.  From your customers’ perspective, there is no need to process invoices for payment or missing due dates that might affect their credit report or open-to-buy limits in your system.

Not all customers will agree to this type of arrangement, particularly those without the discipline to manage and project their cash balances.   Strategies to deal with these customers will be presented in a future blog.