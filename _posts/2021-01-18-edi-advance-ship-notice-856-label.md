---
layout: post
title: EDI 856 – Advance Ship Notice (ASN) Labels – Part 2
date: 2021-01-09
author: John Kuhn
tags:  best-practices
summary: EDI 856 – Advance Ship Notice (ASN) Labels – Part 2
image: "/assets/img/blog/edi_ship_notice_label.jpg"
featured_image: "/blog/edi_ship_notice_label.jpg"
featured_image_alt: "edi_ship_notice_label"
featured_image_height: "100px"
featured_image_width: "200px"
---
EDI Advance Ship Notice (ASN) – Part 2 Labels


As described in Part 1 of this blog, the primary purpose of an ASN is to facilitate receiving at your customer’s warehouse.   Think of your ASN as an electronic packing slip with scannable carton labels tying everything together.  Let’s look at how it works.

## GS1-128, UCC-128

Above is an example of a GS1-128. You might also hear it called a UCC-128, its previous name.  Basically, it’s a shipping label with specified barcodes.

## Label layout - GS1 standard

The exact layout of the label and which barcodes are included are dependent on your customer’s requirements.  There can be considerable variance customer to customer.  Typical human readable information includes ship-to and ship-from addresses, PO number, destination store number, etc.  By the GS1 standard, barcodes on the label are prefixed by an “application identifier,” which is the two or three digit code in parenthesis that indicates what the barcode represents.  (420) designates a postal code.  (91) is an implementation defined code, so it could be store number or other information any given customer might want to be able to scan.  (00) indicates a Serial Shipping Container Code (SSCC-18).   If a customer’s documentation refers to a “carton ID,” it’s the SSCC.  Some also refer to it as a “license plate.”  This is what drives the ASN.  

## SSCC

For any SSCC, the first three digits, the (00) 1 above, are control information and the final digit, 7 above, is a check digit to ensure barcode mis-scans are caught.  That leaves 16 digits, divided into two fields.  The first field is the Company Prefix, that uniquely identifies the shipping company.  It’s the same number that forms the first field of a UPC code.  The second field is simply a serial number that the shipping company generates to uniquely identify the particular carton to which it’s affixed.  

For all this to work for the benefit of your customer, the ASN must be received and processed before the shipment arrives, and each SSCC-18 on each carton in the shipment must correspond to the carton contents and destination reflected in the ASN.   If implemented properly, all your customer needs to do is scan the SSCC-18 on a single carton and the entire shipment will immediately become visible.   There’s no need to count cartons since each carton is scanned, and if a carton is missing, it and its contents are easily identified.

The burden is on the shipper to properly generate these labels and properly structure the ASN.  Mistakes can be costly.  The shipping warehouse has to get the labeling right.  If your labels won’t scan, or are not properly positioned on the cartons, or are not reflected in the ASN, at best you’ll get a profit-killing chargeback.  At worst, the receipt of your goods might not be properly recorded and you’ll have to struggle to get payment on your invoices.  We’ll go into more detail on the role these labels play and what your warehouse must be prepared to do in our next blog.
