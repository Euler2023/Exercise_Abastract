---
title: "Exercise G258: Double Cosets of a Reflection Subgroup in D_n"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Miscellaneous Problems, Ex. M.2, printed p. 227, PDF p. 239"
created: 2026-08-27
---

# Exercise G258: Double Cosets of a Reflection Subgroup in D_n

## Problem Statement

> [!question] Exercise M.2
> Using the presentation (6.4.3), determine the double cosets $HgH$ of $H=\{1,y\}$ in $D_n$ and show each has two or four elements.

## Hints

> [!hint]- Hint 1
> Every element is $x^i$ or $x^iy$, and multiplication by $H$ absorbs the final $y$.

## Solution

> [!success]- Solution
> Every double coset has a representative $x^i$, and
>
> $$
> Hx^iH=\{x^i,x^{-i},x^iy,x^{-i}y\}.
> $$
>
> Here $yx^i=x^{-i}y$ and $yx^iy=x^{-i}$. If $2i\equiv0\pmod n$, the two inverse powers coincide and the double coset has two elements; otherwise all four displayed elements are distinct. Thus the double cosets are indexed by the inversion orbits $i\sim-i$ in $\mathbb Z/n\mathbb Z$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]

## Notes

- **Source status:** [S1, Ch. 7, Misc., Ex. M.2, printed p. 227, PDF p. 239]; source PDF checked; solution independently derived.
