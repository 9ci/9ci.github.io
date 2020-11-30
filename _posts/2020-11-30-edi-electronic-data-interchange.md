---
layout: post
title: Introduction to EDI
date: 2020-11-30
author: John Kuhn
tags:  best-practices
summary: Introduction to Electronic Data Interchange. Commonly used transaction sets.
image: "/assets/img/blog/edi_intro.jpg"
featured_image: "/blog/edi_intro.jpg"
featured_image_alt: "edi_intro"
featured_image_height: "100px"
featured_image_width: "200px"
---

EDI is an acronym for Electronic Data Interchange.  It is an architecture and standard enabling organizations to accurately and efficiently exchange the information necessary for the day to day conduct of business in a uniform and paperless manner. That’s the good news.   But, as with all standards, it is open to interpretation and implementation differences.  You can think of it as a generic blueprint for building a car:  you can choose to build a Volkswagen or a Cadillac, each with its own choice of options, and still follow the standard.  Unfortunately, this means that your EDI implementation with Wal-Mart will not work with Target or Home Depot.   Each follows the standard, but has its own detailed spec.

EDI functionality is grouped into transaction sets identified by a three digit number.  There are many different transaction sets, well over 300 last I counted.  Some are tailored to specific industries and very specialized functions.   For our purposes here, I’ll cover eight transaction sets commonly implemented for general commerce.  

- 810 – Invoicing -  Electronically invoice your customer usually with item detail
- 812 – Credit/Debit Adjustments -  Generally, chargebacks from you customer
- 820 – Remittance Advice – Detailed invoice and amount information from your customer for the application of payments
- 832 – Price/Sales Catalog  - Your online catalog of products, prices and UPC codes along with other product information helpful for logistics and warehousing
- 850 – Purchase Orders – Customer orders
- 852 – Product Sales Activity – Your customer’s report of your product sales
- 856 – Advance Ship Notification and Manifesting – Your notification to your customers of product and order shipments, often broken down by shipping carton
- 861 – Receipt Advice – Your customer’s report of the receipt of your goods

Many companies will only implement three or four these transaction sets.  Typically, each of your customers that demand EDI will tell you which of the transaction sets they require from your company.  In upcoming blogs, I’ll cover each of them in logical groupings.