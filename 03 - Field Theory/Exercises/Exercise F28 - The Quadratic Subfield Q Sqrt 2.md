---
title: "Exercise F28: The Quadratic Subfield $\\mathbb Q(\\sqrt2)$"
topic: field-theory
difficulty: beginner
status: completed
tags:
  - exercise
  - field-theory
  - subfields
  - quadratic-fields
  - field-axioms
source: Michael Artin, Algebra, 2nd ed., Ch. 3, Section 1, Ex. 1.1, printed p. 98, PDF p. 110
created: 2026-08-23
---

# Exercise F28: The Quadratic Subfield $\mathbb Q(\sqrt2)$

## Problem Statement

> [!question] Exercise 1.1
> Prove that the numbers of the form $a+b\sqrt2$, where $a,b\in\mathbb Q$, form a subfield of $\mathbb C$.

## Hints

> [!hint]- Hint 1
> Check closure under addition, multiplication, additive inverses, and inverses of nonzero elements.

> [!hint]- Hint 2
> Rationalize the denominator of $(a+b\sqrt2)^{-1}$.

## Solution

> [!success]- Solution
> The set contains $0$ and $1$ and is closed under addition, negation, and multiplication because
> 
> $$
> (a+b\sqrt2)(c+d\sqrt2)=(ac+2bd)+(ad+bc)\sqrt2.
> $$
> 
> If $a+b\sqrt2\ne0$, then $a^2-2b^2\ne0$: equality with $b\ne0$ would make $\sqrt2=a/b$ rational, while $b=0$ would force $a=0$. Hence
> 
> $$
> (a+b\sqrt2)^{-1}=\frac{a-b\sqrt2}{a^2-2b^2},
> $$
> 
> which has the same form with rational coefficients. Thus the set is a subfield of $\mathbb C$.

## Related Concepts

- [[03 - Field Theory/Concepts/Field Definition|Field Definition]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, §1, Ex. 1.1, printed p. 98, PDF p. 110]. The solution is an independent derivation for this vault, not a solution printed in Artin.
