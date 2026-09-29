---
title: "Exercise LA492: Decomposable Exterior Vectors Determine Subspaces"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, Exercise 1, printed p. 753, PDF p. 768"
created: 2026-09-29
---

# Exercise LA492: Decomposable Exterior Vectors Determine Subspaces

## Problem Statement

> [!question] Lang XIX.1
> Let $E$ be a finite dimensional vector space over a field $k$. Let $x_1,\ldots,x_p$ be elements of $E$ such that $x_1\wedge\cdots\wedge x_p\ne0$, and similarly $y_1\wedge\cdots\wedge y_p\ne0$. If $c\in k$ and
>
> $$
> x_1\wedge\cdots\wedge x_p=c\,y_1\wedge\cdots\wedge y_p
> $$
>
> show that $x_1,\ldots,x_p$ and $y_1,\ldots,y_p$ generate the same subspace. Thus non-zero decomposable vectors in $\bigwedge^pE$ up to non-zero scalar multiples correspond to $p$-dimensional subspaces of $E$.

## Hints

> [!hint]- Hint 1
> Recover the span from the nonzero exterior vector $w$ by considering the vectors $v$ with $v\wedge w=0$.

> [!hint]- Hint 2
> Extend $x_1,\ldots,x_p$ to a basis and compare the distinct exterior basis vectors occurring in $v\wedge w$.

## Solution

> [!success]- Independent derivation
> Put $w=x_1\wedge\cdots\wedge x_p$. The $x_i$ are linearly independent: a linear dependence expressing one vector in terms of the others makes the wedge zero by multilinearity and alternation. Extend them to a basis $x_1,\ldots,x_p,e_{p+1},\ldots,e_n$ of $E$. For
>
> $$
> v=\sum_{i=1}^p a_ix_i+\sum_{j=p+1}^n b_je_j
> $$
>
> we have
>
> $$
> v\wedge w=\sum_{j=p+1}^n b_j\,e_j\wedge x_1\wedge\cdots\wedge x_p.
> $$
>
> The displayed nonzero exterior monomials are distinct basis vectors up to signs. Hence $v\wedge w=0$ precisely when every $b_j=0$. This also covers $p=n$: every vector belongs to the span and every wedge of degree $n+1$ is zero. Consequently
>
> $$
> \{v\in E:v\wedge w=0\}=\operatorname{span}(x_1,\ldots,x_p).
> $$
>
> The given equality and nonvanishing imply $c\ne0$, so replacing $w$ by $c^{-1}w$ does not change this kernel. Applying the same argument to the $y_i$ proves equality of the spans.
>
> Conversely, choose a basis $x_1,\ldots,x_p$ of a $p$-dimensional subspace $U$. Its wedge is nonzero. Another basis is obtained by an invertible $p$ by $p$ matrix $A$, and its wedge is $\det(A)w$, a nonzero multiple. Thus $U$ determines a unique line of decomposable nonzero vectors. The kernel formula proves that this assignment and the span assignment are inverse. For $p=0$, the empty wedge is $1\in k$ and the unique subspace is $0$; for $p>n$, both sets are empty.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Exterior Algebra]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Independence]]

## Notes

The problem was checked at [S2, Ch. XIX, Exercise 1, printed p. 753, PDF p. 768]. The exterior-basis result is Lang's Proposition 1.1, printed p. 734 / PDF p. 749, and is also derived in the exterior-algebra concept note. The subspace correspondence above is an independent proof. It is a correspondence with decomposable lines, not with every line of the full exterior power.
