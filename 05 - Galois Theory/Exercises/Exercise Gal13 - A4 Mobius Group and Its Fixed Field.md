---
title: "Exercise Gal13: An A4 Mobius Group and Its Fixed Field"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, fixed-fields, alternating-groups]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 5, Ex. 5.2, printed p. 507, PDF p. 519"
created: 2026-08-12
---

# Exercise Gal13: An $A_4$ Möbius Group and Its Fixed Field

## Problem Statement

> [!question] Exercise 5.2
> Show that $\sigma(t)=(t+i)/(t-i)$ and $\tau(t)=(it-i)/(t+1)$ generate a group isomorphic to $A_4$, and determine its fixed field.

## Hints

> [!hint]- Hint 1
> Compute the twelve fractional-linear transformations, then use an orbit sum.

## Solution

> [!success]- Solution
> Matrix representatives in $\operatorname{PGL}_2(\mathbb C)$ show $\sigma^3=\tau^3=(\sigma\tau)^2=1$. The resulting presentation is the standard $\langle a,b\mid a^3=b^3=(ab)^2=1\rangle$ presentation of $A_4$; direct reduction gives twelve distinct transformations.
>
> Let $G=\langle\sigma,\tau\rangle$ and define the orbit sum
> $$
> J(t)=\sum_{g\in G}g(t)^2.
> $$
> It is explicitly
> $$
> J(t)=
> \frac{2(t^4+1)(t^2-2t-1)(t^2+2t-1)(t^4+6t^2+1)}
> {t^2(t-1)^2(t+1)^2(t-i)^2(t+i)^2}.
> $$
> It is $G$-invariant. Its numerator and denominator have degree $12$, and a generic value has twelve preimages, so $[\mathbb C(t):\mathbb C(J)]=12=|G|$. Therefore $\mathbb C(t)^G=\mathbb C(J)$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Fixed Fields|Fixed Fields]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric and Alternating Groups]]

## Notes

The finite matrix enumeration is an exact computational verification of the displayed orbit; invariance and the degree argument prove the fixed-field claim.
