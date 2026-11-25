---
title: "Exercise Rep170: Normal Matrix Lie Subgroups and Lie Ideals"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 3, Section 3.9, Exercise 6, printed p. 74, PDF p. 86"
source_refs:
  - "S10/ch-3/sec-9/ex-6"
created: 2026-11-25
---

# Exercise Rep170: Normal Matrix Lie Subgroups and Lie Ideals

## Problem Statement

> [!question] Original Chapter 3, Exercise 6
> Let $G$ and $H$ be matrix Lie groups with $H\subset G$, so that the Lie algebra $\mathfrak h$ of $H$ is a subalgebra of the Lie algebra $\mathfrak g$ of $G$.
>
> (a) Show that if $H$ is a normal subgroup of $G$, then $\mathfrak h$ is an ideal in $\mathfrak g$.
>
> (b) Show that if $G$ and $H$ are connected and $\mathfrak h$ is an ideal in $\mathfrak g$, then $H$ is a normal subgroup of $G$.

## Hints

> [!hint]- Hint 1
> Compare conjugation of $e^{tY}$ by $A\in G$ with the exponential of $AYA^{-1}$.

> [!hint]- Hint 2
> For (a), take $A=e^{sX}$ and differentiate the resulting curve in $\mathfrak h$ at $s=0$.

> [!hint]- Hint 3
> For (b), exponentiate the linear map $\operatorname{ad}_X$ that preserves $\mathfrak h$. Use Hall's finite products of exponentials for both connected groups.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation using the definition of the matrix Lie algebra. The converse uses Hall's exponential–adjoint identity and generation by exponentials, cited at their use.
>
> **(a)** Take $Y\in\mathfrak h$ and $A\in G$. For each real $t$, the matrix exponential series yields
> $$
> e^{tAYA^{-1}}=Ae^{tY}A^{-1}.
> $$
> By normality and $e^{tY}\in H$, the right-hand side lies in $H$. Hence $AYA^{-1}\in\mathfrak h$. For $X\in\mathfrak g$, we can take $A=e^{sX}$ for every real $s$. Differentiation uses $e^{sX}=I+sX+O(s^2)$ and $e^{-sX}=I-sX+O(s^2)$, which give
> $$
> \lim_{s\to0}\frac{e^{sX}Ye^{-sX}-Y}{s}=XY-YX=[X,Y].
> $$
> Each difference quotient is in $\mathfrak h$, a closed linear subspace of the finite-dimensional matrix space. Therefore $[X,Y]\in\mathfrak h$, and $\mathfrak h$ is an ideal.
>
> **(b)** If $\mathfrak h$ is an ideal, then $\operatorname{ad}_X(Y)=[X,Y]$ maps $\mathfrak h$ into itself for every $X\in\mathfrak g$. Every power of $\operatorname{ad}_X$ preserves $\mathfrak h$, so its exponential does too by closedness. Hall's Proposition 3.35 identifies this exponential with conjugation [S10, §3.5, printed p. 64, PDF p. 76]:
> $$
> e^XYe^{-X}=e^{\operatorname{ad}_X}(Y)\in\mathfrak h
> \qquad(Y\in\mathfrak h).
> $$
> Since $H$ is connected, every member of $H$ is a finite product of matrices $e^Y$ with $Y\in\mathfrak h$ [S10, §3.8, Corollary 3.47, printed p. 71, PDF p. 83]. Conjugation by $e^X$ sends each such factor to $\exp(e^XYe^{-X})\in H$, so $e^XHe^{-X}\subseteq H$. The same argument for $-X$ gives equality. Connectedness of $G$ and the same corollary now express any $A\in G$ as a finite product of such $e^X$. Each factor normalizes $H$, hence $AHA^{-1}=H$. This proves normality.

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Adjoint Representation and Invariant Trace Forms|Adjoint Representation and Invariant Trace Forms]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]

## Notes

- **Source status:** Both parts were checked against the 200 dpi rendering of printed p. 74 / PDF p. 86. Proposition 3.35 and Corollary 3.47 were checked separately on printed pp. 64 and 71 / PDF pp. 76 and 83.
- **Hypotheses:** Part (a) uses normality directly. Part (b) uses the connectedness of $H$ to generate its elements and the connectedness of $G$ to generate all conjugating matrices.
- **Routing:** The mechanism is the passage from the adjoint action of the group to the adjoint action of its Lie algebra.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
