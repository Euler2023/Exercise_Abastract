---
title: "Exercise Gal1: Galois Group and Intermediate Fields of x^4 - 2"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
  - galois-correspondence
  - dihedral-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 9, Ex. 9.11, printed p. 509, PDF p. 521"
created: 2025-01-19
---

# Exercise Gal1: Galois Group and Intermediate Fields of x^4 - 2

## Problem Statement

> [!question] Exercise 9.11
> Let $F=\mathbb Q$, and let $K$ be the splitting field of the polynomial $f(x)=x^4-2$ over $F$. The roots are $\alpha,-\alpha,i\alpha,-i\alpha$, with $\alpha=\sqrt[4]{2}$.
>
> (a) Determine the Galois group $G=G(K/F)$, and the subgroup $H=G(K/F(i))$.
>
> (b) Show how each element of $H$ permutes the roots of $f$.
>
> (c) Find all intermediate fields.

## Hints

> [!hint]- Hint 1
> First show that $K=\mathbb Q(\alpha,i)$ has degree $8$ over $\mathbb Q$.

> [!hint]- Hint 2
> Use the automorphisms $\sigma(\alpha)=i\alpha$, $\sigma(i)=i$ and $\tau(\alpha)=\alpha$, $\tau(i)=-i$.

> [!hint]- Hint 3
> List all ten subgroups of $D_4=\langle\sigma,\tau\mid \sigma^4=\tau^2=1,\ \tau\sigma\tau=\sigma^{-1}\rangle$ and compute their fixed fields.

## Solution

> [!success]- Solution
> Put $s=\alpha^2=\sqrt2$. Eisenstein's criterion at $2$ shows that $x^4-2$ is irreducible, so $[\mathbb Q(\alpha):\mathbb Q]=4$. Since $\mathbb Q(\alpha)\subset\mathbb R$, it does not contain $i$. Hence
> $$
> K=\mathbb Q(\alpha,i),
> \qquad
> [K:\mathbb Q]=8.
> $$
>
> Define
> $$
> \sigma(\alpha)=i\alpha,\quad \sigma(i)=i,
> \qquad
> \tau(\alpha)=\alpha,\quad \tau(i)=-i.
> $$
> Then
> $$
> \sigma^4=\tau^2=1,
> \qquad
> \tau\sigma\tau=\sigma^{-1}.
> $$
> These automorphisms generate eight distinct elements, so
> $$
> G=\operatorname{Gal}(K/\mathbb Q)\cong D_4,
> $$
> where Artin's $D_4$ has order $8$.
>
> An automorphism fixes $i$ exactly when it is a power of $\sigma$. Therefore
> $$
> H=\operatorname{Gal}(K/\mathbb Q(i))=\langle\sigma\rangle\cong C_4.
> $$
>
> Order the roots as
> $$
> \alpha_1=\alpha,\quad \alpha_2=i\alpha,\quad
> \alpha_3=-\alpha,\quad \alpha_4=-i\alpha.
> $$
> The four elements of $H$ act by
> $$
> 1=(),\qquad
> \sigma=(1\,2\,3\,4),\qquad
> \sigma^2=(1\,3)(2\,4),\qquad
> \sigma^3=(1\,4\,3\,2).
> $$
>
> By the Fundamental Theorem of Galois Theory, the complete subgroup--fixed-field correspondence is:
>
> | Subgroup of $G$ | Fixed field | Degree over $\mathbb Q$ |
> |---|---|---:|
> | $G$ | $\mathbb Q$ | $1$ |
> | $\langle\sigma\rangle$ | $\mathbb Q(i)$ | $2$ |
> | $\langle\sigma^2,\tau\rangle$ | $\mathbb Q(s)$ | $2$ |
> | $\langle\sigma^2,\sigma\tau\rangle$ | $\mathbb Q(is)$ | $2$ |
> | $\langle\sigma^2\rangle$ | $\mathbb Q(s,i)$ | $4$ |
> | $\langle\tau\rangle$ | $\mathbb Q(\alpha)$ | $4$ |
> | $\langle\sigma^2\tau\rangle$ | $\mathbb Q(i\alpha)$ | $4$ |
> | $\langle\sigma\tau\rangle$ | $\mathbb Q((1+i)\alpha)$ | $4$ |
> | $\langle\sigma^3\tau\rangle$ | $\mathbb Q((1-i)\alpha)$ | $4$ |
> | $\{1\}$ | $K=\mathbb Q(\alpha,i)$ | $8$ |
>
> For example, $\sigma\tau$ fixes $(1+i)\alpha$, while $\sigma^3\tau$ fixes $(1-i)\alpha$. Each displayed generator has the degree required by the index of its subgroup, so the table contains every intermediate field.

## Related Concepts

- [[05 - Galois Theory/Concepts/Fundamental Theorem|Galois Correspondence]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]
- [[05 - Galois Theory/Concepts/Quartic Resolvents and Galois Groups|Quartic Resolvents and Galois Groups]]

## Notes

The exercise statement is source material from [S1, Ch. 16, §9, Ex. 9.11, printed p. 509, PDF p. 521]. The solution is an independent derivation using Artin's Main Theorem of Galois Theory [S1, Ch. 16, §16.7, Thm. 16.7.1, printed p. 490, PDF p. 502]. The convention $|D_4|=8$ agrees with Artin.
