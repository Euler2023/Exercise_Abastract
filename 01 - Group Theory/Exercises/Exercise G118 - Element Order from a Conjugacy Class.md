---
title: "Exercise G118: Element Order from a Conjugacy Class"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - conjugacy-classes
  - centralizers
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 2, Ex. 2.2, printed p. 221, PDF p. 233"
created: 2026-08-24
---

# Exercise G118: Element Order from a Conjugacy Class

## Problem Statement

> [!question] Exercise 2.2
> A group of order $21$ contains a conjugacy class $C(x)$ of order $3$. What is the order of $x$ in the group?

## Hints

> [!hint]- Hint 1
> Use $|G|=|Z_G(x)|\,|C(x)|$ and the inclusion $\langle x\rangle\le Z_G(x)$.

## Solution

> [!success]- Solution
> Orbit–stabilizer for conjugation gives
>
> $$
> |Z_G(x)|=\frac{|G|}{|C(x)|}=\frac{21}{3}=7.
> $$
>
> Since every element commutes with its own powers, $\langle x\rangle\le Z_G(x)$. Hence the order of $x$ divides $7$. It is not $1$, because the identity has a one-element conjugacy class. Therefore $x$ has order $7$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]

## Notes

- Artin denotes the centralizer by $Z(x)$; this note uses $Z_G(x)$ to distinguish it from the center $Z(G)$.
- **Source status:** [S1, Ch. 7, §2, Ex. 2.2, printed p. 221, PDF p. 233]; independent proof.

