---
title: "Exercise G120: Power Maps on Conjugacy Classes"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - conjugacy-classes
  - equivariant-maps
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 2, Ex. 2.4, printed p. 221, PDF p. 233"
created: 2026-08-24
---

# Exercise G120: Power Maps on Conjugacy Classes

## Problem Statement

> [!question] Exercise 2.4
> Let $G$ be a group, and let $\varphi$ be the $n$th power map: $\varphi(x)=x^n$. What can be said about how $\varphi$ acts on conjugacy classes?

## Hints

> [!hint]- Hint 1
> Compute $(gxg^{-1})^n$.

## Solution

> [!success]- Solution
> For all $g,x\in G$,
>
> $$
> \varphi(gxg^{-1})=(gxg^{-1})^n=gx^ng^{-1}.
> $$
>
> Thus the power map is equivariant for conjugation and maps the entire class $C(x)$ onto $C(x^n)$:
>
> $$
> \varphi(C(x))=C(x^n).
> $$
>
> It need not be injective on a class. For finite $G$, the inclusion $Z_G(x)\le Z_G(x^n)$ yields
>
> $$
> |C(x^n)|=[G:Z_G(x^n)]\mid [G:Z_G(x)]=|C(x)|.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- The map $x\mapsto x^n$ is generally not a group homomorphism; equivariance under conjugation is the relevant property here.
- **Source status:** [S1, Ch. 7, §2, Ex. 2.4, printed p. 221, PDF p. 233]; independent proof.

