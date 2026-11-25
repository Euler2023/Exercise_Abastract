---
title: "Exercise LA686: Exponential Surjectivity for Connected Abelian Matrix Groups"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 3, Section 3.9, Exercise 16, printed p. 75, PDF p. 87"
source_refs:
  - "S10/ch-3/sec-9/ex-16"
created: 2026-11-25
---

# Exercise LA686: Exponential Surjectivity for Connected Abelian Matrix Groups

## Problem Statement

> [!question] Original Chapter 3, Exercise 16
> Suppose that $G$ is a connected, commutative matrix Lie group with Lie algebra $\mathfrak g$. Show that the exponential map for $G$ maps $\mathfrak g$ onto $G$.

## Hints

> [!hint]- Hint 1
> Start with the factorization of elements of a connected matrix Lie group given by Corollary 3.47.

> [!hint]- Hint 2
> Use commutativity of the Lie algebra to combine the exponential factors.

## Solution

> [!success]- Solution
> Let $A\in G$. Since $G$ is connected, Hall's Corollary 3.47 gives $X_1,\ldots,X_m\in\mathfrak g$ with
> $$
> A=e^{X_1}\cdots e^{X_m}.
> $$
> [S10, §3.8, printed pp. 71–72, PDF pp. 83–84]
>
> Hall's Proposition 3.22 says that the Lie algebra of a commutative matrix Lie group is commutative [S10, §3.3, printed p. 57, PDF p. 69]. Thus $[X_j,X_k]=0$ for all $j,k$, so the matrices $X_j$ commute under multiplication. In particular, each partial sum $X_1+\cdots+X_{k-1}$ commutes with $X_k$.
>
> The identity $e^Ye^Z=e^{Y+Z}$ for commuting matrices is Proposition 2.3(5) [S10, §2.1, printed p. 32, PDF p. 44]. Applying it successively gives
> $$
> A=e^{X_1+\cdots+X_m}.
> $$
> The sum belongs to the real vector space $\mathfrak g$. Since $A$ was arbitrary, $\exp:\mathfrak g\to G$ is onto.

## Related Concepts

- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]

## Notes

- **Source status:** The statement was checked at 200 dpi on printed p. 75 / PDF p. 87. The solution independently combines the three named results proved in Hall.
- **Concrete verification:** For the diagonal subgroup $\{\operatorname{diag}(z_1,z_2): |z_1|=|z_2|=1\}$ of $U(2)$, put $z_j=e^{i\theta_j}$ with $\theta_j\in\mathbb R$. The Lie algebra element $\operatorname{diag}(i\theta_1,i\theta_2)$ exponentiates to the given diagonal matrix.
- **Role of connectedness:** For $G=\{1,-1\}\subset GL(1;\mathbb C)$, continuity makes every path $t\mapsto e^{tX}$ in $G$ constant. Hence $\mathfrak g=0$ and $\exp(\mathfrak g)=\{1\}$.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
