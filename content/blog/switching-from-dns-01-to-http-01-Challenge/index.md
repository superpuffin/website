---
title: "Switching back from dns-01 to http-01 challenges on letsencrypt"
category: "Server maintenance"
date: "2020-09-15T00:00:00.000Z"
tags:
  - certbot
  - letsencrypt
# img_url:
# img_alt:
---

An old project of mine was setting up my own DNS servers for the domain(s) I own. (For those who are interested, I followed [this][1] tutorial). However, I was growing tired of having to maintain my own DNS servers and I never managed to get dynamic DNS working anyway. So, I decided to cancel the 2 VPSs which were running the DNS servers and update the records with my registrar. Yet, I was confronted with another problem. Certbot would not renew my certs using the `http-01` challenge. I was using the DNS servers to authenticate with letsencrypt, this ofcourse was not possible anymore. The fix was ultimately quite easy. It took me ages to find the solution, though. Therefore, I decided to write a small blogpost about it.

## The problem

The problem here is, to the best of my understanding, that letsencrypt caches which authentication method was used last for your domain and account. This persists even when the certificates are revoked. (I tried that first.) The keyword here, is account. By unregistering your account and request new certificates with a new account, you will be able to 'switch' to `http-01` challenges.

## The solution

First, let's imagine you still have a valid certificate for `example.com`. We will have to revoke the current certificate first. BEWARE: This will break your website until you have obtained a new certificate. To do this enter the following command:

```bash
sudo certbot revoke --cert-name example.com # replace with your domain name
# Or alternatively just run 'certbot revoke' to be able to choose your cert from a list
```

When certbot asks if you want to delete the certificate choose yes by typing in 'y'.

Next, we will unregister the current active letsencrypt account on your box. After this you will not be able to renew or revoke your certificates, so be prepared to re-issue all active certificates on your box. If you are certain you want to do this, run:

```bash
sudo certbot unregister
```

When asked, type in a 'd' to confirm deactivating your account. Your certbot account is now deactivated. You can now renew (_i.e._ re-issue) your letsencrypt certificates. For example, like this:

```bash
sudo certbot
```

## Conclusion

This has been a short tutorial, but hopefully someone will find this useful. I know it would have saved me a few hours of googling.

[1]: https://zwischenzugs.com/2018/01/26/how-and-why-i-run-my-own-dns-servers/
