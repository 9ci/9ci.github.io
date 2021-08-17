---
layout: post
title: SAML vs OAuth vs OpenId
date: 2021-08-16
author: Joanna Dabal
tags:  security
summary: What is and when to use SAML, Oauth and OpenId
image: "/assets/img/blog/saml.jpg"
featured_image: "/blog/saml.jpg"
featured_image_alt: "saml"
featured_image_height: "100px"
featured_image_width: "200px"
---

In my previous blogs I presented Ouath and OpenId as user authentication and authorization solutions. In this blog I'd like to cover SAML and compare all 3 together.

SAML stands for Security Assertion Markup Language. It is an XML-based open-standard for transferring identity data between two parties: an identity provider (IdP) and a service provider (SP)

## Identity provider (IdP) and a service provider (SP)

Just to clarify the terms:

- Client: The web browser or other application the end user uses to access a resource or web application.
- Identity Provider (IdP): The server that owns the user identities and credentials.
- Service Provider (SP): The protected application.

Let's use example of 9ci cash application as one of the applications accessible for employee on his dashboard.  The **identity provider** would be the IdP that employee's company uses, Auth0. The **service provider** would be 9ci cash application. The employee signs into the main dashboard with Auth0. He clicks on the 9ci cash application icon, and 9ci recognizes that the user wants to log in via SAML. 9ci sends the employee back to Auth0 with a SAML Request that asks Auth0 to authenticate the user. Since the employee has already authenticated with Auth0, Auth0 verifies the session and sends the user back to 9ci with a SAML Response. 9ci checks this response, and if it looks good, the employee is granted access!


## Differences between SAML, Oauth and OpenId

- Oauth is a framework that controls **authorization** to protected resources like applications or groups of files. 
- OpenID Connect and SAML are industry standards for federated **authentication**. Because of this, Oauth can be used at the same time as SAML or OpenID Connect. 

--- 
- OpenID Connect is built on the OAuth 2.0 protocol. It uses an ID token, an JSON web token to standardize the areas OAuth 2.0 leaves to choice, including endpoint discovery and scopes. It focuses solely on user authentication, and is mostly used to enable users to login to consumer websites and mobile applications.

- SAML runs independently of Oauth 2.0, and instead of JSON web token, it uses message exchange to authenticate in XML. As such, it is more common to help organization users to use a single login for multiple applications. It is an umbrella standard that addresses federation, single sign-on, and identity management.<small>[based on planergy.com](https://planergy.com/blog/saml-vs-oauth-vs-openid/)</small>

|                                      | SAML | Oauth | OpenID |
| ------------------------------------ | ---- | ----- | ------ |
| Access to Applications from a Portal |   v  |       |        |
| Centralized Identity Source          |   v  |       |        |
| Mobile use cases                     |      |   v   |   v    |
| Access to resources                  |      |   v   |   v    |


| Term in SAML            | Term in OAuth        | Description                                                                 |
| ----------------------- | -------------------- | --------------------------------------------------------------------------- |
| Client                  | Client               | For example a web browser that an end user uses to access a web application |
| Identity Provider (IdP) | Authorisation Server | Server that owns the user identities and credentials                        |
| Service Provider (SP)   | Resource Server      | The protected application                                                   |


Couple good resources:

- [Okta SAML](https://www.okta.com/topic/SAML/)
- [Okta saml-vs-oauth](https://www.okta.com/identity-101/saml-vs-oauth/)
- [saml-vs-oauth-vs-openid](https://planergy.com/blog/saml-vs-oauth-vs-openid/)
- [How saml authentication works](https://auth0.com/blog/how-saml-authentication-works/)
- [Difference between saml and oauth](https://www.ubisecure.com/uncategorized/difference-between-saml-and-oauth/)