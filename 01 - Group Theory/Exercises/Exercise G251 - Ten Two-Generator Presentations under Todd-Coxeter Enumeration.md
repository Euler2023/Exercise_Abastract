---
title: "Exercise G251: Ten Two-Generator Presentations under Todd-Coxeter Enumeration"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 11, Ex. 11.3, printed p. 226, PDF p. 238"
created: 2026-08-27
---

# Exercise G251: Ten Two-Generator Presentations under Todd-Coxeter Enumeration

## Problem Statement

> [!question] Exercise 11.3
> Analyze the ten presentations in Artin Ex. 11.3 and determine their orders and identities.

## Hints

> [!hint]- Hint 1
> Enumerate over a convenient cyclic subgroup; a nonterminating case can be recognized as an amalgamated free product.

## Solution

> [!success]- Solution
> The completed enumerations give:
>
> | part | order | group |
> |---|---:|---|
> | (a) $x^2=y^2=1,\ xyx=yxy$ | $6$ | $S_3$ |
> | (b) $x^3=y^3=1,\ xyx=yxy$ | $24$ | $SL_2(\mathbb F_3)$ |
> | (c) $x^4=y^2=1,\ xyx=yxy$ | $6$ | $S_3$ (the table forces $x^2=1$) |
> | (d) $x^4=y^4=x^2y^2=1$ | infinite | $C_4*_{C_2}C_4$ |
> | (e) $x^3=y^2=yxyxy=1$ | $1$ | trivial |
> | (f) $x^3=y^3=yxyxy=1$ | $3$ | $C_3$ |
> | (g) $x^4=y^3=1,\ xy=y^2x$ | $12$ | $C_3\rtimes C_4$ |
> | (h) $x^7=y^3=1,\ yx=x^2y$ | $21$ | $C_7\rtimes C_3$ |
> | (i) $x^{-1}yx=y^{-1},\ y^{-1}xy=x^{-1}$ | $8$ | $Q_8$ |
> | (j) $y^3=1,\ x^2yxy=1$ | $9$ | $C_9$ |
>
> Finite rows are certified by closed coset tables plus the indicated concrete models. In (d), $x^2=y^2$ is the common involution and the normal-form theorem for an amalgam shows infinitude. In (e), the relator gives $xyx=1$, hence $y=x^{-2}$ and the other orders force triviality. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- **Source status:** [S1, Ch. 7, §11, Ex. 11.3, printed p. 226, PDF p. 238]; relations and numbering visually checked against the source PDF; solution independently derived. Exercise 11.8 is correctly numbered in the PDF although OCR repeats “11.5”.
