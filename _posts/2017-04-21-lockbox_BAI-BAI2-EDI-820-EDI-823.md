---
layout: post
title: Autocash Lockbox Processing | Bank file formats BAI and EDI 
date: 2017-04-24
author: 9ci Team
tags:  autocash lockbox
summary: Autocash Lockbox Processing. Standard bank file formats BAI and BAI2, difference between EDI820 and EDI823
image: "/assets/img/blog/lockbox.jpg"
featured_image: "/blog/lockbox.jpg"
featured_image_alt: "Lockbox"
featured_image_height: "400px"
featured_image_width: "800px"
---
## What is a lockbox?

A service offered by banks to companies in which the company receives payments by mail to a post office box and the bank picks up the payments several times a day, deposits them into the company's account, and notifies the company of the deposit. Data entry clerks at the bank manually enter the information into an electronic file for transmission to the company to which the lockbox account belongs. These files are typically transferred nightly to the various lockbox owners (companies).  The files adhere to one of two standard banking industry transmission formats: BAI, BAI2, EDI820 and EDI 823.This enables the company to put the money to work as soon as it's received.

### Why use Lockboxes ?

Lockbox process has several advantages:

- Payment information can now be processed automatically manual intervention is not needed
- Import Processing can therefore also be handled automatically on a scheduled basis.
- Payment Reconciliation can be auto scheduled as well via the Greenbill Autocash correction process.
- Reduction of manpower needs based on less hours spent on manually manipulating the data.
- The predictability and reliability of the processes outlined above cause an overall reduction of errors throughout. This means the Cash Application process as a whole can be performed in a more timely fashion promoting better cash flow to the enterprise. __This helps put the AUTO in Autocash__.


### BAI  Defined:

BAI (or the BAI file format) is a file format for used to facilitate cash management balance reporting. The BAI format was developed and is maintained by the Banking Administration Institute (BAI). One common application of the BAI format is for use by banks to transmit lockbox payment data to customers. The current release is _Cash Management Balance Reporting Specifications Version 2_ typically referred to as _BAI2_.  A BAI2 file contains both remittance payment and item detail. It is processed in Greenbill in a similar manner as the merged 823 cash receipt described below.

### BAI VS. BAI2:

The BAI2 format lists each invoice and the specific payment amount for that invoice. The BAI format only list the invoices that are being payed as a whole.  With BAI2 the difference of the total check amount and the subtotal of amounts based on each invoice can be calculated, thus allowing the cash to be applied "On Account". This facilitates a more accurate cash posting process. The BAI format has been rendered obsolete and has been superseded by BAI2.

### What is EDI (Electronic Data Interchange?)

The computer-to-computer interchange of strictly formatted messages that represent documents . EDI implies a sequence of messages between two parties, either of whom may serve as originator or recipient. The formatted data representing the documents may be transmitted from originator to recipient via telecommunications or physically transported on electronic storage media. In EDI, the usual processing of received messages is by computer only. Human intervention in the processing of a received message is typically intended only for error conditions, for quality review, and for special situations. For example, the transmission of binary or textual data is not EDI as defined here unless the data are treated as one or more data elements of an EDI message and are not normally intended for human interpretation as part of online data processing.

#### 820

Payment Order/Remittance Advice

To provide information to a seller about the application of a specific payment by a buyer, including (1) to order a financial institution to make payment to payee (s) on behalf of sending party, (2) to report the completion of a payment to payee (s) by financial institution, and (3) to give advice to the payee by the payer on the application of a payment, i.e. invoice, check number, etc. Lockbox

#### 823

Data contents of the Lockbox Transaction Set (823) for use within the context of an Electronic Data Interchange (EDI) environment. The transaction set can be used to transmit lockbox (incoming payments) information and totals from a bank or any other lockbox service provider to a company.

### Contrasts between EDI 820 and ED823:

EDI 820 information comes from customer not the bank. EDI 820 is not really a lockbox format but can be used like a lockbox for customer open item processing. This data is only a remittance advice not a real legal payment.

Lockbox format 823 comes from bank confirming real legal payment transactions received from customer. This is real payment information which got credited in business account at Lockbox /Bank. Other differences are:

1. EDI 823 since its coming from a bank will have payments for all bank customers that have your company as a vendor. Since EDI 820 comes from the customer directly only his transactions are contained
2. EDI 823 doesn't contain the remittance advice line item data. The 823 data is Payment(Check) data only.
3. Note that the 823 specifies the actual payment whereas the 820 is the advice of the payment. In Greenbill the invoice detail from the 820 is merged to the 823 and supplies the complete remittance detail. The merged cash receipt is then available for import into Greenbill for cash application against the Accounts Receivable.

### BAI vs. EDI in Lockbox:

Both the formats are acceptable and can be used in Greenbill for processing auto import. EDI(820,823) technology requires the use of an EDI translator program. It creates intermediate document holding the information for further process. On the other side BAI format doesn't require this.

Some additional advantages of EDI are:

- Data is more accurate from an A/R open item perspective since the 820 comes directly from the customer.
- 820 Remittance detail data is cleaner than BAI. The remittance detail is piped directly from the A/R system of the customer and keying mistakes made at the bank with BAI are therefore avoided.
