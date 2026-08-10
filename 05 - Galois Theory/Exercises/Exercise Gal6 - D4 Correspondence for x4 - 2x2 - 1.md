---
title: "Exercise Gal6: D4 Correspondence for x^4 - 2x^2 - 1"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
  - galois-correspondence
  - dihedral-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 9, Ex. 9.13, printed p. 509, PDF p. 521"
created: 2026-08-11
---

# Exercise Gal6: D4 Correspondence for x^4 - 2x^2 - 1

## Problem Statement

> [!question] Exercise 9.13
> Let $K$ be the splitting field over $\mathbb Q$ of the polynomial
> $$
> x^4-2x^2-1.
> $$
> Determine the Galois group $G$ of $K/\mathbb Q$, find all intermediate fields, and match them up with the subgroups of $G$.

## Hints

> [!hint]- Hint 1
> Put $s=\sqrt2$ and choose $\alpha^2=1+s$, $\beta^2=1-s$ with $\alpha\beta=i$.

> [!hint]- Hint 2
> Define $\sigma(\alpha)=\beta$, $\sigma(\beta)=-\alpha$, and let $\tau$ be complex conjugation.

> [!hint]- Hint 3
> Use the ten subgroups of $D_4$ and look for simple fixed generators such as $s$, $i$, $is$, $\alpha\pm\beta$.

## Solution

> [!success]- Solution
> Let
> $$
> s=\sqrt2,\qquad
> \alpha^2=1+s,\qquad
> \beta^2=1-s,\qquad
> \alpha\beta=i.
> $$
> The four roots are $\alpha,\beta,-\alpha,-\beta$. The element $1+s$ is not a square in $\mathbb Q(s)$ because its norm is $-1$, so $[\mathbb Q(\alpha):\mathbb Q]=4$. Since $\mathbb Q(\alpha)$ is real and $\beta=i/\alpha$, the splitting field is
> $$
> K=\mathbb Q(\alpha,i)=\mathbb Q(\alpha,\beta),
> \qquad [K:\mathbb Q]=8.
> $$
>
> Define
> $$
> \sigma(\alpha)=\beta,\quad \sigma(\beta)=-\alpha,
> \qquad
> \tau(\alpha)=\alpha,\quad \tau(\beta)=-\beta.
> $$
> Thus $\tau$ is complex conjugation, and
> $$
> \sigma^4=\tau^2=1,\qquad
> \tau\sigma\tau=\sigma^{-1}.
> $$
> Hence
> $$
> G=\operatorname{Gal}(K/\mathbb Q)\cong D_4.
> $$
> The useful actions on $s$ and $i$ are
> $$
> \sigma(s)=-s,\quad \sigma(i)=-i,\qquad
> \tau(s)=s,\quad \tau(i)=-i.
> $$
>
> The complete correspondence is:
>
> | Subgroup of $G$ | Fixed field | Degree over $\mathbb Q$ |
> |---|---|---:|
> | $G$ | $\mathbb Q$ | $1$ |
> | $\langle\sigma\rangle$ | $\mathbb Q(is)=\mathbb Q(\sqrt{-2})$ | $2$ |
> | $\langle\sigma^2,\tau\rangle$ | $\mathbb Q(s)=\mathbb Q(\sqrt2)$ | $2$ |
> | $\langle\sigma^2,\sigma\tau\rangle$ | $\mathbb Q(i)$ | $2$ |
> | $\langle\sigma^2\rangle$ | $\mathbb Q(s,i)$ | $4$ |
> | $\langle\tau\rangle$ | $\mathbb Q(\alpha)$ | $4$ |
> | $\langle\sigma^2\tau\rangle$ | $\mathbb Q(\beta)$ | $4$ |
> | $\langle\sigma\tau\rangle$ | $\mathbb Q(\alpha+\beta)$ | $4$ |
> | $\langle\sigma^3\tau\rangle$ | $\mathbb Q(\alpha-\beta)$ | $4$ |
> | $\{1\}$ | $K$ | $8$ |
>
> To verify the two less immediate entries, one has
> $$
> (\alpha+\beta)^2=2+2i,\qquad
> (\alpha-\beta)^2=2-2i,
> $$
> so both elements have degree $4$ and are fixed by the indicated reflections. Their common irreducible polynomial is
> $$
> x^4-4x^2+8.
> $$
> Since the table lists the fields fixed by all ten subgroups of $D_4$, it is exhaustive.

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Correspondence|Galois Correspondence]]
- [[05 - Galois Theory/Concepts/Fixed Fields|Fixed Fields]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]
- [[05 - Galois Theory/Concepts/Quartic Resolvents and Galois Groups|Quartic Resolvents and Galois Groups]]

## Notes

The exercise statement is source material from [S1, Ch. 16, §9, Ex. 9.13, printed p. 509, PDF p. 521]. The solution is an independent derivation using the subgroup lattice of $D_4$ and Artin's Main Theorem [S1, Ch. 16, §16.7, printed pp. 490–492, PDF pp. 502–504].
