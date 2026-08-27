---
title: "Exercise G256: The Icosahedral Triangle Presentation and Two Coset Actions"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 11, Ex. 11.8, printed pp. 226–227, PDF pp. 238–239"
created: 2026-08-27
---

# Exercise G256: The Icosahedral Triangle Presentation and Two Coset Actions

## Problem Statement

> [!question] Exercise 11.8
> For $G=\langle x,y,z:x^2=y^3=z^5=xyz=1\rangle$: **(a)** prove $|G|=60$; **(b)** analyze $H=\langle x,zyz^{-1}\rangle$; **(c)** prove $G\cong A_5$; **(d)** analyze $K=\langle x,yxz\rangle$.

## Hints

> [!hint]- Hint 1
> Use Todd–Coxeter over $H$ and $K$ and compare the degree-$5$ action with $A_5$.

## Solution

> [!success]- Solution
> Todd–Coxeter gives $[G:H]=5$, $|H|=12$, so $|G|=60$ and $H\cong A_4$. With one coset numbering,
>
> $$
> x=(15)(34),\quad y=(235),\quad z=(15432)
> $$
>
> on $G/H$. These even permutations generate $A_5$; since both groups have order $60$, $G\cong A_5$.
>
> Enumeration for $K$ gives $[G:K]=6$ and $|K|=10$, so $K\cong D_5$. A compatible degree-$6$ coset representation is
>
> $$
> x=(14)(56),\quad y=(156)(234),\quad z=(15432),
> $$
>
> with the sixth point fixed by $z$. These tables also establish part **(a)** independently from the geometric triangle-group model. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- **Source status:** [S1, Ch. 7, §11, Ex. 11.8, printed pp. 226–227, PDF pp. 238–239]; relations and numbering visually checked against the source PDF; solution independently derived. Exercise 11.8 is correctly numbered in the PDF although OCR repeats “11.5”.
