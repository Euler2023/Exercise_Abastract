---
title: "Exercise LA680: A Single Exponential in a Matrix Lie Group"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 3, Section 3.9, Exercise 4, printed p. 73, PDF p. 85"
source_refs:
  - "S10/ch-3/sec-9/ex-4"
created: 2026-11-25
---

# Exercise LA680: A Single Exponential in a Matrix Lie Group

## Problem Statement

> [!question] Original Chapter 3, Exercise 4
> Give an example of a matrix Lie group $G$ and a matrix $X$ such that $e^X\in G$, but $X\notin\mathfrak g$.

## Hints

> [!hint]- Hint 1
> Lie algebra membership concerns $e^{tX}$ for every real $t$. A single integer period of the scalar complex exponential can give $e^X=1$.

> [!hint]- Hint 2
> Take $G=\{1\}\subset\operatorname{GL}(1;\mathbb C)$ and test a suitable $X$ at $t=1$ and at $t=1/2$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent example from the defining membership condition for the Lie algebra of a matrix group [S10, §3.3, Definition 3.18, printed p. 56, PDF p. 68].
>
> The group $G=\{1\}$ is a closed subgroup of $\operatorname{GL}(1;\mathbb C)$, so it is a matrix Lie group. Take the $1\times1$ complex matrix $X=2\pi i$. The scalar exponential gives
> $$
> e^X=e^{2\pi i}=1\in G,\qquad e^{X/2}=e^{\pi i}=-1\notin G.
> $$
> An element of $\mathfrak g$ must have $e^{tX}\in G$ for every real $t$. The value $t=1/2$ rules out membership, as required.

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Logarithms|Matrix Logarithms]]

## Notes

- **Source status:** The exercise was checked on the 200 dpi rendering of printed p. 73 / PDF p. 85. Hall points out the failure of the implication immediately after Definition 3.18. The example above verifies that failure directly.
- **Routing:** The proof computes two values of a scalar matrix exponential.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
