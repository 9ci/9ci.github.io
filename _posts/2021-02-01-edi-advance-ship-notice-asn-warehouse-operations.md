---
layout: post
title: EDI 856 – Advance Ship Notice (ASN) - part 3
date: 2021-02-01
author: John Kuhn
tags:  best-practices
summary: EDI 856 – Advance Ship Notice (ASN) - warehouse operations - Part3 
image: "/assets/img/blog/edi-asn-part3.jpg"
featured_image: "/blog/edi-asn-part3.jpg"
featured_image_alt: "edi_ship_notice_label"
featured_image_height: "100px"
featured_image_width: "200px"
---

In part 2 of this blog series on ASNs we’ve established the critical importance of the SSCC-18 barcode on the GS1-128 label as the “carton ID.”  Let’s delve a bit deeper into what that can mean for your warehouse operations.

## GS1-128

If you’re shipping a single item per carton, or a “standard pack” of items already suitably packaged, all your warehouse really needs to do is affix the properly formatted GS1-128 label to the appropriate carton and you’re good to go.  Your order/shipping system still has to generate the labels with the required unique serial number on each and include them in the ASN, but it’s a relatively simple process.

## Modern Warehouse Management Systems (WMS) handles more complex packages

Things get more complicated when you’re a “pick/pack” operation.  Under this scenario, a carton can contain any number or mix of items.  Your label and ASN must accurately reflect the exact contents of each carton.  Modern Warehouse Management Systems (WMS) can handle this situation in a variety of ways, from scanning each item into a carton as they are picked to “pre-cubing”  the order, when the WMS has the ability the know the dimensions of each item and can therefore advance plan how the shipment will be packed.  In each case, the opportunity for human error increases significantly.

Shipping a large order requires more than just handing your cartons over to a carrier.  Your shipment often has to be “unitized.”  This is where the pallet, or tare, level of the ASN hierarchy comes into play.   Typically, before shipping a large order, individual shipping cartons are stacked on a pallet and the entire pallet is shrink-wrapped.  Each pallet is then given its own unique GS1-128 label placed on the shrink-wrap which must be tied in the ASN to cartons it contains.

The hierarchy can also be more complicated.  For example, say you are shipping to a customer hub where your pallets may be “cross-docked,” for immediate reshipment to another distro center where later it will be broken down for transport to individual stores.  If your pallet contains cartons all headed to the same distro, it will have one label.  The pallet is scanned at the hub and immediately moved to an outgoing shipment area.  Alternatively, say the customer’s shipping guide requires that pallets be loaded to a minimum size and that requires you to stack the cartons destined for three distros on the same pallet.  In this case, the pallet might require three labels, one for each distro, and a fourth to represent the entire pallet.  This would add an additional level to the hierarchy, all required to be tied together in the ASN.

This is only one set of scenarios that illustrate the complexities and challenges ASNs can entail.  Remember also that each customer might have its own twist on the labeling or ASN itself.  If your situation goes beyond the basics, it’s essential to have someone in the AR department who has a good grasp of the requirements and can bring the IT and warehousing folks together to quickly address issues as they emerge.  

