---
layout: post
title: EDI 856 – Advance Ship Notice (ASN) – Part 1
date: 2021-01-09
author: John Kuhn
tags:  best-practices
summary: EDI 856 – Advance Ship Notice (ASN) – Part 1
image: "/assets/img/blog/edi_ship_notice.jpg"
featured_image: "/blog/edi_ship_notice.jpg"
featured_image_alt: "edi_ship_notice"
featured_image_height: "100px"
featured_image_width: "200px"
---

As I mentioned in my previous blog, an accurate 856 can greatly improve the receiving operation at your customer’s warehouse and, therefore, will help you get paid fully and more quickly.  However, it is by far the hardest transaction set to implement with potentially several data and labeling requirements that your distribution organization may find challenging.  Combine this with the different implementations your customers may utilize and you have a situation fraught with exposure to confusion, disputes and chargebacks.

## Match Purchase Order, submitted invoice and SKU

One of the biggest warehousing issues your customer has is matching the goods they receive to both the Purchase Orders they have issued and the Invoices their suppliers have submitted.  It’s a three-way match situation for each SKU:   What and how much did we receive?  Is there an open PO for that SKU, that quantity and that supplier?  Does the invoice match up to everything?

Rather than count boxes coming off a truck and trying to match their contents to a report, your customer wants to simply scan a barcode label affixed to each pallet received and throw the barcode labeled cartons from the pallet onto a conveyor belt  to allow their warehouse management system to automatically record and match the receipt.   Requiring that you supply an 856 ASN, allows them to do just that.

## 5 levels of hierarchies to an 856

There are five levels of hierarchy to an 856.  Not all are used in every scenario, not all customers require all five, and there are other circumstances under which the labeling requirements I describe below aren’t quite so stringent, but I will cover all five to give an appreciation of the complexity an 856 can entail.  

1. Item Level -  As you might expect, this is the lowest level of the hierarchy.  It contains the item information and quantities of the product ordered.  One record for each item.

2. Carton (or Pack) Level – The next level up is how the items are packed, not just for the order as a whole, but for each individual carton in which the order is shipped.   One record for each carton linked to the contents of the carton at the Item Level

3. Pallet (or Tare) Level – The third level in the hierarchy is not always needed.  It represents the cartons consolidated on a pallet or in a master shipping carton.   One record for each pallet or master shipping carton linked to the cartons it contains.

4. Order Level - Customer Purchase Order information.  One record for each order contained in the shipment linked to either the Pallet or Carton Level as appropriate.

5. Shipment Level - One record for the shipment containing Bill of Lading number, Carrier, Ship Date, Ship To address, and much more, linked to the Orders on the shipment.

Once this hierarchy is laid out and populated with your shipment, order, carton and item information, what brings everything together and makes this work in busy warehouses are labels.   Very specific labels called GS1-128 (UCC-128 formerly).   It’s extremely important to understand these labels and make sure they are accurately reflected in the ASN.   I’ll cover this in Part 2 of this topic.  