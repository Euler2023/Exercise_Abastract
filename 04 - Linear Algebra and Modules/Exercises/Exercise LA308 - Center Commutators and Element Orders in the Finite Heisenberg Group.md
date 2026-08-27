---
title: "Exercise LA308: Center Commutators and Element Orders in the Finite Heisenberg Group"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 10, Ex. 10.9, printed p. 226, PDF p. 238"
created: 2026-08-27
---

# Exercise LA308: Center Commutators and Element Orders in the Finite Heisenberg Group

## Problem Statement

> [!question] Exercise 10.9
> For the $3\times3$ upper unitriangular group over $\mathbb F_p$, determine the center, commutator subgroup, and element orders.

## Hints

> [!hint]- Hint 1
> Write an element as $(a,b,c)$ and multiply coordinates.

## Solution

> [!success]- Solution
> Write
>
> $$
> g(a,b,c)=\begin{pmatrix}1&a&c\\0&1&b\\0&0&1\end{pmatrix}.
> $$
>
> Then $[g(a,b,c),g(a',b',c')]=g(0,0,ab'-a'b)$. Hence
>
> $$
> Z(G)=[G,G]=\{g(0,0,c):c\in\mathbb F_p\}.
> $$
>
> For odd $p$, the binomial formula gives $g^p=1$, so every nonidentity element has order $p$. For $p=2$, $g(a,b,c)^2=g(0,0,ab)$: the two elements with $a=b=1$ have order $4$, the identity has order $1$, and the other five elements have order $2$. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** [S1, Ch. 7, §10, Ex. 10.9, printed p. 226, PDF p. 238]; source PDF checked; solution independently derived.
