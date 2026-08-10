---
title: "Exercise F18: Constructing an Algebraic Closure of Fp"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - algebraic-closure
  - finite-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 10, Ex. 10.2, printed p. 475, PDF p. 487"
created: 2026-08-10
---

# Exercise F18: Constructing an Algebraic Closure of $\mathbb F_p$

## Problem Statement

> [!question] Exercise
> Construct an algebraically closed field that contains the prime field $\mathbb F_p$.

## Hints

> [!hint]- Hint 1
> Inside a fixed algebraic closure, form an increasing union of fields $\mathbb F_{p^{m!}}$.

> [!hint]- Hint 2
> The splitting field of a polynomial over a finite field is finite.

## Solution

> [!success]- Solution
> Use the existence and subfield theorems for finite fields to choose recursively a compatible tower
> $$
> \mathbb F_{p^{1!}}\subseteq\mathbb F_{p^{2!}}\subseteq\mathbb F_{p^{3!}}\subseteq\cdots
> $$
> and define
> $$
> \Omega=\bigcup_{m\ge1}\mathbb F_{p^{m!}}.
> $$
> This is a field containing $\mathbb F_p$, and every element is algebraic over $\mathbb F_p$.
>
> Let $f(x)\in\Omega[x]$. Its finitely many coefficients lie in some $\mathbb F_{p^{m!}}$. The splitting field of $f$ over that finite field is itself finite, say it is contained in $\mathbb F_{p^{m!d}}$ for some $d$. Choose $N$ such that $m!d\mid N!$. The finite-field subfield criterion then gives
> $$
> \mathbb F_{p^{m!d}}\subseteq\mathbb F_{p^{N!}}\subseteq\Omega.
> $$
> Hence $f$ splits completely in $\Omega$. Therefore $\Omega$ is algebraically closed and is an algebraic closure of $\mathbb F_p$.

## Related Concepts

- [[03 - Field Theory/Concepts/Algebraic Closure|Algebraic Closure]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]

## Notes

The construction uses the standard existence and subfield classification of finite fields. The factorial indices make the union visibly nested.
