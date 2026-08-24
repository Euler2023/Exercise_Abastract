---
title: "Exercise LA275: Positive Spanning and Half Spaces"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - convexity
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Miscellaneous Ex. M.9, printed p. 260, PDF p. 272"
created: 2026-08-24
---

# Exercise LA275: Positive Spanning and Half Spaces

## Problem Statement

> [!question] Miscellaneous Problem M.9
> Let $S=\{v_1,\ldots,v_k\}$ be a finite set of nonzero vectors in a real inner-product space $V$.
>
> **(a)** Show that $S$ is not contained in a closed half space if and only if, for every nonzero $w\in V$, some $v_i$ satisfies $v_i\cdot w<0$.
>
> **(b)** If $S$ is not contained in a closed half space, prove that deleting any one vector leaves a set that spans $V$.
>
> **(c)** Prove that the following conditions are equivalent:
>
> 1. $S$ is not contained in a closed half space.
> 2. Every vector of $V$ is a linear combination of the $v_i$ with positive coefficients.
> 3. The vectors $v_i$ span $V$, and $0$ is a linear combination of them with positive coefficients.

## Hints

> [!hint]- Hint 1
> A closed half space through the origin has the form $\{v:v\cdot w\ge0\}$ for some nonzero $w$.

> [!hint]- Hint 2
> For part (b), if the remaining vectors do not span $V$, choose a nonzero vector orthogonal to their span and change its sign if necessary.

## Solution

> [!success]- Solution
> **(a)** By definition, $S$ lies in a closed half space through the origin exactly when there is a nonzero $w$ such that $v_i\cdot w\ge0$ for every $i$. Negating this statement gives the required equivalence.
>
> **(b)** Delete $v_j$ and suppose the remaining vectors span a proper subspace $W$. Choose $0\ne w\in W^\perp$. After replacing $w$ by $-w$ if necessary, $v_j\cdot w\ge0$, while $v_i\cdot w=0$ for $i\ne j$. Then all of $S$ lies in the closed half space determined by $w$, a contradiction.
>
> **(c)** We use the finite-dimensional supporting-hyperplane theorem: for a finite set $S$, the origin is an interior point of $\operatorname{conv}(S)$ exactly when no nonzero linear functional is nonnegative on all of $S$. By part (a), condition 1 is therefore equivalent to
>
> $$
> 0\in\operatorname{int}(\operatorname{conv}(S)).
> $$
>
> Assume condition 1. Put $b=k^{-1}\sum_i v_i$. For sufficiently small $\varepsilon>0$, the vector $-\varepsilon b$ lies in $\operatorname{conv}(S)$, so
>
> $$
> -\varepsilon b=\sum_i\beta_i v_i,
> \qquad \beta_i\ge0,
> \qquad \sum_i\beta_i=1.
> $$
>
> Hence
>
> $$
> 0=\sum_i\left(\beta_i+\frac{\varepsilon}{k}\right)v_i,
> $$
>
> and every coefficient is positive. Part (b) also shows that $S$ spans $V$, proving condition 3.
>
> Now assume condition 3, say $0=\sum_i p_iv_i$ with every $p_i>0$. Given $x\in V$, write $x=\sum_i a_iv_i$. For sufficiently large $t$ all $a_i+tp_i$ are positive, and
>
> $$
> x=\sum_i(a_i+tp_i)v_i.
> $$
>
> Thus condition 2 holds.
>
> Finally, if condition 2 holds but $S$ lies in a closed half space determined by $0\ne w$, write $-w=\sum_i c_iv_i$ with $c_i>0$. Taking dot products with $w$ gives
>
> $$
> -\lVert w\rVert^2=\sum_i c_i(v_i\cdot w)\ge0,
> $$
>
> a contradiction. Thus condition 2 implies condition 1.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Independence|Linear Independence]]

## Notes

- **External standard input:** The solution of part (c) uses the finite-dimensional supporting-hyperplane theorem. Artin's hint instead suggests an induction; the theorem is stated explicitly here because it is not proved in this exercise note.
- **Source status:** The statement was visually verified at [S1, Ch. 8, M.9, printed p. 260, PDF p. 272]. The proof is independent.
