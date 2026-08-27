---
title: "Exercise G252: Normality as the Kernel of a Coset Table"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 11, Ex. 11.4, printed p. 226, PDF p. 238"
created: 2026-08-27
---

# Exercise G252: Normality as the Kernel of a Coset Table

## Problem Statement

> [!question] Exercise 11.4
> How is normality of $H\le G$ reflected in the table for the operation on cosets?

## Hints

> [!hint]- Hint 1
> The stabilizer of the row $H$ is $H$; compare it with the kernel of the whole action.

## Solution

> [!success]- Solution
> The table is the permutation representation $\rho:G\to S_{G/H}$. The stabilizer of the distinguished coset $H$ is $H$, while the kernel is $\bigcap_{g\in G}g^{-1}Hg$, the core of $H$. Therefore $H$ is normal exactly when its stabilizer equals the kernel: every $h\in H$ fixes every row of the table. Equivalently, the coset set inherits a group multiplication and the table is the regular action of $G/H$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- **Source status:** [S1, Ch. 7, §11, Ex. 11.4, printed p. 226, PDF p. 238]; relations and numbering visually checked against the source PDF; solution independently derived. Exercise 11.8 is correctly numbered in the PDF although OCR repeats “11.5”.

