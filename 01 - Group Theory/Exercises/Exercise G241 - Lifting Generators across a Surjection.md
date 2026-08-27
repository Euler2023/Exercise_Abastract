---
title: "Exercise G241: Lifting Generators across a Surjection"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 10, Ex. 10.2, printed p. 225, PDF p. 237"
created: 2026-08-27
---

# Exercise G241: Lifting Generators across a Surjection

## Problem Statement

> [!question] Exercise 10.2
> Let $\varphi:G\twoheadrightarrow G'$. If $\varphi(S)$ generates $G'$ and $T$ generates $\ker\varphi$, prove $S\cup T$ generates $G$.

## Hints

> [!hint]- Hint 1
> Correct an arbitrary element by a word in $S$.

## Solution

> [!success]- Solution
> For $g\in G$, write $\varphi(g)$ as a word in $\varphi(S)$ and let $w(S)$ be the corresponding element of $G$. Then $\varphi(gw(S)^{-1})=1$, so $gw(S)^{-1}\in\ker\varphi=\langle T\rangle$. Hence $g$ is a product of a word in $T$ and the word $w(S)$, proving $G=\langle S\cup T\rangle$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- **Source status:** [S1, Ch. 7, §10, Ex. 10.2, printed p. 225, PDF p. 237]; source PDF checked; solution independently derived.

