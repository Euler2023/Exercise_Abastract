---
title: "Exercise G253: A Presentation That Collapses to the Trivial Group"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 11, Ex. 11.5, printed p. 226, PDF p. 238"
created: 2026-08-27
---

# Exercise G253: A Presentation That Collapses to the Trivial Group

## Problem Statement

> [!question] Exercise 11.5
> For $G=\langle x,y:x^4=y^3=1, x^2=yxy\rangle$, prove in two ways that $G$ is trivial.

## Hints

> [!hint]- Hint 1
> In the direct proof, square $yxy=x^2$ and cancel the outside $y$'s.

## Solution

> [!success]- Solution
> Todd–Coxeter enumeration over $\langle y\rangle$ identifies every newly introduced index with the first, and the generator columns then fix that index; the table has one coset and forces both generators to be trivial.
>
> Directly, squaring $yxy=x^2$ and using $x^4=1$ gives $yxy^2xy=1$. Multiplication by $y^2$ on both sides yields $xy^2x=1$, hence $y^2=x^{-2}=x^2$. The left side has order dividing $3$ and the right side order dividing $2$, so both equal $1$. Thus $y=1$; substituting into $x^2=yxy$ gives $x^2=x$, hence $x=1$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- **Source status:** [S1, Ch. 7, §11, Ex. 11.5, printed p. 226, PDF p. 238]; relations and numbering visually checked against the source PDF; solution independently derived. Exercise 11.8 is correctly numbered in the PDF although OCR repeats “11.5”.
